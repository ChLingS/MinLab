import{_ as d,b as p,d as e,w as t,v as o,s as m,t as u,x as f,a}from"./index-C-sCky_n.js";const s={data(){return{form:{periodical:"",title:"",paper_url:"",abstract:"",image_url:"title.png",day:"",date:""},formAnimal:{name:"",email:"",img:"",grade:"",type:""}}},methods:{handleSubmit(){console.log(this.form)}}},b={style:{"padding-top":"60px"}};function v(g,l,y,U,i,n){return a(),p("div",b,[l[27]||(l[27]=e("h1",null,"论文",-1)),e("form",{onSubmit:l[7]||(l[7]=m((...r)=>n.handleSubmit&&n.handleSubmit(...r),["prevent"]))},[e("div",null,[l[14]||(l[14]=e("label",{for:"periodical"},"Periodical:",-1)),t(e("input",{type:"text","onUpdate:modelValue":l[0]||(l[0]=r=>i.form.periodical=r),id:"periodical",required:""},null,512),[[o,i.form.periodical]])]),e("div",null,[l[15]||(l[15]=e("label",{for:"title"},"Title:",-1)),t(e("input",{type:"text","onUpdate:modelValue":l[1]||(l[1]=r=>i.form.title=r),id:"title",required:""},null,512),[[o,i.form.title]])]),e("div",null,[l[16]||(l[16]=e("label",{for:"paper_url"},"Paper URL:",-1)),t(e("input",{type:"url","onUpdate:modelValue":l[2]||(l[2]=r=>i.form.paper_url=r),id:"paper_url",required:""},null,512),[[o,i.form.paper_url]])]),e("div",null,[l[17]||(l[17]=e("label",{for:"abstract"},"Abstract:",-1)),t(e("textarea",{"onUpdate:modelValue":l[3]||(l[3]=r=>i.form.abstract=r),id:"abstract",required:""},null,512),[[o,i.form.abstract]])]),e("div",null,[l[18]||(l[18]=e("label",{for:"image_url"},"Image URL:",-1)),t(e("input",{type:"text","onUpdate:modelValue":l[4]||(l[4]=r=>i.form.image_url=r),id:"image_url",value:"title.png"},null,512),[[o,i.form.image_url]])]),e("div",null,[l[19]||(l[19]=e("label",{for:"date"},"Day:",-1)),t(e("input",{type:"text","onUpdate:modelValue":l[5]||(l[5]=r=>i.form.day=r),id:"day",required:""},null,512),[[o,i.form.day]])]),e("div",null,[l[20]||(l[20]=e("label",{for:"date"},"Date:",-1)),t(e("input",{type:"date","onUpdate:modelValue":l[6]||(l[6]=r=>i.form.date=r),id:"date",required:""},null,512),[[o,i.form.date]])])],32),e("pre",null,u(i.form),1),l[28]||(l[28]=e("h1",null,"个人信息",-1)),e("form",{onSubmit:l[13]||(l[13]=m((...r)=>n.handleSubmit&&n.handleSubmit(...r),["prevent"]))},[e("div",null,[l[21]||(l[21]=e("label",{for:"title"},"Name:",-1)),t(e("input",{type:"text","onUpdate:modelValue":l[8]||(l[8]=r=>i.formAnimal.name=r),id:"name",required:""},null,512),[[o,i.formAnimal.name]])]),e("div",null,[l[22]||(l[22]=e("label",{for:"Email"},"Email",-1)),t(e("input",{type:"url","onUpdate:modelValue":l[9]||(l[9]=r=>i.formAnimal.email=r),id:"email",required:""},null,512),[[o,i.formAnimal.email]])]),e("div",null,[l[23]||(l[23]=e("label",{for:"image_url"},"Image URL:",-1)),t(e("input",{type:"text","onUpdate:modelValue":l[10]||(l[10]=r=>i.formAnimal.img=r),id:"image_url"},null,512),[[o,i.formAnimal.img]])]),e("div",null,[l[24]||(l[24]=e("label",{for:"grade"},"年级:",-1)),t(e("input",{type:"text","onUpdate:modelValue":l[11]||(l[11]=r=>i.formAnimal.grade=r),id:"grade",required:""},null,512),[[o,i.formAnimal.grade]])]),e("div",null,[l[26]||(l[26]=e("label",{for:"type"},"类型:",-1)),t(e("select",{"onUpdate:modelValue":l[12]||(l[12]=r=>i.formAnimal.type=r),id:"type",required:""},l[25]||(l[25]=[e("option",{value:"0"},"0",-1),e("option",{value:"1"},"博士",-1),e("option",{value:"2"},"硕士",-1),e("option",{value:"3"},"本科！",-1)]),512),[[f,i.formAnimal.type]])])],32),e("pre",null,u(i.formAnimal),1)])}const A=d(s,[["render",v],["__scopeId","data-v-904b7598"]]);export{A as default};
