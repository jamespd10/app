import{r as f,a as e,j as r,F as u,aw as N}from"./index.js";import{s as a}from"./formularios.module.js";import{u as g,F as A,R as E,D as O,N as b,a as C,b as F}from"./Negocios2.js";import{a as U}from"./index14.js";import{f as n}from"./string.helper.js";import{A as _}from"./Actividades.js";import"./Formularios.js";import"./HeaderTitle.js";import"./Typography.js";import"./Divider.js";import"./Loader.js";import"./Grid.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./useLocalStorage.js";import"./yup.module.js";import"./regex.js";import"./array.js";import"./upperFirst.js";const W=x=>{const t=g(),{data:s,isHombre:B,isMoreThanOne:h}=t,{strPlural:d,toWord:c,printAnual:i}=t,{sumGastos:l,sumIngresos:m,sumTotalIngresos:p}=t,{cpa:o}=f.exports.useContext(U);return e("div",{className:`${a.content} ${x.className||""}`,children:r("div",{className:a.flexColumn,children:[e(A,{}),e(E,{receptor:"Bank of china"}),e(O,{dirigido:"Estimados se\xF1ores"}),r("p",{className:a.parrafo,children:["El suscrito,"," ",e("span",{className:a.textUpperBold,children:o==null?void 0:o.nombre}),", con c\xE9dula de identidad personal No."," ",e("span",{className:a.textUpperBold,children:o==null?void 0:o.cedula}),", Contador",(o==null?void 0:o.genero)==="FEMENINO"?"a":""," en Ejercicio, debidamente"," ","registrado en el Departamento de Licencias con la licencia C.P.A. #",e("span",{children:o==null?void 0:o.numero}),";"]}),e("span",{className:a.titleCenter,children:"Certifico"}),r("p",{className:a.parrafo,children:["Que,"," ",r("span",{className:a.textUpperBold,children:[s.nombre_encargado," ",s.apellido_encargado]}),", ",e("span",{children:B?"var\xF3n":"mujer"}),", mayor de edad, con c\xE9dula de identidad personal N\xB0"," ",e("span",{className:a.textUpperBold,children:s.identificacion_encargado}),", ",e("strong",{children:"PERCIBE"})," un"," ",r("strong",{children:["INGRESO ORDINARIO ",Boolean(Number(i))===!0?"":"PROMEDIO BRUTO"," ",Boolean(Number(i))===!0?"ANUAL":"MENSUAL"]})," de"," ",r("span",{className:a.textUpperBold,children:[n(m)," (",c(`${m}`)," BALBOAS CON"," ",n(m).slice(-2),"/100)"]})," ",Boolean(Number(i))===!0?e(u,{}):r(u,{children:["y gastos ",Boolean(Number(i))===!0?"anuales":"mensuales"," de"," ",r("span",{className:a.textUpperBold,children:[n(l)," (",c(`${l}`)," BALBOAS CON"," ",n(l).slice(-2),"/100)"]}),", para un ingreso Neto ",Boolean(Number(i))===!0?"Anual":"Mensual"," de"," ",r("span",{className:a.textUpperBold,children:[n(p)," (",c(`${p}`)," ","BALBOAS CON ",n(p).slice(-2),"/100)"]})]}),", como ",e("span",{children:s.cargo_encargado})," ",h?"de los":"del"," establecimiento",d," ","comercial",h?"es":""," denominado",d," ",e(b,{})," dedicado",d," a la"," ",e("span",{className:a.lowerCase,children:e(_,{})}),"; cuyo inicio de operaciones es el"," ",r("span",{children:[N(s.negocios[0].fecha_aviso_op,"dd")," de"," ",N(s.negocios[0].fecha_aviso_op,"MMMM")," de"," ",N(s.negocios[0].fecha_aviso_op,"yyyy")]}),"."]}),Boolean(Number(s.abrir_cuenta))===!0?r("p",{className:a.parrafo,children:["Esta certificaci\xF3n se extiende para realizar tr\xE1mites de apertura de"," ","una cuenta de dep\xF3sito y punto de venta."]}):e(u,{}),e("p",{className:a.parrafo,children:"Agradeci\xE9ndoles la atenci\xF3n brindada, queda de ustedes."}),e(C,{}),e(F,{})]})})};export{W as default};
