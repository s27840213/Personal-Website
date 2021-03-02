<template lang="pug">
  div(class="ky-landing-page")
    div(class="main-scene")
      img(class="main-scene__building" :src="require('@/assets/img/kyronus/main-scene.png')")
      img(class="main-scene__flyingship" :src="require('@/assets/img/kyronus/flyingship.png')")
      img(class="main-scene__duino" :src="require('@/assets/img/kyronus/duino.png')")
      div(class="main-scene__info")
        img(class="main-scene__logo" :src="require('@/assets/img/kyronus/logo.png')")
        div(class="main-scene__slogan")
          span 在你的城市
          br
          span 開拓屬於你的城市
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.ky-landing-page {
  height: 100vh;
  background-image: getKyronusImg("star-bg");
  background-position: center center;
  background-size: cover;
  overflow: hidden;
}

.main-scene {
  height: 100%;
  width: 100%;
  position: relative;
  &__duino {
    position: absolute;
    bottom: -100px;
    right: -50px;
    width: clamp(200px, 40vw, 400px);
    @include mobileStyle {
      bottom: clamp(-50px);
      right: -25px;
    }
  }
  &__building {
    position: absolute;
    bottom: -10%;
    left: calc(-200px + 15vw);
    width: clamp(700px, 110%, 110%);
    @include mobileStyle {
      bottom: -5%;
      left: calc(-500px + 40vw);
      width: clamp(800px, 110%, 110%);
    }
  }
  &__flyingship {
    position: absolute;
    bottom: clamp(250px, 40vw, 500px);
    right: 10%;
    width: clamp(100px, 15vw, 300px);
  }
  &__info {
    display: flex;
    align-items: center;
    padding: 50px;
    @include mobileStyle {
      flex-direction: column;
      justify-content: center;
    }
  }
  &__logo {
    width: clamp(175px, 25vw, 250px);
  }
  &__slogan {
    text-align: left;
    font-size: clamp(20px, 5vw, 50px);
    padding: clamp(10px, 4vw, 30px);
    @include mobileStyle {
      text-align: center;
    }
  }
}
</style>
