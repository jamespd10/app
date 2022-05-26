var q=Object.defineProperty,F=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var v=(i,a,r)=>a in i?q(i,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[a]=r,n=(i,a)=>{for(var r in a||(a={}))j.call(a,r)&&v(i,r,a[r]);if(b)for(var r of b(a))C.call(a,r)&&v(i,r,a[r]);return i},g=(i,a)=>F(i,W(a));import{r as l,q as z,ac as D,a as t,F as I,j as P}from"./index.js";import{D as o}from"./DecimalInput.js";import{T as R}from"./TextInput.js";import{u as S,C as k}from"./array.js";import{L as T}from"./Loader.js";import"./BootstrapTooltip.js";import"./jwt-decode.esm.js";import"./ContentProvider.js";import"./Modal2.js";import"./platform.js";import{G as m}from"./Grid.js";import{P as E}from"./Paper.js";import{F as L}from"./FormGroup.js";import{F as O}from"./FormControlLabel.js";import{C as A}from"./Checkbox.js";import"./CustomDecimal.js";import"./react-number-format.es.js";import"./string.helper.js";import"./regex.js";import"./TextField.js";import"./useControlled.js";import"./react-is.production.min.js";import"./Menu.js";import"./Modal.js";import"./Backdrop.js";import"./isHostComponent.js";import"./Portal.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./GlobalStyles.js";import"./upperFirst.js";import"./Typography.js";import"./extendSxProp.js";import"./Tooltip.js";import"./useIsFocusVisible.js";import"./appendOwnerState.js";import"./useModal.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./DialogTitle.js";import"./IconButton.js";import"./ButtonBase.js";import"./Error.js";import"./Button.js";const G=l.exports.lazy(()=>z(()=>import("./OtrosImpuestos.js"),["assets/OtrosImpuestos.js","assets/TextInput.js","assets/index.js","assets/index.css","assets/TextField.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Menu.js","assets/Modal.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/DecimalInput.js","assets/array.js","assets/upperFirst.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/Grid.js","assets/extendSxProp.js","assets/Typography.js","assets/Stack.js","assets/Button.js","assets/ButtonBase.js","assets/useIsFocusVisible.js"])),y=l.exports.lazy(()=>z(()=>import("./SumatoriaRenta.js"),["assets/SumatoriaRenta.js","assets/string.helper.js","assets/index.js","assets/index.css","assets/regex.js","assets/array.js","assets/upperFirst.js","assets/Grid.js","assets/extendSxProp.js"])),Se=()=>{var s,p,c,d,h,x,_;const{formState:i,register:a,control:r}=S(),{errors:e}=i,{factura:u}=D();return t(I,{children:t(m,{item:!0,xs:12,children:t(E,{variant:"outlined",sx:{p:1.2,border:`4px solid ${u==="todas"?"blue":"black"}`},children:P(m,{container:!0,spacing:1,children:[t(m,{item:!0,xs:12,sm:6,children:t(o,{label:"Declaraci\xF3n de renta",name:"declaracion_renta",fullWidth:!0,required:!0,error:!!(e!=null&&e.declaracion_renta),helperText:(s=e==null?void 0:e.declaracion_renta)==null?void 0:s.message,size:"small"})}),t(m,{item:!0,xs:12,sm:6,children:t(o,{label:"Monto en ventas - renta",name:"monto_ventas",fullWidth:!0,required:!0,error:!!(e!=null&&e.monto_ventas),helperText:(p=e==null?void 0:e.monto_ventas)==null?void 0:p.message,size:"small"})}),t(m,{item:!0,xs:12,children:t(o,{label:"Aviso",name:"aviso",fullWidth:!0,required:!0,error:!!(e!=null&&e.aviso),helperText:(c=e==null?void 0:e.aviso)==null?void 0:c.message,size:"small"})}),t(m,{item:!0,xs:12,md:6,children:t(o,{label:"Renta natural",name:"renta_natural",fullWidth:!0,required:!0,error:!!(e!=null&&e.renta_natural),helperText:(d=e==null?void 0:e.renta_natural)==null?void 0:d.message,size:"small"})}),t(m,{item:!0,xs:12,sm:6,children:t(o,{label:"Seguro educativo",name:"seguro_educativo",fullWidth:!0,required:!0,error:!!(e!=null&&e.seguro_educativo),helperText:(h=e==null?void 0:e.seguro_educativo)==null?void 0:h.message,size:"small"})}),t(m,{item:!0,xs:12,md:6,children:t(o,{label:"Renta jur\xEDdica",name:"renta_juridica",fullWidth:!0,required:!0,error:!!(e!=null&&e.renta_juridica),helperText:(x=e==null?void 0:e.renta_juridica)==null?void 0:x.message,size:"small"})}),t(m,{item:!0,xs:12,sm:6,children:t(o,{label:"Impuesto complementario",name:"impuesto_complementario",fullWidth:!0,required:!0,error:!!(e!=null&&e.impuesto_complementario),helperText:(_=e==null?void 0:e.impuesto_complementario)==null?void 0:_.message,size:"small"})}),t(l.exports.Suspense,{fallback:t(T,{}),children:t(G,{})}),u==="renta"&&t(m,{item:!0,xs:12,children:t(R,n({label:"Notas",multiline:!0,rows:4,fullWidth:!0},a("notas")))}),t(m,{item:!0,xs:12,children:t(L,{children:t(k,{name:"sin_operacion",control:r,render:({field:f})=>t(O,{control:t(A,g(n({},f),{defaultChecked:Boolean(Number(f.value))})),label:"Sin Operaciones"})})})}),t(l.exports.Suspense,{fallback:t(T,{}),children:t(y,{})})]})})})})};export{Se as default};
