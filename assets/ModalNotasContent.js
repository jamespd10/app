import{r as o,ai as f,a as t,j as c,I as b,b as l,F as p}from"./index.js";import{L as a}from"./Loader.js";import{d as h}from"./Navbar.js";import{d as g}from"./Add.js";const y="_main_1yowg_1",x="_sidebar_1yowg_9",w="_pagination_1yowg_22",v="_searchInput_1yowg_35",S="_element_1yowg_42",k="_active_1yowg_63",C="_title_1yowg_67",N="_fechas_1yowg_71",I="_fecha_1yowg_71",A="_subtitle_1yowg_91",E="_content_1yowg_109",F="_appbar_1yowg_117",P="_backButton_1yowg_130",j="_titulo_1yowg_137",B="_parrafo_1yowg_158";var _={main:y,sidebar:x,pagination:w,searchInput:v,element:S,active:k,title:C,fechas:N,fecha:I,subtitle:A,content:E,appbar:F,backButton:P,titulo:j,parrafo:B};const L=()=>{const n=o.exports.useContext(f),{nota:e,setNota:s,showForm:r,setShowForm:i}=n;return t("div",{className:_.appbar,children:c("div",{className:_.backButton,onClick:()=>{i(e?!1:!r),s(null)},children:[t(b,{component:!r&&!e?g:h}),t("span",{children:e||r?"Atr\xE1s":"Agregar"})]})})},u=o.exports.lazy(()=>l(()=>import("./ContentNotas.js"),["assets/ContentNotas.js","assets/index.js","assets/index6.css","assets/string.helper.js","assets/regex.js","assets/Typography.js","assets/Stack.js","assets/Divider.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/Navbar.js","assets/Navbar.css","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/App.module.js","assets/App.module.css","assets/IconButton.js","assets/ButtonBase.js","assets/Add.js"])),d=o.exports.lazy(()=>l(()=>import("./FormularioNota.js"),["assets/FormularioNota.js","assets/index.js","assets/index6.css","assets/TextInput.js","assets/TextField.js","assets/useFormControl.js","assets/useControlled.js","assets/formControlState.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/Fade.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/emotion-react.browser.esm.js","assets/TextEditor.js","assets/TextEditor.css","assets/yup.module.js","assets/index11.js","assets/array.js","assets/upperFirst.js","assets/SelectHookForm.js","assets/Box.js","assets/Typography.js","assets/MenuItem.js","assets/ButtonBase.js","assets/useIsFocusVisible.js","assets/listItemIconClasses.js","assets/Divider.js","assets/listItemTextClasses.js","assets/Stack.js","assets/DatePicker.js","assets/MobileDatePicker.js","assets/MonthPicker.js","assets/PureDateInput.js","assets/CalendarPicker.js","assets/IconButton.js","assets/Grid.js","assets/InputAdornment.js","assets/ModalTransition.js","assets/DialogContent.js","assets/DialogActions.js","assets/Button.js","assets/Popper.js","assets/CheckBoxOutlineBlank.js","assets/jsx-runtime_commonjs-proxy.js","assets/AutocompleteServer.js","assets/useFetch.js","assets/useHttpService.js","assets/Autocomplete.js","assets/Close.js","assets/Chip.js","assets/Checkbox.js","assets/Alert.js","assets/LoadingButton.js","assets/CircularProgress.js"])),m=o.exports.lazy(()=>l(()=>import("./SidebarContent.js"),["assets/SidebarContent.js","assets/SidebarContent.css","assets/index.js","assets/index6.css","assets/FilterList.js","assets/Box.js","assets/Typography.js","assets/TextField.js","assets/useFormControl.js","assets/useControlled.js","assets/formControlState.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/Fade.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/emotion-react.browser.esm.js","assets/MenuItem.js","assets/ButtonBase.js","assets/useIsFocusVisible.js","assets/listItemIconClasses.js","assets/Divider.js","assets/listItemTextClasses.js","assets/jsx-runtime_commonjs-proxy.js","assets/Search.js","assets/TextInput.js","assets/CheckBoxOutlineBlank.js","assets/AutocompleteServer.js","assets/useFetch.js","assets/useHttpService.js","assets/Autocomplete.js","assets/Close.js","assets/IconButton.js","assets/Popper.js","assets/Chip.js","assets/Checkbox.js","assets/DatePicker.js","assets/MobileDatePicker.js","assets/MonthPicker.js","assets/PureDateInput.js","assets/CalendarPicker.js","assets/Grid.js","assets/InputAdornment.js","assets/ModalTransition.js","assets/DialogContent.js","assets/DialogActions.js","assets/Button.js","assets/index11.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Pagination.js","assets/ErrorIcon.js","assets/StyledGridOverlay.js","assets/string.helper.js","assets/regex.js","assets/LinearProgress.js","assets/Loader.js","assets/CircularProgress.js","assets/Navbar.js","assets/Navbar.css","assets/App.module.js","assets/App.module.css","assets/Add.js"])),O=()=>{const{isPhoneScreen:n,nota:e,showForm:s}=o.exports.useContext(f);return t("section",{className:_.main,children:n?c(p,{children:[t(L,{}),!e&&!s&&t(o.exports.Suspense,{fallback:t(a,{}),children:t(m,{})}),s&&t(o.exports.Suspense,{fallback:t(a,{}),children:t(d,{})}),e&&!s&&t(o.exports.Suspense,{fallback:t(a,{}),children:t(u,{})})]}):c(p,{children:[t(o.exports.Suspense,{fallback:t(a,{}),children:t(m,{})}),!e&&t(o.exports.Suspense,{fallback:t(a,{}),children:t(d,{})}),e&&t(o.exports.Suspense,{fallback:t(a,{}),children:t(u,{})})]})})};var R=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"}));export{L as A,R as M,_ as s};
