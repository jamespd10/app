var E=Object.defineProperty,L=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var S=(r,o,i)=>o in r?E(r,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[o]=i,b=(r,o)=>{for(var i in o||(o={}))C.call(o,i)&&S(r,i,o[i]);if(h)for(var i of h(o))T.call(o,i)&&S(r,i,o[i]);return r},y=(r,o)=>L(r,A(o));import{r as _,b as j,a as e,F as w,j as H}from"./index.js";import{g as M,o as B}from"./array.js";import{a as I}from"./useAsyncRetry.js";import{L as F}from"./Loader.js";import O from"./Modal.js";import{u as $}from"./useHttpService.js";import{u as k}from"./useFetch.js";import{P as z,a as D}from"./index30.js";import{s as G}from"./facturacionSchema.js";import{T as P}from"./Typography.js";import{A as R}from"./Alert.js";import"./upperFirst.js";import"./Grid.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./LoadingButton.js";import"./Backdrop.js";import"./Modal2.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Button.js";import"./ButtonBase.js";import"./IconButton.js";import"./Error.js";import"./jwt-decode.esm.js";import"./Edit.js";import"./ChipState.js";import"./Chip.js";import"./useModal.js";import"./string.helper.js";import"./regex.js";import"./useDataGrid.js";import"./TextInput.js";import"./TextField.js";import"./FormHelperText.js";import"./react-is.production.min.js";import"./Grow.js";import"./List.js";import"./GlobalStyles.js";import"./Search.js";import"./Clear.js";import"./Box.js";import"./InputAdornment.js";import"./base64.js";import"./MenuItem.js";import"./listItemIconClasses.js";import"./Divider.js";import"./listItemTextClasses.js";import"./useList.js";import"./Checkbox.js";import"./ListItem.js";import"./Stack.js";import"./Add.js";import"./TableRow.js";import"./Autocomplete.js";import"./Close.js";import"./Tooltip.js";import"./SkipNextOutlined.js";import"./Pagination.js";import"./useComponentVisible.js";import"./CheckBoxOutlineBlank.js";import"./AutocompleteServer.js";import"./CustomDecimal.js";import"./react-number-format.es.js";import"./CustomSipe.js";import"./index7.js";import"./StyledGridOverlay.js";import"./LinearProgress.js";import"./useFetchPagination.js";import"./usePrevious.js";import"./HeaderTitle.js";const V=({id:r})=>{const{isLoading:o,send:i,response:p,reset:d}=k(),{proformasState:x,set:a}=_.exports.useContext(z),{setSelectedList:v}=_.exports.useContext(D);return{isLoading:o,response:p,onSubmit:async s=>{d();const n=await i({url:`/admin/proformas/${r}/edit`,method:"POST",data:s});if(n.status===201&&n.data){const m=x,c=m.findIndex(u=>u.id===r);m[c]=y(b(b({},m[c]),s),{otros:s.otros[0].texto?s.otros:[],total:n.data.total}),a([...m]),v([])}},reset:d}},q=_.exports.lazy(()=>j(()=>import("./FormModalEdit.js"),["assets/FormModalEdit.js","assets/index.js","assets/index4.css","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/jwt-decode.esm.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/LoadingButton.js","assets/Backdrop.js","assets/Modal2.js","assets/Paper.js","assets/Button.js","assets/ButtonBase.js","assets/IconButton.js","assets/Error.js","assets/platform.js","assets/array.js","assets/upperFirst.js"])),ft=({modal:r,id:o})=>{var m,c,u;const i=$(),p=M({resolver:B(G),mode:"all"}),{isLoading:d,onSubmit:x,response:a,reset:v}=V({id:o}),{loading:l,value:s,error:n}=I(async()=>{if(o){const f=await i({url:`/admin/proformas/${o}`});if(f.status===201&&f.data){const t=f.data;p.reset({decimo:t.decimo,vacaciones:t.vacaciones,itbms:t.itbms,formulario_retencion_itbms:t.formulario_retencion_itbms,formulario_03:t.formulario_03,sipe:t.sipe,seguro_social:t.seguro_social,seguro_social2:t.seguro_social2,servicio_contabilidad:t.servicio_contabilidad,otro_costo:t.otro_costo,itbms_contabilidad:t.itbms_contabilidad,otros_text:t.otros_text,notas:t.notas,otros:t.otros&&t.otros.length>0?t.otros.map(g=>({texto:g.texto,valor:g.valor})):[{texto:void 0,valor:void 0}]})}return f}else return},[o]);return e(w,{children:H(O,{fullScreen:!0,state:r.modalState,setHide:()=>{v(),r.setHide()},title:"Formulario de edici\xF3n de Proforma",actionButton:{text:"Guardar",actionFunction:p.handleSubmit(x),isLoading:d},children:[l&&e(F,{}),!l&&s&&s.status!==201&&s.error&&e(P,{children:s.error.message}),n&&e(P,{children:"Error al consultar los datos a modificar"}),a&&e(R,{severity:a.status===201?"success":"error",variant:"outlined",style:{marginBottom:10},children:(u=(m=a.data)==null?void 0:m.message)!=null?u:(c=a.error)==null?void 0:c.message}),!l&&s&&s.status===201&&s.data&&e(_.exports.Suspense,{fallback:e(F,{}),children:e(q,{form:p,data:s.data})})]})})};export{ft as default};
