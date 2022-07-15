import{r as m,a as e,j as s,aw as c,F as g}from"./index.js";import{a as E}from"./index14.js";import{s as a}from"./formularios.module.js";import{u as F,F as b,R as B,D as A,N as _,a as y,b as C}from"./Negocios3.js";import{f as U}from"./string.helper.js";import{A as M}from"./Actividades.js";import"./HeaderTitle.js";import"./Typography.js";import"./Divider.js";import"./Loader.js";import"./Grid.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./useLocalStorage.js";import"./yup.module.js";import"./regex.js";import"./array.js";import"./upperFirst.js";import"./FormulariosProvider.js";const J=p=>{const l=F(),{data:r,actividadLastDot:u,isHombre:N,isMoreThanOne:n}=l,{isSociedad:h,strPlural:t,toWord:x,printAnual:d}=l,{cpa:o}=m.exports.useContext(E);return e("div",{className:`${a.content} ${p.className||""}`,children:s("div",{className:a.flexColumn,children:[e(b,{}),e(B,{receptor:"Aseguradora anc\xF3n",ciudad:"Ciudad"}),e(A,{dirigido:"Estimados se\xF1ores"}),s("p",{className:`${a.parrafo} ${a.tab}`,children:["El suscrito,"," ",e("span",{className:a.textUpperBold,children:o==null?void 0:o.nombre}),", con c\xE9dula de identidad personal No."," ",e("span",{className:a.textUpperBold,children:o==null?void 0:o.cedula}),", Contador",(o==null?void 0:o.genero)==="FEMENINO"?"a":""," en Ejercicio, debidamente"," ","registrado en el Departamento de Licencias con la licencia C.P.A. #",e("span",{children:o==null?void 0:o.numero}),";"]}),e("span",{className:a.titleCenter,children:"Certifico"}),s("p",{className:a.parrafo,children:["Que,"," ",s("span",{className:a.textUpperBold,children:[r.nombre_encargado," ",r.apellido_encargado]}),", ",e("span",{children:N?"var\xF3n":"mujer"}),", mayor de edad, con c\xE9dula de identidad personal N\xB0"," ",e("span",{className:a.textUpperBold,children:r.identificacion_encargado}),", ",e("strong",{children:"RECIBIO"})," "," ",s("strong",{children:[Boolean(Number(d))===!0?"":"un PROMEDIO DE"," INGRESOS ",Boolean(Number(d))===!0?"":"BRUTOS"," ",Boolean(Number(d))===!0?"ANUALES":"MENSUALES"]})," por la suma de"," ",r.periodos.map((i,f)=>s(m.exports.Fragment,{children:[s("span",{className:a.textUpperBold,children:[U(i.total)," (",x(`${i.total}`),"BALBOAS CON ",`${i.total}`.slice(-2),"/100)"]}),", correspondiente al periodo ",e("span",{children:i.fecha_yy}),","]},`${i.fecha_yy}-${f+1}`))," ","como ",e("span",{children:r.cargo_encargado})," ",n?"de los":"del"," establecimiento",t," ","comercial",n?"es":""," denominado",t," ",e(_,{})," amparado",t," bajo la"," ",h?"Sociedad An\xF3nima":"Persona Natural"," ",e("span",{className:a.textUpperBold,children:r.cliente.nom_cliente}),", que se dedicaba",n?"n":""," a la"," ",e("span",{className:a.lowerCase,children:e(M,{})}),u,", cuyo inicio de operaciones fue el"," ",s("span",{children:[c(r.negocios[0].fecha_aviso_op,"dd")," de"," ",c(r.negocios[0].fecha_aviso_op,"MMMM")," de"," ",c(r.negocios[0].fecha_aviso_op,"yyyy")]}),"."]}),Boolean(Number(r.abrir_cuenta))===!0?s("p",{className:a.parrafo,children:["Esta certificaci\xF3n se extiende para realizar tr\xE1mites de apertura de"," ","una cuenta de dep\xF3sito y punto de venta."]}):e(g,{}),e("p",{className:a.parrafo,children:"Agradeci\xE9ndoles la atenci\xF3n brindada, queda de ustedes."}),e(y,{}),e(C,{})]})})};export{J as default};
