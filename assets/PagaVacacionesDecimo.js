var f=Object.defineProperty,u=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var b=(e,o,a)=>o in e?f(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,g=(e,o)=>{for(var a in o||(o={}))$.call(o,a)&&b(e,a,o[a]);if(l)for(var a of l(o))F.call(o,a)&&b(e,a,o[a]);return e},h=(e,o)=>u(e,k(o));import{r as I,j as S,F as v,a as t}from"./index.js";import{S as m}from"./StyledCheckbox.js";import{a as B}from"./FormLiquidacionProvider.js";import{s as i}from"./form.module.js";import{c}from"./ValoresACalcular.js";import{F as s}from"./FormControlLabel.js";import"./Checkbox.js";import"./SwitchBase.js";import"./useFormControl.js";import"./ButtonBase.js";import"./emotion-react.browser.esm.js";import"./useIsFocusVisible.js";import"./useControlled.js";import"./createSvgIcon.js";import"./outlinedInputClasses.js";import"./useForm.js";import"./object.helper.js";import"./regex.js";import"./array.js";import"./upperFirst.js";import"./usePrint.js";import"./index23.js";import"./Loader.js";import"./Grid.js";import"./Typography.js";import"./CircularProgress.js";import"./formControlState.js";const ro=()=>{const{form:e}=I.exports.useContext(B),{formState:o,setValue:a,setFormState:x}=e,{paga_vacaciones:C,paga_decimo:N,paga_preaviso:d}=o,{paga_indemnizacion:_}=o;return S(v,{children:[t(s,{className:`${i.checkbox} ${c.item}`,control:t(m,{checked:Boolean(Number(C)),onChange:(p,r)=>a("paga_vacaciones",r)}),label:"VACACIONES"}),t(s,{className:`${i.checkbox} ${c.item}`,control:t(m,{checked:Boolean(Number(N)),onChange:(p,r)=>a("paga_decimo",r)}),label:"D\xC9CIMO"}),t(s,{className:`${i.checkbox} ${c.item}`,control:t(m,{checked:Boolean(Number(d)),onChange:(p,r)=>{x(n=>h(g({},n),{paga_preaviso:r,preaviso:Boolean(Number(r))===!1?"":n.preaviso}))}}),label:"PREAVISO"}),t(s,{className:`${i.checkbox} ${c.item}`,control:t(m,{checked:Boolean(Number(_)),onChange:(p,r)=>a("paga_indemnizacion",r)}),label:"INDEMNIZACI\xD3N"})]})};export{ro as default};
