import{r as o,b as n,a as r,F as g,j as t}from"./index.js";import{L as a}from"./Loader.js";import{u as T}from"./array.js";import{f as E}from"./string.helper.js";import{T as k}from"./TextEditor.js";import{S as s}from"./Stack.js";import{T as p}from"./Typography.js";import{D as y}from"./Divider.js";import"./Grid.js";import"./upperFirst.js";import"./regex.js";import"./index7.js";import"./FormHelperText.js";const N=o.exports.lazy(()=>n(()=>import("./Ventas.js"),["assets/Ventas.js","assets/array.js","assets/index.js","assets/index5.css","assets/upperFirst.js","assets/DecimalInput.js","assets/TextInput.js","assets/TextField.js","assets/FormHelperText.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/TotalInput.js","assets/Typography.js","assets/Stack.js","assets/Divider.js"])),I=o.exports.lazy(()=>n(()=>import("./Compras.js"),["assets/Compras.js","assets/array.js","assets/index.js","assets/index5.css","assets/upperFirst.js","assets/DecimalInput.js","assets/TextInput.js","assets/TextField.js","assets/FormHelperText.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/TotalInput.js","assets/Typography.js","assets/Stack.js","assets/Divider.js"])),S=o.exports.lazy(()=>n(()=>import("./Retenciones.js"),["assets/Retenciones.js","assets/index.js","assets/index5.css","assets/array.js","assets/upperFirst.js","assets/DecimalInput.js","assets/TextInput.js","assets/TextField.js","assets/FormHelperText.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/Typography.js","assets/Stack.js","assets/Button.js","assets/ButtonBase.js","assets/useIsFocusVisible.js","assets/Divider.js"])),A=o.exports.lazy(()=>n(()=>import("./Acumulado.js"),["assets/Acumulado.js","assets/array.js","assets/index.js","assets/index5.css","assets/upperFirst.js","assets/DecimalInput.js","assets/TextInput.js","assets/TextField.js","assets/FormHelperText.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/Typography.js"])),D=o.exports.lazy(()=>n(()=>import("./Gastos.js"),["assets/Gastos.js","assets/index.js","assets/index5.css","assets/array.js","assets/upperFirst.js","assets/DecimalInput.js","assets/TextInput.js","assets/TextField.js","assets/FormHelperText.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/Typography.js","assets/Stack.js","assets/Button.js","assets/ButtonBase.js","assets/useIsFocusVisible.js","assets/Divider.js"])),q=()=>{const{watch:e}=T(),l=e("compra_7"),d=e("compra_10"),u=e("compra_15"),_=e("compra_import"),c=e("retenciones"),b=e("venta_7"),h=e("venta_10"),x=e("venta_15"),v=e("acumulado"),i=Number(b||0)*.07+Number(h||0)*.1+Number(x||0)*.15-(Number(l||0)*.07+Number(d||0)*.1+Number(u||0)*.15+Number(_||0)*.07+Number(v||0)+(c&&c.length>0?c.map(m=>Number(m.valor||0)).reduce((m,f)=>m+f):0));return r(g,{children:t(s,{spacing:1,direction:"column",children:[t(s,{direction:{xs:"column",md:"row"},spacing:1,children:[r(o.exports.Suspense,{fallback:r(a,{}),children:r(N,{})}),r(o.exports.Suspense,{fallback:r(a,{}),children:r(I,{})})]}),t(s,{direction:{xs:"column",md:"row"},spacing:1,children:[r(o.exports.Suspense,{fallback:r(a,{}),children:r(S,{})}),r(o.exports.Suspense,{fallback:r(a,{}),children:r(A,{})})]}),r("hr",{style:{border:"1px solid black"}}),t(p,{variant:"h4",children:[i>=0?"Total de ITBMS  pagar":"Total de saldo",":"," ",r("strong",{style:{borderBottom:"double black",color:i<0?"red":"black"},children:E(i)})]}),t(s,{spacing:1,marginTop:1,divider:r(y,{}),border:"1px solid black",borderRadius:1.5,p:1,children:[r(p,{variant:"h5",children:"Notas"}),r(k,{name:"notas"})]}),r(s,{direction:{xs:"column",md:"row"},spacing:1,children:r(o.exports.Suspense,{fallback:r(a,{}),children:r(D,{})})})]})})};export{q as default};
