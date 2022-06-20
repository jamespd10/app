var j=Object.defineProperty,I=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var C=(e,a,t)=>a in e?j(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,_=(e,a)=>{for(var t in a||(a={}))W.call(a,t)&&C(e,t,a[t]);if(T)for(var t of T(a))V.call(a,t)&&C(e,t,a[t]);return e},M=(e,a)=>I(e,O(a));import{c as S,b as q,h as E,d as n,e as N,u as R,F as H}from"./array.js";import{d as p,h as P}from"./regex.js";import{q as b,d as D}from"./constantsLists.js";import Q from"./StepperForm.js";import{u as z}from"./useStepper.js";import{r as y,a as r,j as v,b as U,l as J,a0 as K,F as w,ak as X}from"./index.js";import"./BootstrapTooltip.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import{B as Y}from"./BackgroundLoader.js";import"./SelectedCard.js";import{F as G}from"./FadeDisappearGrid.js";import{D as Z}from"./DateInput.js";import{D as f}from"./DecimalInput.js";import{S as $}from"./SelectHookForm.js";import{T as ee}from"./TextInput.js";import{g as B}from"./date.helper.js";import{G as m}from"./Grid.js";import{s as ae}from"./index13.js";import{u as re}from"./useFirstFetch.js";import{L as ie}from"./Loader.js";import oe from"./Modal.js";import{C as te}from"./Card.js";import"./upperFirst.js";import"./Typography.js";import"./Box.js";import"./createSvgIcon.js";import"./Button.js";import"./ButtonBase.js";import"./useIsFocusVisible.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./useControlled.js";import"./isHostComponent.js";import"./Grow.js";import"./useModal.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./LoadingButton.js";import"./Backdrop.js";import"./Modal2.js";import"./Paper.js";import"./IconButton.js";import"./Error.js";import"./useFetch.js";import"./useHttpService.js";import"./MobileDatePicker.js";import"./MonthPicker.js";import"./usePickerState.js";import"./InputAdornment.js";import"./FormHelperText.js";import"./index7.js";import"./CustomDecimal.js";import"./react-number-format.es.js";import"./string.helper.js";import"./TextField.js";import"./react-is.production.min.js";import"./List.js";import"./GlobalStyles.js";import"./MenuItem.js";import"./listItemIconClasses.js";import"./Divider.js";import"./listItemTextClasses.js";import"./useAsyncRetry.js";const se=S().shape({motivo:q().trim().required("Favor seleccionar el motivo de liquidaci\xF3n").test("check-list","Favor seleccionar un motivo de la lista",e=>!!(e&&b.includes(e))),fecha_ini:E().typeError("Favor de seleccionar la fecha de inicio").required("Favor de seleccionar la fecha de inicio"),fecha_liquidacion:E().typeError("Favor de seleccionar la fecha de liquidaci\xF3n").required("Favor de seleccionar la fecha de liquidaci\xF3n"),is_total_salarios:q().trim().required("Favor seleccione si el usuario ingresa los salarios por mes o d\xE1 el total").test("check-decision","Favor seleccionar si o no",e=>!!(e&&D.includes(e))),total_suma_salarios:n().transform((e,a)=>a===""?null:e).nullable().when("is_total_salarios",{is:"Si",then:n().typeError("Favor ingresar la suma de salarios").positive("Favor ingresar un n\xFAmero positivo").min(1,"Favor ingresar la suma de salarios").max(9e10,"Favor ingresar un n\xFAmero de m\xE1ximo 10 d\xEDgitos").test("check-decimal","Favor ingresar m\xE1ximo dos decimales",e=>!!(e&&e.toString().match(p)))}),salario_segunda_quincena:n().transform((e,a)=>a===""?null:e).nullable().when("is_total_salarios",{is:"No",then:n().typeError("Favor ingresar el salario").positive("Favor ingresar un n\xFAmero positivo").min(1,"Favor ingresar el salario").max(9e10,"Favor ingresar un n\xFAmero de m\xE1ximo 10 d\xEDgitos").test("check-decimal","Favor ingresar m\xE1ximo dos decimales",e=>!!(e&&e.toString().match(p)))}),salario_segunda_quincena1:n().transform((e,a)=>a===""?null:e).nullable().when("is_total_salarios",{is:"No",then:n().typeError("Favor ingresar el salario").positive("Favor ingresar un n\xFAmero positivo").min(1,"Favor ingresar el salario").max(9e10,"Favor ingresar un n\xFAmero de m\xE1ximo 10 d\xEDgitos").test("check-decimal","Favor ingresar m\xE1ximo dos decimales",e=>!!(e&&e.toString().match(p)))}),salario_segunda_quincena2:n().transform((e,a)=>a===""?null:e).nullable().when(["is_total_salarios","fecha_liquidacion"],{is:(e,a)=>e==="No"&&[3,7,11].includes(new Date(a).getMonth())&&new Date(a).getDate()<15,then:n().typeError("Favor ingresar el salario").positive("Favor ingresar un n\xFAmero positivo").min(1,"Favor ingresar el salario").max(9e10,"Favor ingresar un n\xFAmero de m\xE1ximo 10 d\xEDgitos").test("check-decimal","Favor ingresar m\xE1ximo dos decimales",e=>!!(e&&e.toString().match(p)))}),salario_mensual_termino:n().typeError("Favor de ingresar un n\xFAmero").positive("Favor de ingresar un n\xFAmero positivo").required("Favor de ingresar el salario mensual").min(1,"Favor ingresar el salario mensual").max(9e10,"Favor ingresar un n\xFAmero de m\xE1ximo 10 d\xEDgitos").test("check-decimal","Favor ingresar m\xE1ximo dos decimales",e=>!!(e&&e.toString().match(p))),observacion:q().trim().nullable(!0).test("check-str","Favor ingresar solo caracteres del abecedario y/o n\xFAmeros",e=>!(e&&!e.match(P)))}),ne=S().shape({total_salarios:N().nullable().when("is_total_salarios",{is:"No",then:N().typeError("Favor ingresar los salarios mensuales").of(S().shape({salario:n().typeError("Favor de ingresar la cantidad del salario").positive("La cantidad del salario debe ser positiva").min(.1,"La cantidad del salario debe ser mayor a 0").max(9e10,"Favor ingresar un n\xFAmero de m\xE1ximo 10 d\xEDgitos").required("Favor de ingresar la cantidad del salario").test("check-decimal","Favor ingresar m\xE1ximo dos decimales",e=>!!(e&&e.toString().match(p))),mes:E().typeError("Favor ingresar el mes del salario").required("Favor ingresar el mes del salario"),id_sal:n().transform((e,a)=>a===""?null:e).typeError("Favor ingresar un n\xFAmero").nullable(!0).integer("Favor ingresar un n\xFAmero entero").positive("Favor ingresar un n\xFAmero positivo")})).required("Favor ingresar los salarios mensuales")})}),le=()=>{var s,i;const{formState:{errors:e},watch:a,setValue:t}=R(),o=a("fecha_liquidacion"),d=a("is_total_salarios"),c=a("salario_segunda_quincena1"),u=a("salario_segunda_quincena2");return y.exports.useEffect(()=>{(()=>{t("salario_segunda_quincena",c+([3,7,11].includes(new Date(o).getMonth())&&new Date(o).getDate()<15?u:0))})()},[c,u,o,t]),r(G,{show:!!(o&&d==="No"),item:!0,xs:"auto",children:v(m,{container:!0,spacing:1,children:[r(m,{item:!0,xs:12,sm:[3,7,11].includes(new Date(o).getMonth())&&new Date(o).getDate()<15?6:12,children:r(f,{name:"salario_segunda_quincena1",label:`Salario de \xFAltima quincena de ${B([3,7,11].includes(new Date(o).getMonth())&&new Date(o).getDate()<15?ae(new Date(o),4):o)}`,fullWidth:!0,error:!!e.salario_segunda_quincena,helperText:(s=e.salario_segunda_quincena)==null?void 0:s.message,required:!0})}),[3,7,11].includes(new Date(o).getMonth())&&new Date(o).getDate()<15&&r(m,{item:!0,xs:12,sm:6,children:r(f,{name:"salario_segunda_quincena2",label:`Salario de \xFAltima quincena de ${B(o)}`,fullWidth:!0,error:!!e.salario_segunda_quincena,helperText:(i=e.salario_segunda_quincena)==null?void 0:i.message,required:!0})})]})})},me=y.exports.lazy(()=>U(()=>import("./TotalSalarios.js"),["assets/TotalSalarios.js","assets/index.js","assets/index3.css","assets/array.js","assets/upperFirst.js","assets/DecimalInput.js","assets/TextInput.js","assets/TextField.js","assets/FormHelperText.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/date.helper.js","assets/index13.js","assets/Grid.js","assets/Typography.js"])),de=({id:e,fecha_ini:a})=>{var x,F,h,A,k,L;const{loading:t,value:o}=re({url:`/admin/contratos/${e}/salarios`}),d=J(),c=K(d.breakpoints.down("lg")),{register:u,formState:{errors:s},watch:i,control:g}=R(),l=i("is_total_salarios");return r(w,{children:v(m,{container:!0,spacing:1,direction:"row",wrap:"wrap",sx:{"& > :not(style)":{flexGrow:1}},children:[r(m,{item:!0,xs:12,sm:6,md:4,lg:l==="Si"?4:3,children:r($,{control:g,label:"Motivo de liquidaci\xF3n",options:b,values:b,error:!!s.motivo,helperText:(x=s.motivo)==null?void 0:x.message,name:"motivo",required:!0})}),r(m,{item:!0,xs:12,sm:6,md:4,lg:l==="Si"?4:3,children:r(f,{name:"salario_mensual_termino",label:"Salario mensual al t\xE9rmino de labores",fullWidth:!0,error:!!s.salario_mensual_termino,helperText:(F=s.salario_mensual_termino)==null?void 0:F.message,required:!0})}),r(m,{item:!0,xs:12,sm:6,md:4,lg:l==="Si"?4:3,children:r(Z,{label:"Fecha de liquidaci\xF3n",name:"fecha_liquidacion",error:!!s.fecha_liquidacion,helperText:(h=s.fecha_liquidacion)==null?void 0:h.message,required:!0,minDate:new Date(a)})}),r(m,{item:!0,xs:12,sm:6,md:l==="Si"?6:12,lg:l==="Si"?6:3,children:r($,{control:g,label:"\xBFEl cliente d\xE1 la suma de salarios?",options:D,values:D,error:!!s.is_total_salarios,helperText:(A=s.is_total_salarios)==null?void 0:A.message,name:"is_total_salarios",required:!0})}),r(G,{show:l==="Si",item:!0,xs:12,sm:c?12:6,md:l==="Si"?6:12,children:r(f,{name:"total_suma_salarios",label:"Total de salarios",fullWidth:!0,error:!!s.total_suma_salarios,helperText:(k=s.total_suma_salarios)==null?void 0:k.message,required:!0})}),r(le,{}),!t&&r(y.exports.Suspense,{fallback:r(ie,{}),children:r(me,{salarios:o==null?void 0:o.data})}),r(m,{item:!0,xs:12,children:r(ee,_({label:"Observaci\xF3n",fullWidth:!0,multiline:!0,rows:4,error:!!s.observacion,helperText:(L=s.observacion)==null?void 0:L.message},u("observacion")))})]})})},Ea=e=>{var h;const a=X(),t=se.concat(ne),{activeStep:o,form:d,handleBack:c,handleNextStep:u,isLoading:s,res:i,modalState:g,setHide:l,handleSubmit:x,modalError:F}=z({schema:t,fields:[{names:Object.keys(t.fields)}],url:`/admin/contratos/${e.id}/liquidar`,defaultValues:{fecha_ini:e.fecha_ini,total_yy:e.total_yy}});return v(w,{children:[r(te,{variant:"outlined",sx:{p:1},children:r(H,M(_({},d),{children:r(Q,{activeStep:o,handleBack:c,sendLabel:"Liquidar",sentLabel:"Liquidado",disabledLast:!0,sentLabelImage:"Contrato liquidado!",steps:["Datos generales"],state:F,handleNext:u,errors:Object.keys(d.formState.errors).length,children:[r(de,_({},e),"Datos-generales")]})}))}),r(Y,{open:s}),r(oe,{state:g,title:"\xA1Atenci\xF3n!",setHide:i&&i.status===201?l:void 0,body:i?i&&i.status!==201?(h=i.error)==null?void 0:h.message:void 0:"\xBFRealmente desea liquidar el contrato?",cancelBotton:{actionFunction:l,text:i?"Cerrar":"Cancelar"},type:i&&i.status===201?"SUCCESS":"ERROR",actionButton:i?i&&i.status===201?{actionFunction:()=>{a(`/liquidaciones/${e.id}`,{replace:!0})},text:"Ver"}:void 0:{actionFunction:x,text:"Liquidar"},children:i&&i.status===201&&i.data?v(w,{children:[i.data.message,". ",r("br",{}),"\xBFDesea ver el contrato liquidado?"]}):void 0})]})};export{Ea as default};
