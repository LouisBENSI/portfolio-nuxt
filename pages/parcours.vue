<script lang="ts" setup>

import {ref} from "#imports";
import { ParcoursList } from "assets/json/ParcoursList";

const parcoursArray = ref([] as object)
parcoursArray.value = ParcoursList
</script>

<template>
    <section>
      <h1 class="text-3xl font-bold text-primary dark:text-white">Mon parcours</h1>
      <div class="mt-8 grid grid-cols-1 space-y-8 lg:grid-cols-2 lg:space-y-0 lg:gap-8">
        <div v-for="p in parcoursArray">
          <p class="text-xl font-bold text-primary mb-2 dark:text-white">{{ p.title }}</p>
          <article v-for="l in p.items" class="bg-primary border-l-8 border-secondary py-6 px-2 text-gray-300 space-y-4 mb-2 lg:pl-4 last:border-b-0 dark:bg-black dark:border-white">
            <div class="space-y-2">
              <h3 class="text-primary text-white font-semibold dark:text-white">{{ l.title }}</h3>
              <span class="text-sm dark:text-white">{{ l.company }} - {{ l.date_start }} / {{ l.date_fin }}</span>
            </div>
            <p class="text-white text-sm lg:text-base dark:text-white">{{ l.description }}</p>
          </article>
        </div>
      </div>
    </section>
</template>