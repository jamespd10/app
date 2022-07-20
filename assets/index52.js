var x=Object.defineProperty;var f=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var N=(t,a,o)=>a in t?x(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,b=(t,a)=>{for(var o in a||(a={}))T.call(a,o)&&N(t,o,a[o]);if(f)for(var o of f(a))C.call(a,o)&&N(t,o,a[o]);return t};import{a as e,aw as g,r as c,j as i,F as y}from"./index.js";import{T as d}from"./index18.js";import{s as n,L as S}from"./Loader2.js";import{f as p}from"./string.helper.js";import{d as F,a as M}from"./SkipNextOutlined.js";import{I as h}from"./IconButton.js";import{P as $}from"./Pagination.js";import{T as I}from"./TextInput.js";import{d as z}from"./Search.js";import{d as P}from"./Close2.js";import{F as B}from"./Fade.js";import{C as E}from"./ErrorIcon.js";import"./HeaderTitle.js";import"./Typography.js";import"./Divider.js";import"./StyledSpeedDial.js";import"./Assignment.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useId.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./FabButtonAction.js";import"./react-is.production.min.js";import"./AssignmentRounded.js";import"./ButtonBase.js";import"./emotion-react.browser.esm.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./isHostComponent.js";import"./Grow.js";import"./SpeedDial.module.js";import"./Backdrop.js";import"./Stack.js";import"./Paid.js";import"./Loader.js";import"./Grid.js";import"./CircularProgress.js";import"./regex.js";import"./TextField.js";import"./useFormControl.js";import"./formControlState.js";import"./Modal2.js";import"./Paper.js";import"./List.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";import"./StyledGridOverlay.js";import"./Box.js";const A=t=>Number(t.total)<0?e("td",{className:`${n.column} ${n.totalError}`,children:p(t.total)}):e("td",{className:`${n.column} ${n.total}`,children:p(t.total)}),R=t=>t.fecha_enviado?e("td",{className:n.column,children:g(t.fecha_enviado,"dd/MM/yyyy h:mm aaaa")}):e("td",{className:n.column}),j=()=>{const{pagination:t}=c.exports.useContext(d),{fetcher:a}=t,[,,o]=a;return e("tbody",{children:o==null?void 0:o.resultados.map(r=>i("tr",{className:`${n.row}`,children:[e("td",{className:n.column,children:r.nom_cliente}),e("td",{className:n.column,children:r.ruc}),i("td",{className:n.column,children:[r.tipo," ",r.nombre_negocio]}),e("td",{className:n.column,children:g(r.mes_correspondiente,"MM/yyyy")}),e(A,b({},r)),e("td",{className:n.column,children:p(Number(r.venta_7)+Number(r.venta_10)+Number(r.venta_15))}),e("td",{className:n.column,children:p(Number(r.compra_7)+Number(r.compra_10)+Number(r.compra_15)+Number(r.compra_import))}),e("td",{className:n.column,children:p(r.retencion)}),e(R,b({},r))]},`${r.id}-${r.id_negocio}`))})},D=()=>e("thead",{className:n.header,children:i("tr",{children:[e("th",{children:"Raz\xF3n social"}),e("th",{children:"Ruc"}),e("th",{children:"Negocio"}),e("th",{children:"Mes"}),e("th",{children:"Total A Pagar"}),e("th",{children:"ITBMS DE Ventas"}),e("th",{children:"ITBMS DE Compras"}),e("th",{children:"ITBMS DE Retenciones"}),e("th",{children:"Facturado"})]})}),k=()=>{const{pagination:t}=c.exports.useContext(d),{fetcher:a,page:o,setPage:r}=t,[,,s]=a;return i("div",{className:n.pagination,children:[e(h,{size:"small",onClick:()=>r(o-10),disabled:o<=10,children:e(F,{})}),e($,{color:"primary",count:s==null?void 0:s.paginas,page:o,onChange:(u,_)=>r(_)}),e(h,{size:"small",onClick:()=>r(o+10),disabled:!!(s&&s.paginas-t.page<10),children:e(M,{})})]})},v="_toolbar_1pm2e_1",w="_title_1pm2e_7",L="_divToolbar_1pm2e_13",O="_child_1pm2e_20",V="_formSearch_1pm2e_24",H="_searchAdorment_1pm2e_28",W="_banner_1pm2e_34";var m={toolbar:v,title:w,divToolbar:L,child:O,formSearch:V,searchAdorment:H,banner:W};const q=()=>{const t=c.exports.useRef(null),{pagination:a}=c.exports.useContext(d),{search:o,sendSearch:r}=a,[s,u]=c.exports.useState(o);return e("form",{onSubmit:l=>{l.preventDefault(),r(s)},className:m.formSearch,children:e(I,{label:"Buscar...",size:"small",fullWidth:!0,autoFocus:!0,value:s,onChange:l=>u(l.target.value),inputRef:t,helperText:"Por raz\xF3n social, ruc, negocio o mes. Ejm: 12-2022",InputProps:{endAdornment:i("div",{className:m.searchAdorment,children:[e(h,{size:"small",children:e(z,{})}),s!==""&&e(h,{size:"small",onClick:()=>{var l;u(""),r(""),(l=t==null?void 0:t.current)==null||l.focus()},children:e(P,{})})]})}})})},G=()=>{const{pagination:t}=c.exports.useContext(d),{selected:a}=t,o=c.exports.useMemo(()=>a.length,[a]);return i(y,{children:[i("div",{className:m.toolbar,children:[e("span",{className:m.title,children:"Formularios 430 - ITBMS realizados"}),e("div",{className:m.divToolbar,children:e(q,{})})]}),e(B,{in:o!==0,unmountOnExit:!0,children:i("div",{className:m.banner,children:[o," fila",o>1?"s":""," seleccionada",o>1?"s":""]})})]})},J=()=>{const{pagination:t}=c.exports.useContext(d),{fetcher:a}=t,[,,,o]=a;return e("div",{className:n.message,children:e(E,{label:o==null?void 0:o.message})})},qe=()=>{const{pagination:t}=c.exports.useContext(d),{fetcher:a}=t,[o,,r,s]=a;return i("div",{className:n.container,children:[e(G,{}),e("div",{className:n.response,children:i("table",{className:n.table,children:[e(D,{}),e(j,{})]})}),o&&e(S,{}),!o&&s&&!r&&e(J,{}),!o&&r&&!s&&e(k,{})]})};export{qe as default};
