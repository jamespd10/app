var q=Object.defineProperty,G=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var D=(t,r,i)=>r in t?q(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,d=(t,r)=>{for(var i in r||(r={}))W.call(r,i)&&D(t,i,r[i]);if(S)for(var i of S(r))J.call(r,i)&&D(t,i,r[i]);return t},h=(t,r)=>G(t,U(r));import{j as o,a as e,F as k,r as n,b as f,aq as K,a6 as Q}from"./index.js";import{H as X}from"./HeaderTitle.js";import{u as Y}from"./useStepper.js";import{F as Z}from"./yup.module.js";import{d as ee}from"./regex.js";import{d as L,e as te,c as j,a as C}from"./array.js";import{L as u}from"./Loader.js";import{B as re}from"./BackgroundLoader.js";import{u as ie}from"./useHandlePrint.js";import{a as ae}from"./useAsyncRetry.js";import{u as A}from"./useHttpService.js";import{f as E}from"./date.helper.js";import{f as c}from"./string.helper.js";import{u as oe}from"./useFirstFetch.js";import{P as ne}from"./Paper.js";import"./Typography.js";import"./Divider.js";import"./useFetch.js";import"./useModal.js";import"./Grid.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./Backdrop.js";import"./Fade.js";import"./index23.js";const l=L().typeError("Favor de ingresar el monto").positive("El monto debe ser un n\xFAmero positivo").min(0,"El monto debe ser mayor \xF3 igual a 0").max(9e10,"Favor ingresar un n\xFAmero de m\xE1ximo 10 d\xEDgitos").required("Favor de ingresar el monto").test("check-decimal","Favor ingresar m\xE1ximo dos decimales",t=>!!(t===0||t&&t.toString().match(ee))),se=te().typeError("Favor ingresar otros").of(j().shape({texto:C().trim().nullable().notRequired().test("check","Favor ingresar un texto",function(t){return!(this.parent.valor&&this.parent.valor>0&&!t)}),valor:L().nullable().notRequired().transform((t,r)=>r===""?0:t).typeError("Favor ingresar el total").test("check-valor","Favor ingresar el total",function(t){return!(this.parent.texto&&this.parent.texto!==""&&!t)})})),P=j().shape({decimo:l,vacaciones:l,itbms:l,formulario_retencion_itbms:l,formulario_03:l,sipe:l,seguro_social:l,seguro_social2:l,servicio_contabilidad:l,itbms_contabilidad:l,otros:se,notas:C().trim().nullable()}),le=t=>o("div",{style:{display:"flex",flexDirection:"column",margin:"2.4cm 0 0 1in",overflow:"hidden",whiteSpace:"nowrap",fontSize:"14px"},children:[e("strong",{children:t.nombre_negocio}),o("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",margin:"0.5cm 0 0.6cm 0"},children:[e("strong",{children:E(`${new Date(Date.now())}`,"dd MMM yyyy")}),e("strong",{children:E(`${new Date(t.mes_correspondiente)}`,"MMMM")})]})]}),de=t=>o("div",{style:{display:"flex",flexDirection:"column",flex:1},children:[o("div",{style:{minHeight:"3.8cm",maxHeight:"3.8cm",height:"3.8cm",overflow:"hidden",marginBottom:"10px",overflowWrap:"break-word",wordBreak:"break-all"},children:[e("span",{style:{visibility:"hidden"},children:"Notas:"}),e("p",{style:{fontSize:"10px",textAlign:"justify"},children:t.notas})]}),o("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"0.5cm"},children:[e("span",{children:"SIPE: "}),e("span",{children:c(t.sipe,!0)})]}),o("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",margin:"0.4cm 0 0 0"},children:[e("span",{children:"FORMULARIO 03:"}),e("span",{children:c(t.formulario_03,!0)})]}),e("div",{style:{textAlign:"right",marginTop:"0.3cm"},children:e("span",{children:c(t.itbms,!0)})}),e("div",{style:{textAlign:"right",margin:"0.8cm 0 0.8cm 0"},children:e("span",{children:c(t.formulario_retencion_itbms,!0)})}),e("div",{style:{textAlign:"right"},children:e("span",{children:c(t.seguro_social,!0)})}),e("div",{style:{textAlign:"right",margin:"0.8cm 0 0.7cm 0"},children:e("span",{children:c(t.servicio_contabilidad,!0)})}),e("div",{style:{textAlign:"right"},children:e("span",{children:c(t.itbms_contabilidad,!0)})})]}),ce=t=>e("div",{style:{display:"flex",flexDirection:"column",flex:1,padding:"0 0 0 20px"},children:o("div",{style:{minHeight:"10.8cm",maxHeight:"10.8cm",height:"10.8cm",overflow:"hidden"},children:[o("div",{style:{marginLeft:"75px"},children:[":"," ",t.otros&&t.otros.length>0?c(t.otros.map(r=>Number(r.valor||0)).reduce((r,i)=>r+i),!0):e(k,{})]}),e("p",{style:{fontSize:"10px",textAlign:"justify"},children:t.otros&&t.otros.length>0&&t.otros.map((r,i)=>o(n.exports.Fragment,{children:[e("span",{children:r.texto}),e("br",{})]},`${r.texto}${new Date(Date.now()).getTime()+i}`))})]})});var me="/app/assets/firma-con-ps.png";const ue=t=>o("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"0.9cm"},children:[e("img",{src:me,alt:"firma",style:{flex:1,width:"50px",height:"50px"}}),e("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",flex:1,textAlign:"right",paddingRight:"27px",fontSize:"24px"},children:e("strong",{children:c(t.total,!0)})})]}),fe=t=>o("div",{style:{display:"flex",flexDirection:"column",textTransform:"uppercase",width:"14cm",height:"21.5cm",overflow:"hidden",padding:"0.5cm 0.8cm 0.8cm 0.8cm",fontSize:"12px"},children:[e(le,d({},t)),o("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[e(de,d({},t)),e(ce,d({},t))]}),e(ue,d({},t))]}),pe=t=>e("div",{style:{display:"flex",width:"100%",height:"100vh",justifyContent:"center"},children:e(fe,d({},t))}),he=n.exports.lazy(()=>f(()=>import("./StepperForm.js"),["assets/StepperForm.js","assets/index.js","assets/index8.css","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/useControlled.js","assets/useId.js","assets/Grid.js","assets/Typography.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/SelectedCard.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/DialogTitle.js","assets/dialogTitleClasses.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Fade.js","assets/Modal2.js","assets/Paper.js","assets/IconButton.js","assets/Warning.js","assets/Error.js","assets/CheckCircle.js","assets/DialogContent.js","assets/DialogActions.js","assets/LoadingButton.js","assets/Button.js","assets/CircularProgress.js","assets/Box.js"])),ge=n.exports.lazy(()=>f(()=>import("./HeaderDatos2.js"),["assets/HeaderDatos2.js","assets/Loader.js","assets/index.js","assets/index8.css","assets/Grid.js","assets/Typography.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/useControlled.js","assets/useId.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/useHttpService.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/DialogTitle.js","assets/dialogTitleClasses.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Fade.js","assets/Modal2.js","assets/Paper.js","assets/IconButton.js","assets/ButtonBase.js","assets/Warning.js","assets/Error.js","assets/CheckCircle.js","assets/DialogContent.js","assets/DialogActions.js","assets/LoadingButton.js","assets/Button.js","assets/SelectedCard.js","assets/string.helper.js","assets/regex.js","assets/Stack.js","assets/Divider.js","assets/Alert.js","assets/Close.js"])),xe=n.exports.lazy(()=>f(()=>import("./MainDatos.js"),["assets/MainDatos.js","assets/index.js","assets/index8.css","assets/DecimalInput.js","assets/yup.module.js","assets/TextInput.js","assets/TextField.js","assets/useFormControl.js","assets/useControlled.js","assets/useId.js","assets/formControlState.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/Fade.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/emotion-react.browser.esm.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/CircularProgress.js","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/useIsFocusVisible.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/DialogTitle.js","assets/dialogTitleClasses.js","assets/ModalTransition.js","assets/IconButton.js","assets/ButtonBase.js","assets/Warning.js","assets/Error.js","assets/CheckCircle.js","assets/DialogContent.js","assets/DialogActions.js","assets/LoadingButton.js","assets/Button.js","assets/SelectedCard.js"])),ve=n.exports.lazy(()=>f(()=>import("./Modal.js"),["assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index8.css","assets/createSvgIcon.js","assets/useId.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/DialogTitle.js","assets/dialogTitleClasses.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Fade.js","assets/Modal2.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Typography.js","assets/IconButton.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/Warning.js","assets/Error.js","assets/CheckCircle.js","assets/DialogContent.js","assets/DialogActions.js","assets/LoadingButton.js","assets/Button.js","assets/CircularProgress.js"])),R={decimo:0,vacaciones:0,itbms:0,formulario_retencion_itbms:0,formulario_03:0,sipe:0,seguro_social:0,seguro_social2:0,servicio_contabilidad:0,itbms_contabilidad:0,otro_costo:void 0,otros_text:void 0,notas:void 0,otros:[{texto:void 0,valor:void 0}]},Ge=()=>{var b;const{id:t,cliente:r}=K(),i=oe({url:`/admin/negocios/${t}/${r}`}),{activeStep:T,form:p,handleBack:H,handleNextStep:$,isLoading:z,res:a,modalState:M,setHide:g,handleSubmit:x}=Y({schema:P,fields:[{names:Object.keys(P.fields)}],url:`/admin/negocios/${t}/${r}/create/proformas`,defaultValues:R}),O=Q(),B=A(),V=A(),{value:s}=ae(async()=>{if(a&&a.status===201&&a.data)return await B({url:`/admin/proformas/${a.data.id}`})},[a]);n.exports.useEffect(()=>{(()=>{var F,w;!i.loading&&i.value&&i.value.status===201&&((F=i.value.data)==null?void 0:F.serv_conta)&&p.reset(h(d({},R),{servicio_contabilidad:(w=i.value.data)==null?void 0:w.serv_conta}))})()},[i.value,i.loading]);const{elementRef:I,handlePrint:v,printing:N}=ie({pageStyle:"@page { margin: 0 !important; size: letter; }",onAfterPrint:async()=>{var m;s&&s.status===201&&await V({url:"/admin/proformas/check",method:"POST",data:{proformas:[{id:(m=s.data)==null?void 0:m.id}],type:"print"}})}}),[y,_]=n.exports.useState(!1);return n.exports.useEffect(()=>{(()=>{y&&a&&a.status===201&&a.data&&s&&s.data&&s.status===201&&(v(),_(!1))})()},[y,a,s,v]),o(k,{children:[e(X,{message:"Facturar Proforma"}),o(Z,h(d({},p),{children:[e(n.exports.Suspense,{fallback:e(u,{}),children:e(ge,{})}),o(ne,{variant:"outlined",sx:{p:1,mt:2},children:[i.loading&&e(u,{}),!i.loading&&e(n.exports.Suspense,{fallback:e(u,{}),children:e(he,{activeStep:T,handleBack:H,sendLabel:"Guardar",sentLabel:"Guardado",finishedAction:()=>O("/negocios?f=1"),finishedActionText:"Realizar otra",sentLabelImage:"\xA1Factura guardada!",steps:["Datos generales"],handleNext:$,disabledLast:!0,errors:Object.keys(p.formState.errors).length,children:[e(n.exports.Suspense,{fallback:e(u,{}),children:e(xe,{})},"Datos-generales")]})})]})]})),e(re,{open:z||N}),e(n.exports.Suspense,{fallback:e("div",{}),children:e(ve,{state:M,title:"\xA1Atenci\xF3n!",setHide:a&&a.status===201?g:void 0,body:a?a&&a.data?a.data.message:(b=a.error)==null?void 0:b.message:"\xBFRealmente desea guardar la proforma?",cancelBotton:{actionFunction:g,text:a?"Cerrar":"Cancelar"},type:a&&a.status===201?"SUCCESS":"ERROR",actionButton:a?void 0:{actionFunction:x,text:"Guardar"},anotherButton:a?void 0:{actionFunction:async()=>{await x(),_(!0)},text:"Guardar e imprimir"}})}),s&&s.status===201&&s.data&&e("div",{style:{display:"none"},children:e("div",{ref:I,children:e(pe,d({},s.data))})})]})};export{Ge as default};
