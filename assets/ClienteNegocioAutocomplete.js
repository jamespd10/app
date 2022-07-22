var h=Object.defineProperty,x=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var _=(i,t,e)=>t in i?h(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,l=(i,t)=>{for(var e in t||(t={}))C.call(t,e)&&_(i,e,t[e]);if(g)for(var e of g(t))F.call(t,e)&&_(i,e,t[e]);return i},c=(i,t)=>x(i,b(t));import{r as a,a as m,F as N,j as p}from"./index.js";import{A as z}from"./AutocompleteServer.js";import{d as k,a as j}from"./CheckBoxOutlineBlank.js";import{C as y}from"./index53.js";import{u as A}from"./useGetDefaultValues.js";import{C as O}from"./Checkbox.js";import"./TextInput.js";import"./TextField.js";import"./useFormControl.js";import"./useControlled.js";import"./useId.js";import"./formControlState.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./Fade.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";import"./emotion-react.browser.esm.js";import"./useFetch.js";import"./useHttpService.js";import"./Autocomplete.js";import"./Close.js";import"./IconButton.js";import"./ButtonBase.js";import"./useIsFocusVisible.js";import"./Popper.js";import"./Chip.js";import"./jsx-runtime_commonjs-proxy.js";import"./BootstrapModal.js";import"./ModalTransition.js";import"./BootstrapModalTitle.js";import"./Close2.js";import"./DialogTitle.js";import"./dialogTitleClasses.js";import"./Typography.js";import"./Paid.js";import"./BootstrapDivContent.js";import"./Divider.js";import"./index18.js";import"./HeaderTitle.js";import"./StyledSpeedDial.js";import"./Assignment.js";import"./FabButtonAction.js";import"./AssignmentRounded.js";import"./Tooltip.js";import"./SpeedDial.module.js";import"./Stack.js";import"./Loader.js";import"./Grid.js";import"./CircularProgress.js";import"./index33.js";import"./DialogActions.js";import"./Button.js";import"./SwitchBase.js";const V="_container_v6flz_1",$="_title_v6flz_7",E="_negocio_v6flz_12";var d={container:V,title:$,negocio:E};const To=()=>{const{cliente:i,setCliente:t,setNegocios:e}=a.exports.useContext(y),{defaulValues:f}=A();return m(N,{children:m(z,{ref:null,inputProps:{label:"Raz\xF3n social"},disableStyle:!0,enableFirst:!0,value:i,size:"small",fullWidth:!0,autoFocus:!0,onChange:(n,o)=>{if(t(o),o){const s=[];for(const r of o.negocios)s.push(c(l({},f),{id_negocio:r.id,nombre_negocio:r.nombre_negocio,tipo:r.tipo}));e(s)}else e([])},isOptionEqualToValue:(n,o)=>n.id===o.id,urlFetch:"/admin/clientes/f430",getOptionLabel:n=>n.nom_cliente||"",renderOption:(n,o,{selected:s})=>a.exports.createElement("li",c(l({},n),{key:o.id}),m(O,{icon:m(k,{}),checkedIcon:m(j,{}),checked:s,size:"small"}),p("div",{className:d.container,children:[p("div",{className:d.title,children:[o.tipo_personal&&p("span",{children:[o.tipo_personal," - "]}),m("span",{children:o.nom_cliente})]}),m("span",{children:o.ruc}),o.negocios&&p("div",{className:d.negocio,children:[p("span",{children:["Negocios(",o.negocios.length,"): "]}),o.negocios.map((r,u)=>p(a.exports.Fragment,{children:[p("strong",{children:[r==null?void 0:r.tipo," ",r==null?void 0:r.nombre_negocio]}),u!==1&&o.negocios.length>1&&m("span",{children:", "})]},`${r.nombre_negocio}-${u}`))]})]}))})})};export{To as default};
