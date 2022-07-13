var h=Object.defineProperty,S=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var u=(e,a,o)=>a in e?h(e,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[a]=o,s=(e,a)=>{for(var o in a||(a={}))P.call(a,o)&&u(e,o,a[o]);if(c)for(var o of c(a))A.call(a,o)&&u(e,o,a[o]);return e},n=(e,a)=>S(e,E(a));import{ap as _,r as i,a as r,b as m,A as y,F as C}from"./index.js";import{u as l}from"./useModal.js";import{c as d}from"./string.helper.js";import{u as N}from"./useFirstFetch.js";import{u as V}from"./useFetcherEarly.js";import{L as p}from"./Loader.js";const F=()=>{const{id:e,cliente:a}=_(),{loading:o,value:t,retry:f}=N({url:`/admin/negocios/${e}/${a}`}),[v,x]=i.exports.useState(!1),[b,g]=i.exports.useState();return i.exports.useEffect(()=>{(()=>{!o&&t&&t.status===201&&t.data&&g(n(s({},t.data),{telefono:t.data.telefono,provincia:d(t.data.provincia),distrito:d(t.data.distrito),corregimiento:d(t.data.corregimiento),direccion:t.data.ubicacion,fecha_a_operacion:t.data.fecha_aviso_op?new Date(t.data.fecha_aviso_op):void 0,ruta:t.data.id_ruta,itbms_asignado_a:t.data.usuario_itbms,ss_asignado_a:t.data.usuario_sipe,tipos:t.data.tipo?[{tipo:t.data.tipo,id:t.data.id_tipo}]:void 0,cobra_sipe:Boolean(Number(t.data.cobra_sipe)),cobra_itbms:Boolean(Number(t.data.cobra_itbms))}))})()},[t,o]),{editing:v,setEditing:x,id:e,loading:o,value:t,defaultValues:b,retry:f}},z=i.exports.createContext({}),D=({children:e})=>{const a=F(),o=l(),t=l();return r(z.Provider,{value:n(s({},a),{modalMark:o,modalEditPatronal:t}),children:e})},L=i.exports.createContext({}),O=({children:e})=>{const{id:a}=_(),o=V(`/admin/asignados/${a}`);return r(L.Provider,{value:{fetcher:o},children:e})},j=i.exports.lazy(()=>m(()=>import("./Super.js"),["assets/Super.js","assets/index.js","assets/index3.css","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/HeaderTitle.js","assets/Divider.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/NotFoundResults.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/Paper.js","assets/IconButton.js","assets/ButtonBase.js","assets/CheckCircle.js","assets/DialogContent.js","assets/LoadingButton.js","assets/Button.js","assets/SelectedCard.js","assets/Box.js","assets/useModal.js","assets/string.helper.js","assets/regex.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/useAsync.js","assets/useHttpService.js","assets/useFetcherEarly.js"])),k=i.exports.lazy(()=>m(()=>import("./Empleado.js"),["assets/Empleado.js","assets/Empleado.css","assets/ChipState.js","assets/CheckCircle.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index3.css","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/Chip.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/CircularProgress.js","assets/StyledSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/isHostComponent.js","assets/Grow.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Backdrop.js","assets/Stack.js","assets/Typography.js","assets/AssignmentTurnedIn.js","assets/string.helper.js","assets/regex.js","assets/useModal.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/useAsync.js","assets/useHttpService.js","assets/useFetcherEarly.js","assets/Loader.js","assets/Grid.js"])),w=()=>{const{authState:e}=i.exports.useContext(y),{tipo:a}=e;return r(C,{children:["Super","Administrador"].includes(a||"")?r(i.exports.Suspense,{fallback:r(p,{}),children:r(D,{children:r(j,{})})}):r(i.exports.Suspense,{fallback:r(p,{}),children:r(O,{children:r(k,{})})})})};var G=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"}));export{L as A,z as N,G as i};
