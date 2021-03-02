<template lang="pug">
  div(class="core-mechanic")
    div(class="core-mechanic__info")
      span(class="heading-ky-l") Core Mechanic
      div(class="core-mechanic__steps")
        div(class="core-mechanic__step")
          div(class="decoration")
          span Collect resources
        div(class="core-mechanic__step")
          div(class="decoration")
          span Construct buildings
        div(class="core-mechanic__step")
          div(class="decoration")
          span Unlock buildings and game features
    div(class="core-mechanic__demo")
      img(class="core-mechanic__demo-img" v-for="img in demoImg" :src="require(`@/assets/img/kyronus/${img}.png`)")
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
        id: 'core-mechanic',
        trigger: '.core-mechanic__info',
        start: 'top bottom',
        autoRemoveChildren: true
      }
    })
    this.tl.from('.core-mechanic__info', {
      duration: 0.7,
      x: -100,
      opacity: 0
    }, 's')
      .from('.core-mechanic__step', {
        duration: 0.7,
        opacity: 0,

        x: -50
      }, '-=0.5')
      .from('.core-mechanic__demo-img', {
        duration: 0.7,
        opacity: 0,
        stagger: {
          amount: 0.5
        },
        x: -50
      }, '-=0.5')
  },
  beforeDestroy () {
    this.tl.pause(0).kill(true)
    ScrollTrigger.getById('core-mechanic').kill(true)
  }
}
</script>

<style lang="scss" scoped>
.core-mechanic {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1.5fr;
  grid-template-rows: 1fr;
  @include mobileStyle {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
  }
  &__info {
    position: relative;
  }
  &__steps {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    justify-content: center;
    margin-top: clamp(10px, 5vw, 40px);
    color: setKyColor(text-content);
    .core-mechanic__step {
      display: flex;
      align-items: center;
      margin: 20px 0;
      font-size: 1.2rem;
    }
    @include mobileStyle {
      margin-bottom: 30px;
    }
  }
  &__demo {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    > img {
      height: 80%;
      width: clamp(100px, 100%, 400px);
      object-fit: contain;
    }
  }
}
.decoration {
  @include size(10px);
  border: 5px solid setKyColor(brown);
  border-radius: 50%;
  margin-right: 10px;
}
</style>
