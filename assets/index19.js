import{r as e,ab as n,a as r,b as u}from"./index.js";import{L as l}from"./Loader.js";import"./BootstrapTooltip.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import"./Modal.js";import"./SelectedCard.js";import{u as p}from"./useFirstFetch.js";const m=e.exports.createContext({}),c=({children:o})=>{const{id:t}=n(),{loading:a,value:s,retry:i}=p({url:`/admin/usuarios/${t}`});return r(m.Provider,{value:{loading:a,value:s,retry:i},children:o})},d=e.exports.lazy(()=>u(()=>import("./User.js"),["assets/User.js","assets/index.js","assets/index3.css","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/HeaderTitle.js","assets/Divider.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/NotFoundResults.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/LoadingButton.js","assets/Backdrop.js","assets/Modal2.js","assets/Paper.js","assets/Button.js","assets/ButtonBase.js","assets/IconButton.js","assets/Error.js","assets/SelectedCard.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/useAsync.js","assets/useHttpService.js"])),_=()=>r(c,{children:r(e.exports.Suspense,{fallback:r(l,{}),children:r(d,{})})});var h=Object.freeze(Object.defineProperty({__proto__:null,default:_},Symbol.toStringTag,{value:"Module"}));export{m as U,h as i};
