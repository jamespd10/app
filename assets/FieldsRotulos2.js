var $=Object.defineProperty,I=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var y=(o,t,i)=>t in o?$(o,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[t]=i,p=(o,t)=>{for(var i in t||(t={}))k.call(t,i)&&y(o,i,t[i]);if(T)for(var i of T(t))E.call(t,i)&&y(o,i,t[i]);return o},a=(o,t)=>I(o,z(t));import{T as b}from"./TextInput.js";import{u as V,j as W}from"./array.js";import{C as w}from"./CustomTable.js";import{d as D}from"./Help.js";import{B as H}from"./BootstrapTooltip.js";import{j,a as e}from"./index.js";import{I as L}from"./IconButton.js";import{B}from"./Button.js";import"./TextField.js";import"./useControlled.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./GlobalStyles.js";import"./upperFirst.js";import"./Search.js";import"./jsx-runtime_commonjs-proxy.js";import"./useIsFocusVisible.js";import"./Clear.js";import"./Box.js";import"./Typography.js";import"./InputAdornment.js";import"./Grid.js";import"./FormGroup.js";import"./FormControlLabel.js";import"./Checkbox.js";import"./ButtonBase.js";import"./SkipNextOutlined.js";import"./Pagination.js";import"./TableRow.js";import"./Loader.js";import"./ContentProvider.js";import"./useModal.js";import"./SpeedDial.module.js";import"./Modal.js";import"./Close2.js";import"./ModalTransition.js";import"./Error.js";import"./DialogContent.js";import"./LoadingButton.js";import"./SelectedCard.js";import"./Stack.js";import"./LinearProgress.js";import"./Tooltip.js";import"./Popper.js";import"./appendOwnerState.js";const Lt=()=>{const{register:o,control:t,formState:i}=V(),{errors:r}=i,{fields:l,append:C,remove:F}=W({control:t,name:"rotulos"});return j("div",{style:{marginTop:10},children:[e(w,{title:"Actividades",tableHeader:["Actividades","Actividad","Valor"],size:"small",titleAction:e(H,{title:"Esta secci\xF3n se puede dejar en blanco",children:e(L,{children:e(D,{})})}),tableBody:l==null?void 0:l.map((s,m)=>{var d,n,c,u,f,v,x,h,g,A;return[`Actividad ${m+1}`,e(b,a(p({label:"Actividad",fullWidth:!0,error:!!((n=(d=r==null?void 0:r.rotulos)==null?void 0:d[m])!=null&&n.rotulo),helperText:(f=(u=(c=r==null?void 0:r.rotulos)==null?void 0:c[m])==null?void 0:u.rotulo)==null?void 0:f.message},o(`rotulos.${m}.rotulo`)),{size:"small"}),`${s.id}-actividad`),e(b,a(p({label:"Valor",fullWidth:!0,error:!!((x=(v=r==null?void 0:r.rotulos)==null?void 0:v[m])!=null&&x.texto),helperText:(A=(g=(h=r==null?void 0:r.rotulos)==null?void 0:h[m])==null?void 0:g.texto)==null?void 0:A.message},o(`rotulos.${m}.texto`)),{size:"small"}),`${s.id}-valor`)]})}),j("div",{style:{textAlign:"center",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:10},children:[e(B,{variant:"outlined",onClick:()=>C({rotulo:void 0,texto:void 0},{shouldFocus:!1}),children:"Agregar actividad"}),l.length>1&&e(B,{variant:"outlined",color:"error",onClick:()=>F(l.length-1),style:{marginLeft:10},children:"Eliminar actividad"})]})]})};export{Lt as default};
