import{C as u}from"./CustomDecimal.js";import{T as n}from"./TextInput.js";import{u as d}from"./array.js";import{j as c,F as f,a as i}from"./index.js";import{G as s}from"./Grid.js";import"./react-number-format.es.js";import"./string.helper.js";import"./regex.js";import"./TextField.js";import"./useControlled.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./GlobalStyles.js";import"./upperFirst.js";import"./Typography.js";const F=()=>{var a,p;const{watch:m}=d(),t=m(["declaracion_municipal","actualizacion_nit","estados_financieros","paz_salvo","cierre","poder_notariado","declaracion_renta","certificacion_ingresos"]),e=m("otros"),o=(r,l)=>Number(r)+Number(l);return c(f,{children:[i(s,{item:!0,xs:12,sm:6,children:i(n,{label:"Total de impuestos",name:"total_impuesto",fullWidth:!0,required:!0,disabled:!0,size:"small",value:((t==null?void 0:t.reduce(o))+((a=e==null?void 0:e.map(r=>Number((r==null?void 0:r.valor)||0)))==null?void 0:a.reduce(o)))*.07,InputProps:{inputComponent:u}})}),i(s,{item:!0,xs:12,sm:6,children:i(n,{label:"Total",name:"total",fullWidth:!0,required:!0,disabled:!0,size:"small",value:(t==null?void 0:t.reduce(o))+((p=e==null?void 0:e.map(r=>Number((r==null?void 0:r.valor)||0)))==null?void 0:p.reduce(o)),InputProps:{inputComponent:u}})})]})};export{F as default};
