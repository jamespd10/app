const f=(...n)=>n.every(r=>JSON.stringify(r)===JSON.stringify(n[0])),o=n=>{if(Object(n)!==n||Array.isArray(n))return n;const r=/([^.[.]+)|\.(\d+)\./g,l={};for(const t in n){let s=l,i="",e;for(;e=r.exec(t);)s=s[i]||(s[i]=e[2]?[]:{}),i=e[2]||e[1];s[i]=n[t]}return l[""]||l},y=n=>{const r={},l=(t,s)=>{if(Object(t)!==t||t instanceof Date)r[s]=t;else if(Array.isArray(t)){const i=t.length;for(let e=0;e<i;e++)l(t[e],s+"."+e);i===0&&(r[s]=[])}else{let i=!0;for(const e in t)i=!1,l(t[e],s?s+"."+e:e);i&&s&&(r[s]={})}};return l(n,""),r};export{y as f,f as i,o as u};