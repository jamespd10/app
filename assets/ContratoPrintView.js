var _=Object.defineProperty;var n=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var d=(l,e,i)=>e in l?_(l,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):l[e]=i,o=(l,e)=>{for(var i in e||(e={}))c.call(e,i)&&d(l,i,e[i]);if(n)for(var i of n(e))u.call(e,i)&&d(l,i,e[i]);return l};import{r,b as s,j as p,a as t}from"./index.js";import{L as a}from"./Loader.js";import"./Grid.js";import"./Typography.js";const x=r.exports.lazy(()=>s(()=>import("./ContratoNatural.js"),["assets/ContratoNatural.js","assets/SpanWidth.js","assets/index.js","assets/index.css","assets/date.helper.js","assets/index13.js","assets/numberToString.js","assets/string.helper.js","assets/regex.js"])),h=r.exports.lazy(()=>s(()=>import("./ContratoSociedad.js"),["assets/ContratoSociedad.js","assets/SpanWidth.js","assets/index.js","assets/index.css","assets/date.helper.js","assets/index13.js","assets/numberToString.js","assets/string.helper.js","assets/regex.js"])),v=r.exports.lazy(()=>s(()=>import("./FooterContratoPrint.js"),["assets/FooterContratoPrint.js","assets/index.js","assets/index.css"])),C=({priting:l,contrato:e})=>p("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",textAlign:"justify",height:l?"100vh":"100%",width:"100%"},children:[p("div",{children:[t("div",{style:{textAlign:"center"},children:t("h3",{children:"CONTRATO DE TRABAJO"})}),t("div",{style:{display:e.tipo_cliente!=="Natural"?"none":void 0},children:e.tipo_cliente==="Natural"&&t(r.exports.Suspense,{fallback:t(a,{}),children:t(x,o({},e))})}),t("div",{style:{display:e.tipo_cliente==="Natural"?"none":void 0},children:e.tipo_cliente!=="Natural"&&t(r.exports.Suspense,{fallback:t(a,{}),children:t(h,o({},e))})})]}),t(r.exports.Suspense,{fallback:t(a,{}),children:t(v,{text:e.tipo_cliente==="Natural"?"EL EMPLEADOR":"LA COMPA\xD1\xCDA"})})]});export{C as default};
