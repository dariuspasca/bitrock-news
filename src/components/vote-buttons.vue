<script setup lang="ts">
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { ChevronUp, ChevronDown } from 'lucide-vue-next'
import router from '@/router'
import {
  useDeletePostVoteMutation,
  IVote_Direction,
  useVotePostMutation,
  FeedDocument
} from '@/types/graphql.types'
import { provideApolloClient } from '@vue/apollo-composable'
import apolloClient from '@/libs/apollo-provider'

const props = defineProps<{
  postId: string
  upvotes: number
  downvotes: number
}>()

const userStore = useAuthStore()
const isUpvoted = computed(() => props.upvotes === 1 && !!userStore.user)
const isDownvoted = computed(() => props.downvotes === 1 && !!userStore.user)

function votePost(voteDirection: IVote_Direction) {
  const { mutate: deleteVote } = provideApolloClient(apolloClient)(() =>
    useDeletePostVoteMutation({
      variables: { profileId: userStore.user?.id, postId: props.postId },
      refetchQueries: [{ query: FeedDocument, variables: { profileId: userStore.user?.id } }]
    })
  )
  const { mutate: votePost } = provideApolloClient(apolloClient)(() =>
    useVotePostMutation({
      variables: { profileId: userStore.user?.id, postId: props.postId, voteDirection },
      refetchQueries: [{ query: FeedDocument, variables: { profileId: userStore.user?.id } }]
    })
  )

  if (!userStore.isLoggedIn) {
    router.push('/login')
  }

  if (isUpvoted.value || isDownvoted.value) {
    deleteVote()
  }

  if (
    (!isUpvoted.value && voteDirection === IVote_Direction.Up) ||
    (!isDownvoted.value && voteDirection === IVote_Direction.Down)
  ) {
    votePost()
  }
}
</script>

<template>
  <div className="flex flex-col self-center">
    <button role="button" @click="votePost(IVote_Direction.Up)">
      <ChevronUp
        class="h-4 w-4"
        :strokeWidth="isUpvoted ? 3 : 2"
        :class="isUpvoted && 'stroke text-orange-500'"
      />
    </button>
    <button role="button" @click="votePost(IVote_Direction.Down)">
      <ChevronDown
        class="h-4 w-4"
        :strokeWidth="isDownvoted ? 3 : 2"
        :class="isDownvoted && 'text-orange-500'"
      />
    </button>
  </div>
</template>
@/stores/auth
