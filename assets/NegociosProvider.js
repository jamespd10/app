var d=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var l=(a,o)=>{var s={};for(var e in a)R.call(a,e)&&o.indexOf(e)<0&&(s[e]=a[e]);if(a!=null&&d)for(var e of d(a))o.indexOf(e)<0&&C.call(a,e)&&(s[e]=a[e]);return s};import{u as k}from"./useFetchPagination.js";import{r,ac as F,a as L}from"./index.js";const j=r.exports.createContext({}),w=s=>{var e=s,{children:a}=e,o=l(e,["children"]);const{id:n}=F();let i;n?i=`/admin/clientes/${n}/negocios`:i="/admin/negocios";const{loading:g,value:t,handlePage:u,page:p,handleSkipPrev:f,handleSkipNext:h,inputRef:m,sendSearch:x,onClearSearch:N,setFilterRadio:S,filterRadioList:v}=k(i,{params:o.contratar?{c:o.contratar}:void 0,isRadioList:!0}),[P,c]=r.exports.useState();return r.exports.useEffect(()=>{(()=>{t&&t.data&&c(t.data.resultados)})()},[t]),L(j.Provider,{value:{loading:g,value:t,handlePage:u,page:p,handleSkipPrev:f,handleSkipNext:h,inputRef:m,sendSearch:x,onClearSearch:N,setFilterRadio:S,filterRadioList:v,negocios:P,setNegocios:c},children:a})};export{w as N,j as a};