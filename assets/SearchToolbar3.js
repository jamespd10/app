import{r as i,a as o,j as u}from"./index.js";import{T as c}from"./TextInput.js";import{P as d}from"./index45.js";import{d as f}from"./Search.js";import{d as h}from"./Close2.js";import{s}from"./index73.js";import{I as a}from"./IconButton.js";import"./TextField.js";import"./useFormControl.js";import"./useControlled.js";import"./useId.js";import"./formControlState.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./Fade.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";import"./emotion-react.browser.esm.js";import"./HeaderTitle.js";import"./Typography.js";import"./Divider.js";import"./Loader.js";import"./Grid.js";import"./CircularProgress.js";import"./jsx-runtime_commonjs-proxy.js";import"./useIsFocusVisible.js";import"./string.helper.js";import"./regex.js";import"./CheckCircle.js";import"./Edit.js";import"./SkipNextOutlined.js";import"./Pagination.js";import"./ButtonBase.js";import"./ErrorIcon.js";import"./StyledGridOverlay.js";import"./Box.js";const pt=()=>{const r=i.exports.useRef(null),{pagination:n}=i.exports.useContext(d),{search:l,sendSearch:e}=n,[m,p]=i.exports.useState(l);return o("form",{onSubmit:t=>{t.preventDefault(),e(m)},className:s.formSearch,children:o(c,{label:"Buscar...",size:"small",fullWidth:!0,autoFocus:!0,value:m,onChange:t=>p(t.target.value),inputRef:r,helperText:"Por raz\xF3n social, ruc, negocio o mes. Ejm: 12-2022",InputProps:{endAdornment:u("div",{className:s.searchAdorment,children:[o(a,{size:"small",children:o(f,{})}),m!==""&&o(a,{size:"small",onClick:()=>{var t;p(""),e(""),(t=r==null?void 0:r.current)==null||t.focus()},children:o(h,{})})]})}})})};export{pt as default};
