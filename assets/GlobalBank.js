import{r as N,a as e,j as r,al as x,F as h}from"./index.js";import{s as a}from"./formularios.module.js";import{u as f,F as b,R as g,D as B,N as E,a as F,b as A}from"./Negocios3.js";import{a as C}from"./index16.js";import{f as c}from"./string.helper.js";import{A as O}from"./Actividades.js";import"./FormulariosProvider.js";import"./HeaderTitle.js";import"./Typography.js";import"./Divider.js";import"./Loader.js";import"./Grid.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./yup.module.js";import"./regex.js";import"./array.js";const w=m=>{const t=f(),{data:s,isHombre:p,isMoreThanOne:i}=t,{strPlural:n,toWord:u,printAnual:l}=t,{sumTotalIngresos:d}=t,{cpa:o}=N.exports.useContext(C);return e("div",{className:`${a.content} ${m.className||""}`,children:r("div",{className:a.flexColumn,children:[e(b,{}),e(g,{receptor:"Global bank"}),e(B,{}),r("p",{className:a.parrafo,children:["El suscrito,"," ",e("span",{className:a.textUpperBold,children:o==null?void 0:o.nombre}),", con c\xE9dula de identidad personal No."," ",e("span",{className:a.textUpperBold,children:o==null?void 0:o.cedula}),", debidamente registrado en el Departamento de Licencias con la licencia"," ","C.P.A. ",r("span",{className:a.textBold,children:["#",o==null?void 0:o.numero]}),"; encargad",(o==null?void 0:o.genero)==="FEMENINO"?"a":"o"," de la tenedur\xEDa de libros ",i?"de los":"del"," establecimiento",n," ","comercial",i?"es":""," denominado",n,","," ",e(E,{})," empresa",n," constituida",n," desde el"," ","a\xF1o ",e("span",{children:x(s.negocios[0].fecha_aviso_op,"yyyy")})]}),e("span",{className:a.titleCenter,children:"Certifico"}),r("p",{className:a.parrafo,children:["Que,"," ",r("span",{className:a.textUpperBold,children:[s.nombre_encargado," ",s.apellido_encargado]}),", ",e("span",{children:p?"var\xF3n":"mujer"}),", mayor de edad, con c\xE9dula de identidad personal N\xB0"," ",e("span",{className:a.textUpperBold,children:s.identificacion_encargado}),", PERCIBE un ",r("strong",{children:["INGRESO ORDINARIO ",Boolean(Number(l))===!0?"":"PROMEDIO BRUTO"," ",Boolean(Number(l))===!0?"ANUAL":"MENSUAL"]})," ","de"," ",r("span",{className:a.textUpperBold,children:[c(d)," (",u(`${d}`)," ","BALBOAS CON ",c(d).slice(-2),"/100)"]}),", como ",s.cargo_encargado," ",i?"de los":"del"," ","establecimiento",n," antes mencionado",n,", dedicado",n," al"," ",e("span",{className:a.lowerCase,children:e(O,{})}),", Ubicado en ",e("span",{children:s.negocios[0].ubicacion})]}),Boolean(Number(s.abrir_cuenta))===!0?r("p",{className:a.parrafo,children:["Esta certificaci\xF3n se extiende para realizar tr\xE1mites de apertura de"," ","una cuenta de dep\xF3sito y punto de venta."]}):e(h,{}),e("p",{className:a.parrafo,children:"Agradeci\xE9ndoles la atenci\xF3n brindada, queda de ustedes."}),e(F,{}),e(A,{})]})})};export{w as default};
