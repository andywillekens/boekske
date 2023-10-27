<script setup lang="ts">
  type Book = {
    title: string
    chapters: Chapter[]
    pages: Page[]
  }

  type Page = {
    id: number
    chapter: number
    paragraphs: Paragraph[]
  }

  type Chapter = {
    id: number
    startNumber: number
    title: string
  }

  type Paragraph = {
    id: number
    title: string
    paragraph: string
  }

  const bookTemplate = ref({
    title: 'Mijn boek',
    chapters: [
      {
        id: 0,
        startNumber: 0,
        title: 'Hoofdstuk 1'
      },
      {
        id: 1,
        startNumber: 0,
        title: 'Hoofdstuk 2'
      }
    ],
    pages: [
      {
        id: 0,
        chapter: 0,
        paragraphs: [
          {
            id: 0,
            title: '',
            paragraph:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eius harum. Nobis, dicta! Dignissimos harum eius architecto. Illo animi temporibus fugiat cum similique, doloribus iusto deleniti dolorem, assumenda exercitationem numquam. '
          },
          {
            id: 1,
            title: '',
            paragraph:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eius harum. Nobis, dicta! Dignissimos harum eius architecto. Illo animi temporibus fugiat cum similique, doloribus iusto deleniti dolorem, assumenda exercitationem numquam. '
          },
          {
            id: 2,
            title: '',
            paragraph:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eius harum. Nobis, dicta! Dignissimos harum eius architecto. Illo animi temporibus fugiat cum similique, doloribus iusto deleniti dolorem, assumenda exercitationem numquam. '
          }
        ]
      }
    ]
  } as Book)

  const bookJSON = JSON.stringify(bookTemplate.value)
  const bookURL = compressToBase64(bookJSON)

  definePageMeta({
    layout: 'default',
    title: 'Home',
    name: 'bk.home'
  })
</script>

<template>
  <h1>Boekske maken?</h1>
  <NuxtLink :to="{ name: 'bk.edit', params: { edit_data: bookURL } }">Start hier</NuxtLink>
</template>
