import{u as m,j as i,r as s,a as o,_ as l,b as p}from"./index.js";import{C as u}from"./ContentProvider.js";import{s as c}from"./App.module.js";import{G as b}from"./GlobalStyles.js";import"./useModal.js";const f=(e,t)=>l({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&{colorScheme:e.palette.mode}),g=e=>l({color:e.palette.text.primary},e.typography.body1,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}}),h=(e,t=!1)=>{var n,a;let r={html:f(e,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:l({margin:0},g(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})};const d=(n=e.components)==null||(a=n.MuiCssBaseline)==null?void 0:a.styleOverrides;return d&&(r=[r,d]),r};function y(e){const t=m({props:e,name:"MuiCssBaseline"}),{children:n,enableColorScheme:a=!1}=t;return i(s.exports.Fragment,{children:[o(b,{styles:r=>h(r,a)}),n]})}const _=s.exports.lazy(()=>p(()=>import("./Navbar.js").then(function(e){return e.N}),["assets/Navbar.js","assets/Navbar.css","assets/index.js","assets/index5.css","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/ContentProvider.js","assets/useModal.js","assets/App.module.js","assets/App.module.css","assets/IconButton.js","assets/ButtonBase.js","assets/Typography.js"])),x=s.exports.lazy(()=>p(()=>import("./Sidebar.js"),["assets/Sidebar.js","assets/index.js","assets/index5.css","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/PersonAddDisabled.js","assets/InsertDriveFile.js","assets/AssignmentTurnedIn.js","assets/Help.js","assets/PriceCheck.js","assets/Paid.js","assets/Search.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/appendOwnerState.js","assets/isHostComponent.js","assets/Grow.js","assets/App.module.js","assets/App.module.css","assets/Badge.js","assets/Assignment.js","assets/WorkspacePremium.js","assets/Divider.js"])),M=({children:e})=>o(u,{children:i("div",{className:c.page,children:[o(s.exports.Suspense,{fallback:o("div",{}),children:o(_,{})}),i("div",{className:c.content,children:[o(s.exports.Suspense,{fallback:o("div",{}),children:o(x,{})}),o(y,{}),e]})]})});export{M as default};
