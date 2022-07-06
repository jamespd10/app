import{T as r}from"./TextInput.js";import{C as e}from"./CustomDecimal.js";import{f as u}from"./string.helper.js";import{u as b}from"./useCalCompras.js";import{s as o}from"./FormularioRealizar.js";import{c as p}from"./fields.module.js";import{j as l,a as t}from"./index.js";import"./TextField.js";import"./useControlled.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./GlobalStyles.js";import"./emotion-react.browser.esm.js";import"./react-number-format.es.js";import"./regex.js";import"./index51.js";import"./BootstrapModalTitle.js";import"./ModalTransition.js";import"./Typography.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./useIsFocusVisible.js";import"./IconButton.js";import"./ButtonBase.js";import"./Paid.js";import"./BootstrapDivContent.js";import"./Divider.js";import"./index18.js";import"./HeaderTitle.js";import"./StyledSpeedDial.js";import"./Assignment.js";import"./FabButtonAction.js";import"./AssignmentRounded.js";import"./Tooltip.js";import"./Popper.js";import"./ContentProvider.js";import"./useModal.js";import"./SpeedDial.module.js";import"./Stack.js";import"./Loader.js";import"./Grid.js";import"./CircularProgress.js";import"./index30.js";import"./Button.js";import"./ErrorIcon.js";import"./StyledGridOverlay.js";import"./Box.js";const ft=()=>{const m=b(),{compra_10:i,compra_15:a,compra_7:s}=m,{compra_exnt:d,compra_import:n,total:c,totalItbms:h}=m;return l("div",{className:`${o.paper} ${o.item}`,children:[t("span",{className:o.titleItem,children:"Compras"}),l("div",{className:p.field,children:[t(r,{label:"7% de compras",size:"small",fullWidth:!0,InputLabelProps:{shrink:!0},value:Number(s),InputProps:{inputComponent:e,readOnly:!0}}),t(r,{label:"Total 7% de compras",size:"small",fullWidth:!0,InputLabelProps:{shrink:!0},value:Number(s)*.07,InputProps:{inputComponent:e,readOnly:!0}})]}),l("div",{className:p.field,children:[t(r,{label:"7% de compras importadas",size:"small",fullWidth:!0,InputLabelProps:{shrink:!0},value:Number(n),InputProps:{inputComponent:e,readOnly:!0}}),t(r,{label:"Total 7% de compras importadas",size:"small",fullWidth:!0,InputLabelProps:{shrink:!0},value:Number(n)*.07,InputProps:{inputComponent:e,readOnly:!0}})]}),l("div",{className:p.field,children:[t(r,{label:"10% de compras",size:"small",fullWidth:!0,InputLabelProps:{shrink:!0},value:Number(i),InputProps:{inputComponent:e,readOnly:!0}}),t(r,{label:"Total 10% de compras",size:"small",fullWidth:!0,InputLabelProps:{shrink:!0},value:Number(i)*.1,InputProps:{inputComponent:e,readOnly:!0}})]}),l("div",{className:p.field,children:[t(r,{label:"15% de compras",size:"small",fullWidth:!0,InputLabelProps:{shrink:!0},value:Number(a),InputProps:{inputComponent:e,readOnly:!0}}),t(r,{label:"Total 15% de compras",size:"small",fullWidth:!0,InputLabelProps:{shrink:!0},value:Number(a)*.15,InputProps:{inputComponent:e,readOnly:!0}})]}),t("div",{className:p.field,children:t(r,{label:"Compras exentas",size:"small",fullWidth:!0,InputLabelProps:{shrink:!0},value:Number(d),InputProps:{inputComponent:e,readOnly:!0}})}),l("div",{className:`${p.field} ${p.between}`,children:[l("div",{className:p.fieldColumn,children:[t("span",{className:o.titleItem,children:"total de compras"}),t("span",{className:o.titleItem,children:u(c)})]}),l("div",{className:p.fieldColumn,children:[t("span",{className:o.titleItem,children:"total de impuestos"}),t("span",{className:o.titleItem,children:u(h)})]})]})]})};export{ft as default};
