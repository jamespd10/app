var d=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var l=(i,e)=>{var r={};for(var o in i)C.call(i,o)&&e.indexOf(o)<0&&(r[o]=i[o]);if(i!=null&&d)for(var o of d(i))e.indexOf(o)<0&&F.call(i,o)&&(r[o]=i[o]);return r};import{L as S}from"./Loader.js";import{r as R,ab as j,j as y,a}from"./index.js";import"./BootstrapTooltip.js";import{u as A}from"./useFetch.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import B from"./Modal.js";import"./SelectedCard.js";import{N as E}from"./index5.js";import"./Grid.js";import"./Typography.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./isHostComponent.js";import"./Grow.js";import"./useHttpService.js";import"./useModal.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./LoadingButton.js";import"./Backdrop.js";import"./Modal2.js";import"./Paper.js";import"./Button.js";import"./ButtonBase.js";import"./IconButton.js";import"./Error.js";import"./HeaderTitle.js";import"./Divider.js";import"./useFirstFetch.js";import"./useAsyncRetry.js";import"./useAsync.js";import"./NotFoundResults.js";import"./useFetchPagination.js";import"./useList.js";import"./usePrevious.js";import"./Stack.js";const ft=()=>{var n,c;const p=R.exports.useContext(E),{modalDelete:i}=p,e=l(p,["modalDelete"]),{selectedNegocio:r,retry:o}=e,{id:u}=j(),{modalState:x,setHide:f}=i,{isLoading:m,send:g,response:t,reset:h}=A(),s=()=>{t&&t.status===201&&o(),f(),h()};return y(B,{state:x,setHide:s,title:"\xA1Atenci\xF3n!",type:t&&t.status===201?"SUCCESS":"ERROR",cancelBotton:{text:t?"Cerrar":"Cancelar",actionFunction:s},actionButton:!t||(t==null?void 0:t.status)!==201?{text:"Eliminar",isLoading:m,actionFunction:async()=>{await g({url:`/admin/clientes/${r}/${u}/delete-asociacion`,method:"POST"})}}:void 0,children:[m&&a(S,{}),!m&&!t&&a("span",{children:"\xBFRealmente desea eliminar la asociaci\xF3n del negocio seleccionado?"}),!m&&t&&a("span",{children:((n=t.error)==null?void 0:n.message)||((c=t.data)==null?void 0:c.message)})]})};export{ft as default};
