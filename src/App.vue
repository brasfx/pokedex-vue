<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <!-- <RouterView /> -->
   <h1>Pokedex</h1>
</template>

<style lang="scss" scoped>
h1{
  color: $oracle;
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
