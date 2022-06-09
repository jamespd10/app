var j=Object.defineProperty,C=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var b=(o,r,e)=>r in o?j(o,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[r]=e,d=(o,r)=>{for(var e in r||(r={}))$.call(r,e)&&b(o,e,r[e]);if(P)for(var e of P(r))w.call(r,e)&&b(o,e,r[e]);return o},p=(o,r)=>C(o,I(r));import{r as i,q as c,ag as G,t as N,j as u,F as U,a}from"./index.js";import{H as M}from"./HeaderTitle.js";import{u as q}from"./useStepper.js";import{F as J}from"./array.js";import{s as y}from"./facturacionSchema.js";import{L as l}from"./Loader.js";import{B as K}from"./BackgroundLoader.js";import{u as Q}from"./useHandlePrint.js";import{a as W}from"./useAsyncRetry.js";import{u as E}from"./useHttpService.js";import X from"./ProformaPrintView.js";import"./jwt-decode.esm.js";import{u as Y}from"./useFirstFetch.js";import{P as Z}from"./Paper.js";import"./Typography.js";import"./extendSxProp.js";import"./Divider.js";import"./useFetch.js";import"./useModal.js";import"./upperFirst.js";import"./regex.js";import"./Grid.js";import"./Backdrop.js";import"./date.helper.js";import"./index13.js";import"./index14.js";import"./string.helper.js";const tt=i.exports.lazy(()=>c(()=>import("./StepperForm.js"),["assets/StepperForm.js","assets/index.js","assets/index5.css","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/jwt-decode.esm.js","assets/Grid.js","assets/extendSxProp.js","assets/Typography.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/platform.js","assets/ButtonBase.js","assets/Modal2.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/LoadingButton.js","assets/Backdrop.js","assets/Modal.js","assets/Paper.js","assets/Button.js","assets/IconButton.js","assets/Error.js","assets/Box.js"])),et=i.exports.lazy(()=>c(()=>import("./HeaderDatos.js"),["assets/HeaderDatos.js","assets/Loader.js","assets/index.js","assets/index5.css","assets/Grid.js","assets/extendSxProp.js","assets/Typography.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/jwt-decode.esm.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/useHttpService.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal2.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/LoadingButton.js","assets/Backdrop.js","assets/Modal.js","assets/Paper.js","assets/Button.js","assets/ButtonBase.js","assets/IconButton.js","assets/Error.js","assets/platform.js","assets/string.helper.js","assets/regex.js","assets/Stack.js","assets/Divider.js","assets/Alert.js","assets/Close.js"])),at=i.exports.lazy(()=>c(()=>import("./MainDatos.js"),["assets/MainDatos.js","assets/index.js","assets/index5.css","assets/DecimalInput.js","assets/array.js","assets/upperFirst.js","assets/TextInput.js","assets/TextField.js","assets/FormHelperText.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Menu.js","assets/Modal.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/Loader.js","assets/Grid.js","assets/extendSxProp.js","assets/Typography.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/useIsFocusVisible.js","assets/jwt-decode.esm.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal2.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/LoadingButton.js","assets/Button.js","assets/ButtonBase.js","assets/IconButton.js","assets/Error.js","assets/platform.js"])),rt=i.exports.lazy(()=>c(()=>import("./Modal2.js"),["assets/Modal2.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index5.css","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/LoadingButton.js","assets/Backdrop.js","assets/Modal.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Typography.js","assets/extendSxProp.js","assets/Button.js","assets/ButtonBase.js","assets/IconButton.js","assets/Error.js"])),L={decimo:0,vacaciones:0,itbms:0,formulario_retencion_itbms:0,formulario_03:0,sipe:0,seguro_social:0,seguro_social2:0,servicio_contabilidad:0,itbms_contabilidad:0,otro_costo:void 0,otros_text:void 0,notas:void 0,otros:[{texto:void 0,valor:void 0}]},Bt=()=>{var x;const{id:o,cliente:r}=G(),e=Y({url:`/admin/negocios/${o}/${r}`}),{activeStep:k,form:m,handleBack:A,handleNextStep:R,isLoading:D,res:t,modalState:O,setHide:f,handleSubmit:v}=q({schema:y,fields:[{names:Object.keys(y.fields)}],url:`/admin/negocios/${o}/${r}/create/proformas`,defaultValues:L}),B=N(),H=E(),T=E(),{value:s}=W(async()=>{if(t&&t.status===201&&t.data)return await H({url:`/admin/proformas/${t.data.id}`})},[t]);i.exports.useEffect(()=>{(()=>{var F,S;!e.loading&&e.value&&e.value.status===201&&((F=e.value.data)==null?void 0:F.serv_conta)&&m.reset(p(d({},L),{servicio_contabilidad:(S=e.value.data)==null?void 0:S.serv_conta}))})()},[e.value,e.loading]);const{elementRef:z,handlePrint:_,printing:V}=Q({pageStyle:"@page { margin: 0 !important; size: letter; }",onAfterPrint:async()=>{var n;s&&s.status===201&&await T({url:"/admin/proformas/check",method:"POST",data:{proformas:[{id:(n=s.data)==null?void 0:n.id}],type:"print"}})}}),[g,h]=i.exports.useState(!1);return i.exports.useEffect(()=>{(()=>{g&&t&&t.status===201&&t.data&&s&&s.data&&s.status===201&&(_(),h(!1))})()},[g,t,s,_]),u(U,{children:[a(M,{message:"Facturar Proforma"}),u(J,p(d({},m),{children:[a(i.exports.Suspense,{fallback:a(l,{}),children:a(et,{})}),u(Z,{variant:"outlined",sx:{p:1,mt:2},children:[e.loading&&a(l,{}),!e.loading&&a(i.exports.Suspense,{fallback:a(l,{}),children:a(tt,{activeStep:k,handleBack:A,sendLabel:"Guardar",sentLabel:"Guardado",finishedAction:()=>B("/negocios?f=1"),finishedActionText:"Realizar otra",sentLabelImage:"\xA1Factura guardada!",steps:["Datos generales"],handleNext:R,disabledLast:!0,errors:Object.keys(m.formState.errors).length,children:[a(i.exports.Suspense,{fallback:a(l,{}),children:a(at,{})},"Datos-generales")]})})]})]})),a(K,{open:D||V}),a(i.exports.Suspense,{fallback:a("div",{}),children:a(rt,{state:O,title:"\xA1Atenci\xF3n!",setHide:t&&t.status===201?f:void 0,body:t?t&&t.data?t.data.message:(x=t.error)==null?void 0:x.message:"\xBFRealmente desea guardar la proforma?",cancelBotton:{actionFunction:f,text:t?"Cerrar":"Cancelar"},type:t&&t.status===201?"SUCCESS":"ERROR",actionButton:t?void 0:{actionFunction:v,text:"Guardar"},anotherButton:t?void 0:{actionFunction:async()=>{await v(),h(!0)},text:"Guardar e imprimir"}})}),s&&s.status===201&&s.data&&a("div",{style:{display:"none"},children:a("div",{ref:z,children:a(X,d({},s.data))})})]})};export{Bt as default};
