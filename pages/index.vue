<script lang="ts" setup>

import CardProjets from "~/components/card-projets.vue";
import VisuelHero from "~/components/svg/visuel-hero.vue";

let config = useRuntimeConfig(),
    projets = ref([])


const {data, pending, error, refresh} = await useFetch(`${config.public.apiBase}/api/projets`, {
  query: {
    'order[created_at]': 'desc'
  },
  onResponse({request, response, options}) {
    projets.value = response._data['hydra:member']
  },
})


</script>

<template>
  <section class="md:flex md:items-center">
    <div class="relative left-hero z-20 md:w-7/12 md:space-y-6">
      <div class="space-y-4">
        <h1 class="text-3xl text-secondary font-bold md:text-[45px] lg:font-extrabold">Bonjour !</h1>
        <h2 class="text-2xl font-bold text-primary md:text-[45px] md:leading-[50px] dark:text-white">Je suis Louis:
          développeur front-end junior.</h2>
        <p class="font-semibold text-lg dark:text-white">Cela fait désormais quatre merveilleuses années que ma passion
          se trouve dans l'univers du web, plus spécifiquement dans le développement front-end. Je suis actuellement en
          contrat à durée indéterminée chez Mobizel, où je m'épanouis en tant que développeur front-end. Mon quotidien
          est rythmé par la réalisation de divers projets et l'apprentissage de nouvelles technos, une source
          inépuisable de stimulation pour moi.</p>
      </div>
      <div class="md:flex md:!mt-16">
        <NuxtLink to="creations"
                  class="hero_buttons relative flex items-center justify-center bg-primary text-white font-bold overflow-hidden h-[50px] w-full mx-auto mt-4 rounded-md md:max-w-[250px] sm:max-w-[320px] md:h-[40px] md:mx-0 md:mr-4 lg:max-w-[300px] lg:h-[50px] lg:text-xl lg:mt-0 dark:bg-secondary">
          <span class="relative z-50">Voir mes projets</span>
        </NuxtLink>

        <NuxtLink to="/contact/"
                  class="relative flex items-center justify-center border border-primary text-primary font-bold overflow-hidden h-[50px] w-full mx-auto mt-4 rounded-md sm:max-w-[320px] md:max-w-[250px] md:h-[40px] md:mx-0 lg:max-w-[300px] lg:h-[50px] lg:text-xl lg:mt-0 dark:border-secondary dark:text-secondary">
          <span class="relative z-50">Me contacter</span>
        </NuxtLink>
      </div>
    </div>
    <div class="hidden right-hero relative z-10 h-full md:w-5/12 md:block">
      <VisuelHero class="animate-floatAnimation"/>
    </div>
  </section>
  <section>
    <h2 class="text-2xl font-dbold text-primary mb-4">Mes derniers projets</h2>
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <card-projets
          v-for="p in projets.slice(0, 4)"
          :name="p.name"
          :image="p.visuel"
          :tags="p.tags"
          :link="'creations/' + p.slug"
          :perso="p.perso"
      />
    </div>
  </section>
</template>

<style>
@keyframes floatAnimation {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>