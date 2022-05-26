var q=Object.defineProperty,H=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var V=(e,a,t)=>a in e?q(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,v=(e,a)=>{for(var t in a||(a={}))N.call(a,t)&&V(e,t,a[t]);if(C)for(var t of C(a))B.call(a,t)&&V(e,t,a[t]);return e},L=(e,a)=>H(e,W(a));var D=(e,a)=>{var t={};for(var o in e)N.call(e,o)&&a.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&C)for(var o of C(e))a.indexOf(o)<0&&B.call(e,o)&&(t[o]=e[o]);return t};import{u as z}from"./array.js";import{T as G}from"./TextInput.js";import{_ as c,u as J,k as _,l as h,r as M,c as k,a as i,e as A,h as Q,O as X,n as Y,j as y}from"./index.js";import{c as Z,P as ee,d as ae,e as te,f as oe,a as se,M as re,b as ne,C as ie,p as le}from"./usePickerState.js";import{u as O,b as g}from"./MonthPicker.js";import{T as ce}from"./Typography.js";import{B as me}from"./Button.js";function ue(e,a){return e&&a.isValid(a.date(e))?`Choose time, selected time is ${a.format(a.date(e),"fullTime")}`:"Choose time"}function pe(e,a){var t;const o=J({props:e,name:a}),s=O(),n=(t=o.ampm)!=null?t:s.is12HourCycleInCurrentLocale();return c({ampm:n,openTo:"hours",views:["hours","minutes"],acceptRegex:n?/[\dapAP]/gi:/\d/gi,mask:"__:__",disableMaskedInput:n,getOpenDialogAriaText:ue,inputFormat:n?s.formats.fullTime12h:s.formats.fullTime24h},o,{components:c({OpenPickerIcon:Z},o.components)})}const de=["className","selected","value"],$=_("PrivatePickersToolbarText",["selected"]),Te=h(ce)(({theme:e})=>({transition:e.transitions.create("color"),color:e.palette.text.secondary,[`&.${$.selected}`]:{color:e.palette.text.primary}})),j=M.exports.forwardRef(function(a,t){const{className:o,selected:s,value:n}=a,r=k(a,de);return i(Te,c({ref:t,className:A(o,s&&$.selected),component:"span"},r,{children:n}))}),be=["align","className","selected","typographyClassName","value","variant"],he=h(me)({padding:0,minWidth:16,textTransform:"none"}),P=M.exports.forwardRef(function(a,t){const{align:o,className:s,selected:n,typographyClassName:r,value:l,variant:m}=a,u=k(a,be);return i(he,c({variant:"text",ref:t,className:s},u,{children:i(j,{align:o,className:r,variant:m,value:l,selected:n})}))});function fe(e){return Q("PrivateTimePickerToolbar",e)}const K=_("PrivateTimePickerToolbar",["separator","hourMinuteLabel","hourMinuteLabelLandscape","hourMinuteLabelReverse","ampmSelection","ampmLandscape","ampmLabel","penIconLandscape"]),ge=["ampm","ampmInClock","date","isLandscape","isMobileKeyboardViewOpen","onChange","openView","setOpenView","toggleMobileKeyboardView","toolbarTitle","views"],Pe=e=>{const{theme:a,isLandscape:t,classes:o}=e,s={penIconLandscape:["penIconLandscape"],separator:["separator"],hourMinuteLabel:["hourMinuteLabel",t&&"hourMinuteLabelLandscape",a.direction==="rtl"&&"hourMinuteLabelReverse"],ampmSelection:["ampmSelection",t&&"ampmLandscape"],ampmLabel:["ampmLabel"]};return Y(s,fe,o)},xe=h(ee)({[`& .${K.penIconLandscape}`]:{marginTop:"auto"}}),Ce=h(j)({outline:0,margin:"0 4px 0 2px",cursor:"default"}),ke=h("div")(({theme:e,ownerState:a})=>c({display:"flex",justifyContent:"flex-end",alignItems:"flex-end"},a.isLandscape&&{marginTop:"auto"},e.direction==="rtl"&&{flexDirection:"row-reverse"})),ve=h("div")(({ownerState:e})=>c({display:"flex",flexDirection:"column",marginRight:"auto",marginLeft:12},e.isLandscape&&{margin:"4px 0 auto",flexDirection:"row",justifyContent:"space-around",flexBasis:"100%"},{[`& .${K.ampmLabel}`]:{fontSize:17}})),Le=e=>{const{ampm:a,ampmInClock:t,date:o,isLandscape:s,isMobileKeyboardViewOpen:n,onChange:r,openView:l,setOpenView:m,toggleMobileKeyboardView:u,toolbarTitle:p="Select time",views:d}=e,f=k(e,ge),T=O(),E=X(),F=Boolean(a&&!t),{meridiemMode:I,handleMeridiemChange:w}=ae(o,a,r),U=R=>a?T.format(R,"hours12h"):T.format(R,"hours24h"),x=e,b=Pe(c({},x,{theme:E})),S=i(Ce,{tabIndex:-1,value:":",variant:"h3",selected:!1,className:b.separator});return y(xe,c({viewType:"clock",landscapeDirection:"row",toolbarTitle:p,isLandscape:s,isMobileKeyboardViewOpen:n,toggleMobileKeyboardView:u,ownerState:x,penIconClassName:A(s&&b.penIconLandscape)},f,{children:[y(ke,{className:b.hourMinuteLabel,ownerState:x,children:[g(d,"hours")&&i(P,{tabIndex:-1,variant:"h3",onClick:()=>m("hours"),selected:l==="hours",value:o?U(o):"--"}),g(d,["hours","minutes"])&&S,g(d,"minutes")&&i(P,{tabIndex:-1,variant:"h3",onClick:()=>m("minutes"),selected:l==="minutes",value:o?T.format(o,"minutes"):"--"}),g(d,["minutes","seconds"])&&S,g(d,"seconds")&&i(P,{variant:"h3",onClick:()=>m("seconds"),selected:l==="seconds",value:o?T.format(o,"seconds"):"--"})]}),F&&y(ve,{className:b.ampmSelection,ownerState:x,children:[i(P,{disableRipple:!0,variant:"subtitle2",selected:I==="am",typographyClassName:b.ampmLabel,value:T.getMeridiemText("am"),onClick:()=>w("am")}),i(P,{disableRipple:!0,variant:"subtitle2",selected:I==="pm",typographyClassName:b.ampmLabel,value:T.getMeridiemText("pm"),onClick:()=>w("pm")})]})]}))},ye=(e,a,{minTime:t,maxTime:o,shouldDisableTime:s,disableIgnoringDatePartForTimeValidation:n})=>{const r=e.date(a),l=oe(Boolean(n),e);if(a===null)return null;switch(!0){case!e.isValid(a):return"invalidDate";case Boolean(t&&l(t,r)):return"minTime";case Boolean(o&&l(r,o)):return"maxTime";case Boolean(s&&s(e.getHours(r),"hours")):return"shouldDisableTime-hours";case Boolean(s&&s(e.getMinutes(r),"minutes")):return"shouldDisableTime-minutes";case Boolean(s&&s(e.getSeconds(r),"seconds")):return"shouldDisableTime-seconds";default:return null}},Me=(e,a)=>e===a,Ie=e=>te(e,ye,Me),we=["ToolbarComponent","value","onChange"],Se={emptyValue:null,parseInput:le,areValuesEqual:(e,a,t)=>e.isEqual(a,t),valueReducer:(e,a,t)=>a==null||t==null?t:e.mergeDateAndTime(a,t)},Re=M.exports.forwardRef(function(a,t){const o=pe(a,"MuiMobileTimePicker"),s=Ie(o)!==null,{pickerProps:n,inputProps:r,wrapperProps:l}=se(o,Se),{ToolbarComponent:m=Le}=o,u=k(o,we),p=c({},r,u,{ref:t,validationError:s});return i(re,c({},u,l,{DateInputProps:p,PureDateInputComponent:ne,children:i(ie,c({},n,{autoFocus:!0,toolbarTitle:o.label||o.toolbarTitle,ToolbarComponent:m,DateInputProps:p},u))}))}),je=n=>{var r=n,{label:e,name:a,helperText:t,error:o}=r,s=D(r,["label","name","helperText","error"]);var d;const{register:l,setValue:m,watch:u}=z(),p=u(a);return i(Re,L(v({label:e,cancelText:"CERRAR",ampm:!0,minutesStep:(d=s.minutesStep)!=null?d:5,value:p!=null?p:null,minTime:s.minTime,maxTime:s.maxTime},l(a)),{onChange:f=>{m(a,f,{shouldValidate:!0})},renderInput:f=>i(G,L(v({},f),{error:o,helperText:t,fullWidth:!0,required:s.required}))}))};export{je as T};
