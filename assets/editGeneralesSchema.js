var j=Object.defineProperty,U=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var I=(e,a,n)=>a in e?j(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,s=(e,a)=>{for(var n in a||(a={}))B.call(a,n)&&I(e,n,a[n]);if(P)for(var n of P(a))H.call(a,n)&&I(e,n,a[n]);return e},k=(e,a)=>U(e,L(a));import{r as S,q as O,a as r,F as d,j as w}from"./index.js";import{u as V,C as $,c as z,a as o,e as J}from"./array.js";import{P as K}from"./PhoneInput.js";import{u as M,S as m}from"./useSelectProvincias.js";import{S as p}from"./SelectHookForm.js";import{T as c}from"./TextInput.js";import{t as A,a as u,n as Q}from"./constantsLists.js";import{N as X}from"./Nacionalidad.js";import{G as t}from"./Grid.js";import{F as Y}from"./FormGroup.js";import{F as Z}from"./FormControlLabel.js";import{C as ee}from"./Checkbox.js";import{t as re}from"./string.helper.js";import{r as ie,e as oe,f as te,g as ae,n as N,t as ne}from"./regex.js";const le=S.exports.lazy(()=>O(()=>import("./InputAsociarNegocio.js"),["assets/InputAsociarNegocio.js","assets/AutocompleteServer.js","assets/index.js","assets/index.css","assets/TextInput.js","assets/TextField.js","assets/FormHelperText.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Menu.js","assets/Modal.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/useFetch.js","assets/jwt-decode.esm.js","assets/useHttpService.js","assets/constants.js","assets/Autocomplete.js","assets/Close.js","assets/IconButton.js","assets/ButtonBase.js","assets/useIsFocusVisible.js","assets/Tooltip.js","assets/Chip.js","assets/CheckBoxOutlineBlank.js","assets/jsx-runtime_commonjs-proxy.js","assets/array.js","assets/upperFirst.js","assets/BootstrapTooltip.js","assets/ContentProvider.js","assets/useModal.js","assets/ChipState.js","assets/Error.js","assets/Modal2.js","assets/Close2.js","assets/Typography.js","assets/extendSxProp.js","assets/Button.js","assets/platform.js","assets/ListItem.js","assets/listItemButtonClasses.js","assets/Checkbox.js"])),Re=()=>{var x,g,h,F,v,f,b,E,q,R,_,y,C,T;const{register:e,formState:a,control:n,watch:W}=V(),{errors:i}=a,G=W("declaracion_renta"),l=M();return r(d,{children:w(t,{container:!0,spacing:1,direction:"row",wrap:"wrap",sx:{"& > :not(style)":{flexGrow:1}},children:[r(t,{item:!0,sm:6,md:4,children:r(c,s({label:"RUC",fullWidth:!0,error:!!i.ruc,helperText:(x=i.ruc)==null?void 0:x.message,required:!0},e("ruc")))}),r(t,{item:!0,sm:6,md:3,children:r(c,s({label:"DV",fullWidth:!0,error:!!i.dv,helperText:(g=i.dv)==null?void 0:g.message,required:!0},e("dv")))}),r(t,{item:!0,sm:6,md:5,children:r(c,s({label:"Nombre del cliente",fullWidth:!0,error:!!i.nom_cliente,helperText:(h=i.nom_cliente)==null?void 0:h.message,required:!0},e("nom_cliente")))}),r(t,{item:!0,sm:6,md:4,children:r(c,s({label:"Nit",fullWidth:!0,error:!!i.nit,helperText:(F=i.nit)==null?void 0:F.message,required:!0},e("nit")))}),r(t,{item:!0,xs:12,sm:6,md:4,children:r(p,{control:n,label:"Tipo de cliente",options:["Persona Natural","Persona Jur\xEDdica"],values:A,error:!!i.tipo,helperText:(v=i.tipo)==null?void 0:v.message,name:"tipo"})}),r(t,{item:!0,xs:12,sm:6,md:4,children:r(p,{control:n,label:"Tipo de identificaci\xF3n - representante",options:u,error:!!i.tipoIdentificacion,helperText:(f=i.tipoIdentificacion)==null?void 0:f.message,name:"tipoIdentificacion",required:!0})}),r(t,{item:!0,sm:6,md:3,children:r(c,s({label:"Identificaci\xF3n del representante",fullWidth:!0,error:!!i.identificacion_rep,helperText:(E=(b=i.identificacion_rep)==null?void 0:b.message)!=null?E:"C\xE9dula o Pasaporte",required:!0},e("identificacion_rep")))}),r(t,{item:!0,sm:6,md:3,children:r(c,s({label:"Nombre del representante",fullWidth:!0,error:!!i.nombre_rep,helperText:(q=i.nombre_rep)==null?void 0:q.message,required:!0},e("nombre_rep")))}),r(t,{item:!0,xs:12,sm:6,md:3,children:r(X,{name:"nacionalidad_owner",disableHeight:!0})}),r(t,{item:!0,sm:6,md:3,children:r(K,{name:"telefono",label:"Tel\xE9fono",fullWidth:!0,error:!!i.telefono,helperText:i.telefono&&i.telefono.message?i.telefono.message:"Ejm: 6666-6666 \xF3 222-2222",required:!0})}),r(t,{item:!0,xs:12,sm:6,md:3,children:r(m,{label:"Provincia",value:l.provincia,options:l.listProvincias,error:!!i.provincia,helperText:(R=i.provincia)==null?void 0:R.message,register:e("provincia"),onChange:l.handleChangeProvincia,required:!0})}),r(t,{item:!0,xs:12,sm:6,md:3,children:r(m,{label:"Distrito",value:l.distrito,options:l.listDistritos,error:!!i.distrito,helperText:(_=i.distrito)==null?void 0:_.message,register:e("distrito"),onChange:l.handleChangeDistrito,required:!0})}),r(t,{item:!0,xs:12,sm:6,md:3,children:r(m,{label:"Corregimiento",value:l.corregimiento,options:l.listCorregimientos,error:!!i.corregimiento,helperText:(y=i.corregimiento)==null?void 0:y.message,register:e("corregimiento"),onChange:l.handleChangeCorregimiento,required:!0})}),r(t,{item:!0,xs:12,sm:6,md:3,children:r(c,s({label:"Direcci\xF3n",fullWidth:!0,error:!!i.direccion,helperText:(C=i.direccion)==null?void 0:C.message,required:!0},e("direccion")))}),r(t,{item:!0,xs:12,children:r(Y,{children:r($,{name:"declaracion_renta",control:n,render:({field:D})=>r(Z,{control:r(ee,k(s({},D),{defaultChecked:Boolean(Number(D.value))})),label:"Solo declaraci\xF3n de renta"})})})}),Boolean(Number(G))?w(d,{children:[r(t,{item:!0,xs:12,md:6,children:r(p,{control:n,label:"Tipo",options:["Personal","Alquiler","D.R."],values:["Personal","Alquiler","D.R."],error:!!i.tipo_personal,helperText:(T=i.tipo_personal)==null?void 0:T.message,name:"tipo_personal"})}),r(t,{item:!0,xs:12,md:6,children:r(S.exports.Suspense,{fallback:r("div",{}),children:r(le,{name:"negocio",label:"Negocio asociado"})})})]}):r(d,{})]})})},_e=z().shape({nom_cliente:o().typeError("Favor ingresar el nombre").trim().required("Favor de ingresar el nombre del cliente").max(255,"Favor ingresar m\xE1ximo 255 caracteres"),ruc:o().typeError("Favor ingresar el RUC").typeError("Favor de ingresar el RUC").trim().required("Favor de ingresar el RUC").max(25,"Favor ingresar m\xE1ximo 25 caracteres").matches(ie,"Favor ingresar solo n\xFAmeros, letras y/o guion(-)"),dv:o().typeError("Favor ingresar el d\xEDgito verificador").trim().max(2,"Favor ingresar un n\xFAmero de m\xE1ximo 2 d\xEDgitos").test("check","Favor ingresar un n\xFAmero de dos decimales",e=>!!(!e||e&&e.match(oe))).nullable().notRequired(),nit:o().trim().nullable(!0).notRequired(),tipo:o().typeError("Favor seleccionar el tipo").trim().required("Favor seleccionar el tipo del cliente").test("check-tipo","Favor seleccionar el tipo del cliente",e=>!!(e&&A.includes(e))),tipoIdentificacion:o().typeError("Favor seleccionar el tipo de identificacion").trim().test("is-identificacion","Favor seleccionar un tipo de identificaci\xF3n v\xE1lido: "+u.join(", "),e=>!!(!e||e&&u.includes(e))).nullable().notRequired(),identificacion_rep:o().typeError("Favor ingresar la c\xE9dula o pasaporte").trim().nullable().notRequired().when("tipoIdentificacion",{is:"C\xE9dula",then:o().typeError("Favor ingresar la c\xE9dula").trim().nullable().notRequired().matches(te,"Favor de ingresar el formato de c\xE9dula v\xE1lido")}).when("tipoIdentificacion",{is:"Pasaporte",then:o().typeError("Favor ingresar el pasaporte").trim().nullable().notRequired().matches(ae,"Favor de ingresar el formato de pasaporte v\xE1lido")}),nombre_rep:o().typeError("Favor ingresar el nombre del representante").trim().nullable().notRequired().test("check-nombre","Favor ingresar solo letras del abecedario",e=>!!(!e||e&&e.match(N))),apellido_rep:o().typeError("Favor ingresar el apellido del representante").trim().nullable().notRequired().test("check-apellido","Favor ingresar solo letras del abecedario",e=>!!(!e||e&&e.match(N))),nacionalidad_owner:o().typeError("Favor seleccionar la nacionalidad del representante").trim().nullable().notRequired().test("check-nacionalidad","Favor de seleccionar la nacionalidad",e=>!!(!e||e&&Q.includes(e.toLowerCase()))),telefono:o().typeError("Favor ingresar el tel\xE9fono").trim().nullable().notRequired().test("check-phoneNumber","Favor ingresar un n\xFAmero de tel\xE9fono v\xE1lido",e=>!!(!e||e&&RegExp(ne).test(e)&&re(e))),provincia:o().typeError("Favor ingresar la provincia").trim().max(50,"Favor ingresar m\xE1ximo 50 caracteres").nullable().notRequired(),distrito:o().typeError("Favor ingresar el distrito").trim().max(50,"Favor ingresar m\xE1ximo 50 caracteres").nullable().notRequired(),corregimiento:o().typeError("Favor ingresar el corregimiento").trim().max(50,"Favor ingresar m\xE1ximo 50 caracteres").nullable().notRequired(),direccion:o().typeError("Favor ingresar la direcci\xF3n").trim().max(255,"Favor ingresar m\xE1ximo 255 caracteres").nullable().notRequired(),declaracion_renta:J().transform((e,a)=>a===""?0:e).typeError("Favor seleccionar un valor booleano").nullable().notRequired(),tipo_personal:o().trim().typeError("Favor seleccionar el tipo personal o alquiler").nullable().notRequired().when("declaracion_renta",{is:!0,then:o().trim().typeError("Favor seleccionar el tipo personal o alquiler").required("Favor seleccionar el tipo personal o alquiler")})});export{Re as D,_e as e};
