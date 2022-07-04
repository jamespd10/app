var B=Object.defineProperty,$=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var I=(e,r,t)=>r in e?B(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))M.call(r,t)&&I(e,t,r[t]);if(N)for(var t of N(r))U.call(r,t)&&I(e,t,r[t]);return e},_=(e,r)=>$(e,H(r));import{r as d,a as o,b as S,j as h,ap as J}from"./index.js";import{u as A,C as K,e as D,c as O,a as g,f as x,g as Q,b as X,F as Y}from"./array.js";import{H as Z}from"./HeaderTitle.js";import ee from"./StepperForm.js";import{u as re}from"./useStepper.js";import{d as oe}from"./Add.js";import{u as L}from"./useModal.js";import{A as q}from"./AutocompleteServer.js";import{d as R,a as k}from"./CheckBoxOutlineBlank.js";import{G as p}from"./Grid.js";import{L as te}from"./ListItem.js";import{C}from"./Checkbox.js";import{T as E}from"./Typography.js";import{I as ie}from"./IconButton.js";import{T}from"./TextInput.js";import{D as F}from"./DecimalInput.js";import{P as ae}from"./PhoneInput.js";import{D as ne}from"./DateInput.js";import{P as V}from"./PatronalInput.js";import{L as se}from"./Loader.js";import{S as G}from"./Stack.js";import{D as P,a as le}from"./DireccionProvider.js";import{t as ce}from"./string.helper.js";import{a as de,r as me,d as y,p as pe,b as ue}from"./regex.js";import"./BootstrapTooltip.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import{B as ge}from"./BackgroundLoader.js";import"./SelectedCard.js";import xe from"./Modal.js";import{N as he}from"./NegociosProvider.js";import{C as fe}from"./Card.js";const j=d.exports.createContext({}),ve=({children:e})=>{const r=L(),t=L();return o(j.Provider,{value:{modalAddTipo:r,modalAddActividad:t},children:e})},be=d.exports.lazy(()=>S(()=>import("./ModalAddTipo.js"),["assets/ModalAddTipo.js","assets/index.js","assets/index6.css","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Typography.js","assets/IconButton.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/CheckCircle.js","assets/DialogContent.js","assets/LoadingButton.js","assets/Button.js","assets/CircularProgress.js","assets/useFetch.js","assets/useHttpService.js","assets/TextInput.js","assets/TextField.js","assets/react-is.production.min.js","assets/Grow.js","assets/List.js","assets/GlobalStyles.js","assets/array.js","assets/upperFirst.js","assets/Alert.js","assets/Close.js","assets/HeaderTitle.js","assets/Divider.js","assets/StepperForm.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/appendOwnerState.js","assets/Grid.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/SelectedCard.js","assets/Box.js","assets/useStepper.js","assets/Add.js","assets/AutocompleteServer.js","assets/Autocomplete.js","assets/Chip.js","assets/CheckBoxOutlineBlank.js","assets/ListItem.js","assets/Checkbox.js","assets/DecimalInput.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/PhoneInput.js","assets/DateInput.js","assets/DatePicker.js","assets/MobileDatePicker.js","assets/MonthPicker.js","assets/PureDateInput.js","assets/CalendarPicker.js","assets/InputAdornment.js","assets/index11.js","assets/PatronalInput.js","assets/CustomSipe.js","assets/Loader.js","assets/Stack.js","assets/DireccionProvider.js","assets/BackgroundLoader.js","assets/NegociosProvider.js","assets/useFetchPagination.js","assets/useAsyncRetry.js","assets/useAsync.js","assets/useList.js","assets/usePrevious.js","assets/Card.js"])),_e=()=>{const{modalAddTipo:e}=d.exports.useContext(j),{setOpen:r}=e,{control:t,formState:l,watch:m}=A(),{errors:s}=l,i=m("tipos");return h(p,{item:!0,sm:6,md:4,children:[o(d.exports.Suspense,{fallback:o("div",{}),children:o(be,{})}),h("div",{style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"center",justifyContent:"space-between"},children:[o(K,{control:t,name:"tipos",render:({field:a})=>{var c,v,n;return o(q,_(u({},a),{ref:null,urlFetch:"/admin/negocios/tipos",enableFirst:!0,disableHight:!0,onChange:(f,b)=>a.onChange(b),multiple:!0,getOptionDisabled:f=>!!(Array.isArray(i)&&i.length===1&&!i.includes(f)),inputProps:{label:"Tipos del negocio",helperText:(c=s==null?void 0:s.tipos)==null?void 0:c.message,error:!!((n=(v=l.errors)==null?void 0:v.tipos)!=null&&n.message)},fullWidth:!0,isOptionEqualToValue:(f,b)=>f.id===b.id,getOptionLabel:f=>f.tipo,renderOption:(f,b,{selected:w})=>h(te,_(u({},f),{style:{textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[o(C,{icon:o(R,{}),checkedIcon:o(k,{}),style:{marginRight:8},checked:w}),o("div",{style:{display:"flex",flexDirection:"column",textTransform:"uppercase"},children:o(E,{variant:"body1",children:o("strong",{children:b.tipo})})})]}))}))}}),o("div",{children:o(ie,{size:"small",onClick:()=>r(),children:o(oe,{})})})]})]})},Fe=()=>{var l;const{register:e,formState:r}=A(),{errors:t}=r;return o(p,{item:!0,xs:12,children:o(T,u({label:"Actividad",fullWidth:!0,error:!!t.actividad,helperText:(l=t.actividad)==null?void 0:l.message},e("actividad")))})},ye=()=>{var t,l,m,s,i,a;const{formState:e}=A(),{errors:r}=e;return h(G,{spacing:1,direction:"column",style:{marginTop:7,border:"2px solid black",borderRadius:5,padding:10},children:[o(E,{variant:"h5",children:"Honorarios"}),h(G,{spacing:1,direction:{xs:"column",lg:"row"},children:[o(F,{name:"serv_conta",label:"Servicio de contabilidad",fullWidth:!0,error:!!r.serv_conta,helperText:(t=r.serv_conta)==null?void 0:t.message}),o(F,{name:"formulario_compra",label:"Formulario de Compra",fullWidth:!0,error:!!r.serv_conta,helperText:(l=r.serv_conta)==null?void 0:l.message}),o(F,{name:"formulario_venta",label:"Formulario de Venta",fullWidth:!0,error:!!r.serv_conta,helperText:(m=r.serv_conta)==null?void 0:m.message}),o(F,{name:"cargo_al",label:"Cargo A.L.",fullWidth:!0,error:!!r.cargo_al,helperText:(s=r.cargo_al)==null?void 0:s.message}),o(F,{name:"formulario_03",label:"Formulario 03",fullWidth:!0,error:!!r.formulario_03,helperText:(i=r.formulario_03)==null?void 0:i.message}),o(F,{name:"form_reten_itbms",label:"Formulario retenci\xF3n ITBMS",fullWidth:!0,error:!!r.form_reten_itbms,helperText:(a=r.form_reten_itbms)==null?void 0:a.message})]})]})},Ee=()=>{const{control:e,setValue:r}=A(),t=D({control:e,name:"provincia"}),{provincia:l,setProvincia:m}=d.exports.useContext(P);return d.exports.useEffect(()=>{t&&m({id:0,provincia:t})},[]),o(p,{item:!0,xs:12,sm:6,md:4,children:o(q,{ref:null,inputProps:{label:"Provincia"},disableStyle:!0,enableFirst:!0,value:l,onChange:(s,i)=>{m(i),i?r("provincia",i.provincia):r("provincia","")},isOptionEqualToValue:(s,i)=>s.id===i.id,urlFetch:"/provincias",getOptionLabel:s=>s.provincia,renderOption:(s,i,{selected:a})=>d.exports.createElement("li",_(u({},s),{key:i.id,style:{textOverflow:"ellipsis",whiteSpace:"nowrap"}}),o(C,{icon:o(R,{}),checkedIcon:o(k,{}),checked:a,size:"small"}),o("div",{style:{display:"flex",flexDirection:"column",textTransform:"uppercase"},children:o(E,{variant:"body1",fontWeight:"bold",children:i.provincia})}))})})},Ae=()=>{const{control:e,setValue:r}=A(),t=D({control:e,name:"distrito"}),{provincia:l,distrito:m,setDistrito:s}=d.exports.useContext(P);return d.exports.useEffect(()=>{t&&s({id:0,distrito:t,id_provincia:0,provincia:""})},[]),o(p,{item:!0,xs:12,sm:6,md:4,children:o(q,{ref:null,inputProps:{label:"Distrito"},disableStyle:!0,params:{id_provincia:l?l.id:""},value:m,enableFirst:!0,onChange:(i,a)=>{s(a),a?r("distrito",a.distrito):r("distrito","")},isOptionEqualToValue:(i,a)=>i.id===a.id,urlFetch:"/distritos",getOptionLabel:i=>i.distrito,renderOption:(i,a,{selected:c})=>d.exports.createElement("li",_(u({},i),{key:a.id,style:{textOverflow:"ellipsis",whiteSpace:"nowrap"}}),o(C,{icon:o(R,{}),checkedIcon:o(k,{}),checked:c,size:"small"}),h("div",{style:{display:"flex",flexDirection:"column",textTransform:"uppercase",padding:0,margin:0},children:[o(E,{variant:"body1",fontWeight:"bold",p:0,m:0,children:a.distrito}),o(E,{variant:"caption",p:0,m:0,children:a.provincia})]}))})})},Te=()=>{const{control:e,setValue:r}=A(),t=D({control:e,name:"corregimiento"}),l=d.exports.useContext(P),{distrito:m,corregimiento:s,setCorregimiento:i}=l;return d.exports.useEffect(()=>{t&&i({id:0,corregimiento:t,id_distrito:0,distrito:"",provincia:""})},[]),o(p,{item:!0,xs:12,sm:6,md:4,children:o(q,{ref:null,inputProps:{label:"Corregimiento"},disableStyle:!0,params:{id_distrito:m?m.id:""},value:s,enableFirst:!0,onChange:(a,c)=>{i(c),c?r("corregimiento",c.corregimiento):r("corregimiento","")},isOptionEqualToValue:(a,c)=>a.id===c.id,urlFetch:"/corregimientos",getOptionLabel:a=>a.corregimiento,renderOption:(a,c,{selected:v})=>d.exports.createElement("li",_(u({},a),{key:c.id,style:{textOverflow:"ellipsis",whiteSpace:"nowrap"}}),o(C,{icon:o(R,{}),checkedIcon:o(k,{}),checked:v,size:"small"}),h("div",{style:{display:"flex",flexDirection:"column",textTransform:"uppercase",padding:0,margin:0},children:[o(E,{variant:"body1",fontWeight:"bold",p:0,m:0,children:c.corregimiento}),h(E,{variant:"caption",p:0,m:0,children:[c.distrito," - ",c.provincia]})]}))})})},Se=d.exports.lazy(()=>S(()=>import("./FormOtrosDatos.js"),["assets/FormOtrosDatos.js","assets/constantsLists.js","assets/SelectHookForm.js","assets/array.js","assets/index.js","assets/index6.css","assets/upperFirst.js","assets/Box.js","assets/Typography.js","assets/TextField.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/emotion-react.browser.esm.js","assets/MenuItem.js","assets/ButtonBase.js","assets/useIsFocusVisible.js","assets/listItemIconClasses.js","assets/Divider.js","assets/listItemTextClasses.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/useAsync.js","assets/useHttpService.js","assets/Grid.js","assets/string.helper.js","assets/regex.js","assets/TextInput.js"])),qe=d.exports.lazy(()=>S(()=>import("./SuperValidado.js"),["assets/SuperValidado.js","assets/array.js","assets/index.js","assets/index6.css","assets/upperFirst.js","assets/Grid.js","assets/Typography.js","assets/FormControlLabel.js","assets/TextField.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/emotion-react.browser.esm.js","assets/Checkbox.js","assets/ButtonBase.js","assets/useIsFocusVisible.js"])),Re=()=>{var t,l,m,s,i,a,c,v,n;const{register:e,formState:{errors:r}}=A();return h(le,{children:[h(p,{container:!0,spacing:1,direction:"row",wrap:"wrap",sx:{"& > :not(style)":{flexGrow:1}},children:[o(_e,{}),o(p,{item:!0,sm:6,md:4,children:o(T,u({label:"Nombre del negocio",fullWidth:!0,error:!!r.nombre_negocio,helperText:(t=r.nombre_negocio)==null?void 0:t.message,required:!0},e("nombre_negocio")))}),o(p,{item:!0,sm:6,md:4,children:o(T,u({label:"Aviso de operaci\xF3n",fullWidth:!0,error:!!r.aviso_operacion,helperText:(l=r.aviso_operacion)==null?void 0:l.message,required:!0},e("aviso_operacion")))}),o(p,{item:!0,sm:6,md:4,children:o(ne,{label:"Fecha de aviso de operaci\xF3n",name:"fecha_a_operacion",error:!!r.fecha_a_operacion,helperText:(m=r.fecha_a_operacion)==null?void 0:m.message,required:!0})}),o(p,{item:!0,sm:6,md:4,children:o(T,u({label:"No. contribuyente",fullWidth:!0,error:!!r.no_contribuyente,helperText:(s=r.no_contribuyente)==null?void 0:s.message,required:!0},e("no_contribuyente")))}),o(p,{item:!0,sm:6,md:4,children:o(F,{name:"capital",label:"Capital",fullWidth:!0,error:!!r.capital,helperText:(i=r.capital)==null?void 0:i.message,required:!0})}),o(p,{item:!0,sm:6,md:4,children:o(T,u({label:"N\xFAmero de empleados",fullWidth:!0,error:!!r.n_empleados,helperText:r.n_empleados?(a=r.n_empleados)==null?void 0:a.message:"N\xFAmero entero positivo \xF3 puede ser 0"},e("n_empleados")))}),o(p,{item:!0,sm:6,md:4,children:o(V,u({label:"N\xFAmero patronal SIPE",fullWidth:!0,sipe:!0,error:!!r.patronal_sipe,helperText:(c=r.patronal_sipe)==null?void 0:c.message},e("patronal_sipe")))}),o(p,{item:!0,sm:6,md:4,children:o(V,u({label:"N\xFAmero patronal",fullWidth:!0,error:!!r.n_patronal,helperText:(v=r.n_patronal)==null?void 0:v.message,required:!0},e("n_patronal")))}),o(p,{item:!0,sm:6,md:4,children:o(ae,{name:"telefono",label:"Tel\xE9fono",fullWidth:!0,error:!!r.telefono,helperText:r.telefono&&r.telefono.message?r.telefono.message:"Ejm: 6666-6666 \xF3 222-2222",required:!0})}),o(Ee,{}),o(Ae,{}),o(Te,{}),o(p,{item:!0,xs:"auto",children:o(T,u({label:"Direcci\xF3n",fullWidth:!0,error:!!r.direccion,helperText:(n=r.direccion)==null?void 0:n.message,required:!0,inputProps:{maxLength:255}},e("direccion")))})]}),o(p,{container:!0,spacing:1,direction:"row",wrap:"wrap",sx:{"& > :not(style)":{flexGrow:1},paddingTop:1},children:o(Fe,{})}),o(p,{container:!0,spacing:1,direction:"row",wrap:"wrap",sx:{"& > :not(style)":{flexGrow:1},paddingTop:1},children:o(d.exports.Suspense,{fallback:o(se,{}),children:o(Se,{})})}),o(ye,{}),o(qe,{})]})},ke=O().shape({nombre_negocio:g().trim().required("Favor de ingresar el nombre del negocio").max(100,"Favor ingresar m\xE1ximo 100 caracteres"),negocio_referencia:g().trim().notRequired().nullable().max(255,"Favor ingresar m\xE1ximo 255 caracteres"),aviso_operacion:g().typeError("Favor de ingresar el aviso de operaci\xF3n").trim().max(50,"Favor de ingresar m\xE1ximo 50 caracteres").test("check-a-op","Favor ingresar solo n\xFAmeros, letras y/o guiones",e=>!!(!e||e&&e.match(de))).nullable().notRequired(),fecha_a_operacion:g().trim().typeError("Favor de seleccionar la fecha de aviso de operaci\xF3n").nullable().notRequired().default(null),no_contribuyente:g().typeError("Favor de ingresar el No. contribuyente").trim().nullable().max(255,"Favor ingresar m\xE1ximo 255 caracteres").test("check-no_c","Favor ingresar solo n\xFAmeros y/o guion(-)",e=>!!(!e||e&&e.match(me))),capital:x().transform((e,r)=>r===""?0:e).typeError("Favor de ingresar un n\xFAmero").nullable().notRequired().test("check-decimal","Favor ingresar m\xE1ximo dos decimales",e=>!!(!e||e&&e.toString().match(y))),n_empleados:x().transform((e,r)=>r===""?0:e).typeError("Favor de ingresar el n\xFAmero de empleados \xF3 0").integer("Favor de ingresar un n\xFAmero entero").default(0).nullable(!0),patronal_sipe:g().typeError("Favor ingresar el n\xFAmero patronal").trim().test("check","Favor usar el siguiente formato: ##-###-#####",e=>!!(!e||e&&e.match(pe))).nullable(!0),n_patronal:g().typeError("Favor ingresar el n\xFAmero patronal").trim().matches(ue,"Favor usar el siguiente formato: ##-###-####").nullable().notRequired(),telefono:g().typeError("Favor ingresar el tel\xE9fono").trim().nullable().notRequired().test("check-phoneNumber","Favor ingresar un n\xFAmero de tel\xE9fono v\xE1lido",e=>!!(!e||e&&ce)),provincia:g().trim().max(50,"Favor ingresar m\xE1ximo 50 caracteres").nullable().notRequired(),distrito:g().trim().nullable().notRequired().max(50,"Favor ingresar m\xE1ximo 50 caracteres"),corregimiento:g().trim().max(50,"Favor ingresar m\xE1ximo 50 caracteres").nullable().notRequired(),direccion:g().trim().max(255,"Favor ingresar m\xE1ximo 255 caracteres").required("Favor de ingresar la direcci\xF3n del negocio").nullable().notRequired(),tipos:Q().of(O().shape({id:x().typeError("Favor seleccionar el tipo").transform((e,r)=>r===""?0:e).nullable().notRequired(),tipo:g().trim().required("Favor seleccionar el tipo")})).typeError("Favor seleccionar el tipo").nullable().notRequired(),actividad:g().trim().typeError("Favor ingresar la actividad").nullable(!0).notRequired(),super_validado:X().typeError("Favor seleccionar un valor boleano").nullable().notRequired()}),Ce=O().shape({ruta:x().typeError("Favor de seleccionar la ruta").integer("Favor de ingresar un n\xFAmero entero").positive("Favor de ingresar un n\xFAmero positivo").required("Favor de ingresar la ruta"),itbms_asignado_a:x().transform((e,r)=>r===""?0:e).typeError("Favor de seleccionar el usuario asignado").nullable().notRequired(),ss_asignado_a:x().transform((e,r)=>r===""?0:e).typeError("Favor de seleccionar el usuario asignado").nullable().notRequired(),serv_conta:x().transform((e,r)=>r===""?0:e).typeError("Favor de ingresar un n\xFAmero").nullable().notRequired().test("check-decimal","Favor ingresar m\xE1ximo dos decimales",e=>!!(!e||e&&e.toString().match(y))),formulario_compra:x().transform((e,r)=>r===""?0:e).typeError("Favor de ingresar un n\xFAmero").nullable().notRequired().test("check-decimal","Favor ingresar m\xE1ximo dos decimales",e=>!!(!e||e&&e.toString().match(y))),formulario_venta:x().transform((e,r)=>r===""?0:e).typeError("Favor de ingresar un n\xFAmero").nullable().notRequired().test("check-decimal","Favor ingresar m\xE1ximo dos decimales",e=>!!(!e||e&&e.toString().match(y))),cargo_al:x().transform((e,r)=>r===""?0:e).typeError("Favor de ingresar un n\xFAmero").nullable().notRequired().test("check-decimal","Favor ingresar m\xE1ximo dos decimales",e=>!!(!e||e&&e.toString().match(y))),formulario_03:x().transform((e,r)=>r===""?0:e).typeError("Favor de ingresar un n\xFAmero").nullable().notRequired().test("check-decimal","Favor ingresar m\xE1ximo dos decimales",e=>!!(!e||e&&e.toString().match(y))),form_reten_itbms:x().transform((e,r)=>r===""?0:e).typeError("Favor de ingresar un n\xFAmero").nullable().notRequired().test("check-decimal","Favor ingresar m\xE1ximo dos decimales",e=>!!(!e||e&&e.toString().match(y))),recorrido:x().transform((e,r)=>r===""?0:e).typeError("Favor de ingresar un n\xFAmero").integer("Favor de ingresar un n\xFAmero entero").nullable().notRequired(),tipo_pagos:g().trim().nullable().notRequired()}),we=d.exports.lazy(()=>S(()=>import("./NegociosTable.js"),["assets/NegociosTable.js","assets/index.js","assets/index6.css","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/appendOwnerState.js","assets/isHostComponent.js","assets/Grow.js","assets/NotFoundResults.js","assets/Grid.js","assets/Typography.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/ChipState.js","assets/CheckCircle.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/Chip.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/CircularProgress.js","assets/Modal.js","assets/Close2.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/Paper.js","assets/IconButton.js","assets/DialogContent.js","assets/LoadingButton.js","assets/Button.js","assets/SelectedCard.js","assets/CustomTable.js","assets/Search.js","assets/Clear.js","assets/TextField.js","assets/react-is.production.min.js","assets/List.js","assets/GlobalStyles.js","assets/Box.js","assets/InputAdornment.js","assets/FormGroup.js","assets/FormControlLabel.js","assets/Checkbox.js","assets/SkipNextOutlined.js","assets/Pagination.js","assets/TableRow.js","assets/Loader.js","assets/Stack.js","assets/LinearProgress.js","assets/Visibility.js","assets/NegociosProvider.js","assets/useFetchPagination.js","assets/useAsyncRetry.js","assets/useAsync.js","assets/useList.js","assets/usePrevious.js","assets/useHttpService.js","assets/useFetch.js"])),Oe=({negocio:e,setEditing:r,retry:t})=>{var W;const l=ke.concat(Ce),{id:m}=J(),{activeStep:s,form:i,handleBack:a,handleNextStep:c,isLoading:v,res:n,modalState:f,setHide:b,handleSubmit:w,handleReset:z}=re({schema:l,fields:[{names:Object.keys(l.fields)}],url:e?`/admin/negocios/${m}/${e.id_cliente}/edit`:`/admin/clientes/${m}/agregar`,defaultValues:e?_(u({},e),{super_validado:Boolean(Number(e.super_validado)),nombre_negocio:e.nom_negocio,otros:[{detalle:"",costo:""}]}):{cobra_sipe:!0,cobra_itbms:!0,otros:[{detalle:"",costo:""}],provincia:null,distrito:null,corregimiento:null}});return o(ve,{children:h(he,{children:[!e&&o(Z,{message:"Nuevo negocio"}),o(fe,{variant:"outlined",sx:{p:1,mt:2,mb:2},children:o(Y,_(u({},i),{children:o(ee,{activeStep:s,handleBack:a,sendLabel:"Guardar",sentLabel:"Guardado",finishedAction:e?void 0:z,disabledLast:!0,finishedActionText:e?void 0:"Agregar otro negocio",sentLabelImage:"\xA1Negocio guardado!",steps:["Datos generales"],handleNext:c,errors:Object.keys(i.formState.errors).length,children:[o(d.exports.Fragment,{children:o(Re,{})},"Datos-generales")]})}))}),o(ge,{open:v}),o(xe,{state:f,title:"\xA1Atenci\xF3n!",setHide:()=>{r&&n&&n.status===201&&r(!1),b(),t&&n&&n.status===201&&t()},body:n?n&&n.data?n.data.message:(W=n.error)==null?void 0:W.message:"\xBFRealmente desea guardar el negocio?",cancelBotton:{actionFunction:()=>{r&&n&&n.status===201&&r(!1),b(),t&&n&&n.status===201&&t()},text:n?"Cerrar":"Cancelar"},type:n&&n.status===201?"SUCCESS":"ERROR",actionButton:n?void 0:{actionFunction:w,text:"Guardar"}}),!e&&o(d.exports.Suspense,{fallback:o("div",{}),children:o(we,{})})]})})};var pr=Object.freeze(Object.defineProperty({__proto__:null,default:Oe},Symbol.toStringTag,{value:"Module"}));export{j as A,pr as i};
