var F=Object.defineProperty,y=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var c=(t,r,e)=>r in t?F(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,p=(t,r)=>{for(var e in r||(r={}))j.call(r,e)&&c(t,e,r[e]);if(n)for(var e of n(r))k.call(r,e)&&c(t,e,r[e]);return t},u=(t,r)=>y(t,D(r));import{r as i,q as m,j as _,F as O,a as o}from"./index.js";import{F as P}from"./array.js";import A from"./StepperForm.js";import{u as I}from"./useStepper.js";import{d as R}from"./declaracionesSchema.js";import{B as V}from"./BackgroundLoader.js";import{L as x}from"./Loader.js";import"./BootstrapTooltip.js";import"./jwt-decode.esm.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import"./platform.js";import"./Modal2.js";import{C as z}from"./Card.js";import"./upperFirst.js";import"./Grid.js";import"./extendSxProp.js";import"./Typography.js";import"./Box.js";import"./createSvgIcon.js";import"./Button.js";import"./ButtonBase.js";import"./useIsFocusVisible.js";import"./Tooltip.js";import"./Portal.js";import"./useControlled.js";import"./isHostComponent.js";import"./Grow.js";import"./useModal.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./LoadingButton.js";import"./Backdrop.js";import"./Modal.js";import"./Paper.js";import"./IconButton.js";import"./Error.js";import"./useFetch.js";import"./useHttpService.js";import"./Lazy.js";import"./regex.js";const B=i.exports.lazy(()=>m(()=>import("./FieldsEditDeclaracion.js"),["assets/FieldsEditDeclaracion.js","assets/array.js","assets/index.js","assets/index5.css","assets/upperFirst.js","assets/DecimalInput.js","assets/TextInput.js","assets/TextField.js","assets/FormHelperText.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Menu.js","assets/Modal.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/SelectHookForm.js","assets/Box.js","assets/extendSxProp.js","assets/MenuItem.js","assets/ButtonBase.js","assets/useIsFocusVisible.js","assets/listItemIconClasses.js","assets/Divider.js","assets/listItemTextClasses.js","assets/usePrevious.js","assets/CustomTable.js","assets/Search.js","assets/jsx-runtime_commonjs-proxy.js","assets/Clear.js","assets/InputAdornment.js","assets/Typography.js","assets/IconButton.js","assets/Grid.js","assets/FormGroup.js","assets/FormControlLabel.js","assets/Checkbox.js","assets/SkipNextOutlined.js","assets/Pagination.js","assets/useAsyncRetry.js","assets/Button.js","assets/Loader.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/jwt-decode.esm.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal2.js","assets/Close2.js","assets/LoadingButton.js","assets/Error.js","assets/platform.js","assets/Stack.js","assets/LinearProgress.js"])),T=i.exports.lazy(()=>m(()=>import("./FieldsRotulos.js"),["assets/FieldsRotulos.js","assets/TextInput.js","assets/index.js","assets/index5.css","assets/TextField.js","assets/FormHelperText.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Menu.js","assets/Modal.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/array.js","assets/upperFirst.js","assets/CustomTable.js","assets/Search.js","assets/jsx-runtime_commonjs-proxy.js","assets/useIsFocusVisible.js","assets/Clear.js","assets/Box.js","assets/extendSxProp.js","assets/InputAdornment.js","assets/Typography.js","assets/IconButton.js","assets/ButtonBase.js","assets/Grid.js","assets/FormGroup.js","assets/FormControlLabel.js","assets/Checkbox.js","assets/SkipNextOutlined.js","assets/Pagination.js","assets/useAsyncRetry.js","assets/Button.js","assets/Loader.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/jwt-decode.esm.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal2.js","assets/Close2.js","assets/LoadingButton.js","assets/Error.js","assets/platform.js","assets/Stack.js","assets/LinearProgress.js","assets/Help.js"])),C=i.exports.lazy(()=>m(()=>import("./ModalEditDeclaracion.js"),["assets/ModalEditDeclaracion.js","assets/index.js","assets/index5.css"])),jt=t=>{var l,d;const r=R,{activeStep:e,form:s,handleBack:f,handleNextStep:h,isLoading:b,res:g,modalState:v,setHide:E,handleSubmit:L,modalError:S}=I({schema:r,fields:[{names:Object.keys(r.fields)}],url:`/admin/declaraciones-municipales/${t.id}/edit`,defaultValues:{rubros:(l=t.rubros)==null?void 0:l.map(a=>({actividad:a.actividad,porcentaje:a.porcentaje})),rotulos:t.rotulos&&t.rotulos.length>0?(d=t.rotulos)==null?void 0:d.map(a=>({rotulo:a.rotulo,texto:a.texto})):[{rotulo:void 0,texto:void 0}],dv:t.dv,no_contribuyente:t.no_contribuyente,total_ingresos:t.total_ingresos_sin_licor,total_licor:t.total_ingresos_licor,municipio:t.municipio}});return _(O,{children:[o(z,{variant:"outlined",sx:{p:1,mt:2},children:o(P,u(p({},s),{children:o(A,{activeStep:e,handleBack:f,sendLabel:"Guardar",sentLabel:"Guardado",disabledLast:!0,state:S,sentLabelImage:"\xA1Declaraci\xF3n guardada!",steps:["Datos generales"],handleNext:h,errors:Object.keys(s.formState.errors).length,children:[_(i.exports.Fragment,{children:[o(i.exports.Suspense,{fallback:o(x,{}),children:o(B,{})}),o(i.exports.Suspense,{fallback:o(x,{}),children:o(T,{})})]},"Datos-generales")]})}))}),o(V,{open:b}),o(i.exports.Suspense,{fallback:o("div",{}),children:o(C,{modalState:v,setHide:E,res:g,handleSubmit:L,setEdit:t.setEdit,retry:t.retry})})]})};export{jt as default};
