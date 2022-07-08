var y=Object.defineProperty;var g=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var f=(t,n,o)=>n in t?y(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,_=(t,n)=>{for(var o in n||(n={}))x.call(n,o)&&f(t,o,n[o]);if(g)for(var o of g(n))C.call(n,o)&&f(t,o,n[o]);return t};import{a as e,aw as N,r as i,j as c,F as T}from"./index.js";import{T as d}from"./index18.js";import{f as u}from"./string.helper.js";import{d as S,a as I}from"./SkipNextOutlined.js";import{I as p}from"./IconButton.js";import{P as $}from"./Pagination.js";import{L as F}from"./Loader.js";import{T as M}from"./TextInput.js";import{d as B}from"./Search.js";import{d as E}from"./Close2.js";import{F as v}from"./Backdrop.js";import{C as z}from"./ErrorIcon.js";import"./HeaderTitle.js";import"./Typography.js";import"./Divider.js";import"./StyledSpeedDial.js";import"./Assignment.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./FabButtonAction.js";import"./react-is.production.min.js";import"./AssignmentRounded.js";import"./ButtonBase.js";import"./emotion-react.browser.esm.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./isHostComponent.js";import"./Grow.js";import"./ContentProvider.js";import"./useModal.js";import"./SpeedDial.module.js";import"./Stack.js";import"./Paid.js";import"./regex.js";import"./Grid.js";import"./CircularProgress.js";import"./TextField.js";import"./Modal2.js";import"./Paper.js";import"./List.js";import"./GlobalStyles.js";import"./StyledGridOverlay.js";import"./Box.js";const P="_container_uyr9b_1",k="_pagination_uyr9b_7",w="_response_uyr9b_14",A="_table_uyr9b_19",R="_header_uyr9b_24",j="_row_uyr9b_39",D="_column_uyr9b_39",L="_selected_uyr9b_51",O="_checkboxColumn_uyr9b_55",V="_columnCenter_uyr9b_60",H="_removeSpacing_uyr9b_64",W="_message_uyr9b_69",q="_columnIcon_uyr9b_74",G="_iconButton_uyr9b_78",J="_total_uyr9b_82",K="_totalError_uyr9b_83";var a={container:P,pagination:k,response:w,table:A,header:R,row:j,column:D,selected:L,checkboxColumn:O,columnCenter:V,removeSpacing:H,message:W,columnIcon:q,iconButton:G,total:J,totalError:K};const Q=t=>Number(t.total)<0?e("td",{className:`${a.column} ${a.totalError}`,children:u(t.total)}):e("td",{className:`${a.column} ${a.total}`,children:u(t.total)}),U=t=>t.fecha_enviado?e("td",{className:a.column,children:N(t.fecha_enviado,"dd/MM/yyyy h:mm aaaa")}):e("td",{className:a.column}),X=()=>{const{pagination:t}=i.exports.useContext(d),{fetcher:n}=t,[,,o]=n;return e("tbody",{children:o==null?void 0:o.resultados.map(r=>c("tr",{className:`${a.row}`,children:[e("td",{className:a.column,children:r.nom_cliente}),e("td",{className:a.column,children:r.ruc}),c("td",{className:a.column,children:[r.tipo," ",r.nombre_negocio]}),e(Q,_({},r)),e("td",{className:a.column,children:u(Number(r.venta_7)+Number(r.venta_10)+Number(r.venta_15))}),e("td",{className:a.column,children:u(Number(r.compra_7)+Number(r.compra_10)+Number(r.compra_15)+Number(r.compra_import))}),e("td",{className:a.column,children:u(r.retencion)}),e("td",{className:a.column,children:N(r.mes_correspondiente,"MM/yyyy")}),e(U,_({},r))]},`${r.id}-${r.id_negocio}`))})},Y=()=>e("thead",{className:a.header,children:c("tr",{children:[e("th",{children:"Raz\xF3n social"}),e("th",{children:"Ruc"}),e("th",{children:"Negocio"}),e("th",{children:"Total A Pagar"}),e("th",{children:"ITBMS DE Ventas"}),e("th",{children:"ITBMS DE Compras"}),e("th",{children:"ITBMS DE Retenciones"}),e("th",{children:"Mes"}),e("th",{children:"Facturado"})]})}),Z=()=>{const{pagination:t}=i.exports.useContext(d),{fetcher:n,page:o,setPage:r}=t,[,,s]=n;return c("div",{className:a.pagination,children:[e(p,{size:"small",onClick:()=>r(o-10),disabled:o<=10,children:e(S,{})}),e($,{color:"primary",count:s==null?void 0:s.paginas,page:o,onChange:(h,b)=>r(b)}),e(p,{size:"small",onClick:()=>r(o+10),disabled:!!(s&&s.paginas-t.page<10),children:e(I,{})})]})},ee=()=>e("div",{className:a.loader,children:e(F,{margin:20})}),oe="_toolbar_1pm2e_1",te="_title_1pm2e_7",re="_divToolbar_1pm2e_13",ne="_child_1pm2e_20",ae="_formSearch_1pm2e_24",se="_searchAdorment_1pm2e_28",ce="_banner_1pm2e_34";var m={toolbar:oe,title:te,divToolbar:re,child:ne,formSearch:ae,searchAdorment:se,banner:ce};const ie=()=>{const t=i.exports.useRef(null),{pagination:n}=i.exports.useContext(d),{search:o,sendSearch:r}=n,[s,h]=i.exports.useState(o);return e("form",{onSubmit:l=>{l.preventDefault(),r(s)},className:m.formSearch,children:e(M,{label:"Buscar...",size:"small",fullWidth:!0,autoFocus:!0,value:s,onChange:l=>h(l.target.value),inputRef:t,helperText:"Por raz\xF3n social, ruc, negocio o mes. Ejm: 12-2022",InputProps:{endAdornment:c("div",{className:m.searchAdorment,children:[e(p,{size:"small",children:e(B,{})}),s!==""&&e(p,{size:"small",onClick:()=>{var l;h(""),r(""),(l=t==null?void 0:t.current)==null||l.focus()},children:e(E,{})})]})}})})},le=()=>{const{pagination:t}=i.exports.useContext(d),{selected:n}=t,o=i.exports.useMemo(()=>n.length,[n]);return c(T,{children:[c("div",{className:m.toolbar,children:[e("span",{className:m.title,children:"Formularios 430 - ITBMS realizados"}),e("div",{className:m.divToolbar,children:e(ie,{})})]}),e(v,{in:o!==0,unmountOnExit:!0,children:c("div",{className:m.banner,children:[o," fila",o>1?"s":""," seleccionada",o>1?"s":""]})})]})},me=()=>{const{pagination:t}=i.exports.useContext(d),{fetcher:n}=t,[,,,o]=n;return e("div",{className:a.message,children:e(z,{label:o==null?void 0:o.message})})},no=()=>{const{pagination:t}=i.exports.useContext(d),{fetcher:n}=t,[o,,r,s]=n;return c("div",{className:a.container,children:[e(le,{}),e("div",{className:a.response,children:c("table",{className:a.table,children:[e(Y,{}),e(X,{})]})}),o&&e(ee,{}),!o&&s&&!r&&e(me,{}),!o&&r&&!s&&e(Z,{})]})};export{no as default};
