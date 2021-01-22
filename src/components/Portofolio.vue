<template lang="pug">
  div(class="portofolio")
    h1 Portofolio
    div(class="content")
      div(class="content__project")
        h2 Selected Projects
      div(class="content__practice")
        h2 Practices
      div(class="content__artwork")
        h2 Artworks
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.portofolio {
  width: 100%;
  height: 100vh;
  .content {
    @include pdGeneral;
    &__project {
      text-align: left;
    }
    &__practice {
      text-align: left;
    }
    &__artwork {
      text-align: left;
    }
  }
}
</style>
