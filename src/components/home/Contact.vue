<template lang="pug">
  div(class="contact")
    h1(class="contact__heading") Contact
    div(class="contact-info")
      div(class="contact-info__approach")
        img(:src="require('@/assets/icon/email.svg')")
        span s27840213@gmail.com
      div(class="contact-info__approach")
        img(:src="require('@/assets/icon/fb.svg')")
        a(:href="`${mappingUrl('fb')}`" target="blank")
          span Facebook
      div(class="contact-info__approach")
        img(:src="require('@/assets/icon/ig.svg')")
        a(:href="`${mappingUrl('ig')}`" target="blank")
          span Instagram
</template>

<script>
import VanillaTilt from 'vanilla-tilt'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { animatePseudo, isMobile, mappingUrl } from '@/utils/utility.js'

export default {
  data () {
    return {
      animSpeed: 0.7
    }
  },
  mounted () {
    const contactAnim = gsap.timeline({
      scrollTrigger: {
        trigger: '.contact',
        start: 'top bottom',
        autoRemoveChildren: true
      }
    })
      .from('.contact', {
        duration: this.animSpeed,
        y: 50,
        opacity: 0
      })
      .from('.contact__heading', {
        duration: this.animSpeed,
        y: 50,
        opacity: 0,
        onStart: animatePseudo,
        onStartParams: ['.contact__heading']
      }, '-=0.3')
      .from('.contact-info__approach', {
        duration: this.animSpeed * 0.7,
        y: 50,
        opacity: 0,
        stagger: 0.3
      }, '-=0.3')
    if (!isMobile) {
      VanillaTilt.init(document.querySelectorAll('.contact'), {
        max: 2,
        speed: 200
      })
    }
  },
  methods: {
    mappingUrl
  }
}
</script>

<style lang="scss" scoped>
.contact {
  @include glass;
  position: relative;
  box-sizing: border-box;
  @include pcStyle {
    margin: 100px;
    padding-bottom: 100px;
  }
  @include mobileStyle {
    margin: 30px;
    padding-bottom: 30px;
  }
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 10px;
    bottom: 0;
    left: 0;
    background-color: setColor(text-color, 0.6);
  }
  &-info {
    display: grid;
    justify-content: center;
    grid-template-columns: auto;
    grid-template-rows: repeat(3, 1fr);
    &__approach {
      display: flex;
      align-items: center;
      margin: 10px;
      > img {
        @include size(30px);
        @include mobileStyle {
          @include size(20px);
        }
        margin-right: 20px;
        transition: 0.6s;
      }
      > a {
        text-decoration: none;
      }
      span {
        color: setColor(white);
        font-size: 1.5rem;
        @include mobileStyle {
          font-size: 1rem;
        }
        font-weight: bold;
        transition: 0.6s;
        position: relative;
        cursor: pointer;
        &:hover {
          &::after {
            transform: scaleX(1);
            transform-origin: left;
          }
        }
        &::after {
          content: "";
          position: absolute;
          @include size(100%, 3px);
          transform: scaleX(0);
          transform-origin: left;
          left: 0;
          bottom: 0;
          transition: transform 0.6s;
          background-color: setColor(text-color);
          transform-origin: right;
        }
      }
    }
  }
}
</style>
