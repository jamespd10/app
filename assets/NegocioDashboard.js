import{d as p}from"./PersonAddDisabled.js";import{d as u}from"./InsertDriveFile.js";import{d as g}from"./AssignmentTurnedIn.js";import r from"./CardHome.js";import{r as n}from"./random.helper.js";import{u as f}from"./useFirstFetch.js";import{ac as $,j as c,a as o}from"./index.js";import{P as v}from"./Paper.js";import{S as P}from"./Stack.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./platform.js";import"./ButtonBase.js";import"./jwt-decode.esm.js";import"./Card.js";import"./CardContent.js";import"./Typography.js";import"./extendSxProp.js";import"./useAsyncRetry.js";import"./tslib.js";import"./useHttpService.js";import"./constants.js";const I=()=>{var s,l,d,m;const{id:i,cliente:a}=$(),{loading:e,value:t}=f({url:`/admin/negocios/${i}/${a}/count`});return c(v,{elevation:0,style:{padding:10,minHeight:"100%"},variant:"outlined",children:[e&&o("div",{style:{textAlign:"center"},children:"Cargando..."}),!e&&t&&t.status!==201&&o("div",{style:{textAlign:"center"},children:"Error..."}),!e&&t&&t.status===201&&c(P,{direction:"column",spacing:1,children:[o(r,{title:"Contratos",size:24,backgroundColor:n(.3),icon:u,route:`/negocios/${i}/${a}/contratos`,numbers:[t.data.contratos.pendientes||0,t.data.contratos.activos||0,t.data.contratos.total||0],titles:["Pendientes","Activos","Total"]}),o(r,{title:"Liquidaciones",size:24,backgroundColor:n(.3),icon:p,route:`/negocios/${i}/${a}/liquidaciones`,numbers:[((s=t.data.liquidaciones)==null?void 0:s.pendientes)||0,((l=t.data.liquidaciones)==null?void 0:l.total)||0],titles:["Pendientes","Total"]}),o(r,{title:"Planillas",size:24,backgroundColor:n(.3),icon:g,route:`/negocios/${i}/${a}/planillas`,numbers:[((d=t.data.planilla)==null?void 0:d.pendientes)||0,((m=t.data.planilla)==null?void 0:m.total)||0],titles:["Pendientes","Total"]})]})]})};export{I as default};