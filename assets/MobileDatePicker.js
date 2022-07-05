import{_ as u,u as _,h as w,s as P,r as b,l as D,a as d}from"./index.js";import{u as h,a as x}from"./MonthPicker.js";import{P as C,u as V,M as I,a as v,C as F}from"./PureDateInput.js";import{T as O}from"./Typography.js";import{p as K,u as L}from"./CalendarPicker.js";const y=e=>e.length===1&&e[0]==="year",k=e=>e.length===2&&e.indexOf("month")!==-1&&e.indexOf("year")!==-1,S=(e,o)=>y(e)?{mask:"____",inputFormat:o.formats.year}:k(e)?{disableMaskedInput:!0,inputFormat:o.formats.monthAndYear}:{mask:"__/__/____",inputFormat:o.formats.keyboardDate};function W(e,o){var a;const t=h(),r=x(),s=_({props:e,name:o}),i=(a=s.views)!=null?a:["year","day"];return u({openTo:"day",minDate:r.minDate,maxDate:r.maxDate},S(i,t),s,{views:i})}const A=["date","isLandscape","isMobileKeyboardViewOpen","onChange","toggleMobileKeyboardView","toolbarFormat","toolbarPlaceholder","toolbarTitle","views"],T=w("PrivateDatePickerToolbar",["penIcon"]),E=P(C)({[`& .${T.penIcon}`]:{position:"relative",top:4}}),R=P(O)(({ownerState:e})=>u({},e.isLandscape&&{margin:"auto 16px auto auto"})),Y=b.exports.forwardRef(function(o,a){const{date:t,isLandscape:r,isMobileKeyboardViewOpen:s,toggleMobileKeyboardView:i,toolbarFormat:c,toolbarPlaceholder:m="\u2013\u2013",toolbarTitle:p="Select date",views:l}=o,g=D(o,A),n=h(),M=b.exports.useMemo(()=>t?c?n.formatByString(t,c):y(l)?n.format(t,"year"):k(l)?n.format(t,"month"):/en/.test(n.getCurrentLocaleCode())?n.format(t,"normalDateWithWeekday"):n.format(t,"normalDate"):m,[t,c,m,n,l]),f=o;return d(E,u({ref:a,toolbarTitle:p,isMobileKeyboardViewOpen:s,toggleMobileKeyboardView:i,isLandscape:r,penIconClassName:T.penIcon,ownerState:f},g,{children:d(R,{variant:"h4",align:r?"left":"center",ownerState:f,children:M})}))}),$=["ToolbarComponent","value","onChange"],j={emptyValue:null,parseInput:K,areValuesEqual:(e,o,a)=>e.isEqual(o,a)},G=b.exports.forwardRef(function(o,a){const t=W(o,"MuiMobileDatePicker"),r=L(t)!==null,{pickerProps:s,inputProps:i,wrapperProps:c}=V(t,j),{ToolbarComponent:m=Y}=t,p=D(t,$),l=u({},i,p,{ref:a,validationError:r});return d(I,u({},p,c,{DateInputProps:l,PureDateInputComponent:v,children:d(F,u({},s,{autoFocus:!0,toolbarTitle:t.label||t.toolbarTitle,ToolbarComponent:m,DateInputProps:l},p))}))});export{Y as D,G as M,W as u};
