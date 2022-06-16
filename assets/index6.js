var J=Object.defineProperty,K=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var N=(e,o,t)=>o in e?J(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,u=(e,o)=>{for(var t in o||(o={}))X.call(o,t)&&N(e,t,o[t]);if(L)for(var t of L(o))Y.call(o,t)&&N(e,t,o[t]);return e},b=(e,o)=>K(e,Q(o));import{r as d,a as r,b as S,j as h,ae as Z}from"./index.js";import{u as A,C as B,a as D,c as C,b as x,d as f,e as V,f as ee,F as re}from"./array.js";import{H as oe}from"./HeaderTitle.js";import te from"./StepperForm.js";import{u as ie}from"./useStepper.js";import{d as $}from"./Add.js";import{u as j}from"./useModal.js";import"./jwt-decode.esm.js";import{A as q}from"./AutocompleteServer.js";import{d as R,a as k}from"./CheckBoxOutlineBlank.js";import{G as p}from"./Grid.js";import{L as H}from"./ListItem.js";import{C as w}from"./Checkbox.js";import{T as F}from"./Typography.js";import{I as M}from"./IconButton.js";import{T}from"./TextInput.js";import{D as y}from"./DecimalInput.js";import{P as ae}from"./PhoneInput.js";import{D as ne}from"./DateInput.js";import{P as G}from"./PatronalInput.js";import{L as se}from"./Loader.js";import{S as z}from"./Stack.js";import{D as P,a as le}from"./DireccionProvider.js";import{t as ce}from"./string.helper.js";import{a as de,r as me,d as E,p as pe,b as ue}from"./regex.js";import"./BootstrapTooltip.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import{B as ge}from"./BackgroundLoader.js";import"./platform.js";import xe from"./Modal.js";import{N as he}from"./NegociosProvider.js";import{C as fe}from"./Card.js";const I=d.exports.createContext({}),ve=({children:e})=>{const o=j(),t=j();return r(I.Provider,{value:{modalAddTipo:o,modalAddActividad:t},children:e})},be=d.exports.lazy(()=>S(()=>import("./ModalAddTipo.js"),["assets/ModalAddTipo.js","assets/index.js","assets/index4.css","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/LoadingButton.js","assets/Backdrop.js","assets/Modal2.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Typography.js","assets/Button.js","assets/ButtonBase.js","assets/IconButton.js","assets/Error.js","assets/useFetch.js","assets/jwt-decode.esm.js","assets/useHttpService.js","assets/TextInput.js","assets/TextField.js","assets/FormHelperText.js","assets/react-is.production.min.js","assets/Grow.js","assets/List.js","assets/GlobalStyles.js","assets/array.js","assets/upperFirst.js","assets/Alert.js","assets/Close.js","assets/HeaderTitle.js","assets/Divider.js","assets/StepperForm.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Grid.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/platform.js","assets/Box.js","assets/useStepper.js","assets/Add.js","assets/AutocompleteServer.js","assets/Autocomplete.js","assets/Chip.js","assets/CheckBoxOutlineBlank.js","assets/ListItem.js","assets/Checkbox.js","assets/DecimalInput.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/PhoneInput.js","assets/DateInput.js","assets/MobileDatePicker.js","assets/MonthPicker.js","assets/usePickerState.js","assets/InputAdornment.js","assets/index7.js","assets/PatronalInput.js","assets/CustomSipe.js","assets/Loader.js","assets/Stack.js","assets/DireccionProvider.js","assets/BackgroundLoader.js","assets/NegociosProvider.js","assets/useFetchPagination.js","assets/useAsyncRetry.js","assets/useList.js","assets/usePrevious.js","assets/Card.js"])),_e=()=>{const{modalAddTipo:e}=d.exports.useContext(I),{setOpen:o}=e,{control:t,formState:m,watch:c}=A(),{errors:s}=m,i=c("tipos");return h(p,{item:!0,xs:12,children:[r(d.exports.Suspense,{fallback:r("div",{}),children:r(be,{})}),h("div",{style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"center",justifyContent:"space-between"},children:[r(B,{control:t,name:"tipos",render:({field:a})=>{var l,g,n;return r(q,b(u({},a),{ref:null,urlFetch:"/admin/negocios/tipos",enableFirst:!0,disableHight:!0,onChange:(v,_)=>a.onChange(_),multiple:!0,getOptionDisabled:v=>!!(Array.isArray(i)&&i.length===1&&!i.includes(v)),inputProps:{label:"Tipos del negocio",helperText:(l=s==null?void 0:s.tipos)==null?void 0:l.message,error:!!((n=(g=m.errors)==null?void 0:g.tipos)!=null&&n.message)},fullWidth:!0,isOptionEqualToValue:(v,_)=>v.id===_.id,getOptionLabel:v=>v.tipo,renderOption:(v,_,{selected:O})=>h(H,b(u({},v),{style:{textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[r(w,{icon:r(R,{}),checkedIcon:r(k,{}),style:{marginRight:8},checked:O}),r("div",{style:{display:"flex",flexDirection:"column",textTransform:"uppercase"},children:r(F,{variant:"body1",children:r("strong",{children:_.tipo})})})]}))}))}}),r("div",{style:{width:"50px"},children:r(M,{onClick:()=>o(),children:r($,{})})})]})]})},Fe=d.exports.lazy(()=>S(()=>import("./ModalAddActividad.js"),["assets/ModalAddActividad.js","assets/index.js","assets/index4.css","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/LoadingButton.js","assets/Backdrop.js","assets/Modal2.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Typography.js","assets/Button.js","assets/ButtonBase.js","assets/IconButton.js","assets/Error.js","assets/TextInput.js","assets/TextField.js","assets/FormHelperText.js","assets/react-is.production.min.js","assets/Grow.js","assets/List.js","assets/GlobalStyles.js","assets/array.js","assets/upperFirst.js","assets/useFetch.js","assets/jwt-decode.esm.js","assets/useHttpService.js","assets/Alert.js","assets/Close.js","assets/HeaderTitle.js","assets/Divider.js","assets/StepperForm.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Grid.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/platform.js","assets/Box.js","assets/useStepper.js","assets/Add.js","assets/AutocompleteServer.js","assets/Autocomplete.js","assets/Chip.js","assets/CheckBoxOutlineBlank.js","assets/ListItem.js","assets/Checkbox.js","assets/DecimalInput.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/PhoneInput.js","assets/DateInput.js","assets/MobileDatePicker.js","assets/MonthPicker.js","assets/usePickerState.js","assets/InputAdornment.js","assets/index7.js","assets/PatronalInput.js","assets/CustomSipe.js","assets/Loader.js","assets/Stack.js","assets/DireccionProvider.js","assets/BackgroundLoader.js","assets/NegociosProvider.js","assets/useFetchPagination.js","assets/useAsyncRetry.js","assets/useList.js","assets/usePrevious.js","assets/Card.js"])),ye=()=>{const{modalAddActividad:e}=d.exports.useContext(I),{setOpen:o}=e,{control:t,formState:m}=A(),{errors:c}=m;return h(p,{item:!0,xs:12,children:[r(d.exports.Suspense,{fallback:r("div",{}),children:r(Fe,{})}),h("div",{style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"center",justifyContent:"space-between"},children:[r(B,{control:t,name:"actividades",render:({field:s})=>{var i,a,l;return r(q,b(u({},s),{ref:null,urlFetch:"/admin/negocios/actividades",enableFirst:!0,disableHight:!0,multiple:!0,onChange:(g,n)=>s.onChange(n),inputProps:{label:"Actividades del negocio",helperText:(i=c==null?void 0:c.tipos)==null?void 0:i.message,error:!!((l=(a=m.errors)==null?void 0:a.tipos)!=null&&l.message)},fullWidth:!0,isOptionEqualToValue:(g,n)=>g.id===n.id,getOptionLabel:g=>g.actividad,renderOption:(g,n,{selected:v})=>h(H,b(u({},g),{style:{textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[r(w,{icon:r(R,{}),checkedIcon:r(k,{}),style:{marginRight:8},checked:v}),r("div",{style:{display:"flex",flexDirection:"column",textTransform:"uppercase"},children:r(F,{variant:"body1",children:r("strong",{children:n.actividad})})})]}))}))}}),r("div",{style:{width:"50px"},children:r(M,{onClick:()=>o(),children:r($,{})})})]})]})},Ee=()=>{var t,m,c,s,i,a;const{formState:e}=A(),{errors:o}=e;return h(z,{spacing:1,direction:"column",style:{marginTop:7,border:"2px solid black",borderRadius:5,padding:10},children:[r(F,{variant:"h5",children:"Honorarios"}),h(z,{spacing:1,direction:{xs:"column",lg:"row"},children:[r(y,{name:"serv_conta",label:"Servicio de contabilidad",fullWidth:!0,error:!!o.serv_conta,helperText:(t=o.serv_conta)==null?void 0:t.message}),r(y,{name:"formulario_compra",label:"Formulario de Compra",fullWidth:!0,error:!!o.serv_conta,helperText:(m=o.serv_conta)==null?void 0:m.message}),r(y,{name:"formulario_venta",label:"Formulario de Venta",fullWidth:!0,error:!!o.serv_conta,helperText:(c=o.serv_conta)==null?void 0:c.message}),r(y,{name:"cargo_al",label:"Cargo A.L.",fullWidth:!0,error:!!o.cargo_al,helperText:(s=o.cargo_al)==null?void 0:s.message}),r(y,{name:"formulario_03",label:"Formulario 03",fullWidth:!0,error:!!o.formulario_03,helperText:(i=o.formulario_03)==null?void 0:i.message}),r(y,{name:"form_reten_itbms",label:"Formulario retenci\xF3n ITBMS",fullWidth:!0,error:!!o.form_reten_itbms,helperText:(a=o.form_reten_itbms)==null?void 0:a.message})]})]})},Ae=()=>{const{control:e,setValue:o}=A(),t=D({control:e,name:"provincia"}),{provincia:m,setProvincia:c}=d.exports.useContext(P);return d.exports.useEffect(()=>{t&&c({id:0,provincia:t})},[]),r(p,{item:!0,xs:12,sm:6,md:4,children:r(q,{ref:null,inputProps:{label:"Provincia"},disableStyle:!0,enableFirst:!0,value:m,onChange:(s,i)=>{c(i),i?o("provincia",i.provincia):o("provincia","")},isOptionEqualToValue:(s,i)=>s.id===i.id,urlFetch:"/provincias",getOptionLabel:s=>s.provincia,renderOption:(s,i,{selected:a})=>d.exports.createElement("li",b(u({},s),{key:i.id,style:{textOverflow:"ellipsis",whiteSpace:"nowrap"}}),r(w,{icon:r(R,{}),checkedIcon:r(k,{}),checked:a,size:"small"}),r("div",{style:{display:"flex",flexDirection:"column",textTransform:"uppercase"},children:r(F,{variant:"body1",fontWeight:"bold",children:i.provincia})}))})})},Te=()=>{const{control:e,setValue:o}=A(),t=D({control:e,name:"distrito"}),{provincia:m,distrito:c,setDistrito:s}=d.exports.useContext(P);return d.exports.useEffect(()=>{t&&s({id:0,distrito:t,id_provincia:0,provincia:""})},[]),r(p,{item:!0,xs:12,sm:6,md:4,children:r(q,{ref:null,inputProps:{label:"Distrito"},disableStyle:!0,params:{id_provincia:m?m.id:""},value:c,enableFirst:!0,onChange:(i,a)=>{s(a),a?o("distrito",a.distrito):o("distrito","")},isOptionEqualToValue:(i,a)=>i.id===a.id,urlFetch:"/distritos",getOptionLabel:i=>i.distrito,renderOption:(i,a,{selected:l})=>d.exports.createElement("li",b(u({},i),{key:a.id,style:{textOverflow:"ellipsis",whiteSpace:"nowrap"}}),r(w,{icon:r(R,{}),checkedIcon:r(k,{}),checked:l,size:"small"}),h("div",{style:{display:"flex",flexDirection:"column",textTransform:"uppercase",padding:0,margin:0},children:[r(F,{variant:"body1",fontWeight:"bold",p:0,m:0,children:a.distrito}),r(F,{variant:"caption",p:0,m:0,children:a.provincia})]}))})})},Se=()=>{const{control:e,setValue:o}=A(),t=D({control:e,name:"corregimiento"}),m=d.exports.useContext(P),{distrito:c,corregimiento:s,setCorregimiento:i}=m;return d.exports.useEffect(()=>{t&&i({id:0,corregimiento:t,id_distrito:0,distrito:"",provincia:""})},[]),r(p,{item:!0,xs:12,sm:6,md:4,children:r(q,{ref:null,inputProps:{label:"Corregimiento"},disableStyle:!0,params:{id_distrito:c?c.id:""},value:s,enableFirst:!0,onChange:(a,l)=>{i(l),l?o("corregimiento",l.corregimiento):o("corregimiento","")},isOptionEqualToValue:(a,l)=>a.id===l.id,urlFetch:"/corregimientos",getOptionLabel:a=>a.corregimiento,renderOption:(a,l,{selected:g})=>d.exports.createElement("li",b(u({},a),{key:l.id,style:{textOverflow:"ellipsis",whiteSpace:"nowrap"}}),r(w,{icon:r(R,{}),checkedIcon:r(k,{}),checked:g,size:"small"}),h("div",{style:{display:"flex",flexDirection:"column",textTransform:"uppercase",padding:0,margin:0},children:[r(F,{variant:"body1",fontWeight:"bold",p:0,m:0,children:l.corregimiento}),h(F,{variant:"caption",p:0,m:0,children:[l.distrito," - ",l.provincia]})]}))})})},qe=d.exports.lazy(()=>S(()=>import("./FormOtrosDatos.js"),["assets/FormOtrosDatos.js","assets/constantsLists.js","assets/SelectHookForm.js","assets/array.js","assets/index.js","assets/index4.css","assets/upperFirst.js","assets/Box.js","assets/Typography.js","assets/TextField.js","assets/FormHelperText.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/MenuItem.js","assets/ButtonBase.js","assets/useIsFocusVisible.js","assets/listItemIconClasses.js","assets/Divider.js","assets/listItemTextClasses.js","assets/jwt-decode.esm.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/useHttpService.js","assets/Grid.js","assets/string.helper.js","assets/regex.js","assets/TextInput.js"])),Re=d.exports.lazy(()=>S(()=>import("./SuperValidado.js"),["assets/SuperValidado.js","assets/array.js","assets/index.js","assets/index4.css","assets/upperFirst.js","assets/Grid.js","assets/Typography.js","assets/FormControlLabel.js","assets/FormHelperText.js","assets/Checkbox.js","assets/ButtonBase.js","assets/useIsFocusVisible.js","assets/useControlled.js","assets/createSvgIcon.js"])),ke=()=>{var t,m,c,s,i,a,l,g,n;const{register:e,formState:{errors:o}}=A();return h(le,{children:[h(p,{container:!0,spacing:1,direction:"row",wrap:"wrap",sx:{"& > :not(style)":{flexGrow:1}},children:[r(p,{item:!0,sm:6,md:4,children:r(T,u({label:"Nombre del negocio",fullWidth:!0,error:!!o.nombre_negocio,helperText:(t=o.nombre_negocio)==null?void 0:t.message,required:!0},e("nombre_negocio")))}),r(p,{item:!0,sm:6,md:4,children:r(T,u({label:"Aviso de operaci\xF3n",fullWidth:!0,error:!!o.aviso_operacion,helperText:(m=o.aviso_operacion)==null?void 0:m.message,required:!0},e("aviso_operacion")))}),r(p,{item:!0,sm:6,md:4,children:r(ne,{label:"Fecha de aviso de operaci\xF3n",name:"fecha_a_operacion",error:!!o.fecha_a_operacion,helperText:(c=o.fecha_a_operacion)==null?void 0:c.message,required:!0})}),r(p,{item:!0,sm:6,md:4,children:r(T,u({label:"No. contribuyente",fullWidth:!0,error:!!o.no_contribuyente,helperText:(s=o.no_contribuyente)==null?void 0:s.message,required:!0},e("no_contribuyente")))}),r(p,{item:!0,sm:6,md:4,children:r(y,{name:"capital",label:"Capital",fullWidth:!0,error:!!o.capital,helperText:(i=o.capital)==null?void 0:i.message,required:!0})}),r(p,{item:!0,sm:6,md:4,children:r(T,u({label:"N\xFAmero de empleados",fullWidth:!0,error:!!o.n_empleados,helperText:o.n_empleados?(a=o.n_empleados)==null?void 0:a.message:"N\xFAmero entero positivo \xF3 puede ser 0"},e("n_empleados")))}),r(p,{item:!0,sm:6,md:4,children:r(G,u({label:"N\xFAmero patronal SIPE",fullWidth:!0,sipe:!0,error:!!o.patronal_sipe,helperText:(l=o.patronal_sipe)==null?void 0:l.message},e("patronal_sipe")))}),r(p,{item:!0,sm:6,md:4,children:r(G,u({label:"N\xFAmero patronal",fullWidth:!0,error:!!o.n_patronal,helperText:(g=o.n_patronal)==null?void 0:g.message,required:!0},e("n_patronal")))}),r(p,{item:!0,sm:6,md:4,children:r(ae,{name:"telefono",label:"Tel\xE9fono",fullWidth:!0,error:!!o.telefono,helperText:o.telefono&&o.telefono.message?o.telefono.message:"Ejm: 6666-6666 \xF3 222-2222",required:!0})}),r(Ae,{}),r(Te,{}),r(Se,{}),r(p,{item:!0,xs:"auto",children:r(T,u({label:"Direcci\xF3n",fullWidth:!0,error:!!o.direccion,helperText:(n=o.direccion)==null?void 0:n.message,required:!0,inputProps:{maxLength:255}},e("direccion")))})]}),h(p,{container:!0,spacing:1,direction:"row",wrap:"wrap",sx:{"& > :not(style)":{flexGrow:1},paddingTop:1},children:[r(_e,{}),r(ye,{})]}),r(p,{container:!0,spacing:1,direction:"row",wrap:"wrap",sx:{"& > :not(style)":{flexGrow:1},paddingTop:1},children:r(d.exports.Suspense,{fallback:r(se,{}),children:r(qe,{})})}),r(Ee,{}),r(Re,{})]})},we=C().shape({nombre_negocio:x().trim().required("Favor de ingresar el nombre del negocio").max(100,"Favor ingresar m\xE1ximo 100 caracteres"),negocio_referencia:x().trim().notRequired().nullable().max(255,"Favor ingresar m\xE1ximo 255 caracteres"),aviso_operacion:x().typeError("Favor de ingresar el aviso de operaci\xF3n").trim().max(50,"Favor de ingresar m\xE1ximo 50 caracteres").test("check-a-op","Favor ingresar solo n\xFAmeros, letras y/o guiones",e=>!!(!e||e&&e.match(de))).nullable().notRequired(),fecha_a_operacion:x().trim().typeError("Favor de seleccionar la fecha de aviso de operaci\xF3n").nullable().notRequired().default(null),no_contribuyente:x().typeError("Favor de ingresar el No. contribuyente").trim().nullable().max(255,"Favor ingresar m\xE1ximo 255 caracteres").test("check-no_c","Favor ingresar solo n\xFAmeros y/o guion(-)",e=>!!(!e||e&&e.match(me))),capital:f().transform((e,o)=>o===""?0:e).typeError("Favor de ingresar un n\xFAmero").nullable().notRequired().test("check-decimal","Favor ingresar m\xE1ximo dos decimales",e=>!!(!e||e&&e.toString().match(E))),n_empleados:f().transform((e,o)=>o===""?0:e).typeError("Favor de ingresar el n\xFAmero de empleados \xF3 0").integer("Favor de ingresar un n\xFAmero entero").default(0).nullable(!0),patronal_sipe:x().typeError("Favor ingresar el n\xFAmero patronal").trim().test("check","Favor usar el siguiente formato: ##-###-#####",e=>!!(!e||e&&e.match(pe))).nullable(!0),n_patronal:x().typeError("Favor ingresar el n\xFAmero patronal").trim().matches(ue,"Favor usar el siguiente formato: ##-###-####").nullable().notRequired(),telefono:x().typeError("Favor ingresar el tel\xE9fono").trim().nullable().notRequired().test("check-phoneNumber","Favor ingresar un n\xFAmero de tel\xE9fono v\xE1lido",e=>!!(!e||e&&ce)),provincia:x().trim().max(50,"Favor ingresar m\xE1ximo 50 caracteres").nullable().notRequired(),distrito:x().trim().nullable().notRequired().max(50,"Favor ingresar m\xE1ximo 50 caracteres"),corregimiento:x().trim().max(50,"Favor ingresar m\xE1ximo 50 caracteres").nullable().notRequired(),direccion:x().trim().max(255,"Favor ingresar m\xE1ximo 255 caracteres").required("Favor de ingresar la direcci\xF3n del negocio").nullable().notRequired(),tipos:V().of(C().shape({id:f().typeError("Favor seleccionar el tipo").transform((e,o)=>o===""?0:e).nullable().notRequired(),tipo:x().trim().required("Favor seleccionar el tipo")})).typeError("Favor seleccionar el tipo").nullable().notRequired(),actividades:V().of(C().shape({id:f().transform((e,o)=>o===""?0:e).typeError("Favor ingresar el id de la actividad").nullable().notRequired(),actividad:x().trim().required("Favor ingresar la actividad")})).typeError("Favor seleccionar al menos 1 actividad").nullable().notRequired(),super_validado:ee().typeError("Favor seleccionar un valor boleano").nullable().notRequired()}),Ce=C().shape({ruta:f().typeError("Favor de seleccionar la ruta").integer("Favor de ingresar un n\xFAmero entero").positive("Favor de ingresar un n\xFAmero positivo").required("Favor de ingresar la ruta"),itbms_asignado_a:f().transform((e,o)=>o===""?0:e).typeError("Favor de seleccionar el usuario asignado").nullable().notRequired(),ss_asignado_a:f().transform((e,o)=>o===""?0:e).typeError("Favor de seleccionar el usuario asignado").nullable().notRequired(),serv_conta:f().transform((e,o)=>o===""?0:e).typeError("Favor de ingresar un n\xFAmero").nullable().notRequired().test("check-decimal","Favor ingresar m\xE1ximo dos decimales",e=>!!(!e||e&&e.toString().match(E))),formulario_compra:f().transform((e,o)=>o===""?0:e).typeError("Favor de ingresar un n\xFAmero").nullable().notRequired().test("check-decimal","Favor ingresar m\xE1ximo dos decimales",e=>!!(!e||e&&e.toString().match(E))),formulario_venta:f().transform((e,o)=>o===""?0:e).typeError("Favor de ingresar un n\xFAmero").nullable().notRequired().test("check-decimal","Favor ingresar m\xE1ximo dos decimales",e=>!!(!e||e&&e.toString().match(E))),cargo_al:f().transform((e,o)=>o===""?0:e).typeError("Favor de ingresar un n\xFAmero").nullable().notRequired().test("check-decimal","Favor ingresar m\xE1ximo dos decimales",e=>!!(!e||e&&e.toString().match(E))),formulario_03:f().transform((e,o)=>o===""?0:e).typeError("Favor de ingresar un n\xFAmero").nullable().notRequired().test("check-decimal","Favor ingresar m\xE1ximo dos decimales",e=>!!(!e||e&&e.toString().match(E))),form_reten_itbms:f().transform((e,o)=>o===""?0:e).typeError("Favor de ingresar un n\xFAmero").nullable().notRequired().test("check-decimal","Favor ingresar m\xE1ximo dos decimales",e=>!!(!e||e&&e.toString().match(E))),recorrido:f().transform((e,o)=>o===""?0:e).typeError("Favor de ingresar un n\xFAmero").integer("Favor de ingresar un n\xFAmero entero").nullable().notRequired(),tipo_pagos:x().trim().nullable().notRequired()}),Oe=d.exports.lazy(()=>S(()=>import("./NegociosTable.js"),["assets/NegociosTable.js","assets/index.js","assets/index4.css","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/jwt-decode.esm.js","assets/NotFoundResults.js","assets/Grid.js","assets/Typography.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/ChipState.js","assets/Error.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/Chip.js","assets/ButtonBase.js","assets/Modal.js","assets/Close2.js","assets/LoadingButton.js","assets/Backdrop.js","assets/Modal2.js","assets/Paper.js","assets/Button.js","assets/IconButton.js","assets/platform.js","assets/CustomTable.js","assets/Search.js","assets/Clear.js","assets/TextField.js","assets/FormHelperText.js","assets/react-is.production.min.js","assets/List.js","assets/GlobalStyles.js","assets/Box.js","assets/InputAdornment.js","assets/FormGroup.js","assets/FormControlLabel.js","assets/Checkbox.js","assets/SkipNextOutlined.js","assets/Pagination.js","assets/useAsyncRetry.js","assets/TableRow.js","assets/Loader.js","assets/Stack.js","assets/LinearProgress.js","assets/Visibility.js","assets/NegociosProvider.js","assets/useFetchPagination.js","assets/useList.js","assets/usePrevious.js","assets/useHttpService.js","assets/useFetch.js"])),De=({negocio:e,setEditing:o,retry:t})=>{var W;const m=we.concat(Ce),{id:c}=Z(),{activeStep:s,form:i,handleBack:a,handleNextStep:l,isLoading:g,res:n,modalState:v,setHide:_,handleSubmit:O,handleReset:U}=ie({schema:m,fields:[{names:Object.keys(m.fields)}],url:e?`/admin/negocios/${c}/${e.id_cliente}/edit`:`/admin/clientes/${c}/agregar`,defaultValues:e?b(u({},e),{super_validado:Boolean(Number(e.super_validado)),nombre_negocio:e.nom_negocio,otros:[{detalle:"",costo:""}]}):{otros:[{detalle:"",costo:""}],provincia:null,distrito:null,corregimiento:null}});return r(ve,{children:h(he,{children:[!e&&r(oe,{message:"Nuevo negocio"}),r(fe,{variant:"outlined",sx:{p:1,mt:2,mb:2},children:r(re,b(u({},i),{children:r(te,{activeStep:s,handleBack:a,sendLabel:"Guardar",sentLabel:"Guardado",finishedAction:e?void 0:U,disabledLast:!0,finishedActionText:e?void 0:"Agregar otro negocio",sentLabelImage:"\xA1Negocio guardado!",steps:["Datos generales"],handleNext:l,errors:Object.keys(i.formState.errors).length,children:[r(d.exports.Fragment,{children:r(ke,{})},"Datos-generales")]})}))}),r(ge,{open:g}),r(xe,{state:v,title:"\xA1Atenci\xF3n!",setHide:()=>{o&&n&&n.status===201&&o(!1),_(),t&&n&&n.status===201&&t()},body:n?n&&n.data?n.data.message:(W=n.error)==null?void 0:W.message:"\xBFRealmente desea guardar el negocio?",cancelBotton:{actionFunction:()=>{o&&n&&n.status===201&&o(!1),_(),t&&n&&n.status===201&&t()},text:n?"Cerrar":"Cancelar"},type:n&&n.status===201?"SUCCESS":"ERROR",actionButton:n?void 0:{actionFunction:O,text:"Guardar"}}),!e&&r(d.exports.Suspense,{fallback:r("div",{}),children:r(Oe,{})})]})})};var gr=Object.freeze(Object.defineProperty({__proto__:null,default:De},Symbol.toStringTag,{value:"Module"}));export{I as A,gr as i};
