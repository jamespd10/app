import{r as x,j as o,a as e,aw as p,F as f}from"./index.js";import{s as a}from"./formularios.module.js";import{u as g,F as B,R as E,D as O,N as C,a as F,b as A}from"./Negocios2.js";import{a as _}from"./index14.js";import{f as i}from"./string.helper.js";import{A as y}from"./Actividades.js";import"./Formularios.js";import"./HeaderTitle.js";import"./Typography.js";import"./Divider.js";import"./Loader.js";import"./Grid.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./useLocalStorage.js";import"./array.js";import"./upperFirst.js";import"./regex.js";const H=N=>{const n=g(),{data:r,isHombre:h,isMoreThanOne:u}=n,{strPlural:t,toWord:d}=n,{sumGastos:c,sumIngresos:l,sumTotalIngresos:m}=n,{cpa:s}=x.exports.useContext(_);return o("div",{className:`${a.content} ${N.className||""}`,children:[o("div",{className:a.flexColumn,children:[e(B,{}),e(E,{receptor:"Bank of china"}),e(O,{dirigido:"Estimados se\xF1ores"}),o("p",{className:a.parrafo,children:["El suscrito,"," ",e("span",{className:a.textUpperBold,children:s==null?void 0:s.nombre}),", con c\xE9dula de identidad personal No."," ",e("span",{className:a.textUpperBold,children:s==null?void 0:s.cedula}),", Contador",(s==null?void 0:s.genero)==="FEMENINO"?"a":""," en Ejercicio, debidamente"," ","registrado en el Departamento de Licencias con la licencia C.P.A. #",e("span",{children:s==null?void 0:s.numero}),";"]}),e("span",{className:a.titleCenter,children:"Certifico"}),o("p",{className:a.parrafo,children:["Que,"," ",o("span",{className:a.textUpperBold,children:[r.nombre_encargado," ",r.apellido_encargado]}),", ",e("span",{children:h?"var\xF3n":"mujer"}),", mayor de edad, con c\xE9dula de identidad personal N\xB0"," ",e("span",{className:a.textUpperBold,children:r.identificacion_encargado}),", ",e("strong",{children:"PERCIBE"})," un"," ",e("strong",{children:"INGRESO ORDINARIO PROMEDIO BRUTO MENSUAL"})," de"," ",o("span",{className:a.textUpperBold,children:[i(l)," (",d(`${l}`)," BALBOAS CON"," ",i(l).slice(-2),"/100)"]})," ","y gastos mensuales de"," ",o("span",{className:a.textUpperBold,children:[i(c)," (",d(`${c}`)," BALBOAS CON"," ",i(c).slice(-2),"/100)"]}),", para un ingreso Neto Mensual de"," ",o("span",{className:a.textUpperBold,children:[i(m)," (",d(`${m}`)," ","BALBOAS CON ",i(m).slice(-2),"/100)"]}),", como ",e("span",{children:r.cargo_encargado})," ",u?"de los":"del"," establecimiento",t," ","comercial",u?"es":""," denominado",t," ",e(C,{})," dedicado",t," a la"," ",e("span",{className:a.lowerCase,children:e(y,{})}),"; cuyo inicio de operaciones es el"," ",o("span",{children:[p(r.negocios[0].fecha_aviso_op,"dd")," de"," ",p(r.negocios[0].fecha_aviso_op,"MMMM")," de"," ",p(r.negocios[0].fecha_aviso_op,"yyyy")]}),"."]}),Boolean(Number(r.abrir_cuenta))===!0?o("p",{className:a.parrafo,children:["Esta certificaci\xF3n se extiende para realizar tr\xE1mites de apertura de"," ","una cuenta de dep\xF3sito y punto de venta."]}):e(f,{}),e("p",{className:a.parrafo,children:"Agradeci\xE9ndoles la atenci\xF3n brindada, queda de ustedes."}),e(F,{})]}),e(A,{})]})};export{H as default};
