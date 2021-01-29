<template lang="pug">
  div(class="root-skill")
    h1(class="heading") Skill Set
    div(class="programming")
      div(class="programming__img")
        img(:src="require('@/assets/img/designer4.svg')")
      div
        h2(class="programming__title") Programmer
        div(class="programming__description") A Front End Developer who focus on writing clean, elegant and efficient code
        div(class="programming__skill")
          tool-wrapper(v-for="i in 10" :key="`tool-${i}`" :fontSize="16" :icon="'sass'" toolName="Photoshop")
    div(class="design")
      div
        h2(class="design__title") Designer
        div(class="design__description") A Designer with a passion for creating beatiful and intriguing artworks
        div(class="design__skill")
          tool-wrapper(v-for="i in 10" :key="`tool-${i}`" :fontSize="16" :icon="'sass'" toolName="Photoshop")
      div(class="design__img")
        img(:src="require('@/assets/img/designer4.svg')")
</template>

<script>
import ToolWrapper from '@/components/ToolWrapper.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
export default {
  components: {
    ToolWrapper
  },
  data () {
    return {
      skillMain: ['']
    }
  },
  mounted () {
    const skillAnim1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.root-about',
        start: 'center bottom'
      }
    })
    skillAnim1.from('.root-skill', {
      duration: 1,
      x: -100,
      opacity: 0
    }, 's')
      .from(this.animTarget1, {
        duration: 1,
        opacity: 0,
        x: -50
      }, '-=0.5')
  }
}
</script>

<style lang="scss" scoped>
.root-skill {
  width: 100%;
  box-sizing: border-box;

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
