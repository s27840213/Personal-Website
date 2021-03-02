<template lang="pug">
  div(class="core-mechanic")
    div(class="core-mechanic__info")
      span(class="heading-ky-l") Core Mechanic
      div(class="core-mechanic__steps")
        div(class="core-mechanic__step")
          div(class="decoration")
          span Collect resources
        div(class="core-mechanic__step")
          div(class="decoration")
          span Construct buildings
        div(class="core-mechanic__step")
          div(class="decoration")
          span Unlock buildings and game features
    div(class="core-mechanic__demo")
      img(v-for="img in demoImg" :src="require(`@/assets/img/kyronus/${img}.png`)")
</template>

<script>
export default {
  data () {
    return {
      demoImg: ['planet-scene', 'collect-scene', 'build-mode']
    }
  }
}
</script>

<style lang="scss" scoped>
.core-mechanic {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1.5fr;
  grid-template-rows: 1fr;
  @include mobileStyle {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
  }
  &__info {
    position: relative;
  }
  &__steps {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    justify-content: center;
    margin-top: clamp(10px, 5vw, 40px);
    color: setKyColor(text-content);
    .core-mechanic__step {
      display: flex;
      align-items: center;
      margin: 20px 0;
      font-size: 1.2rem;
    }
    @include mobileStyle {
      margin-bottom: 30px;
    }
  }
  &__demo {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    > img {
      height: 80%;
      width: clamp(100px, 100%, 400px);
      object-fit: contain;
    }
  }
}
.decoration {
  @include size(10px);
  border: 5px solid setKyColor(brown);
  border-radius: 50%;
  margin-right: 10px;
}
</style>
