import{r as l,au as _}from"./index.js";var d={},i={};Object.defineProperty(i,"__esModule",{value:!0});var h=l.exports,k=function(u){return(u+1)%1e6};function g(){var u=h.useReducer(k,0),a=u[1];return a}i.default=g;var s={};Object.defineProperty(s,"__esModule",{value:!0});s.resolveHookState=void 0;function A(u,a){return typeof u=="function"?u.length?u(a):u():u}s.resolveHookState=A;Object.defineProperty(d,"__esModule",{value:!0});var H=_.exports,v=l.exports,b=H.__importDefault(i),f=s;function m(u){u===void 0&&(u=[]);var a=v.useRef(f.resolveHookState(u)),p=b.default(),o=v.useMemo(function(){var c={set:function(t){a.current=f.resolveHookState(t,a.current),p()},push:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];t.length&&o.set(function(r){return r.concat(t)})},updateAt:function(t,e){o.set(function(r){var n=r.slice();return n[t]=e,n})},insertAt:function(t,e){o.set(function(r){var n=r.slice();return t>n.length?n[t]=e:n.splice(t,0,e),n})},update:function(t,e){o.set(function(r){return r.map(function(n){return t(n,e)?e:n})})},updateFirst:function(t,e){var r=a.current.findIndex(function(n){return t(n,e)});r>=0&&o.updateAt(r,e)},upsert:function(t,e){var r=a.current.findIndex(function(n){return t(n,e)});r>=0?o.updateAt(r,e):o.push(e)},sort:function(t){o.set(function(e){return e.slice().sort(t)})},filter:function(t,e){o.set(function(r){return r.slice().filter(t,e)})},removeAt:function(t){o.set(function(e){var r=e.slice();return r.splice(t,1),r})},clear:function(){o.set([])},reset:function(){o.set(f.resolveHookState(u).slice())}};return c.remove=c.removeAt,c},[]);return[a.current,o]}var M=d.default=m;export{M as _};
