<template lang="pug">
div(class="kyronus")
  kyronus-landing-page
  kyronus-intro
  navagation-map
  core-mechanic
  design-concept
  ux-research
  u-i-guideline
  game-art-design
  div(class="leo-section")
    img(class="leo-section__avatar" :src="require('@/assets/img/kyronus/leo.png')")
    div(class="leo-section__info")
      div
        span UI Designed by
        |
        span Leo Kuo
      div
        span iOS developer | UIUX designer | Frontend developerp
      div
        div(class="leo-section__icon-set")
          a(class="leo-section__icon" v-for="icon in leoIcons" :href="`${mappingLeoUrl(icon)}`" target="blank")
            div(:style="{'mask-image': `url(${mappingIcon(icon)})`}")
        div(class="leo-section__email")
          a(href="mailto:p900372012@gmail.com")
            span p900372012@gmail.com
  footer-info(:bgColor="'#957381'" :iconColor="'#f9f3e7'")
</template>

<script>
import KyronusLandingPage from '@/components/kyronus/KyronusLandingPage.vue'
import KyronusIntro from '@/components/kyronus/KyronusIntro.vue'
import CoreMechanic from '@/components/kyronus/CoreMechanic.vue'
import NavagationMap from '@/components/kyronus/NavagationMap.vue'
import DesignConcept from '@/components/kyronus/DesignConcept.vue'
import UIGuideline from '@/components/kyronus/UIGuideline.vue'
import UxResearch from '@/components/kyronus/UxResearch.vue'
import GameArtDesign from '@/components/kyronus/GameArtDesign.vue'
import { mappingUrl } from '@/utils/utility.js'
import FooterInfo from '@/components/FooterInfo.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
export default {
  name: 'Home',
  components: {
    KyronusLandingPage,
    NavagationMap,
    DesignConcept,
    UIGuideline,
    UxResearch,
    GameArtDesign,
    KyronusIntro,
    CoreMechanic,
    FooterInfo
  },
  data () {
    return {
      icons: ['fb', 'ig', 'github', 'linkedin', 'codepen'],
      leoIcons: ['github', 'medium', 'ig', 'behance']
    }
  },
  methods: {
    mappingIcon (icon) {
      return require(`@/assets/icon/${icon}.svg`)
    },
    mappingUrl,
    mappingLeoUrl (target) {
      switch (target) {
        case 'github':
          return 'https://github.com/leokuo0724'
        case 'medium':
          return 'https://medium.com/@leokuo0724'
        case 'ig':
          return 'https://www.instagram.com/leokuo0724/'
        case 'behance':
          return 'https://www.behance.net/leokuo'
      }
    }
  },
  mounted () {
    window.scrollTo(0, 0)
    this.tl = gsap.timeline({
      scrollTrigger: {
        id: 'leo',
        trigger: '.leo-section',
        start: 'top bottom',
        autoRemoveChildren: true
      }
    })
    this.tl.from('.leo-section__avatar', {
      duration: 0.7,
      x: -100,
      opacity: 0
    }, 's')
      .from('.leo-section__info', {
        duration: 0.7,
        opacity: 0,
        stagger: {
          amount: 0.5
        },
        x: -50
      }, '-=0.2')
  },
  beforeDestroy () {
    this.tl.pause(0).kill(true)
    ScrollTrigger.getById('leo').kill(true)
  }
}
</script>

<style lang="scss" scoped>
.kyronus {
  display: flex;
  flex-direction: column;
  background-color: setKyColor(bg);
  overflow: hidden;
  > div::v-deep {
    @include pcStyle {
      margin-bottom: 100px;
    }
    @include mobileStyle {
      margin-bottom: 50px;
    }
  }
  > div:last-child {
    margin-bottom: 0;
  }
}

.bottom {
  background-color: setKyColor(brown);
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
    background-color: setKyColor(bg);
    transition: transform 0.3s, color 0.2s;
    &:hover {
      transform: scale(1.2);
      background-color: setColor(white);
    }
  }
  &__copyright {
    font-size: 0.8rem;
    color: setKyColor(bg);
  }
}

.leo-section {
  display: flex;
  justify-content: center;
  align-items: center;
  color: setKyColor(text-content);
  text-align: left;
  @include mobileStyle {
    flex-direction: column;
    text-align: center;
  }
  &__avatar {
    @include size(150px);
    border-radius: 50%;
  }
  &__info {
    margin-left: 20px;
    // for top section of information
    > div {
      margin: 5px;
    }
    > div:nth-child(1) {
      > span:nth-child(1) {
        font-size: 2rem;
        margin-right: 10px;
        @include mobileStyle {
          font-size: 1.4rem;
        }
      }
      > span:nth-child(2) {
        font-size: 3rem;
        font-weight: bold;
        @include mobileStyle {
          font-size: 2.5rem;
        }
      }
    }
    // for bottom section of information (job title)
  }
  &__icon-set {
    display: inline-grid;
    grid-template-columns: repeat(5, auto);
    column-gap: 15px;
  }
  &__icon {
    > div {
      @include size(20px);
      margin: 10px 0px;
      background-color: setKyColor(brown);
      transition: background-color 0.3s;
      &:hover {
        background-color: lighten($color: setColor(brown), $amount: 10);
      }
    }
  }
  &__email {
    > a {
      color: setKyColor(brown);
    }
  }
}
</style>
