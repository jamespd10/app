var L=Object.defineProperty,S=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var n=(e,r,t)=>r in e?L(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))D.call(r,t)&&n(e,t,r[t]);if(m)for(var t of m(r))j.call(r,t)&&n(e,t,r[t]);return e},p=(e,r)=>S(e,y(r));import{r as i,b as a,aj as k,j as l,F as E,a as o}from"./index.js";import{F as A}from"./array.js";import O from"./StepperForm.js";import{u as P}from"./useStepper.js";import{d as R}from"./declaracionesSchema.js";import{B as z}from"./BackgroundLoader.js";import{L as c}from"./Loader.js";import"./BootstrapTooltip.js";import"./jwt-decode.esm.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import"./platform.js";import"./Modal.js";import{C as I}from"./Card.js";import"./upperFirst.js";import"./Grid.js";import"./Typography.js";import"./Box.js";import"./createSvgIcon.js";import"./Button.js";import"./ButtonBase.js";import"./useIsFocusVisible.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./useControlled.js";import"./isHostComponent.js";import"./Grow.js";import"./useModal.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./LoadingButton.js";import"./Backdrop.js";import"./Modal2.js";import"./Paper.js";import"./IconButton.js";import"./Error.js";import"./useFetch.js";import"./useHttpService.js";import"./Lazy.js";import"./regex.js";const T=i.exports.lazy(()=>a(()=>import("./FieldsDeclaraciones.js"),["assets/FieldsDeclaraciones.js","assets/array.js","assets/index.js","assets/index.css","assets/upperFirst.js","assets/DecimalInput.js","assets/TextInput.js","assets/TextField.js","assets/FormHelperText.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/SelectHookForm.js","assets/Box.js","assets/Typography.js","assets/MenuItem.js","assets/ButtonBase.js","assets/useIsFocusVisible.js","assets/listItemIconClasses.js","assets/Divider.js","assets/listItemTextClasses.js","assets/usePrevious.js","assets/CustomTable.js","assets/Search.js","assets/jsx-runtime_commonjs-proxy.js","assets/Clear.js","assets/InputAdornment.js","assets/IconButton.js","assets/Grid.js","assets/FormGroup.js","assets/FormControlLabel.js","assets/Checkbox.js","assets/SkipNextOutlined.js","assets/Pagination.js","assets/useAsyncRetry.js","assets/TableRow.js","assets/Button.js","assets/Loader.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/jwt-decode.esm.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal.js","assets/Close2.js","assets/LoadingButton.js","assets/Error.js","assets/platform.js","assets/Stack.js","assets/LinearProgress.js"])),V=i.exports.lazy(()=>a(()=>import("./FieldsRotulos2.js"),["assets/FieldsRotulos2.js","assets/TextInput.js","assets/index.js","assets/index.css","assets/TextField.js","assets/FormHelperText.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/array.js","assets/upperFirst.js","assets/CustomTable.js","assets/Search.js","assets/jsx-runtime_commonjs-proxy.js","assets/useIsFocusVisible.js","assets/Clear.js","assets/Box.js","assets/Typography.js","assets/InputAdornment.js","assets/IconButton.js","assets/ButtonBase.js","assets/Grid.js","assets/FormGroup.js","assets/FormControlLabel.js","assets/Checkbox.js","assets/SkipNextOutlined.js","assets/Pagination.js","assets/useAsyncRetry.js","assets/TableRow.js","assets/Button.js","assets/Loader.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/jwt-decode.esm.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal.js","assets/Close2.js","assets/LoadingButton.js","assets/Error.js","assets/platform.js","assets/Stack.js","assets/LinearProgress.js","assets/Help.js"])),B=i.exports.lazy(()=>a(()=>import("./ModalDeclaraciones.js"),["assets/ModalDeclaraciones.js","assets/index.js","assets/index.css"])),je=e=>{const r=R,{activeStep:t,form:s,handleBack:u,handleNextStep:_,isLoading:f,res:v,modalState:x,setHide:h,handleSubmit:b,modalError:g}=P({schema:r,fields:[{names:Object.keys(r.fields)}],url:`/admin/negocios/${e.id}/${e.id_cliente}/add-declaracion-municipales`,defaultValues:{rubros:[{actividad:void 0,porcentaje:void 0}],rotulos:[{rotulo:void 0,texto:void 0}],dv:e.dv,no_contribuyente:e.no_contribuyente}}),F=k();return l(E,{children:[o(I,{variant:"outlined",sx:{p:1,mt:2},children:o(A,p(d({},s),{children:o(O,{activeStep:t,handleBack:u,sendLabel:"Guardar",sentLabel:"Guardado",disabledLast:!0,finishedActionText:"Realizar otra declaraci\xF3n",finishedAction:()=>{F("/negocios?dm=1")},state:g,sentLabelImage:"\xA1Declaraci\xF3n guardada!",steps:["Datos generales"],handleNext:_,errors:Object.keys(s.formState.errors).length,children:[l(i.exports.Fragment,{children:[o(i.exports.Suspense,{fallback:o(c,{}),children:o(T,{dv:e.dv,no_contribuyente:e.no_contribuyente})}),o(i.exports.Suspense,{fallback:o(c,{}),children:o(V,{})})]},"Datos-generales")]})}))}),o(z,{open:f}),o(i.exports.Suspense,{fallback:o("div",{}),children:o(B,{modalState:x,setHide:h,res:v,handleSubmit:b})})]})};export{je as default};
