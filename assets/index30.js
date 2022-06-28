var D=Object.defineProperty,E=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var $=(t,r,o)=>r in t?D(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,C=(t,r)=>{for(var o in r||(r={}))R.call(r,o)&&$(t,o,r[o]);if(j)for(var o of j(r))O.call(r,o)&&$(t,o,r[o]);return t},w=(t,r)=>E(t,L(r));import{a as e,r as l,aD as H,F as k,j as f,ax as M,b as B,ak as V,z as G}from"./index.js";import{L as F}from"./Loader.js";import{C as W}from"./ErrorIcon.js";import{S as q,a as J}from"./StyledCheckboxInherit.js";import{d as K}from"./Edit.js";import{I as y}from"./IconButton.js";import{C as I}from"./ChipState.js";import{f as Q}from"./string.helper.js";import{u as A}from"./useFetch.js";import{d as U,a as X}from"./SkipNextOutlined.js";import{P as Y}from"./Pagination.js";import{T as Z}from"./TextInput.js";import{d as ee}from"./Search.js";import{d as oe}from"./Close2.js";import{F as te}from"./Backdrop.js";import{H as re}from"./HeaderTitle.js";import{g as se,o as ne}from"./array.js";import{_ as ae}from"./useAsync.js";import ie from"./Modal.js";import{u as ce}from"./useHttpService.js";import{s as le}from"./facturacionSchema.js";import{T as z}from"./Typography.js";import{A as de}from"./Alert.js";import{d as me}from"./PointOfSale.js";import{d as pe}from"./Print.js";import ue from"./CustomSpeedDial.js";import"./BootstrapTooltip.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import{B as he}from"./BackgroundLoader.js";import"./SelectedCard.js";import{u as fe}from"./useHandlePrint.js";import{B as _e}from"./Box.js";import"./Grid.js";import"./StyledGridOverlay.js";import"./Checkbox.js";import"./TextField.js";import"./useControlled.js";import"./react-is.production.min.js";import"./Modal2.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./GlobalStyles.js";import"./ButtonBase.js";import"./useIsFocusVisible.js";import"./jsx-runtime_commonjs-proxy.js";import"./Error.js";import"./Chip.js";import"./regex.js";import"./Divider.js";import"./upperFirst.js";import"./ModalTransition.js";import"./DialogContent.js";import"./LoadingButton.js";import"./Button.js";import"./Close.js";import"./Assignment.js";import"./FabButtonAction.js";import"./AssignmentRounded.js";import"./Tooltip.js";import"./Popper.js";import"./appendOwnerState.js";import"./Stack.js";import"./useModal.js";import"./index15.js";const ge="_container_1ejrf_1",xe="_pagination_1ejrf_7",be="_response_1ejrf_14",Ce="_table_1ejrf_19",Se="_header_1ejrf_24",ve="_row_1ejrf_39",Pe="_column_1ejrf_39",ye="_selected_1ejrf_51",Ne="_checkboxColumn_1ejrf_55",ke="_columnCenter_1ejrf_60",Te="_removeSpacing_1ejrf_64",we="_message_1ejrf_69";var p={container:ge,pagination:xe,response:be,table:Ce,header:Se,row:ve,column:Pe,selected:ye,checkboxColumn:Ne,columnCenter:ke,removeSpacing:Te,message:we};const Fe=()=>e("tbody",{children:e("tr",{children:e("td",{className:p.loader,colSpan:8,children:e(F,{margin:20})})})}),_=l.exports.createContext({}),Ae=({children:t})=>{const r=H("/admin/proformas");return e(_.Provider,{value:{pagination:r},children:t})},je=()=>{const{pagination:t}=l.exports.useContext(_),{fetcher:r}=t,[,,,o]=r;return e("tbody",{children:e("tr",{children:e("td",{className:p.message,colSpan:8,children:e(W,{label:o==null?void 0:o.message})})})})},T=l.exports.createContext({}),$e=({children:t})=>{const[r,o]=l.exports.useState(null);return e(T.Provider,{value:{proforma:r,setProforma:o},children:t})},ze=t=>{const{setProforma:r}=l.exports.useContext(T);return e(k,{children:e(y,{className:p.removeSpacing,color:"primary",size:"small",disableRipple:!0,onClick:()=>r(t),children:e(K,{})})})},Be=()=>{const{pagination:t}=l.exports.useContext(_),{fetcher:r}=t,[,,o,,a]=r,{send:s,isLoading:i}=A();return{handleCheck:async({id:n,name:m})=>{if((await s({url:`/admin/ruta-proformas/${n}/${m}`,method:"POST"})).status===201){const v=o.resultados.findIndex(g=>g.id===n),u=[...o.resultados];u[v][m]=!Boolean(Number(u[v][m])),a({paginas:o.paginas,resultados:[...u]})}},isLoading:i}},Ie=({id:t,anulada:r})=>{const{handleCheck:o,isLoading:a}=Be();return e("td",{className:p.column,children:e(I,{label:Boolean(Number(r))?"NO":"SI",color:Boolean(Number(r))?"error":"success",loading:a,onClick:()=>o({id:t,name:"anulada"})})})},De=()=>{const{pagination:t}=l.exports.useContext(_),{fetcher:r,selected:o,setSelected:a}=t,[s,,i,c]=r;return!s&&!i&&c?e(je,{}):e("tbody",{children:i==null?void 0:i.resultados.map(n=>f("tr",{className:`${p.row} ${o.find(m=>m.id===n.id)?p.selected:""}`,children:[e("td",{className:p.column,children:e(q,{size:"small",disableRipple:!0,checked:!!o.find(m=>m.id===n.id),onChange:m=>{m.target.checked?a([...o,n]):a(o.filter(h=>h.id!==n.id))}})}),e("td",{className:`${p.column} ${p.columnCenter}`,children:e(ze,C({},n))}),f("td",{className:p.column,children:[n.tipo_only," ",n.nombre_only]}),e("td",{className:p.column,children:n.ruc}),e("td",{className:p.column,children:n.ruta_iniciales}),e("td",{className:p.column,children:M(n.mes_correspondiente,"dd/MM/yyyy hh:mm aaaa")}),e("td",{className:p.column,children:Q(n.total)}),e("td",{className:p.column,children:e(I,{label:n.fecha_impresion?"SI":"NO",color:n.fecha_impresion?"success":"error"})}),e(Ie,C({},n))]},n.id))})},Ee=()=>{const{pagination:t}=l.exports.useContext(_),{fetcher:r,selected:o,setSelected:a}=t,[,,s]=r;return e("th",{className:p.checkboxColumn,children:e(J,{size:"small",disableRipple:!0,color:"secondary",checked:!!(s!=null&&s.resultados.every(i=>!!o.find(c=>c.id===i.id))),indeterminate:!!(s!=null&&s.resultados.some(i=>!!o.find(c=>c.id===i.id)))&&!(s!=null&&s.resultados.every(i=>!!o.find(c=>c.id===i.id))),onChange:i=>{if(i.target.checked&&s){const c=s.resultados.filter(n=>!o.find(m=>n.id===m.id));a([...o,...c])}else a([])}})})},Le=()=>e("thead",{className:p.header,children:f("tr",{children:[e(Ee,{}),e("th",{}),e("th",{children:"Negocio"}),e("th",{children:"Ruc"}),e("th",{children:"Ruta"}),e("th",{children:"Fecha"}),e("th",{children:"Total"}),e("th",{children:"Impresa"}),e("th",{children:"Vigente"})]})}),Re=()=>{const{pagination:t}=l.exports.useContext(_),{fetcher:r,page:o,setPage:a}=t,[,,s]=r;return f("div",{className:p.pagination,children:[e(y,{size:"small",onClick:()=>a(o-10),disabled:o<=10,children:e(U,{})}),e(Y,{color:"primary",count:s==null?void 0:s.paginas,page:o,onChange:(i,c)=>a(c)}),e(y,{size:"small",onClick:()=>a(o+10),disabled:!!(s&&s.paginas-t.page<10),children:e(X,{})})]})},Oe="_toolbar_1pm2e_1",He="_title_1pm2e_7",Me="_divToolbar_1pm2e_13",Ve="_child_1pm2e_20",Ge="_formSearch_1pm2e_24",We="_searchAdorment_1pm2e_28",qe="_banner_1pm2e_34";var P={toolbar:Oe,title:He,divToolbar:Me,child:Ve,formSearch:Ge,searchAdorment:We,banner:qe};const Je=()=>{const t=l.exports.useRef(null),{pagination:r}=l.exports.useContext(_),{search:o,sendSearch:a}=r,[s,i]=l.exports.useState(o);return e("form",{onSubmit:n=>{n.preventDefault(),a(s)},className:P.formSearch,children:e(Z,{label:"Buscar...",size:"small",fullWidth:!0,autoFocus:!0,value:s,onChange:n=>i(n.target.value),inputRef:t,helperText:"Por raz\xF3n social, ruc, nombre del representante, c\xE9dula o pasaporte",InputProps:{endAdornment:f("div",{className:P.searchAdorment,children:[e(y,{size:"small",children:e(ee,{})}),s!==""&&e(y,{size:"small",onClick:()=>{var n;i(""),a(""),(n=t==null?void 0:t.current)==null||n.focus()},children:e(oe,{})})]})}})})},Ke=()=>{const{pagination:t}=l.exports.useContext(_),{selected:r}=t,o=l.exports.useMemo(()=>r.length,[r]);return f(k,{children:[f("div",{className:P.toolbar,children:[e("span",{className:P.title,children:"Proformas realizadas"}),e("div",{className:P.divToolbar,children:e(Je,{})})]}),e(te,{in:o!==0,unmountOnExit:!0,children:f("div",{className:P.banner,children:[o," fila",o>1?"s":""," seleccionada",o>1?"s":""]})})]})},Qe=()=>{const{pagination:t}=l.exports.useContext(_),{fetcher:r}=t,[o,,a,s]=r;return f("div",{className:p.container,children:[f("div",{className:p.response,children:[e(Ke,{}),f("table",{className:p.table,children:[e(Le,{}),o?e(Fe,{}):e(De,{})]})]}),!o&&a&&!s&&e(Re,{})]})},Ue=()=>{const{proforma:t}=l.exports.useContext(T),{isLoading:r,send:o,response:a,reset:s}=A(),{pagination:i}=l.exports.useContext(_),{setSelected:c,fetcher:n}=i,[,,m,,h]=n;return{isLoading:r,response:a,onSubmit:async u=>{s();const g=await o({url:`/admin/proformas/${t==null?void 0:t.id}/edit`,method:"POST",data:u});if(g.status===201&&g.data){const x=m.resultados,b=x.findIndex(S=>S.id===(t==null?void 0:t.id));x[b]=w(C(C({},x[b]),u),{otros:u.otros[0].texto?u.otros:[],total:g.data.total}),h({paginas:m.paginas,resultados:[...x]}),c([])}},reset:s}},Xe=l.exports.lazy(()=>B(()=>import("./FormModalEdit.js"),["assets/FormModalEdit.js","assets/index.js","assets/index5.css","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/appendOwnerState.js","assets/isHostComponent.js","assets/Grow.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/Paper.js","assets/IconButton.js","assets/ButtonBase.js","assets/Error.js","assets/DialogContent.js","assets/LoadingButton.js","assets/Button.js","assets/SelectedCard.js","assets/array.js","assets/upperFirst.js"])),Ye=()=>{var u,g,x;const{proforma:t,setProforma:r}=l.exports.useContext(T),o=ce(),a=se({resolver:ne(le),mode:"all"}),{isLoading:s,onSubmit:i,response:c,reset:n}=Ue(),{loading:m,value:h,error:v}=ae(async()=>{if(t){const{id:b}=t,S=await o({url:`/admin/proformas/${b}`});if(S.status===201&&S.data){const d=S.data;a.reset({decimo:d.decimo,vacaciones:d.vacaciones,itbms:d.itbms,formulario_retencion_itbms:d.formulario_retencion_itbms,formulario_03:d.formulario_03,sipe:d.sipe,seguro_social:d.seguro_social,seguro_social2:d.seguro_social2,servicio_contabilidad:d.servicio_contabilidad,otro_costo:d.otro_costo,itbms_contabilidad:d.itbms_contabilidad,otros_text:d.otros_text,notas:d.notas,otros:d.otros&&d.otros.length>0?d.otros.map(N=>({texto:N.texto,valor:N.valor})):[{texto:void 0,valor:void 0}]})}return S}else return},[t]);return e(k,{children:f(ie,{fullScreen:!0,state:!!t,setHide:()=>{n(),r(null)},title:"Formulario de edici\xF3n de Proforma",cancelBotton:{text:"Cerrar",actionFunction:()=>{n(),r(null)}},actionButton:{text:"Guardar",actionFunction:a.handleSubmit(i),isLoading:s},children:[m&&e(F,{}),!m&&h&&h.status!==201&&h.error&&e(z,{children:h.error.message}),v&&e(z,{children:"Error al consultar los datos a modificar"}),c&&e(de,{severity:c.status===201?"success":"error",variant:"outlined",style:{marginBottom:10},children:(x=(u=c.data)==null?void 0:u.message)!=null?x:(g=c.error)==null?void 0:g.message}),!m&&h&&h.status===201&&h.data&&e(l.exports.Suspense,{fallback:e(F,{}),children:e(Xe,{form:a,data:h.data})})]})})},Ze=()=>{const{pagination:t}=l.exports.useContext(_),{selected:r,setSelected:o,fetcher:a}=t,[,,s,,i]=a,{isLoading:c,send:n,reset:m,response:h}=A();return{handleChecker:async(u,g)=>{m();const x=await n({url:"/admin/proformas/check",method:"POST",data:C({proformas:r==null?void 0:r.map(b=>({id:b.id})),type:u},g)});if(x.status===201&&x.data){const b=s.resultados;for(const[S,[,d]]of Object.entries(Object.entries(s.resultados)))r.map(N=>N.id).includes(d.id)&&(b[Number(S)]=w(C(C({},d),g),{fecha_impresion:u==="print"?new Date(Date.now()):d.fecha_impresion,fecha_anulacion:u==="anular"?new Date(Date.now()):d.fecha_anulacion,cancelado:u==="pagar"?new Date(Date.now()):d.cancelado}));i({paginas:s.paginas,resultados:[...b]}),o([])}},isLoading:c,response:h,reset:m}},eo=l.exports.lazy(()=>B(()=>import("./ProformaPrintView.js"),["assets/ProformaPrintView.js","assets/date.helper.js","assets/index.js","assets/index5.css","assets/index13.js","assets/string.helper.js","assets/regex.js"])),oo=()=>{const t=V(),{pagination:r}=l.exports.useContext(_),{selected:o}=r,{handleChecker:a,isLoading:s}=Ze(),i=fe({pageStyle:"@page { margin: 0 !important; size: letter; }",onAfterPrint:async()=>await a("print"),title:"Proformas"});return f(k,{children:[e(he,{open:s||i.printing}),e(ue,{titles:["Realizar proforma",...o.length>0?["Imprimir proformas"]:[]],icons:[me,...o.length>0?[pe]:[]],onPresses:[()=>t("/negocios?f=1"),...o.length>0?[()=>i.handlePrint()]:[]]}),e("div",{style:{display:"none"},children:e("div",{ref:i.elementRef,children:o.length>0&&o.sort((c,n)=>(c.recorrido||0)-(n.recorrido||0)).map(c=>e(l.exports.Suspense,{fallback:e("div",{}),children:e(eo,C({},c))},c.id))})})]})},bt=()=>e(Ae,{children:f($e,{children:[e(re,{message:"Facturaci\xF3n - proformas"}),e(_e,{style:{marginTop:10},children:f(l.exports.Suspense,{fallback:e(G,{}),children:[e(Qe,{}),e(Ye,{}),e(oo,{})]})})]})});export{bt as default};
