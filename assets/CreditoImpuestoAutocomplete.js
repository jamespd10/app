import{r as u,a as p,F as a}from"./index.js";import{A as l}from"./AutocompleteServer.js";import{F as n}from"./Formulario2.js";import"./TextInput.js";import"./TextField.js";import"./useFormControl.js";import"./useControlled.js";import"./useId.js";import"./formControlState.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./Fade.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";import"./emotion-react.browser.esm.js";import"./useFetch.js";import"./useHttpService.js";import"./Autocomplete.js";import"./Close.js";import"./IconButton.js";import"./ButtonBase.js";import"./useIsFocusVisible.js";import"./Popper.js";import"./Chip.js";import"./Loader2.js";import"./Loader.js";import"./Grid.js";import"./Typography.js";import"./CircularProgress.js";import"./index53.js";import"./BootstrapModal.js";import"./ModalTransition.js";import"./BootstrapModalTitle.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./DialogTitle.js";import"./dialogTitleClasses.js";import"./Paid.js";import"./BootstrapDivContent.js";import"./Divider.js";import"./index18.js";import"./HeaderTitle.js";import"./StyledSpeedDial.js";import"./Assignment.js";import"./FabButtonAction.js";import"./AssignmentRounded.js";import"./Tooltip.js";import"./SpeedDial.module.js";import"./Stack.js";import"./index33.js";import"./DialogActions.js";import"./Button.js";import"./useForm.js";import"./object.helper.js";import"./array.js";import"./regex.js";import"./Lazy.js";import"./useGetDefaultValues.js";import"./ContainerFormulario.js";import"./FormularioRealizar.js";import"./ErrorIcon.js";import"./StyledGridOverlay.js";import"./Box.js";const Pt=()=>{var r;const{form:e}=u.exports.useContext(n),{errors:t,formState:s,setValue:o}=e,{impuesto_ajuste:m}=s;return p(a,{children:p(l,{ref:null,inputProps:{label:"Impuesto",error:!!(t!=null&&t.impuesto_ajuste),helperText:(r=t==null?void 0:t.impuesto_ajuste)==null?void 0:r.message},disableStyle:!0,enableFirst:!0,value:m===""?null:m,size:"small",fullWidth:!0,onChange:(c,i)=>{i?o("impuesto_ajuste",i):o("impuesto_ajuste","")},urlFetch:"/impuestos?disableFields=1"})})};export{Pt as default};
