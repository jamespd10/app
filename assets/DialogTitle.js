import{s as m,r,u as d,l as g,n as u,a as x,_ as T,o as f}from"./index.js";import{g as D}from"./dialogTitleClasses.js";import{a as h}from"./ModalTransition.js";import{T as y}from"./Typography.js";const C=["className","id"],v=s=>{const{classes:o}=s;return u({root:["root"]},D,o)},R=m(y,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(s,o)=>o.root})({padding:"16px 24px",flex:"0 0 auto"}),_=r.exports.forwardRef(function(o,e){const t=d({props:o,name:"MuiDialogTitle"}),{className:i,id:l}=t,n=g(t,C),a=t,c=v(a),{titleId:p=l}=r.exports.useContext(h);return x(R,T({component:"h2",className:f(c.root,i),ownerState:a,ref:e,variant:"h6",id:p},n))});var M=_;export{M as D};