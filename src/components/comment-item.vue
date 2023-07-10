<script setup lang="ts">
import { computed } from 'vue'
import { timeAgo } from '@/libs/time-ago'
import { useDeleteCommentMutation, type IComment_Fragment } from '@/types/graphql.types'
import { Calendar, UserCircle, Trash } from 'lucide-vue-next'
import { useAuthStore } from '@/stores/auth'
import { provideApolloClient } from '@vue/apollo-composable'
import apolloClient from '@/libs/apollo-provider'
import { notify } from '@/libs/notiwind'

const props = defineProps<{
  comment: IComment_Fragment
}>()

const emit = defineEmits<{
  (e: 'commentDeleted'): void
}>()

const userStore = useAuthStore()
const createdAt = computed(() => timeAgo.format(new Date(props.comment.created_at)))

const { mutate, loading, onDone, onError } = provideApolloClient(apolloClient)(() =>
  useDeleteCommentMutation()
)

onDone(() => {
  emit('commentDeleted')
})

onError((error) => {
  console.error(error)
  notify(
    {
      group: 'bottom',
      title: 'Error',
      text: 'Ops, something unexpexpected happened',
      type: 'error'
    },
    2000
  )
})
</script>

<template>
  <div class="flex space-x-3 py-4">
    <UserCircle class="h-6 w-6" />
    <div class="flex-1 space-y-1">
      <div class="flex items-center justify-between">
        <h3 class="text-sm font-medium">
          <RouterLink
            :to="{ name: 'user', params: { username: props.comment.profiles?.username } }"
            class="text-gray-800 hover:text-orange-500"
          >
            {{ props.comment.profiles?.username }}
          </RouterLink>
        </h3>
        <p class="text-sm text-gray-500">
          <span class="text-gray-800 inline-flex items-center text-sm">
            <Calendar class="mr-1 h-4 w-4" />
            {{ createdAt }}
          </span>
        </p>
      </div>
      <p class="text-sm text-gray-500">
        {{ props.comment.message }}

        <button
          v-if="userStore.user && userStore.user.id === props.comment.profiles?.id"
          type="button"
          class="inline-flex items-center ml-2 p-1 border border-transparent rounded-full shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          @click="mutate({ commentId: props.comment.id })"
          :disabled="loading"
        >
          <Trash class="h-2 w-2" />
        </button>
      </p>
    </div>
  </div>
</template>
