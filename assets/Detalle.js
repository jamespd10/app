import{r as i,j as e,F as _,a as s}from"./index.js";import{f as n}from"./string.helper.js";import{a as d}from"./ViewProvider.js";import"./regex.js";const h="_detalle_a84rv_1",v="_row_a84rv_7",D="_span_a84rv_16",y="_spanDot_a84rv_21",b="_money_a84rv_27",g="_moneyTotal_a84rv_31",T="_spacing_a84rv_35",x="_totalDetalles_a84rv_40",w="_totalDeducciones_a84rv_45",$="_totalRecibido_a84rv_49",R="_moneyRecibido_a84rv_53";var a={detalle:h,row:v,span:D,spanDot:y,money:b,moneyTotal:g,spacing:T,totalDetalles:x,totalDeducciones:w,totalRecibido:$,moneyRecibido:R};const f=()=>{const{decimo:l,vacaciones:r,preaviso:o,indemnizacion:c,prima_antiguedad:t,seguro_social:m,seguro_educativo:p}=i.exports.useContext(d),N=i.exports.useMemo(()=>Number(l)+Number(r)+Number(o)+Number(c)+Number(t),[l,r,o,c,t]),u=i.exports.useMemo(()=>Number(m)+Number(p),[m,p]);return{subTotal:N,deducciones:u}},C=()=>{const{seguro_social:l,seguro_educativo:r}=i.exports.useContext(d),{deducciones:o,subTotal:c}=f();return e(_,{children:[e("div",{className:`${a.row} ${a.spacing} ${a.totalDetalles}`,children:[s("span",{className:a.span,children:"SUB-TOTAL"}),s("span",{className:a.spanDot}),s("strong",{className:`${a.moneyTotal} ${a.money}`,children:n(c)})]}),e("div",{className:a.row,children:[s("span",{className:a.span,children:"Seguro Social"}),s("span",{className:a.spanDot}),s("span",{className:a.money,children:n(l)})]}),e("div",{className:a.row,children:[s("span",{className:a.span,children:"Seguro Educativo"}),s("span",{className:a.spanDot}),s("span",{className:a.money,children:n(r)})]}),e("div",{className:`${a.row} ${a.spacing} ${a.totalDeducciones}`,children:[s("span",{className:a.span,children:"Total de deducciones"}),s("span",{className:a.spanDot}),s("strong",{className:`${a.moneyTotal} ${a.money}`,children:n(o)})]}),e("div",{className:`${a.row} ${a.totalRecibido}`,children:[s("span",{className:a.span,children:"TOTAL NETO RECIBIDO"}),s("span",{className:a.spanDot}),s("strong",{className:`${a.moneyTotal} ${a.moneyRecibido}`,children:n(Number(c)-Number(o))})]})]})},M=()=>{const{vacaciones:l,decimo:r,preaviso:o,indemnizacion:c,prima_antiguedad:t,paga_vacaciones:m}=i.exports.useContext(d);return e("div",{className:a.detalle,children:[e("div",{className:a.row,children:[s("span",{className:a.span,children:"Vacaciones proporcionales"}),s("span",{className:a.spanDot}),s("span",{className:a.money,children:Boolean(Number(m))===!1?"PAGADAS":n(l)})]}),e("div",{className:a.row,children:[s("span",{className:a.span,children:"D\xE9cimo Tercer Mes"}),s("span",{className:a.spanDot}),s("span",{className:a.money,children:n(r)})]}),o&&Number(o)>0&&e("div",{className:a.row,children:[s("span",{className:a.span,children:"Preaviso"}),s("span",{className:a.spanDot}),s("span",{className:a.money,children:n(o)})]}),Number(c)>0&&e("div",{className:a.row,children:[s("span",{className:a.span,children:"Indemnizaci\xF3n"}),s("span",{className:a.spanDot}),s("span",{className:a.money,children:n(c)})]}),Number(t)>0&&e("div",{className:a.row,children:[s("span",{className:a.span,children:"Prima de antig\xFCedad"}),s("span",{className:a.spanDot}),s("span",{className:a.money,children:n(t)})]}),s(C,{})]})};export{M as default};
