<template lang="pug">
div(class="kyronus")
  div(class="back-button" @click="goBack()")
    img(:src="require('@/assets/icon/back.svg')")
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
      leoIcons: ['github', 'medium', 'ig', 'behance'],
      animLeo: null
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
    },
    goBack () {
      this.$router.go(-1)
    }
  },
  mounted () {
    window.scrollTo(0, 0)
    this.animLeo = gsap.timeline({
      scrollTrigger: {
        id: 'leo',
        trigger: '.leo-section',
        start: 'top bottom',
        autoRemoveChildren: true,
        markers: true
      }
    })
    this.animLeo.from('.leo-section__avatar', {
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
        x: -50,
        onComplete: () => {
          console.log('hi')
        }
      }, '-=0.2')
  },
  beforeDestroy () {
    this.animLeo.pause(0).kill(true)
    ScrollTrigger.getById('leo').kill(true)
  }
}
</script>

<style lang="scss" scoped>
.kyronus {
  display: flex;
  flex-direction: column;
  position: relative;
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

.back-button {
  @include size(40px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 0px;
  top: 0px;
  margin: 40px;
  padding: 10px;
  border: 2px solid rgba(white, 0.4);
  border-radius: 50%;
  background-color: rgba(black, 0.4);
  cursor: pointer;
  z-index: setZindex("navbar");
  > img {
    @include size(30px);
    opacity: 0.8;
  }
}
</style>
