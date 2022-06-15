var T=Object.defineProperty,j=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var S=(o,a,r)=>a in o?T(o,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[a]=r,l=(o,a)=>{for(var r in a||(a={}))w.call(a,r)&&S(o,r,a[r]);if(g)for(var r of g(a))I.call(a,r)&&S(o,r,a[r]);return o},F=(o,a)=>j(o,V(a));import{r as s,q as d,ag as P,t as G,j as y,F as N,a as e}from"./index.js";import{H as $}from"./HeaderTitle.js";import{u as M}from"./useStepper.js";import{F as U}from"./array.js";import{s as b}from"./facturacionSchema2.js";import{L as p}from"./Loader.js";import{B as q}from"./BackgroundLoader.js";import{u as Z}from"./useHandlePrint.js";import{a as J}from"./useAsyncRetry.js";import{u as L}from"./useHttpService.js";import K from"./FactPrintView.js";import{l as Q}from"./date.helper.js";import{S as W}from"./index36.js";import{P as X}from"./Paper.js";import"./Typography.js";import"./extendSxProp.js";import"./Divider.js";import"./useFetch.js";import"./jwt-decode.esm.js";import"./useModal.js";import"./upperFirst.js";import"./regex.js";import"./Grid.js";import"./Backdrop.js";import"./index15.js";import"./string.helper.js";import"./index13.js";import"./useFetchPagination.js";import"./useList.js";import"./usePrevious.js";const Y=s.exports.lazy(()=>d(()=>import("./StepperForm.js"),["assets/StepperForm.js","assets/index.js","assets/index2.css","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/jwt-decode.esm.js","assets/Grid.js","assets/extendSxProp.js","assets/Typography.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/platform.js","assets/ButtonBase.js","assets/Modal2.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/LoadingButton.js","assets/Backdrop.js","assets/Modal.js","assets/Paper.js","assets/Button.js","assets/IconButton.js","assets/Error.js","assets/Box.js"])),tt=s.exports.lazy(()=>d(()=>import("./HeaderDatos3.js"),["assets/HeaderDatos3.js","assets/index.js","assets/index2.css","assets/Loader.js","assets/Grid.js","assets/extendSxProp.js","assets/Typography.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/jwt-decode.esm.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/useHttpService.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal2.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/LoadingButton.js","assets/Backdrop.js","assets/Modal.js","assets/Paper.js","assets/Button.js","assets/ButtonBase.js","assets/IconButton.js","assets/Error.js","assets/platform.js","assets/string.helper.js","assets/regex.js","assets/array.js","assets/upperFirst.js","assets/index36.js","assets/useFetchPagination.js","assets/useList.js","assets/usePrevious.js","assets/Divider.js","assets/Alert.js","assets/Close.js"])),et=s.exports.lazy(()=>d(()=>import("./MainDatos2.js"),["assets/MainDatos2.js","assets/index.js","assets/index2.css","assets/DateInput.js","assets/array.js","assets/upperFirst.js","assets/TextInput.js","assets/TextField.js","assets/FormHelperText.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Menu.js","assets/Modal.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/MobileDatePicker.js","assets/MonthPicker.js","assets/Typography.js","assets/extendSxProp.js","assets/usePickerState.js","assets/Grid.js","assets/IconButton.js","assets/ButtonBase.js","assets/useIsFocusVisible.js","assets/LoadingButton.js","assets/Button.js","assets/InputAdornment.js","assets/index7.js","assets/Loader.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/jwt-decode.esm.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal2.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/Error.js","assets/platform.js"])),at=s.exports.lazy(()=>d(()=>import("./Modal2.js"),["assets/Modal2.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index2.css","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/LoadingButton.js","assets/Backdrop.js","assets/Modal.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Typography.js","assets/extendSxProp.js","assets/Button.js","assets/ButtonBase.js","assets/IconButton.js","assets/Error.js"])),Bt=()=>{var h;const{id:o,cliente:a}=P(),r=s.exports.useContext(W),{factura:n}=P(),{activeStep:A,form:m,handleBack:E,handleNextStep:k,isLoading:R,res:t,modalState:C,setHide:u,handleSubmit:f}=M({schema:b,fields:[{names:Object.keys(b.fields)}],url:`/admin/negocios/${o}/${r.cliente?r.cliente.id:a}/create/fact-alterna`,defaultValues:{fecha:Q(),declaracion_municipal:n==="municipio"?25:0,actualizacion_nit:0,estados_financieros:0,paz_salvo:0,cierre:0,poder_notariado:0,declaracion_renta:n==="renta"?160:0,monto_ventas:0,aviso:0,renta_natural:0,renta_juridica:0,seguro_educativo:0,impuesto_complementario:0,otros:[{texto:void 0,valor:void 0}],otros_impuestos:[{texto:void 0,valor:void 0}],tipo_factura:n==null?void 0:n.toUpperCase(),monto_ventas_municipio:0}}),D=G(),O=L(),z=L(),{value:i}=J(async()=>{if(t&&t.status===201&&t.data)return await O({url:`/admin/fact-alterna/${t.data.id}`})},[t]),{elementRef:B,handlePrint:_,printing:H}=Z({pageStyle:"@page { margin: 0 !important; }",onAfterPrint:async()=>{var c;i&&i.status===201&&await z({url:"/admin/fact-alterna/check",method:"POST",data:{facturas:[{id:(c=i.data)==null?void 0:c.id}],type:"print"}})}}),[v,x]=s.exports.useState(!1);return s.exports.useEffect(()=>{(()=>{v&&t&&t.status===201&&t.data&&i&&i.data&&i.status===201&&(_(),x(!1))})()},[v,t,i,_]),y(N,{children:[e($,{message:"Facturaci\xF3n Alterna"}),y(U,F(l({},m),{children:[e(s.exports.Suspense,{fallback:e(p,{}),children:e(tt,{})}),e(X,{variant:"outlined",sx:{p:1,mt:2},children:e(s.exports.Suspense,{fallback:e(p,{}),children:e(Y,{activeStep:A,handleBack:E,sendLabel:"Guardar",sentLabel:"Guardado",finishedAction:()=>D(`/negocios?fa=${n}`),finishedActionText:"Realizar otra",sentLabelImage:"\xA1Factura guardada!",steps:["Datos generales"],handleNext:k,disabledLast:!0,children:[e(s.exports.Suspense,{fallback:e(p,{}),children:e(et,{})},"Datos-generales")],errors:Object.keys(m.formState.errors).length})})})]})),e(q,{open:R||H}),e(s.exports.Suspense,{fallback:e("div",{}),children:e(at,{state:C,title:"\xA1Atenci\xF3n!",setHide:t&&t.status===201?u:void 0,body:t?t&&t.data?t.data.message:(h=t.error)==null?void 0:h.message:"\xBFRealmente desea guardar la factura alterna?",cancelBotton:{actionFunction:u,text:t?"Cerrar":"Cancelar"},type:t&&t.status===201?"SUCCESS":"ERROR",actionButton:t?void 0:{actionFunction:f,text:"Guardar"},anotherButton:t?void 0:{actionFunction:async()=>{await f(),x(!0)},text:"Guardar e imprimir"}})}),i&&i.status===201&&i.data&&e("div",{style:{display:"none"},children:e("div",{ref:B,children:e(K,l({},i.data))})})]})};export{Bt as default};
