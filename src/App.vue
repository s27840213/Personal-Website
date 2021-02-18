<template lang="pug">
  div(id="app")
    loading
    navbar(:navList="['Home','About','Skill','Project','Artwork','Contact']")
    router-view
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import Loading from '@/components/Loading.vue'
export default {
  components: {
    Navbar,
    Loading
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
