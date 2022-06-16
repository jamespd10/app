var le=Object.defineProperty,de=Object.defineProperties;var ue=Object.getOwnPropertyDescriptors;var W=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var q=(t,o,e)=>o in t?le(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,V=(t,o)=>{for(var e in o||(o={}))pe.call(o,e)&&q(t,e,o[e]);if(W)for(var e of W(o))me.call(o,e)&&q(t,e,o[e]);return t},P=(t,o)=>de(t,ue(o));import{g as fe,e as ge,s as he,r as n,u as _e,h as xe,_ as C,i as ye,q as be,a,j as F,k as ve,Y as G,ac as Ce,ad as T,Z as w,ae as L,ab as Ne,b as _,A as Se,m as Me,a0 as Re,F as Ee}from"./index.js";import{L as Q}from"./Loader.js";import{H as ke}from"./HeaderTitle.js";import"./BootstrapTooltip.js";import"./jwt-decode.esm.js";import{N as Ve}from"./NotFoundResults.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import"./Modal.js";import"./platform.js";import{u as Y}from"./useModal.js";import{c as z}from"./string.helper.js";import{u as Oe}from"./useFirstFetch.js";import{B as b}from"./Box.js";function Pe(t){return fe("MuiMasonry",t)}ge("MuiMasonry",["root"]);const Te=["children","className","component","columns","spacing","defaultColumns","defaultHeight","defaultSpacing"],v=t=>Number(t.replace("px","")),we=t=>{const{classes:o}=t;return ye({root:["root"]},Pe,o)},Le=({ownerState:t,theme:o})=>{let e={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"space-between",boxSizing:"border-box","& > *":{boxSizing:"border-box"}};const s={};if(t.isSSR){const c={},r=Number(o.spacing(t.defaultSpacing).replace("px",""));for(let i=1;i<=t.defaultColumns;i+=1)c[`&:nth-of-type(${t.defaultColumns}n+${i%t.defaultColumns})`]={order:i};return s.height=t.defaultHeight,s.margin=-(r/2),s["& > *"]=C({},e["& > *"],c,{margin:r/2,width:`calc(${(100/t.defaultColumns).toFixed(2)}% - ${r}px)`}),C({},e,s)}const d=G({values:t.spacing,breakpoints:o.breakpoints.values}),u=Ce(o);e=T(e,w({theme:o},d,c=>{const r=Number(c),i=Number(L(u,r).replace("px",""));return C({margin:-(i/2),"& > *":{margin:i/2}},t.maxColumnHeight&&{height:Math.ceil(t.maxColumnHeight+i)})}));const l=G({values:t.columns,breakpoints:o.breakpoints.values});return e=T(e,w({theme:o},l,c=>{const r=Number(c),i=`${(100/r).toFixed(2)}%`,N=typeof d!="object"?L(u,Number(d)):"0px";return{"& > *":{width:`calc(${i} - ${N})`}}})),typeof d=="object"&&(e=T(e,w({theme:o},d,(c,r)=>{if(r){const i=Number(c),N=Object.keys(l).pop(),p=L(u,i),M=typeof l=="object"?l[r]||l[N]:l;return{"& > *":{width:`calc(${`${(100/M).toFixed(2)}%`} - ${p})`}}}return null}))),e},ze=he("div",{name:"MuiMasonry",slot:"Root",overridesResolver:(t,o)=>[o.root]})(Le),Fe=n.exports.forwardRef(function(o,e){const s=_e({props:o,name:"MuiMasonry"}),{children:d,className:u,component:x="div",columns:l=4,spacing:g=1,defaultColumns:c,defaultHeight:r,defaultSpacing:i}=s,N=xe(s,Te),p=n.exports.useRef(),[M,D]=n.exports.useState(),A=!M&&r&&c!==void 0&&i!==void 0,[J,K]=n.exports.useState(A?c-1:0),B=C({},s,{spacing:g,columns:l,maxColumnHeight:M,defaultColumns:c,defaultHeight:r,defaultSpacing:i,isSSR:A}),X=we(B),ee=m=>{if(!p.current||!m||m.length===0)return;const h=p.current,H=p.current.firstChild,$=h.clientWidth,j=H.clientWidth;if($===0||j===0)return;const I=window.getComputedStyle(H),ne=v(I.marginLeft),re=v(I.marginRight),O=Math.round($/(j+ne+re)),R=new Array(O).fill(0);let S=!1;if(h.childNodes.forEach(f=>{if(f.nodeType!==Node.ELEMENT_NODE||f.dataset.class==="line-break"||S)return;const E=window.getComputedStyle(f),ie=v(E.marginTop),ce=v(E.marginBottom),U=v(E.height)?Math.ceil(v(E.height))+ie+ce:0;if(U===0){S=!0;return}for(let y=0;y<f.childNodes.length;y+=1){const k=f.childNodes[y];if(k.tagName==="IMG"&&k.clientHeight===0){S=!0;break}}if(!S){const y=R.indexOf(Math.min(...R));R[y]+=U;const k=y+1;f.style.order=k}}),!S){D(Math.max(...R));const f=O>0?O-1:0;K(f)}},te=n.exports.useRef(typeof ResizeObserver=="undefined"?void 0:new ResizeObserver(ee));n.exports.useEffect(()=>{const m=te.current;if(m!==void 0)return p.current&&p.current.childNodes.forEach(h=>{m.observe(h)}),()=>m?m.disconnect():{}},[l,g,d]);const oe=be(e,p),se={flexBasis:"100%",width:0,margin:0,padding:0},ae=new Array(J).fill("").map((m,h)=>a("span",{"data-class":"line-break",style:C({},se,{order:h+1})},h));return F(ze,C({as:x,className:ve(X.root,u),ref:oe,ownerState:B},N,{children:[d,ae]}))});var De=Fe;const Ae=()=>{const{id:t,cliente:o}=Ne(),{loading:e,value:s,retry:d}=Oe({url:`/admin/negocios/${t}/${o}`}),[u,x]=n.exports.useState(!1),[l,g]=n.exports.useState();return n.exports.useEffect(()=>{(()=>{!e&&s&&s.status===201&&s.data&&g(P(V({},s.data),{telefono:s.data.telefono,provincia:z(s.data.provincia),distrito:z(s.data.distrito),corregimiento:z(s.data.corregimiento),direccion:s.data.ubicacion,fecha_a_operacion:s.data.fecha_aviso_op?new Date(s.data.fecha_aviso_op):void 0,ruta:s.data.id_ruta,itbms_asignado_a:s.data.usuario_itbms,ss_asignado_a:s.data.usuario_sipe,actividades:s.data.actividades.length>0?s.data.actividades.map(r=>({id:r.id_actividad,actividad:r.actividad})):void 0,tipos:s.data.tipo?[{tipo:s.data.tipo,id:s.data.id_tipo}]:void 0}))})()},[s,e]),{editing:u,setEditing:x,id:t,loading:e,value:s,defaultValues:l,retry:d}},Z=n.exports.createContext({}),Be=({children:t})=>{const o=Ae(),e=Y(),s=Y();return a(Z.Provider,{value:P(V({},o),{modalMark:e,modalEditPatronal:s}),children:t})},He=n.exports.lazy(()=>_(()=>import("./NegocioView.js"),["assets/NegocioView.js","assets/NegocioView.css","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index7.css","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/ListItem.js","assets/List.js","assets/isHostComponent.js","assets/ButtonBase.js","assets/ListItemText.js","assets/listItemTextClasses.js","assets/Typography.js","assets/Card.js","assets/Paper.js","assets/Divider.js","assets/string.helper.js","assets/regex.js","assets/ChipState.js","assets/Error.js","assets/Chip.js","assets/Stack.js"])),$e=n.exports.lazy(()=>_(()=>import("./NegocioDashboard.js"),["assets/NegocioDashboard.js","assets/NegocioDashboard.css","assets/PersonAddDisabled.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index7.css","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/InsertDriveFile.js","assets/AssignmentTurnedIn.js","assets/CardHome.js","assets/platform.js","assets/ButtonBase.js","assets/jwt-decode.esm.js","assets/Card.js","assets/Paper.js","assets/CardContent.js","assets/Stack.js","assets/Typography.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/useHttpService.js"])),je=n.exports.lazy(()=>_(()=>import("./NegocioAcciones.js"),["assets/NegocioAcciones.js","assets/index.js","assets/index7.css","assets/InsertDriveFile.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/Check.js","assets/AssignmentTurnedIn.js","assets/CustomSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/ButtonBase.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/isHostComponent.js","assets/Grow.js","assets/ContentProvider.js","assets/useModal.js","assets/jwt-decode.esm.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Backdrop.js","assets/Stack.js","assets/Typography.js","assets/Loader.js","assets/Grid.js","assets/HeaderTitle.js","assets/Divider.js","assets/BootstrapTooltip.js","assets/NotFoundResults.js","assets/Modal.js","assets/Close2.js","assets/LoadingButton.js","assets/Modal2.js","assets/Paper.js","assets/Button.js","assets/IconButton.js","assets/Error.js","assets/platform.js","assets/string.helper.js","assets/regex.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/useHttpService.js","assets/Box.js"])),Ie=n.exports.lazy(()=>_(()=>import("./index6.js").then(function(t){return t.i}),["assets/index6.js","assets/index.js","assets/index7.css","assets/array.js","assets/upperFirst.js","assets/HeaderTitle.js","assets/Typography.js","assets/Divider.js","assets/StepperForm.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/jwt-decode.esm.js","assets/Grid.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/platform.js","assets/ButtonBase.js","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/LoadingButton.js","assets/Backdrop.js","assets/Modal2.js","assets/Paper.js","assets/Button.js","assets/IconButton.js","assets/Error.js","assets/Box.js","assets/useStepper.js","assets/useFetch.js","assets/useHttpService.js","assets/Add.js","assets/AutocompleteServer.js","assets/TextInput.js","assets/TextField.js","assets/FormHelperText.js","assets/react-is.production.min.js","assets/List.js","assets/GlobalStyles.js","assets/Autocomplete.js","assets/Close.js","assets/Chip.js","assets/CheckBoxOutlineBlank.js","assets/ListItem.js","assets/Checkbox.js","assets/DecimalInput.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/PhoneInput.js","assets/DateInput.js","assets/MobileDatePicker.js","assets/MonthPicker.js","assets/usePickerState.js","assets/InputAdornment.js","assets/index7.js","assets/PatronalInput.js","assets/CustomSipe.js","assets/Loader.js","assets/Stack.js","assets/DireccionProvider.js","assets/BackgroundLoader.js","assets/NegociosProvider.js","assets/useFetchPagination.js","assets/useAsyncRetry.js","assets/useList.js","assets/usePrevious.js","assets/Card.js"])),Ue=n.exports.lazy(()=>_(()=>import("./ClienteSeleccionado.js"),["assets/ClienteSeleccionado.js","assets/index.js","assets/index7.css","assets/Paper.js","assets/Typography.js","assets/Divider.js","assets/Loader.js","assets/Grid.js","assets/HeaderTitle.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/jwt-decode.esm.js","assets/NotFoundResults.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/LoadingButton.js","assets/Backdrop.js","assets/Modal2.js","assets/Button.js","assets/ButtonBase.js","assets/IconButton.js","assets/Error.js","assets/platform.js","assets/string.helper.js","assets/regex.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/useHttpService.js","assets/Box.js"])),We=n.exports.lazy(()=>_(()=>import("./DeclaracionRenta.js"),["assets/DeclaracionRenta.js","assets/Clear.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index7.css","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/TextInput.js","assets/TextField.js","assets/FormHelperText.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/GlobalStyles.js","assets/facturaDashboard.js","assets/useAsyncRetry.js","assets/jwt-decode.esm.js","assets/useHttpService.js","assets/string.helper.js","assets/regex.js","assets/ChipState.js","assets/Error.js","assets/Chip.js","assets/ButtonBase.js","assets/date.helper.js","assets/index13.js","assets/InputAdornment.js","assets/IconButton.js","assets/Divider.js"])),qe=n.exports.lazy(()=>_(()=>import("./DeclaracionMunicipal.js"),["assets/DeclaracionMunicipal.js","assets/Clear.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index7.css","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/TextInput.js","assets/TextField.js","assets/FormHelperText.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/GlobalStyles.js","assets/facturaDashboard.js","assets/useAsyncRetry.js","assets/jwt-decode.esm.js","assets/useHttpService.js","assets/string.helper.js","assets/regex.js","assets/ChipState.js","assets/Error.js","assets/Chip.js","assets/ButtonBase.js","assets/date.helper.js","assets/index13.js","assets/InputAdornment.js","assets/IconButton.js","assets/Divider.js"])),Ge=()=>{var i;const t=n.exports.useContext(Z),{loading:o,value:e,editing:s}=t,{setEditing:d,defaultValues:u,retry:x}=t,{authState:l}=n.exports.useContext(Se),{tipo:g}=l,c=Me(),r=Re(c.breakpoints.down("md"));return F(Ee,{children:[a(ke,{message:"Datos del Negocio"}),o&&a(Q,{}),!o&&e&&(e==null?void 0:e.status)!==201&&a(Ve,{text:(i=e.error)==null?void 0:i.message}),!o&&(e==null?void 0:e.status)===201&&!s&&a(b,{sx:{width:"100%",height:"100%",marginTop:1},children:F(De,{columns:r?1:2,spacing:1,sx:{width:"100%",margin:0,padding:0},children:[a(b,{children:a(He,V({},e.data))}),a(b,{children:a($e,{})}),g==="Super"&&a(b,{children:a(Ue,{})}),a(b,{children:a(We,{})}),a(b,{children:a(qe,{})})]})}),!o&&e&&e.status===201&&e.data&&a(n.exports.Suspense,{fallback:a("div",{}),children:a(je,{})}),s&&!o&&e&&e.status===201&&e.data&&u&&a(n.exports.Suspense,{fallback:a(Q,{}),children:a(Ie,{negocio:u,setEditing:d,retry:x})})]})},Qe=()=>a(Be,{children:a(Ge,{})});var dt=Object.freeze(Object.defineProperty({__proto__:null,default:Qe},Symbol.toStringTag,{value:"Module"}));export{Z as N,dt as i};
