import{f as a}from"./date.helper.js";import{a as e,F as l,j as t,an as o}from"./index.js";import{P as d}from"./Paper.js";import{T as n}from"./Typography.js";const y=r=>{const i=new Date(Date.now());return e(l,{children:t(d,{variant:"outlined",style:{padding:10,marginTop:20},children:[t("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",flexWrap:"wrap"},children:[e(n,{variant:"h5",children:r.nombre_negocio}),t(n,{variant:"h5",children:[e("strong",{children:"A\xF1o: "}),a(`${i.getMonth()===11&&i.getDate()>15?o(i,1):i}`,"yyyy")]})]}),e("hr",{}),t("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[t(n,{variant:"subtitle1",children:[e("strong",{children:"RUC:"})," ",r.ruc]}),t(n,{variant:"subtitle1",style:{marginLeft:10},children:[e("strong",{children:"DV:"})," ",r.dv]})]}),e("hr",{}),e("div",{style:{display:"flex",flexDirection:"row"},children:e(n,{variant:"subtitle1",children:e("strong",{children:r.nom_cliente})})}),e("hr",{}),e("div",{style:{display:"flex",flexDirection:"row"},children:t(n,{variant:"subtitle1",children:[e("strong",{children:"No. contribuyente:"})," ",r.no_contribuyente]})})]})})};export{y as default};
