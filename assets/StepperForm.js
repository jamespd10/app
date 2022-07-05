var te=Object.defineProperty,oe=Object.defineProperties;var ne=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var H=(e,t,n)=>t in e?te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,G=(e,t)=>{for(var n in t||(t={}))V.call(t,n)&&H(e,n,t[n]);if(U)for(var n of U(t))O.call(t,n)&&H(e,n,t[n]);return e},q=(e,t)=>oe(e,ne(t));var Q=(e,t)=>{var n={};for(var o in e)V.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&U)for(var o of U(e))t.indexOf(o)<0&&O.call(e,o)&&(n[o]=e[o]);return n};import{r as v,g as w,h as z,s as x,_ as p,u as P,l as A,n as k,j as b,o as T,a as r,I as re,p as K,q as ae,a2 as ie,F as le}from"./index.js";import"./BootstrapTooltip.js";import{G as Z}from"./Grid.js";import{T as se}from"./Typography.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import"./SelectedCard.js";import ce from"./Modal.js";import{B as _}from"./Box.js";import{c as X}from"./createSvgIcon.js";import{B as F}from"./Button.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./appendOwnerState.js";import"./isHostComponent.js";import"./Grow.js";import"./useModal.js";import"./ButtonBase.js";import"./emotion-react.browser.esm.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Modal2.js";import"./Paper.js";import"./IconButton.js";import"./CheckCircle.js";import"./DialogContent.js";import"./LoadingButton.js";import"./CircularProgress.js";const pe=v.exports.createContext({});var W=pe;const de=v.exports.createContext({});var D=de;function me(e){return w("MuiStep",e)}z("MuiStep",["root","horizontal","vertical","alternativeLabel","completed"]);const ve=["active","children","className","completed","disabled","expanded","index","last"],ue=e=>{const{classes:t,orientation:n,alternativeLabel:o,completed:a}=e;return k({root:["root",n,o&&"alternativeLabel",a&&"completed"]},me,t)},Se=x("div",{name:"MuiStep",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.orientation],n.alternativeLabel&&t.alternativeLabel,n.completed&&t.completed]}})(({ownerState:e})=>p({},e.orientation==="horizontal"&&{paddingLeft:8,paddingRight:8},e.alternativeLabel&&{flex:1,position:"relative"})),be=v.exports.forwardRef(function(t,n){const o=P({props:t,name:"MuiStep"}),{active:a,children:l,className:m,completed:s,disabled:c,expanded:d=!1,index:i,last:u}=o,S=A(o,ve),{activeStep:R,connector:f,alternativeLabel:L,orientation:N,nonLinear:g}=v.exports.useContext(W);let[h=!1,y=!1,C=!1]=[a,s,c];R===i?h=a!==void 0?a:!0:!g&&R>i?y=s!==void 0?s:!0:!g&&R<i&&(C=c!==void 0?c:!0);const I=v.exports.useMemo(()=>({index:i,last:u,expanded:d,icon:i+1,active:h,completed:y,disabled:C}),[i,u,d,h,y,C]),M=p({},o,{active:h,orientation:N,alternativeLabel:L,completed:y,disabled:C,expanded:d}),ee=ue(M),E=b(Se,p({className:T(ee.root,m),ref:n,ownerState:M},S,{children:[f&&L&&i!==0?f:null,l]}));return r(D.Provider,{value:I,children:f&&!L&&i!==0?b(v.exports.Fragment,{children:[f,E]}):E})});var xe=be,fe=X(r("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),he=X(r("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");function Ce(e){return w("MuiStepIcon",e)}const Le=z("MuiStepIcon",["root","active","completed","error","text"]);var B=Le,J;const ge=["active","className","completed","error","icon"],ye=e=>{const{classes:t,active:n,completed:o,error:a}=e;return k({root:["root",n&&"active",o&&"completed",a&&"error"],text:["text"]},Ce,t)},j=x(re,{name:"MuiStepIcon",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({display:"block",transition:e.transitions.create("color",{duration:e.transitions.duration.shortest}),color:e.palette.text.disabled,[`&.${B.completed}`]:{color:e.palette.primary.main},[`&.${B.active}`]:{color:e.palette.primary.main},[`&.${B.error}`]:{color:e.palette.error.main}})),Re=x("text",{name:"MuiStepIcon",slot:"Text",overridesResolver:(e,t)=>t.text})(({theme:e})=>({fill:e.palette.primary.contrastText,fontSize:e.typography.caption.fontSize,fontFamily:e.typography.fontFamily})),Ie=v.exports.forwardRef(function(t,n){const o=P({props:t,name:"MuiStepIcon"}),{active:a=!1,className:l,completed:m=!1,error:s=!1,icon:c}=o,d=A(o,ge),i=p({},o,{active:a,completed:m,error:s}),u=ye(i);if(typeof c=="number"||typeof c=="string"){const S=T(l,u.root);return s?r(j,p({as:he,className:S,ref:n,ownerState:i},d)):m?r(j,p({as:fe,className:S,ref:n,ownerState:i},d)):b(j,p({className:S,ref:n,ownerState:i},d,{children:[J||(J=r("circle",{cx:"12",cy:"12",r:"12"})),r(Re,{className:u.text,x:"12",y:"16",textAnchor:"middle",ownerState:i,children:c})]}))}return c});var Me=Ie;function $e(e){return w("MuiStepLabel",e)}const Ne=z("MuiStepLabel",["root","horizontal","vertical","label","active","completed","error","disabled","iconContainer","alternativeLabel","labelContainer"]);var $=Ne;const we=["children","className","componentsProps","error","icon","optional","StepIconComponent","StepIconProps"],ze=e=>{const{classes:t,orientation:n,active:o,completed:a,error:l,disabled:m,alternativeLabel:s}=e;return k({root:["root",n,l&&"error",m&&"disabled",s&&"alternativeLabel"],label:["label",o&&"active",a&&"completed",l&&"error",m&&"disabled",s&&"alternativeLabel"],iconContainer:["iconContainer",s&&"alternativeLabel"],labelContainer:["labelContainer"]},$e,t)},Pe=x("span",{name:"MuiStepLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.orientation]]}})(({ownerState:e})=>p({display:"flex",alignItems:"center",[`&.${$.alternativeLabel}`]:{flexDirection:"column"},[`&.${$.disabled}`]:{cursor:"default"}},e.orientation==="vertical"&&{textAlign:"left",padding:"8px 0"})),Ae=x("span",{name:"MuiStepLabel",slot:"Label",overridesResolver:(e,t)=>t.label})(({theme:e})=>p({},e.typography.body2,{display:"block",transition:e.transitions.create("color",{duration:e.transitions.duration.shortest}),[`&.${$.active}`]:{color:e.palette.text.primary,fontWeight:500},[`&.${$.completed}`]:{color:e.palette.text.primary,fontWeight:500},[`&.${$.alternativeLabel}`]:{textAlign:"center",marginTop:16},[`&.${$.error}`]:{color:e.palette.error.main}})),ke=x("span",{name:"MuiStepLabel",slot:"IconContainer",overridesResolver:(e,t)=>t.iconContainer})(()=>({flexShrink:0,display:"flex",paddingRight:8,[`&.${$.alternativeLabel}`]:{paddingRight:0}})),Te=x("span",{name:"MuiStepLabel",slot:"LabelContainer",overridesResolver:(e,t)=>t.labelContainer})(({theme:e})=>({width:"100%",color:e.palette.text.secondary})),Y=v.exports.forwardRef(function(t,n){const o=P({props:t,name:"MuiStepLabel"}),{children:a,className:l,componentsProps:m={},error:s=!1,icon:c,optional:d,StepIconComponent:i,StepIconProps:u}=o,S=A(o,we),{alternativeLabel:R,orientation:f}=v.exports.useContext(W),{active:L,disabled:N,completed:g,icon:h}=v.exports.useContext(D),y=c||h;let C=i;y&&!C&&(C=Me);const I=p({},o,{active:L,alternativeLabel:R,completed:g,disabled:N,error:s,orientation:f}),M=ze(I);return b(Pe,p({className:T(M.root,l),ref:n,ownerState:I},S,{children:[y||C?r(ke,{className:M.iconContainer,ownerState:I,children:r(C,p({completed:g,active:L,error:s,icon:y},u))}):null,b(Te,{className:M.labelContainer,ownerState:I,children:[a?r(Ae,p({className:M.label,ownerState:I},m.label,{children:a})):null,d]})]}))});Y.muiName="StepLabel";var Ue=Y;function _e(e){return w("MuiStepConnector",e)}z("MuiStepConnector",["root","horizontal","vertical","alternativeLabel","active","completed","disabled","line","lineHorizontal","lineVertical"]);const Fe=["className"],We=e=>{const{classes:t,orientation:n,alternativeLabel:o,active:a,completed:l,disabled:m}=e,s={root:["root",n,o&&"alternativeLabel",a&&"active",l&&"completed",m&&"disabled"],line:["line",`line${K(n)}`]};return k(s,_e,t)},Be=x("div",{name:"MuiStepConnector",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.orientation],n.alternativeLabel&&t.alternativeLabel,n.completed&&t.completed]}})(({ownerState:e})=>p({flex:"1 1 auto"},e.orientation==="vertical"&&{marginLeft:12},e.alternativeLabel&&{position:"absolute",top:8+4,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"})),je=x("span",{name:"MuiStepConnector",slot:"Line",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.line,t[`line${K(n.orientation)}`]]}})(({ownerState:e,theme:t})=>p({display:"block",borderColor:t.palette.mode==="light"?t.palette.grey[400]:t.palette.grey[600]},e.orientation==="horizontal"&&{borderTopStyle:"solid",borderTopWidth:1},e.orientation==="vertical"&&{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24})),De=v.exports.forwardRef(function(t,n){const o=P({props:t,name:"MuiStepConnector"}),{className:a}=o,l=A(o,Fe),{alternativeLabel:m,orientation:s="horizontal"}=v.exports.useContext(W),{active:c,disabled:d,completed:i}=v.exports.useContext(D),u=p({},o,{alternativeLabel:m,orientation:s,active:c,completed:i,disabled:d}),S=We(u);return r(Be,p({className:T(S.root,a),ref:n,ownerState:u},l,{children:r(je,{className:S.line,ownerState:u})}))});var Ee=De;function He(e){return w("MuiStepper",e)}z("MuiStepper",["root","horizontal","vertical","alternativeLabel"]);const Ve=["activeStep","alternativeLabel","children","className","connector","nonLinear","orientation"],Oe=e=>{const{orientation:t,alternativeLabel:n,classes:o}=e;return k({root:["root",t,n&&"alternativeLabel"]},He,o)},Ge=x("div",{name:"MuiStepper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.orientation],n.alternativeLabel&&t.alternativeLabel]}})(({ownerState:e})=>p({display:"flex"},e.orientation==="horizontal"&&{flexDirection:"row",alignItems:"center"},e.orientation==="vertical"&&{flexDirection:"column"},e.alternativeLabel&&{alignItems:"flex-start"})),qe=r(Ee,{}),Qe=v.exports.forwardRef(function(t,n){const o=P({props:t,name:"MuiStepper"}),{activeStep:a=0,alternativeLabel:l=!1,children:m,className:s,connector:c=qe,nonLinear:d=!1,orientation:i="horizontal"}=o,u=A(o,Ve),S=p({},o,{alternativeLabel:l,orientation:i}),R=Oe(S),f=v.exports.Children.toArray(m).filter(Boolean),L=f.map((g,h)=>v.exports.cloneElement(g,p({index:h,last:h+1===f.length},g.props))),N=v.exports.useMemo(()=>({activeStep:a,alternativeLabel:l,connector:c,nonLinear:d,orientation:i}),[a,l,c,d,i]);return r(W.Provider,{value:N,children:r(Ge,p({ownerState:S,className:T(R.root,s),ref:n},u,{children:L}))})});var Ze=Qe,Je="/app/assets/hojas_check.svg";const Ke=({title:e,img:t,height:n,width:o})=>r(Z,{container:!0,justifyContent:"center",children:b(Z,{item:!0,style:{textAlign:"center"},children:[r("img",{src:t!=null?t:Je,alt:e,style:{width:o!=null?o:"100%",height:n!=null?n:"100%"}}),r(se,{variant:"h4",noWrap:!0,children:e})]})}),At=a=>{var l=a,{children:e,steps:t,errors:n}=l,o=Q(l,["children","steps","errors"]);const m=ae(),s=ie(m.breakpoints.down("sm"));return b(le,{children:[o.state&&r(ce,{state:o.state.modalState,setHide:o.state.setHide,type:"ERROR",title:"\xA1Atenci\xF3n!",body:"Se encontraron errores en el formulario. Favor corregir antes de avanzar."}),b(_,{sx:{width:"100%"},children:[r(Ze,{activeStep:o.activeStep,orientation:s&&t.length>3||t.length>5?"vertical":void 0,sx:{marginBottom:2},children:t.map((c,d)=>r(xe,q(G({},{}),{children:r(Ue,{error:d===o.activeStep?n!==0:void 0,children:c})}),c))}),o.activeStep<t.length&&e.map((c,d)=>r(_,{sx:{display:o.activeStep<t.length&&d===o.activeStep||o.activeStep===t.length&&d===o.activeStep-1?void 0:"none"},children:c},d)),o.activeStep>=t.length&&b("div",{style:{display:"flex",flexDirection:"column",textAlign:"center"},children:[r(Ke,{title:o.sentLabelImage,height:"150px"}),o.finishedAction&&r("div",{children:r(F,{variant:"outlined",onClick:o.finishedAction,children:o.finishedActionText||"REALIZAR OTRO"})})]}),b(_,{sx:{display:"flex",flexDirection:"row",pt:2},children:[r(F,{color:"inherit",variant:"outlined",disabled:o.activeStep===0||o.activeStep>=t.length||n!==0,onClick:o.handleBack,sx:{mr:1},children:"Atr\xE1s"}),r(_,{sx:{flex:"1 1 auto"}}),o.activeStep<t.length-1&&r(F,{onClick:o.handleNext,variant:"outlined",disabled:!o.disabledLast&&n!==0,children:"Siguiente"}),o.activeStep>=t.length-1&&r(F,{onClick:o.handleNext,variant:"outlined",disabled:!o.disabledLast&&(o.activeStep>=t.length||n!==0),children:o.activeStep===t.length-1?o.sendLabel:o.sentLabel})]})]})]})};export{At as default};
