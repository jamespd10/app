import{h as A,k as C,l as I,_ as c,r as b,u as E,c as L,n as $,a as r,e as z,j as T,m}from"./index.js";import{u as R,c as _}from"./TextField.js";import{T as j}from"./Typography.js";function F(e){return A("MuiInputAdornment",e)}const M=C("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var f=M,g;const N=["children","className","component","disablePointerEvents","disableTypography","position","variant"],S=(e,t)=>{const{ownerState:n}=e;return[t.root,t[`position${m(n.position)}`],n.disablePointerEvents===!0&&t.disablePointerEvents,t[n.variant]]},U=e=>{const{classes:t,disablePointerEvents:n,hiddenLabel:s,position:o,size:a,variant:l}=e,d={root:["root",n&&"disablePointerEvents",o&&`position${m(o)}`,l,s&&"hiddenLabel",a&&`size${m(a)}`]};return $(d,F,t)},w=I("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:S})(({theme:e,ownerState:t})=>c({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:e.palette.action.active},t.variant==="filled"&&{[`&.${f.positionStart}&:not(.${f.hiddenLabel})`]:{marginTop:16}},t.position==="start"&&{marginRight:8},t.position==="end"&&{marginLeft:8},t.disablePointerEvents===!0&&{pointerEvents:"none"})),k=b.exports.forwardRef(function(t,n){const s=E({props:t,name:"MuiInputAdornment"}),{children:o,className:a,component:l="div",disablePointerEvents:d=!1,disableTypography:x=!1,position:u,variant:v}=s,P=L(s,N),i=R()||{};let p=v;v&&i.variant,i&&!p&&(p=i.variant);const h=c({},s,{hiddenLabel:i.hiddenLabel,size:i.size,disablePointerEvents:d,position:u,variant:p}),y=U(h);return r(_.Provider,{value:null,children:r(w,c({as:l,ownerState:h,className:z(y.root,a),ref:n},P,{children:typeof o=="string"&&!x?r(j,{color:"text.secondary",children:o}):T(b.exports.Fragment,{children:[u==="start"?g||(g=r("span",{className:"notranslate",children:"\u200B"})):null,o]})}))})});var q=k;export{q as I};