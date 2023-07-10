<script setup lang="ts">
import FeedItem from '@/components/feed-item.vue'
import apolloClient from '@/libs/apollo-provider'
import { provideApolloClient } from '@vue/apollo-composable'
import { useAuthStore } from '@/stores/auth'
import { useFeedQuery } from '@/types/graphql.types'

const userStore = useAuthStore()

const { result, loading, fetchMore } = provideApolloClient(apolloClient)(() =>
  useFeedQuery({ profileId: userStore.user?.id ?? null }, { notifyOnNetworkStatusChange: true })
)

function fetchNextPage() {
  fetchMore({
    variables: {
      after: result.value?.postsCollection?.pageInfo.endCursor
    },
    updateQuery: (previousResult, { fetchMoreResult }) => {
      // No new feed posts
      if (!fetchMoreResult) return previousResult

      // Concat previous feed with new feed posts
      return {
        ...previousResult,
        ...fetchMoreResult,
        postsCollection: {
          ...previousResult.postsCollection!,
          ...fetchMoreResult.postsCollection,
          edges: [
            ...previousResult.postsCollection!.edges,
            ...fetchMoreResult.postsCollection!.edges
          ]
        }
      }
    }
  })
}
</script>

<template>
  <div v-if="loading && !result">Loading feed...</div>
  <FeedItem
    v-else-if="result?.postsCollection?.edges.length"
    v-for="item in result?.postsCollection?.edges"
    :key="item.node.id"
    :post="item.node"
  />

  <div
    v-if="result?.postsCollection?.pageInfo.hasNextPage"
    class="flex justify-center content-center"
  >
    <button
      type="submit"
      class="bg-orange-500 hover:bg-orange-600/90 text-white py-1 px-3 rounded text-xs"
      @click="fetchNextPage"
      :disabled="loading"
    >
      {{ loading ? 'Loading...' : 'Load more' }}
    </button>
  </div>
</template>
@/stores/auth
