import{g as p,c as f,s as w,_ as t,r as F,u as x,f as d,h as G,a as C,i as y}from"./index.js";import{u as g,d as h}from"./TextField.js";function v(o){return p("MuiFormGroup",o)}f("MuiFormGroup",["root","row","error"]);const M=["className","row"],R=o=>{const{classes:r,row:e,error:s}=o;return G({root:["root",e&&"row",s&&"error"]},v,r)},S=w("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:e}=o;return[r.root,e.row&&r.row]}})(({ownerState:o})=>t({display:"flex",flexDirection:"column",flexWrap:"wrap"},o.row&&{flexDirection:"row"})),U=F.exports.forwardRef(function(r,e){const s=x({props:r,name:"MuiFormGroup"}),{className:a,row:c=!1}=s,l=d(s,M),u=g(),i=h({props:s,muiFormControl:u,states:["error"]}),n=t({},s,{row:c,error:i.error}),m=R(n);return C(S,t({className:y(m.root,a),ownerState:n,ref:e},l))});var j=U;export{j as F};
