var R=Object.defineProperty;var p=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var l=(r,e,t)=>e in r?R(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,f=(r,e)=>{for(var t in e||(e={}))V.call(e,t)&&l(r,t,e[t]);if(p)for(var t of p(e))_.call(e,t)&&l(r,t,e[t]);return r};import{r as c}from"./index.js";import{_ as b}from"./useAsyncRetry.js";import"./jwt-decode.esm.js";import{u as j}from"./useHttpService.js";const T=({url:r,params:e,data:t,method:m})=>{const h=j(),[o,n]=c.exports.useState(""),[v,u]=c.exports.useState(""),a=c.exports.createRef(),x=()=>{var s,i;(s=a.current)!=null&&s.value&&n((i=a.current)==null?void 0:i.value)},y=()=>{n(""),u("")},S=s=>{u(s.target.value)},{loading:g,value:d,error:w,retry:C}=b(async()=>await h({url:r,params:f({q:o},e),data:t,method:m}),[o,e,t]);return{loading:g,value:d,error:w,onChange:S,search:o,inputRef:a,sendSearch:x,onClearSearch:y,setSearch:n,retry:C,inputValue:v}},k={display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:10};export{k as s,T as u};
