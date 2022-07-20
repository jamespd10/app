var y=Object.defineProperty,b=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var h=(t,o,e)=>o in t?y(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,c=(t,o)=>{for(var e in o||(o={}))M.call(o,e)&&h(t,e,o[e]);if(x)for(var e of x(o))_.call(o,e)&&h(t,e,o[e]);return t},p=(t,o)=>b(t,I(o));import{r as s,aw as g,a as q}from"./index.js";import{T as F}from"./TextInput.js";import{a as C,S as T}from"./FormLiquidacionProvider.js";import"./TextField.js";import"./useFormControl.js";import"./useControlled.js";import"./useId.js";import"./formControlState.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./Fade.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";import"./emotion-react.browser.esm.js";import"./useForm.js";import"./object.helper.js";import"./regex.js";import"./array.js";import"./upperFirst.js";import"./usePrint.js";import"./index23.js";const E=()=>{const{form:t}=s.exports.useContext(C),{setFormState:o}=t;return{handleSet:s.exports.useCallback(i=>{o(n=>p(c({},n),{id_contrato:i[0]?i[0].id_contrato:0,nombre:n.nombre?n.nombre:i[0]?i[0].nombre:"",apellido:n.apellido?n.apellido:i[0]?i[0].apellido:"",seguro:n.seguro?n.seguro:i[0]?i[0].seguro:"",nacionalidad:n.nacionalidad?n.nacionalidad:i[0]&&i[0].nacionalidad||"",salarios:n.salarios.map(r=>{const a=i.findIndex(l=>g(l.mes,"yyyy-MM-01")===g(r.mes,"yyyy-MM-01")),m=a!==-1?i[a].salario:r.salario;return p(c({},r),{salario:m})})}))},[o])}},no=()=>{var d;const{fetcherSalarios:t}=s.exports.useContext(T),[,o]=t,{form:e,negocio:i}=s.exports.useContext(C),{formState:n,errors:r,onInputChange:a}=e,{identificacion:m,fecha_inicio:l}=n,{handleSet:S}=E();return q(F,{name:"identificacion",label:"C\xE9dula o pasaporte",size:"small",fullWidth:!0,error:!!(r!=null&&r.identificacion),helperText:(d=r==null?void 0:r.identificacion)==null?void 0:d.message,value:m,onChange:u=>{a(u),o("/admin/liquidaciones/salarios",{params:{id_negocio:i==null?void 0:i.id,q:u.target.value,mes:l}}).then(({data:f})=>{f&&S(f)})}})};export{no as default};
