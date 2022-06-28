import{r as a,a as t,b as x,A as g,j as f}from"./index.js";import{L as S}from"./Loader.js";import{H as h}from"./HeaderTitle.js";import"./BootstrapTooltip.js";import{u as C}from"./useModal.js";import{u as _}from"./useQueryParams.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import v from"./Modal.js";import"./SelectedCard.js";import{d as P}from"./AddRounded.js";import{F as b}from"./FabLink.js";import{u as A}from"./useFetchPagination.js";import{B as y}from"./Box.js";const T=a.exports.createContext({}),j=({children:n})=>{const[r,i]=a.exports.useState([]),{loading:s,value:e,handlePage:o,page:l,handleSkipNext:c,handleSkipPrev:d,inputRef:p,sendSearch:u,onClearSearch:m}=A("/admin/clientes");return a.exports.useEffect(()=>{(()=>{!s&&e&&e.status===201&&e.data&&i([...e.data.resultados])})()},[e,s]),t(T.Provider,{value:{loading:s,value:e,handlePage:o,page:l,handleSkipNext:c,handleSkipPrev:d,inputRef:p,sendSearch:u,onClearSearch:m,clientes:r,setClientes:i},children:n})},F=a.exports.lazy(()=>x(()=>import("./ClientesTable.js"),["assets/ClientesTable.js","assets/index.js","assets/index5.css","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/appendOwnerState.js","assets/isHostComponent.js","assets/Grow.js","assets/NotFoundResults.js","assets/Grid.js","assets/Typography.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/Paper.js","assets/IconButton.js","assets/ButtonBase.js","assets/Error.js","assets/DialogContent.js","assets/LoadingButton.js","assets/Button.js","assets/SelectedCard.js","assets/Visibility.js","assets/CustomTable.js","assets/Search.js","assets/Clear.js","assets/TextField.js","assets/react-is.production.min.js","assets/List.js","assets/GlobalStyles.js","assets/Box.js","assets/InputAdornment.js","assets/FormGroup.js","assets/FormControlLabel.js","assets/Checkbox.js","assets/SkipNextOutlined.js","assets/Pagination.js","assets/TableRow.js","assets/Loader.js","assets/Stack.js","assets/LinearProgress.js","assets/AddBusiness.js","assets/ChipState.js","assets/Chip.js","assets/useFetch.js","assets/useHttpService.js","assets/HeaderTitle.js","assets/Divider.js","assets/useQueryParams.js","assets/AddRounded.js","assets/FabLink.js","assets/AssignmentRounded.js","assets/useFetchPagination.js","assets/useAsyncRetry.js","assets/useAsync.js","assets/useList.js","assets/usePrevious.js"])),k=()=>{const{queryParams:n}=_(),r=n.get("n"),{modalState:i,setHide:s}=C(!!r),{authState:e}=a.exports.useContext(g),{tipo:o}=e;return f(j,{children:[t(h,{message:"Clientes"}),t(y,{sx:{marginTop:2},children:t(a.exports.Suspense,{fallback:t(S,{}),children:t(F,{btnText:r&&o==="Super"?"Agregar":"Ver",route:"/clientes",isAddNegocio:o==="Super"?r:void 0})})}),!r&&o==="Super"&&t(b,{text:"Agregar cliente",icon:P,to:"/clientes/agregar"}),o==="Super"&&t(v,{state:i,setHide:s,title:"\xA1Atenci\xF3n!",body:r?"Favor seleccionar el cliente para agregar un negocio":""})]})};var G=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"}));export{T as C,G as i};
