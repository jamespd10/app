import{r as e,aD as l,aw as p,a as t,j as s}from"./index.js";import{F as d}from"./ContainerFormulario.js";import{C as f}from"./index53.js";import{f as u}from"./string.helper.js";import{s as x}from"./FormularioRealizar.js";import{A as i}from"./Alert.js";import"./Loader.js";import"./Grid.js";import"./Typography.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./useForm.js";import"./object.helper.js";import"./array.js";import"./upperFirst.js";import"./regex.js";import"./Lazy.js";import"./useGetDefaultValues.js";import"./BootstrapModal.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Fade.js";import"./Modal2.js";import"./isHostComponent.js";import"./useId.js";import"./Portal.js";import"./Paper.js";import"./BootstrapModalTitle.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./DialogTitle.js";import"./dialogTitleClasses.js";import"./IconButton.js";import"./ButtonBase.js";import"./Paid.js";import"./BootstrapDivContent.js";import"./Divider.js";import"./index18.js";import"./HeaderTitle.js";import"./StyledSpeedDial.js";import"./Assignment.js";import"./FabButtonAction.js";import"./react-is.production.min.js";import"./AssignmentRounded.js";import"./Tooltip.js";import"./Popper.js";import"./Grow.js";import"./SpeedDial.module.js";import"./Stack.js";import"./index33.js";import"./DialogActions.js";import"./Button.js";import"./ErrorIcon.js";import"./StyledGridOverlay.js";import"./Box.js";import"./Close.js";const wo=()=>{const{mes:m}=e.exports.useContext(f),{fetcherItbms:a}=e.exports.useContext(d),[c,,o,r]=a,n=e.exports.useMemo(()=>o?l(new Date(p(m,"yyyy-MM-01")),new Date(p(o.mes_correspondiente,"yyyy-MM-01"))):-1,[o,m]);return c?t(i,{variant:"outlined",icon:!1,color:"info",children:"Cargando..."}):o&&!r&&n===0?s(i,{variant:"outlined",severity:"warning",color:"warning",children:["Se encontr\xF3 informaci\xF3n de ",t("strong",{children:"formulario 430"})," del mes actual seleccionado"]}):o&&!r&&n===1&&Number(o.total)<0?s(i,{variant:"outlined",severity:"warning",color:"warning",children:["No se encontr\xF3 informaci\xF3n de ",t("strong",{children:"formulario 430"})," del mes actual seleccionado, pero se encontr\xF3 un acumulado del mes anterior de"," ",t("strong",{className:x.totalError,children:u(o.total)})]}):t(i,{variant:"outlined",severity:"success",color:"success",children:(r==null?void 0:r.message)||"No se encontr\xF3 formulario 430 del mes anterior al seleccionado"})};export{wo as default};
