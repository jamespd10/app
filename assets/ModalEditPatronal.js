var M=Object.defineProperty,N=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var S=(a,r,o)=>r in a?M(a,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[r]=o,m=(a,r)=>{for(var o in r||(r={}))C.call(r,o)&&S(a,o,r[o]);if(P)for(var o of P(r))R.call(r,o)&&S(a,o,r[o]);return a},p=(a,r)=>N(a,k(r));import{L as W}from"./Loader.js";import{r as w,j as y,a as s}from"./index.js";import"./BootstrapTooltip.js";import{u as B}from"./useFetch.js";import"./jwt-decode.esm.js";import{u as G}from"./useFirstFetch.js";import"./ContentProvider.js";import{M as O}from"./Modal2.js";import"./platform.js";import{S as V}from"./SelectHookForm.js";import{P as A}from"./PatronalInput.js";import{c as z,a as b,b as D,f as J,o as K,F as Q}from"./array.js";import{b as U,p as X}from"./regex.js";import{N as Y}from"./index10.js";import{T as Z}from"./Typography.js";import{S as rr}from"./Stack.js";import{A as ar}from"./Alert.js";import"./Grid.js";import"./extendSxProp.js";import"./Tooltip.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./appendOwnerState.js";import"./isHostComponent.js";import"./Grow.js";import"./useHttpService.js";import"./constants.js";import"./useAsyncRetry.js";import"./tslib.js";import"./useModal.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./DialogTitle.js";import"./Backdrop.js";import"./Modal.js";import"./Paper.js";import"./IconButton.js";import"./ButtonBase.js";import"./Error.js";import"./Button.js";import"./Box.js";import"./TextField.js";import"./react-is.production.min.js";import"./Menu.js";import"./List.js";import"./GlobalStyles.js";import"./MenuItem.js";import"./listItemIconClasses.js";import"./Divider.js";import"./listItemTextClasses.js";import"./TextInput.js";import"./CustomSipe.js";import"./index7.js";import"./upperFirst.js";import"./HeaderTitle.js";import"./NotFoundResults.js";import"./string.helper.js";import"./useMediaQuery.js";import"./Close.js";const or=z().shape({n_patronal:b().typeError("Favor ingresar el n\xFAmero patronal").trim().matches(U,"Favor usar el siguiente formato: ##-###-####").required("Favor de ingresar el n\xFAmero patronal"),patronal_sipe:b().typeError("Favor ingresar el n\xFAmero patronal").trim().matches(X,"Favor usar el siguiente formato: ##-###-#####").required("Favor de ingresar el n\xFAmero patronal"),planilla_asignada:D().typeError("Favor de seleccionar el usuario asignado").positive("Favor de ingresar un n\xFAmero positivo").required("Favor de seleccionar el usuario asignado")}),da=()=>{var F,f,h,x,v,_;const a=w.exports.useContext(Y),r=a.value.data,{modalEditPatronal:o,retry:E}=a,{modalState:T,setHide:$}=o,d=r.asignaciones.findIndex(e=>e.asignacion==="Planilla"),c=J({mode:"all",resolver:K(or),defaultValues:p(m({},r),{planilla_asignada:d>=0?r.asignaciones[d].id_usuario:void 0})}),{formState:j,register:u,control:q,handleSubmit:H}=c,{errors:n}=j,{loading:l,value:t}=G({url:"/admin/usuarios/ch/secre&adminis"}),{isLoading:g,response:i,send:I,reset:L}=B();return y(O,{state:T,setHide:()=>{$(),L(),i&&i.status===201&&E()},title:"Formulario de edici\xF3n",actionButton:{text:"Guardar",actionFunction:H(async e=>await I({url:`/admin/negocios/${r.id}/${r.id_cliente}/edit-patronal`,method:"POST",data:e})),isLoading:g},children:[l&&s(W,{}),!l&&t&&t.status!==201&&s(Z,{variant:"h5",children:(F=t.error)==null?void 0:F.message}),!l&&t&&t.status===201&&t.data&&s(Q,p(m({},c),{children:y(rr,{spacing:1,children:[!g&&i&&s(ar,{severity:i.status===201?"success":"error",variant:"outlined",children:i.status===201?(f=i.data)==null?void 0:f.message:(h=i.error)==null?void 0:h.message}),s(A,p(m({label:"N\xFAmero patronal",fullWidth:!0},u("n_patronal")),{error:!!n.n_patronal,helperText:(x=n.n_patronal)==null?void 0:x.message})),s(A,p(m({label:"Patronal SIPE",fullWidth:!0,sipe:!0},u("patronal_sipe")),{error:!!n.patronal_sipe,helperText:(v=n.patronal_sipe)==null?void 0:v.message})),s(V,{control:q,label:"Planilla asignada a:",name:"planilla_asignada",options:t.data.map(e=>`${e.nombre} ${e.apellido}`),values:t.data.map(e=>e.id),error:!!n.planilla_asignada,helperText:(_=n.planilla_asignada)==null?void 0:_.message})]})}))]})};export{da as default};
