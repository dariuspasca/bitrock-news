<script setup lang="ts">
import { ref, type Ref } from 'vue'
import apolloClient from '@/libs/apollo-provider'
import { FeedDocument, useSubmitPostMutation } from '@/types/graphql.types'
import { provideApolloClient } from '@vue/apollo-composable'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const userStore = useAuthStore()

const title: Ref<string | null> = ref(null)
const url: Ref<string | undefined> = ref(undefined)
const errorMessage: Ref<string | undefined> = ref(undefined)

const { mutate, loading, onDone, onError } = provideApolloClient(apolloClient)(() =>
  useSubmitPostMutation()
)

function submitPost() {
  mutate(
    { profileId: userStore.user?.id, title: title.value, url: url.value },
    { refetchQueries: [{ query: FeedDocument, variables: { profileId: userStore.user?.id } }] }
  )
}

onDone(() => {
  router.push('/')
})

onError((error) => {
  errorMessage.value = error.message
})
</script>

<template>
  <form class="container mx-auto max-w-md px-5 py-4" v-on:submit.prevent="submitPost">
    <h1 class="mb-5 text-xl font-semibold tracking-tight">Submit</h1>
    <div class="mb-4">
      <label htmlFor="username" class="mb-2 block">Title</label>
      <input
        class="w-full border border-gray-200 rounded-sm"
        autocomplete="off"
        id="username"
        type="text"
        v-model.trim="title"
      />
    </div>

    <div class="mb-2">
      <label htmlFor="url" class="mb-2 block">Url</label>
      <input
        class="w-full border border-gray-200 rounded-sm"
        autocomplete="off"
        id="url"
        type="text"
        v-model.trim="url"
      />
    </div>
    <p v-show="errorMessage" class="text-red-500 text-xs mb-4">{{ errorMessage }}</p>
    <button
      type="submit"
      :disabled="loading"
      class="bg-orange-500 hover:bg-orange-600/90 text-white py-1 px-3 rounded text-xs"
    >
      {{ loading ? 'Submiting...' : 'Submit' }}
    </button>
  </form>
</template>
