<template lang="pug">
  div(class="design-concept")
    div(class="design-concept__info")
      span(class="heading-ky-l") UI Design Concept
      div(class="design-concept__content")
        span Our UI design emphasized the use of simple color blocks to construct the scene. Different from most games, the UI presents a large amount of imformation and graphic effects. We think that players will be confused by receiving too much information.  Bring players a fresh and healing playing experience.
    div(class="design-concept__demo")
      div
        img(v-for="img in demoImg" :src="require(`@/assets/img/kyronus/${img}.png`)")
      div
        span Information is displayed in the center, and frequently used buttons are in the lower part of the UI, making them convenient for players to tap.
</template>

<script>
export default {
  data () {
    return {
      demoImg: ['player-scene', 'build-mode']
    }
  }
}
</script>

<style lang="scss" scoped>
.design-concept {
  display: grid;
  align-items: center;
  grid-template-columns: 1.2fr 1fr;
  grid-template-rows: 1fr;
  @include mobileStyle {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
  }
  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px clamp(30px, calc((50vw - 500px) / 2), calc((50vw - 500px) / 2));
    @include mobileStyle {
      align-items: center;
    }
  }
  &__content {
    display: grid;
    text-align: left;
    color: setKyColor(text-content);
    line-height: 200%;
    font-size: 1.1rem;
    margin-top: 30px;
    @include mobileStyle {
      margin-bottom: 30px;
    }
  }
  &__demo {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 clamp(10px, 6vw, 60px);
    box-sizing: border-box;
    > div:nth-child(1) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 30px;
      > img {
        width: 100%;
      }
    }
    > div:nth-child(2) {
      color: setKyColor(text-content);
      margin-top: 20px;
      text-align: left;
      font-size: 10px;
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
