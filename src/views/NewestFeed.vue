<script setup lang="ts">
import FeedList from '@/components/feed-list.vue'
import { IOrderByDirection } from '@/types/graphql.types'
</script>

<template>
  <section class="body-font w-full overflow-hidden text-gray-600">
    <div class="container mx-auto px-3 py-10">
      <FeedList :order-by="[{ created_at: IOrderByDirection.DescNullsFirst }]" />
    </div>
  </section>
</template>
