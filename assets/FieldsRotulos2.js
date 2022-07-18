var F=Object.defineProperty,I=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var T=(o,t,r)=>t in o?F(o,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[t]=r,l=(o,t)=>{for(var r in t||(t={}))$.call(t,r)&&T(o,r,t[r]);if(A)for(var r of A(t))k.call(t,r)&&T(o,r,t[r]);return o},a=(o,t)=>I(o,z(t));import{T as y}from"./TextInput.js";import{u as E,c as V}from"./yup.module.js";import{C as W}from"./CustomTable.js";import{d as w}from"./Help.js";import{B as D}from"./BootstrapTooltip.js";import{j as b,a as e}from"./index.js";import{I as H}from"./IconButton.js";import{B}from"./Button.js";import"./TextField.js";import"./useFormControl.js";import"./useControlled.js";import"./formControlState.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./Fade.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";import"./emotion-react.browser.esm.js";import"./Search.js";import"./jsx-runtime_commonjs-proxy.js";import"./useIsFocusVisible.js";import"./Clear.js";import"./Box.js";import"./Typography.js";import"./InputAdornment.js";import"./CircularProgress.js";import"./Grid.js";import"./FormGroup.js";import"./FormControlLabel.js";import"./Checkbox.js";import"./ButtonBase.js";import"./SkipNextOutlined.js";import"./Pagination.js";import"./TableRow.js";import"./Loader.js";import"./SpeedDial.module.js";import"./Modal.js";import"./Close2.js";import"./ModalTransition.js";import"./Warning.js";import"./CheckCircle.js";import"./DialogContent.js";import"./DialogActions.js";import"./LoadingButton.js";import"./SelectedCard.js";import"./Stack.js";import"./LinearProgress.js";import"./Tooltip.js";import"./Popper.js";const qt=()=>{const{register:o,control:t,formState:r}=E(),{errors:i}=r,{fields:p,append:C,remove:j}=V({control:t,name:"rotulos"});return b("div",{style:{marginTop:10},children:[e(W,{title:"Actividades",tableHeader:["Actividades","Actividad","Valor"],size:"small",titleAction:e(D,{title:"Esta secci\xF3n se puede dejar en blanco",children:e(H,{children:e(w,{})})}),tableBody:p==null?void 0:p.map((L,m)=>{var s,n,d,u,c,f,v,x,h,g;return[`Actividad ${m+1}`,e(y,a(l({label:"Actividad",fullWidth:!0,error:!!((n=(s=i==null?void 0:i.rotulos)==null?void 0:s[m])!=null&&n.rotulo),helperText:(c=(u=(d=i==null?void 0:i.rotulos)==null?void 0:d[m])==null?void 0:u.rotulo)==null?void 0:c.message},o(`rotulos.${m}.rotulo`)),{size:"small"})),e(y,a(l({label:"Valor",fullWidth:!0,error:!!((v=(f=i==null?void 0:i.rotulos)==null?void 0:f[m])!=null&&v.texto),helperText:(g=(h=(x=i==null?void 0:i.rotulos)==null?void 0:x[m])==null?void 0:h.texto)==null?void 0:g.message},o(`rotulos.${m}.texto`)),{size:"small"}))]})}),b("div",{style:{textAlign:"center",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:10},children:[e(B,{variant:"outlined",onClick:()=>C({rotulo:void 0,texto:void 0},{shouldFocus:!1}),children:"Agregar actividad"}),p.length>1&&e(B,{variant:"outlined",color:"error",onClick:()=>j(p.length-1),style:{marginLeft:10},children:"Eliminar actividad"})]})]})};export{qt as default};
