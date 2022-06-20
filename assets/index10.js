var le=Object.defineProperty,de=Object.defineProperties;var ue=Object.getOwnPropertyDescriptors;var W=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var q=(t,o,e)=>o in t?le(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,k=(t,o)=>{for(var e in o||(o={}))pe.call(o,e)&&q(t,e,o[e]);if(W)for(var e of W(o))me.call(o,e)&&q(t,e,o[e]);return t},P=(t,o)=>de(t,ue(o));import{g as fe,c as ge,s as he,r as a,u as _e,f as xe,_ as v,h as ye,q as be,a as n,j as F,i as ve,Y as G,ac as Ce,ad as L,Z as T,ae as w,ab as Ne,b as _,A as Se,l as Me,a0 as Re,F as Ee}from"./index.js";import{L as Q}from"./Loader.js";import{H as Ve}from"./HeaderTitle.js";import"./BootstrapTooltip.js";import{N as ke}from"./NotFoundResults.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import"./Modal.js";import"./SelectedCard.js";import{u as Y}from"./useModal.js";import{c as z}from"./string.helper.js";import{u as Oe}from"./useFirstFetch.js";import{B as S}from"./Box.js";function Pe(t){return fe("MuiMasonry",t)}ge("MuiMasonry",["root"]);const Le=["children","className","component","columns","spacing","defaultColumns","defaultHeight","defaultSpacing"],b=t=>Number(t.replace("px","")),Te=t=>{const{classes:o}=t;return ye({root:["root"]},Pe,o)},we=({ownerState:t,theme:o})=>{let e={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"space-between",boxSizing:"border-box","& > *":{boxSizing:"border-box"}};const s={};if(t.isSSR){const i={},c=Number(o.spacing(t.defaultSpacing).replace("px",""));for(let r=1;r<=t.defaultColumns;r+=1)i[`&:nth-of-type(${t.defaultColumns}n+${r%t.defaultColumns})`]={order:r};return s.height=t.defaultHeight,s.margin=-(c/2),s["& > *"]=v({},e["& > *"],i,{margin:c/2,width:`calc(${(100/t.defaultColumns).toFixed(2)}% - ${c}px)`}),v({},e,s)}const d=G({values:t.spacing,breakpoints:o.breakpoints.values}),u=Ce(o);e=L(e,T({theme:o},d,i=>{const c=Number(i),r=Number(w(u,c).replace("px",""));return v({margin:-(r/2),"& > *":{margin:r/2}},t.maxColumnHeight&&{height:Math.ceil(t.maxColumnHeight+r)})}));const l=G({values:t.columns,breakpoints:o.breakpoints.values});return e=L(e,T({theme:o},l,i=>{const c=Number(i),r=`${(100/c).toFixed(2)}%`,C=typeof d!="object"?w(u,Number(d)):"0px";return{"& > *":{width:`calc(${r} - ${C})`}}})),typeof d=="object"&&(e=L(e,T({theme:o},d,(i,c)=>{if(c){const r=Number(i),C=Object.keys(l).pop(),p=w(u,r),M=typeof l=="object"?l[c]||l[C]:l;return{"& > *":{width:`calc(${`${(100/M).toFixed(2)}%`} - ${p})`}}}return null}))),e},ze=he("div",{name:"MuiMasonry",slot:"Root",overridesResolver:(t,o)=>[o.root]})(we),Fe=a.exports.forwardRef(function(o,e){const s=_e({props:o,name:"MuiMasonry"}),{children:d,className:u,component:x="div",columns:l=4,spacing:g=1,defaultColumns:i,defaultHeight:c,defaultSpacing:r}=s,C=xe(s,Le),p=a.exports.useRef(),[M,D]=a.exports.useState(),A=!M&&c&&i!==void 0&&r!==void 0,[J,K]=a.exports.useState(A?i-1:0),B=v({},s,{spacing:g,columns:l,maxColumnHeight:M,defaultColumns:i,defaultHeight:c,defaultSpacing:r,isSSR:A}),X=Te(B),ee=m=>{if(!p.current||!m||m.length===0)return;const h=p.current,H=p.current.firstChild,$=h.clientWidth,j=H.clientWidth;if($===0||j===0)return;const I=window.getComputedStyle(H),ae=b(I.marginLeft),re=b(I.marginRight),O=Math.round($/(j+ae+re)),R=new Array(O).fill(0);let N=!1;if(h.childNodes.forEach(f=>{if(f.nodeType!==Node.ELEMENT_NODE||f.dataset.class==="line-break"||N)return;const E=window.getComputedStyle(f),ie=b(E.marginTop),ce=b(E.marginBottom),U=b(E.height)?Math.ceil(b(E.height))+ie+ce:0;if(U===0){N=!0;return}for(let y=0;y<f.childNodes.length;y+=1){const V=f.childNodes[y];if(V.tagName==="IMG"&&V.clientHeight===0){N=!0;break}}if(!N){const y=R.indexOf(Math.min(...R));R[y]+=U;const V=y+1;f.style.order=V}}),!N){D(Math.max(...R));const f=O>0?O-1:0;K(f)}},te=a.exports.useRef(typeof ResizeObserver=="undefined"?void 0:new ResizeObserver(ee));a.exports.useEffect(()=>{const m=te.current;if(m!==void 0)return p.current&&p.current.childNodes.forEach(h=>{m.observe(h)}),()=>m?m.disconnect():{}},[l,g,d]);const oe=be(e,p),se={flexBasis:"100%",width:0,margin:0,padding:0},ne=new Array(J).fill("").map((m,h)=>n("span",{"data-class":"line-break",style:v({},se,{order:h+1})},h));return F(ze,v({as:x,className:ve(X.root,u),ref:oe,ownerState:B},C,{children:[d,ne]}))});var De=Fe;const Ae=()=>{const{id:t,cliente:o}=Ne(),{loading:e,value:s,retry:d}=Oe({url:`/admin/negocios/${t}/${o}`}),[u,x]=a.exports.useState(!1),[l,g]=a.exports.useState();return a.exports.useEffect(()=>{(()=>{!e&&s&&s.status===201&&s.data&&g(P(k({},s.data),{telefono:s.data.telefono,provincia:z(s.data.provincia),distrito:z(s.data.distrito),corregimiento:z(s.data.corregimiento),direccion:s.data.ubicacion,fecha_a_operacion:s.data.fecha_aviso_op?new Date(s.data.fecha_aviso_op):void 0,ruta:s.data.id_ruta,itbms_asignado_a:s.data.usuario_itbms,ss_asignado_a:s.data.usuario_sipe,tipos:s.data.tipo?[{tipo:s.data.tipo,id:s.data.id_tipo}]:void 0}))})()},[s,e]),{editing:u,setEditing:x,id:t,loading:e,value:s,defaultValues:l,retry:d}},Z=a.exports.createContext({}),Be=({children:t})=>{const o=Ae(),e=Y(),s=Y();return n(Z.Provider,{value:P(k({},o),{modalMark:e,modalEditPatronal:s}),children:t})},He=a.exports.lazy(()=>_(()=>import("./NegocioView.js"),["assets/NegocioView.js","assets/NegocioView.css","assets/index.js","assets/index3.css","assets/ListItem.js","assets/List.js","assets/useControlled.js","assets/isHostComponent.js","assets/ButtonBase.js","assets/useIsFocusVisible.js","assets/ListItemText.js","assets/listItemTextClasses.js","assets/Typography.js","assets/string.helper.js","assets/regex.js","assets/ChipState.js","assets/Error.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/Chip.js","assets/Stack.js","assets/Divider.js","assets/Paper.js"])),$e=a.exports.lazy(()=>_(()=>import("./NegocioDashboard.js"),["assets/NegocioDashboard.js","assets/NegocioDashboard.css","assets/PersonAddDisabled.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index3.css","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/InsertDriveFile.js","assets/AssignmentTurnedIn.js","assets/CardHome.js","assets/SelectedCard.js","assets/ButtonBase.js","assets/Card.js","assets/Paper.js","assets/CardContent.js","assets/Stack.js","assets/Typography.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/useHttpService.js"])),je=a.exports.lazy(()=>_(()=>import("./NegocioAcciones.js"),["assets/NegocioAcciones.js","assets/index.js","assets/index3.css","assets/InsertDriveFile.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/Check.js","assets/AssignmentTurnedIn.js","assets/CustomSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/ButtonBase.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/isHostComponent.js","assets/Grow.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Backdrop.js","assets/Stack.js","assets/Typography.js","assets/Loader.js","assets/Grid.js","assets/HeaderTitle.js","assets/Divider.js","assets/BootstrapTooltip.js","assets/NotFoundResults.js","assets/Modal.js","assets/Close2.js","assets/LoadingButton.js","assets/Modal2.js","assets/Paper.js","assets/Button.js","assets/IconButton.js","assets/Error.js","assets/SelectedCard.js","assets/string.helper.js","assets/regex.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/useHttpService.js","assets/Box.js"])),Ie=a.exports.lazy(()=>_(()=>import("./index6.js").then(function(t){return t.i}),["assets/index6.js","assets/index.js","assets/index3.css","assets/array.js","assets/upperFirst.js","assets/HeaderTitle.js","assets/Typography.js","assets/Divider.js","assets/StepperForm.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/Grid.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/SelectedCard.js","assets/ButtonBase.js","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/LoadingButton.js","assets/Backdrop.js","assets/Modal2.js","assets/Paper.js","assets/Button.js","assets/IconButton.js","assets/Error.js","assets/Box.js","assets/useStepper.js","assets/useFetch.js","assets/useHttpService.js","assets/Add.js","assets/AutocompleteServer.js","assets/TextInput.js","assets/TextField.js","assets/FormHelperText.js","assets/react-is.production.min.js","assets/List.js","assets/GlobalStyles.js","assets/Autocomplete.js","assets/Close.js","assets/Chip.js","assets/CheckBoxOutlineBlank.js","assets/ListItem.js","assets/Checkbox.js","assets/DecimalInput.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/PhoneInput.js","assets/DateInput.js","assets/MobileDatePicker.js","assets/MonthPicker.js","assets/usePickerState.js","assets/InputAdornment.js","assets/index7.js","assets/PatronalInput.js","assets/CustomSipe.js","assets/Loader.js","assets/Stack.js","assets/DireccionProvider.js","assets/BackgroundLoader.js","assets/NegociosProvider.js","assets/useFetchPagination.js","assets/useAsyncRetry.js","assets/useList.js","assets/usePrevious.js","assets/Card.js"])),Ue=a.exports.lazy(()=>_(()=>import("./ClienteSeleccionado.js"),["assets/ClienteSeleccionado.js","assets/index.js","assets/index3.css","assets/Paper.js","assets/Typography.js","assets/Divider.js","assets/Loader.js","assets/Grid.js","assets/HeaderTitle.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/NotFoundResults.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/LoadingButton.js","assets/Backdrop.js","assets/Modal2.js","assets/Button.js","assets/ButtonBase.js","assets/IconButton.js","assets/Error.js","assets/SelectedCard.js","assets/string.helper.js","assets/regex.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/useHttpService.js","assets/Box.js"])),We=a.exports.lazy(()=>_(()=>import("./DeclaracionRenta.js"),["assets/DeclaracionRenta.js","assets/Clear.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index3.css","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/TextInput.js","assets/TextField.js","assets/FormHelperText.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/GlobalStyles.js","assets/facturaDashboard.js","assets/useAsyncRetry.js","assets/useHttpService.js","assets/string.helper.js","assets/regex.js","assets/ChipState.js","assets/Error.js","assets/Chip.js","assets/ButtonBase.js","assets/date.helper.js","assets/index13.js","assets/InputAdornment.js","assets/IconButton.js","assets/Divider.js"])),qe=a.exports.lazy(()=>_(()=>import("./DeclaracionMunicipal.js"),["assets/DeclaracionMunicipal.js","assets/Clear.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index3.css","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/TextInput.js","assets/TextField.js","assets/FormHelperText.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/GlobalStyles.js","assets/facturaDashboard.js","assets/useAsyncRetry.js","assets/useHttpService.js","assets/string.helper.js","assets/regex.js","assets/ChipState.js","assets/Error.js","assets/Chip.js","assets/ButtonBase.js","assets/date.helper.js","assets/index13.js","assets/InputAdornment.js","assets/IconButton.js","assets/Divider.js"])),Ge=()=>{var r;const t=a.exports.useContext(Z),{loading:o,value:e,editing:s}=t,{setEditing:d,defaultValues:u,retry:x}=t,{authState:l}=a.exports.useContext(Se),{tipo:g}=l,i=Me(),c=Re(i.breakpoints.down("md"));return F(Ee,{children:[n(Ve,{message:"Datos del Negocio"}),o&&n(Q,{}),!o&&e&&(e==null?void 0:e.status)!==201&&n(ke,{text:(r=e.error)==null?void 0:r.message}),!o&&(e==null?void 0:e.status)===201&&!s&&F(De,{columns:c?1:2,spacing:1,sx:{width:"100%",margin:0,padding:0},children:[n(S,{children:n(He,k({},e.data))}),n(S,{children:n($e,{})}),g==="Super"&&n(S,{children:n(Ue,{})}),n(S,{children:n(We,{})}),n(S,{children:n(qe,{})})]}),!o&&e&&e.status===201&&e.data&&n(a.exports.Suspense,{fallback:n("div",{}),children:n(je,{})}),s&&!o&&e&&e.status===201&&e.data&&u&&n(a.exports.Suspense,{fallback:n(Q,{}),children:n(Ie,{negocio:u,setEditing:d,retry:x})})]})},Qe=()=>n(Be,{children:n(Ge,{})});var lt=Object.freeze(Object.defineProperty({__proto__:null,default:Qe},Symbol.toStringTag,{value:"Module"}));export{Z as N,lt as i};
