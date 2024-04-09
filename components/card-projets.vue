<script setup lang="ts">
import ArrowRight from "~/components/svg/arrow-right.vue";

let config = useRuntimeConfig()

defineProps<{
  name?: string
  image?: string
  slug?: string
  tags?: []
  link?: string
  perso?: boolean
}>()
</script>

<template>
  <article class="project" :class="perso ? 'border-b border-primary' : 'border-b border-secondary'">
    <div class="h-[175px] overflow-hidden">
      <img :src="config.public.apiBase + '/uploads/images/' + image" alt="visuel porfolio"
           class="w-full h-full object-cover ease-in-out duration-300">
    </div>
    <div class="p-4">
      <div>
        <p class="text-lg font-semibold mb-2">{{ name }}</p>
        <div class="flex flex-wrap gap-2">
        <span v-for="t in tags"
              class="text-xs text-primary bg-secondary/25 px-2 py-1 rounded-full font-medium">{{ t.label }}</span>
        </div>
      </div>
      <NuxtLink :to="link" class="text-xs"></NuxtLink>
    </div>
  </article>
</template>

<style lang="scss">

.project {
  @apply relative bg-white rounded-md overflow-hidden ease-in-out duration-300;
  a {
    &::after {
      content: "";
      @apply absolute top-0 left-0 w-full h-full;
    }
  }

  &:hover {
    @apply shadow;
    img {
      transform: scale(1.1);
    }
  }
}

</style>