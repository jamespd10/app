import{L as h}from"./Loader.js";import{ap as u,j as a,a as r,F as d}from"./index.js";import"./BootstrapTooltip.js";import{u as v}from"./useFirstFetch.js";import"./SpeedDial.module.js";import"./Modal.js";import"./SelectedCard.js";import{f as o}from"./string.helper.js";import{S as e}from"./Stack.js";import{P as g}from"./Paper.js";import{T as i}from"./Typography.js";import{D as l}from"./Divider.js";import{A as c}from"./Alert.js";import"./Grid.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./isHostComponent.js";import"./Grow.js";import"./useAsyncRetry.js";import"./useAsync.js";import"./useHttpService.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Fade.js";import"./Modal2.js";import"./IconButton.js";import"./ButtonBase.js";import"./Warning.js";import"./CheckCircle.js";import"./DialogContent.js";import"./DialogActions.js";import"./LoadingButton.js";import"./Button.js";import"./regex.js";import"./Close.js";const nt=()=>{var s;const{id:p,cliente:m}=u(),{loading:n,value:t}=v({url:`/admin/negocios/${p}/${m}/proformas/datos`});return a(e,{component:g,variant:"outlined",marginTop:1,padding:1,direction:"column",children:[n&&r(h,{}),!n&&t&&t.status!==201&&r(i,{textAlign:"center",variant:"h5",children:(s=t.error)==null?void 0:s.message}),!n&&t&&t.status===201&&t.data&&a(e,{divider:r(l,{}),spacing:1,children:[r(i,{variant:"h5",fontWeight:"bold",color:"green",children:t.data.nombre_negocio}),a(e,{direction:"row",spacing:1,children:[a(i,{variant:"subtitle1",children:[r("strong",{children:"Cliente:"})," ",r("span",{style:{textTransform:"uppercase"},children:t.data.nom_cliente})]}),a(i,{variant:"subtitle1",children:[r("strong",{children:"RUC:"})," ",t.data.ruc]}),t.data.dv&&t.data.dv!==""&&a(i,{variant:"subtitle1",children:[r("strong",{children:"DV:"})," ",t.data.dv]})]}),t.data.aviso_operacion&&t.data.aviso_operacion!==""&&a(i,{variant:"subtitle1",children:[r("strong",{children:"Aviso de Operaci\xF3n:"})," ",t.data.aviso_operacion]}),t.data.representante&&t.data.representante!==""&&a(i,{variant:"subtitle1",children:[r("strong",{children:"Representante:"})," ",t.data.representante]}),a(i,{variant:"subtitle1",children:[r("strong",{children:"Ruta:"})," ",t.data.ruta]}),t.data.id&&a(e,{divider:r(l,{}),spacing:1,children:[a(e,{direction:"row",flexWrap:"nowrap",justifyContent:"space-between",children:[a(i,{variant:"subtitle1",children:[r("strong",{children:"D\xE9cimo:"})," ",o(t.data.decimo)]}),a(i,{variant:"subtitle1",children:[r("strong",{children:"Vacaciones:"})," ",o(t.data.vacaciones)]})]}),a(e,{direction:"row",flexWrap:"nowrap",justifyContent:"space-between",children:[a(i,{variant:"subtitle1",children:[r("strong",{children:"ITBMS:"})," ",o(t.data.itbms)]}),a(i,{variant:"subtitle1",children:[r("strong",{children:"Formulario de retenci\xF3n ITBMS:"})," ",o(t.data.formulario_retencion_itbms)]})]}),a(e,{direction:"row",flexWrap:"nowrap",justifyContent:"space-between",children:[a(i,{variant:"subtitle1",children:[r("strong",{children:"SIPE:"})," ",o(t.data.sipe)]}),a(i,{variant:"subtitle1",children:[r("strong",{children:"Total:"})," ",o(t.data.total)]})]})]}),t.data.total_proformas>0&&r(d,{children:a(c,{severity:"error",variant:"outlined",children:["El negocio seleccionado tiene un total de"," ",r("strong",{children:t.data.total_proformas})," proforma",t.data.total_proformas===1?"":"s"," ",r("strong",{})," realizadas en el mes actual"]})}),t.data.total_proformas===0&&r(d,{children:r(c,{severity:"success",variant:"outlined",children:"El negocio seleccionado no tiene proformas realizadas en el mes actual"})})]})]})};export{nt as default};
