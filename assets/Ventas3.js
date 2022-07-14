import{T as r}from"./TextInput.js";import{C as i}from"./CustomDecimal.js";import{f as n}from"./string.helper.js";import{u as h}from"./useCalVentas.js";import{s as l}from"./FormularioRealizar.js";import{c as e}from"./fields.module.js";import{j as m,a as t}from"./index.js";import"./TextField.js";import"./useFormControl.js";import"./useControlled.js";import"./formControlState.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./Fade.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";import"./emotion-react.browser.esm.js";import"./react-number-format.es.js";import"./regex.js";import"./index54.js";import"./BootstrapModalTitle.js";import"./ModalTransition.js";import"./Typography.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./useIsFocusVisible.js";import"./IconButton.js";import"./ButtonBase.js";import"./Paid.js";import"./BootstrapDivContent.js";import"./Divider.js";import"./index18.js";import"./HeaderTitle.js";import"./StyledSpeedDial.js";import"./Assignment.js";import"./FabButtonAction.js";import"./AssignmentRounded.js";import"./Tooltip.js";import"./Popper.js";import"./SpeedDial.module.js";import"./Stack.js";import"./Loader.js";import"./Grid.js";import"./CircularProgress.js";import"./index31.js";import"./DialogActions.js";import"./Button.js";import"./ErrorIcon.js";import"./StyledGridOverlay.js";import"./Box.js";const It=()=>{const o=h(),{venta_7:p,venta_10:a,venta_15:s,venta_exnt:u}=o,{total:d,totalItbms:c}=o;return m("div",{className:`${l.paper} ${l.item}`,children:[t("span",{className:l.titleItem,children:"Ventas"}),m("div",{className:e.field,children:[t(r,{label:"Total 7% de ventas",size:"small",fullWidth:!0,InputLabelProps:{shrink:!0},value:Number(p)/.07,InputProps:{inputComponent:i,readOnly:!0}}),t(r,{label:"7% de ventas",size:"small",fullWidth:!0,InputLabelProps:{shrink:!0},value:Number(p),InputProps:{inputComponent:i,readOnly:!0}})]}),m("div",{className:e.field,children:[t(r,{label:"Total 10% de ventas",size:"small",fullWidth:!0,InputLabelProps:{shrink:!0},value:Number(a)/.1,InputProps:{inputComponent:i,readOnly:!0}}),t(r,{label:"10% de ventas",size:"small",fullWidth:!0,InputLabelProps:{shrink:!0},value:Number(a),InputProps:{inputComponent:i,readOnly:!0}})]}),m("div",{className:e.field,children:[t(r,{label:"Total 15% de ventas",size:"small",fullWidth:!0,InputLabelProps:{shrink:!0},value:Number(s)/.15,InputProps:{inputComponent:i,readOnly:!0}}),t(r,{label:"15% de ventas",size:"small",fullWidth:!0,InputLabelProps:{shrink:!0},value:Number(s),InputProps:{inputComponent:i,readOnly:!0}})]}),t("div",{className:e.field,children:t(r,{label:"Ventas exentas",size:"small",fullWidth:!0,InputLabelProps:{shrink:!0},value:Number(u),InputProps:{inputComponent:i,readOnly:!0}})}),m("div",{className:`${e.field} ${e.between}`,children:[m("div",{className:e.fieldColumn,children:[t("span",{className:l.titleItem,children:"total de ventas"}),t("span",{className:l.titleItem,children:n(d)})]}),m("div",{className:e.fieldColumn,children:[t("span",{className:l.titleItem,children:"total de impuestos"}),t("span",{className:l.titleItem,children:n(c)})]})]})]})};export{It as default};
