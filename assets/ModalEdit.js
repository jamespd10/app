var j=Object.defineProperty,z=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var S=(r,t,i)=>t in r?j(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i,v=(r,t)=>{for(var i in t||(t={}))L.call(t,i)&&S(r,i,t[i]);if(h)for(var i of h(t))T.call(t,i)&&S(r,i,t[i]);return r},F=(r,t)=>z(r,A(t));import{r as E,b as w,a as s,F as D,j as G}from"./index.js";import{d as H,o as M}from"./array.js";import{_ as P}from"./useAsync.js";import{L as y}from"./Loader.js";import B from"./Modal.js";import{u as I}from"./useHttpService.js";import{u as O}from"./index27.js";import{u as $}from"./useFetch.js";import{s as k}from"./facturacionSchema2.js";import{T as b}from"./Typography.js";import{A as C}from"./Alert.js";import"./upperFirst.js";import"./Grid.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Modal2.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./IconButton.js";import"./ButtonBase.js";import"./CheckCircle.js";import"./DialogContent.js";import"./LoadingButton.js";import"./Button.js";import"./useAsyncRetry.js";import"./useList.js";import"./TextInput.js";import"./TextField.js";import"./react-is.production.min.js";import"./Grow.js";import"./List.js";import"./GlobalStyles.js";import"./Search.js";import"./Clear.js";import"./Box.js";import"./InputAdornment.js";import"./FilterList.js";import"./MenuItem.js";import"./listItemIconClasses.js";import"./Divider.js";import"./listItemTextClasses.js";import"./Checkbox.js";import"./ListItem.js";import"./Stack.js";import"./Add.js";import"./TableRow.js";import"./Autocomplete.js";import"./Close.js";import"./Popper.js";import"./Chip.js";import"./Tooltip.js";import"./appendOwnerState.js";import"./SkipNextOutlined.js";import"./Pagination.js";import"./useComponentVisible.js";import"./CheckBoxOutlineBlank.js";import"./ErrorOutline.js";import"./AutocompleteServer.js";import"./ChipState.js";import"./CustomDecimal.js";import"./react-number-format.es.js";import"./string.helper.js";import"./regex.js";import"./CustomSipe.js";import"./index11.js";import"./StyledGridOverlay.js";import"./LinearProgress.js";const R=({id:r})=>{const{isLoading:t,send:i,response:p,reset:u}=$(),{data:l,setData:m}=O();return{isLoading:t,response:p,onSubmit:async e=>{u();const a=await i({url:`/admin/fact-alterna/${r}/edit`,method:"POST",data:e});if(a.status===201&&a.data&&l){const n=l,c=n.findIndex(_=>_.id===r);n[c]=F(v(v({},n[c]),e),{otros:e.otros[0].texto?e.otros:[],otros_impuestos:e.otros_impuestos[0].texto?e.otros_impuestos:[],total:a.data.total}),m([...n])}},reset:u}},V=E.exports.lazy(()=>w(()=>import("./FormModalEdit2.js"),["assets/FormModalEdit2.js","assets/index.js","assets/index6.css","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/appendOwnerState.js","assets/isHostComponent.js","assets/Grow.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/Paper.js","assets/IconButton.js","assets/ButtonBase.js","assets/CheckCircle.js","assets/DialogContent.js","assets/LoadingButton.js","assets/Button.js","assets/SelectedCard.js","assets/array.js","assets/upperFirst.js"])),lt=({modal:r,id:t})=>{var c,_,g;const i=I(),p=H({resolver:M(k),mode:"all"}),{isLoading:u,onSubmit:l,response:m,reset:x}=R({id:t}),{loading:e,value:a,error:n}=P(async()=>{if(t){const f=await i({url:`/admin/fact-alterna/${t}`});if(f.status===201&&f.data){const o=f.data;p.reset({actualizacion_nit:o.actualizacion_nit,aviso:o.aviso,cierre:o.cierre,declaracion_municipal:o.declaracion_municipal,declaracion_renta:o.declaracion_renta,estados_financieros:o.estados_financieros,fecha:o.mes_correspondiente,impuesto_complementario:o.impuesto_complementario,monto_ventas:o.monto_ventas,paz_salvo:o.paz_salvo,poder_notariado:o.poder_notariado,renta_juridica:o.renta_juridica,renta_natural:o.renta_natural,seguro_educativo:o.seguro_educativo,personal:o.personal,notas:o.notas,sin_operacion:o.sin_operacion,certificacion_ingresos:o.certificacion_ingresos,periodos_estados:o.periodos_estados,otros:o.otros&&o.otros.length>0?o.otros.map(d=>({texto:d.texto,valor:d.valor})):[{texto:void 0,valor:void 0}],otros_impuestos:o.otros_impuestos&&o.otros_impuestos.length>0?o.otros_impuestos.map(d=>({texto:d.texto,valor:d.valor})):[{texto:void 0,valor:void 0}],tipo_factura:o.tipo_factura,monto_ventas_municipio:o.monto_ventas_municipio})}return f}else return},[t]);return s(D,{children:G(B,{fullScreen:!0,state:r.modalState,setHide:()=>{x(),r.setHide()},title:"Formulario de edici\xF3n de Factura Alterna",actionButton:{text:"Guardar",actionFunction:p.handleSubmit(l),isLoading:u},children:[e&&s(y,{}),!e&&a&&a.status!==201&&a.error&&s(b,{children:a.error.message}),n&&s(b,{children:"Error al consultar los datos a modificar"}),m&&s(C,{severity:m.status===201?"success":"error",variant:"outlined",style:{marginBottom:10},children:(g=(c=m.data)==null?void 0:c.message)!=null?g:(_=m.error)==null?void 0:_.message}),!e&&a&&a.status===201&&a.data&&s(E.exports.Suspense,{fallback:s(y,{}),children:s(V,{form:p,data:a.data})})]})})};export{lt as default};
