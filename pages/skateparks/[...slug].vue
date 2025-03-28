<!-- eslint-disable vue/html-self-closing -->
<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('skateparks').path(route.path).first()
})
</script>

<template>
  <div class="skatepark-content">
    <h1 class="text-2xl">{{ page.title }}</h1>
    <p class="mb-4">
      {{ page.street }}<br />
      {{ page.city }}, {{ page.state }} {{ page.zipcode }}
    </p>
    <p class="mb-4">{{ page.description }}</p>
    <ContentRenderer :value="page" />
  </div>
</template>
