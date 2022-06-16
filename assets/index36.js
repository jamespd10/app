var k=Object.defineProperty,y=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var u=(e,t,a)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,_=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&u(e,a,t[a]);if(l)for(var a of l(t))S.call(t,a)&&u(e,a,t[a]);return e},m=(e,t)=>y(e,E(t));var f=(e,t)=>{var a={};for(var o in e)p.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&l)for(var o of l(e))t.indexOf(o)<0&&S.call(e,o)&&(a[o]=e[o]);return a};import{r as s,ab as O,a as r,b as z,a1 as F}from"./index.js";import"./jwt-decode.esm.js";import{u as N}from"./useFetchPagination.js";import{L as R}from"./Loader.js";const T=s.exports.createContext({}),A=a=>{var o=a,{children:e}=o,t=f(o,["children"]);const{total_cliente_negocio:i}=t,{id:h}=O(),{loading:c,value:n,page:x,handlePage:g,handleSkipNext:v,handleSkipPrev:C,inputRef:P,sendSearch:b,onClearSearch:L}=N(`/admin/negocios/${h}/clientes`),[j,d]=s.exports.useState();return s.exports.useEffect(()=>{(()=>{!c&&n&&n.status===201&&n.data&&n.data.resultados.length===1&&Number(i)===1&&d(()=>n.data.resultados[0])})()},[n,c,i]),r(T.Provider,{value:{loading:c,value:n,cliente:j,setCliente:d,page:x,handlePage:g,handleSkipNext:v,handleSkipPrev:C,inputRef:P,sendSearch:b,onClearSearch:L,total_cliente_negocio:i},children:e})},D=s.exports.lazy(()=>z(()=>import("./SelectClient.js"),["assets/SelectClient.js","assets/index.js","assets/index7.css","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/jwt-decode.esm.js","assets/NotFoundResults.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/LoadingButton.js","assets/Backdrop.js","assets/Modal2.js","assets/Paper.js","assets/Button.js","assets/ButtonBase.js","assets/IconButton.js","assets/Error.js","assets/platform.js","assets/useFetchPagination.js","assets/useAsyncRetry.js","assets/useList.js","assets/usePrevious.js","assets/useHttpService.js"])),I=()=>{const{state:e}=F();return r(A,m(_({},e),{children:r(s.exports.Suspense,{fallback:r(R,{}),children:r(D,{})})}))};var G=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"}));export{T as S,G as i};
