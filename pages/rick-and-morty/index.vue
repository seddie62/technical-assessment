<script setup lang="ts">
const ramStore = useRamStore()
const params = ref({
  search: '',
  page: 1,
})
const currentView = ref(0)

const hasNextPage = computed(() => params.value.page <= ramStore.meta.pages)

const { refresh, status, error } = useAsyncData(
  'rick-and-mortys',
  async () => await ramStore.getData(params.value),
)

function getMoreData() {
  params.value.page++
  refresh()
}

const debouncedSearch = useDebounceFn(() => {
  params.value.page = 1
  refresh()
}, 300)

const tabs = [{
  label: 'List',
  icon: 'i-heroicons-bars-3',
}, {
  label: 'Grid',
  icon: 'i-heroicons-rectangle-group-16-solid',
}]

const comps: any = {
  0: resolveComponent('ram-list'),
  1: resolveComponent('ram-grid'),
}
</script>

<template>
  <div class="space-y-6">
    <div class="flex justify-between p-4">
      <UTabs v-model="currentView" :items="tabs" />
      <UInput
        v-model="params.search"
        size="xl"
        placeholder="Search For Characters..."
        class="w-96"
        :ui="{
          variant: {
            outline: 'shadow-sm placeholder:text-pink-700 dark:text-white ring-4 ring-inset ring-pink-600 dark:ring-pink-600 bg-pink-950 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400',
          },
        }"
        color="pink"
        variant="outline"
        @update:model-value="debouncedSearch"
      />
    </div>
    <app-layout :loading="status === 'pending'" :error="error">
      <component :is="comps[currentView]" :data="ramStore.rickAndMorties" />

      <div class="flex items-center justify-center p-20">
        <UButton :disabled="!hasNextPage" size="xl" @click="getMoreData">
          Load more
        </UButton>
      </div>
    </app-layout>
  </div>
  
</template>
