<template lang="pug">
  div(class="root-practice")
    h1(class="heading") Practice
    div(class="practice")
      div
        div(class="practice__item" v-for="i in 8")
      button(class="practice__button") Watch More
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.root-practice {
  box-sizing: border-box;
  .practice {
    @include pdGeneralHr;
    > div:nth-child(1) {
      display: grid;
      grid-auto-rows: 150px;
      row-gap: 20px;
      column-gap: 20px;
      grid-template-columns: repeat(4, 1fr);
    }
    &__item {
      background-color: gray;
    }
    &__button {
      background-color: setColor(red);
      outline: none;
      border: none;
      border-radius: 100px;
      color: white;
      margin-top: 30px;
      font-size: 1.8rem;
      padding: 20px 40px;
    }
  }
}
</style>
