<template lang="pug">
  div(class="landing-page")
    div
      img(class="avatar" :src="require('@/assets/img/avatar.jpg')")
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
  > div:nth-child(1) {
    @include flexCenter;
    padding: 5px;
    background: white;
    margin-left: 6vw;
    margin-right: 20px;
    border-radius: 50%;
  }
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
