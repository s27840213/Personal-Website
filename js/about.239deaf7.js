(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"11e0":function(t,e,i){},"21f4":function(t,e,i){"use strict";i("11e0")},"2ce4":function(t,e,i){"use strict";i("cc88")},"2d0d":function(t,e,i){},"351c":function(t,e,i){},"3e81":function(t,e,i){"use strict";i("e26f")},"40bd":function(t,e,i){var n={"./building-0.png":"176b","./building-1.png":"15d4","./building-2.png":"1df3","./building-3.png":"ff77","./building-4.png":"2b0d","./building-feature-h-0.png":"f93b","./building-feature-h-1.png":"af19","./building-feature-ky-0.png":"0c12","./building-feature-ky-1.png":"5086"};function s(t){var e=a(t);return i(e)}function a(t){if(!i.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=a,t.exports=s,s.id="40bd"},4464:function(t,e,i){},"4fef":function(t,e,i){"use strict";i("9655")},"90b0":function(t,e,i){"use strict";i("99c6")},9655:function(t,e,i){},"99c6":function(t,e,i){},b66a:function(t,e,i){},c515:function(t,e,i){"use strict";i("2d0d")},cc88:function(t,e,i){},cddd:function(t,e,i){"use strict";i("4464")},dc75:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"kyronus"},[n("div",{staticClass:"back-button",on:{click:function(e){return t.goBack()}}},[n("img",{attrs:{src:i("a78c")}})]),n("kyronus-landing-page"),n("kyronus-intro"),n("navagation-map"),n("core-mechanic"),n("design-concept"),n("ux-research"),n("u-i-guideline"),n("game-art-design"),n("div",{staticClass:"leo-section"},[n("img",{staticClass:"leo-section__avatar",attrs:{src:i("8a03")}}),n("div",{staticClass:"leo-section__info"},[t._m(0),t._m(1),n("div",[n("div",{staticClass:"leo-section__icon-set"},t._l(t.leoIcons,(function(e){return n("a",{staticClass:"leo-section__icon",attrs:{href:""+t.mappingLeoUrl(e),target:"blank"}},[n("div",{style:{"mask-image":"url("+t.mappingIcon(e)+")"}})])})),0),t._m(2)])])]),n("footer-info",{attrs:{bgColor:"#957381",iconColor:"#f9f3e7"}})],1)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("span",[t._v("UI Designed by")]),i("span",[t._v("Leo Kuo")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("span",[t._v("iOS developer | UIUX designer | Frontend developerp")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"leo-section__email"},[i("a",{attrs:{href:"mailto:p900372012@gmail.com"}},[i("span",[t._v("p900372012@gmail.com")])])])}],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ky-landing-page"},[n("div",{staticClass:"main-scene"},[n("img",{staticClass:"main-scene__building",attrs:{src:i("3ad7")}}),n("img",{staticClass:"main-scene__flyingship",attrs:{src:i("e3f5")}}),n("img",{staticClass:"main-scene__duino",attrs:{src:i("6aca")}}),n("div",{staticClass:"main-scene__info"},[n("img",{staticClass:"main-scene__logo",attrs:{src:i("e02c")}}),t._m(0)])])])},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main-scene__slogan"},[i("div",{staticClass:"slogan"},[i("span",[t._v("在你的城市")])]),i("div",{staticClass:"slogan"},[i("span",[t._v("開拓屬於你的城市")])])])}],r=i("5530"),c=i("cffa"),l=i("2f62"),u={data:function(){return{animSpeed:.7,tl:null}},computed:Object(r["a"])({},Object(l["b"])({getIsLoading:"getIsLoading"})),methods:Object(r["a"])({},Object(l["c"])({SET_isLoading:"SET_isLoading"})),watch:{getIsLoading:function(){this.getIsLoading?this.tl.pause():this.hasPlayed||(this.tl.play(),this.hasPlayed=!0)}},mounted:function(){var t=this;setTimeout((function(){t.SET_isLoading(!1)}),1e3),this.tl=c["b"].timeline(),this.getIsLoading&&this.tl.pause(),this.tl.from(".main-scene",{duration:2*this.animSpeed,scale:2,ease:"power4.out"},"s").from(".main-scene__building",{duration:3*this.animSpeed,yPercent:100,ease:"power4.out"},"s-=0.4").from(".main-scene__flyingship",{duration:3*this.animSpeed,yPercent:100,ease:"power4.out"},"s-=0.4").from(".main-scene__duino",{duration:3*this.animSpeed,yPercent:100,rotate:20,ease:"power4.out"},"-=1").from(".main-scene__logo",{duration:this.animSpeed,x:-50,opacity:0,ease:"power4.out"},"-=1.5").from(".slogan",{duration:1.2*this.animSpeed,stagger:.5,xPercent:-120,opacity:0,ease:"power2.out"},"-=1.2")},beforeDestroy:function(){this.tl.kill()}},d=u,m=(i("4fef"),i("2877")),g=Object(m["a"])(d,a,o,!1,null,"029ce29a",null),p=g.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"kyronus-intro"},[n("div",{staticClass:"kyronus-intro__img"},[n("img",{attrs:{src:i("c80b")}})]),n("div",{staticClass:"kyronus-intro__info"},[t._m(0),t._m(1),n("div",{staticClass:"more-info"},[n("div",{staticClass:"more-info__trailer"},[n("span",[t._v("Trailer")]),n("span",[n("a",{attrs:{href:"https://www.youtube.com/watch?v=x_5mXS5zP6E",target:"blank"}},[n("img",{attrs:{src:i("5458")}})])])]),n("div",{staticClass:"more-info__interview"},[n("span",[t._v("Interview")]),n("span",[n("a",{attrs:{href:"https://gnn.gamer.com.tw/detail.php?sn=199702",target:"blank"}},[n("img",{attrs:{src:i("7568")}})])])])])])])},f=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"kyronus-intro__heading"},[i("div",{staticClass:"heading-ky-r"},[t._v("Kyronus 開拓者")]),i("div",{staticClass:"kyronus-intro__tag"},[i("span",[t._v("Hybrid App")]),i("span",[t._v("Teamwork")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"kyronus-intro__content"},[i("p",[t._v("《Kyronus 開拓者》 is a cross-platform, location-based simulation mobile game that aims to promote Taiwan’s local culture and historical site. Players could collect those famous historical buildings' resources with their mobile phones and then construct those buildings on their own planets.")]),i("div",{staticClass:"kyronus-intro__acievement"},[i("span",[t._v("Kyronus Acievement")]),i("ul",[i("li",[t._v("Won 3rd prize in Mobile Game Development Group of Vision Get Wild Award 2020")]),i("li",[t._v("Shortlisted in the first stage of U-Start Innovation and Entrepreneurship Program 2020")]),i("li",[t._v("Shortlisted in the first stage of Bahamut ACG Contest 2020")]),i("li",[t._v("Shortlisted in the final stage of Tourism Innovation and Tech Awards 2020")]),i("li",[t._v("Crowdfunded NT $80,000(approx.) dollar from 100+ sponsors in Zeczec.")])])])])}],h=i("49dc"),v=i("2520"),b={data:function(){return{demoImg:[],tl:null}},mounted:function(){this.tl=c["b"].timeline({scrollTrigger:{id:"ky-intro",trigger:".kyronus-intro",start:"top bottom",autoRemoveChildren:!0}}),this.tl.from(".kyronus-intro__img",{duration:.7,x:-100,opacity:0},"s").from(".kyronus-intro__heading",{duration:.7,opacity:0,x:-50},"-=0.5").from(".kyronus-intro__content",{duration:.7,opacity:0,x:-50},"-=0.5").from(".more-info__trailer",{duration:.7,opacity:0,x:-50},"-=0.5").from(".more-info__interview",{duration:.7,opacity:0,x:-50},"-=0.5")},beforeDestroy:function(){this.tl.pause(0).kill(!0),h["ScrollTrigger"].getById("ky-intro").kill(!0)}},y=b,C=(i("cddd"),Object(m["a"])(y,_,f,!1,null,"f6da667e",null)),k=C.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"core-mechanic"},[t._m(0),n("div",{staticClass:"core-mechanic__demo"},t._l(t.demoImg,(function(t){return n("img",{staticClass:"core-mechanic__demo-img",attrs:{src:i("e417")("./"+t+".png")}})})),0)])},w=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"core-mechanic__info"},[i("span",{staticClass:"heading-ky-l"},[t._v("Core Mechanic")]),i("div",{staticClass:"core-mechanic__steps"},[i("div",{staticClass:"core-mechanic__step"},[i("div",{staticClass:"decoration"}),i("span",[t._v("Collect resources")])]),i("div",{staticClass:"core-mechanic__step"},[i("div",{staticClass:"decoration"}),i("span",[t._v("Construct buildings")])]),i("div",{staticClass:"core-mechanic__step"},[i("div",{staticClass:"decoration"}),i("span",[t._v("Unlock buildings and game features")])])])])}],I={data:function(){return{demoImg:["planet-scene","collect-scene","build-mode"],tl:null}},mounted:function(){this.tl=c["b"].timeline({scrollTrigger:{id:"core-mechanic",trigger:".core-mechanic__info",start:"top bottom",autoRemoveChildren:!0}}),this.tl.from(".core-mechanic__info",{duration:.7,x:-100,opacity:0},"s").from(".core-mechanic__step",{duration:.7,opacity:0,x:-50},"-=0.5").from(".core-mechanic__demo-img",{duration:.7,opacity:0,stagger:{amount:.5},x:-50},"-=0.5")},beforeDestroy:function(){this.tl.pause(0).kill(!0),h["ScrollTrigger"].getById("core-mechanic").kill(!0)}},E=I,T=(i("f504"),Object(m["a"])(E,x,w,!1,null,"6a67b0b4",null)),S=T.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"map"},[n("div",{staticClass:"heading-ky"},[t._v("Main UI Navigation Map")]),n("div",{staticClass:"top-section"},[n("div",{staticClass:"top-section__building-feature"},[n("span",[t._v("Historical Building Feature")]),n("div",{staticClass:"top-section__demo"},[n("img",{attrs:{src:i("f93b")}}),n("img",{attrs:{src:i("af19")}})])]),n("div",{staticClass:"top-section__play-scene"},[n("span",[t._v("Main Scene")]),n("img",{attrs:{src:i("b050")}})]),n("div",{staticClass:"top-section__building-feature"},[n("span",[t._v("Original Building Feature")]),n("div",{staticClass:"top-section__demo"},[n("img",{attrs:{src:i("0c12")}}),n("img",{attrs:{src:i("5086")}})])])]),n("div",{staticClass:"bottom-section"},[n("div",{staticClass:"bottom-section__demo"},[n("img",{attrs:{src:i("e2fa")}}),n("span",[t._v("Official Scene")])]),n("div",{staticClass:"bottom-section__demo"},[n("img",{attrs:{src:i("3442")}}),n("span",[t._v("Collect Mode")])]),n("div",{staticClass:"bottom-section__demo"},[n("img",{attrs:{src:i("6003")}}),n("span",[t._v("Build Mode")])]),n("div",{staticClass:"bottom-section__demo"},[n("img",{attrs:{src:i("10eb")}}),n("span",[t._v("Baggage Scene")])]),n("div",{staticClass:"bottom-section__demo"},[n("img",{attrs:{src:i("cb00")}}),n("span",[t._v("Store Scene")])])])])},$=[],D={data:function(){return{demoImg:[],tl:null}},mounted:function(){this.tl=c["b"].timeline({scrollTrigger:{id:"nav-map",trigger:".map",start:"top bottom",autoRemoveChildren:!0}}),this.tl.from(".top-section__building-feature",{duration:.7,x:-100,opacity:0},"s").from(".top-section__play-scene",{duration:.7,opacity:0,x:-50},"-=0.5").from(".bottom-section__demo",{duration:.7,opacity:0,x:-50,stagger:{amount:1.2}},"-=0.5")},beforeDestroy:function(){this.tl.pause(0).kill(!0),h["ScrollTrigger"].getById("nav-map").kill(!0)}},U=D,L=(i("3e81"),Object(m["a"])(U,O,$,!1,null,"8a71b4ce",null)),j=L.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"design-concept"},[t._m(0),n("div",{staticClass:"design-concept__demo"},[n("div",t._l(t.demoImg,(function(t){return n("img",{staticClass:"design-concept__demo-img",attrs:{src:i("e417")("./"+t+".png")}})})),0),t._m(1)])])},P=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"design-concept__info"},[i("span",{staticClass:"heading-ky-l"},[t._v("UI Design Concept")]),i("div",{staticClass:"design-concept__content"},[i("span",[t._v("Our UI design emphasized the use of simple color blocks to construct the scene. Different from most games, the UI presents a large amount of imformation and graphic effects. We think that players will be confused by receiving too much information. Bring players a fresh and healing playing experience.")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"design-concept__remark"},[i("span",[t._v("Information is displayed in the center, and frequently used buttons are in the lower part of the UI, making them convenient for players to tap.")])])}],M={data:function(){return{demoImg:["player-scene","build-mode"],tl:null}},mounted:function(){this.tl=c["b"].timeline({scrollTrigger:{id:"design-concept",trigger:".design-concept__info",start:"top bottom",autoRemoveChildren:!0}}),this.tl.from(".design-concept__info",{duration:.7,x:-100,opacity:0},"s").from(".design-concept__demo-img",{duration:.7,opacity:0,stagger:{amount:.5},x:-50},"-=0.5").from(".design-concept__remark",{duration:.7,opacity:0,x:-50},"-=0.5")},beforeDestroy:function(){this.tl.pause(0).kill(!0),h["ScrollTrigger"].getById("design-concept").kill(!0)}},R=M,A=(i("90b0"),Object(m["a"])(R,B,P,!1,null,"3fad99f8",null)),F=A.exports,G=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"root"})},N=[],W={},K=W,z=(i("2ce4"),Object(m["a"])(K,G,N,!1,null,"c5413a52",null)),H=z.exports,X=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ux-research"},[i("div",{staticClass:"ux-research__info"},[i("span",{staticClass:"heading-ky-l"},[t._v("UX Research")]),i("div",{staticClass:"ux-research__content"},[i("div",{staticClass:"ux-research__paragraph"},[i("div",[t._v("After completing the minimum viable product, we conducted user research. The purpose was to investigate the user's experience of game play.")]),i("div",[t._v("We recruited six gamers for a week of trial play. Finally, we used video interviews to understand the experience of playing during this period.")])]),i("div",{staticClass:"ux-research__steps"},[i("div",{staticClass:"ux-research__step"},[i("div",{staticClass:"ux-research__decoration"},[i("div"),i("span",[t._v("01")])]),i("div",{staticClass:"ux-research__step-info"},[i("span",[t._v("Interview Outline Design")]),i("div",[t._v("Learn about the game elements that attract players from books and literature. Extend relevant interview questions.")])])]),i("div",{staticClass:"ux-research__step"},[i("div",{staticClass:"ux-research__decoration"},[i("div"),i("span",[t._v("02")])]),i("div",{staticClass:"ux-research__step-info"},[i("span",[t._v("Recruit Participants")]),i("div",[t._v("We selected from sponsors who are willing to participate in the interview. Conducted an interview after they play for a week.")])])]),i("div",{staticClass:"ux-research__step"},[i("div",{staticClass:"ux-research__decoration"},[i("div"),i("span",[t._v("03")])]),i("div",{staticClass:"ux-research__step-info"},[i("span",[t._v("Qualitative analysis")]),i("div",[t._v("We converted interview recordings into transcripts for labeling. Put the labels of the same concept into the same category. Finally got several insights for us to improve our game.")])])])])])]),i("div",{staticClass:"ux-research__demo"})])}],J={data:function(){return{demoImg:["planet-scene","collect-scene","build-mode"],tl:null}},mounted:function(){this.tl=c["b"].timeline({scrollTrigger:{id:"research",trigger:".ux-research__info",start:"top bottom",autoRemoveChildren:!0}}),this.tl.from(".ux-research__info",{duration:.7,x:-100,opacity:0},"s").from(".ux-research__demo",{duration:.7,opacity:0,x:-50},"-=0.3")},beforeDestroy:function(){this.tl.pause(0).kill(!0),h["ScrollTrigger"].getById("research").kill(!0)}},Q=J,V=(i("21f4"),Object(m["a"])(Q,X,q,!1,null,"602a9034",null)),Z=V.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"game-art-design"},[n("div",{staticClass:"building-section"},t._l(5,(function(t){return n("img",{staticClass:"building-img",attrs:{src:i("40bd")("./building-"+(t-1)+".png")}})})),0),n("div",{staticClass:"art-bottom-section"},[n("div",{staticClass:"art-bottom-section__color"},[n("img",{attrs:{src:i("f885")}})]),t._m(0)])])},tt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"art-bottom-section__info"},[i("span",{staticClass:"heading-ky-r"},[t._v("Game Art Design")]),i("div",{staticClass:"art-bottom-section__content"},[i("div",{staticClass:"art-bottom-section__paragraph"},[t._v("The overall art adopts isometric and low poly styles. The architecture is presented through a fresh style, while bringing comfort to players !")]),i("div",{staticClass:"art-bottom-section__paragraph"},[t._v("We capture the essence of the realistic characteristic building, and only retain the most important feature items to present the original delicate, mini, and cute appearance.")])])])}],et={data:function(){return{demoImg:["planet-scene","collect-scene","build-mode"],tl:null}},mounted:function(){this.tl=c["b"].timeline({scrollTrigger:{id:"art-design",trigger:".building-section",start:"top bottom",autoRemoveChildren:!0}}),this.tl.from(".building-img",{duration:.7,scale:0,ease:"back.out",stagger:{amount:.7}},"-=0.3").from(".art-bottom-section__color",{duration:.7,opacity:0,x:-50},"-=0.3").from(".art-bottom-section__info",{duration:.7,opacity:0,x:-50},"-=0.3")},beforeDestroy:function(){this.tl.pause(0).kill(!0),h["ScrollTrigger"].getById("art-design").kill(!0)}},it=et,nt=(i("f2db"),Object(m["a"])(it,Y,tt,!1,null,"2ecd3cbe",null)),st=nt.exports,at=i("c6b3"),ot={name:"Home",components:{KyronusLandingPage:p,NavagationMap:j,DesignConcept:F,UIGuideline:H,UxResearch:Z,GameArtDesign:st,KyronusIntro:k,CoreMechanic:S,FooterInfo:at["a"]},data:function(){return{icons:["fb","ig","github","linkedin","codepen"],leoIcons:["github","medium","ig","behance"],animLeo:null}},methods:{mappingIcon:function(t){return i("7906")("./".concat(t,".svg"))},mappingUrl:v["d"],mappingLeoUrl:function(t){switch(t){case"github":return"https://github.com/leokuo0724";case"medium":return"https://medium.com/@leokuo0724";case"ig":return"https://www.instagram.com/leokuo0724/";case"behance":return"https://www.behance.net/leokuo"}},goBack:function(){this.$router.go(-1)}},mounted:function(){window.scrollTo(0,0),this.animLeo=c["b"].timeline({scrollTrigger:{id:"leo",trigger:".leo-section",start:"top bottom",autoRemoveChildren:!0}}),this.animLeo.from(".leo-section__avatar",{duration:.7,x:-100,opacity:0},"s").from(".leo-section__info",{duration:.7,opacity:0,stagger:{amount:.5},x:-50},"-=0.2")},beforeDestroy:function(){this.animLeo.pause(0).kill(!0),h["ScrollTrigger"].getById("leo").kill(!0)}},rt=ot,ct=(i("c515"),Object(m["a"])(rt,n,s,!1,null,"2ceaa078",null));e["default"]=ct.exports},e26f:function(t,e,i){},e417:function(t,e,i){var n={"./baggage.png":"10eb","./build-mode.png":"6003","./building-0.png":"176b","./building-1.png":"15d4","./building-2.png":"1df3","./building-3.png":"ff77","./building-4.png":"2b0d","./building-feature-h-0.png":"f93b","./building-feature-h-1.png":"af19","./building-feature-ky-0.png":"0c12","./building-feature-ky-1.png":"5086","./cellphone.png":"c80b","./collect-scene.png":"3442","./color.png":"f885","./comfirm-modal.png":"ec90","./duino.png":"6aca","./flyingship.png":"e3f5","./human-main.png":"e2fa","./interview.png":"7568","./item-card.png":"9add","./item-modal.png":"8e30","./leo.png":"8a03","./logo.png":"e02c","./main-scene.png":"3ad7","./mall.png":"cb00","./planet-scene.png":"c8cb","./player-scene.png":"b050","./star-bg.png":"82d3","./trailer.png":"5458","./ui-guildline.png":"d166","./ux-research.png":"e558"};function s(t){var e=a(t);return i(e)}function a(t){if(!i.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=a,t.exports=s,s.id="e417"},f2db:function(t,e,i){"use strict";i("b66a")},f504:function(t,e,i){"use strict";i("351c")}}]);
//# sourceMappingURL=about.239deaf7.js.map