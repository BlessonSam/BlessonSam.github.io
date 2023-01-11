"use strict";(self["webpackChunkmorris"]=self["webpackChunkmorris"]||[]).push([[27],{3027:(e,t,o)=>{o.r(t),o.d(t,{default:()=>y});var i=o(3673),l=o(2323);const s=(0,i._)("div",{class:"container text-center pb-10 pt-20 space-y-3"},[(0,i._)("div",{class:"text-semibold text-4xl text-bigText"},"Videos"),(0,i._)("div",{class:"text-sm text-sectionSubTitle"},"Our curated list of videos")],-1),a={key:0,class:"container pt-10 text-sectionSubTitle"},d={key:1,class:"container pt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-12"},c=["onClick"],n={class:"font-semibold px-2 text-sectionSubTitle"};function r(e,t,o,r,u,p){const m=(0,i.up)("q-img"),v=(0,i.up)("q-icon"),g=(0,i.up)("q-video"),h=(0,i.up)("q-card"),w=(0,i.up)("q-dialog"),f=(0,i.up)("q-page");return(0,i.wg)(),(0,i.j4)(f,{dark:"",class:"py-10"},{default:(0,i.w5)((()=>{var e,o;return[s,null!==(e=r.videoData)&&void 0!==e&&e.length?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",a," No Videos Found! ")),null!==(o=r.videoData)&&void 0!==o&&o.length?((0,i.wg)(),(0,i.iD)("div",d,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.videoData,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e.url,class:"space-y-3",style:{"max-width":"300px"}},[(0,i._)("div",{onClick:t=>p.selectVideo(e),class:"rounded-xl overflow-hidden relative flex flex-center h-40 cursor-pointer"},[(0,i.Wm)(m,{ratio:4/3,class:"absolute top-0 left-0 h-40",src:e.thumbnail},null,8,["src"]),(0,i.Wm)(v,{class:"text-gray-200",size:"md",name:"play_circle_filled"})],8,c),(0,i._)("div",n,(0,l.zw)(e.title),1)])))),128))])):(0,i.kq)("",!0),(0,i.Wm)(w,{modelValue:u.showVideo,"onUpdate:modelValue":t[0]||(t[0]=e=>u.showVideo=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(h,{class:"w-11/12 md:w-4/6"},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{class:"w-full",ratio:16/9,src:u.selectedVideo.url},null,8,["src"])])),_:1})])),_:1},8,["modelValue"])]})),_:1})}var u=o(5474),p=o(1959),m=o(8825);const v={setup(){const e=(0,m.Z)(),t=(0,p.iH)(null);function o(){u.api.get("/videos/").then((e=>{t.value=e.data})).catch((()=>{e.notify({color:"negative",position:"top",message:"Loading failed",icon:"report_problem"})}))}return{videoData:t,loadData:o}},data(){return{showVideo:!1,selectedVideo:null}},methods:{selectVideo(e){this.selectedVideo=e,this.showVideo=!0}},mounted(){this.loadData()}};var g=o(4260),h=o(4379),w=o(4152),f=o(4554),x=o(1477),V=o(151),b=o(1419),k=o(7518),D=o.n(k);const _=(0,g.Z)(v,[["render",r]]),y=_;D()(v,"components",{QPage:h.Z,QImg:w.Z,QIcon:f.Z,QDialog:x.Z,QCard:V.Z,QVideo:b.Z})}}]);