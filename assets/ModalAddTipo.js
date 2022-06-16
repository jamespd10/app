var B=Object.defineProperty,C=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var e=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var u=(t,o,r)=>o in t?B(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,h=(t,o)=>{for(var r in o||(o={}))g.call(o,r)&&u(t,r,o[r]);if(e)for(var r of e(o))f.call(o,r)&&u(t,r,o[r]);return t},x=(t,o)=>C(t,H(o));var T=(t,o)=>{var r={};for(var i in t)g.call(t,i)&&o.indexOf(i)<0&&(r[i]=t[i]);if(t!=null&&e)for(var i of e(t))o.indexOf(i)<0&&f.call(t,i)&&(r[i]=t[i]);return r};import{r as M,j as q,a as A}from"./index.js";import w from"./Modal.js";import{u as I}from"./useFetch.js";import"./jwt-decode.esm.js";import{T as L}from"./TextInput.js";import{c as N,b as O,g as P,o as W}from"./array.js";import{A as $}from"./index6.js";import{A as k}from"./Alert.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./LoadingButton.js";import"./Backdrop.js";import"./Modal2.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Typography.js";import"./Button.js";import"./ButtonBase.js";import"./IconButton.js";import"./Error.js";import"./useHttpService.js";import"./TextField.js";import"./FormHelperText.js";import"./react-is.production.min.js";import"./Grow.js";import"./List.js";import"./GlobalStyles.js";import"./upperFirst.js";import"./HeaderTitle.js";import"./Divider.js";import"./StepperForm.js";import"./BootstrapTooltip.js";import"./Tooltip.js";import"./Popper.js";import"./Grid.js";import"./ContentProvider.js";import"./useModal.js";import"./SpeedDial.module.js";import"./platform.js";import"./Box.js";import"./useStepper.js";import"./Add.js";import"./AutocompleteServer.js";import"./Autocomplete.js";import"./Close.js";import"./Chip.js";import"./CheckBoxOutlineBlank.js";import"./ListItem.js";import"./Checkbox.js";import"./DecimalInput.js";import"./CustomDecimal.js";import"./react-number-format.es.js";import"./string.helper.js";import"./regex.js";import"./PhoneInput.js";import"./DateInput.js";import"./MobileDatePicker.js";import"./MonthPicker.js";import"./usePickerState.js";import"./InputAdornment.js";import"./index7.js";import"./PatronalInput.js";import"./CustomSipe.js";import"./Loader.js";import"./Stack.js";import"./DireccionProvider.js";import"./BackgroundLoader.js";import"./NegociosProvider.js";import"./useFetchPagination.js";import"./useAsyncRetry.js";import"./useList.js";import"./usePrevious.js";import"./Card.js";const z=N().shape({tipo:O().trim().required("Favor ingresar el tipo")}),co=()=>{var n,d,l,c;const{modalAddTipo:t}=M.exports.useContext($),{modalState:o,setHide:r}=t,s=P({resolver:W(z),mode:"all"}),{formState:i,register:F,handleSubmit:S}=s,v=T(s,["formState","register","handleSubmit"]),{isLoading:a,send:b,response:p,reset:j}=I(),{errors:m}=i;return q(w,{state:o,setHide:()=>{r(),j(),v.reset({tipo:null})},title:"Formulario para agregar tipo de negocio",actionButton:{text:"Agregar",actionFunction:S(async y=>{await b({url:"/admin/negocios/add-tipo",data:y,method:"POST"})}),isLoading:a},children:[!a&&p&&A(k,{variant:"outlined",severity:p.status===201?"success":"error",style:{marginBottom:10},children:(l=(n=p.data)==null?void 0:n.message)!=null?l:(d=p.error)==null?void 0:d.message}),A(L,x(h({label:"Tipo",fullWidth:!0},F("tipo")),{error:!!(m!=null&&m.tipo),helperText:(c=m==null?void 0:m.tipo)==null?void 0:c.message}))]})};export{co as default};
