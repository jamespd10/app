import{g as R,h as $,s as T,p as h,_ as c,r as C,u as j,l as M,n as N,a as U,j as _,o as w}from"./index.js";import{u as D,d as S}from"./TextField.js";import{T as g}from"./Typography.js";function E(o){return R("MuiFormControlLabel",o)}const W=$("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]);var i=W;const z=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","value"],A=o=>{const{classes:e,disabled:a,labelPlacement:l,error:m}=o,d={root:["root",a&&"disabled",`labelPlacement${h(l)}`,m&&"error"],label:["label",a&&"disabled"]};return N(d,E,e)},B=T("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[{[`& .${i.label}`]:e.label},e.root,e[`labelPlacement${h(a.labelPlacement)}`]]}})(({theme:o,ownerState:e})=>c({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${i.disabled}`]:{cursor:"default"}},e.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},e.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},e.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${i.label}`]:{[`&.${i.disabled}`]:{color:o.palette.text.disabled}}})),H=C.exports.forwardRef(function(e,a){const l=j({props:e,name:"MuiFormControlLabel"}),{className:m,componentsProps:d={},control:s,disabled:P,disableTypography:L,label:y,labelPlacement:x="end"}=l,F=M(l,z),b=D();let t=P;typeof t=="undefined"&&typeof s.props.disabled!="undefined"&&(t=s.props.disabled),typeof t=="undefined"&&b&&(t=b.disabled);const p={disabled:t};["checked","name","onChange","value","inputRef"].forEach(n=>{typeof s.props[n]=="undefined"&&typeof l[n]!="undefined"&&(p[n]=l[n])});const v=S({props:l,muiFormControl:b,states:["error"]}),f=c({},l,{disabled:t,labelPlacement:x,error:v.error}),u=A(f);let r=y;return r!=null&&r.type!==g&&!L&&(r=U(g,c({component:"span",className:u.label},d.typography,{children:r}))),_(B,c({className:w(u.root,m),ownerState:f,ref:a},F,{children:[C.exports.cloneElement(s,p),r]}))});var G=H;export{G as F};
