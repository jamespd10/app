import{r as l,j as a,a as o,ax as N}from"./index.js";import{C as x,s as e}from"./index44.js";import{u as f,F as E,R as b,D as y,N as C,a as F,b as O}from"./Negocios.js";import{f as c}from"./string.helper.js";import{A as B}from"./Actividades.js";import"./HeaderTitle.js";import"./Typography.js";import"./Divider.js";import"./BootstrapTooltip.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./appendOwnerState.js";import"./isHostComponent.js";import"./Grow.js";import"./ContentProvider.js";import"./useModal.js";import"./SpeedDial.module.js";import"./Modal.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Modal2.js";import"./Paper.js";import"./IconButton.js";import"./ButtonBase.js";import"./Error.js";import"./DialogContent.js";import"./LoadingButton.js";import"./Button.js";import"./SelectedCard.js";import"./StyledSpeedDial.js";import"./Assignment.js";import"./FabButtonAction.js";import"./react-is.production.min.js";import"./AssignmentRounded.js";import"./Stack.js";import"./Print.js";import"./index15.js";import"./WorkspacePremium.js";import"./array.js";import"./upperFirst.js";import"./regex.js";import"./useLocalStorage.js";import"./BootstrapModalTitle.js";import"./ErrorOutline.js";import"./AutocompleteServer.js";import"./TextInput.js";import"./TextField.js";import"./List.js";import"./GlobalStyles.js";import"./useFetch.js";import"./useHttpService.js";import"./Autocomplete.js";import"./Close.js";import"./Chip.js";import"./CheckBoxOutlineBlank.js";import"./Checkbox.js";import"./DireccionProvider.js";import"./DatePicker.js";import"./MobileDatePicker.js";import"./MonthPicker.js";import"./PureDateInput.js";import"./Grid.js";import"./InputAdornment.js";import"./index7.js";import"./DecimalInput.js";import"./CustomDecimal.js";import"./react-number-format.es.js";import"./SelectHookForm.js";import"./Box.js";import"./MenuItem.js";import"./listItemIconClasses.js";import"./listItemTextClasses.js";import"./Alert.js";import"./Edit.js";import"./StyledCheckboxInherit.js";import"./Visibility.js";import"./SkipNextOutlined.js";import"./Pagination.js";import"./Loader.js";import"./Search.js";import"./ErrorIcon.js";import"./StyledGridOverlay.js";const mr=h=>{const p=f(),{data:r,isHombre:g,isMoreThanOne:n}=p,{strPlural:t,toWord:u}=p,{sumTotalIngresos:m}=p,{cpa:i}=l.exports.useContext(x);return a("div",{className:`${e.content} ${h.className||""}`,children:[a("div",{className:e.flexColumn,children:[o(E,{}),o(b,{receptor:"Multibank"}),o(y,{}),a("p",{className:e.parrafo,children:["El suscrito,"," ",o("span",{className:e.textUpperBold,children:i==null?void 0:i.nombre}),", con c\xE9dula de identidad personal No."," ",o("span",{className:e.textUpperBold,children:i==null?void 0:i.cedula}),", debidamente registrado en el Departamento de Licencias con la licencia C.P.A. #",o("span",{children:i==null?void 0:i.numero}),"; encargad",(i==null?void 0:i.genero)==="FEMENINO"?"a":"o"," de la tenedur\xEDa de libros"," ",n?"de los":"del"," establecimiento",t," ","comercial",n?"es":""," denominado",t," ",o(C,{})," empresa",t," constituida",t," desde el"," ","a\xF1o ",o("span",{children:N(r.negocios[0].fecha_aviso_op,"yyyy")}),"."]}),o("span",{className:e.titleCenter,children:"Certifico"}),a("p",{className:e.parrafo,children:["Que,"," ",a("span",{className:e.textUpperBold,children:[r.nombre_encargado," ",r.apellido_encargado]}),", ",o("span",{children:g?"var\xF3n":"mujer"}),", mayor de edad, con c\xE9dula de identidad personal No."," ",o("span",{className:e.textUpperBold,children:r.identificacion_encargado}),", ",o("strong",{children:"PERCIBE"})," un"," ",o("strong",{children:"INGRESO ORDINARIO PROMEDIO BRUTO MENSUAL"})," de"," ",a("span",{children:[c(m)," (",u(`${m}`)," ","BALBOAS CON ",c(m).slice(-2),"/100)"]}),", correspondiente ",r.periodos.length>1?"a los":"al"," per\xEDodo",r.periodos.length>1?"s":""," fiscal",r.periodos.length>1?"es":""," ",o("span",{children:r.periodos.map((d,s)=>a(l.exports.Fragment,{children:[r.periodos.length>1&&r.periodos.length-1===s?"y ":"",d.fecha_yy,r.periodos.length>1&&r.periodos.length-1!==s?", ":""]},`${d.fecha_yy}-${s+1}`))}),", como ",o("span",{children:r.cargo_encargado})," del establecimiento antes"," ","mencionado",t,", dedicado",t," a la"," ",o("span",{className:e.lowerCase,children:o(B,{})}),", ubicado",t," en ",o("span",{children:r.negocios[0].ubicacion}),"."]}),o("p",{className:e.parrafo,children:"Agradeci\xE9ndoles la atenci\xF3n brindada, queda de ustedes."}),o(F,{})]}),o(O,{})]})};export{mr as default};
