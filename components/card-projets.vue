<script setup lang="ts">
let config = useRuntimeConfig()

defineProps<{
  name?: string
  image?: string
  slug?: string
}>()
</script>

<template>
  <article class="bg-white rounded-md overflow-hidden">
    <div class="h-[250px]">
      <img :src="config.public.apiBase + '/uploads/images/' + image" alt="visuel porfolio"
           class="w-full h-full object-cover">
    </div>
    <div class="p-4">
      <p>{{ name }}</p>
      <NuxtLink :to="slug"></NuxtLink>
    </div>
  </article>
</template>