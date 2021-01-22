<template lang="pug">
  //- div(class="navbar" :class="{ 'navbar--hidden': !showNavbar}" :style="{'background-color' : atTop ? '#0f252f' : 'transparent' , 'color' : atTop ? 'white' : 'white'}")
  div(class="navbar" :class="{ 'navbar--hidden': !showNavbar}" :style="{'background-color':'#0f252f', 'color' : atTop ? 'white' : 'white'}")
    div(class="navbar__item" v-for="item in navList "
      @click="switchMenu(item)")
      div(class="navbar__icon")
      span {{item}}
</template>

<script>
import { getStyles } from '@/utils/utility.js'
export default {
  props: {
    navList: Array,
    defaultSelected: String
  },
  data () {
    return {
      curr: this.defaultSelected ? this.defaultSelected : this.navList[0],
      showNavbar: true,
      lastScrollPosition: 0,
      atTop: true
    }
  },
  methods: {
    switchMenu (item) {
      this.curr = item
      this.$emit('switchMenu', item)
    },
    onScroll () {
      console.log(window.pageYOffset)
      window.pageYOffset !== 0 ? this.atTop = false : this.atTop = true
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
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
  &__icon {
    @include size(25px);
    background-color: setColor(white);
    border-radius: 50%;
    margin-right: 10px;
  }
  &__item {
    font-size: 1rem;
    margin: 0 20px;
    cursor: pointer;
    @include flexCenter;
    &:nth-child(1) {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }

  &--hidden {
    transform: translate3d(0, -100%, 0);
    opacity: 0;
  }
}
</style>
