const l=(e,h)=>{const p=[];let s=[];for(let t=0;t<e.length;t++)s.push(e[t]),t>0&&(t+1)%h===0&&(p.push(s),s=[]),t===e.length-1&&(t+1)%h!==0&&p.push(s);return p};export{l as s};
