<script setup lang="ts">
import Header from "~/components/header.vue";
</script>

<template>
  <Header/>
  <main class="max-w-[1280px] mx-auto my-12 px-4 space-y-12">
    <NuxtPage/>
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
* {
  font-family: 'Poppins', sans-serif;
}

body {
  @apply bg-tiers;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>