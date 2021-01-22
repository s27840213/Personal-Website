<template lang="pug">
  div(class="landing-page")
    div
      img(class="avatar" :src="require('@/assets/img/avatar.jpg')")
    div(class="message")
      span Hello, I'm Alan
      br
      span Welcome to
      br
      span My Personal Website!
    - for (i = 1; i <= 100; i++)
      .circle-container
        .circle
</template>

<script>
export default {
  mounted () {
    document.addEventListener('mousemove', this.parallax)
  },
  methods: {
    parallax (e) {
      document.querySelectorAll('.planet').forEach(planet => {
        const speed = planet.getAttribute('data-speed')
        const x = (window.innerWidth - e.pageX * speed) / 200
        const y = (window.innerHeight - e.pageY * speed) / 200
        planet.style.transform = `translateX(${x}px) translateY(${y}px)`
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.landing-page {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  @include size(100vw, 100vh);
  max-width: 100%;
  position: relative;
  position: relative;
  overflow: hidden;
  > div:nth-child(1) {
    @include flexCenter;
    padding: 5px;
    background: white;
    margin-left: 6vw;
    margin-right: 20px;
    border-radius: 50%;
    z-index: setZindex("avatar");
  }
  &::after {
    content: "1234";
    position: absolute;
    width: 100vw;
    height: 100vh;
    // transform: translate3d(0, -35%, 0);
    background-image: radial-gradient(
      circle at 50% -10%,
      #1e3740 20%,
      #1d353f 20%,
      #1d353f 30%,
      #1b333d 30%,
      #1b333d 40%,
      #19313b 40%,
      #19313b 50%,
      #172e38 50%,
      #172e38 60%,
      #142b35 60%,
      #142b35 70%,
      #122832 70%,
      #122832 80%,
      #0f252f 80%,
      #0f252f 90%,
      #0d222c 90%,
      #0a1f29 100%
    );
  }
}
.avatar {
  @include size(200px);
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(setColor(primary), 0.5);
  // filter: drop-shadow(0 0 15px rgba(#4d91b8, 0.5));
  ::after {
    content: "12312313";
    color: white;
    top: 0px;
    left: 0px;
    width: 300px;
    height: 300px;
    background-color: #fff;
  }
}
.message {
  color: white;
  font-size: clamp(1.5rem, 5vw, 3rem);
  font-family: "Passion One";
  // font-style: italic;
  text-align: left;
  z-index: setZindex("paragraph");
  text-shadow: 3px 3px 3px #4d91b8;
}
</style>
