<template lang="pug">
  div(class="landing-page")
    div(class="avatar")
    div(class="message")
      span Hi, I'm Alan
        br
        span Welcome to
        br
        span My Personal Universe!
    div(class="planet__earth")
    div(class="planet__html")
    div(class="planet__js")
    div(class="planet__css")
    div(class="planet__vue")
    div(class="planet__figma")
    div(class="planet__python")
    div(class="planet__kyronus")
    div(class="planet__normal")
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
.landing-page {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  @include size(100vw, 100vh);
  max-width: 100%;
  background-image: url("~@/assets/img/bg-texture.png");
  background-position: center;
  background-size: cover;
  position: relative;
  overflow: hidden;
}
.avatar {
  @include size(200px);
  background-color: white;
  border-radius: 50%;
  margin-left: 6vw;
  margin-right: 20px;
}
.message {
  color: white;
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  font-family: "Aero";
  text-align: left;
  z-index: setZindex("paragraph");
  text-shadow: 3px 3px 10px #4d91b8;
}
.planet {
  &__earth {
    position: absolute;
    right: 30px;
    bottom: 0px;
    transform: translateY(78%);
    @include size(60vw);
    background-image: url("~@/assets/img/planet-earth.png");
    background-size: cover;
    filter: drop-shadow(0px 0px 30px rgba(#28eef5, 0.5));
  }
  &__html {
    position: absolute;
    right: 30px;
    bottom: 70px;
    @include size(250px, 250px);
    background-image: url("~@/assets/img/planet-html.png");
    background-size: cover;
  }
  &__js {
    position: absolute;
    right: 40%;
    bottom: 150px;
    @include size(200px, 200px);
    background-image: url("~@/assets/img/planet-js.png");
    background-size: cover;
    filter: drop-shadow(0 0 15px rgba(#f3ef00, 0.5));
    opacity: 0.95;
  }
  &__css {
    position: absolute;
    right: 22%;
    bottom: 30%;
    @include size(180px, 180px);
    background-image: url("~@/assets/img/planet-css.png");
    background-size: cover;
    filter: drop-shadow(0 0 25px rgba(#36ffe7, 0.8));
    opacity: 0.9;
  }
  &__vue {
    position: absolute;
    right: 8%;
    bottom: 50%;
    @include size(120px, 120px);
    background-image: url("~@/assets/img/planet-vue.png");
    background-size: cover;
    filter: drop-shadow(0 0 15px rgba(#51b841, 0.8));
    opacity: 0.84;
  }
  &__figma {
    position: absolute;
    right: 22%;
    bottom: 60%;
    @include size(90px, 90px);
    background-image: url("~@/assets/img/planet-figma.png");
    background-size: cover;
    filter: drop-shadow(0 0 15px rgba(#faffbb, 0.8));
    opacity: 0.81;
  }
  &__python {
    position: absolute;
    right: 32%;
    bottom: 68%;
    @include size(70px, 70px);
    background-image: url("~@/assets/img/planet-python.png");
    background-size: cover;
    filter: drop-shadow(0 0 15px rgba(#40aac7, 0.8));
    opacity: 0.78;
  }
  &__kyronus {
    position: absolute;
    right: 22%;
    bottom: 78%;
    @include size(50px, 50px);
    background-image: url("~@/assets/img/planet-kyronus.png");
    background-size: cover;
    filter: drop-shadow(0 0 15px rgba(#f3ef00, 0.5));
    opacity: 0.75;
  }
  &__normal {
    position: absolute;
    right: 15%;
    bottom: 86%;
    @include size(30px, 30px);
    background-image: url("~@/assets/img/planet-normal.png");
    background-size: cover;
    filter: drop-shadow(0 0 25px rgba(#36ffe7, 0.8));
    opacity: 0.72;
  }
}
</style>
