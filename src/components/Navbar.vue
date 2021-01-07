<template lang="pug">
  div(class="navbar")
    div(class="navbar__item" v-for="item in navList "
      @click="switchMenu(item)") {{item}}
</template>

<script>
import { getStyles } from '@/utils/utility.js'
export default {
  props: {
    navList: Array,
    defaultSelected: String
  },
  data () {
    return {
      curr: this.defaultSelected ? this.defaultSelected : this.navList[0]
    }
  },
  methods: {
    switchMenu (item) {
      this.curr = item
      this.$emit('switchMenu', item)
    }
  }
}
</script>
<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 20px;
  left: 20px;
  display: flex;
  z-index: setZindex(navbar);
  &__item {
    font-size: 20px;
    margin: 0 20px;
    &:nth-child(1) {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
