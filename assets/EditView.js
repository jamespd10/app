var b=Object.defineProperty,C=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var l=(r,t,o)=>t in r?b(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,e=(r,t)=>{for(var o in t||(t={}))L.call(t,o)&&l(r,o,t[o]);if(n)for(var o of n(t))j.call(t,o)&&l(r,o,t[o]);return r},p=(r,t)=>C(r,B(t));import{r as v,j as D,F as G,a as m}from"./index.js";import{F as k}from"./array.js";import{B as y}from"./BackgroundLoader.js";import A from"./StepperForm.js";import N from"./Modal.js";import{u as R}from"./useStepper.js";import{e as c,D as O}from"./editGeneralesSchema.js";import{N as E}from"./index9.js";import{C as H}from"./Card.js";import"./upperFirst.js";import"./Backdrop.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./BootstrapTooltip.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./appendOwnerState.js";import"./isHostComponent.js";import"./Grow.js";import"./Grid.js";import"./Typography.js";import"./ContentProvider.js";import"./useModal.js";import"./SpeedDial.module.js";import"./SelectedCard.js";import"./ButtonBase.js";import"./Box.js";import"./createSvgIcon.js";import"./Button.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./ModalTransition.js";import"./Modal2.js";import"./Paper.js";import"./IconButton.js";import"./CheckCircle.js";import"./DialogContent.js";import"./LoadingButton.js";import"./useFetch.js";import"./useHttpService.js";import"./PhoneInput.js";import"./TextInput.js";import"./TextField.js";import"./react-is.production.min.js";import"./List.js";import"./GlobalStyles.js";import"./react-number-format.es.js";import"./SelectHookForm.js";import"./MenuItem.js";import"./listItemIconClasses.js";import"./Divider.js";import"./listItemTextClasses.js";import"./constantsLists.js";import"./Nacionalidad.js";import"./AutocompleteServer.js";import"./Autocomplete.js";import"./Close.js";import"./Chip.js";import"./ListItem.js";import"./ListItemText.js";import"./DireccionProvider.js";import"./CheckBoxOutlineBlank.js";import"./Checkbox.js";import"./FormGroup.js";import"./FormControlLabel.js";import"./string.helper.js";import"./regex.js";import"./Loader.js";import"./HeaderTitle.js";import"./useFirstFetch.js";import"./useAsyncRetry.js";import"./useAsync.js";import"./NotFoundResults.js";import"./useFetchPagination.js";import"./useList.js";import"./usePrevious.js";import"./Stack.js";const dr=({cliente:r,setEditing:t,retry:o})=>{var d;const u=v.exports.useContext(E),{activeStep:f,form:a,handleBack:x,handleNextStep:g,isLoading:h,res:i,modalState:S,setHide:s,handleSubmit:F}=R({schema:c,fields:[{names:Object.keys(c.fields)}],url:`/admin/clientes/${r.id}/edit`,defaultValues:p(e({},r),{direccion:r.domicilio})});return D(G,{children:[m(H,{variant:"outlined",sx:{p:1,mt:2},children:m(k,p(e({},a),{children:m(A,{activeStep:f,handleBack:x,sendLabel:"Guardar",sentLabel:"Guardado",sentLabelImage:"\xA1Datos guardados!",steps:["Datos generales"],handleNext:g,disabledLast:!0,errors:Object.keys(a.formState.errors).length,children:[m(O,{},"Datos-generales")]})}))}),m(y,{open:h}),m(N,{state:S,title:"\xA1Atenci\xF3n!",setHide:()=>{s(),i&&i.status===201&&(t(!1),o())},body:i?i&&i.data?i.data.message:(d=i.error)==null?void 0:d.message:"\xBFRealmente desea guardar los datos?",cancelBotton:{actionFunction:()=>{s(),i&&i.status===201&&(t(!1),o(),u.retry())},text:i?"Cerrar":"Cancelar"},type:i&&i.status===201?"SUCCESS":"ERROR",actionButton:i?void 0:{actionFunction:F,text:"Guardar"}})]})};export{dr as default};
