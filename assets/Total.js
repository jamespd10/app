import{r as p,a as i,j as a}from"./index.js";import{f as s}from"./string.helper.js";import{u as e}from"./useCalCompras.js";import{u as l}from"./useCalVentas.js";import{s as t}from"./index63.js";import"./regex.js";import"./index51.js";import"./BootstrapModalTitle.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Modal2.js";import"./isHostComponent.js";import"./useControlled.js";import"./Portal.js";import"./Paper.js";import"./Typography.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useIsFocusVisible.js";import"./IconButton.js";import"./ButtonBase.js";import"./emotion-react.browser.esm.js";import"./Paid.js";import"./BootstrapDivContent.js";import"./Divider.js";import"./index18.js";import"./HeaderTitle.js";import"./StyledSpeedDial.js";import"./Assignment.js";import"./FabButtonAction.js";import"./react-is.production.min.js";import"./AssignmentRounded.js";import"./Tooltip.js";import"./Popper.js";import"./appendOwnerState.js";import"./Grow.js";import"./ContentProvider.js";import"./useModal.js";import"./SpeedDial.module.js";import"./Stack.js";import"./Loader.js";import"./Grid.js";import"./CircularProgress.js";import"./Button.js";import"./index30.js";const rt=()=>{const{totalItbms:r}=e(),{totalItbms:m}=l(),o=p.exports.useMemo(()=>Number(m)-Number(r),[r,m]);return i("div",{className:`${t.paper} ${o<0?t.paperTotalError:t.paperTotalAll}`,children:a("span",{className:`${t.totalAll} ${o<0?t.totalError:""}`,children:["Total de ",o>=0?"itbms a pagar: ":"cr\xE9dito: ",s(o)]})})};export{rt as default};
