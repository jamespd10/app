import{h as d,k as u,l as C,r as p,u as m,c as f,_ as n,n as x,a as h,e as v}from"./index.js";import{P as y}from"./Paper.js";function w(s){return d("MuiCard",s)}u("MuiCard",["root"]);const M=["className","raised"],P=s=>{const{classes:e}=s;return x({root:["root"]},w,e)},R=C(y,{name:"MuiCard",slot:"Root",overridesResolver:(s,e)=>e.root})(()=>({overflow:"hidden"})),U=p.exports.forwardRef(function(e,t){const o=m({props:e,name:"MuiCard"}),{className:l,raised:r=!1}=o,i=f(o,M),a=n({},o,{raised:r}),c=P(a);return h(R,n({className:v(c.root,l),elevation:r?8:void 0,ref:t,ownerState:a},i))});var N=U;export{N as C};