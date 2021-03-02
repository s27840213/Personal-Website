<template lang="pug">
  div(class="ux-research")
    div(class="ux-research__info")
      span(class="heading-ky-l") UX Research
      div(class="ux-research__content")
        div(class="ux-research__paragraph")
          div After completing the minimum viable product, we conducted user research. The purpose was to investigate the user's experience of game play.
          div We recruited six gamers for a week of trial play. Finally, we used video interviews to understand the experience of playing during this period.
        div(class="ux-research__steps")
          div(class="ux-research__step")
            div(class="ux-research__decoration")
              div
              span 01
            div(class="ux-research__step-info")
              span Interview Outline Design
              div Learn about the game elements that attract players from books and literature. Extend relevant interview questions.
          div(class="ux-research__step")
            div(class="ux-research__decoration")
              div
              span 02
            div(class="ux-research__step-info")
              span Recruit Participants
              div We selected from sponsors who are willing to participate in the interview. Conducted an interview after they play for a week.
          div(class="ux-research__step")
            div(class="ux-research__decoration")
              div
              span 03
            div(class="ux-research__step-info")
              span Qualitative analysis
              div We converted interview recordings into transcripts for labeling. Put the labels of the same concept into the same category. Finally got several insights for us to improve our game.
    div(class="ux-research__demo")
</template>

<script>
export default {
  data () {
    return {
      demoImg: ['planet-scene', 'collect-scene', 'build-mode']
    }
  }
}
</script>

<style lang="scss" scoped>
.ux-research {
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  @include mobileStyle {
    grid-template-rows: 1fr 80vw;
    grid-template-columns: 1fr;
  }
  &__info {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px clamp(30px, calc((50vw - 500px) / 2), calc((50vw - 500px) / 2));
    @include mobileStyle {
      align-items: center;
    }
  }
  &__content {
  }
  &__paragraph {
    text-align: left;
    font-size: 1rem;
    color: setKyColor(text-content);
    line-height: 200%;
    > div:nth-child(1) {
      margin-top: 30px;
      margin-bottom: 15px;
    }
  }
  &__steps {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    row-gap: clamp(10px, 5vw, 50px);
    justify-content: center;
    margin-top: clamp(10px, 5vw, 40px);
    color: setKyColor(text-content);
    .ux-research__step {
      display: flex;
      align-items: flex-start;
      font-size: 1.2rem;
    }
    @include mobileStyle {
      margin-bottom: 30px;
    }
  }
  &__demo {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-image: url("~@/assets/img/kyronus/ux-research.png");
    background-position: center;
    background-size: cover;
    @include pcStyle {
      background-image: linear-gradient(
          to right,
          setKyColor(bg) 0%,
          transparent 60%
        ),
        url("~@/assets/img/kyronus/ux-research.png");
    }
    @include mobileStyle {
      margin-top: 50px;
    }
  }
  &__decoration {
    display: flex;
    align-items: center;
    margin-right: 20px;
    > div {
      @include size(20px);
      border: 5px solid setKyColor(brown);
      border-radius: 50%;
      box-sizing: border-box;
      margin-right: clamp(10px, 3vw, 50px);
      @include mobileStyle {
        @include size(10px);
        border: 3px solid setKyColor(brown);
      }
    }
    > span {
      font-size: 3rem;
      font-weight: 900;
      color: setKyColor(brown);
      font-style: italic;
      @include mobileStyle {
        font-size: 2rem;
      }
    }
  }
  &__step-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    top: 25px;
    @include mobileStyle {
      top: 10px;
    }
    > span {
      font-size: 1.5rem;
      font-weight: bold;
      text-align: left;
    }
    > div {
      text-align: left;
      font-size: 1rem;
      line-height: 200%;
    }
  }
}
</style>
