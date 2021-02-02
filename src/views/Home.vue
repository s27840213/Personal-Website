<template lang="pug">
div(class="home")
  landing-page
  about
  //- passion
  skills
  project
  //- practice
  artwork
  contact
</template>

<script>
// @ is an alias to /src
import LandingPage from '@/components/LandingPage.vue'
import About from '@/components/About.vue'
import Passion from '@/components/Passion.vue'
import Skills from '@/components/Skills.vue'
import Contact from '@/components/Contact.vue'
import Project from '@/components/Project.vue'
import Practice from '@/components/Practice.vue'
import Artwork from '@/components/Artwork.vue'

export default {
  name: 'Home',
  components: {
    LandingPage,
    About,
    Skills,
    Contact,
    Project,
    Passion,
    Practice,
    Artwork
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
  > div::v-deep {
    margin-bottom: 200px;
  }
}
</style>
