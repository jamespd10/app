var g=Object.defineProperty,P=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var f=(t,e,o)=>e in t?g(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,x=(t,e)=>{for(var o in e||(e={}))h.call(e,o)&&f(t,o,e[o]);if(p)for(var o of p(e))u.call(e,o)&&f(t,o,e[o]);return t},k=(t,e)=>P(t,z(e));var v=(t,e)=>{var o={};for(var r in t)h.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&p)for(var r of p(t))e.indexOf(r)<0&&u.call(t,r)&&(o[r]=t[r]);return o};import{r as s,j as m,F as B,a as i,b as F,aw as I}from"./index.js";import{D as N}from"./ModalTransition.js";import{h as O}from"./CalendarPicker.js";import{D as b}from"./DialogActions.js";import{B as D}from"./Button.js";import{d as w}from"./CalendarMonth.js";import{C as A}from"./index53.js";import{I as E}from"./IconButton.js";import"./Backdrop.js";import"./Fade.js";import"./Modal2.js";import"./isHostComponent.js";import"./useId.js";import"./Portal.js";import"./Paper.js";import"./MonthPicker.js";import"./Typography.js";import"./ButtonBase.js";import"./emotion-react.browser.esm.js";import"./useIsFocusVisible.js";import"./useControlled.js";import"./createSvgIcon.js";import"./jsx-runtime_commonjs-proxy.js";import"./BootstrapModal.js";import"./BootstrapModalTitle.js";import"./Close2.js";import"./DialogTitle.js";import"./dialogTitleClasses.js";import"./Paid.js";import"./BootstrapDivContent.js";import"./Divider.js";import"./index18.js";import"./HeaderTitle.js";import"./StyledSpeedDial.js";import"./Assignment.js";import"./FabButtonAction.js";import"./react-is.production.min.js";import"./AssignmentRounded.js";import"./Tooltip.js";import"./Popper.js";import"./Grow.js";import"./SpeedDial.module.js";import"./Stack.js";import"./Loader.js";import"./Grid.js";import"./CircularProgress.js";import"./index33.js";const R="_mesContainer_1j5t0_1",T="_title_1j5t0_10",G="_mes_1j5t0_1",L="_removeSpace_1j5t0_23";var l={mesContainer:R,title:T,mes:G,removeSpace:L};const V=t=>{const C=t,{date:e,minDate:o,maxDate:r,okText:S}=C,c=v(C,["date","minDate","maxDate","okText"]),{render:j,setDate:y}=c,[d,M]=s.exports.useState(e),[_,a]=s.exports.useState(!1);return m(B,{children:[j(_,n=>a(n)),m(N,{open:_,onClose:()=>a(!1),children:[i(O,k(x({},c),{date:d,onChange:(n,H)=>M(n)})),m(b,{children:[i(D,{onClick:()=>a(!1),children:"Cerrar"}),i(D,{onClick:()=>{a(!1),y(d)},children:S||"Ok"})]})]})]})},q=s.exports.lazy(()=>F(()=>import("./CheckGeneralCredito.js"),["assets/CheckGeneralCredito.js","assets/index.js","assets/index15.css","assets/index53.js","assets/BootstrapModal.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Fade.js","assets/Modal2.js","assets/isHostComponent.js","assets/useId.js","assets/Portal.js","assets/Paper.js","assets/BootstrapModalTitle.js","assets/BootstrapModalTitle.css","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/DialogTitle.js","assets/dialogTitleClasses.js","assets/Typography.js","assets/IconButton.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/Paid.js","assets/BootstrapDivContent.js","assets/BootstrapDivContent.css","assets/Divider.js","assets/index18.js","assets/index5.css","assets/HeaderTitle.js","assets/StyledSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/Tooltip.js","assets/Popper.js","assets/Grow.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Stack.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/index33.js","assets/DialogActions.js","assets/Button.js","assets/FormControlLabel.js","assets/formControlState.js","assets/useFormControl.js","assets/Checkbox.js","assets/SwitchBase.js"])),Tt=()=>{const{mes:t,setMes:e}=s.exports.useContext(A);return m("div",{className:l.mesContainer,children:[m("span",{className:l.title,children:["Realizando el mes de:"," ",m("span",{className:l.mes,children:[I(t,"MMMM - yyyy"),i(V,{date:t,setDate:o=>e(o),views:["month","year"],render:(o,r)=>i(E,{onClick:()=>r(!0),size:"small",children:i(w,{})})})]})]}),i(s.exports.Suspense,{fallback:i("div",{}),children:i(q,{})})]})};export{Tt as default};
