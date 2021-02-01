<template lang="pug">
  div(class="passion")
    h1(class="passion__heading") Passion
    div(class="passion__container")
      div(class="passion__program")
      div(class="passion__design")
      div(class="passion__sport")
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { animatePseudo } from '@/utils/utility.js'

export default {
  mounted () {
    const passionAnim = gsap.timeline({
      scrollTrigger: {
        trigger: '.passion__heading',
        start: 'top bottom',
        markers: true
      }
    })

    passionAnim.from('.passion', {
      duration: 1,
      y: 200,
      opacity: 0,
      onStart: animatePseudo,
      onStartParams: ['.passion__heading']
    }, 's')
      .from('.passion__program', {
        duration: 0.9,
        opacity: 0,
        y: 100
      }, '-=0.7')
      .from('.passion__design', {
        duration: 0.9,
        opacity: 0,
        y: 100
      }, '-=0.7')
      .from('.passion__sport', {
        duration: 0.9,
        opacity: 0,
        y: 100
      }, '-=0.7')
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
      background-color: white;
    }
    &__heading {
      @include heading;
    }
  }
}
</style>
