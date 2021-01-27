<template lang="pug">
  div(class="root")
    div(class="left")
      div(class="left__avatar")
      div(class="left__info")
        div(class="left__zhname") Tapei, Taiwan
        div(class="left__enname") Alan Chang
        div(class="left__job") - Junior Front-end Developer | Just For Fun Designer -
        //- img(class="myinfo__avatar" :src="require('@/assets/img/person.jpg')")
    div(class="right")
      div(class="right__heading") About Me
      div(class="right__education") Graduated from NCKU #[br] with Bachelor’s Degree In CSIE
      div(class="right__content") Passionate about coding with motion graphic design. Like to learning  new technologies to sharpen my programming skills. I’m currently work as an front-end developer and UI/UX designer in an indepentent game developemt studio -- CItyChaser, and now I’m serving the alternative millitary service at Tainan.
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.root {
  width: 100%;
  margin-top: 200px;
  padding: 0px 200px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 80px;
  .left {
    position: relative;
    &__avatar {
      width: 100%;
      height: 80vh;
      background-color: gray;
    }
    &__info {
      position: absolute;
      bottom: 50px;
      right: -32px;
      text-align: right;
      font-weight: bold;
      > div {
        &:nth-child(1) {
          font-size: 24px;
          text-shadow: 2px 2px 10px rgba(black, 0.5);
        }
        &:nth-child(2) {
          font-size: 48px;
        }
        &:nth-child(3) {
          font-size: 16px;
        }
      }
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 30px;
    text-align: left;
    &__heading {
      width: 100%;
      font-size: 96px;
      font-weight: 800;
      transform: translateX(-30%);
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 80%;
        height: 5px;
        bottom: 0px;
        left: 0px;
        background-color: setColor(text-color);
        transform: translateX(30%);
      }
    }
    &__education {
      font-size: 28px;
      margin: 10px 0px;
      color: setColor(text-color);
      font-weight: 600;
    }
    &__content {
      font-size: 18px;
      color: setColor(text-color);
    }
  }
}
</style>
