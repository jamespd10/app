import{r as e,b as a,A as i,a as t}from"./index.js";import{L as o}from"./Loader.js";import"./Grid.js";import"./Typography.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";const l=e.exports.lazy(()=>a(()=>import("./PlanillaAsignada.js"),["assets/PlanillaAsignada.js","assets/percentualCard.module.js","assets/percentualCard.module.css","assets/index.js","assets/index2.css","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/Typography.js","assets/useFetcherEarly.js"])),n=e.exports.lazy(()=>a(()=>import("./PlanillaAdmin.js"),["assets/PlanillaAdmin.js","assets/index.js","assets/index2.css","assets/percentualCard.module.js","assets/percentualCard.module.css","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/Typography.js","assets/PercentualCard.js","assets/Loader.js","assets/Grid.js"])),x=()=>{const{authState:s}=e.exports.useContext(i),{tipo:r}=s;return r&&["Super","Admin"].includes(r)?t(e.exports.Suspense,{fallback:t(o,{}),children:t(n,{})}):t(e.exports.Suspense,{fallback:t(o,{}),children:t(l,{})})};export{x as default};
