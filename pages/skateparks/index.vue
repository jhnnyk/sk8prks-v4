<script setup lang="ts">
const { data: docs } = await useAsyncData('skatepark-items', () => {
  return queryCollection('skateparks')
    .order('title', 'DESC')
    .select('title', 'path', 'description')
    .all()
})
</script>

<template>
  <div>
    [{{ docs }}]
    <NuxtLink v-for="doc in docs" :key="doc.path" :to="doc.path">
      <h2>{{ doc.title }}</h2>
      <p>{{ doc.description }}</p>
    </NuxtLink>
    vue page skateparks go here
  </div>
</template>
