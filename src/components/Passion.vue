<template lang="pug">
  div(class="root-passion")
    h1(class="heading") Passion
    div(class="passion")
      div(class="passion__program")
      div(class="passion__design")
      div(class="passion__sport")
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
export default {
  mounted () {
    const passionAnim = gsap.timeline({
      scrollTrigger: {
        trigger: '.root-passion',
        start: 'center bottom'
      }
    })

    passionAnim.from('.root-passion', {
      duration: 1,
      x: -100,
      opacity: 0
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
  }
}
</script>

<style lang="scss" scoped>
.root-passion {
  width: 100%;
  .passion {
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
  }
}
</style>
