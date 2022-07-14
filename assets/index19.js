var k=Object.defineProperty,V=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var _=(a,t,o)=>t in a?k(a,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[t]=o,i=(a,t)=>{for(var o in t||(t={}))T.call(t,o)&&_(a,o,t[o]);if(S)for(var o of S(t))U.call(t,o)&&_(a,o,t[o]);return a},d=(a,t)=>V(a,N(t));import{r as s,ap as A,a as r,b as B}from"./index.js";import{L as D,a as F}from"./LastItbmsProvider.js";import{L as H}from"./Loader.js";import"./BootstrapTooltip.js";import"./SpeedDial.module.js";import"./Modal.js";import"./SelectedCard.js";import{u as M}from"./useStepper.js";import{s as W}from"./agregarSchema.js";import{u as q}from"./useLocalStorage.js";import{b as w}from"./yup.module.js";const G=s.exports.createContext({}),J=({children:a})=>{var p,f;const{id:t,cliente:o}=A(),[e,L,R]=q(`itbms-${t}-${o}`),[I,n]=s.exports.useContext(D),m=W,{activeStep:P,form:c,handleBack:z,handleNextStep:E,isLoading:j,res:l,modalState:y,setHide:C,handleSubmit:O,modalError:$}=M({schema:m,fields:[{names:Object.keys(m.fields)}],url:`/admin/negocios/${t}/${o}/add-itbms`,defaultValues:d(i({},e),{retenciones:(p=e==null?void 0:e.retenciones)!=null?p:[{texto:"",valor:""}],gastos:(f=e==null?void 0:e.gastos)!=null?f:[{texto:"",valor:"",nombre:"",ruc:"",dv:""}]})}),u=w({control:c.control});return s.exports.useEffect(()=>{(()=>L(u))()},[u]),s.exports.useEffect(()=>{(()=>{(l==null?void 0:l.status)===201&&R()})()},[l]),s.exports.useEffect(()=>{(()=>{var v,x,h,g;n&&c.reset(d(i({},e),{retenciones:(v=e==null?void 0:e.retenciones)!=null?v:[{texto:"",valor:""}],gastos:(x=e==null?void 0:e.gastos)!=null?x:[{texto:"",valor:"",nombre:"",ruc:"",dv:""}],acumulado:((h=e==null?void 0:e.acumulado)!=null?h:n.itbms&&Number(n.itbms.total)<=0)?(g=n.itbms)==null?void 0:g.total:void 0}))})()},[n,I]),r(G.Provider,{value:{activeStep:P,form:c,handleBack:z,handleNextStep:E,isLoading:j,res:l,modalState:y,setHide:C,handleSubmit:O,modalError:$},children:a})},K=s.exports.lazy(()=>B(()=>import("./FormRealizar.js"),["assets/FormRealizar.js","assets/index.js","assets/index7.css","assets/StepperForm.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/Grid.js","assets/Typography.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/SelectedCard.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Fade.js","assets/Modal2.js","assets/Paper.js","assets/IconButton.js","assets/CheckCircle.js","assets/DialogContent.js","assets/DialogActions.js","assets/LoadingButton.js","assets/Button.js","assets/CircularProgress.js","assets/Box.js","assets/HeaderTitle.js","assets/Divider.js","assets/Loader.js","assets/yup.module.js","assets/LastItbmsProvider.js","assets/useFetcherEarly.js","assets/useStepper.js","assets/useFetch.js","assets/useHttpService.js","assets/useModal.js","assets/agregarSchema.js","assets/regex.js","assets/array.js","assets/upperFirst.js","assets/Lazy.js","assets/useLocalStorage.js"])),Q=()=>r(F,{children:r(J,{children:r(s.exports.Suspense,{fallback:r(H,{}),children:r(K,{})})})});var ie=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"}));export{G as R,ie as i};
