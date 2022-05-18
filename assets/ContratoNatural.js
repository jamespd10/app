import{S as a}from"./SpanWidth.js";import{h as m,m as b,n as d,f as l,j as i}from"./date.helper.js";import{n as p}from"./numberToString.js";import{b as s,f as y}from"./string.helper.js";import{j as o,a as t,F as n,r as f}from"./index.js";import"./index13.js";import"./index14.js";import"./regex.js";const _=e=>{var x;return o("div",{style:{display:"flex",flexDirection:"column"},children:[o("p",{style:{margin:"7px 0 7px 0",padding:0},children:["Entre los suscritos, a saber:"," ",t(a,{style:{textTransform:"uppercase",borderBottom:"1px solid black"},text:e.nombre_rep}),", mayor de edad, de nacionalidad"," ",t(a,{style:{textTransform:"uppercase",borderBottom:"1px solid black"},text:e.nacionalidad_owner}),", con c\xE9dula de identidad personal No."," ",t(a,{style:{textTransform:"uppercase",borderBottom:"1px solid black"},text:e.identificacion_rep}),", D.V."," ",t(a,{style:{textTransform:"uppercase",borderBottom:"1px solid black"},text:e.dv}),", representante legal/propietario del establecimiento comercial denominado"," ",t(a,{style:{textTransform:"uppercase",borderBottom:"1px solid black"},text:e.nombre_negocio}),", cuya actividad ec\xF3nomica es"," ",t(a,{style:{textTransform:"uppercase",borderBottom:"1px solid black"},text:e.actividad}),", con el Aviso de Operaci\xF3n No."," ",t(a,{style:{textTransform:"uppercase",borderBottom:"1px solid black"},text:e.aviso_operacion})," ","con direcci\xF3n en"," ",t(a,{style:{textTransform:"uppercase",borderBottom:"1px solid black"},text:[e.provincia,e.distrito,e.corregimiento,e.direccion].filter(Boolean).join(", ")})," ","y n\xFAmero de tel\xE9fono"," ",t(a,{style:{textTransform:"uppercase",borderBottom:"1px solid black"},text:e.telefono_negocio}),", el n\xFAmero de trabajadores que laboran en la empresa es de"," ",t(a,{style:{textTransform:"uppercase",borderBottom:"1px solid black"},text:`${e.n_empleados}`}),", por una parte, quien en adelante se llamar\xE1"," ",t("span",{style:{fontWeight:"bold"},children:"EL EMPLEADOR"}),"; y"," ",t(a,{style:{textTransform:"uppercase",borderBottom:"1px solid black"},text:`${e.nombre} ${e.apellido}`}),", de nacionalidad"," ",t(a,{style:{textTransform:"uppercase",borderBottom:"1px solid black"},text:e.nacionalidad}),", mayor de edad, con c\xE9dula de identidad personal No."," ",t(a,{style:{textTransform:"uppercase",borderBottom:"1px solid black"},text:e.identificacion}),", Edad"," ",t(a,{style:{textTransform:"uppercase",borderBottom:"1px solid black"},text:`${e.edad}`}),", Sexo"," ",t(a,{style:{textTransform:"uppercase",borderBottom:"1px solid black"},text:e.genero}),", Estado Civil"," ",t(a,{style:{textTransform:"uppercase",borderBottom:"1px solid black"},text:e.estado_civil}),", quien reside en"," ",t(a,{style:{textTransform:"uppercase",borderBottom:"1px solid black"},text:e.direccion_contrato})," ","con n\xFAmero de tel\xE9fono"," ",t(a,{style:{textTransform:"uppercase",borderBottom:"1px solid black"},text:e.telefono}),", las personas que dependen o viven conmigo:"," ",t(a,{style:{textTransform:"uppercase",borderBottom:"1px solid black"},text:e.dependientes&&Array.isArray(e.dependientes)&&e.dependientes.length>0?e.dependientes.map((r,c)=>`${r.nombre} ${r.apellido}`).join(", "):"*"}),", ","y seguro social No."," ",t(a,{style:{textTransform:"uppercase",borderBottom:"1px solid black"},text:e.seguro}),", por otra parte, quien en adelante se llamar\xE1"," ",t("span",{style:{fontWeight:"bold"},children:"EL TRABAJADOR"}),", se celebra el presente Contrato de Trabajo sujeto a las siguientes cl\xE1usulas:"]}),o("p",{style:{margin:"7px 0 7px 0",padding:0},children:[t("span",{style:{fontWeight:"bold"},children:"PRIMERO:"})," ",t("span",{style:{fontWeight:"bold"},children:"EL EMPLEADOR"}),", se compromete a dar empleo a ",t("span",{style:{fontWeight:"bold"},children:"EL TRABAJADOR"})," ","en el establecimiento comercial denominado"," ",t(a,{style:{textTransform:"uppercase",borderBottom:"1px solid black"},text:e.nombre_negocio}),"."]}),o("p",{style:{margin:"7px 0 7px 0",padding:0},children:[t("span",{style:{fontWeight:"bold"},children:"SEGUNDO:"})," El presente Contrato de Trabajo es por tiempo"," ",t(a,{style:{textTransform:"uppercase",borderBottom:"1px solid black"},text:Number(e.definido)===1?"DEFINIDO":"INDEFINIDO"}),", el cual comienza a regir a partir del d\xEDa"," ",t(a,{style:{textTransform:"uppercase",borderBottom:"1px solid black"},text:m(`${e.fecha_ini}`,"dd - MMMM - yyyy")})," ",Number(e.definido)===1?o(n,{children:["y finalizar\xE1 el d\xEDa"," ",t(a,{style:{textTransform:"uppercase",borderBottom:"1px solid black"},text:m(`${e.fecha_fin}`,"dd - MMMM - yyyy")}),". Es por un t\xE9rmino de"," ",t(a,{style:{textTransform:"uppercase",borderBottom:"1px solid black"},text:p(b(e.fecha_ini,e.fecha_fin)).trim()}),"(",b(e.fecha_ini,e.fecha_fin),") meses en total"]}):"","."]}),o("p",{style:{margin:"7px 0 7px 0",padding:0},children:[t("span",{style:{fontWeight:"bold"},children:"TERCERO:"})," EL TRABAJADOR, desempe\xF1ar\xE1 el cargo de:"," ",t(a,{style:{textTransform:"uppercase",borderBottom:"1px solid black"},text:e.cargo}),"."]}),e.tiempo_proba?o("p",{style:{margin:"7px 0 7px 0",padding:0},children:[t("span",{style:{fontWeight:"bold"},children:"CUARTO:"})," El per\xEDodo de prueba es de"," ",t(a,{style:{textTransform:"uppercase",borderBottom:"1px solid black"},text:s(e.tiempo_proba)==="1"?"UN":s(e.tiempo_proba)==="2"?"DOS":"TRES"})," ","(",s(e.tiempo_proba),")"," ",s(e.tiempo_proba)==="1"?"mes":"meses",", por lo tanto, dicho per\xEDodo queda sujeto a lo establecido en el art\xEDculo 78 del C\xF3digo de Trabajo, modificado en la Ley 44 del 12 de agosto de 1995."]}):null,o("p",{style:{margin:"7px 0 7px 0",padding:0},children:[o("span",{style:{fontWeight:"bold"},children:[e.tiempo_proba?"QUINTO":"CUARTO",":"]})," ","La jornada de trabajo es de"," ",t(a,{style:{textTransform:"uppercase",borderBottom:"1px solid black"},text:(x=p(e.horas))==null?void 0:x.trim()})," ","(",e.horas,") horas diaras con derecho a un d\xEDa libre semanal, de preferencia los d\xEDas"," ",t(a,{style:{textTransform:"uppercase",borderBottom:"1px solid black"},text:e.dia_libre}),"."]}),o("p",{style:{margin:"7px 0 7px 0",padding:0},children:[o("span",{style:{fontWeight:"bold"},children:[e.tiempo_proba?"SEXTO":"QUINTO",":"]})," ","El turno de las labores inicia desde:"," ",e.laborales.map((r,c)=>o(f.exports.Fragment,{children:[c>0?t(n,{children:", de "}):null,t(a,{style:{borderBottom:"1px solid black"},text:d(`${r.entrada1}`)})," ","a"," ",t(a,{style:{borderBottom:"1px solid black"},text:d(`${r.salida1}`)}),", y de"," ",t(a,{style:{borderBottom:"1px solid black"},text:d(`${r.entrada2}`)})," ","a"," ",t(a,{style:{borderBottom:"1px solid black"},text:d(`${r.salida2}`)})]},`${r.entrada1}`+c)),"; o de acuerdo a las circunstancias de la empresa. Dentro de su jornada laboral tiene un per\xEDodo de descanso de"," ",t(a,{style:{borderBottom:"1px solid black"},text:`${e.descanso}`})," ",Number(e.descanso)>=1?t(n,{children:"hora(s)"}):t(n,{children:"minutos"}),"."]}),o("p",{style:{margin:"7px 0 7px 0",padding:0},children:[o("span",{style:{fontWeight:"bold"},children:[e.tiempo_proba?"SEPTIMO":"SEXTO",":"]})," ","El salario pactado es de"," ",t(a,{style:{borderBottom:"1px solid black"},text:y(e.salario)})," ","pagaderos los d\xEDas"," ",t(a,{style:{borderBottom:"1px solid black"},text:e.dia_pago})," ","de cada"," ",t(a,{style:{borderBottom:"1px solid black"},text:e.forma_pago}),", en efectivo en el mismo lugar de trabajo."]}),o("p",{style:{margin:"7px 0 7px 0",padding:0},children:[o("span",{style:{fontWeight:"bold"},children:[e.tiempo_proba?"OCTAVO":"SEPTIMO",":"]})," ",t("span",{style:{fontWeight:"bold"},children:"EL TRABAJADOR"})," se obliga a acatar las instrucciones impartidas por sus jefes inmediatos y efectuar\xE1 sus labores con la intensidad, cuidado, esmero y eficacia necesaria que exige el desempe\xF1o de sus labores; y cumplir\xE1 con las obligaciones y prohibiciones establecidas en los art\xEDculos 126 y 127 del C\xF3digo de Trabajo reformado por la Ley 44 del 12 de agosto de 1995."]}),o("p",{style:{margin:"7px 0 7px 0",padding:0},children:["En fe de lo anterior, ambas partes firman el presente contrato en tres ejemplares, en Panam\xE1, a los"," ",t(a,{style:{borderBottom:"1px solid black"},text:l(i(),"dd")})," ","d\xEDas del mes de"," ",t(a,{style:{borderBottom:"1px solid black"},text:l(i(),"MMMM")})," ","del a\xF1o ",l(i(),"yyyy").substring(0,2),t(a,{style:{borderBottom:"1px solid black"},text:l(i(),"yy")}),"."]})]})};export{_ as default};
