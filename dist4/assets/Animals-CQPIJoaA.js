import{_ as w,a as t,b as a,d as e,t as m,i as k,r as h,o as S,m as x,p as I,n as $,u as v,f as _,F as u,e as f,w as A,T as E,g as y,h as q}from"./index-baJIFZFR.js";import{c as C}from"./card-BrsXt2yi.js";const j={class:"card"},B={class:"image"},G=["src"],N={class:"card-body"},T={class:"card-title"},D={__name:"cardAnimals",props:{name:{type:String,required:!0},email:{type:String,required:!0},img:{type:String,required:!0},grade:{type:String,required:!0},type:{type:String,required:!0}},setup(n){const{proxy:c}=k(),s=r=>{r.target.src=c.$defaultImage};return(r,g)=>(t(),a("div",j,[e("div",B,[e("img",{src:n.img,onError:s},null,40,G)]),e("div",N,[e("h3",null,[e("a",T,m(n.name),1)]),e("p",null,m(n.email),1)])]))}},V=w(D,[["__scopeId","data-v-5ca6d35d"]]);function L(){const n=h([]);return S(async()=>{try{const s=await fetch("/personData.json");if(!s.ok)throw new Error("Network response was not ok");const r=await s.json();n.value=r}catch(s){console.error("Error fetching persons:",s)}}),{persons:n}}const P="/assets/imgbar-snwBurbC.jpg",F={class:"container"},M={class:"the_Boss"},O={class:"card-list"},R={key:0},U={key:0,class:"grade-list"},z={style:{"list-style-type":"none"}},H={__name:"Animals",setup(n){const{persons:c}=L(),s=h(new Set),r=h(!1);x(c,l=>{s.value=new Set(l.map(o=>o.grade))});const g=()=>{const l=window.pageYOffset||document.documentElement.scrollTop;r.value=l>window.innerHeight*1};return S(()=>{window.addEventListener("scroll",g)}),I(()=>{window.removeEventListener("scroll",g)}),(l,o)=>(t(),a(u,null,[e("div",F,[e("figure",{style:$({backgroundImage:`url(${v(P)})`}),class:"background-image"},null,4)]),o[1]||(o[1]=e("div",{class:"title"},[e("span",null,"人员构成"),e("div",{class:"divider"})],-1)),e("div",M,[_(C,{title:"导师：黄敏",description:"  武汉大学博士毕业，2023年赣鄱俊才·江西省主要学科学术和技术带头人（青年），国家自然科学基金委员会通讯评议专家，国际SCI二区学术期刊Remote Sensing专刊主编、国际学术期刊Data Science and Management青年编委、国际学术会议ICAG、AOGS分会场主席。主要从事智慧城市、遥感应用、北斗地理信息产教融合，在G&RS、JAG等国际权威学术期刊上发表论文10多篇。",imageUrl:"https://dlxy.jxnu.edu.cn/_upload/article/images/04/2c/25605e83423f8dfdcdda3843c0b0/be785e3a-53fb-49e7-8648-8025d791e285.jpg",date:""})]),e("div",O,[(t(!0),a(u,null,f(s.value,(d,p)=>(t(),a("div",{key:p,class:"card-item"},[e("h3",null,m(d),1),(t(!0),a(u,null,f(v(c),(i,b)=>(t(),a("div",{key:b},[i.grade===d?(t(),a("div",R,[_(V,{name:i.name,email:i.email,img:i.img,grade:i.grade,type:i.type},null,8,["name","email","img","grade","type"])])):y("",!0)]))),128))]))),128))]),_(E,{name:"fade"},{default:A(()=>[r.value?(t(),a("div",U,[e("ul",z,[(t(!0),a(u,null,f(s.value,(d,p)=>(t(),a("li",{key:p,class:"grade-item"},[q(m(d)+" ",1),o[0]||(o[0]=e("div",{class:"line"},null,-1))]))),128))])])):y("",!0)]),_:1})],64))}},K=w(H,[["__scopeId","data-v-dad66b4b"]]);export{K as default};
