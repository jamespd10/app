import{r as e,b as o,A as l,a as t}from"./index.js";import{L as r}from"./Loader.js";import"./Grid.js";import"./Typography.js";const i=e.exports.lazy(()=>o(()=>import("./PlanillaAsignada.js"),["assets/PlanillaAsignada.js","assets/percentualCard.module.js","assets/percentualCard.module.css","assets/index.js","assets/index5.css","assets/Typography.js","assets/useFetcherEarly.js"])),n=e.exports.lazy(()=>o(()=>import("./PlanillaAdmin.js"),["assets/PlanillaAdmin.js","assets/index.js","assets/index5.css","assets/percentualCard.module.js","assets/percentualCard.module.css","assets/Typography.js","assets/PercentualCard.js","assets/Loader.js","assets/Grid.js"])),d=()=>{const{authState:s}=e.exports.useContext(l),{tipo:a}=s;return a&&["Super","Admin"].includes(a)?t(e.exports.Suspense,{fallback:t(r,{}),children:t(n,{})}):t(e.exports.Suspense,{fallback:t(r,{}),children:t(i,{})})};export{d as default};
