<script setup lang="ts">

</script>

<template>
  <article>
    <header class="flex align-center justify-center border-b-4 border-slate-500 p-8 bg-slate-950 items-center">
      <nuxt-link :to="{ name: 'rick-and-morty' }" class="text-xl">
        Rick and Morty
      </nuxt-link>
      <nuxt-link to="/" class="ml-auto">
        Go back to the home page
      </nuxt-link>
    </header>
    <main>
      <NuxtPage />
    </main>
  </article>
</template>
