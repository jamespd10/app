var g=Object.defineProperty,b=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var d=(t,e,o)=>e in t?g(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,f=(t,e)=>{for(var o in e||(e={}))h.call(e,o)&&d(t,o,e[o]);if(m)for(var o of m(e))x.call(e,o)&&d(t,o,e[o]);return t},p=(t,e)=>b(t,v(e));import{r as n,f as C,a as s,b as u,j as F}from"./index.js";import{B as y}from"./BootstrapModal.js";import{B as D}from"./BootstrapDivContent.js";import{P as B}from"./index45.js";import{L as P}from"./Loader.js";import{u as M}from"./useForm.js";import{c as T,d as _}from"./array.js";const E="_container_1t1ul_1",S="_form_1t1ul_5",q="_flexRow_1t1ul_12",w="_flexGrow_1t1ul_18",A="_flexColumn_1t1ul_22",R="_spaceBetween_1t1ul_28",V="_justifyCenter_1t1ul_32",j="_spaceAround_1t1ul_36",N="_header_1t1ul_40",L="_border_1t1ul_51",O="_otrosTitle_1t1ul_57",k="_fecha_1t1ul_62",z="_total_1t1ul_66",G="_money_1t1ul_72",I="_moneyTotal_1t1ul_73",$="_rightColumn_1t1ul_82",H="_formContainer_1t1ul_94",J="_itemRight_1t1ul_97";var K={container:E,form:S,flexRow:q,flexGrow:w,flexColumn:A,spaceBetween:R,justifyCenter:V,spaceAround:j,header:N,border:L,otrosTitle:O,fecha:k,total:z,money:G,moneyTotal:I,rightColumn:$,formContainer:H,itemRight:J};const Q=T().shape({id:_().typeError("Favor ingresar la proforma").integer("Favor ingresar la proforma").min(0,"Favor ingresar la proforma").required("Favor ingresar la proforma"),id_negocio:_().typeError("Favor ingresar el negocio").integer("Favor ingresar el negocio").positive("Favor ingresar el negocio").min(0,"Favor ingresar el negocio").required("Favor ingresar el negocio"),id_cliente:_().typeError("Favor ingresar el cliente").integer("Favor ingresar el cliente").positive("Favor ingresar el cliente").min(0,"Favor ingresar el cliente").required("Favor ingresar el cliente")}),U=()=>{const t=n.exports.useMemo(()=>[{tipo_documento:"",monto:"",itbms:Boolean(Number(0))}],[]),e=n.exports.useMemo(()=>[{mes_correspondiente:"",total:""}],[]),o=n.exports.useMemo(()=>[{id:0,nombre:"",identificacion:"",monto:""}],[]),a=n.exports.useMemo(()=>[{id:0,nombre:"",identificacion:"",monto:""}],[]),i=n.exports.useMemo(()=>[{id:0,nombre:"",identificacion:"",monto:""}],[]),l=n.exports.useMemo(()=>[{id:0,nombre:"",identificacion:"",descripcion:"",salario:""}],[]);return{defaultValue:n.exports.useMemo(()=>({id:0,id_negocio:0,id_cliente:0,fecha_creacion:"",mes_correspondiente:"",fecha_impresion:"",fecha_anulacion:"",nom_cliente:"",ruc:"",nombre_negocio:"",tipo:"",recorrido:0,cobra_sipe:Boolean(Number(1)),cobra_itbms:Boolean(Number(1)),enviar_boleta:"",ruta:"",itbms_a_pagar:"",pendiente_itbms:Boolean(Number(0)),seguro_social:"",seguro_social_2:"",nombre_seguro_social_2:"",seguro_social_3:"",nombre_seguro_social_3:"",planilla_03_mensual:"",formulario_retenciones:"",formulario_compras:"",formulario_ventas:"",cargo_al:"",servicio_contabilidad:"",itbms_servicios:"",total:"",lista:Boolean(Number(0)),otros_cobros:t,contratos:o,liquidaciones:a,empleados:l,itbms_anteriores:e,vacaciones:i}),[t,e,o,a,l,i]),contratosDefault:o,liquidacionesDefault:a,empleadosDefault:l,otrosCobrosDefault:t,itbmsAnteriorDefault:e,vacacionesDefault:i}},W=()=>{const{defaultValue:t,contratosDefault:e,liquidacionesDefault:o,empleadosDefault:a,itbmsAnteriorDefault:i,otrosCobrosDefault:l,vacacionesDefault:c}=U();return{handleSet:n.exports.useCallback(r=>r?p(f({},r),{nombre_seguro_social_2:r.nombre_seguro_social_2||"",nombre_seguro_social_3:r.nombre_seguro_social_3||"",otros_cobros:r.otros_cobros.length>0?r.otros_cobros:l,contratos:r.contratos.length>0?r.contratos:e,liquidaciones:r.liquidaciones.length>0?r.liquidaciones:o,vacaciones:r.vacaciones.length>0?r.vacaciones:c,itbms_anteriores:r.itbms_anteriores.length>0?r.itbms_anteriores:i,empleados:r.empleados.length>0?r.empleados:a}):t,[t,e,o,a,i,l,c])}},X=n.exports.createContext({}),Y=({children:t,proforma:e})=>{const{handleSet:o}=W(),a=M(o(e),Q),i=C();return s(X.Provider,{value:{form:a,fetcher:i},children:t})},Z=n.exports.lazy(()=>u(()=>import("./index80.js"),["assets/index80.js","assets/index.js","assets/index9.css","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/index45.js","assets/HeaderTitle.js","assets/Divider.js","assets/BootstrapModal.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Fade.js","assets/Modal2.js","assets/isHostComponent.js","assets/useId.js","assets/Portal.js","assets/Paper.js","assets/BootstrapDivContent.js","assets/BootstrapDivContent.css","assets/useForm.js","assets/object.helper.js","assets/array.js"])),ee=n.exports.lazy(()=>u(()=>import("./ModalTitle.js"),["assets/ModalTitle.js","assets/ModalTitle.css","assets/index.js","assets/index9.css","assets/BootstrapModalTitle.js","assets/BootstrapModalTitle.css","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useId.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/DialogTitle.js","assets/dialogTitleClasses.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Fade.js","assets/Modal2.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Typography.js","assets/IconButton.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/MenuOpen.js","assets/index45.js","assets/HeaderTitle.js","assets/Divider.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/Print.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Grow.js","assets/useNextBackClick.js","assets/BootstrapModal.js","assets/BootstrapDivContent.js","assets/BootstrapDivContent.css","assets/useForm.js","assets/object.helper.js","assets/array.js"])),oe=n.exports.lazy(()=>u(()=>import("./ModalAcciones4.js"),["assets/ModalAcciones4.js","assets/ModalAcciones.css","assets/index.js","assets/index9.css","assets/index45.js","assets/HeaderTitle.js","assets/Typography.js","assets/Divider.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/DialogActions.js","assets/useNextBackClick.js","assets/LoadingButton.js","assets/Button.js","assets/ButtonBase.js","assets/useIsFocusVisible.js","assets/useId.js","assets/BootstrapModal.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Fade.js","assets/Modal2.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/BootstrapDivContent.js","assets/BootstrapDivContent.css","assets/useForm.js","assets/object.helper.js","assets/array.js"])),te=()=>{const{pagination:t}=n.exports.useContext(B),{currentValue:e}=t,[o,a]=e;return s(y,{open:!!o,onClose:()=>a(null),fullScreen:!0,children:F(Y,{proforma:o,children:[s(n.exports.Suspense,{fallback:s("div",{}),children:s(ee,{})}),s(D,{className:K.container,children:s(n.exports.Suspense,{fallback:s(P,{}),children:s(Z,{})})}),s(n.exports.Suspense,{fallback:s("div",{}),children:s(oe,{})})]})})};var me=Object.freeze(Object.defineProperty({__proto__:null,default:te},Symbol.toStringTag,{value:"Module"}));export{X as F,me as i,K as s,W as u};
