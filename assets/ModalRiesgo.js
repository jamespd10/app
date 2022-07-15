import{r as D,j as e,a as t}from"./index.js";import{B as R,a as S}from"./BootstrapModalTitle.js";import{R as j}from"./index58.js";import{B as z}from"./BootstrapDivContent.js";import{T}from"./TextInput.js";import{c as M,i as y,r as I}from"./jsx-runtime_commonjs-proxy.js";import{C as P}from"./CustomDecimal.js";import{T as b}from"./Typography.js";import{A}from"./Alert.js";import{D as q}from"./DialogActions.js";import{B as H}from"./Button.js";import{L as W}from"./LoadingButton.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Fade.js";import"./Modal2.js";import"./isHostComponent.js";import"./useControlled.js";import"./Portal.js";import"./Paper.js";import"./Close2.js";import"./IconButton.js";import"./ButtonBase.js";import"./emotion-react.browser.esm.js";import"./useIsFocusVisible.js";import"./useForm.js";import"./object.helper.js";import"./array.js";import"./upperFirst.js";import"./Divider.js";import"./TextField.js";import"./useFormControl.js";import"./formControlState.js";import"./react-is.production.min.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";import"./react-number-format.es.js";import"./string.helper.js";import"./regex.js";import"./Close.js";import"./CircularProgress.js";var a={},$=y.exports;Object.defineProperty(a,"__esModule",{value:!0});var s=a.default=void 0,k=$(M),E=I,F=(0,k.default)((0,E.jsx)("path",{d:"M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm13.1-8.16c.01-.11.02-.22.02-.34 0-.12-.01-.23-.03-.34l.74-.58c.07-.05.08-.15.04-.22l-.7-1.21c-.04-.08-.14-.1-.21-.08l-.86.35c-.18-.14-.38-.25-.59-.34l-.13-.93c-.02-.09-.09-.15-.18-.15h-1.4c-.09 0-.16.06-.17.15l-.13.93c-.21.09-.41.21-.59.34l-.87-.35c-.08-.03-.17 0-.21.08l-.7 1.21c-.04.08-.03.17.04.22l.74.58c-.02.11-.03.23-.03.34 0 .11.01.23.03.34l-.74.58c-.07.05-.08.15-.04.22l.7 1.21c.04.08.14.1.21.08l.87-.35c.18.14.38.25.59.34l.13.93c.01.09.08.15.17.15h1.4c.09 0 .16-.06.17-.15l.13-.93c.21-.09.41-.21.59-.34l.87.35c.08.03.17 0 .21-.08l.7-1.21c.04-.08.03-.17-.04-.22l-.73-.58zm-2.6.91c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm.42 3.93-.5-.87c-.03-.06-.1-.08-.15-.06l-.62.25c-.13-.1-.27-.18-.42-.24l-.09-.66c-.02-.06-.08-.1-.14-.1h-1c-.06 0-.11.04-.12.11l-.09.66c-.15.06-.29.15-.42.24l-.62-.25c-.06-.02-.12 0-.15.06l-.5.87c-.03.06-.02.12.03.16l.53.41c-.01.08-.02.16-.02.24 0 .08.01.17.02.24l-.53.41c-.05.04-.06.11-.03.16l.5.87c.03.06.1.08.15.06l.62-.25c.13.1.27.18.42.24l.09.66c.01.07.06.11.12.11h1c.06 0 .12-.04.12-.11l.09-.66c.15-.06.29-.15.42-.24l.62.25c.06.02.12 0 .15-.06l.5-.87c.03-.06.02-.12-.03-.16l-.52-.41c.01-.08.02-.16.02-.24 0-.08-.01-.17-.02-.24l.53-.41c.05-.04.06-.11.04-.17zm-2.42 1.65c-.46 0-.83-.38-.83-.83 0-.46.38-.83.83-.83s.83.38.83.83c0 .46-.37.83-.83.83zM4.74 9h8.53c.27 0 .49-.22.49-.49v-.02c0-.27-.22-.49-.49-.49H13c0-1.48-.81-2.75-2-3.45v.95c0 .28-.22.5-.5.5s-.5-.22-.5-.5V4.14C9.68 4.06 9.35 4 9 4s-.68.06-1 .14V5.5c0 .28-.22.5-.5.5S7 5.78 7 5.5v-.95C5.81 5.25 5 6.52 5 8h-.26c-.27 0-.49.22-.49.49v.03c0 .26.22.48.49.48zM9 13c1.86 0 3.41-1.28 3.86-3H5.14c.45 1.72 2 3 3.86 3z"}),"Engineering");s=a.default=F;const bo=()=>{const{modal:m,form:n,fetcher:p,negocio:u,multer:d}=D.exports.useContext(j),[f,g,o,r,,c]=p,{formState:h,onFormSubmit:v,onInputChange:C}=n,{riesgo_profesional:x}=h,[_,i]=m;return e(R,{open:_,onClose:()=>i(!1),fullWidth:!0,maxWidth:"sm",children:[t(S,{onClose:()=>i(!1),children:e(b,{textTransform:"uppercase",children:[t(s,{})," Riesgo profesional"]})}),e(z,{children:[(o||r)&&t(A,{variant:"outlined",severity:o&&!r?"success":"error",color:o&&!r?"success":"error",children:(o==null?void 0:o.message)||(r==null?void 0:r.message)}),t(T,{label:"Porcentaje de Riesgo profesional",name:"riesgo_profesional",fullWidth:!0,focused:!0,autoFocus:!0,value:x,onChange:C,InputProps:{inputComponent:P,componentsProps:{input:{decimalScale:3,prefix:"",maxNumber:99999.999,fixedDecimalScale:!1}}}})]}),e(q,{children:[t(H,{variant:"outlined",color:"inherit",onClick:()=>{c(),i(!1)},children:"Cerrar"}),t(W,{variant:"outlined",color:"primary",loading:f,onClick:()=>v(l=>{c(),g(`/admin/supervalidados/negocios/${u}`,{method:"PATCH",data:{field:"negocios.riesgo_profesional",value:l.riesgo_profesional}}).then(B=>B.data&&d(l))}),children:"Guardar"})]})]})};export{bo as default};
