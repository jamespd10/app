import{C as e}from"./CustomTable.js";import{f as m}from"./string.helper.js";import{a as p}from"./index.js";import"./Search.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./Clear.js";import"./TextField.js";import"./FormHelperText.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./GlobalStyles.js";import"./Box.js";import"./Typography.js";import"./InputAdornment.js";import"./IconButton.js";import"./ButtonBase.js";import"./Grid.js";import"./FormGroup.js";import"./FormControlLabel.js";import"./Checkbox.js";import"./SkipNextOutlined.js";import"./Pagination.js";import"./TableRow.js";import"./Button.js";import"./Loader.js";import"./BootstrapTooltip.js";import"./Tooltip.js";import"./Popper.js";import"./ContentProvider.js";import"./useModal.js";import"./SpeedDial.module.js";import"./Modal.js";import"./Close2.js";import"./LoadingButton.js";import"./Error.js";import"./SelectedCard.js";import"./Stack.js";import"./LinearProgress.js";import"./regex.js";const tr=i=>{const{gastos:t}=i;return p(e,{title:"Gastos",tableHeader:["Descripci\xF3n","Nombre","RUC","DV","Total"],size:"small",tableBody:t==null?void 0:t.map((r,o)=>[p("span",{style:{textTransform:"uppercase"},children:r.texto},`${r.texto}-gastos-${o}`),p("span",{style:{textTransform:"uppercase"},children:r.nombre},`${r.nombre}-gastos-nombre-${o}`),p("span",{style:{textTransform:"uppercase"},children:r.ruc},`${r.ruc}-gastos-ruc-${o}`),p("span",{style:{textTransform:"uppercase"},children:r.dv},`${r.dv}-gastos-dv-${o}`),m(r.valor)]).concat([...t.length>0?[["Total","","","",p("span",{style:{borderBottom:"double black",borderTop:"1px solid black"},children:m(t==null?void 0:t.map(r=>Number(r.valor)).reduce((r,o)=>r+o))},"total-gastos-span")]]:[]])})};export{tr as default};
