var v=Object.defineProperty,x=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var c=(e,o,r)=>o in e?v(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,t=(e,o)=>{for(var r in o||(o={}))p.call(o,r)&&c(e,r,o[r]);if(i)for(var r of i(o))f.call(o,r)&&c(e,r,o[r]);return e},n=(e,o)=>x(e,h(o));var g=(e,o)=>{var r={};for(var s in e)p.call(e,s)&&o.indexOf(s)<0&&(r[s]=e[s]);if(e!=null&&i)for(var s of i(e))o.indexOf(s)<0&&f.call(e,s)&&(r[s]=e[s]);return r};import{r as l,av as P,f as R,a,b}from"./index.js";import{u as F}from"./useForm.js";import{c as j,d as y}from"./array.js";const S=j().shape({riesgo_profesional:y().typeError("Favor ingresar el riesgo profesional").positive().min(0,"Favor ingresar el porcentaje del riesgo profesional").required("Favor ingresar el riesgo profesional")}),E=l.exports.createContext({}),O=r=>{var s=r,{children:e}=s,o=g(s,["children"]);const{riesgo_profesional:d}=o,u=P(),_=R(),m=F({riesgo_profesional:d||null},S);return a(E.Provider,{value:n(t({},o),{modal:u,form:m,fetcher:_}),children:e})},z=l.exports.lazy(()=>b(()=>import("./index72.js"),["assets/index72.js","assets/index13.css","assets/index.js","assets/index2.css","assets/string.helper.js","assets/regex.js","assets/useForm.js","assets/object.helper.js","assets/array.js","assets/upperFirst.js"])),C=e=>a(O,n(t({},e),{children:a(l.exports.Suspense,{fallback:a("div",{}),children:a(z,{})})}));var A=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"}));export{E as R,A as i};
