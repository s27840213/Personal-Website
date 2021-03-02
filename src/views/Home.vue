<template lang="pug">
div(class="home")
  landing-page
  about
  skills
  project
  artwork
  contact
  footer-info
  //- div(class="bottom")
  //-   div(class="bottom__icon-set")
  //-     a(v-for="icon in icons" :href="`${mappingUrl(icon)}`" target="blank")
  //-       div(class="bottom__icon" :style="{'mask-image': `url(${mappingIcon(icon)})`}")
  //-   div(class="bottom__copyright") Copyright © 2021 - Alan Chang
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
import FooterInfo from '@/components/FooterInfo.vue'
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
    Artwork,
    FooterInfo
  },
  data () {
    return {
      icons: ['fb', 'ig', 'github', 'linkedin', 'codepen']
    }
  },
  methods: {
    mappingIcon (icon) {
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
  > div:last-child {
    margin-bottom: 0;
  }
}
</style>
