var _=Object.defineProperty;var n=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var d=(r,e,i)=>e in r?_(r,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[e]=i,o=(r,e)=>{for(var i in e||(e={}))c.call(e,i)&&d(r,i,e[i]);if(n)for(var i of n(e))u.call(e,i)&&d(r,i,e[i]);return r};import{r as l,q as s,j as p,a as t}from"./index.js";import{L as a}from"./Loader.js";import"./Grid.js";import"./extendSxProp.js";import"./Typography.js";const x=l.exports.lazy(()=>s(()=>import("./ContratoNatural.js"),["assets/ContratoNatural.js","assets/SpanWidth.js","assets/index.js","assets/index.css","assets/date.helper.js","assets/index13.js","assets/index14.js","assets/numberToString.js","assets/string.helper.js","assets/regex.js"])),h=l.exports.lazy(()=>s(()=>import("./ContratoSociedad.js"),["assets/ContratoSociedad.js","assets/SpanWidth.js","assets/index.js","assets/index.css","assets/date.helper.js","assets/index13.js","assets/index14.js","assets/numberToString.js","assets/string.helper.js","assets/regex.js"])),v=l.exports.lazy(()=>s(()=>import("./FooterContratoPrint.js"),["assets/FooterContratoPrint.js","assets/index.js","assets/index.css"])),D=({priting:r,contrato:e})=>p("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",textAlign:"justify",height:r?"100vh":"100%",width:"100%"},children:[p("div",{children:[t("div",{style:{textAlign:"center"},children:t("h3",{children:"CONTRATO DE TRABAJO"})}),t("div",{style:{display:e.tipo_cliente!=="Natural"?"none":void 0},children:e.tipo_cliente==="Natural"&&t(l.exports.Suspense,{fallback:t(a,{}),children:t(x,o({},e))})}),t("div",{style:{display:e.tipo_cliente==="Natural"?"none":void 0},children:e.tipo_cliente!=="Natural"&&t(l.exports.Suspense,{fallback:t(a,{}),children:t(h,o({},e))})})]}),t(l.exports.Suspense,{fallback:t(a,{}),children:t(v,{text:e.tipo_cliente==="Natural"?"EL EMPLEADOR":"LA COMPA\xD1\xCDA"})})]});export{D as default};