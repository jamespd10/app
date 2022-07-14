var A=Object.defineProperty,S=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var x=(r,e,o)=>e in r?A(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o,u=(r,e)=>{for(var o in e||(e={}))z.call(e,o)&&x(r,o,e[o]);if(F)for(var o of F(e))D.call(e,o)&&x(r,o,e[o]);return r},p=(r,e)=>S(r,R(e));import{r as i,au as k,a,f as h,av as y,b as _,j as M}from"./index.js";import{H as I}from"./HeaderTitle.js";import{L as j}from"./Loader.js";import{u as L}from"./useLocalStorage.js";import{a as C,o as q,F as w}from"./yup.module.js";import{d as f,h as O}from"./regex.js";import{c as d,a as t,d as s,e as E,f as T}from"./array.js";const V=i.exports.createContext({}),$=({children:r})=>{const e=k("/admin/certificaciones-ingresos");return a(V.Provider,{value:{pagination:e},children:r})},H=i.exports.createContext({}),B=({children:r})=>{const[e]=L("cpa-value"),[o,n]=i.exports.useState(e);return a(H.Provider,{value:{cpa:o,setCpa:n},children:r})},b=d().shape({nombre_encargado:t().typeError("Favor ingresar el nombre").trim().required("Favor ingresar el nombre"),apellido_encargado:t().typeError("Favor ingresar el apellido").trim().required("Favor ingresar el apellido"),identificacion_encargado:t().typeError("Favor ingresar la c\xE9dula o pasaporte").trim().required("Favor ingresar la c\xE9dula o pasaporte"),cargo_encargado:t().typeError("Favor ingresar el cargo").trim().required("Favor ingresar el cargo"),genero:t().typeError("Favor ingresar el g\xE9nero").trim().required("Favor ingresar el g\xE9nero"),cliente:d().shape({id:s().typeError("Favor ingresar la raz\xF3n social").integer("Favor ingresar un n\xFAmero entero").positive("Favor ingresar un n\xFAmero positivo").min(1,"Favor ingresar un n\xFAmero mayor que 0").required("Favor ingresar la raz\xF3n social")}).typeError("Favor ingresar la raz\xF3n social").required("Favor ingresar la raz\xF3n social"),banco:d().shape({id:s().typeError("Favor ingresar el cliente").integer("Favor ingresar un n\xFAmero entero").positive("Favor ingresar un n\xFAmero positivo").min(1,"Favor ingresar un n\xFAmero mayor que 0").required("Favor ingresar el cliente")}).typeError("Favor ingresar el banco").required("Favor ingresar el banco"),periodos:E().of(d().shape({ingreso:s().typeError("Favor ingresar un monto").positive("Favor ingresar un monto positivo").min(0,"Favor ingresar un monto mayor a 0").max(9e10,"Favor ingresar un m\xE1ximo de 10 d\xEDgitos").required("Favor ingresar un monto").test("check-decimal","Favor ingresar m\xE1ximo dos decimales",r=>!!(r===0||r&&r.toString().match(f))),gasto:s().typeError("Favor ingresar un monto").positive("Favor ingresar un monto positivo").min(0,"Favor ingresar un monto mayor a 0").max(9e10,"Favor ingresar un m\xE1ximo de 10 d\xEDgitos").required("Favor ingresar un monto").test("check-decimal","Favor ingresar m\xE1ximo dos decimales",r=>!!(r===0||r&&r.toString().match(f))),fecha_yy:s().typeError("Favor ingresar el a\xF1o fiscal").positive("Favor ingresar un n\xFAmero positivo").min(2015,"Favor ingresar un n\xFAmero mayor a 2015").max(2045,"Favor ingresar un n\xFAmero mayor a 2045").required("Favor ingresar el a\xF1o fiscal").test("check","Favor ingresar un n\xFAmero de 4 d\xEDgitos",r=>!!(r&&r.toString().match(O)&&r.toString().length===4))})).typeError("Favor ingresar un per\xEDodo").min(1,"Favor ingresar al menos un per\xEDodo").required("Favor ingresar al menos un per\xEDodo"),negocios:E().of(d().shape({id:s().typeError("Favor ingresar el cliente").integer("Favor ingresar un n\xFAmero entero").positive("Favor ingresar un n\xFAmero positivo").min(1,"Favor ingresar un n\xFAmero mayor que 0").required("Favor ingresar el cliente"),actividad:t().typeError("Favor ingresar la actividad del negocio").trim().required("Favor ingresar la actividad del negocio"),fecha_aviso_op:T().typeError("Favor ingresar la fecha de aviso de operaci\xF3n").required("Favor ingresar la fecha de aviso de operaci\xF3n"),ubicacion:t().typeError("Favor ingresar la ubicaci\xF3n del negocio").trim().required("Favor ingresar la ubicaci\xF3n del negocio"),provincia:t().typeError("Favor ingresar la provincia del negocio").trim().required("Favor ingresar la provincia en la que se ubica el negocio"),distrito:t().typeError("Favor ingresar el distrito del negocio").trim().required("Favor ingresar el distrito en el que se ubica el negocio"),corregimiento:t().typeError("Favor ingresar el corregimiento del negocio").trim().required("Favor ingresar el corregimiento en el que se ubica el negocio")})).typeError("Favor ingresar un negocio").min(1,"Favor ingresar al menos un negocio").required("Favor ingresar al menos un negocio")}),U=i.exports.createContext({}),G=({children:r})=>{const e=i.exports.useRef(null),o=i.exports.useState(null),[n,c]=o,g=i.exports.useCallback(v=>c(v),[]),m=h(),l=C({mode:"all",defaultValues:u({},n),resolver:q(b)});return i.exports.useEffect(()=>{(()=>{n&&l.reset(p(u({},n),{genero:n.genero.toUpperCase()}))})()},[n]),a(U.Provider,{value:{certificacion:n,setCertificacion:g,fetcher:m,form:l,divRef:e},children:a(w,p(u({},l),{children:r}))})},J=i.exports.createContext({}),K=({children:r})=>{const e=y();return a(J.Provider,{value:e,children:r})},N=i.exports.createContext({}),Q=({children:r})=>{const e=i.exports.useRef(null),o=y(),n=h(),c=i.exports.useMemo(()=>({banco:null,cliente:null,nombre_encargado:"",apellido_encargado:"",identificacion_encargado:"",cargo_encargado:"",genero:"",negocios:[],imprimir_actividades:!1,periodos:[{ingreso:"",fecha_yy:"",gasto:"0"}],actividad:"",text_negocio:"",abrir_cuenta:!1,print_anual:!1}),[]),g=C({mode:"all",defaultValues:c,resolver:q(b)}),{reset:m}=g,[,,,,,l]=n,[,v]=o,P=i.exports.useCallback(()=>{v(!1),l(),m(c,{keepErrors:!1})},[]);return a(N.Provider,{value:{modalRealizar:o,form:g,fetcher:n,defaultValues:c,handleHide:P,divRef:e},children:r})},W=i.exports.createContext({}),X=({children:r})=>{const[e,o]=i.exports.useState(null);return a(W.Provider,{value:{preview:e,setPreview:o},children:r})},Y=i.exports.lazy(()=>_(()=>import("./index52.js"),["assets/index52.js","assets/index.js","assets/index7.css","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js"])),Z=i.exports.lazy(()=>_(()=>import("./ModalEditar.js"),["assets/ModalEditar.js","assets/index.js","assets/index7.css","assets/BootstrapModalTitle.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Fade.js","assets/Modal2.js","assets/isHostComponent.js","assets/useControlled.js","assets/Portal.js","assets/Paper.js","assets/Typography.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useIsFocusVisible.js","assets/IconButton.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/WorkspacePremium.js","assets/DialogActions.js","assets/LoadingButton.js","assets/Button.js","assets/CircularProgress.js","assets/AbrirCuenta.js","assets/AbrirCuenta.css","assets/SelectHookForm.js","assets/yup.module.js","assets/Box.js","assets/TextField.js","assets/useFormControl.js","assets/formControlState.js","assets/react-is.production.min.js","assets/Grow.js","assets/List.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/MenuItem.js","assets/listItemIconClasses.js","assets/Divider.js","assets/listItemTextClasses.js","assets/TextInput.js","assets/Stack.js","assets/AutocompleteServer.js","assets/useFetch.js","assets/useHttpService.js","assets/Autocomplete.js","assets/Close.js","assets/Popper.js","assets/Chip.js","assets/CheckBoxOutlineBlank.js","assets/Checkbox.js","assets/DecimalInput.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/FormControlLabel.js","assets/DireccionProvider.js","assets/DatePicker.js","assets/MobileDatePicker.js","assets/MonthPicker.js","assets/PureDateInput.js","assets/CalendarPicker.js","assets/Grid.js","assets/InputAdornment.js","assets/DialogContent.js","assets/index11.js","assets/Alert.js","assets/BootstrapDivContent.js","assets/BootstrapDivContent.css","assets/HeaderTitle.js","assets/Loader.js","assets/useLocalStorage.js","assets/array.js","assets/upperFirst.js"])),rr=()=>a(B,{children:a($,{children:a(X,{children:a(G,{children:a(Q,{children:M(K,{children:[a(I,{message:"Certificaci\xF3n de Ingresos"}),a(i.exports.Suspense,{fallback:a(j,{}),children:a(Y,{})}),a(i.exports.Suspense,{fallback:a("div",{}),children:a(Z,{})})]})})})})})});var lr=Object.freeze(Object.defineProperty({__proto__:null,default:rr},Symbol.toStringTag,{value:"Module"}));export{V as C,U as E,J as M,W as P,H as a,N as b,lr as i};
