import{r as t,a as e,b as s,A as u,j as c}from"./index.js";import{L as a}from"./Loader.js";const i=t.exports.createContext({}),p=({children:o})=>{const[r,n]=t.exports.useState(null);return e(i.Provider,{value:{usuario:r,setUsuario:l=>n(l)},children:o})},d=t.exports.lazy(()=>s(()=>import("./index56.js"),["assets/index56.js","assets/index.js","assets/index5.css","assets/Loader.js","assets/Grid.js","assets/Typography.js"])),_=t.exports.lazy(()=>s(()=>import("./Autocomplete2.js"),["assets/Autocomplete2.js","assets/index.js","assets/index5.css","assets/AutocompleteServer.js","assets/TextInput.js","assets/TextField.js","assets/FormHelperText.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/useFetch.js","assets/useHttpService.js","assets/Autocomplete.js","assets/Close.js","assets/IconButton.js","assets/ButtonBase.js","assets/useIsFocusVisible.js","assets/Popper.js","assets/Chip.js","assets/Loader.js","assets/Grid.js","assets/Typography.js"])),x=()=>{const{authState:o}=t.exports.useContext(u),{tipo:r}=o;return c(p,{children:[r&&["Super","Admin"].includes(r)&&e(t.exports.Suspense,{fallback:e(a,{}),children:e(_,{})}),e(t.exports.Suspense,{fallback:e(a,{}),children:e(d,{})})]})};var v=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"}));export{i as P,v as a};
