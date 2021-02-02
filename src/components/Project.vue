<template lang="pug">
  div(class="project")
    h1(class="project__heading") Project
    div(class="project-1")
      div
        div(class="project-1__task") UI, Illustration, Front-end
        div(class="project-1__name") Kyronus
        div(class="project-1__media")
          a(href="#" target="blank")
            img(class="project-1__icon" :src="require('@/assets/icon/fb.svg')")
          a(href="#" target="blank")
            img(class="project-1__icon" :src="require('@/assets/icon/ig.svg')")
        div(class="project-1__description")  Passionate about coding with motion graphic design. Like to learning  new technologies to sharpen my programming skills. I’m currently work as an front-end.
        div(class="project-1__button")
          span more info
      div(class="tilt-target project-1__img")
    div(class="project-2")
      div(class="tilt-target project-2__img")
      div
        div(class="project-2__task") UI, Animation, Front-end
        div(class="project-2__name") Telecan
        div(class="project-2__description")  Passionate about coding with motion graphic design. Like to learning  new technologies to sharpen my programming skills. I’m currently work as an front-end.
        div(class="project-2__button")
          span visit site
    div(class="practice")
      span(class="practice__text") Watch Some Practices on my
      div(class="practice__icon-set")
        img(class="practice__icon" :src="require('@/assets/icon/github.svg')")
        a(href="https://codepen.io/collection/AMdQPg?sort_by=id&cursor=ZD0wJm89MCZwPTEmdj03MDQ4Nzcx" target="blank")
          img(class="practice__icon" :src="require('@/assets/icon/codepen.svg')")
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { animatePseudo } from '@/utils/utility.js'
import VanillaTilt from 'vanilla-tilt'

export default {
  data () {
    return {
      animSpeed: 0.7
    }
  },
  mounted () {
    const projectAnim = gsap.timeline({
      scrollTrigger: {
        trigger: '.project__heading',
        start: 'top bottom',
        markers: true
      }
    }).from('.project__heading', {
      duration: this.animSpeed,
      y: 100,
      opacity: 0,
      onStart: animatePseudo,
      onStartParams: ['.project__heading']
    })
    this.animProject1()
    this.animProject2()

    gsap.from('.practice', {
      scrollTrigger: {
        trigger: '.practice',
        start: 'top bottom'
      },
      duration: 1,
      y: 200,
      opacity: 0
    })

    VanillaTilt.init(document.querySelectorAll('.tilt-target'), {
      max: 5,
      reverse: true,
      speed: 400
    })
  },
  methods: {
    animProject1 () {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.project-1',
          start: 'center bottom',
          autoRemoveChildren: true
        }
      })
        .from('.project-1__img', {
          duration: this.animSpeed,
          x: 100,
          opacity: 0
        })
        .from('.project-1__task', {
          duration: this.animSpeed,
          x: -100,
          opacity: 0
        }, '-=0.5')
        .from('.project-1__name', {
          duration: this.animSpeed,
          x: -100,
          opacity: 0
        }, '-=0.5')
        .from('.project-1__media', {
          duration: this.animSpeed,
          x: 100,
          opacity: 0
        }, '-=0.5')
        .from('.project-1__description', {
          duration: this.animSpeed,
          x: 100,
          opacity: 0
        }, '-=0.5')
        .from('.project-1__button', {
          duration: this.animSpeed,
          x: 100,
          opacity: 0
        }, '-=0.5')
    },
    animProject2 () {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.project-2',
          start: 'center bottom',
          markers: true,
          autoRemoveChildren: true
        }
      })
        .from('.project-2__img', {
          duration: this.animSpeed,
          x: -100,
          opacity: 0
        })
        .from('.project-2__task', {
          duration: this.animSpeed,
          x: 100,
          opacity: 0
        }, '-=0.5')
        .from('.project-2__name', {
          duration: this.animSpeed,
          x: 100,
          opacity: 0
        }, '-=0.5')
        .from('.project-2__description', {
          duration: this.animSpeed,
          x: -100,
          opacity: 0
        }, '-=0.5')
        .from('.project-2__button', {
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
  text-shadow: 4px 4px setColor(secondary);
}

.project {
  width: 100%;
  overflow: hidden;
  &__heading {
    @include heading;
    &.animatePseudo::after {
      transition-delay: 0.25s;
      width: 25%;
    }
  }
  .project-1 {
    @include pdGeneral;
    display: grid;
    align-items: center;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1.3fr;
    column-gap: 30px;
    text-align: right;
    background-color: setColor(secondary, 0.3);
    background-image: url("~@/assets/img/grids.png");
    margin-bottom: 100px;
    > div:nth-child(1) {
      z-index: setZindex(default-2);
    }
    &__img {
      @include size(100%, 0);
      padding-top: 56.25%;
      position: relative;
      z-index: setZindex(default-1);
      background-image: linear-gradient(
          to right,
          setColor(primary, 0.3) 0%,
          transparent 50%
        ),
        url("~@/assets/img/kyronus2.png");
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      transform-style: preserve-3d;
      transform: perspective(1000px);
      &:hover {
        transform: scale(1.1);
      }
      &::after {
        content: "02";
        position: absolute;
        bottom: 0;
        right: 0;
        font-size: 96px;
        font-weight: bold;
        transform: translate3d(50%, 50%, 20px);
      }
    }
    &__task {
      font-size: 2rem;
      font-weight: bold;
      transform: translate3d(15%, 0, 0);
      @include textShadow;
    }
    &__name {
      font-size: 4rem;
      font-weight: bold;
      transform: translate3d(15%, 0, 0);
      @include textShadow;
    }
    &__media {
      display: flex-end;
      img {
        @include size(30px);
        margin: 10px 15px;
        transform: translate3d(30px, 0, 0);
      }
    }
    &__description {
      font-size: 1.2rem;
      margin: 20px 0px;
      box-sizing: border-box;
      color: setColor(text-color);
      text-align: left;
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
  .project-2 {
    @include pdGeneral;
    display: grid;
    align-items: center;
    grid-template-rows: 1fr;
    grid-template-columns: 1.3fr 1fr;
    column-gap: 30px;
    text-align: left;
    background-color: setColor(secondary, 0.4);
    background-image: url("~@/assets/img/grids.png");
    &__img {
      @include size(100%, 0);
      padding-top: 62%;
      position: relative;
      background-image: linear-gradient(
          to left,
          setColor(primary, 0.3) 0%,
          transparent 50%
        ),
        url("~@/assets/img/telecan.png");
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      transform-style: preserve-3d;
      transform: perspective(1000px);
      &:hover {
        transform: scale(1.1);
      }
      &::after {
        content: "02";
        position: absolute;
        bottom: 0;
        left: 0;
        font-size: 96px;
        font-weight: bold;
        transform: translate3d(-50%, 50%, 20px);
      }
    }
    &__task {
      font-size: 2rem;
      font-weight: bold;
      transform: translate3d(-25%, 0, 0);
      @include textShadow;
    }
    &__name {
      font-size: 4rem;
      font-weight: bold;
      transform: translate3d(-25%, 0, 0);
      @include textShadow;
    }
    &__description {
      font-size: 1.2rem;
      margin: 20px 0px;
      box-sizing: border-box;
      color: setColor(text-color);
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

  .practice {
    margin-top: 100px;
    font-size: 1.5rem;
    font-weight: 700;
    &__icon {
      width: 40px;
      height: 40px;
      margin: 20px 20px;
      transition: 0.3s ease-out;
      cursor: pointer;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
}
</style>
