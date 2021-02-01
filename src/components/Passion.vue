<template lang="pug">
  div(class="passion")
    h1(class="passion__heading") Passion
    div(class="passion__container")
      div(class="passion__card")
      div(class="passion__card")
      div(class="passion__card")
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { animatePseudo } from '@/utils/utility.js'
import VanillaTilt from 'vanilla-tilt'
export default {
  mounted () {
    VanillaTilt.init(document.querySelectorAll('.passion__card'), {
      max: 5,
      reverse: true,
      speed: 400,
      glare: true,
      'max-glare': 0.2
    })
    const passionAnim = gsap.timeline({
      scrollTrigger: {
        trigger: '.passion__heading',
        start: 'top bottom',
        markers: true,
        autoRemoveChildren: true
      }
    })

    passionAnim.from('.passion', {
      duration: 1,
      y: 200,
      opacity: 0,
      onStart: animatePseudo,
      onStartParams: ['.passion__heading']
    }, 's')
      .from('.passion__card', {
        duration: 0.7,
        opacity: 0,
        y: 100,
        stagger: 0.2
      })
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.passion {
  width: 100%;
  &__heading {
    @include heading;
    &.animatePseudo::after {
      transition-delay: 0.25s;
      width: 25%;
    }
  }
  &__container {
    @include pdGeneralHr;
    @include mgGeneralVt;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 400px;
    column-gap: 20px;
    > div {
      border-radius: 15px;
      background-color: rgba(white, 0.1);
      box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
      border-top: 1px solid rgba(255, 255, 255, 0.4);
      border-left: 1px solid rgba(255, 255, 255, 0.6);
      backdrop-filter: blur(5px);
      overflow: hidden;
    }
    &__heading {
      @include heading;
    }
  }
}
</style>
