import{r as p,j as m,a as o}from"./index.js";import{f as s}from"./string.helper.js";import{T as a}from"./TextInput.js";import{s as i}from"./FormularioRealizar.js";import{c as n}from"./fields.module.js";import{C as l}from"./index51.js";import"./regex.js";import"./TextField.js";import"./useControlled.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./GlobalStyles.js";import"./emotion-react.browser.esm.js";import"./ErrorIcon.js";import"./StyledGridOverlay.js";import"./Box.js";import"./Typography.js";import"./Loader.js";import"./Grid.js";import"./CircularProgress.js";import"./BootstrapModalTitle.js";import"./ModalTransition.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./useIsFocusVisible.js";import"./IconButton.js";import"./ButtonBase.js";import"./Paid.js";import"./BootstrapDivContent.js";import"./Divider.js";import"./index18.js";import"./HeaderTitle.js";import"./StyledSpeedDial.js";import"./Assignment.js";import"./FabButtonAction.js";import"./AssignmentRounded.js";import"./Tooltip.js";import"./Popper.js";import"./ContentProvider.js";import"./useModal.js";import"./SpeedDial.module.js";import"./Stack.js";import"./index30.js";import"./Button.js";const st=()=>{const{negocios:r}=p.exports.useContext(l);return m("div",{className:`${i.paper} ${i.item}`,children:[o("span",{className:i.titleItem,children:"Retenciones"}),r.length!==0&&r.flatMap(t=>t.retenciones).map((t,e)=>t.id_agente_retenedor&&t.valor?m("div",{className:n.field,children:[o(a,{label:"Agente retenedor",size:"small",fullWidth:!0,InputProps:{readOnly:!0},InputLabelProps:{shrink:!0},value:t.agente}),o(a,{label:"Total de retenciones",size:"small",fullWidth:!0,InputProps:{readOnly:!0},InputLabelProps:{shrink:!0},value:t.valor})]},`${t.id_agente_retenedor}-${e}`):o(p.exports.Fragment,{},e)),m("span",{className:i.titleItem,children:["total de retenciones"," ",s(r.length!==0?r.flatMap(t=>t.retenciones).map(t=>Number(t.valor||0)).reduce((t,e)=>t+e):0)]})]})};export{st as default};
