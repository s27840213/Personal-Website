<template lang="pug">
  div(class="game-art-design")
    div(class="building-section")
      img(v-for="i in 5" :src="require(`@/assets/img/kyronus/building-${i-1}.png`)")
    div(class="bottom-section")
      div(class="bottom-section__color")
        img(:src="require('@/assets/img/kyronus/color.png')")
      div(class="bottom-section__info")
        span(class="heading-ky-r") Game Art Design
        div(class="bottom-section__content")
          div(class="bottom-section__paragraph") The overall art adopts isometric and low poly styles. The architecture is presented through a fresh style, while bringing comfort to players !
          div(class="bottom-section__paragraph") We capture the essence of the realistic characteristic building, and only retain the most important feature items to present the original delicate, mini, and cute appearance.
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.game-art-design {
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr;
}
.building-section {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  align-items: center;
  column-gap: 5vw;
  padding: 0 calc((100vw - 1200px) / 2);
  box-sizing: border-box;
  margin: clamp(10px, 3vw, 30px);
  > img {
    width: 100%;
  }
}
.bottom-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "img info";
  column-gap: 5vw;
  align-items: center;
  padding: 0px clamp(30px, calc((50vw - 500px) / 2), calc((50vw - 500px) / 2));

  @include mobileStyle {
    grid-template-areas: "info" "img";
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
  }
  &__color {
    grid-area: img;
    > img {
      width: 100%;
    }
  }
  &__info {
    grid-area: info;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
    @include mobileStyle {
      align-items: center;
    }
    .bottom-section__content {
      margin-top: 30px;
    }
    .bottom-section__paragraph {
      font-size: 1rem;
      color: setKyColor(text-content);
      line-height: 200%;
      &:nth-child(2) {
        margin-top: 20px;
        margin-bottom: 15px;
      }
    }
  }
}
</style>
