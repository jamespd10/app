import{r as i,a as n,j as c}from"./index.js";import{f as u}from"./string.helper.js";import{s as o}from"./FormularioRealizar.js";import{F as l}from"./ContainerFormulario.js";import"./regex.js";import"./ErrorIcon.js";import"./StyledGridOverlay.js";import"./Box.js";import"./Typography.js";import"./Loader.js";import"./Grid.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./index51.js";import"./BootstrapModalTitle.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Modal2.js";import"./isHostComponent.js";import"./useControlled.js";import"./Portal.js";import"./Paper.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useIsFocusVisible.js";import"./IconButton.js";import"./ButtonBase.js";import"./Paid.js";import"./BootstrapDivContent.js";import"./Divider.js";import"./index18.js";import"./HeaderTitle.js";import"./StyledSpeedDial.js";import"./Assignment.js";import"./FabButtonAction.js";import"./react-is.production.min.js";import"./AssignmentRounded.js";import"./Tooltip.js";import"./Popper.js";import"./appendOwnerState.js";import"./Grow.js";import"./ContentProvider.js";import"./useModal.js";import"./SpeedDial.module.js";import"./Stack.js";import"./Button.js";import"./index30.js";import"./object.helper.js";import"./array.js";import"./upperFirst.js";import"./Lazy.js";import"./useGetDefaultValues.js";const Nr=()=>{const{form:e}=i.exports.useContext(l),{formState:r}=e,t=i.exports.useMemo(()=>{const p=r.retenciones.map(m=>Number(m.valor)).reduce((m,s)=>m+s),a=Number(r.compra_10)*.1+Number(r.compra_15)*.15+Number(r.compra_7)*.07+Number(r.compra_import)+p;return Number(r.venta_7)*.07+Number(r.venta_10)*.1+Number(r.venta_15)*.15-(a+p+Number(r.acumulado))},[r]);return n("div",{className:`${o.paper} ${t<0?o.paperTotalError:o.paperTotal}`,children:c("span",{className:`${o.total} ${t<0?o.totalError:""}`,children:["Total de ",t>=0?"itbms a pagar: ":"cr\xE9dito: ",u(t)]})})};export{Nr as default};
