var k=Object.defineProperty;var i=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var b=(e,s,t)=>s in e?k(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,l=(e,s)=>{for(var t in s||(s={}))p.call(s,t)&&b(e,t,s[t]);if(i)for(var t of i(s))v.call(s,t)&&b(e,t,s[t]);return e};var x=(e,s)=>{var t={};for(var a in e)p.call(e,a)&&s.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&i)for(var a of i(e))s.indexOf(a)<0&&v.call(e,a)&&(t[a]=e[a]);return t};import{r as N}from"./index.js";import{f as B,o as F}from"./array.js";import{u as H}from"./useFetch.js";import{u as O}from"./useModal.js";import"./jwt-decode.esm.js";const J=e=>{try{return JSON.stringify(e),!0}catch{return!1}},G=a=>{var S=a,{schema:e,fields:s}=S,t=x(S,["schema","fields"]);const{isLoading:y,send:V}=H(),[w,c]=N.exports.useState(),[u,d]=N.exports.useState(0),{modalState:R,setHide:m,setOpen:h}=O(),f=O(),n=B({defaultValues:t.defaultValues,mode:"all",resolver:F(e)}),g=()=>{d(r=>r+1)};return{activeStep:u,handleNextStep:async()=>{for(const[r,[,o]]of Object.entries(Object.entries(s)))u===Number(r)&&Number(r)<s.length-1?await n.trigger(o.names)&&g():u===s.length-1&&(await n.trigger()?(c(void 0),f.setHide(),h()):f.setOpen())},handleBack:()=>{d(r=>r-1)},form:n,isLoading:y,res:w,modalState:R,setHide:m,handleSubmit:async r=>{t.beforeSubmit&&t.beforeSubmit(),m();const o=await V({url:t.url,method:"POST",data:J(r)?l(l({},n.getValues()),r):l({},n.getValues())});o.status===201&&g(),c(o),h()},handleReset:()=>{m(),n.reset(),d(0),c(void 0)},modalError:f}};export{G as u};