import{T as c,o as l,k as u,w as m,a as t,u as s,Z as d,c as f,t as _,f as p,b as a,h as x,n as b,d as g}from"./app-76179456.js";import{_ as w}from"./GuestLayout-daefb34f.js";import{_ as h,a as y,b as V}from"./TextInput-5502793a.js";import{P as k}from"./PrimaryButton-c8fe111c.js";import"./_plugin-vue_export-helper-c27b6911.js";const v=a("div",{class:"mb-4 text-sm text-white"}," Забули свій пароль? Без проблем. Просто повідомте нам свою електронну адресу, і ми надішлемо вам електронною поштою посилання для скидання пароля, за яким ви зможете вибрати новий. ",-1),B={key:0,class:"mb-4 font-medium text-sm text-green-600"},N={class:"flex items-center justify-end mt-4"},T={__name:"ForgotPassword",props:{status:{type:String}},setup(o){const e=c({email:""}),r=()=>{e.post(route("password.email"))};return(P,i)=>(l(),u(w,null,{default:m(()=>[t(s(d),{title:"Forgot Password"}),v,o.status?(l(),f("div",B,_(o.status),1)):p("",!0),a("form",{onSubmit:g(r,["prevent"])},[a("div",null,[t(h,{for:"email",value:"Email",class:"text-white"}),t(y,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":i[0]||(i[0]=n=>s(e).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),t(V,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),a("div",N,[t(k,{class:b({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:m(()=>[x(" Посилання для відновлення пароля електронної пошти ")]),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{T as default};