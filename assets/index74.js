var x=Object.defineProperty;var p=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var h=(n,t,o)=>t in n?x(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,m=(n,t)=>{for(var o in t||(t={}))C.call(t,o)&&h(n,o,t[o]);if(p)for(var o of p(t))v.call(t,o)&&h(n,o,t[o]);return n};import{r as a,a as e,j as c,aw as N,b as _,F as S}from"./index.js";import{P as i}from"./index45.js";import{f as $}from"./string.helper.js";import{d as y}from"./CheckCircle.js";import{c as T,i as P,r as z}from"./jsx-runtime_commonjs-proxy.js";import{d as I}from"./Edit.js";import{d as k,a as E}from"./SkipNextOutlined.js";import{I as g}from"./IconButton.js";import{P as R}from"./Pagination.js";import{L as j}from"./Loader.js";import{F as M}from"./Fade.js";import{C as O}from"./ErrorIcon.js";const w="_container_g8eoo_1",A="_pagination_g8eoo_7",L="_response_g8eoo_14",B="_table_g8eoo_19",D="_header_g8eoo_24",F="_row_g8eoo_39",V="_column_g8eoo_39",q="_selected_g8eoo_51",H="_checkboxColumn_g8eoo_55",G="_columnCenter_g8eoo_60",J="_removeSpacing_g8eoo_64",K="_message_g8eoo_69",Q="_columnIcon_g8eoo_74",U="_iconButton_g8eoo_78",W="_total_g8eoo_82",X="_errorColor_g8eoo_87",Y="_successColor_g8eoo_91";var s={container:w,pagination:A,response:L,table:B,header:D,row:F,column:V,selected:q,checkboxColumn:H,columnCenter:G,removeSpacing:J,message:K,columnIcon:Q,iconButton:U,total:W,errorColor:X,successColor:Y},u={},Z=P.exports;Object.defineProperty(u,"__esModule",{value:!0});var f=u.default=void 0,ee=Z(T),oe=z,te=(0,ee.default)((0,oe.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");f=u.default=te;const ne=n=>{const{pagination:t}=a.exports.useContext(i),{selected:o}=t;return o.findIndex(r=>r.id===n.id)!==-1?e("td",{className:`${s.column} ${s.columnCenter}`,children:e(y,{fontSize:"small",color:"success"})}):e("td",{className:`${s.column} ${s.columnCenter}`,children:e(f,{fontSize:"small",color:"error"})})},re=n=>{const{pagination:t}=a.exports.useContext(i),{currentValue:o}=t,[,r]=o;return e("td",{className:`${s.column} ${s.columnCenter}`,children:e(I,{className:s.iconButton,fontSize:"small",onClick:()=>r(n)})})},se=()=>{const{pagination:n}=a.exports.useContext(i),{fetcher:t}=n,[,,o]=t;return e("tbody",{children:o==null?void 0:o.resultados.map(r=>c("tr",{className:`${s.row}`,children:[e(ne,m({},r)),e(re,m({},r)),c("td",{className:s.column,children:[r.tipo," ",r.nombre_negocio]}),e("td",{className:s.column,children:r.ruc}),e("td",{className:`${s.column} ${s.total}`,children:$(r.total)}),e("td",{className:s.column,children:N(r.mes_correspondiente,"MM/yyyy")})]},`${r.id}-${r.id_negocio}`))})},ae=()=>e("thead",{className:s.header,children:c("tr",{children:[e("th",{}),e("th",{}),e("th",{children:"Negocio"}),e("th",{children:"Ruc"}),e("th",{children:"Total"}),e("th",{children:"Mes"})]})}),ce=()=>{const{pagination:n}=a.exports.useContext(i),{fetcher:t,page:o,setPage:r}=n,[,,l]=t;return c("div",{className:s.pagination,children:[e(g,{size:"small",onClick:()=>r(o-10),disabled:o<=10,children:e(k,{})}),e(R,{color:"primary",count:l==null?void 0:l.paginas,page:o,onChange:(Ne,b)=>r(b)}),e(g,{size:"small",onClick:()=>r(o+10),disabled:!!(l&&l.paginas-n.page<10),children:e(E,{})})]})},le=()=>e("div",{className:s.loader,children:e(j,{margin:20})}),ie="_toolbar_1pm2e_1",de="_title_1pm2e_7",me="_divToolbar_1pm2e_13",_e="_child_1pm2e_20",ue="_formSearch_1pm2e_24",pe="_searchAdorment_1pm2e_28",he="_banner_1pm2e_34";var d={toolbar:ie,title:de,divToolbar:me,child:_e,formSearch:ue,searchAdorment:pe,banner:he};const ge=a.exports.lazy(()=>_(()=>import("./SearchToolbar3.js"),["assets/SearchToolbar3.js","assets/index.js","assets/index7.css","assets/TextInput.js","assets/TextField.js","assets/useFormControl.js","assets/useControlled.js","assets/useId.js","assets/formControlState.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/Fade.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/emotion-react.browser.esm.js","assets/index45.js","assets/HeaderTitle.js","assets/Typography.js","assets/Divider.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/Search.js","assets/jsx-runtime_commonjs-proxy.js","assets/useIsFocusVisible.js","assets/Close2.js","assets/IconButton.js","assets/ButtonBase.js","assets/string.helper.js","assets/regex.js","assets/CheckCircle.js","assets/Edit.js","assets/SkipNextOutlined.js","assets/Pagination.js","assets/ErrorIcon.js","assets/StyledGridOverlay.js","assets/Box.js"])),fe=a.exports.lazy(()=>_(()=>import("./Rutas.js"),["assets/Rutas.js","assets/Rutas.css","assets/index.js","assets/index7.css","assets/useFetcherEarly.js","assets/index45.js","assets/HeaderTitle.js","assets/Typography.js","assets/Divider.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/RadioGroup.js","assets/SwitchBase.js","assets/useFormControl.js","assets/ButtonBase.js","assets/useIsFocusVisible.js","assets/useControlled.js","assets/createSvgIcon.js","assets/useId.js","assets/FormGroup.js","assets/formControlState.js","assets/FormControlLabel.js","assets/Button.js"])),be=a.exports.lazy(()=>_(()=>import("./ShowAll.js"),["assets/ShowAll.js","assets/ShowAll.css","assets/index.js","assets/index7.css","assets/StyledCheckbox.js","assets/Checkbox.js","assets/SwitchBase.js","assets/useFormControl.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/useIsFocusVisible.js","assets/useControlled.js","assets/createSvgIcon.js","assets/outlinedInputClasses.js","assets/index45.js","assets/HeaderTitle.js","assets/Typography.js","assets/Divider.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/FormControlLabel.js","assets/formControlState.js"])),xe=()=>{const{pagination:n}=a.exports.useContext(i),{selected:t}=n,o=a.exports.useMemo(()=>t.length,[t]);return c(S,{children:[c("div",{className:d.toolbar,children:[e("span",{className:d.title,children:"Proformas realizadas"}),e("div",{className:d.divToolbar,children:e(a.exports.Suspense,{fallback:e("div",{}),children:e(ge,{})})}),c("div",{className:d.divToolbar,children:[e(a.exports.Suspense,{fallback:e("div",{}),children:e(fe,{})}),e(a.exports.Suspense,{fallback:e("div",{}),children:e(be,{})})]})]}),e(M,{in:o!==0,unmountOnExit:!0,children:c("div",{className:d.banner,children:[o," fila",o>1?"s":""," seleccionada",o>1?"s":""]})})]})},Ce=()=>{const{pagination:n}=a.exports.useContext(i),{fetcher:t}=n,[,,,o]=t;return e("div",{className:s.message,children:e(O,{label:o==null?void 0:o.message})})},ve=()=>{const{pagination:n}=a.exports.useContext(i),{fetcher:t}=n,[o,,r,l]=t;return c("div",{className:s.container,children:[e(xe,{}),e("div",{className:s.response,children:c("table",{className:s.table,children:[e(ae,{}),e(se,{})]})}),o&&e(le,{}),!o&&l&&!r&&e(Ce,{}),!o&&r&&!l&&e(ce,{})]})};var we=Object.freeze(Object.defineProperty({__proto__:null,default:ve},Symbol.toStringTag,{value:"Module"}));export{we as i,d as s};
