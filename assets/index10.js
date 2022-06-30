var le=Object.defineProperty,de=Object.defineProperties;var ue=Object.getOwnPropertyDescriptors;var W=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var q=(t,o,e)=>o in t?le(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,k=(t,o)=>{for(var e in o||(o={}))pe.call(o,e)&&q(t,e,o[e]);if(W)for(var e of W(o))me.call(o,e)&&q(t,e,o[e]);return t},P=(t,o)=>de(t,ue(o));import{g as fe,c as ge,s as he,r as n,u as _e,f as xe,_ as N,h as be,q as ye,a,j as B,i as Ne,Y as G,ac as ve,ad as L,Z as T,ae as w,ab as Ce,b as _,A as Se,l as Me,a0 as Re,F as Ee}from"./index.js";import{L as Q}from"./Loader.js";import{H as Ve}from"./HeaderTitle.js";import"./BootstrapTooltip.js";import{N as ke}from"./NotFoundResults.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import"./Modal.js";import"./SelectedCard.js";import{u as Y}from"./useModal.js";import{c as z}from"./string.helper.js";import{u as Oe}from"./useFirstFetch.js";import{B as S}from"./Box.js";function Pe(t){return fe("MuiMasonry",t)}ge("MuiMasonry",["root"]);const Le=["children","className","component","columns","spacing","defaultColumns","defaultHeight","defaultSpacing"],y=t=>Number(t.replace("px","")),Te=t=>{const{classes:o}=t;return be({root:["root"]},Pe,o)},we=({ownerState:t,theme:o})=>{let e={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"space-between",boxSizing:"border-box","& > *":{boxSizing:"border-box"}};const s={};if(t.isSSR){const i={},c=Number(o.spacing(t.defaultSpacing).replace("px",""));for(let r=1;r<=t.defaultColumns;r+=1)i[`&:nth-of-type(${t.defaultColumns}n+${r%t.defaultColumns})`]={order:r};return s.height=t.defaultHeight,s.margin=-(c/2),s["& > *"]=N({},e["& > *"],i,{margin:c/2,width:`calc(${(100/t.defaultColumns).toFixed(2)}% - ${c}px)`}),N({},e,s)}const d=G({values:t.spacing,breakpoints:o.breakpoints.values}),u=ve(o);e=L(e,T({theme:o},d,i=>{const c=Number(i),r=Number(w(u,c).replace("px",""));return N({margin:-(r/2),"& > *":{margin:r/2}},t.maxColumnHeight&&{height:Math.ceil(t.maxColumnHeight+r)})}));const l=G({values:t.columns,breakpoints:o.breakpoints.values});return e=L(e,T({theme:o},l,i=>{const c=Number(i),r=`${(100/c).toFixed(2)}%`,v=typeof d!="object"?w(u,Number(d)):"0px";return{"& > *":{width:`calc(${r} - ${v})`}}})),typeof d=="object"&&(e=L(e,T({theme:o},d,(i,c)=>{if(c){const r=Number(i),v=Object.keys(l).pop(),p=w(u,r),M=typeof l=="object"?l[c]||l[v]:l;return{"& > *":{width:`calc(${`${(100/M).toFixed(2)}%`} - ${p})`}}}return null}))),e},ze=he("div",{name:"MuiMasonry",slot:"Root",overridesResolver:(t,o)=>[o.root]})(we),Be=n.exports.forwardRef(function(o,e){const s=_e({props:o,name:"MuiMasonry"}),{children:d,className:u,component:x="div",columns:l=4,spacing:g=1,defaultColumns:i,defaultHeight:c,defaultSpacing:r}=s,v=xe(s,Le),p=n.exports.useRef(),[M,F]=n.exports.useState(),D=!M&&c&&i!==void 0&&r!==void 0,[J,K]=n.exports.useState(D?i-1:0),A=N({},s,{spacing:g,columns:l,maxColumnHeight:M,defaultColumns:i,defaultHeight:c,defaultSpacing:r,isSSR:D}),X=Te(A),ee=m=>{if(!p.current||!m||m.length===0)return;const h=p.current,H=p.current.firstChild,$=h.clientWidth,j=H.clientWidth;if($===0||j===0)return;const I=window.getComputedStyle(H),ne=y(I.marginLeft),re=y(I.marginRight),O=Math.round($/(j+ne+re)),R=new Array(O).fill(0);let C=!1;if(h.childNodes.forEach(f=>{if(f.nodeType!==Node.ELEMENT_NODE||f.dataset.class==="line-break"||C)return;const E=window.getComputedStyle(f),ie=y(E.marginTop),ce=y(E.marginBottom),U=y(E.height)?Math.ceil(y(E.height))+ie+ce:0;if(U===0){C=!0;return}for(let b=0;b<f.childNodes.length;b+=1){const V=f.childNodes[b];if(V.tagName==="IMG"&&V.clientHeight===0){C=!0;break}}if(!C){const b=R.indexOf(Math.min(...R));R[b]+=U;const V=b+1;f.style.order=V}}),!C){F(Math.max(...R));const f=O>0?O-1:0;K(f)}},te=n.exports.useRef(typeof ResizeObserver=="undefined"?void 0:new ResizeObserver(ee));n.exports.useEffect(()=>{const m=te.current;if(m!==void 0)return p.current&&p.current.childNodes.forEach(h=>{m.observe(h)}),()=>m?m.disconnect():{}},[l,g,d]);const oe=ye(e,p),se={flexBasis:"100%",width:0,margin:0,padding:0},ae=new Array(J).fill("").map((m,h)=>a("span",{"data-class":"line-break",style:N({},se,{order:h+1})},h));return B(ze,N({as:x,className:Ne(X.root,u),ref:oe,ownerState:A},v,{children:[d,ae]}))});var Fe=Be;const De=()=>{const{id:t,cliente:o}=Ce(),{loading:e,value:s,retry:d}=Oe({url:`/admin/negocios/${t}/${o}`}),[u,x]=n.exports.useState(!1),[l,g]=n.exports.useState();return n.exports.useEffect(()=>{(()=>{!e&&s&&s.status===201&&s.data&&g(P(k({},s.data),{telefono:s.data.telefono,provincia:z(s.data.provincia),distrito:z(s.data.distrito),corregimiento:z(s.data.corregimiento),direccion:s.data.ubicacion,fecha_a_operacion:s.data.fecha_aviso_op?new Date(s.data.fecha_aviso_op):void 0,ruta:s.data.id_ruta,itbms_asignado_a:s.data.usuario_itbms,ss_asignado_a:s.data.usuario_sipe,tipos:s.data.tipo?[{tipo:s.data.tipo,id:s.data.id_tipo}]:void 0,cobra_sipe:Boolean(Number(s.data.cobra_sipe)),cobra_itbms:Boolean(Number(s.data.cobra_itbms))}))})()},[s,e]),{editing:u,setEditing:x,id:t,loading:e,value:s,defaultValues:l,retry:d}},Z=n.exports.createContext({}),Ae=({children:t})=>{const o=De(),e=Y(),s=Y();return a(Z.Provider,{value:P(k({},o),{modalMark:e,modalEditPatronal:s}),children:t})},He=n.exports.lazy(()=>_(()=>import("./NegocioView.js"),["assets/NegocioView.js","assets/NegocioView.css","assets/index.js","assets/index7.css","assets/ListItem.js","assets/List.js","assets/useControlled.js","assets/isHostComponent.js","assets/ButtonBase.js","assets/useIsFocusVisible.js","assets/ListItemText.js","assets/listItemTextClasses.js","assets/Typography.js","assets/string.helper.js","assets/regex.js","assets/ChipState.js","assets/Error.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/Chip.js","assets/Stack.js","assets/Divider.js","assets/Paper.js"])),$e=n.exports.lazy(()=>_(()=>import("./NegocioDashboard.js"),["assets/NegocioDashboard.js","assets/NegocioDashboard.css","assets/PersonAddDisabled.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index7.css","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/InsertDriveFile.js","assets/AssignmentTurnedIn.js","assets/CardHome.js","assets/SelectedCard.js","assets/ButtonBase.js","assets/Card.js","assets/Paper.js","assets/CardContent.js","assets/Stack.js","assets/Typography.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/useAsync.js","assets/useHttpService.js"])),je=n.exports.lazy(()=>_(()=>import("./NegocioAcciones.js"),["assets/NegocioAcciones.js","assets/index.js","assets/index7.css","assets/InsertDriveFile.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/Check.js","assets/AssignmentTurnedIn.js","assets/CustomSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/ButtonBase.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/appendOwnerState.js","assets/isHostComponent.js","assets/Grow.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Backdrop.js","assets/Stack.js","assets/Typography.js","assets/Loader.js","assets/Grid.js","assets/HeaderTitle.js","assets/Divider.js","assets/BootstrapTooltip.js","assets/NotFoundResults.js","assets/Modal.js","assets/Close2.js","assets/ModalTransition.js","assets/Modal2.js","assets/Paper.js","assets/IconButton.js","assets/Error.js","assets/DialogContent.js","assets/LoadingButton.js","assets/Button.js","assets/SelectedCard.js","assets/string.helper.js","assets/regex.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/useAsync.js","assets/useHttpService.js","assets/Box.js"])),Ie=n.exports.lazy(()=>_(()=>import("./index6.js").then(function(t){return t.i}),["assets/index6.js","assets/index.js","assets/index7.css","assets/array.js","assets/upperFirst.js","assets/HeaderTitle.js","assets/Typography.js","assets/Divider.js","assets/StepperForm.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/appendOwnerState.js","assets/isHostComponent.js","assets/Grow.js","assets/Grid.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/SelectedCard.js","assets/ButtonBase.js","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/Paper.js","assets/IconButton.js","assets/Error.js","assets/DialogContent.js","assets/LoadingButton.js","assets/Button.js","assets/Box.js","assets/useStepper.js","assets/useFetch.js","assets/useHttpService.js","assets/Add.js","assets/AutocompleteServer.js","assets/TextInput.js","assets/TextField.js","assets/react-is.production.min.js","assets/List.js","assets/GlobalStyles.js","assets/Autocomplete.js","assets/Close.js","assets/Chip.js","assets/CheckBoxOutlineBlank.js","assets/ListItem.js","assets/Checkbox.js","assets/DecimalInput.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/PhoneInput.js","assets/DateInput.js","assets/DatePicker.js","assets/MobileDatePicker.js","assets/MonthPicker.js","assets/PureDateInput.js","assets/InputAdornment.js","assets/index7.js","assets/PatronalInput.js","assets/CustomSipe.js","assets/Loader.js","assets/Stack.js","assets/DireccionProvider.js","assets/BackgroundLoader.js","assets/NegociosProvider.js","assets/useFetchPagination.js","assets/useAsyncRetry.js","assets/useAsync.js","assets/useList.js","assets/usePrevious.js","assets/Card.js"])),Ue=n.exports.lazy(()=>_(()=>import("./ClienteSeleccionado.js"),["assets/ClienteSeleccionado.js","assets/index.js","assets/index7.css","assets/Paper.js","assets/Typography.js","assets/Divider.js","assets/Loader.js","assets/Grid.js","assets/HeaderTitle.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/appendOwnerState.js","assets/isHostComponent.js","assets/Grow.js","assets/NotFoundResults.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/IconButton.js","assets/ButtonBase.js","assets/Error.js","assets/DialogContent.js","assets/LoadingButton.js","assets/Button.js","assets/SelectedCard.js","assets/string.helper.js","assets/regex.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/useAsync.js","assets/useHttpService.js","assets/Box.js"])),We=n.exports.lazy(()=>_(()=>import("./DeclaracionRenta.js"),["assets/DeclaracionRenta.js","assets/Clear.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index7.css","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/TextInput.js","assets/TextField.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/GlobalStyles.js","assets/facturaDashboard.js","assets/useAsyncRetry.js","assets/useAsync.js","assets/useHttpService.js","assets/string.helper.js","assets/regex.js","assets/ChipState.js","assets/Error.js","assets/Chip.js","assets/ButtonBase.js","assets/date.helper.js","assets/index13.js","assets/InputAdornment.js","assets/IconButton.js","assets/Divider.js"])),qe=n.exports.lazy(()=>_(()=>import("./DeclaracionMunicipal.js"),["assets/DeclaracionMunicipal.js","assets/Clear.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index7.css","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/TextInput.js","assets/TextField.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/GlobalStyles.js","assets/facturaDashboard.js","assets/useAsyncRetry.js","assets/useAsync.js","assets/useHttpService.js","assets/string.helper.js","assets/regex.js","assets/ChipState.js","assets/Error.js","assets/Chip.js","assets/ButtonBase.js","assets/date.helper.js","assets/index13.js","assets/InputAdornment.js","assets/IconButton.js","assets/Divider.js"])),Ge=()=>{var r;const t=n.exports.useContext(Z),{loading:o,value:e,editing:s}=t,{setEditing:d,defaultValues:u,retry:x}=t,{authState:l}=n.exports.useContext(Se),{tipo:g}=l,i=Me(),c=Re(i.breakpoints.down("md"));return B(Ee,{children:[a(Ve,{message:"Datos del Negocio"}),o&&a(Q,{}),!o&&e&&(e==null?void 0:e.status)!==201&&a(ke,{text:(r=e.error)==null?void 0:r.message}),!o&&(e==null?void 0:e.status)===201&&!s&&B(Fe,{columns:c?1:2,spacing:1,sx:{width:"100%",margin:0,padding:0},children:[a(S,{children:a(He,k({},e.data))}),a(S,{children:a($e,{})}),g==="Super"&&a(S,{children:a(Ue,{})}),a(S,{children:a(We,{})}),a(S,{children:a(qe,{})})]}),!o&&e&&e.status===201&&e.data&&a(n.exports.Suspense,{fallback:a("div",{}),children:a(je,{})}),s&&!o&&e&&e.status===201&&e.data&&u&&a(n.exports.Suspense,{fallback:a(Q,{}),children:a(Ie,{negocio:u,setEditing:d,retry:x})})]})},Qe=()=>a(Ae,{children:a(Ge,{})});var lt=Object.freeze(Object.defineProperty({__proto__:null,default:Qe},Symbol.toStringTag,{value:"Module"}));export{Z as N,lt as i};
