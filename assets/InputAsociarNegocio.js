var b=Object.defineProperty,v=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var f=(r,t,i)=>t in r?b(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i,c=(r,t)=>{for(var i in t||(t={}))R.call(t,i)&&f(r,i,t[i]);if(g)for(var i of g(t))S.call(t,i)&&f(r,i,t[i]);return r},a=(r,t)=>v(r,A(t));import{A as T}from"./AutocompleteServer.js";import{d as N,a as w}from"./CheckBoxOutlineBlank.js";import{u as D,C as E}from"./array.js";import{r as F,A as I,a as e,j as p,F as l}from"./index.js";import"./BootstrapTooltip.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import{C as _}from"./ChipState.js";import"./Modal.js";import"./SelectedCard.js";import{L as j}from"./ListItem.js";import{C as k}from"./Checkbox.js";import{T as s}from"./Typography.js";import"./TextInput.js";import"./TextField.js";import"./useControlled.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./GlobalStyles.js";import"./useFetch.js";import"./useHttpService.js";import"./Autocomplete.js";import"./Close.js";import"./IconButton.js";import"./ButtonBase.js";import"./useIsFocusVisible.js";import"./Popper.js";import"./Chip.js";import"./jsx-runtime_commonjs-proxy.js";import"./upperFirst.js";import"./Tooltip.js";import"./appendOwnerState.js";import"./useModal.js";import"./Error.js";import"./Close2.js";import"./ModalTransition.js";import"./DialogContent.js";import"./LoadingButton.js";import"./Button.js";const Dr=({name:r,label:t})=>{const{control:i,formState:d}=D(),{errors:x}=d,{authState:C}=F.exports.useContext(I),{tipo:y}=C;return e(E,{control:i,name:r!=null?r:"negocio",render:({field:n})=>{var u,h;return e(T,a(c({},n),{ref:null,urlFetch:"/admin/negocios/autocomplete",onChange:(m,o)=>n.onChange(o),inputProps:{label:t!=null?t:"Negocio asociado",helperText:(u=x[r!=null?r:"negocio"])==null?void 0:u.message,error:!!((h=d.errors[r!=null?r:"negocio"])!=null&&h.message)},isOptionEqualToValue:(m,o)=>m.id===o.id,getOptionLabel:m=>`${m.tipo||""} ${m.nombre_negocio||""}`.trim(),renderOption:(m,o,{selected:O})=>p(j,a(c({},m),{style:{textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[e(k,{icon:e(N,{}),checkedIcon:e(w,{}),style:{marginRight:8},checked:O}),p("div",{style:{display:"flex",flexDirection:"column",textTransform:"uppercase"},children:[e(s,{variant:"body1",children:p("strong",{children:[o.tipo," ",o.nombre_negocio]})}),y==="Super"&&e("div",{style:{display:"flex",width:"100%"},children:e(_,{color:Boolean(Number(o.cerrado))?"error":"success",label:Boolean(Number(o.cerrado))?"CERRADO":"OPERANDO"})}),o.ruc&&o.ruc!==""?e(s,{variant:"body2",children:o.ruc}):e(l,{}),o.ruta&&o.ruta!==""?p(s,{variant:"body2",children:["RUTA: ",o.ruta]}):e(l,{}),o.recorrido&&o.recorrido>0?p(s,{variant:"body2",children:["RECORRIDO: ",o.recorrido]}):e(l,{})]})]}))}))}})};export{Dr as default};
