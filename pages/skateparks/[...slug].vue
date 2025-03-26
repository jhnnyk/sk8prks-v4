<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('skateparks').path(route.path).first()
})
</script>

<template>
  <div>
    <h1>{{ page.title }}</h1>
    <p>{{ page.description }}</p>
    <ContentRenderer :value="page" />
  </div>
</template>
