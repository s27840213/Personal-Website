<template lang="pug">
  div(class="skill")
    h1(class="skill__heading") Skill Set
    div(class="skill-set")
      div(class="skill-set__img")
        img(:src="require('@/assets/img/designer4.svg')")
      div(class="skill-set__info")
        div(class="skill-set__title") Primary Programming Tool
        div(class="skill-set__skill")
          div(class="tool skill-set__tool" v-for="skill in skillMain") {{skill}}
        div(class="skill-set__title") Secondary Programming Tool
        div(class="skill-set__skill")
          div(class="tool skill-set__tool" v-for="skill in skillSecondary") {{skill}}
        div(class="skill-set__title") Design Tool
        div(class="skill-set__skill")
          div(class="tool skill-set__tool" v-for="skill in skillDesign") {{skill}}
          //- tool-wrapper(class="skill-set__tool" v-for="i in 10" :key="`tool-${i}`" :fontSize="16" :icon="'sass'" toolName="Photoshop")
    //- div(class="design")
    //-   div
    //-     h2(class="design__title") Design Tool
    //-     div(class="design__description") A Designer with a passion for creating beatiful and intriguing artworks
    //-     div(class="design__skill")
    //-       div(class="tool design__tool" v-for="skill in skillDesign") {{skill}}
    //-       //- tool-wrapper(class="design__tool" v-for="i in 10" :key="`tool-${i}`" :fontSize="16" :icon="'sass'" toolName="Photoshop")
    //-   div(class="design__img")
    //-     img(:src="require('@/assets/img/designer4.svg')")
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
      skillMain: ['HTML/Pug', 'CSS / SASS/ SCSS', 'Javascript', 'Python', 'Vue / Vuex / Vue-router / Vue-Cli', 'GSAP', 'Ajax (axios)', 'RWD'],
      skillSecondary: ['C/C++/C#', 'Java', 'jQuery', 'Webpack', 'Echart.js/Canvas', 'Unity', 'Phaser.js'],
      skillDesign: ['Photoshop', 'Illustrator', 'After Effect', 'Figma', 'Adobe XD', 'Texture Packer', 'Eagle'],
      animSpeed: 0.7,
      skillAnim: null
    }
  },
  mounted () {
    this.skillAnim = gsap.timeline({
      scrollTrigger: {
        id: 'skillAnim',
        trigger: '.skill__heading',
        start: 'top bottom',
        autoRemoveChildren: true
      }
    }).from('.skill__heading', {
      duration: this.animSpeed,
      y: 100,
      opacity: 0,
      onStart: animatePseudo,
      onStartParams: ['.skill__heading']
    })
    this.skillAnim.add(this.animateSkill())
  },
  methods: {
    animateSkill () {
      const tl = gsap.timeline()
        .from('.skill-set__img', {
          duration: this.animSpeed,
          opacity: 0,
          x: 100
        }, '-=0.5')
        .from('.skill-set__title', {
          duration: this.animSpeed,
          opacity: 0,
          x: 100
        }, '-=0.5')
        .from('.skill-set__tool', {
          duration: 0.5,
          opacity: 0,
          stagger: {
            amount: 1.5
          },
          x: -20
        }, '-=0.5')
      return tl
    }
  },
  beforeDestroy () {
    this.skillAnim.pause(0).kill(true)
    ScrollTrigger.getById('skillAnim').kill(true)
  }
}
</script>

<style lang="scss" scoped>
.skill {
  width: 100%;
  box-sizing: border-box;

  &__heading {
    @include heading;
  }
  .skill-set {
    background-color: setColor(secondary, 0.4);
    box-sizing: border-box;
    width: 100%;
    text-align: left;
    display: grid;

    @include pcStyle {
      @include pdGeneral;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr 1.5fr;
      column-gap: 30px;
      align-items: center;
      justify-content: center;
      &__img {
        display: flex;
        > img {
          width: 100%;
          filter: drop-shadow(2px 2px 5px setColor(primary));
        }
      }
    }
    @include mobileStyle {
      padding: 30px 0;
      grid-template-rows: auto auto;
      grid-template-columns: 1fr;
      align-items: center;
      justify-content: center;
      &__img {
        display: flex;
        > img {
          width: 100%;
          padding: 0px 20%;
          margin-bottom: 40px;
          filter: drop-shadow(2px 2px 5px setColor(primary));
        }
      }
    }

    &__info {
      // border-left: 3px solid setColor(text-color);
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 10px;
    }
    &__title {
      font-size: 1.5rem;
      font-weight: bold;
      position: relative;
      margin: 10px 10px 10px 0px;
      &::after {
        content: "";
        position: absolute;
        height: 2px;
        left: 0;
        bottom: 0;
        background-color: setColor(text-color);
      }
    }
    &__skill {
      display: flex;
      box-sizing: border-box;
      padding: 5px;
      padding-left: 15px;
      flex-wrap: wrap;
      align-items: center;
    }
  }

  .tool {
    font-size: 1rem;
    color: setColor(text-color);
    padding: 5px 15px;
    margin: 5px 10px;
    border-radius: 40px;
    box-shadow: inset -1px -1px 0px setColor(text-color, 0.6),
      inset 1px 1px 0px setColor(black);
    transition: background-color 0.4s, color 0.3s, box-shadow 0.4s;
    cursor: pointer;
    &:hover {
      background-color: setColor(text-color);
      color: setColor(primary);
      box-shadow: inset 2px 2px 0px setColor(white, 1),
        inset -2px -2px 0px setColor(black, 0.4);
    }
  }
}
</style>
