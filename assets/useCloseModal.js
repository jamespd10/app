import{r as t}from"./index.js";import{a as u}from"./itbmsSchema.js";import{T as x}from"./index18.js";import{E as p}from"./index52.js";const d=()=>{const{fetcher:e}=t.exports.useContext(u),[,,,,o]=e,{pagination:s}=t.exports.useContext(x),{currentValue:r}=s,[,n]=r,{fetcher:a,fetcherProcesar:c}=t.exports.useContext(p),[,,,,,l]=a,[,,,,,m]=c;return{handleClose:t.exports.useCallback(()=>{n(null),l(),m(),o(null)},[])}};export{d as u};
