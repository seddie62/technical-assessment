<script setup lang="ts">
const route: any = useRoute()

const { data, status, error } = useRickAndMortyData<RickAndMorty>(`character/${route.params.id}`)

const { addRickAndMorty } = useRamStore()

function onClick() {
  if (data.value)
    addRickAndMorty(data.value)
}
</script>

<template>
  <app-layout :loading="status === 'pending'" :error="error">
    <div class="p-10 flex space-x-8">
      <div class="border-4 border-pink-600 flex flex-col rounded-lg bg-slate-800 h-auto w-80 relative">
        <header class="p-2  flex items-center bg-pink-950 border-b-4 border-pink-600">
          <Icon name="ph:lightning-fill" class="mr-2 text-xl text-pink-700" />
          <h2 class="font-bold text-lg capitalize text-pink-700">
            <span v-if="!data">...</span>
            <span v-else>

              {{ data.name }}
            </span>
          </h2>
        </header>
        <div class="h-[35ch] px-4 py-0 flex items-center justify-center">
          <NuxtImg v-if="data?.image" class="w-full" :src="data.image" :placeholder="[50, 25, 75, 5]" />
        </div>

        <footer class="flex justify-end p-4 pt-0">
          <UBadge color="pink">
            <span :class="{ 'line-through': data?.status !== 'Alive' }">{{ data?.status }}</span>
          </UBadge>
        </footer>
      </div>

      <div class="space-y-2">
        <h1 class="font-bold text-2xl capitalize text-pink-700">
          {{ data?.name }}
        </h1>
        <p>Gender: {{ data?.gender }}</p>
        <p>Status: {{ data?.status }}</p>
        <p>Species: {{ data?.species }}</p>
        <p>Location: {{ data?.location.name }}</p>

        <UButton color="pink" @click="onClick">
          Add Character
        </UButton>
      </div>
    </div>
  </app-layout>
</template>
