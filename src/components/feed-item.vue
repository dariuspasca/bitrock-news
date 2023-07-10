<script setup lang="ts">
import { computed, ref } from 'vue'
import { Calendar, MessageCircle, Rocket, UserCircle, Trash } from 'lucide-vue-next'
import ModalDialog from './modal-dialog.vue'
import VoteButtons from '@/components/vote-buttons.vue'
import { useDeletePostMutation, type IFeed_PostFragment } from '@/types/graphql.types'
import { timeAgo } from '@/libs/time-ago'
import { provideApolloClient } from '@vue/apollo-composable'
import apolloClient from '@/libs/apollo-provider'
import { notify } from '@/libs/notiwind'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const props = defineProps<{
  post: IFeed_PostFragment
}>()

const userStore = useAuthStore()
const router = useRouter()
const showConfirmDelete = ref(false)
const createdAt = computed(() => timeAgo.format(new Date(props.post.created_at)))

const { mutate, loading, onDone, onError } = provideApolloClient(apolloClient)(() =>
  useDeletePostMutation()
)

onDone(() => {
  showConfirmDelete.value = false
  router.go(0)
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
  <div class="mb-8 flex flex-wrap border-b-2 border-gray-100 py-1 md:flex-nowrap">
    <div class="mr-3 pt-4">
      <VoteButtons
        :postId="props.post.id"
        :upvotes="props.post.upVoteByViewer?.totalCount ?? 0"
        :downvotes="props.post.downVoteByViewer?.totalCount ?? 0"
      />
    </div>
    <div class="flex-1 md:flex-grow">
      <a :href="props.post.url ?? ''" rel="noopener noreferrer" target="_blank">
        <h2 class="title-font mb-1 text-2xl font-medium text-gray-900 hover:text-orange-500">
          {{ props.post.title }}
        </h2>
      </a>

      <div class="mt-auto flex w-full flex-wrap items-center border-gray-100 pb-4">
        <span
          class="mr-3 inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm text-gray-400"
        >
          <Rocket class="mr-1 h-4 w-4" />
          {{ props.post.score }} points
        </span>
        <RouterLink
          :to="{ name: 'post', params: { postId: props.post.id } }"
          class="mr-3 inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm text-gray-400 hover:text-orange-400"
        >
          <MessageCircle class="mr-1 h-4 w-4" />
          {{ props.post.commentsCollection?.totalCount ?? 0 }}
          {{ props.post.commentsCollection?.totalCount !== 1 ? 'comments' : 'comment' }}
        </RouterLink>
        <RouterLink
          :to="{ name: 'user', params: { username: props.post.profile?.username } }"
          className="text-gray-400 hover:text-orange-400 mr-3 inline-flex items-center text-sm pr-3 py-1 border-r-2 border-gray-200"
        >
          <UserCircle class="mr-1 inline-block h-4 w-4" />

          {{ props.post.profile?.username }}
        </RouterLink>
        <RouterLink
          :to="{ name: 'post', params: { postId: props.post.id } }"
          class="mr-3 inline-flex items-center py-1 pr-3 text-sm text-gray-400 hover:text-orange-400"
        >
          <Calendar class="w-4 h-4 mr-1" />
          {{ createdAt }}
        </RouterLink>
        <button
          v-if="userStore.user && userStore.user.id === props.post.profile?.id"
          className="text-gray-400 hover:text-orange-400 inline-flex items-center text-sm pl-3 ml-3 border-l-2 border-gray-200"
          @click="showConfirmDelete = true"
        >
          <Trash class="h-4 w-4 mr-1" />
          Delete
        </button>
      </div>
      <ModalDialog :show="showConfirmDelete">
        <template #header>Do you want to delete your post?</template>
        <template #body>Deleting you post cannot be reverted</template>
        <template #footer>
          <div class="flex gap-4">
            <button
              type="button"
              class="bg-gray-100 hover:bg-gray-800 hover:text-white text-gray border-gray-900 border py-1 px-3 rounded text-xs"
              @click="showConfirmDelete = false"
              :disabled="loading"
            >
              Cancel
            </button>
            <button
              type="button"
              class="bg-orange-500 hover:bg-orange-600/90 text-white py-1 px-3 rounded text-xs"
              @click="mutate({ postId: props.post.id })"
              :disabled="loading"
            >
              Confirm
            </button>
          </div>
        </template>
      </ModalDialog>
    </div>
  </div>
</template>
