import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { gsap } from 'gsap'
import { CSSRulePlugin } from 'gsap/dist/CSSRulePlugin'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(CSSRulePlugin, ScrollTrigger)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
