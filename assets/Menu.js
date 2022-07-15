import{r,b as h,A as v,j as x,a as e,F as b}from"./index.js";import{d as z}from"./PersonAddDisabled.js";import{d as j}from"./InsertDriveFile.js";import{d as P}from"./AssignmentTurnedIn.js";import{c,i as m,r as d}from"./jsx-runtime_commonjs-proxy.js";import{L as i}from"./Loader.js";import"./BootstrapTooltip.js";import"./SpeedDial.module.js";import"./Modal.js";import"./SelectedCard.js";import{u as S}from"./useFetcherEarly.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./Grid.js";import"./Typography.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./isHostComponent.js";import"./Grow.js";import"./Close2.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Fade.js";import"./Modal2.js";import"./Paper.js";import"./IconButton.js";import"./ButtonBase.js";import"./CheckCircle.js";import"./DialogContent.js";import"./DialogActions.js";import"./LoadingButton.js";import"./Button.js";var l={},$=m.exports;Object.defineProperty(l,"__esModule",{value:!0});var u=l.default=void 0,q=$(c),M=d,T=(0,q.default)((0,M.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"}),"MonetizationOn");u=l.default=T;var n={},g=m.exports;Object.defineProperty(n,"__esModule",{value:!0});var f=n.default=void 0,k=g(c),E=d,C=(0,k.default)((0,E.jsx)("path",{d:"M2.5 19h19v2h-19v-2zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 2.59 4.49s7.12-1.9 16.57-4.43c.81-.23 1.28-1.05 1.07-1.85z"}),"FlightTakeoff");f=n.default=C;const N="_parent_3p30a_1",R="_child_3p30a_7";var a={parent:N,child:R};const s=r.exports.lazy(()=>h(()=>import("./CardHome.js"),["assets/CardHome.js","assets/SelectedCard.js","assets/index.js","assets/index2.css","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/useIsFocusVisible.js","assets/Card.js","assets/Paper.js","assets/CardContent.js","assets/Stack.js","assets/Typography.js"])),he=()=>{const{authState:_}=r.exports.useContext(v),{tipo:p}=_,[o,t]=S("/admin/dashboard/count/home");return p&&p!=="Mensajero"?x("div",{className:a.parent,children:[e(r.exports.Suspense,{fallback:e(i,{}),children:e(s,{className:a.child,loading:o,title:"Contratos",numbers:t?[t.contratos.total,t.contratos.pendientes]:["Error..."],titles:["Total","Pendientes"],size:24,icon:j,route:"/contratos"})}),e(r.exports.Suspense,{fallback:e(i,{}),children:e(s,{className:a.child,loading:o,title:"Liquidaciones",numbers:t?[t.liquidaciones.total,t.liquidaciones.pendientes]:["Error..."],titles:["Total","Pendientes"],size:24,icon:z,route:"/liquidaciones"})}),e(r.exports.Suspense,{fallback:e(i,{}),children:e(s,{className:a.child,loading:o,title:"Planillas",numbers:t?[t.planillas.total,t.planillas.pendientes]:["Error..."],titles:["Total","Pendientes"],size:24,icon:P,route:"/planillas"})}),e(r.exports.Suspense,{fallback:e(i,{}),children:e(s,{className:a.child,loading:o,title:"D\xE9cimo tercer mes",numbers:[0,0],titles:["Total","Pendientes"],size:24,icon:u,route:"/decimos"})}),e(r.exports.Suspense,{fallback:e(i,{}),children:e(s,{className:a.child,loading:o,title:"Vacaciones",numbers:[0,0],titles:["Total","Pendientes"],size:24,icon:f,route:"/vacaciones"})})]}):e(b,{})};export{he as default};
