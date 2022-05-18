var ce=Object.defineProperty,de=Object.defineProperties;var le=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;var K=(t,s,e)=>s in t?ce(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,z=(t,s)=>{for(var e in s||(s={}))ue.call(s,e)&&K(t,e,s[e]);if(G)for(var e of G(s))pe.call(s,e)&&K(t,e,s[e]);return t},B=(t,s)=>de(t,le(s));import{h as me,k as ge,l as fe,r as n,u as he,c as xe,_ as M,n as _e,K as ye,a,j as H,e as be,a5 as Q,a8 as ve,a9 as D,a6 as I,aa as A,ac as Se,q as b,A as Ce,U as Ne,F as Me}from"./index.js";import{L as J}from"./Loader.js";import{H as Re}from"./HeaderTitle.js";import"./BootstrapTooltip.js";import"./jwt-decode.esm.js";import{N as Ee}from"./NotFoundResults.js";import"./ContentProvider.js";import"./Modal2.js";import"./platform.js";import{u as X}from"./useModal.js";import{c as ke}from"./string.helper.js";import{u as Ve}from"./useFirstFetch.js";import{u as Oe}from"./useMediaQuery.js";import{B as C}from"./Box.js";function Pe(t){return me("MuiMasonry",t)}ge("MuiMasonry",["root"]);const Te=["children","className","component","columns","spacing","defaultColumns","defaultHeight","defaultSpacing"],N=t=>Number(t.replace("px","")),we=t=>{const{classes:s}=t;return _e({root:["root"]},Pe,s)},Le=({ownerState:t,theme:s})=>{let e={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"space-between",boxSizing:"border-box","& > *":{boxSizing:"border-box"}};const o={};if(t.isSSR){const c={},i=Number(s.spacing(t.defaultSpacing).replace("px",""));for(let r=1;r<=t.defaultColumns;r+=1)c[`&:nth-of-type(${t.defaultColumns}n+${r%t.defaultColumns})`]={order:r};return o.height=t.defaultHeight,o.margin=-(i/2),o["& > *"]=M({},e["& > *"],c,{margin:i/2,width:`calc(${(100/t.defaultColumns).toFixed(2)}% - ${i}px)`}),M({},e,o)}const l=Q({values:t.spacing,breakpoints:s.breakpoints.values}),p=ve(s);e=D(e,I({theme:s},l,c=>{const i=Number(c),r=Number(A(p,i).replace("px",""));return M({margin:-(r/2),"& > *":{margin:r/2}},t.maxColumnHeight&&{height:Math.ceil(t.maxColumnHeight+r)})}));const d=Q({values:t.columns,breakpoints:s.breakpoints.values});return e=D(e,I({theme:s},d,c=>{const i=Number(c),r=`${(100/i).toFixed(2)}%`,m=typeof l!="object"?A(p,Number(l)):"0px";return{"& > *":{width:`calc(${r} - ${m})`}}})),typeof l=="object"&&(e=D(e,I({theme:s},l,(c,i)=>{if(i){const r=Number(c),m=Object.keys(d).pop(),u=A(p,r),_=typeof d=="object"?d[i]||d[m]:d;return{"& > *":{width:`calc(${`${(100/_).toFixed(2)}%`} - ${u})`}}}return null}))),e},ze=fe("div",{name:"MuiMasonry",slot:"Root",overridesResolver:(t,s)=>[s.root]})(Le),Fe=n.exports.forwardRef(function(s,e){const o=he({props:s,name:"MuiMasonry"}),{children:l,className:p,component:v="div",columns:d=4,spacing:x=1,defaultColumns:c,defaultHeight:i,defaultSpacing:r}=o,m=xe(o,Te),u=n.exports.useRef(),[_,R]=n.exports.useState(),E=!_&&i&&c!==void 0&&r!==void 0,[O,k]=n.exports.useState(E?c-1:0),P=M({},o,{spacing:x,columns:d,maxColumnHeight:_,defaultColumns:c,defaultHeight:i,defaultSpacing:r,isSSR:E}),g=we(P),Z=f=>{if(!u.current||!f||f.length===0)return;const y=u.current,$=u.current.firstChild,j=y.clientWidth,U=$.clientWidth;if(j===0||U===0)return;const W=window.getComputedStyle($),ae=N(W.marginLeft),ne=N(W.marginRight),F=Math.round(j/(U+ae+ne)),T=new Array(F).fill(0);let V=!1;if(y.childNodes.forEach(h=>{if(h.nodeType!==Node.ELEMENT_NODE||h.dataset.class==="line-break"||V)return;const w=window.getComputedStyle(h),ie=N(w.marginTop),re=N(w.marginBottom),q=N(w.height)?Math.ceil(N(w.height))+ie+re:0;if(q===0){V=!0;return}for(let S=0;S<h.childNodes.length;S+=1){const L=h.childNodes[S];if(L.tagName==="IMG"&&L.clientHeight===0){V=!0;break}}if(!V){const S=T.indexOf(Math.min(...T));T[S]+=q;const L=S+1;h.style.order=L}}),!V){R(Math.max(...T));const h=F>0?F-1:0;k(h)}},ee=n.exports.useRef(typeof ResizeObserver=="undefined"?void 0:new ResizeObserver(Z));n.exports.useEffect(()=>{const f=ee.current;if(f!==void 0)return u.current&&u.current.childNodes.forEach(y=>{f.observe(y)}),()=>f?f.disconnect():{}},[d,x,l]);const te=ye(e,u),oe={flexBasis:"100%",width:0,margin:0,padding:0},se=new Array(O).fill("").map((f,y)=>a("span",{"data-class":"line-break",style:M({},oe,{order:y+1})},y));return H(ze,M({as:v,className:be(g.root,p),ref:te,ownerState:P},m,{children:[l,se]}))});var Be=Fe;const De=()=>{const{id:t,cliente:s}=Se(),{loading:e,value:o,retry:l}=Ve({url:`/admin/negocios/${t}/${s}`}),[p,v]=n.exports.useState(!1),[d,x]=n.exports.useState();return n.exports.useEffect(()=>{(()=>{var i,r,m,u,_,R,E,O;if(!e&&o&&o.status===201&&o.data){const k=o.data.asignaciones.findIndex(g=>g.asignacion==="ITBMS"),P=o.data.asignaciones.findIndex(g=>g.asignacion==="Seguro Social");x(B(z({},o.data),{telefono:o.data.telefono,provincia:(i=o.data.direccion)==null?void 0:i.split(",")[0],distrito:(m=(r=o.data.direccion)==null?void 0:r.split(",")[1])==null?void 0:m.trim(),corregimiento:ke((_=(u=o.data.direccion)==null?void 0:u.split(",")[2])==null?void 0:_.trim()),direccion:(O=(E=(R=o.data.direccion)==null?void 0:R.split(","))==null?void 0:E.slice(3))==null?void 0:O.join(),fecha_a_operacion:o.data.fecha_aviso_op?new Date(o.data.fecha_aviso_op):void 0,ruta:o.data.id_ruta,itbms_asignado_a:k>=0?o.data.asignaciones[k].id_usuario:void 0,ss_asignado_a:k>=0?o.data.asignaciones[P].id_usuario:void 0,actividades:o.data.actividades.length>0?o.data.actividades.map(g=>({id:g.id_actividad,actividad:g.actividad})):void 0,tipos:o.data.tipo?[{tipo:o.data.tipo,id:o.data.id_tipo}]:void 0}))}})()},[o,e]),{editing:p,setEditing:v,id:t,loading:e,value:o,defaultValues:d,retry:l}},Y=n.exports.createContext({}),Ie=({children:t})=>{const s=De(),e=X(),o=X();return a(Y.Provider,{value:B(z({},s),{modalMark:e,modalEditPatronal:o}),children:t})},Ae=n.exports.lazy(()=>b(()=>import("./NegocioView.js"),["assets/NegocioView.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index.css","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/ListItem.js","assets/List.js","assets/listItemButtonClasses.js","assets/isHostComponent.js","assets/ButtonBase.js","assets/ListItemText.js","assets/listItemTextClasses.js","assets/Typography.js","assets/extendSxProp.js","assets/Card.js","assets/Paper.js","assets/Divider.js","assets/string.helper.js","assets/regex.js","assets/ChipState.js","assets/Error.js","assets/Chip.js","assets/Stack.js"])),He=n.exports.lazy(()=>b(()=>import("./NegocioDashboard.js"),["assets/NegocioDashboard.js","assets/PersonAddDisabled.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index.css","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/InsertDriveFile.js","assets/AssignmentTurnedIn.js","assets/CardHome.js","assets/platform.js","assets/ButtonBase.js","assets/jwt-decode.esm.js","assets/Card.js","assets/Paper.js","assets/CardContent.js","assets/Stack.js","assets/extendSxProp.js","assets/Typography.js","assets/random.helper.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/tslib.js","assets/useHttpService.js","assets/constants.js"])),$e=n.exports.lazy(()=>b(()=>import("./NegocioAcciones.js"),["assets/NegocioAcciones.js","assets/index.js","assets/index.css","assets/InsertDriveFile.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/Check.js","assets/AssignmentTurnedIn.js","assets/CustomSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/ButtonBase.js","assets/Tooltip.js","assets/Portal.js","assets/isHostComponent.js","assets/Grow.js","assets/ContentProvider.js","assets/useModal.js","assets/jwt-decode.esm.js","assets/Backdrop.js","assets/Stack.js","assets/extendSxProp.js","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/HeaderTitle.js","assets/Divider.js","assets/BootstrapTooltip.js","assets/NotFoundResults.js","assets/Modal2.js","assets/Close2.js","assets/IconButton.js","assets/Error.js","assets/Modal.js","assets/Paper.js","assets/Button.js","assets/platform.js","assets/string.helper.js","assets/regex.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/tslib.js","assets/useHttpService.js","assets/constants.js","assets/useMediaQuery.js","assets/Box.js"])),je=n.exports.lazy(()=>b(()=>import("./index6.js").then(function(t){return t.i}),["assets/index6.js","assets/index.js","assets/index.css","assets/array.js","assets/upperFirst.js","assets/HeaderTitle.js","assets/Typography.js","assets/extendSxProp.js","assets/Divider.js","assets/StepperForm.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/jwt-decode.esm.js","assets/Grid.js","assets/ContentProvider.js","assets/useModal.js","assets/platform.js","assets/ButtonBase.js","assets/Modal2.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/IconButton.js","assets/Error.js","assets/Backdrop.js","assets/Modal.js","assets/Paper.js","assets/Button.js","assets/useMediaQuery.js","assets/Box.js","assets/useStepper.js","assets/useFetch.js","assets/useHttpService.js","assets/constants.js","assets/useSelectProvincias.js","assets/TextField.js","assets/react-is.production.min.js","assets/Menu.js","assets/List.js","assets/GlobalStyles.js","assets/MenuItem.js","assets/listItemIconClasses.js","assets/listItemTextClasses.js","assets/string.helper.js","assets/regex.js","assets/nacionalidades.js","assets/Add.js","assets/AutocompleteServer.js","assets/TextInput.js","assets/Autocomplete.js","assets/Close.js","assets/Chip.js","assets/CheckBoxOutlineBlank.js","assets/ListItem.js","assets/listItemButtonClasses.js","assets/Checkbox.js","assets/DecimalInput.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/PhoneInput.js","assets/DateInput.js","assets/MobileDatePicker.js","assets/MonthPicker.js","assets/usePickerState.js","assets/InputAdornment.js","assets/index7.js","assets/PatronalInput.js","assets/CustomSipe.js","assets/Loader.js","assets/Stack.js","assets/BackgroundLoader.js","assets/NegociosProvider.js","assets/useFetchPagination.js","assets/useAsyncRetry.js","assets/tslib.js","assets/useList.js","assets/usePrevious.js","assets/object.helper.js","assets/Card.js"])),Ue=n.exports.lazy(()=>b(()=>import("./ClienteSeleccionado.js"),["assets/ClienteSeleccionado.js","assets/index.js","assets/index.css","assets/Paper.js","assets/Typography.js","assets/extendSxProp.js","assets/Divider.js","assets/Loader.js","assets/Grid.js","assets/HeaderTitle.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/jwt-decode.esm.js","assets/NotFoundResults.js","assets/ContentProvider.js","assets/useModal.js","assets/Modal2.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/IconButton.js","assets/ButtonBase.js","assets/Error.js","assets/Backdrop.js","assets/Modal.js","assets/Button.js","assets/platform.js","assets/string.helper.js","assets/regex.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/tslib.js","assets/useHttpService.js","assets/constants.js","assets/useMediaQuery.js","assets/Box.js"])),We=n.exports.lazy(()=>b(()=>import("./DeclaracionRenta.js"),["assets/DeclaracionRenta.js","assets/Clear.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index.css","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/Loader.js","assets/Grid.js","assets/extendSxProp.js","assets/Typography.js","assets/TextInput.js","assets/TextField.js","assets/react-is.production.min.js","assets/Menu.js","assets/Modal.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/GlobalStyles.js","assets/facturaDashboard.js","assets/useAsyncRetry.js","assets/tslib.js","assets/jwt-decode.esm.js","assets/useHttpService.js","assets/constants.js","assets/string.helper.js","assets/regex.js","assets/ChipState.js","assets/Error.js","assets/Chip.js","assets/ButtonBase.js","assets/date.helper.js","assets/index13.js","assets/index14.js","assets/InputAdornment.js","assets/IconButton.js","assets/Divider.js"])),qe=n.exports.lazy(()=>b(()=>import("./DeclaracionMunicipal.js"),["assets/DeclaracionMunicipal.js","assets/Clear.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index.css","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/Loader.js","assets/Grid.js","assets/extendSxProp.js","assets/Typography.js","assets/TextInput.js","assets/TextField.js","assets/react-is.production.min.js","assets/Menu.js","assets/Modal.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/GlobalStyles.js","assets/facturaDashboard.js","assets/useAsyncRetry.js","assets/tslib.js","assets/jwt-decode.esm.js","assets/useHttpService.js","assets/constants.js","assets/string.helper.js","assets/regex.js","assets/ChipState.js","assets/Error.js","assets/Chip.js","assets/ButtonBase.js","assets/date.helper.js","assets/index13.js","assets/index14.js","assets/InputAdornment.js","assets/IconButton.js","assets/Divider.js"])),Ge=()=>{const t=n.exports.useContext(Y),{loading:s,value:e,editing:o}=t,{setEditing:l,defaultValues:p,retry:v}=t,{authState:d}=n.exports.useContext(Ce),{tipo:x}=d,c=Ne(),i=Oe(c.breakpoints.down("md"));return H(Me,{children:[a(Re,{message:"Datos del Negocio"}),s&&a(J,{}),!s&&e&&(e==null?void 0:e.status)!==201&&a(Ee,{}),!s&&(e==null?void 0:e.status)===201&&!o&&a(C,{sx:{width:"100%",height:"100%",marginTop:1},children:H(Be,{columns:i?1:2,spacing:1,sx:{width:"100%",margin:0,padding:0},children:[a(C,{children:a(Ae,z({},e.data))}),a(C,{children:a(He,{})}),x==="Super"&&a(C,{children:a(Ue,{})}),a(C,{children:a(We,{})}),a(C,{children:a(qe,{})})]})}),!s&&e&&e.status===201&&e.data&&a(n.exports.Suspense,{fallback:a("div",{}),children:a($e,{})}),o&&!s&&e&&e.status===201&&e.data&&p&&a(n.exports.Suspense,{fallback:a(J,{}),children:a(je,{negocio:p,setEditing:l,retry:v})})]})},Ke=()=>a(Ie,{children:a(Ge,{})});var lt=Object.freeze(Object.defineProperty({__proto__:null,default:Ke},Symbol.toStringTag,{value:"Module"}));export{Y as N,lt as i};