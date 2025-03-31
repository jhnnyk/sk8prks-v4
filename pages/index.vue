<script setup lang="ts">
const { data: docs } = await useAsyncData('skatepark-items', () => {
  return queryCollection('skateparks')
    .order('title', 'ASC')
    .select('title', 'path')
    .all()
})
</script>

<template>
  <div>
    <ul>
      <li>
        <NuxtLink v-for="doc in docs" :key="doc.path" :to="doc.path">
          <h2>{{ doc.title }}</h2>
        </NuxtLink>
        ({{ docs?.length }})
      </li>
    </ul>
  </div>
</template>
