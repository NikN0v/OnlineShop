<template>
  <header class="flex items-center justify-center bg-[#d7b874] py-2 px-4">
    <div class="flex items-center justify-between w-full container">
      <router-link to="/">
        <img class="max-w-10" src="@/assets/logo.png" alt="Logo">
      </router-link>

      <div class="flex items-center gap-5">
        <router-link to="/favorites"><vue-feather class="cursor-pointer" type="heart"/></router-link>
        <router-link to="/cart"><vue-feather class="cursor-pointer" type="shopping-cart"/></router-link>

      </div>
    </div>
  </header>
</template>

<script setup>

</script>
