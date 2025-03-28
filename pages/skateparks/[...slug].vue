<!-- eslint-disable vue/html-self-closing -->
<script setup>
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
      {{ page.city }}, {{ page.state }} {{ page.zipcode }}<br />
      <a
        class="text-pink-500"
        :href="`https://www.google.com/maps/search/?api=1&query=${page.latitude}%2C${page.longitude}`"
        >Google Maps</a
      >
      |
      <a
        class="text-pink-500"
        :href="`http://maps.apple.com/?ll=${page.latitude},${page.longitude}&q=${page.title}`"
        >Apple Maps</a
      >
    </p>
    <p class="mb-4">{{ page.description }}</p>
    <ContentRenderer :value="page" />
  </div>
</template>
