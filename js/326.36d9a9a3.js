"use strict";(self["webpackChunkmorris"]=self["webpackChunkmorris"]||[]).push([[326],{3326:(s,t,e)=>{e.r(t),e.d(t,{default:()=>b});var i=e(3673),n=e(2323);const a=(0,i.Wm)("div",{class:"container text-center pb-10 pt-20 space-y-3"},[(0,i.Wm)("div",{class:"text-semibold text-4xl text-bigText"},"Our English Learning Products"),(0,i.Wm)("div",{class:"text-xs text-sectionSubTitle"},"Our specialised programmes in ENGLISH ")],-1),o={class:"container pt-10 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 2xl:grid-cols-4 gap-12"},l={class:"space-y-3 w-full overflow-hidden text-ellipsis",style:{"max-height":"200px"}},r={class:"text-sm text-sectionSubTitle text-ellipsis overflow-hidden"},c={class:"flex justify-between w-full"};function d(s,t,e,d,u,m){const p=(0,i.up)("q-icon"),g=(0,i.up)("q-page");return(0,i.wg)(),(0,i.j4)(g,{dark:"",class:"py-10"},{default:(0,i.w5)((()=>[a,(0,i.Wm)("div",o,[((0,i.wg)(!0),(0,i.j4)(i.HY,null,(0,i.Ko)(u.products,(s=>((0,i.wg)(),(0,i.j4)("div",{key:s.title,dark:"",class:"m-3 md:m-5 lg:m-7 p-10 rounded-2xl flex content-between flex-wrap bg-dark  hover:shadow-2xl space-y-8 overflow-hidden",style:{"max-width":"300px","min-width":"200px","max-height":"600px","min-height":"300px"}},[(0,i.Wm)("div",l,[(0,i.Wm)("div",{class:"text-2xl font-semibold cursor-pointer text-sectionTitle",onClick:t=>m.goToProduct(s.id)},(0,n.zw)(s.title),9,["onClick"]),(0,i.Wm)("div",r,(0,n.zw)(s.content),1)]),(0,i.Wm)("div",c,[(0,i.Wm)("div",{onClick:t=>m.goToProduct(s.id),class:"font-bold cursor-pointer text-sectionTitle"},"Know More",8,["onClick"]),(0,i.Wm)("div",{onClick:t=>m.goToProduct(s.id),class:"text-brand cursor-pointer"},[(0,i.Wm)(p,{name:"arrow_forward",size:"sm"})],8,["onClick"])])])))),128))])])),_:1})}var u=e(5474),m=e(1959),p=e(8825);const g={setup(){const s=(0,p.Z)(),t=(0,m.iH)(null);function e(){console.log("running loadData"),u.api.get("/courses/").then((s=>{console.log("success",s),t.value=s.data})).catch((()=>{console.log("error"),s.notify({color:"negative",position:"top",message:"Loading failed",icon:"report_problem"})}))}return console.log(t),{data:t,loadData:e}},data(){return{products:[{id:"dhgfgfd56456",title:"IELTS (ONLINE AND CLASSROOM)",content:"Lorem ipsum dolor sit amet, consectetur adipis cingelit. Etsssssssssssss sssssssss ssssssssss ssssssssssssss sssssssssssss ssssssss sssssssssss sssssssss ssssss sssssssss ssss ssssss sssss ssss iam lacinia elit et placerat finibus. Praesent justo metus, pharetra vel nibh sit amet, tincidunt posuere nulla."},{id:"dhgfgfd56456",title:"OET (ONLINE AND CLASSROOM)",content:"Lorem ipsum dolor sit amet, consectetur adipis cingelit. Etiam lacinia elit et placerat finibus. Praesent justo metus, pharetra vel nibh sit amet, tincidunt posuere nulla."},{id:"dhgfgfd56456",title:"COMMUNICATON SKILLS",content:"Lorem ipsum dolor sit amet, consectetur adipis cingelit. Etiam lacinia elit et placerat finibus. Praesent justo metus, pharetra vel nibh sit amet, tincidunt posuere nulla."},{id:"dhgfgfd56456",title:"IELTS (ONLINE AND CLASSROOM)",content:"Lorem ipsum dolor sit amet, consectetur adipis cingelit. tra vel nibh sit amet, tincidunt posuere nulla."},{id:"dhgfgfd56456",title:"OET (ONLINE AND CLASSROOM)",content:"Lorem ipsum dolor sit amet, consectetur adipis cingelit. Etiam lacinia elit et placerat finibus. Praesent justo metus, pharetra vel nibh sit amet, tincidunt posuere nulla."},{id:"dhgfgfd56456",title:"COMMUNICATON SKILLS",content:"Lorem ipsum dolor sit amet, consectetur adipis cingelit. Etiam lacinia elit et placerat finibus. Praesent justo metus, pharetra vel nibh sit amet, tincidunt posuere nulla."},{id:"dhgfgfd56456",title:"IELTS (ONLINE AND CLASSROOM)",content:"Lorem ipsum dolor sit amet, consectetur adipis cingelit. Etiam lacinia elit et placerat finibus. Praesent justo metus, pharetra vel nibh sit amet, tincidunt posuere nulla."},{id:"dhgfgfd56456",title:"OET (ONLINE AND CLASSROOM)",content:"Lorem ipsum dolor sit amet, consectetur adipis cingelit. Etiam lacinia elit et placerat finibus. Praesent justo metus, pharetra vel nibh sit amet, tincidunt posuere nulla."},{id:"dhgfgfd56456",title:"COMMUNICATON SKILLS",content:"Lorem ipsum dolor sit amet, consectetur adipis cingelit. Etiam lacinia elit et placerat finibus. Praesent justo metus, pharetra vel nibh sit amet, tincidunt posuere nulla."}]}},methods:{goToProduct(s){this.$router.push({path:`/courses/${s}`})}},mounted(){this.loadData()}};var h=e(4379),f=e(4554),L=e(7518),x=e.n(L);g.render=d;const b=g;x()(g,"components",{QPage:h.Z,QIcon:f.Z})}}]);