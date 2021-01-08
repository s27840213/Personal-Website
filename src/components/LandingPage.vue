<template lang="pug">
  div(class="landing-page")
    //- div(class="planet__earth")
    //- div(class="planet__html")
    //- div(class="planet__js")
    //- div(class="planet__css")
    //- div(class="planet__vue")
</template>

<script>
export default {

}
</script>
<style lang="scss">
.landing-page {
  @include size(100%, 100%);
  background-image: map-get($linear-gradient, primary);
  position: relative;
  overflow: hidden;
  height: 100vh;
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
  }
  &__html {
    position: absolute;
    right: 30px;
    bottom: 100px;
    @include size(250px, 250px);
    background-image: url("~@/assets/img/planet-html.png");
    background-size: cover;
  }
  &__js {
    position: absolute;
    right: 40%;
    bottom: 30%;
    @include size(200px, 200px);
    background-image: url("~@/assets/img/planet-js.png");
    background-size: cover;
  }
  &__css {
    position: absolute;
    right: 25%;
    bottom: 40%;
    @include size(150px, 150px);
    background-image: url("~@/assets/img/planet-css.png");
    background-size: cover;
  }
  &__vue {
    position: absolute;
    right: 8%;
    bottom: 50%;
    @include size(120px, 120px);
    background-image: url("~@/assets/img/planet-vue.png");
    background-size: cover;
  }
}
</style>
