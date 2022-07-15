var E=Object.defineProperty,L=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var $=(t,r,o)=>r in t?E(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,C=(t,r)=>{for(var o in r||(r={}))D.call(r,o)&&$(t,o,r[o]);if(j)for(var o of j(r))O.call(r,o)&&$(t,o,r[o]);return t},T=(t,r)=>L(t,R(r));import{a as e,r as l,au as H,F as k,j as f,aw as M,b as B,a7 as V}from"./index.js";import{L as F}from"./Loader.js";import{C as G}from"./ErrorIcon.js";import{S as W}from"./StyledCheckbox.js";import{d as q}from"./Edit.js";import{I as y}from"./IconButton.js";import{C as I}from"./ChipState.js";import{f as J}from"./string.helper.js";import{u as A}from"./useFetch.js";import{S as K}from"./StyledCheckboxInherit.js";import{d as Q,a as U}from"./SkipNextOutlined.js";import{P as X}from"./Pagination.js";import{T as Y}from"./TextInput.js";import{d as Z}from"./Search.js";import{d as ee}from"./Close2.js";import{F as oe}from"./Fade.js";import{H as te}from"./HeaderTitle.js";import{a as re,o as se}from"./yup.module.js";import{_ as ne}from"./useAsync.js";import ae from"./Modal.js";import{u as ie}from"./useHttpService.js";import{s as ce}from"./facturacionSchema.js";import{T as z}from"./Typography.js";import{A as le}from"./Alert.js";import{d as de}from"./PointOfSale.js";import{d as me}from"./Print.js";import pe from"./CustomSpeedDial.js";import"./BootstrapTooltip.js";import"./SpeedDial.module.js";import{B as ue}from"./BackgroundLoader.js";import"./SelectedCard.js";import{u as he}from"./useHandlePrint.js";import{B as fe}from"./Box.js";import{C as _e}from"./CircularProgress.js";import"./Grid.js";import"./StyledGridOverlay.js";import"./Checkbox.js";import"./useFormControl.js";import"./ButtonBase.js";import"./emotion-react.browser.esm.js";import"./useIsFocusVisible.js";import"./useControlled.js";import"./createSvgIcon.js";import"./outlinedInputClasses.js";import"./jsx-runtime_commonjs-proxy.js";import"./CheckCircle.js";import"./Chip.js";import"./regex.js";import"./TextField.js";import"./formControlState.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./GlobalStyles.js";import"./Divider.js";import"./ModalTransition.js";import"./DialogContent.js";import"./DialogActions.js";import"./LoadingButton.js";import"./Button.js";import"./array.js";import"./upperFirst.js";import"./Close.js";import"./Assignment.js";import"./FabButtonAction.js";import"./AssignmentRounded.js";import"./Tooltip.js";import"./Popper.js";import"./Stack.js";import"./index23.js";const ge="_container_1ejrf_1",xe="_pagination_1ejrf_7",be="_response_1ejrf_14",Ce="_table_1ejrf_19",Se="_header_1ejrf_24",ve="_row_1ejrf_39",Pe="_column_1ejrf_39",ye="_selected_1ejrf_51",Ne="_checkboxColumn_1ejrf_55",ke="_columnCenter_1ejrf_60",we="_removeSpacing_1ejrf_64",Te="_message_1ejrf_69";var p={container:ge,pagination:xe,response:be,table:Ce,header:Se,row:ve,column:Pe,selected:ye,checkboxColumn:Ne,columnCenter:ke,removeSpacing:we,message:Te};const Fe=()=>e("tbody",{children:e("tr",{children:e("td",{className:p.loader,colSpan:8,children:e(F,{margin:20})})})}),_=l.exports.createContext({}),Ae=({children:t})=>{const r=H("/admin/proformas");return e(_.Provider,{value:{pagination:r},children:t})},je=()=>{const{pagination:t}=l.exports.useContext(_),{fetcher:r}=t,[,,,o]=r;return e("tbody",{children:e("tr",{children:e("td",{className:p.message,colSpan:8,children:e(G,{label:o==null?void 0:o.message})})})})},w=l.exports.createContext({}),$e=({children:t})=>{const[r,o]=l.exports.useState(null);return e(w.Provider,{value:{proforma:r,setProforma:o},children:t})},ze=t=>{const{setProforma:r}=l.exports.useContext(w);return e(k,{children:e(y,{className:p.removeSpacing,color:"primary",size:"small",disableRipple:!0,onClick:()=>r(t),children:e(q,{})})})},Be=()=>{const{pagination:t}=l.exports.useContext(_),{fetcher:r}=t,[,,o,,a]=r,{send:s,isLoading:i}=A();return{handleCheck:async({id:n,name:m})=>{if((await s({url:`/admin/ruta-proformas/${n}/${m}`,method:"POST"})).status===201){const v=o.resultados.findIndex(g=>g.id===n),u=[...o.resultados];u[v][m]=!Boolean(Number(u[v][m])),a({paginas:o.paginas,resultados:[...u]})}},isLoading:i}},Ie=({id:t,anulada:r})=>{const{handleCheck:o,isLoading:a}=Be();return e("td",{className:p.column,children:e(I,{label:Boolean(Number(r))?"NO":"SI",color:Boolean(Number(r))?"error":"success",loading:a,onClick:()=>o({id:t,name:"anulada"})})})},Ee=()=>{const{pagination:t}=l.exports.useContext(_),{fetcher:r,selected:o,setSelected:a}=t,[s,,i,c]=r;return!s&&!i&&c?e(je,{}):e("tbody",{children:i==null?void 0:i.resultados.map(n=>f("tr",{className:`${p.row} ${o.find(m=>m.id===n.id)?p.selected:""}`,children:[e("td",{className:p.column,children:e(W,{size:"small",disableRipple:!0,checked:!!o.find(m=>m.id===n.id),onChange:m=>{m.target.checked?a([...o,n]):a(o.filter(h=>h.id!==n.id))}})}),e("td",{className:`${p.column} ${p.columnCenter}`,children:e(ze,C({},n))}),f("td",{className:p.column,children:[n.tipo_only," ",n.nombre_only]}),e("td",{className:p.column,children:n.ruc}),e("td",{className:p.column,children:n.ruta_iniciales}),e("td",{className:p.column,children:M(n.mes_correspondiente,"dd/MM/yyyy hh:mm aaaa")}),e("td",{className:p.column,children:J(n.total)}),e("td",{className:p.column,children:e(I,{label:n.fecha_impresion?"SI":"NO",color:n.fecha_impresion?"success":"error"})}),e(Ie,C({},n))]},n.id))})},Le=()=>{const{pagination:t}=l.exports.useContext(_),{fetcher:r,selected:o,setSelected:a}=t,[,,s]=r;return e("th",{className:p.checkboxColumn,children:e(K,{size:"small",disableRipple:!0,color:"secondary",checked:!!(s!=null&&s.resultados.every(i=>!!o.find(c=>c.id===i.id))),indeterminate:!!(s!=null&&s.resultados.some(i=>!!o.find(c=>c.id===i.id)))&&!(s!=null&&s.resultados.every(i=>!!o.find(c=>c.id===i.id))),onChange:i=>{if(i.target.checked&&s){const c=s.resultados.filter(n=>!o.find(m=>n.id===m.id));a([...o,...c])}else a([])}})})},Re=()=>e("thead",{className:p.header,children:f("tr",{children:[e(Le,{}),e("th",{}),e("th",{children:"Negocio"}),e("th",{children:"Ruc"}),e("th",{children:"Ruta"}),e("th",{children:"Fecha"}),e("th",{children:"Total"}),e("th",{children:"Impresa"}),e("th",{children:"Vigente"})]})}),De=()=>{const{pagination:t}=l.exports.useContext(_),{fetcher:r,page:o,setPage:a}=t,[,,s]=r;return f("div",{className:p.pagination,children:[e(y,{size:"small",onClick:()=>a(o-10),disabled:o<=10,children:e(Q,{})}),e(X,{color:"primary",count:s==null?void 0:s.paginas,page:o,onChange:(i,c)=>a(c)}),e(y,{size:"small",onClick:()=>a(o+10),disabled:!!(s&&s.paginas-t.page<10),children:e(U,{})})]})},Oe="_toolbar_1pm2e_1",He="_title_1pm2e_7",Me="_divToolbar_1pm2e_13",Ve="_child_1pm2e_20",Ge="_formSearch_1pm2e_24",We="_searchAdorment_1pm2e_28",qe="_banner_1pm2e_34";var P={toolbar:Oe,title:He,divToolbar:Me,child:Ve,formSearch:Ge,searchAdorment:We,banner:qe};const Je=()=>{const t=l.exports.useRef(null),{pagination:r}=l.exports.useContext(_),{search:o,sendSearch:a}=r,[s,i]=l.exports.useState(o);return e("form",{onSubmit:n=>{n.preventDefault(),a(s)},className:P.formSearch,children:e(Y,{label:"Buscar...",size:"small",fullWidth:!0,autoFocus:!0,value:s,onChange:n=>i(n.target.value),inputRef:t,helperText:"Por raz\xF3n social, ruc, nombre del representante, c\xE9dula o pasaporte",InputProps:{endAdornment:f("div",{className:P.searchAdorment,children:[e(y,{size:"small",children:e(Z,{})}),s!==""&&e(y,{size:"small",onClick:()=>{var n;i(""),a(""),(n=t==null?void 0:t.current)==null||n.focus()},children:e(ee,{})})]})}})})},Ke=()=>{const{pagination:t}=l.exports.useContext(_),{selected:r}=t,o=l.exports.useMemo(()=>r.length,[r]);return f(k,{children:[f("div",{className:P.toolbar,children:[e("span",{className:P.title,children:"Proformas realizadas"}),e("div",{className:P.divToolbar,children:e(Je,{})})]}),e(oe,{in:o!==0,unmountOnExit:!0,children:f("div",{className:P.banner,children:[o," fila",o>1?"s":""," seleccionada",o>1?"s":""]})})]})},Qe=()=>{const{pagination:t}=l.exports.useContext(_),{fetcher:r}=t,[o,,a,s]=r;return f("div",{className:p.container,children:[f("div",{className:p.response,children:[e(Ke,{}),f("table",{className:p.table,children:[e(Re,{}),o?e(Fe,{}):e(Ee,{})]})]}),!o&&a&&!s&&e(De,{})]})},Ue=()=>{const{proforma:t}=l.exports.useContext(w),{isLoading:r,send:o,response:a,reset:s}=A(),{pagination:i}=l.exports.useContext(_),{setSelected:c,fetcher:n}=i,[,,m,,h]=n;return{isLoading:r,response:a,onSubmit:async u=>{s();const g=await o({url:`/admin/proformas/${t==null?void 0:t.id}/edit`,method:"POST",data:u});if(g.status===201&&g.data){const x=m.resultados,b=x.findIndex(S=>S.id===(t==null?void 0:t.id));x[b]=T(C(C({},x[b]),u),{otros:u.otros[0].texto?u.otros:[],total:g.data.total}),h({paginas:m.paginas,resultados:[...x]}),c([])}},reset:s}},Xe=l.exports.lazy(()=>B(()=>import("./FormModalEdit.js"),["assets/FormModalEdit.js","assets/index.js","assets/index2.css","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Fade.js","assets/Modal2.js","assets/Paper.js","assets/IconButton.js","assets/ButtonBase.js","assets/CheckCircle.js","assets/DialogContent.js","assets/DialogActions.js","assets/LoadingButton.js","assets/Button.js","assets/SelectedCard.js","assets/yup.module.js"])),Ye=()=>{var u,g,x;const{proforma:t,setProforma:r}=l.exports.useContext(w),o=ie(),a=re({resolver:se(ce),mode:"all"}),{isLoading:s,onSubmit:i,response:c,reset:n}=Ue(),{loading:m,value:h,error:v}=ne(async()=>{if(t){const{id:b}=t,S=await o({url:`/admin/proformas/${b}`});if(S.status===201&&S.data){const d=S.data;a.reset({decimo:d.decimo,vacaciones:d.vacaciones,itbms:d.itbms,formulario_retencion_itbms:d.formulario_retencion_itbms,formulario_03:d.formulario_03,sipe:d.sipe,seguro_social:d.seguro_social,seguro_social2:d.seguro_social2,servicio_contabilidad:d.servicio_contabilidad,otro_costo:d.otro_costo,itbms_contabilidad:d.itbms_contabilidad,otros_text:d.otros_text,notas:d.notas,otros:d.otros&&d.otros.length>0?d.otros.map(N=>({texto:N.texto,valor:N.valor})):[{texto:void 0,valor:void 0}]})}return S}else return},[t]);return e(k,{children:f(ae,{fullScreen:!0,state:!!t,setHide:()=>{n(),r(null)},title:"Formulario de edici\xF3n de Proforma",cancelBotton:{text:"Cerrar",actionFunction:()=>{n(),r(null)}},actionButton:{text:"Guardar",actionFunction:a.handleSubmit(i),isLoading:s},children:[m&&e(F,{}),!m&&h&&h.status!==201&&h.error&&e(z,{children:h.error.message}),v&&e(z,{children:"Error al consultar los datos a modificar"}),c&&e(le,{severity:c.status===201?"success":"error",variant:"outlined",style:{marginBottom:10},children:(x=(u=c.data)==null?void 0:u.message)!=null?x:(g=c.error)==null?void 0:g.message}),!m&&h&&h.status===201&&h.data&&e(l.exports.Suspense,{fallback:e(F,{}),children:e(Xe,{form:a,data:h.data})})]})})},Ze=()=>{const{pagination:t}=l.exports.useContext(_),{selected:r,setSelected:o,fetcher:a}=t,[,,s,,i]=a,{isLoading:c,send:n,reset:m,response:h}=A();return{handleChecker:async(u,g)=>{m();const x=await n({url:"/admin/proformas/check",method:"POST",data:C({proformas:r==null?void 0:r.map(b=>({id:b.id})),type:u},g)});if(x.status===201&&x.data){const b=s.resultados;for(const[S,[,d]]of Object.entries(Object.entries(s.resultados)))r.map(N=>N.id).includes(d.id)&&(b[Number(S)]=T(C(C({},d),g),{fecha_impresion:u==="print"?new Date(Date.now()):d.fecha_impresion,fecha_anulacion:u==="anular"?new Date(Date.now()):d.fecha_anulacion,cancelado:u==="pagar"?new Date(Date.now()):d.cancelado}));i({paginas:s.paginas,resultados:[...b]}),o([])}},isLoading:c,response:h,reset:m}},eo=l.exports.lazy(()=>B(()=>import("./ProformaPrintView.js"),["assets/ProformaPrintView.js","assets/date.helper.js","assets/index.js","assets/index2.css","assets/index31.js","assets/string.helper.js","assets/regex.js"])),oo=()=>{const t=V(),{pagination:r}=l.exports.useContext(_),{selected:o}=r,{handleChecker:a,isLoading:s}=Ze(),i=he({pageStyle:"@page { margin: 0 !important; size: letter; }",onAfterPrint:async()=>await a("print"),title:"Proformas"});return f(k,{children:[e(ue,{open:s||i.printing}),e(pe,{titles:["Realizar proforma",...o.length>0?["Imprimir proformas"]:[]],icons:[de,...o.length>0?[me]:[]],onPresses:[()=>t("/negocios?f=1"),...o.length>0?[()=>i.handlePrint()]:[]]}),e("div",{style:{display:"none"},children:e("div",{ref:i.elementRef,children:o.length>0&&o.sort((c,n)=>(c.recorrido||0)-(n.recorrido||0)).map(c=>e(l.exports.Suspense,{fallback:e("div",{}),children:e(eo,C({},c))},c.id))})})]})},Nt=()=>e(Ae,{children:f($e,{children:[e(te,{message:"Facturaci\xF3n - proformas"}),e(fe,{style:{marginTop:10},children:f(l.exports.Suspense,{fallback:e(_e,{}),children:[e(Qe,{}),e(Ye,{}),e(oo,{})]})})]})});export{Nt as default};
