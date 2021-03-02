import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    buildingInfo: [
      {
        name: 'National Palace Museum',
        location: 'Taipei, Taiwan',
        img: 'nationalPalaceMuseum.png'
      },
      {
        name: 'Cristal Church',
        location: 'Tainan, Taiwan',
        img: 'cristalChurch.png'
      },
      {
        name: 'The British Consulate At Takow',
        location: 'Kaohsiung, Taiwan',
        img: 'theBritishConsulateAtTakow.png'
      },
      {
        name: 'Fangyuan Lighthouse',
        location: 'Changhua, Taiwan',
        img: 'fangYuanLighthouse.png'
      },
      {
        name: 'Yehliu',
        location: 'New Taipei, Taiwan',
        img: 'yehliu.png'
      },
      {
        name: 'News Center',
        location: 'Kyronus',
        img: 'newsCenter.png'
      },
      {
        name: 'Zhenge Daidan MemorialPark',
        location: 'Matsu, Taiwan',
        img: 'zhenGeDaiDanMemorialPark.png'
      },
      {
        name: 'Hongye Teenage Baseball Memorial Hall',
        location: 'Taitung, Taiwan',
        img: 'hongyeLittleLeagueBaseballMemorialHall.png'
      },
      {
        name: 'Taoyuan Arts Center',
        location: 'Taipei, Taiwan',
        img: 'taoyuanArtsCenter.png'
      },
      {
        name: 'Tropic Of Cancer Solar Exploration Center',
        location: 'Chiayi, Taiwan',
        img: 'tropicOfCancerSolarExplorationCenter.png'
      },
      {
        name: 'Twin Hearts Stone Weir',
        location: 'Penghu, Taiwan',
        img: 'twinStonesHeart.png'
      },
      {
        name: 'Xiaojiang Pavilion',
        location: 'Hsinchu, Taiwan',
        img: 'xiaojiangPavilion.png'
      }
    ],
    projectInfo: [
      {
        name: 'Kyronus',
        task: 'UI, Illustration, Front-end',
        media: [{
          name: 'fb',
          url: 'https://www.facebook.com/kyronus.tw/'
        },
        {
          name: 'ig',
          url: 'https://www.instagram.com/kyronus.tw/'
        }],
        description: 'Kyronus is a simulation mobile game which connects  to the real world with Gamification. Kyronus allows players to collect and build those famous tourist attractions in Taiwan on their own planet! We hope Kyronus could enhance player’s understanding  of the local culture of Taiwan .',
        button: 'more info',
        buttonCallback: null,
        cover: 'kyronus.png'
      },
      {
        name: 'TeleCan',
        task: 'Front-end, Visualization',
        media: null,
        description: 'TeleCan was a project which was shortlisted in the 2020 Ustart Project. It use image recognition technology to record the data of trash in certain place. My friend and I just did the freelance work for them to develop the demo website. My friend was responsible for back-end , and I was responsible for front-end,including UI to HTML, visualization, and AWS S3 static website deployment.',
        button: 'visit site',
        buttonCallback: () => {
          console.log('TeleCan')
          window.open('http://telecan-web.s3-website-ap-northeast-1.amazonaws.com/#/')
        },
        cover: 'telecan.png'
      }
    ],
    isLoading: true,
    scrollTarget: null
  },
  getters: {
    getIsLoading (state) {
      return state.isLoading
    },
    getScrollTarget (state) {
      return state.scrollTarget
    }
  },
  mutations: {
    SET_isLoading (state, boolean) {
      state.isLoading = boolean
    },
    SET_scrollTarget (state, target) {
      state.scrollTarget = target
    }
  },
  actions: {
  },
  modules: {
  }
})
