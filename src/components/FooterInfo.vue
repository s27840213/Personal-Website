<template lang="pug">
  div(class="footer" :style="{'background-color':bgColor}")
    div(class="footer__icon-set")
      a(v-for="icon in icons" :href="`${mappingUrl(icon)}`" target="blank")
        div(class="footer__icon" :style="{'background-color': iconColor,'mask-image': `url(${mappingIcon(icon)})`}")
    div(class="footer__copyright") Copyright © 2021 - Alan Chang
</template>

<script>
import { mappingUrl } from '@/utils/utility.js'

export default {
  props: {
    bgColor: {
      type: String,
      default: '#602b41'
    },
    iconColor: {
      type: String,
      default: '#f9f3e7'
    }
  },
  data () {
    return {
      icons: ['fb', 'ig', 'github', 'linkedin', 'codepen']
    }
  },
  methods: {
    mappingIcon (icon) {
      return require(`@/assets/icon/${icon}.svg`)
    },
    mappingUrl
  }
}
</script>

<style lang="scss" scoped>
.footer {
  margin-bottom: 0px;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  &__icon-set {
    display: flex;
    justify-content: center;
    padding: 30px;
  }
  &__icon {
    @include size(20px);
    margin: 1px 20px 0px 20px;
    background-color: setKyColor(bg);
    transition: transform 0.3s, color 0.2s;
    &:hover {
      transform: scale(1.2);
      background-color: setColor(white);
    }
  }
  &__copyright {
    font-size: 0.8rem;
    color: setKyColor(bg);
  }
}
</style>
