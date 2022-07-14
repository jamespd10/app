var h=Object.defineProperty,x=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var _=(i,e,t)=>e in i?h(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,l=(i,e)=>{for(var t in e||(e={}))C.call(e,t)&&_(i,t,e[t]);if(u)for(var t of u(e))N.call(e,t)&&_(i,t,e[t]);return i},c=(i,e)=>x(i,b(e));import{r as a,a as m,F as z,j as n}from"./index.js";import{A as F}from"./AutocompleteServer.js";import{d as k,a as j}from"./CheckBoxOutlineBlank.js";import{C as y}from"./index54.js";import{u as A}from"./useGetDefaultValues.js";import{C as O}from"./Checkbox.js";import"./TextInput.js";import"./TextField.js";import"./useFormControl.js";import"./useControlled.js";import"./formControlState.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./Fade.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";import"./emotion-react.browser.esm.js";import"./useFetch.js";import"./useHttpService.js";import"./Autocomplete.js";import"./Close.js";import"./IconButton.js";import"./ButtonBase.js";import"./useIsFocusVisible.js";import"./Popper.js";import"./Chip.js";import"./jsx-runtime_commonjs-proxy.js";import"./BootstrapModalTitle.js";import"./ModalTransition.js";import"./Typography.js";import"./Close2.js";import"./Paid.js";import"./BootstrapDivContent.js";import"./Divider.js";import"./index18.js";import"./HeaderTitle.js";import"./StyledSpeedDial.js";import"./Assignment.js";import"./FabButtonAction.js";import"./AssignmentRounded.js";import"./Tooltip.js";import"./SpeedDial.module.js";import"./Stack.js";import"./Loader.js";import"./Grid.js";import"./CircularProgress.js";import"./index31.js";import"./DialogActions.js";import"./Button.js";const V="_container_v6flz_1",$="_title_v6flz_7",E="_negocio_v6flz_12";var d={container:V,title:$,negocio:E};const Go=()=>{const{cliente:i,setCliente:e,setNegocios:t}=a.exports.useContext(y),{defaulValues:f}=A();return m(z,{children:m(F,{ref:null,inputProps:{label:"Raz\xF3n social"},disableStyle:!0,enableFirst:!0,value:i,size:"small",fullWidth:!0,onChange:(p,o)=>{if(e(o),o){const s=[];for(const r of o.negocios)s.push(c(l({},f),{id_negocio:r.id,nombre_negocio:r.nombre_negocio,tipo:r.tipo}));t(s)}else t([])},isOptionEqualToValue:(p,o)=>p.id===o.id,urlFetch:"/admin/clientes/f430",getOptionLabel:p=>p.nom_cliente||"",renderOption:(p,o,{selected:s})=>a.exports.createElement("li",c(l({},p),{key:o.id}),m(O,{icon:m(k,{}),checkedIcon:m(j,{}),checked:s,size:"small"}),n("div",{className:d.container,children:[n("div",{className:d.title,children:[o.tipo_personal&&n("span",{children:[o.tipo_personal," - "]}),m("span",{children:o.nom_cliente})]}),m("span",{children:o.ruc}),o.negocios&&n("div",{className:d.negocio,children:[n("span",{children:["Negocios(",o.negocios.length,"): "]}),o.negocios.map((r,g)=>n(a.exports.Fragment,{children:[n("strong",{children:[r==null?void 0:r.tipo," ",r==null?void 0:r.nombre_negocio]}),g!==1&&o.negocios.length>1&&m("span",{children:", "})]},`${r.nombre_negocio}-${g}`))]})]}))})})};export{Go as default};
