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
      a(v-for="icon in icons" :href="`${mappingUrl(icon)}`" target="blank")
        div(class="bottom__icon" :style="{'mask-image': `url(${mappingIcon(icon)})`}")
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
import { mappingUrl } from '@/utils/utility.js'

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
    mappingIcon (icon) {
      console.log(require(`@/assets/icon/${icon}.svg`))
      return require(`@/assets/icon/${icon}.svg`)
    },
    mappingUrl
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
      background-color: setColor(text-color);
      transition: transform 0.3s, color 0.2s;
      &:hover {
        transform: scale(1.2);
        background-color: setColor(white);
      }
    }
    &__copyright {
      font-size: 0.8rem;
      color: setColor(text-color);
    }
  }
}
</style>
