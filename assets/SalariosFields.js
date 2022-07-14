var S=Object.defineProperty,q=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var b=(t,o,a)=>o in t?S(t,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[o]=a,C=(t,o)=>{for(var a in o||(o={}))j.call(o,a)&&b(t,a,o[a]);if(y)for(var a of y(o))T.call(o,a)&&b(t,a,o[a]);return t},M=(t,o)=>q(t,v(o));import{r as d,aZ as A,aw as x,j as I,a as p}from"./index.js";import{S as z,a as N}from"./FormLiquidacionProvider.js";import{T as D}from"./TextDecimalInput.js";import{A as F}from"./Alert.js";import"./useForm.js";import"./object.helper.js";import"./regex.js";import"./array.js";import"./upperFirst.js";import"./usePrint.js";import"./index23.js";import"./TextInput.js";import"./TextField.js";import"./useFormControl.js";import"./useControlled.js";import"./formControlState.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./Fade.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";import"./emotion-react.browser.esm.js";import"./CustomDecimal.js";import"./react-number-format.es.js";import"./string.helper.js";import"./Close.js";import"./IconButton.js";import"./ButtonBase.js";import"./useIsFocusVisible.js";const E="_container_h3fvc_1",L="_title_h3fvc_11",R="_fields_h3fvc_16",U="_item_h3fvc_23";var h={container:E,title:L,fields:R,item:U};const V=()=>{const{fetcherSalarios:t}=d.exports.useContext(z),[,,o]=t,{form:a,defaultValue:i}=d.exports.useContext(N),{formState:_,setFormState:u}=a,{fecha_inicio:l,fecha_liquidacion:n,total_salarios:r}=_,s=d.exports.useMemo(()=>l!==""&&n!==""?A(l,n):[],[l,n]);d.exports.useEffect(()=>{(()=>{u(i?e=>i:e=>M(C({},e),{id_contrato:o&&o[0]?o[0].id_contrato:0,nombre:e.nombre?e.nombre:o&&o[0]?o[0].nombre:"",apellido:e.apellido?e.apellido:o&&o[0]?o[0].apellido:"",seguro:e.seguro?e.seguro:o&&o[0]?o[0].seguro:"",nacionalidad:e.nacionalidad?e.nacionalidad:o&&o[0]&&o[0].nacionalidad||"",salarios:s.map(m=>{const c=o==null?void 0:o.find(w=>x(w.mes,"yyyy-MM-01")===x(m,"yyyy-MM-01")),f=c?Number(c.salario):"";return{mes:m,salario:r&&Number(r)!==0?(Number(r)/s.length).toString():f.toString()}})}))})()},[s,o,r,i])},No=()=>{var n;V();const{form:t}=d.exports.useContext(N),{formState:o,onInputChange:a,errors:i}=t,{salarios:_,fecha_inicio:u,fecha_liquidacion:l}=o;return I("div",{className:h.container,children:[p("span",{className:h.title,children:"Salarios mensuales"}),i&&(i==null?void 0:i.salarios)&&p(F,{variant:"outlined",color:"warning",severity:"warning",children:((n=i.salarios)==null?void 0:n.message)||"Favor ingresar los salarios"}),u!==""&&l!==""?p("div",{className:h.fields,children:_.map((r,s)=>{var g,e,m,c,f;return p(D,{className:h.item,name:`salarios.${s}.salario`,label:x(r.mes,"MMMM-yyyy").toUpperCase(),size:"small",value:r.salario,onChange:a,error:!!((e=(g=i==null?void 0:i.salarios)==null?void 0:g[s])!=null&&e.salario),helperText:(f=(c=(m=i==null?void 0:i.salarios)==null?void 0:m[s])==null?void 0:c.salario)==null?void 0:f.message},r.mes)})}):p(F,{variant:"outlined",color:"warning",severity:"warning",children:"Favor seleccionar la fecha de inicio de labores y la fecha de liquidaci\xF3n"})]})};export{No as default};
