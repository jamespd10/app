var T=Object.defineProperty;var C=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var N=(o,r,n)=>r in o?T(o,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[r]=n,g=(o,r)=>{for(var n in r||(r={}))A.call(r,n)&&N(o,n,r[n]);if(C)for(var n of C(r))P.call(r,n)&&N(o,n,r[n]);return o};import{r as s,A as $,j as m,F as h,a as e,a8 as u,b as z}from"./index.js";import{u as x,N as f}from"./index13.js";import{C as S}from"./ChipState.js";import{d as B}from"./Visibility.js";import{d as F}from"./InsertDriveFile.js";import{d as I}from"./AssignmentTurnedIn.js";import{d as y}from"./PointOfSale.js";import{d as k}from"./PriceCheck.js";import{d as D}from"./PersonAddDisabled.js";import{d as E}from"./Paid.js";import{B as p}from"./BootstrapTooltip.js";import{d as L,a as O}from"./SkipNextOutlined.js";import{I as b}from"./IconButton.js";import{P as M}from"./Pagination.js";import{L as V}from"./Loader.js";import{T as w}from"./TextInput.js";import{d as H}from"./Search.js";import{d as j}from"./Close2.js";import{C as q}from"./ErrorIcon.js";import{H as v}from"./HeaderTitle.js";import"./CheckCircle.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useId.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./Error.js";import"./Chip.js";import"./ButtonBase.js";import"./emotion-react.browser.esm.js";import"./CircularProgress.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./isHostComponent.js";import"./Grow.js";import"./Grid.js";import"./Typography.js";import"./TextField.js";import"./useFormControl.js";import"./formControlState.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./Fade.js";import"./Paper.js";import"./List.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";import"./StyledGridOverlay.js";import"./Box.js";import"./Divider.js";const U="_container_olry0_1",W="_pagination_olry0_7",G="_response_olry0_14",J="_table_olry0_19",K="_header_olry0_24",Q="_row_olry0_39",X="_column_olry0_39",Y="_selected_olry0_51",Z="_checkboxColumn_olry0_55",ee="_columnCenter_olry0_60",te="_removeSpacing_olry0_64",oe="_message_olry0_69",re="_button_olry0_74";var t={container:U,pagination:W,response:G,table:J,header:K,row:Q,column:X,selected:Y,checkboxColumn:Z,columnCenter:ee,removeSpacing:te,message:oe,button:re};const ne=o=>{const{authState:r}=s.exports.useContext($),{tipo:n}=r,{fa:c}=x(),a=s.exports.useMemo(()=>Boolean(Number(o.cerrado)),[o]),i=s.exports.useMemo(()=>Boolean(Number(o.super_validado)),[o]);return c&&["Super"].includes(n||"")?m(h,{children:[e("td",{className:`${t.column} ${t.columnCenter}`,children:e(S,{label:a?"CERRADO":"OPERANDO",color:a?"error":"success"})}),e("td",{className:`${t.column} ${t.columnCenter}`,children:e(S,{label:i?"V\xC1LIDADO":"NO V\xC1LIDADO",color:i?"success":"error"})})]}):e(h,{})},ae=o=>{const r=s.exports.useMemo(()=>`negocios/${o.id}/${o.id_cliente}`,[o]),{c:n,pla:c,f:a,fa:i,itbms:l,dm:d,lq:R}=x();return n?e("td",{className:`${t.column} ${t.columnCenter} ${t.button}`,children:e(p,{title:"Realizar Contrato",placement:"right",children:e(u,{state:o,to:`/${r}/contratar`,children:e(F,{color:"primary",fontSize:"small"})})})}):c?e("td",{className:`${t.column} ${t.columnCenter} ${t.button}`,children:e(p,{title:"Realizar planilla",placement:"right",children:e(u,{state:o,to:`/${r}/planillar`,children:e(I,{color:"primary",fontSize:"small"})})})}):a?e("td",{className:`${t.column} ${t.columnCenter} ${t.button}`,children:e(p,{title:"Realizar proforma",placement:"right",children:e(u,{state:o,to:`/${r}/proformas/add`,children:e(y,{color:"primary",fontSize:"small"})})})}):i?e("td",{className:`${t.column} ${t.columnCenter} ${t.button}`,children:e(p,{title:"Realizar fact. alterna",placement:"right",children:e(u,{state:o,to:`/${r}/fact-alterna/${i}`,children:e(y,{color:"primary",fontSize:"small"})})})}):l?e("td",{className:`${t.column} ${t.columnCenter} ${t.button}`,children:e(p,{title:"Realizar ITBMS",placement:"right",children:e(u,{state:o,to:`/${r}/agregar-itbms`,children:e(E,{color:"primary",fontSize:"small"})})})}):d?e("td",{className:`${t.column} ${t.columnCenter} ${t.button}`,children:e(p,{title:"Realizar declaraci\xF3n",placement:"right",children:e(u,{state:o,to:`/${r}/agregar-declaracion-municipio`,children:e(k,{color:"primary",fontSize:"small"})})})}):R?e("td",{className:`${t.column} ${t.columnCenter} ${t.button}`,children:e(p,{title:"Realizar contrato a liquidar",placement:"right",children:e(u,{state:o,to:`/${r}/contratar?lq=1`,children:e(D,{color:"primary",fontSize:"small"})})})}):e("td",{className:`${t.column} ${t.columnCenter} ${t.button}`,children:e(p,{title:"Ver",placement:"right",children:e(u,{state:o,to:`/${r}`,children:e(B,{color:"primary",fontSize:"small"})})})})},le=()=>{const{authState:o}=s.exports.useContext($),{tipo:r}=o,{pagination:n}=s.exports.useContext(f),{fetcher:c,selected:a}=n,[,,i]=c;return e("tbody",{children:i==null?void 0:i.resultados.map(l=>m("tr",{className:`${t.row} ${a.find(d=>d.id===l.id)?t.selected:""}`,children:[e(ae,g({},l)),m("td",{className:t.column,children:[l.tipo," ",l.nombre_negocio]}),e("td",{className:t.column,children:l.ruc}),e("td",{className:t.column,children:l.patronal_sipe}),m("td",{className:t.column,children:[l.nombre_usuario_sipe," ",l.apellido_usuario_sipe]}),m("td",{className:t.column,children:[l.nombre_usuario_itbms," ",l.apellido_usuario_itbms]}),e("td",{className:t.column,children:l.ruta}),["Super"].includes(r||"")&&e("td",{className:`${t.column} ${t.columnCenter}`,children:l.recorrido}),e(ne,g({},l))]},l.id))})},se=()=>{const{authState:o}=s.exports.useContext($),{tipo:r}=o,{fa:n}=x();return n&&["Super"].includes(r||"")?m(h,{children:[e("th",{children:"Cerrado"}),e("th",{children:"Super v\xE1lidado"})]}):e(h,{})},ce=()=>{const{authState:o}=s.exports.useContext($),{tipo:r}=o;return e("thead",{className:t.header,children:m("tr",{children:[e("th",{}),e("th",{children:"Nombre"}),e("th",{children:"RUC"}),e("th",{children:"N\xFAmero de SIPE"}),e("th",{children:"Sipe"}),e("th",{children:"F430 - ITBMS"}),e("th",{children:"Ruta"}),["Super"].includes(r||"")&&e("th",{children:"Recorrido"}),e(se,{})]})})},ie=()=>{const{pagination:o}=s.exports.useContext(f),{fetcher:r,page:n,setPage:c}=o,[,,a]=r;return m("div",{className:t.pagination,children:[e(b,{size:"small",onClick:()=>c(n-10),disabled:n<=10,children:e(L,{})}),e(M,{color:"primary",count:a==null?void 0:a.paginas,page:n,onChange:(i,l)=>c(l)}),e(b,{size:"small",onClick:()=>c(n+10),disabled:!!(a&&a.paginas-o.page<10),children:e(O,{})})]})},me=()=>e("div",{className:t.loader,children:e(V,{margin:20})}),de="_toolbar_1pm2e_1",ue="_title_1pm2e_7",pe="_divToolbar_1pm2e_13",he="_child_1pm2e_20",_e="_formSearch_1pm2e_24",fe="_searchAdorment_1pm2e_28",be="_banner_1pm2e_34";var _={toolbar:de,title:ue,divToolbar:pe,child:he,formSearch:_e,searchAdorment:fe,banner:be};const $e=()=>{const o=s.exports.useRef(null),{pagination:r}=s.exports.useContext(f),{search:n,sendSearch:c}=r,[a,i]=s.exports.useState(n);return e("form",{onSubmit:d=>{d.preventDefault(),c(a)},className:_.formSearch,children:e(w,{label:"Buscar...",size:"small",fullWidth:!0,autoFocus:!0,value:a,onChange:d=>i(d.target.value),inputRef:o,helperText:"Por raz\xF3n social, ruc, nombre del negocio, n\xFAmero de contribuyente o n\xFAmero de sipe",InputProps:{endAdornment:m("div",{className:_.searchAdorment,children:[e(b,{size:"small",children:e(H,{})}),a!==""&&e(b,{size:"small",onClick:()=>{var d;i(""),c(""),(d=o==null?void 0:o.current)==null||d.focus()},children:e(j,{})})]})}})})},ge=()=>e(h,{children:m("div",{className:_.toolbar,children:[e("span",{className:_.title,children:"Lista de negocios"}),e("div",{className:_.divToolbar,children:e($e,{})})]})}),xe=()=>{const{pagination:o}=s.exports.useContext(f),{fetcher:r}=o,[,,,n]=r;return e("div",{className:t.message,children:e(q,{label:n==null?void 0:n.message})})},Ce=s.exports.lazy(()=>z(()=>import("./ModalMessage2.js"),["assets/ModalMessage2.js","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index15.css","assets/createSvgIcon.js","assets/useId.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/DialogTitle.js","assets/dialogTitleClasses.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Fade.js","assets/Modal2.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Typography.js","assets/IconButton.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/Warning.js","assets/Error.js","assets/CheckCircle.js","assets/DialogContent.js","assets/DialogActions.js","assets/LoadingButton.js","assets/Button.js","assets/CircularProgress.js","assets/useModal.js","assets/useQueryParams.js"])),Ne=s.exports.lazy(()=>z(()=>import("./NegociosAcciones.js"),["assets/NegociosAcciones.js","assets/index.js","assets/index15.css","assets/CustomSpeedDial.js","assets/Assignment.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useId.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/isHostComponent.js","assets/Grow.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Backdrop.js","assets/Fade.js","assets/Stack.js","assets/Typography.js","assets/FileDownload.js","assets/AddBusiness.js","assets/useModal.js"])),Nt=()=>{const{pagination:o}=s.exports.useContext(f),{fetcher:r}=o,[n,,c,a]=r;return m(h,{children:[e(v,{message:"Negocios"}),m("div",{className:t.container,children:[e(ge,{}),e("div",{className:t.response,children:m("table",{className:t.table,children:[e(ce,{}),e(le,{})]})}),n&&e(me,{}),!n&&a&&e(xe,{}),!n&&c&&!a&&e(ie,{})]}),e(s.exports.Suspense,{fallback:e("div",{}),children:e(Ce,{})}),e(s.exports.Suspense,{fallback:e("div",{}),children:e(Ne,{})})]})};export{Nt as default};
