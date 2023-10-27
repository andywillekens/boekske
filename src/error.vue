<script setup lang="ts">
  definePageMeta({
    layout: 'default',
    title: 'Error',
    name: 'bk.error'
  })
</script>

<template>
  <h1>Kapot..</h1>
  <NuxtLink :to="{ name: 'bk.home' }">Terug naar home</NuxtLink>
</template>
