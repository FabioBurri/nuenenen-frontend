<template>
  <div v-if="props.zone.files" class="container">
    <TitleComponent
      :title="props.zone.Title"
      :index="props.index"
    ></TitleComponent>
    <a
      v-for="file in props.zone.files.data"
      :key="file.id"
      :href="file.attributes.url"
      download=""
      >Download {{ file.attributes.name }}</a
    >
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  zone: Document
  index: number
}>()
</script>
