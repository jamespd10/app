import{r as i,a as r,j as c}from"./index.js";import{T as u}from"./TextInput.js";import{C as d}from"./index14.js";import{d as f}from"./Search.js";import{d as h}from"./Close2.js";import{s}from"./Toolbar.js";import{I as a}from"./IconButton.js";import"./TextField.js";import"./useFormControl.js";import"./useControlled.js";import"./useId.js";import"./formControlState.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./Fade.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";import"./emotion-react.browser.esm.js";import"./HeaderTitle.js";import"./Typography.js";import"./Divider.js";import"./Loader.js";import"./Grid.js";import"./CircularProgress.js";import"./useLocalStorage.js";import"./yup.module.js";import"./regex.js";import"./array.js";import"./upperFirst.js";import"./jsx-runtime_commonjs-proxy.js";import"./useIsFocusVisible.js";import"./Alert.js";import"./Close.js";import"./ButtonBase.js";const it=()=>{const o=i.exports.useRef(null),{pagination:n}=i.exports.useContext(d),{search:l,sendSearch:m}=n,[e,p]=i.exports.useState(l);return r("form",{onSubmit:t=>{t.preventDefault(),m(e)},className:s.formSearch,children:r(u,{label:"Buscar...",size:"small",fullWidth:!0,autoFocus:!0,value:e,onChange:t=>p(t.target.value),inputRef:o,helperText:"Por raz\xF3n social, ruc, nombre del representante, c\xE9dula o pasaporte",InputProps:{endAdornment:c("div",{className:s.searchAdorment,children:[r(a,{size:"small",children:r(f,{})}),e!==""&&r(a,{size:"small",onClick:()=>{var t;p(""),m(""),(t=o==null?void 0:o.current)==null||t.focus()},children:r(h,{})})]})}})})};export{it as default};