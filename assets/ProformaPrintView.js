var s=Object.defineProperty;var d=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var o=(e,i,n)=>i in e?s(e,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[i]=n,c=(e,i)=>{for(var n in i||(i={}))m.call(i,n)&&o(e,n,i[n]);if(d)for(var n of d(i))h.call(i,n)&&o(e,n,i[n]);return e};import{f as a}from"./date.helper.js";import{j as r,a as t,F as f,r as x}from"./index.js";import{f as l}from"./string.helper.js";import"./index31.js";import"./regex.js";const g=e=>r("div",{style:{display:"flex",flexDirection:"column",margin:"2.4cm 0 0 1in",overflow:"hidden",whiteSpace:"nowrap",fontSize:"14px"},children:[t("strong",{children:e.nombre_negocio}),r("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",margin:"0.5cm 0 0.6cm 0"},children:[t("strong",{children:a(`${new Date(Date.now())}`,"dd MMM yyyy")}),t("strong",{children:a(`${new Date(e.mes_correspondiente)}`,"MMMM")})]})]}),y=e=>r("div",{style:{display:"flex",flexDirection:"column",flex:1},children:[r("div",{style:{minHeight:"3.8cm",maxHeight:"3.8cm",height:"3.8cm",overflow:"hidden",marginBottom:"10px",overflowWrap:"break-word",wordBreak:"break-all"},children:[t("span",{style:{visibility:"hidden"},children:"Notas:"}),t("p",{style:{fontSize:"10px",textAlign:"justify"},children:e.notas})]}),r("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"0.5cm"},children:[t("span",{children:"SIPE: "}),t("span",{children:l(e.sipe,!0)})]}),r("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",margin:"0.4cm 0 0 0"},children:[t("span",{children:"FORMULARIO 03:"}),t("span",{children:l(e.formulario_03,!0)})]}),t("div",{style:{textAlign:"right",marginTop:"0.3cm"},children:t("span",{children:l(e.itbms,!0)})}),t("div",{style:{textAlign:"right",margin:"0.8cm 0 0.8cm 0"},children:t("span",{children:l(e.formulario_retencion_itbms,!0)})}),t("div",{style:{textAlign:"right"},children:t("span",{children:l(e.seguro_social,!0)})}),t("div",{style:{textAlign:"right",margin:"0.8cm 0 0.7cm 0"},children:t("span",{children:l(e.servicio_contabilidad,!0)})}),t("div",{style:{textAlign:"right"},children:t("span",{children:l(e.itbms_contabilidad,!0)})})]}),u=e=>t("div",{style:{display:"flex",flexDirection:"column",flex:1,padding:"0 0 0 20px"},children:r("div",{style:{minHeight:"10.8cm",maxHeight:"10.8cm",height:"10.8cm",overflow:"hidden"},children:[r("div",{style:{marginLeft:"75px"},children:[":"," ",e.otros&&e.otros.length>0?l(e.otros.map(i=>Number(i.valor||0)).reduce((i,n)=>i+n),!0):t(f,{})]}),t("p",{style:{fontSize:"10px",textAlign:"justify"},children:e.otros&&e.otros.length>0&&e.otros.map((i,n)=>r(x.exports.Fragment,{children:[t("span",{children:i.texto}),t("br",{})]},`${i.texto}${new Date(Date.now()).getTime()+n}`))})]})});var p="/app/assets/firma-con-ps.png";const w=e=>r("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"0.9cm"},children:[t("img",{src:p,alt:"firma",style:{flex:1,width:"50px",height:"50px"}}),t("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",flex:1,textAlign:"right",paddingRight:"27px",fontSize:"24px"},children:t("strong",{children:l(e.total,!0)})})]}),v=e=>r("div",{style:{display:"flex",flexDirection:"column",textTransform:"uppercase",width:"14cm",height:"21.5cm",overflow:"hidden",padding:"0.5cm 0.8cm 0.8cm 0.8cm",fontSize:"12px"},children:[t(g,c({},e)),r("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[t(y,c({},e)),t(u,c({},e))]}),t(w,c({},e))]}),_=e=>t("div",{style:{display:"flex",width:"100%",height:"100vh",justifyContent:"center"},children:t(v,c({},e))});export{_ as default};
