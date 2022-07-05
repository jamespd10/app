import{u as _}from"./yup.module.js";import{D as i}from"./DecimalInput.js";import{s as n,T as r}from"./ventasCompras.module.js";import{f as h}from"./string.helper.js";import{j as a,a as t}from"./index.js";import{S as p}from"./Stack.js";import{D as f}from"./Divider.js";import"./TextInput.js";import"./TextField.js";import"./useControlled.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./GlobalStyles.js";import"./emotion-react.browser.esm.js";import"./CustomDecimal.js";import"./react-number-format.es.js";import"./CircularProgress.js";import"./regex.js";import"./Typography.js";const P=()=>{var u,d,v,c;const{watch:l,formState:b}=_(),{errors:e}=b,m=l("venta_7"),s=l("venta_10"),o=l("venta_15"),N=l("venta_exnt");return a("div",{className:n.container,children:[a("div",{className:n.titleInputs,children:[t("span",{className:n.title,children:"Datos de ventas"}),a(p,{direction:"row",spacing:1,children:[t(i,{label:"7% de ventas",name:"venta_7",fullWidth:!0,required:!0,error:!!(e!=null&&e.venta_7),helperText:(u=e==null?void 0:e.venta_7)==null?void 0:u.message,size:"small"}),t(r,{label:"Total 7% de ventas",value:Number(m)*.07})]}),a(p,{direction:"row",spacing:1,children:[t(i,{label:"10% de ventas",name:"venta_10",fullWidth:!0,required:!0,error:!!(e!=null&&e.venta_10),helperText:(d=e==null?void 0:e.venta_10)==null?void 0:d.message,size:"small"}),t(r,{label:"Total 10% de ventas",value:Number(s)*.1})]}),a(p,{direction:"row",spacing:1,children:[t(i,{label:"15% de ventas",name:"venta_15",fullWidth:!0,required:!0,error:!!(e!=null&&e.venta_15),helperText:(v=e==null?void 0:e.venta_15)==null?void 0:v.message,size:"small"}),t(r,{label:"Total 15% de ventas",value:Number(o)*.15})]}),t(i,{label:"Ventas Exentas",name:"venta_exnt",fullWidth:!0,required:!0,error:!!(e!=null&&e.venta_exnt),helperText:(c=e==null?void 0:e.venta_exnt)==null?void 0:c.message,size:"small"}),t(f,{})]}),a("div",{className:n.totalContainer,children:[a("span",{className:n.totalColumn,children:["Total de ventas:"," ",t("strong",{children:h(Number(m||0)+Number(s||0)+Number(o||0)+Number(N||0))})]}),a("span",{className:n.totalColumn,children:["Total de impuestos:"," ",t("strong",{children:h(Number(m||0)*.07+Number(s||0)*.1+Number(o||0)*.15)})]})]})]})};export{P as default};
