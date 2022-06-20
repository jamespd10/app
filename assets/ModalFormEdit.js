var y=Object.defineProperty,_=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var f=(r,e,t)=>e in r?y(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,F=(r,e)=>{for(var t in e||(e={}))T.call(e,t)&&f(r,t,e[t]);if(g)for(var t of g(e))P.call(e,t)&&f(r,t,e[t]);return r},b=(r,e)=>_(r,z(e));import{j as E,a as i,r as p,b as w}from"./index.js";import{u as C,d as D,c as L,g as W,o as A,F as B}from"./array.js";import{D as c}from"./DecimalInput.js";import{G as d}from"./Grid.js";import{d as G}from"./regex.js";import{u as j}from"./useFetch.js";import{L as S}from"./index17.js";import{A as I}from"./Alert.js";import"./upperFirst.js";import"./TextInput.js";import"./TextField.js";import"./FormHelperText.js";import"./useControlled.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./GlobalStyles.js";import"./CustomDecimal.js";import"./react-number-format.es.js";import"./string.helper.js";import"./Typography.js";import"./useHttpService.js";import"./Loader.js";import"./HeaderTitle.js";import"./Divider.js";import"./useFirstFetch.js";import"./useAsyncRetry.js";import"./useHandlePrint.js";import"./index15.js";import"./useModal.js";import"./Close.js";import"./IconButton.js";import"./ButtonBase.js";import"./useIsFocusVisible.js";const V=()=>{var t,o,m,s,n;const{formState:r}=C(),{errors:e}=r;return E(d,{container:!0,spacing:1,direction:"row",wrap:"wrap",sx:{"& > :not(style)":{flexGrow:1}},children:[i(d,{item:!0,xs:12,sm:6,children:i(c,{label:"Vacaciones",name:"vacaciones",fullWidth:!0,error:!!e.vacaciones,helperText:(t=e.vacaciones)==null?void 0:t.message,required:!0})}),i(d,{item:!0,xs:12,sm:6,children:i(c,{label:"D\xE9cimo",name:"decimo",fullWidth:!0,error:!!e.decimo,helperText:(o=e.decimo)==null?void 0:o.message,required:!0})}),i(d,{item:!0,xs:12,sm:6,children:i(c,{label:"Prima de antiguedad",name:"prima",fullWidth:!0,error:!!e.prima,helperText:(m=e.prima)==null?void 0:m.message,required:!0})}),i(d,{item:!0,xs:12,sm:6,children:i(c,{label:"Indemnizaci\xF3n",name:"indemnizacion",fullWidth:!0,error:!!e.indemnizacion,helperText:(s=e.indemnizacion)==null?void 0:s.message,required:!0})}),i(d,{item:!0,xs:12,children:i(c,{label:"Preaviso",name:"preaviso",fullWidth:!0,error:!!e.preaviso,helperText:(n=e.preaviso)==null?void 0:n.message,required:!0})})]})},l=D().typeError("Favor de ingresar el monto").min(0,"El monto debe ser mayor o igual a 0").max(9e10,"Favor ingresar un n\xFAmero de m\xE1ximo 10 d\xEDgitos").required("Favor de ingresar el monto").test("check-decimal","Favor ingresar m\xE1ximo dos decimales",r=>!!(r===0||r&&r.toString().match(G))),k=L().shape({vacaciones:l,decimo:l,prima:l,indemnizacion:l,preaviso:l}),H=()=>{const{value:r}=p.exports.useContext(S),{isLoading:e,send:t,reset:o,response:m}=j();return{isLoading:e,onSubmit:async n=>{o(),await t({url:`/admin/liquidacion/${r.data.id}/edit`,method:"POST",data:n})},reset:o,response:m}},M=p.exports.lazy(()=>w(()=>import("./Modal.js"),["assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index7.css","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/LoadingButton.js","assets/Backdrop.js","assets/Modal2.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Typography.js","assets/Button.js","assets/ButtonBase.js","assets/IconButton.js","assets/Error.js"])),Ce=()=>{var x,h,v;const{modalEdit:r,value:e,retry:t}=p.exports.useContext(S),{setHide:o,modalState:m}=r,s=W({mode:"all",resolver:A(k),defaultValues:{vacaciones:e.data.vacaciones,decimo:e.data.decimo,prima:e.data.prima_antiguedad,indemnizacion:e.data.indemnizacion,preaviso:e.data.preaviso_sal}}),{isLoading:n,onSubmit:q,response:a,reset:u}=H();return i(p.exports.Suspense,{fallback:i("div",{}),children:E(M,{state:m,setHide:()=>{o(),u(),a&&a.status===201&&t()},title:"Formulario de liquidaci\xF3n",actionButton:{text:"Guardar",actionFunction:s.handleSubmit(q),isLoading:n},cancelBotton:{text:"Cancelar",actionFunction:()=>{o(),u(),a&&a.status===201&&t()}},children:[a&&i("div",{style:{marginBottom:15},children:i(I,{severity:a.status===201?"success":"error",variant:"outlined",style:{marginBottom:10},children:(v=(x=a.data)==null?void 0:x.message)!=null?v:(h=a.error)==null?void 0:h.message})}),i(B,b(F({},s),{children:i(V,{})}))]})})};export{Ce as default};
