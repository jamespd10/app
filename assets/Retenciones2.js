var j=Object.defineProperty,w=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var C=(e,t,o)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,V=(e,t)=>{for(var o in t||(t={}))B.call(t,o)&&C(e,o,t[o]);if(N)for(var o of N(t))I.call(t,o)&&C(e,o,t[o]);return e},R=(e,t)=>w(e,D(t));import{D as T}from"./DecimalInput.js";import{u as S,j as W,e as z}from"./array.js";import{s as x}from"./FormularioRealizar.js";import{r as A,a as d,j as a}from"./index.js";import{A as E}from"./AutocompleteServer.js";import{c as O}from"./fields.module.js";import{f as q}from"./string.helper.js";import{B as F}from"./Button.js";import"./TextInput.js";import"./TextField.js";import"./useControlled.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./GlobalStyles.js";import"./emotion-react.browser.esm.js";import"./CustomDecimal.js";import"./react-number-format.es.js";import"./CircularProgress.js";import"./upperFirst.js";import"./itbmsSchema.js";import"./regex.js";import"./Lazy.js";import"./ErrorIcon.js";import"./StyledGridOverlay.js";import"./Box.js";import"./Typography.js";import"./Loader.js";import"./Grid.js";import"./useFetch.js";import"./useHttpService.js";import"./Autocomplete.js";import"./Close.js";import"./IconButton.js";import"./ButtonBase.js";import"./useIsFocusVisible.js";import"./Popper.js";import"./Chip.js";const G="_title_1es5p_1",L="_flexColumn_1es5p_11",M="_flexRow_1es5p_16",P="_subtitle_1es5p_23";var $={title:G,flexColumn:L,flexRow:M,subtitle:P};const U=({i:e,k:t})=>{var s,m,l,p,u,g,h,f,_;const{formState:o,setValue:i}=S(),{errors:c}=o,[v,y]=A.exports.useState(null);return d(E,{ref:null,urlFetch:"/admin/agentes-retenedores",inputProps:{label:"Agente retenedor",error:!!((p=(l=(m=(s=c==null?void 0:c.negocios)==null?void 0:s[e])==null?void 0:m.retenciones)==null?void 0:l[t])!=null&&p.id_agente_retenedor),helperText:(_=(f=(h=(g=(u=c==null?void 0:c.negocios)==null?void 0:u[e])==null?void 0:g.retenciones)==null?void 0:h[e])==null?void 0:f.id_agente_retenedor)==null?void 0:_.message},disableStyle:!0,enableFirst:!0,value:v,size:"small",fullWidth:!0,onChange:(n,r)=>{y(r),r?(i(`negocios.${e}.retenciones.${t}.id_agente_retenedor`,r.id,{shouldValidate:!0}),i(`negocios.${e}.retenciones.${t}.agente`,r.agente,{shouldValidate:!0}),i(`negocios.${e}.retenciones.${t}.ruc`,r.ruc,{shouldValidate:!0}),i(`negocios.${e}.retenciones.${t}.dv`,r.dv,{shouldValidate:!0})):(i(`negocios.${e}.retenciones.${t}.id_agente_retenedor`,null,{shouldValidate:!0}),i(`negocios.${e}.retenciones.${t}.agente`,null,{shouldValidate:!0}),i(`negocios.${e}.retenciones.${t}.ruc`,null,{shouldValidate:!0}),i(`negocios.${e}.retenciones.${t}.dv`,null,{shouldValidate:!0}))},groupBy:n=>n.tipo,getOptionLabel:n=>n.agente,renderGroup:n=>a("div",{children:[a("div",{className:$.title,children:["Categor\xEDa: ",d("span",{children:n.group})]}),n.children]},n.key),renderOption:(n,r)=>A.exports.createElement("li",R(V({},n),{key:r.id}),a("div",{className:$.flexColumn,children:[d("span",{children:r.agente}),a("div",{className:$.flexRow,children:[a("span",{className:$.subtitle,children:["RUC: ",r.ruc]}),a("span",{className:$.subtitle,children:["DV: ",r.dv]})]})]}))})},ze=({i:e})=>{const{control:t,formState:o}=S(),{fields:i,append:c,remove:v}=W({control:t,name:`negocios.${e}.retenciones`,keyName:"key"}),y=z({control:t,name:`negocios.${e}.retenciones`}),{errors:s}=o;return a("div",{className:`${x.paper} ${x.item}`,children:[d("span",{className:x.titleItem,children:"Retenciones"}),i.map((m,l)=>{var p,u,g,h,f,_,n,r,b;return a("div",{className:O.field,children:[d(U,{i:e,k:l}),d(T,{label:"Total de retenciones",name:`negocios.${e}.retenciones.${l}.valor`,size:"small",fullWidth:!0,required:!0,error:!!((h=(g=(u=(p=s==null?void 0:s.negocios)==null?void 0:p[e])==null?void 0:u.retenciones)==null?void 0:g[l])!=null&&h.valor),helperText:(b=(r=(n=(_=(f=s==null?void 0:s.negocios)==null?void 0:f[e])==null?void 0:_.retenciones)==null?void 0:n[l])==null?void 0:r.valor)==null?void 0:b.message})]},m.key)}),a("span",{className:x.titleItem,children:["total de retenciones"," ",q(y.map(m=>Number(m.valor||0)).reduce((m,l)=>m+l))]}),d(F,{variant:"contained",color:"primary",onClick:()=>c({valor:"",agente:"",dv:"",id_agente_retenedor:null,ruc:""}),children:"Agregar retenci\xF3n"}),i.length>1&&d(F,{variant:"contained",color:"error",onClick:()=>v(-1),children:"Remover \xFAltima retenci\xF3n"})]})};export{ze as default};