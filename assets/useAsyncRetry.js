import{t as g}from"./tslib.js";import{r as i}from"./index.js";var M={},p={},b={},m={};Object.defineProperty(m,"__esModule",{value:!0});var _=i.exports;function k(){var r=_.useRef(!1),e=_.useCallback(function(){return r.current},[]);return _.useEffect(function(){return r.current=!0,function(){r.current=!1}},[]),e}m.default=k;Object.defineProperty(b,"__esModule",{value:!0});var y=g.exports,d=i.exports,R=y.__importDefault(m);function j(r,e,t){e===void 0&&(e=[]),t===void 0&&(t={loading:!1});var a=d.useRef(0),u=R.default(),s=d.useState(t),o=s[0],f=s[1],v=d.useCallback(function(){for(var A=[],c=0;c<arguments.length;c++)A[c]=arguments[c];var $=++a.current;return o.loading||f(function(n){return y.__assign(y.__assign({},n),{loading:!0})}),r.apply(void 0,A).then(function(n){return u()&&$===a.current&&f({value:n,loading:!1}),n},function(n){return u()&&$===a.current&&f({error:n,loading:!1}),n})},e);return[o,v]}b.default=j;Object.defineProperty(p,"__esModule",{value:!0});var C=g.exports,O=i.exports,P=C.__importDefault(b);function D(r,e){e===void 0&&(e=[]);var t=P.default(r,e,{loading:!0}),a=t[0],u=t[1];return O.useEffect(function(){u()},[u]),a}var I=p.default=D;Object.defineProperty(M,"__esModule",{value:!0});var l=g.exports,x=i.exports,F=l.__importDefault(p),S=function(r,e){e===void 0&&(e=[]);var t=x.useState(0),a=t[0],u=t[1],s=F.default(r,l.__spreadArrays(e,[a])),o=s.loading,f=x.useCallback(function(){o||u(function(v){return v+1})},l.__spreadArrays(e,[o]));return l.__assign(l.__assign({},s),{retry:f})},L=M.default=S;export{L as _,I as a};