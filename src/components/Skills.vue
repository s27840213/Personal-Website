<template lang="pug">
  div(class="skill")
    h1(class="skill__heading") Skill Set
    div(class="programming")
      div(class="programming__img")
        img(:src="require('@/assets/img/designer4.svg')")
      div
        h2(class="programming__title") Programmer
        div(class="programming__description") A Front End Developer who focus on writing clean, elegant and efficient code
        div(class="programming__skill")
          tool-wrapper(class="programming__tool" v-for="i in 10" :key="`tool-${i}`" :fontSize="16" :icon="'sass'" toolName="Photoshop")
    div(class="design")
      div
        h2(class="design__title") Designer
        div(class="design__description") A Designer with a passion for creating beatiful and intriguing artworks
        div(class="design__skill")
          tool-wrapper(class="design__tool" v-for="i in 10" :key="`tool-${i}`" :fontSize="16" :icon="'sass'" toolName="Photoshop")
      div(class="design__img")
        img(:src="require('@/assets/img/designer4.svg')")
</template>

<script>
import ToolWrapper from '@/components/ToolWrapper.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { animatePseudo } from '@/utils/utility.js'

export default {
  components: {
    ToolWrapper
  },
  data () {
    return {
      skillMain: [''],
      animSpeed: 0.7
    }
  },
  mounted () {
    const skillAnim1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.skill__heading',
        start: 'top bottom',
        markers: true
      }
    }).from('.skill__heading', {
      duration: this.animSpeed,
      y: 100,
      opacity: 0,
      onStart: animatePseudo,
      onStartParams: ['.skill__heading']
    })
    skillAnim1.add(this.animateProgramming())
    this.animateDesign()
    // skillAnim1.add(this.animateDesign())
  },
  methods: {
    animateProgramming () {
      const tl = gsap.timeline()
        .from('.programming__img', {
          duration: this.animSpeed,
          opacity: 0,
          x: 100
        }, '-=0.5')
        .from('.programming__title', {
          duration: this.animSpeed,
          opacity: 0,
          x: 100
        }, '-=0.5')
        .from('.programming__description', {
          duration: this.animSpeed,
          opacity: 0,
          x: -50
        }, '-=0.5')
        .from('.programming__tool', {
          duration: 0.5,
          opacity: 0,
          stagger: 0.1,
          x: -20
        }, '-=0.5')
      return tl
    },
    animateDesign () {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.design',
          start: '20% bottom',
          markers: true
        }
      })
        .from('.design__img', {
          duration: this.animSpeed,
          opacity: 0,
          x: 100
        }, '-=0.5')
        .from('.design__title', {
          duration: this.animSpeed,
          opacity: 0,
          x: 100
        }, '-=0.5')
        .from('.design__description', {
          duration: this.animSpeed,
          opacity: 0,
          x: 50
        }, '-=0.5')
        .from('.design__tool', {
          duration: 0.5,
          opacity: 0,
          stagger: 0.1,
          x: 20
        }, '-=0.5')
      return tl
    }
  }
}
</script>

<style lang="scss" scoped>
.skill {
  width: 100%;
  box-sizing: border-box;
  &__heading {
    @include heading;
    &.animatePseudo::after {
      transition-delay: 0.25s;
      width: 25%;
    }
  }
  .programming {
    width: 100%;
    text-align: left;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    column-gap: clamp(30px, 10vh, 150px);
    @include pdGeneralHr;
    &__img {
      display: flex;
      width: 100%;
      > img {
        width: 100%;
      }
    }
    &__title {
      font-size: 72px;
      position: relative;
      transform: translate3d(-30%, 0, 0);
      &::after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 30%;
        background-color: setColor(text-color);
        width: 80%;
        height: 5px;
      }
    }
    &__description {
      padding: 20px 0px;
      padding-right: clamp(20px, 5vw, 50px);
      font-weight: bold;
      color: setColor(text-color);
    }
    &__skill {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      .toolwrapper::v-deep {
        margin: 10px;
        color: setColor(text-color-light, 1);
      }
    }
  }
  .design {
    width: 100%;
    text-align: right;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    column-gap: clamp(30px, 10vh, 150px);
    @include pdGeneral;
    &__img {
      display: flex;
      width: 100%;
      > img {
        width: 100%;
      }
    }
    &__title {
      font-size: 72px;
      position: relative;
      transform: translate3d(30%, 0, 0);
      &::after {
        content: "";
        position: absolute;
        bottom: -10px;
        right: 30%;
        background-color: setColor(text-color);
        width: 80%;
        height: 5px;
      }
    }
    &__description {
      padding: 20px 0px;
      padding-left: clamp(20px, 5vw, 50px);
      font-weight: bold;
      color: setColor(text-color);
    }
    &__skill {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      .toolwrapper::v-deep {
        margin: 10px;
        color: setColor(text-color-light, 1);
      }
    }
  }
}
</style>
