<template lang="pug">
  div(class="artwork")
    h1(class="artwork__heading") Artwork
    div(class="creation")
      div(class="creation__demo")
        img(class="creation__img" :src="require('@/assets/artwork/creation/oblogo.png')")
        img(class="creation__img" :src="require('@/assets/artwork/creation/soc.png')")
        img(class="creation__img" :src="require('@/assets/artwork/creation/lebron.png')")
        img(class="creation__img" :src="require('@/assets/artwork/creation/obposter.png')")
        img(class="creation__img" :src="require('@/assets/artwork/creation/poster.png')")
        img(class="creation__img" :src="require('@/assets/artwork/creation/annie.png')")
    h2(class="sub-heading") Isometric Building
    div(class="iso-building")
      div(class="button button__prev" @click="prev")
      div(class="iso-building__img-section")
        img(class="iso-building__img" :src="require(`@/assets/artwork/isometric/${buildingInfo[currIndex].img}`)")
      div(class="iso-building__info-section")
        div(class="iso-building__location") {{buildingInfo[currIndex].location}}
        div(class="iso-building__name") {{buildingInfo[currIndex].name}}
      div(class="button button__next" @click="next")
    div(class="iso-building__dot" v-for="index in buildingInfo.length" :style="{'opacity': index-1 === currIndex ? 1: 0.4}" @click="jumpTo(index)")
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { animatePseudo } from '@/utils/utility.js'
import VanillaTilt from 'vanilla-tilt'

import { mapState } from 'vuex'
export default {
  data () {
    return {
      animSpeed: 0.7,
      currIndex: 0,
      isoAnim: null,
      isAnimating: false
    }
  },
  mounted () {
    const artworkAnim = gsap.timeline({
      scrollTrigger: {
        trigger: '.artwork__heading',
        start: 'top bottom',
        markers: true
      }
    }).from('.artwork__heading', {
      duration: this.animSpeed,
      y: 100,
      opacity: 0,
      onStart: animatePseudo,
      onStartParams: ['.artwork__heading']
    })

    const demoAnim = gsap.to('.creation__demo', {
      scrollTrigger: {
        trigger: '.creation__demo',
        start: 'bottom bottom',
        end: 'bottom top',
        scrub: 1
      },
      xPercent: -50
    })
    this.isoAnim = this.isoAnimation()

    // handle tilt animation

    VanillaTilt.init(document.querySelectorAll('.creation__img'), {
      max: 10,
      speed: 600,
      scale: 1.05
    })

    VanillaTilt.init(document.querySelectorAll('.iso-building__img-section'), {
      max: 10,
      speed: 600,
      scale: 1.05
    })
  },
  computed: {
    ...mapState({
      buildingInfo: 'buildingInfo'
    })
  },
  methods: {
    isoAnimation () {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.iso-building__img-section',
          start: 'top bottom',
          markers: true
        }
      })
        .from('.iso-building__img-section', {
          duration: this.animSpeed,
          scale: 0,
          opacity: 0,
          ease: 'power4.out',
          onStart: () => { this.isAnimating = true }
        })
        .from('.iso-building__img', {
          duration: this.animSpeed * 1.5,
          scale: 0,
          opacity: 0,
          ease: 'power4.out'
        }, '-=0.3')
        .from('.iso-building__location', {
          duration: this.animSpeed,
          x: -200,
          opacity: 0,
          ease: 'power4.out'
        }, '-=0.6')
        .from('.iso-building__name', {
          duration: this.animSpeed,
          x: -200,
          opacity: 0,
          ease: 'power4.out',
          onComplete: () => { this.isAnimating = false }
        }, '-=0.3')
      return tl
    },
    switchIso (direction) {
      let delta = direction === 'next' ? 200 : -200
      this.isoAnim
        .from('.iso-building__img', {
          duration: this.animSpeed * 1.5,
          opacity: 0,
          x: -delta,
          ease: 'power4.out',
          onStart: () => { this.isAnimating = true }
        })
        .from('.iso-building__location', {
          duration: this.animSpeed * 0.7,
          x: -200,
          opacity: 0,
          ease: 'power4.out'
        }, '-=0.6')
        .from('.iso-building__name', {
          duration: this.animSpeed * 0.7,
          x: -200,
          opacity: 0,
          ease: 'power4.out',
          onComplete: () => { this.isAnimating = false }
        }, '-=0.3')
    },
    next () {
      if (!this.isAnimating) {
        this.switchIso('next')
        this.currIndex = (this.currIndex + 1) % (this.buildingInfo.length)
      }
    },
    prev () {
      if (!this.isAnimating) {
        this.switchIso('prev')
        this.currIndex - 1 < 0 ? this.currIndex = this.buildingInfo.length - 1 : this.currIndex -= 1
      }
    },
    jumpTo (index) {
      if (!this.isAnimating) {
        if (index - 1 !== this.currIndex) {
          index - 1 > this.currIndex ? this.switchIso('next') : this.switchIso('prev')
          this.currIndex = index - 1
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.artwork {
  &__heading {
    @include heading;
    &.animatePseudo::after {
      transition-delay: 0.25s;
      width: 25%;
    }
  }
  .creation {
    background: setColor(brown);
    height: 500px;
    overflow: hidden;
    > div:nth-child(1) {
      height: 100%;
      display: flex;
      flex-wrap: nowrap;
      padding: 50px 0px;
      box-sizing: border-box;
      animation: demo 15s linear infinite;
    }
    &__img {
      height: 100%;
      object-fit: contain;
      border-radius: 10px;
      margin: 0px 20px;
      box-shadow: -5px -5px 10px setColor(black, 0.3),
        5px 5px 10px setColor(black, 0.7);
      transition: 0.5s ease-out;
      &:hover {
        transform: translateY(-15px);
      }
    }
  }
  .sub-heading {
    font-size: 64px;
    position: relative;
    text-align: left;
    padding-left: calc((100vw - 1300px) / 2);
    box-sizing: border-box;
    margin: 100px 0px;
    &::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 10%;
      background-color: setColor(text-color);
      width: 500px;
      height: 5px;
    }
  }
  .iso-building {
    @include pdGeneralHr;
    display: grid;
    align-items: center;
    position: relative;
    grid-template-rows: 1fr;
    grid-template-columns: auto auto 1fr auto;
    &__img-section {
      @include size(400px);
      background-color: setColor(secondary);
      position: relative;
      transform-style: preserve-3d;
      transform: perspective(1000px);
      &::after {
        content: "";
        @include size(100%);
        top: 0px;
        left: 0px;
        position: absolute;
        border: 2px solid setColor(secondary);
        box-sizing: border-box;
        transform: scale(1.05);
      }
    }
    &__img {
      width: 100%;
      padding: 20px;
      transform: translateZ(20px);
      box-sizing: border-box;
      object-fit: contain;
      filter: drop-shadow(0px 15px 10px setColor(primary, 0.6));
    }
    &__info-section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      transform: translate3d(-2rem, 0, 0);
    }

    &__location {
      font-size: 2rem;
    }
    &__name {
      font-size: 3rem;
      font-weight: bold;
      text-align: left;
      position: relative;
      line-height: 4rem;
      &::after {
        content: "";
        position: absolute;
        bottom: -40px;
        left: 0px;
        transform: translate3d(-50%, 0, 0);
        height: 10px;
        width: 100px;
        background-color: setColor(text-color);
      }
    }
    &__dot {
      @include size(10px);
      border-radius: 50%;
      background-color: white;
      display: inline-block;
      margin: 40px 5px;
      transition: 0.5s;
    }
  }
  .button {
    background-color: white;
    &__prev {
      @include size(50px);
      transform: translate3d(-60px, 0, 0);
    }
    &__next {
      @include size(50px);
      transform: translate3d(60px, 0, 0);
    }
  }
}
</style>
