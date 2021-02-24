<template lang="pug">
  div(class="navbar"  :style="{'background-color' : atTop ? '#2d112b' : 'transparent', 'color' : atTop ? 'white' : 'white'}")
    div(class="navbar__item" v-for="item in navList "
      @click="loading(item,'pc')")
      span {{item}}
    //- for mobile
    svg(class="navbar__menu-button menu-icon" @click="toggleMenu" version="1.1", xmlns="http://www.w3.org/2000/svg", xlink="http://www.w3.org/1999/xlink", x="0px", y="0px", viewBox="0 6 64 54.8", style="enable-background:new 0 6 64 54.8;", space="preserve")
      path(class="bar-bottom" d="M6.8,49.1h51.1c1.2,0,2.2,1.3,2.2,2.8l0,0c0,1.5-1,2.8-2.2,2.8H6.8c-1.2,0-2.2-1.3-2.2-2.8l0,0C4.6,50.3,5.6,49.1,6.8,49.1z")
      path(class="bar-top" d="M6.8,12h51.1c1.2,0,2.2,1.2,2.2,2.7l0,0c0,1.5-1,2.7-2.2,2.7H6.8c-1.2,0-2.2-1.2-2.2-2.7l0,0C4.6,13.2,5.6,12,6.8,12z")
      path(class="bar-mid-l" d="M6.8,30.7c-1.2,0-2.2,1.2-2.2,2.7s1,2.7,2.2,2.7h25.4v-5.4H6.8z")
      path(class="bar-mid-r" d="M57.9,30.7h-26v5.4h26c1.2,0,2.2-1.2,2.2-2.7S59.1,30.7,57.9,30.7z")
      circle(class="circle" cx="32.2", cy="33.4", r="23.5")
    div(class="navbar__menu")
      div(class="navbar__mbitem" v-for="item in navList " @click="loading(item,'mobile')")
        span {{item}}
</template>

<script>
import { getStyles } from '@/utils/utility.js'
import { mapGetters, mapMutations } from 'vuex'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default {
  props: {
    navList: Array,
    defaultSelected: String
  },
  data () {
    return {
      curr: this.defaultSelected ? this.defaultSelected : this.navList[0],
      lastScrollPosition: 0,
      atTop: true,
      navAnim: null,
      menuOpened: false,
      isAnimating: false
    }
  },
  mounted () {
    this.navAnim = gsap.timeline()
  },
  computed: {
    ...mapGetters({
      getIsLoading: 'getIsLoading',
      getScrollTarget: 'getScrollTarget'
    })
  },
  methods: {
    ...mapMutations({
      SET_isLoading: 'SET_isLoading',
      SET_scrollTarget: 'SET_scrollTarget'
    }),
    loading (item, type) {
      if (!this.isAnimating) {
        this.SET_isLoading(true)
        if (type === 'mobile') {
          this.toggleMenu()
        }
        this.SET_scrollTarget(item)
        setTimeout(() => {
          document.querySelector(this.item2class(this.getScrollTarget)).scrollIntoView()
        }, 700)
      }
    },

    // onScroll () {
    //   // console.log(window.pageYOffset)
    //   window.pageYOffset !== 0 ? this.atTop = false : this.atTop = true
    //   const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
    //   if (currentScrollPosition < 0) {
    //     return
    //   }
    //   this.showNavbar = currentScrollPosition < this.lastScrollPosition
    //   this.lastScrollPosition = currentScrollPosition
    // },
    item2class (item) {
      switch (item) {
        case 'Home': {
          return '.landing-page'
        }
        case 'About': {
          return '.about'
        }
        case 'Skill': {
          return '.skill'
        }
        case 'Project': {
          return '.project'
        }
        case 'Artwork': {
          return '.artwork'
        }
        case 'Contact': {
          return '.contact'
        }
      }
    },
    toggleMenu () {
      if (!this.isAnimating) {
        this.isAnimating = true
        this.menuOpened = !this.menuOpened
        if (this.menuOpened) {
          this.$nextTick(() => {
            this.navAnim.to('.navbar__menu', {
              duration: 0.3,
              opacity: 1,
              scaleY: 1,
              display: 'block'
            })
              .from('.navbar__mbitem', {
                duration: 0.3,
                opacity: 0,
                x: -50,
                stagger: {
                  amount: 0.5,
                  from: 'end'
                },
                onComplete: () => {
                  this.isAnimating = false
                }
              }, '-=0.2')
          })
        } else {
          this.isAnimating = true
          this.$nextTick(() => {
            this.navAnim.to('.navbar__mbitem', {
              duration: 0.3,
              opacity: 0
            })
              .to('.navbar__menu', {
                duration: 0.3,
                opacity: 0,
                scaleY: 0,
                display: 'none'
              }, '-=0.1')
              .to('.navbar__mbitem', {
                duration: 0.1,
                opacity: 1,
                onComplete: () => {
                  this.isAnimating = false
                }
              })
          })
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.navbar {
  display: flex;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: setZindex(navbar);
  padding: 10px 40px;
  transition: 0.5s;
  box-sizing: border-box;
  font-weight: bold;
  box-shadow: 0px 2px 3px setColor(black, 0.5);
  @include mobileStyle {
    justify-content: flex-end;
    padding: 10px 10px;
  }
  &__item {
    @include mobileStyle {
      display: none;
    }
    position: relative;
    font-size: 1.2rem;
    margin: 0 20px;
    cursor: pointer;
    @include flexCenter;
    &:nth-child(1) {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
    &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: setColor(text-color);
      height: 2px;
      width: 100%;
      transform: scaleX(0);
      transition: transform 0.4s;
      transform-origin: right;
    }
  }
  &__menu {
    display: none;
    width: 100%;
    position: absolute;
    bottom: 0px;
    left: 0;
    transform: translate3d(0, 100%, 0);
    transform-origin: top;
    background: setColor(secondary);
    font-size: 1.5rem;
    opacity: 0;
  }
  &__mbitem {
    cursor: pointer;
    &:nth-child(n) {
      position: relative;
      padding: 10px;
      &::after {
        content: "";
        position: absolute;
        bottom: 0px;
        left: 50%;
        transform: translate3d(-50%, 0, 0);
        width: 80%;
        height: 1px;
        background-color: setColor(text-color, 0.2);
      }
    }
  }
  &__menu-button {
    @include size(30px);
    @include pcStyle {
      display: none;
    }
  }
  &--hidden {
    transform: translate3d(0, -100%, 0);
    opacity: 0;
  }

  .menu-icon {
    @include size(30px);
    cursor: pointer;
    path {
      fill: #fff;
      transition: fill 0.15s ease-out;
    }
    .circle {
      stroke: #fff;
      opacity: 0;
      fill: none;
      stroke-width: 3px;
    }
  }
}
</style>
