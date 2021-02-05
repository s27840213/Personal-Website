<template lang="pug">
  div(class="root-contact")
    h1(class="heading") Contact
    div(class="contact")
      div(class="contact__approach")
        div
        span s27840213@gmail.com
      div(class="contact__approach")
        div
        span Facebook
      div(class="contact__approach")
        div
        span Instagram
</template>

<script>
import VanillaTilt from 'vanilla-tilt'

export default {
  mounted () {
    VanillaTilt.init(document.querySelectorAll('.root-contact'), {
      max: 2,
      speed: 200
    })
  }
}
</script>

<style lang="scss" scoped>
.root-contact {
  background-color: setColor(brown);
  padding-bottom: 100px;
  position: relative;
  box-sizing: border-box;
  margin: 100px;
  border-radius: 15px;
  background-color: rgba(white, 0.1);
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  border-left: 1px solid rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(5px);
  overflow: hidden;
  // &::after {
  //   content: "";
  //   position: absolute;
  //   width: 100%;
  //   height: 10px;
  //   bottom: 0;
  //   left: 0;
  //   background-color: setColor(text-color);
  // }
  .heading {
    margin-bottom: 50px;
  }
  .contact {
    display: grid;
    justify-content: center;
    grid-template-columns: auto;
    grid-template-rows: repeat(3, 1fr);
    &__approach {
      display: flex;
      align-items: center;
      margin: 5px;
      > div {
        @include size(50px);
        background-color: gray;
        margin-right: 20px;
      }
      > span {
        color: setColor(text-color);
        font-size: 24px;
        font-weight: bold;
      }
    }
  }
}
</style>
