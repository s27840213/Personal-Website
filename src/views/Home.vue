<template lang="pug">
div(class="home")
  landing-page
  about
  skills
  portofolio
  contact
</template>

<script>
// @ is an alias to /src
import LandingPage from '@/components/LandingPage.vue'
import About from '@/components/About.vue'
import Skills from '@/components/Skills.vue'
import Contact from '@/components/Contact.vue'
import Portofolio from '@/components/Portofolio.vue'
export default {
  name: 'Home',
  components: {
    LandingPage,
    About,
    Skills,
    Contact,
    Portofolio
  },
  data () {
    return {
    }
  },
  methods: {
    test () {

    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  background-color: setColor(primary);
}
</style>
