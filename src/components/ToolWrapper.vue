<template lang="pug">
  div(class="toolwrapper")
    img(class="toolwrapper__icon" :src="getIcon(icon)")
    div(class="toolwrapper__toolname" :style="styles()")
      span {{toolName}}
</template>

<script>

export default {
  props: {
    fontSize: {
      type: Number,
      default: 16
    },
    icon: String,
    toolName: String
  },
  data () {
    return {

    }
  },
  methods: {
    getIcon (icon) {
      return require('@/assets/icon/ps.svg')
      // return require(`@/assets/icon/${icon}.svg`)
    },
    styles () {
      return {
        fontSize: this.fontSize
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.toolwrapper {
  display: flex;
  align-items: center;
  padding: 5px 10px;
  &__icon {
    margin-right: 10px;
    width: 1.5rem;
    height: 1.5rem;
  }
}
</style>
