import{s as N}from"./formularios.module.js";import{j as u,r as a,ay as S,a as d,F as g}from"./index.js";import{a as v}from"./index14.js";import{e as A}from"./string.helper.js";import{a as F}from"./FormulariosProvider.js";const w=({dirigido:e})=>u("div",{className:N.dirigido,children:[e||"A quien concierne",":"]}),_=()=>{const e=a.exports.useMemo(()=>new Date,[]);return u("div",{className:N.fecha,children:["Panam\xE1, ",e.getDate()," de ",S(e,"MMMM")," del"," ",e.getFullYear()]})},H=()=>{const{cpa:e}=a.exports.useContext(v);return u("div",{className:N.firma,children:[d("span",{children:e==null?void 0:e.nombre}),u("span",{children:["C.I.P. ",e==null?void 0:e.cedula]}),u("span",{children:["C.P.A. #",e==null?void 0:e.numero]})]})},j=()=>d("div",{className:N.footer,children:d("span",{children:"Atentamente,"})}),Y=({receptor:e,ciudad:s})=>u("div",{className:N.receptor,children:[d("span",{children:"Se\xF1ores"}),d("span",{className:N.textUpperBold,children:e}),d("span",{children:s||"Ciudad.-"})]}),M=e=>{switch(e){case 1:return"UNO";case 2:return"DOS";case 3:return"TRES";case 4:return"CUATRO";case 5:return"CINCO";case 6:return"SEIS";case 7:return"SIETE";case 8:return"OCHO";case 9:return"NUEVE"}return""},m=(e,s)=>s>0?e+" Y "+M(s):e,l=e=>{const s=Math.floor(e/10),t=e-s*10;switch(s){case 1:switch(t){case 0:return"DIEZ";case 1:return"ONCE";case 2:return"DOCE";case 3:return"TRECE";case 4:return"CATORCE";case 5:return"QUINCE";default:return"DIECI"+M(t)}case 2:switch(t){case 0:return"VEINTE";default:return"VEINTI"+M(t)}case 3:return m("TREINTA",t);case 4:return m("CUARENTA",t);case 5:return m("CINCUENTA",t);case 6:return m("SESENTA",t);case 7:return m("SETENTA",t);case 8:return m("OCHENTA",t);case 9:return m("NOVENTA",t);case 0:return M(t)}},h=e=>{const s=Math.floor(e/100),t=e-s*100;switch(s){case 1:return t>0?"CIENTO "+l(t):"CIEN";case 2:return"DOSCIENTOS "+l(t);case 3:return"TRESCIENTOS "+l(t);case 4:return"CUATROCIENTOS "+l(t);case 5:return"QUINIENTOS "+l(t);case 6:return"SEISCIENTOS "+l(t);case 7:return"SETECIENTOS "+l(t);case 8:return"OCHOCIENTOS "+l(t);case 9:return"NOVECIENTOS "+l(t)}return l(t)},O=(e,s,t,r)=>{const n=Math.floor(e/s),c=e-n*s;let i="";return n>0&&(n>1?i=h(n)+" "+r:i=t),c>0&&(i+=""),i},b=e=>{const t=Math.floor(e/1e3),r=e-t*1e3,n=O(e,1e3,"UN MIL","MIL"),c=h(r);return n===""?c:n+" "+c},E=e=>{const t=Math.floor(e/1e6),r=e-t*1e6,n=O(e,1e6,"UN MILLON","MILLONES"),c=b(r);return n===""?c:n+" "+c},U=(e,s,t)=>{const r={numero:e,enteros:Math.floor(Number(e)),centavos:Math.round(Number(e)*100)-Math.floor(Number(e))*100,letrasCentavos:"",letrasMonedaPlural:s&&t?t.plural:s?"BALBOAS":"",letrasMonedaSingular:s&&t?t.singular:s?"BALBOA":"",letrasMonedaCentavoPlural:s&&t?t.centPlural:s?"CENTAVOS":"",letrasMonedaCentavoSingular:s&&t?t.centSingular:s?"CENTAVO":""};return r.centavos>0&&(r.letrasCentavos=r.centavos===1?"CON "+E(r.centavos)+" "+r.letrasMonedaCentavoSingular:"CON "+E(r.centavos)+" "+r.letrasMonedaCentavoPlural),r.enteros===0?"CERO "+r.letrasMonedaPlural+" "+r.letrasCentavos:r.enteros===1?E(r.enteros)+" "+r.letrasMonedaSingular+" "+r.letrasCentavos:E(r.enteros)+" "+r.letrasMonedaPlural+" "+r.letrasCentavos},D=()=>{const e=a.exports.useContext(F),s=a.exports.useMemo(()=>Boolean(Number(e.print_anual)),[e]),t=a.exports.useMemo(()=>e.genero==="MASCULINO",[e]),r=a.exports.useMemo(()=>e.cliente.tipo!=="Natural",[e]),n=a.exports.useMemo(()=>e.text_negocio?A(e.text_negocio,","):e.negocios.length>1,[e]),c=a.exports.useMemo(()=>n?"s":"",[n]),i=a.exports.useMemo(()=>e.periodos.filter((o,p)=>p!==0),[e]),C=a.exports.useMemo(()=>{var o;return e.actividad?e.actividad.slice(-1)!=="."?".":"":((o=e.negocios[0].actividad)==null?void 0:o.slice(-1))!=="."?".":""},[e]),x=a.exports.useCallback(o=>U(o.split(".")[0]),[]),T=a.exports.useMemo(()=>(Math.round(e.periodos.map(o=>Number(o.ingreso)).reduce((o,p)=>o+p)*100)/100).toFixed(2),[e]),I=a.exports.useMemo(()=>(Math.round(e.periodos.map(o=>Number(o.gasto)).reduce((o,p)=>o+p)*100)/100).toFixed(2),[e]),f=a.exports.useMemo(()=>(Math.round(e.periodos.map(o=>Number(o.total)).reduce((o,p)=>o+p)*100)/100).toFixed(2),[e]);return{data:e,isHombre:t,isSociedad:r,isMoreThanOne:n,strPlural:c,periodosNotFirst:i,actividadLastDot:C,toWord:x,sumIngresos:T,sumGastos:I,sumTotalIngresos:f,printAnual:s}},Q=e=>{const{disableLastDot:s,className:t}=e,{data:r}=D(),{negocios:n,text_negocio:c}=r;return d(g,{children:c?d("span",{className:N.textUpperBold,children:c}):n.map((i,C)=>u(a.exports.Fragment,{children:[u("span",{className:t!=null?t:N.textUpperBold,children:[i.tipo," ",i.nombre_negocio]}),s&&r.negocios.length-1===C?".":", "]},i.id))})};export{w as D,_ as F,Q as N,Y as R,j as a,H as b,D as u};
