<template lang="pug">
  div(id="app")
    loading
    navbar(:navList="['Home','About','Skill','Project','Artwork','Contact']")
    router-view
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import Loading from '@/components/Loading.vue'
export default {
  components: {
    Navbar,
    Loading
  },
  mounted () {
    document.addEventListener('click', this.clickEffect)
  },
  methods: {
    clickEffect: function (e) {
      const d = document.createElement('div')
      d.className = 'clickEffect'
      d.style.top = `${e.clientY - 50}px`
      d.style.left = `${e.clientX - 50}px`
      document.body.appendChild(d)
      d.addEventListener('animationend', function () {
        d.parentElement.removeChild(d)
        d.removeEventListener('animationend', this)
      })
    }
  }
}
</script>
<style lang="scss">
#app {
  @include size(100%, 100%);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: setColor(white);
  background-color: setColor(primary);
}

@keyframes clickEffect {
  0% {
    opacity: 1;
    transform: scale(0.1);
    border-width: 1.5em;
  }
  100% {
    opacity: 0.2;
    transform: scale(1);
    border-width: 0.03em;
  }
}
.clickEffect {
  position: fixed;
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  border-style: solid;
  border-color: setColor(text-color);
  border-radius: 50%;
  animation: clickEffect 0.4s ease-in-out;
  transform-origin: center;
  z-index: 1000;
  will-change: opacity, transform, border-width;
  pointer-events: none;
}
</style>
