import{r as i,h as m,k as x,l as L,_ as r,u as f,c as C,n as P,a as v,j as M,e as j}from"./index.js";const R=i.exports.createContext({});var U=R;function _(e){return m("MuiList",e)}x("MuiList",["root","padding","dense","subheader"]);const w=["children","className","component","dense","disablePadding","subheader"],y=e=>{const{classes:s,disablePadding:t,dense:o,subheader:a}=e;return P({root:["root",!t&&"padding",o&&"dense",a&&"subheader"]},_,s)},N=L("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:t}=e;return[s.root,!t.disablePadding&&s.padding,t.dense&&s.dense,t.subheader&&s.subheader]}})(({ownerState:e})=>r({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})),S=i.exports.forwardRef(function(s,t){const o=f({props:s,name:"MuiList"}),{children:a,className:d,component:l="ul",dense:n=!1,disablePadding:u=!1,subheader:p}=o,g=C(o,w),h=i.exports.useMemo(()=>({dense:n}),[n]),c=r({},o,{component:l,dense:n,disablePadding:u}),b=y(c);return v(U.Provider,{value:h,children:M(N,r({as:l,className:j(b.root,d),ref:t,ownerState:c},g,{children:[p,a]}))})});var $=S;export{U as L,$ as a};