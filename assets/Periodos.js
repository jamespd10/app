var W=Object.defineProperty,z=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var T=(r,e,t)=>e in r?W(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,D=(r,e)=>{for(var t in e||(e={}))O.call(e,t)&&T(r,t,e[t]);if(N)for(var t of N(e))M.call(e,t)&&T(r,t,e[t]);return r},I=(r,e)=>z(r,E(e));import{T as G}from"./TextInput.js";import{u as w,b as R,c as H}from"./yup.module.js";import{D as P}from"./DecimalInput.js";import{a,F as U,j as n}from"./index.js";import{F as V}from"./FormControlLabel.js";import{C as q}from"./Checkbox.js";import{T as J}from"./Typography.js";import{D as K}from"./Divider.js";import{S as $}from"./Stack.js";import{B as k}from"./Button.js";import{a as Q}from"./TextField.js";import"./CustomDecimal.js";import"./react-number-format.es.js";import"./string.helper.js";import"./regex.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./formControlState.js";import"./useFormControl.js";import"./ButtonBase.js";import"./useIsFocusVisible.js";import"./useControlled.js";import"./createSvgIcon.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./Fade.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";const X="_container_1wyo1_1",Y="_periodos_1wyo1_2",Z="_errorBorder_1wyo1_14";var s={container:X,periodos:Y,errorBorder:Z};const oo=()=>{const{control:r,setValue:e}=w(),t=R({control:r,name:"print_anual"});return a(U,{children:a(V,{control:a(q,{checked:Boolean(Number(t))===!0,onChange:o=>e("print_anual",o.target.checked)}),label:'IMPRIMIR PERIODOS CON LA PALABRA "ANUAL"'})})},So=()=>{var l;const{control:r,register:e,formState:t}=w(),{errors:o}=t,{fields:m,remove:j,append:L}=H({control:r,name:"periodos"}),p=R({control:r,name:"print_anual"});return n("div",{className:s.container,children:[n("div",{className:`${s.periodos} ${o.periodos?s.errorBorder:""}`,children:[a(J,{variant:"h5",children:"Per\xEDodos"}),a(K,{}),m.map((S,i)=>{var c,d,u,h,g,f,y,_,x,b,A,B,v,C,F;return n($,{spacing:1,direction:{xs:"column",md:"row"},children:[a(G,I(D({label:"Per\xEDodo(a\xF1o)",size:"small",fullWidth:!0,placeholder:"yyyy"},e(`periodos.${i}.fecha_yy`)),{error:!!((d=(c=o==null?void 0:o.periodos)==null?void 0:c[i])!=null&&d.fecha_yy),helperText:(g=(h=(u=o==null?void 0:o.periodos)==null?void 0:u[i])==null?void 0:h.fecha_yy)==null?void 0:g.message})),a(P,{name:`periodos.${i}.ingreso`,label:`Ingreso bruto ${Boolean(Number(p))===!0?"anual":"mensual"}`,size:"small",fullWidth:!0,error:!!((y=(f=o==null?void 0:o.periodos)==null?void 0:f[i])!=null&&y.ingreso),helperText:(b=(x=(_=o==null?void 0:o.periodos)==null?void 0:_[i])==null?void 0:x.ingreso)==null?void 0:b.message}),a(P,{name:`periodos.${i}.gasto`,label:`Gasto bruto ${Boolean(Number(p))===!0?"anual":"mensual"}`,size:"small",fullWidth:!0,error:!!((B=(A=o==null?void 0:o.periodos)==null?void 0:A[i])!=null&&B.gasto),helperText:(F=(C=(v=o==null?void 0:o.periodos)==null?void 0:v[i])==null?void 0:C.gasto)==null?void 0:F.message})]},S.id)}),a(oo,{}),n($,{spacing:1,direction:{xs:"column",md:"row"},justifyContent:"center",children:[a(k,{variant:"contained",onClick:()=>L({ingreso:"",fecha_yy:"",gasto:"0"}),children:"Agregar"}),m.length!==1&&a(k,{variant:"contained",color:"error",onClick:()=>j(m.length-1),children:"Remover"})]})]}),(o==null?void 0:o.periodos)&&a(Q,{className:s.helper,error:!0,children:(l=o==null?void 0:o.periodos)==null?void 0:l.message})]})};export{So as default};
