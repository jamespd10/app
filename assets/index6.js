var U=Object.defineProperty,J=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var P=(e,r,t)=>r in e?U(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))Q.call(r,t)&&P(e,t,r[t]);if(O)for(var t of O(r))X.call(r,t)&&P(e,t,r[t]);return e},_=(e,r)=>J(e,K(r));import{r as x,a as o,q as T,j as f,F as Y,ac as Z}from"./index.js";import{u as S,C as j,c as R,a as l,b as g,d as I,e as ee,F as re}from"./array.js";import{H as oe}from"./HeaderTitle.js";import te from"./StepperForm.js";import{u as ae}from"./useStepper.js";import{u as ie,S as C}from"./useSelectProvincias.js";import{d as G}from"./Add.js";import{u as N}from"./useModal.js";import"./jwt-decode.esm.js";import{A as V}from"./AutocompleteServer.js";import{d as $,a as B}from"./CheckBoxOutlineBlank.js";import{G as i}from"./Grid.js";import{L as H}from"./ListItem.js";import{C as M}from"./Checkbox.js";import{T as k}from"./Typography.js";import{I as z}from"./IconButton.js";import{T as A}from"./TextInput.js";import{D as b}from"./DecimalInput.js";import{P as ne}from"./PhoneInput.js";import{D as se}from"./DateInput.js";import{P as W}from"./PatronalInput.js";import{L as le}from"./Loader.js";import{S as L}from"./Stack.js";import{t as de}from"./string.helper.js";import{a as ce,r as me,d as y,p as pe,b as ue}from"./regex.js";import"./BootstrapTooltip.js";import"./ContentProvider.js";import{B as ge}from"./BackgroundLoader.js";import"./platform.js";import{M as he}from"./Modal2.js";import{N as xe}from"./NegociosProvider.js";import{C as fe}from"./Card.js";const w=x.exports.createContext({}),ve=({children:e})=>{const r=N(),t=N();return o(w.Provider,{value:{modalAddTipo:r,modalAddActividad:t},children:e})},Fe=x.exports.lazy(()=>T(()=>import("./ModalAddTipo.js"),["assets/ModalAddTipo.js","assets/index.js","assets/index.css","assets/Modal2.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/Typography.js","assets/extendSxProp.js","assets/IconButton.js","assets/ButtonBase.js","assets/Error.js","assets/Backdrop.js","assets/Modal.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Button.js","assets/useFetch.js","assets/jwt-decode.esm.js","assets/useHttpService.js","assets/constants.js","assets/TextInput.js","assets/TextField.js","assets/react-is.production.min.js","assets/Menu.js","assets/Grow.js","assets/List.js","assets/GlobalStyles.js","assets/array.js","assets/upperFirst.js","assets/Alert.js","assets/Close.js","assets/HeaderTitle.js","assets/Divider.js","assets/StepperForm.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Grid.js","assets/ContentProvider.js","assets/useModal.js","assets/platform.js","assets/useMediaQuery.js","assets/Box.js","assets/useStepper.js","assets/useSelectProvincias.js","assets/MenuItem.js","assets/listItemIconClasses.js","assets/listItemTextClasses.js","assets/string.helper.js","assets/regex.js","assets/nacionalidades.js","assets/Add.js","assets/AutocompleteServer.js","assets/Autocomplete.js","assets/Chip.js","assets/CheckBoxOutlineBlank.js","assets/ListItem.js","assets/listItemButtonClasses.js","assets/Checkbox.js","assets/DecimalInput.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/PhoneInput.js","assets/DateInput.js","assets/MobileDatePicker.js","assets/MonthPicker.js","assets/usePickerState.js","assets/InputAdornment.js","assets/index7.js","assets/PatronalInput.js","assets/CustomSipe.js","assets/Loader.js","assets/Stack.js","assets/BackgroundLoader.js","assets/NegociosProvider.js","assets/useFetchPagination.js","assets/useAsyncRetry.js","assets/tslib.js","assets/useList.js","assets/usePrevious.js","assets/object.helper.js","assets/Card.js"])),_e=()=>{const{modalAddTipo:e}=x.exports.useContext(w),{setOpen:r}=e,{control:t,formState:d,watch:c}=S(),{errors:m}=d,n=c("tipos");return f(i,{item:!0,xs:12,children:[o(x.exports.Suspense,{fallback:o("div",{}),children:o(Fe,{})}),f("div",{style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"center",justifyContent:"space-between"},children:[o(j,{control:t,name:"tipos",render:({field:h})=>{var F,p,a;return o(V,_(u({},h),{urlFetch:"/admin/negocios/tipos",enableFirst:!0,disableHight:!0,onChange:(s,v)=>h.onChange(v),multiple:!0,getOptionDisabled:s=>!!(Array.isArray(n)&&n.length===1&&!n.includes(s)),inputProps:{label:"Tipos del negocio",helperText:(F=m==null?void 0:m.tipos)==null?void 0:F.message,error:!!((a=(p=d.errors)==null?void 0:p.tipos)!=null&&a.message)},fullWidth:!0,isOptionEqualToValue:(s,v)=>s.id===v.id,getOptionLabel:s=>s.tipo,renderOption:(s,v,{selected:E})=>f(H,_(u({},s),{style:{textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[o(M,{icon:o($,{}),checkedIcon:o(B,{}),style:{marginRight:8},checked:E}),o("div",{style:{display:"flex",flexDirection:"column",textTransform:"uppercase"},children:o(k,{variant:"body1",children:o("strong",{children:v.tipo})})})]}))}))}}),o("div",{style:{width:"50px"},children:o(z,{onClick:()=>r(),children:o(G,{})})})]})]})},be=x.exports.lazy(()=>T(()=>import("./ModalAddActividad.js"),["assets/ModalAddActividad.js","assets/index.js","assets/index.css","assets/Modal2.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/Typography.js","assets/extendSxProp.js","assets/IconButton.js","assets/ButtonBase.js","assets/Error.js","assets/Backdrop.js","assets/Modal.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Button.js","assets/TextInput.js","assets/TextField.js","assets/react-is.production.min.js","assets/Menu.js","assets/Grow.js","assets/List.js","assets/GlobalStyles.js","assets/array.js","assets/upperFirst.js","assets/useFetch.js","assets/jwt-decode.esm.js","assets/useHttpService.js","assets/constants.js","assets/Alert.js","assets/Close.js","assets/HeaderTitle.js","assets/Divider.js","assets/StepperForm.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Grid.js","assets/ContentProvider.js","assets/useModal.js","assets/platform.js","assets/useMediaQuery.js","assets/Box.js","assets/useStepper.js","assets/useSelectProvincias.js","assets/MenuItem.js","assets/listItemIconClasses.js","assets/listItemTextClasses.js","assets/string.helper.js","assets/regex.js","assets/nacionalidades.js","assets/Add.js","assets/AutocompleteServer.js","assets/Autocomplete.js","assets/Chip.js","assets/CheckBoxOutlineBlank.js","assets/ListItem.js","assets/listItemButtonClasses.js","assets/Checkbox.js","assets/DecimalInput.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/PhoneInput.js","assets/DateInput.js","assets/MobileDatePicker.js","assets/MonthPicker.js","assets/usePickerState.js","assets/InputAdornment.js","assets/index7.js","assets/PatronalInput.js","assets/CustomSipe.js","assets/Loader.js","assets/Stack.js","assets/BackgroundLoader.js","assets/NegociosProvider.js","assets/useFetchPagination.js","assets/useAsyncRetry.js","assets/tslib.js","assets/useList.js","assets/usePrevious.js","assets/object.helper.js","assets/Card.js"])),ye=()=>{const{modalAddActividad:e}=x.exports.useContext(w),{setOpen:r}=e,{control:t,formState:d}=S(),{errors:c}=d;return f(i,{item:!0,xs:12,children:[o(x.exports.Suspense,{fallback:o("div",{}),children:o(be,{})}),f("div",{style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"center",justifyContent:"space-between"},children:[o(j,{control:t,name:"actividades",render:({field:m})=>{var n,h,F;return o(V,_(u({},m),{urlFetch:"/admin/negocios/actividades",enableFirst:!0,disableHight:!0,multiple:!0,onChange:(p,a)=>m.onChange(a),inputProps:{label:"Actividades del negocio",helperText:(n=c==null?void 0:c.tipos)==null?void 0:n.message,error:!!((F=(h=d.errors)==null?void 0:h.tipos)!=null&&F.message)},fullWidth:!0,isOptionEqualToValue:(p,a)=>p.id===a.id,getOptionLabel:p=>p.actividad,renderOption:(p,a,{selected:s})=>f(H,_(u({},p),{style:{textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[o(M,{icon:o($,{}),checkedIcon:o(B,{}),style:{marginRight:8},checked:s}),o("div",{style:{display:"flex",flexDirection:"column",textTransform:"uppercase"},children:o(k,{variant:"body1",children:o("strong",{children:a.actividad})})})]}))}))}}),o("div",{style:{width:"50px"},children:o(z,{onClick:()=>r(),children:o(G,{})})})]})]})},Ee=()=>{var t,d,c,m,n,h;const{formState:e}=S(),{errors:r}=e;return f(L,{spacing:1,direction:"column",style:{marginTop:7,border:"2px solid black",borderRadius:5,padding:10},children:[o(k,{variant:"h5",children:"Honorarios"}),f(L,{spacing:1,direction:{xs:"column",lg:"row"},children:[o(b,{name:"serv_conta",label:"Servicio de contabilidad",fullWidth:!0,error:!!r.serv_conta,helperText:(t=r.serv_conta)==null?void 0:t.message}),o(b,{name:"formulario_compra",label:"Formulario de Compra",fullWidth:!0,error:!!r.serv_conta,helperText:(d=r.serv_conta)==null?void 0:d.message}),o(b,{name:"formulario_venta",label:"Formulario de Venta",fullWidth:!0,error:!!r.serv_conta,helperText:(c=r.serv_conta)==null?void 0:c.message}),o(b,{name:"cargo_al",label:"Cargo A.L.",fullWidth:!0,error:!!r.cargo_al,helperText:(m=r.cargo_al)==null?void 0:m.message}),o(b,{name:"formulario_03",label:"Formulario 03",fullWidth:!0,error:!!r.formulario_03,helperText:(n=r.formulario_03)==null?void 0:n.message}),o(b,{name:"form_reten_itbms",label:"Formulario retenci\xF3n ITBMS",fullWidth:!0,error:!!r.form_reten_itbms,helperText:(h=r.form_reten_itbms)==null?void 0:h.message})]})]})},Ae=x.exports.lazy(()=>T(()=>import("./FormOtrosDatos.js"),["assets/FormOtrosDatos.js","assets/constantsLists.js","assets/nacionalidades.js","assets/SelectHookForm.js","assets/array.js","assets/index.js","assets/index.css","assets/upperFirst.js","assets/Box.js","assets/extendSxProp.js","assets/TextField.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Menu.js","assets/Modal.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/MenuItem.js","assets/ButtonBase.js","assets/useIsFocusVisible.js","assets/listItemIconClasses.js","assets/Divider.js","assets/listItemTextClasses.js","assets/jwt-decode.esm.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/tslib.js","assets/useHttpService.js","assets/constants.js","assets/Grid.js","assets/string.helper.js","assets/regex.js","assets/TextInput.js"])),Te=x.exports.lazy(()=>T(()=>import("./SuperValidado.js"),["assets/SuperValidado.js","assets/array.js","assets/index.js","assets/index.css","assets/upperFirst.js","assets/Grid.js","assets/extendSxProp.js","assets/FormControlLabel.js","assets/TextField.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Menu.js","assets/Modal.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/Typography.js","assets/Checkbox.js","assets/ButtonBase.js","assets/useIsFocusVisible.js"])),qe=()=>{var d,c,m,n,h,F,p,a,s,v,E,q;const{register:e,formState:{errors:r}}=S(),t=ie();return f(Y,{children:[f(i,{container:!0,spacing:1,direction:"row",wrap:"wrap",sx:{"& > :not(style)":{flexGrow:1}},children:[o(i,{item:!0,sm:6,md:4,children:o(A,u({label:"Nombre del negocio",fullWidth:!0,error:!!r.nombre_negocio,helperText:(d=r.nombre_negocio)==null?void 0:d.message,required:!0},e("nombre_negocio")))}),o(i,{item:!0,sm:6,md:4,children:o(A,u({label:"Aviso de operaci\xF3n",fullWidth:!0,error:!!r.aviso_operacion,helperText:(c=r.aviso_operacion)==null?void 0:c.message,required:!0},e("aviso_operacion")))}),o(i,{item:!0,sm:6,md:4,children:o(se,{label:"Fecha de aviso de operaci\xF3n",name:"fecha_a_operacion",error:!!r.fecha_a_operacion,helperText:(m=r.fecha_a_operacion)==null?void 0:m.message,required:!0})}),o(i,{item:!0,sm:6,md:4,children:o(A,u({label:"No. contribuyente",fullWidth:!0,error:!!r.no_contribuyente,helperText:(n=r.no_contribuyente)==null?void 0:n.message,required:!0},e("no_contribuyente")))}),o(i,{item:!0,sm:6,md:4,children:o(b,{name:"capital",label:"Capital",fullWidth:!0,error:!!r.capital,helperText:(h=r.capital)==null?void 0:h.message,required:!0})}),o(i,{item:!0,sm:6,md:4,children:o(A,u({label:"N\xFAmero de empleados",fullWidth:!0,error:!!r.n_empleados,helperText:r.n_empleados?(F=r.n_empleados)==null?void 0:F.message:"N\xFAmero entero positivo \xF3 puede ser 0"},e("n_empleados")))}),o(i,{item:!0,sm:6,md:4,children:o(W,u({label:"N\xFAmero patronal SIPE",fullWidth:!0,sipe:!0,error:!!r.patronal_sipe,helperText:(p=r.patronal_sipe)==null?void 0:p.message},e("patronal_sipe")))}),o(i,{item:!0,sm:6,md:4,children:o(W,u({label:"N\xFAmero patronal",fullWidth:!0,error:!!r.n_patronal,helperText:(a=r.n_patronal)==null?void 0:a.message,required:!0},e("n_patronal")))}),o(i,{item:!0,sm:6,md:4,children:o(ne,{name:"telefono",label:"Tel\xE9fono",fullWidth:!0,error:!!r.telefono,helperText:r.telefono&&r.telefono.message?r.telefono.message:"Ejm: 6666-6666 \xF3 222-2222",required:!0})}),o(i,{item:!0,xs:12,sm:6,md:4,children:o(C,{label:"Provincia",value:t.provincia,options:t.listProvincias,error:!!r.provincia,helperText:(s=r.provincia)==null?void 0:s.message,register:e("provincia"),onChange:t.handleChangeProvincia,required:!0})}),o(i,{item:!0,xs:12,sm:6,md:4,children:o(C,{label:"Distrito",value:t.distrito,options:t.listDistritos,error:!!r.distrito,helperText:(v=r.distrito)==null?void 0:v.message,register:e("distrito"),onChange:t.handleChangeDistrito,required:!0})}),o(i,{item:!0,xs:12,sm:6,md:4,children:o(C,{label:"Corregimiento",value:t.corregimiento,options:t.listCorregimientos,error:!!r.corregimiento,helperText:(E=r.corregimiento)==null?void 0:E.message,register:e("corregimiento"),onChange:t.handleChangeCorregimiento,required:!0})}),o(i,{item:!0,xs:"auto",children:o(A,u({label:"Direcci\xF3n",fullWidth:!0,error:!!r.direccion,helperText:(q=r.direccion)==null?void 0:q.message,required:!0},e("direccion")))})]}),f(i,{container:!0,spacing:1,direction:"row",wrap:"wrap",sx:{"& > :not(style)":{flexGrow:1},paddingTop:1},children:[o(_e,{}),o(ye,{})]}),o(i,{container:!0,spacing:1,direction:"row",wrap:"wrap",sx:{"& > :not(style)":{flexGrow:1},paddingTop:1},children:o(x.exports.Suspense,{fallback:o(le,{}),children:o(Ae,{})})}),o(Ee,{}),o(Te,{})]})},Re=R().shape({nombre_negocio:l().trim().required("Favor de ingresar el nombre del negocio").max(100,"Favor ingresar m\xE1ximo 100 caracteres"),negocio_referencia:l().trim().notRequired().nullable().max(255,"Favor ingresar m\xE1ximo 255 caracteres"),aviso_operacion:l().typeError("Favor de ingresar el aviso de operaci\xF3n").trim().max(50,"Favor de ingresar m\xE1ximo 50 caracteres").test("check-a-op","Favor ingresar solo n\xFAmeros, letras y/o guiones",e=>!!(!e||e&&e.match(ce))).nullable().notRequired(),fecha_a_operacion:l().trim().typeError("Favor de seleccionar la fecha de aviso de operaci\xF3n").nullable().notRequired().default(null),no_contribuyente:l().typeError("Favor de ingresar el No. contribuyente").trim().nullable().max(255,"Favor ingresar m\xE1ximo 255 caracteres").test("check-no_c","Favor ingresar solo n\xFAmeros y/o guion(-)",e=>!!(!e||e&&e.match(me))),capital:g().transform((e,r)=>r===""?0:e).typeError("Favor de ingresar un n\xFAmero").nullable().notRequired().test("check-decimal","Favor ingresar m\xE1ximo dos decimales",e=>!!(!e||e&&e.toString().match(y))),n_empleados:g().transform((e,r)=>r===""?0:e).typeError("Favor de ingresar el n\xFAmero de empleados \xF3 0").integer("Favor de ingresar un n\xFAmero entero").default(0).nullable(!0),patronal_sipe:l().typeError("Favor ingresar el n\xFAmero patronal").trim().test("check","Favor usar el siguiente formato: ##-###-#####",e=>!!(!e||e&&e.match(pe))).nullable(!0),n_patronal:l().typeError("Favor ingresar el n\xFAmero patronal").trim().matches(ue,"Favor usar el siguiente formato: ##-###-####").nullable().notRequired(),telefono:l().typeError("Favor ingresar el tel\xE9fono").trim().nullable().notRequired().test("check-phoneNumber","Favor ingresar un n\xFAmero de tel\xE9fono v\xE1lido",e=>!!(!e||e&&de)),provincia:l().trim().max(50,"Favor ingresar m\xE1ximo 50 caracteres").nullable().notRequired(),distrito:l().trim().nullable().notRequired().max(50,"Favor ingresar m\xE1ximo 50 caracteres"),corregimiento:l().trim().max(50,"Favor ingresar m\xE1ximo 50 caracteres").nullable().notRequired(),direccion:l().trim().max(255,"Favor ingresar m\xE1ximo 255 caracteres").required("Favor de ingresar la direcci\xF3n del negocio").nullable().notRequired(),tipos:I().of(R().shape({id:g().typeError("Favor seleccionar el tipo").transform((e,r)=>r===""?0:e).nullable().notRequired(),tipo:l().trim().required("Favor seleccionar el tipo")})).typeError("Favor seleccionar el tipo").nullable().notRequired(),actividades:I().of(R().shape({id:g().transform((e,r)=>r===""?0:e).typeError("Favor ingresar el id de la actividad").nullable().notRequired(),actividad:l().trim().required("Favor ingresar la actividad")})).typeError("Favor seleccionar al menos 1 actividad").nullable().notRequired(),super_validado:ee().typeError("Favor seleccionar un valor boleano").nullable().notRequired()}),Se=R().shape({ruta:g().typeError("Favor de seleccionar la ruta").integer("Favor de ingresar un n\xFAmero entero").positive("Favor de ingresar un n\xFAmero positivo").required("Favor de ingresar la ruta"),itbms_asignado_a:g().transform((e,r)=>r===""?0:e).typeError("Favor de seleccionar el usuario asignado").nullable().notRequired(),ss_asignado_a:g().transform((e,r)=>r===""?0:e).typeError("Favor de seleccionar el usuario asignado").nullable().notRequired(),serv_conta:g().transform((e,r)=>r===""?0:e).typeError("Favor de ingresar un n\xFAmero").nullable().notRequired().test("check-decimal","Favor ingresar m\xE1ximo dos decimales",e=>!!(!e||e&&e.toString().match(y))),formulario_compra:g().transform((e,r)=>r===""?0:e).typeError("Favor de ingresar un n\xFAmero").nullable().notRequired().test("check-decimal","Favor ingresar m\xE1ximo dos decimales",e=>!!(!e||e&&e.toString().match(y))),formulario_venta:g().transform((e,r)=>r===""?0:e).typeError("Favor de ingresar un n\xFAmero").nullable().notRequired().test("check-decimal","Favor ingresar m\xE1ximo dos decimales",e=>!!(!e||e&&e.toString().match(y))),cargo_al:g().transform((e,r)=>r===""?0:e).typeError("Favor de ingresar un n\xFAmero").nullable().notRequired().test("check-decimal","Favor ingresar m\xE1ximo dos decimales",e=>!!(!e||e&&e.toString().match(y))),formulario_03:g().transform((e,r)=>r===""?0:e).typeError("Favor de ingresar un n\xFAmero").nullable().notRequired().test("check-decimal","Favor ingresar m\xE1ximo dos decimales",e=>!!(!e||e&&e.toString().match(y))),form_reten_itbms:g().transform((e,r)=>r===""?0:e).typeError("Favor de ingresar un n\xFAmero").nullable().notRequired().test("check-decimal","Favor ingresar m\xE1ximo dos decimales",e=>!!(!e||e&&e.toString().match(y))),recorrido:g().transform((e,r)=>r===""?0:e).typeError("Favor de ingresar un n\xFAmero").integer("Favor de ingresar un n\xFAmero entero").nullable().notRequired(),tipo_pagos:l().trim().nullable().notRequired()}),Ce=x.exports.lazy(()=>T(()=>import("./NegociosTable.js"),["assets/NegociosTable.js","assets/index.js","assets/index.css","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/jwt-decode.esm.js","assets/NotFoundResults.js","assets/Grid.js","assets/extendSxProp.js","assets/Typography.js","assets/ContentProvider.js","assets/useModal.js","assets/ChipState.js","assets/Error.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/Chip.js","assets/ButtonBase.js","assets/Modal2.js","assets/Close2.js","assets/IconButton.js","assets/Backdrop.js","assets/Modal.js","assets/Paper.js","assets/Button.js","assets/platform.js","assets/CustomTable.js","assets/Search.js","assets/Clear.js","assets/TextField.js","assets/react-is.production.min.js","assets/Menu.js","assets/List.js","assets/GlobalStyles.js","assets/Box.js","assets/InputAdornment.js","assets/FormGroup.js","assets/FormControlLabel.js","assets/Checkbox.js","assets/SkipNextOutlined.js","assets/Pagination.js","assets/tslib.js","assets/Loader.js","assets/Stack.js","assets/Visibility.js","assets/NegociosProvider.js","assets/useFetchPagination.js","assets/useAsyncRetry.js","assets/useList.js","assets/usePrevious.js","assets/useHttpService.js","assets/constants.js","assets/object.helper.js","assets/useFetch.js"])),ke=({negocio:e,setEditing:r,retry:t})=>{var D;const d=Re.concat(Se),{id:c}=Z(),{activeStep:m,form:n,handleBack:h,handleNextStep:F,isLoading:p,res:a,modalState:s,setHide:v,handleSubmit:E,handleReset:q}=ae({schema:d,fields:[{names:Object.keys(d.fields)}],url:e?`/admin/negocios/${c}/${e.id_cliente}/edit`:`/admin/clientes/${c}/agregar`,defaultValues:e?_(u({},e),{nombre_negocio:e.nom_negocio,otros:[{detalle:"",costo:""}]}):{otros:[{detalle:"",costo:""}]}});return o(ve,{children:f(xe,{children:[!e&&o(oe,{message:"Nuevo negocio"}),o(fe,{variant:"outlined",sx:{p:1,mt:2,mb:2},children:o(re,_(u({},n),{children:o(te,{activeStep:m,handleBack:h,sendLabel:"Guardar",sentLabel:"Guardado",finishedAction:e?void 0:q,disabledLast:!0,finishedActionText:e?void 0:"Agregar otro negocio",sentLabelImage:"\xA1Negocio guardado!",steps:["Datos generales"],handleNext:F,errors:Object.keys(n.formState.errors).length,children:[o(x.exports.Fragment,{children:o(qe,{})},"Datos-generales")]})}))}),o(ge,{open:p}),o(he,{state:s,title:"\xA1Atenci\xF3n!",setHide:()=>{r&&a&&a.status===201&&r(!1),v(),t&&a&&a.status===201&&t()},body:a?a&&a.data?a.data.message:(D=a.error)==null?void 0:D.message:"\xBFRealmente desea guardar el negocio?",cancelBotton:{actionFunction:()=>{r&&a&&a.status===201&&r(!1),v(),t&&a&&a.status===201&&t()},text:a?"Cerrar":"Cancelar"},type:a&&a.status===201?"SUCCESS":"ERROR",actionButton:a?void 0:{actionFunction:E,text:"Guardar"}}),!e&&o(x.exports.Suspense,{fallback:o("div",{}),children:o(Ce,{})})]})})};var cr=Object.freeze(Object.defineProperty({__proto__:null,default:ke},Symbol.toStringTag,{value:"Module"}));export{w as A,cr as i};
