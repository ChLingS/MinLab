import{r as x,o as D,_ as b,a as m,c as g,b as o,t as w,g as Y,d as A,F as C,e as I,u,f as k,h as l,i as S,w as d,j as E,k as X,n as T}from"./index-l9OjUO-v.js";function W(){const t=x([]);return D(async()=>{try{const n=await fetch("/liveData.json");if(!n.ok)throw new Error("Network response was not ok");const i=await n.json();t.value=i}catch(n){console.error("Error fetching papers:",n)}}),{papers:t}}const z={class:"card"},q=["src"],B={class:"card-body"},L={class:"card-title"},F={class:"card-date"},H={__name:"card",props:{title:{type:String,required:!0},description:{type:String,required:!0},imageUrl:{type:String,required:!0},date:{type:String,required:!0}},setup(t){const{proxy:e}=Y(),n=i=>{i.target.src=e.$defaultImage};return(i,s)=>(m(),g("div",z,[o("img",{src:t.imageUrl,onError:n},null,40,q),o("div",B,[o("h3",null,[o("a",L,w(t.title),1)]),o("p",null,w(t.description),1),o("div",F,"Date: "+w(t.date),1)])]))}},R=b(H,[["__scopeId","data-v-934c8dc7"]]),j={class:"centered-list"},O={key:0,class:"load-more"},U={__name:"live",setup(t){const{papers:e}=W(),n=x(10),i=A(()=>e.value.slice(0,n.value)),s=()=>{n.value+=10};return(r,c)=>(m(),g("div",null,[c[0]||(c[0]=o("div",{class:"title"},[o("h2",null,"动态")],-1)),o("ul",j,[(m(!0),g(C,null,I(i.value,(a,h)=>(m(),g("li",{key:h,class:"centered-item"},[l(R,{title:a.title,description:a.abstract,imageUrl:a.image_url,date:a.date},null,8,["title","description","imageUrl","date"])]))),128))]),u(e).length>i.value.length?(m(),g("div",O,[o("button",{onClick:s},"加载更多")])):k("",!0)]))}},V=b(U,[["__scopeId","data-v-2e497e60"]]),G={class:"date"},K={__name:"getTime",setup(t){const e=x(""),n=()=>{const i=new Date,s={hour:"2-digit",minute:"2-digit"};e.value=i.toLocaleDateString("zh-CN",s)};return D(()=>{n(),setInterval(n,6e4)}),(i,s)=>(m(),g("div",G,[o("span",null,w(e.value),1)]))}},J=b(K,[["__scopeId","data-v-45da18be"]]),Q="/assets/back-NA2fG_LB.jpg";var Z={props:{type:{type:String,default:"translate"},transformOrigin:{type:String,default:"center"},originX:{type:Number,default:50},originY:{type:Number,default:50},strength:{type:Number,default:10},audioIndex:{type:Number,default:50},axis:{type:String,default:null},maxX:{type:Number,default:null},maxY:{type:Number,default:null},minX:{type:Number,default:null},minY:{type:Number,default:null},cycle:{type:Number,default:0}},methods:{strengthManager(){return this.type==="depth"||this.type==="depth_inv"?Math.abs(this.strength):this.strength}}};function tt(t){return t.bottom>=0&&t.right>=0&&t.top<=(window.innerHeight||document.documentElement.clientHeight)&&t.left<=(window.innerWidth||document.documentElement.clientWidth)}function et(t,e,n){let i,s;return function(){const r=this;let c;n==="scroll"?c=e:c=r.duration>1e3?e:r.duration/10;const a=+new Date,h=arguments;i&&a<i+c?(clearTimeout(s),s=setTimeout(()=>{requestAnimationFrame(()=>{i=a,t.apply(r,h)})},c)):requestAnimationFrame(()=>{i=a,t.apply(r,h)})}}var nt={props:{active:{type:Boolean,default:!0},duration:{type:Number,default:1e3},easing:{type:String,default:"cubic-bezier(0.23, 1, 0.32, 1)"},tag:{type:String,default:"div"}}},st={props:{perspective:{type:Number,default:1e3}},computed:{style(){return{perspective:`${this.perspective}px`}}}},it={props:{audio:{type:String,required:!1},playAudio:{type:Boolean,default:!1}},data(){return{analyser:null,audioArray:null,audioData:null,audioRef:null,wasPlayed:!1,isPlaying:!1}},watch:{audio(){this.wasPlayed=!1,this.isPlaying=!1},playAudio(t){t?this.play():this.stop()}},methods:{play(){this.active&&(this.wasPlayed||(this.handleAudio(),this.wasPlayed=!0),this.isPlaying=!0,this.audioRef.play(),this.getSongData())},stop(){this.isPlaying=!1,this.audioRef.pause()},handleAudio(){const{audio:t}=this.$refs;this.audioRef=t;const e=new AudioContext,n=e.createMediaElementSource(t),i=e.createAnalyser();n.connect(i),i.connect(e.destination),i.fftSize=256;const s=i.frequencyBinCount,r=new Uint8Array(s);this.audioArray=r,this.analyser=i},getSongData(){this.isPlaying&&(this.analyser.getByteFrequencyData(this.audioArray),this.audioData=new Array(this.audioArray),requestAnimationFrame(this.getSongData))}}};function _(){try{return/Mobi|Android/i.test(navigator.userAgent)}catch{return!0}}var ot={props:{event:{type:String,default:"move"}},data(){return{eventMap:{orientation:"deviceorientation",scroll:"scroll",move:_()?"deviceorientation":null}}},methods:{addEvents(){this.eventMap[this.event]&&window.addEventListener(this.eventMap[this.event],this.handleMovement,!0)},removeEvents(){this.eventMap[this.event]&&window.removeEventListener(this.eventMap[this.event],this.handleMovement,!0)}},watch:{event(t,e){this.eventMap[t]&&window.addEventListener(this.eventMap[t],this.handleMovement,!0),this.eventMap[e]&&window.addEventListener(this.eventMap[e],this.handleMovement,!0)}}};function y(t,e){return{x:t,y:e}}function rt(t){return y(t?t.width/2:0,t?t.height/2:0)}function at(t){const{target:e,event:n}=t,i=n.clientX,s=n.clientY,r=i-e.left,c=s-e.top,a=rt(e),h=r/a.x,f=c/a.y;return{...y(h,f),target:e}}function lt(t){const{event:e,target:n}=t,i=e.gamma/45,s=e.beta/90;return{...y(i,s),target:n}}function ct(t){const e=(t.left-window.innerWidth)/(t.width+window.innerWidth),n=(t.top-window.innerHeight)/(t.height+window.innerHeight);return{...y(e,n),target:t}}var v={name:"KinesisContainer",mixins:[nt,st,it,ot],provide(){const t={};return["audioData","duration","easing","event","eventData","isMoving","movement","shape"].forEach(n=>Object.defineProperty(t,n,{enumerable:!0,get:()=>this[n]})),{context:t}},data(){return{movement:{x:0,y:0},isMoving:!1,shape:null,leftOnce:!1,eventData:{x:0,y:0}}},mounted(){this.addEvents()},beforeUnmount(){this.removeEvents()},methods:{handleMovement:et(function(t){if(!this.active)return;!this.isMoving&&!this.leftOnce&&(this.isMoving=!0),this.shape=this.$el.getBoundingClientRect();const e=tt(this.shape);this.event==="move"&&this.isMoving&&!_()?(this.movement=at({target:this.shape,event:t}),this.eventData=y(t.clientX,t.clientY)):(this.event==="orientation"||this.event==="move"&&_())&&e?this.movement=lt({target:this.shape,event:t}):this.event==="scroll"&&e&&this.shape.height&&(this.movement=ct(this.shape))},100),handleMovementStart(){this.active&&(this.isMoving=!0)},handleMovementStop(){this.active&&(this.leftOnce=!0,this.isMoving=!1)}}};function ut(t,e,n,i,s,r){return m(),S(X(t.tag),{onMousemove:r.handleMovement,onMouseenter:r.handleMovementStart,onMouseleave:r.handleMovementStop,style:t.style},{default:d(()=>[E(t.$slots,"default"),t.audio?(m(),S("audio",{key:0,type:"audio/mpeg",onEnded:e[1]||(e[1]=(...c)=>t.stop&&t.stop(...c)),ref:"audio"},[l("source",{src:t.audio},null,8,["src"])],544)):k("",!0)]),_:3},8,["onMousemove","onMouseenter","onMouseleave","style"])}v.render=ut;var dt={methods:{transformSwitch(t,e,n,i){let s;switch(t){case"translate":s=this.translateMovement(e,n);break;case"rotate":s=this.rotateMovement(e,n);break;case"depth":s=this.depthMovement(e,n,i);break;case"depth_inv":s=this.depthMovement(-e,-n,i);break;case"scale":s=this.scaleMovement(e,n);break}return s},translateMovement(t,e){return`translate3d(${-t}px, ${-e}px, 0)`},rotateMovement(t,e){let n;return this.axis?this.axis==="x"?n=2*t:this.axis==="y"&&(n=2*e):n=t+e,`rotate3d(0,0,1,${n}deg)`},depthMovement(t,e,n){return`rotateX(${-e}deg) rotateY(${t}deg) translate3d(0,0,${n*2}px)`},scaleMovement(t,e){const{type:n}=this,i=Math.sign(this.strength)*(Math.abs(t)+Math.abs(e))/10+1;return`scale3d(${n==="scaleX"||n==="scale"?i:1},
            ${n==="scaleY"||n==="scale"?i:1},
            1)`}}};function $(t){const{y:e,x:n,target:i,originX:s=50,strength:r=10,event:c=null}=t;let{originY:a=50}=t;c==="scroll"&&(a=-a/2);const h=(n-s/50)*r,f=(e-a/50)*r;return{...y(h,f),target:i}}function P(t,e,n){return n&&t>n?n:e&&t<e?e:t}function N(t){const{referencePosition:e,elementPosition:n,spanningRange:i,cycles:s}=t,r=(e-n)*(Math.PI*2)/i;return i*Math.sin(r*s)/(i/2)}var p={name:"KinesisElement",mixins:[Z,dt],inject:["context"],props:{tag:{type:String,default:"div"}},computed:{transform(){return this.transformMovement()},getContext(){return this.context},transformParameters(){return{transitionProperty:"transform",transitionDuration:this.transitionDuration,transformOrigin:this.transformOrigin,transitionTimingFunction:this.transitionTimingFunction}},transitionDuration(){const{duration:t}=this.context;return`${t}ms`},transitionTimingFunction(){return this.context.easing},isTouch(){return _()}},methods:{transformMovement(){const{context:t}=this;if(!t.isMoving&&t.event==="move")return{};let e,n;const i=t.event,s=this.strengthManager();if(this.cycle<=0){const{x:a,y:h}=$({...t.movement,originX:this.originX,originY:this.originY,strength:s}),f=i==="scroll";if(f||(e=this.axis==="y"?0:P(a,this.minX,this.maxX),n=this.axis==="x"?0:P(h,this.minY,this.maxY)),f){const M=$({x:t.movement.x,y:t.movement.y,originX:this.originX,originY:this.originY,strength:s,event:t.event}).y;e=this.axis==="x"?M:0,n=this.axis==="y"||!this.axis?M:0}}else if(this.cycle>0){const{shape:a,eventData:h}=t;if(a){const f=this.axis==="x"?N({referencePosition:i==="scroll"?0:h.x,elementPosition:a.left,spanningRange:i==="scroll"?window.innerWidth:a.width,cycles:this.cycle}):0,M=this.axis==="y"||!this.axis?N({referencePosition:i==="scroll"?0:h.y,elementPosition:a.top,spanningRange:i==="scroll"?window.innerHeight:a.height,cycles:this.cycle}):0;e=f*s,n=M*s}}let r=this.type;return r=r==="scaleX"||r==="scaleY"?"scale":r,{transform:this.transformSwitch(r,e,n,this.strength)}}}};function ht(t,e,n,i,s,r){return m(),S(X(n.tag),{style:{...r.transform,...r.transformParameters}},{default:d(()=>[E(t.$slots,"default")]),_:3},8,["style"])}p.render=ht;const mt={class:"container"},ft={class:"content"},vt={style:{display:"flex",gap:"0.5rem"}},pt={class:"date"},gt={__name:"Home",setup(t){const e=x(null),n=()=>{e.value.scrollIntoView({behavior:"smooth"})};return(i,s)=>(m(),g("div",mt,[o("figure",{style:T({backgroundImage:`url(${u(Q)})`}),class:"background-image"},[o("div",ft,[o("div",vt,[l(u(v),null,{default:d(()=>[l(u(p),{strength:10},{default:d(()=>s[0]||(s[0]=[o("h1",{style:{"font-family":"'NovecentoSansWide', sans-serif","font-size":"5.5rem","font-weight":"600"}}," M",-1)])),_:1})]),_:1}),l(u(v),null,{default:d(()=>[l(u(p),{strength:10},{default:d(()=>s[1]||(s[1]=[o("h1",{style:{"font-family":"'NovecentoSansWide', sans-serif","font-size":"5.5rem","font-weight":"600"}}," i",-1)])),_:1})]),_:1}),l(u(v),null,{default:d(()=>[l(u(p),{strength:10},{default:d(()=>s[2]||(s[2]=[o("h1",{style:{"font-family":"'NovecentoSansWide', sans-serif","font-size":"5.5rem","font-weight":"600"}}," n",-1)])),_:1})]),_:1}),l(u(v),null,{default:d(()=>[l(u(p),{strength:10},{default:d(()=>s[3]||(s[3]=[o("h1",{style:{"font-family":"'NovecentoSansWide', sans-serif","font-size":"5.5rem","font-weight":"600"}}," L",-1)])),_:1})]),_:1}),l(u(v),null,{default:d(()=>[l(u(p),{strength:10},{default:d(()=>s[4]||(s[4]=[o("h1",{style:{"font-family":"'NovecentoSansWide', sans-serif","font-size":"5.5rem","font-weight":"600"}}," a",-1)])),_:1})]),_:1}),l(u(v),null,{default:d(()=>[l(u(p),{strength:10},{default:d(()=>s[5]||(s[5]=[o("h1",{style:{"font-family":"'NovecentoSansWide', sans-serif","font-size":"5.5rem","font-weight":"600"}}," b",-1)])),_:1})]),_:1})]),s[6]||(s[6]=o("div",{style:{"font-family":"SourceHanSerifCN","font-size":"1.1rem"}},[o("span",{style:{"font-family":"'NovecentoSansWide', sans-serif"}},"MinLab"),o("span",null,"是一个江西师范大学地理与环境学院的"),o("span",{style:{"font-family":"'NovecentoSansWide', sans-serif"}},"GIS"),o("span",null,"研究团队")],-1))]),o("div",{style:{position:"absolute",bottom:"100px",display:"flex","justify-content":"center","align-items":"center",width:"100%"}},[o("div",{class:"arrow",onClick:n})]),o("div",pt,[l(J)])],4),o("div",{class:"target",ref_key:"targetSection",ref:e},null,512),l(V)]))}},Mt=b(gt,[["__scopeId","data-v-4583b841"]]);export{Mt as default};
