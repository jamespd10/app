var N=Object.defineProperty;var u=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var b=(o,r,t)=>r in o?N(o,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[r]=t,e=(o,r)=>{for(var t in r||(r={}))T.call(r,t)&&b(o,t,r[t]);if(u)for(var t of u(r))g.call(r,t)&&b(o,t,r[t]);return o};var h=(o,r)=>{var t={};for(var i in o)T.call(o,i)&&r.indexOf(i)<0&&(t[i]=o[i]);if(o!=null&&u)for(var i of u(o))r.indexOf(i)<0&&g.call(o,i)&&(t[i]=o[i]);return t};import{r as d,j as k,a as f}from"./index.js";import{F as A}from"./Formulario2.js";import{T as q}from"./index18.js";import{C as B}from"./index53.js";import{S as G}from"./Snackbar.js";import{A as I}from"./Alert.js";import{B as j}from"./Button.js";import"./Loader2.js";import"./Loader.js";import"./Grid.js";import"./Typography.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./useForm.js";import"./object.helper.js";import"./array.js";import"./upperFirst.js";import"./regex.js";import"./Lazy.js";import"./useGetDefaultValues.js";import"./ContainerFormulario.js";import"./FormularioRealizar.js";import"./ErrorIcon.js";import"./StyledGridOverlay.js";import"./Box.js";import"./HeaderTitle.js";import"./Divider.js";import"./StyledSpeedDial.js";import"./Assignment.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useId.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./FabButtonAction.js";import"./react-is.production.min.js";import"./AssignmentRounded.js";import"./ButtonBase.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./isHostComponent.js";import"./Grow.js";import"./SpeedDial.module.js";import"./Backdrop.js";import"./Fade.js";import"./Stack.js";import"./Paid.js";import"./BootstrapModal.js";import"./ModalTransition.js";import"./Modal2.js";import"./Paper.js";import"./BootstrapModalTitle.js";import"./Close2.js";import"./DialogTitle.js";import"./dialogTitleClasses.js";import"./IconButton.js";import"./BootstrapDivContent.js";import"./index33.js";import"./DialogActions.js";import"./Close.js";const w="_container_ymlqu_1",E="_item_ymlqu_7";var v={container:w,item:E};const H=()=>{const{cliente:o}=d.exports.useContext(B),{form:r,fetcher:t}=d.exports.useContext(A),{setFormState:i}=r,[,c]=t,{pagination:n}=d.exports.useContext(q),{fetcher:p}=n,[,,s,,x]=p;return{handleSave:async m=>{c(m.id?`/admin/f430/${m.id}`:"/admin/f430",{method:m.id?"PUT":"POST",data:m}).then(C=>{if(C.data){const S=C.data,{message:U}=S,a=h(S,["message"]),F=o,{negocios:$}=F,y=h(F,["negocios"]),l=(s==null?void 0:s.resultados)||[];if(m.id){i(e(e({},m),a));const _=l.findIndex(D=>D.id===m.id);_!==-1&&(l[_]=e(e(e({},m),y),a))}else i(e(e({},m),a)),l.unshift(e(e(e({},m),y),a));x({paginas:(s==null?void 0:s.paginas)||1,resultados:[...l]})}})}}},Wo=()=>{const{form:o,fetcher:r}=d.exports.useContext(A),{formState:t,onFormSubmit:i}=o,{fecha_enviado:c}=t,[,,n,p,,s]=r,{handleSave:x}=H();return k("div",{className:v.container,children:[f(G,{open:!!(n||p),autoHideDuration:6e3,onClose:()=>s(),children:f(I,{onClose:()=>s(),severity:n?"success":"error",variant:"filled",color:n?"success":"error",children:(n==null?void 0:n.message)||(p==null?void 0:p.message)})}),!c&&f(j,{className:v.item,variant:"outlined",color:"primary",onClick:()=>i(x),children:"Guardar"}),!c&&f(j,{className:v.item,variant:"outlined",color:"error",children:"Guardar y Enviar a Facturaci\xF3n"})]})};export{Wo as default};
