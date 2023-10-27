<script setup lang="ts">
  definePageMeta({
    layout: 'default',
    title: 'Home',
    name: 'bk.home'
  })
</script>

<template>
  <h1>Boekske maken?</h1>
  <NuxtLink :to="{ name: 'bk.edit', params: { edit_data: 'testing123' } }">Start hier</NuxtLink>
</template>
