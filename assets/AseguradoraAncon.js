import{r as s,j as t,a as o,ax as n}from"./index.js";import{C as N,s as r}from"./index44.js";import{u as f,F as E,R as F,D as _,a as y,b as B}from"./useUtilsForms.js";import{f as C}from"./string.helper.js";import"./HeaderTitle.js";import"./Typography.js";import"./Divider.js";import"./BootstrapTooltip.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./isHostComponent.js";import"./Grow.js";import"./ContentProvider.js";import"./useModal.js";import"./SpeedDial.module.js";import"./Modal.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./LoadingButton.js";import"./Backdrop.js";import"./Modal2.js";import"./Paper.js";import"./Button.js";import"./ButtonBase.js";import"./IconButton.js";import"./Error.js";import"./SelectedCard.js";import"./StyledSpeedDial.js";import"./Assignment.js";import"./FabButtonAction.js";import"./react-is.production.min.js";import"./AssignmentRounded.js";import"./Stack.js";import"./Print.js";import"./index15.js";import"./WorkspacePremium.js";import"./array.js";import"./upperFirst.js";import"./regex.js";import"./useLocalStorage.js";import"./DatePicker.js";import"./MobileDatePicker.js";import"./MonthPicker.js";import"./usePickerState.js";import"./Grid.js";import"./InputAdornment.js";import"./FormHelperText.js";import"./index7.js";import"./ErrorOutline.js";import"./AutocompleteServer.js";import"./TextInput.js";import"./TextField.js";import"./List.js";import"./GlobalStyles.js";import"./useFetch.js";import"./useHttpService.js";import"./Autocomplete.js";import"./Close.js";import"./Chip.js";import"./CheckBoxOutlineBlank.js";import"./Checkbox.js";import"./DireccionProvider.js";import"./DecimalInput.js";import"./CustomDecimal.js";import"./react-number-format.es.js";import"./SelectHookForm.js";import"./Box.js";import"./MenuItem.js";import"./listItemIconClasses.js";import"./listItemTextClasses.js";import"./Alert.js";import"./ErrorIcon.js";import"./StyledGridOverlay.js";import"./StyledCheckboxInherit.js";import"./Edit.js";import"./SkipNextOutlined.js";import"./Pagination.js";import"./Loader.js";import"./Search.js";const rr=({i:c})=>{const d=f(c),{data:e,actividadLastDot:l,isHombre:h,isMoreThanOne:p}=d,{isSociedad:u,strPlural:m,toWord:x}=d,{cpa:i}=s.exports.useContext(N);return t("div",{className:r.content,children:[t("div",{className:r.flexColumn,children:[o(E,{}),o(F,{receptor:"Aseguradora anc\xF3n",ciudad:"Ciudad"}),o(_,{dirigido:"Estimados se\xF1ores"}),t("p",{className:`${r.parrafo} ${r.tab}`,children:["El suscrito,"," ",o("span",{className:r.textUpperBold,children:i==null?void 0:i.nombre}),", con c\xE9dula de identidad personal No."," ",o("span",{className:r.textUpperBold,children:i==null?void 0:i.cedula}),", Contador",(i==null?void 0:i.genero)==="FEMENINO"?"a":""," en Ejercicio, debidamente"," ","registrado en el Departamento de Licencias con la licencia C.P.A. #",o("span",{children:i==null?void 0:i.numero}),";"]}),o("span",{className:r.titleCenter,children:"Certifico"}),t("p",{className:r.parrafo,children:["Que,"," ",t("span",{className:r.textUpperBold,children:[e.nombre_encargado," ",e.apellido_encargado]}),", ",o("span",{children:h?"var\xF3n":"mujer"}),", mayor de edad, con c\xE9dula de identidad personal N\xB0"," ",o("span",{className:r.textUpperBold,children:e.identificacion_encargado}),", ",o("strong",{children:"RECIBIO"})," un"," ",o("strong",{children:"PROMEDIO DE INGRESOS BRUTOS MENSUALES"})," por la suma de"," ",e.periodos.map((a,g)=>t(s.exports.Fragment,{children:[t("span",{className:r.textUpperBold,children:[C(a.total)," (",x(`${a.total}`),"BALBOAS CON ",`${a.total}`.slice(-2),"/100)"]}),", correspondiente al periodo ",o("span",{children:a.fecha_yy}),","]},`${a.fecha_yy}-${g+1}`))," ","como ",o("span",{children:e.cargo_encargado})," ",p?"de los":"del"," establecimiento",m," ","comercial",p?"es":""," denominado",m," ",e.negocios.map(a=>t(s.exports.Fragment,{children:[t("span",{className:r.textUpperBold,children:[a.tipo," ",a.nombre_negocio]}),","]},a.id))," ","amparado",m," bajo la"," ",u?"Sociedad An\xF3nima":"Persona Natural"," ",o("span",{className:r.textUpperBold,children:e.cliente.nom_cliente}),", que se dedicaba",p?"n":""," a la"," ",o("span",{children:e.negocios[0].actividad}),l,", cuyo inicio de operaciones fue el"," ",t("span",{children:[n(e.negocios[0].fecha_aviso_op,"dd")," de"," ",n(e.negocios[0].fecha_aviso_op,"MMMM")," de"," ",n(e.negocios[0].fecha_aviso_op,"yyyy")]}),"."]}),o("p",{className:r.parrafo,children:"Agradeci\xE9ndoles la atenci\xF3n brindada, queda de ustedes."}),o(y,{})]}),o(B,{})]})};export{rr as default};
