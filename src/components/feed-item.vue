<script setup lang="ts">
import { computed } from 'vue'
import { Calendar, MessageCircle, Rocket, UserCircle } from 'lucide-vue-next'
import VoteButtons from '@/components/vote-buttons.vue'
import { type IFeed_PostFragment } from '@/types/graphql.types'
import { timeAgo } from '@/libs/time-ago'

const props = defineProps<{
  post: IFeed_PostFragment
}>()

const createdAt = computed(() => timeAgo.format(new Date(props.post.created_at)))
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
          <Calendar class="mr-1 h-4 w-4" />
          {{ createdAt }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>
