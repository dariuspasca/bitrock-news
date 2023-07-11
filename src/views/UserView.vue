<script setup lang="ts">
import UserProfile from '@/components/user-profile.vue'
import { onBeforeRouteUpdate } from 'vue-router'

onBeforeRouteUpdate(async (to, from) => {
  // only fetch the user if the id changed as maybe only the query or the hash changed
  document.title = 'Hi'
})
</script>

<template>
  <div class="w-full">
    <UserProfile />
  </div>
</template>
