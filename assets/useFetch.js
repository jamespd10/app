import{r as s}from"./index.js";import{u as g}from"./useHttpService.js";const S=()=>{const t=new AbortController,n=t.signal,[a,e]=s.exports.useState(!1),[c,o]=s.exports.useState(),l=g(),i=s.exports.useCallback(()=>t.abort(),[]),u=s.exports.useCallback(()=>{o(void 0),e(!1)},[]);return{isLoading:a,send:async({url:p,method:b,data:d,params:f,isBlob:x})=>{e(!0);const r=await l({url:p,method:b,data:d,params:f,signal:n,isBlob:x});return e(!1),o(r),r},handleAbort:i,response:c,reset:u}};export{S as u};
