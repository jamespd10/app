var S=Object.defineProperty,v=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var x=(t,e,o)=>e in t?S(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,_=(t,e)=>{for(var o in e||(e={}))h.call(e,o)&&x(t,o,e[o]);if(a)for(var o of a(e))u.call(e,o)&&x(t,o,e[o]);return t},k=(t,e)=>v(t,B(e));var j=(t,e)=>{var o={};for(var r in t)h.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&a)for(var r of a(t))e.indexOf(r)<0&&u.call(t,r)&&(o[r]=t[r]);return o};import{r as l,j as s,F,a as i,aw as N}from"./index.js";import{a as w,b as z}from"./ModalTransition.js";import{h as I}from"./CalendarPicker.js";import{B as y}from"./Button.js";import{d as O}from"./CalendarMonth.js";import{C as P}from"./index53.js";import{I as A}from"./IconButton.js";import"./Backdrop.js";import"./Modal2.js";import"./isHostComponent.js";import"./useControlled.js";import"./Portal.js";import"./Paper.js";import"./Typography.js";import"./MonthPicker.js";import"./ButtonBase.js";import"./emotion-react.browser.esm.js";import"./useIsFocusVisible.js";import"./createSvgIcon.js";import"./jsx-runtime_commonjs-proxy.js";import"./BootstrapModalTitle.js";import"./Close2.js";import"./Paid.js";import"./BootstrapDivContent.js";import"./Divider.js";import"./index18.js";import"./HeaderTitle.js";import"./StyledSpeedDial.js";import"./Assignment.js";import"./FabButtonAction.js";import"./react-is.production.min.js";import"./AssignmentRounded.js";import"./Tooltip.js";import"./Popper.js";import"./Grow.js";import"./ContentProvider.js";import"./useModal.js";import"./SpeedDial.module.js";import"./Stack.js";import"./Loader.js";import"./Grid.js";import"./CircularProgress.js";import"./index30.js";const R="_mesContainer_1jbpx_1",T="_title_1jbpx_8",q="_mes_1jbpx_1";var p={mesContainer:R,title:T,mes:q};const E=t=>{const f=t,{date:e,minDate:o,maxDate:r,okText:D}=f,c=j(f,["date","minDate","maxDate","okText"]),{render:M,setDate:g}=c,[d,b]=l.exports.useState(e),[C,m]=l.exports.useState(!1);return s(F,{children:[M(C,n=>m(n)),s(w,{open:C,onClose:()=>m(!1),children:[i(I,k(_({},c),{date:d,onChange:(n,G)=>b(n)})),s(z,{children:[i(y,{onClick:()=>m(!1),children:"Cerrar"}),i(y,{onClick:()=>{m(!1),g(d)},children:D||"Ok"})]})]})]})},zt=()=>{const{mes:t,setMes:e}=l.exports.useContext(P);return s("div",{className:p.mesContainer,children:[s("span",{className:p.title,children:["Realizando el mes de:"," ",i("span",{className:p.mes,children:N(t,"MMMM - yyyy")})]}),i(E,{date:t,setDate:o=>e(o),views:["month","year"],render:(o,r)=>i(A,{onClick:()=>r(!0),size:"small",children:i(O,{})})})]})};export{zt as default};
