var c=Object.defineProperty;var a=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var o=(r,i,t)=>i in r?c(r,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[i]=t,d=(r,i)=>{for(var t in i||(i={}))h.call(i,t)&&o(r,t,i[t]);if(a)for(var t of a(i))y.call(i,t)&&o(r,t,i[t]);return r};import{r as s,q as f,a as e,F as v,j as n}from"./index.js";import{P as x}from"./Paper.js";import{T as l}from"./Typography.js";import"./extendSxProp.js";const u=s.exports.lazy(()=>f(()=>import("./InformationBody.js"),["assets/InformationBody.js","assets/index.js","assets/index.css","assets/string.helper.js","assets/regex.js","assets/Typography.js","assets/extendSxProp.js"])),w=r=>e(v,{children:n(x,{variant:"outlined",style:{padding:10,marginTop:20},children:[n("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",flexWrap:"wrap"},children:[e(l,{variant:"h5",children:r.negocio}),n(l,{variant:"h5",children:[e("strong",{children:"A\xF1o: "}),r.yy]})]}),e("hr",{}),n("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[n(l,{variant:"subtitle1",children:[e("strong",{children:"RUC:"})," ",r.ruc]}),n(l,{variant:"subtitle1",style:{marginLeft:10},children:[e("strong",{children:"DV:"})," ",r.dv]})]}),e("hr",{}),e("div",{style:{display:"flex",flexDirection:"row"},children:e(l,{variant:"subtitle1",children:e("strong",{children:r.cliente})})}),e("hr",{}),e("div",{style:{display:"flex",flexDirection:"row"},children:n(l,{variant:"subtitle1",children:[e("strong",{children:"No. contribuyente:"})," ",e("span",{style:{color:"red"},children:r.no_contribuyente})]})}),e(s.exports.Suspense,{fallback:e("div",{}),children:e(u,d({},r))})]})});export{w as default};