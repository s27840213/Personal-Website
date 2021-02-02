<template lang="pug">
  div(class="root-about")
    div(class="left")
      div(class="left__avatar")
      div(class="left__info")
        div(class="left__zhname") Tapei, Taiwan
        div(class="left__enname") Yu-Chen Chang
        div(class="left__job") - Junior Front-end Developer | Web Designer -
        //- img(class="myinfo__avatar" :src="require('@/assets/img/person.jpg')")
    div(class="right")
      div(class="right__heading") About Me
      div(class="right__education") Graduated from NCKU #[br] with Bachelor’s Degree In CSIE
      div(class="right__content") Passionate about coding with motion graphic design. Like to learning  new technologies to sharpen my programming skills. I’m currently work as an front-end developer and UI/UX designer in an indepentent game developemt studio -- CItyChaser, and now I’m serving the alternative millitary service at Tainan.
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { animatePseudo } from '@/utils/utility.js'
import VanillaTilt from 'vanilla-tilt'
export default {
  data () {
    return {
      animSpeed: 0.7
    }
  },
  mounted () {
    const aboutAnim = gsap.timeline({
      scrollTrigger: {
        trigger: '.right__heading',
        start: 'bottom bottom',
        autoRemoveChildren: true
      }

    })
    aboutAnim.from('.left__avatar', {
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
        onStartParams: ['.right__heading']
      }, '-=0.5')
      .from('.right__education', {
        duration: 0.7,
        opacity: 0,
        x: -50
      }, '-=0.5')
      .from('.right__content', {
        duration: 0.7,
        opacity: 0,
        x: -50
      }, '-=0.5')
    VanillaTilt.init(document.querySelectorAll('.left'), {
      max: 5,
      speed: 1000,
      scale: 1.05
    })
  }
}
</script>

<style lang="scss">
.root-about {
  @include pdGeneralHr;
  width: 100%;
  box-sizing: border-box;
  display: grid;
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
      font-size: 96px;
      font-weight: 800;
      transform: translateX(-30%);
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 0px;
        height: 5px;
        bottom: 0px;
        left: 0px;
        background-color: setColor(text-color);
        transform-origin: left;
        transition: 1s;
      }
      &.animatePseudo::after {
        transition-delay: 0.5s;
        width: 80%;
      }
    }
    &__education {
      font-size: 28px;
      margin: 10px 0px;
      color: setColor(text-color);
      font-weight: 600;
    }
    &__content {
      font-size: 16px;
      color: setColor(text-color);
      transform: translate3d(10px, 0, 0);
      line-height: 200%;
    }
  }
}
</style>
