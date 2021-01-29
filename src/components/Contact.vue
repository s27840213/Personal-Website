<template lang="pug">
  div(class="root-contact")
    h1(class="heading") Contack
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
export default {

}
</script>

<style lang="scss" scoped>
.root-contact {
  width: 100%;
  background-color: setColor(brown);
  padding-bottom: 100px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 10px;
    bottom: 0;
    left: 0;
    background-color: setColor(text-color);
  }
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
