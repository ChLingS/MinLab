import{c as v}from"./cardBlog-BmH1kvDz.js";import{v as m}from"./vue-kinesis.esm-CRTa-y2x.js";import{r as p,o as f,_ as h,c as g,b as r,d as a,F as w,e as b,u,g as k,a as o,w as x,f as P}from"./index-C_Gwruup.js";function y(){const n=p([]);return f(async()=>{try{const e=await fetch("/MinLab/Json/patentData.json");if(!e.ok)throw new Error("Network response was not ok");const s=await e.json();n.value=s.sort((l,i)=>new Date(l.date)-new Date(i.date)).reverse()}catch(e){console.error("Error fetching patents:",e)}}),{patents:n}}const B={class:"container"},D={class:"card-list"},N={key:0,class:"load-more"},C={__name:"Patents",setup(n){const{patents:c}=y(),e=p(10),s=g(()=>c.value.slice(0,e.value)),l=()=>{e.value+=10};return(i,d)=>(o(),r("div",B,[d[0]||(d[0]=a("div",{class:"title"},[a("span",null," 专利列表 "),a("div",{style:{width:"80%",height:"2px","background-color":"#ccc",margin:"20px auto 0","border-radius":"1px"}})],-1)),a("div",D,[(o(!0),r(w,null,b(s.value,(t,_)=>x((o(),r("div",{key:_},[P(v,{title:t.title,date:t.date,text:t.abstract,imageUrl:t.image_url,paper_url:t.paper_url},null,8,["title","date","text","imageUrl","paper_url"])])),[[u(m)]])),128))]),u(c).length>s.value.length?(o(),r("div",N,[a("button",{onClick:l,class:"arrow-button"},"⬇️")])):k("",!0)]))}},j=h(C,[["__scopeId","data-v-f5b28956"]]);export{j as default};
