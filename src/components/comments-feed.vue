<script setup lang="ts">
import CommentItem from '@/components/comment-item.vue'
import apolloClient from '@/libs/apollo-provider'
import { useCommentsFeedQuery } from '@/types/graphql.types'
import { provideApolloClient } from '@vue/apollo-composable'

const { result, loading, fetchMore } = provideApolloClient(apolloClient)(() =>
  useCommentsFeedQuery({}, { notifyOnNetworkStatusChange: true })
)

function fetchNextPage() {
  fetchMore({
    variables: {
      after: result.value?.comments?.pageInfo.endCursor
    },
    updateQuery: (previousResult, { fetchMoreResult }) => {
      // No new feed posts
      if (!fetchMoreResult) return previousResult

      // Concat previous feed with new feed posts
      return {
        ...previousResult,
        ...fetchMoreResult,
        comments: {
          ...previousResult.comments!,
          ...fetchMoreResult.comments,
          edges: [...previousResult.comments!.edges, ...fetchMoreResult.comments!.edges]
        }
      }
    }
  })
}
</script>

<template>
  <section class="body-font w-full overflow-hidden text-gray-600">
    <div class="container mx-auto px-3 py-2">
      <CommentItem
        className="mt-10"
        v-for="comment in result?.comments?.edges"
        :key="comment.node.id"
        :comment="comment.node"
      />
      <button
        v-if="result?.comments?.pageInfo.hasNextPage"
        type="submit"
        class="bg-orange-500 hover:bg-orange-600/90 text-white py-1 px-3 rounded text-xs mt-8"
        @click="fetchNextPage"
        :disabled="loading"
      >
        {{ loading ? 'Loading...' : 'Load more' }}
      </button>
    </div>
  </section>
</template>
