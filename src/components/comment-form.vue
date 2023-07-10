<script setup lang="ts">
import { computed, ref, type Ref } from 'vue'
import apolloClient from '@/libs/apollo-provider'
import { useSubmitCommentMutation } from '@/types/graphql.types'
import { provideApolloClient } from '@vue/apollo-composable'
import { useAuthStore } from '@/stores/auth'

const props = defineProps<{
  postId: string
}>()

const emit = defineEmits<{
  (e: 'newComment'): void
}>()

const userStore = useAuthStore()

const comment: Ref<string | undefined> = ref(undefined)
const errorMessage: Ref<string | undefined> = ref(undefined)

const { mutate, loading, onDone, onError } = provideApolloClient(apolloClient)(() =>
  useSubmitCommentMutation()
)

function submitComment() {
  const newComment = comment.value?.replace(/^\s+|\s+$/g, '') ?? ''
  if (newComment === '') {
    errorMessage.value = 'Insert a comment first.'
  } else {
    mutate({ postId: props.postId, profileId: userStore.user?.id, message: newComment })
  }
}

onDone(() => {
  emit('newComment')
  errorMessage.value = undefined
})

onError((error) => {
  errorMessage.value = error.message
})
</script>

<template>
  <form v-on:submit.prevent="submitComment">
    <div class="mb-2 font-bold">
      <label htmlFor="comment" class="mb-2 block">Write comment</label>
      <textarea
        id="comment"
        class="w-full rounded-sm border-2 border-solid border-gray-100"
        v-model="comment"
      />
    </div>
    <p v-show="errorMessage" class="text-red-500 text-xs mb-4">{{ errorMessage }}</p>
    <button
      type="submit"
      :disabled="loading"
      class="bg-orange-500 hover:bg-orange-600/90 text-white py-1 px-3 rounded text-xs"
    >
      {{ loading ? 'saving...' : 'add comment' }}
    </button>
  </form>
</template>
