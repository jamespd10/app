var C=Object.defineProperty,p=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var x=(t,e,i)=>e in t?C(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,l=(t,e)=>{for(var i in e||(e={}))A.call(e,i)&&x(t,i,e[i]);if(u)for(var i of u(e))F.call(e,i)&&x(t,i,e[i]);return t},g=(t,e)=>p(t,h(e));import{S}from"./StyledSpeedDial.js";import{d as y}from"./Print.js";import{r,a as s,f as R,j as _,F as b}from"./index.js";import{l as B}from"./index23.js";import{d as D}from"./WorkspacePremium.js";import{C as d,b as M,M as $,a as j}from"./index14.js";import{F as v,a as z}from"./Formularios.js";import{s as I}from"./formularios.module.js";import"./Assignment.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./FabButtonAction.js";import"./react-is.production.min.js";import"./AssignmentRounded.js";import"./ButtonBase.js";import"./emotion-react.browser.esm.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./appendOwnerState.js";import"./isHostComponent.js";import"./Grow.js";import"./ContentProvider.js";import"./useModal.js";import"./SpeedDial.module.js";import"./Backdrop.js";import"./Stack.js";import"./Typography.js";import"./HeaderTitle.js";import"./Divider.js";import"./Loader.js";import"./Grid.js";import"./CircularProgress.js";import"./useLocalStorage.js";import"./yup.module.js";import"./regex.js";import"./array.js";import"./upperFirst.js";const N=t=>{const[e,i]=r.exports.useState(!1),n=r.exports.useRef(null),o=B.exports.useReactToPrint({content:()=>n.current,pageStyle:t==null?void 0:t.pageStyle,documentTitle:t==null?void 0:t.title,onBeforePrint:async()=>{i(!0),t!=null&&t.onBeforePrint&&(t==null||t.onBeforePrint())},onAfterPrint:async()=>{i(!1),t!=null&&t.onAfterPrint&&(t==null||t.onAfterPrint())}});return[n,o,e]},T=({valRef:t})=>{const{pagination:e}=r.exports.useContext(d),{selected:i}=e;return s("div",{className:I.divHidden,children:s("div",{ref:t,children:i.map((n,o)=>s(v,{data:n,children:s(z,{})},`${n.id}-${o+1}`))})})},k=()=>{const{pagination:t}=r.exports.useContext(d),{fetcher:e,selected:i}=t,[,,n,,o]=e,[,m]=R();return{onAfterPrint:()=>{const c=[...n.resultados.map(a=>i.findIndex(P=>Number(P.id)===Number(a.id))!==-1?g(l({},a),{fecha_impresion:new Date}):l({},a))];o({paginas:n.paginas,resultados:c}),m("/admin/certificaciones-ingresos/1",{method:"PATCH",data:{field:"certificaciones_ingresos.fecha_impresion",value:new Date,ids:i.map(a=>a.id)}})}}},_t=()=>{const{pagination:t}=r.exports.useContext(d),{selected:e}=t,{modalRealizar:i}=r.exports.useContext(M),[,n]=i,{onAfterPrint:o}=k(),[m,f]=N({pageStyle:"@page { margin: 0 !important; }",onAfterPrint:o}),[,c]=r.exports.useContext($),{cpa:a}=r.exports.useContext(j);return _(b,{children:[s(S,{acciones:[{icon:D,onClick:()=>n(!0),title:"Realizar certificaci\xF3n"},...e.length!==0?[{icon:y,onClick:a?f:()=>c(!0),title:"Imprimir"}]:[]]}),s(T,{valRef:m})]})};export{_t as default};
