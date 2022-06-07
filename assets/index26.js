var Z=Object.defineProperty,ee=Object.defineProperties;var oe=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var re=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var V=(r,e,t)=>e in r?Z(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,b=(r,e)=>{for(var t in e||(e={}))re.call(e,t)&&V(r,t,e[t]);if(z)for(var t of z(e))te.call(e,t)&&V(r,t,e[t]);return r},w=(r,e)=>ee(r,oe(e));import{r as m,ag as O,a as o,j as a,F as _,a2 as L}from"./index.js";import{L as ne}from"./Loader.js";import{u as M}from"./useModal.js";import"./jwt-decode.esm.js";import{u as se}from"./useFetcherEarly.js";import{H as ae}from"./HeaderTitle.js";import"./BootstrapTooltip.js";import{N as ie}from"./NotFoundResults.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import P from"./Modal2.js";import"./platform.js";import{g as q}from"./dateHelper.js";import{S as y}from"./Stack.js";import{T as N}from"./Typography.js";import{D as ce}from"./Divider.js";import{f as u}from"./string.helper.js";import{P as le}from"./Paper.js";import de from"./CustomSpeedDial.js";import{c as me,i as ue,r as he}from"./jsx-runtime_commonjs-proxy.js";import{d as pe}from"./ScheduleSend.js";import{s as fe}from"./FileSaver.min.js";import{T as xe}from"./TextInput.js";import{c as ge,a as _e,f as ve,o as Ce}from"./array.js";import{A as U}from"./Alert.js";import{F as Fe}from"./FormControlLabel.js";import{C as Ne}from"./Checkbox.js";import{u as be}from"./useFetch.js";import{B as ye}from"./BackgroundLoader.js";import{A as De}from"./AlertTitle.js";import"./Grid.js";import"./extendSxProp.js";import"./Tooltip.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./isHostComponent.js";import"./Grow.js";import"./Close2.js";import"./LoadingButton.js";import"./Backdrop.js";import"./Modal.js";import"./Button.js";import"./ButtonBase.js";import"./IconButton.js";import"./Error.js";import"./createSvgIcon.js";import"./index13.js";import"./regex.js";import"./Assignment.js";import"./FabButtonAction.js";import"./react-is.production.min.js";import"./AssignmentRounded.js";import"./TextField.js";import"./FormHelperText.js";import"./Menu.js";import"./List.js";import"./GlobalStyles.js";import"./upperFirst.js";import"./Close.js";import"./useHttpService.js";const x=m.exports.createContext({}),Se=({children:r})=>{const{id:e}=O(),t=M(),n=M(),c=M(),l=se(`/admin/formulario03/${e}`),[,i]=l,[p,f]=m.exports.useState(),d=(v,g)=>{var C;f((C=i==null?void 0:i.planillas.find(F=>F.id===v))==null?void 0:C.contratos[g]),t.setOpen()};return o(x.Provider,{value:{contrato:p,setContrato:d,modalEdit:t,modalProcesar:n,modalDownload:c,fetchFormulario:l},children:r})},we=()=>{const{fetchFormulario:r}=m.exports.useContext(x),[,e]=r;return a(y,{direction:"column",spacing:1,style:{padding:10,border:"1px solid black",borderRadius:"5px"},children:[a(y,{direction:{xs:"column",md:"row"},justifyContent:"space-between",spacing:1,children:[o(N,{variant:"h5",color:"green",fontWeight:"bold",textTransform:"uppercase",children:e==null?void 0:e.nom_cliente}),a(N,{variant:"h5",textTransform:"uppercase",children:[o("strong",{children:"Mes:"})," ",q(e.mes,"MMMM - yyyy")]})]}),o(ce,{}),a(y,{direction:{xs:"column",md:"row"},spacing:1,children:[a(N,{children:[o("strong",{children:"RUC:"})," ",e==null?void 0:e.ruc]}),(e==null?void 0:e.dv)&&a(N,{children:[o("strong",{children:"DV:"})," ",e==null?void 0:e.dv]})]}),(e==null?void 0:e.telefono)||(e==null?void 0:e.celular)?a(N,{children:[o("strong",{children:"T\xE9lefono:"})," ",(e==null?void 0:e.telefono)||(e==null?void 0:e.celular)]}):o(_,{})]})},Me="_tableResponse_553e5_1",Pe="_table_553e5_1",Ee="_header_553e5_21",Te="_column_553e5_61",Re="_row_553e5_75",ke="_columnClick_553e5_103",Ae="_columnClickEdit_553e5_113";var s={tableResponse:Me,table:Pe,header:Ee,column:Te,row:Re,columnClick:ke,columnClickEdit:Ae};const E=r=>{const e=m.exports.useMemo(()=>r.every(c=>Number(c.preaviso)>0),[r]),t=m.exports.useMemo(()=>r.every(c=>Number(c.indemnizacion)>0),[r]),n=m.exports.useMemo(()=>r.some(c=>c.dv&&c.dv!==""),[r]);return{isPreaviso:e,isIndemnizacion:t,isDv:n}},He=({planilla:r})=>{const{setContrato:e}=m.exports.useContext(x),{contratos:t}=r,{isDv:n,isIndemnizacion:c,isPreaviso:l}=E(t);return o(_,{children:t.map((i,p)=>a("tr",{className:s.row,children:[a("td",{className:`${s.column} ${s.columnClick}`,onClick:()=>e(r.id,p),children:[o("div",{className:s.columnClickEdit,children:o("span",{})}),a("span",{children:[i.nombre," ",i.apellido]})]}),o("td",{className:s.column,children:i.identificacion}),n&&o("td",{className:s.column,children:i.dv}),o("td",{className:s.column,children:u(i.salario)}),o("td",{className:s.column,children:u(i.decimo)}),o("td",{className:s.column,children:u(i.vacaciones)}),o("td",{className:s.column,children:u(i.impuesto_renta)}),o("td",{className:s.column,children:u(i.horas_extras)}),o("td",{className:s.column,children:u(i.comisiones)}),c&&o("td",{className:s.column,children:u(i.comisiones)}),l&&o("td",{className:s.column,children:u(i.comisiones)})]},`${i.id_contrato}`))})},$e=({contratos:r})=>{const{isDv:e,isIndemnizacion:t,isPreaviso:n}=E(r);return o("thead",{children:a("tr",{children:[o("td",{className:s.header,children:"Nombre"}),o("td",{className:s.header,children:"C\xE9dula"}),e&&o("td",{className:s.header,children:"Dv"}),o("td",{className:s.header,children:"Salario"}),o("td",{className:s.header,children:"D\xE9cimo"}),o("td",{className:s.header,children:"Vacaciones"}),o("td",{className:s.header,children:"Imp. Renta"}),o("td",{className:s.header,children:"Horas extras"}),o("td",{className:s.header,children:"Comisiones"}),t&&o("td",{className:s.header,children:"Comisiones"}),n&&o("td",{className:s.header,children:"Comisiones"})]})})},je=()=>m.exports.useCallback((e,t)=>t.map(n=>Number(n[e])).reduce((n,c)=>n+c),[]),Ie=({contratos:r})=>{const e=je(),{isDv:t,isIndemnizacion:n,isPreaviso:c}=E(r);return a("tr",{className:s.row,children:[o("td",{className:s.column,children:"Totales"}),o("td",{className:s.column}),t&&o("td",{className:s.column}),o("td",{className:s.column,children:u(e("salario",r))}),o("td",{className:s.column,children:u(e("decimo",r))}),o("td",{className:s.column,children:u(e("vacaciones",r))}),o("td",{className:s.column,children:u(e("impuesto_renta",r))}),o("td",{className:s.column,children:u(e("horas_extras",r))}),o("td",{className:s.column,children:u(e("comisiones",r))}),n&&o("td",{className:s.column,children:u(e("indemnizacion",r))}),c&&o("td",{className:s.column,children:u(e("preaviso",r))})]})},Be=r=>{const{contratos:e,nombre_negocio:t,tipo:n}=r;return a(y,{component:le,direction:"column",variant:"outlined",children:[a(N,{variant:"h5",color:"red",padding:1,children:[n," ",t]}),o("div",{className:s.tableResponse,children:a("table",{className:s.table,children:[o($e,{contratos:e}),a("tbody",{children:[o(He,{planilla:r}),o(Ie,{contratos:e})]})]})})]})};var T={},ze=ue.exports;Object.defineProperty(T,"__esModule",{value:!0});var W=T.default=void 0,Ve=ze(me),Oe=he,Le=(0,Ve.default)((0,Oe.jsx)("path",{d:"M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"}),"Download");W=T.default=Le;const R=m.exports.createContext({}),qe=({children:r})=>{const e=L();return o(R.Provider,{value:e,children:r})},Ue=()=>{const{id:r}=O(),e=m.exports.useContext(R),[,t]=e,{modalDownload:n,fetchFormulario:c}=m.exports.useContext(x),[,l]=c,{setOpen:i}=n,p=m.exports.useMemo(()=>`F03-${q(l==null?void 0:l.mes,"MMMM-yyyy")}-${(l==null?void 0:l.nom_cliente)||""}-${(l==null?void 0:l.ruc)||""}`.replaceAll(" ","-").toUpperCase(),[l]);return()=>{t(`/admin/formulario03/${r}/generar`,{isBlob:!0}).then(d=>{d.data&&fe(d.data,`${p}.xlsx`)}).finally(()=>{i()})}},We=()=>{const r=m.exports.useContext(x),{fetchFormulario:e,modalProcesar:t}=r,[,n]=e,c=Ue(),{setOpen:l}=t;return o(_,{children:o(de,{titles:["Generar formato",...n!=null&&n.fecha_send?[]:["Marcar como procesada"]],icons:[W,...n!=null&&n.fecha_send?[]:[pe]],onPresses:[()=>c(),...n!=null&&n.fecha_send?[]:[()=>l()]]})})},Ge=ge().shape({dv:_e().typeError("Favor ingresar el d\xEDgito verificador").trim().min(2,"Favor ingresar dos d\xEDgitos").max(2,"Favor ingresar dos d\xEDgitos").matches(/\d+/g,"Favor ingresar solo n\xFAmeros").required("Favor ingresar el d\xEDgito verificador")}),Je=()=>{var H,$;const{modalEdit:r,contrato:e,fetchFormulario:t}=m.exports.useContext(x),[,n,,,c]=t,{modalState:l,setHide:i}=r,p=L(),[f,d,v,g,,C]=p,F=()=>{i(),D.reset(),C()},k=async h=>{const j=await d(`/admin/contratos/${e==null?void 0:e.id_contrato}/edit-planilla`,{method:"POST",data:{nombre:h.nombre,apellido:h.apellido,identificacion:h.identificacion,tipoIdentificacion:h.tipo_identificacion,seguro:h.seguro,dv:h.dv,fecha_ini:h.fecha_ini,conyuge_no_trabaja:h.conyuge_no_trabaja}});if(j.data&&!j.error&&e&&n){const I=n.planillas.findIndex(S=>S.contratos.includes(e)),Y=n.planillas[I].contratos.findIndex(S=>S.id_contrato===(e==null?void 0:e.id_contrato)),B=n;B.planillas[I].contratos[Y]=h,c(b({},B))}},D=ve({mode:"all",resolver:Ce(Ge)}),{register:G,formState:J}=D,{setValue:K,watch:Q}=D,{errors:A}=J,X=Q("conyuge_no_trabaja");return m.exports.useEffect(()=>{(()=>{e&&D.reset(b({},e))})()},[e]),o(_,{children:o(P,{state:l,title:"Formulario de edici\xF3n",setHide:F,cancelBotton:{text:"Cerrar",actionFunction:F},actionButton:{text:"Guardar",actionFunction:D.handleSubmit(k),isLoading:f},children:a(y,{direction:"column",spacing:1,children:[v&&!f&&o(U,{variant:"outlined",severity:v&&!g?"success":"error",children:v?v.message:g==null?void 0:g.message}),a(N,{variant:"h6",textTransform:"uppercase",children:[e==null?void 0:e.nombre," ",e==null?void 0:e.apellido]}),o(xe,w(b({label:"DV"},G("dv")),{error:!!((H=A.dv)!=null&&H.message),helperText:($=A.dv)==null?void 0:$.message,fullWidth:!0,autoFocus:!0,focused:!0})),o(Fe,{control:o(Ne,{checked:X===4,onChange:h=>{K("conyuge_no_trabaja",h.target.checked?4:1)}}),label:"Casado(a) y c\xF3nyuge no trabaja"})]})})})},Ke=()=>{var C,F;const{modalProcesar:r,fetchFormulario:e}=m.exports.useContext(x),[,t,,,n]=e,{modalState:c,setHide:l}=r,{isLoading:i,send:p,reset:f,response:d}=be(),v=async()=>{(await p({url:`/admin/formulario03/${t==null?void 0:t.id}/procesar`,method:"POST"})).status===201&&n(w(b({},t),{fecha_send:new Date(Date.now()).toString()}))},g=()=>{l(),f()};return o(_,{children:a(P,{title:"\xA1Atenci\xF3n!",type:(d==null?void 0:d.status)===201?"SUCCESS":"ERROR",state:c,setHide:g,cancelBotton:{text:"Cancelar",actionFunction:g},actionButton:(d==null?void 0:d.status)!==201?{text:"Procesar",actionFunction:v,isLoading:i}:void 0,children:[!d&&a("span",{children:["\xBFRealmente desea marcar como procesado el"," ",o("strong",{children:"Formulario 03"}),"?"]}),d&&d.status===201?(C=d==null?void 0:d.data)==null?void 0:C.message:(F=d==null?void 0:d.error)==null?void 0:F.message]})})},Qe=()=>{const r=m.exports.useContext(R),{modalDownload:e}=m.exports.useContext(x),{modalState:t,setHide:n}=e,[c,,l,i,,p]=r,f=m.exports.useCallback(()=>{n(),p()},[]);return a(_,{children:[o(ye,{open:c}),o(P,{state:t,title:"\xA1Atenci\xF3n!",type:l?"SUCCESS":"ERROR",setHide:()=>f(),cancelBotton:{text:"Cerrar",actionFunction:()=>f()},children:i?i.message:a(_,{children:["\xA1Archivo descargado correctamente!. ",o("br",{})," \xA1Si el archivo se ha procesado, recuerde marcar como procesado!"]})})]})},Xe=()=>{const{fetchFormulario:r}=m.exports.useContext(x),[,e]=r;return a(qe,{children:[a(y,{direction:"column",spacing:1,style:{marginTop:10},children:[e.planillas.flatMap(t=>t.contratos).some(t=>!t.dv||t.dv&&t.dv==="")&&a(U,{variant:"outlined",severity:"error",children:[o(De,{style:{fontWeight:"bold"},children:"\xA1Atenci\xF3n!"}),"Algunos de los empleados no cuentan con ",o("strong",{children:"DV"}),". Favor actualizarlos haciendo click en el nombre correspondiente."]}),e.planillas.map(t=>o(Be,b({},t),t.id_planilla))]}),o(We,{}),o(Je,{}),o(Ke,{}),o(Qe,{})]})},Ye=()=>{const{fetchFormulario:r}=m.exports.useContext(x),[e,t,n]=r;return a(_,{children:[o(ae,{message:"Formulario 03"}),a("div",{style:{display:"flex",flexDirection:"column",marginTop:10},children:[e&&o(ne,{}),!e&&!t&&n&&o(ie,{text:n==null?void 0:n.message}),!e&&t&&!n&&a(_,{children:[o(we,{}),o(Xe,{})]})]})]})},cr=()=>o(Se,{children:o(Ye,{})});export{cr as default};
