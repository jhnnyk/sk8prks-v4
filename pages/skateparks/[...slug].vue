<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('skateparks').path(route.path).first()
})
</script>

<template>
  <div>
    {{ route.path }}
    <ContentRenderer :value="page" />
    <div>individual skateparks go here. slocum? for example</div>
  </div>
</template>
