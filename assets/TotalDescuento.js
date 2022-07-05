import{r,b as P,j as i,F as v,a as m}from"./index.js";import{u as j,b as $}from"./yup.module.js";import{f as b}from"./string.helper.js";import{s as t}from"./totalDescuento.module.js";import{L as C}from"./index34.js";import"./regex.js";import"./useFetcherEarly.js";import"./Loader.js";import"./Grid.js";import"./Typography.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./NotFoundResults.js";import"./array.js";import"./upperFirst.js";import"./useLocalStorage.js";import"./headerPlanilla.module.js";import"./Delete.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./DecimalInput.js";import"./TextInput.js";import"./TextField.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./GlobalStyles.js";import"./CustomDecimal.js";import"./react-number-format.es.js";import"./useModal.js";import"./IconButton.js";import"./ButtonBase.js";import"./Modal.js";import"./Close2.js";import"./ModalTransition.js";import"./CheckCircle.js";import"./DialogContent.js";import"./LoadingButton.js";import"./Button.js";import"./constantsLists.js";import"./SelectHookForm.js";import"./Box.js";import"./MenuItem.js";import"./listItemIconClasses.js";import"./Divider.js";import"./listItemTextClasses.js";import"./Stack.js";import"./FormControlLabel.js";import"./Checkbox.js";import"./CheckBoxOutlineBlank.js";import"./AutocompleteServer.js";import"./useFetch.js";import"./useHttpService.js";import"./Autocomplete.js";import"./Close.js";import"./Popper.js";import"./Chip.js";import"./ListItem.js";import"./Alert.js";import"./InputAsociarNegocio.js";import"./BootstrapTooltip.js";import"./Tooltip.js";import"./appendOwnerState.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import"./ChipState.js";import"./SelectedCard.js";import"./TextEditor.js";import"./index11.js";import"./Pagination.js";import"./CalendarMonth.js";import"./MonthPicker.js";import"./index30.js";import"./HeaderTitle.js";const E=r.exports.lazy(()=>P(()=>import("./SalariosVacaciones2.js"),["assets/SalariosVacaciones2.js","assets/index.js","assets/index6.css","assets/yup.module.js","assets/string.helper.js","assets/regex.js"])),et=f=>{const _=r.exports.useContext(C),[,p]=_,{negocioIndex:c}=f,{control:g}=j(),e=$({control:g,name:`negocios.${c}.contratos`}),l=r.exports.useMemo(()=>e&&e.length>0?e.map(o=>Number(o.impuesto_renta||0)).reduce((o,s)=>o+s):0,[e]),d=r.exports.useMemo(()=>e&&e.length>0?e.map(o=>Number(o.salario||0)+Number(o.vacaciones||0)+Number(o.horas_extras||0)+Number(o.comisiones||0)).reduce((o,s)=>o+s):0,[e]),a=r.exports.useMemo(()=>e&&e.length>0?e.map(o=>Number(o.decimo||0)).reduce((o,s)=>o+s):0,[e]),u=r.exports.useMemo(()=>9.75/100,[]),x=r.exports.useMemo(()=>12.25/100,[]),h=r.exports.useMemo(()=>1.25/100,[]),N=r.exports.useMemo(()=>1.5/100,[]),M=r.exports.useMemo(()=>Number((p==null?void 0:p.riesgo_profesional)||2.1)/100,[p]),n=r.exports.useMemo(()=>Math.floor((u+x+h+N+M)*100*100)/100,[u,x,h,N,M]),y=r.exports.useMemo(()=>d*(n/100)+a*(18/100)+l,[d,n,a,l]);return i(v,{children:[i("div",{className:`${t.container} ${t.removePadding}`,children:[m("span",{className:t.title,children:"Salarios + vacaciones: "}),i("span",{className:t.money,children:[m(r.exports.Suspense,{fallback:m("div",{}),children:m(E,{negocioIndex:c})})," "]}),m("span",{className:t.title,children:"Total de d\xE9cimo: "}),i("span",{className:t.money,children:[b(a)," "]}),m("span",{className:t.title,children:"Porcentaje de d\xE9cimo: "}),m("span",{className:t.money,children:"18% "})]}),i("div",{className:`${t.container} ${t.removePadding}`,children:[m("span",{className:t.title,children:"Porcentaje total: "}),i("span",{className:t.money,children:[n,"% "]}),m("span",{className:t.title,children:"Cuota obrero patronal: "}),m("span",{className:t.money,children:b(y)})]})]})};export{et as default};
