import{r as p,j as e,a,al as c}from"./index.js";import{a as _}from"./ViewProvider.js";const b="_bold_1wz2u_1",N="_parrafo_1wz2u_5",x="_nombre_1wz2u_11",f="_cedula_1wz2u_12",h="_negocio_1wz2u_13",y="_ubicacion_1wz2u_14",g="_motivo_1wz2u_27",v="_motivoText_1wz2u_31";var o={bold:b,parrafo:N,nombre:x,cedula:f,negocio:h,ubicacion:y,motivo:g,motivoText:v};const T=()=>{const{tipo:n,nombre_negocio:i,nombre:s,apellido:r,identificacion:t,seguro:d,ubicacion:l,fecha_inicio:m,fecha_liquidacion:u}=p.exports.useContext(_);return e("p",{className:o.parrafo,children:["Yo,"," ",e("span",{className:o.nombre,children:[s," ",r]})," ",a("span",{}),"(a), mayor de edad, portador(a) de la c\xE9dula de identidad"," ","personal No. ",a("span",{className:o.cedula,children:t})," y"," ","seguro social ",a("span",{className:o.cedula,children:d}),". Empleado(a)"," ","del establecimiento comercial denominado"," ",e("span",{className:o.negocio,children:[n," ",i]})," ","que se encuentra ubicado en"," ",a("span",{className:o.ubicacion,children:l})," deseo dejar"," ","constancia que recib\xED por parte de mi patrono el importe correspondiente a"," ","mis prestaciones. ",a("strong",{className:o.bold,children:"(LIQUIDACION)"}),". ",a("br",{}),e("span",{className:o.motivo,children:["Por:"," ",e("span",{className:o.motivoText,children:["TERMINACION DEL CONTRATO DEL ",c(m,"dd/MM/yyyy")," ","HASTA EL ",c(u,"dd/MM/yyyy")]})]})]})};export{T as default};
