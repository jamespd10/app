import{r as o,f as x,a as e,aw as _,b as d,j as C}from"./index.js";import{L as c}from"./Loader.js";import{s}from"./FormularioRealizar.js";import{C as m}from"./index53.js";const h=o.exports.createContext({}),v=({children:t,i:a,negocio:r})=>{const n=x(),[,u,,,,p]=n,{mes:l,cliente:i}=o.exports.useContext(m);return o.exports.useEffect(()=>{(()=>{const f=_(l,"yyyy-MM-01");p(),u(`/admin/clientes/${i==null?void 0:i.id}/negocios/${r.id}/f430`,{params:{mes_correspondiente:f}})})()},[l,i,r]),e(h.Provider,{value:{fetcher:n,i:a,negocio:r},children:t})},y=o.exports.lazy(()=>d(()=>import("./index81.js"),["assets/index81.js","assets/index16.css","assets/index.js","assets/index14.css","assets/FormularioRealizar.js","assets/FormularioRealizar.css","assets/ErrorIcon.js","assets/StyledGridOverlay.js","assets/Box.js","assets/Typography.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/index53.js","assets/BootstrapModal.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Fade.js","assets/Modal2.js","assets/isHostComponent.js","assets/useId.js","assets/Portal.js","assets/Paper.js","assets/BootstrapModalTitle.js","assets/BootstrapModalTitle.css","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/DialogTitle.js","assets/dialogTitleClasses.js","assets/IconButton.js","assets/ButtonBase.js","assets/Paid.js","assets/BootstrapDivContent.js","assets/BootstrapDivContent.css","assets/Divider.js","assets/index18.js","assets/index10.css","assets/HeaderTitle.js","assets/StyledSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/Tooltip.js","assets/Popper.js","assets/Grow.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Stack.js","assets/index33.js","assets/DialogActions.js","assets/Button.js"])),b=o.exports.lazy(()=>d(()=>import("./Formulario2.js").then(function(t){return t.a}),["assets/Formulario2.js","assets/index.js","assets/index14.css","assets/Loader2.js","assets/Loader.css","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/index53.js","assets/BootstrapModal.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Fade.js","assets/Modal2.js","assets/isHostComponent.js","assets/useId.js","assets/Portal.js","assets/Paper.js","assets/BootstrapModalTitle.js","assets/BootstrapModalTitle.css","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/DialogTitle.js","assets/dialogTitleClasses.js","assets/IconButton.js","assets/ButtonBase.js","assets/Paid.js","assets/BootstrapDivContent.js","assets/BootstrapDivContent.css","assets/Divider.js","assets/index18.js","assets/index10.css","assets/HeaderTitle.js","assets/StyledSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/Tooltip.js","assets/Popper.js","assets/Grow.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Stack.js","assets/index33.js","assets/DialogActions.js","assets/Button.js","assets/useForm.js","assets/object.helper.js","assets/array.js","assets/upperFirst.js","assets/regex.js","assets/Lazy.js","assets/useGetDefaultValues.js","assets/FormularioRealizar.js","assets/FormularioRealizar.css","assets/ErrorIcon.js","assets/StyledGridOverlay.js","assets/Box.js"])),N=()=>{var a;const{cliente:t}=o.exports.useContext(m);return e("div",{className:s.flexRow,children:e("div",{className:s.flexColumnContainer,children:e("div",{className:s.row,children:e("div",{className:`${s.justifyCenter}`,children:C("div",{className:`${s.flexRow}`,children:[(a=t==null?void 0:t.negocios)==null?void 0:a.map((r,n)=>e(v,{negocio:r,i:n,children:e(o.exports.Suspense,{fallback:e(c,{}),children:e(b,{})})},r.id)),e(o.exports.Suspense,{fallback:e(c,{}),children:e(y,{})})]})})})})})};var F=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"}));export{F as C,h as N};
