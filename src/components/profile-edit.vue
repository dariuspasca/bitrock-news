<script setup lang="ts">
import { ref, type Ref } from 'vue'
import apolloClient from '@/libs/apollo-provider'
import supabase from '@/libs/supabase-client'
import { useUserProfileQuery } from '@/types/graphql.types'
import { provideApolloClient } from '@vue/apollo-composable'
import { useUpdateProfileMutation } from '@/types/graphql.types'
import { notify } from '@/libs/notiwind'

const profileId: Ref<string | null> = ref(null)
const username: Ref<string | undefined> = ref(undefined)
const bio: Ref<string | undefined> = ref(undefined)
const errorMessage: Ref<string | undefined> = ref(undefined)

supabase.auth.getSession().then((res) => (profileId.value = res.data.session?.user.id ?? null))
const { onResult, refetch } = provideApolloClient(apolloClient)(() =>
  useUserProfileQuery({ profileId })
)
const { mutate, loading, onDone, onError } = provideApolloClient(apolloClient)(() =>
  useUpdateProfileMutation()
)

onResult((queryResult) => {
  username.value = queryResult.data?.profilesCollection?.edges[0].node.username ?? ''
  bio.value = queryResult.data?.profilesCollection?.edges[0].node.bio ?? ''
})

onDone(() => {
  if (errorMessage.value) errorMessage.value = undefined
  notify(
    {
      group: 'bottom',
      title: 'Success',
      text: 'Profile updated',
      type: 'success'
    },
    2000
  )
  refetch()
})

onError((error) => {
  if (error.message === 'duplicate key value violates unique constraint "profiles_username_key"') {
    errorMessage.value = 'Username already taken'
  } else {
    errorMessage.value = 'Ops, something unexpected happened. Try again'
  }
  notify(
    {
      group: 'bottom',
      title: 'Error',
      text: 'Profile not updated',
      type: 'error'
    },
    2000
  )
  refetch()
})

function updateProfile() {
  mutate({ profileId: profileId.value, username: username.value, bio: bio.value })
}
</script>

<template>
  <form class="container mx-auto max-w-md px-5 py-24" v-on:submit.prevent="updateProfile">
    <h1 class="mb-5 text-xl font-semibold tracking-tight">Account</h1>
    <div class="mb-4">
      <label htmlFor="username" class="mb-2 block">Username</label>
      <input class="w-full" autocomplete="off" id="username" type="text" v-model.trim="username" />
    </div>

    <div class="mb-2">
      <label htmlFor="bio" class="mb-2 block">Bio</label>
      <textarea
        id="bio"
        class="w-full rounded-sm border-2 border-solid border-gray-100"
        v-model="bio"
      />
    </div>
    <p v-show="errorMessage" class="text-red-500 text-xs mb-4">{{ errorMessage }}</p>
    <button
      type="submit"
      :disabled="loading"
      class="bg-orange-500 hover:bg-orange-600/90 text-white py-1 px-3 rounded text-xs"
    >
      {{ loading ? 'Saving...' : 'Save' }}
    </button>
  </form>
</template>
