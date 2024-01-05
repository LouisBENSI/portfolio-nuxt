<script lang="ts" setup>

import {ref} from "#imports";
import {CompetenceList} from "assets/json/CompetenceList";

const competenceArray = ref([] as object)
competenceArray.value = CompetenceList

</script>

<template>
  <section>
    <h1 class="text-2xl font-bold text-primary dark:text-white">Mes compétences</h1>
    <div class="space-y-8 grid grid-cols-1 mt-4 md:grid-cols-2 md:space-y-0 md:gap-8 md:mt-8 lg:gap-12 dark:text-white">
      <ul v-for="competence in competenceArray">
        <li><h2 class="text-lg font-semibold md:mb-4">{{ competence.title }}</h2></li>
        <li v-for="c in competence.languages" class="mb-4">
          <div class="flex items-center justify-between font-semibold text-sm space-y-2">
            <h3>{{ c.techno }}</h3>
            <span>{{ c.value }}%</span>
          </div>
          <div class="w-full bg-primary h-[8px] dark:bg-white">
            <div class="bg-secondary h-full" :class="c.class"></div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>