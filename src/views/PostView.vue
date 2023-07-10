<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import apolloClient from '@/libs/apollo-provider'
import { usePostQuery } from '@/types/graphql.types'
import { provideApolloClient } from '@vue/apollo-composable'
import { useAuthStore } from '@/stores/auth'
import FeedItem from '@/components/feed-item.vue'
import CommentItem from '@/components/comment-item.vue'
import CommentForm from '@/components/comment-form.vue'

const route = useRoute()
const userStore = useAuthStore()

const { result, loading, variables, refetch, fetchMore } = provideApolloClient(apolloClient)(() =>
  usePostQuery(
    { postId: (route.params.postId as string) ?? '', profileId: userStore.user?.id },
    { notifyOnNetworkStatusChange: true }
  )
)

function fetchNextPage() {
  fetchMore({
    variables: {
      commentCursor: result.value?.post?.edges[0].node.comments?.pageInfo.endCursor
    },
    updateQuery: (previousResult, { fetchMoreResult }) => {
      // No new feed posts
      if (!fetchMoreResult) return previousResult

      // Concat previous feed with new feed posts
      return {
        ...previousResult,
        ...fetchMoreResult,
        post: {
          ...previousResult.post!,
          ...fetchMoreResult.post,
          edges: [
            {
              ...previousResult.post!.edges[0],
              ...fetchMoreResult.post?.edges[0],
              node: {
                ...previousResult.post!.edges[0].node,
                ...fetchMoreResult.post?.edges[0].node,
                comments: {
                  ...previousResult.post!.edges[0].node.comments!,
                  ...fetchMoreResult.post?.edges[0].node.comments,
                  edges: [
                    ...previousResult.post!.edges[0].node.comments!.edges,
                    ...fetchMoreResult.post!.edges[0].node.comments!.edges
                  ]
                }
              }
            }
          ]
        }
      }
    }
  })
}

watch(
  () => route.params.postId,
  async (newPostId) => {
    variables.value = { postId: newPostId as string, profileId: userStore.user?.id }
  }
)
</script>

<template>
  <section className="text-gray-600 body-font overflow-hidden w-full">
    <div v-if="loading && !result">Loading post...</div>
    <div v-else-if="result?.post?.edges[0]" className="container px-5 py-24 mx-auto">
      <FeedItem :post="result.post.edges[0].node" />

      <div className="max-w-md">
        <CommentForm
          v-if="userStore.user"
          @new-comment="refetch()"
          :post-id="(route.params.postId as string)"
        />

        <CommentItem
          className="mt-10"
          v-for="comment in result.post.edges[0].node.comments?.edges"
          :key="comment.node.id"
          :comment="comment.node"
          @comment-deleted="refetch()"
        />
      </div>
      <button
        v-if="result?.post?.edges[0].node.comments?.pageInfo.hasNextPage"
        type="submit"
        class="bg-orange-500 hover:bg-orange-600/90 text-white py-1 px-3 rounded text-xs mt-8"
        @click="fetchNextPage"
        :disabled="loading"
      >
        {{ loading ? 'Loading...' : 'Load more' }}
      </button>
    </div>
    <div v-else>Ops, something unexpected happened. Try reloading the page.</div>
  </section>
</template>
