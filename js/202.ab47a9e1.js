"use strict";(self["webpackChunkmorris"]=self["webpackChunkmorris"]||[]).push([[202],{9202:(t,e,i)=>{i.r(e),i.d(e,{default:()=>T});var s=i(3673),o=i(2323);const l=(0,s._)("div",{dark:"",class:"container text-center pb-10 pt-20 space-y-3"},[(0,s._)("div",{class:"text-semibold text-4xl text-sectionSubTitle"},"Blog"),(0,s._)("div",{class:"text-sm text-sectionSubTitle"}," Articles by our team and students ")],-1),n={key:0,class:"container pt-10 text-sectionSubTitle"},a={key:1,class:"container pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12"},r=["onClick"],c={class:"p-5 lg:p-7 space-y-7 h-1/2"},d={class:"font-semibold text-bigText text-2xl"},u={class:"text-base text-sectionTitle"},p={class:"font-thin text-xs text-sectionSubTitle"};function g(t,e,i,g,v,x){const h=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(h,{dark:"",class:"py-10"},{default:(0,s.w5)((()=>{var t,e;return[l,null!==(t=g.articles)&&void 0!==t&&t.length?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",n," No Articles Found! ")),null!==(e=g.articles)&&void 0!==e&&e.length?((0,s.wg)(),(0,s.iD)("div",a,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(g.articles,(t=>((0,s.wg)(),(0,s.iD)("div",{key:t.id,onClick:e=>x.goToArticle(t.id),class:"bg-primary rounded-xl overflow-hidden hover:shadow-2xl cursor-pointer"},[(0,s._)("div",c,[(0,s._)("div",d,(0,o.zw)(t.title),1),(0,s._)("div",u,(0,o.zw)(t.subtitle),1),(0,s._)("div",p,(0,o.zw)(t.written_on),1)])],8,r)))),128))])):(0,s.kq)("",!0)]})),_:1})}var v=i(5474),x=i(1959),h=i(8825),m=i(1082);const b={setup(){const t=(0,h.Z)(),e=(0,x.iH)(null);function i(){v.api.get("/articles/").then((t=>{e.value=t.data.map((t=>({...t,written_on:m.ZP.formatDate(t.written_on,"D MMMM YYYY")})))})).catch((()=>{t.notify({color:"negative",position:"top",message:"Loading failed",icon:"report_problem"})}))}return{articles:e,loadData:i}},data(){return{}},mounted(){this.loadData()},methods:{goToArticle(t){this.$router.push({path:`/blog/${t}`})}}};var w=i(4260),k=i(4379),f=i(4152),_=i(7518),y=i.n(_);const D=(0,w.Z)(b,[["render",g]]),T=D;y()(b,"components",{QPage:k.Z,QImg:f.Z})}}]);