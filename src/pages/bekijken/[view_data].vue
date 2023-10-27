<script setup lang="ts">
  definePageMeta({
    layout: 'view',
    title: 'Boekske bekijken',
    name: 'bk.view'
  })

  const route = useRoute()

  const getDataFromURL = decompressFromBase64(route.params.view_data)
  const book = JSON.parse(getDataFromURL)
</script>

<template>
  <h1>Preview boek: {{ book.title }}</h1>
  <pre>{{ book }}</pre>
  <NuxtLink :to="{ name: 'bk.edit', params: { edit_data: $route.params.view_data } }"
    >Bewerken</NuxtLink
  >
</template>
