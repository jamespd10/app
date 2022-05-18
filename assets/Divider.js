import{h as w,k as A,l as f,_ as a,y as C,r as D,u as R,c as W,n as I,a as v,e as L}from"./index.js";function $(i){return w("MuiDivider",i)}const _=A("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),V=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],M=i=>{const{absolute:t,children:e,classes:l,flexItem:s,light:n,orientation:r,textAlign:o,variant:d}=i;return I({root:["root",t&&"absolute",d,n&&"light",r==="vertical"&&"vertical",s&&"flexItem",e&&"withChildren",e&&r==="vertical"&&"withChildrenVertical",o==="right"&&r!=="vertical"&&"textAlignRight",o==="left"&&r!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",r==="vertical"&&"wrapperVertical"]},$,l)},T=f("div",{name:"MuiDivider",slot:"Root",overridesResolver:(i,t)=>{const{ownerState:e}=i;return[t.root,e.absolute&&t.absolute,t[e.variant],e.light&&t.light,e.orientation==="vertical"&&t.vertical,e.flexItem&&t.flexItem,e.children&&t.withChildren,e.children&&e.orientation==="vertical"&&t.withChildrenVertical,e.textAlign==="right"&&e.orientation!=="vertical"&&t.textAlignRight,e.textAlign==="left"&&e.orientation!=="vertical"&&t.textAlignLeft]}})(({theme:i,ownerState:t})=>a({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:i.palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:C(i.palette.divider,.08)},t.variant==="inset"&&{marginLeft:72},t.variant==="middle"&&t.orientation==="horizontal"&&{marginLeft:i.spacing(2),marginRight:i.spacing(2)},t.variant==="middle"&&t.orientation==="vertical"&&{marginTop:i.spacing(1),marginBottom:i.spacing(1)},t.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"}),({theme:i,ownerState:t})=>a({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${i.palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}}),({theme:i,ownerState:t})=>a({},t.children&&t.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${i.palette.divider}`,transform:"translateX(0%)"}}),({ownerState:i})=>a({},i.textAlign==="right"&&i.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},i.textAlign==="left"&&i.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),B=f("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(i,t)=>{const{ownerState:e}=i;return[t.wrapper,e.orientation==="vertical"&&t.wrapperVertical]}})(({theme:i,ownerState:t})=>a({display:"inline-block",paddingLeft:`calc(${i.spacing(1)} * 1.2)`,paddingRight:`calc(${i.spacing(1)} * 1.2)`},t.orientation==="vertical"&&{paddingTop:`calc(${i.spacing(1)} * 1.2)`,paddingBottom:`calc(${i.spacing(1)} * 1.2)`})),N=D.exports.forwardRef(function(t,e){const l=R({props:t,name:"MuiDivider"}),{absolute:s=!1,children:n,className:r,component:o=n?"div":"hr",flexItem:d=!1,light:h=!1,orientation:u="horizontal",role:p=o!=="hr"?"separator":void 0,textAlign:x="center",variant:m="fullWidth"}=l,b=W(l,V),c=a({},l,{absolute:s,component:o,flexItem:d,light:h,orientation:u,role:p,textAlign:x,variant:m}),g=M(c);return v(T,a({as:o,className:L(g.root,r),role:p,ref:e,ownerState:c},b,{children:n?v(B,{className:g.wrapper,ownerState:c,children:n}):null}))});var k=N;export{k as D,_ as d};
