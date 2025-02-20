<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterView />
  </header>
</template>

<style lang="scss" scoped>
h1{
  #pokedex{
    display: flex;
    flex-direction:column;
    min-height: 100vh;
    max-width: 1000px;
    margin: 0 auto;
    padding: 24px;
  }
}

</style>
