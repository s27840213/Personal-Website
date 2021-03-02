<template lang="pug">
  div(class="game-art-design")
    div(class="building-section")
      img(class="building-img" v-for="i in 5" :src="require(`@/assets/img/kyronus/building-${i-1}.png`)")
    div(class="art-bottom-section")
      div(class="art-bottom-section__color")
        img(:src="require('@/assets/img/kyronus/color.png')")
      div(class="art-bottom-section__info")
        span(class="heading-ky-r") Game Art Design
        div(class="art-bottom-section__content")
          div(class="art-bottom-section__paragraph") The overall art adopts isometric and low poly styles. The architecture is presented through a fresh style, while bringing comfort to players !
          div(class="art-bottom-section__paragraph") We capture the essence of the realistic characteristic building, and only retain the most important feature items to present the original delicate, mini, and cute appearance.
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { animatePseudo, isMobile } from '@/utils/utility.js'
export default {
  data () {
    return {
      demoImg: ['planet-scene', 'collect-scene', 'build-mode'],
      tl: null
    }
  },
  mounted () {
    this.tl = gsap.timeline({
      scrollTrigger: {
        id: 'art-design',
        trigger: '.building-section',
        start: 'top bottom',
        autoRemoveChildren: true
      }
    })
    this.tl.from('.building-img', {
      duration: 0.7,
      scale: 0,
      ease: 'back.out',
      stagger: {
        amount: 0.7
      }
    }, '-=0.3')
      .from('.art-bottom-section__color', {
        duration: 0.7,
        opacity: 0,
        x: -50
      }, '-=0.3')
      .from('.art-bottom-section__info', {
        duration: 0.7,
        opacity: 0,
        x: -50
      }, '-=0.3')
  },
  beforeDestroy () {
    this.tl.pause(0).kill(true)
    ScrollTrigger.getById('art-design').kill(true)
  }
}
</script>

<style lang="scss" scoped>
.game-art-design {
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr;
}
.building-section {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  align-items: center;
  column-gap: 5vw;
  padding: 0 calc((100vw - 1200px) / 2);
  box-sizing: border-box;
  margin: clamp(10px, 3vw, 30px);
  > img {
    width: 100%;
  }
}
.art-bottom-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "img info";
  column-gap: 5vw;
  align-items: center;
  padding: 0px clamp(30px, calc((50vw - 500px) / 2), calc((50vw - 500px) / 2));

  @include mobileStyle {
    grid-template-areas: "info" "img";
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
  }
  &__color {
    grid-area: img;
    > img {
      width: 100%;
    }
  }
  &__info {
    grid-area: info;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
    @include mobileStyle {
      align-items: center;
    }
    .art-bottom-section__content {
      margin-top: 30px;
    }
    .art-bottom-section__paragraph {
      font-size: 1rem;
      color: setKyColor(text-content);
      line-height: 200%;
      &:nth-child(2) {
        margin-top: 20px;
        margin-bottom: 15px;
      }
    }
  }
}
</style>
