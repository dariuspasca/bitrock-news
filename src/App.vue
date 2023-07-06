<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainNav from './components/main-nav.vue'
</script>

<template>
  <MainNav />
  <main class="flex-column mx-auto flex min-h-screen max-w-screen-md flex-1 px-4 py-0">
    <RouterView />
  </main>
</template>
