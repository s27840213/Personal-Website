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
    div(class="iso")
      div(class="iso-building" v-for="building in buildingInfo")
        img(class="iso-building__img" :src="require(`@/assets/artwork/isometric/${building.img}`)")
        div(class="iso-building__location") {{building.location}}
        div(class="iso-building__name") {{building.name}}
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

    VanillaTilt.init(document.querySelectorAll('.iso-building'), {
      max: 10,
      speed: 600,
      scale: 1.05,
      glare: 1,
      'max-glare': 0.2
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
          trigger: '.iso',
          start: 'top bottom',
          markers: true
        }
      })
        .from('.iso-building', {
          duration: this.animSpeed * 2,
          y: 100,
          opacity: 0,
          ease: 'power4.out',
          stagger: 0.1,
          onStart: () => { this.isAnimating = true }
        }, '-=0.4')
      return tl
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
  .iso {
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 40px;
    column-gap: 40px;
    @include pdGeneral;

    &-building {
      @include glass;
      align-items: center;
      position: relative;
      border-radius: 10px;
      padding: 20px;
      transform-style: preserve-3d;
      transform: perspective(1000px);
      &:hover {
        .iso-building__img {
          transform: translateZ(20px) scale(1.1);
        }
      }
      &__img {
        width: 100%;
        padding: 20px;
        transform: translateZ(20px);
        box-sizing: border-box;
        object-fit: contain;
        filter: drop-shadow(0px 10px 10px setColor(primary, 0.8));
        transition: transform 0.4s;
      }

      &__location {
        font-size: 0.8rem;
        opacity: 0.8;
        transform: translateZ(20px);
      }
      &__name {
        font-size: 1.2rem;
        font-weight: bold;
        position: relative;
        transform: translateZ(20px);
        margin-top: 10px;
        &::after {
          content: "";
          position: absolute;
          top: -5px;
          left: 50%;
          transform: translate3d(-50%, 0, 0);
          height: 2px;
          width: 60%;
          background-color: setColor(text-color);
        }
      }
    }
  }
}
</style>
