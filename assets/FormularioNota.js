var O=Object.defineProperty,q=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var y=(t,r,a)=>r in t?O(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,m=(t,r)=>{for(var a in r||(r={}))_.call(r,a)&&y(t,a,r[a]);if(S)for(var a of S(r))N.call(r,a)&&y(t,a,r[a]);return t},c=(t,r)=>q(t,A(r));import{aT as D,r as x,ai as k,f as w,j as u,a as o,F as C}from"./index.js";import{T as F}from"./TextInput.js";import{T as M}from"./TextEditor.js";import{a as R,o as P,u as E,b as z,C as $,F as L}from"./yup.module.js";import{c as I,a as h,d as W,f as B}from"./array.js";import{S as V}from"./SelectHookForm.js";import{S as b}from"./Stack.js";import{D as j}from"./DatePicker.js";import{d as U,a as G}from"./CheckBoxOutlineBlank.js";import{A as Q}from"./AutocompleteServer.js";import{C as H}from"./Checkbox.js";import{T as f}from"./Typography.js";import{A as Y}from"./Alert.js";import{L as J}from"./LoadingButton.js";import"./TextField.js";import"./useFormControl.js";import"./useControlled.js";import"./formControlState.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./Fade.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";import"./emotion-react.browser.esm.js";import"./index11.js";import"./upperFirst.js";import"./Box.js";import"./MenuItem.js";import"./ButtonBase.js";import"./useIsFocusVisible.js";import"./listItemIconClasses.js";import"./Divider.js";import"./listItemTextClasses.js";import"./MobileDatePicker.js";import"./MonthPicker.js";import"./PureDateInput.js";import"./CalendarPicker.js";import"./IconButton.js";import"./Grid.js";import"./InputAdornment.js";import"./ModalTransition.js";import"./DialogContent.js";import"./DialogActions.js";import"./Button.js";import"./Popper.js";import"./jsx-runtime_commonjs-proxy.js";import"./useFetch.js";import"./useHttpService.js";import"./Autocomplete.js";import"./Close.js";import"./Chip.js";import"./CircularProgress.js";const K=I().shape({titulo:h().trim().notRequired().nullable(!0),negocio:I().shape({id:W().typeError("Favor ingresar un n\xFAmero").min(1,"Favor ingresar el negocio").integer("Favor ingresar el negocio").positive("Favor ingresar el negocio").required("Favor ingresar el negocio")}).typeError("Favor ingresar el negocio").required("Favor ingresar el negocio"),tipo:h().trim().required("Favor ingresar el tipo de la nota"),persona_encargada:h().trim().notRequired().nullable(!0),notas:h().trim().required("Favor ingresar la nota"),mes:B().typeError("Favor ingresar el mes").transform(D).required("Favor ingresar el mes")}),X=t=>{const{negocioNota:r,pagination:a}=x.exports.useContext(k),{refresh:n}=a,l=w(),[,i]=l,e=R({mode:"onSubmit",resolver:P(K),defaultValues:{mes:"",notas:"",persona_encargada:"",titulo:"",tipo:"",negocio:null}}),{reset:s,getValues:v}=e;return x.exports.useEffect(()=>{(()=>{s(m(m({},v()),r))})()},[r]),{onSubmit:p=>{var d;(d=t.current)==null||d.scrollTo(0,0),i("/admin/notas",{method:"POST",data:p}).then(g=>{g.data&&!g.error&&(n(),s(c(m({},p),{titulo:"",notas:"",persona_encargada:""})))})},fetcherSubmit:l,form:e}},Z=()=>{var i;const{formState:t,control:r,setValue:a}=E(),{errors:n}=t,l=z({control:r,name:"mes"});return u(b,{direction:{xs:"column",md:"row"},spacing:1,children:[o(V,{label:"Tipo de nota",disableBox:!0,name:"tipo",values:["CONTRATO","DECIMO","F03","ITBMS","LIQUIDACION","SIPE"],options:["CONTRATO","DECIMO","F03","ITBMS","LIQUIDACION","SIPE"],required:!0,error:!!n.tipo,helperText:(i=n.tipo)==null?void 0:i.message,size:"small"}),o(j,{label:"Mes de la nota",views:["month","year"],inputFormat:"MM/yyyy",value:l,onChange:e=>a("mes",e),renderInput:e=>{var s;return o(F,c(m({size:"small",fullWidth:!0},e),{error:!!n.mes,helperText:(s=n.mes)==null?void 0:s.message}))}})]})},ee=()=>{const{control:t}=E();return o($,{name:"negocio",control:t,render:({field:r,fieldState:a})=>{const{error:n}=a,{onChange:l}=r;return o(Q,c(m({},r),{ref:null,inputProps:{label:"Negocio",margin:"dense",required:!0,error:!!n,helperText:n==null?void 0:n.message},disableStyle:!0,onChange:(i,e)=>l(e),isOptionEqualToValue:(i,e)=>i.id===e.id,urlFetch:"/admin/negocios/autocomplete",size:"small",getOptionLabel:i=>`${i.tipo||""} ${i.nombre_negocio||""}`,renderOption:(i,e,{selected:s})=>x.exports.createElement("li",c(m({},i),{key:e.id,style:{textOverflow:"ellipsis",whiteSpace:"nowrap"}}),o(H,{icon:o(U,{}),checkedIcon:o(G,{}),checked:s,size:"small"}),u("div",{style:{display:"flex",flexDirection:"column",textTransform:"uppercase"},children:[u(f,{variant:"body1",fontWeight:"bold",children:[e.tipo," ",e.nombre_negocio]}),e.ruc&&e.ruc!==""?o(f,{variant:"body2",children:e.ruc}):o(C,{}),e.ruta&&e.ruta!==""?u(f,{variant:"body2",children:["RUTA: ",e.ruta]}):o(C,{})]}))}))}})},sr=()=>{var d,g;const t=x.exports.useRef(null),{onSubmit:r,fetcherSubmit:a,form:n}=X(t),[l,,i,e]=a,{register:s,handleSubmit:v,formState:T}=n,{errors:p}=T;return o(L,c(m({},n),{children:u(b,{spacing:1,flexGrow:1,direction:"column",padding:"0 10px 10px 10px",component:"form",sx:{overflowY:"auto"},ref:t,children:[o(f,{variant:"h4",textAlign:"center",children:"Formulario de notas"}),(i||e)&&o(Y,{variant:"outlined",severity:i?"success":"error",children:(i==null?void 0:i.message)||(e==null?void 0:e.message)}),o(ee,{}),o(Z,{}),u(b,{spacing:1,direction:{xs:"column",md:"row"},children:[o(F,c(m({label:"T\xEDtulo",size:"small",fullWidth:!0},s("titulo")),{error:!!p.titulo,helperText:(d=p.titulo)==null?void 0:d.message})),o(F,c(m({label:"Persona con quien se habl\xF3",size:"small",fullWidth:!0},s("persona_encargada")),{error:!!p.persona_encargada,helperText:(g=p.persona_encargada)==null?void 0:g.message}))]}),o(M,{name:"notas",height:300}),o(J,{loading:l,loadingIndicator:"Enviando...",variant:"outlined",onClick:v(r),children:"Guardar"})]})}))};export{sr as default};
