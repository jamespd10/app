import{r as a,a as t,F as n}from"./index.js";import{u as s}from"./useFetcherEarly.js";import{F as l}from"./Formulario2.js";import{u as c}from"./TotalNegocio.js";import{A as u}from"./Alert.js";import"./Loader2.js";import"./Loader.js";import"./Grid.js";import"./Typography.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./index53.js";import"./BootstrapModal.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Fade.js";import"./Modal2.js";import"./isHostComponent.js";import"./useId.js";import"./Portal.js";import"./Paper.js";import"./BootstrapModalTitle.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./DialogTitle.js";import"./dialogTitleClasses.js";import"./IconButton.js";import"./ButtonBase.js";import"./Paid.js";import"./BootstrapDivContent.js";import"./Divider.js";import"./index18.js";import"./HeaderTitle.js";import"./StyledSpeedDial.js";import"./Assignment.js";import"./FabButtonAction.js";import"./react-is.production.min.js";import"./AssignmentRounded.js";import"./Tooltip.js";import"./Popper.js";import"./Grow.js";import"./SpeedDial.module.js";import"./Stack.js";import"./index33.js";import"./DialogActions.js";import"./Button.js";import"./useForm.js";import"./object.helper.js";import"./array.js";import"./regex.js";import"./Lazy.js";import"./useGetDefaultValues.js";import"./ContainerFormulario.js";import"./FormularioRealizar.js";import"./ErrorIcon.js";import"./StyledGridOverlay.js";import"./Box.js";import"./string.helper.js";import"./Close.js";const vo=()=>{const{form:r}=a.exports.useContext(l),{formState:i}=r,{id_negocio:m,id_cliente:p}=i,[,o]=s(`/admin/negocios/${m}/${p}`),{total:e}=c();return o&&Boolean(Number(o.enviar_boleta))===!0&&Boolean(Number(o.cobra_itbms))===!1&&e>0?t(u,{variant:"filled",severity:"warning",color:"warning",children:"ENVIAR BOLETA"}):t(n,{})};export{vo as default};
