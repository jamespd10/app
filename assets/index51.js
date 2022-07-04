var P=Object.defineProperty,y=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var S=(t,e,r)=>e in t?P(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,_=(t,e)=>{for(var r in e||(e={}))A.call(e,r)&&S(t,r,e[r]);if(F)for(var r of F(e))M.call(e,r)&&S(t,r,e[r]);return t},g=(t,e)=>y(t,B(e));import{r as n,t as C,as as z,a as o,j as f,b as v}from"./index.js";import{B as R,a as L}from"./BootstrapModalTitle.js";import{d as E}from"./Paid.js";import{B as O}from"./BootstrapDivContent.js";import{T as j,F as I}from"./index18.js";import{d as k,o as V,e as w,F as G,u as N}from"./array.js";import{i as W,I as $}from"./itbmsSchema.js";import{b as q}from"./ModalTransition.js";import{B as H}from"./Button.js";import{L as J}from"./LoadingButton.js";import{L as D}from"./Loader.js";import{T as K}from"./Typography.js";const b=n.exports.createContext({}),Q=({children:t})=>{const[e,r]=n.exports.useState(null),m=n.exports.useMemo(()=>({notas:"",compra_7:"0",compra_import:"0",compra_10:"0",compra_15:"0",compra_exnt:"0",venta_7:"0",venta_10:"0",venta_15:"0",venta_exnt:"0",retenciones:[{id_agente_retenedor:null,agente:"",ruc:"",dv:"",valor:""}],gastos:[{dv:"",nombre:"",ruc:"",texto:"",valor:""}]}),[]),a=n.exports.useMemo(()=>({id_cliente:null,notas:"",mes_correspondiente:null,negocios:[]}),[]),i=k({mode:"all",defaultValues:a,resolver:V(W)}),u=C(),c=C(),[,p,l,,s]=c,{control:h}=i,d=w({control:h,name:"id_cliente"});return z(()=>{(()=>{d?p(`/admin/clientes/${d}/f430`):s(null)})()},[d]),z(()=>{(()=>{l?i.reset({id_cliente:l.id_cliente,mes_correspondiente:null,negocios:l.negocios.map(x=>g(_(_({},x),m),{acumulado:Number(x.total)<0?x.total:"0"}))}):i.reset(a)})()},[l]),o(G,g(_({},i),{children:o($,{fetcher:c,children:o(b.Provider,{value:{fetcher:u,defaultValues:a,cliente:e,setCliente:r},children:t})})}))},U=()=>{const{fetcher:t,cliente:e}=n.exports.useContext(b),{pagination:r}=n.exports.useContext(j),{fetcher:m}=r,[,,a,,i]=m,[,u,,,,c]=t;return{handleSave:async l=>{c();const{data:s,error:h}=await u("/admin/f430",{method:"POST",data:l});if(s&&!h){const d=(a==null?void 0:a.resultados)||[];d.unshift({id:s.id,dv:e.dv,fecha_enviado:null,id_cliente:e.id,nom_cliente:e.nom_cliente,nombre_negocio:e.negocios[0]?e.negocios[0].negocio:"",ruc:e.ruc,tipo:e.negocios[0]?e.negocios[0].tipo:"",total:s.total,ventas:s.ventas,compras:s.compras,retenciones:s.retenciones,mes_correspondiente:s.mes_correspondiente,fecha_creacion:s.fecha_creacion,notas:"",id_negocio:0}),i({paginas:(a==null?void 0:a.paginas)||1,resultados:d})}}}},X=()=>{const{realizarDialog:t}=n.exports.useContext(I),[,e]=t,{handleSubmit:r,reset:m}=N(),{handleSave:a}=U(),{fetcher:i,defaultValues:u}=n.exports.useContext(b),[c,,,,,p]=i;return f(q,{children:[o(H,{variant:"outlined",color:"inherit",size:"small",onClick:()=>{e(!1),p(),m(u)},children:"Cerrar"}),o(J,{variant:"outlined",color:"primary",size:"small",onClick:r(a),loading:c,children:"Guardar"})]})},Y=n.exports.lazy(()=>v(()=>import("./ClienteNegocioAutocomplete.js"),["assets/ClienteNegocioAutocomplete.js","assets/ClienteNegocioAutocomplete.css","assets/index.js","assets/index6.css","assets/AutocompleteServer.js","assets/TextInput.js","assets/TextField.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/emotion-react.browser.esm.js","assets/useFetch.js","assets/useHttpService.js","assets/Autocomplete.js","assets/Close.js","assets/IconButton.js","assets/ButtonBase.js","assets/useIsFocusVisible.js","assets/Popper.js","assets/Chip.js","assets/array.js","assets/upperFirst.js","assets/CheckBoxOutlineBlank.js","assets/jsx-runtime_commonjs-proxy.js","assets/Checkbox.js","assets/BootstrapModalTitle.js","assets/ModalTransition.js","assets/Typography.js","assets/Close2.js","assets/Paid.js","assets/BootstrapDivContent.js","assets/BootstrapDivContent.css","assets/Divider.js","assets/index18.js","assets/index3.css","assets/HeaderTitle.js","assets/StyledSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/AssignmentRounded.js","assets/Tooltip.js","assets/appendOwnerState.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Stack.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/itbmsSchema.js","assets/regex.js","assets/Lazy.js","assets/Button.js","assets/LoadingButton.js"])),Z=n.exports.lazy(()=>v(()=>import("./FormularioRealizar.js").then(function(t){return t.F}),["assets/FormularioRealizar.js","assets/FormularioRealizar.css","assets/index.js","assets/index6.css","assets/itbmsSchema.js","assets/array.js","assets/upperFirst.js","assets/regex.js","assets/Lazy.js","assets/ErrorIcon.js","assets/StyledGridOverlay.js","assets/Box.js","assets/Typography.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js"])),ee=n.exports.lazy(()=>v(()=>import("./MessageAlert.js"),["assets/MessageAlert.js","assets/index.js","assets/index6.css","assets/BootstrapModalAlert.js","assets/BootstrapModalAlert.css","assets/Alert.js","assets/createSvgIcon.js","assets/Close.js","assets/Paper.js","assets/IconButton.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/useIsFocusVisible.js","assets/BootstrapModalTitle.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/isHostComponent.js","assets/useControlled.js","assets/Portal.js","assets/Typography.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/Paid.js","assets/BootstrapDivContent.js","assets/BootstrapDivContent.css","assets/Divider.js","assets/index18.js","assets/index3.css","assets/HeaderTitle.js","assets/StyledSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/Tooltip.js","assets/Popper.js","assets/appendOwnerState.js","assets/Grow.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Stack.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/array.js","assets/upperFirst.js","assets/itbmsSchema.js","assets/regex.js","assets/Lazy.js","assets/Button.js","assets/LoadingButton.js"])),te=()=>{const{realizarDialog:t}=n.exports.useContext(I),[e,r]=t;return f(R,{open:e,fullScreen:!0,children:[o(L,{onClose:()=>r(!1),children:f(K,{component:"div",textTransform:"uppercase",display:"flex",flexDirection:"row",gap:1,alignItems:"center",padding:0,margin:0,children:[o(E,{}),"Formulario de ITBMS"]})}),f(O,{children:[o(n.exports.Suspense,{fallback:o("div",{}),children:o(ee,{})}),o(n.exports.Suspense,{fallback:o(D,{}),children:o(Y,{})}),o(n.exports.Suspense,{fallback:o(D,{}),children:o(Z,{})})]}),o(X,{})]})},oe=()=>o(Q,{children:o(te,{})});var he=Object.freeze(Object.defineProperty({__proto__:null,default:oe},Symbol.toStringTag,{value:"Module"}));export{b as F,he as i};
