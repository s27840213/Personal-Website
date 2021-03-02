<template lang="pug">
  div(class="about")
    div(class="left")
      div(class="left__avatar")
      div(class="left__info")
        div(class="left__zhname") Tapei, Taiwan
        div(class="left__enname") Yu-Chen Chang
        div(class="left__job") - Front-end Developer | Web Designer -
    div(class="right")
      div(class="right__heading") About Me
      //- div(class="right__education")
      //-   img(:src="require('@/assets/icon/education.svg')")
      //-   span National Cheng Kung University (Sep. 2016 – Jun. 2020) #[br] B.S in Computer Science and Infomation Engineering
      div(class="right__content")
        p I graduated from National Cheng Kung University with Bachelor's degree in computer science and information engineering. I’m a self-motivated programmer and designer who is passionate about exploring new trend in both fields through self-study. Currently I’ve work for CityChaser, an independent game studio in Taiwan, as an front-end engineer and game art designer for over 1 year.
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { animatePseudo, isMobile } from '@/utils/utility.js'
import VanillaTilt from 'vanilla-tilt'
export default {
  data () {
    return {
      animSpeed: 0.7,
      aboutAnim: null
    }
  },
  mounted () {
    this.aboutAnim = gsap.timeline({
      scrollTrigger: {
        id: 'aboutAnim',
        trigger: '.right__heading',
        start: 'bottom bottom',
        autoRemoveChildren: true
      }

    })
    this.aboutAnim.from('.left__avatar', {
      duration: 0.7,
      x: -100,
      opacity: 0
    }, 's')
      .from('.left__zhname', {
        duration: 0.7,
        opacity: 0,
        x: -50
      }, '-=0.5')
      .from('.left__enname', {
        duration: 0.7,
        opacity: 0,
        x: -50
      }, '-=0.5')
      .from('.left__job', {
        duration: 0.7,
        opacity: 0,
        x: -50
      }, '-=0.5')
      .from('.right__heading', {
        duration: 0.7,
        opacity: 0,
        x: 0,
        onStart: animatePseudo,
        onStartParams: ['.right__heading'],
        clearProps: 'all'
      }, '-=0.5')
      .from('.right__content', {
        duration: 0.7,
        opacity: 0,
        x: -50
      }, '-=0.5')
    if (!isMobile) {
      VanillaTilt.init(document.querySelectorAll('.left'), {
        max: 5,
        speed: 1000,
        scale: 1.05
      })
    }
  },
  beforeDestroy () {
    this.aboutAnim.pause(0).kill(true)
    ScrollTrigger.getById('aboutAnim').kill(true)
  }
}
</script>

<style lang="scss">
.about {
  @include pdGeneralHr;
  width: 100%;
  box-sizing: border-box;
  display: grid;
  @include pcStyle {
    padding-top: 100px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 80px;
    .left {
      position: relative;
      transform-style: preserve-3d;
      transform: perspective(1000px);
      &__avatar {
        width: clamp(300px, 100%, 100%);
        height: 60vh;
        box-sizing: border-box;
        // clip-path: polygon(
        //   100% 0%,
        //   90% 50%,
        //   100% 100%,
        //   25% 100%,
        //   15% 50%,
        //   25% 0%
        // );
        background-image: linear-gradient(
            to top,
            setColor(primary) 0%,
            rgba(255, 255, 255, 0) 50%
          ),
          url("~@/assets/img/me.jpg");
        background-position: center;
        background-size: cover;
      }
      &__info {
        position: absolute;
        bottom: 50px;
        right: -32px;
        text-align: right;
        font-weight: bold;
        transform: translate3d(0, 0, 20px);

        > div {
          &:nth-child(1) {
            font-size: 24px;
            text-shadow: 2px 2px 0px rgba(setColor(secondary), 0.8);
          }
          &:nth-child(2) {
            font-size: 40px;
            text-shadow: 4px 4px 0px rgba(setColor(secondary), 0.8);
          }
          &:nth-child(3) {
            font-size: 16px;
            text-shadow: 2px 2px 0px rgba(setColor(secondary), 0.8);
          }
        }
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding-bottom: 30px;
      text-align: left;
      &__heading {
        width: 100%;
        font-size: 5rem;
        font-weight: 800;
        transform: translateX(-30%);
        position: relative;
        white-space: nowrap;
        &::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 5px;
          bottom: 0px;
          left: 0px;
          background-color: setColor(text-color);
          transform-origin: left;
          transform: scaleX(0);
          transition: 1s;
        }
        &.animatePseudo::after {
          transform: scaleX(1);
        }
      }
      &__education {
        display: flex;
        align-items: center;
        margin: 10px 0px;
        color: setColor(text-color);
        font-weight: 600;
        > img {
          @include size(30px);
          margin-right: 10px;
        }
        > span {
          font-size: 0.8rem;
          font-weight: 800;
        }
      }
      &__content {
        font-size: 1rem;
        color: setColor(text-color);
        transform: translate3d(10px, 0, 0);
        line-height: 200%;
      }
    }
  }
  @include mobileStyle {
    padding-top: 20px;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    .left {
      position: relative;
      padding: 0 10%;
      &__avatar {
        width: clamp(300px, 100%, 100%);
        height: 40vh;
        box-sizing: border-box;
        background-image: linear-gradient(
            to top,
            setColor(primary) 0%,
            rgba(255, 255, 255, 0) 50%
          ),
          url("~@/assets/img/me.jpg");
        background-position: center;
        background-size: cover;
      }
      &__info {
        position: absolute;
        bottom: 50px;
        right: 30px;
        text-align: right;
        font-weight: bold;
        > div {
          &:nth-child(1) {
            font-size: 1.5rem;
            text-shadow: 2px 2px 0px rgba(setColor(secondary), 0.8);
          }
          &:nth-child(2) {
            font-size: 2.5rem;
            text-shadow: 4px 4px 0px rgba(setColor(secondary), 0.8);
          }
          &:nth-child(3) {
            font-size: 1rem;
            text-shadow: 2px 2px 0px rgba(setColor(secondary), 0.8);
          }
        }
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      padding: 15px;
      &__heading {
        width: 100%;
        font-size: 5rem;
        font-weight: 800;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          width: 0px;
          height: 2px;
          bottom: 0px;
          left: 0px;
          background-color: setColor(text-color);
          transform-origin: left;
          transition: 1s;
        }
        &.animatePseudo::after {
          transition-delay: 0.5s;
          width: 100%;
        }
      }
      &__education {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px 0px;
        color: setColor(text-color);
        font-weight: 600;
        > img {
          @include size(30px);
          margin-right: 10px;
        }
        > span {
          font-size: 0.6rem;
          font-weight: 800;
        }
      }
      &__content {
        font-size: 1rem;
        color: setColor(text-color);
        transform: translate3d(10px, 0, 0);
        line-height: 200%;
      }
    }
  }
}
</style>
