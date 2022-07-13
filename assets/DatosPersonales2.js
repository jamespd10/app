var C=Object.defineProperty;var q=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var F=(n,r,d)=>r in n?C(n,r,{enumerable:!0,configurable:!0,writable:!0,value:d}):n[r]=d,s=(n,r)=>{for(var d in r||(r={}))j.call(r,d)&&F(n,d,r[d]);if(q)for(var d of q(r))I.call(r,d)&&F(n,d,r[d]);return n};import{u as P,c as S}from"./yup.module.js";import{S as b}from"./SelectHookForm.js";import{p as y,l as D,a as w,e as G}from"./constantsLists.js";import{a as e,j as T,r as N,F as $}from"./index.js";import{T as l}from"./TextInput.js";import{G as o}from"./Grid.js";import{P as k}from"./Paper.js";import{T as A}from"./Typography.js";import{S as _}from"./Stack.js";import{B as W}from"./Button.js";import{P as B}from"./PhoneInput.js";import{N as H}from"./Nacionalidad.js";import"./Box.js";import"./TextField.js";import"./useFormControl.js";import"./useControlled.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./isHostComponent.js";import"./Portal.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./GlobalStyles.js";import"./emotion-react.browser.esm.js";import"./MenuItem.js";import"./ButtonBase.js";import"./useIsFocusVisible.js";import"./listItemIconClasses.js";import"./Divider.js";import"./listItemTextClasses.js";import"./react-number-format.es.js";import"./AutocompleteServer.js";import"./useFetch.js";import"./useHttpService.js";import"./Autocomplete.js";import"./Close.js";import"./IconButton.js";import"./Popper.js";import"./Chip.js";import"./ListItem.js";import"./ListItemText.js";const z={detalle:"",costo:""},J=()=>{const{register:n,formState:r,control:d}=P(),{fields:t,append:u,remove:h}=S({control:d,name:"dependientes"}),f=()=>u(z),x=()=>{t.length>1&&h(t.length-1)};return e(o,{item:!0,xs:12,children:e(k,{variant:"outlined",sx:{padding:1},children:T(o,{container:!0,item:!0,xs:12,spacing:1,direction:"column",children:[e(o,{item:!0,xs:12,children:e(A,{children:"Dependientes"})}),e(o,{item:!0,xs:12,container:!0,spacing:1,children:t.map((g,i)=>{var a,m,p,c;return T(N.exports.Fragment,{children:[e(o,{item:!0,xs:12,md:3,children:e(l,s({label:"Nombre",required:t.length>1,fullWidth:!0,error:!!(r.errors.dependientes&&r.errors.dependientes[i]&&r.errors.dependientes[i].nombre),helperText:r.errors.dependientes&&r.errors.dependientes[i]&&r.errors.dependientes[i].nombre?(a=r.errors.dependientes[i].nombre)==null?void 0:a.message:void 0},n(`dependientes.${i}.nombre`)))}),e(o,{item:!0,xs:12,md:3,children:e(l,s({label:"Apellido",required:t.length>1,fullWidth:!0,error:!!(r.errors.dependientes&&r.errors.dependientes[i]&&r.errors.dependientes[i].apellido),helperText:r.errors.dependientes&&r.errors.dependientes[i]&&r.errors.dependientes[i].apellido?(m=r.errors.dependientes[i].apellido)==null?void 0:m.message:void 0},n(`dependientes.${i}.apellido`)))}),e(o,{item:!0,xs:12,md:3,children:e(l,s({label:"Edad",required:t.length>1,fullWidth:!0,error:!!(r.errors.dependientes&&r.errors.dependientes[i]&&r.errors.dependientes[i].edad),helperText:r.errors.dependientes&&r.errors.dependientes[i]&&r.errors.dependientes[i].edad?(p=r.errors.dependientes[i].edad)==null?void 0:p.message:void 0},n(`dependientes.${i}.edad`)))}),e(o,{item:!0,xs:12,md:3,children:e(b,{control:d,label:"Parentesco",required:t.length>1,options:y,error:!!(r.errors.dependientes&&r.errors.dependientes[i]&&r.errors.dependientes[i].parentesco),helperText:r.errors.dependientes&&r.errors.dependientes[i]&&r.errors.dependientes[i].parentesco?(c=r.errors.dependientes[i].parentesco)==null?void 0:c.message:void 0,name:`dependientes.${i}.parentesco`})})]},`${g.id}`)})}),e(o,{item:!0,xs:12,justifyContent:"center",children:T(_,{direction:"row",spacing:1,justifyContent:"center",children:[e(W,{variant:"outlined",onClick:f,children:"Agregar"}),t.length>1&&e(W,{variant:"outlined",color:"error",onClick:x,children:"Eliminar"})]})})]})})})},Ge=()=>{var u,h,f,x,g,i,a,m,p,c,v,E;const{register:n,formState:r,control:d}=P(),{errors:t}=r;return e($,{children:T(o,{container:!0,spacing:1,direction:"row",wrap:"wrap",sx:{"& > :not(style)":{flexGrow:1}},children:[e(o,{item:!0,sm:6,md:4,children:e(l,s({label:"Nombre",fullWidth:!0,error:!!t.nombre,helperText:(u=t.nombre)==null?void 0:u.message,required:!0},n("nombre")))}),e(o,{item:!0,sm:6,md:4,children:e(l,s({label:"Apellido",fullWidth:!0,error:!!t.apellido,helperText:(h=t.apellido)==null?void 0:h.message,required:!0},n("apellido")))}),e(o,{item:!0,sm:6,md:4,children:e(l,s({label:"Edad",fullWidth:!0,error:!!t.edad,helperText:(f=t.edad)==null?void 0:f.message,required:!0},n("edad")))}),e(o,{item:!0,sm:6,md:4,children:e(l,s({label:"D\xEDgito verificador",fullWidth:!0,error:!!t.dv,helperText:(x=t.dv)==null?void 0:x.message},n("dv")))}),e(o,{item:!0,sm:6,md:4,children:e(b,{control:d,label:"G\xE9nero",options:D,error:!!t.genero,helperText:(g=t.genero)==null?void 0:g.message,name:"genero",required:!0})}),e(o,{item:!0,sm:6,md:4,children:e(b,{control:d,label:"Tipo de identificaci\xF3n",options:[...w,"C\xE9dula No verificada"],error:!!t.tipoIdentificacion,helperText:(i=t.tipoIdentificacion)==null?void 0:i.message,name:"tipoIdentificacion",required:!0})}),e(o,{item:!0,sm:6,md:4,children:e(l,s({label:"Identificaci\xF3n",fullWidth:!0,error:!!t.identificacion,helperText:(m=(a=t.identificacion)==null?void 0:a.message)!=null?m:"C\xE9dula o Pasaporte",required:!0},n("identificacion")))}),e(o,{item:!0,sm:6,md:4,children:e(l,s({label:"Seguro social",fullWidth:!0,error:!!t.seguro,helperText:(c=(p=t.seguro)==null?void 0:p.message)!=null?c:"Ejm: 000-0000 \xF3 c\xE9dula/pasaporte"},n("seguro")))}),e(o,{item:!0,sm:6,md:4,children:e(H,{disableHeight:!0})}),e(o,{item:!0,sm:6,md:4,children:e(b,{control:d,label:"Estado civil",options:G,error:!!t.estado_civil,helperText:(v=t.estado_civil)==null?void 0:v.message,name:"estado_civil",required:!0})}),e(o,{item:!0,sm:6,md:4,children:e(B,{name:"telefono",label:"Tel\xE9fono",fullWidth:!0,error:!!t.telefono,helperText:t.telefono&&t.telefono.message?t.telefono.message:"Ejm: 6666-6666 \xF3 222-2222"})}),e(o,{item:!0,xs:"auto",children:e(l,s({label:"Direcci\xF3n",fullWidth:!0,error:!!t.direccion,helperText:(E=t.direccion)==null?void 0:E.message,required:!0},n("direccion")))}),e(J,{})]})})};export{Ge as default};
