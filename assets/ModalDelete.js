import{aj as u,j as x,F as g,a as r}from"./index.js";import"./BootstrapTooltip.js";import{u as F}from"./useFetch.js";import"./jwt-decode.esm.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import{B as f}from"./BackgroundLoader.js";import h from"./Modal.js";import"./platform.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./isHostComponent.js";import"./Grow.js";import"./useHttpService.js";import"./useModal.js";import"./Backdrop.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./LoadingButton.js";import"./Modal2.js";import"./Paper.js";import"./Typography.js";import"./Button.js";import"./ButtonBase.js";import"./IconButton.js";import"./Error.js";const W=({id:a,modalState:m,setHide:i,setOpen:s})=>{var o,e;const{isLoading:p,send:n,response:t,reset:c}=F(),l=async()=>{i(),await n({url:`/admin/declaraciones-municipales/${a}/delete`,method:"POST"}),s()},d=u();return x(g,{children:[r(f,{open:p}),r(h,{state:m,setHide:()=>{i(),c(),t&&t.status===201&&d("/declaraciones-municipales",{replace:!0})},type:t&&t.status===201?"SUCCESS":"ERROR",title:"\xA1Atenci\xF3n!",actionButton:t?void 0:{text:"Eliminar",actionFunction:async()=>await l()},body:t?t&&t.status===201?(o=t.data)==null?void 0:o.message:(e=t.error)==null?void 0:e.message:"\xBFRealmente desea eliminar la declaraci\xF3n?"})]})};export{W as default};
