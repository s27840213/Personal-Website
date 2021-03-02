<template lang="pug">
  transition(name="slide" @after-leave="SET_isLoading(false)")
    div(v-show="getIsLoading" class="loading")
      div(class="loading__view")
        div(class="loading__bar" v-for="i in 10")
</template>

<script>
import gsap from 'gsap'
import { mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      timeline: null
    }
  },
  mounted () {
    this.timeline = gsap.timeline({})
    setTimeout(() => {
      this.SET_isLoading(false)
    }, 2000)
    this.timeline.to('.loading__bar', {
      duration: 0.25,
      scaleY: 0.1,
      delay: -0.2,
      stagger: {
        amount: 0.4,
        yoyo: true,
        repeat: -1
      }
    })
  },
  computed: {
    ...mapGetters({
      getIsLoading: 'getIsLoading'
    })
  },
  watch: {
    getIsLoading () {
      if (this.getIsLoading) {
        setTimeout(() => {
          this.SET_isLoading(false)
        }, 1500)
      }
    }
  },
  methods: {
    ...mapMutations({
      SET_isLoading: 'SET_isLoading'
    })
  }
}
</script>

<style lang="scss" scoped>
.loading {
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: setColor(primary);
  z-index: setZindex("loading");
  overflow: hidden;
  &__view {
    display: flex;
    position: fixed;
    font-size: 3rem;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
  &__bar {
    @include size(5px, 65px);
    background-color: setColor(text-color);
    margin: 5px;
  }
}
.slide {
  &-enter-active {
    transition: transform 0.3s;
  }
  &-leave-active {
    transition: transform 0.3s;
  }
  &-enter {
    transform: translateX(-100%);
  }
  &-leave-to {
    transform: translateX(100%);
  }
}
</style>
