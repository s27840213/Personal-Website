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
import LandingPage from '@/components/home/LandingPage.vue'
import About from '@/components/home/About.vue'
import Passion from '@/components/home/Passion.vue'
import Skills from '@/components/home/Skills.vue'
import Contact from '@/components/home/Contact.vue'
import Project from '@/components/home/Project.vue'
import Practice from '@/components/home/Practice.vue'
import Artwork from '@/components/home/Artwork.vue'

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
