import{ak as u,j as x,F as g,a as e}from"./index.js";import"./BootstrapTooltip.js";import{u as F}from"./useFetch.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import{B as f}from"./BackgroundLoader.js";import h from"./Modal.js";import"./SelectedCard.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./appendOwnerState.js";import"./isHostComponent.js";import"./Grow.js";import"./useHttpService.js";import"./useModal.js";import"./Backdrop.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./ModalTransition.js";import"./Modal2.js";import"./Paper.js";import"./Typography.js";import"./IconButton.js";import"./ButtonBase.js";import"./Error.js";import"./DialogContent.js";import"./LoadingButton.js";import"./Button.js";const Y=({id:a,modalState:m,setHide:i,setOpen:p})=>{var o,r;const{isLoading:s,send:n,response:t,reset:c}=F(),l=async()=>{i(),await n({url:`/admin/declaraciones-municipales/${a}/delete`,method:"POST"}),p()},d=u();return x(g,{children:[e(f,{open:s}),e(h,{state:m,setHide:()=>{i(),c(),t&&t.status===201&&d("/declaraciones-municipales",{replace:!0})},type:t&&t.status===201?"SUCCESS":"ERROR",title:"\xA1Atenci\xF3n!",actionButton:t?void 0:{text:"Eliminar",actionFunction:async()=>await l()},body:t?t&&t.status===201?(o=t.data)==null?void 0:o.message:(r=t.error)==null?void 0:r.message:"\xBFRealmente desea eliminar la declaraci\xF3n?"})]})};export{Y as default};
