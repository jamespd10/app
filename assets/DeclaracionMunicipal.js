import{d as N}from"./Clear.js";import{L as T}from"./Loader.js";import{T as B}from"./TextInput.js";import{u as D,s as o}from"./facturaDashboard.js";import{f as n}from"./string.helper.js";import{C as c}from"./ChipState.js";import{z as f}from"./date.helper.js";import{ag as S,j as e,a as r,F as d,r as v}from"./index.js";import{P as p}from"./Paper.js";import{T as h}from"./Typography.js";import{I as A}from"./InputAdornment.js";import{I as P}from"./IconButton.js";import{D as i}from"./Divider.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./Grid.js";import"./extendSxProp.js";import"./TextField.js";import"./FormHelperText.js";import"./react-is.production.min.js";import"./Menu.js";import"./Modal.js";import"./Backdrop.js";import"./isHostComponent.js";import"./Portal.js";import"./Grow.js";import"./List.js";import"./GlobalStyles.js";import"./useAsyncRetry.js";import"./jwt-decode.esm.js";import"./useHttpService.js";import"./regex.js";import"./Error.js";import"./Chip.js";import"./ButtonBase.js";import"./index13.js";import"./index14.js";const vr=()=>{var g,u;const{id:x,cliente:b}=S(),{value:a,loading:m,setSearch:y,onClearSearch:_,onChange:F,inputValue:I}=D({url:`/admin/negocios/${x}/${b}/facturas/MUNICIPIO`});return e(p,{variant:"outlined",style:{padding:10,border:"3px solid red",minHeight:"100%"},children:[r(h,{variant:"h6",style:{marginBottom:10,fontWeight:"bold"},children:"\xDAltima declaraci\xF3n municipal"}),r("form",{onSubmit:t=>{t.preventDefault(),y(t.target[0].value)},children:r(B,{label:"Buscar por fecha. Ejm: 31-01-2020",fullWidth:!0,onChange:F,value:I,InputProps:{endAdornment:r(A,{position:"end",children:r(P,{onClick:_,children:r(N,{})})})}})}),m&&r(T,{}),!m&&a&&a.status!==201&&a.error&&r("div",{style:{display:"flex",justifyContent:"center",textAlign:"center"},children:r("strong",{children:a.error.message})}),!m&&a&&a.status===201&&a.data&&e("div",{style:{display:"flex",flexDirection:"column",marginTop:10},children:[e("div",{style:o,children:[r("strong",{children:"Fecha: "}),f(`${a.data.mes_correspondiente}`,"dd/MM/yy h:mm a")]}),r(i,{}),a.data.negocio_referencia&&e(d,{children:[e("div",{style:o,children:[r("strong",{children:"Negocio referencia: "}),a.data.negocio_referencia]}),r(i,{})]}),a.data.personal&&e(d,{children:[e("div",{style:o,children:[r("strong",{children:"Personal: "}),a.data.personal]}),r(i,{})]}),e("div",{style:o,children:[r("strong",{children:"Declaraci\xF3n municipal: "}),n(a.data.declaracion_municipal)]}),r(i,{}),a.data.actualizacion_nit>0&&e(d,{children:[e("div",{style:o,children:[r("strong",{children:"Actualizaci\xF3n de NIT: "}),n(a.data.actualizacion_nit)]}),r(i,{})]}),a.data.estados_financieros>0&&e(d,{children:[e("div",{style:o,children:[r("strong",{children:"Estados financieros: "}),n(a.data.estados_financieros)]}),r(i,{})]}),a.data.paz_salvo>0&&e(d,{children:[e("div",{style:o,children:[r("strong",{children:"Paz y salvo - impresi\xF3n: "}),n(a.data.paz_salvo)]}),r(i,{})]}),a.data.cierre>0&&e(d,{children:[e("div",{style:o,children:[r("strong",{children:"Cierre: "}),n(a.data.cierre)]}),r(i,{})]}),a.data.poder_notariado>0&&e(d,{children:[e("div",{style:o,children:[r("strong",{children:"Poder notariado: "}),n(a.data.poder_notariado)]}),r(i,{})]}),((g=a.data.otros)==null?void 0:g.length)>0&&e(p,{variant:"outlined",style:{padding:10,marginTop:10},children:[r(h,{variant:"h6",children:"Otros cobros"}),r(i,{}),a.data.otros.map((t,s)=>{var l;return e(v.exports.Fragment,{children:[e("div",{style:o,children:[e("strong",{children:[t.texto,": "]}),n(t.valor)]}),a&&a.data&&s<((l=a.data)==null?void 0:l.otros.length)-1&&r(i,{})]},t.id)})]}),e("div",{style:o,children:[r("strong",{children:"Total: "}),n(a.data.total)]}),r(i,{}),e("div",{style:o,children:[r("strong",{children:"Total cobrado: "}),n(a.data.total_cobrado)]}),r(i,{}),e("div",{style:o,children:[r("strong",{children:"Impresa: "}),r(c,{label:a.data.fecha_impresion?"SI":"NO",color:a.data.fecha_impresion?"success":"error"})]}),r(i,{}),e("div",{style:o,children:[r("strong",{children:"\xBFSe present\xF3 a la DGI?: "}),r(c,{label:Boolean(Number(a.data.presentada))?"SI":"NO",color:Boolean(Number(a.data.presentada))?"success":"error"})]}),r(i,{}),e("div",{style:o,children:[r("strong",{children:"Vigente: "}),r(c,{label:Boolean(Number(a.data.anulada))?"ANULADA":"VIGENTE",color:Boolean(Number(a.data.anulada))?"error":"success"})]}),r(i,{}),e("div",{style:o,children:[r("strong",{children:"\xBFSe regres\xF3?: "}),r(c,{label:Boolean(Number(a.data.regreso))?"SI":"NO",color:Boolean(Number(a.data.regreso))?"success":"error"})]}),r(i,{}),e("div",{style:o,children:[r("strong",{children:"Tipo de pago: "}),a.data.tipo_pago||"NO PAGADO"]}),a.data.notas&&e(d,{children:[r(i,{}),e("div",{style:o,children:[r("strong",{children:"Notas: "}),a.data.notas]})]}),((u=a.data.regresos)==null?void 0:u.length)>0&&e(p,{variant:"outlined",style:{padding:10,marginTop:10},children:[r(h,{variant:"h6",children:"Fechas de regresos"}),r(i,{}),a.data.regresos.map((t,s)=>{var l;return e(v.exports.Fragment,{children:[e("div",{style:o,children:[e("strong",{children:["Regreso ",s+1,": "]}),f(`${new Date(t.fecha)}`,"dd/MM/yy h:mm a")]}),a&&a.data&&s<((l=a.data)==null?void 0:l.regresos.length)-1&&r(i,{})]},t.id)})]})]})]})};export{vr as default};
