var b=Object.defineProperty,C=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var x=(e,o,t)=>o in e?b(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,a=(e,o)=>{for(var t in o||(o={}))N.call(o,t)&&x(e,t,o[t]);if(_)for(var t of _(o))w.call(o,t)&&x(e,t,o[t]);return e},s=(e,o)=>C(e,k(o));import{r as p,a as r,F,j as l}from"./index.js";import{A as S}from"./AutocompleteServer.js";import{d as z,a as q}from"./CheckBoxOutlineBlank.js";import{N as j}from"./index56.js";import{a as v,S as y}from"./FormLiquidacionProvider.js";import{C as A}from"./Checkbox.js";import"./TextInput.js";import"./TextField.js";import"./useFormControl.js";import"./useControlled.js";import"./formControlState.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./Fade.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";import"./emotion-react.browser.esm.js";import"./useFetch.js";import"./useHttpService.js";import"./Autocomplete.js";import"./Close.js";import"./IconButton.js";import"./ButtonBase.js";import"./useIsFocusVisible.js";import"./Popper.js";import"./Chip.js";import"./jsx-runtime_commonjs-proxy.js";import"./useForm.js";import"./object.helper.js";import"./regex.js";import"./array.js";import"./upperFirst.js";import"./usePrint.js";import"./index23.js";const L="_container_7bwzk_1",O="_title_7bwzk_8",R="_flexRow_7bwzk_13";var f={container:L,title:O,flexRow:R};const Fo=()=>{var u;const{negocio:e,setNegocio:o}=p.exports.useContext(j),{form:t}=p.exports.useContext(v),{errors:n,setFormState:d}=t,{fetcherSalarios:g}=p.exports.useContext(y),[,,,,,h]=g;return r(F,{children:r(S,{ref:null,inputProps:{label:"Negocio",error:!!(n!=null&&n.id_negocio),helperText:(u=n==null?void 0:n.id_negocio)==null?void 0:u.message},disableStyle:!0,enableFirst:!0,value:e,size:"small",fullWidth:!0,onChange:(m,i)=>{o(i),d(i?c=>s(a({},c),{id_negocio:i.id,ubicacion:i.ubicacion}):c=>s(a({},c),{id_negocio:0,ubicacion:""})),h()},isOptionEqualToValue:(m,i)=>m.id===i.id,urlFetch:"/admin/liquidaciones/negocios",getOptionLabel:m=>`${m.tipo||""} ${m.nombre_negocio||""}`.trim(),renderOption:(m,i,{selected:c})=>p.exports.createElement("li",s(a({},m),{key:i.id}),r(A,{icon:r(z,{}),checkedIcon:r(q,{}),checked:c,size:"small"}),l("div",{className:f.container,children:[r("div",{className:f.title,children:l("span",{children:[i.tipo," ",i.nombre_negocio]})}),l("div",{children:[r("span",{children:i.ruc})," - ",r("span",{children:i.nom_cliente})]})]}))})})};export{Fo as default};
