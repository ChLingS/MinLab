import{r as p,o as v,_ as m,c as y,a as c,b as d,d as t,F as b,e as k,f as s,u as n,g as w,t as x,w as o,n as S}from"./index-baJIFZFR.js";import{c as N}from"./card-BrsXt2yi.js";import{s as i,a as u}from"./vue-kinesis.esm-DhVwG4QE.js";function I(){const _=p([]);return v(async()=>{try{const a=await fetch("/liveData.json");if(!a.ok)throw new Error("Network response was not ok");const r=await a.json();_.value=r}catch(a){console.error("Error fetching papers:",a)}}),{papers:_}}const $={class:"centered-list"},C={key:0,class:"load-more"},D={__name:"live",setup(_){const{papers:l}=I(),a=p(10),r=y(()=>l.value.slice(0,a.value)),e=()=>{a.value+=10};return(F,g)=>(c(),d("div",null,[g[0]||(g[0]=t("div",{class:"title"},[t("h2",null,"动态"),t("div",{style:{width:"80%",height:"2px","background-color":"#ccc",margin:"20px auto 0","border-radius":"1px"}})],-1)),t("ul",$,[(c(!0),d(b,null,k(r.value,(f,h)=>(c(),d("li",{key:h,class:"centered-item"},[s(N,{title:f.title,description:f.abstract,imageUrl:f.image_url,date:f.date},null,8,["title","description","imageUrl","date"])]))),128))]),n(l).length>r.value.length?(c(),d("div",C,[t("button",{onClick:e,class:"arrow-button"},"⬇️")])):w("",!0)]))}},T=m(D,[["__scopeId","data-v-c75244ec"]]),L={class:"date"},j={__name:"getTime",setup(_){const l=p(""),a=()=>{const r=new Date,e={hour:"2-digit",minute:"2-digit"};l.value=r.toLocaleDateString("zh-CN",e)};return v(()=>{a(),setInterval(a,6e4)}),(r,e)=>(c(),d("div",L,[t("span",null,x(l.value),1)]))}},B=m(j,[["__scopeId","data-v-e7aebdd7"]]),M="/assets/back-NA2fG_LB.jpg",P={class:"container"},V={class:"content"},z={style:{display:"flex",gap:"0.5rem","align-items":"center","justify-content":"center"}},E={class:"date"},H={__name:"Home",setup(_){const l=p(null),a=()=>{l.value.scrollIntoView({behavior:"smooth"})};return(r,e)=>(c(),d("div",P,[t("figure",{style:S({backgroundImage:`url(${n(M)})`}),class:"background-image"},[t("div",V,[t("div",z,[s(n(u),null,{default:o(()=>[s(n(i),{strength:10},{default:o(()=>e[0]||(e[0]=[t("h1",null,"M",-1)])),_:1})]),_:1}),s(n(u),null,{default:o(()=>[s(n(i),{strength:10},{default:o(()=>e[1]||(e[1]=[t("h1",null,"i",-1)])),_:1})]),_:1}),s(n(u),null,{default:o(()=>[s(n(i),{strength:10},{default:o(()=>e[2]||(e[2]=[t("h1",null,"n",-1)])),_:1})]),_:1}),s(n(u),null,{default:o(()=>[s(n(i),{strength:10},{default:o(()=>e[3]||(e[3]=[t("h1",null,"L",-1)])),_:1})]),_:1}),s(n(u),null,{default:o(()=>[s(n(i),{strength:10},{default:o(()=>e[4]||(e[4]=[t("h1",null,"a",-1)])),_:1})]),_:1}),s(n(u),null,{default:o(()=>[s(n(i),{strength:10},{default:o(()=>e[5]||(e[5]=[t("h1",null,"b",-1)])),_:1})]),_:1})]),e[6]||(e[6]=t("div",{style:{"font-family":"SourceHanSerifCN","font-size":"1.1rem"}},[t("span",{style:{"font-family":"'NovecentoSansWide', sans-serif"}},"MinLab"),t("span",null,"是一个江西师范大学地理与环境学院的"),t("span",{style:{"font-family":"'NovecentoSansWide', sans-serif"}},"GIS"),t("span",null,"研究团队")],-1))]),t("div",{class:"arrow-container"},[t("div",{class:"arrow",onClick:a})]),t("div",E,[s(B)])],4),t("div",{class:"target",ref_key:"targetSection",ref:l},null,512),s(T)]))}},A=m(H,[["__scopeId","data-v-7787d157"]]);export{A as default};
