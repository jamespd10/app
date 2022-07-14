import{r as f,j as p,a as e}from"./index.js";import{s as o}from"./FormularioRealizar.js";import{c as m}from"./fields.module.js";import{T as i}from"./TextInput.js";import{C as a}from"./CustomDecimal.js";import{f as I}from"./string.helper.js";import{F as x}from"./ContainerFormulario.js";import"./ErrorIcon.js";import"./StyledGridOverlay.js";import"./Box.js";import"./Typography.js";import"./Loader.js";import"./Grid.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./index54.js";import"./BootstrapModalTitle.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Fade.js";import"./Modal2.js";import"./isHostComponent.js";import"./useControlled.js";import"./Portal.js";import"./Paper.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useIsFocusVisible.js";import"./IconButton.js";import"./ButtonBase.js";import"./Paid.js";import"./BootstrapDivContent.js";import"./Divider.js";import"./index18.js";import"./HeaderTitle.js";import"./StyledSpeedDial.js";import"./Assignment.js";import"./FabButtonAction.js";import"./react-is.production.min.js";import"./AssignmentRounded.js";import"./Tooltip.js";import"./Popper.js";import"./Grow.js";import"./SpeedDial.module.js";import"./Stack.js";import"./index31.js";import"./DialogActions.js";import"./Button.js";import"./TextField.js";import"./useFormControl.js";import"./formControlState.js";import"./List.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";import"./react-number-format.es.js";import"./regex.js";import"./useForm.js";import"./object.helper.js";import"./array.js";import"./upperFirst.js";import"./Lazy.js";import"./useGetDefaultValues.js";const Lt=()=>{var d,v,c,h;const{form:b}=f.exports.useContext(x),{formState:N,errors:t,onInputChange:s}=b,{venta_7:l,venta_10:n,venta_15:r,ventas:u}=N,C=f.exports.useMemo(()=>Number(u)-(Number(l)/.07+Number(n)/.1+Number(r)/.15),[l,n,r,u]);return p("div",{className:`${o.paper} ${o.item}`,children:[e("span",{className:o.titleItem,children:"Ventas"}),p("div",{className:m.field,children:[e(i,{label:"Total 7% de ventas",size:"small",fullWidth:!0,disabled:!0,InputLabelProps:{shrink:!0},value:Number(l)/.07,InputProps:{inputComponent:a}}),e(i,{label:"7% de ventas",name:"venta_7",size:"small",fullWidth:!0,error:!!(t!=null&&t.venta_7),helperText:(d=t==null?void 0:t.venta_7)==null?void 0:d.message,value:l,onChange:s,InputProps:{inputComponent:a}})]}),p("div",{className:m.field,children:[e(i,{label:"Total 10% de ventas",size:"small",fullWidth:!0,disabled:!0,InputLabelProps:{shrink:!0},value:Number(n)/.1,InputProps:{inputComponent:a}}),e(i,{label:"10% de ventas",name:"venta_10",size:"small",fullWidth:!0,error:!!(t!=null&&t.venta_10),helperText:(v=t==null?void 0:t.venta_10)==null?void 0:v.message,value:n,onChange:s,InputProps:{inputComponent:a}})]}),p("div",{className:m.field,children:[e(i,{label:"Total 15% de ventas",size:"small",fullWidth:!0,disabled:!0,InputLabelProps:{shrink:!0},value:Number(r)/.15,InputProps:{inputComponent:a}}),e(i,{label:"15% de ventas",name:"venta_15",size:"small",fullWidth:!0,error:!!(t!=null&&t.venta_15),helperText:(c=t==null?void 0:t.venta_15)==null?void 0:c.message,value:r,onChange:s,InputProps:{inputComponent:a}})]}),e("div",{className:m.field,children:e(i,{label:"Ventas exentas",size:"small",fullWidth:!0,value:C,disabled:!0,InputProps:{inputComponent:a}})}),p("div",{className:`${m.field} ${m.between}`,children:[e("div",{className:m.fieldColumn,children:e("span",{className:o.titleItem,children:e(i,{label:"Total de ventas",name:"ventas",size:"small",fullWidth:!0,error:!!(t!=null&&t.ventas),helperText:(h=t==null?void 0:t.ventas)==null?void 0:h.message,value:u,onChange:s,InputProps:{inputComponent:a}})})}),p("div",{className:m.fieldColumn,children:[e("span",{className:o.titleItem,children:"Total de impuestos"}),e("span",{className:o.titleItem,children:I(Number(l)+Number(n)+Number(r))})]})]})]})};export{Lt as default};
