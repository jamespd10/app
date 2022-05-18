var O=Object.defineProperty;var k=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var G=(a,e,t)=>e in a?O(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,c=(a,e)=>{for(var t in e||(e={}))R.call(e,t)&&G(a,t,e[t]);if(k)for(var t of k(e))J.call(e,t)&&G(a,t,e[t]);return a};import{u as M,h as K}from"./array.js";import{S as l}from"./SelectHookForm.js";import{h as x,b as Q,d as D,f as I,g as U,j as V,i as X}from"./constantsLists.js";import{D as A}from"./DateInput.js";import{F as B}from"./FadeDisappearGrid.js";import{d as Y}from"./date.helper.js";import{a as r,j as b,r as N,F as Z}from"./index.js";import{T as L}from"./TimeInput.js";import{G as s}from"./Grid.js";import{P as rr}from"./Paper.js";import{T as er}from"./Typography.js";import{S as ar}from"./Stack.js";import{B as z}from"./Button.js";import{T as _}from"./TextInput.js";import{D as or}from"./DecimalInput.js";import"./upperFirst.js";import"./Box.js";import"./extendSxProp.js";import"./TextField.js";import"./useControlled.js";import"./react-is.production.min.js";import"./Menu.js";import"./Modal.js";import"./Backdrop.js";import"./isHostComponent.js";import"./Portal.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./GlobalStyles.js";import"./MenuItem.js";import"./ButtonBase.js";import"./useIsFocusVisible.js";import"./listItemIconClasses.js";import"./Divider.js";import"./listItemTextClasses.js";import"./nacionalidades.js";import"./MobileDatePicker.js";import"./MonthPicker.js";import"./usePickerState.js";import"./IconButton.js";import"./Modal2.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./Error.js";import"./InputAdornment.js";import"./index7.js";import"./index13.js";import"./index14.js";import"./CustomDecimal.js";import"./react-number-format.es.js";import"./string.helper.js";import"./regex.js";const sr={entrada1:"",salida1:"",entrada2:"",salida2:""},tr=()=>{const{formState:a,control:e,watch:t}=M(),{fields:i,append:T,remove:f}=K({control:e,name:"horasLaborales"}),m=t("rotativo"),v=()=>i.length===1&&T(sr),q=()=>i.length>1&&f(i.length-1);return r(s,{item:!0,xs:12,children:r(rr,{variant:"outlined",sx:{padding:1},children:b(s,{container:!0,item:!0,xs:12,spacing:1,direction:"column",children:[r(s,{item:!0,xs:12,children:b(er,{children:["Horas Laborales ",m&&"para turnos rotativos"]})}),r(s,{item:!0,xs:12,container:!0,spacing:1,children:i.map((g,o)=>{var n,d,p,h;return b(N.exports.Fragment,{children:[r(s,{item:!0,xs:6,md:3,children:r(L,{label:"Hora de entrada 1",name:`horasLaborales.${o}.entrada1`,error:!!(a.errors.horasLaborales&&a.errors.horasLaborales[o]&&a.errors.horasLaborales[o].entrada1),helperText:a.errors.horasLaborales&&a.errors.horasLaborales[o]&&a.errors.horasLaborales[o].entrada1?(n=a.errors.horasLaborales[o].entrada1)==null?void 0:n.message:void 0,required:!0})}),r(s,{item:!0,xs:6,md:3,children:r(L,{label:"Hora de salida 1",name:`horasLaborales.${o}.salida1`,error:!!(a.errors.horasLaborales&&a.errors.horasLaborales[o]&&a.errors.horasLaborales[o].salida1),helperText:a.errors.horasLaborales&&a.errors.horasLaborales[o]&&a.errors.horasLaborales[o].salida1?(d=a.errors.horasLaborales[o].salida1)==null?void 0:d.message:void 0,required:!0})}),r(s,{item:!0,xs:6,md:3,children:r(L,{label:"Hora de entrada 2",name:`horasLaborales.${o}.entrada2`,error:!!(a.errors.horasLaborales&&a.errors.horasLaborales[o]&&a.errors.horasLaborales[o].entrada2),helperText:a.errors.horasLaborales&&a.errors.horasLaborales[o]&&a.errors.horasLaborales[o].entrada2?(p=a.errors.horasLaborales[o].entrada2)==null?void 0:p.message:void 0,required:!0})}),r(s,{item:!0,xs:6,md:3,children:r(L,{label:"Hora de salida 2",name:`horasLaborales.${o}.salida2`,error:!!(a.errors.horasLaborales&&a.errors.horasLaborales[o]&&a.errors.horasLaborales[o].salida2),helperText:a.errors.horasLaborales&&a.errors.horasLaborales[o]&&a.errors.horasLaborales[o].salida2?(h=a.errors.horasLaborales[o].salida2)==null?void 0:h.message:void 0,required:!0})})]},`${g.id}`)})}),r(s,{item:!0,xs:12,justifyContent:"center",children:b(ar,{direction:"row",spacing:1,justifyContent:"center",children:[i.length===1&&m&&r(z,{variant:"outlined",onClick:v,children:"Agregar"}),i.length>1&&r(z,{variant:"outlined",color:"error",onClick:q,children:"Eliminar"})]})})]})})})},ie=()=>{var g,o,n,d,p,h,F,P,S,w,H,C,j,y,E,W,$;const{register:a,formState:{errors:e},watch:t,control:i}=M(),T=t("isProbatorio"),f=t("fecha_ini"),m=t("fecha_fin"),v=t("definido"),q=N.exports.useMemo(()=>[...x.filter(u=>u==="Domingo"),...x.filter(u=>!u.includes("Domingo")),"S\xE1bado y Domingo"],[]);return r(Z,{children:b(s,{container:!0,spacing:1,direction:"row",wrap:"wrap",sx:{"& > :not(style)":{flexGrow:1}},children:[r(s,{item:!0,sm:6,md:4,children:r(l,{control:i,label:"Tipo de contrato",options:Q,error:!!e.tipo_contrato,helperText:(g=e.tipo_contrato)==null?void 0:g.message,name:"tipo_contrato",required:!0})}),r(s,{item:!0,sm:6,md:4,children:r(l,{control:i,label:"Definido",options:D,values:[!1,!0],error:!!e.definido,helperText:(o=e.definido)==null?void 0:o.message,name:"definido",required:!0})}),r(s,{item:!0,sm:6,md:4,children:r(A,{label:"Fecha de inicio",name:"fecha_ini",helperText:(n=e.fecha_ini)==null?void 0:n.message,error:!!e.fecha_ini,required:!0})}),r(B,{show:v===!0,item:!0,sm:6,md:4,children:r(A,{label:"Fecha de finalizaci\xF3n",name:"fecha_fin",helperText:(d=e.fecha_fin)!=null&&d.message?(p=e.fecha_fin)==null?void 0:p.message:f&&m?Y(f,m):void 0,error:!!e.fecha_fin,required:!0})}),r(s,{item:!0,sm:6,md:4,children:r(l,{control:i,label:"Con tiempo de prueba",options:D,error:!!e.isProbatorio,helperText:(h=e.isProbatorio)==null?void 0:h.message,name:"isProbatorio",required:!0})}),r(B,{show:T==="Si",item:!0,sm:6,md:4,children:r(l,{control:i,label:"Tiempo de prueba",options:I,values:I,error:!!e.tiempo_proba,helperText:(F=e.tiempo_proba)==null?void 0:F.message,name:"tiempo_proba",required:!0})}),r(s,{item:!0,sm:6,md:4,children:r(_,c({label:"Cargo",fullWidth:!0,error:!!e.cargo,helperText:(P=e.cargo)==null?void 0:P.message,required:!0},a("cargo")))}),r(s,{item:!0,sm:6,md:4,children:r(_,c({label:"Horas de jornada",fullWidth:!0,error:!!e.horas,helperText:(S=e.horas)==null?void 0:S.message,required:!0},a("horas")))}),r(s,{item:!0,sm:6,md:4,children:r(_,c({label:"Horas de descanso",fullWidth:!0,error:!!e.descanso,helperText:(w=e.descanso)==null?void 0:w.message,required:!0},a("descanso")))}),r(s,{item:!0,sm:6,md:4,children:r(l,{control:i,label:"Horas semanales",options:U,error:!!e.horas_semanales,helperText:(H=e.horas_semanales)==null?void 0:H.message,name:"horas_semanales",required:!0})}),r(s,{item:!0,sm:6,md:4,children:r(l,{control:i,label:"D\xEDa libre",options:q,error:!!e.dia_libre,helperText:(C=e.dia_libre)==null?void 0:C.message,name:"dia_libre",required:!0})}),r(s,{item:!0,sm:6,md:4,children:r(l,{control:i,label:"Rotativo",options:D,values:[!1,!0],error:!!e.rotativo,helperText:(j=e.rotativo)==null?void 0:j.message,name:"rotativo",required:!0})}),r(s,{item:!0,sm:6,md:4,children:r(or,{name:"salario",label:"Salario",fullWidth:!0,error:!!e.salario,helperText:(y=e.salario)==null?void 0:y.message,required:!0})}),r(s,{item:!0,xs:"auto",children:r(l,{control:i,label:"Forma de pago del salario",options:V,error:!!e.forma_pago,helperText:(E=e.forma_pago)==null?void 0:E.message,name:"forma_pago",required:!0})}),r(s,{item:!0,xs:"auto",children:r(l,{control:i,label:"D\xEDa de pago",options:[...X.filter(u=>!x.includes(u)),...x],error:!!e.dia_pago,helperText:(W=e.dia_pago)==null?void 0:W.message,name:"dia_pago",required:!0})}),r(tr,{}),r(s,{item:!0,xs:12,children:r(_,c({label:"Observaciones",multiline:!0,rows:4,fullWidth:!0,error:!!e.observaciones,helperText:($=e.observaciones)==null?void 0:$.message,required:!0},a("observaciones")))})]})})};export{ie as default};
