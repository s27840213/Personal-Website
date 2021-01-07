<template lang="pug">
div(class="home")
  landing-page
  about
  skills
  contact
</template>

<script>
// @ is an alias to /src
import LandingPage from '@/components/LandingPage.vue'
import About from '@/components/About.vue'
import Skills from '@/components/Skills.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'Home',
  components: {
    LandingPage,
    About,
    Skills,
    Contact
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
  height: 100%;
  width: 100%;
}
</style>
