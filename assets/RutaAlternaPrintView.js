var I=Object.defineProperty,N=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var D=(d,r,o)=>r in d?I(d,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):d[r]=o,t=(d,r)=>{for(var o in r||(r={}))T.call(r,o)&&D(d,o,r[o]);if(R)for(var o of R(r))F.call(r,o)&&D(d,o,r[o]);return d},i=(d,r)=>N(d,S(r));import{f as L}from"./string.helper.js";import{h as M}from"./date.helper.js";import{r as j,a as e,F as b,j as s}from"./index.js";import{a as O,b as P}from"./index46.js";import{a as z}from"./array.helper.js";import"./regex.js";import"./index31.js";import"./useFetchPagination.js";import"./useAsyncRetry.js";import"./useAsync.js";import"./useList.js";import"./usePrevious.js";import"./useHttpService.js";import"./object.helper.js";import"./useFetch.js";import"./Loader.js";import"./Grid.js";import"./Typography.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./HeaderTitle.js";import"./Divider.js";import"./Box.js";const p={whiteSpace:"nowrap",overflow:"hidden"},h={display:"flex",alignItems:"center",justifyContent:"center"},g={justifyContent:"left"},E={justifyContent:"right"},U={display:"flex",flexDirection:"column",border:"1px solid black",textTransform:"uppercase"},V={fontSize:"24px",fontWeight:"bold",textAlign:"center"},w={display:"flex",flexDirection:"row",borderTop:"1px solid black"},a=i(t(t({},h),p),{width:"5%",height:23.73}),m=i(t(t({},h),p),{width:"25%",height:23.73,borderLeft:"1px solid black",borderRight:"1px solid black"}),A=i(t(t({},h),p),{width:"35%",height:23.73}),c=i(t(t({},h),p),{width:"10%",height:23.73,borderLeft:"1px solid black",borderRight:"1px solid black"}),v=i(t(t({},h),p),{width:"20%",height:23.73}),W=i(t(t({},c),E),{paddingRight:"5px",fontSize:"1w"}),yt=()=>{const{selectedList:d,filterRadioList:r}=j.exports.useContext(O),{listFechas:o,selectedDate:C}=j.exports.useContext(P),k=r.flatMap(n=>Object.keys(n)).findIndex(n=>n==="ruta"),f=Object.assign(t({},r[k])),y=o.findIndex(n=>n.ruta===f.ruta);return e(b,{children:z(d.sort((n,x)=>(n.recorrido||0)-(x.recorrido||0)),50).map((n,x)=>e("div",{className:"break-print-page",style:{display:"flex",flexDirection:"column",width:"100%"},children:s("div",{style:t({},U),children:[e("span",{style:t({},V),children:window.location.href.includes("renta")?"DECLARACIONES DE RENTA":"DECLARACIONES MUNICIPALES"}),s("div",{style:i(t({},w),{textAlign:"center"}),children:[e("div",{style:t({},a)}),s("div",{style:t({},m),children:[f.ruta," ",y>-1?e(b,{children:o[y].counter}):""]}),e("div",{style:i(t({},m),{width:"45%",borderLeft:""}),children:M(`${new Date(C||Date.now())}`,"EEEE d - MMMM - yyyy")}),e("div",{style:t({},v),children:"C\xC9DULA"}),e("div",{style:i(t({},c),{width:"5%"}),children:"DV"}),e("div",{style:t({},a),children:"CK"})]}),n.map((l,u)=>s("div",{style:t({},w),children:[e("div",{style:t({},a),children:u+1}),e("div",{style:i(t(t({},m),g),{paddingLeft:"5px"}),children:l.tipo_only}),e("div",{style:i(t(t({},A),g),{paddingLeft:"5px"}),children:l.nombre_only}),e("div",{style:i(t(t({},c),E),{paddingRight:"5px"}),children:L(l.total,!0)}),e("div",{style:i(t(t({},v),g),{padding:"0 0 0 5px"}),children:l.ruc}),e("div",{style:i(t({},c),{width:"5%"}),children:l.dv}),e("div",{style:t({},a)})]},l.id)),s("div",{style:t({},w),children:[e("div",{style:t({},a)}),e("div",{style:i(t({},m),{fontSize:14}),children:M(`${new Date(C||Date.now())}`,"d - MMMM - yyyy")}),s("div",{style:t({},A),children:[f.ruta," ",y>-1?e(b,{children:o[y].counter}):""]}),e("div",{style:t({},W),children:L(n.map(l=>Number(l.total)).reduce((l,u)=>l+u),!0)}),e("div",{style:t({},v)}),e("div",{style:i(t({},c),{width:"5%"})}),e("div",{style:t({},a)})]})]})},x))})};export{yt as default};
