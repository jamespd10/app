var I=Object.defineProperty;var d=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var _=(a,o,e)=>o in a?I(a,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[o]=e,l=(a,o)=>{for(var e in o||(o={}))S.call(o,e)&&_(a,e,o[e]);if(d)for(var e of d(o))k.call(o,e)&&_(a,e,o[e]);return a};import{r,ae as P,a as t,b as s,j as n,F as i}from"./index.js";import{L as p}from"./Loader.js";import{H as L}from"./HeaderTitle.js";import"./BootstrapTooltip.js";import"./jwt-decode.esm.js";import{N as O}from"./NotFoundResults.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import"./Modal.js";import"./platform.js";import{I as u}from"./index40.js";import{a as R,f as V}from"./string.helper.js";import{u as z}from"./useStepper.js";import{s as m}from"./agregarSchema.js";import{T as A}from"./Typography.js";const D=r.exports.createContext({}),C=({children:a})=>{const{negocioItbms:o}=r.exports.useContext(u),{itbms:e}=o,{id:c}=P(),{activeStep:x,form:v,handleBack:h,handleNextStep:f,isLoading:g,res:b,modalState:y,setHide:E,handleSubmit:T}=z({schema:m,fields:[{names:Object.keys(m.fields)}],url:`/admin/itbms/${c}/editar`,defaultValues:{compra_7:e==null?void 0:e.compra_7,compra_10:e==null?void 0:e.compra_10,compra_15:e==null?void 0:e.compra_15,compra_exnt:e==null?void 0:e.compra_exnt,compra_import:e==null?void 0:e.compra_import,venta_7:e==null?void 0:e.venta_7,venta_10:e==null?void 0:e.venta_10,venta_15:e==null?void 0:e.venta_15,venta_exnt:e==null?void 0:e.venta_exnt,notas:R(e==null?void 0:e.notas),acumulado:e&&Number(e.total)<0?Math.abs(Number(e.total)):0,retenciones:(e==null?void 0:e.retenciones)&&e.retenciones.length>0?e==null?void 0:e.retenciones:[{texto:"",valor:""}],gastos:(e==null?void 0:e.gastos)&&e.gastos.length>0?e==null?void 0:e.gastos:[{texto:"",valor:"",nombre:"",ruc:"",dv:""}]}});return t(D.Provider,{value:{activeStep:x,form:v,handleBack:h,handleNextStep:f,isLoading:g,res:b,modalState:y,setHide:E,handleSubmit:T},children:a})},N=r.exports.lazy(()=>s(()=>import("./ComprasTable.js"),["assets/ComprasTable.js","assets/CustomTable.js","assets/Search.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index4.css","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/Clear.js","assets/TextField.js","assets/FormHelperText.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/GlobalStyles.js","assets/Box.js","assets/Typography.js","assets/InputAdornment.js","assets/IconButton.js","assets/ButtonBase.js","assets/Grid.js","assets/FormGroup.js","assets/FormControlLabel.js","assets/Checkbox.js","assets/SkipNextOutlined.js","assets/Pagination.js","assets/useAsyncRetry.js","assets/TableRow.js","assets/Button.js","assets/Loader.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/jwt-decode.esm.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal.js","assets/Close2.js","assets/LoadingButton.js","assets/Error.js","assets/platform.js","assets/Stack.js","assets/LinearProgress.js","assets/string.helper.js","assets/regex.js"])),j=r.exports.lazy(()=>s(()=>import("./VentasTable.js"),["assets/VentasTable.js","assets/CustomTable.js","assets/Search.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index4.css","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/Clear.js","assets/TextField.js","assets/FormHelperText.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/GlobalStyles.js","assets/Box.js","assets/Typography.js","assets/InputAdornment.js","assets/IconButton.js","assets/ButtonBase.js","assets/Grid.js","assets/FormGroup.js","assets/FormControlLabel.js","assets/Checkbox.js","assets/SkipNextOutlined.js","assets/Pagination.js","assets/useAsyncRetry.js","assets/TableRow.js","assets/Button.js","assets/Loader.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/jwt-decode.esm.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal.js","assets/Close2.js","assets/LoadingButton.js","assets/Error.js","assets/platform.js","assets/Stack.js","assets/LinearProgress.js","assets/string.helper.js","assets/regex.js"])),M=r.exports.lazy(()=>s(()=>import("./RetencionesTable.js"),["assets/RetencionesTable.js","assets/CustomTable.js","assets/Search.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index4.css","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/Clear.js","assets/TextField.js","assets/FormHelperText.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/GlobalStyles.js","assets/Box.js","assets/Typography.js","assets/InputAdornment.js","assets/IconButton.js","assets/ButtonBase.js","assets/Grid.js","assets/FormGroup.js","assets/FormControlLabel.js","assets/Checkbox.js","assets/SkipNextOutlined.js","assets/Pagination.js","assets/useAsyncRetry.js","assets/TableRow.js","assets/Button.js","assets/Loader.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/jwt-decode.esm.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal.js","assets/Close2.js","assets/LoadingButton.js","assets/Error.js","assets/platform.js","assets/Stack.js","assets/LinearProgress.js","assets/string.helper.js","assets/regex.js"])),H=r.exports.lazy(()=>s(()=>import("./GastosTable.js"),["assets/GastosTable.js","assets/CustomTable.js","assets/Search.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index4.css","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/Clear.js","assets/TextField.js","assets/FormHelperText.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/GlobalStyles.js","assets/Box.js","assets/Typography.js","assets/InputAdornment.js","assets/IconButton.js","assets/ButtonBase.js","assets/Grid.js","assets/FormGroup.js","assets/FormControlLabel.js","assets/Checkbox.js","assets/SkipNextOutlined.js","assets/Pagination.js","assets/useAsyncRetry.js","assets/TableRow.js","assets/Button.js","assets/Loader.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/jwt-decode.esm.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal.js","assets/Close2.js","assets/LoadingButton.js","assets/Error.js","assets/platform.js","assets/Stack.js","assets/LinearProgress.js","assets/string.helper.js","assets/regex.js"])),B=r.exports.lazy(()=>s(()=>import("./Header.js"),["assets/Header.js","assets/string.helper.js","assets/index.js","assets/index4.css","assets/regex.js","assets/date.helper.js","assets/index13.js","assets/Paper.js","assets/Typography.js","assets/Divider.js"])),F=r.exports.lazy(()=>s(()=>import("./Acciones8.js"),["assets/Acciones8.js","assets/CustomSpeedDial.js","assets/index.js","assets/index4.css","assets/Assignment.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/ButtonBase.js","assets/Tooltip.js","assets/Portal.js","assets/isHostComponent.js","assets/Grow.js","assets/ContentProvider.js","assets/useModal.js","assets/jwt-decode.esm.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Backdrop.js","assets/Stack.js","assets/Typography.js","assets/index40.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/useHttpService.js","assets/Loader.js","assets/Grid.js","assets/Edit.js","assets/Check.js"])),$=r.exports.lazy(()=>s(()=>import("./Editar.js"),["assets/Editar.js","assets/index.js","assets/index4.css","assets/array.js","assets/upperFirst.js","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/jwt-decode.esm.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/StepperForm.js","assets/platform.js","assets/ButtonBase.js","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/LoadingButton.js","assets/Backdrop.js","assets/Modal2.js","assets/Paper.js","assets/Button.js","assets/IconButton.js","assets/Error.js","assets/Box.js","assets/HeaderTitle.js","assets/Divider.js","assets/NotFoundResults.js","assets/index40.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/useHttpService.js","assets/string.helper.js","assets/regex.js","assets/useStepper.js","assets/useFetch.js","assets/agregarSchema.js","assets/Lazy.js"])),G=r.exports.lazy(()=>s(()=>import("./ModalCheckSend.js"),["assets/ModalCheckSend.js","assets/index.js","assets/index4.css","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/LoadingButton.js","assets/Backdrop.js","assets/Modal2.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Typography.js","assets/Button.js","assets/ButtonBase.js","assets/IconButton.js","assets/Error.js","assets/index40.js","assets/useModal.js","assets/jwt-decode.esm.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/useHttpService.js","assets/Loader.js","assets/Grid.js","assets/useFetch.js"])),q=()=>{const{loading:a,value:o,negocioItbms:e,editing:c}=r.exports.useContext(u);return n(i,{children:[t(L,{message:"Datos de ITBMS"}),a&&!o&&!e&&t(p,{}),!a&&o&&o.status!==201&&t(O,{}),!a&&o&&o.status===201&&o.data&&e&&e.itbms&&n(C,{children:[t(r.exports.Suspense,{fallback:t(p,{}),children:t(B,l({},e))}),t("div",{style:{margin:"10px 0 10px 0"}}),!c&&n(i,{children:[t(r.exports.Suspense,{fallback:t(p,{}),children:t(j,l({},e.itbms))}),t("div",{style:{margin:"10px 0 10px 0"}}),t(r.exports.Suspense,{fallback:t(p,{}),children:t(N,l({},e.itbms))}),e.itbms.retenciones.length>0&&n(i,{children:[t("div",{style:{margin:"10px 0 10px 0"}}),t(r.exports.Suspense,{fallback:t(p,{}),children:t(M,l({},e.itbms))})]}),e.itbms.gastos.length>0&&n(i,{children:[t("div",{style:{margin:"10px 0 10px 0"}}),t(r.exports.Suspense,{fallback:t(p,{}),children:t(H,l({},e.itbms))})]}),t("hr",{style:{margin:"10px 0 10px 0",border:"1px solid black"}}),n(A,{variant:"h4",children:[e.itbms&&Number(e.itbms.total)<0?"Total de saldo":"Total pagado",":"," ",t("strong",{style:{borderBottom:"double black",color:e.itbms&&Number(e.itbms.total)<0?"red":"black"},children:V(e.itbms.total)})]})]}),!e.itbms.fecha_enviado&&n(i,{children:[t(r.exports.Suspense,{fallback:t("div",{}),children:t(F,{})}),t(r.exports.Suspense,{fallback:t("div",{}),children:t(G,{})})]}),c&&t(r.exports.Suspense,{fallback:t("div",{}),children:t($,{})})]})]})};var le=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"}));export{D as E,le as I};
