import{r as u,a as e,j as n,aw as N,F as x}from"./index.js";import{s as a}from"./formularios.module.js";import{u as h,F as f,R as g,D as b,N as E,a as F,b as B}from"./Negocios2.js";import{a as C}from"./index14.js";import{f as c}from"./string.helper.js";import{A as O}from"./Actividades.js";import"./Formularios.js";import"./HeaderTitle.js";import"./Typography.js";import"./Divider.js";import"./Loader.js";import"./Grid.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./useLocalStorage.js";import"./yup.module.js";import"./regex.js";import"./array.js";import"./upperFirst.js";const z=l=>{const i=h(),{data:r,isHombre:m,isMoreThanOne:t}=i,{strPlural:s,toWord:p}=i,{sumTotalIngresos:d}=i,{cpa:o}=u.exports.useContext(C);return e("div",{className:`${a.content} ${l.className||""}`,children:n("div",{className:a.flexColumn,children:[e(f,{}),e(g,{receptor:"Global bank"}),e(b,{}),n("p",{className:a.parrafo,children:["El suscrito,"," ",e("span",{className:a.textUpperBold,children:o==null?void 0:o.nombre}),", con c\xE9dula de identidad personal No."," ",e("span",{className:a.textUpperBold,children:o==null?void 0:o.cedula}),", debidamente registrado en el Departamento de Licencias con la licencia"," ","C.P.A. ",n("span",{className:a.textBold,children:["#",o==null?void 0:o.numero]}),"; encargad",(o==null?void 0:o.genero)==="FEMENINO"?"a":"o"," de la tenedur\xEDa de libros ",t?"de los":"del"," establecimiento",s," ","comercial",t?"es":""," denominado",s,","," ",e(E,{})," empresa",s," constituida",s," desde el"," ","a\xF1o ",e("span",{children:N(r.negocios[0].fecha_aviso_op,"yyyy")})]}),e("span",{className:a.titleCenter,children:"Certifico"}),n("p",{className:a.parrafo,children:["Que,"," ",n("span",{className:a.textUpperBold,children:[r.nombre_encargado," ",r.apellido_encargado]}),", ",e("span",{children:m?"var\xF3n":"mujer"}),", mayor de edad, con c\xE9dula de identidad personal N\xB0"," ",e("span",{className:a.textUpperBold,children:r.identificacion_encargado}),", PERCIBE un ",e("strong",{children:"INGRESO ORDINARIO PROMEDIO BRUTO MENSUAL"})," ","de"," ",n("span",{className:a.textUpperBold,children:[c(d)," (",p(`${d}`)," ","BALBOAS CON ",c(d).slice(-2),"/100)"]}),", como ",r.cargo_encargado," ",t?"de los":"del"," ","establecimiento",s," antes mencionado",s,", dedicado",s," al"," ",e("span",{className:a.lowerCase,children:e(O,{})}),", Ubicado en ",e("span",{children:r.negocios[0].ubicacion})]}),Boolean(Number(r.abrir_cuenta))===!0?n("p",{className:a.parrafo,children:["Esta certificaci\xF3n se extiende para realizar tr\xE1mites de apertura de"," ","una cuenta de dep\xF3sito y punto de venta."]}):e(x,{}),e("p",{className:a.parrafo,children:"Agradeci\xE9ndoles la atenci\xF3n brindada, queda de ustedes."}),e(F,{}),e(B,{})]})})};export{z as default};
