var E=Object.defineProperty,H=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var V=(e,i,t)=>i in e?E(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,c=(e,i)=>{for(var t in i||(i={}))K.call(i,t)&&V(e,t,i[t]);if(U)for(var t of U(i))L.call(i,t)&&V(e,t,i[t]);return e},d=(e,i)=>H(e,J(i));import{r as O,j as n,a as m}from"./index.js";import{s as h}from"./FormularioRealizar.js";import{T as p}from"./TextInput.js";import{f as Q}from"./string.helper.js";import{F as X}from"./Formulario2.js";import{C as Y}from"./CustomDecimal.js";import{B as q}from"./Button.js";import"./ErrorIcon.js";import"./StyledGridOverlay.js";import"./Box.js";import"./Typography.js";import"./Loader.js";import"./Grid.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./index53.js";import"./BootstrapModal.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Fade.js";import"./Modal2.js";import"./isHostComponent.js";import"./useId.js";import"./Portal.js";import"./Paper.js";import"./BootstrapModalTitle.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./DialogTitle.js";import"./dialogTitleClasses.js";import"./IconButton.js";import"./ButtonBase.js";import"./Paid.js";import"./BootstrapDivContent.js";import"./Divider.js";import"./index18.js";import"./HeaderTitle.js";import"./StyledSpeedDial.js";import"./Assignment.js";import"./FabButtonAction.js";import"./react-is.production.min.js";import"./AssignmentRounded.js";import"./Tooltip.js";import"./Popper.js";import"./Grow.js";import"./SpeedDial.module.js";import"./Stack.js";import"./index33.js";import"./DialogActions.js";import"./TextField.js";import"./useFormControl.js";import"./formControlState.js";import"./List.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";import"./regex.js";import"./Loader2.js";import"./useForm.js";import"./object.helper.js";import"./array.js";import"./upperFirst.js";import"./Lazy.js";import"./useGetDefaultValues.js";import"./ContainerFormulario.js";import"./react-number-format.es.js";const Z="_container_dmktn_1",j="_fields_dmktn_15",tt="_child_dmktn_22";var s={container:Z,fields:j,child:tt};const vo=()=>{const{form:e}=O.exports.useContext(X),{formState:i,errors:t,onInputChange:r,setFormState:g}=e,{gastos:l}=i;return n("div",{className:h.paper,children:[m("span",{className:h.titleItem,children:"Gastos varios mensuales"}),l.map((a,o)=>{var u,f,v,x,C,N,b,_,T,k,z,F,G,I,W,$,y,D,w,A,B,R,S,M,P;return n("fieldset",{className:s.container,children:[m("legend",{children:"Gasto"}),n("div",{className:s.fields,children:[m("div",{className:s.child,children:m(p,{name:`gastos.${o}.texto`,label:"Descripci\xF3n",fullWidth:!0,error:!!((f=(u=t==null?void 0:t.gastos)==null?void 0:u[o])!=null&&f.texto),helperText:(C=(x=(v=t==null?void 0:t.gastos)==null?void 0:v[o])==null?void 0:x.texto)==null?void 0:C.message,size:"small",onChange:r})}),m("div",{className:s.child,children:m(p,{name:`gastos.${o}.nombre`,label:"Nombre",fullWidth:!0,error:!!((b=(N=t==null?void 0:t.gastos)==null?void 0:N[o])!=null&&b.nombre),helperText:(k=(T=(_=t==null?void 0:t.gastos)==null?void 0:_[o])==null?void 0:T.nombre)==null?void 0:k.message,size:"small",onChange:r})}),m("div",{className:s.child,children:m(p,{name:`gastos.${o}.ruc`,label:"RUC",fullWidth:!0,error:!!((F=(z=t==null?void 0:t.gastos)==null?void 0:z[o])!=null&&F.ruc),helperText:(W=(I=(G=t==null?void 0:t.gastos)==null?void 0:G[o])==null?void 0:I.ruc)==null?void 0:W.message,size:"small",onChange:r})}),m("div",{className:s.child,children:m(p,{name:`gastos.${o}.dv`,label:"DV",fullWidth:!0,error:!!((y=($=t==null?void 0:t.gastos)==null?void 0:$[o])!=null&&y.dv),helperText:(A=(w=(D=t==null?void 0:t.gastos)==null?void 0:D[o])==null?void 0:w.dv)==null?void 0:A.message,size:"small",onChange:r})}),m("div",{className:s.child,children:m(p,{name:`gastos.${o}.valor`,label:"Total",fullWidth:!0,error:!!((R=(B=t==null?void 0:t.gastos)==null?void 0:B[o])!=null&&R.valor),helperText:(P=(M=(S=t==null?void 0:t.gastos)==null?void 0:S[o])==null?void 0:M.valor)==null?void 0:P.message,size:"small",onChange:r,InputProps:{inputComponent:Y}})})]})]},o)}),n("span",{className:h.titleItem,children:["total de gastos"," ",Q(l.map(a=>Number(a.valor||0)).reduce((a,o)=>a+o))]}),m(q,{variant:"contained",color:"primary",onClick:()=>{const a=l;a.push({id:0,dv:"",id_formulario430:0,nombre:"",ruc:"",texto:"",valor:""}),g(d(c({},i),{gastos:a}))},children:"Agregar gasto"}),l.length>1&&m(q,{variant:"contained",color:"error",onClick:()=>{const a=l;a.pop(),g(d(c({},i),{gastos:a}))},children:"Remover \xFAltimo gasto"})]})};export{vo as default};
