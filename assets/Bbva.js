import{r as N,a as e,j as s,F as x}from"./index.js";import{s as a}from"./formularios.module.js";import{u as h,F as f,R as b,D as B,N as g,a as F,b as E}from"./Negocios3.js";import{a as C}from"./index14.js";import{f as l}from"./string.helper.js";import"./FormulariosProvider.js";import"./HeaderTitle.js";import"./Typography.js";import"./Divider.js";import"./Loader.js";import"./Grid.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./yup.module.js";import"./regex.js";import"./array.js";const q=c=>{const t=h(),{data:o,isHombre:m,isMoreThanOne:p}=t,{strPlural:i,toWord:u,printAnual:d}=t,{sumTotalIngresos:n}=t,{cpa:r}=N.exports.useContext(C);return e("div",{className:`${a.content} ${c.className||""}`,children:s("div",{className:a.flexColumn,children:[e(f,{}),e(b,{receptor:"Bbva"}),e(B,{}),s("p",{className:`${a.parrafo} ${a.tab}`,children:["El suscrito,"," ",e("span",{className:a.textUpperBold,children:r==null?void 0:r.nombre}),", con c\xE9dula de identidad personal No."," ",e("span",{className:a.textUpperBold,children:r==null?void 0:r.cedula}),", debidamente registrada en el Departamento de Licencias con la licencia C.P.A. #",e("span",{children:r==null?void 0:r.numero}),";"]}),e("span",{className:a.titleCenter,children:"Certifico"}),s("p",{className:a.parrafo,children:["Que"," ",s("span",{className:a.textUpperBold,children:[o.nombre_encargado," ",o.apellido_encargado]}),", ",m?"var\xF3n":"mujer",", mayor de edad, con c\xE9dula de identidad personal No."," ",e("span",{className:a.textUpperBold,children:o.identificacion_encargado}),", ",e("strong",{children:"PERCIBE"})," un"," ",s("strong",{children:["INGRESO ORDINARIO ",Boolean(Number(d))===!0?"":"PROMEDIO BRUTO"," ",Boolean(Number(d))===!0?"ANUAL":"MENSUAL"]})," de"," ",s("span",{className:a.textUpperBold,children:[l(n)," (",u(`${n}`)," ","BALBOAS CON ",l(n).slice(-2),"/100)"]}),", por ventas y prestaci\xF3n de servicios en"," ",p?"los":"el"," negocio",i," denominado",i," ",e(g,{disableLastDot:!0,className:a.textCapi})]}),Boolean(Number(o.abrir_cuenta))===!0?s("p",{className:a.parrafo,children:["Esta certificaci\xF3n se extiende para realizar tr\xE1mites de apertura de"," ","una cuenta de dep\xF3sito y punto de venta."]}):e(x,{}),e("p",{className:a.parrafo,children:"Agradeci\xE9ndoles la atenci\xF3n brindada, queda de ustedes."}),e(F,{}),e(E,{})]})})};export{q as default};
