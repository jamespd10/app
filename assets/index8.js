var F=Object.defineProperty,b=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var n=(o,t,r)=>t in o?F(o,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[t]=r,d=(o,t)=>{for(var r in t||(t={}))C.call(t,r)&&n(o,r,t[r]);if(s)for(var r of s(t))B.call(t,r)&&n(o,r,t[r]);return o},l=(o,t)=>b(o,v(t));import{F as A}from"./array.js";import{ak as L,j,F as k,a as i}from"./index.js";import{B as D}from"./BackgroundLoader.js";import G from"./StepperForm.js";import{H as R}from"./HeaderTitle.js";import y from"./Modal.js";import{u as N}from"./useStepper.js";import{e as c,D as H}from"./editGeneralesSchema.js";import{C as O}from"./Card.js";import"./upperFirst.js";import"./Backdrop.js";import"./BootstrapTooltip.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./isHostComponent.js";import"./Grow.js";import"./Grid.js";import"./Typography.js";import"./ContentProvider.js";import"./useModal.js";import"./SpeedDial.module.js";import"./SelectedCard.js";import"./ButtonBase.js";import"./Box.js";import"./createSvgIcon.js";import"./Button.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./LoadingButton.js";import"./Modal2.js";import"./Paper.js";import"./IconButton.js";import"./Error.js";import"./Divider.js";import"./useFetch.js";import"./useHttpService.js";import"./PhoneInput.js";import"./TextInput.js";import"./TextField.js";import"./FormHelperText.js";import"./react-is.production.min.js";import"./List.js";import"./GlobalStyles.js";import"./react-number-format.es.js";import"./SelectHookForm.js";import"./MenuItem.js";import"./listItemIconClasses.js";import"./listItemTextClasses.js";import"./constantsLists.js";import"./Nacionalidad.js";import"./AutocompleteServer.js";import"./Autocomplete.js";import"./Close.js";import"./Chip.js";import"./ListItem.js";import"./ListItemText.js";import"./DireccionProvider.js";import"./CheckBoxOutlineBlank.js";import"./Checkbox.js";import"./FormGroup.js";import"./FormControlLabel.js";import"./string.helper.js";import"./regex.js";const Qt=()=>{var m;const{activeStep:o,form:t,handleBack:r,handleNextStep:u,isLoading:g,res:e,modalState:f,setHide:a,handleSubmit:h,handleReset:x}=N({schema:c,fields:[{names:Object.keys(c.fields)}],url:"/admin/clientes/create",defaultValues:{provincia:null,distrito:null,corregimiento:null}}),S=L();return j(k,{children:[i(R,{message:"Nuevo cliente"}),i(O,{variant:"outlined",sx:{p:1,mt:2},children:i(A,l(d({},t),{children:i(G,{activeStep:o,handleBack:r,sendLabel:"Guardar",sentLabel:"Guardado",finishedAction:x,finishedActionText:"Agregar otro cliente",sentLabelImage:"Cliente guardado!",steps:["Datos generales"],handleNext:u,disabledLast:!0,errors:Object.keys(t.formState.errors).length,children:[i(H,{},"Datos-generales")]})}))}),i(D,{open:g}),i(y,{state:f,title:"\xA1Atenci\xF3n!",setHide:a,body:e?e&&e.data?e.data.message+". \xBFDesea agregar negocios?":(m=e.error)==null?void 0:m.message:"\xBFRealmente desea guardar el cliente?",cancelBotton:{actionFunction:a,text:e?"Cerrar":"Cancelar"},type:e&&e.status===201?"SUCCESS":"ERROR",actionButton:e?e&&e.status===201?{actionFunction:()=>{var p;return S(`/clientes/${(p=e.data)==null?void 0:p.id}/agregar`)},text:"Si"}:void 0:{actionFunction:h,text:"Guardar"}})]})};export{Qt as default};
