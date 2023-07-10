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

const { result, loading, variables, refetch } = provideApolloClient(apolloClient)(() =>
  usePostQuery({ postId: (route.params.postId as string) ?? '', profileId: userStore.user?.id })
)

watch(
  () => route.params.postId,
  async (newPostId) => {
    variables.value = { postId: newPostId as string, profileId: userStore.user?.id }
  }
)
</script>

<template>
  <section className="text-gray-600 body-font overflow-hidden w-full">
    <div v-if="loading">Loading post...</div>
    <div v-else-if="result?.post?.edges[0]" className="container px-5 py-24 mx-auto">
      <FeedItem :post="result.post.edges[0].node" />

      <div className="max-w-md">
        <CommentForm
          v-if="userStore.user"
          @new-comment="refetch()"
          :post-id="(route.params.postId as string)"
        />

        <div
          className="mt-10"
          v-for="comment in result.post.edges[0].node.comments?.edges"
          :key="comment.node.id"
        >
          <CommentItem :comment="comment.node" @comment-deleted="refetch()" />
        </div>
      </div>
    </div>
    <div v-else>Ops, something unexpected happened. Try reloading the page.</div>
  </section>
</template>
