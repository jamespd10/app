var V=Object.defineProperty,N=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var L=(a,t,o)=>t in a?V(a,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[t]=o,d=(a,t)=>{for(var o in t||(t={}))U.call(t,o)&&L(a,o,t[o]);if(_)for(var o of _(t))A.call(t,o)&&L(a,o,t[o]);return a},m=(a,t)=>N(a,T(t));import{r as s,ab as P,a as n,b as B}from"./index.js";import{u as D}from"./useFirstFetch.js";import{L as H}from"./Loader.js";import"./BootstrapTooltip.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import"./Modal.js";import"./SelectedCard.js";import{u as M}from"./useStepper.js";import{s as W}from"./agregarSchema.js";import{u as q}from"./useLocalStorage.js";import{a as w}from"./array.js";const R=s.exports.createContext({}),G=({children:a})=>{const{id:t,cliente:o}=P(),{loading:e,value:i}=D({url:`/admin/negocios/${t}/${o}/last-itbms`});return n(R.Provider,{value:{loading:e,value:i},children:a})},J=s.exports.createContext({}),K=({children:a})=>{var f,v;const{id:t,cliente:o}=P(),[e,i,I]=q(`itbms-${t}-${o}`),{value:r,loading:z}=s.exports.useContext(R),u=W,{activeStep:E,form:c,handleBack:$,handleNextStep:C,isLoading:j,res:l,modalState:y,setHide:O,handleSubmit:k,modalError:F}=M({schema:u,fields:[{names:Object.keys(u.fields)}],url:`/admin/negocios/${t}/${o}/add-itbms`,defaultValues:m(d({},e),{retenciones:(f=e==null?void 0:e.retenciones)!=null?f:[{texto:"",valor:""}],gastos:(v=e==null?void 0:e.gastos)!=null?v:[{texto:"",valor:"",nombre:"",ruc:"",dv:""}]})}),p=w({control:c.control});return s.exports.useEffect(()=>{(()=>i(p))()},[p]),s.exports.useEffect(()=>{(()=>{(l==null?void 0:l.status)===201&&I()})()},[l]),s.exports.useEffect(()=>{(()=>{var x,h,g,S;r&&r.status===201&&r.data&&c.reset(m(d({},e),{retenciones:(x=e==null?void 0:e.retenciones)!=null?x:[{texto:"",valor:""}],gastos:(h=e==null?void 0:e.gastos)!=null?h:[{texto:"",valor:"",nombre:"",ruc:"",dv:""}],acumulado:((g=e==null?void 0:e.acumulado)!=null?g:r.data.itbms&&Number(r.data.itbms.total)<=0)?(S=r.data.itbms)==null?void 0:S.total:void 0}))})()},[r,z]),n(J.Provider,{value:{activeStep:E,form:c,handleBack:$,handleNextStep:C,isLoading:j,res:l,modalState:y,setHide:O,handleSubmit:k,modalError:F},children:a})},Q=s.exports.lazy(()=>B(()=>import("./FormRealizar.js"),["assets/FormRealizar.js","assets/index.js","assets/index3.css","assets/StepperForm.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/Grid.js","assets/Typography.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/SelectedCard.js","assets/ButtonBase.js","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/LoadingButton.js","assets/Backdrop.js","assets/Modal2.js","assets/Paper.js","assets/Button.js","assets/IconButton.js","assets/Error.js","assets/Box.js","assets/HeaderTitle.js","assets/Divider.js","assets/Loader.js","assets/array.js","assets/upperFirst.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/useHttpService.js","assets/useStepper.js","assets/useFetch.js","assets/agregarSchema.js","assets/regex.js","assets/Lazy.js","assets/useLocalStorage.js"])),X=()=>n(G,{children:n(K,{children:n(s.exports.Suspense,{fallback:n(H,{}),children:n(Q,{})})})});var me=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"}));export{R as L,J as R,me as i};
