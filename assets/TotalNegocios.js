import{j as a,a as t}from"./index.js";import{u as s}from"./useFirstFetch.js";import{C as l,P as d,T as n,a as m,b as e,s as c,e as u,L as p}from"./colors.js";import{C as h}from"./Card.js";import{C}from"./CardContent.js";import{G as o}from"./Grid.js";import"./useAsyncRetry.js";import"./useHttpService.js";import"./Typography.js";import"./upperFirst.js";import"./index11.js";import"./Paper.js";const K=()=>{const{loading:i,value:r}=s({url:"/admin/dashboard/count/negocios"});return a(h,{variant:"outlined",sx:{width:"100%"},children:[t(l,{title:"Total de negocios por estado"}),t(C,{children:t(o,{container:!0,justifyContent:"center",children:t(o,{item:!0,children:a(d,{width:300,height:300,children:[t(n,{}),a(m,{data:!i&&r&&r.status===201?r.data:void 0,dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",outerRadius:60,fill:"#8884d8",label:!0,startAngle:-270,children:[t(e,{fill:c}),t(e,{fill:u})]}),t(p,{})]})})})})]})};export{K as default};
