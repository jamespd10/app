import{r as v,j as a,a as e}from"./index.js";import{s as i}from"./FormularioRealizar.js";import{c as m}from"./fields.module.js";import{T as p}from"./TextInput.js";import{C as o}from"./CustomDecimal.js";import{f as C}from"./string.helper.js";import{F as x}from"./ContainerFormulario.js";import"./ErrorIcon.js";import"./StyledGridOverlay.js";import"./Box.js";import"./Typography.js";import"./Loader.js";import"./Grid.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./index51.js";import"./BootstrapModalTitle.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Modal2.js";import"./isHostComponent.js";import"./useControlled.js";import"./Portal.js";import"./Paper.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useIsFocusVisible.js";import"./IconButton.js";import"./ButtonBase.js";import"./Paid.js";import"./BootstrapDivContent.js";import"./Divider.js";import"./index18.js";import"./HeaderTitle.js";import"./StyledSpeedDial.js";import"./Assignment.js";import"./FabButtonAction.js";import"./react-is.production.min.js";import"./AssignmentRounded.js";import"./Tooltip.js";import"./Popper.js";import"./Grow.js";import"./ContentProvider.js";import"./useModal.js";import"./SpeedDial.module.js";import"./Stack.js";import"./index30.js";import"./Button.js";import"./TextField.js";import"./List.js";import"./GlobalStyles.js";import"./react-number-format.es.js";import"./regex.js";import"./useForm.js";import"./object.helper.js";import"./array.js";import"./upperFirst.js";import"./Lazy.js";import"./useGetDefaultValues.js";const Lt=()=>{var d,h,b,f,N;const{form:I}=v.exports.useContext(x),{errors:t,formState:_,onInputChange:r}=I,{compra_7:l,compra_10:s,compra_15:n,compra_exnt:c,compra_import:u}=_;return a("div",{className:`${i.paper} ${i.item}`,children:[e("span",{className:i.titleItem,children:"Compras"}),a("div",{className:m.field,children:[e(p,{label:"7% de compras",name:"compra_7",size:"small",fullWidth:!0,error:!!(t!=null&&t.compra_7),helperText:(d=t==null?void 0:t.compra_7)==null?void 0:d.message,value:l,onChange:r,InputProps:{inputComponent:o}}),e(p,{label:"Total 7% de compras",size:"small",fullWidth:!0,disabled:!0,InputLabelProps:{shrink:!0},value:Number(l)*.07,InputProps:{inputComponent:o}})]}),a("div",{className:m.field,children:[e(p,{label:"7% de compras importadas",name:"compra_import",size:"small",fullWidth:!0,error:!!(t!=null&&t.compra_import),helperText:(h=t==null?void 0:t.compra_import)==null?void 0:h.message,value:u,onChange:r,InputProps:{inputComponent:o}}),e(p,{label:"Total 7% de compras importadas",size:"small",fullWidth:!0,disabled:!0,InputLabelProps:{shrink:!0},value:Number(u)*.07,InputProps:{inputComponent:o}})]}),a("div",{className:m.field,children:[e(p,{label:"10% de compras",name:"compra_10",size:"small",fullWidth:!0,error:!!(t!=null&&t.compra_10),helperText:(b=t==null?void 0:t.compra_10)==null?void 0:b.message,value:s,onChange:r,InputProps:{inputComponent:o}}),e(p,{label:"Total 10% de compras",size:"small",fullWidth:!0,disabled:!0,InputLabelProps:{shrink:!0},value:Number(s)*.1,InputProps:{inputComponent:o}})]}),a("div",{className:m.field,children:[e(p,{label:"15% de compras",name:"compra_15",size:"small",fullWidth:!0,error:!!(t!=null&&t.compra_15),helperText:(f=t==null?void 0:t.compra_15)==null?void 0:f.message,value:n,onChange:r,InputProps:{inputComponent:o}}),e(p,{label:"Total 15% de compras",size:"small",fullWidth:!0,disabled:!0,InputLabelProps:{shrink:!0},value:Number(n)*.15,InputProps:{inputComponent:o}})]}),e("div",{className:m.field,children:e(p,{label:"Compras exentas",name:"compra_exnt",size:"small",fullWidth:!0,error:!!(t!=null&&t.compra_exnt),helperText:(N=t==null?void 0:t.compra_exnt)==null?void 0:N.message,value:c,onChange:r,InputProps:{inputComponent:o}})}),a("div",{className:`${m.field} ${m.between}`,children:[a("div",{className:m.fieldColumn,children:[e("span",{className:i.titleItem,children:"total de compras"}),e("span",{className:i.titleItem,children:C(Number(l)+Number(s)+Number(n)+Number(c)+Number(u))})]}),a("div",{className:m.fieldColumn,children:[e("span",{className:i.titleItem,children:"total de impuestos"}),e("span",{className:i.titleItem,children:C(Number(l)*.07+Number(s)*.1+Number(n)*.15+Number(u)*.07)})]})]})]})};export{Lt as default};
