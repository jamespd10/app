var g=Object.defineProperty;var r=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var c=(e,a,i)=>a in e?g(e,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[a]=i,u=(e,a)=>{for(var i in a||(a={}))m.call(a,i)&&c(e,i,a[i]);if(r)for(var i of r(a))x.call(a,i)&&c(e,i,a[i]);return e};var y=(e,a)=>{var i={};for(var o in e)m.call(e,o)&&a.indexOf(o)<0&&(i[o]=e[o]);if(e!=null&&r)for(var o of r(e))a.indexOf(o)<0&&x.call(e,o)&&(i[o]=e[o]);return i};import{S as d}from"./SpanWidth.js";import{h as b,j as h,f}from"./date.helper.js";import{j as l,a as t}from"./index.js";import{f as N}from"./string.helper.js";import"./index13.js";import"./index14.js";import"./regex.js";const v=()=>l("div",{style:{display:"flex",flexDirection:"column"},children:[t("div",{style:{display:"flex",flexDirection:"row",width:"50%",borderTop:"1px solid black",textAlign:"center",justifyContent:"center"},children:t("span",{children:"RECIBI CONFORME"})}),t("span",{style:{fontWeight:"bold",fontSize:"12px"},children:"Nota: El empleador es la persona responsable de suministrar los datos para el c\xE1lculo de las prestaciones del trabajador y la cancelaci\xF3n de la misma. Esta oficina no asume ninguna responsabilidad ante ning\xFAn Reclamo."})]}),n=L=>{var s=L,{styles:e,textLeft:a,textRight:i}=s,o=y(s,["styles","textLeft","textRight"]);return l("div",{style:u({display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-between",alignItems:"baseline"},e),children:[t("span",{style:o.leftStyles,children:a}),t("span",{style:{flexGrow:1,borderBottom:"1px dotted #333",display:"inline-block"}}),t("span",{style:o.rightStyles,children:N(`${i}`)})]})},M=e=>l("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",textAlign:"justify",height:"100%",width:"100%"},children:[l("div",{style:{display:"flex",flexDirection:"column"},children:[l("p",{style:{marginBottom:15},children:["Panam\xE1, ",b(h(),"d - MMMM - yyyy")]}),l("p",{children:["Yo,"," ",t(d,{text:`${e.nombre}`,style:{textTransform:"uppercase",borderBottom:"1px solid black"}})," ",`${e.nacionalidad}(a)`,", mayor de edad, portador(a) de la c\xE9dula de identidad personal No."," ",t(d,{text:e.identificacion,style:{borderBottom:"1px solid black"}})," ","y seguro social"," ",t(d,{text:e.seguro,style:{borderBottom:"1px solid black"}})," ","Empleado(a) del establecimiento comercial denominado"," ",t(d,{text:e.nombre_negocio,style:{textTransform:"uppercase",borderBottom:"1px solid black"}})," ","que se encuentra ubicado en"," ",t(d,{text:e.negocio_direccion,style:{textTransform:"uppercase",borderBottom:"1px solid black"}})," ","deseo dejar constancia que Recib\xED por parte de mi patrono el importe correspondiente a mis prestaciones."," ",t("span",{style:{fontWeight:"bold"},children:"(Liquidaci\xF3n)."})]}),l("div",{children:["Por:"," ",l("span",{style:{textTransform:"uppercase",borderBottom:"1px solid black"},children:[e.motivo," DEL ",f(`${e.fecha_ini}`,"d/MM/yyyy")," ","HASTA EL ",f(`${e.fecha_liquidacion}`,"d/MM/yyyy")]})]}),t("p",{style:{fontWeight:"bold"},children:"Como se detalla a continuaci\xF3n:"}),l("div",{children:[t(n,{textLeft:"Vacaciones proporcionales",textRight:`${e.vacaciones}`}),t(n,{textLeft:"D\xE9cimo Tercer Mes",textRight:`${e.decimo}`}),t(n,{textLeft:"Prima de antiguedad",textRight:`${e.prima_antiguedad}`,styles:{display:Number(e.prima_antiguedad)?"flex":"none"}}),t(n,{textLeft:"Indemnizaci\xF3n",textRight:`${e.indemnizacion}`,styles:{display:Number(e.indemnizacion)?"flex":"none"}}),t(n,{textLeft:"Preaviso",textRight:`${e.preaviso_sal}`,styles:{display:Number(e.preaviso_sal)?"flex":"none"}}),t(n,{textLeft:"SUB-TOTAL",textRight:`${Number(e.vacaciones)+Number(e.decimo)+Number(e.prima_antiguedad)+Number(e.indemnizacion)+Number(e.preaviso_sal)}`,leftStyles:{marginLeft:"40%"},rightStyles:{fontWeight:"bold"},styles:{marginTop:35,marginBottom:35}}),t(n,{textLeft:"Seguro Social",textRight:`${e.seguro_social}`}),t(n,{textLeft:"Seguro Educativo",textRight:`${e.seguro_educativo}`}),t(n,{textLeft:"Total de deducciones",textRight:`${Number(e.seguro_social)+Number(e.seguro_educativo)}`,leftStyles:{marginLeft:"40%"},rightStyles:{fontWeight:"bold"},styles:{marginTop:35,marginBottom:35}}),t(n,{textLeft:"TOTAL NETO RECIBIDO",textRight:`${Number(e.vacaciones)+Number(e.decimo)+Number(e.prima_antiguedad)+Number(e.indemnizacion)+Number(e.preaviso_sal)-(Number(e.seguro_social)+Number(e.seguro_educativo))}`,leftStyles:{marginLeft:"40%"},rightStyles:{fontWeight:"bold"}})]})]}),t(v,{})]});export{M as default};