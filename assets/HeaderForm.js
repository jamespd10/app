import{r as l,j as r,a as t,aw as d}from"./index.js";import{F as f,s as o}from"./index75.js";import{u as h}from"./useCalTotal2.js";import{f as m}from"./string.helper.js";import"./BootstrapModal.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Fade.js";import"./Modal2.js";import"./isHostComponent.js";import"./useId.js";import"./Portal.js";import"./Paper.js";import"./BootstrapDivContent.js";import"./Divider.js";import"./index45.js";import"./HeaderTitle.js";import"./Typography.js";import"./Loader.js";import"./Grid.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./useForm.js";import"./object.helper.js";import"./array.js";import"./upperFirst.js";import"./regex.js";const z=()=>{const{form:e}=l.exports.useContext(f),{formState:s}=e,{tipo:a,nombre_negocio:i,mes_correspondiente:p}=s,{itbms:n,total:c}=h();return r("div",{className:`${o.flexRow} ${o.spaceBetween} ${o.header}`,children:[r("span",{children:[a," ",i]}),r("span",{children:["Mes:"," ",t("span",{className:o.fecha,children:d(p,"MMMM - yyyy")})]}),r("span",{children:["ITBMS DE SERVICIOS:"," ",t("span",{className:o.money,children:m(n*.07)})]}),r("span",{children:["Total: ",t("span",{className:o.moneyTotal,children:m(c)})]})]})};export{z as default};
