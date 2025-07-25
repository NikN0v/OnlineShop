<template>
  <TheHeader/>
  <main class="flex justify-center items-start h-full min-h-full grow container py-2 px-4 my-5">
    <RouterView />
  </main>
  <TheFooter/>
</template>

<script setup>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<style lang="scss">

</style>
