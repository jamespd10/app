import{r as B,a as e,j as o,F as p,al as u}from"./index.js";import{s as a}from"./formularios.module.js";import{u as f,F as b,R as E,D as A,N as C,a as F,b as O}from"./Negocios3.js";import{a as U}from"./index16.js";import{f as i}from"./string.helper.js";import{A as _}from"./Actividades.js";import"./FormulariosProvider.js";import"./HeaderTitle.js";import"./Typography.js";import"./Divider.js";import"./Loader.js";import"./Grid.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./yup.module.js";import"./regex.js";import"./array.js";const H=g=>{const d=f(),{data:s,isHombre:x,isMoreThanOne:N}=d,{strPlural:l,toWord:c,printAnual:n}=d,{sumIngresos:t,sumGastos:h,sumTotalIngresos:m}=d,{cpa:r}=B.exports.useContext(U);return e("div",{className:`${a.content} ${g.className||""}`,children:o("div",{className:a.flexColumn,children:[e(b,{}),e(E,{receptor:"St. georges bank",ciudad:"Ciudad"}),e(A,{dirigido:"Estimados se\xF1ores"}),o("p",{className:`${a.parrafo} ${a.tab}`,children:["El suscrito,"," ",e("span",{className:a.textUpperBold,children:r==null?void 0:r.nombre}),", con c\xE9dula de identidad personal No."," ",e("span",{className:a.textUpperBold,children:r==null?void 0:r.cedula}),", Contador",(r==null?void 0:r.genero)==="FEMENINO"?"a":""," en Ejercicio, debidamente"," ","registrada en el Departamento de Licencias con la licencia C.P.A. #",e("span",{children:r==null?void 0:r.numero}),";"]}),e("span",{className:a.titleCenter,children:"Certifico"}),o("p",{className:`${a.parrafo} ${a.tab}`,children:["Que,"," ",o("span",{className:a.textUpperBold,children:[s.nombre_encargado," ",s.apellido_encargado]}),", ",e("span",{children:x?"var\xF3n":"mujer"}),", mayor de edad, con c\xE9dula de identidad personal N\xB0"," ",e("span",{className:a.textUpperBold,children:s.identificacion_encargado}),", ",e("strong",{children:"RECIBE"})," ",o("strong",{children:[Boolean(Number(n))===!0?"":"un PROMEDIO DE"," INGRESOS ",Boolean(Number(n))===!0?"":"BRUTOS"," ",Boolean(Number(n))===!0?"ANUALES":"MENSUALES"]})," por la suma de"," ",o("span",{className:a.textUpperBold,children:[i(t)," (",c(`${t}`)," BALBOAS CON"," ",i(t).slice(-2),"/100)"]})," ",Boolean(Number(n))===!0?e(p,{}):o(p,{children:["y gastos ",Boolean(Number(n))===!0?"anuales":"mensuales"," de"," ",o("span",{className:a.textUpperBold,children:[i(h)," (",c(`${h}`)," BALBOAS CON"," ",i(t).slice(-2),"/100)"]})," ","para un ingreso Neto ",Boolean(Number(n))===!0?"Anual":"Mensual"," de"," ",o("span",{className:a.textUpperBold,children:[i(m)," (",c(`${m}`)," ","BALBOAS CON ",i(m).slice(-2),"/100)"]})]}),", como ",e("span",{children:s.cargo_encargado})," ",N?"de los":"del"," establecimiento",l," ","comercial",N?"es":""," denominado",l," ",e(C,{})," dedicado",l," a la"," ",e("span",{className:a.lowerCase,children:e(_,{})}),"; cuyo inicio de operaciones es el"," ",o("span",{children:[u(s.negocios[0].fecha_aviso_op,"dd")," de"," ",u(s.negocios[0].fecha_aviso_op,"MMMM")," de"," ",u(s.negocios[0].fecha_aviso_op,"yyyy")]}),"."]}),Boolean(Number(s.abrir_cuenta))===!0?o("p",{className:a.parrafo,children:["Esta certificaci\xF3n se extiende para realizar tr\xE1mites de apertura de"," ","una cuenta de dep\xF3sito y punto de venta."]}):e(p,{}),e("p",{className:a.parrafo,children:"Agradeci\xE9ndoles la atenci\xF3n brindada, queda de ustedes."}),e(F,{}),e(O,{})]})})};export{H as default};
