import{r as S,A as h,ae as w,U as y,af as o}from"./index.js";const A=()=>{const{authState:n}=S.exports.useContext(h);return async({url:r,method:c,data:u,params:i,signal:t,isBlob:p})=>{const{token:d}=n,a=new URLSearchParams(i).toString(),x=a?o+r+"?"+a:o+r;try{const e=await fetch(x,{method:c,credentials:"include",mode:"cors",body:JSON.stringify(u),headers:new Headers({"Content-Type":"application/json","x-api-key":w,"x-token":d||"","Access-Control-Allow-Origin":y}),signal:t});if(e.ok){const s=p?await e.blob():await e.json();return{status:e.status,data:s}}else{const s=await e.text(),m=JSON.parse(s);return{status:e.status,error:{message:m.message}}}}catch{return t!=null&&t.aborted?{status:-1,error:{message:"Se cancel\xF3 el env\xEDo de la solicitud"}}:{status:-1,error:{message:"Ocurri\xF3 un error inesperado"}}}}};export{A as u};
