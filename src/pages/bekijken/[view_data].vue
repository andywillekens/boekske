<script setup lang="ts">
  definePageMeta({
    layout: 'view',
    title: 'Boekske bekijken',
    name: 'bk.view'
  })
</script>

<template>
  <h1>Preview boek: {{ $route.params.view_data }}</h1>
  <NuxtLink :to="{ name: 'bk.edit', params: { edit_data: $route.params.view_data } }"
    >Bewerken</NuxtLink
  >
</template>
