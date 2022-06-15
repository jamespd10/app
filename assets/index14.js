var g=Object.defineProperty,C=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var m=(t,e,a)=>e in t?g(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,u=(t,e)=>{for(var a in e||(e={}))w.call(e,a)&&m(t,a,e[a]);if(p)for(var a of p(e))y.call(e,a)&&m(t,a,e[a]);return t},f=(t,e)=>C(t,v(e));import{ag as _,r,a as i,q as D,j as E}from"./index.js";import{L as O}from"./Loader.js";import{H as j}from"./HeaderTitle.js";import"./BootstrapTooltip.js";import"./jwt-decode.esm.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import"./Modal2.js";import"./platform.js";import{u as F}from"./useFetch.js";import{u as z}from"./useModal.js";import{u as I}from"./useHandlePrint.js";import{c as L}from"./string.helper.js";import{u as T}from"./useFirstFetch.js";const V=()=>{const{id:t}=_(),{loading:e,value:a,retry:d}=T({url:`/admin/contratos/${t}`}),[s,l]=r.exports.useState();return r.exports.useEffect(()=>{(()=>{var n;!e&&a&&a.status===201&&a.data&&l(f(u({},a.data),{dependientes:a.data.dependientes.length>0?a.data.dependientes.map(o=>({nombre:o.nombre,apellido:o.apellido,edad:o.edad,parentesco:o.parentesco})):[{nombre:void 0,apellido:void 0,edad:void 0,parentesco:void 0}],horasLaborales:a.data.laborales.map(o=>({entrada1:new Date(o.entrada1),salida1:new Date(o.salida1),entrada2:new Date(o.entrada2),salida2:new Date(o.salida2)})),nacionalidad:L(a.data.nacionalidad),isSeguroSocial:["Cedula","Pasaporte"].includes(a.data.tipo_identificacion)?"C\xE9dula O Pasaporte":"Otro",tiempo_proba:(n=a.data.tiempo_proba)!=null?n:void 0,isProbatorio:a.data.tiempo_proba?"Si":"No",direccion:a.data.direccion,rotativo:a.data.rotativo!==0,definido:a.data.definido===1,fecha_ini:new Date(a.data.fecha_ini),tipoIdentificacion:a.data.tipo_identificacion==="Pasaporte"?"Pasaporte":"C\xE9dula",fecha_fin:a.data.fecha_fin?new Date(a.data.fecha_fin):void 0}))})()},[a,e]),{loading:e,value:a,defaultValues:s,retry:d}},H=r.exports.createContext({}),A=({children:t})=>{const{id:e}=_(),{loading:a,value:d,defaultValues:s,retry:l}=V(),{send:c}=F(),[n,o]=r.exports.useState(!1),h=async()=>{await c({url:`/admin/contratos/${e}/print`,method:"POST"})},{elementRef:x,handlePrint:P,printing:b}=I({pageStyle:"@page { size: legal }",onAfterPrint:h}),S=z();return i(H.Provider,{value:{loading:a,value:d,defaultValues:s,retry:l,edit:n,setEdit:o,elementRef:x,handlePrint:P,printing:b,modalProcesado:S},children:t})},M=r.exports.lazy(()=>D(()=>import("./Contrato.js"),["assets/Contrato.js","assets/index.js","assets/index2.css","assets/Loader.js","assets/Grid.js","assets/extendSxProp.js","assets/Typography.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/jwt-decode.esm.js","assets/NotFoundResults.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal2.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/LoadingButton.js","assets/Backdrop.js","assets/Modal.js","assets/Paper.js","assets/Button.js","assets/ButtonBase.js","assets/IconButton.js","assets/Error.js","assets/platform.js","assets/Stack.js","assets/HeaderTitle.js","assets/Divider.js","assets/useFetch.js","assets/useHttpService.js","assets/useHandlePrint.js","assets/index15.js","assets/string.helper.js","assets/regex.js","assets/useFirstFetch.js","assets/useAsyncRetry.js"])),R=()=>E(A,{children:[i(j,{message:"Informaci\xF3n del Contrato"}),i(r.exports.Suspense,{fallback:i(O,{}),children:i(M,{})})]});var ea=Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"}));export{H as C,ea as i};
