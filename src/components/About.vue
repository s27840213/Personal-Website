<template lang="pug">
  div(class="root")
    h1(class="heading") About Me
    div(class="myinfo")
      div
        div(class="myinfo__name")
          span Yu-Chen Chang
          span  (Alan)
        div(class="myinfo__job") - Junior Front-end Developer | Junior UI/UX Designer -
        div(class="myinfo__description")  Passionate about coding with motion graphic design. Like to learning  new technologies to sharpen my programming skills. I’m currently work as an front-end developer and UI/UX designer in an indepentent game developemt studio -- CItyChaser, and now I’m serving the alternative millitary service at Tainan.
      div
        div(class="myinfo__avatar")
        //- img(class="myinfo__avatar" :src="require('@/assets/img/person.jpg')")
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.root {
  width: 100%;
  background-image: url("~@/assets/img/grids.png");
  .myinfo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    column-gap: clamp(100px, 10vh, 200px);
    @include pdGeneral;
    // padding: 60px 250px;
    > div:nth-child(1) {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 30px 0;
    }
    &__avatar {
      width: clamp(300px, 100%, 100%);
      height: clamp(300px, 100%, 100%);
      background-color: white;
    }
    &__name {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 10px;
      color: white;
      text-shadow: 0 0 3px setColor(text-color-light);
    }
    &__job {
      font-size: 1rem;
      color: setColor(text-color-light);
      font-weight: bold;
    }
    &__description {
      text-align: left;
      margin-top: 20px;
      line-height: 2.5;
      color: setColor(text-color);
    }
  }
}
</style>
