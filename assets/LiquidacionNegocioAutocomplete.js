var k=Object.defineProperty,N=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var f=(i,o,t)=>o in i?k(i,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[o]=t,s=(i,o)=>{for(var t in o||(o={}))S.call(o,t)&&f(i,t,o[t]);if(_)for(var t of _(o))z.call(o,t)&&f(i,t,o[t]);return i},a=(i,o)=>N(i,w(o));import{r as p,a as r,F as q,j as l}from"./index.js";import{A as R}from"./AutocompleteServer.js";import{d as j,a as v}from"./CheckBoxOutlineBlank.js";import{N as y}from"./index55.js";import{a as A,S as L}from"./FormLiquidacionProvider.js";import{C as O}from"./Checkbox.js";import"./TextInput.js";import"./TextField.js";import"./useFormControl.js";import"./useControlled.js";import"./useId.js";import"./formControlState.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./Fade.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";import"./emotion-react.browser.esm.js";import"./useFetch.js";import"./useHttpService.js";import"./Autocomplete.js";import"./Close.js";import"./IconButton.js";import"./ButtonBase.js";import"./useIsFocusVisible.js";import"./Popper.js";import"./Chip.js";import"./jsx-runtime_commonjs-proxy.js";import"./useForm.js";import"./object.helper.js";import"./regex.js";import"./array.js";import"./upperFirst.js";import"./usePrint.js";import"./index23.js";import"./SwitchBase.js";const $="_container_7bwzk_1",E="_title_7bwzk_8",T="_flexRow_7bwzk_13";var x={container:$,title:E,flexRow:T};const jo=()=>{var u;const{negocio:i,setNegocio:o}=p.exports.useContext(y),{form:t,fetcher:h}=p.exports.useContext(A),{errors:n,setFormState:d,onResetForm:g}=t,{fetcherSalarios:b}=p.exports.useContext(L),[,,,,,C]=b,[,,,,,F]=h;return r(q,{children:r(R,{ref:null,inputProps:{label:"Negocio",error:!!(n!=null&&n.id_negocio),helperText:(u=n==null?void 0:n.id_negocio)==null?void 0:u.message},disableStyle:!0,enableFirst:!0,value:i,size:"small",fullWidth:!0,onChange:(m,e)=>{C(),F(),o(e),g(),d(e?c=>a(s({},c),{id_negocio:e.id,ubicacion:e.ubicacion}):c=>a(s({},c),{id_negocio:0,ubicacion:""}))},isOptionEqualToValue:(m,e)=>m.id===e.id,urlFetch:"/admin/liquidaciones/negocios",getOptionLabel:m=>`${m.tipo||""} ${m.nombre_negocio||""}`.trim(),renderOption:(m,e,{selected:c})=>p.exports.createElement("li",a(s({},m),{key:e.id}),r(O,{icon:r(j,{}),checkedIcon:r(v,{}),checked:c,size:"small"}),l("div",{className:x.container,children:[r("div",{className:x.title,children:l("span",{children:[e.tipo," ",e.nombre_negocio]})}),l("div",{children:[r("span",{children:e.ruc})," - ",r("span",{children:e.nom_cliente})]})]}))})})};export{jo as default};