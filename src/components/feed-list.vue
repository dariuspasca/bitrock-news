<script setup lang="ts">
import FeedItem from '@/components/feed-item.vue'
import apolloClient from '@/libs/apollo-provider'
import { provideApolloClient } from '@vue/apollo-composable'
import { useAuthStore } from '@/stores/auth'
import { useFeedQuery } from '@/types/graphql.types'

const userStore = useAuthStore()

const { result, loading } = provideApolloClient(apolloClient)(() =>
  useFeedQuery({ profileId: userStore.user?.id ?? null })
)
</script>

<template>
  <div v-if="loading">Loading...</div>
  <div v-else v-for="item in result?.postsCollection?.edges" :key="item.node.id">
    <FeedItem :post="item.node" />
  </div>
</template>
@/stores/auth
