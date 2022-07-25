import{u,j as i,r as s,a as o,_ as l,b as p}from"./index.js";import{s as d}from"./App.module.js";import{G as m}from"./GlobalStyles.js";import"./emotion-react.browser.esm.js";const b=(e,t)=>l({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&{colorScheme:e.palette.mode}),f=e=>l({color:e.palette.text.primary},e.typography.body1,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}}),g=(e,t=!1)=>{var a,n;let r={html:b(e,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:l({margin:0},f(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})};const c=(a=e.components)==null||(n=a.MuiCssBaseline)==null?void 0:n.styleOverrides;return c&&(r=[r,c]),r};function y(e){const t=u({props:e,name:"MuiCssBaseline"}),{children:a,enableColorScheme:n=!1}=t;return i(s.exports.Fragment,{children:[o(m,{styles:r=>g(r,n)}),a]})}const h=s.exports.lazy(()=>p(()=>import("./Navbar.js").then(function(e){return e.N}),["assets/Navbar.js","assets/Navbar.css","assets/index.js","assets/index17.css","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useId.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/App.module.js","assets/App.module.css","assets/Typography.js"])),_=s.exports.lazy(()=>p(()=>import("./Sidebar.js"),["assets/Sidebar.js","assets/index.js","assets/index17.css","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useId.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/PersonAddDisabled.js","assets/InsertDriveFile.js","assets/AssignmentTurnedIn.js","assets/Help.js","assets/PriceCheck.js","assets/Paid.js","assets/Search.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/isHostComponent.js","assets/Grow.js","assets/App.module.js","assets/App.module.css","assets/MenuOpen.js","assets/Assignment.js","assets/WorkspacePremium.js","assets/Divider.js"])),C=({children:e})=>i("div",{className:d.page,children:[o(s.exports.Suspense,{fallback:o("div",{}),children:o(h,{})}),i("div",{className:d.content,children:[o(s.exports.Suspense,{fallback:o("div",{}),children:o(_,{})}),o(y,{}),e]})]});export{C as default};
