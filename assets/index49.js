var E=Object.defineProperty;var u=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var x=(a,n,l)=>n in a?E(a,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[n]=l,f=(a,n)=>{for(var l in n||(n={}))v.call(n,l)&&x(a,l,n[l]);if(u)for(var l of u(n))I.call(n,l)&&x(a,l,n[l]);return a};import{r as s,a as e,b as y,j as t}from"./index.js";import{I as Q}from"./img-01-realizar.js";import{L as B}from"./Loader.js";import{I as i}from"./Img.js";import{T as R}from"./Typography.js";import"./Grid.js";import"./Box.js";const O=(a,n={},l=!0)=>{const[A,h]=s.exports.useState(null),[g,o]=s.exports.useState(!1),d=s.exports.useRef(null),c=()=>{d.current&&d.current.disconnect()};return s.exports.useEffect(()=>{h(a.current)},[a]),s.exports.useEffect(()=>A?(c(),(d.current=new IntersectionObserver(([b])=>{const m=b.isIntersecting;l?l&&!g&&m&&(o(m),c()):o(m)},f({},n))).observe(A),()=>{c()}):void 0,[A,n]),g},r=a=>{var c,p;const{tag:n="div",children:l,style:A,className:h}=a,g=n,o=s.exports.useRef(null),d=O(o,{root:(c=a.root)!=null?c:null,threshold:(p=a.threshold)!=null?p:0,rootMargin:a.rootMargin},a.forward);return e(g,{ref:o,style:A,className:h,children:d?l:null})};var N="/app/assets/img-01-enviar.png",w="/app/assets/img-02-enviar.png",D="/app/assets/img-03-enviar.png",V="/app/assets/img-04-enviar.png",z="/app/assets/img-05-enviar.png",G="data:image/png;base64,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",S="/app/assets/img-07-enviar.png",C="/app/assets/img-08-enviar.png";const L=s.exports.lazy(()=>y(()=>import("./ListSteps.js"),["assets/ListSteps.js","assets/index.js","assets/index5.css","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/List.js","assets/ListItem.js","assets/isHostComponent.js","assets/ButtonBase.js","assets/listItemIconClasses.js","assets/ListItemText.js","assets/listItemTextClasses.js","assets/Typography.js","assets/Divider.js"])),F=()=>t("div",{style:{display:"flex",flexDirection:"column",flexGrow:1,padding:10,marginLeft:5,border:"1px solid black",borderRadius:"5px",width:"100%"},children:[e(R,{variant:"h4",style:{textAlign:"center"},children:"\xBFC\xF3mo enviar la planilla al SIPE?"}),e(s.exports.Suspense,{fallback:e(B,{}),children:e(L,{children:[{child:t(r,{children:["en el men\xFA izquierdo seleccionar ",e("strong",{children:"PLANILLAS"})]}),img:e(r,{children:e(i,{src:Q,alt:"img-01-realizar",style:{width:"200px",height:"200px"}})})},{child:t(r,{children:["buscar la planilla por raz\xF3n social, raz\xF3n comercial, RUC, n\xFAmero patronal o fecha de la planilla (2020-01) y seleccionar el bot\xF3n en forma de ojo (",e("strong",{children:"VER"}),"). ",e("br",{})," ",e("strong",{children:"Nota"}),": este paso solo se realiza en caso que se necesite buscar la planilla ya que al momento de realizarla se puede saltar este paso."]}),img:e(r,{children:e(i,{src:N,alt:"img-01",style:{width:"100%",height:"250px"}})})},{child:t(r,{children:["en la esquina inferior derecha selecciona"," ",e("strong",{children:"ACCIONES"})," y en ",e("strong",{children:"GENERAR SIPE"}),"."," ",e("br",{}),e("strong",{children:"Nota"}),": aqu\xED se descarga un archivo"," ",e("strong",{children:"EXCEL"})," que se debe subir al sistema SIPE. El nombre de este archivo tiene el siguiente formato:"," ",e("strong",{children:"Planilla-MES-A\xD1O-NOMBRE-DEL-NEGOCIO.xlsx"})]}),img:e(r,{children:e(i,{src:w,alt:"img-02",style:{width:"100%",height:"300px"}})})},{child:t(r,{children:["se accesa el"," ",e("a",{href:"https://sipe.css.gob.pa/InicioSipe.jsp",target:"_blank",children:"SISTEMA SIPE"})," ","para ingresar con la cuenta del ",e("strong",{children:"ELABORADOR"})," y seleccionar ",e("strong",{children:"PLANILLA REGULAR"})]}),img:e(r,{children:e(i,{src:D,alt:"img-03",style:{width:"100%",height:"300px"}})})},{child:t(r,{children:["se baja hasta el final y se seleccionar"," ",e("strong",{children:"CARGAR ARCHIVO"})]}),img:e(r,{children:e(i,{src:V,alt:"img-04",style:{width:"100%",height:"300px"}})})},{child:t(r,{children:["se seleccona en ",e("strong",{children:"SELECCIONAR ARCHIVO"})," y se busca el archivo descargado anteriormente para subirlo. Luego, seleccionar el bot\xF3n en la parte inferior que dice"," ",e("strong",{children:"CARGAR"})]}),img:e(r,{children:e(i,{src:z,alt:"img-05",style:{width:"70%",height:"300px"}})})},{child:t(r,{children:["una vez se seleccione el bot\xF3n ",e("strong",{children:"CARGAR"})," el sistema SIPE mostrar\xE1 un mensaje de alerta en la parte superior de la pantalla diciendo"," ",e("strong",{children:"ARCHIVO CARGADO"}),".",e("br",{}),e("strong",{children:"Nota"}),": en caso de error el sistema mostrar\xE1 un mensaje de error, favor de comunicarlo a los administradores."]}),img:e(r,{children:e(i,{src:G,alt:"img-06",style:{width:"70%",height:"100px"}})})},{child:t(r,{children:["se selecciona el bot\xF3n ",e("strong",{children:"GUARDAR"})," y luego el bot\xF3n ",e("strong",{children:"SIGUIENTE"})," para finalizar con la firma de la planilla tanto en la cuenta del"," ",e("strong",{children:"ELABORADOR"})," como en la del"," ",e("strong",{children:"REPRESENTANTE"})]}),img:e(r,{children:e(i,{src:S,alt:"img-07",style:{width:"100%",height:"250px"}})})},{child:t(r,{children:["como \xFAltimo paso, una vez finalizado el paso anterior, volver al sistema de la oficina y en la planilla enviada, en la esquina inferior derecha seleccionar en"," ",e("strong",{children:"MARCAR COMO ENVIADA AL SIPE"})," para generar el"," ",e("strong",{children:"FORMULARIO 03"})]}),img:e(r,{children:e(i,{src:C,alt:"img-08",style:{width:"100%",height:"250px"}})})}]})})]});export{F as default};
