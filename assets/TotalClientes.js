import{j as e,a as t}from"./index.js";import{u as s}from"./useFirstFetch.js";import{C as l,P as n,T as d,a as m,b as a,s as c,w as u,e as p,L as C}from"./colors.js";import{C as h}from"./Card.js";import{C as f}from"./CardContent.js";import{G as i}from"./Grid.js";import"./useAsyncRetry.js";import"./useHttpService.js";import"./Typography.js";import"./upperFirst.js";import"./index11.js";import"./Paper.js";const L=()=>{const{loading:o,value:r}=s({url:"/admin/dashboard/count/clientes"});return e(h,{variant:"outlined",sx:{width:"100%"},children:[t(l,{title:"Total de clientes por estado"}),t(f,{children:t(i,{container:!0,justifyContent:"center",children:t(i,{item:!0,children:e(n,{width:300,height:300,children:[t(d,{}),e(m,{data:!o&&r&&r.status===201?r.data:void 0,dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",outerRadius:60,fill:"#8884d8",label:!0,startAngle:-270,children:[t(a,{fill:c}),t(a,{fill:u}),t(a,{fill:p})]}),t(C,{})]})})})})]})};export{L as default};
