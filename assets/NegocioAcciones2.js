import{r as d,j as B,a as u}from"./index.js";import{u as T,e as f,V as $}from"./array.js";import{T as b}from"./index18.js";import{n as j}from"./itbmsSchema.js";import{E as y}from"./index52.js";import{u as A}from"./useCloseModal.js";import{s as m}from"./formulario.module.js";import{L as g}from"./LoadingButton.js";import"./upperFirst.js";import"./HeaderTitle.js";import"./Typography.js";import"./Divider.js";import"./StyledSpeedDial.js";import"./Assignment.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./FabButtonAction.js";import"./react-is.production.min.js";import"./AssignmentRounded.js";import"./ButtonBase.js";import"./emotion-react.browser.esm.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./appendOwnerState.js";import"./isHostComponent.js";import"./Grow.js";import"./ContentProvider.js";import"./useModal.js";import"./SpeedDial.module.js";import"./Backdrop.js";import"./Stack.js";import"./Paid.js";import"./Loader.js";import"./Grid.js";import"./CircularProgress.js";import"./regex.js";import"./Lazy.js";import"./BootstrapModalTitle.js";import"./ModalTransition.js";import"./Modal2.js";import"./Paper.js";import"./Close2.js";import"./IconButton.js";import"./BootstrapDivContent.js";import"./Button.js";const F=i=>{const{handleClose:a}=A(),{pagination:s}=d.exports.useContext(b),{fetcher:h,currentValue:x}=s,[c]=x,[,,n,,v]=h,{fetcher:C}=d.exports.useContext(y),[E,N]=C,{control:p,setError:S}=T(),l=f({control:p,name:"negocios"}),e=f({control:p,name:`negocios.${i}`});return{handleSave:async()=>{try{await j.validate(e);const{data:o}=await N(`/admin/f430/${e.id}`,{method:"PUT",data:e});if(o&&c){const r=n.resultados.findIndex(t=>t.id_negocio===e.id_negocio&&t.id===c.id);if(r!==-1){const t=n.resultados;t[r].ventas=o.ventas,t[r].compras=o.compras,t[r].retenciones=o.retenciones,t[r].total=o.total,v({paginas:n.paginas,resultados:t}),l&&l.length===1&&a()}}}catch(o){if(o instanceof $){const r=`negocios.${i}.${o.path}`.replaceAll("[",".").replaceAll("]",".");S(r,{message:o.message})}}},loading:E}},jo=({i})=>{const{handleSave:a,loading:s}=F(i);return B("div",{className:m.itemButtons,children:[u(g,{className:m.itemButton,variant:"contained",color:"info",onClick:()=>a(),loading:s,children:"Guardar"}),u(g,{className:m.itemButton,variant:"contained",color:"error",children:"Enviar a factura"})]})};export{jo as default};