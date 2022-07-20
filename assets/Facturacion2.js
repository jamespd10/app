var T=Object.defineProperty,j=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var S=(o,a,r)=>a in o?T(o,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[a]=r,l=(o,a)=>{for(var r in a||(a={}))w.call(a,r)&&S(o,r,a[r]);if(g)for(var r of g(a))I.call(a,r)&&S(o,r,a[r]);return o},F=(o,a)=>j(o,V(a));import{r as s,b as d,ap as P,a7 as G,j as y,F as N,a as e}from"./index.js";import{H as $}from"./HeaderTitle.js";import{u as M}from"./useStepper.js";import{F as U}from"./yup.module.js";import{s as b}from"./facturacionSchema.js";import{L as p}from"./Loader.js";import{B as Z}from"./BackgroundLoader.js";import{u as q}from"./useHandlePrint.js";import{a as J}from"./useAsyncRetry.js";import{u as L}from"./useHttpService.js";import K from"./FactPrintView.js";import{g as Q}from"./date.helper.js";import{S as W}from"./index30.js";import{P as X}from"./Paper.js";import"./Typography.js";import"./Divider.js";import"./useFetch.js";import"./useModal.js";import"./regex.js";import"./array.js";import"./upperFirst.js";import"./Grid.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./Backdrop.js";import"./Fade.js";import"./index23.js";import"./string.helper.js";import"./useFetchPagination.js";import"./useList.js";import"./usePrevious.js";import"./object.helper.js";const Y=s.exports.lazy(()=>d(()=>import("./StepperForm.js"),["assets/StepperForm.js","assets/index.js","assets/index7.css","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/useControlled.js","assets/useId.js","assets/Grid.js","assets/Typography.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/SelectedCard.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/DialogTitle.js","assets/dialogTitleClasses.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Fade.js","assets/Modal2.js","assets/Paper.js","assets/IconButton.js","assets/Warning.js","assets/Error.js","assets/CheckCircle.js","assets/DialogContent.js","assets/DialogActions.js","assets/LoadingButton.js","assets/Button.js","assets/CircularProgress.js","assets/Box.js"])),tt=s.exports.lazy(()=>d(()=>import("./HeaderDatos3.js"),["assets/HeaderDatos3.js","assets/index.js","assets/index7.css","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/useControlled.js","assets/useId.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/useHttpService.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/DialogTitle.js","assets/dialogTitleClasses.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Fade.js","assets/Modal2.js","assets/Paper.js","assets/IconButton.js","assets/ButtonBase.js","assets/Warning.js","assets/Error.js","assets/CheckCircle.js","assets/DialogContent.js","assets/DialogActions.js","assets/LoadingButton.js","assets/Button.js","assets/SelectedCard.js","assets/string.helper.js","assets/regex.js","assets/yup.module.js","assets/index30.js","assets/useFetchPagination.js","assets/useList.js","assets/usePrevious.js","assets/object.helper.js","assets/Divider.js","assets/Alert.js","assets/Close.js"])),et=s.exports.lazy(()=>d(()=>import("./MainDatos2.js"),["assets/MainDatos2.js","assets/index.js","assets/index7.css","assets/DateInput.js","assets/yup.module.js","assets/TextInput.js","assets/TextField.js","assets/useFormControl.js","assets/useControlled.js","assets/useId.js","assets/formControlState.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/Fade.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/emotion-react.browser.esm.js","assets/DatePicker.js","assets/MobileDatePicker.js","assets/MonthPicker.js","assets/Typography.js","assets/PureDateInput.js","assets/CalendarPicker.js","assets/ButtonBase.js","assets/useIsFocusVisible.js","assets/IconButton.js","assets/Grid.js","assets/InputAdornment.js","assets/ModalTransition.js","assets/DialogContent.js","assets/dialogTitleClasses.js","assets/DialogActions.js","assets/Button.js","assets/index11.js","assets/Popper.js","assets/Loader.js","assets/CircularProgress.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/DialogTitle.js","assets/Warning.js","assets/Error.js","assets/CheckCircle.js","assets/LoadingButton.js","assets/SelectedCard.js"])),at=s.exports.lazy(()=>d(()=>import("./Modal.js"),["assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index7.css","assets/createSvgIcon.js","assets/useId.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/DialogTitle.js","assets/dialogTitleClasses.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Fade.js","assets/Modal2.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Typography.js","assets/IconButton.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/Warning.js","assets/Error.js","assets/CheckCircle.js","assets/DialogContent.js","assets/DialogActions.js","assets/LoadingButton.js","assets/Button.js","assets/CircularProgress.js"])),Tt=()=>{var h;const{id:o,cliente:a}=P(),r=s.exports.useContext(W),{factura:n}=P(),{activeStep:A,form:m,handleBack:E,handleNextStep:k,isLoading:R,res:t,modalState:C,setHide:u,handleSubmit:f}=M({schema:b,fields:[{names:Object.keys(b.fields)}],url:`/admin/negocios/${o}/${r.cliente?r.cliente.id:a}/create/fact-alterna`,defaultValues:{fecha:Q(),declaracion_municipal:n==="municipio"?25:0,actualizacion_nit:0,estados_financieros:0,paz_salvo:0,cierre:0,poder_notariado:0,declaracion_renta:n==="renta"?160:0,monto_ventas:0,aviso:0,renta_natural:0,renta_juridica:0,seguro_educativo:0,impuesto_complementario:0,certificacion_ingresos:0,otros:[{texto:void 0,valor:void 0}],otros_impuestos:[{texto:void 0,valor:void 0}],tipo_factura:n==null?void 0:n.toUpperCase(),monto_ventas_municipio:0}}),D=G(),O=L(),z=L(),{value:i}=J(async()=>{if(t&&t.status===201&&t.data)return await O({url:`/admin/fact-alterna/${t.data.id}`})},[t]),{elementRef:B,handlePrint:_,printing:H}=q({pageStyle:"@page { margin: 0 !important; }",onAfterPrint:async()=>{var c;i&&i.status===201&&await z({url:"/admin/fact-alterna/check",method:"POST",data:{facturas:[{id:(c=i.data)==null?void 0:c.id}],type:"print"}})}}),[v,x]=s.exports.useState(!1);return s.exports.useEffect(()=>{(()=>{v&&t&&t.status===201&&t.data&&i&&i.data&&i.status===201&&(_(),x(!1))})()},[v,t,i,_]),y(N,{children:[e($,{message:"Facturaci\xF3n Alterna"}),y(U,F(l({},m),{children:[e(s.exports.Suspense,{fallback:e(p,{}),children:e(tt,{})}),e(X,{variant:"outlined",sx:{p:1,mt:2},children:e(s.exports.Suspense,{fallback:e(p,{}),children:e(Y,{activeStep:A,handleBack:E,sendLabel:"Guardar",sentLabel:"Guardado",finishedAction:()=>D(`/negocios?fa=${n}`),finishedActionText:"Realizar otra",sentLabelImage:"\xA1Factura guardada!",steps:["Datos generales"],handleNext:k,disabledLast:!0,errors:Object.keys(m.formState.errors).length,children:[e(s.exports.Suspense,{fallback:e(p,{}),children:e(et,{})},"Datos-generales")]})})})]})),e(Z,{open:R||H}),e(s.exports.Suspense,{fallback:e("div",{}),children:e(at,{state:C,title:"\xA1Atenci\xF3n!",setHide:t&&t.status===201?u:void 0,body:t?t&&t.data?t.data.message:(h=t.error)==null?void 0:h.message:"\xBFRealmente desea guardar la factura alterna?",cancelBotton:{actionFunction:u,text:t?"Cerrar":"Cancelar"},type:t&&t.status===201?"SUCCESS":"ERROR",actionButton:t?void 0:{actionFunction:f,text:"Guardar"},anotherButton:t?void 0:{actionFunction:async()=>{await f(),x(!0)},text:"Guardar e imprimir"}})}),i&&i.status===201&&i.data&&e("div",{style:{display:"none"},children:e("div",{ref:B,children:e(K,l({},i.data))})})]})};export{Tt as default};
