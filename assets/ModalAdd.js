var T=Object.defineProperty,b=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var v=(r,o,t)=>o in r?T(r,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[o]=t,l=(r,o)=>{for(var t in o||(o={}))S.call(o,t)&&v(r,t,o[t]);if(g)for(var t of g(o))k.call(o,t)&&v(r,t,o[t]);return r},c=(r,o)=>b(r,L(o));import{r as s,b as N,f as P,j as p,a as i}from"./index.js";import{N as j}from"./index15.js";import{a as z,F as I,o as M}from"./yup.module.js";import{a as E}from"./addNitSchema.js";import{L as O}from"./Loader.js";import"./BootstrapTooltip.js";import"./SpeedDial.module.js";import"./Modal.js";import"./SelectedCard.js";import{B as V,a as w}from"./BootstrapModalTitle.js";import{B as G}from"./BootstrapDivContent.js";import{d as H}from"./Add.js";import{T as R}from"./Typography.js";import{A as q}from"./Alert.js";import{D as J}from"./DialogActions.js";import{B as K}from"./Button.js";import{L as Q}from"./LoadingButton.js";import"./HeaderTitle.js";import"./Divider.js";import"./Box.js";import"./array.js";import"./upperFirst.js";import"./Grid.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./isHostComponent.js";import"./Grow.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Fade.js";import"./Modal2.js";import"./Paper.js";import"./IconButton.js";import"./ButtonBase.js";import"./Warning.js";import"./CheckCircle.js";import"./DialogContent.js";import"./Close.js";const U=s.exports.lazy(()=>N(()=>import("./FormInputs.js"),["assets/FormInputs.js","assets/TextInput.js","assets/index.js","assets/index6.css","assets/TextField.js","assets/useFormControl.js","assets/useControlled.js","assets/formControlState.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/Fade.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/emotion-react.browser.esm.js","assets/yup.module.js","assets/Grid.js","assets/Typography.js"])),Ro=()=>{const r=s.exports.useMemo(()=>({ruc:"",contra:"",correo:"",dv:"",nit:"",razon_social:"",tipo_razon:"",usuario:""}),[]),{modalAdd:o,pagination:t}=s.exports.useContext(j),{fetcher:_}=t,[,,a,,C]=_,[B,F]=o,[u,y,e,m,,A]=P(),n=z({mode:"all",resolver:M(E),defaultValues:r}),{handleSubmit:D}=n,d=s.exports.useCallback(()=>{F(!1),A(),n.reset(r)},[]);return p(V,{open:B,onClose:()=>d(),children:[i(w,{onClose:()=>d(),children:p(R,{textTransform:"uppercase",display:"flex",flexDirection:"row",gap:1,alignItems:"center",children:[i(H,{}),"Formulario de edici\xF3n de datos de nit"]})}),i(G,{children:p(I,c(l({},n),{children:[(e||m)&&i(q,{variant:"outlined",severity:e?"success":"error",children:(e==null?void 0:e.message)||(m==null?void 0:m.message)}),i(s.exports.Suspense,{fallback:i(O,{}),children:i(U,{})})]}))}),p(J,{children:[i(K,{variant:"outlined",color:"inherit",disabled:u,onClick:()=>d(),children:"Cerrar"}),i(Q,{variant:"outlined",color:"primary",loading:u,onClick:D(f=>{y("/admin/nit/add",{data:f,method:"POST"}).then(h=>{if(h.data){const x=(a==null?void 0:a.resultados)||[];x.unshift(c(l({},f),{id:h.data.id})),C({paginas:(a==null?void 0:a.paginas)||1,resultados:x})}})}),children:"Guardar"})]})]})};export{Ro as default};
