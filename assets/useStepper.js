var k=Object.defineProperty;var i=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var b=(e,s,t)=>s in e?k(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,l=(e,s)=>{for(var t in s||(s={}))v.call(s,t)&&b(e,t,s[t]);if(i)for(var t of i(s))p.call(s,t)&&b(e,t,s[t]);return e};var x=(e,s)=>{var t={};for(var a in e)v.call(e,a)&&s.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&i)for(var a of i(e))s.indexOf(a)<0&&p.call(e,a)&&(t[a]=e[a]);return t};import{r as N}from"./index.js";import{d as B,o as F}from"./array.js";import{u as H}from"./useFetch.js";import{u as O}from"./useModal.js";const J=e=>{try{return JSON.stringify(e),!0}catch{return!1}},D=a=>{var S=a,{schema:e,fields:s}=S,t=x(S,["schema","fields"]);const{isLoading:y,send:V}=H(),[w,c]=N.exports.useState(),[u,d]=N.exports.useState(0),{modalState:R,setHide:m,setOpen:h}=O(),f=O(),r=B({defaultValues:t.defaultValues,mode:"all",resolver:F(e)}),g=()=>{d(n=>n+1)};return{activeStep:u,handleNextStep:async()=>{for(const[n,[,o]]of Object.entries(Object.entries(s)))u===Number(n)&&Number(n)<s.length-1?await r.trigger(o.names)&&g():u===s.length-1&&(await r.trigger()?(c(void 0),f.setHide(),h()):f.setOpen())},handleBack:()=>{d(n=>n-1)},form:r,isLoading:y,res:w,modalState:R,setHide:m,handleSubmit:async n=>{t.beforeSubmit&&t.beforeSubmit(),m();const o=await V({url:t.url,method:"POST",data:J(n)?l(l({},r.getValues()),n):l({},r.getValues())});o.status===201&&g(),c(o),h()},handleReset:()=>{m(),r.reset(),d(0),c(void 0)},modalError:f}};export{D as u};
