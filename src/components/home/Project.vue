<template lang="pug">
  div(class="project")
    h1(class="project__heading") Project
    div(class="project__container")
      project-wrapper(v-for="(project,index) in projectInfo" :key="`project-${index}`"  :projectInfo="project" :index="index")
    div(class="practice")
      span(class="practice__text") Watch Some Practices on my
      div(class="practice__icon-set")
        img(class="practice__icon" :src="require('@/assets/icon/github.svg')")
        a(href="https://codepen.io/collection/AMdQPg?sort_by=id&cursor=ZD0wJm89MCZwPTEmdj03MDQ4Nzcx" target="blank")
          img(class="practice__icon" :src="require('@/assets/icon/codepen.svg')")
</template>

<script>
import ProjectWrapper from '@/components/ProjectWrapper.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import VanillaTilt from 'vanilla-tilt'
import { animatePseudo } from '@/utils/utility.js'
import { mapState } from 'vuex'

export default {
  components: {
    ProjectWrapper
  },
  data () {
    return {
      animSpeed: 0.7
    }
  },
  mounted () {
    const projectAnim = gsap.timeline({
      scrollTrigger: {
        trigger: '.project__heading',
        start: 'top bottom',
        markers: true
      }
    }).from('.project__heading', {
      duration: this.animSpeed,
      y: 100,
      opacity: 0,
      onStart: animatePseudo,
      onStartParams: ['.project__heading']
    })
  },
  methods: {
    animProject1 () {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.project-1',
          start: 'center bottom',
          autoRemoveChildren: true
        }
      })
        .from('.project-1__img', {
          duration: this.animSpeed,
          x: 100,
          opacity: 0,
          onComplete: () => {
            VanillaTilt.init(document.querySelectorAll('.project-1__img'), {
              max: 5,
              reverse: true,
              speed: 400
            })
          }
        })
        .from('.project-1__index', {
          duration: this.animSpeed,
          x: 100,
          opacity: 0
        }, '-=0.5')
        .from('.project-1__task', {
          duration: this.animSpeed,
          x: -100,
          opacity: 0
        }, '-=0.5')
        .from('.project-1__name', {
          duration: this.animSpeed,
          x: -100,
          opacity: 0
        }, '-=0.5')
        .from('.project-1__media', {
          duration: this.animSpeed,
          x: 100,
          opacity: 0
        }, '-=0.5')
        .from('.project-1__description', {
          duration: this.animSpeed,
          x: 100,
          opacity: 0
        }, '-=0.5')
        .from('.project-1__button', {
          duration: this.animSpeed,
          x: 100,
          opacity: 0
        }, '-=0.5')
    }
  },
  computed: {
    ...mapState({
      projectInfo: 'projectInfo'
    })
  }
}
</script>

<style lang="scss" scoped>
@mixin textShadow() {
  text-shadow: 4px 4px setColor(secondary);
}
@mixin description() {
  font-size: 1rem;
  font-weight: 300;
  margin: 20px 0px;
  box-sizing: border-box;
  color: setColor(text-color);
  text-align: left;
  line-height: 200%;
}
.project {
  width: 100%;
  overflow: hidden;
  &__heading {
    @include heading;
    &.animatePseudo::after {
      transition-delay: 0.25s;
      width: 25%;
    }
  }
  .project__container {
    .project-wrapper::v-deep {
      &:not(:last-child) {
        margin-bottom: 100px;
      }
    }
  }
  .practice {
    margin-top: 100px;
    font-size: 1.5rem;
    font-weight: 700;
    &__icon {
      width: 40px;
      height: 40px;
      margin: 20px 20px;
      transition: 0.3s ease-out;
      cursor: pointer;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
}
</style>
