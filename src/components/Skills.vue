<template lang="pug">
  div(class="root")
    div(class="dividor")
    h1 Skills
    div(class="programming")
      div
        div(class="programming__title")
          span Programmer
        div(class="programming__skill")
          span Programming Skill(Advanced)
            div(style="height: 30px; background-color: red")
            //- tool-wrapper(:fontSize="16" :icon="sass" toolName="Photoshop")
          br
          span Programming Skill(Intermediate)
      div
    div(class="design")
      div
        div(class="design__title")
          span Designer
        div(class="design__tool")
          span Design Tool
      div
</template>

<script>
import ToolWrapper from '@/components/ToolWrapper.vue'
export default {
  components: {
    ToolWrapper
  }
}
</script>

<style lang="scss" scoped>
.root {
  width: 100%;
  height: 100vh;
  background-color: setColor(primary);
}
</style>
