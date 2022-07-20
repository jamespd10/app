var nt=Object.defineProperty;var I=Object.getOwnPropertySymbols;var it=Object.prototype.hasOwnProperty,at=Object.prototype.propertyIsEnumerable;var j=(e,o,t)=>o in e?nt(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,U=(e,o)=>{for(var t in o||(o={}))it.call(o,t)&&j(e,t,o[t]);if(I)for(var t of I(o))at.call(o,t)&&j(e,t,o[t]);return e};import{g as ct,h as lt,s as pt,r as n,u as ut,l as mt,_,n as dt,y as ft,a as s,j as T,o as gt,a3 as W,aq as ht,af as O,a4 as L,ar as w,b as h,A as xt,q as yt,a2 as _t,F as bt}from"./index.js";import{L as q}from"./Loader.js";import{H as Ct}from"./HeaderTitle.js";import"./BootstrapTooltip.js";import{N as Nt}from"./NotFoundResults.js";import"./SpeedDial.module.js";import"./Modal.js";import"./SelectedCard.js";import{N as Mt}from"./index27.js";import{B as M}from"./Box.js";import"./Grid.js";import"./Typography.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./Divider.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./useIsFocusVisible.js";import"./isHostComponent.js";import"./Grow.js";import"./useControlled.js";import"./useId.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./DialogTitle.js";import"./dialogTitleClasses.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Fade.js";import"./Modal2.js";import"./Paper.js";import"./IconButton.js";import"./ButtonBase.js";import"./Warning.js";import"./Error.js";import"./CheckCircle.js";import"./DialogContent.js";import"./DialogActions.js";import"./LoadingButton.js";import"./Button.js";import"./useModal.js";import"./string.helper.js";import"./regex.js";import"./useFirstFetch.js";import"./useAsyncRetry.js";import"./useHttpService.js";import"./useFetcherEarly.js";function St(e){return ct("MuiMasonry",e)}lt("MuiMasonry",["root"]);const Rt=["children","className","component","columns","spacing","defaultColumns","defaultHeight","defaultSpacing"],y=e=>Number(e.replace("px","")),Et=e=>{const{classes:o}=e;return dt({root:["root"]},St,o)},vt=({ownerState:e,theme:o})=>{let t={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"space-between",boxSizing:"border-box","& > *":{boxSizing:"border-box"}};const c={};if(e.isSSR){const a={},i=Number(o.spacing(e.defaultSpacing).replace("px",""));for(let r=1;r<=e.defaultColumns;r+=1)a[`&:nth-of-type(${e.defaultColumns}n+${r%e.defaultColumns})`]={order:r};return c.height=e.defaultHeight,c.margin=-(i/2),c["& > *"]=_({},t["& > *"],a,{margin:i/2,width:`calc(${(100/e.defaultColumns).toFixed(2)}% - ${i}px)`}),_({},t,c)}const p=W({values:e.spacing,breakpoints:o.breakpoints.values}),u=ht(o);t=O(t,L({theme:o},p,a=>{const i=Number(a),r=Number(w(u,i).replace("px",""));return _({margin:-(r/2),"& > *":{margin:r/2}},e.maxColumnHeight&&{height:Math.ceil(e.maxColumnHeight+r)})}));const l=W({values:e.columns,breakpoints:o.breakpoints.values});return t=O(t,L({theme:o},l,a=>{const i=Number(a),r=`${(100/i).toFixed(2)}%`,C=typeof p!="object"?w(u,Number(p)):"0px";return{"& > *":{width:`calc(${r} - ${C})`}}})),typeof p=="object"&&(t=O(t,L({theme:o},p,(a,i)=>{if(i){const r=Number(a),C=Object.keys(l).pop(),m=w(u,r),R=typeof l=="object"?l[i]||l[C]:l;return{"& > *":{width:`calc(${`${(100/R).toFixed(2)}%`} - ${m})`}}}return null}))),t},Vt=pt("div",{name:"MuiMasonry",slot:"Root",overridesResolver:(e,o)=>[o.root]})(vt),kt=n.exports.forwardRef(function(o,t){const c=ut({props:o,name:"MuiMasonry"}),{children:p,className:u,component:S="div",columns:l=4,spacing:b=1,defaultColumns:a,defaultHeight:i,defaultSpacing:r}=c,C=mt(c,Rt),m=n.exports.useRef(),[R,P]=n.exports.useState(),z=!R&&i&&a!==void 0&&r!==void 0,[G,Q]=n.exports.useState(z?a-1:0),A=_({},c,{spacing:b,columns:l,maxColumnHeight:R,defaultColumns:a,defaultHeight:i,defaultSpacing:r,isSSR:z}),J=Et(A),K=d=>{if(!m.current||!d||d.length===0)return;const g=m.current,B=m.current.firstChild,F=g.clientWidth,D=B.clientWidth;if(F===0||D===0)return;const H=window.getComputedStyle(B),et=y(H.marginLeft),ot=y(H.marginRight),k=Math.round(F/(D+et+ot)),E=new Array(k).fill(0);let N=!1;if(g.childNodes.forEach(f=>{if(f.nodeType!==Node.ELEMENT_NODE||f.dataset.class==="line-break"||N)return;const v=window.getComputedStyle(f),st=y(v.marginTop),rt=y(v.marginBottom),$=y(v.height)?Math.ceil(y(v.height))+st+rt:0;if($===0){N=!0;return}for(let x=0;x<f.childNodes.length;x+=1){const V=f.childNodes[x];if(V.tagName==="IMG"&&V.clientHeight===0){N=!0;break}}if(!N){const x=E.indexOf(Math.min(...E));E[x]+=$;const V=x+1;f.style.order=V}}),!N){P(Math.max(...E));const f=k>0?k-1:0;Q(f)}},X=n.exports.useRef(typeof ResizeObserver=="undefined"?void 0:new ResizeObserver(K));n.exports.useEffect(()=>{const d=X.current;if(d!==void 0)return m.current&&m.current.childNodes.forEach(g=>{d.observe(g)}),()=>d?d.disconnect():{}},[l,b,p]);const Y=ft(t,m),Z={flexBasis:"100%",width:0,margin:0,padding:0},tt=new Array(G).fill("").map((d,g)=>s("span",{"data-class":"line-break",style:_({},Z,{order:g+1})},g));return T(Vt,_({as:S,className:gt(J.root,u),ref:Y,ownerState:A},C,{children:[p,tt]}))});var Ot=kt;const Lt=n.exports.lazy(()=>h(()=>import("./NegocioView.js"),["assets/NegocioView.js","assets/NegocioView.css","assets/index.js","assets/index15.css","assets/ListItem.js","assets/List.js","assets/useControlled.js","assets/isHostComponent.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/useIsFocusVisible.js","assets/ListItemText.js","assets/listItemTextClasses.js","assets/Typography.js","assets/string.helper.js","assets/regex.js","assets/ChipState.js","assets/CheckCircle.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useId.js","assets/Error.js","assets/Chip.js","assets/CircularProgress.js","assets/Stack.js","assets/Divider.js","assets/Paper.js"])),wt=n.exports.lazy(()=>h(()=>import("./NegocioDashboard.js"),["assets/NegocioDashboard.js","assets/NegocioDashboard.css","assets/PersonAddDisabled.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index15.css","assets/createSvgIcon.js","assets/useId.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/InsertDriveFile.js","assets/AssignmentTurnedIn.js","assets/CardHome.js","assets/SelectedCard.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/Card.js","assets/Paper.js","assets/CardContent.js","assets/Stack.js","assets/Typography.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/useHttpService.js"])),Tt=n.exports.lazy(()=>h(()=>import("./NegocioAcciones.js"),["assets/NegocioAcciones.js","assets/index.js","assets/index15.css","assets/InsertDriveFile.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useId.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/Check.js","assets/AssignmentTurnedIn.js","assets/index27.js","assets/useModal.js","assets/string.helper.js","assets/regex.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/useHttpService.js","assets/useFetcherEarly.js","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/StyledSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/ButtonBase.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/isHostComponent.js","assets/Grow.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Backdrop.js","assets/Fade.js","assets/Stack.js"])),Pt=n.exports.lazy(()=>h(()=>import("./index10.js").then(function(e){return e.i}),["assets/index10.js","assets/index14.css","assets/index.js","assets/index15.css","assets/yup.module.js","assets/HeaderTitle.js","assets/Typography.js","assets/Divider.js","assets/StepperForm.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/useControlled.js","assets/useId.js","assets/Grid.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/SelectedCard.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/DialogTitle.js","assets/dialogTitleClasses.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Fade.js","assets/Modal2.js","assets/Paper.js","assets/IconButton.js","assets/Warning.js","assets/Error.js","assets/CheckCircle.js","assets/DialogContent.js","assets/DialogActions.js","assets/LoadingButton.js","assets/Button.js","assets/CircularProgress.js","assets/Box.js","assets/useStepper.js","assets/useFetch.js","assets/useHttpService.js","assets/useModal.js","assets/Add.js","assets/AutocompleteServer.js","assets/TextInput.js","assets/TextField.js","assets/useFormControl.js","assets/formControlState.js","assets/react-is.production.min.js","assets/List.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/Autocomplete.js","assets/Close.js","assets/Chip.js","assets/CheckBoxOutlineBlank.js","assets/ListItem.js","assets/Checkbox.js","assets/SwitchBase.js","assets/DecimalInput.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/PhoneInput.js","assets/DateInput.js","assets/DatePicker.js","assets/MobileDatePicker.js","assets/MonthPicker.js","assets/PureDateInput.js","assets/CalendarPicker.js","assets/InputAdornment.js","assets/index11.js","assets/PatronalInput.js","assets/CustomSipe.js","assets/Loader.js","assets/Stack.js","assets/DireccionProvider.js","assets/array.js","assets/upperFirst.js","assets/BackgroundLoader.js","assets/NegociosProvider.js","assets/useFetchPagination.js","assets/useAsyncRetry.js","assets/useList.js","assets/usePrevious.js","assets/object.helper.js","assets/useFetcherEarly.js","assets/Card.js"])),zt=n.exports.lazy(()=>h(()=>import("./ClienteSeleccionado.js"),["assets/ClienteSeleccionado.js","assets/index.js","assets/index15.css","assets/index27.js","assets/useModal.js","assets/string.helper.js","assets/regex.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/useHttpService.js","assets/useFetcherEarly.js","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/Paper.js","assets/Divider.js"])),At=n.exports.lazy(()=>h(()=>import("./DeclaracionRenta.js"),["assets/DeclaracionRenta.js","assets/Clear.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index15.css","assets/createSvgIcon.js","assets/useId.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/TextInput.js","assets/TextField.js","assets/useFormControl.js","assets/formControlState.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/Fade.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/facturaDashboard.js","assets/useAsyncRetry.js","assets/useHttpService.js","assets/string.helper.js","assets/regex.js","assets/ChipState.js","assets/CheckCircle.js","assets/Error.js","assets/Chip.js","assets/ButtonBase.js","assets/date.helper.js","assets/InputAdornment.js","assets/IconButton.js","assets/Divider.js"])),Bt=n.exports.lazy(()=>h(()=>import("./DeclaracionMunicipal.js"),["assets/DeclaracionMunicipal.js","assets/Clear.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index15.css","assets/createSvgIcon.js","assets/useId.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/TextInput.js","assets/TextField.js","assets/useFormControl.js","assets/formControlState.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/Fade.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/facturaDashboard.js","assets/useAsyncRetry.js","assets/useHttpService.js","assets/string.helper.js","assets/regex.js","assets/ChipState.js","assets/CheckCircle.js","assets/Error.js","assets/Chip.js","assets/ButtonBase.js","assets/date.helper.js","assets/InputAdornment.js","assets/IconButton.js","assets/Divider.js"])),Pe=()=>{var r;const e=n.exports.useContext(Mt),{loading:o,value:t,editing:c}=e,{setEditing:p,defaultValues:u,retry:S}=e,{authState:l}=n.exports.useContext(xt),{tipo:b}=l,a=yt(),i=_t(a.breakpoints.down("md"));return T(bt,{children:[s(Ct,{message:"Datos del Negocio"}),o&&s(q,{}),!o&&t&&(t==null?void 0:t.status)!==201&&s(Nt,{text:(r=t.error)==null?void 0:r.message}),!o&&(t==null?void 0:t.status)===201&&!c&&T(Ot,{columns:i?1:2,spacing:1,sx:{width:"100%",margin:0,padding:0},children:[s(M,{children:s(Lt,U({},t.data))}),s(M,{children:s(wt,{})}),b==="Super"&&s(M,{children:s(zt,{})}),s(M,{children:s(At,{})}),s(M,{children:s(Bt,{})})]}),!o&&t&&t.status===201&&t.data&&s(n.exports.Suspense,{fallback:s("div",{}),children:s(Tt,{})}),c&&!o&&t&&t.status===201&&t.data&&u&&s(n.exports.Suspense,{fallback:s(q,{}),children:s(Pt,{negocio:u,setEditing:p,retry:S})})]})};export{Pe as default};
