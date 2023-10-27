<script setup lang="ts">
  defineProps({
    title: {
      type: String,
      required: true
    },
    modelValue: {
      type: String,
      default: ''
    }
  })

  const emit = defineEmits(['update:modelValue'])

  const updateInput = (event: any) => {
    emit('update:modelValue', event.target.value)
  }
</script>

<template>
  <div>
    <FormKit
      :value="title"
      @blur="updateInput"
      type="text"
      label="Titel van je boek"
      :validation-messages="{
        required: 'Titel is verplicht'
      }"
      validation="required" />
  </div>
</template>
