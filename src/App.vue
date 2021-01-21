<template lang="pug">
  div(id="app")
    navbar(:navList="['Home','About','Skills','Portofolio','Contact']" @switchMenu="switchMenus")
    router-view
</template>
<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  methods: {
    switchMenus (item) {
    }
  }
}
</script>
<style lang="scss">
#app {
  @include size(100%, 100%);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: setColor(white);
  background-color: setColor(primary);
}
</style>
