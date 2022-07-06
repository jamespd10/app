var L=Object.defineProperty,N=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var S=(t,e,r)=>e in t?L(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,g=(t,e)=>{for(var r in e||(e={}))z.call(e,r)&&S(t,r,e[r]);if(C)for(var r of C(e))$.call(e,r)&&S(t,r,e[r]);return t},f=(t,e)=>N(t,T(e));import{r as n,aw as P,as as w,f as O,j as F,a as o,F as M,b as l}from"./index.js";import{L as m}from"./Loader.js";import{s as a}from"./FormularioRealizar.js";import{C as E}from"./index51.js";import{u as U}from"./useForm.js";import{d,e as b,c as x,a as c}from"./array.js";import{d as G,e as j}from"./regex.js";import{c as V}from"./Lazy.js";import{u as A}from"./useGetDefaultValues.js";const i=d().typeError("Favor de ingresar el monto").positive("El monto debe ser un n\xFAmero positivo").min(0,"El monto debe ser mayor \xF3 igual a 0").max(9e10,"Favor ingresar un n\xFAmero de m\xE1ximo 10 d\xEDgitos").required("Favor de ingresar el monto").test("check-decimal","Favor ingresar m\xE1ximo dos decimales",t=>!!(t===0||t&&t.toString().match(G))),B=V(t=>t&&t.length<=1?b().of(x().shape({texto:c().trim().nullable().notRequired().test("check-texto","Favor ingresar una descripci\xF3n",function(e){const r=this.parent;return!(Object.keys(r).some(s=>r[s])&&!e)}),nombre:c().trim().nullable().notRequired().test("check-texto","Favor ingresar el nombre",function(e){const r=this.parent;return!(Object.keys(r).some(s=>r[s])&&!e)}),ruc:c().trim().nullable().notRequired().test("check-texto","Favor ingresar el ruc",function(e){const r=this.parent;return!(Object.keys(r).some(s=>r[s])&&!e)}),dv:c().trim().nullable().notRequired().test("check-dv","Favor ingresar el DV",function(e){const r=this.parent;return!(Object.keys(r).some(s=>r[s])&&(!e||e&&!new RegExp(j).test(e)))}),valor:d().nullable().notRequired().transform((e,r)=>r===""?0:e).typeError("Favor ingresar el total").test("check-valor","Favor ingresar el total",function(e){const r=this.parent;return!(Object.keys(r).some(s=>r[s])&&!e)})})).nullable().notRequired().typeError("Favor ingresar los gastos"):b().of(x().shape({texto:c().trim().required("Favor ingresar una descripci\xF3n"),nombre:c().trim().required("Favor ingresar el nombre"),ruc:c().trim().required("Favor ingresar el ruc"),dv:c().trim().min(2,"Favor ingresar dos d\xE9cimales").max(2,"Favor ingresar dos d\xE9cimales").matches(j,"Favor ingresar dos d\xE9cimales").required("Favor ingresar una descripci\xF3n"),valor:d().typeError("Favor ingresar el total").min(.1,"Favor ingresar un valor mayor a 0").positive("Favor ingresar un valor positivo").required("Favor ingresar el total")}).typeError("Favor ingresar los gastos").required("Favor ingresar los gastos"))),H=V(t=>t&&t.length<=1?b().of(x().shape({id_agente_retenedor:d().typeError("Favor ingresar el agente retenedor").integer().nullable(!0).notRequired().transform((e,r)=>r===""?0:e).test("check-texto","Favor ingresar el agente retenedor",function(e){return!(this.parent.valor&&this.parent.valor>0&&!e)}),valor:d().typeError("Favor ingresar el total").nullable().notRequired().transform((e,r)=>r===""?0:e).test("check-valor","Favor ingresar el total",function(e){return!(this.parent.id_agente_retenedor&&!e)})})).nullable().notRequired().typeError("Favor ingresar las retenciones"):b().of(x().shape({id_agente_retenedor:d().typeError("Favor ingresar el agente retenedor").integer("Favor ingresar el agente retenedor").min(0,"Favor ingresar el agente retenedor").required("Favor ingresar el agente retenedor"),valor:d().typeError("Favor ingresar el total").min(.1,"Favor ingresar un valor mayor a 0").positive("Favor ingresar un valor positivo").required("Favor ingresar el total")}).typeError("Favor ingresar las retenciones").required("Favor ingresar las retenciones"))),J=x().shape({mes_correspondiente:c().trim().typeError("Favor ingresar el mes correspondiente").required("Favor ingresar el mes correspondiente"),id_negocio:d().typeError("Favor seleccionar el cliente").min(1,"Favor seleccionar el cliente").positive("Favor seleccionar el cliente").integer("Favor seleccionar el cliente").required("Favor seleccionar el cliente"),id_cliente:d().typeError("Favor seleccionar el cliente").min(1,"Favor seleccionar el cliente").positive("Favor seleccionar el cliente").integer("Favor seleccionar el cliente").required("Favor seleccionar el cliente"),venta_7:i,venta_10:i,venta_15:i,venta_exnt:i,compra_7:i,compra_import:i,compra_10:i,compra_15:i,compra_exnt:i,acumulado:i,retenciones:H,gastos:B,notas:c().trim().nullable(!0)}),K=()=>{const{mes:t}=n.exports.useContext(E),{fetcherItbms:e,form:r}=n.exports.useContext(k),[,s,,,,u]=e,{retenciones:_,gastos:y}=A(),{formState:h,setFormState:R}=r;n.exports.useEffect(()=>{(()=>{const q=P(t,"yyyy-MM-dd"),{id_cliente:D,id_negocio:I}=h;u(),s(`/admin/clientes/${D}/negocios/${I}/f430`,{params:{mes_correspondiente:q}}).then(({data:p})=>{let v=f(g({},h),{mes_correspondiente:q});p?v=f(g(g({},v),p),{notas:p.notas||"",retenciones:p.retenciones.length>0?p.retenciones:_,gastos:p.gastos.length>0?p.gastos:y}):v=f(g({},v),{id:0,fecha_creacion:"",fecha_enviado:""}),R(g({},v))})})()},[t])},Q=()=>{const{negocios:t,setNegocios:e}=n.exports.useContext(E),{form:r,index:s}=n.exports.useContext(k),{formState:u}=r;w(()=>{const _=t;_[s]=u,e([..._])},[u])},W=()=>(K(),Q(),o(M,{})),k=n.exports.createContext({}),X=({children:t,i:e,negocio:r})=>{const{cliente:s,mes:u}=n.exports.useContext(E),_=O(),{defaulValues:y}=A(),h=O(),R=U(f(g({},y),{id_cliente:s.id,nom_cliente:s.nom_cliente,id_negocio:r.id,tipo:r.tipo,nombre_negocio:r.nombre_negocio,mes_correspondiente:P(u,"yyyy-MM-dd")}),J);return F(k.Provider,{value:{form:R,fetcher:h,fetcherItbms:_,index:e},children:[o(W,{}),t]})},Y=n.exports.lazy(()=>l(()=>import("./Ventas2.js"),["assets/Ventas2.js","assets/index.js","assets/index9.css","assets/FormularioRealizar.js","assets/FormularioRealizar.css","assets/ErrorIcon.js","assets/StyledGridOverlay.js","assets/Box.js","assets/Typography.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/index51.js","assets/BootstrapModalTitle.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/isHostComponent.js","assets/useControlled.js","assets/Portal.js","assets/Paper.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useIsFocusVisible.js","assets/IconButton.js","assets/ButtonBase.js","assets/Paid.js","assets/BootstrapDivContent.js","assets/BootstrapDivContent.css","assets/Divider.js","assets/index18.js","assets/index8.css","assets/HeaderTitle.js","assets/StyledSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/Tooltip.js","assets/Popper.js","assets/Grow.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Stack.js","assets/index30.js","assets/Button.js","assets/fields.module.js","assets/fields.module.css","assets/TextInput.js","assets/TextField.js","assets/List.js","assets/GlobalStyles.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/useForm.js","assets/object.helper.js","assets/array.js","assets/upperFirst.js","assets/Lazy.js","assets/useGetDefaultValues.js"])),Z=n.exports.lazy(()=>l(()=>import("./Compras2.js"),["assets/Compras2.js","assets/index.js","assets/index9.css","assets/FormularioRealizar.js","assets/FormularioRealizar.css","assets/ErrorIcon.js","assets/StyledGridOverlay.js","assets/Box.js","assets/Typography.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/index51.js","assets/BootstrapModalTitle.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/isHostComponent.js","assets/useControlled.js","assets/Portal.js","assets/Paper.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useIsFocusVisible.js","assets/IconButton.js","assets/ButtonBase.js","assets/Paid.js","assets/BootstrapDivContent.js","assets/BootstrapDivContent.css","assets/Divider.js","assets/index18.js","assets/index8.css","assets/HeaderTitle.js","assets/StyledSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/Tooltip.js","assets/Popper.js","assets/Grow.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Stack.js","assets/index30.js","assets/Button.js","assets/fields.module.js","assets/fields.module.css","assets/TextInput.js","assets/TextField.js","assets/List.js","assets/GlobalStyles.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/useForm.js","assets/object.helper.js","assets/array.js","assets/upperFirst.js","assets/Lazy.js","assets/useGetDefaultValues.js"])),ee=n.exports.lazy(()=>l(()=>import("./Retenciones2.js"),["assets/Retenciones2.js","assets/Retenciones.css","assets/index.js","assets/index9.css","assets/FormularioRealizar.js","assets/FormularioRealizar.css","assets/ErrorIcon.js","assets/StyledGridOverlay.js","assets/Box.js","assets/Typography.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/index51.js","assets/BootstrapModalTitle.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/isHostComponent.js","assets/useControlled.js","assets/Portal.js","assets/Paper.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useIsFocusVisible.js","assets/IconButton.js","assets/ButtonBase.js","assets/Paid.js","assets/BootstrapDivContent.js","assets/BootstrapDivContent.css","assets/Divider.js","assets/index18.js","assets/index8.css","assets/HeaderTitle.js","assets/StyledSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/Tooltip.js","assets/Popper.js","assets/Grow.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Stack.js","assets/index30.js","assets/Button.js","assets/AutocompleteServer.js","assets/TextInput.js","assets/TextField.js","assets/List.js","assets/GlobalStyles.js","assets/useFetch.js","assets/useHttpService.js","assets/Autocomplete.js","assets/Close.js","assets/Chip.js","assets/fields.module.js","assets/fields.module.css","assets/string.helper.js","assets/regex.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/useForm.js","assets/object.helper.js","assets/array.js","assets/upperFirst.js","assets/Lazy.js","assets/useGetDefaultValues.js"])),re=n.exports.lazy(()=>l(()=>import("./Credito.js"),["assets/Credito.js","assets/index.js","assets/index9.css","assets/TextInput.js","assets/TextField.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/emotion-react.browser.esm.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/CircularProgress.js","assets/FormularioRealizar.js","assets/FormularioRealizar.css","assets/ErrorIcon.js","assets/StyledGridOverlay.js","assets/Box.js","assets/index51.js","assets/BootstrapModalTitle.js","assets/ModalTransition.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/useIsFocusVisible.js","assets/IconButton.js","assets/ButtonBase.js","assets/Paid.js","assets/BootstrapDivContent.js","assets/BootstrapDivContent.css","assets/Divider.js","assets/index18.js","assets/index8.css","assets/HeaderTitle.js","assets/StyledSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/AssignmentRounded.js","assets/Tooltip.js","assets/Popper.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Stack.js","assets/index30.js","assets/Button.js","assets/useForm.js","assets/object.helper.js","assets/array.js","assets/upperFirst.js","assets/Lazy.js","assets/useGetDefaultValues.js"])),oe=n.exports.lazy(()=>l(()=>import("./TotalNegocio.js"),["assets/TotalNegocio.js","assets/index.js","assets/index9.css","assets/string.helper.js","assets/regex.js","assets/FormularioRealizar.js","assets/FormularioRealizar.css","assets/ErrorIcon.js","assets/StyledGridOverlay.js","assets/Box.js","assets/Typography.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/index51.js","assets/BootstrapModalTitle.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/isHostComponent.js","assets/useControlled.js","assets/Portal.js","assets/Paper.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useIsFocusVisible.js","assets/IconButton.js","assets/ButtonBase.js","assets/Paid.js","assets/BootstrapDivContent.js","assets/BootstrapDivContent.css","assets/Divider.js","assets/index18.js","assets/index8.css","assets/HeaderTitle.js","assets/StyledSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/Tooltip.js","assets/Popper.js","assets/Grow.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Stack.js","assets/index30.js","assets/Button.js","assets/useForm.js","assets/object.helper.js","assets/array.js","assets/upperFirst.js","assets/Lazy.js","assets/useGetDefaultValues.js"])),te=n.exports.lazy(()=>l(()=>import("./Notas.js"),["assets/Notas.js","assets/index.js","assets/index9.css","assets/TextInput.js","assets/TextField.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/emotion-react.browser.esm.js","assets/FormularioRealizar.js","assets/FormularioRealizar.css","assets/ErrorIcon.js","assets/StyledGridOverlay.js","assets/Box.js","assets/Typography.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/index51.js","assets/BootstrapModalTitle.js","assets/ModalTransition.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/useIsFocusVisible.js","assets/IconButton.js","assets/ButtonBase.js","assets/Paid.js","assets/BootstrapDivContent.js","assets/BootstrapDivContent.css","assets/Divider.js","assets/index18.js","assets/index8.css","assets/HeaderTitle.js","assets/StyledSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/AssignmentRounded.js","assets/Tooltip.js","assets/Popper.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Stack.js","assets/index30.js","assets/Button.js","assets/useForm.js","assets/object.helper.js","assets/array.js","assets/upperFirst.js","assets/regex.js","assets/Lazy.js","assets/useGetDefaultValues.js"])),ne=n.exports.lazy(()=>l(()=>import("./Gastos2.js"),["assets/Gastos2.js","assets/Gastos.css","assets/index.js","assets/index9.css","assets/FormularioRealizar.js","assets/FormularioRealizar.css","assets/ErrorIcon.js","assets/StyledGridOverlay.js","assets/Box.js","assets/Typography.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/index51.js","assets/BootstrapModalTitle.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/isHostComponent.js","assets/useControlled.js","assets/Portal.js","assets/Paper.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useIsFocusVisible.js","assets/IconButton.js","assets/ButtonBase.js","assets/Paid.js","assets/BootstrapDivContent.js","assets/BootstrapDivContent.css","assets/Divider.js","assets/index18.js","assets/index8.css","assets/HeaderTitle.js","assets/StyledSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/Tooltip.js","assets/Popper.js","assets/Grow.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Stack.js","assets/index30.js","assets/Button.js","assets/TextInput.js","assets/TextField.js","assets/List.js","assets/GlobalStyles.js","assets/string.helper.js","assets/regex.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/useForm.js","assets/object.helper.js","assets/array.js","assets/upperFirst.js","assets/Lazy.js","assets/useGetDefaultValues.js"])),se=n.exports.lazy(()=>l(()=>import("./FormularioAcciones.js"),["assets/FormularioAcciones.js","assets/FormularioAcciones.css","assets/index.js","assets/index9.css","assets/index18.js","assets/index8.css","assets/HeaderTitle.js","assets/Typography.js","assets/Divider.js","assets/StyledSpeedDial.js","assets/Assignment.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/isHostComponent.js","assets/Grow.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Backdrop.js","assets/Stack.js","assets/Paid.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/index51.js","assets/BootstrapModalTitle.js","assets/ModalTransition.js","assets/Modal2.js","assets/Paper.js","assets/Close2.js","assets/IconButton.js","assets/BootstrapDivContent.js","assets/BootstrapDivContent.css","assets/index30.js","assets/Button.js","assets/Snackbar.js","assets/Alert.js","assets/Close.js","assets/FormularioRealizar.js","assets/FormularioRealizar.css","assets/ErrorIcon.js","assets/StyledGridOverlay.js","assets/Box.js","assets/useForm.js","assets/object.helper.js","assets/array.js","assets/upperFirst.js","assets/regex.js","assets/Lazy.js","assets/useGetDefaultValues.js"])),ae=n.exports.lazy(()=>l(()=>import("./index65.js"),["assets/index65.js","assets/index11.css","assets/index.js","assets/index9.css","assets/FormularioRealizar.js","assets/FormularioRealizar.css","assets/ErrorIcon.js","assets/StyledGridOverlay.js","assets/Box.js","assets/Typography.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/index51.js","assets/BootstrapModalTitle.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/isHostComponent.js","assets/useControlled.js","assets/Portal.js","assets/Paper.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useIsFocusVisible.js","assets/IconButton.js","assets/ButtonBase.js","assets/Paid.js","assets/BootstrapDivContent.js","assets/BootstrapDivContent.css","assets/Divider.js","assets/index18.js","assets/index8.css","assets/HeaderTitle.js","assets/StyledSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/Tooltip.js","assets/Popper.js","assets/Grow.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Stack.js","assets/index30.js","assets/Button.js"])),ie=n.exports.lazy(()=>l(()=>import("./MessageItbms.js"),["assets/MessageItbms.js","assets/index.js","assets/index9.css","assets/Alert.js","assets/createSvgIcon.js","assets/Close.js","assets/Paper.js","assets/IconButton.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/useIsFocusVisible.js","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/CircularProgress.js","assets/FormularioRealizar.js","assets/FormularioRealizar.css","assets/ErrorIcon.js","assets/StyledGridOverlay.js","assets/Box.js","assets/index51.js","assets/BootstrapModalTitle.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/isHostComponent.js","assets/useControlled.js","assets/Portal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/Paid.js","assets/BootstrapDivContent.js","assets/BootstrapDivContent.css","assets/Divider.js","assets/index18.js","assets/index8.css","assets/HeaderTitle.js","assets/StyledSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/Tooltip.js","assets/Popper.js","assets/Grow.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Stack.js","assets/index30.js","assets/Button.js","assets/useForm.js","assets/object.helper.js","assets/array.js","assets/upperFirst.js","assets/regex.js","assets/Lazy.js","assets/useGetDefaultValues.js"])),ce=()=>{var r;const{cliente:t}=n.exports.useContext(E),e=n.exports.useMemo(()=>(t==null?void 0:t.negocios.length)||0,[t]);return o("div",{className:a.flexRow,children:o("div",{className:a.flexColumnContainer,children:F("div",{className:a.flexRow,children:[(r=t==null?void 0:t.negocios)==null?void 0:r.map((s,u)=>o(X,{negocio:s,i:u,children:F("div",{className:`${a.flexColumn} ${a.paper}`,children:[o(n.exports.Suspense,{fallback:o("div",{}),children:o(ie,{})}),F("span",{className:a.title,children:[s==null?void 0:s.tipo," ",s==null?void 0:s.nombre_negocio]}),F("div",{className:`${e>1?a.itemColumn:a.itemRow}`,children:[o(n.exports.Suspense,{fallback:o(m,{}),children:o(Y,{})}),o(n.exports.Suspense,{fallback:o(m,{}),children:o(Z,{})})]}),o("div",{className:`${e>1?a.itemColumn:a.itemRow}`,children:o(n.exports.Suspense,{fallback:o(m,{}),children:o(ee,{})})}),o(n.exports.Suspense,{fallback:o(m,{}),children:o(re,{})}),o(n.exports.Suspense,{fallback:o(m,{}),children:o(oe,{})}),o(n.exports.Suspense,{fallback:o(m,{}),children:o(te,{})}),o(n.exports.Suspense,{fallback:o(m,{}),children:o(ne,{})}),o(n.exports.Suspense,{fallback:o(m,{}),children:o(se,{})})]})},s.id)),o(n.exports.Suspense,{fallback:o(m,{}),children:o(ae,{})})]})})})};var he=Object.freeze(Object.defineProperty({__proto__:null,default:ce},Symbol.toStringTag,{value:"Module"}));export{he as C,k as F};
