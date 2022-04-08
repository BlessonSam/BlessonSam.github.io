"use strict";(self["webpackChunkmorris"]=self["webpackChunkmorris"]||[]).push([[221],{5221:(e,t,l)=>{l.r(t),l.d(t,{default:()=>b});var o=l(3673),s=l(2323);const i=(0,o.Wm)("div",{class:"container text-center pb-10 pt-20 space-y-3"},[(0,o.Wm)("div",{class:"text-semibold text-4xl text-bigText"},"Videos"),(0,o.Wm)("div",{class:"text-xs text-sectionSubTitle"},"Our curated list of videos")],-1),a={key:0,class:"container pt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-12"},d={class:"font-semibold px-2 text-sectionSubTitle"};function c(e,t,l,c,r,n){const u=(0,o.up)("q-img"),m=(0,o.up)("q-icon"),p=(0,o.up)("q-video"),g=(0,o.up)("q-card"),v=(0,o.up)("q-dialog"),h=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(h,{dark:"",class:"py-10"},{default:(0,o.w5)((()=>{var e;return[i,null!==(e=c.videoData)&&void 0!==e&&e.length?((0,o.wg)(),(0,o.j4)("div",a,[((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(c.videoData,(e=>((0,o.wg)(),(0,o.j4)("div",{key:e.url,class:"space-y-3",style:{"max-width":"300px"}},[(0,o.Wm)("div",{onClick:t=>n.selectVideo(e),class:"rounded-xl overflow-hidden relative flex flex-center h-40 cursor-pointer"},[(0,o.Wm)(u,{ratio:4/3,class:"absolute top-0 left-0 h-40",src:e.thumbnail},null,8,["src"]),(0,o.Wm)(m,{class:"text-gray-200",size:"md",name:"play_circle_filled"})],8,["onClick"]),(0,o.Wm)("div",d,(0,s.zw)(e.title),1)])))),128))])):(0,o.kq)("",!0),(0,o.Wm)(v,{modelValue:r.showVideo,"onUpdate:modelValue":t[1]||(t[1]=e=>r.showVideo=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{class:"w-11/12 md:w-4/6"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{class:"w-full",ratio:16/9,src:r.selectedVideo.url},null,8,["src"])])),_:1})])),_:1},8,["modelValue"])]})),_:1})}var r=l(5474),n=l(1959),u=l(8825);const m={setup(){const e=(0,u.Z)(),t=(0,n.iH)(null);function l(){r.api.get("/videos/").then((e=>{t.value=e.data})).catch((()=>{e.notify({color:"negative",position:"top",message:"Loading failed",icon:"report_problem"})}))}return{videoData:t,loadData:l}},data(){return{showVideo:!1,selectedVideo:null}},methods:{selectVideo(e){this.selectedVideo=e,this.showVideo=!0}},mounted(){this.loadData()}};var p=l(4379),g=l(4152),v=l(4554),h=l(1477),w=l(151),f=l(1419),x=l(7518),V=l.n(x);m.render=c;const b=m;V()(m,"components",{QPage:p.Z,QImg:g.Z,QIcon:v.Z,QDialog:h.Z,QCard:w.Z,QVideo:f.Z})}}]);