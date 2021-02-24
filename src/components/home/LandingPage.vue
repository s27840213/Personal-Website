<template lang="pug">
  div(class="landing-page")
    div(class="landing-page__container")
      img(class="layer layer1" data-speed= "0" :src="require('@/assets/img/landingPage/layer1.png')")
      img(class="layer layer2" data-speed= "2" :src="require('@/assets/img/landingPage/layer2.png')")
      img(class="layer layer2__house" data-speed= "2" :src="require('@/assets/img/landingPage/layer2_house.svg')")
      img(class="layer layer3" data-speed= "4" :src="require('@/assets/img/landingPage/layer3.png')")
      img(class="layer layer4__left" data-speed= "5" :src="require('@/assets/img/landingPage/layer4_left.svg')")
      img(class="layer layer4__right" data-speed= "5" :src="require('@/assets/img/landingPage/layer4_right.svg')")
      img(class="layer layer5" data-speed= "6" :src="require('@/assets/img/landingPage/layer5.svg')")
      img(class="layer layer6" data-speed= "7" :src="require('@/assets/img/landingPage/layer6.svg')")
      img(class="layer layer7" data-speed= "8" :src="require('@/assets/img/landingPage/layer7.svg')")
      img(class="layer layer8" data-speed= "10" :src="require('@/assets/img/landingPage/moon.svg')")
      div(class="msg-block")
        div
          div(class="msg-block__msg") Welcome Here
        div
          div(class="msg-block__msg") I'm Alan Chang
        div
          div(class="msg-block__msg") Front-end Engineer | Web Designer
</template>

<script>

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { mapGetters, mapMutations } from 'vuex'

export default {
  data () {
    return {
      hasPlayed: false,
      landingPageAnim: null,
      screenHeight: null
    }
  },
  mounted () {
    this.screenHeight = document.querySelector('.landing-page').offsetHeight
    document.addEventListener('scroll', this.parallax)
    this.landingPageAnim = gsap.timeline({
      paused: true
    })
    let msg = document.querySelectorAll('.msg-block__msg')
    document.querySelectorAll('.layer').forEach((layer, index) => {
      if (index === 0) {
        this.landingPageAnim.from(layer, {
          duration: 1,
          yPercent: 100,
          ease: 'power4.out'
        }, 's')
      } else if (index === 9) {
        /**
         * For moon animation
         */
        this.landingPageAnim.from(layer, {
          duration: 1,
          opacity: 0,
          y: 200,
          ease: 'power4.out'
        }, '-=0.5')
      } else {
        this.landingPageAnim.from(layer, {
          duration: 1,
          yPercent: 100,
          ease: 'power4.out'
        }, '-=0.85')
      }
    })
    this.landingPageAnim.from('.landing-page__container', {
      duration: 2,
      scale: 2,
      ease: 'power4.out'
    }, 's')
    this.landingPageAnim.from(msg[0], {
      duration: 0.7,
      opacity: 0,
      ease: 'power4.out',
      y: 30
    }, '-=0.3')
      .from(msg[1], {
        duration: 1.2,
        ease: 'power4.out',
        yPercent: 100
      })
      .from(msg[2], {
        duration: 0.7,
        ease: 'power4.out',
        xPercent: -100
      }, '-=0.6')
  },
  computed: {
    ...mapGetters({
      getIsLoading: 'getIsLoading'
    })
  },
  watch: {
    getIsLoading () {
      if (this.getIsLoading) {
        this.landingPageAnim.pause()
      } else {
        if (this.hasPlayed) {
          // this.landingPageAnim.restart()
        } else {
          this.landingPageAnim.play()
          this.hasPlayed = true
        }
      }
    }
  },
  methods: {
    parallax (e) {
      let scroll = window.pageYOffset
      if (scroll < this.screenHeight) {
        document.querySelectorAll('.layer').forEach(layer => {
          const speed = layer.getAttribute('data-speed')
          gsap.to(layer, {
            y: scroll * speed / 15
          })
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.landing-page {
  box-sizing: border-box;
  @include size(100vw, 100vh);
  max-width: 100%;
  position: relative;
  overflow: hidden;
  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
    @include size(100vw, 100vh);
    position: relative;
    overflow: hidden;
    background-color: #fedcc8;
  }
  .layer {
    position: absolute;
    &1 {
      bottom: -5px;
      z-index: setZindex("layer1");
      width: clamp(1000px, 100%, 100%);
    }
    &2 {
      bottom: 0px;
      left: -10px;
      z-index: setZindex("layer2");
      width: clamp(300px, 60vw, 800px);
      &__house {
        bottom: 0px;
        right: 0px;
        width: clamp(100px, 10vw, 10vw);
        z-index: setZindex("layer2");
      }
    }
    &3 {
      bottom: 0px;
      right: 0px;
      z-index: setZindex("layer3");
      width: clamp(400px, 100vw, 100vw);
    }
    &4 {
      &__left {
        bottom: 0px;
        left: 0%;
        z-index: setZindex("layer4");
        width: clamp(600px, 100vw, 100vw);
      }
      &__right {
        bottom: 0px;
        right: 0px;
        z-index: setZindex("layer4");
      }
    }
    &5 {
      bottom: 0px;
      z-index: setZindex("layer5");
      width: clamp(800px, 100vw, 100vw);
    }
    &6 {
      bottom: 0px;
      z-index: setZindex("layer6");
      width: clamp(1000px, 100vw, 100vw);
    }
    &7 {
      bottom: 0px;
      z-index: setZindex("layer7");
      width: clamp(1000px, 100vw, 100vw);
    }
    &8 {
      bottom: clamp(300px, 50vw, 65vh);
      right: clamp(50px, 10vw, 500px);
      z-index: setZindex("moon");
      width: clamp(100px, 10vw, 100px);
    }
  }
}
.msg-block {
  color: setColor(primary);
  font-weight: bold;
  z-index: setZindex("paragraph");
  > div {
    &:nth-child(1) {
      font-size: clamp(1.5rem, 5vw, 2rem);
      opacity: 0.7;
      transform: translate3d(0, 10px, 0);
    }
    &:nth-child(2) {
      font-size: 3rem;
      font-weight: 800;
      opacity: 0.8;
      overflow: hidden;
    }
    &:nth-child(3) {
      font-size: 1.5rem;
      color: setColor(red);
      opacity: 0.7;
      overflow: hidden;
      transform: translate3d(0, -10px, 0);
    }
  }
}
</style>
