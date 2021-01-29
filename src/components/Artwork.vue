<template lang="pug">
  div(class="root-artwork")
    h1(class="heading") Artwork
    div(class="artwork")
    h2(class="sub-heading") Isometric Building
    div(class="iso-building")
      div(class="button button__left")
      div(class="iso-building__img-section")
        img(class="iso-building__img")
      div(class="iso-building__info-section")
        div(class="iso-building__location") Taipei, Taiwan
        div(class="iso-building__name") Ngational Palace Museum
      div(class="button button__right")
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.root-artwork {
  .artwork {
    background: setColor(brown);
    height: 600px;
  }
  .sub-heading {
    font-size: 64px;
    position: relative;
    text-align: left;
    padding-left: calc((100vw - 1300px) / 2);
    box-sizing: border-box;
    margin: 100px 0px;
    &::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 10%;
      background-color: setColor(text-color);
      width: 500px;
      height: 5px;
    }
  }
  .iso-building {
    @include pdGeneralHr;
    display: grid;
    align-items: center;
    position: relative;
    grid-template-rows: 1fr;
    grid-template-columns: auto auto 1fr auto;
    &__img-section {
      @include size(400px);
      background-color: setColor(secondary);
      position: relative;
      &::after {
        content: "";
        @include size(100%);
        top: 0px;
        left: 0px;
        position: absolute;
        border: 2px solid setColor(secondary);
        box-sizing: border-box;
        transform: scale(1.05);
      }
    }
    &__info-section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      transform: translate3d(-2rem, 0, 0);
    }

    &__location {
      font-size: 2rem;
    }
    &__name {
      font-size: 4rem;
      font-weight: bold;
      text-align: left;
      position: relative;
      line-height: 4rem;
      &::after {
        content: "";
        position: absolute;
        bottom: -40px;
        left: 0px;
        transform: translate3d(-50%, 0, 0);
        height: 10px;
        width: 20%;
        background-color: setColor(text-color);
      }
    }
  }
  .button {
    background-color: white;
    &__left {
      @include size(50px);
      transform: translate3d(-60px, 0, 0);
    }
    &__right {
      @include size(50px);
      transform: translate3d(60px, 0, 0);
    }
  }
}
</style>
