var N=Object.defineProperty,R=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var z=(m,r,e)=>r in m?N(m,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):m[r]=e,u=(m,r)=>{for(var e in r||(r={}))J.call(r,e)&&z(m,e,r[e]);if(S)for(var e of S(r))K.call(r,e)&&z(m,e,r[e]);return m},x=(m,r)=>R(m,q(r));import{u as O,h as Q}from"./array.js";import{D as M}from"./DecimalInput.js";import{T as h}from"./TextInput.js";import{C as U}from"./CustomDecimal.js";import{S as V}from"./SelectHookForm.js";import{f as w}from"./string.helper.js";import{_ as X}from"./usePrevious.js";import{r as Y,j,F as Z,a as i}from"./index.js";import{C as L}from"./CustomTable.js";import{G as s}from"./Grid.js";import{I as ee}from"./InputAdornment.js";import{B as G}from"./Button.js";import"./upperFirst.js";import"./TextField.js";import"./FormHelperText.js";import"./useControlled.js";import"./react-is.production.min.js";import"./Menu.js";import"./Modal.js";import"./Backdrop.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./GlobalStyles.js";import"./react-number-format.es.js";import"./Box.js";import"./extendSxProp.js";import"./MenuItem.js";import"./ButtonBase.js";import"./useIsFocusVisible.js";import"./listItemIconClasses.js";import"./Divider.js";import"./listItemTextClasses.js";import"./regex.js";import"./Search.js";import"./jsx-runtime_commonjs-proxy.js";import"./Clear.js";import"./IconButton.js";import"./Typography.js";import"./FormGroup.js";import"./FormControlLabel.js";import"./Checkbox.js";import"./SkipNextOutlined.js";import"./Pagination.js";import"./useAsyncRetry.js";import"./Loader.js";import"./BootstrapTooltip.js";import"./Tooltip.js";import"./jwt-decode.esm.js";import"./ContentProvider.js";import"./useModal.js";import"./SpeedDial.module.js";import"./Modal2.js";import"./Close2.js";import"./Error.js";import"./platform.js";import"./Stack.js";const pt=()=>{var T,y,_,C,F;const{register:m,control:r,formState:{errors:e},watch:b}=O(),{fields:n,append:H,remove:f,insert:v}=Q({control:r,name:"rubros"}),l=b("total_ingresos"),p=b("rubros"),o=b("total_licor"),g=X(o);return Y.exports.useEffect(()=>{o>0&&n&&(n.length>0&&n[0].porcentaje!==100||n.length===0)?v(0,{actividad:void 0,porcentaje:100},{shouldFocus:!1}):o<=0&&g&&g>0&&n&&n[0].porcentaje===100&&f(0)},[v,o,n,g,f]),j(Z,{children:[j(s,{container:!0,spacing:1,sx:{mb:1},children:[i(s,{item:!0,xs:12,sm:6,children:i(h,u({label:"D\xEDgito verificador",fullWidth:!0,error:!!(e!=null&&e.dv),helperText:(T=e==null?void 0:e.dv)==null?void 0:T.message},m("dv")))}),i(s,{item:!0,xs:12,sm:6,children:i(h,u({label:"No. contribuyente",fullWidth:!0,error:!!(e!=null&&e.no_contribuyente),helperText:(y=e==null?void 0:e.no_contribuyente)==null?void 0:y.message},m("no_contribuyente")))}),i(s,{item:!0,xs:12,sm:6,md:3,children:i(V,{control:r,label:"Municipio",options:["Panam\xE1","San Miguelito","Chorrera"],error:!!(e!=null&&e.municipio),helperText:(_=e==null?void 0:e.municipio)==null?void 0:_.message,name:"municipio"})}),i(s,{item:!0,xs:12,sm:6,md:3,children:i(M,{label:"Total de ingresos sin licor",name:"total_ingresos",fullWidth:!0,error:!!(e!=null&&e.total_ingresos),helperText:(C=e==null?void 0:e.total_ingresos)==null?void 0:C.message})}),i(s,{item:!0,xs:12,sm:6,md:3,children:i(M,{label:"Total de ingresos por licor",name:"total_licor",fullWidth:!0,error:!!(e!=null&&e.total_licor),helperText:(F=e==null?void 0:e.total_licor)==null?void 0:F.message})}),i(s,{item:!0,xs:12,sm:6,md:3,children:i(h,{label:"Total de ingresos",fullWidth:!0,value:l+o,disabled:!0,InputProps:{inputComponent:U}})})]}),i(L,{title:"Ingresos seg\xFAn actividades",tableHeader:["Rubro","Actividad","Porcentaje","Total"],size:"small",tableBody:n==null?void 0:n.map((a,t)=>{var c,d,A,k,D,W,$,I,P,B,E;return[`Rubro
          ${t===0&&o>0&&a.porcentaje===100?"perteneciente a ingresos por licor":t+1}`,i(h,x(u({label:"Actividad",fullWidth:!0,error:!!((d=(c=e==null?void 0:e.rubros)==null?void 0:c[t])!=null&&d.actividad),helperText:(D=(k=(A=e==null?void 0:e.rubros)==null?void 0:A[t])==null?void 0:k.actividad)==null?void 0:D.message},m(`rubros.${t}.actividad`)),{size:"small"}),`${a.id}-actividad`),i(h,x(u({label:"Porcentaje",fullWidth:!0,error:!!(($=(W=e==null?void 0:e.rubros)==null?void 0:W[t])!=null&&$.porcentaje),helperText:(B=(P=(I=e==null?void 0:e.rubros)==null?void 0:I[t])==null?void 0:P.porcentaje)==null?void 0:B.message},m(`rubros.${t}.porcentaje`)),{disabled:t===0&&o>0&&a.porcentaje===100,InputProps:{endAdornment:i(ee,{position:"end",children:"%"})},InputLabelProps:t===0&&o>0&&a.porcentaje===100?{shrink:!0}:void 0,size:"small"}),`${a.id}-porcentaje`),w((t===0&&(o!=null?o:0)>0&&p[t].porcentaje===100?o!=null?o:0:l!=null?l:0)*(((E=p[t].porcentaje)!=null?E:0)/100))]}).concat([["","Totales",p&&p.length>0?`${p.map(a=>{var t;return Number((t=a.porcentaje)!=null?t:0)}).reduce((a,t)=>a+t)}%`:"0%",i("span",{style:{display:"inline-block",borderTop:"1px solid black",borderBottom:"double black"},children:w(`${p&&p.length>0?p==null?void 0:p.map((a,t)=>{var c,d;return(t===0&&(o!=null?o:0)>0&&((c=a.porcentaje)!=null?c:0)===100?o!=null?o:0:l!=null?l:0)*(((d=a.porcentaje)!=null?d:0)/100)}).reduce((a,t)=>a+t):0}`)},"totales")]])}),j("div",{style:{textAlign:"center",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:10},children:[i(G,{variant:"outlined",onClick:()=>H({actividad:void 0,porcentaje:void 0},{shouldFocus:!1}),children:"Agregar rubro"}),n.length>1&&i(G,{variant:"outlined",color:"error",onClick:()=>f(n.length-1),style:{marginLeft:10},children:"Eliminar rubro"})]})]})};export{pt as default};
