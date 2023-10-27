<script setup lang="ts">
  definePageMeta({
    layout: 'edit',
    title: 'Boekske maken',
    name: 'bk.edit'
  })

  const route = useRoute()
  const router = useRouter()

  const getDataFromURL = decompressFromBase64(route.params.edit_data)
  const book = ref(JSON.parse(getDataFromURL))

  const updateBook = (event: any) => {
    book.value = JSON.parse(event.target.innerText)
  }

  const updatedBookUrl = computed(() => {
    const bookJSON = JSON.stringify(book.value)
    return compressToBase64(bookJSON)
  })

  watch(updatedBookUrl, (newUrl) => {
    router.push({
      name: 'bk.edit',
      params: { edit_data: newUrl }
    })
  })
</script>

<template>
  <h1>Edit boek: {{ book.title }}</h1>
  {{ book }}
  <pre @blur="updateBook($event)" contenteditable="true" spellcheck="false">{{ book }}</pre>
  <NuxtLink :to="{ name: 'bk.view', params: { view_data: route.params.edit_data } }"
    >Bekijken</NuxtLink
  >
</template>
