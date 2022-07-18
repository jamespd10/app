import{r,q as f,a2 as c,b as l,a as t,F as h,j as x}from"./index.js";import{L as a}from"./Loader.js";import"./BootstrapTooltip.js";import"./SpeedDial.module.js";import"./Modal.js";import"./SelectedCard.js";import"./Grid.js";import"./Typography.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./isHostComponent.js";import"./Grow.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Fade.js";import"./Modal2.js";import"./Paper.js";import"./IconButton.js";import"./ButtonBase.js";import"./Warning.js";import"./CheckCircle.js";import"./DialogContent.js";import"./DialogActions.js";import"./LoadingButton.js";import"./Button.js";const m=()=>window.innerHeight<window.innerWidth?"LANDSCAPE":"PORTRAIT",w=()=>{const[e,o]=r.exports.useState(m());return r.exports.useLayoutEffect(()=>{const i=()=>{o(m())};return window.addEventListener("resize",i),i(),()=>window.removeEventListener("resize",i)},[]),e},v=({breaks:e,breakProperty:o,orientation:i})=>{const[d,n]=r.exports.useState(!1),s=w(),u=f(),p=c(u.breakpoints[o](`${e}`,`${e}`));return r.exports.useEffect(()=>{n(!!(p&&s===i))},[p,s,i]),d},y=r.exports.lazy(()=>l(()=>import("./Form.js"),["assets/Form.js","assets/index.js","assets/index6.css","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/yup.module.js","assets/array.js","assets/upperFirst.js","assets/useFetch.js","assets/useHttpService.js","assets/useModal.js","assets/LoadingButton.js","assets/Button.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/CircularProgress.js","assets/PasswordInput.js","assets/TextInput.js","assets/TextField.js","assets/useFormControl.js","assets/formControlState.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/Fade.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/InputAdornment.js","assets/Typography.js","assets/IconButton.js","assets/Card.js","assets/CardContent.js"])),_=r.exports.lazy(()=>l(()=>import("./Welcome.js"),["assets/Welcome.js","assets/logo_completo.js","assets/index.js","assets/index6.css"])),tt=()=>{const e=v({orientation:"LANDSCAPE",breakProperty:"up",breaks:"sm"}),o=c("(min-width:600px)");return t(h,{children:x("div",{style:{display:"flex",flexDirection:"row",alignContent:"center",flexWrap:"wrap",minHeight:"calc(100vh - 72px)",justifyContent:o?"center":"space-around"},children:[t("div",{style:{width:e?"50%":"100%",display:"flex",alignItems:"center",alignContent:"center"},children:t(r.exports.Suspense,{fallback:t(a,{}),children:t(_,{})})}),t("div",{style:{width:e?"50%":"100%",display:"flex",alignItems:"center",alignContent:"center"},children:t(r.exports.Suspense,{fallback:t(a,{}),children:t(y,{})})})]})})};export{tt as default};
