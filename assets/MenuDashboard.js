import{S as m}from"./platform.js";import{a as e,X as h,j as n,B as f}from"./index.js";import{C as p}from"./Card.js";import{C as g}from"./CardContent.js";import{T as u}from"./Typography.js";import{c as C,i as b,r as x}from"./jsx-runtime_commonjs-proxy.js";import"./jwt-decode.esm.js";import{u as y}from"./useFirstFetch.js";import{G as o}from"./Grid.js";import"./ButtonBase.js";import"./useIsFocusVisible.js";import"./Paper.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useAsyncRetry.js";import"./useHttpService.js";const a=t=>{var r;return e(p,{style:{backgroundColor:t.backgroundColor},variant:"outlined",children:e(m,{component:h,to:t.route,children:e(g,{children:n("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[n("div",{style:{flex:1,width:1},children:[e(u,{variant:"subtitle1",noWrap:!0,children:t.title}),e(u,{variant:"h4",noWrap:!0,children:t.numbers})]}),e("div",{style:{flex:1,width:1,textAlign:"right"},children:e(f,{component:t.icon,style:{fontSize:(r=t.size)!=null?r:60,color:t.color}})})]})})})})};var d={},j=b.exports;Object.defineProperty(d,"__esModule",{value:!0});var i=d.default=void 0,v=j(C),z=x,M=(0,v.default)((0,z.jsx)("path",{d:"M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"}),"BarChart");i=d.default=M;const H=()=>{var s,c,l;const{loading:t,value:r}=y({url:"/admin/dashboard/count"});return n(o,{container:!0,spacing:1,justifyContent:"center",children:[e(o,{item:!0,xs:12,md:4,zeroMinWidth:!0,children:e(a,{route:"/dashboard",title:"Total de usuarios",numbers:t?"Cargando...":!t&&r&&(r==null?void 0:r.status)!==201?"Error...":`${(s=r==null?void 0:r.data)==null?void 0:s.usuarios}`,icon:i,color:"red"})}),e(o,{item:!0,xs:12,md:4,zeroMinWidth:!0,children:e(a,{route:"/dashboard",title:"Total de clientes",numbers:t?"Cargando...":!t&&r&&(r==null?void 0:r.status)!==201?"Error...":`${(c=r==null?void 0:r.data)==null?void 0:c.clientes}`,icon:i,color:"green"})}),e(o,{item:!0,xs:12,md:4,zeroMinWidth:!0,children:e(a,{route:"/dashboard",title:"Total de negocios",numbers:t?"Cargando...":!t&&r&&(r==null?void 0:r.status)!==201?"Error...":`${(l=r==null?void 0:r.data)==null?void 0:l.negocios}`,icon:i,color:"blue"})})]})};export{H as default};
