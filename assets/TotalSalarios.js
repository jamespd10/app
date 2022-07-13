import{r as x,a as t,F as y,j as T}from"./index.js";import{u as b,c as D}from"./yup.module.js";import{D as F}from"./DecimalInput.js";import{a as _,f as S,b as $,c as v,s as w,e as j}from"./date.helper.js";import{G as s}from"./Grid.js";import{P as q}from"./Paper.js";import{T as I}from"./Typography.js";import"./TextInput.js";import"./TextField.js";import"./useFormControl.js";import"./useControlled.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./isHostComponent.js";import"./Portal.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./GlobalStyles.js";import"./emotion-react.browser.esm.js";import"./CustomDecimal.js";import"./react-number-format.es.js";import"./string.helper.js";import"./regex.js";import"./CircularProgress.js";import"./index30.js";const ir=({salarios:a})=>{const{formState:i,control:g,watch:p}=b(),o=p("fecha_liquidacion"),c=p("fecha_ini"),h=p("is_total_salarios"),{fields:l,append:u,remove:f}=D({control:g,name:"total_salarios"});return x.exports.useEffect(()=>{const n=()=>{if(l.length>0)for(let e=l.length-1;e>=0;e--)f(e)},r=()=>{if(o&&h==="No"){const e=_(new Date(c),o);for(let m=0;m<e;m++){const d=a?v(a.map(M=>M.mes),w(o,{months:m})):-1;u({salario:d>-1&&a?a[d].salario:void 0,mes:j(o,m,"yyyy-MM-dd"),id_sal:d>-1&&a?a[d].id_salario:null})}}};n(),r()},[c,u,f,l.length,o,h,a]),t(y,{children:o&&h==="No"&&_(new Date(c),o)>0&&t(s,{item:!0,xs:12,children:t(q,{variant:"outlined",sx:{padding:1},children:T(s,{container:!0,item:!0,xs:12,spacing:1,direction:"column",children:[t(s,{item:!0,xs:12,children:t(I,{children:"Total de salarios mensuales desde el incio del contrato"})}),t(s,{item:!0,xs:12,container:!0,spacing:1,children:l.map((n,r)=>{var e;return t(x.exports.Fragment,{children:t(s,{item:!0,xs:12,md:3,children:t(F,{name:`total_salarios.${r}.salario`,label:`${S(n.mes,"MMMM")} del ${$(o,r)}`,required:!0,fullWidth:!0,error:!!(i.errors.total_salarios&&i.errors.total_salarios[r]&&i.errors.total_salarios[r].salario),helperText:i.errors.total_salarios&&i.errors.total_salarios[r]&&i.errors.total_salarios[r].salario?(e=i.errors.total_salarios[r].salario)==null?void 0:e.message:void 0})})},`${n.id}${r}`)})})]})})})})};export{ir as default};
