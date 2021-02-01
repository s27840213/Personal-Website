<template lang="pug">
  div(class="artwork")
    h1(class="artwork__heading") Artwork
    div(class="creation")
      div
        img(class="creation__img" :src="require('@/assets/artwork/creation/soc.png')")
        img(class="creation__img" :src="require('@/assets/artwork/creation/lebron.png')")
        img(class="creation__img" :src="require('@/assets/artwork/creation/oblogo.png')")
        img(class="creation__img" :src="require('@/assets/artwork/creation/obposter.png')")
        img(class="creation__img" :src="require('@/assets/artwork/creation/poster.png')")
        img(class="creation__img" :src="require('@/assets/artwork/creation/annie.png')")
    h2(class="sub-heading") Isometric Building
    div(class="iso-building")
      div(class="button button__prev")
      div(class="iso-building__img-section")
        img(class="iso-building__img")
      div(class="iso-building__info-section")
        div(class="iso-building__location") Taipei, Taiwan
        div(class="iso-building__name") Ngational Palace Museum
      div(class="button button__next")
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { animatePseudo } from '@/utils/utility.js'
export default {
  data () {
    return {
      animSpeed: 0.7
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
      font-size: 4rem;
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
        width: 20%;
        background-color: setColor(text-color);
      }
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
