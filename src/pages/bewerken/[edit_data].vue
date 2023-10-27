<script setup lang="ts">
  definePageMeta({
    layout: 'edit',
    title: 'Boekske maken',
    name: 'bk.edit'
  })
</script>

<template>
  <h1>Edit boek: {{ $route.params.edit_data }}</h1>
  <NuxtLink :to="{ name: 'bk.view', params: { view_data: $route.params.edit_data } }"
    >Bekijken</NuxtLink
  >
</template>
