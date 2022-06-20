var A=Object.defineProperty,f=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var d=(i,l,r)=>l in i?A(i,l,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[l]=r,b=(i,l)=>{for(var r in l||(l={}))y.call(l,r)&&d(i,r,l[r]);if(c)for(var r of c(l))E.call(l,r)&&d(i,r,l[r]);return i},_=(i,l)=>f(i,v(l));import{H as I}from"./HeaderTitle.js";import{u as O,D as R,a as N,b as h}from"./useDataGrid.js";import{r as L,a as n,F as u,j as p}from"./index.js";import{u as S}from"./useFetch.js";import{f as s}from"./string.helper.js";import"./Typography.js";import"./Divider.js";import"./TextInput.js";import"./TextField.js";import"./FormHelperText.js";import"./useControlled.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./GlobalStyles.js";import"./Search.js";import"./jsx-runtime_commonjs-proxy.js";import"./useIsFocusVisible.js";import"./Clear.js";import"./Box.js";import"./InputAdornment.js";import"./IconButton.js";import"./ButtonBase.js";import"./FilterList.js";import"./MenuItem.js";import"./listItemIconClasses.js";import"./listItemTextClasses.js";import"./useList.js";import"./Button.js";import"./Checkbox.js";import"./Close2.js";import"./ListItem.js";import"./Stack.js";import"./Add.js";import"./TableRow.js";import"./Autocomplete.js";import"./Close.js";import"./Popper.js";import"./Chip.js";import"./Tooltip.js";import"./SkipNextOutlined.js";import"./Pagination.js";import"./useComponentVisible.js";import"./CheckBoxOutlineBlank.js";import"./ErrorOutline.js";import"./AutocompleteServer.js";import"./ChipState.js";import"./Error.js";import"./CustomDecimal.js";import"./react-number-format.es.js";import"./CustomSipe.js";import"./index7.js";import"./StyledGridOverlay.js";import"./LinearProgress.js";import"./useAsyncRetry.js";import"./useHttpService.js";import"./regex.js";const g=[{value:37,label:"ANLA CHEUNG"},{value:30,label:"AURA PINO"},{value:42,label:"CELIA CHEUNG"},{value:43,label:"DANIELLA CHEUNG"},{value:19,label:"DEISY GONZALEZ"},{value:33,label:"DIANA DE LA HOZ"},{value:21,label:"DIOSELINA PINTO"},{value:25,label:"EVELYN VALDERRAMA"},{value:18,label:"HILDA DE HALL"},{value:29,label:"ITZEL HALL"},{value:22,label:"JENNIFER JURADO"},{value:34,label:"KATHERINE AROSEMENA"},{value:36,label:"KEYSI KARINA EDWARDS"},{value:28,label:"LEIDA BATISTA"},{value:24,label:"LILIA MORENO"},{value:20,label:"MARISEL AROSEMENA"},{value:23,label:"MIRNA TENORIO"},{value:26,label:"RAQUEL GARCIA"},{value:27,label:"ROSA MC FARLANE"},{value:32,label:"VIANKA RODRIGUEZ"},{value:31,label:"VIVIAN PAZ"},{value:35,label:"YURELIS MERCADO"},{value:38,label:"ZORIBEL CHEUNG"}],D=[{column:"rutas.iniciales",label:"Ruta",type:"string"},{column:"negocios.recorrido",label:"Recorrido",type:"number"},{column:"negocios.n_patronal",label:"N. patronal",type:"string"},{column:"negocios.patronal_sipe",label:"SIPE",type:"string"},{column:"clientes.dv",label:"DV",type:"string"},{column:"negocios.tipo_pagos",label:"Per\xEDodo",type:"enum",valueOptions:[{label:"Mensual",value:"mensual"},{label:"Trimestral",value:"trimestral"}]},{column:"negocios.serv_conta",label:"S. Conta.",type:"number"},{column:"negocios.formulario_compra",label:"F. Compra",type:"number"},{column:"negocios.formulario_venta",label:"F. Venta",type:"number"},{column:"negocios.cargo_al",label:"Cargo A.L.",type:"number"},{column:"negocios.formulario_03",label:"Form. 03",type:"number"},{column:"negocios.form_reten_itbms",label:"F. Retenci\xF3n",type:"number"},{column:"negocios.usuario_sipe",label:"SIPE Asignado",type:"enum",valueOptions:g},{column:"negocios.usuario_itbms",label:"ITBMS Asignado",type:"enum",valueOptions:g},{column:"negocios.cerrado",label:"Operando",type:"boolean",valueOptions:[{label:"Operando",value:0},{label:"Cerrado",value:1}]},{column:"negocios.super_validado",label:"Super validado",type:"boolean",valueOptions:[{label:"Valdiado",value:1},{label:"No validado",value:0}]}],C=[{name:"negocios.recorrido",label:"Recorrido"},{name:"tiponegocios.tipo",label:"Tipo"},{name:"negocios.nombre_negocio",label:"Nombre"},{name:"clientes.ruc",label:"RUC"},{name:"negocios.patronal_sipe",label:"SIPE"},{name:"rutas.ruta",label:"Ruta"},{name:"negocios.tipo_pagos",label:"Per\xEDodo"},{name:"negocios.serv_conta",label:"S. CONTA"},{name:"negocios.formulario_compra",label:"F. Compra"},{name:"negocios.formulario_venta",label:"F. Venta"},{name:"negocios.cargo_al",label:"Cargo A.L."},{name:"negocios.formulario_03",label:"Form. 03"},{name:"negocios.form_reten_itbms",label:"F. Retenci\xF3n"},{name:"negocios.cerrado",label:"Operando"},{name:"negocios.super_validado",label:"Super validado"},{name:"clientes.dv",label:"DV"}],t={textAlign:"center"},T=()=>{const i=O(),{data:l}=i,{send:r}=S(),a=L.exports.useCallback((e,o,m)=>r({url:`/admin/supervalidados/negocios/${m}`,method:"PATCH",data:{field:e,value:o}}),[]);return n(u,{children:n(R,{toolbar:n(u,{children:"Lista de negocios a validar"}),enableHidden:!0,enableSearch:!0,columnsFilter:D,sortFields:C,columns:[{name:"recorrido",label:"Recorrido",width:50,style:t,editable:{type:"text",func:(e,o)=>a("negocios.recorrido",e,o)}},{name:"tipo",label:"Tipo",width:200,editable:{type:"autocomplete",func:(e,o)=>a("negocios.id_tipo",e.id,o),autocomplete:{valueKey:[{name:"tipo",replace:"tipo"}],url:"/admin/negocios/tipos",isOptionEqualToValue:(e,o)=>e.id===o.id,getOptionLabel:e=>e.tipo,labels:["tipo"]}}},{name:"nombre_negocio",label:"Nombre",editable:{type:"text",func:(e,o)=>a("negocios.nombre_negocio",e,o)}},{name:"ruc",label:"Ruc",width:150},{name:"dv",label:"DV",width:90,style:{textAlign:"center"},editable:{type:"text",func:(e,o,m)=>r({url:`/admin/supervalidados/negocios/${o}`,method:"PATCH",data:{field:"clientes.dv",value:e,id:m.id_cliente}})}},{name:"ruta",label:"Ruta",width:50,style:t,editable:{type:"autocomplete",func:(e,o)=>a("negocios.id_ruta",e.id,o),autocomplete:{disableCheck:!0,valueKey:[{name:"iniciales",replace:"iniciales"}],dataKey:"iniciales",url:"/admin/rutas",isOptionEqualToValue:(e,o)=>e.id===o.id,getOptionLabel:e=>e.iniciales,labels:["iniciales"]}}},{name:"tipo_pagos",label:"Per\xEDodo",width:200,style:t,editable:{type:"selection",selection:[{label:"Mensual",value:"Mensual"},{label:"Trimestral",value:"Trimestral"}],func:(e,o)=>a("negocios.tipo_pagos",e,o)}},{name:"serv_conta",label:"S. CONTA",width:200,style:t,editable:{type:"money",func:(e,o)=>a("negocios.serv_conta",e,o)}},{name:"formulario_compra",label:"F. Compra",width:200,style:t,editable:{type:"money",func:(e,o)=>a("negocios.formulario_compra",e,o)}},{name:"formulario_venta",label:"F. Venta",width:200,style:t,editable:{type:"money",func:(e,o)=>a("negocios.formulario_venta",e,o)}},{name:"formulario_03",label:"Form. 03",style:t,editable:{type:"money",func:(e,o)=>a("negocios.formulario_03",e,o)}},{name:"form_reten_itbms",label:"F. Retenci\xF3n",style:t,editable:{type:"money",func:(e,o)=>a("negocios.form_reten_itbms",e,o)}},{name:"total_planillas",label:"N. Planillas",width:50,style:t},{name:"patronal_sipe",label:"SIPE",editable:{type:"sipe",func:(e,o)=>a("negocios.patronal_sipe",e,o)}},{name:"riesgo_profesional",label:"R.P.",width:100,style:{textAlign:"center"},editable:{type:"text",func:(e,o)=>a("negocios.riesgo_profesional",e,o)}},{name:"total_contratos",label:"# Emp",width:100,style:{textAlign:"center"}},{name:"usuario_itbms",label:"ITBMS Asignado",width:200,editable:{type:"autocomplete",func:(e,o)=>a("negocios.usuario_itbms",e.id,o),autocomplete:{valueKey:[{name:"usuario_itbms",replace:"id"},{name:"nombre_usuario_itbms",replace:"nombre"},{name:"apellido_usuario_itbms",replace:"apellido"}],url:"/admin/usuarios/ch/secre&adminis",isOptionEqualToValue:(e,o)=>e.id===o.id,getOptionLabel:e=>`${e.nombre} ${e.apellido}`,labels:["nombre","apellido"]}}},{name:"usuario_sipe",label:"SIPE Asignado",width:200,editable:{type:"autocomplete",func:(e,o)=>a("negocios.usuario_sipe",e.id,o),autocomplete:{valueKey:[{name:"usuario_sipe",replace:"id"},{name:"nombre_usuario_sipe",replace:"nombre"},{name:"apellido_usuario_sipe",replace:"apellido"}],url:"/admin/usuarios/ch/secre&adminis",isOptionEqualToValue:(e,o)=>e.id===o.id,getOptionLabel:e=>`${e.nombre} ${e.apellido}`,labels:["nombre","apellido"]}}},{name:"cerrado",label:"Operando",editable:{type:"state",states:[{label:"Operando",value:0,color:"success"},{label:"Cerrado",value:1,color:"error"}],func:(e,o)=>a("negocios.cerrado",e,o)}},{name:"super_validado",label:"Super validado",editable:{type:"state",states:[{label:"Validado",value:1,color:"success"},{label:"No validado",value:0,color:"error"}],func:(e,o)=>a("negocios.super_validado",e,o)}}],rows:l.map(e=>({id:e.id,anotherIds:{id_cliente:e.id_cliente},recorrido:e.recorrido,ruta:e.iniciales,tipo_pagos:e.tipo_pagos,serv_conta:s(e.serv_conta),formulario_compra:s(e.formulario_compra),formulario_venta:s(e.formulario_venta),cargo_al:s(e.cargo_al),formulario_03:s(e.formulario_03),form_reten_itbms:s(e.form_reten_itbms),total_planillas:e.total_planillas,cerrado:e.cerrado,super_validado:e.super_validado,tipo:e.tipo,total_contratos:e.total_contratos,nombre_negocio:e.nombre_negocio,ruc:e.ruc,patronal_sipe:e.patronal_sipe,riesgo_profesional:e.riesgo_profesional,dv:e.dv,usuario_itbms:e.usuario_itbms?p("span",{children:[e.nombre_usuario_itbms," ",e.apellido_usuario_itbms]}):null,usuario_sipe:e.usuario_sipe?p("span",{children:[e.nombre_usuario_sipe," ",e.apellido_usuario_sipe]}):null}))})})},Ze=()=>{const i=N({url:"/admin/supervalidados/negocios",rowKey:"id"});return p(u,{children:[n(I,{message:"Negocios"}),n("div",{style:{marginTop:10},children:n(h,_(b({},i),{children:n(T,{})}))})]})};export{Ze as default};
