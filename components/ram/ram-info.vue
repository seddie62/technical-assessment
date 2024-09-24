<script setup lang="ts">
defineProps<{
  data: RickAndMorty | null
}>()
</script>

<template>
  <div class="border-4 border-pink-600 flex flex-col justify-between rounded-lg bg-slate-800 h-full relative">
    <header class="p-2  flex items-center bg-pink-950 border-b-4 border-pink-600">
      <Icon name="ph:lightning-fill" class="mr-2 text-xl text-pink-700" />
      <h2 class="font-bold text-lg capitalize text-pink-700">
        <span v-if="!data">...</span>
        <span v-else>

          {{ data.name }}
        </span>
      </h2>
    </header>
    <div class="p-2 text-sm">
      <p>Species: {{ data?.species }}</p>
    </div>
    <div class="h-[25ch] flex items-center justify-center">
      <NuxtImg v-if="data?.image" :src="data.image" :placeholder="[50, 25, 75, 5]" />
    </div>
    <footer class="flex justify-end pb-2 pr-2">
      <UButton v-if="data?.id" color="pink" :to="`rick-and-morty/${data.id}`" class="ml-auto">
        Read more
      </UButton>
    </footer>
  </div>
</template>
