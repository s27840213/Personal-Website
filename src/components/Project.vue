<template lang="pug">
  div(class="root-project")
    h1(class="heading") Project
    div(class="project-1")
      div(class="project-1__img")
      div
        div(class="project-1__task") UI, Illustration, Front-end
        div(class="project-1__name") Kyronus
        div(class="project-1__media")
          div
          div
        div(class="project-1__description")  Passionate about coding with motion graphic design. Like to learning  new technologies to sharpen my programming skills. I’m currently work as an front-end.
        span(class="project-1__button") more info
    div(class="project-2")
      div
        div(class="project-2__task") UI, Animation, Front-end
        div(class="project-2__name") Telecan
        div(class="project-2__description")  Passionate about coding with motion graphic design. Like to learning  new technologies to sharpen my programming skills. I’m currently work as an front-end.
        span(class="project-2__button") visit site
      div(class="project-2__img")
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.root-project {
  width: 100%;
  overflow: hidden;
  .project-1 {
    @include pdGeneral;
    display: grid;
    align-items: center;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    column-gap: 30px;
    text-align: left;
    transform: translate3d(-5%, 0, 0);
    &__img {
      background-color: gray;
      height: 400px;
      position: relative;
      &::after {
        content: "01";
        position: absolute;
        bottom: 0;
        left: 0;
        font-size: 96px;
        font-weight: bold;
        transform: translate3d(-50%, 50%, 0);
      }
    }
    &__task {
      font-size: 2rem;
      font-weight: bold;
      transform: translate3d(-25%, 0, 0);
    }
    &__name {
      font-size: 4rem;
      font-weight: bold;
      transform: translate3d(-25%, 0, 0);
    }
    &__media {
      display: flex;
      > div {
        @include size(30px);
        background-color: gray;
        margin: 0px 15px;
      }
    }
    &__description {
      font-size: 1.2rem;
      margin: 20px 0px;
      box-sizing: border-box;
      color: setColor(text-color);
    }
    &__button {
      font-size: 2rem;
      font-weight: bold;
      position: relative;
      cursor: pointer;
      &::after {
        content: "";
        position: absolute;
        background-color: setColor(text-color);
        @include size(50%, 2px);
        bottom: 0px;
        left: 0px;
        transition: 0.5s;
      }
      &:hover {
        &::after {
          width: 100%;
        }
      }
    }
  }
  .project-2 {
    @include pdGeneral;
    display: grid;
    align-items: center;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    column-gap: 30px;
    text-align: right;
    transform: translate3d(5%, 0, 0);
    > div:nth-child(1) {
      z-index: setZindex(default-2);
    }
    &__img {
      background-color: gray;
      height: 400px;
      position: relative;
      z-index: setZindex(default-1);
      &::after {
        content: "02";
        position: absolute;
        bottom: 0;
        right: 0;
        font-size: 96px;
        font-weight: bold;
        transform: translate3d(50%, 50%, 0);
      }
    }
    &__task {
      font-size: 2rem;
      font-weight: bold;
      transform: translate3d(25%, 0, 0);
    }
    &__name {
      font-size: 4rem;
      font-weight: bold;
      transform: translate3d(25%, 0, 0);
    }
    &__description {
      font-size: 1.2rem;
      margin: 20px 0px;
      box-sizing: border-box;
      color: setColor(text-color);
      text-align: left;
    }
    &__button {
      font-size: 2rem;
      font-weight: bold;
      position: relative;
      cursor: pointer;
      &::after {
        content: "";
        position: absolute;
        background-color: setColor(text-color);
        @include size(50%, 2px);
        bottom: 0px;
        left: 0px;
        transition: 0.5s;
      }
      &:hover {
        &::after {
          width: 100%;
        }
      }
    }
  }
}
</style>
