import v from"./CustomSpeedDial.js";import{r as R,j as d,F as g,a as u}from"./index.js";import{U as A}from"./index19.js";import{c as F,i as S,r as O}from"./jsx-runtime_commonjs-proxy.js";import{u as _}from"./useFetch.js";import{u as j}from"./useModal.js";import"./jwt-decode.esm.js";import{M as I}from"./Modal2.js";import"./Assignment.js";import"./FabButtonAction.js";import"./react-is.production.min.js";import"./AssignmentRounded.js";import"./ButtonBase.js";import"./useIsFocusVisible.js";import"./useControlled.js";import"./Tooltip.js";import"./Portal.js";import"./isHostComponent.js";import"./Grow.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import"./Backdrop.js";import"./Stack.js";import"./extendSxProp.js";import"./createSvgIcon.js";import"./Loader.js";import"./Grid.js";import"./Typography.js";import"./BootstrapTooltip.js";import"./platform.js";import"./useFirstFetch.js";import"./useAsyncRetry.js";import"./useHttpService.js";import"./constants.js";import"./Close2.js";import"./IconButton.js";import"./Error.js";import"./Modal.js";import"./Paper.js";import"./Button.js";var e={},M=S.exports;Object.defineProperty(e,"__esModule",{value:!0});var l=e.default=void 0,P=M(F),y=O,B=(0,P.default)((0,y.jsx)("path",{d:"m17.66 9.53-7.07 7.07-4.24-4.24 1.41-1.41 2.83 2.83 5.66-5.66 1.41 1.41zM4 12c0-2.33 1.02-4.42 2.62-5.88L9 8.5v-6H3l2.2 2.2C3.24 6.52 2 9.11 2 12c0 5.19 3.95 9.45 9 9.95v-2.02c-3.94-.49-7-3.86-7-7.93zm18 0c0-5.19-3.95-9.45-9-9.95v2.02c3.94.49 7 3.86 7 7.93 0 2.33-1.02 4.42-2.62 5.88L15 15.5v6h6l-2.2-2.2c1.96-1.82 3.2-4.41 3.2-7.3z"}),"PublishedWithChanges");l=e.default=B;const vt=()=>{var s,m,p,n;const{value:r,retry:o}=R.exports.useContext(A),{isLoading:f,send:x,response:t,reset:i}=_(),{modalState:h,setHide:a,setOpen:C}=j();return d(g,{children:[u(v,{titles:[...((s=r==null?void 0:r.data)==null?void 0:s.estado)==="ACTIVO"?["CANCELAR"]:["ACTIVAR"]],icons:[l],onPresses:[()=>C()]}),d(I,{state:h,type:t&&t.status===201?"SUCCESS":"ERROR",title:"\xA1Atenci\xF3n!",setHide:()=>{a(),i(),t&&t.status===201&&o()},cancelBotton:{text:"Cerrar",actionFunction:()=>{a(),i(),t&&t.status===201&&o()}},actionButton:t?void 0:{text:"Ok",actionFunction:async()=>{var c;await x({url:`/admin/usuarios/${(c=r==null?void 0:r.data)==null?void 0:c.id}/change-state`,method:"POST"})},isLoading:f},children:[!t&&u("span",{children:((m=r==null?void 0:r.data)==null?void 0:m.estado)==="ACTIVO"?"\xBFRealmente desea marcar el usuario como cancelado?":"\xBFRealmente desea activar el usuario?"}),t&&((p=t.data)==null?void 0:p.message),t&&((n=t.error)==null?void 0:n.message)]})]})};export{vt as default};
