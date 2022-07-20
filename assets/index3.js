import{r as e,b as n,A as d,a2 as _,j as s,F as m,a as o}from"./index.js";import{H as p}from"./HeaderTitle.js";import{L as t}from"./Loader.js";import"./Typography.js";import"./Divider.js";import"./Grid.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";const u="_container_6qzb2_1",h="_column_6qzb2_5",b="_row_6qzb2_11",x="_right_6qzb2_17",f="_dashboard_6qzb2_21";var r={container:u,column:h,row:b,right:x,dashboard:f};const v=e.exports.lazy(()=>n(()=>import("./Menu.js"),["assets/Menu.js","assets/Menu.css","assets/index.js","assets/index14.css","assets/PersonAddDisabled.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useId.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/InsertDriveFile.js","assets/AssignmentTurnedIn.js","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/isHostComponent.js","assets/Grow.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal.js","assets/Close2.js","assets/DialogTitle.js","assets/dialogTitleClasses.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Fade.js","assets/Modal2.js","assets/Paper.js","assets/IconButton.js","assets/ButtonBase.js","assets/Warning.js","assets/Error.js","assets/CheckCircle.js","assets/DialogContent.js","assets/DialogActions.js","assets/LoadingButton.js","assets/Button.js","assets/SelectedCard.js","assets/useFetcherEarly.js"])),z=e.exports.lazy(()=>n(()=>import("./GoodDay.js"),["assets/GoodDay.js","assets/GoodDay.css","assets/index.js","assets/index14.css"])),l=e.exports.lazy(()=>n(()=>import("./PercentualCard.js").then(function(a){return a.a}),["assets/PercentualCard.js","assets/index.js","assets/index14.css","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js"])),P=()=>{const{authState:a}=e.exports.useContext(d),{tipo:c}=a,i=_("(max-width:900px)");return s(m,{children:[o(p,{message:"Inicio"}),s("div",{className:`${r.container} ${r.row}`,children:[s("div",{className:`${r.right} ${r.column}`,children:[o(e.exports.Suspense,{fallback:o(t,{}),children:o(z,{})}),i&&o("div",{className:`${r.dashboard} ${r.column}`,children:o(e.exports.Suspense,{fallback:o(t,{}),children:o(l,{})})}),o(e.exports.Suspense,{fallback:o(t,{}),children:o(v,{})})]}),!i&&c&&c!=="Mensajero"&&o("div",{className:`${r.dashboard} ${r.column}`,children:o(e.exports.Suspense,{fallback:o(t,{}),children:o(l,{})})})]})]})};export{P as default};
