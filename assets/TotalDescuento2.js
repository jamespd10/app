import{r,b as y,j as i,F as v,a as e}from"./index.js";import{u as j,b as $}from"./yup.module.js";import{f}from"./string.helper.js";import{s as t}from"./totalDescuento.module.js";import{P as C}from"./index34.js";import{r as E}from"./numberHelper.js";import"./regex.js";import"./HeaderTitle.js";import"./Typography.js";import"./Divider.js";import"./useFetcherEarly.js";import"./NotFoundResults.js";import"./Grid.js";import"./Loader.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./headerPlanilla.module.js";import"./Stack.js";import"./Paper.js";import"./FileDownload.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./ScheduleSend.js";import"./StyledSpeedDial.js";import"./Assignment.js";import"./FabButtonAction.js";import"./react-is.production.min.js";import"./AssignmentRounded.js";import"./ButtonBase.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./isHostComponent.js";import"./Grow.js";import"./SpeedDial.module.js";import"./Backdrop.js";import"./Fade.js";import"./Edit.js";import"./useModal.js";import"./FileSaver.min.js";import"./array.js";import"./upperFirst.js";import"./Delete.js";import"./DecimalInput.js";import"./TextInput.js";import"./TextField.js";import"./useFormControl.js";import"./formControlState.js";import"./Modal2.js";import"./List.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";import"./CustomDecimal.js";import"./react-number-format.es.js";import"./IconButton.js";import"./Modal.js";import"./Close2.js";import"./ModalTransition.js";import"./CheckCircle.js";import"./DialogContent.js";import"./DialogActions.js";import"./LoadingButton.js";import"./Button.js";import"./constantsLists.js";import"./SelectHookForm.js";import"./Box.js";import"./MenuItem.js";import"./listItemIconClasses.js";import"./listItemTextClasses.js";import"./FormControlLabel.js";import"./Checkbox.js";import"./CheckBoxOutlineBlank.js";import"./AutocompleteServer.js";import"./useFetch.js";import"./useHttpService.js";import"./Autocomplete.js";import"./Close.js";import"./Chip.js";import"./ListItem.js";import"./Alert.js";import"./InputAsociarNegocio.js";import"./BootstrapTooltip.js";import"./ChipState.js";import"./SelectedCard.js";import"./TextEditor.js";import"./index11.js";import"./InputAdornment.js";import"./BackgroundLoader.js";const D=r.exports.lazy(()=>y(()=>import("./SalariosVacaciones3.js"),["assets/SalariosVacaciones3.js","assets/index.js","assets/index6.css","assets/yup.module.js","assets/string.helper.js","assets/regex.js"])),ut=M=>{const _=r.exports.useContext(C),[,s]=_,{negocioIndex:c}=M,{control:g}=j(),m=$({control:g,name:`negocios.${c}.contratos`}),l=r.exports.useMemo(()=>m&&m.length>0?m.map(o=>Number(o.impuesto_renta||0)).reduce((o,p)=>o+p):0,[m]),d=r.exports.useMemo(()=>m&&m.length>0?m.map(o=>Number(o.salario||0)+Number(o.vacaciones||0)+Number(o.horas_extras||0)+Number(o.comisiones||0)).reduce((o,p)=>o+p):0,[m]),a=r.exports.useMemo(()=>m&&m.length>0?m.map(o=>Number(o.decimo||0)).reduce((o,p)=>o+p):0,[m]),u=r.exports.useMemo(()=>9.75,[]),x=r.exports.useMemo(()=>12.25,[]),h=r.exports.useMemo(()=>1.25,[]),N=r.exports.useMemo(()=>1.5,[]),b=r.exports.useMemo(()=>Number((s==null?void 0:s.riesgo_profesional)||2.1),[s]),n=r.exports.useMemo(()=>u+x+h+N+b,[u,x,h,N,b]),P=r.exports.useMemo(()=>d*(n/100)+a*(18/100)+l,[d,n,a,l]);return i(v,{children:[i("div",{className:`${t.container} ${t.removePadding}`,children:[e("span",{className:t.title,children:"Salarios + vacaciones: "}),i("span",{className:t.money,children:[e(r.exports.Suspense,{fallback:e("div",{}),children:e(D,{negocioIndex:c})})," "]}),e("span",{className:t.title,children:"Total de d\xE9cimo: "}),i("span",{className:t.money,children:[f(a)," "]}),e("span",{className:t.title,children:"Porcentaje de d\xE9cimo: "}),e("span",{className:t.money,children:"18% "})]}),i("div",{className:`${t.container} ${t.removePadding}`,children:[e("span",{className:t.title,children:"Porcentaje total: "}),i("span",{className:t.money,children:[E(n),"% "]}),e("span",{className:t.title,children:"Cuota obrero patronal: "}),e("span",{className:t.money,children:f(P)})]})]})};export{ut as default};
