<script setup lang="ts">
import BitrockLogo from '@/components/bitrock-logo.vue'
import { useAuthStore } from '@/stores/auth'

const userStore = useAuthStore()
</script>

<template>
  <header class="body-font mx-auto max-w-screen-md text-gray-600">
    <div class="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
      <RouterLink
        to="/"
        class="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0"
      >
        <bitrock-logo :height="24" />
        <span class="ml-3 text-xl">bitnews</span>
      </RouterLink>
      <nav
        class="flex flex-wrap items-center justify-center text-base md:ml-4 md:mr-auto md:border-l md:border-gray-400 md:py-1 md:pl-4"
      >
        <RouterLink to="/" class="mr-5 text-gray-400 hover:text-gray-900" v-slot="{ isActive }"
          ><span :class="{ 'text-black': isActive }">feed</span></RouterLink
        >
        <RouterLink
          to="/newest"
          class="mr-5 text-gray-400 hover:text-gray-900"
          v-slot="{ isActive }"
        >
          <span :class="{ 'text-black': isActive }">newest</span>
        </RouterLink>
      </nav>
      <RouterLink
        v-if="!userStore.user"
        to="/login"
        class="mt-4 inline-flex items-center text-sm text-gray-400 hover:text-gray-900 md:mr-5 md:mt-0"
      >
        login
      </RouterLink>
      <div v-else class="flex gap-4">
        <RouterLink
          :to="{ name: 'user', params: { username: userStore.user.username } }"
          class="mt-4 inline-flex items-center text-sm text-gray-400 hover:text-gray-900 md:mr-5 md:mt-0"
        >
          {{ userStore.user.username }}
        </RouterLink>
        <button
          class="mt-4 inline-flex items-center text-sm text-gray-400 hover:text-gray-900 md:mr-5 md:mt-0"
          @click="userStore.logOut()"
        >
          Logout
        </button>
      </div>
    </div>
  </header>
</template>
@/stores/auth
