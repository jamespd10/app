import{r as u,j as i,a as o}from"./index.js";import{C as N,s as r}from"./index44.js";import{u as f,F as g,R as B,D as F,N as C,a as y,b as U}from"./Negocios.js";import{f as p}from"./string.helper.js";import{A}from"./Actividades.js";import"./HeaderTitle.js";import"./Typography.js";import"./Divider.js";import"./BootstrapTooltip.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./appendOwnerState.js";import"./isHostComponent.js";import"./Grow.js";import"./ContentProvider.js";import"./useModal.js";import"./SpeedDial.module.js";import"./Modal.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Modal2.js";import"./Paper.js";import"./IconButton.js";import"./ButtonBase.js";import"./Error.js";import"./DialogContent.js";import"./LoadingButton.js";import"./Button.js";import"./SelectedCard.js";import"./StyledSpeedDial.js";import"./Assignment.js";import"./FabButtonAction.js";import"./react-is.production.min.js";import"./AssignmentRounded.js";import"./Stack.js";import"./Print.js";import"./index15.js";import"./WorkspacePremium.js";import"./array.js";import"./upperFirst.js";import"./regex.js";import"./useLocalStorage.js";import"./BootstrapModalTitle.js";import"./ErrorOutline.js";import"./AutocompleteServer.js";import"./TextInput.js";import"./TextField.js";import"./List.js";import"./GlobalStyles.js";import"./useFetch.js";import"./useHttpService.js";import"./Autocomplete.js";import"./Close.js";import"./Chip.js";import"./CheckBoxOutlineBlank.js";import"./Checkbox.js";import"./DireccionProvider.js";import"./DatePicker.js";import"./MobileDatePicker.js";import"./MonthPicker.js";import"./PureDateInput.js";import"./Grid.js";import"./InputAdornment.js";import"./index7.js";import"./DecimalInput.js";import"./CustomDecimal.js";import"./react-number-format.es.js";import"./SelectHookForm.js";import"./Box.js";import"./MenuItem.js";import"./listItemIconClasses.js";import"./listItemTextClasses.js";import"./Alert.js";import"./StyledCheckboxInherit.js";import"./Edit.js";import"./SkipNextOutlined.js";import"./Pagination.js";import"./Loader.js";import"./Search.js";import"./ErrorIcon.js";import"./StyledGridOverlay.js";const ar=({i:m})=>{const n=f(m),{data:e,isHombre:s,isMoreThanOne:l}=n,{periodosNotFirst:d,strPlural:c,toWord:h}=n,{cpa:t}=u.exports.useContext(N);return i("div",{className:r.content,children:[i("div",{className:r.flexColumn,children:[o(g,{}),o(B,{receptor:"Banistmo"}),o(F,{}),i("p",{className:r.parrafo,children:["El suscrito,"," ",o("span",{className:r.textUpperBold,children:t==null?void 0:t.nombre}),", con c\xE9dula de identidad personal No."," ",o("span",{className:r.textUpperBold,children:t==null?void 0:t.cedula}),", debidamente registrado en el Departamento de Licencias con la licencia C.P.A. #",o("span",{className:r.textUpperBold,children:t==null?void 0:t.numero}),";"]}),o("span",{className:r.titleCenter,children:"Certifico"}),i("p",{className:r.parrafo,children:["Por este medio que ",o("span",{children:s?"el se\xF1or":"la se\xF1ora"})," ",i("span",{className:r.textUpperBold,children:[e.nombre_encargado," ",e.apellido_encargado]})," ",o("span",{children:s?"var\xF3n":"mujer"})," mayor de edad, con c\xE9dula de identidad personal"," ",i("span",{className:r.textUpperBold,children:["N\xB0 ",e.identificacion_encargado]}),", ",e.cargo_encargado," ",l?"de los":"del"," negocio",c," llamado",c," ",o(C,{i:m})," que opera",l?"n":""," en"," ",o("span",{children:e.negocios[0].ubicacion}),", Corregimiento de"," ",o("span",{className:r.textCapi,children:e.negocios[0].corregimiento}),", en la que se dedican a la actividad de"," ",o("span",{className:r.lowerCase,children:o(A,{i:m})})]}),i("p",{className:r.parrafo,children:["Que ",o("span",{children:s?"el se\xF1or":"la se\xF1ora"})," ",o("span",{className:r.textUpperBold,children:e.apellido_encargado})," ","mantuvo un ingreso mensual en el periodo fiscal del a\xF1o"," ",o("span",{children:e.periodos[0].fecha_yy})," de"," ",i("span",{className:r.textUpperBold,children:[p(e.periodos[0].total)," (",h(`${e.periodos[0].total}`)," BALBOAS CON"," ",p(e.periodos[0].total).slice(-2),"/100)"]}),"."]}),d.map((a,x)=>i("p",{className:r.parrafo,children:["Y en el periodo fiscal del a\xF1o ",o("span",{children:a.fecha_yy})," un ingreso mensual de"," ",i("span",{className:r.textUpperBold,children:[p(a.total)," (",h(`${a.total}`)," BALBOAS CON"," ",p(a.total).slice(-2),"/100)"]})," ","en las actividades mencionadas.",d.length-1===x?", en las actividades mencionadas":""]},`${a.fecha_yy}-${x+1}`)),o("p",{className:r.parrafo,children:"Agradeci\xE9ndoles la atenci\xF3n brindada, queda de ustedes."}),o(y,{})]}),o(U,{})]})};export{ar as default};
