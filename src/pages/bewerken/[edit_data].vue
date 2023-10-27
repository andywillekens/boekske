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

  const updatedBookUrl = computed(() => {
    const bookJSON = JSON.stringify(book.value)
    return compressToBase64(bookJSON)
  })

  const updateData = () => {
    router.push({
      name: 'bk.edit',
      params: { edit_data: updatedBookUrl.value }
    })
  }
</script>

<template>
  <h1>{{ book.title }} Bewerken</h1>

  <FormKit
    v-model="book.title"
    @blur="updateData"
    type="text"
    label="De titel"
    :validation-messages="{
      required: 'Titel is verplicht'
    }"
    validation="required" />

  <NuxtLink :to="{ name: 'bk.view', params: { view_data: route.params.edit_data } }"
    >Bekijken</NuxtLink
  >
</template>
