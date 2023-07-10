<script setup lang="ts">
const props = defineProps<{
  show: Boolean
}>()
</script>

<template>
  <Transition name="modal">
    <div
      v-if="props.show"
      class="fixed top-0 left-0 z-30 flex h-full w-full bg-zinc-700/[0.60] transition-opacity"
    >
      <div
        class="m-auto w-10/12 rounded-md bg-gray-100 px-6 py-4 shadow-md transition-all md:mt-36 md:w-[500px]"
      >
        <div>
          <slot name="header"></slot>
        </div>

        <div class="my-4">
          <slot name="body"></slot>
        </div>

        <div class="mt-4">
          <slot name="footer"> </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>
