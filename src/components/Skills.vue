<template lang="pug">
  div(class="root")
    h1 Skill Set
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
        img(:src="require('@/assets/img/designer4.svg')")
    div(class="design")
      div
        img(:src="require('@/assets/img/designer.svg')")
      div
        div(class="programming__title")
          h2 Designer
        div(class="programming__skill")
          div
            span Programming Skill (Advanced)
          div
            tool-wrapper(v-for="i in 10" :key="`tool-${i}`" :fontSize="16" :icon="'sass'" toolName="Photoshop")
          div
            span Programming Skill (Intermediate)
          div
            tool-wrapper(v-for="i in 10" :key="`tool-${i}`" :fontSize="16" :icon="'sass'" toolName="Photoshop")
</template>

<script>
import ToolWrapper from '@/components/ToolWrapper.vue'
export default {
  components: {
    ToolWrapper
  },
  data () {
    return {
      skillMain: ['']
    }
  }
}
</script>

<style lang="scss" scoped>
.root {
  width: 100%;
  box-sizing: border-box;

  .programming {
    width: 100%;
    text-align: left;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    column-gap: clamp(30px, 10vh, 150px);
    @include pdGeneral;
    padding-bottom: 0px;
    > div:nth-child(2) {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 30px;
      > img {
        width: 100%;
      }
    }
    &__skill {
      margin-left: 2rem;
      > div:nth-child(2) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
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
  .design {
    width: 100%;
    text-align: left;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    column-gap: clamp(30px, 10vh, 150px);
    @include pdGeneral;
    > div:nth-child(1) {
      padding: 30px;
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
