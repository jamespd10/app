import{r as S,h as O,k as T,l as U,_ as f,u as L,c as A,n as E,a as b,e as F,a7 as x,a8 as w}from"./index.js";import{e as Z}from"./extendSxProp.js";const q=S.exports.createContext();var C=q;function H(n){return O("MuiGrid",n)}const J=[0,1,2,3,4,5,6,7,8,9,10],K=["column-reverse","column","row-reverse","row"],Q=["nowrap","wrap-reverse","wrap"],m=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],h=T("MuiGrid",["root","container","item","zeroMinWidth",...J.map(n=>`spacing-xs-${n}`),...K.map(n=>`direction-xs-${n}`),...Q.map(n=>`wrap-xs-${n}`),...m.map(n=>`grid-xs-${n}`),...m.map(n=>`grid-sm-${n}`),...m.map(n=>`grid-md-${n}`),...m.map(n=>`grid-lg-${n}`),...m.map(n=>`grid-xl-${n}`)]),X=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function u(n){const r=parseFloat(n);return`${r}${String(n).replace(String(r),"")||"px"}`}function Y({theme:n,ownerState:r}){let i;return n.breakpoints.keys.reduce((e,t)=>{let o={};if(r[t]&&(i=r[t]),!i)return e;if(i===!0)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(i==="auto")o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const a=x({values:r.columns,breakpoints:n.breakpoints.values}),s=typeof a=="object"?a[t]:a;if(s==null)return e;const g=`${Math.round(i/s*1e8)/1e6}%`;let c={};if(r.container&&r.item&&r.columnSpacing!==0){const p=n.spacing(r.columnSpacing);if(p!=="0px"){const l=`calc(${g} + ${u(p)})`;c={flexBasis:l,maxWidth:l}}}o=f({flexBasis:g,flexGrow:0,maxWidth:g},c)}return n.breakpoints.values[t]===0?Object.assign(e,o):e[n.breakpoints.up(t)]=o,e},{})}function y({theme:n,ownerState:r}){const i=x({values:r.direction,breakpoints:n.breakpoints.values});return w({theme:n},i,e=>{const t={flexDirection:e};return e.indexOf("column")===0&&(t[`& > .${h.item}`]={maxWidth:"none"}),t})}function nn({theme:n,ownerState:r}){const{container:i,rowSpacing:e}=r;let t={};if(i&&e!==0){const o=x({values:e,breakpoints:n.breakpoints.values});t=w({theme:n},o,a=>{const s=n.spacing(a);return s!=="0px"?{marginTop:`-${u(s)}`,[`& > .${h.item}`]:{paddingTop:u(s)}}:{}})}return t}function rn({theme:n,ownerState:r}){const{container:i,columnSpacing:e}=r;let t={};if(i&&e!==0){const o=x({values:e,breakpoints:n.breakpoints.values});t=w({theme:n},o,a=>{const s=n.spacing(a);return s!=="0px"?{width:`calc(100% + ${u(s)})`,marginLeft:`-${u(s)}`,[`& > .${h.item}`]:{paddingLeft:u(s)}}:{}})}return t}function N(n,r,i={}){if(!r||!n||n<=0)return[];if(typeof n=="string"&&!Number.isNaN(Number(n))||typeof n=="number")return[i[`spacing-xs-${String(n)}`]||`spacing-xs-${String(n)}`];const{xs:e,sm:t,md:o,lg:a,xl:s}=n;return[Number(e)>0&&(i[`spacing-xs-${String(e)}`]||`spacing-xs-${String(e)}`),Number(t)>0&&(i[`spacing-sm-${String(t)}`]||`spacing-sm-${String(t)}`),Number(o)>0&&(i[`spacing-md-${String(o)}`]||`spacing-md-${String(o)}`),Number(a)>0&&(i[`spacing-lg-${String(a)}`]||`spacing-lg-${String(a)}`),Number(s)>0&&(i[`spacing-xl-${String(s)}`]||`spacing-xl-${String(s)}`)]}const en=U("div",{name:"MuiGrid",slot:"Root",overridesResolver:(n,r)=>{const{container:i,direction:e,item:t,lg:o,md:a,sm:s,spacing:g,wrap:c,xl:p,xs:l,zeroMinWidth:d}=n.ownerState;return[r.root,i&&r.container,t&&r.item,d&&r.zeroMinWidth,...N(g,i,r),e!=="row"&&r[`direction-xs-${String(e)}`],c!=="wrap"&&r[`wrap-xs-${String(c)}`],l!==!1&&r[`grid-xs-${String(l)}`],s!==!1&&r[`grid-sm-${String(s)}`],a!==!1&&r[`grid-md-${String(a)}`],o!==!1&&r[`grid-lg-${String(o)}`],p!==!1&&r[`grid-xl-${String(p)}`]]}})(({ownerState:n})=>f({boxSizing:"border-box"},n.container&&{display:"flex",flexWrap:"wrap",width:"100%"},n.item&&{margin:0},n.zeroMinWidth&&{minWidth:0},n.wrap!=="wrap"&&{flexWrap:n.wrap}),y,nn,rn,Y),tn=n=>{const{classes:r,container:i,direction:e,item:t,lg:o,md:a,sm:s,spacing:g,wrap:c,xl:p,xs:l,zeroMinWidth:d}=n,$={root:["root",i&&"container",t&&"item",d&&"zeroMinWidth",...N(g,i),e!=="row"&&`direction-xs-${String(e)}`,c!=="wrap"&&`wrap-xs-${String(c)}`,l!==!1&&`grid-xs-${String(l)}`,s!==!1&&`grid-sm-${String(s)}`,a!==!1&&`grid-md-${String(a)}`,o!==!1&&`grid-lg-${String(o)}`,p!==!1&&`grid-xl-${String(p)}`]};return E($,H,r)},sn=S.exports.forwardRef(function(r,i){const e=L({props:r,name:"MuiGrid"}),t=Z(e),{className:o,columns:a,columnSpacing:s,component:g="div",container:c=!1,direction:p="row",item:l=!1,lg:d=!1,md:$=!1,rowSpacing:k,sm:M=!1,spacing:v=0,wrap:z="wrap",xl:P=!1,xs:R=!1,zeroMinWidth:B=!1}=t,I=A(t,X),V=k||v,_=s||v,j=S.exports.useContext(C),G=c?a||12:j,W=f({},t,{columns:G,container:c,direction:p,item:l,lg:d,md:$,sm:M,rowSpacing:V,columnSpacing:_,wrap:z,xl:P,xs:R,zeroMinWidth:B}),D=tn(W);return b(C.Provider,{value:G,children:b(en,f({ownerState:W,className:F(D.root,o),as:g,ref:i},I))})});var cn=sn;export{cn as G};
