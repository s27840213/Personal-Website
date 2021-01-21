<template lang="pug">
  div(class="portofolio")
    h1 Portofolio
    div(class="project")
      h2 Selected Projects
    div(class="practice")
      h2 Practices
    div(class="artwork")
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
  @include pdGeneral;
  > div {
    text-align: left;
  }
}
</style>
