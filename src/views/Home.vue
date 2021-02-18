<template lang="pug">
div(class="home")
  landing-page
  about
  skills
  project
  artwork
  contact
  div(class="bottom")
    div(class="bottom__icon-set")
      a(href="#")
        img(v-for="icon in icons" class="bottom__icon" :src="require(`@/assets/icon/${icon}.svg`)")
    div(class="bottom__copyright") Copyright © 2021 - Alan Chang
</template>

<script>
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
      icons: ['fb', 'ig', 'github', 'linkedin', 'codepen']
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
  overflow: hidden;
  > div::v-deep {
    @include pcStyle {
      margin-bottom: 100px;
    }
    @include mobileStyle {
      margin-bottom: 30px;
    }
  }

  .bottom {
    background-color: setColor(secondary);
    margin-bottom: 0px;
    padding: 20px 0px;
    display: flex;
    flex-direction: column;
    &__icon-set {
      display: flex;
      justify-content: center;
      padding: 30px;
    }
    &__icon {
      @include size(20px);
      margin: 1px 20px 0px 20px;
      transition: transform 0.3s;
      &:hover {
        transform: scale(1.5);
      }
    }
    &__copyright {
      font-size: 0.8rem;
      color: setColor(text-color);
    }
  }
}
</style>
