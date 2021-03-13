<template lang="pug">
  div(class="ky-landing-page")
    div(class="main-scene")
      img(class="main-scene__building" :src="require('@/assets/img/kyronus/main-scene.png')")
      img(class="main-scene__flyingship" :src="require('@/assets/img/kyronus/flyingship.png')")
      img(class="main-scene__duino" :src="require('@/assets/img/kyronus/duino.png')")
      div(class="main-scene__info")
        img(class="main-scene__logo" :src="require('@/assets/img/kyronus/logo.png')")
        div(class="main-scene__slogan")
          div(class="slogan")
            span 在你的城市
          div(class="slogan")
            span 開拓屬於你的城市
</template>

<script>
import { gsap } from 'gsap'
import { mapGetters, mapMutations } from 'vuex'

export default {
  data () {
    return {
      animSpeed: 0.7,
      tl: null
    }
  },
  computed: {
    ...mapGetters({
      getIsLoading: 'getIsLoading'
    })
  },
  methods: {
    ...mapMutations({
      SET_isLoading: 'SET_isLoading'
    })
  },
  watch: {
    getIsLoading () {
      if (this.getIsLoading) {
        this.tl.pause()
      } else {
        if (this.hasPlayed) {
          // this.tl.restart()
        } else {
          this.tl.play()
          this.hasPlayed = true
        }
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.SET_isLoading(false)
    }, 1000)
    this.tl = gsap.timeline()
    if (this.getIsLoading) {
      this.tl.pause()
    }
    this.tl.from('.main-scene', {
      duration: this.animSpeed * 2,
      scale: 2,
      ease: 'power4.out'
    }, 's')
      .from('.main-scene__building', {
        duration: this.animSpeed * 3,
        yPercent: 100,
        ease: 'power4.out'
      }, 's-=0.4')
      .from('.main-scene__flyingship', {
        duration: this.animSpeed * 3,
        yPercent: 100,
        ease: 'power4.out'
      }, 's-=0.4')
      .from('.main-scene__duino', {
        duration: this.animSpeed * 3,
        yPercent: 100,
        rotate: 20,
        ease: 'power4.out'
      }, '-=1')
      .from('.main-scene__logo', {
        duration: this.animSpeed,
        x: -50,
        opacity: 0,
        ease: 'power4.out'
      }, '-=1.5')
      .from('.slogan', {
        duration: this.animSpeed * 1.2,
        stagger: 0.5,
        xPercent: -120,
        opacity: 0,
        ease: 'power2.out'
      }, '-=1.2')
  },
  beforeDestroy () {
    this.tl.kill()
  }
}
</script>

<style lang="scss" scoped>
.ky-landing-page {
  height: 100vh;
  background-image: getKyronusImg("star-bg");
  background-position: center center;
  background-size: cover;
  overflow: hidden;
}

.main-scene {
  height: 100%;
  width: 100%;
  position: relative;

  &__duino {
    position: absolute;
    bottom: -100px;
    right: -50px;
    width: clamp(200px, 40vw, 400px);
    transform-origin: bottom right;
    @include mobileStyle {
      bottom: clamp(-50px);
      right: -25px;
    }
  }
  &__building {
    position: absolute;
    bottom: -10%;
    left: calc(-200px + 15vw);
    width: clamp(700px, 110%, 110%);
    @include mobileStyle {
      bottom: -5%;
      left: calc(-500px + 40vw);
      width: clamp(800px, 110%, 110%);
    }
  }
  &__flyingship {
    position: absolute;
    bottom: clamp(250px, 40vw, 500px);
    right: 10%;
    width: clamp(100px, 15vw, 300px);
  }
  &__info {
    display: flex;
    align-items: center;
    padding: 50px;
    @include mobileStyle {
      padding: calc(50px + 10vh) 50px 0 50px;
      flex-direction: column;
      justify-content: center;
    }
  }
  &__logo {
    width: clamp(175px, 25vw, 250px);
  }
  &__slogan {
    text-align: left;
    font-size: clamp(20px, 5vw, 50px);
    padding: clamp(10px, 4vw, 30px);
    z-index: setZindex("paragraph");
    overflow: hidden;
    @include mobileStyle {
      text-align: center;
    }
    span {
      text-shadow: map-get($shadow, purple);
    }
  }
}
</style>
