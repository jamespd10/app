import{r as e,a as o,F as a}from"./index.js";import{A as s}from"./AutocompleteServer.js";import{s as l}from"./Toolbar.js";import{a as n}from"./index14.js";import{u}from"./useLocalStorage.js";import"./TextInput.js";import"./TextField.js";import"./useFormControl.js";import"./useControlled.js";import"./useId.js";import"./formControlState.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./Fade.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";import"./emotion-react.browser.esm.js";import"./useFetch.js";import"./useHttpService.js";import"./Autocomplete.js";import"./Close.js";import"./IconButton.js";import"./ButtonBase.js";import"./useIsFocusVisible.js";import"./Popper.js";import"./Chip.js";import"./Alert.js";import"./HeaderTitle.js";import"./Typography.js";import"./Divider.js";import"./Loader.js";import"./Grid.js";import"./CircularProgress.js";import"./yup.module.js";import"./regex.js";import"./array.js";import"./upperFirst.js";const ot=()=>{const{cpa:i,setCpa:p}=e.exports.useContext(n),[,m]=u("cpa-value");return o(a,{children:o(s,{className:l.child,ref:null,inputProps:{label:"CPA a imprimir"},disableStyle:!0,enableFirst:!0,value:i,size:"small",onChange:(r,t)=>{p(t),t&&m(t)},isOptionEqualToValue:(r,t)=>r.id===t.id,urlFetch:"/cpa",getOptionLabel:r=>r.nombre})})};export{ot as default};
