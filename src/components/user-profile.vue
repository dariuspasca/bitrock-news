<script setup lang="ts">
import { ref, watch, type Ref } from 'vue'
import { useRoute } from 'vue-router'
import apolloClient from '@/libs/apollo-provider'
import { provideApolloClient } from '@vue/apollo-composable'
import FeedItem from './feed-item.vue'
import { UserCircle, Edit } from 'lucide-vue-next'
import {
  useUserProfileQuery,
  type IUser_Fragment,
  type IFeed_PostFragment
} from '@/types/graphql.types'
import { useAuthStore } from '@/stores/auth'

const route = useRoute()
const userStore = useAuthStore()

const profile: Ref<IUser_Fragment | undefined> = ref(undefined)
const latestPosts: Ref<IFeed_PostFragment[] | undefined> = ref(undefined)

const { loading, onResult, variables } = provideApolloClient(apolloClient)(() =>
  useUserProfileQuery({ username: (route.params.username as string) ?? '' })
)

onResult((queryResult) => {
  profile.value = queryResult.data?.profilesCollection?.edges[0].node
  latestPosts.value = queryResult.data?.profilesCollection?.edges[0]?.node.latestPosts?.edges.map(
    (edge) => ({ ...edge.node })
  )
})

watch(
  () => route.params.username,
  async (newUsername) => {
    variables.value = { username: newUsername as string }
  }
)
</script>

<template>
  <div v-if="loading">Loading profile...</div>
  <section v-else-if="profile" class="body-font overflow-hidden text-gray-600">
    <div class="container mx-auto px-5 py-24 pt-10">
      <div class="flex items-center justify-between mb-5">
        <h1 class="text-xl font-semibold tracking-tight">Profile</h1>
        <RouterLink
          v-if="userStore.user?.username === route.params.username"
          to="/account"
          class="inline-flex items-center text-xs text-gray-400 hover:text-gray-900"
        >
          <Edit class="mr-1 inline-block h-3 w-3" />
          Edit
        </RouterLink>
      </div>
      <div><span class="inline-block w-20 pr-2 font-bold">User</span>{{ profile.username }}</div>
      <div>
        <span class="inline-block w-20 pr-2 font-bold"> Avatar </span>
        <UserCircle class="mr-1 inline-block h-6 w-6" />
      </div>
      <div class="mb-10">
        <span class="inline-block w-20 pr-2 font-bold">Bio</span>
        {{ profile.bio }}
      </div>
      <h1 class="mb-5 text-xl font-semibold tracking-tight">Latest Posts</h1>
      <div v-if="latestPosts?.length">
        <div v-for="item in latestPosts" :key="item.id">
          <FeedItem :post="item" />
        </div>
      </div>
      <div v-else><h2>No posts</h2></div>
    </div>
  </section>
</template>
