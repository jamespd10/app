import{aB as g,r as e}from"./index.js";const E=(p,d)=>{const{method:x,data:h,params:i}=d||{},f=g(),n=e.exports.useMemo(()=>new AbortController,[]),m=e.exports.useMemo(()=>n.signal,[n]),[S,b]=e.exports.useState(0),[l,t]=e.exports.useState(null),[c,o]=e.exports.useState(null),y=e.exports.useCallback(()=>{t(null),o(null),b(s=>s+1)},[l,c]),C=e.exports.useCallback(s=>{t(()=>s)},[]),u=e.exports.useCallback(()=>{a(()=>!1),t(()=>null),o(()=>null)},[]),[R,a]=e.exports.useState(!1);return e.exports.useEffect(()=>((()=>{a(()=>!0),f(p,{method:x,data:h,params:i,signal:m}).then(r=>{r.data?t(r.data):r.error&&o(r.error)}).finally(()=>a(()=>!1))})(),()=>{u()}),[S]),[R,l,c,y,C,u]};export{E as u};
