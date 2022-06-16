import{d as c,f as l}from"./string.helper.js";import{f as s}from"./date.helper.js";import{a as e,j as t,F as o}from"./index.js";import{P as d}from"./Paper.js";import{T as a}from"./Typography.js";import{D as i}from"./Divider.js";import"./regex.js";import"./index13.js";const T=n=>{const{itbms:r}=n;return e(d,{variant:"outlined",sx:{p:1,mt:1},children:t("div",{style:{display:"flex",flexDirection:"column",width:"100%"},children:[t(a,{variant:"h5",style:{fontWeight:"bold",color:"green",textTransform:"uppercase"},children:[n.tipo," ",n.nombre_negocio]}),e(i,{style:{marginTop:10,marginBottom:10}}),t(a,{variant:"subtitle1",children:[e("strong",{children:"Raz\xF3n social:"})," ",e("span",{style:{textTransform:"uppercase"},children:n.nom_cliente})]}),e(i,{style:{marginTop:10,marginBottom:10}}),t(a,{variant:"subtitle1",children:[e("strong",{children:"RUC:"})," ",n.ruc," ",e("strong",{style:{marginLeft:10},children:"DV:"})," ",n.dv]}),e(i,{style:{marginTop:10,marginBottom:10}}),(n.nombre_rep&&n.nombre_rep!==""||n.apellido_rep&&n.apellido_rep!=="")&&t(o,{children:[t(a,{variant:"subtitle1",children:[e("strong",{children:"Representante:"})," ",t("span",{style:{textTransform:"uppercase"},children:[n.nombre_rep," ",n.apellido_rep]})]}),e(i,{style:{marginTop:10,marginBottom:10}})]}),t(a,{variant:"subtitle1",children:[e("strong",{children:"Ruta:"})," ",n.ruta]}),(r==null?void 0:r.fecha_enviado)&&t(o,{children:[e(i,{style:{marginTop:10,marginBottom:10}}),t(a,{variant:"subtitle1",children:[e("strong",{children:"Procesado:"})," ",s(`${r.fecha_enviado}`,"dd/MM/yyyy h:mm aa")]})]}),(r==null?void 0:r.notas)&&(r==null?void 0:r.notas)!==""&&t(o,{children:[e(i,{style:{marginTop:10,marginBottom:10}}),t(d,{variant:"outlined",style:{padding:10},children:[e(a,{variant:"subtitle1",fontWeight:"bold",children:"Notas:"}),e(i,{}),c(r==null?void 0:r.notas)]})]}),e(i,{style:{marginTop:10,marginBottom:10}}),t("div",{style:{border:"2px solid black",borderRadius:5,padding:10},children:[e("div",{style:{display:"flex",flexDirection:"row"},children:t(a,{variant:"subtitle1",children:[e("strong",{children:"Total de ventas: "}),e("span",{children:l(r==null?void 0:r.total_venta)})]})}),e(i,{style:{marginTop:10,marginBottom:10}}),e("div",{style:{display:"flex",flexDirection:"row"},children:t(a,{variant:"subtitle1",children:[e("strong",{children:"Total de compras: "}),e("span",{children:l(r==null?void 0:r.total_compra)})]})}),e(i,{style:{marginTop:10,marginBottom:10}}),e("div",{style:{display:"flex",flexDirection:"row"},children:t(a,{variant:"subtitle1",children:[e("strong",{children:"Total de retenciones: "}),e("span",{children:l(r==null?void 0:r.total_retenciones)})]})}),e(i,{style:{marginTop:10,marginBottom:10}}),e("div",{style:{display:"flex",flexDirection:"row"},children:t(a,{variant:"subtitle1",children:[t("strong",{children:[r&&Number(r.total)<0?"Total de saldo":"Total pagado",":"," "]}),e("span",{style:{color:r&&Number(r.total)<0?"red":"black",borderBottom:"double black"},children:l(r==null?void 0:r.total)})]})})]})]})})};export{T as default};
