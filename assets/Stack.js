import{s as v,r as p,u as g,f as y,a as h,_ as m,Z as d,Y as l,ac as k,ad as x,ae as S}from"./index.js";import{e as P}from"./Typography.js";const V=["component","direction","spacing","divider","children"];function R(e,r){const t=p.exports.Children.toArray(e).filter(Boolean);return t.reduce((s,n,i)=>(s.push(n),i<t.length-1&&s.push(p.exports.cloneElement(r,{key:`separator-${i}`})),s),[])}const j=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],B=({ownerState:e,theme:r})=>{let t=m({display:"flex"},d({theme:r},l({values:e.direction,breakpoints:r.breakpoints.values}),s=>({flexDirection:s})));if(e.spacing){const s=k(r),n=Object.keys(r.breakpoints.values).reduce((a,o)=>((e.spacing[o]!=null||e.direction[o]!=null)&&(a[o]=!0),a),{}),i=l({values:e.direction,base:n}),c=l({values:e.spacing,base:n});t=x(t,d({theme:r},c,(a,o)=>({"& > :not(style) + :not(style)":{margin:0,[`margin${j(o?i[o]:e.direction)}`]:S(s,a)}})))}return t},_=v("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,r)=>[r.root]})(B),b=p.exports.forwardRef(function(r,t){const s=g({props:r,name:"MuiStack"}),n=P(s),{component:i="div",direction:c="column",spacing:u=0,divider:a,children:o}=n,f=y(n,V);return h(_,m({as:i,ownerState:{direction:c,spacing:u},ref:t},f,{children:a?R(o,a):o}))});var C=b;export{C as S};
