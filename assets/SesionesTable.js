import{ab as f,a as t}from"./index.js";import"./BootstrapTooltip.js";import"./jwt-decode.esm.js";import{u as g}from"./useFetchPagination.js";import{N as I}from"./NotFoundResults.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import{C as u}from"./ChipState.js";import"./Modal.js";import"./platform.js";import{C}from"./CustomTable.js";import{k as a}from"./date.helper.js";import{G as E}from"./Grid.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./isHostComponent.js";import"./Grow.js";import"./useAsyncRetry.js";import"./useList.js";import"./usePrevious.js";import"./useHttpService.js";import"./Typography.js";import"./useModal.js";import"./Error.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./Chip.js";import"./ButtonBase.js";import"./Close2.js";import"./LoadingButton.js";import"./Backdrop.js";import"./Modal2.js";import"./Paper.js";import"./Button.js";import"./IconButton.js";import"./Search.js";import"./Clear.js";import"./TextField.js";import"./FormHelperText.js";import"./react-is.production.min.js";import"./List.js";import"./GlobalStyles.js";import"./Box.js";import"./InputAdornment.js";import"./FormGroup.js";import"./FormControlLabel.js";import"./Checkbox.js";import"./SkipNextOutlined.js";import"./Pagination.js";import"./TableRow.js";import"./Loader.js";import"./Stack.js";import"./LinearProgress.js";import"./index13.js";const Do=()=>{var r,m,p,s;const{id:e}=f(),{loading:d,value:o,handlePage:n,page:c}=g(`/admin/usuarios/${e}/sesiones`);return t(E,{item:!0,xs:12,md:6,children:t(C,{title:"Lista de sesiones",size:"small",tableHeader:["#","Dispositivo","Sistema operativo","Ip","Estado","Fecha de ingreso","Fecha de salida","Motivo de salida"],notFound:o&&(o==null?void 0:o.status)!==201&&t(I,{text:(r=o==null?void 0:o.error)==null?void 0:r.message}),loading:d,tableBody:(p=(m=o==null?void 0:o.data)==null?void 0:m.resultados)==null?void 0:p.map((i,h)=>[`${h+1}`,`${i.dispositivo}`,`${i.sistema_operativo}`,`${i.ip}`,t(u,{label:`${i.estado}`,color:i.estado==="ACTIVA"?"success":"error"}),a(`${i.fecha_ingreso}`,{hour12:!0,minute:"numeric",hour:"numeric"}),i.fecha_salida?a(`${i.fecha_salida}`,{hour12:!0,minute:"numeric",hour:"numeric"}):"No definida",`${i.motivo_salida==="CLOSE SESSION"?"SESI\xD3N CERRADA":i.motivo_salida==="EXPIRED TOKEN"?"TOKEN EXPIRADO":i.motivo_salida==="INACTIVITY"?"INVACTIVIDAD":"No definida"}`]),pagination:{count:(s=o==null?void 0:o.data)==null?void 0:s.paginas,onChange:n,page:c}})})};export{Do as default};
