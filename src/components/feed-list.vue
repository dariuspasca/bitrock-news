<script lang="ts">
import FeedItem from '@/components/feed-item.vue'
import { useFeedQuery } from '@/types/graphql.types'

export default {
  name: 'FeedList',
  components: { FeedItem },
  setup() {
    const { result, loading, error } = useFeedQuery()

    return {
      result,
      loading,
      error
    }
  }
}
</script>

<template>
  <div v-if="loading">Loading...</div>
  <div v-else v-for="item in result?.postsCollection?.edges" :key="item.node.id">
    <FeedItem :post="item.node" />
  </div>
</template>
