import{r as d,j as t,a as o}from"./index.js";import{C as N,s as e}from"./index44.js";import{u as f,F as E,R as C,D as b,a as B,b as F}from"./useUtilsForms.js";import{f as c}from"./string.helper.js";import"./HeaderTitle.js";import"./Typography.js";import"./Divider.js";import"./BootstrapTooltip.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./isHostComponent.js";import"./Grow.js";import"./ContentProvider.js";import"./useModal.js";import"./SpeedDial.module.js";import"./Modal.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./LoadingButton.js";import"./Backdrop.js";import"./Modal2.js";import"./Paper.js";import"./Button.js";import"./ButtonBase.js";import"./IconButton.js";import"./Error.js";import"./SelectedCard.js";import"./StyledSpeedDial.js";import"./Assignment.js";import"./FabButtonAction.js";import"./react-is.production.min.js";import"./AssignmentRounded.js";import"./Stack.js";import"./Print.js";import"./index15.js";import"./WorkspacePremium.js";import"./array.js";import"./upperFirst.js";import"./regex.js";import"./useLocalStorage.js";import"./DatePicker.js";import"./MobileDatePicker.js";import"./MonthPicker.js";import"./usePickerState.js";import"./Grid.js";import"./InputAdornment.js";import"./FormHelperText.js";import"./index7.js";import"./ErrorOutline.js";import"./AutocompleteServer.js";import"./TextInput.js";import"./TextField.js";import"./List.js";import"./GlobalStyles.js";import"./useFetch.js";import"./useHttpService.js";import"./Autocomplete.js";import"./Close.js";import"./Chip.js";import"./CheckBoxOutlineBlank.js";import"./Checkbox.js";import"./DireccionProvider.js";import"./DecimalInput.js";import"./CustomDecimal.js";import"./react-number-format.es.js";import"./SelectHookForm.js";import"./Box.js";import"./MenuItem.js";import"./listItemIconClasses.js";import"./listItemTextClasses.js";import"./Alert.js";import"./ErrorIcon.js";import"./StyledGridOverlay.js";import"./StyledCheckboxInherit.js";import"./Edit.js";import"./SkipNextOutlined.js";import"./Pagination.js";import"./Loader.js";import"./Search.js";const or=({i:h})=>{const m=f(h),{data:r,actividadLastDot:g,isHombre:x,isMoreThanOne:s}=m,{strPlural:a,toWord:u}=m,{sumTotalIngresos:n}=m,{cpa:i}=d.exports.useContext(N);return t("div",{className:e.content,children:[t("div",{className:e.flexColumn,children:[o(E,{}),o(C,{receptor:"Capital bank"}),o(b,{}),t("p",{className:e.parrafo,children:["El suscrito,"," ",o("span",{className:e.textUpperBold,children:i==null?void 0:i.nombre}),", con c\xE9dula de identidad personal No."," ",o("span",{className:e.textUpperBold,children:i==null?void 0:i.cedula}),", debidamente registrado en el Departamento de Licencias con la licencia C.P.A. #",o("span",{children:i==null?void 0:i.numero}),"; encargad",(i==null?void 0:i.genero)==="FEMENINO"?"a":"o"," de la tenedur\xEDa de libros"," ",s?"de los":"del"," establecimiento",a," ","comercial",s?"es":""," denominado",a," ",r.negocios.map(p=>t(d.exports.Fragment,{children:[t("span",{children:[p.tipo," ",p.nombre_negocio]}),","," "]},p.id)),"."]}),o("span",{className:e.titleCenter,children:"Certifico"}),t("p",{className:e.parrafo,children:["Que,"," ",t("span",{className:e.textUpperBold,children:[r.nombre_encargado," ",r.apellido_encargado]}),", ",o("span",{children:x?"var\xF3n":"mujer"}),", mayor de edad, con c\xE9dula de identidad personal No."," ",o("span",{className:e.textUpperBold,children:r.identificacion_encargado}),", ",o("strong",{children:"PERCIBE"})," un"," ",o("strong",{children:"INGRESO ORDINARIO PROMEDIO BRUTO MENSUAL"})," de"," ",t("span",{className:e.textUpperBold,children:[c(n)," (",u(`${n}`)," ","BALBOAS CON ",c(n).slice(-2),"/100)"]}),", correspondiente ",r.periodos.length>1?"a los":"al"," per\xEDodo",r.periodos.length>1?"s":""," fiscal",r.periodos.length>1?"es":""," ",r.periodos.map((p,l)=>t(d.exports.Fragment,{children:[t("span",{children:[r.periodos.length>1&&r.periodos.length-1===l?"y":""," ",p.fecha_yy]}),", "]},`${p.fecha_yy}-${l+1}`)),"como ",o("span",{children:r.cargo_encargado})," ",s?"de los":"del"," establecimiento",a," antes"," ","mencionado",a,", dedicado a la"," ",t("span",{children:[r.negocios[0].actividad,g]}),"."]}),o("p",{className:e.parrafo,children:"Agradeci\xE9ndoles la atenci\xF3n brindada, queda de ustedes."}),o(B,{})]}),o(F,{})]})};export{or as default};
