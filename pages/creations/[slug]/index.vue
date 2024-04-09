<script lang="ts" setup>

let config = useRuntimeConfig(),
    route = useRoute(),
    projet = ref([])


const {data: projetsList} = await useFetch(`${config.public.apiBase}/api/projets`, {
  query: {
    'slug': route.params.slug
  },
  onResponse({request, response, options}) {
    projet.value = response._data['hydra:member'][0]
  },
})

</script>

<template>
  <section class="grid gap-6 md:grid-cols-12">
    <div class="h-[250px] rounded-lg overflow-hidden md:col-span-4 md:h-auto">
      <img :src="config.public.apiBase + '/uploads/images/' + projet.visuel" :alt="'Visuel de ' + projet.name" class="w-full h-full object-contain">
    </div>
    <div class="md:col-span-8">
      <div class="flex items-center justify-between mb-4 lg:justify-start lg:gap-4">
        <h1 class="text-2xl font-bold md:text-3xl lg:text-4xl dark:text-white">{{ projet.name }}</h1>
        <span class="shrink-0 bg-primary/75 text-white px-2 py-1 rounded-lg text-sm dark:bg-gray-600"> {{ projet.categories.label }}</span>
      </div>
      <p v-html="projet.description" class="prose mb-6 text-sm lg:text-base dark:text-white"></p>
      <div class="flex flex-wrap gap-2 mb-6">
        <span v-for="t in projet.tags"
              class="text-xs text-primary bg-secondary/25 px-2 py-1 rounded-full font-medium dark:text-white dark:bg-secondary/50">{{ t.label }}</span>
      </div>
      <NuxtLink :to="projet.link" target="_blank" class="bg-secondary flex items-center justify-center py-2 rounded-lg text-primary md:w-1/2">Voir le projet en détail</NuxtLink>
    </div>
  </section>
</template>