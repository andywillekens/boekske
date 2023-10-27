<script setup lang="ts">
  definePageMeta({
    layout: 'default',
    title: 'Home',
    name: 'bk.home'
  })

  const bookTemplate = ref({
    title: 'Boekje',
    pages: [{ id: 1, title: 'Pagina 1', content: [{ type: 'p', text: 'Dit is een paragraaf' }] }]
  })

  const bookJSON = JSON.stringify(bookTemplate.value)
  console.log(bookJSON)
  const bookURL = compressToBase64(bookJSON)
</script>

<template>
  <h1>Boekske maken?</h1>
  <!-- <pre>{{ decompressed }}</pre> -->
  <NuxtLink :to="{ name: 'bk.edit', params: { edit_data: bookURL } }">Start hier</NuxtLink>
</template>
