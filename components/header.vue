<script lang="ts" setup>

const isNavHeaderOpen = ref(false as boolean),
    isDarkMode = ref(false as boolean)

function toggleDarkMode() {
  document.querySelector("html")?.classList.toggle("dark")
  isDarkMode.value = true
}

</script>

<template>
  <header class="relative z-30 max-w-[1280px] mx-auto lg:pt-12">
    <nav class="p-4 text-primary lg:flex lg:items-center lg:justify-between lg:p-0">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="font-extrabold text-sm dark:text-white">Louis BENSI</NuxtLink>
        <svg @click="isNavHeaderOpen = !isNavHeaderOpen" xmlns="http://www.w3.org/2000/svg" fill="none"
             viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 lg:hidden dark:text-white">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
        </svg>
      </div>
      <ul class="fixed top-0 right-0 bg-white p-4 space-y-10 w-3/4 h-screen text-right ease-in-out duration-300 pt-16 lg:static lg:bg-transparent lg:space-y-0 lg:w-auto lg:h-auto lg:p-0 lg:text-left lg:flex lg:space-x-6 lg:translate-x-0 dark:bg-gray-900 dark:text-white lg:dark:bg-primary"
          :class="isNavHeaderOpen ? 'translate-x-0' : 'translate-x-full'">
        <li class="hover:opacity-50">
          <svg @click="isNavHeaderOpen = !isNavHeaderOpen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
               fill="currentColor" class="absolute top-4 right-4 w-8 h-8 lg:hidden">
            <path fill-rule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clip-rule="evenodd"/>
          </svg>
        </li>

        <li class="hover:opacity-50" @click="isNavHeaderOpen = !isNavHeaderOpen">
          <NuxtLink to="/">Accueil</NuxtLink>
        </li>
        <li class="hover:opacity-50" @click="isNavHeaderOpen = !isNavHeaderOpen">
          <NuxtLink to="/parcours">Carrière</NuxtLink>
        </li>
        <li class="hover:opacity-50" @click="isNavHeaderOpen = !isNavHeaderOpen">
          <NuxtLink to="/creations">Créations</NuxtLink>
        </li>
        <li class="hover:opacity-50" @click="isNavHeaderOpen = !isNavHeaderOpen">
          <NuxtLink to="/contact">Contact</NuxtLink>
        </li>
        <li @click="toggleDarkMode()" class="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
               class="w-6 h-6 ml-auto lg:ml-0">
            <path fill-rule="evenodd"
                  d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                  clip-rule="evenodd"/>
          </svg>
        </li>
      </ul>
    </nav>
  </header>
  <div class="fixed top-0 left-0 bg-black/25 w-full h-full ease-in-out duration-500 lg:hidden"
       :class="{ 'opacity-0 invisible' : !isNavHeaderOpen }">

  </div>
</template>