import{d as x,f as l}from"./string.helper.js";import{r as y,j as i,a as r,F as t,aw as N}from"./index.js";import{a as T}from"./ItbmsProvider.js";import{s as o}from"./header.module.js";import{D as n}from"./Divider.js";import{T as s}from"./Typography.js";import{P as R}from"./Paper.js";import"./regex.js";import"./useModal.js";import"./useFetcherEarly.js";const I=()=>{var c,m,h,p,b,a,d,v,u,f,g;const{fetcher:_}=y.exports.useContext(T),[,e]=_;return i("div",{className:o.container,children:[i("span",{className:o.negocio,children:[e==null?void 0:e.tipo," ",e==null?void 0:e.nombre_negocio]}),r(n,{}),i(s,{variant:"subtitle1",children:[r("strong",{children:"Raz\xF3n social:"})," ",r("span",{style:{textTransform:"uppercase"},children:e==null?void 0:e.nom_cliente})]}),r(n,{}),i(s,{variant:"subtitle1",children:[r("strong",{children:"RUC:"})," ",e==null?void 0:e.ruc," ",r("strong",{style:{marginLeft:10},children:"DV:"})," ",e==null?void 0:e.dv]}),r(n,{}),((e==null?void 0:e.nombre_rep)&&(e==null?void 0:e.nombre_rep)!==""||(e==null?void 0:e.apellido_rep)&&(e==null?void 0:e.apellido_rep)!=="")&&i(t,{children:[i(s,{variant:"subtitle1",children:[r("strong",{children:"Representante:"})," ",i("span",{style:{textTransform:"uppercase"},children:[e==null?void 0:e.nombre_rep," ",e==null?void 0:e.apellido_rep]})]}),r(n,{})]}),i(s,{variant:"subtitle1",children:[r("strong",{children:"Ruta:"})," ",e==null?void 0:e.ruta]}),((c=e==null?void 0:e.itbms)==null?void 0:c.fecha_enviado)&&i(t,{children:[r(n,{}),i(s,{variant:"subtitle1",children:[r("strong",{children:"Procesado:"})," ",N((m=e.itbms)==null?void 0:m.fecha_enviado,"dd/MM/yyyy h:mm aa")]})]}),((h=e==null?void 0:e.itbms)==null?void 0:h.notas)&&((p=e==null?void 0:e.itbms)==null?void 0:p.notas)!==""&&i(t,{children:[r(n,{}),i(R,{variant:"outlined",style:{padding:10},children:[r(s,{variant:"subtitle1",fontWeight:"bold",children:"Notas:"}),r(n,{}),x((b=e==null?void 0:e.itbms)==null?void 0:b.notas)]})]}),r(n,{}),i("div",{className:o.totales,children:[r("div",{className:o.flexRow,children:i(s,{variant:"subtitle1",children:[r("strong",{children:"Total de ventas: "}),r("span",{children:l((a=e==null?void 0:e.itbms)==null?void 0:a.total_venta)})]})}),r(n,{}),r("div",{className:o.flexRow,children:i(s,{variant:"subtitle1",children:[r("strong",{children:"Total de compras: "}),r("span",{children:l((d=e==null?void 0:e.itbms)==null?void 0:d.total_compra)})]})}),r(n,{}),r("div",{className:o.flexRow,children:i(s,{variant:"subtitle1",children:[r("strong",{children:"Total de retenciones: "}),r("span",{children:l((v=e==null?void 0:e.itbms)==null?void 0:v.total_retenciones)})]})}),r(n,{}),r("div",{className:o.flexRow,children:i(s,{variant:"subtitle1",children:[i("strong",{children:[e&&Number((u=e==null?void 0:e.itbms)==null?void 0:u.total)<0?"Total de saldo":"Total pagado",":"," "]}),r("span",{style:{color:e&&Number((f=e==null?void 0:e.itbms)==null?void 0:f.total)<0?"red":"black",borderBottom:"double black"},children:l((g=e==null?void 0:e.itbms)==null?void 0:g.total)})]})})]}),e&&!Boolean(Number(e.cobra_itbms))&&e.itbms&&e.itbms.total>0?r("div",{className:o.message,children:"Enviar boleta de pago"}):null]})};export{I as default};
