<script setup lang="ts">
defineProps<{
  data: RickAndMorty[]
}>()
</script>

<template>
  <ul v-if="data" class="grid lg:grid-cols-4 xl:grid-cols-6 gap-8 p-4">
    <li v-for="ram in data" :key="ram.id">
      <ram-info :data="ram" />
    </li>
  </ul>
</template>
