import{r,b as i,A as d,j as t,F as _,a as e}from"./index.js";import{C as m}from"./index14.js";import{A as p}from"./Alert.js";import{F as u}from"./Fade.js";const h="_toolbar_1pm2e_1",b="_title_1pm2e_7",v="_divToolbar_1pm2e_13",f="_child_1pm2e_20",x="_formSearch_1pm2e_24",A="_searchAdorment_1pm2e_28",T="_banner_1pm2e_34";var a={toolbar:h,title:b,divToolbar:v,child:f,formSearch:x,searchAdorment:A,banner:T};const g=r.exports.lazy(()=>i(()=>import("./SearchToolbar4.js"),["assets/SearchToolbar4.js","assets/index.js","assets/index9.css","assets/TextInput.js","assets/TextField.js","assets/useFormControl.js","assets/useControlled.js","assets/useId.js","assets/formControlState.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/Fade.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/emotion-react.browser.esm.js","assets/index14.js","assets/HeaderTitle.js","assets/Typography.js","assets/Divider.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/yup.module.js","assets/regex.js","assets/array.js","assets/Search.js","assets/jsx-runtime_commonjs-proxy.js","assets/useIsFocusVisible.js","assets/Close2.js","assets/IconButton.js","assets/ButtonBase.js","assets/Alert.js","assets/Close.js"])),S=r.exports.lazy(()=>i(()=>import("./CpaAutocomplete.js"),["assets/CpaAutocomplete.js","assets/index.js","assets/index9.css","assets/AutocompleteServer.js","assets/TextInput.js","assets/TextField.js","assets/useFormControl.js","assets/useControlled.js","assets/useId.js","assets/formControlState.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/Fade.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/emotion-react.browser.esm.js","assets/useFetch.js","assets/useHttpService.js","assets/Autocomplete.js","assets/Close.js","assets/IconButton.js","assets/ButtonBase.js","assets/useIsFocusVisible.js","assets/Popper.js","assets/Chip.js","assets/index14.js","assets/HeaderTitle.js","assets/Typography.js","assets/Divider.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/yup.module.js","assets/regex.js","assets/array.js","assets/Alert.js"])),C=()=>{const{authState:l}=r.exports.useContext(d),{tipo:s}=l,{pagination:c}=r.exports.useContext(m),{selected:n}=c,o=r.exports.useMemo(()=>n.length,[n]);return t(_,{children:[t("div",{className:a.toolbar,children:[e("span",{className:a.title,children:"Certificaciones de ingresos realizadas"}),t("div",{className:a.divToolbar,children:[e(r.exports.Suspense,{fallback:e("div",{}),children:e(g,{})}),e(r.exports.Suspense,{fallback:e("div",{}),children:e(S,{})})]}),s&&!["Super","Administrador"].includes(s)&&e(p,{variant:"outlined",severity:"warning",color:"warning",children:"Para imprimir favor dirigirse a un administrador"})]}),e(u,{in:o!==0,unmountOnExit:!0,children:t("div",{className:a.banner,children:[o," fila",o>1?"s":""," seleccionada",o>1?"s":""]})})]})};var P=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"}));export{P as T,a as s};
