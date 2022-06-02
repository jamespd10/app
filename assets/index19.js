import{r as e,ac as n,a as r,q as u}from"./index.js";import{L as l}from"./Loader.js";import"./BootstrapTooltip.js";import"./jwt-decode.esm.js";import"./ContentProvider.js";import"./Modal2.js";import"./platform.js";import{u as p}from"./useFirstFetch.js";const c=e.exports.createContext({}),m=({children:o})=>{const{id:t}=n(),{loading:a,value:s,retry:i}=p({url:`/admin/usuarios/${t}`});return r(c.Provider,{value:{loading:a,value:s,retry:i},children:o})},d=e.exports.lazy(()=>u(()=>import("./User.js"),["assets/User.js","assets/index.js","assets/index.css","assets/Loader.js","assets/Grid.js","assets/extendSxProp.js","assets/Typography.js","assets/HeaderTitle.js","assets/Divider.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/jwt-decode.esm.js","assets/NotFoundResults.js","assets/ContentProvider.js","assets/useModal.js","assets/Modal2.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/IconButton.js","assets/ButtonBase.js","assets/Error.js","assets/Backdrop.js","assets/Modal.js","assets/Paper.js","assets/Button.js","assets/platform.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/useHttpService.js","assets/constants.js"])),_=()=>r(m,{children:r(e.exports.Suspense,{fallback:r(l,{}),children:r(d,{})})});var h=Object.freeze(Object.defineProperty({__proto__:null,default:_},Symbol.toStringTag,{value:"Module"}));export{c as U,h as i};
