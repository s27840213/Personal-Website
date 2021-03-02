<template lang="pug">
  div(class="kyronus-intro")
    div(class="kyronus-intro__img")
      img(:src="require('@/assets/img/kyronus/cellphone.png')")
    div(class="kyronus-intro__info")
      div(class="kyronus-intro__heading")
        div(class="heading-ky-r") Kyronus 開拓者
        div(class="kyronus-intro__tag")
          span Hybrid App
          span Teamwork
      div(class="kyronus-intro__content")
        p 《Kyronus 開拓者》 is a cross-platform, location-based simulation mobile game that aims to promote Taiwan’s local culture and historical site. Players could collect those famous historical buildings' resources with their mobile phones and then construct those buildings on their own planets.
        div(class="kyronus-intro__acievement")
          span Kyronus Acievement
          ul
            li Won 3rd prize in Mobile Game Development Group of Vision Get Wild Award 2020
            li Shortlisted in the first stage of U-Start Innovation and Entrepreneurship Program 2020
            li Shortlisted in the first stage of Bahamut ACG Contest 2020
            li Shortlisted in the final stage of Tourism Innovation and Tech Awards 2020
            li Crowdfunded NT $80,000(approx.) dollar from 100+ sponsors in Zeczec.
      div(class="more-info")
        div(class="more-info__trailer")
          span Trailer
          span
            a(href="https://www.youtube.com/watch?v=x_5mXS5zP6E" target="blank")
              img(:src="require('@/assets/img/kyronus/trailer.png')")
        div(class="more-info__interview")
          span Interview
          span
            a(href="https://gnn.gamer.com.tw/detail.php?sn=199702" target="blank")
              img(:src="require('@/assets/img/kyronus/interview.png')")
</template>

<script>
export default {
  data () {
    return {
      demoImg: []
    }
  }
}
</script>

<style lang="scss" scoped>
.kyronus-intro {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr;
  padding: 0px 10px;
  @include mobileStyle {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
  &__img {
    > img {
      width: clamp(100px, 100%, 400px);
    }
    @include mobileStyle {
      display: none;
    }
  }

  &__info {
    text-align: left;
  }
  &__heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    position: relative;

    .kyronus-intro__tag {
      > span {
        font-size: 0.7rem;
        display: inline-block;
        margin: 10px 10px;
        padding: 10px 20px;
        border-radius: 5px;
        white-space: nowrap;
        &:nth-child(1) {
          background-color: setKyColor(orange);
          color: setKyColor(text-content);
        }
        &:nth-child(2) {
          background-color: setKyColor(brown-light);
          color: setKyColor(brown);
        }

        @include mobileStyle {
          font-size: 0.3rem;
          margin: 5px;
          padding: 5px 10px;
        }
      }
    }
  }
  &__content {
    color: setKyColor(text-content);
    padding-right: calc((100vw - 1100px) / 2);
    line-height: 200%;
    font-size: clamp(0.7rem, 2vw, 1rem);
    .kyronus-intro__acievement {
      > span {
        font-weight: bold;
        font-size: clamp(1rem, 2vw, 1.5rem);
      }
    }
  }
}

.more-info {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  line-height: 200%;
  color: setKyColor(brown);
  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;

  // .play-button {
  //   position: absolute;
  //   top: 50%;
  //   left: 50%;
  //   width: 30px;
  //   fill: white;
  //   transform: translate3d(-50%, -55%, 0);
  //   z-index: 5;
  //   filter: drop-shadow(0px 2px 2px setKyColor(text-content));
  //   transition: transform 0.3s;
  // }

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    img {
      width: clamp(0px, 100%, 400px);
      border-radius: 5px;
      transition: transform 0.3s;
      &:hover {
        transform: scale(1.03);
      }
    }
  }
}
</style>
