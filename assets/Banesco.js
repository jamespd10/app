import{r as h,a as e,j as s,aw as d,F as x}from"./index.js";import{s as a}from"./formularios.module.js";import{u as f,F as g,R as B,D as E,N as F,a as b,b as C}from"./Negocios2.js";import{a as _}from"./index14.js";import{f as p}from"./string.helper.js";import{A}from"./Actividades.js";import"./Formularios.js";import"./HeaderTitle.js";import"./Typography.js";import"./Divider.js";import"./Loader.js";import"./Grid.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./useLocalStorage.js";import"./yup.module.js";import"./regex.js";import"./array.js";import"./upperFirst.js";const Q=u=>{const n=f(),{data:r,isHombre:l,isMoreThanOne:m,printAnual:i}=n,{strPlural:t,toWord:N}=n,{sumTotalIngresos:c}=n,{cpa:o}=h.exports.useContext(_);return e("div",{className:`${a.content} ${u.className||""}`,children:s("div",{className:a.flexColumn,children:[e(g,{}),e(B,{receptor:"Banesco"}),e(E,{}),s("p",{className:a.parrafo,children:["El suscrito,"," ",e("span",{className:a.textUpperBold,children:o==null?void 0:o.nombre}),", con c\xE9dula de identidad personal No.",e("span",{className:a.textUpperBold,children:o==null?void 0:o.cedula}),". Contador",(o==null?void 0:o.genero)==="FEMENINO"?"a":""," de Ejercicio, debidamente"," ","registrado en el Departamento de Licencias con la licencia C.P.A. #",e("span",{children:o==null?void 0:o.numero}),";"]}),e("span",{className:a.titleCenter,children:"Certifico"}),s("p",{className:a.parrafo,children:["Que ",e("span",{children:l?"el se\xF1or":"la se\xF1ora"})," ",s("span",{className:a.textUpperBold,children:[r.nombre_encargado," ",r.apellido_encargado]}),", ",e("span",{children:l?"var\xF3n":"mujer"}),", mayor de edad, con c\xE9dula de identidad personal No."," ",e("span",{className:a.textUpperBold,children:r.identificacion_encargado}),", ",e("strong",{children:"RECIBIO"})," ",s("strong",{children:[Boolean(Number(i))===!0?"":"un PROMEDIO DE"," INGRESOS ",Boolean(Number(i))===!0?"":"BRUTOS"," ",Boolean(Number(i))===!0?"ANUAL":"MENSUALES"]})," por la suma de"," ",s("span",{className:a.textUpperBold,children:[p(c)," (",N(`${c}`)," ","BALBOAS CON ",p(c).slice(-2),"/100)"]}),", como ",r.cargo_encargado," ",m?"de los":"del"," ","establecimiento",t," comercial",m?"es":""," ","denominado",t," ",e(F,{})," dedicado",t," a la"," ",e("span",{className:a.lowerCase,children:e(A,{})}),", cuyo inicio de operaciones es el"," ",s("span",{children:[d(r.negocios[0].fecha_aviso_op,"dd")," de"," ",d(r.negocios[0].fecha_aviso_op,"MMMM")," de"," ",d(r.negocios[0].fecha_aviso_op,"yyyy")]}),"."]}),Boolean(Number(r.abrir_cuenta))===!0?s("p",{className:a.parrafo,children:["Esta certificaci\xF3n se extiende para realizar tr\xE1mites de apertura de"," ","una cuenta de dep\xF3sito y punto de venta."]}):e(x,{}),e("p",{className:a.parrafo,children:"Agradeci\xE9ndoles la atenci\xF3n brindada, queda de ustedes."}),e(b,{}),e(C,{})]})})};export{Q as default};
