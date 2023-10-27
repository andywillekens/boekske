<script setup lang="ts">
  definePageMeta({
    layout: 'edit',
    title: 'Boekske maken',
    name: 'bk.edit'
  })

  const bookOpen = ref(false)

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

  useHead({
    titleTemplate: `%s | maken`
  })
</script>

<template>
  <!-- <header class="fixed t-0">
    <BookTitle :title="book.title" v-model="book.title" />
  </header> -->
  <main class="w-full h-full flex justify-center items-center">
    <!-- Book container -->
    <div class="w-full max-w-[1408px] h-auto grid grid-cols-2 perspective-[1px]">
      <!-- Cover -->
      {{ bookOpen }}
      <div
        class="w-full h-[800px] bg-red-950 rounded-r-3xl rounded-l-md col-span-1 col-start-2 transition-all origin-left -rotate-y-12"
        :class="[bookOpen ? '-rotate-y-180' : '-rotate-y-0']">
        <button @click="bookOpen = !bookOpen">Klik mij</button>
      </div>
    </div>
  </main>
</template>

<!-- <NuxtLink :to="{ name: 'bk.view', params: { view_data: route.params.edit_data } }"
      >Bekijken</NuxtLink
    > -->
