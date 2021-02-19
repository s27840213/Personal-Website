<template lang="pug">
  div(class="project-wrapper")
    div(class="tilt-targetProject project-wrapper__img" :style="{'background-image': `url(${mapProjectImg()})`}")
      div(class="project-wrapper__index") 0{{index+1}}
    div(class="project-wrapper__info")
      div(class="project-wrapper__task") {{projectInfo.task}}
      div(class="project-wrapper__name") {{projectInfo.name}}
      div(v-if="projectInfo.media !== null" class="project-wrapper__media")
        a(v-for="media in projectInfo.media" :href="`${media.url}`" target="blank")
          img(class="project-wrapper__icon" :src="require(`@/assets/icon/${media.name}.svg`)")
      div(class="project-wrapper__description")  {{projectInfo.description}}
      div(class="project-wrapper__button")
          span {{projectInfo.button}}
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import VanillaTilt from 'vanilla-tilt'
import { mappingUrl, isMobile } from '@/utils/utility.js'

export default {
  props: {
    projectInfo: Object,
    index: Number
  },
  data () {
    return {
      animSpeed: 0.7
    }
  },
  mounted () {
    this.animProject()
  },
  methods: {
    mappingUrl,
    mapProjectImg () {
      return require(`@/assets/img/${this.projectInfo.cover}`)
    },
    animProject () {
      const targetProject = document.querySelectorAll('.project-wrapper')[this.index]
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: targetProject,
          start: 'center bottom',
          autoRemoveChildren: true
        }
      })
        .from(targetProject.querySelector('.project-wrapper__img'), {
          duration: this.animSpeed,
          x: -100,
          opacity: 0,
          onComplete: () => {
            if (!isMobile) {
              VanillaTilt.init(targetProject.querySelector('.project-wrapper__img'), {
                max: 5,
                reverse: true,
                speed: 400,
                scale: 1.05
              })
            }
          }
        })
        .from(targetProject.querySelector('.project-wrapper__index'), {
          duration: this.animSpeed,
          x: 100,
          opacity: 0,
          clearProps: 'all'
        }, '-=0.5')
        .from(targetProject.querySelector('.project-wrapper__task'), {
          duration: this.animSpeed,
          x: 100,
          opacity: 0,
          clearProps: 'all'
        }, '-=0.5')
        .from(targetProject.querySelector('.project-wrapper__name'), {
          duration: this.animSpeed,
          x: 100,
          opacity: 0,
          clearProps: 'all'
        }, '-=0.5')
        .from(targetProject.querySelector('.project-wrapper__media'), {
          duration: this.animSpeed,
          x: -100,
          opacity: 0,
          clearProps: 'all'
        }, '-=0.5')
        .from(targetProject.querySelector('.project-wrapper__description'), {
          duration: this.animSpeed,
          x: -100,
          opacity: 0
        }, '-=0.5')
        .from(targetProject.querySelector('.project-wrapper__button'), {
          duration: this.animSpeed,
          x: -100,
          opacity: 0
        }, '-=0.5')
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin textShadow() {
  text-shadow: 0px 2px 5px setColor(secondary);
}
@mixin description() {
  font-size: 1rem;
  font-weight: 300;
  box-sizing: border-box;
  color: setColor(text-color);
  text-align: left;
  line-height: 200%;
}
@include pcStyle {
  .project-wrapper {
    @include pdGeneral;
    display: grid;
    align-items: center;
    grid-template-rows: 1fr;
    grid-template-columns: 1.3fr 1fr;
    column-gap: 30px;
    text-align: left;
    background-color: setColor(secondary, 0.4);
    &__img {
      @include size(100%, 0);
      padding-top: 62%;
      position: relative;
      background-color: setColor(primary);
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      &:hover {
        transform: scale(1.1);
      }
    }
    &__task {
      font-size: 2rem;
      font-weight: bold;
      transform: translate3d(-25%, 0, 0);
      @include textShadow;
    }
    &__media {
      display: inline-flex;
      > a {
        display: flex;
        align-items: center;
        box-sizing: border-box;
      }
      img {
        @include size(30px);
        transition: transform 0.3s;
        padding: 10px 10px;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
    &__name {
      font-size: 4rem;
      font-weight: bold;
      transform: translate3d(-25%, 0, 0);
      @include textShadow;
    }
    &__description {
      @include description;
    }
    &__index {
      position: absolute;
      bottom: 0;
      left: 0;
      font-size: 96px;
      font-weight: bold;
      transform: translate3d(-50%, 50%, 0px);
      @include textShadow;
    }
    &__button {
      display: inline-block;
      font-size: 2rem;
      font-weight: bold;
      position: relative;
      cursor: pointer;
      > span::after {
        content: "";
        position: absolute;
        background-color: setColor(text-color);
        @include size(50%, 2px);
        bottom: 0px;
        left: 0px;
        transition: 0.5s;
      }
      &:hover {
        > span::after {
          width: 100%;
        }
      }
    }
  }
}

@include mobileStyle {
  .project-wrapper {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
    column-gap: 30px;
    padding: 30px;
    background-color: setColor(secondary, 0.4);
    &__img {
      @include size(100%, 0);
      padding-top: 62%;
      position: relative;
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      margin-bottom: 40px;
      &:hover {
        transform: scale(1.1);
      }
    }
    &__task {
      font-size: 2rem;
      font-weight: bold;
      @include textShadow;
    }
    &__media {
      display: inline-flex;
      > a {
        display: flex;
        align-items: center;
        box-sizing: border-box;
      }
      img {
        @include size(30px);
        transition: transform 0.3s;
        padding: 10px 10px;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
    &__name {
      font-size: 4rem;
      font-weight: bold;
      @include textShadow;
    }
    &__description {
      @include description;
    }
    &__index {
      position: absolute;
      bottom: 0;
      left: 0;
      font-size: 4rem;
      font-weight: bold;
      transform: translate3d(-50%, 50%, 0px);
      @include textShadow;
    }
    &__button {
      display: inline-block;
      font-size: 2rem;
      font-weight: bold;
      position: relative;
      cursor: pointer;
      > span::after {
        content: "";
        position: absolute;
        background-color: setColor(text-color);
        @include size(50%, 2px);
        bottom: 0px;
        left: 0px;
        transition: 0.5s;
      }
      &:hover {
        > span::after {
          width: 100%;
        }
      }
    }
  }
}
</style>
