import{_ as n,a as s,b as c,d as t,t as r,g as o,j as l}from"./index-BZfhGmiB.js";const u={class:"card"},_={class:"image-container"},g=["src"],m={class:"card-body"},p=["href"],h={class:"card-description"},y={key:0,class:"card-date"},f={__name:"card",props:{title:{type:String,required:!0},perpar_url:{type:String,required:!1},description:{type:String,required:!0},imageUrl:{type:String,required:!0},date:{type:String,required:!0}},setup(e){const{proxy:i}=l(),d=a=>{a.target.src=i.$defaultImage};return(a,S)=>(s(),c("div",u,[t("div",_,[t("img",{src:e.imageUrl,onError:d},null,40,g)]),t("div",m,[t("h3",null,[t("a",{href:e.perpar_url,class:"card-title"},r(e.title),9,p)]),t("p",h,r(e.description),1),e.date?(s(),c("div",y,"Date: "+r(e.date),1)):o("",!0)])]))}},v=n(f,[["__scopeId","data-v-790c2536"]]);export{v as c};
