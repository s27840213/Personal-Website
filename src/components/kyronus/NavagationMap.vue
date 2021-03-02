<template lang="pug">
  div(class="map")
    div(class="top-section")
      div(class="top-section__building-feature")
        span Historical Building Feature
        div(class="top-section__demo")
          img(:src="require('@/assets/img/kyronus/building-feature-h-0.png')")
          img(:src="require('@/assets/img/kyronus/building-feature-h-1.png')")
      div(class="top-section__play-scene")
        span Main Scene
        img(:src="require('@/assets/img/kyronus/player-scene.png')")
      div(class="top-section__building-feature")
        span Original Building Feature
        div(class="top-section__demo")
          img(:src="require('@/assets/img/kyronus/building-feature-ky-0.png')")
          img(:src="require('@/assets/img/kyronus/building-feature-ky-1.png')")
    div(class="bottom-section")
      div(class="bottom-section__demo")
        img(:src="require('@/assets/img/kyronus/human-main.png')")
        span Official Scene
      div(class="bottom-section__demo")
        img(:src="require('@/assets/img/kyronus/collect-scene.png')")
        span Collect Mode
      div(class="bottom-section__demo")
        img(:src="require('@/assets/img/kyronus/build-mode.png')")
        span Build Mode
      div(class="bottom-section__demo")
        img(:src="require('@/assets/img/kyronus/baggage.png')")
        span Baggage Scene
      div(class="bottom-section__demo")
        img(:src="require('@/assets/img/kyronus/mall.png')")
        span Store Scene
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.map {
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr;
  row-gap: calc(20px + 5vw);
  padding: 0px
    clamp(30px, calc((100vw - 1200px) / 2), calc((100vw - 1200px) / 2));
  box-sizing: border-box;
  font-size: 1rem;
  @include mobileStyle {
    display: none;
  }
}

.top-section {
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  grid-template-rows: 1fr;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
  &__building-feature {
    width: 100%;
    color: setKyColor(brown);
    font-weight: bold;
    background-color: setKyColor(orange);
    border-radius: 10px;
    padding: 15px 25px;
    box-sizing: border-box;
    line-height: 200%;
    @include mobileStyle {
      padding: 8px 12px;
    }
  }
  &__demo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    column-gap: 20px;
  }
  &__play-scene {
    color: setKyColor(text-content);
    font-weight: bold;
    > span {
      line-height: 200%;
    }
  }
  img {
    width: 100%;
  }
}

.bottom-section {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  column-gap: 50px;
  font-weight: bold;
  color: setKyColor(text-content);
  &__demo {
    > img {
      width: 100%;
    }
  }
}
</style>
