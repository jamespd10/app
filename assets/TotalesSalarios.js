var W=Object.defineProperty,q=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var h=(t,o,i)=>o in t?W(t,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[o]=i,l=(t,o)=>{for(var i in o||(o={}))v.call(o,i)&&h(t,i,o[i]);if(s)for(var i of s(o))g.call(o,i)&&h(t,i,o[i]);return t},m=(t,o)=>q(t,D(o));var x=(t,o)=>{var i={};for(var a in t)v.call(t,a)&&o.indexOf(a)<0&&(i[a]=t[a]);if(t!=null&&s)for(var a of s(t))o.indexOf(a)<0&&g.call(t,a)&&(i[a]=t[a]);return i};import{r as F,j as I,a as r}from"./index.js";import{T as p}from"./TextDecimalInput.js";import{s as N}from"./form.module.js";import{a as w}from"./FormLiquidacionProvider.js";import"./TextInput.js";import"./TextField.js";import"./useFormControl.js";import"./useControlled.js";import"./formControlState.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./Fade.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";import"./emotion-react.browser.esm.js";import"./CustomDecimal.js";import"./react-number-format.es.js";import"./string.helper.js";import"./regex.js";import"./useForm.js";import"./object.helper.js";import"./array.js";import"./upperFirst.js";import"./usePrint.js";import"./index23.js";const ca=()=>{var u,c,d;const{form:t}=F.exports.useContext(w),{formState:o,onInputChange:i,errors:a,setFormState:f}=t,n=o,{preaviso:T,total_salarios:C}=n,b=x(n,["preaviso","total_salarios"]),{total_salarios_decimos:S,tipo_liquidacion:j}=b;return I("div",{className:`${N.itemRow}`,children:[r(p,{name:"total_salarios",label:"Total de salarios para vacaciones",size:"small",fullWidth:!0,value:C,onChange:_=>{f(e=>m(l({},e),{total_salarios:_.target.value,salarios:e.salarios.map(z=>m(l({},z),{salario:(Number(_.target.value)/e.salarios.length).toString()}))}))},error:!!(a!=null&&a.total_salarios),helperText:(u=a==null?void 0:a.total_salarios)==null?void 0:u.message}),r(p,{name:"total_salarios_decimos",label:"Total de salarios para d\xE9cimos",size:"small",fullWidth:!0,value:S,onChange:i,error:!!(a!=null&&a.total_salarios_decimos),helperText:(c=a==null?void 0:a.total_salarios_decimos)==null?void 0:c.message}),j==="Despido"&&r(p,{name:"preaviso",label:"Preaviso",size:"small",fullWidth:!0,value:T,onChange:i,error:!!(a!=null&&a.preaviso),helperText:(d=a==null?void 0:a.preaviso)==null?void 0:d.message})]})};export{ca as default};
