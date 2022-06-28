var L=Object.defineProperty,S=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var n=(r,e,t)=>e in r?L(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,d=(r,e)=>{for(var t in e||(e={}))D.call(e,t)&&n(r,t,e[t]);if(s)for(var t of s(e))k.call(e,t)&&n(r,t,e[t]);return r},p=(r,e)=>S(r,y(e));import{r as i,b as a,ak as E,j as l,F as j,a as o}from"./index.js";import{F as A}from"./array.js";import O from"./StepperForm.js";import{u as P}from"./useStepper.js";import{d as R}from"./declaracionesSchema.js";import{B as z}from"./BackgroundLoader.js";import{L as c}from"./Loader.js";import"./BootstrapTooltip.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import"./SelectedCard.js";import{C as I}from"./Card.js";import"./upperFirst.js";import"./Grid.js";import"./Typography.js";import"./Modal.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Modal2.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./IconButton.js";import"./ButtonBase.js";import"./Error.js";import"./DialogContent.js";import"./LoadingButton.js";import"./Button.js";import"./Box.js";import"./Tooltip.js";import"./Popper.js";import"./appendOwnerState.js";import"./Grow.js";import"./useModal.js";import"./useFetch.js";import"./useHttpService.js";import"./Lazy.js";import"./regex.js";const T=i.exports.lazy(()=>a(()=>import("./FieldsDeclaraciones.js"),["assets/FieldsDeclaraciones.js","assets/array.js","assets/index.js","assets/index5.css","assets/upperFirst.js","assets/DecimalInput.js","assets/TextInput.js","assets/TextField.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/SelectHookForm.js","assets/Box.js","assets/Typography.js","assets/MenuItem.js","assets/ButtonBase.js","assets/useIsFocusVisible.js","assets/listItemIconClasses.js","assets/Divider.js","assets/listItemTextClasses.js","assets/usePrevious.js","assets/CustomTable.js","assets/Search.js","assets/jsx-runtime_commonjs-proxy.js","assets/Clear.js","assets/InputAdornment.js","assets/IconButton.js","assets/Grid.js","assets/FormGroup.js","assets/FormControlLabel.js","assets/Checkbox.js","assets/SkipNextOutlined.js","assets/Pagination.js","assets/TableRow.js","assets/Button.js","assets/Loader.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/appendOwnerState.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal.js","assets/Close2.js","assets/ModalTransition.js","assets/Error.js","assets/DialogContent.js","assets/LoadingButton.js","assets/SelectedCard.js","assets/Stack.js","assets/LinearProgress.js"])),V=i.exports.lazy(()=>a(()=>import("./FieldsRotulos2.js"),["assets/FieldsRotulos2.js","assets/TextInput.js","assets/index.js","assets/index5.css","assets/TextField.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/array.js","assets/upperFirst.js","assets/CustomTable.js","assets/Search.js","assets/jsx-runtime_commonjs-proxy.js","assets/useIsFocusVisible.js","assets/Clear.js","assets/Box.js","assets/Typography.js","assets/InputAdornment.js","assets/IconButton.js","assets/ButtonBase.js","assets/Grid.js","assets/FormGroup.js","assets/FormControlLabel.js","assets/Checkbox.js","assets/SkipNextOutlined.js","assets/Pagination.js","assets/TableRow.js","assets/Button.js","assets/Loader.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/appendOwnerState.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal.js","assets/Close2.js","assets/ModalTransition.js","assets/Error.js","assets/DialogContent.js","assets/LoadingButton.js","assets/SelectedCard.js","assets/Stack.js","assets/LinearProgress.js","assets/Help.js"])),B=i.exports.lazy(()=>a(()=>import("./ModalDeclaraciones.js"),["assets/ModalDeclaraciones.js","assets/index.js","assets/index5.css"])),jr=r=>{const e=R,{activeStep:t,form:m,handleBack:u,handleNextStep:_,isLoading:f,res:v,modalState:x,setHide:h,handleSubmit:b,modalError:g}=P({schema:e,fields:[{names:Object.keys(e.fields)}],url:`/admin/negocios/${r.id}/${r.id_cliente}/add-declaracion-municipales`,defaultValues:{rubros:[{actividad:void 0,porcentaje:void 0}],rotulos:[{rotulo:void 0,texto:void 0}],dv:r.dv,no_contribuyente:r.no_contribuyente}}),F=E();return l(j,{children:[o(I,{variant:"outlined",sx:{p:1,mt:2},children:o(A,p(d({},m),{children:o(O,{activeStep:t,handleBack:u,sendLabel:"Guardar",sentLabel:"Guardado",disabledLast:!0,finishedActionText:"Realizar otra declaraci\xF3n",finishedAction:()=>{F("/negocios?dm=1")},state:g,sentLabelImage:"\xA1Declaraci\xF3n guardada!",steps:["Datos generales"],handleNext:_,errors:Object.keys(m.formState.errors).length,children:[l(i.exports.Fragment,{children:[o(i.exports.Suspense,{fallback:o(c,{}),children:o(T,{dv:r.dv,no_contribuyente:r.no_contribuyente})}),o(i.exports.Suspense,{fallback:o(c,{}),children:o(V,{})})]},"Datos-generales")]})}))}),o(z,{open:f}),o(i.exports.Suspense,{fallback:o("div",{}),children:o(B,{modalState:x,setHide:h,res:v,handleSubmit:b})})]})};export{jr as default};
