var H=Object.defineProperty,M=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var V=(e,r,t)=>r in e?H(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))Z.call(r,t)&&V(e,t,r[t]);if(L)for(var t of L(r))J.call(r,t)&&V(e,t,r[t]);return e},b=(e,r)=>M(e,U(r));import{r as m,a as o,b as q,j as g,F as K,ap as j}from"./index.js";import{u as F,C as Q,b as C,F as X}from"./yup.module.js";import{H as Y}from"./HeaderTitle.js";import ee from"./StepperForm.js";import{u as re}from"./useStepper.js";import{d as oe}from"./Add.js";import{u as G}from"./useModal.js";import{A as R}from"./AutocompleteServer.js";import{d as k,a as O}from"./CheckBoxOutlineBlank.js";import{G as p}from"./Grid.js";import{L as te}from"./ListItem.js";import{C as w}from"./Checkbox.js";import{T as A}from"./Typography.js";import{I as ae}from"./IconButton.js";import{T}from"./TextInput.js";import{D as y}from"./DecimalInput.js";import{P as ie}from"./PhoneInput.js";import{D as ne}from"./DateInput.js";import{P as $}from"./PatronalInput.js";import{L as se}from"./Loader.js";import{S as P}from"./Stack.js";import{D as W,a as le}from"./DireccionProvider.js";import{c as N,a as h,d as x,e as ce,b as de}from"./array.js";import{t as me}from"./string.helper.js";import{a as pe,r as ue,d as E,p as ge,b as he}from"./regex.js";import"./BootstrapTooltip.js";import"./SpeedDial.module.js";import{B as xe}from"./BackgroundLoader.js";import"./SelectedCard.js";import fe from"./Modal.js";import{N as ve}from"./NegociosProvider.js";import{u as _e}from"./useFetcherEarly.js";import{C as be}from"./Card.js";const z=m.exports.createContext({}),Fe=({children:e})=>{const r=G(),t=G();return o(z.Provider,{value:{modalAddTipo:r,modalAddActividad:t},children:e})},ye=m.exports.lazy(()=>q(()=>import("./ModalAddTipo.js"),["assets/ModalAddTipo.js","assets/index.js","assets/index15.css","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useId.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/DialogTitle.js","assets/dialogTitleClasses.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Fade.js","assets/Modal2.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Typography.js","assets/IconButton.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/Warning.js","assets/Error.js","assets/CheckCircle.js","assets/DialogContent.js","assets/DialogActions.js","assets/LoadingButton.js","assets/Button.js","assets/CircularProgress.js","assets/useFetch.js","assets/useHttpService.js","assets/TextInput.js","assets/TextField.js","assets/useFormControl.js","assets/formControlState.js","assets/react-is.production.min.js","assets/Grow.js","assets/List.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/yup.module.js","assets/array.js","assets/upperFirst.js","assets/Alert.js","assets/Close.js","assets/HeaderTitle.js","assets/Divider.js","assets/StepperForm.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Grid.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/SelectedCard.js","assets/Box.js","assets/useStepper.js","assets/useModal.js","assets/Add.js","assets/AutocompleteServer.js","assets/Autocomplete.js","assets/Chip.js","assets/CheckBoxOutlineBlank.js","assets/ListItem.js","assets/Checkbox.js","assets/SwitchBase.js","assets/DecimalInput.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/PhoneInput.js","assets/DateInput.js","assets/DatePicker.js","assets/MobileDatePicker.js","assets/MonthPicker.js","assets/PureDateInput.js","assets/CalendarPicker.js","assets/InputAdornment.js","assets/index11.js","assets/PatronalInput.js","assets/CustomSipe.js","assets/Loader.js","assets/Stack.js","assets/DireccionProvider.js","assets/BackgroundLoader.js","assets/NegociosProvider.js","assets/useFetchPagination.js","assets/useAsyncRetry.js","assets/useList.js","assets/usePrevious.js","assets/object.helper.js","assets/useFetcherEarly.js","assets/Card.js"])),Ee=()=>{const{modalAddTipo:e}=m.exports.useContext(z),{setOpen:r}=e,{control:t,formState:n,watch:s}=F(),{errors:c}=n,a=s("tipos");return g(p,{item:!0,sm:6,md:4,children:[o(m.exports.Suspense,{fallback:o("div",{}),children:o(ye,{})}),g("div",{style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"center",justifyContent:"space-between"},children:[o(Q,{control:t,name:"tipos",render:({field:i})=>{var d,v,l;return o(R,b(u({},i),{ref:null,urlFetch:"/admin/negocios/tipos",enableFirst:!0,disableHight:!0,onChange:(f,_)=>i.onChange(_),multiple:!0,getOptionDisabled:f=>!!(Array.isArray(a)&&a.length===1&&!a.includes(f)),inputProps:{label:"Tipos del negocio",helperText:(d=c==null?void 0:c.tipos)==null?void 0:d.message,error:!!((l=(v=n.errors)==null?void 0:v.tipos)!=null&&l.message)},fullWidth:!0,isOptionEqualToValue:(f,_)=>f.id===_.id,getOptionLabel:f=>f.tipo,renderOption:(f,_,{selected:D})=>g(te,b(u({},f),{style:{textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[o(w,{icon:o(k,{}),checkedIcon:o(O,{}),style:{marginRight:8},checked:D}),o("div",{style:{display:"flex",flexDirection:"column",textTransform:"uppercase"},children:o(A,{variant:"body1",children:o("strong",{children:_.tipo})})})]}))}))}}),o("div",{children:o(ae,{size:"small",onClick:()=>r(),children:o(oe,{})})})]})]})},Ae=()=>{var n;const{register:e,formState:r}=F(),{errors:t}=r;return o(p,{item:!0,xs:12,children:o(T,u({label:"Actividad",fullWidth:!0,error:!!t.actividad,helperText:(n=t.actividad)==null?void 0:n.message},e("actividad")))})},Te=()=>{const{control:e,setValue:r}=F(),t=C({control:e,name:"metodo_pago"});return o(K,{children:o(R,{ref:null,inputProps:{label:"M\xE9todo de pago"},disableStyle:!0,enableFirst:!0,value:t,fullWidth:!0,onChange:(n,s)=>{s?r("metodo_pago",s):r("metodo_pago","")},urlFetch:"/metodos-pagos?disableFields=1"})})},Se=()=>{var t,n,s,c,a,i;const{formState:e}=F(),{errors:r}=e;return g(P,{spacing:1,direction:"column",style:{marginTop:7,border:"2px solid black",borderRadius:5,padding:10},children:[o(A,{variant:"h5",children:"Honorarios"}),g(P,{spacing:1,direction:{xs:"column",lg:"row"},children:[o(y,{name:"serv_conta",label:"Servicio de contabilidad",fullWidth:!0,error:!!r.serv_conta,helperText:(t=r.serv_conta)==null?void 0:t.message}),o(y,{name:"formulario_compra",label:"Formulario de Compra",fullWidth:!0,error:!!r.serv_conta,helperText:(n=r.serv_conta)==null?void 0:n.message}),o(y,{name:"formulario_venta",label:"Formulario de Venta",fullWidth:!0,error:!!r.serv_conta,helperText:(s=r.serv_conta)==null?void 0:s.message}),o(y,{name:"cargo_al",label:"Cargo A.L.",fullWidth:!0,error:!!r.cargo_al,helperText:(c=r.cargo_al)==null?void 0:c.message})]}),g(P,{spacing:1,direction:{xs:"column",lg:"row"},children:[o(y,{name:"formulario_03",label:"Formulario 03",fullWidth:!0,error:!!r.formulario_03,helperText:(a=r.formulario_03)==null?void 0:a.message}),o(y,{name:"form_reten_itbms",label:"Formulario retenci\xF3n ITBMS",fullWidth:!0,error:!!r.form_reten_itbms,helperText:(i=r.form_reten_itbms)==null?void 0:i.message}),o(Te,{})]})]})},Re=()=>{const{control:e,setValue:r}=F(),t=C({control:e,name:"provincia"}),{provincia:n,setProvincia:s}=m.exports.useContext(W);return m.exports.useEffect(()=>{t&&s({id:0,provincia:t})},[]),o(p,{item:!0,xs:12,sm:6,md:4,children:o(R,{ref:null,inputProps:{label:"Provincia"},disableStyle:!0,enableFirst:!0,value:n,onChange:(c,a)=>{s(a),a?r("provincia",a.provincia):r("provincia","")},isOptionEqualToValue:(c,a)=>c.id===a.id,urlFetch:"/provincias",getOptionLabel:c=>c.provincia,renderOption:(c,a,{selected:i})=>m.exports.createElement("li",b(u({},c),{key:a.id,style:{textOverflow:"ellipsis",whiteSpace:"nowrap"}}),o(w,{icon:o(k,{}),checkedIcon:o(O,{}),checked:i,size:"small"}),o("div",{style:{display:"flex",flexDirection:"column",textTransform:"uppercase"},children:o(A,{variant:"body1",fontWeight:"bold",children:a.provincia})}))})})},qe=()=>{const{control:e,setValue:r}=F(),t=C({control:e,name:"distrito"}),{provincia:n,distrito:s,setDistrito:c}=m.exports.useContext(W);return m.exports.useEffect(()=>{t&&c({id:0,distrito:t,id_provincia:0,provincia:""})},[]),o(p,{item:!0,xs:12,sm:6,md:4,children:o(R,{ref:null,inputProps:{label:"Distrito"},disableStyle:!0,params:{id_provincia:n?n.id:""},value:s,enableFirst:!0,onChange:(a,i)=>{c(i),i?r("distrito",i.distrito):r("distrito","")},isOptionEqualToValue:(a,i)=>a.id===i.id,urlFetch:"/distritos",getOptionLabel:a=>a.distrito,renderOption:(a,i,{selected:d})=>m.exports.createElement("li",b(u({},a),{key:i.id,style:{textOverflow:"ellipsis",whiteSpace:"nowrap"}}),o(w,{icon:o(k,{}),checkedIcon:o(O,{}),checked:d,size:"small"}),g("div",{style:{display:"flex",flexDirection:"column",textTransform:"uppercase",padding:0,margin:0},children:[o(A,{variant:"body1",fontWeight:"bold",p:0,m:0,children:i.distrito}),o(A,{variant:"caption",p:0,m:0,children:i.provincia})]}))})})},Ce=()=>{const{control:e,setValue:r}=F(),t=C({control:e,name:"corregimiento"}),n=m.exports.useContext(W),{distrito:s,corregimiento:c,setCorregimiento:a}=n;return m.exports.useEffect(()=>{t&&a({id:0,corregimiento:t,id_distrito:0,distrito:"",provincia:""})},[]),o(p,{item:!0,xs:12,sm:6,md:4,children:o(R,{ref:null,inputProps:{label:"Corregimiento"},disableStyle:!0,params:{id_distrito:s?s.id:""},value:c,enableFirst:!0,onChange:(i,d)=>{a(d),d?r("corregimiento",d.corregimiento):r("corregimiento","")},isOptionEqualToValue:(i,d)=>i.id===d.id,urlFetch:"/corregimientos",getOptionLabel:i=>i.corregimiento,renderOption:(i,d,{selected:v})=>m.exports.createElement("li",b(u({},i),{key:d.id,style:{textOverflow:"ellipsis",whiteSpace:"nowrap"}}),o(w,{icon:o(k,{}),checkedIcon:o(O,{}),checked:v,size:"small"}),g("div",{style:{display:"flex",flexDirection:"column",textTransform:"uppercase",padding:0,margin:0},children:[o(A,{variant:"body1",fontWeight:"bold",p:0,m:0,children:d.corregimiento}),g(A,{variant:"caption",p:0,m:0,children:[d.distrito," - ",d.provincia]})]}))})})},ke=m.exports.lazy(()=>q(()=>import("./FormOtrosDatos.js"),["assets/FormOtrosDatos.js","assets/constantsLists.js","assets/SelectHookForm.js","assets/yup.module.js","assets/index.js","assets/index15.css","assets/Box.js","assets/Typography.js","assets/TextField.js","assets/useFormControl.js","assets/useControlled.js","assets/useId.js","assets/formControlState.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/Fade.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/emotion-react.browser.esm.js","assets/MenuItem.js","assets/ButtonBase.js","assets/useIsFocusVisible.js","assets/listItemIconClasses.js","assets/Divider.js","assets/listItemTextClasses.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/useHttpService.js","assets/Grid.js","assets/string.helper.js","assets/regex.js","assets/TextInput.js"])),Oe=m.exports.lazy(()=>q(()=>import("./SuperValidado.js"),["assets/SuperValidado.js","assets/yup.module.js","assets/index.js","assets/index15.css","assets/Grid.js","assets/Typography.js","assets/FormControlLabel.js","assets/formControlState.js","assets/useFormControl.js","assets/Checkbox.js","assets/SwitchBase.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/useIsFocusVisible.js","assets/useControlled.js","assets/createSvgIcon.js"])),we=()=>{var t,n,s,c,a,i,d,v,l;const{register:e,formState:{errors:r}}=F();return g(le,{children:[g(p,{container:!0,spacing:1,direction:"row",wrap:"wrap",sx:{"& > :not(style)":{flexGrow:1}},children:[o(Ee,{}),o(p,{item:!0,sm:6,md:4,children:o(T,u({label:"Nombre del negocio",fullWidth:!0,error:!!r.nombre_negocio,helperText:(t=r.nombre_negocio)==null?void 0:t.message,required:!0},e("nombre_negocio")))}),o(p,{item:!0,sm:6,md:4,children:o(T,u({label:"Aviso de operaci\xF3n",fullWidth:!0,error:!!r.aviso_operacion,helperText:(n=r.aviso_operacion)==null?void 0:n.message,required:!0},e("aviso_operacion")))}),o(p,{item:!0,sm:6,md:4,children:o(ne,{label:"Fecha de aviso de operaci\xF3n",name:"fecha_a_operacion",error:!!r.fecha_a_operacion,helperText:(s=r.fecha_a_operacion)==null?void 0:s.message,required:!0})}),o(p,{item:!0,sm:6,md:4,children:o(T,u({label:"No. contribuyente",fullWidth:!0,error:!!r.no_contribuyente,helperText:(c=r.no_contribuyente)==null?void 0:c.message,required:!0},e("no_contribuyente")))}),o(p,{item:!0,sm:6,md:4,children:o(y,{name:"capital",label:"Capital",fullWidth:!0,error:!!r.capital,helperText:(a=r.capital)==null?void 0:a.message,required:!0})}),o(p,{item:!0,sm:6,md:4,children:o(T,u({label:"N\xFAmero de empleados",fullWidth:!0,error:!!r.n_empleados,helperText:r.n_empleados?(i=r.n_empleados)==null?void 0:i.message:"N\xFAmero entero positivo \xF3 puede ser 0"},e("n_empleados")))}),o(p,{item:!0,sm:6,md:4,children:o($,u({label:"N\xFAmero SIPE",fullWidth:!0,sipe:!0,error:!!r.patronal_sipe,helperText:(d=r.patronal_sipe)==null?void 0:d.message},e("patronal_sipe")))}),o(p,{item:!0,sm:6,md:4,children:o($,u({label:"N\xFAmero patronal",fullWidth:!0,error:!!r.n_patronal,helperText:(v=r.n_patronal)==null?void 0:v.message,required:!0},e("n_patronal")))}),o(p,{item:!0,sm:6,md:4,children:o(ie,{name:"telefono",label:"Tel\xE9fono",fullWidth:!0,error:!!r.telefono,helperText:r.telefono&&r.telefono.message?r.telefono.message:"Ejm: 6666-6666 \xF3 222-2222",required:!0})}),o(Re,{}),o(qe,{}),o(Ce,{}),o(p,{item:!0,xs:"auto",children:o(T,u({label:"Direcci\xF3n",fullWidth:!0,error:!!r.direccion,helperText:(l=r.direccion)==null?void 0:l.message,required:!0,inputProps:{maxLength:255}},e("direccion")))})]}),o(p,{container:!0,spacing:1,direction:"row",wrap:"wrap",sx:{"& > :not(style)":{flexGrow:1},paddingTop:1},children:o(Ae,{})}),o(p,{container:!0,spacing:1,direction:"row",wrap:"wrap",sx:{"& > :not(style)":{flexGrow:1},paddingTop:1},children:o(m.exports.Suspense,{fallback:o(se,{}),children:o(ke,{})})}),o(Se,{}),o(Oe,{})]})},De=N().shape({nombre_negocio:h().trim().required("Favor de ingresar el nombre del negocio").max(100,"Favor ingresar m\xE1ximo 100 caracteres"),negocio_referencia:h().trim().notRequired().nullable().max(255,"Favor ingresar m\xE1ximo 255 caracteres"),aviso_operacion:h().typeError("Favor de ingresar el aviso de operaci\xF3n").trim().max(50,"Favor de ingresar m\xE1ximo 50 caracteres").test("check-a-op","Favor ingresar solo n\xFAmeros, letras y/o guiones",e=>!!(!e||e&&e.match(pe))).nullable().notRequired(),fecha_a_operacion:h().trim().typeError("Favor de seleccionar la fecha de aviso de operaci\xF3n").nullable().notRequired().default(null),no_contribuyente:h().typeError("Favor de ingresar el No. contribuyente").trim().nullable().max(255,"Favor ingresar m\xE1ximo 255 caracteres").test("check-no_c","Favor ingresar solo n\xFAmeros y/o guion(-)",e=>!!(!e||e&&e.match(ue))),capital:x().transform((e,r)=>r===""?0:e).typeError("Favor de ingresar un n\xFAmero").nullable().notRequired().test("check-decimal","Favor ingresar m\xE1ximo dos decimales",e=>!!(!e||e&&e.toString().match(E))),n_empleados:x().transform((e,r)=>r===""?0:e).typeError("Favor de ingresar el n\xFAmero de empleados \xF3 0").integer("Favor de ingresar un n\xFAmero entero").default(0).nullable(!0),patronal_sipe:h().typeError("Favor ingresar el n\xFAmero patronal").trim().test("check","Favor usar el siguiente formato: ##-###-#####",e=>!!(!e||e&&e.match(ge))).nullable(!0),n_patronal:h().typeError("Favor ingresar el n\xFAmero patronal").trim().matches(he,"Favor usar el siguiente formato: ##-###-####").nullable().notRequired(),telefono:h().typeError("Favor ingresar el tel\xE9fono").trim().nullable().notRequired().test("check-phoneNumber","Favor ingresar un n\xFAmero de tel\xE9fono v\xE1lido",e=>!!(!e||e&&me)),provincia:h().trim().max(50,"Favor ingresar m\xE1ximo 50 caracteres").nullable().notRequired(),distrito:h().trim().nullable().notRequired().max(50,"Favor ingresar m\xE1ximo 50 caracteres"),corregimiento:h().trim().max(50,"Favor ingresar m\xE1ximo 50 caracteres").nullable().notRequired(),direccion:h().trim().max(255,"Favor ingresar m\xE1ximo 255 caracteres").required("Favor de ingresar la direcci\xF3n del negocio").nullable().notRequired(),tipos:ce().of(N().shape({id:x().typeError("Favor seleccionar el tipo").transform((e,r)=>r===""?0:e).nullable().notRequired(),tipo:h().trim().required("Favor seleccionar el tipo")})).typeError("Favor seleccionar el tipo").nullable().notRequired(),actividad:h().trim().typeError("Favor ingresar la actividad").nullable(!0).notRequired(),super_validado:de().typeError("Favor seleccionar un valor boleano").nullable().notRequired()}),Pe=N().shape({ruta:x().typeError("Favor de seleccionar la ruta").integer("Favor de ingresar un n\xFAmero entero").positive("Favor de ingresar un n\xFAmero positivo").required("Favor de ingresar la ruta"),itbms_asignado_a:x().transform((e,r)=>r===""?0:e).typeError("Favor de seleccionar el usuario asignado").nullable().notRequired(),ss_asignado_a:x().transform((e,r)=>r===""?0:e).typeError("Favor de seleccionar el usuario asignado").nullable().notRequired(),serv_conta:x().transform((e,r)=>r===""?0:e).typeError("Favor de ingresar un n\xFAmero").nullable().notRequired().test("check-decimal","Favor ingresar m\xE1ximo dos decimales",e=>!!(!e||e&&e.toString().match(E))),formulario_compra:x().transform((e,r)=>r===""?0:e).typeError("Favor de ingresar un n\xFAmero").nullable().notRequired().test("check-decimal","Favor ingresar m\xE1ximo dos decimales",e=>!!(!e||e&&e.toString().match(E))),formulario_venta:x().transform((e,r)=>r===""?0:e).typeError("Favor de ingresar un n\xFAmero").nullable().notRequired().test("check-decimal","Favor ingresar m\xE1ximo dos decimales",e=>!!(!e||e&&e.toString().match(E))),cargo_al:x().transform((e,r)=>r===""?0:e).typeError("Favor de ingresar un n\xFAmero").nullable().notRequired().test("check-decimal","Favor ingresar m\xE1ximo dos decimales",e=>!!(!e||e&&e.toString().match(E))),formulario_03:x().transform((e,r)=>r===""?0:e).typeError("Favor de ingresar un n\xFAmero").nullable().notRequired().test("check-decimal","Favor ingresar m\xE1ximo dos decimales",e=>!!(!e||e&&e.toString().match(E))),form_reten_itbms:x().transform((e,r)=>r===""?0:e).typeError("Favor de ingresar un n\xFAmero").nullable().notRequired().test("check-decimal","Favor ingresar m\xE1ximo dos decimales",e=>!!(!e||e&&e.toString().match(E))),recorrido:x().transform((e,r)=>r===""?0:e).typeError("Favor de ingresar un n\xFAmero").integer("Favor de ingresar un n\xFAmero entero").nullable().notRequired(),tipo_pagos:h().trim().nullable().notRequired()}),Ne="_header_1eevv_1",We="_title_1eevv_11",Ie="_error_1eevv_15";var S={header:Ne,title:We,error:Ie};const Le=()=>{const{id:e,cliente:r}=j(),[t,n,s]=_e(`/admin/clientes/${r||e}`);return t?o("div",{className:S.header,children:"hola"}):n?g("div",{className:S.header,children:[o("span",{className:S.title,children:"Datos del cliente"}),g("div",{children:[g("span",{children:["RUC: ",o("strong",{children:n.ruc})]})," ",g("span",{children:["RAZ\xD3N SOCIAL: ",o("strong",{children:n.nom_cliente})]})]})]}):o("div",{className:S.header,children:o("span",{className:S.error,children:s==null?void 0:s.message})})},Ve=m.exports.lazy(()=>q(()=>import("./NegociosTable.js"),["assets/NegociosTable.js","assets/index.js","assets/index15.css","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/useControlled.js","assets/useId.js","assets/NotFoundResults.js","assets/Grid.js","assets/Typography.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/ChipState.js","assets/CheckCircle.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/Error.js","assets/Chip.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/CircularProgress.js","assets/Modal.js","assets/Close2.js","assets/DialogTitle.js","assets/dialogTitleClasses.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Fade.js","assets/Modal2.js","assets/Paper.js","assets/IconButton.js","assets/Warning.js","assets/DialogContent.js","assets/DialogActions.js","assets/LoadingButton.js","assets/Button.js","assets/SelectedCard.js","assets/CustomTable.js","assets/Search.js","assets/Clear.js","assets/TextField.js","assets/useFormControl.js","assets/formControlState.js","assets/react-is.production.min.js","assets/List.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/Box.js","assets/InputAdornment.js","assets/RadioGroup.js","assets/SwitchBase.js","assets/FormGroup.js","assets/FormControlLabel.js","assets/Checkbox.js","assets/SkipNextOutlined.js","assets/Pagination.js","assets/TableRow.js","assets/Loader.js","assets/Stack.js","assets/LinearProgress.js","assets/Visibility.js","assets/NegociosProvider.js","assets/useFetchPagination.js","assets/useAsyncRetry.js","assets/useList.js","assets/usePrevious.js","assets/useHttpService.js","assets/object.helper.js","assets/useFetch.js"])),Ge=({negocio:e,setEditing:r,retry:t})=>{var I;const n=De.concat(Pe),{id:s}=j(),{activeStep:c,form:a,handleBack:i,handleNextStep:d,isLoading:v,res:l,modalState:f,setHide:_,handleSubmit:D,handleReset:B}=re({schema:n,fields:[{names:Object.keys(n.fields)}],url:e?`/admin/negocios/${s}/${e.id_cliente}/edit`:`/admin/clientes/${s}/agregar`,defaultValues:e?b(u({},e),{super_validado:Boolean(Number(e.super_validado)),nombre_negocio:e.nom_negocio,otros:[{detalle:"",costo:""}]}):{cobra_sipe:!0,cobra_itbms:!0,otros:[{detalle:"",costo:""}],provincia:null,distrito:null,corregimiento:null,metodo_pago:"EFECTIVO"}});return o(Fe,{children:g(ve,{children:[!e&&o(Y,{message:"Nuevo negocio"}),o(Le,{}),o(be,{variant:"outlined",sx:{p:1,mt:2,mb:2},children:o(X,b(u({},a),{children:o(ee,{activeStep:c,handleBack:i,sendLabel:"Guardar",sentLabel:"Guardado",finishedAction:e?void 0:B,disabledLast:!0,finishedActionText:e?void 0:"Agregar otro negocio",sentLabelImage:"\xA1Negocio guardado!",steps:["Datos generales"],handleNext:d,errors:Object.keys(a.formState.errors).length,children:[o(m.exports.Fragment,{children:o(we,{})},"Datos-generales")]})}))}),o(xe,{open:v}),o(fe,{state:f,title:"\xA1Atenci\xF3n!",setHide:()=>{r&&l&&l.status===201&&r(!1),_(),t&&l&&l.status===201&&t()},body:l?l&&l.data?l.data.message:(I=l.error)==null?void 0:I.message:"\xBFRealmente desea guardar el negocio?",cancelBotton:{actionFunction:()=>{r&&l&&l.status===201&&r(!1),_(),t&&l&&l.status===201&&t()},text:l?"Cerrar":"Cancelar"},type:l&&l.status===201?"SUCCESS":"ERROR",actionButton:l?void 0:{actionFunction:D,text:"Guardar"}}),!e&&o(m.exports.Suspense,{fallback:o("div",{}),children:o(Ve,{})})]})})};var Fr=Object.freeze(Object.defineProperty({__proto__:null,default:Ge},Symbol.toStringTag,{value:"Module"}));export{z as A,Fr as i};
