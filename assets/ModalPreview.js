import{r as i,b as e,j as m,a as r}from"./index.js";import{L as p}from"./Loader.js";import{B as s,a}from"./BootstrapModalTitle.js";import{P as l}from"./index14.js";import{B as n}from"./BootstrapDivContent.js";import{F as c}from"./FormulariosProvider.js";import{T as d}from"./Typography.js";import{D as v}from"./DialogActions.js";import{B as f}from"./Button.js";import"./Grid.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Fade.js";import"./Modal2.js";import"./isHostComponent.js";import"./useControlled.js";import"./Portal.js";import"./Paper.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useIsFocusVisible.js";import"./IconButton.js";import"./ButtonBase.js";import"./HeaderTitle.js";import"./Divider.js";import"./useLocalStorage.js";import"./yup.module.js";import"./regex.js";import"./array.js";import"./upperFirst.js";const u="_previewForms_omrrd_1";var h={previewForms:u};const x=i.exports.lazy(()=>e(()=>import("./Formularios.js"),["assets/Formularios.js","assets/index.js","assets/index6.css","assets/FormulariosProvider.js"])),Y=()=>{const{preview:o,setPreview:t}=i.exports.useContext(l);return m(s,{open:!!o,onClose:()=>t(null),maxWidth:"md",children:[r(a,{onClose:()=>t(null),children:r(d,{textTransform:"uppercase",children:"Vista previa de certificaci\xF3n"})}),r(n,{children:o&&r(c,{data:o,children:r(i.exports.Suspense,{fallback:r(p,{}),children:r(x,{className:h.previewForms})})})}),r(v,{children:r(f,{variant:"outlined",color:"inherit",size:"small",onClick:()=>t(null),children:"Cerrar"})})]})};export{Y as default};
