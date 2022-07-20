import{a as r,s as h,_ as i,j as _,r as c,g as F,h as M,O as U,p as $,E as j,u as E,l as P,n as V,y as q}from"./index.js";import{S as N}from"./SwitchBase.js";import{c as B}from"./createSvgIcon.js";import{c as O,u as D}from"./useId.js";import{u as H}from"./useControlled.js";import{F as L}from"./FormGroup.js";var T=B(r("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),W=B(r("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked");const Z=h("span")({position:"relative",display:"flex"}),A=h(T)({transform:"scale(1)"}),J=h(W)(({theme:o,ownerState:e})=>i({left:0,position:"absolute",transform:"scale(0)",transition:o.transitions.create("transform",{easing:o.transitions.easing.easeIn,duration:o.transitions.duration.shortest})},e.checked&&{transform:"scale(1)",transition:o.transitions.create("transform",{easing:o.transitions.easing.easeOut,duration:o.transitions.duration.shortest})}));function w(o){const{checked:e=!1,classes:a={},fontSize:n}=o,s=i({},o,{checked:e});return _(Z,{className:a.root,ownerState:s,children:[r(A,{fontSize:n,className:a.background,ownerState:s}),r(J,{fontSize:n,className:a.dot,ownerState:s})]})}const K=c.exports.createContext(void 0);var G=K;function Q(){return c.exports.useContext(G)}function X(o){return F("MuiRadio",o)}const Y=M("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]);var y=Y;const oo=["checked","checkedIcon","color","icon","name","onChange","size"],eo=o=>{const{classes:e,color:a}=o,n={root:["root",`color${$(a)}`]};return i({},e,V(n,X,e))},to=h(N,{shouldForwardProp:o=>U(o)||o==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.root,e[`color${$(a.color)}`]]}})(({theme:o,ownerState:e})=>i({color:o.palette.text.secondary,"&:hover":{backgroundColor:j(e.color==="default"?o.palette.action.active:o.palette[e.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},e.color!=="default"&&{[`&.${y.checked}`]:{color:o.palette[e.color].main}},{[`&.${y.disabled}`]:{color:o.palette.action.disabled}}));function ao(o,e){return typeof e=="object"&&e!==null?o===e:String(o)===String(e)}const I=r(w,{checked:!0}),z=r(w,{}),no=c.exports.forwardRef(function(e,a){var n,s;const l=E({props:e,name:"MuiRadio"}),{checked:m,checkedIcon:p=I,color:C="primary",icon:R=z,name:d,onChange:g,size:u="medium"}=l,k=P(l,oo),f=i({},l,{color:C,size:u}),v=eo(f),t=Q();let S=m;const b=O(g,t&&t.onChange);let x=d;return t&&(typeof S=="undefined"&&(S=ao(t.value,l.value)),typeof x=="undefined"&&(x=t.name)),r(to,i({type:"radio",icon:c.exports.cloneElement(R,{fontSize:(n=z.props.fontSize)!=null?n:u}),checkedIcon:c.exports.cloneElement(p,{fontSize:(s=I.props.fontSize)!=null?s:u}),ownerState:f,classes:v,name:x,checked:S,onChange:b,ref:a},k))});var ho=no;const ro=["actions","children","defaultValue","name","onChange","value"],so=c.exports.forwardRef(function(e,a){const{actions:n,children:s,defaultValue:l,name:m,onChange:p,value:C}=e,R=P(e,ro),d=c.exports.useRef(null),[g,u]=H({controlled:C,default:l,name:"RadioGroup"});c.exports.useImperativeHandle(n,()=>({focus:()=>{let t=d.current.querySelector("input:not(:disabled):checked");t||(t=d.current.querySelector("input:not(:disabled)")),t&&t.focus()}}),[]);const k=q(a,d),f=t=>{u(t.target.value),p&&p(t,t.target.value)},v=D(m);return r(G.Provider,{value:{name:v,onChange:f,value:g},children:r(L,i({role:"radiogroup",ref:k},R,{children:s}))})});var mo=so;export{mo as R,ho as a};