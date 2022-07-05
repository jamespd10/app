var A=Object.defineProperty,S=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var F=(r,e,t)=>e in r?A(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,l=(r,e)=>{for(var t in e||(e={}))T.call(e,t)&&F(r,t,e[t]);if(N)for(var t of N(e))$.call(e,t)&&F(r,t,e[t]);return r},a=(r,e)=>S(r,I(e));import{r as b,a as c,j as p}from"./index.js";import{s as R}from"./FormularioRealizar.js";import{A as j}from"./AutocompleteServer.js";import{F as w}from"./ContainerFormulario.js";import{c as B}from"./fields.module.js";import{f as D}from"./string.helper.js";import{T as z}from"./TextInput.js";import{C as E}from"./CustomDecimal.js";import{B as y}from"./Button.js";import"./ErrorIcon.js";import"./StyledGridOverlay.js";import"./Box.js";import"./Typography.js";import"./Loader.js";import"./Grid.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./index51.js";import"./BootstrapModalTitle.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Modal2.js";import"./isHostComponent.js";import"./useControlled.js";import"./Portal.js";import"./Paper.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useIsFocusVisible.js";import"./IconButton.js";import"./ButtonBase.js";import"./Paid.js";import"./BootstrapDivContent.js";import"./Divider.js";import"./index18.js";import"./HeaderTitle.js";import"./StyledSpeedDial.js";import"./Assignment.js";import"./FabButtonAction.js";import"./react-is.production.min.js";import"./AssignmentRounded.js";import"./Tooltip.js";import"./Popper.js";import"./appendOwnerState.js";import"./Grow.js";import"./ContentProvider.js";import"./useModal.js";import"./SpeedDial.module.js";import"./Stack.js";import"./index30.js";import"./useFetch.js";import"./useHttpService.js";import"./Autocomplete.js";import"./TextField.js";import"./List.js";import"./GlobalStyles.js";import"./Close.js";import"./Chip.js";import"./useForm.js";import"./object.helper.js";import"./array.js";import"./upperFirst.js";import"./regex.js";import"./Lazy.js";import"./useGetDefaultValues.js";import"./react-number-format.es.js";const O="_title_1es5p_1",P="_flexColumn_1es5p_11",W="_flexRow_1es5p_16",q="_subtitle_1es5p_23";var _={title:O,flexColumn:P,flexRow:W,subtitle:q};const G=({i:r})=>{var u,f,g,h,x;const{form:e}=b.exports.useContext(w),{errors:t,formState:d,setFormState:v}=e,{retenciones:m}=d,[o,s]=b.exports.useState(null);return c(j,{ref:null,urlFetch:"/admin/agentes-retenedores",inputProps:{label:"Agente retenedor",error:!!((f=(u=t==null?void 0:t.retenciones)==null?void 0:u[r])!=null&&f.id_agente_retenedor),helperText:(x=(h=(g=t==null?void 0:t.retenciones)==null?void 0:g[r])==null?void 0:h.id_agente_retenedor)==null?void 0:x.message},disableStyle:!0,enableFirst:!0,value:o,size:"small",fullWidth:!0,onChange:(n,i)=>{const C=m;s(i),i?(C[r]=a(l({},m[r]),{agente:i.agente,dv:i.dv,id_agente_retenedor:i.id,ruc:i.ruc}),v(a(l({},d),{retenciones:C}))):(C[r]=a(l({},m[r]),{agente:"",dv:"",id_agente_retenedor:0,ruc:""}),v(a(l({},d),{retenciones:C})))},groupBy:n=>n.tipo,getOptionLabel:n=>n.agente,renderGroup:n=>p("div",{children:[p("div",{className:_.title,children:["Categor\xEDa: ",c("span",{children:n.group})]}),n.children]},n.key),renderOption:(n,i)=>b.exports.createElement("li",a(l({},n),{key:i.id}),p("div",{className:_.flexColumn,children:[c("span",{children:i.agente}),p("div",{className:_.flexRow,children:[p("span",{className:_.subtitle,children:["RUC: ",i.ruc]}),p("span",{className:_.subtitle,children:["DV: ",i.dv]})]})]}))})},rt=()=>{const{form:r}=b.exports.useContext(w),{errors:e,formState:t,setFormState:d,onInputChange:v}=r,{retenciones:m}=t;return p("div",{className:`${R.paper} ${R.item}`,children:[c("span",{className:R.titleItem,children:"Retenciones"}),m.map((o,s)=>{var u,f,g,h,x;return p("div",{className:B.field,children:[c(G,{i:s}),c(z,{label:"Total de retenciones",name:`retenciones.${s}.valor`,size:"small",fullWidth:!0,required:!0,error:!!((f=(u=e==null?void 0:e.retenciones)==null?void 0:u[s])!=null&&f.valor),helperText:(x=(h=(g=e==null?void 0:e.retenciones)==null?void 0:g[s])==null?void 0:h.valor)==null?void 0:x.message,onChange:v,InputProps:{inputComponent:E}})]},s)}),p("span",{className:R.titleItem,children:["total de retenciones"," ",D(m.map(o=>Number(o.valor||0)).reduce((o,s)=>o+s))]}),c(y,{variant:"contained",color:"primary",onClick:()=>{const o=m;o.push({agente:"",dv:"",id:0,id_agente_retenedor:0,id_formulario430:0,ruc:"",valor:""}),d(a(l({},t),{retenciones:o}))},children:"Agregar retenci\xF3n"}),m.length>1&&c(y,{variant:"contained",color:"error",onClick:()=>{const o=m;o.pop(),d(a(l({},t),{retenciones:o}))},children:"Remover \xFAltima retenci\xF3n"})]})};export{rt as default};
