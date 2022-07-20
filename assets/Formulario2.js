var I=Object.defineProperty,P=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var D=(a,e,r)=>e in a?I(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r,_=(a,e)=>{for(var r in e||(e={}))V.call(e,r)&&D(a,r,e[r]);if(S)for(var r of S(e))L.call(e,r)&&D(a,r,e[r]);return a},v=(a,e)=>P(a,A(e));import{r as o,aw as j,aD as O,f as T,as as z,a as t,b as u,j as k}from"./index.js";import{L as m}from"./Loader2.js";import{C as R}from"./index53.js";import{u as M}from"./useForm.js";import{d,e as E,c as x,a as l}from"./array.js";import{d as $,e as C}from"./regex.js";import{c as N}from"./Lazy.js";import{u as w}from"./useGetDefaultValues.js";import{N as q}from"./ContainerFormulario.js";import{s as g}from"./FormularioRealizar.js";const i=d().typeError("Favor de ingresar el monto").positive("El monto debe ser un n\xFAmero positivo").min(0,"El monto debe ser mayor \xF3 igual a 0").max(9e10,"Favor ingresar un n\xFAmero de m\xE1ximo 10 d\xEDgitos").required("Favor de ingresar el monto").test("check-decimal","Favor ingresar m\xE1ximo dos decimales",a=>!!(a===0||a&&a.toString().match($))),B=N(a=>a&&a.length<=1?E().of(x().shape({texto:l().trim().nullable().notRequired().test("check-texto","Favor ingresar una descripci\xF3n",function(e){const r=this.parent;return!(Object.keys(r).some(s=>r[s])&&!e)}),nombre:l().trim().nullable().notRequired().test("check-texto","Favor ingresar el nombre",function(e){const r=this.parent;return!(Object.keys(r).some(s=>r[s])&&!e)}),ruc:l().trim().nullable().notRequired().test("check-texto","Favor ingresar el ruc",function(e){const r=this.parent;return!(Object.keys(r).some(s=>r[s])&&!e)}),dv:l().trim().nullable().notRequired().test("check-dv","Favor ingresar el DV",function(e){const r=this.parent;return!(Object.keys(r).some(s=>r[s])&&(!e||e&&!new RegExp(C).test(e)))}),valor:d().nullable().notRequired().transform((e,r)=>r===""?0:e).typeError("Favor ingresar el total").test("check-valor","Favor ingresar el total",function(e){const r=this.parent;return!(Object.keys(r).some(s=>r[s])&&!e)})})).nullable().notRequired().typeError("Favor ingresar los gastos"):E().of(x().shape({texto:l().trim().required("Favor ingresar una descripci\xF3n"),nombre:l().trim().required("Favor ingresar el nombre"),ruc:l().trim().required("Favor ingresar el ruc"),dv:l().trim().min(2,"Favor ingresar dos d\xE9cimales").max(2,"Favor ingresar dos d\xE9cimales").matches(C,"Favor ingresar dos d\xE9cimales").required("Favor ingresar una descripci\xF3n"),valor:d().typeError("Favor ingresar el total").min(.1,"Favor ingresar un valor mayor a 0").positive("Favor ingresar un valor positivo").required("Favor ingresar el total")}).typeError("Favor ingresar los gastos").required("Favor ingresar los gastos"))),G=N(a=>a&&a.length<=1?E().of(x().shape({id_agente_retenedor:d().typeError("Favor ingresar el agente retenedor").integer().nullable(!0).notRequired().transform((e,r)=>r===""?0:e).test("check-texto","Favor ingresar el agente retenedor",function(e){return!(this.parent.valor&&this.parent.valor>0&&!e)}),valor:d().typeError("Favor ingresar el total").nullable().notRequired().transform((e,r)=>r===""?0:e).test("check-valor","Favor ingresar el total",function(e){return!(this.parent.id_agente_retenedor&&!e)})})).nullable().notRequired().typeError("Favor ingresar las retenciones"):E().of(x().shape({id_agente_retenedor:d().typeError("Favor ingresar el agente retenedor").integer("Favor ingresar el agente retenedor").min(0,"Favor ingresar el agente retenedor").required("Favor ingresar el agente retenedor"),valor:d().typeError("Favor ingresar el total").min(.1,"Favor ingresar un valor mayor a 0").positive("Favor ingresar un valor positivo").required("Favor ingresar el total")}).typeError("Favor ingresar las retenciones").required("Favor ingresar las retenciones"))),W=x().shape({mes_correspondiente:l().trim().typeError("Favor ingresar el mes correspondiente").required("Favor ingresar el mes correspondiente"),id_negocio:d().typeError("Favor seleccionar el cliente").min(1,"Favor seleccionar el cliente").positive("Favor seleccionar el cliente").integer("Favor seleccionar el cliente").required("Favor seleccionar el cliente"),id_cliente:d().typeError("Favor seleccionar el cliente").min(1,"Favor seleccionar el cliente").positive("Favor seleccionar el cliente").integer("Favor seleccionar el cliente").required("Favor seleccionar el cliente"),venta_7:i,venta_10:i,venta_15:i,venta_exnt:i,ventas:i,compra_7:i,compra_import:i,compra_10:i,compra_15:i,compra_exnt:i,compras:i,acumulado:i,retenciones:G,gastos:B,notas:l().trim().nullable(!0)}),H=()=>{const{cliente:a,mes:e,checkItbms:r}=o.exports.useContext(R),{negocio:s,fetcher:p}=o.exports.useContext(q),[,,n]=p,{defaulValues:F,gastos:f,retenciones:h}=w();return{defaultForm:o.exports.useMemo(()=>{let c=v(_({},F),{id_cliente:a.id,nom_cliente:a.nom_cliente,id_negocio:s.id,tipo:s.tipo,nombre_negocio:s.nombre_negocio,mes_correspondiente:j(e,"yyyy-MM-dd"),general_credito:Boolean(Number(r))});return n&&O(e||new Date,new Date(j(n.mes_correspondiente,"yyyy-MM-01")))===1?c=v(_({},c),{id:0,fecha_creacion:"",fecha_enviado:"",acumulado:Number(n.total)<0?n.total:"0.00",general_credito:Boolean(Number(n.general_credito)),pagar_dgi:Boolean(Number(n.pagar_dgi)),ajuste:n.ajuste||"",cant_meses_ajuste:n.cant_meses_ajuste||"",impuesto_ajuste:n.impuesto_ajuste||""}):n&&O(e||new Date,new Date(j(n.mes_correspondiente)))===0?c=v(_(_({},c),n),{notas:n.notas||"",retenciones:n.retenciones.length>0?n.retenciones:h,gastos:n.gastos.length>0?n.gastos:f,general_credito:Boolean(Number(n.general_credito)),pagar_dgi:Boolean(Number(n.pagar_dgi)),ajuste:n.ajuste||"",cant_meses_ajuste:n.cant_meses_ajuste||"",impuesto_ajuste:n.impuesto_ajuste||""}):c=v(_({},c),{id:0,fecha_creacion:"",fecha_enviado:""}),c},[a,F,f,n,e,s,h,r])}},J=o.exports.createContext({}),K=({children:a,itbms:e})=>{const{checkItbms:r,setNegocios:s}=o.exports.useContext(R),{i:p}=o.exports.useContext(q),n=T(),{defaultForm:F}=H(),f=M(F,W),{setFormState:h,formState:y}=f;return z(()=>{(()=>{h(b=>v(_({},b),{general_credito:Boolean(Number(r))}))})()},[r]),o.exports.useEffect(()=>{s(c=>{const b=[...c];return b[p]=y,[...b]})},[y,p]),t(J.Provider,{value:{form:f,fetcher:n},children:a})},Q=o.exports.lazy(()=>u(()=>import("./Ventas3.js"),["assets/Ventas3.js","assets/index.js","assets/index14.css","assets/FormularioRealizar.js","assets/FormularioRealizar.css","assets/ErrorIcon.js","assets/StyledGridOverlay.js","assets/Box.js","assets/Typography.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/index53.js","assets/BootstrapModal.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Fade.js","assets/Modal2.js","assets/isHostComponent.js","assets/useId.js","assets/Portal.js","assets/Paper.js","assets/BootstrapModalTitle.js","assets/BootstrapModalTitle.css","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/DialogTitle.js","assets/dialogTitleClasses.js","assets/IconButton.js","assets/ButtonBase.js","assets/Paid.js","assets/BootstrapDivContent.js","assets/BootstrapDivContent.css","assets/Divider.js","assets/index18.js","assets/index10.css","assets/HeaderTitle.js","assets/StyledSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/Tooltip.js","assets/Popper.js","assets/Grow.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Stack.js","assets/index33.js","assets/DialogActions.js","assets/Button.js","assets/fields.module.js","assets/fields.module.css","assets/string.helper.js","assets/regex.js","assets/TextDecimalInput.js","assets/TextInput.js","assets/TextField.js","assets/useFormControl.js","assets/formControlState.js","assets/List.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/index83.js","assets/InputAdornment.js","assets/numberHelper.js","assets/Loader2.js","assets/Loader.css","assets/useForm.js","assets/object.helper.js","assets/array.js","assets/upperFirst.js","assets/Lazy.js","assets/useGetDefaultValues.js","assets/ContainerFormulario.js"])),U=o.exports.lazy(()=>u(()=>import("./Compras3.js"),["assets/Compras3.js","assets/index.js","assets/index14.css","assets/FormularioRealizar.js","assets/FormularioRealizar.css","assets/ErrorIcon.js","assets/StyledGridOverlay.js","assets/Box.js","assets/Typography.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/index53.js","assets/BootstrapModal.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Fade.js","assets/Modal2.js","assets/isHostComponent.js","assets/useId.js","assets/Portal.js","assets/Paper.js","assets/BootstrapModalTitle.js","assets/BootstrapModalTitle.css","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/DialogTitle.js","assets/dialogTitleClasses.js","assets/IconButton.js","assets/ButtonBase.js","assets/Paid.js","assets/BootstrapDivContent.js","assets/BootstrapDivContent.css","assets/Divider.js","assets/index18.js","assets/index10.css","assets/HeaderTitle.js","assets/StyledSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/Tooltip.js","assets/Popper.js","assets/Grow.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Stack.js","assets/index33.js","assets/DialogActions.js","assets/Button.js","assets/fields.module.js","assets/fields.module.css","assets/string.helper.js","assets/regex.js","assets/TextDecimalInput.js","assets/TextInput.js","assets/TextField.js","assets/useFormControl.js","assets/formControlState.js","assets/List.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/index83.js","assets/InputAdornment.js","assets/numberHelper.js","assets/Loader2.js","assets/Loader.css","assets/useForm.js","assets/object.helper.js","assets/array.js","assets/upperFirst.js","assets/Lazy.js","assets/useGetDefaultValues.js","assets/ContainerFormulario.js"])),X=o.exports.lazy(()=>u(()=>import("./Retenciones3.js"),["assets/Retenciones3.js","assets/Retenciones.css","assets/index.js","assets/index14.css","assets/FormularioRealizar.js","assets/FormularioRealizar.css","assets/ErrorIcon.js","assets/StyledGridOverlay.js","assets/Box.js","assets/Typography.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/index53.js","assets/BootstrapModal.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Fade.js","assets/Modal2.js","assets/isHostComponent.js","assets/useId.js","assets/Portal.js","assets/Paper.js","assets/BootstrapModalTitle.js","assets/BootstrapModalTitle.css","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/DialogTitle.js","assets/dialogTitleClasses.js","assets/IconButton.js","assets/ButtonBase.js","assets/Paid.js","assets/BootstrapDivContent.js","assets/BootstrapDivContent.css","assets/Divider.js","assets/index18.js","assets/index10.css","assets/HeaderTitle.js","assets/StyledSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/Tooltip.js","assets/Popper.js","assets/Grow.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Stack.js","assets/index33.js","assets/DialogActions.js","assets/Button.js","assets/AutocompleteServer.js","assets/TextInput.js","assets/TextField.js","assets/useFormControl.js","assets/formControlState.js","assets/List.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/useFetch.js","assets/useHttpService.js","assets/Autocomplete.js","assets/Close.js","assets/Chip.js","assets/fields.module.js","assets/fields.module.css","assets/string.helper.js","assets/regex.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/Loader2.js","assets/Loader.css","assets/useForm.js","assets/object.helper.js","assets/array.js","assets/upperFirst.js","assets/Lazy.js","assets/useGetDefaultValues.js","assets/ContainerFormulario.js"])),Y=o.exports.lazy(()=>u(()=>import("./Credito.js"),["assets/Credito.js","assets/index.js","assets/index14.css","assets/TextInput.js","assets/TextField.js","assets/useFormControl.js","assets/useControlled.js","assets/useId.js","assets/formControlState.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/Fade.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/emotion-react.browser.esm.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/fields.module.js","assets/fields.module.css","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/CircularProgress.js","assets/FormControlLabel.js","assets/Checkbox.js","assets/SwitchBase.js","assets/ButtonBase.js","assets/useIsFocusVisible.js","assets/Loader2.js","assets/Loader.css","assets/index53.js","assets/BootstrapModal.js","assets/ModalTransition.js","assets/BootstrapModalTitle.js","assets/BootstrapModalTitle.css","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/DialogTitle.js","assets/dialogTitleClasses.js","assets/IconButton.js","assets/Paid.js","assets/BootstrapDivContent.js","assets/BootstrapDivContent.css","assets/Divider.js","assets/index18.js","assets/index10.css","assets/HeaderTitle.js","assets/StyledSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/AssignmentRounded.js","assets/Tooltip.js","assets/Popper.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Stack.js","assets/index33.js","assets/DialogActions.js","assets/Button.js","assets/useForm.js","assets/object.helper.js","assets/array.js","assets/upperFirst.js","assets/Lazy.js","assets/useGetDefaultValues.js","assets/ContainerFormulario.js","assets/FormularioRealizar.js","assets/FormularioRealizar.css","assets/ErrorIcon.js","assets/StyledGridOverlay.js","assets/Box.js"])),Z=o.exports.lazy(()=>u(()=>import("./TotalNegocio.js"),["assets/TotalNegocio.js","assets/index.js","assets/index14.css","assets/string.helper.js","assets/regex.js","assets/FormularioRealizar.js","assets/FormularioRealizar.css","assets/ErrorIcon.js","assets/StyledGridOverlay.js","assets/Box.js","assets/Typography.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/index53.js","assets/BootstrapModal.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Fade.js","assets/Modal2.js","assets/isHostComponent.js","assets/useId.js","assets/Portal.js","assets/Paper.js","assets/BootstrapModalTitle.js","assets/BootstrapModalTitle.css","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/DialogTitle.js","assets/dialogTitleClasses.js","assets/IconButton.js","assets/ButtonBase.js","assets/Paid.js","assets/BootstrapDivContent.js","assets/BootstrapDivContent.css","assets/Divider.js","assets/index18.js","assets/index10.css","assets/HeaderTitle.js","assets/StyledSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/Tooltip.js","assets/Popper.js","assets/Grow.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Stack.js","assets/index33.js","assets/DialogActions.js","assets/Button.js","assets/Loader2.js","assets/Loader.css","assets/useForm.js","assets/object.helper.js","assets/array.js","assets/upperFirst.js","assets/Lazy.js","assets/useGetDefaultValues.js","assets/ContainerFormulario.js"])),ee=o.exports.lazy(()=>u(()=>import("./Notas.js"),["assets/Notas.js","assets/index.js","assets/index14.css","assets/TextInput.js","assets/TextField.js","assets/useFormControl.js","assets/useControlled.js","assets/useId.js","assets/formControlState.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/Fade.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/emotion-react.browser.esm.js","assets/FormularioRealizar.js","assets/FormularioRealizar.css","assets/ErrorIcon.js","assets/StyledGridOverlay.js","assets/Box.js","assets/Typography.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/index53.js","assets/BootstrapModal.js","assets/ModalTransition.js","assets/BootstrapModalTitle.js","assets/BootstrapModalTitle.css","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/useIsFocusVisible.js","assets/DialogTitle.js","assets/dialogTitleClasses.js","assets/IconButton.js","assets/ButtonBase.js","assets/Paid.js","assets/BootstrapDivContent.js","assets/BootstrapDivContent.css","assets/Divider.js","assets/index18.js","assets/index10.css","assets/HeaderTitle.js","assets/StyledSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/AssignmentRounded.js","assets/Tooltip.js","assets/Popper.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Stack.js","assets/index33.js","assets/DialogActions.js","assets/Button.js","assets/Loader2.js","assets/Loader.css","assets/useForm.js","assets/object.helper.js","assets/array.js","assets/upperFirst.js","assets/regex.js","assets/Lazy.js","assets/useGetDefaultValues.js","assets/ContainerFormulario.js"])),re=o.exports.lazy(()=>u(()=>import("./Gastos2.js"),["assets/Gastos2.js","assets/Gastos.css","assets/index.js","assets/index14.css","assets/FormularioRealizar.js","assets/FormularioRealizar.css","assets/ErrorIcon.js","assets/StyledGridOverlay.js","assets/Box.js","assets/Typography.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/index53.js","assets/BootstrapModal.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Fade.js","assets/Modal2.js","assets/isHostComponent.js","assets/useId.js","assets/Portal.js","assets/Paper.js","assets/BootstrapModalTitle.js","assets/BootstrapModalTitle.css","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/DialogTitle.js","assets/dialogTitleClasses.js","assets/IconButton.js","assets/ButtonBase.js","assets/Paid.js","assets/BootstrapDivContent.js","assets/BootstrapDivContent.css","assets/Divider.js","assets/index18.js","assets/index10.css","assets/HeaderTitle.js","assets/StyledSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/Tooltip.js","assets/Popper.js","assets/Grow.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Stack.js","assets/index33.js","assets/DialogActions.js","assets/Button.js","assets/TextInput.js","assets/TextField.js","assets/useFormControl.js","assets/formControlState.js","assets/List.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/string.helper.js","assets/regex.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/Loader2.js","assets/Loader.css","assets/useForm.js","assets/object.helper.js","assets/array.js","assets/upperFirst.js","assets/Lazy.js","assets/useGetDefaultValues.js","assets/ContainerFormulario.js"])),te=o.exports.lazy(()=>u(()=>import("./FormularioAcciones.js"),["assets/FormularioAcciones.js","assets/FormularioAcciones.css","assets/index.js","assets/index14.css","assets/index18.js","assets/index10.css","assets/HeaderTitle.js","assets/Typography.js","assets/Divider.js","assets/StyledSpeedDial.js","assets/Assignment.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useId.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/isHostComponent.js","assets/Grow.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Backdrop.js","assets/Fade.js","assets/Stack.js","assets/Paid.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/index53.js","assets/BootstrapModal.js","assets/ModalTransition.js","assets/Modal2.js","assets/Paper.js","assets/BootstrapModalTitle.js","assets/BootstrapModalTitle.css","assets/Close2.js","assets/DialogTitle.js","assets/dialogTitleClasses.js","assets/IconButton.js","assets/BootstrapDivContent.js","assets/BootstrapDivContent.css","assets/index33.js","assets/DialogActions.js","assets/Button.js","assets/Snackbar.js","assets/Alert.js","assets/Close.js","assets/Loader2.js","assets/Loader.css","assets/useForm.js","assets/object.helper.js","assets/array.js","assets/upperFirst.js","assets/regex.js","assets/Lazy.js","assets/useGetDefaultValues.js","assets/ContainerFormulario.js","assets/FormularioRealizar.js","assets/FormularioRealizar.css","assets/ErrorIcon.js","assets/StyledGridOverlay.js","assets/Box.js"])),oe=o.exports.lazy(()=>u(()=>import("./MessageItbms.js"),["assets/MessageItbms.js","assets/index.js","assets/index14.css","assets/index53.js","assets/BootstrapModal.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Fade.js","assets/Modal2.js","assets/isHostComponent.js","assets/useId.js","assets/Portal.js","assets/Paper.js","assets/BootstrapModalTitle.js","assets/BootstrapModalTitle.css","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/DialogTitle.js","assets/dialogTitleClasses.js","assets/Typography.js","assets/IconButton.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/Paid.js","assets/BootstrapDivContent.js","assets/BootstrapDivContent.css","assets/Divider.js","assets/index18.js","assets/index10.css","assets/HeaderTitle.js","assets/StyledSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/Tooltip.js","assets/Popper.js","assets/Grow.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Stack.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/index33.js","assets/DialogActions.js","assets/Button.js","assets/string.helper.js","assets/regex.js","assets/FormularioRealizar.js","assets/FormularioRealizar.css","assets/ErrorIcon.js","assets/StyledGridOverlay.js","assets/Box.js","assets/ContainerFormulario.js","assets/Alert.js","assets/Close.js"])),ae=o.exports.lazy(()=>u(()=>import("./GuardadoPagadoAlert.js"),["assets/GuardadoPagadoAlert.js","assets/index.js","assets/index14.css","assets/Alert.js","assets/createSvgIcon.js","assets/Close.js","assets/Paper.js","assets/IconButton.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/useIsFocusVisible.js","assets/Loader2.js","assets/Loader.css","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/CircularProgress.js","assets/index53.js","assets/BootstrapModal.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Fade.js","assets/Modal2.js","assets/isHostComponent.js","assets/useId.js","assets/Portal.js","assets/BootstrapModalTitle.js","assets/BootstrapModalTitle.css","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/useControlled.js","assets/DialogTitle.js","assets/dialogTitleClasses.js","assets/Paid.js","assets/BootstrapDivContent.js","assets/BootstrapDivContent.css","assets/Divider.js","assets/index18.js","assets/index10.css","assets/HeaderTitle.js","assets/StyledSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/Tooltip.js","assets/Popper.js","assets/Grow.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Stack.js","assets/index33.js","assets/DialogActions.js","assets/Button.js","assets/useForm.js","assets/object.helper.js","assets/array.js","assets/upperFirst.js","assets/regex.js","assets/Lazy.js","assets/useGetDefaultValues.js","assets/ContainerFormulario.js","assets/FormularioRealizar.js","assets/FormularioRealizar.css","assets/ErrorIcon.js","assets/StyledGridOverlay.js","assets/Box.js"])),ne=()=>{const{fetcher:a,negocio:e}=o.exports.useContext(q),[,,r,s]=a,{cliente:p}=o.exports.useContext(R),n=o.exports.useMemo(()=>p?p.negocios.length:0,[p]);return r||s?t(K,{itbms:r,children:k("div",{className:`${g.flexColumn} ${g.paper} ${n>1?g.maxWidthMore:g.maxWidthOne}`,children:[t(o.exports.Suspense,{fallback:t("div",{}),children:t(ae,{})}),t(o.exports.Suspense,{fallback:t("div",{}),children:t(oe,{})}),k("span",{className:g.title,children:[e.tipo," ",e.nombre_negocio]}),k("div",{className:`${g.itemColumn}`,children:[t(o.exports.Suspense,{fallback:t(m,{}),children:t(Q,{})}),t(o.exports.Suspense,{fallback:t(m,{}),children:t(U,{})})]}),t("div",{className:`${g.itemColumn}`,children:t(o.exports.Suspense,{fallback:t(m,{}),children:t(X,{})})}),t(o.exports.Suspense,{fallback:t(m,{}),children:t(Y,{})}),t(o.exports.Suspense,{fallback:t(m,{}),children:t(Z,{})}),t(o.exports.Suspense,{fallback:t(m,{}),children:t(ee,{})}),t(o.exports.Suspense,{fallback:t(m,{}),children:t(re,{})}),t(o.exports.Suspense,{fallback:t(m,{}),children:t(te,{})})]})}):t(m,{})};var fe=Object.freeze(Object.defineProperty({__proto__:null,default:ne},Symbol.toStringTag,{value:"Module"}));export{J as F,fe as a};
