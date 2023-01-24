<script>

import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
  }
}

</script>

<template>


  <AppHeader></AppHeader>

  <router-link :to="{ name: 'about' }">link a router about </router-link>



</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>