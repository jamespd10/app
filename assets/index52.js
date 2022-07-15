import{r as t,as as C,a as e,b as d,j as i}from"./index.js";import{B as g,a as v}from"./BootstrapModalTitle.js";import{d as S}from"./Paid.js";import{B as b}from"./BootstrapDivContent.js";import{F as x}from"./index18.js";import{s as D}from"./index33.js";import{D as z}from"./DialogActions.js";import{B}from"./Button.js";import{L as m}from"./Loader.js";import{T as y}from"./Typography.js";const c=t.exports.createContext({}),T=({children:o})=>{const[r,s]=t.exports.useState(null),[a,l]=t.exports.useState(D(new Date,1)),[f,p]=t.exports.useState(!1),[n,_]=t.exports.useState([]);return C(()=>{(()=>{if(n.length>1){const h=n.every(u=>Boolean(Number(u.general_credito))===!0);p(u=>h)}})()},[n]),e(c.Provider,{value:{cliente:r,setCliente:s,mes:a,setMes:l,negocios:n,setNegocios:_,checkItbms:f,setCheckItbms:p},children:o})},I=()=>{const{realizarDialog:o}=t.exports.useContext(x),{setNegocios:r,setCliente:s}=t.exports.useContext(c),[,a]=o;return e(z,{children:e(B,{variant:"outlined",color:"inherit",size:"small",onClick:()=>{a(!1),s(null),r([])},children:"Cerrar"})})},M=t.exports.lazy(()=>d(()=>import("./ClienteNegocioAutocomplete.js"),["assets/ClienteNegocioAutocomplete.js","assets/ClienteNegocioAutocomplete.css","assets/index.js","assets/index6.css","assets/AutocompleteServer.js","assets/TextInput.js","assets/TextField.js","assets/useFormControl.js","assets/useControlled.js","assets/formControlState.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/Fade.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/emotion-react.browser.esm.js","assets/useFetch.js","assets/useHttpService.js","assets/Autocomplete.js","assets/Close.js","assets/IconButton.js","assets/ButtonBase.js","assets/useIsFocusVisible.js","assets/Popper.js","assets/Chip.js","assets/CheckBoxOutlineBlank.js","assets/jsx-runtime_commonjs-proxy.js","assets/useGetDefaultValues.js","assets/Checkbox.js","assets/BootstrapModalTitle.js","assets/ModalTransition.js","assets/Typography.js","assets/Close2.js","assets/Paid.js","assets/BootstrapDivContent.js","assets/BootstrapDivContent.css","assets/Divider.js","assets/index18.js","assets/index3.css","assets/HeaderTitle.js","assets/StyledSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/AssignmentRounded.js","assets/Tooltip.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Stack.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/index33.js","assets/DialogActions.js","assets/Button.js"])),A=t.exports.lazy(()=>d(()=>import("./FormularioRealizar.js").then(function(o){return o.F}),["assets/FormularioRealizar.js","assets/FormularioRealizar.css","assets/index.js","assets/index6.css","assets/ErrorIcon.js","assets/StyledGridOverlay.js","assets/Box.js","assets/Typography.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js"])),P=()=>{const{setCliente:o,setNegocios:r}=t.exports.useContext(c),{realizarDialog:s}=t.exports.useContext(x),[a,l]=s;return i(g,{open:a,fullScreen:!0,children:[e(v,{onClose:()=>{l(!1),o(null),r([])},children:i(y,{component:"div",textTransform:"uppercase",display:"flex",flexDirection:"row",gap:1,alignItems:"center",padding:0,margin:0,children:[e(S,{}),"Formulario de ITBMS"]})}),i(b,{children:[e(t.exports.Suspense,{fallback:e(m,{}),children:e(M,{})}),e(t.exports.Suspense,{fallback:e(m,{}),children:e(A,{})})]}),e(I,{})]})},j=()=>e(T,{children:e(P,{})});var G=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"}));export{c as C,G as i};
