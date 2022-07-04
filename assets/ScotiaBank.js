import{aT as A,aA as B,aU as F,aV as b,aB as g,aW as O,aX as _,aH as U,r as S,j as t,a as o,aw as v,F as y,aG as C}from"./index.js";import{s as n}from"./formularios.module.js";import{u as $,F as X,R as L,D as w,N as R,a as j,b as H}from"./Negocios2.js";import{a as z}from"./index14.js";import{f}from"./string.helper.js";import{A as W}from"./Actividades.js";import"./Formularios.js";import"./HeaderTitle.js";import"./Typography.js";import"./Divider.js";import"./Loader.js";import"./Grid.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./useLocalStorage.js";import"./array.js";import"./upperFirst.js";import"./regex.js";function Y(m){return A({},m)}var E=1440,k=2520,M=43200,G=86400;function q(m,p){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};B(2,arguments);var a=s.locale||F;if(!a.formatDistance)throw new RangeError("locale must contain formatDistance property");var u=b(m,p);if(isNaN(u))throw new RangeError("Invalid time value");var r=Y(s);r.addSuffix=Boolean(s.addSuffix),r.comparison=u;var c,l;u>0?(c=g(p),l=g(m)):(c=g(m),l=g(p));var i=O(l,c),h=(_(l)-_(c))/1e3,e=Math.round((i-h)/60),d;if(e<2)return s.includeSeconds?i<5?a.formatDistance("lessThanXSeconds",5,r):i<10?a.formatDistance("lessThanXSeconds",10,r):i<20?a.formatDistance("lessThanXSeconds",20,r):i<40?a.formatDistance("halfAMinute",null,r):i<60?a.formatDistance("lessThanXMinutes",1,r):a.formatDistance("xMinutes",1,r):e===0?a.formatDistance("lessThanXMinutes",1,r):a.formatDistance("xMinutes",e,r);if(e<45)return a.formatDistance("xMinutes",e,r);if(e<90)return a.formatDistance("aboutXHours",1,r);if(e<E){var N=Math.round(e/60);return a.formatDistance("aboutXHours",N,r)}else{if(e<k)return a.formatDistance("xDays",1,r);if(e<M){var I=Math.round(e/E);return a.formatDistance("xDays",I,r)}else if(e<G)return d=Math.round(e/M),a.formatDistance("aboutXMonths",d,r)}if(d=U(l,c),d<12){var T=Math.round(e/M);return a.formatDistance("xMonths",T,r)}else{var D=d%12,x=Math.floor(d/12);return D<3?a.formatDistance("aboutXYears",x,r):D<9?a.formatDistance("overXYears",x,r):a.formatDistance("almostXYears",x+1,r)}}const pe=m=>{const p=$(),{data:s,isHombre:a,isMoreThanOne:u}=p,{strPlural:r,toWord:c}=p,{sumTotalIngresos:l,sumIngresos:i,sumGastos:h}=p,{cpa:e}=S.exports.useContext(z);return t("div",{className:`${n.content} ${m.className||""}`,children:[t("div",{className:n.flexColumn,children:[o(X,{}),o(L,{receptor:"Scotiabank",ciudad:"The Bank of Nova Scotia"}),o(w,{dirigido:"Estimados se\xF1ores"}),t("p",{className:`${n.parrafo} ${n.tab}`,children:["El suscrito,"," ",o("span",{className:n.textUpperBold,children:e==null?void 0:e.nombre}),", con c\xE9dula de identidad personal No."," ",o("span",{className:n.textUpperBold,children:e==null?void 0:e.cedula}),","," ","debidamente registrado en el Departamento de Licencias con la licencia C.P.A. #",o("span",{children:e==null?void 0:e.numero}),"; se presenta copia de carnet vigente."]}),o("span",{className:n.titleCenter,children:"Certifico"}),t("p",{className:`${n.parrafo} ${n.tab}`,children:["Que ",o("span",{children:a?"el se\xF1or":"la se\xF1ora"})," ",t("span",{className:n.textUpperBold,children:[s.nombre_encargado," ",s.apellido_encargado]}),", ",o("span",{children:a?"var\xF3n":"mujer"}),", mayor de edad, con c\xE9dula de identidad personal N\xB0"," ",o("span",{className:n.textUpperBold,children:s.identificacion_encargado}),", ",o("strong",{children:"RECIBE INGRESOS BRUTOS MENSUALES"})," por la suma"," ",t("span",{className:n.textUpperBold,children:[f(i)," (",c(`${i}`)," BALBOAS CON"," ",f(i).slice(-2),"/100)"]})," ","y gastos mensuales de"," ",t("span",{className:n.textUpperBold,children:[f(h)," (",c(`${h}`)," BALBOAS CON"," ",f(h).slice(-2),"/100)"]})," ","para un ingreso Neto Mensual de"," ",t("span",{className:n.textUpperBold,children:[f(l)," (",c(`${l}`)," ","BALBOAS CON ",f(l).slice(-2),"/100)"]}),", en concepto de ",o("span",{children:s.cargo_encargado})," ",u?"de los":"del"," establecimiento comercial"," ","denominado ",o(R,{})," que tiene",u?"n":""," como"," ","actividad principal la"," ",o("span",{className:n.lowerCase,children:o(W,{})}),", constituido",r," el"," ",t("span",{children:[v(s.negocios[0].fecha_aviso_op,"dd")," de"," ",v(s.negocios[0].fecha_aviso_op,"MMMM")," de"," ",v(s.negocios[0].fecha_aviso_op,"yyyy")]}),"."]}),Boolean(Number(s.abrir_cuenta))===!0?t("p",{className:n.parrafo,children:["Esta certificaci\xF3n se extiende para realizar tr\xE1mites de apertura de"," ","una cuenta de dep\xF3sito y punto de venta."]}):o(y,{}),t("p",{className:`${n.parrafo} ${n.tab}`,children:["Soy contador",(e==null?void 0:e.genero)==="FEMENINO"?"a":""," de"," ",o("span",{children:a?"el se\xF1or":"la se\xF1ora"})," ",o("span",{className:n.textCapi,children:s.apellido_encargado})," ","desde hace"," ",o("span",{children:q(new Date(s.negocios[0].fecha_aviso_op),new Date,{locale:C})})," ","y estos ingresos certificados por mi persona fueron verificados contra los movimientos de la actividad econ\xF3mica de mi cliente, debidamente validados contra facturas, ejecutadas en"," ",s.periodos.length>1?"los":"el"," periodo",s.periodos.length>1?"s":""," ",o("span",{children:s.periodos.map((d,N)=>t(S.exports.Fragment,{children:[s.periodos.length>1&&s.periodos.length-1===N?"y ":"",d.fecha_yy,s.periodos.length>1&&s.periodos.length-1!==N?", ":""]},`${d.fecha_yy}-${N+1}`))}),", utilizando las (NIAS) Normas Internacionales de Auditor\xEDa."]}),o(j,{})]}),o(H,{})]})};export{pe as default};
