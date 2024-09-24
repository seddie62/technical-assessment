<script setup lang="ts">
import type { NuxtError } from '#app'

withDefaults(defineProps<{
  loading: boolean
  error: NuxtError | null
}>(), {
  loading: false, // Default value for loading
})
</script>

<template>
  <section>
    <!-- loading -->
    <div v-if="loading && !error" class="h-full min-h-96 flex flex-col items-center justify-center space-y-4">
      <svg class="animate-spin -ml-1 mr-3 h-12 w-12 text-pink-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
      <p class="text-pink-700 font-bold text-2xl">
        Loading ...
      </p>
    </div>
    <!-- error -->
    <div v-else-if="!loading && error" class="h-full min-h-96 flex flex-col items-center justify-center space-y-4">
      <p class="text-center text-red-500 py-">
        {{ error }}
      </p>
    </div>
    <div v-else>
      <slot />
    </div>
  </section>
</template>
