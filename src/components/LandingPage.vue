<template lang="pug">
  div(class="landing-page")
    img(class="layer layer1" data-speed= "0" :src="require('@/assets/img/landingPage/layer1.png')")
    img(class="layer layer2" data-speed= "2" :src="require('@/assets/img/landingPage/layer2.png')")
    img(class="layer layer2__house" data-speed= "2" :src="require('@/assets/img/landingPage/layer2_house.svg')")
    img(class="layer layer3" data-speed= "4" :src="require('@/assets/img/landingPage/layer3.png')")
    img(class="layer layer4__left" data-speed= "5" :src="require('@/assets/img/landingPage/layer4_left.svg')")
    img(class="layer layer4__right" data-speed= "5" :src="require('@/assets/img/landingPage/layer4_right.svg')")
    img(class="layer layer5" data-speed= "6" :src="require('@/assets/img/landingPage/layer5.svg')")
    img(class="layer layer6" data-speed= "7" :src="require('@/assets/img/landingPage/layer6.svg')")
    img(class="layer layer7" data-speed= "8" :src="require('@/assets/img/landingPage/layer7.svg')")
    img(class="layer layer__moon" data-speed= "10" :src="require('@/assets/img/landingPage/moon.svg')")
    //- div
    //-   img(class="avatar" :src="require('@/assets/img/avatar.jpg')")
    //- div(class="message")
    //-   span Hello, I'm Alan
    //-   br
    //-   span Welcome to
    //-   br
    //-   span My Personal Website!
    //- - for (i = 1; i <= 100; i++)
    //-   .circle-container
    //-     .circle
</template>

<script>
export default {
  mounted () {
    document.addEventListener('scroll', this.parallax)
  },
  methods: {
    // parallax (e) {
    //   document.querySelectorAll('.layer').forEach(layer => {
    //     const speed = layer.getAttribute('data-speed')
    //     const x = (window.innerWidth - e.pageX * speed) / 200
    //     const y = (window.innerHeight - e.pageY * speed) / 200
    //     layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    //   })
    // }
    parallax (e) {
      document.querySelectorAll('.layer').forEach(layer => {
        let scroll = window.pageYOffset
        const speed = layer.getAttribute('data-speed')
        const height = document.querySelector('.landing-page').offsetHeight
        // const x = (window.innerWidth - e.pageX * speed) / 200
        layer.style.transform = `translateY(${scroll * speed / 15}px)`
        layer.style.opacity = 1 - (scroll / height) * (speed / 7) * (7 / 10)
        // layer.style.transform = `translateX(${x}px) translateY(${y}px)`
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.landing-page {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: #fedcc8;
  @include size(100vw, 100vh);
  max-width: 100%;
  position: relative;
  overflow: hidden;
  > div:nth-child(1) {
    @include flexCenter;
    padding: 5px;
    background: white;
    margin-left: 6vw;
    margin-right: 20px;
    border-radius: 50%;
    z-index: setZindex("avatar");
  }
  .layer {
    position: absolute;
    &1 {
      bottom: -5px;
      z-index: setZindex("layer1");
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
    &__moon {
      bottom: clamp(300px, 50vw, 65vh);
      right: clamp(50px, 10vw, 500px);
      z-index: setZindex("moon");
      width: clamp(100px, 10vw, 100px);
    }
  }
  // &::after {
  //   content: "1234";
  //   position: absolute;
  //   width: 100vw;
  //   height: 100vh;
  //   // transform: translate3d(0, -35%, 0);
  //   background-image: radial-gradient(
  //     circle at 50% -10%,
  //     #1e3740 20%,
  //     #1d353f 20%,
  //     #1d353f 30%,
  //     #1b333d 30%,
  //     #1b333d 40%,
  //     #19313b 40%,
  //     #19313b 50%,
  //     #172e38 50%,
  //     #172e38 60%,
  //     #142b35 60%,
  //     #142b35 70%,
  //     #122832 70%,
  //     #122832 80%,
  //     #0f252f 80%,
  //     #0f252f 90%,
  //     #0d222c 90%,
  //     #0a1f29 100%
  //   );
  // }
}
.avatar {
  @include size(200px);
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(setColor(primary), 0.5);
  // filter: drop-shadow(0 0 15px rgba(#4d91b8, 0.5));
  ::after {
    content: "12312313";
    color: white;
    top: 0px;
    left: 0px;
    width: 300px;
    height: 300px;
    background-color: #fff;
  }
}
.message {
  color: white;
  font-size: clamp(1.5rem, 5vw, 3rem);
  font-family: "Passion One";
  // font-style: italic;
  text-align: left;
  z-index: setZindex("paragraph");
  text-shadow: 3px 3px 3px #4d91b8;
}
</style>
