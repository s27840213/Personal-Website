<template lang="pug">
  div(class="artwork")
    h1(class="artwork__heading") Artwork
    div(class="creation")
      div(v-for="(creation,index) in creations" class="creation__container" :class="`creation__container-${index}`")
        img(class="creation__img" :src="require(`@/assets/artwork/creation/${creation}`)")
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
import { animatePseudo, isMobile } from '@/utils/utility.js'
import VanillaTilt from 'vanilla-tilt'

import { mapState } from 'vuex'
export default {
  data () {
    return {
      animSpeed: 0.7,
      currIndex: 0,
      isoAnim: null,
      isAnimating: false,
      creations: ['obposter.png', 'lebron.png', 'annie.png', 'oblogo.png', 'poster.png', 'soc.png']
    }
  },
  mounted () {
    const artworkAnim = gsap.timeline({
      scrollTrigger: {
        trigger: '.artwork',
        start: 'top bottom',
        autoRemoveChildren: true
      }
    }).from('.artwork__heading', {
      duration: this.animSpeed,
      y: 100,
      opacity: 0,
      onStart: animatePseudo,
      onStartParams: ['.artwork__heading']
    }).from('.creation__container', {
      duration: this.animSpeed,
      opacity: 0,
      x: 50,
      stagger: 0.1
    })

    let creations = document.querySelectorAll('.creation__container')
    const creationAnim = gsap.timeline({
      scrollTrigger: {
        trigger: '.creation',
        start: 'top bottom'
      }
    })
    creations.forEach((creation, index) => {
      let direction = index % 2 === 0 ? -1 : 1
      gsap.to(creation, {
        scrollTrigger: {
          trigger: '.creation',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.2
        },
        yPercent: 50 * direction
      })
    })

    this.isoAnim = this.isoAnimation()

    // handle tilt animation
    if (!isMobile()) {
      VanillaTilt.init(document.querySelectorAll('.iso-building'), {
        max: 10,
        speed: 600,
        scale: 1.05,
        glare: 1,
        'max-glare': 0.2
      })
    }
  },
  computed: {
    ...mapState({
      buildingInfo: 'buildingInfo'
    })
  },
  methods: {
    isoAnimation () {
      const targets = document.querySelectorAll('.iso-building')
      targets.forEach(target => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: target,
            start: 'top bottom',
            maker: true,
            autoRemoveChildren: true
          }
        })
          .from(target, {
            duration: this.animSpeed * 2,
            y: 100,
            opacity: 0,
            ease: 'power4.out'
          }, '-=0.4')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@include pcStyle {
  .artwork {
    &__heading {
      @include heading;
      &.animatePseudo::after {
        transition-delay: 0.25s;
        width: 25%;
      }
    }
    .creation {
      @include pdGeneralHr;
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr 1fr;
      column-gap: 30px;
      row-gap: 30px;
      align-items: center;
      &__container {
        border-radius: 10px;
        margin: 50px 0px;
        width: 100%;
        transition: 0.5s ease-out;
        &-0 {
          align-self: flex-end;
        }
        &-5 {
          align-self: flex-start;
        }
      }
      &__img {
        width: 100%;
        border-radius: 10px;
        box-shadow: 8px 8px 5px setColor(black, 0.9);
      }
    }
    .sub-heading {
      font-size: 4rem;
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
}
@include mobileStyle {
  .artwork {
    &__heading {
      @include heading;
      &.animatePseudo::after {
        transition-delay: 0.25s;
        width: 25%;
      }
    }
    .creation {
      @include pdGeneralHr;
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr 1fr;
      column-gap: 10px;
      row-gap: 10px;
      align-items: center;
      padding: 0px 20px;
      &__img {
        border-radius: 10px;
        margin: 0px 20px;
        box-shadow: 8px 8px 5px setColor(black, 0.9);
        transition: 0.5s ease-out;
        margin: 20px 0px;
        width: 100%;
        &-0 {
          align-self: flex-end;
        }
        &-5 {
          align-self: flex-start;
        }
      }
    }
    .sub-heading {
      font-size: 4rem;
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
      grid-template-columns: repeat(1, 1fr);
      row-gap: 40px;
      column-gap: 40px;
      padding: 20px;
      &-building {
        @include glass;
        align-items: center;
        position: relative;
        padding: 20px;
        @include pcStyle {
          transform-style: preserve-3d;
          transform: perspective(1000px);
          &:hover {
            .iso-building__img {
              transform: translateZ(20px) scale(1.1);
            }
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
}
</style>
