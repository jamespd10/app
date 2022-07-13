import{aT as I,aA as T,aU as F,aV as O,aB as x,aW as U,aX as B,aH as y,r as b,a,j as i,F as M,aw as D,aG as C}from"./index.js";import{s as n}from"./formularios.module.js";import{u as $,F as X,R as L,D as w,N as R,a as j,b as H}from"./Negocios2.js";import{a as z}from"./index14.js";import{f}from"./string.helper.js";import{A as W}from"./Actividades.js";import"./Formularios.js";import"./HeaderTitle.js";import"./Typography.js";import"./Divider.js";import"./Loader.js";import"./Grid.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./useLocalStorage.js";import"./yup.module.js";import"./regex.js";import"./array.js";import"./upperFirst.js";function Y(m){return I({},m)}var A=1440,k=2520,S=43200,G=86400;function q(m,u){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};T(2,arguments);var e=r.locale||F;if(!e.formatDistance)throw new RangeError("locale must contain formatDistance property");var p=O(m,u);if(isNaN(p))throw new RangeError("Invalid time value");var s=Y(r);s.addSuffix=Boolean(r.addSuffix),s.comparison=p;var d,l;p>0?(d=x(u),l=x(m)):(d=x(m),l=x(u));var c=U(l,d),h=(B(l)-B(d))/1e3,t=Math.round((c-h)/60),o;if(t<2)return r.includeSeconds?c<5?e.formatDistance("lessThanXSeconds",5,s):c<10?e.formatDistance("lessThanXSeconds",10,s):c<20?e.formatDistance("lessThanXSeconds",20,s):c<40?e.formatDistance("halfAMinute",null,s):c<60?e.formatDistance("lessThanXMinutes",1,s):e.formatDistance("xMinutes",1,s):t===0?e.formatDistance("lessThanXMinutes",1,s):e.formatDistance("xMinutes",t,s);if(t<45)return e.formatDistance("xMinutes",t,s);if(t<90)return e.formatDistance("aboutXHours",1,s);if(t<A){var g=Math.round(t/60);return e.formatDistance("aboutXHours",g,s)}else{if(t<k)return e.formatDistance("xDays",1,s);if(t<S){var N=Math.round(t/A);return e.formatDistance("xDays",N,s)}else if(t<G)return o=Math.round(t/S),e.formatDistance("aboutXMonths",o,s)}if(o=y(l,d),o<12){var E=Math.round(t/S);return e.formatDistance("xMonths",E,s)}else{var _=o%12,v=Math.floor(o/12);return _<3?e.formatDistance("aboutXYears",v,s):_<9?e.formatDistance("overXYears",v,s):e.formatDistance("almostXYears",v+1,s)}}const pe=m=>{const u=$(),{data:r,isHombre:e,isMoreThanOne:p}=u,{strPlural:s,toWord:d,printAnual:l}=u,{sumTotalIngresos:c,sumIngresos:h,sumGastos:t}=u,{cpa:o}=b.exports.useContext(z);return a("div",{className:`${n.content} ${m.className||""}`,children:i("div",{className:n.flexColumn,children:[a(X,{}),a(L,{receptor:"Scotiabank",ciudad:"The Bank of Nova Scotia"}),a(w,{dirigido:"Estimados se\xF1ores"}),i("p",{className:`${n.parrafo} ${n.tab}`,children:["El suscrito,"," ",a("span",{className:n.textUpperBold,children:o==null?void 0:o.nombre}),", con c\xE9dula de identidad personal No."," ",a("span",{className:n.textUpperBold,children:o==null?void 0:o.cedula}),","," ","debidamente registrado en el Departamento de Licencias con la licencia C.P.A. #",a("span",{children:o==null?void 0:o.numero}),"; se presenta copia de carnet vigente."]}),a("span",{className:n.titleCenter,children:"Certifico"}),i("p",{className:`${n.parrafo} ${n.tab}`,children:["Que ",a("span",{children:e?"el se\xF1or":"la se\xF1ora"})," ",i("span",{className:n.textUpperBold,children:[r.nombre_encargado," ",r.apellido_encargado]}),", ",a("span",{children:e?"var\xF3n":"mujer"}),", mayor de edad, con c\xE9dula de identidad personal N\xB0"," ",a("span",{className:n.textUpperBold,children:r.identificacion_encargado}),", ",i("strong",{children:["RECIBE INGRESOS ",Boolean(Number(l))===!0?"":"BRUTOS"," ",Boolean(Number(l))===!0?"ANUALES":"MENSUALES"]})," por la suma"," ",i("span",{className:n.textUpperBold,children:[f(h)," (",d(`${h}`)," BALBOAS CON"," ",f(h).slice(-2),"/100)"]})," ",Boolean(Number(l))===!0?a(M,{}):i(M,{children:["y gastos ",Boolean(Number(l))===!0?"anuales":"mensuales"," de"," ",i("span",{className:n.textUpperBold,children:[f(t)," (",d(`${t}`)," BALBOAS CON"," ",f(t).slice(-2),"/100)"]})," ","para un ingreso Neto ",Boolean(Number(l))===!0?"Anual":"Mensual"," de"," ",i("span",{className:n.textUpperBold,children:[f(c)," (",d(`${c}`)," ","BALBOAS CON ",f(c).slice(-2),"/100)"]})]}),", en concepto de ",a("span",{children:r.cargo_encargado})," ",p?"de los":"del"," establecimiento comercial"," ","denominado ",a(R,{})," que tiene",p?"n":""," como"," ","actividad principal la"," ",a("span",{className:n.lowerCase,children:a(W,{})}),", constituido",s," el"," ",i("span",{children:[D(r.negocios[0].fecha_aviso_op,"dd")," de"," ",D(r.negocios[0].fecha_aviso_op,"MMMM")," de"," ",D(r.negocios[0].fecha_aviso_op,"yyyy")]}),"."]}),Boolean(Number(r.abrir_cuenta))===!0?i("p",{className:n.parrafo,children:["Esta certificaci\xF3n se extiende para realizar tr\xE1mites de apertura de"," ","una cuenta de dep\xF3sito y punto de venta."]}):a(M,{}),i("p",{className:`${n.parrafo} ${n.tab}`,children:["Soy contador",(o==null?void 0:o.genero)==="FEMENINO"?"a":""," de"," ",a("span",{children:e?"el se\xF1or":"la se\xF1ora"})," ",a("span",{className:n.textCapi,children:r.apellido_encargado})," ","desde hace"," ",a("span",{children:q(new Date(r.negocios[0].fecha_aviso_op),new Date,{locale:C})})," ","y estos ingresos certificados por mi persona fueron verificados contra los movimientos de la actividad econ\xF3mica de mi cliente, debidamente validados contra facturas, ejecutadas en"," ",r.periodos.length>1?"los":"el"," periodo",r.periodos.length>1?"s":""," ",a("span",{children:r.periodos.map((g,N)=>i(b.exports.Fragment,{children:[r.periodos.length>1&&r.periodos.length-1===N?"y ":"",g.fecha_yy,r.periodos.length>1&&r.periodos.length-1!==N?", ":""]},`${g.fecha_yy}-${N+1}`))}),", utilizando las (NIAS) Normas Internacionales de Auditor\xEDa."]}),a(j,{}),a(H,{})]})})};export{pe as default};
