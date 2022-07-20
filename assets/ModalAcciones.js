var R=Object.defineProperty,T=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var M=(n,i,e)=>i in n?R(n,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[i]=e,u=(n,i)=>{for(var e in i||(i={}))E.call(i,e)&&M(n,e,i[e]);if(L)for(var e of L(i))G.call(i,e)&&M(n,e,i[e]);return n},f=(n,i)=>T(n,V(i));import{r as a,aw as k,b as z,j as P,F as B,a as m}from"./index.js";import{L as A}from"./index24.js";import{a as j}from"./FormLiquidacionProvider.js";import{D as O}from"./DialogActions.js";import{L as v}from"./LoadingButton.js";import"./HeaderTitle.js";import"./Typography.js";import"./Divider.js";import"./Loader.js";import"./Grid.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./useForm.js";import"./object.helper.js";import"./regex.js";import"./array.js";import"./upperFirst.js";import"./usePrint.js";import"./index23.js";import"./Button.js";import"./ButtonBase.js";import"./useIsFocusVisible.js";import"./useId.js";const U=()=>{const{pagination:n}=a.exports.useContext(A),{fetcher:i,selected:e,setSelected:c}=n,[,,t,,l]=i,{form:h,fetcher:d,negocio:r,printer:_}=a.exports.useContext(j),[,x]=d,{onFormSubmit:S}=h,[q,D]=_;return{onFormSubmit:S,handleSubmit:(o,b)=>{x(`/admin/liquidaciones/${o.id}`,{method:"PUT",data:f(u({},o),{fecha_enviado:b})}).then(w=>{const y=(t==null?void 0:t.resultados)||[],F=y.findIndex(p=>p.id===o.id);if(w.data&&F!==-1){const p=f(u({},o),{id:w.data.id,tipo:(r==null?void 0:r.tipo)||"",nombre_negocio:(r==null?void 0:r.nombre_negocio)||"",id_cliente:(r==null?void 0:r.id_cliente)||0,nom_cliente:(r==null?void 0:r.nom_cliente)||"",ruc:(r==null?void 0:r.ruc)||"",ruta:(r==null?void 0:r.ruta)||"",fecha_enviado:b?k(new Date,"yyyy-MM-dd hh:mm:ss"):null});y[F]=p;const C=e.findIndex(s=>s.id===o.id);if(C!==-1){const s=[...e];s[C]=p,c([...s])}if(l({paginas:(t==null?void 0:t.paginas)||1,resultados:y}),b&&(D(),C!==-1)){const s=[...e];c([...s.filter(I=>I.id!==o.id)])}}})},divRef:q}},$=a.exports.lazy(()=>z(()=>import("./index70.js"),["assets/index70.js","assets/index.js","assets/index7.css","assets/ViewProvider.js","assets/view.module.js","assets/view.module.css"])),ht=()=>{const{pagination:n}=a.exports.useContext(A),{currentValue:i}=n,{fetcher:e,form:c,negocio:t}=a.exports.useContext(j),{onFormSubmit:l,formState:h}=c,[d]=e,{handleSubmit:r,divRef:_}=U(),[,x]=i;return P(B,{children:[P(O,{children:[m(v,{variant:"outlined",color:"inherit",disabled:d,onClick:()=>x(null),children:"Cerrar"}),m(v,{variant:"outlined",color:"primary",loading:d,onClick:()=>l(r),children:"Guardar"}),m(v,{variant:"outlined",color:"error",loading:d,onClick:()=>l(S=>r(S,k(new Date,"yyyy-MM-dd hh:mm:ss"))),children:"Guardar e imprimir"})]}),m(a.exports.Suspense,{fallback:m("div",{}),children:m($,{list:[f(u({},h),{tipo:(t==null?void 0:t.tipo)||"",nombre_negocio:(t==null?void 0:t.nombre_negocio)||"",fecha_creacion:"",id_cliente:(t==null?void 0:t.id_cliente)||0,nom_cliente:(t==null?void 0:t.nom_cliente)||"",ruc:(t==null?void 0:t.ruc)||"",ruta:(t==null?void 0:t.ruta)||"",fecha_enviado:""})],divRef:_})})]})};export{ht as default};