import{r,b as P,j as e,F as v,a as i}from"./index.js";import{u as j,b as $}from"./yup.module.js";import{f}from"./string.helper.js";import{s as t}from"./totalDescuento.module.js";import{L as C}from"./index32.js";import{r as E}from"./numberHelper.js";import"./regex.js";import"./useFetcherEarly.js";import"./Loader.js";import"./Grid.js";import"./Typography.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./NotFoundResults.js";import"./array.js";import"./upperFirst.js";import"./useLocalStorage.js";import"./headerPlanilla.module.js";import"./Delete.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useId.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./DecimalInput.js";import"./TextInput.js";import"./TextField.js";import"./useFormControl.js";import"./formControlState.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./Fade.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";import"./CustomDecimal.js";import"./react-number-format.es.js";import"./useModal.js";import"./IconButton.js";import"./ButtonBase.js";import"./Modal.js";import"./Close2.js";import"./DialogTitle.js";import"./dialogTitleClasses.js";import"./ModalTransition.js";import"./Warning.js";import"./Error.js";import"./CheckCircle.js";import"./DialogContent.js";import"./DialogActions.js";import"./LoadingButton.js";import"./Button.js";import"./constantsLists.js";import"./SelectHookForm.js";import"./Box.js";import"./MenuItem.js";import"./listItemIconClasses.js";import"./Divider.js";import"./listItemTextClasses.js";import"./Stack.js";import"./FormControlLabel.js";import"./Checkbox.js";import"./SwitchBase.js";import"./CheckBoxOutlineBlank.js";import"./AutocompleteServer.js";import"./useFetch.js";import"./useHttpService.js";import"./Autocomplete.js";import"./Close.js";import"./Popper.js";import"./Chip.js";import"./ListItem.js";import"./Alert.js";import"./InputAsociarNegocio.js";import"./BootstrapTooltip.js";import"./Tooltip.js";import"./SpeedDial.module.js";import"./ChipState.js";import"./SelectedCard.js";import"./TextEditor.js";import"./index11.js";import"./Pagination.js";import"./CalendarMonth.js";import"./MonthPicker.js";import"./index33.js";import"./HeaderTitle.js";const D=r.exports.lazy(()=>P(()=>import("./SalariosVacaciones2.js"),["assets/SalariosVacaciones2.js","assets/index.js","assets/index14.css","assets/yup.module.js","assets/string.helper.js","assets/regex.js"])),xt=M=>{const _=r.exports.useContext(C),[,s]=_,{negocioIndex:c}=M,{control:g}=j(),m=$({control:g,name:`negocios.${c}.contratos`}),l=r.exports.useMemo(()=>m&&m.length>0?m.map(o=>Number(o.impuesto_renta||0)).reduce((o,p)=>o+p):0,[m]),d=r.exports.useMemo(()=>m&&m.length>0?m.map(o=>Number(o.salario||0)+Number(o.vacaciones||0)+Number(o.horas_extras||0)+Number(o.comisiones||0)).reduce((o,p)=>o+p):0,[m]),a=r.exports.useMemo(()=>m&&m.length>0?m.map(o=>Number(o.decimo||0)).reduce((o,p)=>o+p):0,[m]),u=r.exports.useMemo(()=>9.75,[]),x=r.exports.useMemo(()=>12.25,[]),h=r.exports.useMemo(()=>1.25,[]),N=r.exports.useMemo(()=>1.5,[]),b=r.exports.useMemo(()=>Number((s==null?void 0:s.riesgo_profesional)||2.1),[s]),n=r.exports.useMemo(()=>u+x+h+N+b,[u,x,h,N,b]),y=r.exports.useMemo(()=>d*(n/100)+a*(18/100)+l,[d,n,a,l]);return e(v,{children:[e("div",{className:`${t.container} ${t.removePadding}`,children:[i("span",{className:t.title,children:"Salarios + vacaciones: "}),e("span",{className:t.money,children:[i(r.exports.Suspense,{fallback:i("div",{}),children:i(D,{negocioIndex:c})})," "]}),i("span",{className:t.title,children:"Total de d\xE9cimo: "}),e("span",{className:t.money,children:[f(a)," "]}),i("span",{className:t.title,children:"Porcentaje de d\xE9cimo: "}),i("span",{className:t.money,children:"18% "})]}),e("div",{className:`${t.container} ${t.removePadding}`,children:[i("span",{className:t.title,children:"Porcentaje total: "}),e("span",{className:t.money,children:[E(n),"% "]}),i("span",{className:t.title,children:"Cuota obrero patronal: "}),i("span",{className:t.money,children:f(y)})]})]})};export{xt as default};
