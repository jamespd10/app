import{j as o,a as t}from"./index.js";import"./jwt-decode.esm.js";import{u as s}from"./useFirstFetch.js";import{C as l,P as d,T as n,a as m,b as a,s as c,e as u,L as p}from"./colors.js";import{C as h}from"./Card.js";import{C}from"./CardContent.js";import{G as e}from"./Grid.js";import"./useAsyncRetry.js";import"./useHttpService.js";import"./Typography.js";import"./upperFirst.js";import"./index7.js";import"./Paper.js";const L=()=>{const{loading:i,value:r}=s({url:"/admin/dashboard/count/negocios"});return o(h,{variant:"outlined",sx:{width:"100%"},children:[t(l,{title:"Total de negocios por estado"}),t(C,{children:t(e,{container:!0,justifyContent:"center",children:t(e,{item:!0,children:o(d,{width:300,height:300,children:[t(n,{}),o(m,{data:!i&&r&&r.status===201?r.data:void 0,dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",outerRadius:60,fill:"#8884d8",label:!0,startAngle:-270,children:[t(a,{fill:c}),t(a,{fill:u})]}),t(p,{})]})})})})]})};export{L as default};
