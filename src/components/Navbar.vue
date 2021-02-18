<template lang="pug">
  //- div(class="navbar" :class="{ 'navbar--hidden': !showNavbar}" :style="{'background-color' : atTop ? '#2d112b' : 'transparent', 'color' : atTop ? 'white' : 'white'}")
  div(class="navbar"  :style="{'background-color' : atTop ? '#2d112b' : 'transparent', 'color' : atTop ? 'white' : 'white'}")
    div(class="navbar__item" v-for="item in navList "
      @click="loading(item)")
      span {{item}}
    div(class="navbar__menu-button" @click="toggleMenu")
    div(v-if="menuOpened" class="navbar__menu")
      div(class="navbar__mbitem" v-for="item in navList "
        @click="loading(item)")
        span {{item}}
</template>

<script>
import { getStyles } from '@/utils/utility.js'
import { mapGetters, mapMutations } from 'vuex'
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
      menuOpened: false
    }
  },
  computed: {
    ...mapGetters({
      getIsLoading: 'getIsLoading',
      getScrollTarget: 'getScrollTarget'
    })
  },
  mounted () {
    this.test()
  },
  methods: {
    ...mapMutations({
      SET_isLoading: 'SET_isLoading',
      SET_scrollTarget: 'SET_scrollTarget'
    }),
    loading (item) {
      this.SET_isLoading(true)
      this.SET_scrollTarget(item)
      setTimeout(() => {
        document.querySelector(this.item2class(this.getScrollTarget)).scrollIntoView()
      }, 700)
    },
    test () {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // true for mobile device
        console.log('mobile device')
      } else {
        // false for not mobile device
        console.log('not mobile device')
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
      this.menuOpened = !this.menuOpened
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
  @include mobileStyle {
    justify-content: flex-end;
    padding: 10px 10px;
  }
  &__item {
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
    @include size(40px);
    background-color: white;
  }
  &--hidden {
    transform: translate3d(0, -100%, 0);
    opacity: 0;
  }
}
</style>
