<script setup lang="ts">

import CardProjets from "~/components/card-projets.vue";
import Filter from "~/components/svg/filter.vue";

let config = useRuntimeConfig(),
    projets = ref([]),
    categories = ref([]),
    isFilterOpen = ref(false),
    categoriesFilter = ref([])

const {data: projetsList} = await useFetch(`${config.public.apiBase}/api/projets`, {
  watch: [categoriesFilter],
  query: {
    'categories.id' : categoriesFilter,
    'order[created_at]' : 'desc'
  },
  onResponse({request, response, options}) {
    projets.value = response._data['hydra:member']
  },
})

const {data: categoriesList} = await useFetch(`${config.public.apiBase}/api/categories`, {
  onResponse({request, response, options}) {
    categories.value = response._data['hydra:member']
  },
})

</script>

<template>
  <div class="lg:grid grid-cols-12 gap-6">
    <div class="lg:col-span-4 lg:h-full">
      <div @click="isFilterOpen = !isFilterOpen"
           class="fixed bottom-4 right-4 z-10 bg-primary p-2 rounded-lg lg:hidden">
        <Filter class="text-white"/>
      </div>
      <div
          class="fixed bottom-0 left-0 w-full h-2/4 bg-white rounded-t-md z-20 p-4 flex flex-col gap-3 ease-in-out duration-300 lg:sticky lg:top-4 lg:h-auto lg:translate-y-0 lg:rounded-lg dark:text-white dark:bg-gray-900"
          :class="!isFilterOpen ? 'translate-y-full' : 'translate-y-0'">
        <h3 class="text-lg font-medium">Catégories</h3>
        <fieldset>
          <label for="allProjets" class="flex items-center gap-3 cursor-pointer">
            <input type="radio" id="allProjets" name="categorie" value="all" v-model="categoriesFilter">
            Tout les projets
          </label>
        </fieldset>
        <fieldset v-for="c in categories">
          <label :for="c.label" class="flex items-center gap-3 cursor-pointer">
            <input type="radio" :id="c.label" name="categorie" :value="c.id" v-model="categoriesFilter">
            {{ c.label }}
          </label>
        </fieldset>
      </div>
      <div @click="isFilterOpen = !isFilterOpen"
           class="fixed w-full h-full top-0 left-0 bg-black/25 z-10 ease-in-out duration-300"
           :class="{ 'opacity-0 invisible' : !isFilterOpen }"></div>
    </div>
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:col-span-8">
      <card-projets
          v-for="p in projets"
          :name="p.name"
          :image="p.visuel"
          :tags="p.tags"
          :link="'/creations/' + p.slug"
          :perso="p.perso"
      />
    </div>
  </div>
</template>