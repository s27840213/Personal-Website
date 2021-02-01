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
        name: 'Longshan Temple',
        location: 'Taipei, Taiwan',
        img: 'longshanTemple.png'
      },
      {
        name: 'Xiaojiang Pavilion',
        location: 'Hsinchu, Taiwan',
        img: 'xiaojiangPavilion.png'
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
