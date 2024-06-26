import{l as v,e as x,m as y,o as n,c as p,T as V,k as g,w as d,a,u as s,Z as $,t as h,f as u,b as t,p as b,h as m,n as B,d as C}from"./app-76179456.js";import{_ as P}from"./GuestLayout-daefb34f.js";import{_ as w,a as _,b as q}from"./TextInput-5502793a.js";import{P as N}from"./PrimaryButton-c8fe111c.js";import"./_plugin-vue_export-helper-c27b6911.js";const U=["value"],j={__name:"Checkbox",props:{checked:{type:[Array,Boolean],required:!0},value:{default:null}},emits:["update:checked"],setup(l,{emit:e}){const c=e,i=l,o=v({get(){return i.checked},set(r){c("update:checked",r)}});return(r,f)=>x((n(),p("input",{type:"checkbox",value:l.value,"onUpdate:modelValue":f[0]||(f[0]=k=>o.value=k),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"},null,8,U)),[[y,o.value]])}},S={key:0,class:"mb-4 font-medium text-sm text-green-600"},D=t("div",{class:"text-center"},[t("a",{href:"auth/github/redirect",class:"inline-block bg-white p-2 rounded-md hover:bg-gray-300 duration-300"},[t("img",{src:"https://icon-library.com/images/github-icon/github-icon-15.jpg",alt:"Github Icon",class:"rounded-full w-12 h-12"})]),t("a",{href:"auth/google/redirect",class:"inline-block bg-white p-2 rounded-md ml-2 hover:bg-gray-300 duration-300"},[t("img",{src:"https://icon-library.com/images/free-google-icon/free-google-icon-17.jpg",alt:"Google Icon",class:"rounded-full w-12 h-12"})])],-1),E={key:0,class:"text-red-600"},G={class:"mt-4"},I={class:"block mt-4"},L={class:"flex items-center"},M=t("span",{class:"ml-2 text-sm text-white"},"Запам'ятати мене",-1),R={class:"flex items-center justify-end mt-4"},H={__name:"Login",props:{canResetPassword:{type:Boolean},status:{type:String}},setup(l){const e=V({email:"",password:"",remember:!1}),c=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(i,o)=>(n(),g(P,null,{default:d(()=>[a(s($),{title:"Log in"}),l.status?(n(),p("div",S,h(l.status),1)):u("",!0),D,t("form",{onSubmit:C(c,["prevent"])},[t("div",null,[a(w,{for:"email",value:"Email",class:"text-white"}),a(_,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":o[0]||(o[0]=r=>s(e).email=r),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),i.$page.props.errors?(n(),p("div",E,h(i.$page.props.errors.email),1)):u("",!0)]),t("div",G,[a(w,{for:"password",value:"Password",class:"text-white"}),a(_,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":o[1]||(o[1]=r=>s(e).password=r),required:"",autocomplete:"current-password"},null,8,["modelValue"]),a(q,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),t("div",I,[t("label",L,[a(j,{name:"remember",checked:s(e).remember,"onUpdate:checked":o[2]||(o[2]=r=>s(e).remember=r)},null,8,["checked"]),M])]),t("div",R,[l.canResetPassword?(n(),g(s(b),{key:0,href:i.route("password.request"),class:"underline text-sm text-white hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:d(()=>[m(" Забули пароль? ")]),_:1},8,["href"])):u("",!0),a(s(b),{href:i.route("register"),class:"underline text-sm text-white ml-4 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:d(()=>[m(" Немає акаунта? ")]),_:1},8,["href"]),a(N,{class:B(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:d(()=>[m(" Увійти ")]),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{H as default};