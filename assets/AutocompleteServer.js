var k=Object.defineProperty,w=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var T=(e,t,s)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,n=(e,t)=>{for(var s in t||(t={}))S.call(t,s)&&T(e,s,t[s]);if(u)for(var s of u(t))q.call(t,s)&&T(e,s,t[s]);return e},l=(e,t)=>w(e,z(t));var p=(e,t)=>{var s={};for(var o in e)S.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&u)for(var o of u(e))t.indexOf(o)<0&&q.call(e,o)&&(s[o]=e[o]);return s};import{r as c,ay as B,a as A}from"./index.js";import{T as D}from"./TextInput.js";import{u as G}from"./useFetch.js";import{A as J}from"./Autocomplete.js";const Z=s=>{var o=s,{time:e}=o,t=p(o,["time"]);const b=t,{disableHight:F,params:x,enableFirst:P,autoFocus:C}=b,v=p(b,["disableHight","params","enableFirst","autoFocus"]),{urlFetch:E,getOptionLabel:g,renderOption:L}=v,y=p(v,["urlFetch","getOptionLabel","renderOption"]),{inputProps:I,disableStyle:R}=y,d=p(y,["inputProps","disableStyle"]),{isLoading:m,send:V,response:a,reset:j}=G(),[f,H]=c.exports.useState(""),[i,O]=c.exports.useState(!1),[Q,_]=c.exports.useState(0);return B(()=>{(()=>{_(h=>h+1)})()},[x]),c.exports.useEffect(()=>{const r=setTimeout(()=>{f!==""||P?V({url:E,params:n({q:f},x)}):j()},e||500);return()=>clearTimeout(r)},[f,Q]),A(J,l(n({},d),{disablePortal:!0,style:R?void 0:l(n({},d.style),{height:F?void 0:i&&a&&a.status===201&&a.data&&!m?"325px":i?"100px":void 0}),onOpen:()=>O(!i),onClose:()=>O(!i),loading:m,isOptionEqualToValue:d.isOptionEqualToValue,filterOptions:r=>r,options:!m&&a&&a.status===201&&a.data?a.data:[],getOptionLabel:g?r=>g(r):void 0,renderOption:L,renderInput:r=>A(D,l(n(n({},r),I),{autoFocus:C,onChange:h=>H(h.target.value)}))}))};export{Z as A};
