var H=Object.defineProperty,G=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var D=(o,t,n)=>t in o?H(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n,p=(o,t)=>{for(var n in t||(t={}))Y.call(t,n)&&D(o,n,t[n]);if(A)for(var n of A(t))K.call(t,n)&&D(o,n,t[n]);return o},h=(o,t)=>G(o,J(t));import{s as X,r as d,aA as f,a as e,j as s,B as Z,ax as I,aS as ee,n as te,F as x,aT as re,aI as oe}from"./index.js";import{c as ne,i as ae,r as se}from"./jsx-runtime_commonjs-proxy.js";import{B as ie}from"./Badge.js";import{D as M,B as le,a as ce}from"./DatePicker.js";import{d as me,s as de}from"./Navbar.js";import{d as ue}from"./Add.js";import{d as R}from"./string.helper.js";import{T as g}from"./Typography.js";import{S as T}from"./Stack.js";import{D as w}from"./Divider.js";import{T as _}from"./TextInput.js";import{T as pe}from"./TextEditor.js";import{c as k,b as S,d as he,h as ge,g as fe,o as xe,u as L,a as ve,C as ye,F as _e}from"./array.js";import{S as be}from"./SelectHookForm.js";import{d as W,a as j}from"./CheckBoxOutlineBlank.js";import{A as U}from"./AutocompleteServer.js";import{C as Q}from"./Checkbox.js";import{A as Ce}from"./Alert.js";import{L as Fe,c as Ne}from"./LoadingButton.js";import{u as Se,S as Ie,d as Te}from"./FilterList.js";import{d as Me}from"./Search.js";import{P as we}from"./TextField.js";import{B as O}from"./Button.js";import{B as Oe}from"./BootstrapTooltip.js";import{B as Be}from"./Box.js";import{I as $}from"./InputAdornment.js";import{I as Pe}from"./IconButton.js";import{P as Ae}from"./Pagination.js";import{C as De}from"./ErrorIcon.js";import{L as ke}from"./LinearProgress.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./isHostComponent.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./Grow.js";import"./Close2.js";import"./MobileDatePicker.js";import"./MonthPicker.js";import"./usePickerState.js";import"./Grid.js";import"./ButtonBase.js";import"./Backdrop.js";import"./index7.js";import"./Paper.js";import"./Modal2.js";import"./ContentProvider.js";import"./useModal.js";import"./App.module.js";import"./regex.js";import"./FormHelperText.js";import"./upperFirst.js";import"./MenuItem.js";import"./List.js";import"./listItemIconClasses.js";import"./listItemTextClasses.js";import"./useFetch.js";import"./useHttpService.js";import"./Autocomplete.js";import"./Close.js";import"./Chip.js";import"./react-is.production.min.js";import"./GlobalStyles.js";import"./StyledGridOverlay.js";var B={},$e=ae.exports;Object.defineProperty(B,"__esModule",{value:!0});var P=B.default=void 0,Ee=$e(ne),qe=se,ze=(0,Ee.default)((0,qe.jsx)("path",{d:"m2.53 19.65 1.34.56v-9.03l-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61zm19.5-3.7L17.07 3.98c-.31-.75-1.04-1.21-1.81-1.23-.26 0-.53.04-.79.15L7.1 5.95c-.75.31-1.21 1.03-1.23 1.8-.01.27.04.54.15.8l4.96 11.97c.31.76 1.05 1.22 1.83 1.23.26 0 .52-.05.77-.15l7.36-3.05c1.02-.42 1.51-1.59 1.09-2.6zM7.88 8.75c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2 11c0 1.1.9 2 2 2h1.45l-3.45-8.34v6.34z"}),"Style");P=B.default=ze;const Re=X(ie)(({theme:o})=>({"& .MuiBadge-badge":{right:-1,top:7,border:`1.5px solid ${o.palette.background.paper}`,padding:"0 4px"}})),Le="_main_1yowg_1",We="_sidebar_1yowg_9",je="_pagination_1yowg_22",Ue="_searchInput_1yowg_35",Qe="_element_1yowg_42",Ve="_active_1yowg_63",He="_title_1yowg_67",Ge="_fechas_1yowg_71",Je="_fecha_1yowg_71",Ye="_subtitle_1yowg_91",Ke="_content_1yowg_109",Xe="_appbar_1yowg_117",Ze="_backButton_1yowg_130",et="_titulo_1yowg_137",tt="_parrafo_1yowg_158";var m={main:Le,sidebar:We,pagination:je,searchInput:Ue,element:Qe,active:Ve,title:He,fechas:Ge,fecha:Je,subtitle:Ye,content:Ke,appbar:Xe,backButton:Ze,titulo:et,parrafo:tt};const V=()=>{const o=d.exports.useContext(f),{nota:t,setNota:n,showForm:r,setShowForm:l}=o;return e("div",{className:m.appbar,children:s("div",{className:m.backButton,onClick:()=>{l(t?!1:!r),n(null)},children:[e(Z,{component:!r&&!t?ue:me}),e("span",{children:t||r?"Atr\xE1s":"Agregar"})]})})},E=()=>{const{isPhoneScreen:o,nota:t}=d.exports.useContext(f);return s(g,{className:m.content,component:"div",children:[!o&&e(V,{}),e("span",{className:m.titulo,children:t==null?void 0:t.titulo}),s("span",{className:m.fecha,children:[e("strong",{children:"Creada por"}),": ",t==null?void 0:t.nombre," ",t==null?void 0:t.apellido]}),(t==null?void 0:t.persona_encargada)&&s("span",{className:m.fecha,children:[e("strong",{children:"Persona con qui\xE9n se habl\xF3"}),": ",t==null?void 0:t.persona_encargada]}),s(T,{direction:{xs:"column",md:"row"},justifyContent:"space-between",children:[s("span",{className:m.fecha,children:[e("strong",{children:"Mes"}),": ",I(t==null?void 0:t.mes,"MMMM/yyyy")]}),s("span",{className:m.fecha,children:[e("strong",{children:"Fecha de creaci\xF3n"}),":"," ",I(t==null?void 0:t.fecha,"dd/MM/yyyy hh:mm aaaa")]})]}),e(w,{}),e("div",{className:m.parrafo,children:R(t==null?void 0:t.notas)})]})},rt=k().shape({titulo:S().trim().notRequired().nullable(!0),negocio:k().shape({id:he().typeError("Favor ingresar un n\xFAmero").min(1,"Favor ingresar el negocio").integer("Favor ingresar el negocio").positive("Favor ingresar el negocio").required("Favor ingresar el negocio")}).typeError("Favor ingresar el negocio").required("Favor ingresar el negocio"),tipo:S().trim().required("Favor ingresar el tipo de la nota"),persona_encargada:S().trim().notRequired().nullable(!0),notas:S().trim().required("Favor ingresar la nota"),mes:ge().typeError("Favor ingresar el mes").transform(ee).required("Favor ingresar el mes")}),ot=o=>{const{negocioNota:t,pagination:n}=d.exports.useContext(f),{refresh:r}=n,l=te(),[,i]=l,a=fe({mode:"onSubmit",resolver:xe(rt),defaultValues:{mes:"",notas:"",persona_encargada:"",titulo:"",tipo:"",negocio:null}}),{reset:u,getValues:c}=a;return d.exports.useEffect(()=>{(()=>{u(p(p({},c()),t))})()},[t]),{onSubmit:v=>{var b;(b=o.current)==null||b.scrollTo(0,0),i("/admin/notas",{method:"POST",data:v}).then(C=>{C.data&&!C.error&&(r(),u(h(p({},v),{titulo:"",notas:"",persona_encargada:""})))})},fetcherSubmit:l,form:a}},nt=()=>{var i;const{formState:o,control:t,setValue:n}=L(),{errors:r}=o,l=ve({control:t,name:"mes"});return s(T,{direction:{xs:"column",md:"row"},spacing:1,children:[e(be,{label:"Tipo de nota",disableBox:!0,name:"tipo",values:["CONTRATO","DECIMO","F03","ITBMS","LIQUIDACION","SIPE"],options:["CONTRATO","DECIMO","F03","ITBMS","LIQUIDACION","SIPE"],required:!0,error:!!r.tipo,helperText:(i=r.tipo)==null?void 0:i.message,size:"small"}),e(M,{label:"Mes de la nota",views:["month","year"],inputFormat:"MM/yyyy",value:l,onChange:a=>n("mes",a),renderInput:a=>{var u;return e(_,h(p({size:"small",fullWidth:!0},a),{error:!!r.mes,helperText:(u=r.mes)==null?void 0:u.message}))}})]})},at=()=>{const{control:o}=L();return e(ye,{name:"negocio",control:o,render:({field:t,fieldState:n})=>{const{error:r}=n,{onChange:l}=t;return e(U,h(p({},t),{ref:null,inputProps:{label:"Negocio",margin:"dense",required:!0,error:!!r,helperText:r==null?void 0:r.message},disableStyle:!0,onChange:(i,a)=>l(a),isOptionEqualToValue:(i,a)=>i.id===a.id,urlFetch:"/admin/negocios/autocomplete",size:"small",getOptionLabel:i=>`${i.tipo||""} ${i.nombre_negocio||""} - ${i.id}`,renderOption:(i,a,{selected:u})=>s("li",h(p({},i),{style:{textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[e(Q,{icon:e(W,{}),checkedIcon:e(j,{}),checked:u,size:"small"}),s("div",{style:{display:"flex",flexDirection:"column",textTransform:"uppercase"},children:[s(g,{variant:"body1",fontWeight:"bold",children:[a.tipo," ",a.nombre_negocio]}),a.ruc&&a.ruc!==""?e(g,{variant:"body2",children:a.ruc}):e(x,{}),a.ruta&&a.ruta!==""?s(g,{variant:"body2",children:["RUTA: ",a.ruta]}):e(x,{})]})]}))}))}})},q=()=>{var b,C;const o=d.exports.useRef(null),{onSubmit:t,fetcherSubmit:n,form:r}=ot(o),[l,,i,a]=n,{register:u,handleSubmit:c,formState:N}=r,{errors:v}=N;return e(_e,h(p({},r),{children:s(T,{spacing:1,flexGrow:1,direction:"column",padding:"0 10px 10px 10px",component:"form",sx:{overflowY:"auto"},ref:o,children:[e(g,{variant:"h4",textAlign:"center",children:"Formulario de notas"}),(i||a)&&e(Ce,{variant:"outlined",severity:i?"success":"error",children:(i==null?void 0:i.message)||(a==null?void 0:a.message)}),e(at,{}),e(nt,{}),s(T,{spacing:1,direction:{xs:"column",md:"row"},children:[e(_,h(p({label:"T\xEDtulo",size:"small",fullWidth:!0},u("titulo")),{error:!!v.titulo,helperText:(b=v.titulo)==null?void 0:b.message})),e(_,h(p({label:"Persona con quien se habl\xF3",size:"small",fullWidth:!0},u("persona_encargada")),{error:!!v.persona_encargada,helperText:(C=v.persona_encargada)==null?void 0:C.message}))]}),e(pe,{name:"notas",height:300}),e(Fe,{loading:l,loadingIndicator:"Enviando...",variant:"outlined",onClick:c(t),children:"Guardar"})]})}))},F=d.exports.createContext({}),st=({children:o})=>{const t=Se(),{pagination:n}=d.exports.useContext(f),{params:r}=n,[l,i]=d.exports.useState({mes:(r==null?void 0:r.mes)||null,fecha:(r==null?void 0:r.fecha)||null,negocio:(r==null?void 0:r.negocio)||null,tipo:(r==null?void 0:r.tipo)||null});return e(F.Provider,{value:{menu:t,filtros:l,setFiltros:a=>i(a)},children:o})},it="_menu_19nmr_1",lt="_item_19nmr_8",ct="_action_19nmr_15";var y={menu:it,item:lt,action:ct};const mt=()=>{const{filtros:o,setFiltros:t}=d.exports.useContext(F);return e(Ie,{label:"Tipo de nota",disableBox:!0,value:(o==null?void 0:o.tipo)||"",onChange:n=>t(h(p({},o),{tipo:n.target.value})),values:["CONTRATO","DECIMO","F03","ITBMS","LIQUIDACION","SIPE"],options:["CONTRATO","DECIMO","F03","ITBMS","LIQUIDACION","SIPE"],size:"small"})},dt=()=>{const{filtros:o,setFiltros:t}=d.exports.useContext(F);return e(U,{ref:null,fullWidth:!0,inputProps:{label:"Negocio",margin:"dense",fullWidth:!0},disableStyle:!0,value:o!=null&&o.negocio?JSON.parse(re(o==null?void 0:o.negocio)):null,onChange:(n,r)=>t(h(p({},o),{negocio:oe(JSON.stringify(r))})),isOptionEqualToValue:(n,r)=>n.id===r.id,urlFetch:"/admin/negocios/autocomplete",size:"small",getOptionLabel:n=>`${n.tipo||""} ${n.nombre_negocio||""} - ${n.id}`,renderOption:(n,r,{selected:l})=>s("li",h(p({},n),{style:{textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[e(Q,{icon:e(W,{}),checkedIcon:e(j,{}),checked:l,size:"small"}),s("div",{style:{display:"flex",flexDirection:"column",textTransform:"uppercase"},children:[s(g,{variant:"body1",fontWeight:"bold",children:[r.tipo," ",r.nombre_negocio]}),r.ruc&&r.ruc!==""?e(g,{variant:"body2",children:r.ruc}):e(x,{}),r.ruta&&r.ruta!==""?s(g,{variant:"body2",children:["RUTA: ",r.ruta]}):e(x,{})]})]}))})},ut=()=>{const{menu:o,filtros:t,setFiltros:n}=d.exports.useContext(F),{pagination:r}=d.exports.useContext(f),{setParams:l}=r,{anchorEl:i,handleClose:a,open:u}=o;return e(we,{open:u,anchorEl:i,onClose:a,anchorOrigin:{vertical:"bottom",horizontal:"left"},children:s("div",{className:y.menu,children:[e("div",{className:y.item,children:e(M,{label:"Mes de la nota",views:["month","year"],inputFormat:"MM/yyyy",value:t.mes,onChange:c=>n(h(p({},t),{mes:c})),renderInput:c=>e(_,p({size:"small",fullWidth:!0},c))})}),e("div",{className:y.item,children:e(M,{label:"Fecha de creaci\xF3n",value:t.fecha,inputFormat:"dd/MM/yyyy",onChange:c=>n(h(p({},t),{fecha:c})),renderInput:c=>e(_,p({size:"small",fullWidth:!0},c))})}),e("div",{className:y.item,children:e(mt,{})}),e("div",{className:y.item,children:e(dt,{})}),s("div",{className:y.action,children:[e(O,{variant:"outlined",color:"inherit",onClick:()=>a(),children:"Cerrar"}),e(O,{variant:"outlined",color:"primary",onClick:()=>{l(t),a()},children:"Filtrar"})]})]})})},pt=()=>{const{menu:o}=d.exports.useContext(F),{pagination:t}=d.exports.useContext(f),{search:n,sendSearch:r}=t,{handleClick:l}=o,[i,a]=d.exports.useState(n),u=c=>{c.preventDefault();const N=Object.fromEntries(new FormData(c.currentTarget));r(N.q)};return s("form",{className:m.searchInput,onSubmit:u,children:[e(_,{variant:"standard",type:"text",name:"q",value:i,placeholder:"Buscar...",fullWidth:!0,size:"small",onChange:c=>a(c.target.value),InputProps:{endAdornment:s(Be,{display:"flex",alignItems:"center",children:[e($,{position:"end",children:e(Me,{})}),e($,{position:"end",children:e(Oe,{title:"Filtros",placement:"top",children:e(Pe,{size:"small",onClick:l,children:e(Te,{})})})})]})}}),e(ut,{})]})},ht=()=>{const{pagination:o}=d.exports.useContext(f),{fetcher:t,page:n,setPage:r}=o,[,,l]=t;return!l||l&&!l.paginas?e(x,{}):e("div",{className:m.pagination,children:e(Ae,{color:"primary",count:l==null?void 0:l.paginas,page:n,onChange:(i,a)=>r(a)})})},z=()=>{var u;const{pagination:o,nota:t,setNota:n}=d.exports.useContext(f),{fetcher:r}=o,[l,,i,a]=r;return s("div",{className:m.sidebar,children:[s("div",{children:[e(st,{children:e(pt,{})}),l&&e(ke,{}),a&&e(De,{label:a.message}),e("ul",{children:(u=i==null?void 0:i.resultados)==null?void 0:u.map(c=>s(g,{component:"li",className:`${m.element} ${(t==null?void 0:t.id)===c.id&&m.active}`,onClick:()=>n(c),children:[e("span",{className:m.title,children:c.titulo}),e("div",{className:m.subtitle,children:R(c.notas)}),s("div",{className:m.fechas,children:[e("span",{className:m.fecha,children:I(c.mes,"MM/yyyy")}),e("span",{className:m.fecha,children:I(c.fecha,"dd/MM/yyyy HH:mm aaaa")})]})]},c.id))})]}),e(ht,{})]})},gt=()=>{const{isPhoneScreen:o,nota:t,showForm:n}=d.exports.useContext(f);return e("section",{className:m.main,children:o?s(x,{children:[e(V,{}),!t&&!n&&e(z,{}),n&&e(q,{}),t&&!n&&e(E,{})]}):s(x,{children:[e(z,{}),!t&&e(q,{}),t&&e(E,{})]})})},ft=()=>{const{modalNotas:o,isPhoneScreen:t}=d.exports.useContext(f),[n,r]=o;return e(x,{children:s(le,{open:n,onClose:()=>r(!1),maxWidth:"xl",fullWidth:!0,fullScreen:t,children:[e(ce,{onClose:()=>r(!1),children:s(g,{textTransform:"uppercase",display:"flex",flexDirection:"row",gap:1,alignItems:"center",children:[e(P,{}),"Notas"]})}),e(w,{}),e(gt,{}),e(w,{}),e(Ne,{children:e(O,{variant:"outlined",color:"inherit",onClick:()=>r(!1),children:"Cerrar"})})]})})},Or=()=>{const{modalNotas:o}=d.exports.useContext(f),[,t]=o;return s(x,{children:[s(g,{className:de.buttonIcon,onClick:()=>t(!0),variant:"body2",children:[e("span",{children:"Notas"})," ",e(Re,{badgeContent:0,color:"error",max:99,children:e(P,{})})]}),e(ft,{})]})};export{Or as default};
