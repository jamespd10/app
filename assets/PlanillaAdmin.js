import{f as m,r,j as n,a as i,F as c}from"./index.js";import{s as p,S as h}from"./percentualCard.module.js";import{P as x}from"./PercentualCard.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./Typography.js";import"./Loader.js";import"./Grid.js";const M=()=>{const[e,d,a,s]=m(),{usuario:t}=r.exports.useContext(x);r.exports.useEffect(()=>{d("/admin/dashboard/planillas-admin",{params:{id:t==null?void 0:t.id}})},[t]);const l=r.exports.useMemo(()=>((a==null?void 0:a.total)||0)/((a==null?void 0:a.realizados)||1),[a]),o=r.exports.useMemo(()=>Math.round(l*100),[l]);return n("div",{className:p.card,children:[i("div",{children:i(h,{variant:e?"indeterminate":"determinate",value:o,size:80,textProps:{variant:"h6"},children:!e&&a&&n(c,{children:[o>100?100:o,"%"]})})}),e&&i("span",{children:"cargando..."}),!e&&a&&n("span",{children:[n("strong",{children:[a.total," / ",a.realizados]})," ","planillas realizadas del mes actual"]}),!e&&!a&&s&&i("span",{children:s==null?void 0:s.message})]})};export{M as default};
