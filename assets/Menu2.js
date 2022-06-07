import{r as a,q as f,j as _,a as e}from"./index.js";import{d as v}from"./PersonAddDisabled.js";import{d as h}from"./InsertDriveFile.js";import{d as x}from"./AssignmentTurnedIn.js";import{c,i as p,r as d}from"./jsx-runtime_commonjs-proxy.js";import{L as o}from"./Loader.js";import"./BootstrapTooltip.js";import"./jwt-decode.esm.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import"./Modal2.js";import"./platform.js";import{u as z}from"./useFetcherEarly.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./Grid.js";import"./extendSxProp.js";import"./Typography.js";import"./Tooltip.js";import"./Portal.js";import"./isHostComponent.js";import"./Grow.js";import"./useModal.js";import"./Close2.js";import"./LoadingButton.js";import"./Backdrop.js";import"./Modal.js";import"./Paper.js";import"./Button.js";import"./ButtonBase.js";import"./IconButton.js";import"./Error.js";var l={},b=p.exports;Object.defineProperty(l,"__esModule",{value:!0});var m=l.default=void 0,P=b(c),$=d,j=(0,P.default)((0,$.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"}),"MonetizationOn");m=l.default=j;var n={},q=p.exports;Object.defineProperty(n,"__esModule",{value:!0});var u=n.default=void 0,S=q(c),T=d,k=(0,S.default)((0,T.jsx)("path",{d:"M2.5 19h19v2h-19v-2zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 2.59 4.49s7.12-1.9 16.57-4.43c.81-.23 1.28-1.05 1.07-1.85z"}),"FlightTakeoff");u=n.default=k;const E="_parent_10rz6_1",M="_child_10rz6_13";var r={parent:E,child:M};const s=a.exports.lazy(()=>f(()=>import("./CardHome.js"),["assets/CardHome.js","assets/platform.js","assets/index.js","assets/index2.css","assets/ButtonBase.js","assets/useIsFocusVisible.js","assets/jwt-decode.esm.js","assets/Card.js","assets/Paper.js","assets/CardContent.js","assets/Stack.js","assets/extendSxProp.js","assets/Typography.js"])),ce=()=>{const[i,t]=z("/admin/dashboard/count/home");return _("div",{className:r.parent,children:[e(a.exports.Suspense,{fallback:e(o,{}),children:e(s,{className:r.child,loading:i,title:"Contratos",numbers:t?[t.contratos.total,t.contratos.pendientes]:["Error..."],titles:["Total","Pendientes"],size:24,icon:h,route:"/contratos"})}),e(a.exports.Suspense,{fallback:e(o,{}),children:e(s,{className:r.child,loading:i,title:"Liquidaciones",numbers:t?[t.liquidaciones.total,t.liquidaciones.pendientes]:["Error..."],titles:["Total","Pendientes"],size:24,icon:v,route:"/liquidaciones"})}),e(a.exports.Suspense,{fallback:e(o,{}),children:e(s,{className:r.child,loading:i,title:"Planillas",numbers:t?[t.planillas.total,t.planillas.pendientes]:["Error..."],titles:["Total","Pendientes"],size:24,icon:x,route:"/planillas"})}),e(a.exports.Suspense,{fallback:e(o,{}),children:e(s,{className:r.child,loading:i,title:"D\xE9cimo tercer mes",numbers:[0,0],titles:["Total","Pendientes"],size:24,icon:m,route:"/decimos"})}),e(a.exports.Suspense,{fallback:e(o,{}),children:e(s,{className:r.child,loading:i,title:"Vacaciones",numbers:[0,0],titles:["Total","Pendientes"],size:24,icon:u,route:"/vacaciones"})})]})};export{ce as default};
