<script setup lang="ts">

const { data: projets } = await useFetch<object>('http://admin.louisbensi.fr/api/projets')

</script>

<template>
  <div>
    <div v-for="p in projets">
      {{ p.name }}
    </div>
  </div>
</template>