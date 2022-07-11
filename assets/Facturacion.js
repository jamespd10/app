var j=Object.defineProperty,C=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var P=(o,r,e)=>r in o?j(o,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[r]=e,d=(o,r)=>{for(var e in r||(r={}))$.call(r,e)&&P(o,e,r[e]);if(b)for(var e of b(r))w.call(r,e)&&P(o,e,r[e]);return o},p=(o,r)=>C(o,I(r));import{r as s,b as c,ap as G,a7 as N,j as u,F as U,a}from"./index.js";import{H as M}from"./HeaderTitle.js";import{u as q}from"./useStepper.js";import{F as J}from"./yup.module.js";import{s as y}from"./facturacionSchema.js";import{L as l}from"./Loader.js";import{B as K}from"./BackgroundLoader.js";import{u as Q}from"./useHandlePrint.js";import{_ as W}from"./useAsync.js";import{u as E}from"./useHttpService.js";import X from"./ProformaPrintView.js";import{u as Y}from"./useFirstFetch.js";import{P as Z}from"./Paper.js";import"./Typography.js";import"./Divider.js";import"./useFetch.js";import"./useModal.js";import"./regex.js";import"./array.js";import"./upperFirst.js";import"./Grid.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./Backdrop.js";import"./index23.js";import"./date.helper.js";import"./index30.js";import"./string.helper.js";import"./useAsyncRetry.js";const tt=s.exports.lazy(()=>c(()=>import("./StepperForm.js"),["assets/StepperForm.js","assets/index.js","assets/index11.css","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/Grid.js","assets/Typography.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/SelectedCard.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/Paper.js","assets/IconButton.js","assets/CheckCircle.js","assets/DialogContent.js","assets/LoadingButton.js","assets/Button.js","assets/CircularProgress.js","assets/Box.js"])),et=s.exports.lazy(()=>c(()=>import("./HeaderDatos2.js"),["assets/HeaderDatos2.js","assets/Loader.js","assets/index.js","assets/index11.css","assets/Grid.js","assets/Typography.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/useAsync.js","assets/useHttpService.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/Paper.js","assets/IconButton.js","assets/ButtonBase.js","assets/CheckCircle.js","assets/DialogContent.js","assets/LoadingButton.js","assets/Button.js","assets/SelectedCard.js","assets/string.helper.js","assets/regex.js","assets/Stack.js","assets/Divider.js","assets/Alert.js","assets/Close.js"])),at=s.exports.lazy(()=>c(()=>import("./MainDatos.js"),["assets/MainDatos.js","assets/index.js","assets/index11.css","assets/DecimalInput.js","assets/yup.module.js","assets/TextInput.js","assets/TextField.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/emotion-react.browser.esm.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/CircularProgress.js","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/useIsFocusVisible.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/ModalTransition.js","assets/IconButton.js","assets/ButtonBase.js","assets/CheckCircle.js","assets/DialogContent.js","assets/LoadingButton.js","assets/Button.js","assets/SelectedCard.js"])),rt=s.exports.lazy(()=>c(()=>import("./Modal.js"),["assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index11.css","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Typography.js","assets/IconButton.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/CheckCircle.js","assets/DialogContent.js","assets/LoadingButton.js","assets/Button.js","assets/CircularProgress.js"])),L={decimo:0,vacaciones:0,itbms:0,formulario_retencion_itbms:0,formulario_03:0,sipe:0,seguro_social:0,seguro_social2:0,servicio_contabilidad:0,itbms_contabilidad:0,otro_costo:void 0,otros_text:void 0,notas:void 0,otros:[{texto:void 0,valor:void 0}]},Tt=()=>{var x;const{id:o,cliente:r}=G(),e=Y({url:`/admin/negocios/${o}/${r}`}),{activeStep:k,form:m,handleBack:A,handleNextStep:R,isLoading:D,res:t,modalState:O,setHide:f,handleSubmit:v}=q({schema:y,fields:[{names:Object.keys(y.fields)}],url:`/admin/negocios/${o}/${r}/create/proformas`,defaultValues:L}),B=N(),H=E(),T=E(),{value:i}=W(async()=>{if(t&&t.status===201&&t.data)return await H({url:`/admin/proformas/${t.data.id}`})},[t]);s.exports.useEffect(()=>{(()=>{var F,S;!e.loading&&e.value&&e.value.status===201&&((F=e.value.data)==null?void 0:F.serv_conta)&&m.reset(p(d({},L),{servicio_contabilidad:(S=e.value.data)==null?void 0:S.serv_conta}))})()},[e.value,e.loading]);const{elementRef:z,handlePrint:_,printing:V}=Q({pageStyle:"@page { margin: 0 !important; size: letter; }",onAfterPrint:async()=>{var n;i&&i.status===201&&await T({url:"/admin/proformas/check",method:"POST",data:{proformas:[{id:(n=i.data)==null?void 0:n.id}],type:"print"}})}}),[g,h]=s.exports.useState(!1);return s.exports.useEffect(()=>{(()=>{g&&t&&t.status===201&&t.data&&i&&i.data&&i.status===201&&(_(),h(!1))})()},[g,t,i,_]),u(U,{children:[a(M,{message:"Facturar Proforma"}),u(J,p(d({},m),{children:[a(s.exports.Suspense,{fallback:a(l,{}),children:a(et,{})}),u(Z,{variant:"outlined",sx:{p:1,mt:2},children:[e.loading&&a(l,{}),!e.loading&&a(s.exports.Suspense,{fallback:a(l,{}),children:a(tt,{activeStep:k,handleBack:A,sendLabel:"Guardar",sentLabel:"Guardado",finishedAction:()=>B("/negocios?f=1"),finishedActionText:"Realizar otra",sentLabelImage:"\xA1Factura guardada!",steps:["Datos generales"],handleNext:R,disabledLast:!0,errors:Object.keys(m.formState.errors).length,children:[a(s.exports.Suspense,{fallback:a(l,{}),children:a(at,{})},"Datos-generales")]})})]})]})),a(K,{open:D||V}),a(s.exports.Suspense,{fallback:a("div",{}),children:a(rt,{state:O,title:"\xA1Atenci\xF3n!",setHide:t&&t.status===201?f:void 0,body:t?t&&t.data?t.data.message:(x=t.error)==null?void 0:x.message:"\xBFRealmente desea guardar la proforma?",cancelBotton:{actionFunction:f,text:t?"Cerrar":"Cancelar"},type:t&&t.status===201?"SUCCESS":"ERROR",actionButton:t?void 0:{actionFunction:v,text:"Guardar"},anotherButton:t?void 0:{actionFunction:async()=>{await v(),h(!0)},text:"Guardar e imprimir"}})}),i&&i.status===201&&i.data&&a("div",{style:{display:"none"},children:a("div",{ref:z,children:a(X,d({},i.data))})})]})};export{Tt as default};
