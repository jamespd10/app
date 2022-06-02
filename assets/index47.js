import{r as o,q as n,j as a,a as e,F as r}from"./index.js";import{L as l}from"./Loader.js";import{I as i}from"./Img.js";import{T as s}from"./Typography.js";import{A as t}from"./Alert.js";import{A as c}from"./AlertTitle.js";import"./Grid.js";import"./extendSxProp.js";import"./Box.js";import"./createSvgIcon.js";import"./Close.js";import"./Paper.js";import"./IconButton.js";import"./ButtonBase.js";import"./useIsFocusVisible.js";var d="/app/assets/img-01-agregar.png",p="/app/assets/img-02-agregar.png",g="/app/assets/img-03-agregar.png",m="/app/assets/img-04-agregar.png";const h=o.exports.lazy(()=>n(()=>import("./ListSteps.js"),["assets/ListSteps.js","assets/index.js","assets/index.css","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/List.js","assets/ListItem.js","assets/listItemButtonClasses.js","assets/isHostComponent.js","assets/ButtonBase.js","assets/ListItemIcon.js","assets/listItemIconClasses.js","assets/ListItemText.js","assets/listItemTextClasses.js","assets/Typography.js","assets/extendSxProp.js","assets/Divider.js"])),_=()=>a("div",{style:{display:"flex",flexDirection:"column",flexGrow:1,padding:10,marginLeft:5,border:"1px solid black",borderRadius:"5px",width:"100%"},children:[e(s,{variant:"h4",style:{textAlign:"center"},children:"\xBFC\xF3mo agregar un contrato a la planilla?"}),a(t,{variant:"outlined",severity:"warning",style:{marginTop:10,fontSize:"16px"},children:[e(c,{children:e("strong",{children:"\xA1ATENCI\xD3N!"})}),"Antes de agregar el contrato se debe acceder al sistema"," ",e("strong",{children:"SIPE"})," y realizar el ingreso."]}),e(o.exports.Suspense,{fallback:e(l,{}),children:e(h,{children:[{child:a(r,{children:["al momento de realizar una planilla o editar una previamente realizada, seleccionar el bot\xF3n ",e("strong",{children:"AGREGAR"})," que se encuentra en la parte inferior central de la tabla del negocio (en caso de tener otros negocios agregados para cobrar planilla, seleccionar el bot\xF3n correspondiente al negocio. Esto indica que ese contrato que se quiera agregar se le cobrar\xE1 a ese negocio)."]}),img:e(i,{src:d,alt:"img-01",style:{width:"100%",height:"250px"}})},{child:a(r,{children:["al hacer click en ",e("strong",{children:"AGREGAR"})," en el paso anterior, saldr\xE1 un mensaje con dos opciones: ",e("br",{}),a("ul",{children:[e("li",{children:"Insertar nuevo empleado"}),e("li",{children:"Empleado de la lista actual de contratos"})]}),"Seleccionar la primera opci\xF3n si no se tiene informaci\xF3n y es un contrato hecho con mucho tiempo de anterioridad. En caso que se tenga informaci\xF3n de un contrato, pero no aparezca en la tabla de informaci\xF3n de la planilla, seleccionar la segunda opici\xF3n"]}),img:e(i,{src:p,alt:"img-02",style:{width:"100%",height:"300px"}})},{child:a(r,{children:["al seleccionar la primera opci\xF3n en el paso anterior, aparece un formulario en el cual de debe ingresar algunos datos del contrato (el seguro social no es obligatorio). ",e("br",{}),e("strong",{children:"Nota"}),":",a("ul",{children:[a("li",{children:["En este paso si se introduce un n\xFAmero de pasaporte como identificaci\xF3n se debe seleccionar"," ",e("strong",{children:"PASAPORTE"})," en el campo"," ",e("strong",{children:"TIPO DE IDENTIFICACI\xD3N"})]}),e("li",{children:"Verificar el n\xFAmero se seguro social porque al no ser obligatorio, si no se ingresa, el sistema toma la identificaci\xF3n como el seguro social y puede que sea diferente."})]})]}),img:e(i,{src:g,alt:"img-03",style:{width:"100%",height:"500px"}})},{child:e(r,{children:"al seleccionar la segunda opci\xF3n en el paso anterior, aparece la lista de los empleados de los cuales se debe seleccionar uno para agregarlo."}),img:e(i,{src:m,alt:"img-04",style:{width:"100%",height:"350px"}})},{child:a(r,{children:["hacer click en el bot\xF3n ",e("strong",{children:"AGREGAR"})," de la esquina inferior derecha"]})}]})})]});export{_ as default};
