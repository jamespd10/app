import{ac as p,r as T,j as r,a as t,F as m}from"./index.js";import{L as w}from"./Loader.js";import"./BootstrapTooltip.js";import"./jwt-decode.esm.js";import{u as j}from"./useFirstFetch.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import"./Modal2.js";import"./platform.js";import{f as n}from"./string.helper.js";import{u as C}from"./array.js";import{S as B}from"./index36.js";import{P as D}from"./Paper.js";import{T as a}from"./Typography.js";import{D as i}from"./Divider.js";import{A as u}from"./Alert.js";import"./Grid.js";import"./extendSxProp.js";import"./Tooltip.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./isHostComponent.js";import"./Grow.js";import"./useAsyncRetry.js";import"./useHttpService.js";import"./constants.js";import"./useModal.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./IconButton.js";import"./ButtonBase.js";import"./Error.js";import"./Backdrop.js";import"./Modal.js";import"./Button.js";import"./regex.js";import"./upperFirst.js";import"./useFetchPagination.js";import"./useList.js";import"./usePrevious.js";import"./Close.js";const vt=()=>{var d;const{id:g,cliente:h}=p(),c=T.exports.useContext(B),{factura:o}=p(),{loading:l,value:e}=j({url:`/admin/negocios/${g}/${c.cliente?c.cliente.id:h}/fact-alterna/datos`,params:{tipo_factura:o==null?void 0:o.toUpperCase()}}),{watch:s}=C(),f=s("aviso"),v=s("renta_natural"),y=s("renta_juridica"),x=s("monto_ventas"),_=s("seguro_educativo"),b=s("impuesto_complementario");return r(D,{variant:"outlined",sx:{p:1,mt:1},children:[l&&t(w,{}),!l&&e&&e.status!==201&&t("div",{style:{display:"flex",width:"100%",justifyContent:"center",textAlign:"center"},children:t(a,{variant:"h5",children:(d=e.error)==null?void 0:d.message})}),!l&&e&&e.status===201&&e.data&&r("div",{style:{display:"flex",flexDirection:"column",width:"100%"},children:[t(a,{variant:"h5",style:{fontWeight:"bold",color:"green"},children:e.data.nombre_negocio}),t(i,{style:{marginTop:10,marginBottom:10}}),r(a,{variant:"subtitle1",children:[t("strong",{children:"Cliente:"})," ",t("span",{style:{textTransform:"uppercase"},children:e.data.nom_cliente})]}),t(i,{style:{marginTop:10,marginBottom:10}}),r(a,{variant:"subtitle1",children:[t("strong",{children:"RUC:"})," ",e.data.ruc," ",t("strong",{style:{marginLeft:10},children:"DV:"})," ",e.data.dv]}),t(i,{style:{marginTop:10,marginBottom:10}}),r(a,{variant:"subtitle1",children:[t("strong",{children:"Representante:"})," ",e.data.representante]}),t(i,{style:{marginTop:10,marginBottom:10}}),r(a,{variant:"subtitle1",children:[t("strong",{children:"Ruta:"})," ",e.data.ruta]}),t(i,{style:{marginTop:10,marginBottom:10}}),o!=="renta"&&r(a,{variant:"subtitle1",children:[t("strong",{children:"Total de ingresos:"})," ",n(e.data.total_ingresos)]}),o==="renta"&&r(m,{children:[r("div",{style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",justifyContent:"space-between"},children:[r(a,{variant:"subtitle1",children:[t("strong",{children:"Monto en ventas:"})," ",n(x||e.data.monto_ventas)]}),r(a,{variant:"subtitle1",children:[t("strong",{children:"Aviso:"})," ",n(f||e.data.aviso)]})]}),t(i,{style:{marginTop:10,marginBottom:10}}),r("div",{style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",justifyContent:"space-between"},children:[r(a,{variant:"subtitle1",children:[t("strong",{children:"Renta natural:"})," ",n(v||e.data.renta_natural)]}),r(a,{variant:"subtitle1",children:[t("strong",{children:"Seguro educativo:"})," ",n(_||e.data.seguro_educativo)]})]}),t(i,{style:{marginTop:10,marginBottom:10}}),r("div",{style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",justifyContent:"space-between"},children:[r(a,{variant:"subtitle1",children:[t("strong",{children:"Renta jur\xEDdica:"})," ",n(y||e.data.renta_juridica)]}),r(a,{variant:"subtitle1",children:[t("strong",{children:"Impuesto complementario:"})," ",n(b||e.data.impuesto_complementario)]})]})]}),e.data.total_facturas_alternas>0?r(m,{children:[t(i,{style:{marginTop:10,marginBottom:10}}),r(u,{severity:"error",variant:"outlined",children:["El negocio seleccionado tiene un total de"," ",t("strong",{children:e.data.total_facturas_alternas})," factura",e.data.total_facturas_alternas===1?"":"s"," (",t("strong",{style:{textTransform:"uppercase"},children:o}),") realizada",e.data.total_facturas_alternas===1?"":"s"," ","en el a\xF1o actual"]})]}):r(m,{children:[t(i,{style:{marginTop:10,marginBottom:10}}),r(u,{severity:"success",variant:"outlined",children:["El negocio seleccionado no tiene facturas (",t("strong",{style:{textTransform:"uppercase"},children:o}),") realizadas en el a\xF1o actual"]})]})]})]})};export{vt as default};
