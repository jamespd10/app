import{g as O,c as U,s as z,_ as a,r as g,f as H,h as j,j as J,a as d,i as K,k as F,L as Q,w as X,u as Y}from"./index.js";import{u as Z}from"./FormHelperText.js";import{B as ee}from"./ButtonBase.js";import{a as oe}from"./useControlled.js";import{c as w}from"./createSvgIcon.js";function te(e){return O("PrivateSwitchBase",e)}U("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const ce=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],ne=e=>{const{classes:o,checked:t,disabled:r,edge:c}=e,n={root:["root",t&&"checked",r&&"disabled",c&&`edge${F(c)}`],input:["input"]};return j(n,te,o)},se=z(ee)(({ownerState:e})=>a({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),ae=z("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),re=g.exports.forwardRef(function(o,t){const{autoFocus:r,checked:c,checkedIcon:n,className:B,defaultChecked:m,disabled:I,disableFocusRipple:l=!1,edge:f=!1,icon:v,id:u,inputProps:y,inputRef:k,name:C,onBlur:h,onChange:b,onFocus:R,readOnly:E,required:N,tabIndex:V,type:x,value:$}=o,q=H(o,ce),[M,T]=oe({controlled:c,default:Boolean(m),name:"SwitchBase",state:"checked"}),i=Z(),W=s=>{R&&R(s),i&&i.onFocus&&i.onFocus(s)},A=s=>{h&&h(s),i&&i.onBlur&&i.onBlur(s)},D=s=>{if(s.nativeEvent.defaultPrevented)return;const L=s.target.checked;T(L),b&&b(s,L)};let p=I;i&&typeof p=="undefined"&&(p=i.disabled);const G=x==="checkbox"||x==="radio",S=a({},o,{checked:M,disabled:p,disableFocusRipple:l,edge:f}),_=ne(S);return J(se,a({component:"span",className:K(_.root,B),centerRipple:!0,focusRipple:!l,disabled:p,tabIndex:null,role:void 0,onFocus:W,onBlur:A,ownerState:S,ref:t},q,{children:[d(ae,a({autoFocus:r,checked:c,defaultChecked:m,className:_.input,disabled:p,id:G&&u,name:C,onChange:D,readOnly:E,ref:k,required:N,ownerState:S,tabIndex:V,type:x},x==="checkbox"&&$===void 0?{}:{value:$},y)),M?n:v]}))});var ie=re,de=w(d("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),le=w(d("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),ue=w(d("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function he(e){return O("MuiCheckbox",e)}const pe=U("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]);var P=pe;const me=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],fe=e=>{const{classes:o,indeterminate:t,color:r}=e,c={root:["root",t&&"indeterminate",`color${F(r)}`]},n=j(c,he,o);return a({},o,n)},ke=z(ie,{shouldForwardProp:e=>Q(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.indeterminate&&o.indeterminate,t.color!=="default"&&o[`color${F(t.color)}`]]}})(({theme:e,ownerState:o})=>a({color:e.palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:X(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${P.checked}, &.${P.indeterminate}`]:{color:e.palette[o.color].main},[`&.${P.disabled}`]:{color:e.palette.action.disabled}})),Ce=d(le,{}),be=d(de,{}),xe=d(ue,{}),ge=g.exports.forwardRef(function(o,t){var r,c;const n=Y({props:o,name:"MuiCheckbox"}),{checkedIcon:B=Ce,color:m="primary",icon:I=be,indeterminate:l=!1,indeterminateIcon:f=xe,inputProps:v,size:u="medium"}=n,y=H(n,me),k=l?f:I,C=l?f:B,h=a({},n,{color:m,indeterminate:l,size:u}),b=fe(h);return d(ke,a({type:"checkbox",inputProps:a({"data-indeterminate":l},v),icon:g.exports.cloneElement(k,{fontSize:(r=k.props.fontSize)!=null?r:u}),checkedIcon:g.exports.cloneElement(C,{fontSize:(c=C.props.fontSize)!=null?c:u}),ownerState:h,ref:t},y,{classes:b}))});var Pe=ge;export{Pe as C,ie as S,P as c};
