<script setup lang="ts">
import { RouterView } from 'vue-router'
import { provideApolloClient } from '@vue/apollo-composable'
import MainNav from '@/components/main-nav.vue'
import NotificationToast from '@/components/notification-toast.vue'
import { useUserStore } from '@/stores/user'
import { NotificationGroup } from '@/libs/notiwind'
import supabase from '@/libs/supabase-client'
import apolloClient from '@/libs/apollo-provider'
import { useUserProfileQuery } from '@/types/graphql.types'

const userStore = useUserStore()

supabase.auth.onAuthStateChange(async (_, session) => {
  const { refetch, onResult } = provideApolloClient(apolloClient)(() =>
    useUserProfileQuery({ id: session?.user.id ?? null })
  )

  if (session) {
    refetch()
  }

  onResult((queryResult) => {
    const user = queryResult.data?.profilesCollection?.edges[0]?.node

    if (user) {
      userStore.logIn(user)
    }
  })
})
</script>

<template>
  <NotificationGroup group="bottom" position="bottom">
    <div
      class="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex items-start justify-end p-6 px-4 py-6"
    >
      <div class="w-full max-w-sm"><NotificationToast /></div>
    </div>
  </NotificationGroup>
  <MainNav />
  <main class="flex-column mx-auto flex min-h-screen max-w-screen-md flex-1 px-4 py-0">
    <RouterView />
  </main>
</template>
