var K=Object.defineProperty,X=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var _=(e,r,i)=>r in e?K(e,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[r]=i,D=(e,r)=>{for(var i in r||(r={}))Z.call(r,i)&&_(e,i,r[i]);if(A)for(var i of A(r))ee.call(r,i)&&_(e,i,r[i]);return e},S=(e,r)=>X(e,Y(r));import{ag as g,r as s,q as u,ac as re,t as ae,j as oe,F as ie,a as t}from"./index.js";import{c as d,a,b as c,e as k,g as n,d as h,F as te}from"./array.js";import{B as se}from"./BackgroundLoader.js";import{H as ne}from"./HeaderTitle.js";import{u as de}from"./useStepper.js";import{l as L,a as R,n as le,e as j,b as P,c as C,d as ce,f as me,g as pe,h as ue,i as Fe,j as ge,p}from"./constantsLists.js";import{t as ve}from"./string.helper.js";import{n as l,e as he,r as $,t as xe,h as w,d as fe}from"./regex.js";import{i as be}from"./date.helper.js";import{c as Ee}from"./Lazy.js";import{L as v}from"./Loader.js";import"./BootstrapTooltip.js";import"./jwt-decode.esm.js";import{u as qe}from"./useQueryParams.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import"./Modal2.js";import"./platform.js";import{C as ye}from"./Card.js";import"./upperFirst.js";import"./Backdrop.js";import"./Typography.js";import"./extendSxProp.js";import"./Divider.js";import"./useFetch.js";import"./useHttpService.js";import"./constants.js";import"./useModal.js";import"./nacionalidades.js";import"./index13.js";import"./index14.js";import"./Grid.js";import"./Tooltip.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./isHostComponent.js";import"./Grow.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./IconButton.js";import"./ButtonBase.js";import"./Error.js";import"./Modal.js";import"./Paper.js";import"./Button.js";const N=d().shape({nombre:a().trim().required("Favor de ingresar el nombre").matches(l,"Favor ingresar solo letras del abecedario"),apellido:a().trim().required("Favor de ingresar el apellido").matches(l,"Favor ingresar solo letras del abecedario"),edad:c().typeError("Favor de ingresar la edad").integer("Favor de ingresar un n\xFAmero entero").positive("Favor de ingresar un n\xFAmero positivo").min(18,"Favor ingresar una edad mayor o igual a 18").max(100,"Favor ingresar una edad v\xE1lida").required("Favor de ingresar la edad"),dv:a().trim().max(2,"Favor ingresar un n\xFAmero de m\xE1ximo 2 d\xEDgitos").nullable().test("check","Favor ingresar un n\xFAmero de dos decimales",e=>!!(!e||e&&e.match(he))),genero:a().trim().required("Favor de seleccionar el g\xE9nero").test("is-genero","Favor de seleccionar un g\xE9nero v\xE1lido: "+L.join(", "),e=>!!(e&&L.includes(e))),tipoIdentificacion:a().trim().required("Favor de ingresar el tipo de identificaci\xF3n").test("is-identificacion","Favor de ingresar un tipo de identificaci\xF3n v\xE1lido: "+[...R,"C\xE9dula No verificada"].join(", "),e=>[...R,"C\xE9dula No verificada"].includes(e)),identificacion:a().trim().required("Favor de ingresar la c\xE9dula o pasaporte").matches($,"Favor de ingresar solo n\xFAmeros, letras en may\xFAscula y/o guiones (-)"),seguro:a().trim().nullable(!0).notRequired().test("check-seguro","Favor de ingresar solo n\xFAmeros, letras en may\xFAscula y/o guiones (-)",e=>!!(!e||e&&new RegExp($).test(e))),telefono:a().typeError("Favor ingresar el tel\xE9fono").trim().nullable().notRequired().matches(xe,"Favor de ingresar un n\xFAmero de tel\xE9fono v\xE1lido").test("check-phoneNumber","Favor ingresar un n\xFAmero de tel\xE9fono v\xE1lido",e=>!!(!e||ve(e))),nacionalidad:a().trim().required("Favor de seleccionar la nacionalidad").test("check-nacionalidad","Favor de seleccionar la nacionalidad",e=>!!(e&&le.includes(e.toLowerCase()))),estado_civil:a().trim().required("El estado civil es requerido").test("is-estado-civil","Favor de ingresar un estado civil v\xE1lido: "+j.join(", "),e=>!!(e&&j.includes(e))),direccion:a().trim().max(255,"Favor ingresar m\xE1ximo 255 caracteres").required("Favor de ingresar la direcci\xF3n")}),B=d().shape({tipo_contrato:a().trim().required("Favor de seleccionar el tipo de contrato").test("is-tipo-contrato","Favor seleccionar si el contrato es "+P.join(", "),e=>!!(e&&P.includes(e))),definido:k().typeError("Favor seleccionar si el contrato es "+C.join(" \xF3 ")).required("Favor seleccionar si el contrato es "+C.join(" \xF3 ")),fecha_ini:n().typeError("Favor de seleccionar la fecha de inicio del contrato").required("Favor de seleccionar la fecha de inicio del contrato"),fecha_fin:n().transform((e,r)=>r===""?null:e).nullable(!0).when("definido",{is:!0,then:n().typeError("Favor seleccionar la fecha de finalizaci\xF3n del contrato").required("Favor seleccionar la fecha de finalizaci\xF3n del contrato").test("is-date-fin-contrato","la fecha de finalizaci\xF3n del contrato debe ser mayor a la fecha de inicio de este",function(e){return!!(e&&be(this.parent.fecha_ini,e))})}),cargo:a().trim().required("Favor de ingresar el cargo").matches(w,"Favor de ingresar caracteres del abecedario y/o n\xFAmeros"),isProbatorio:a().trim().required("Favor seleccionar si el contrato es o no con tiempo de prueba").test("is-probatorio","Favor seleccionar si el contrato es o no con tiempo de prueba",e=>!!(e&&ce.includes(e))),tiempo_proba:a().trim().nullable().when("isProbatorio",{is:"Si",then:a().trim().required("Favor de seleccionar el tiempo de prueba").test("is-tiempo-probatorio","Favor de seleccionar el tiempo de prueba",e=>!!(e&&me.includes(e)))}),horas:c().typeError("Favor de ingresar las horas de jornada").integer("Favor de ingresar un n\xFAmero entero").positive("Favor de ingresar un n\xFAmero positivo").min(1,"Favor de ingresar un n\xFAmero positivo").required("Favor de ingresar las horas de jornada").test("check-hour","Las horas laborales deben ser mayor a las de descanso",function(e){return!(e&&e<this.parent.descanso)}),descanso:c().typeError("Favor de ingresar las horas de descanso").integer("Favor de ingresar un n\xFAmero entero").positive("Favor de ingresar un n\xFAmero positivo").min(1,"Favor de ingresar un n\xFAmero positivo").required("Favor de ingresar las horas de descanso").test("check-hour","Las horas de descanso deben ser menor a las laborales",function(e){return!(e&&e>=this.parent.horas)}),horas_semanales:a().trim().required("Favor de ingresar las horas semanales").test("is-horas-semanales","Favor de ingresar las horas semanales",e=>!!(e&&pe.includes(e))),dia_libre:a().trim().required("Favor de ingresar los d\xEDas libres").test("is-dias-libres","Favor de ingresar los d\xEDas libres",e=>!!(e&&ue.includes(e))),rotativo:k().typeError("Favor de seleccionar si el contrato tiene turnos rotativos").required("Favor de seleccionar si el contrato tiene turnos rotativos"),salario:c().typeError("Favor de ingresar la cantidad del salario").positive("La cantidad del salario debe ser positiva").min(.1,"La cantidad del salario debe ser mayor a 0").max(9e10,"Favor ingresar un n\xFAmero de m\xE1ximo 10 d\xEDgitos").required("Favor de ingresar la cantidad del salario").test("check-decimal","Favor ingresar m\xE1ximo dos decimales",e=>!!(e&&e.toString().match(fe))),dia_pago:a().trim().required("Favor de ingresar los d\xEDas de pago").test("is-dia-pago-time","Favor de ingresar los d\xEDas de pago v\xE1lidos",e=>!!(e&&Fe.includes(e))),forma_pago:a().trim().required("Favor de ingresar el tiempo de pago").test("is-dia-pago-time","Favor de ingresar el tiempo de pago v\xE1lido",e=>!!(e&&ge.includes(e))),observaciones:a().trim().nullable(!0).test("check-str","Favor ingresar solo caracteres del abecedario y/o n\xFAmeros",e=>!(e&&!e.match(w)))}),I=d().shape({dependientes:Ee(e=>e&&e.length!==1?h().of(d().shape({nombre:a().trim().required("Favor ingresar el nombre").max(50,"Favor ingresar m\xE1ximo 50 caracteres").matches(l,"Favor de ingresar solo caracteres del abecedario"),apellido:a().trim().required("Favor ingresar el apellido").max(50,"Favor ingresar m\xE1ximo 50 caracteres").matches(l,"Favor de ingresar solo caracteres del abecedario"),edad:c().transform((r,i)=>i===""?null:r).typeError("Favor ingresar la edad").integer("Favor ingresar un n\xFAmero entero").positive("Favor ingresar un n\xFAmero positivo").min(1,"Favor ingresar una edad v\xE1lida").max(100,"Favor ingresar una edad v\xE1lida").nullable(!0).notRequired(),parentesco:a().trim().required("Favor de seleccionar el parentesco").test("check-parentesco","Favor de seleccionar un parentesco: "+p.join(", "),r=>!!(r&&p.includes(r)))})).required():h().of(d().shape({nombre:a().trim().nullable(!0).test("check-name","Favor ingresar el nombre",function(r){return!((this.parent.apellido||this.parent.edad||this.parent.parentesco)&&(!r||r&&!r.match(l)))}),apellido:a().trim().nullable(!0).test("check-apellido","Favor ingresar el apellido",function(r){return!((this.parent.nombre||this.parent.edad||this.parent.parentesco)&&(!r||r&&!r.match(l)))}),edad:c().transform((r,i)=>i===""?null:r).typeError("Favor ingresar la edad").integer("Favor ingresar un n\xFAmero entero").positive("Favor ingresar un n\xFAmero positivo").min(1,"Favor ingresar una edad v\xE1lida").max(100,"Favor ingresar una edad v\xE1lida").nullable(!0).notRequired(),parentesco:a().trim().nullable(!0).test("check-parentesco","Favor de seleccionar un parentesco: "+p.join(", "),function(r){return!((this.parent.nombre||this.parent.apellido||this.parent.edad)&&(!r||r&&!p.includes(r)))})})).required())}),O=d().shape({horasLaborales:h().of(d().shape({entrada1:n().typeError("Favor de seleccionar la hora de entrada del primer turno").required("Favor de seleccionar la hora de entrada del primer turno"),salida1:n().typeError("Favor de seleccionar la hora de salida del primer turno").required("Favor de seleccionar la hora de salida del primer turno").test("is-salida1","Favor de seleccionar una hora de salida mayor a la de entrada del primer turno",function(e){return!!(e&&g(new Date(this.parent.entrada1),new Date(e)))}),entrada2:n().typeError("Favor de seleccionar la hora de entrada del segundo turno").required("Favor de seleccionar la hora de entrada del segundo turno").test("is-entrada2","Favor de seleccionar una hora de entrada mayor a la de salida del primer turno",function(e){return!!(e&&g(new Date(this.parent.salida1),new Date(e)))}),salida2:n().typeError("Favor de seleccionar la hora de salida del segundo turno").required("Favor de seleccionar la hora de salida del segundo turno").test("is-salida2","Favor de seleccionar una hora de salida mayor a la de entrada del segundo turno",function(e){return!!(e&&g(new Date(this.parent.entrada2),new Date(e)))})})).required()}),Ae=s.exports.lazy(()=>u(()=>import("./StepperForm.js"),["assets/StepperForm.js","assets/index.js","assets/index.css","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/jwt-decode.esm.js","assets/Grid.js","assets/extendSxProp.js","assets/Typography.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/platform.js","assets/ButtonBase.js","assets/Modal2.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/IconButton.js","assets/Error.js","assets/Backdrop.js","assets/Modal.js","assets/Paper.js","assets/Button.js","assets/useMediaQuery.js","assets/Box.js"])),_e=s.exports.lazy(()=>u(()=>import("./Modal2.js").then(function(e){return e.e}),["assets/Modal2.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index.css","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/Typography.js","assets/extendSxProp.js","assets/IconButton.js","assets/ButtonBase.js","assets/Error.js","assets/Backdrop.js","assets/Modal.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Button.js"])),De=s.exports.lazy(()=>u(()=>import("./DatosPersonales.js"),["assets/DatosPersonales.js","assets/array.js","assets/index.js","assets/index.css","assets/upperFirst.js","assets/SelectHookForm.js","assets/Box.js","assets/extendSxProp.js","assets/TextField.js","assets/FormHelperText.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Menu.js","assets/Modal.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/MenuItem.js","assets/ButtonBase.js","assets/useIsFocusVisible.js","assets/listItemIconClasses.js","assets/Divider.js","assets/listItemTextClasses.js","assets/constantsLists.js","assets/nacionalidades.js","assets/TextInput.js","assets/Grid.js","assets/Typography.js","assets/Stack.js","assets/Button.js","assets/PhoneInput.js","assets/react-number-format.es.js","assets/Nacionalidad.js","assets/AutocompleteServer.js","assets/useFetch.js","assets/jwt-decode.esm.js","assets/useHttpService.js","assets/constants.js","assets/Autocomplete.js","assets/Close.js","assets/IconButton.js","assets/Tooltip.js","assets/Chip.js","assets/ListItem.js","assets/listItemButtonClasses.js","assets/ListItemText.js"])),Se=s.exports.lazy(()=>u(()=>import("./DatosLaborales.js"),["assets/DatosLaborales.js","assets/array.js","assets/index.js","assets/index.css","assets/upperFirst.js","assets/SelectHookForm.js","assets/Box.js","assets/extendSxProp.js","assets/TextField.js","assets/FormHelperText.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Menu.js","assets/Modal.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/MenuItem.js","assets/ButtonBase.js","assets/useIsFocusVisible.js","assets/listItemIconClasses.js","assets/Divider.js","assets/listItemTextClasses.js","assets/constantsLists.js","assets/nacionalidades.js","assets/DateInput.js","assets/TextInput.js","assets/MobileDatePicker.js","assets/MonthPicker.js","assets/Typography.js","assets/usePickerState.js","assets/Grid.js","assets/IconButton.js","assets/Modal2.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/Error.js","assets/Button.js","assets/InputAdornment.js","assets/index7.js","assets/FadeDisappearGrid.js","assets/date.helper.js","assets/index13.js","assets/index14.js","assets/TimeInput.js","assets/Stack.js","assets/DecimalInput.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js"])),qr=({contrato:e,setEdit:r,retry:i})=>{var E;const z=N.concat(I).concat(B).concat(O),{id:F,cliente:x}=re(),{queryParams:V}=qe(),m=V.get("lq"),G=ae(),{activeStep:T,form:f,handleBack:H,handleNextStep:M,isLoading:Q,res:o,modalState:U,setHide:b,handleSubmit:W,handleReset:J}=de({schema:z,fields:[{names:Object.keys(N.concat(I).fields)},{names:Object.keys(B.concat(O).fields)}],url:e?`/admin/contratos/${F}/edit`:m?`/admin/negocios/${F}/${x}/contratar?lq=1`:`/admin/negocios/${F}/${x}/contratar`,defaultValues:e!=null?e:{dependientes:[{nombre:"",apellido:"",edad:"",parentesco:""}],horasLaborales:[{entrada1:"",salida1:"",entrada2:"",salida2:""}]}});return oe(ie,{children:[!e&&t(ne,{message:"Nuevo contrato"}),t(ye,{variant:"outlined",sx:{p:1,mt:2},children:t(te,S(D({},f),{children:t(s.exports.Suspense,{fallback:t(v,{}),children:t(Ae,{activeStep:T,handleBack:H,sendLabel:"Guardar",sentLabel:"Guardado",finishedAction:e?void 0:J,sentLabelImage:"Contrato guardado!",steps:["Datos personales","Datos laborales"],handleNext:M,disabledLast:!0,errors:Object.keys(f.formState.errors).length,children:[t(s.exports.Suspense,{fallback:t(v,{}),children:t(De,{})},"Datos-personales"),t(s.exports.Suspense,{fallback:t(v,{}),children:t(Se,{})},"Datos-laborales")]})})}))}),t(se,{open:Q}),t(s.exports.Suspense,{fallback:t("div",{}),children:t(_e,{state:U,title:"\xA1Atenci\xF3n!",setHide:()=>{r&&o&&o.status===201&&r(!1),b(),i&&o&&o.status===201&&i()},body:o?o&&o.data?e?o.data.message:m?o.data.message+".":o.data.message+". \xBFDesea ver el contrato?":(E=o.error)==null?void 0:E.message:"\xBFRealmente desea guardar el contrato?",cancelBotton:{actionFunction:()=>{r&&o&&o.status===201&&r(!1),b(),i&&o&&o.status===201&&i()},text:o?"Cerrar":"Cancelar"},type:o&&o.status===201?m?"WARNING":"SUCCESS":"ERROR",actionButton:o?o&&o.status===201?e?void 0:{actionFunction:()=>{var q,y;return G(m?`/contratos/${(q=o.data)==null?void 0:q.id}/liquidar`:`/contratos/${(y=o.data)==null?void 0:y.id}`)},text:m?"Liquidar":"Ver"}:void 0:{actionFunction:W,text:"Guardar"}})})]})};export{qr as default};
