var L=Object.defineProperty,T=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var q=(t,e,r)=>e in t?L(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,d=(t,e)=>{for(var r in e||(e={}))z.call(e,r)&&q(t,r,e[r]);if(S)for(var r of S(e))M.call(e,r)&&q(t,r,e[r]);return t},v=(t,e)=>T(t,w(e));import{r as n,aw as E,aH as N,as as I,f as O,j as x,a as o,F as B,b as u}from"./index.js";import{L as p}from"./Loader.js";import{s as i}from"./FormularioRealizar.js";import{C as h}from"./index53.js";import{u as U}from"./useForm.js";import{d as _,e as j,c as F,a as m}from"./array.js";import{d as G,e as D}from"./regex.js";import{c as P}from"./Lazy.js";import{u as V}from"./useGetDefaultValues.js";const c=_().typeError("Favor de ingresar el monto").positive("El monto debe ser un n\xFAmero positivo").min(0,"El monto debe ser mayor \xF3 igual a 0").max(9e10,"Favor ingresar un n\xFAmero de m\xE1ximo 10 d\xEDgitos").required("Favor de ingresar el monto").test("check-decimal","Favor ingresar m\xE1ximo dos decimales",t=>!!(t===0||t&&t.toString().match(G))),W=P(t=>t&&t.length<=1?j().of(F().shape({texto:m().trim().nullable().notRequired().test("check-texto","Favor ingresar una descripci\xF3n",function(e){const r=this.parent;return!(Object.keys(r).some(s=>r[s])&&!e)}),nombre:m().trim().nullable().notRequired().test("check-texto","Favor ingresar el nombre",function(e){const r=this.parent;return!(Object.keys(r).some(s=>r[s])&&!e)}),ruc:m().trim().nullable().notRequired().test("check-texto","Favor ingresar el ruc",function(e){const r=this.parent;return!(Object.keys(r).some(s=>r[s])&&!e)}),dv:m().trim().nullable().notRequired().test("check-dv","Favor ingresar el DV",function(e){const r=this.parent;return!(Object.keys(r).some(s=>r[s])&&(!e||e&&!new RegExp(D).test(e)))}),valor:_().nullable().notRequired().transform((e,r)=>r===""?0:e).typeError("Favor ingresar el total").test("check-valor","Favor ingresar el total",function(e){const r=this.parent;return!(Object.keys(r).some(s=>r[s])&&!e)})})).nullable().notRequired().typeError("Favor ingresar los gastos"):j().of(F().shape({texto:m().trim().required("Favor ingresar una descripci\xF3n"),nombre:m().trim().required("Favor ingresar el nombre"),ruc:m().trim().required("Favor ingresar el ruc"),dv:m().trim().min(2,"Favor ingresar dos d\xE9cimales").max(2,"Favor ingresar dos d\xE9cimales").matches(D,"Favor ingresar dos d\xE9cimales").required("Favor ingresar una descripci\xF3n"),valor:_().typeError("Favor ingresar el total").min(.1,"Favor ingresar un valor mayor a 0").positive("Favor ingresar un valor positivo").required("Favor ingresar el total")}).typeError("Favor ingresar los gastos").required("Favor ingresar los gastos"))),H=P(t=>t&&t.length<=1?j().of(F().shape({id_agente_retenedor:_().typeError("Favor ingresar el agente retenedor").integer().nullable(!0).notRequired().transform((e,r)=>r===""?0:e).test("check-texto","Favor ingresar el agente retenedor",function(e){return!(this.parent.valor&&this.parent.valor>0&&!e)}),valor:_().typeError("Favor ingresar el total").nullable().notRequired().transform((e,r)=>r===""?0:e).test("check-valor","Favor ingresar el total",function(e){return!(this.parent.id_agente_retenedor&&!e)})})).nullable().notRequired().typeError("Favor ingresar las retenciones"):j().of(F().shape({id_agente_retenedor:_().typeError("Favor ingresar el agente retenedor").integer("Favor ingresar el agente retenedor").min(0,"Favor ingresar el agente retenedor").required("Favor ingresar el agente retenedor"),valor:_().typeError("Favor ingresar el total").min(.1,"Favor ingresar un valor mayor a 0").positive("Favor ingresar un valor positivo").required("Favor ingresar el total")}).typeError("Favor ingresar las retenciones").required("Favor ingresar las retenciones"))),J=F().shape({mes_correspondiente:m().trim().typeError("Favor ingresar el mes correspondiente").required("Favor ingresar el mes correspondiente"),id_negocio:_().typeError("Favor seleccionar el cliente").min(1,"Favor seleccionar el cliente").positive("Favor seleccionar el cliente").integer("Favor seleccionar el cliente").required("Favor seleccionar el cliente"),id_cliente:_().typeError("Favor seleccionar el cliente").min(1,"Favor seleccionar el cliente").positive("Favor seleccionar el cliente").integer("Favor seleccionar el cliente").required("Favor seleccionar el cliente"),venta_7:c,venta_10:c,venta_15:c,venta_exnt:c,ventas:c,compra_7:c,compra_import:c,compra_10:c,compra_15:c,compra_exnt:c,compras:c,acumulado:c,retenciones:H,gastos:W,notas:m().trim().nullable(!0)}),K=()=>{const{mes:t}=n.exports.useContext(h),{fetcherItbms:e,form:r}=n.exports.useContext(C),[,s,,,,l]=e,{retenciones:f,gastos:R}=V(),{formState:b,setFormState:k}=r;n.exports.useEffect(()=>{(()=>{const y=E(t,"yyyy-MM-01"),{id_cliente:$,id_negocio:A}=b;l(),s(`/admin/clientes/${$}/negocios/${A}/f430`,{params:{mes_correspondiente:y}}).then(({data:a})=>{let g=v(d({},b),{mes_correspondiente:y});a&&N(new Date(y),new Date(E(a.mes_correspondiente,"yyyy-MM-01")))===1?g=v(d({},g),{id:0,fecha_creacion:"",fecha_enviado:"",acumulado:Number(a.total)<0?a.total:"0.00",general_credito:Boolean(Number(a.general_credito)),pagar_dgi:Boolean(Number(a.pagar_dgi)),ajuste:a.ajuste||"",cant_meses_ajuste:a.cant_meses_ajuste||"",impuesto_ajuste:a.impuesto_ajuste||""}):a&&N(new Date(y),new Date(E(a.mes_correspondiente)))===0?g=v(d(d({},g),a),{notas:a.notas||"",retenciones:a.retenciones.length>0?a.retenciones:f,gastos:a.gastos.length>0?a.gastos:R,general_credito:Boolean(Number(a.general_credito)),pagar_dgi:Boolean(Number(a.pagar_dgi)),ajuste:a.ajuste||"",cant_meses_ajuste:a.cant_meses_ajuste||"",impuesto_ajuste:a.impuesto_ajuste||""}):g=v(d({},g),{id:0,fecha_creacion:"",fecha_enviado:""}),k(d({},g))})})()},[t])},Q=()=>{const{negocios:t,setNegocios:e}=n.exports.useContext(h),{form:r,index:s}=n.exports.useContext(C),{formState:l}=r;I(()=>{const f=t;f[s]=l,e([...f])},[l])},C=n.exports.createContext({}),X=()=>{const{checkItbms:t}=n.exports.useContext(h),{form:e}=n.exports.useContext(C),{setFormState:r}=e;return K(),Q(),I(()=>{(()=>{r(l=>v(d({},l),{general_credito:Boolean(Number(t))}))})()},[t]),o(B,{})},Y=({children:t,i:e,negocio:r})=>{const{cliente:s,mes:l}=n.exports.useContext(h),f=O(),{defaulValues:R}=V(),b=O(),k=U(v(d({},R),{id_cliente:s.id,nom_cliente:s.nom_cliente,id_negocio:r.id,tipo:r.tipo,nombre_negocio:r.nombre_negocio,mes_correspondiente:E(l,"yyyy-MM-dd")}),J);return x(C.Provider,{value:{form:k,fetcher:b,fetcherItbms:f,index:e},children:[o(X,{}),t]})},Z=n.exports.lazy(()=>u(()=>import("./Ventas2.js"),["assets/Ventas2.js","assets/index.js","assets/index3.css","assets/FormularioRealizar.js","assets/FormularioRealizar.css","assets/ErrorIcon.js","assets/StyledGridOverlay.js","assets/Box.js","assets/Typography.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/index53.js","assets/BootstrapModalTitle.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/isHostComponent.js","assets/useControlled.js","assets/Portal.js","assets/Paper.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useIsFocusVisible.js","assets/IconButton.js","assets/ButtonBase.js","assets/Paid.js","assets/BootstrapDivContent.js","assets/BootstrapDivContent.css","assets/Divider.js","assets/index18.js","assets/index4.css","assets/HeaderTitle.js","assets/StyledSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/Tooltip.js","assets/Popper.js","assets/Grow.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Stack.js","assets/index30.js","assets/Button.js","assets/fields.module.js","assets/fields.module.css","assets/TextInput.js","assets/TextField.js","assets/useFormControl.js","assets/List.js","assets/GlobalStyles.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/useForm.js","assets/object.helper.js","assets/array.js","assets/upperFirst.js","assets/Lazy.js","assets/useGetDefaultValues.js"])),ee=n.exports.lazy(()=>u(()=>import("./Compras2.js"),["assets/Compras2.js","assets/index.js","assets/index3.css","assets/FormularioRealizar.js","assets/FormularioRealizar.css","assets/ErrorIcon.js","assets/StyledGridOverlay.js","assets/Box.js","assets/Typography.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/index53.js","assets/BootstrapModalTitle.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/isHostComponent.js","assets/useControlled.js","assets/Portal.js","assets/Paper.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useIsFocusVisible.js","assets/IconButton.js","assets/ButtonBase.js","assets/Paid.js","assets/BootstrapDivContent.js","assets/BootstrapDivContent.css","assets/Divider.js","assets/index18.js","assets/index4.css","assets/HeaderTitle.js","assets/StyledSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/Tooltip.js","assets/Popper.js","assets/Grow.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Stack.js","assets/index30.js","assets/Button.js","assets/fields.module.js","assets/fields.module.css","assets/TextInput.js","assets/TextField.js","assets/useFormControl.js","assets/List.js","assets/GlobalStyles.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/useForm.js","assets/object.helper.js","assets/array.js","assets/upperFirst.js","assets/Lazy.js","assets/useGetDefaultValues.js"])),re=n.exports.lazy(()=>u(()=>import("./Retenciones2.js"),["assets/Retenciones2.js","assets/Retenciones.css","assets/index.js","assets/index3.css","assets/FormularioRealizar.js","assets/FormularioRealizar.css","assets/ErrorIcon.js","assets/StyledGridOverlay.js","assets/Box.js","assets/Typography.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/index53.js","assets/BootstrapModalTitle.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/isHostComponent.js","assets/useControlled.js","assets/Portal.js","assets/Paper.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useIsFocusVisible.js","assets/IconButton.js","assets/ButtonBase.js","assets/Paid.js","assets/BootstrapDivContent.js","assets/BootstrapDivContent.css","assets/Divider.js","assets/index18.js","assets/index4.css","assets/HeaderTitle.js","assets/StyledSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/Tooltip.js","assets/Popper.js","assets/Grow.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Stack.js","assets/index30.js","assets/Button.js","assets/AutocompleteServer.js","assets/TextInput.js","assets/TextField.js","assets/useFormControl.js","assets/List.js","assets/GlobalStyles.js","assets/useFetch.js","assets/useHttpService.js","assets/Autocomplete.js","assets/Close.js","assets/Chip.js","assets/fields.module.js","assets/fields.module.css","assets/string.helper.js","assets/regex.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/useForm.js","assets/object.helper.js","assets/array.js","assets/upperFirst.js","assets/Lazy.js","assets/useGetDefaultValues.js"])),oe=n.exports.lazy(()=>u(()=>import("./Credito.js"),["assets/Credito.js","assets/index.js","assets/index3.css","assets/TextInput.js","assets/TextField.js","assets/useFormControl.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/emotion-react.browser.esm.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/fields.module.js","assets/fields.module.css","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/CircularProgress.js","assets/FormControlLabel.js","assets/Checkbox.js","assets/ButtonBase.js","assets/useIsFocusVisible.js","assets/FormularioRealizar.js","assets/FormularioRealizar.css","assets/ErrorIcon.js","assets/StyledGridOverlay.js","assets/Box.js","assets/index53.js","assets/BootstrapModalTitle.js","assets/ModalTransition.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/IconButton.js","assets/Paid.js","assets/BootstrapDivContent.js","assets/BootstrapDivContent.css","assets/Divider.js","assets/index18.js","assets/index4.css","assets/HeaderTitle.js","assets/StyledSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/AssignmentRounded.js","assets/Tooltip.js","assets/Popper.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Stack.js","assets/index30.js","assets/Button.js","assets/useForm.js","assets/object.helper.js","assets/array.js","assets/upperFirst.js","assets/Lazy.js","assets/useGetDefaultValues.js"])),te=n.exports.lazy(()=>u(()=>import("./TotalNegocio.js"),["assets/TotalNegocio.js","assets/index.js","assets/index3.css","assets/string.helper.js","assets/regex.js","assets/FormularioRealizar.js","assets/FormularioRealizar.css","assets/ErrorIcon.js","assets/StyledGridOverlay.js","assets/Box.js","assets/Typography.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/index53.js","assets/BootstrapModalTitle.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/isHostComponent.js","assets/useControlled.js","assets/Portal.js","assets/Paper.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useIsFocusVisible.js","assets/IconButton.js","assets/ButtonBase.js","assets/Paid.js","assets/BootstrapDivContent.js","assets/BootstrapDivContent.css","assets/Divider.js","assets/index18.js","assets/index4.css","assets/HeaderTitle.js","assets/StyledSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/Tooltip.js","assets/Popper.js","assets/Grow.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Stack.js","assets/index30.js","assets/Button.js","assets/useForm.js","assets/object.helper.js","assets/array.js","assets/upperFirst.js","assets/Lazy.js","assets/useGetDefaultValues.js"])),ne=n.exports.lazy(()=>u(()=>import("./Notas.js"),["assets/Notas.js","assets/index.js","assets/index3.css","assets/TextInput.js","assets/TextField.js","assets/useFormControl.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/emotion-react.browser.esm.js","assets/FormularioRealizar.js","assets/FormularioRealizar.css","assets/ErrorIcon.js","assets/StyledGridOverlay.js","assets/Box.js","assets/Typography.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/index53.js","assets/BootstrapModalTitle.js","assets/ModalTransition.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/useIsFocusVisible.js","assets/IconButton.js","assets/ButtonBase.js","assets/Paid.js","assets/BootstrapDivContent.js","assets/BootstrapDivContent.css","assets/Divider.js","assets/index18.js","assets/index4.css","assets/HeaderTitle.js","assets/StyledSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/AssignmentRounded.js","assets/Tooltip.js","assets/Popper.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Stack.js","assets/index30.js","assets/Button.js","assets/useForm.js","assets/object.helper.js","assets/array.js","assets/upperFirst.js","assets/regex.js","assets/Lazy.js","assets/useGetDefaultValues.js"])),se=n.exports.lazy(()=>u(()=>import("./Gastos2.js"),["assets/Gastos2.js","assets/Gastos.css","assets/index.js","assets/index3.css","assets/FormularioRealizar.js","assets/FormularioRealizar.css","assets/ErrorIcon.js","assets/StyledGridOverlay.js","assets/Box.js","assets/Typography.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/index53.js","assets/BootstrapModalTitle.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/isHostComponent.js","assets/useControlled.js","assets/Portal.js","assets/Paper.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useIsFocusVisible.js","assets/IconButton.js","assets/ButtonBase.js","assets/Paid.js","assets/BootstrapDivContent.js","assets/BootstrapDivContent.css","assets/Divider.js","assets/index18.js","assets/index4.css","assets/HeaderTitle.js","assets/StyledSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/Tooltip.js","assets/Popper.js","assets/Grow.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Stack.js","assets/index30.js","assets/Button.js","assets/TextInput.js","assets/TextField.js","assets/useFormControl.js","assets/List.js","assets/GlobalStyles.js","assets/string.helper.js","assets/regex.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/useForm.js","assets/object.helper.js","assets/array.js","assets/upperFirst.js","assets/Lazy.js","assets/useGetDefaultValues.js"])),ae=n.exports.lazy(()=>u(()=>import("./FormularioAcciones.js"),["assets/FormularioAcciones.js","assets/FormularioAcciones.css","assets/index.js","assets/index3.css","assets/index18.js","assets/index4.css","assets/HeaderTitle.js","assets/Typography.js","assets/Divider.js","assets/StyledSpeedDial.js","assets/Assignment.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/isHostComponent.js","assets/Grow.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Backdrop.js","assets/Stack.js","assets/Paid.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/index53.js","assets/BootstrapModalTitle.js","assets/ModalTransition.js","assets/Modal2.js","assets/Paper.js","assets/Close2.js","assets/IconButton.js","assets/BootstrapDivContent.js","assets/BootstrapDivContent.css","assets/index30.js","assets/Button.js","assets/Snackbar.js","assets/Alert.js","assets/Close.js","assets/FormularioRealizar.js","assets/FormularioRealizar.css","assets/ErrorIcon.js","assets/StyledGridOverlay.js","assets/Box.js","assets/useForm.js","assets/object.helper.js","assets/array.js","assets/upperFirst.js","assets/regex.js","assets/Lazy.js","assets/useGetDefaultValues.js"])),ie=n.exports.lazy(()=>u(()=>import("./index67.js"),["assets/index67.js","assets/index12.css","assets/index.js","assets/index3.css","assets/FormularioRealizar.js","assets/FormularioRealizar.css","assets/ErrorIcon.js","assets/StyledGridOverlay.js","assets/Box.js","assets/Typography.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/index53.js","assets/BootstrapModalTitle.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/isHostComponent.js","assets/useControlled.js","assets/Portal.js","assets/Paper.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useIsFocusVisible.js","assets/IconButton.js","assets/ButtonBase.js","assets/Paid.js","assets/BootstrapDivContent.js","assets/BootstrapDivContent.css","assets/Divider.js","assets/index18.js","assets/index4.css","assets/HeaderTitle.js","assets/StyledSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/Tooltip.js","assets/Popper.js","assets/Grow.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Stack.js","assets/index30.js","assets/Button.js"])),ce=n.exports.lazy(()=>u(()=>import("./MessageItbms.js"),["assets/MessageItbms.js","assets/index.js","assets/index3.css","assets/index53.js","assets/BootstrapModalTitle.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/isHostComponent.js","assets/useControlled.js","assets/Portal.js","assets/Paper.js","assets/Typography.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useIsFocusVisible.js","assets/IconButton.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/Paid.js","assets/BootstrapDivContent.js","assets/BootstrapDivContent.css","assets/Divider.js","assets/index18.js","assets/index4.css","assets/HeaderTitle.js","assets/StyledSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/Tooltip.js","assets/Popper.js","assets/Grow.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Stack.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/index30.js","assets/Button.js","assets/string.helper.js","assets/regex.js","assets/FormularioRealizar.js","assets/FormularioRealizar.css","assets/ErrorIcon.js","assets/StyledGridOverlay.js","assets/Box.js","assets/Alert.js","assets/Close.js","assets/useForm.js","assets/object.helper.js","assets/array.js","assets/upperFirst.js","assets/Lazy.js","assets/useGetDefaultValues.js"])),le=()=>{var r;const{cliente:t}=n.exports.useContext(h),e=n.exports.useMemo(()=>t?t.negocios.length:0,[t]);return o("div",{className:i.flexRow,children:o("div",{className:i.flexColumnContainer,children:o("div",{className:i.row,children:o("div",{className:`${i.justifyCenter}`,children:x("div",{className:`${i.flexRow}`,children:[(r=t==null?void 0:t.negocios)==null?void 0:r.map((s,l)=>o(Y,{negocio:s,i:l,children:x("div",{className:`${i.flexColumn} ${i.paper} ${e>1?i.maxWidthMore:i.maxWidthOne}`,children:[o(n.exports.Suspense,{fallback:o("div",{}),children:o(ce,{})}),x("span",{className:i.title,children:[s==null?void 0:s.tipo," ",s==null?void 0:s.nombre_negocio]}),x("div",{className:`${i.itemColumn}`,children:[o(n.exports.Suspense,{fallback:o(p,{}),children:o(Z,{})}),o(n.exports.Suspense,{fallback:o(p,{}),children:o(ee,{})})]}),o("div",{className:`${i.itemColumn}`,children:o(n.exports.Suspense,{fallback:o(p,{}),children:o(re,{})})}),o(n.exports.Suspense,{fallback:o(p,{}),children:o(oe,{})}),o(n.exports.Suspense,{fallback:o(p,{}),children:o(te,{})}),o(n.exports.Suspense,{fallback:o(p,{}),children:o(ne,{})}),o(n.exports.Suspense,{fallback:o(p,{}),children:o(se,{})}),o(n.exports.Suspense,{fallback:o(p,{}),children:o(ae,{})})]})},s.id)),o(n.exports.Suspense,{fallback:o(p,{}),children:o(ie,{})})]})})})})})};var be=Object.freeze(Object.defineProperty({__proto__:null,default:le},Symbol.toStringTag,{value:"Module"}));export{be as C,C as F};
