<script setup lang="ts">
defineProps<{
  data: RickAndMorty[]
}>()

const columns = [{
  key: 'name',
  label: 'Character name',
}, {
  key: 'species',
  label: 'Species',
}, {
  key: 'actions',
}]
</script>

<template>
  <div class="p-4">
    <UTable :columns="columns" :rows="data">
      <template #name-data="{ row }">
        <div class="flex items-center gap-2">
          <UAvatar
            :src="row.image"
            :alt="row.name"
          />
          <span>{{ row.name }}</span>
        </div>
      </template>
      <template #actions-data="{ row }">
        <UButton color="pink" :to="{ name: 'rick-and-morty-id', params: { id: String(row.id) } }">
          Read More
        </UButton>
      </template>
    </UTable>
  </div>
</template>
