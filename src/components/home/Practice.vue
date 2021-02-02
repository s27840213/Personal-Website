<template lang="pug">
  div(class="practice")
    h1(class="practice__heading") Some Practice
    div(class="practice__container")
      div(class="practice__item" v-for="i in 6")
    button(class="practice__button") Watch More
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { animatePseudo } from '@/utils/utility.js'
export default {
  data () {
    return {
      animSpeed: 0.7
    }
  },
  mounted () {
    const practiceAnim = gsap.timeline({
      scrollTrigger: {
        trigger: '.practice__heading',
        start: 'top bottom',
        autoRemoveChildren: true
      }
    }).from('.practice__heading', {
      duration: this.animSpeed,
      y: 100,
      opacity: 0,
      onStart: animatePseudo,
      onStartParams: ['.practice__heading']
    })
  }
}
</script>

<style lang="scss" scoped>
.practice {
  box-sizing: border-box;
  &__heading {
    @include heading;
    &.animatePseudo::after {
      transition-delay: 0.5s;
      width: 25%;
    }
  }
  &__container {
    @include pdGeneralHr;
    display: grid;
    grid-auto-rows: 250px;
    row-gap: 20px;
    column-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
  }
  &__item {
    background-color: gray;
  }
  &__button {
    background-color: setColor(red);
    outline: none;
    border: none;
    border-radius: 100px;
    color: white;
    margin-top: 30px;
    font-size: 1.8rem;
    padding: 20px 40px;
  }
}
</style>
