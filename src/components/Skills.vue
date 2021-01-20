<template lang="pug">
  div(class="root")
    h1 Skills
    div
      div(class="programming")
        div
          div(class="programming__title")
            h2 Programmer
          div(class="programming__skill")
            div
              span Programming Skill (Advanced)
            div
              tool-wrapper(v-for="i in 10" :key="`tool-${i}`" :fontSize="16" :icon="'sass'" toolName="Photoshop")
            div
              span Programming Skill (Intermediate)
            div
              tool-wrapper(v-for="i in 10" :key="`tool-${i}`" :fontSize="16" :icon="'sass'" toolName="Photoshop")
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
  background-color: setColor(primary);
  box-sizing: border-box;
  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    padding: 60px 250px;
  }

  .programming {
    width: 100%;
    text-align: left;
    display: grid;
    grid-template-columns: 1fr minmax(200px, 300px);
    grid-template-rows: 1fr;
    column-gap: 30px;
    // display: flex;
    // align-items: center;
    > div:nth-child(2) {
      background-color: white;
    }
    &__skill {
      margin-left: 2rem;
      > div:nth-child(2) {
        display: flex;
        flex-wrap: wrap;
        .toolwrapper::v-deep {
          margin: 10px;
          color: setColor(text-color-light, 1);
        }
      }
      > div:nth-child(4) {
        display: flex;
        flex-wrap: wrap;
        .toolwrapper::v-deep {
          margin: 10px;
          color: setColor(text-color-light, 1);
        }
      }
    }
  }
}
</style>
