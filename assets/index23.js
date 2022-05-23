var uo=Object.defineProperty,po=Object.defineProperties;var ho=Object.getOwnPropertyDescriptors;var ne=Object.getOwnPropertySymbols;var Ze=Object.prototype.hasOwnProperty,Je=Object.prototype.propertyIsEnumerable;var Ye=(n,o,r)=>o in n?uo(n,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[o]=r,_=(n,o)=>{for(var r in o||(o={}))Ze.call(o,r)&&Ye(n,r,o[r]);if(ne)for(var r of ne(o))Je.call(o,r)&&Ye(n,r,o[r]);return n},D=(n,o)=>po(n,ho(o));var Ke=(n,o)=>{var r={};for(var t in n)Ze.call(n,t)&&o.indexOf(t)<0&&(r[t]=n[t]);if(n!=null&&ne)for(var t of ne(n))o.indexOf(t)<0&&Je.call(n,t)&&(r[t]=n[t]);return r};import{u as go}from"./useFetcherEarly.js";import{r as c,a as e,ac as no,F as b,j as l,t as xo,ar as No,q as bo}from"./index.js";import{L as vo}from"./Loader.js";import{N as fo}from"./NotFoundResults.js";import{b as X,c as z,g as de,a as A,d as Qe,f as ae,o as re,h as to,j as E,F as se,u as y,C as _o}from"./array.js";import{g as q,n as me,a as Co}from"./dateHelper.js";import{d as Fo,n as K,e as Xe,r as eo}from"./regex.js";import{u as So}from"./useLocalStorage.js";import{u as he}from"./useFetcher.js";import{s as i,d as yo,a as ue}from"./headerPlanilla.module.js";import{d as ao}from"./Delete.js";import{D as V}from"./DecimalInput.js";import{f as $,d as wo}from"./string.helper.js";import{u as ge}from"./useModal.js";import"./jwt-decode.esm.js";import{I as ro}from"./IconButton.js";import{T as f}from"./Typography.js";import{M as ie,D as Mo,c as Po,b as $o}from"./Modal2.js";import{a as pe}from"./constantsLists.js";import{S as so}from"./SelectHookForm.js";import{T as te}from"./TextInput.js";import{S as M}from"./Stack.js";import{F as Eo}from"./FormControlLabel.js";import{C as io}from"./Checkbox.js";import{d as To,a as Ao}from"./CheckBoxOutlineBlank.js";import{A as Do}from"./AutocompleteServer.js";import{L as Io}from"./ListItem.js";import{A as ee}from"./Alert.js";import{B as Y}from"./Button.js";import{d as zo}from"./AddBusiness.js";import Ro from"./InputAsociarNegocio.js";import{D as B}from"./Divider.js";import{T as qo}from"./TextEditor.js";import{P as Q}from"./Paper.js";import{P as Ho}from"./Pagination.js";import{c as ko,i as Lo,r as jo}from"./jsx-runtime_commonjs-proxy.js";import{B as Vo}from"./BootstrapTooltip.js";import{M as Wo}from"./MonthPicker.js";import{s as Bo}from"./index14.js";import{H as Oo}from"./HeaderTitle.js";import"./Grid.js";import"./extendSxProp.js";import"./upperFirst.js";import"./index13.js";import"./constants.js";import"./CustomDecimal.js";import"./react-number-format.es.js";import"./ButtonBase.js";import"./useIsFocusVisible.js";import"./Close2.js";import"./Error.js";import"./Backdrop.js";import"./Modal.js";import"./isHostComponent.js";import"./useControlled.js";import"./Portal.js";import"./nacionalidades.js";import"./Box.js";import"./TextField.js";import"./react-is.production.min.js";import"./Menu.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./GlobalStyles.js";import"./MenuItem.js";import"./listItemIconClasses.js";import"./listItemTextClasses.js";import"./useFetch.js";import"./useHttpService.js";import"./Autocomplete.js";import"./Close.js";import"./Tooltip.js";import"./Chip.js";import"./listItemButtonClasses.js";import"./ContentProvider.js";import"./ChipState.js";import"./platform.js";import"./index7.js";const Z=c.exports.createContext({}),Uo=({children:n})=>{const[o,r]=c.exports.useState(null),t=a=>r(a);return e(Z.Provider,{value:{date:o,setDate:t},children:n})},R=c.exports.createContext({}),Go=({children:n})=>{const{id:o,cliente:r}=no(),t=go(`/admin/negocios/${o}/${r}/planillas/last`,{}),[,a]=t,{setDate:s}=c.exports.useContext(Z);return c.exports.useEffect(()=>{(()=>{a&&a.next_month&&s(a.next_month)})()},[a]),e(R.Provider,{value:t,children:n})},k=X().typeError("Ingresar un valor").positive("La cantidad del salario debe ser positiva").min(0,"La cantidad del salario debe ser mayor a 0").max(9e10,"M\xE1ximo 10 d\xEDgitos").required("Ingresar un valor").test("check-decimal","Favor ingresar m\xE1ximo dos decimales",n=>!!(n===0||n&&n.toString().match(Fo))),Yo=z().shape({mes:de().typeError("Favor ingresar el mes de la planilla a realizar").required("Favor ingresar el mes de la planilla a realizar"),notas:A().trim().nullable(!0).notRequired(),negocios:Qe().of(z().shape({id_negocio:X().typeError("Favor ingresar el negocio").positive("Favor ingresar el negocio").integer("Favor ingresar el negocio").required("Favor ingresar el negocio"),contratos:Qe().of(z().shape({salario:k,decimo:k,vacaciones:k,impuesto_renta:k,horas_extras:k,comisiones:k,preaviso:k,indemnizacion:k,id_contrato:X().typeError("El id es requerido").required("El id es requerido").positive("El id debe ser un n\xFAmero positivo").integer("El id debe ser un n\xFAmero entero")})).min(1,"Favor ingresar al menos un empleado")})).min(1,"Favor ingresar al menos un negocio")}),O=c.exports.createContext({}),Zo=({children:n})=>{const{id:o,cliente:r}=no(),t=c.exports.useContext(R),[,a]=t,s=c.exports.useMemo(()=>["4","8","12"].includes(q(a.next_month,"M")),[]),[m,p,d]=So(`sipe-${o}-${r}`),h=ae({mode:"all",resolver:re(Yo),defaultValues:m!=null?m:{notas:"",mes:a.next_month,negocios:a&&a.planillas[0]&&a.planillas[0].negocios?a.planillas[0].negocios.map(C=>D(_({},C),{contratos:C.contratos.map(P=>D(_({},P),{salario:"",vacaciones:0,impuesto_renta:0,horas_extras:0,comisiones:0,indemnizacion:0,preaviso:0,decimo:s?"":0}))})):[{id_negocio:a==null?void 0:a.id_negocio,nombre:a==null?void 0:a.nombre_negocio,tipo:a==null?void 0:a.tipo,id_cliente:a==null?void 0:a.id_cliente,contratos:[]}]}}),g=to({control:h.control,name:"negocios"}),x=E({control:h.control}),u=E({control:h.control,name:"negocios"});c.exports.useEffect(()=>{(()=>{p(x)})()},[x]);const N=he(),[w,,v]=N;return c.exports.useEffect(()=>{(()=>{!w&&v&&d()})()},[v,w]),e(se,D(_({},h),{children:e(O.Provider,{value:{fieldsNegocios:g,negocios:u,isDecimo:s,mainNegocioId:o!=null?o:"",clienteId:r!=null?r:"",fetcherSaveData:N},children:n})}))},xe=c.exports.createContext({}),Jo=({children:n})=>{const[o,r]=c.exports.useState(0),t=a=>r(a);return e(xe.Provider,{value:{page:o,setPage:t},children:n})},j=({negocioIndex:n,name:o})=>{const{control:r}=y(),t=E({control:r,name:`negocios.${n}.contratos`}),a=c.exports.useMemo(()=>t&&t.length>0?t.map(s=>Number(s[o]||0)).reduce((s,m)=>s+m):0,[t]);return e(b,{children:$(a)})},Ko=({negocioIndex:n})=>{const{control:o}=y(),r=E({control:o,name:`negocios.${n}.contratos`}),t=c.exports.useMemo(()=>r&&r.length>0?r.map(a=>Number(a.salario||0)+Number(a.decimo||0)+Number(a.vacaciones||0)+Number(a.impuesto_renta||0)+Number(a.horas_extras||0)+Number(a.comisiones||0)+Number(a.indemnizacion||0)+Number(a.preaviso||0)).reduce((a,s)=>a+s):0,[r]);return e(b,{children:$(t)})},Qo=({negocioIndex:n})=>{const{control:o}=y(),r=E({control:o,name:`negocios.${n}.contratos`});return c.exports.useMemo(()=>r&&r.length>0&&r.map(a=>Number(a.vacaciones||0)).reduce((a,s)=>a+s)>0,[r])?l(b,{children:[e("td",{className:i.column,children:e(j,{name:"indemnizacion",negocioIndex:n})}),e("td",{className:i.column,children:e(j,{name:"preaviso",negocioIndex:n})})]}):e(b,{})},Xo=({negocioIndex:n})=>l("tr",{className:i.row,children:[e("td",{className:i.column,children:"Totales"}),e("td",{className:i.column}),e("td",{className:i.column,children:e(j,{name:"salario",negocioIndex:n})}),e("td",{className:i.column,children:e(j,{name:"decimo",negocioIndex:n})}),e("td",{className:i.column,children:e(j,{name:"vacaciones",negocioIndex:n})}),e("td",{className:i.column,children:e(j,{name:"impuesto_renta",negocioIndex:n})}),e("td",{className:i.column,children:e(j,{name:"horas_extras",negocioIndex:n})}),e("td",{className:i.column,children:e(j,{name:"comisiones",negocioIndex:n})}),e(Qo,{negocioIndex:n}),e("td",{colSpan:2,className:i.column,children:e(Ko,{negocioIndex:n})})]}),en=({negocioIndex:n,contratoIndex:o})=>{const{control:r}=y(),t=E({control:r,name:`negocios.${n}.contratos.${o}`}),a=c.exports.useMemo(()=>Number(t.salario||0)+Number(t.decimo||0)+Number(t.vacaciones||0)+Number(t.impuesto_renta||0)+Number(t.horas_extras||0)+Number(t.comisiones||0)+Number(t.indemnizacion||0)+Number(t.preaviso||0),[t]);return e("span",{children:$(a)})},on=({negocioIndex:n})=>{const{control:o}=y(),r=E({control:o,name:`negocios.${n}.contratos`});return c.exports.useMemo(()=>r&&r.length>0&&r.map(a=>Number(a.vacaciones||0)).reduce((a,s)=>a+s)>0,[r])?l(b,{children:[e("th",{className:i.header,children:"Indemnizaci\xF3n"}),e("th",{className:i.header,children:"Preaviso"})]}):e(b,{})},nn=({negocioIndex:n})=>e("thead",{children:l("tr",{children:[e("th",{className:i.header,children:"Nombre"}),e("th",{className:i.header,children:"C\xE9dula"}),e("th",{className:i.header,children:"Salario"}),e("th",{className:i.header,children:"D\xE9cimo"}),e("th",{className:i.header,children:"Vacaciones"}),e("th",{className:i.header,children:"Imp. Renta"}),e("th",{className:i.header,children:"Horas extras"}),e("th",{className:i.header,children:"Comisiones"}),e(on,{negocioIndex:n}),e("th",{className:i.header,children:"Total"}),e("th",{className:i.header,children:"Remover"})]})}),tn=({negocioIndex:n,contratoIndex:o})=>{var p,d,h,g,x,u,N,w,v,C,P,T,I,F,S,H,W,J;const{control:r,formState:t}=y(),{errors:a}=t,s=E({control:r,name:`negocios.${n}.contratos`});return c.exports.useMemo(()=>s&&s.length>0&&s.map(G=>Number(G.vacaciones||0)).reduce((G,oe)=>G+oe)>0,[s])?l(b,{children:[e("td",{className:i.column,children:e(V,{className:i.inputDecimal,name:`negocios.${n}.contratos.${o}.indemnizacion`,label:"Indemnizaci\xF3n",fullWidth:!0,error:!!((g=(h=(d=(p=a==null?void 0:a.negocios)==null?void 0:p[Number(n)])==null?void 0:d.contratos)==null?void 0:h[Number(o)])!=null&&g.indemnizacion),helperText:(v=(w=(N=(u=(x=a==null?void 0:a.negocios)==null?void 0:x[Number(n)])==null?void 0:u.contratos)==null?void 0:N[Number(o)])==null?void 0:w.indemnizacion)==null?void 0:v.message,size:"small"})}),e("td",{className:i.column,children:e(V,{className:i.inputDecimal,name:`negocios.${n}.contratos.${o}.preaviso`,label:"Preaviso",fullWidth:!0,error:!!((I=(T=(P=(C=a==null?void 0:a.negocios)==null?void 0:C[Number(n)])==null?void 0:P.contratos)==null?void 0:T[Number(o)])!=null&&I.preaviso),helperText:(J=(W=(H=(S=(F=a==null?void 0:a.negocios)==null?void 0:F[Number(n)])==null?void 0:S.contratos)==null?void 0:H[Number(o)])==null?void 0:W.preaviso)==null?void 0:J.message,size:"small"})})]}):e(b,{})},an=({negocioIndex:n,contratoIndex:o})=>{var p,d,h,g,x,u,N,w,v;const{control:r,setValue:t,formState:a}=y(),{errors:s}=a,m=E({control:r,name:`negocios.${n}.contratos.${o}.salario`});return c.exports.useEffect(()=>{(()=>{m&&m!==""&&Number(m)>=800?t(`negocios.${n}.contratos.${o}.impuesto_renta`,""):t(`negocios.${n}.contratos.${o}.impuesto_renta`,0)})()},[m]),e(V,{className:i.inputDecimal,name:`negocios.${n}.contratos.${o}.impuesto_renta`,label:"Imp. Renta",fullWidth:!0,error:!!((g=(h=(d=(p=s==null?void 0:s.negocios)==null?void 0:p[Number(n)])==null?void 0:d.contratos)==null?void 0:h[Number(o)])!=null&&g.impuesto_renta),helperText:(v=(w=(N=(u=(x=s==null?void 0:s.negocios)==null?void 0:x[Number(n)])==null?void 0:u.contratos)==null?void 0:N[Number(o)])==null?void 0:w.impuesto_renta)==null?void 0:v.message,size:"small"})},U=c.exports.createContext({}),rn=({children:n,clienteId:o,mainNegocioId:r,negocioIndex:t,isDecimo:a})=>{const s=ge(),{control:m}=y(),{fields:p,remove:d,append:h,update:g}=to({control:m,name:`negocios.${t}.contratos`});return e(U.Provider,{value:{modalAgregarContrato:s,clienteId:o,mainNegocioId:r,negocioIndex:t,fields:p,remove:d,append:h,update:g,isDecimo:a},children:n})},ce=c.exports.createContext({}),sn=({children:n})=>{const[o,r]=c.exports.useState(null),t=c.exports.useCallback((s,m)=>{r({negocioIndex:s,contratoIndex:m})},[]),a=c.exports.useCallback(()=>r(null),[]);return e(ce.Provider,{value:{negocioContrato:o,setNegocioContrato:t,setNullNegocioContrato:a},children:n})},cn=n=>{const{negocioIndex:o}=n,{formState:r}=y(),{errors:t}=r,{fields:a,remove:s}=c.exports.useContext(U),{setNegocioContrato:m}=c.exports.useContext(ce);return e("div",{className:i.tableResponsive,children:l("table",{className:i.table,children:[e(nn,{negocioIndex:o}),l("tbody",{children:[a==null?void 0:a.map((p,d)=>{var h,g,x,u,N,w,v,C,P,T,I,F,S,H,W,J,G,oe,_e,Ce,Fe,Se,ye,we,Me,Pe,$e,Ee,Te,Ae,De,Ie,ze,Re,qe,He,ke,Le,je,Ve,We,Be,Oe,Ue,Ge;return l("tr",{className:i.row,children:[l("td",{className:`${i.column} ${i.columnClick}`,onClick:()=>m(Number(o),d),children:[e("div",{className:i.columnClickEdit,children:e("span",{})}),l("span",{children:[p.nombre," ",p.apellido]})]}),e("td",{className:i.column,children:e("span",{children:p.identificacion})}),e("td",{className:i.column,children:e(V,{className:i.inputDecimal,name:`negocios.${o}.contratos.${d}.salario`,label:"Salario",fullWidth:!0,error:!!((u=(x=(g=(h=t==null?void 0:t.negocios)==null?void 0:h[Number(o)])==null?void 0:g.contratos)==null?void 0:x[d])!=null&&u.salario),helperText:(P=(C=(v=(w=(N=t==null?void 0:t.negocios)==null?void 0:N[Number(o)])==null?void 0:w.contratos)==null?void 0:v[d])==null?void 0:C.salario)==null?void 0:P.message,size:"small"})}),e("td",{className:i.column,children:e(V,{className:i.inputDecimal,name:`negocios.${o}.contratos.${d}.decimo`,label:"D\xE9cimo",fullWidth:!0,error:!!((S=(F=(I=(T=t==null?void 0:t.negocios)==null?void 0:T[Number(o)])==null?void 0:I.contratos)==null?void 0:F[d])!=null&&S.decimo),helperText:(oe=(G=(J=(W=(H=t==null?void 0:t.negocios)==null?void 0:H[Number(o)])==null?void 0:W.contratos)==null?void 0:J[d])==null?void 0:G.decimo)==null?void 0:oe.message,size:"small"})}),e("td",{className:i.column,children:e(V,{className:i.inputDecimal,name:`negocios.${o}.contratos.${d}.vacaciones`,label:"Vacaciones",fullWidth:!0,error:!!((Se=(Fe=(Ce=(_e=t==null?void 0:t.negocios)==null?void 0:_e[Number(o)])==null?void 0:Ce.contratos)==null?void 0:Fe[d])!=null&&Se.vacaciones),helperText:($e=(Pe=(Me=(we=(ye=t==null?void 0:t.negocios)==null?void 0:ye[Number(o)])==null?void 0:we.contratos)==null?void 0:Me[d])==null?void 0:Pe.vacaciones)==null?void 0:$e.message,size:"small"})}),e("td",{className:i.column,children:e(an,{negocioIndex:o,contratoIndex:d})}),e("td",{className:i.column,children:e(V,{className:i.inputDecimal,name:`negocios.${o}.contratos.${d}.horas_extras`,label:"Horas extras",fullWidth:!0,error:!!((De=(Ae=(Te=(Ee=t==null?void 0:t.negocios)==null?void 0:Ee[Number(o)])==null?void 0:Te.contratos)==null?void 0:Ae[d])!=null&&De.horas_extras),helperText:(He=(qe=(Re=(ze=(Ie=t==null?void 0:t.negocios)==null?void 0:Ie[Number(o)])==null?void 0:ze.contratos)==null?void 0:Re[d])==null?void 0:qe.horas_extras)==null?void 0:He.message,size:"small"})}),e("td",{className:i.column,children:e(V,{className:i.inputDecimal,name:`negocios.${o}.contratos.${d}.comisiones`,label:"Comisiones",fullWidth:!0,error:!!((Ve=(je=(Le=(ke=t==null?void 0:t.negocios)==null?void 0:ke[Number(o)])==null?void 0:Le.contratos)==null?void 0:je[d])!=null&&Ve.comisiones),helperText:(Ge=(Ue=(Oe=(Be=(We=t==null?void 0:t.negocios)==null?void 0:We[Number(o)])==null?void 0:Be.contratos)==null?void 0:Oe[d])==null?void 0:Ue.comisiones)==null?void 0:Ge.message,size:"small"})}),e(tn,{negocioIndex:o,contratoIndex:d}),e("td",{className:i.column,children:e(en,{negocioIndex:o,contratoIndex:d})}),e("td",{className:`${i.column} ${i.icon}`,children:e(ro,{color:"error",onClick:()=>s(d),children:e(ao,{})})})]},`${p.id}`)}),e(Xo,{negocioIndex:o})]})]})})},ln=n=>{const{negocioIndex:o}=n,{control:r}=y(),t=E({control:r,name:`negocios.${o}.contratos`}),a=c.exports.useMemo(()=>t&&t.length>0?t.map(s=>Number(s.salario||0)+Number(s.vacaciones||0)).reduce((s,m)=>s+m):0,[t]);return l(f,{variant:"h5",children:["Salarios + Vacaciones = ",e("strong",{children:$(a)})," "]})},dn=(n,o)=>{const[,r,,,,t]=o,{negocios:a}=c.exports.useContext(O),{append:s,mainNegocioId:m,clienteId:p,modalAgregarContrato:d,isDecimo:h}=c.exports.useContext(U),{setHide:g}=d;return{handleAppenContrato:async u=>{if(u.seleccion==="old"){const N=a.flatMap(v=>v.contratos);(N==null?void 0:N.find(v=>Number(v.id_contrato)===Number(u.empleado_selected.id)))?n.setError("empleado_selected.id",{type:"manual",message:"El empleado ya existe en la lista actual. Favor seleccionar otro o crear uno nuevo."}):(s({salario:"",decimo:h?"":0,vacaciones:0,preaviso:0,indemnizacion:0,impuesto_renta:0,id_contrato:Number(u.empleado_selected.id),nombre:u.empleado_selected.nombre||"",apellido:u.empleado_selected.apellido||"",complete_name:u.empleado_selected.complete_name||"",identificacion:u.empleado_selected.identificacion||"",horas_extras:0,comisiones:0,tipo_identificacion:u.empleado_selected.tipo_identificacion||"",seguro:u.empleado_selected.seguro||u.empleado_selected.identificacion||"",conyuge_no_trabaja:u.empleado_selected.conyuge_no_trabaja}),g(),n.reset({seleccion:""}),t())}else{const N=await r(`/admin/contratos/${m}/${p}/add-contrato-planilla`,{method:"POST",data:D(_({},u.new_empleado),{negocio:m})});N.data&&(s({salario:"",decimo:h?"":0,vacaciones:0,preaviso:0,indemnizacion:0,impuesto_renta:0,id_contrato:N.data.id,nombre:u.new_empleado.nombre||"",apellido:u.new_empleado.apellido||"",complete_name:`${u.new_empleado.nombre} ${u.new_empleado.apellido}`,identificacion:u.new_empleado.identificacion||"",horas_extras:0,comisiones:0,tipo_identificacion:u.new_empleado.tipoIdentificacion||"",seguro:u.new_empleado.seguro||u.new_empleado.identificacion||"",conyuge_no_trabaja:u.new_empleado.conyuge_no_trabaja}),g(),n.reset({seleccion:""}),t())}}}},co=z().shape({seleccion:A().trim().required("Favor seleccionar la forma de agregar al empleado").test("check","Favor seleccionar solo de la lista",n=>!!(n&&["new","old"].includes(n))),empleado_selected:z().nullable().when("seleccion",{is:"old",then:z().shape({id:X().typeError("Favor seleccionar el empleado").positive("Favor seleccionar el empleado").integer("Favor seleccionar el empleado"),nombre:A().trim().required("Favor de ingresar el apellido").matches(K,"Favor ingresar solo letras del abecedario"),apellido:A().trim().required("Favor de ingresar el apellido").matches(K,"Favor ingresar solo letras del abecedario"),complete_name:A().trim().required("Favor de ingresar el apellido").matches(K,"Favor ingresar solo letras del abecedario"),identificacion:A().trim().required("Favor seleccionar el empleado"),fecha_ini:de().transform((n,o)=>o===""?null:n).typeError("Favor seleccionar el empleado").nullable(!0).default(null).notRequired(),dv:A().typeError("Favor seleccionar el empleado").nullable(!0).notRequired().test("check","Favor ingresar un n\xFAmero de dos decimales",n=>!!(!n||n&&n.match(Xe)))}).typeError("Favor seleccionar el empleado")}),new_empleado:z().typeError("Favor ingresar el empleado").nullable().when("seleccion",{is:"new",then:z().shape({nombre:A().trim().required("Favor de ingresar el nombre").matches(K,"Favor ingresar solo letras del abecedario"),apellido:A().trim().required("Favor de ingresar el apellido").matches(K,"Favor ingresar solo letras del abecedario"),dv:A().trim().nullable(!0).notRequired().test("check","Favor ingresar un n\xFAmero de dos decimales",n=>!!(!n||n&&n.match(Xe))),tipoIdentificacion:A().trim().required("Favor de ingresar el tipo de identificaci\xF3n").test("is-identificacion","Favor de ingresar un tipo de identificaci\xF3n v\xE1lido: "+[...pe,"C\xE9dula No verificada"].join(", "),n=>[...pe,"C\xE9dula No verificada"].includes(n)),identificacion:A().trim().required("Favor de ingresar la c\xE9dula o pasaporte").matches(eo,"Favor de ingresar solo n\xFAmeros, letras en may\xFAscula y/o guiones (-)"),seguro:A().trim().nullable(!0).notRequired().test("check-seguro","Favor de ingresar solo n\xFAmeros, letras en may\xFAscula y/o guiones (-)",n=>!!(!n||n&&new RegExp(eo).test(n))),fecha_ini:de().transform((n,o)=>o===""?null:n).typeError("Favor de seleccionar la fecha de inicio del empleado").nullable(!0).default(null).notRequired()})})}),lo=()=>{var p,d,h,g,x,u,N,w,v,C,P,T,I,F,S,H;const n=y(),{register:o,formState:r,control:t,setValue:a}=n,{errors:s}=r,m=E({control:t,name:"new_empleado.conyuge_no_trabaja"});return l(M,{spacing:1,style:{marginTop:10},children:[e(so,{control:t,label:"Tipo de identificaci\xF3n",options:[...pe,"C\xE9dula No verificada"],error:!!((p=s==null?void 0:s.new_empleado)!=null&&p.tipoIdentificacion),helperText:(h=(d=s==null?void 0:s.new_empleado)==null?void 0:d.tipoIdentificacion)==null?void 0:h.message,name:"new_empleado.tipoIdentificacion",required:!0}),e(te,_({label:"Nombre",fullWidth:!0,error:!!((g=s==null?void 0:s.new_empleado)!=null&&g.nombre),helperText:(u=(x=s==null?void 0:s.new_empleado)==null?void 0:x.nombre)==null?void 0:u.message,required:!0},o("new_empleado.nombre"))),e(te,_({label:"Apellido",fullWidth:!0,error:!!((N=s==null?void 0:s.new_empleado)!=null&&N.apellido),helperText:(v=(w=s==null?void 0:s.new_empleado)==null?void 0:w.apellido)==null?void 0:v.message,required:!0},o("new_empleado.apellido"))),e(te,_({label:"Identificaci\xF3n",fullWidth:!0,error:!!((C=s==null?void 0:s.new_empleado)!=null&&C.identificacion),helperText:(I=(T=(P=s==null?void 0:s.new_empleado)==null?void 0:P.identificacion)==null?void 0:T.message)!=null?I:"C\xE9dula o Pasaporte",required:!0},o("new_empleado.identificacion"))),e(te,_({label:"Seguro social",fullWidth:!0,error:!!((F=s==null?void 0:s.new_empleado)!=null&&F.seguro),helperText:(H=(S=s==null?void 0:s.new_empleado)==null?void 0:S.seguro)==null?void 0:H.message},o("new_empleado.seguro"))),e(Eo,{control:e(io,{checked:m===4,onChange:W=>{a("new_empleado.conyuge_no_trabaja",W.target.checked?4:1)}}),label:"Casado(a) y c\xF3nyuge no trabaja"})]})},mn=()=>{const{mainNegocioId:n,clienteId:o}=c.exports.useContext(U),{control:r,formState:t}=y(),{errors:a}=t;return e(_o,{control:r,name:"empleado_selected",render:({field:s})=>{var m,p,d,h,g;return e(Do,D(_({},s),{urlFetch:`/admin/contratos/${n}/${o}/input-planilla`,enableFirst:!0,onChange:(x,u)=>s.onChange(u),inputProps:{label:"Empleado",helperText:(p=(m=a==null?void 0:a.empleado_selected)==null?void 0:m.id)==null?void 0:p.message,error:!!((g=(h=(d=t.errors)==null?void 0:d.empleado_selected)==null?void 0:h.id)!=null&&g.message)},fullWidth:!0,isOptionEqualToValue:(x,u)=>x.id===u.id,getOptionLabel:x=>x.complete_name||"",renderOption:(x,u,{selected:N})=>l(Io,D(_({},x),{style:{textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[e(io,{icon:e(To,{}),checkedIcon:e(Ao,{}),style:{marginRight:8},checked:N}),l("div",{style:{display:"flex",flexDirection:"column",textTransform:"uppercase"},children:[l(f,{variant:"body1",children:[u.nombre," ",u.apellido]}),e(f,{variant:"body2",children:u.identificacion})]})]}))}))}})},un=()=>{var a;const{control:n,formState:o}=y(),{errors:r}=o,t=E({control:n,name:"seleccion"});return l(b,{children:[e(so,{label:"Selecci\xF3n",options:["Insertar nuevo empleado","Empleado de la lista actual de contratos"],values:["new","old"],error:!!(r!=null&&r.seleccion),helperText:(a=r==null?void 0:r.seleccion)==null?void 0:a.message,name:"seleccion",required:!0}),t==="old"&&e("div",{style:{marginTop:10},children:e(mn,{})}),t==="new"&&e(lo,{})]})},oo=()=>{const n=c.exports.useContext(U),{modalAgregarContrato:o}=n,{modalState:r,setHide:t}=o,a=ae({mode:"all",resolver:re(co)}),s=he(),{handleAppenContrato:m}=dn(a,s),[,,,p,,d]=s,h=c.exports.useCallback(()=>{t(),d(),a.reset({seleccion:""})},[]);return e(ie,{state:r,title:"Agregar Empleado",setHide:()=>h(),cancelBotton:{text:"Cerrar",actionFunction:()=>h()},actionButton:{text:"Agregar",actionFunction:a.handleSubmit(m)},children:l(se,D(_({},a),{children:[p&&e(ee,{severity:"error",variant:"outlined",sx:{width:"100%",mb:2},children:p==null?void 0:p.message}),e(un,{})]}))})},pn=n=>{const{reset:o}=n,r=c.exports.useContext(ce),{negocioContrato:t,setNullNegocioContrato:a}=r,{control:s}=y(),m=E({control:s,name:"negocios"}),[p,d,h,g,,x]=he(),{update:u}=c.exports.useContext(U);c.exports.useEffect(()=>{(()=>{if(t){const{negocioIndex:C,contratoIndex:P}=t,T=m[C].contratos[P];o({seleccion:"new",new_empleado:D(_({},T),{tipoIdentificacion:T.tipo_identificacion})})}else o({seleccion:"new",new_empleado:{}})})()},[t]);const N=v=>{const{negocioIndex:C,contratoIndex:P}=t,T=m[C].contratos[P];d(`/admin/contratos/${T.id_contrato}/edit-planilla`,{method:"POST",data:v.new_empleado}).then(I=>{if(I.data){const F=v.new_empleado,S=T;S.apellido=F.apellido||"",S.nombre=F.nombre||"",S.complete_name=`${F.nombre} ${F.apellido}`,S.tipo_identificacion=F.tipoIdentificacion||"",S.identificacion=F.identificacion||"",S.seguro=F.seguro||"",S.conyuge_no_trabaja=F.conyuge_no_trabaja,u(P,_({},S)),o({seleccion:"new",new_empleado:{}}),a(),x()}})};return{handleSetHide:c.exports.useCallback(()=>{a(),x(),o({seleccion:"new",new_empleado:{}})},[]),onSubmit:N,isLoading:p,response:h,error:g}},hn=()=>{const n=c.exports.useContext(ce),{negocioContrato:o}=n,r=ae({mode:"all",resolver:re(co)}),{handleSubmit:t}=r,a=pn(r),{handleSetHide:s,onSubmit:m,isLoading:p}=a,{response:d,error:h}=a;return l(ie,{state:o!==null,setHide:()=>s(),title:"Editar Empleado",actionButton:{text:"Guardar",actionFunction:t(m),isLoading:p},children:[(d||h)&&e(ee,{variant:"outlined",severity:d?"success":"error",children:(d==null?void 0:d.message)||(h==null?void 0:h.message)}),e(se,D(_({},r),{children:e(lo,{})}))]})},gn=n=>{const{fieldsNegocios:o}=c.exports.useContext(O),{remove:r}=o,{negocioIndex:t}=n,{control:a}=y(),s=E({control:a,name:`negocios.${t}`});return s.contratos&&s.contratos.length>0?l(b,{children:[e(cn,{negocioIndex:t}),e(ln,{negocioIndex:t}),e(oo,{}),e(hn,{})]}):l(ee,{severity:"error",action:t!==0&&t!=="0"&&e(Y,{variant:"contained",color:"error",size:"small",onClick:()=>r(Number(t)),startIcon:e(ao,{}),children:"Remover negocio"}),children:[e(f,{fontWeight:"bold",children:"Favor ingresar al menos un empleado"}),e(oo,{})]})},Ne=c.exports.createContext({}),xn=({children:n})=>{const o=ge();return e(Ne.Provider,{value:{modalAgregarNegocio:o},children:n})},Nn="_divBtnAgregar_1mbg8_1",bn="_btnAgregar_1mbg8_9";var le={divBtnAgregar:Nn,btnAgregar:bn};const vn=()=>{const{modalAgregarNegocio:n}=c.exports.useContext(Ne),{setOpen:o}=n,{modalAgregarContrato:r}=c.exports.useContext(U),{setOpen:t}=r;return l("div",{className:le.divBtnAgregar,children:[e(Y,{className:le.btnAgregar,variant:"contained",size:"small",onClick:()=>t(),startIcon:e(yo,{}),children:"Agregar empleado"}),e(Y,{className:le.btnAgregar,variant:"contained",color:"success",size:"small",onClick:()=>o(),startIcon:e(zo,{}),children:"Agregar negocio"})]})},fn=z().shape({negocio_cobrar:z().shape({id:X().typeError("Favor ingresar el id").integer("Favor ingresar el negocio").positive("Favor ingresar el negocio").required("Favor ingresar el id")}).typeError("Favor seleccionar un negocio").required("Favor seleccionar un negocio")}),_n=(n,o)=>{const{fieldsNegocios:r}=c.exports.useContext(O),{append:t}=r,{control:a}=y(),s=E({control:a,name:"negocios"}),m=()=>{o(),n.reset({})};return{handleAppendNegocio:d=>{s.findIndex(g=>Number(g.id_negocio)===Number(d.negocio_cobrar.id))===-1?(t({id_negocio:d.negocio_cobrar.id,id_cliente:d.negocio_cobrar.id_cliente,nombre:d.negocio_cobrar.nombre_negocio,tipo:d.negocio_cobrar.tipo,contratos:[]}),m()):n.setError("negocio_cobrar",{message:"El negocio ya existe en la planilla actual"})},handleSetHide:m}},Cn=()=>{const{modalAgregarNegocio:n}=c.exports.useContext(Ne),{modalState:o,setHide:r}=n,t=ae({resolver:re(fn)}),{handleAppendNegocio:a,handleSetHide:s}=_n(t,r);return e(se,D(_({},t),{children:e(ie,{state:o,title:"Agregar Negocio",setHide:()=>s(),cancelBotton:{text:"Cerrar",actionFunction:()=>s()},actionButton:{text:"Agregar",actionFunction:t.handleSubmit(a)},children:e(Ro,{name:"negocio_cobrar",label:"Negocio"})})}))},be=c.exports.createContext({}),Fn=({children:n,clienteId:o,mainNegocioId:r})=>{const t=ge();return e(be.Provider,{value:{modalSaveData:t,clienteId:o,mainNegocioId:r},children:n})},Sn="_divSaveData_28j6j_1";var yn={divSaveData:Sn};const wn=()=>{const{fetcherSaveData:n}=c.exports.useContext(O),o=c.exports.useContext(be),{mainNegocioId:r,clienteId:t}=o,[,a]=n,{date:s}=c.exports.useContext(Z);return{handleSaveData:p=>{a(`/admin/negocios/${r}/${t}/planillar`,{method:"POST",data:D(_({},p),{date:s})})}}},Mn=()=>{const{fetcherSaveData:n}=c.exports.useContext(O),{modalSaveData:o}=c.exports.useContext(be),{modalState:r,setHide:t,setOpen:a}=o,{handleSubmit:s,formState:m}=y(),{errors:p}=m,{handleSaveData:d}=wn(),[h,,g,x]=n,u=xo();return l(b,{children:[e(B,{}),e("div",{className:yn.divSaveData,children:e(Y,{variant:"outlined",onClick:()=>a(),children:"Guardar"})}),e(ie,{state:r,setHide:()=>t(),title:"\xA1Atenci\xF3n!",type:g?"SUCCESS":"ERROR",actionButton:g?{text:"Ver",actionFunction:()=>u(`/planillas/${g.id}`,{replace:!0})}:!p.negocios&&(!g||x)?{text:"Guardar",actionFunction:s(d),isLoading:h}:void 0,children:g?l(b,{children:[g.message,". \xBFDesea ver la planilla ",e("strong",{children:"SIPE"})," ","realizada?"]}):p.negocios?e(b,{children:"Se encontraron errores en el formulario. Favor corregir antes de avanzar."}):!p.negocios&&!x?e(b,{children:"\xBFRealmente desea guardar los datos?"}):e(b,{children:x==null?void 0:x.message})})]})},Pn=()=>{const n=c.exports.useContext(O),{date:o}=c.exports.useContext(Z),{fieldsNegocios:r,isDecimo:t}=n,{mainNegocioId:a,clienteId:s}=n,{fields:m}=r;return l(xn,{children:[e(Q,{variant:"outlined",className:i.paperTables,children:l(M,{direction:"column",spacing:1,marginTop:1,margin:1,children:[l(f,{variant:"h5",children:["Formulario para la planilla del mes de:"," ",e("span",{className:i.fechaTables,children:q(o,"MMMM yyyy")})]}),e(B,{}),m.map((p,d)=>l(Q,{variant:"outlined",children:[l(f,{variant:"h5",textTransform:"uppercase",fontWeight:"bold",padding:1,color:d===0?"red":"darkorange",children:[p.tipo," ",p.nombre]}),e(rn,{mainNegocioId:m[0].id_negocio,clienteId:m[0].id_cliente,negocioIndex:d,isDecimo:t,children:l(sn,{children:[e(gn,{negocioIndex:d}),e(vn,{})]})})]},`${d}`)),e(Q,{variant:"outlined",className:i.paperNotas,children:l(M,{direction:"column",spacing:1,children:[e(f,{variant:"h5",children:"Notas:"}),e(B,{}),e(qo,{name:"notas",height:300})]})}),e(Fn,{mainNegocioId:a,clienteId:s,children:e(Mn,{})})]})}),e(Cn,{})]})},ve=n=>{const[,o]=c.exports.useContext(R),r=c.exports.useMemo(()=>o.planillas[n].negocios.flatMap(a=>a.contratos).map(a=>Number(a.indemnizacion)).reduce((a,s)=>a+s)>0,[n]),t=c.exports.useMemo(()=>o.planillas[n].negocios.flatMap(a=>a.contratos).map(a=>Number(a.indemnizacion)).reduce((a,s)=>a+s)>0,[n]);return{isIndemnizacion:r,isPreaviso:t}},$n=({page:n})=>{const{isIndemnizacion:o,isPreaviso:r}=ve(n);return e("thead",{children:l("tr",{children:[e("th",{className:i.header,children:"Nombre"}),e("th",{className:i.header,children:"C\xE9dula"}),e("th",{className:i.header,children:"Salario"}),e("th",{className:i.header,children:"D\xE9cimo"}),e("th",{className:i.header,children:"Vacaciones"}),e("th",{className:i.header,children:"Imp. Renta"}),e("th",{className:i.header,children:"Horas Extras"}),e("th",{className:i.header,children:"Comisiones"}),o&&e("th",{className:i.header,children:"Comisiones"}),r&&e("th",{className:i.header,children:"Comisiones"}),e("th",{className:i.header,children:"Totales"})]})})},En=({page:n,index:o})=>{const[,r]=c.exports.useContext(R),{isIndemnizacion:t,isPreaviso:a}=ve(n);return l(b,{children:[t&&e("td",{children:$(r==null?void 0:r.planillas[n].negocios.flatMap(s=>s.contratos)[o].indemnizacion)}),a&&e("td",{children:$(r==null?void 0:r.planillas[n].negocios.flatMap(s=>s.contratos)[o].preaviso)})]})},L=({page:n,name:o})=>{const[,r]=c.exports.useContext(R),t=c.exports.useMemo(()=>r==null?void 0:r.planillas[n].negocios.flatMap(a=>a.contratos).map(a=>Number(a[o]||0)).reduce((a,s)=>a+s),[n]);return e(b,{children:$(t)})},Tn=({page:n})=>{const[,o]=c.exports.useContext(R),r=c.exports.useMemo(()=>o==null?void 0:o.planillas[n].negocios.flatMap(t=>t.contratos).map(t=>Number(t.salario||0)+Number(t.decimo||0)+Number(t.vacaciones||0)+Number(t.impuesto_renta||0)+Number(t.horas_extras||0)+Number(t.comisiones||0)+Number(t.indemnizacion||0)+Number(t.preaviso||0)).reduce((t,a)=>t+a),[n]);return e(b,{children:$(r)})},An=({page:n})=>{const{isIndemnizacion:o,isPreaviso:r}=ve(n);return l("tr",{className:i.row,children:[e("td",{className:i.column,children:"Totales"}),e("td",{className:i.column}),e("td",{className:i.column,children:e(L,{name:"salario",page:n})}),e("td",{className:i.column,children:e(L,{name:"decimo",page:n})}),e("td",{className:i.column,children:e(L,{name:"vacaciones",page:n})}),e("td",{className:i.column,children:e(L,{name:"impuesto_renta",page:n})}),e("td",{className:i.column,children:e(L,{name:"horas_extras",page:n})}),e("td",{className:i.column,children:e(L,{name:"comisiones",page:n})}),o&&e("td",{className:i.column,children:e(L,{name:"indemnizacion",page:n})}),r&&e("td",{className:i.column,children:e(L,{name:"preaviso",page:n})}),e("td",{colSpan:2,className:i.column,children:e(Tn,{page:n})})]})},Dn=()=>{const[,n]=c.exports.useContext(R),{page:o,setPage:r}=c.exports.useContext(xe);return l(Q,{className:ue.paperLastedPlanillas,variant:"outlined",component:M,spacing:1,direction:"column",paddingBottom:1,children:[l(f,{variant:"h5",className:ue.paperTitle,children:["Informaci\xF3n de la planilla anterior del mes de:"," ",l("strong",{children:["(",q(n==null?void 0:n.planillas[o].mes,"MMMM - yyyy"),")"]})]}),e("div",{className:i.lastedTableResponsive,children:l("table",{className:i.table,children:[e($n,{page:o}),l("tbody",{children:[n==null?void 0:n.planillas[o].negocios.flatMap(t=>t.contratos).map((t,a)=>l("tr",{className:i.row,children:[l("td",{className:i.column,children:[t.nombre," ",t.apellido]}),e("td",{className:i.column,children:t.identificacion}),e("td",{className:i.column,children:$(t.salario)}),e("td",{className:i.column,children:$(t.decimo)}),e("td",{className:i.column,children:$(t.vacaciones)}),e("td",{className:i.column,children:$(t.impuesto_renta)}),e("td",{className:i.column,children:$(t.horas_extras)}),e("td",{className:i.column,children:$(t.comisiones)}),e(En,{page:o,index:a}),e("td",{className:i.column,children:$(Number(t.salario)+Number(t.decimo)+Number(t.vacaciones)+Number(t.impuesto_renta)+Number(t.horas_extras)+Number(t.comisiones)+Number(t.indemnizacion)+Number(t.preaviso))})]},`${t.id_contrato}`)),e(An,{page:o})]})]})}),e(Ho,{color:"primary",count:n==null?void 0:n.planillas.length,page:o+1,onChange:(t,a)=>r(a-1)})]})};var fe={},In=Lo.exports;Object.defineProperty(fe,"__esModule",{value:!0});var mo=fe.default=void 0,zn=In(ko),Rn=jo,qn=(0,zn.default)((0,Rn.jsx)("path",{d:"M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"}),"CalendarMonth");mo=fe.default=qn;const Hn=a=>{var s=a,{date:n,minDate:o,maxDate:r}=s,t=Ke(s,["date","minDate","maxDate"]);const[m,p]=c.exports.useState(me(n||Date.now())),[d,h]=c.exports.useState(!1),{render:g,setDate:x}=t,u=()=>{h(!1),p(me(n||Date.now()))};return l(b,{children:[g(d,N=>h(N)),l(Mo,{open:d,onClose:()=>u(),children:[e(Po,{children:e(f,{style:{textTransform:"uppercase"},children:q(m,"MMMM")})}),e(Wo,{date:m,maxDate:o||No(m,12),minDate:r||Bo(m,12),onChange:N=>{N&&p(N)}}),l($o,{children:[e(Y,{onClick:()=>u(),children:"Cerrar"}),e(Y,{onClick:()=>{h(!1),x(m)},children:"Ok"})]})]})]})},kn=()=>{const{date:n,setDate:o}=c.exports.useContext(Z);return e(b,{children:e(Hn,{date:Co(n),setDate:r=>{o(q(me(r),"yyyy-MM-dd HH:mm:ss"))},render:(r,t)=>e(Vo,{title:"Seleccinar Mes",disableInteractive:!0,children:e(ro,{onClick:()=>t(!0),children:e(mo,{})})})})})},Ln=()=>{const n=c.exports.useContext(R),[,o]=n;return l(b,{children:[l(M,{direction:"row",spacing:1,justifyContent:"space-between",divider:e(B,{orientation:"vertical",flexItem:!0}),children:[l(f,{children:[e("strong",{children:"Usuario Elaborador"}),": ",o==null?void 0:o.user_elaborador]}),l(f,{children:[e("strong",{children:"Contrase\xF1a Elaborador"}),": ",o==null?void 0:o.password_elaborador]})]}),e(B,{}),l(M,{direction:"row",spacing:1,justifyContent:"space-between",divider:e(B,{orientation:"vertical",flexItem:!0}),children:[l(f,{children:[e("strong",{children:"Usuario Representante Legal"}),":"," ",o==null?void 0:o.user_representante]}),l(f,{children:[e("strong",{children:"Contrase\xF1a Representante Legal"}),":"," ",o==null?void 0:o.password_representante]})]})]})},jn=c.exports.lazy(()=>bo(()=>import("./index52.js"),["assets/index52.js","assets/index.js","assets/index.css","assets/useFetcher.js","assets/constants.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Portal.js","assets/isHostComponent.js","assets/Grow.js","assets/array.js","assets/upperFirst.js","assets/useModal.js","assets/jwt-decode.esm.js","assets/IconButton.js","assets/ButtonBase.js","assets/Modal2.js","assets/Close2.js","assets/Typography.js","assets/extendSxProp.js","assets/Error.js","assets/Backdrop.js","assets/Modal.js","assets/Paper.js","assets/Button.js","assets/TextInput.js","assets/TextField.js","assets/react-is.production.min.js","assets/Menu.js","assets/List.js","assets/GlobalStyles.js","assets/Stack.js","assets/Divider.js","assets/Loader.js","assets/Grid.js","assets/Alert.js","assets/Close.js"])),Vn=()=>{const n=c.exports.useContext(R),[,o,,,r]=n,{date:t}=c.exports.useContext(Z),{page:a}=c.exports.useContext(xe);return e(Q,{className:ue.paper,variant:"outlined",children:l(M,{divider:e(B,{}),direction:"column",spacing:1,children:[l(M,{direction:{xs:"column",md:"row"},justifyContent:"space-between",children:[l(M,{direction:"row",spacing:1,alignItems:"center",children:[l(f,{variant:"h5",color:"green",fontWeight:"bold",textTransform:"uppercase",children:[o==null?void 0:o.tipo," ",o==null?void 0:o.nombre_negocio]}),e(c.exports.Suspense,{fallback:e("div",{}),children:e(jn,{id:o==null?void 0:o.id_negocio,update:s=>r(_(_({},o),s))})})]}),l(M,{direction:"row",alignItems:"center",children:[t&&e(kn,{}),l(f,{variant:"h5",fontWeight:"bold",textTransform:"uppercase",children:["MES A REALIZAR:"," "]}),e(f,{variant:"h5",fontWeight:"bold",textTransform:"uppercase",color:"red",marginLeft:1,children:q(t,"MMMM yyyy")})]})]}),l(f,{component:M,spacing:1,direction:"row",children:[e("strong",{children:"Raz\xF3n social:"})," ",e("span",{children:o==null?void 0:o.nom_cliente})]}),l(f,{component:M,spacing:1,direction:"row",children:[e("strong",{children:"RUC:"})," ",e("span",{children:o==null?void 0:o.ruc}),e("strong",{children:"DV:"})," ",e("span",{children:o==null?void 0:o.dv}),e("strong",{children:"Ruta:"})," ",e("span",{children:o==null?void 0:o.ruta})]}),l(f,{component:M,spacing:1,direction:"row",children:[e("strong",{children:"N. Patronal:"})," ",e("span",{children:o==null?void 0:o.n_patronal}),e("strong",{children:"Patronal SIPE:"})," ",e("span",{children:o==null?void 0:o.patronal_sipe})]}),e(Ln,{}),o&&q(o.mes,"M")===q(o.next_month,"M")&&e(ee,{variant:"outlined",severity:"error",children:l(M,{direction:"row",alignItems:"center",spacing:1,children:[e("span",{children:"Ya se ha realizado la planilla del mes de"}),e(f,{textTransform:"uppercase",fontWeight:"bold",children:q(o.mes,"MMMM")})]})}),o&&o.planillas&&o.planillas.length!==0?l(b,{children:[e(Dn,{}),o.planillas[a].notas&&o.planillas[a].notas!==""&&l(M,{direction:"column",children:[e(f,{variant:"subtitle1",fontWeight:"bold",children:"Notas:"}),wo(o.planillas[a].notas)]})]}):e(ee,{variant:"outlined",severity:"warning",children:"No se encontr\xF3 informaci\xF3n sobre planillas anteriores"})]})})},Wn=()=>{const n=c.exports.useContext(R),[,o,r]=n;return l(b,{children:[!o&&!r&&e(vo,{}),!o&&r&&e(fo,{text:r.message}),o&&!r&&l(M,{direction:"column",spacing:1,children:[e(Jo,{children:e(Vn,{})}),e(Zo,{children:e(Pn,{})})]})]})},xa=()=>e(Uo,{children:l(Go,{children:[e(Oo,{message:"Planillas"}),e(Wn,{})]})});export{xa as default};
