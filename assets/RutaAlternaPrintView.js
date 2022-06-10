var S=Object.defineProperty,E=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var j=(o,r,d)=>r in o?S(o,r,{enumerable:!0,configurable:!0,writable:!0,value:d}):o[r]=d,t=(o,r)=>{for(var d in r||(r={}))N.call(r,d)&&j(o,d,r[d]);if(M)for(var d of M(r))O.call(r,d)&&j(o,d,r[d]);return o},i=(o,r)=>E(o,I(r));import{f as D}from"./string.helper.js";import{h as C}from"./date.helper.js";import{r as L,a as e,F as g,j as s}from"./index.js";import{a as P,b as T}from"./index31.js";import{s as z}from"./array.helper.js";import"./regex.js";import"./index13.js";import"./jwt-decode.esm.js";import"./useFetchPagination.js";import"./useAsyncRetry.js";import"./useList.js";import"./usePrevious.js";import"./useHttpService.js";import"./useFetch.js";import"./Loader.js";import"./Grid.js";import"./extendSxProp.js";import"./Typography.js";import"./HeaderTitle.js";import"./Divider.js";import"./Box.js";const p={whiteSpace:"nowrap",overflow:"hidden"},h={display:"flex",alignItems:"center",justifyContent:"center"},b={justifyContent:"left"},A={justifyContent:"right"},V={display:"flex",flexDirection:"column",border:"1px solid black",textTransform:"uppercase"},W={fontSize:"24px",fontWeight:"bold",textAlign:"center"},v={display:"flex",flexDirection:"row",borderTop:"1px solid black"},a=i(t(t({},h),p),{width:"5%",height:23.73}),m=i(t(t({},h),p),{width:"25%",height:23.73,borderLeft:"1px solid black",borderRight:"1px solid black"}),k=i(t(t({},h),p),{width:"35%",height:23.73}),c=i(t(t({},h),p),{width:"10%",height:23.73,borderLeft:"1px solid black",borderRight:"1px solid black"}),w=i(t(t({},h),p),{width:"20%",height:23.73}),_=i(t(t({},c),A),{paddingRight:"5px",fontSize:"1w"}),pt=()=>{const{selectedList:o,filterRadioList:r}=L.exports.useContext(P),{listFechas:d,selectedDate:R}=L.exports.useContext(T),F=r.flatMap(l=>Object.keys(l)).findIndex(l=>l==="ruta"),f=Object.assign(t({},r[F])),y=d.findIndex(l=>l.ruta===f.ruta);return e(g,{children:z(o.sort((l,x)=>(l.recorrido||0)-(x.recorrido||0)),50).map((l,x)=>e("div",{className:"break-print-page",style:{display:"flex",flexDirection:"column",width:"100%"},children:s("div",{className:"header-page",style:t({},V),children:[e("span",{style:t({},W),children:"PROFORMAS"}),s("div",{style:i(t({},v),{textAlign:"center"}),children:[e("div",{style:t({},a)}),s("div",{style:t({},m),children:[f.ruta," ",y>-1?e(g,{children:d[y].counter}):""]}),e("div",{style:i(t({},m),{width:"45%",borderLeft:""}),children:C(`${new Date(R||Date.now())}`,"EEEE d - MMMM - yyyy")}),e("div",{style:t({},w),children:"C\xC9DULA"}),e("div",{style:i(t({},c),{width:"5%"}),children:"DV"}),e("div",{style:t({},a),children:"CK"})]}),l.map((n,u)=>s("div",{style:t({},v),children:[e("div",{style:t({},a),children:u+1}),e("div",{style:i(t(t({},m),b),{paddingLeft:"5px"}),children:n.tipo_only}),e("div",{style:i(t(t({},k),b),{paddingLeft:"5px"}),children:n.nombre_only}),e("div",{style:i(t(t({},c),A),{paddingRight:"5px"}),children:D(n.total,!0)}),e("div",{style:i(t(t({},w),b),{padding:"0 0 0 5px"}),children:n.ruc}),e("div",{style:i(t({},c),{width:"5%"}),children:n.dv}),e("div",{style:t({},a)})]},n.id)),s("div",{style:t({},v),children:[e("div",{style:t({},a)}),e("div",{style:i(t({},m),{fontSize:14}),children:C(`${new Date(R||Date.now())}`,"d - MMMM - yyyy")}),s("div",{style:t({},k),children:[f.ruta," ",y>-1?e(g,{children:d[y].counter}):""]}),e("div",{style:t({},_),children:D(o.map(n=>Number(n.total)).reduce((n,u)=>n+u),!0)}),e("div",{style:t({},w)}),e("div",{style:i(t({},c),{width:"5%"})}),e("div",{style:t({},a)})]})]})},x))})};export{pt as default};
