var v=Object.defineProperty,j=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var F=(t,o,r)=>o in t?v(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,f=(t,o)=>{for(var r in o||(o={}))P.call(o,r)&&F(t,r,o[r]);if(E)for(var r of E(o))R.call(o,r)&&F(t,r,o[r]);return t},u=(t,o)=>j(t,w(o));import{r as a,j as p,a as i,F as k}from"./index.js";import{B as L}from"./BootstrapModal.js";import{B as z}from"./BootstrapModalTitle.js";import{d as G}from"./WorkspacePremium.js";import{C as H,E as g}from"./index16.js";import{D as U}from"./DialogActions.js";import{L as M}from"./LoadingButton.js";import W from"./Persona.js";import $ from"./BancoCliente.js";import q from"./Periodos.js";import J from"./Negocios2.js";import{A as K}from"./Alert.js";import{B as O}from"./BootstrapDivContent.js";import Q from"./Especiales.js";import V from"./AbrirCuenta.js";import{T as N}from"./Typography.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Fade.js";import"./Modal2.js";import"./isHostComponent.js";import"./useId.js";import"./Portal.js";import"./Paper.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./DialogTitle.js";import"./dialogTitleClasses.js";import"./IconButton.js";import"./ButtonBase.js";import"./emotion-react.browser.esm.js";import"./HeaderTitle.js";import"./Divider.js";import"./Loader.js";import"./Grid.js";import"./CircularProgress.js";import"./yup.module.js";import"./regex.js";import"./array.js";import"./Button.js";import"./SelectHookForm.js";import"./Box.js";import"./TextField.js";import"./useFormControl.js";import"./formControlState.js";import"./react-is.production.min.js";import"./Grow.js";import"./List.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";import"./MenuItem.js";import"./listItemIconClasses.js";import"./listItemTextClasses.js";import"./TextInput.js";import"./Stack.js";import"./AutocompleteServer.js";import"./useFetch.js";import"./useHttpService.js";import"./Autocomplete.js";import"./Close.js";import"./Popper.js";import"./Chip.js";import"./CheckBoxOutlineBlank.js";import"./Checkbox.js";import"./SwitchBase.js";import"./DecimalInput.js";import"./CustomDecimal.js";import"./react-number-format.es.js";import"./string.helper.js";import"./FormControlLabel.js";import"./DireccionProvider.js";import"./DatePicker.js";import"./MobileDatePicker.js";import"./MonthPicker.js";import"./PureDateInput.js";import"./CalendarPicker.js";import"./InputAdornment.js";import"./DialogContent.js";import"./index13.js";const X=()=>{const{pagination:t}=a.exports.useContext(H),{fetcher:o,selected:r,setSelected:m}=t,[,,s,,x]=o,c=a.exports.useContext(g),{certificacion:C,setCertificacion:T}=c,{fetcher:y,divRef:A}=c,[,D,,,,I]=y;return{handleEdit:async e=>{var _;(_=A.current)==null||_.scrollTo(0,0);const{id:l}=C,b=await D(`/admin/certificaciones-ingresos/${l}`,{method:"PUT",data:e});if(b.data&&!b.error){const d=s.resultados,h=d.findIndex(n=>n.id===l);if(h!==-1&&(d[h]=u(f({},C),{negocios:e.negocios,cliente:e.cliente,banco:e.banco,identificacion_encargado:e.identificacion_encargado,nombre_encargado:e.nombre_encargado,apellido_encargado:e.apellido_encargado,cargo_encargado:e.cargo_encargado,abrir_cuenta:Boolean(Number(e.abrir_cuenta)),print_anual:Boolean(Number(e.print_anual)),genero:e.genero,periodos:e.periodos.map(n=>u(f({},n),{gasto:(Math.round(Number(n.gasto)*100)/100).toFixed(2),ingreso:(Math.round(Number(n.ingreso)*100)/100).toFixed(2),total:(Math.round((Number(n.ingreso)-Number(n.gasto))*100)/100).toFixed(2)}))}),x(u(f({},s),{resultados:d})),r.length!==0&&r.findIndex(n=>n.id===l)!==-1)){const n=r.findIndex(S=>S.id===l),B=r;B[n]=d[h],m([...B])}T(null),I()}}}},Y=()=>{const t=a.exports.useContext(g),{form:o,fetcher:r,setCertificacion:m}=t,[s]=r,{handleSubmit:x}=o,{handleEdit:c}=X();return p(U,{children:[i(M,{loading:s,variant:"outlined",color:"inherit",onClick:()=>m(null),children:"Cerrar"}),i(M,{loading:s,variant:"outlined",color:"primary",onClick:x(c),children:"Guardar"})]})},Z=()=>{const{fetcher:t}=a.exports.useContext(g),[o,,r,m]=t;return i(k,{children:!o&&(r||m)&&i(K,{variant:"filled",severity:r?"success":"error",children:(r==null?void 0:r.message)||(m==null?void 0:m.message)})})},Sr=()=>{const t=a.exports.useContext(g),{certificacion:o,setCertificacion:r,divRef:m}=t;return p(L,{open:!!o,fullWidth:!0,fullScreen:!0,children:[i(z,{onClose:()=>r(null),children:p(N,{textTransform:"uppercase",display:"flex",flexDirection:"row",gap:1,alignItems:"center",children:[i(G,{}),"Formulario para editar certificaci\xF3n de ingresos"]})}),p(O,{divRef:m,children:[p(N,{component:"span",variant:"h3",textTransform:"uppercase",children:["Realizado por: ",o==null?void 0:o.nombre," ",o==null?void 0:o.apellido]}),i(Z,{}),i(W,{}),i($,{}),i(q,{}),i(J,{}),i(Q,{}),i(V,{})]}),i(Y,{})]})};export{Sr as default};
