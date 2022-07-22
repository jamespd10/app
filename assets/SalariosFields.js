import{r as g,j as x,a,ay as y,F}from"./index.js";import{a as C}from"./FormLiquidacionProvider.js";import{T as w}from"./TextDecimalInput.js";import{A as f}from"./Alert.js";import"./useForm.js";import"./object.helper.js";import"./regex.js";import"./array.js";import"./usePrint.js";import"./index23.js";import"./TextInput.js";import"./TextField.js";import"./useFormControl.js";import"./useControlled.js";import"./useId.js";import"./formControlState.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./Fade.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";import"./emotion-react.browser.esm.js";import"./CustomDecimal.js";import"./react-number-format.es.js";import"./string.helper.js";import"./Close.js";import"./IconButton.js";import"./ButtonBase.js";import"./useIsFocusVisible.js";const M="_container_h3fvc_1",N="_title_h3fvc_11",j="_fields_h3fvc_16",q="_item_h3fvc_23";var t={container:M,title:N,fields:j,item:q};const pi=()=>{var m;const{form:h}=g.exports.useContext(C),{formState:u,onInputChange:_,errors:i}=h,{salarios:v,fecha_inicio:e,fecha_liquidacion:s}=u;return e!==""&&s!==""?x("div",{className:t.container,children:[a("span",{className:t.title,children:"Salarios mensuales"}),i&&(i==null?void 0:i.salarios)&&a(f,{variant:"outlined",color:"warning",severity:"warning",children:((m=i.salarios)==null?void 0:m.message)||"Favor ingresar los salarios"}),e!==""&&s!==""?a("div",{className:t.fields,children:v.map((o,r)=>{var n,l,p,c,d;return a(w,{className:t.item,name:`salarios.${r}.salario`,label:y(o.mes,"MMMM-yyyy").toUpperCase(),size:"small",value:o.salario,onChange:_,error:!!((l=(n=i==null?void 0:i.salarios)==null?void 0:n[r])!=null&&l.salario),helperText:(d=(c=(p=i==null?void 0:i.salarios)==null?void 0:p[r])==null?void 0:c.salario)==null?void 0:d.message},o.mes)})}):a(f,{variant:"outlined",color:"warning",severity:"warning",children:"Favor seleccionar la fecha de inicio de labores y la fecha de liquidaci\xF3n"})]}):a(F,{})};export{pi as default};
