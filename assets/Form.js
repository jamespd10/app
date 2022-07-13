var Ie=Object.defineProperty,Re=Object.defineProperties;var We=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var ce=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;var le=(a,s,c)=>s in a?Ie(a,s,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[s]=c,$=(a,s)=>{for(var c in s||(s={}))ce.call(s,c)&&le(a,c,s[c]);if(z)for(var c of z(s))pe.call(s,c)&&le(a,c,s[c]);return a},de=(a,s)=>Re(a,We(s));var fe=(a,s)=>{var c={};for(var b in a)ce.call(a,b)&&s.indexOf(b)<0&&(c[b]=a[b]);if(a!=null&&z)for(var b of z(a))s.indexOf(b)<0&&pe.call(a,b)&&(c[b]=a[b]);return c};import{g as Fe,h as Te,s as ke,_ as te,r as V,u as $e,l as Ge,n as _e,a as g,o as Ne,aa as ee,A as je,a7 as Le,b as Xe,j as U}from"./index.js";import{c as Ke,i as ze,r as Ue}from"./jsx-runtime_commonjs-proxy.js";import{u as be,a as qe,F as He,o as Ve}from"./yup.module.js";import{c as De,a as q,b as Je}from"./array.js";import{u as Ye}from"./useFetch.js";import{u as Ze}from"./useModal.js";import{L as Qe}from"./LoadingButton.js";import{P as et}from"./PasswordInput.js";import{T as tt}from"./TextInput.js";import{I as rt}from"./InputAdornment.js";import{C as it}from"./Card.js";import{C as ot}from"./CardContent.js";import{T as at}from"./Typography.js";import{B as nt}from"./Button.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./upperFirst.js";import"./useHttpService.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./IconButton.js";import"./ButtonBase.js";import"./TextField.js";import"./useFormControl.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./GlobalStyles.js";function st(a){return Fe("MuiCardActions",a)}Te("MuiCardActions",["root","spacing"]);const lt=["disableSpacing","className"],ct=a=>{const{classes:s,disableSpacing:c}=a;return _e({root:["root",!c&&"spacing"]},st,s)},pt=ke("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(a,s)=>{const{ownerState:c}=a;return[s.root,!c.disableSpacing&&s.spacing]}})(({ownerState:a})=>te({display:"flex",alignItems:"center",padding:8},!a.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),dt=V.exports.forwardRef(function(s,c){const b=$e({props:s,name:"MuiCardActions"}),{disableSpacing:w=!1,className:E}=b,y=Ge(b,lt),C=te({},b,{disableSpacing:w}),M=ct(C);return g(pt,te({className:Ne(M.root,E),ownerState:C,ref:c},y))});var ft=dt,ie={},bt=ze.exports;Object.defineProperty(ie,"__esModule",{value:!0});var oe=ie.default=void 0,mt=bt(Ke),ut=Ue,St=(0,mt.default)((0,ut.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"}),"AccountCircle");oe=ie.default=St;var re={exports:{}};/*!
 * Platform.js v1.3.6
 * Copyright 2014-2020 Benjamin Tan
 * Copyright 2011-2013 John-David Dalton
 * Available under MIT license
 */(function(a,s){(function(){var c={function:!0,object:!0},b=c[typeof window]&&window||this,w=s,E=a&&!a.nodeType&&a,y=w&&E&&typeof ee=="object"&&ee;y&&(y.global===y||y.window===y||y.self===y)&&(b=y);var C=Math.pow(2,53)-1,M=/\bOpera/,A=Object.prototype,D=A.hasOwnProperty,R=A.toString;function T(t){return t=String(t),t.charAt(0).toUpperCase()+t.slice(1)}function me(t,l,m){var x={"10.0":"10","6.4":"10 Technical Preview","6.3":"8.1","6.2":"8","6.1":"Server 2008 R2 / 7","6.0":"Server 2008 / Vista","5.2":"Server 2003 / XP 64-bit","5.1":"XP","5.01":"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"};return l&&m&&/^Win/i.test(t)&&!/^Windows Phone /i.test(t)&&(x=x[/[\d.]+$/.exec(t)])&&(t="Windows "+x),t=String(t),l&&m&&(t=t.replace(RegExp(l,"i"),m)),t=G(t.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0]),t}function ue(t,l){var m=-1,x=t?t.length:0;if(typeof x=="number"&&x>-1&&x<=C)for(;++m<x;)l(t[m],m,t);else _(t,l)}function G(t){return t=J(t),/^(?:webOS|i(?:OS|P))/.test(t)?t:T(t)}function _(t,l){for(var m in t)D.call(t,m)&&l(t[m],m,t)}function W(t){return t==null?T(t):R.call(t).slice(8,-1)}function Se(t,l){var m=t!=null?typeof t[l]:"number";return!/^(?:boolean|number|string|undefined)$/.test(m)&&(m=="object"?!!t[l]:!0)}function P(t){return String(t).replace(/([ -])(?!$)/g,"$1?")}function F(t,l){var m=null;return ue(t,function(x,j){m=l(m,x,j,t)}),m}function J(t){return String(t).replace(/^ +| +$/g,"")}function N(t){var l=b,m=t&&typeof t=="object"&&W(t)!="String";m&&(l=t,t=null);var x=l.navigator||{},j=x.userAgent||"";t||(t=j);var xe=m?!!x.likeChrome:/\bChrome\b/.test(t)&&!/internal|\n/i.test(R.toString()),Y="Object",he=m?Y:"ScriptBridgingProxyObject",ge=m?Y:"Environment",ve=m&&l.java?"JavaPackage":W(l.java),ye=m?Y:"RuntimeObject",k=/\bJava/.test(ve)&&l.java,Oe=k&&W(l.environment)==ge,Ce=k?"a":"\u03B1",we=k?"b":"\u03B2",Z=l.document||{},B=l.operamini||l.opera,L=M.test(L=m&&B?B["[[Class]]"]:W(B))?L:B=null,e,X=t,p=[],K=null,I=t==j,o=I&&B&&typeof B.version=="function"&&B.version(),Q,d=Me([{label:"EdgeHTML",pattern:"Edge"},"Trident",{label:"WebKit",pattern:"AppleWebKit"},"iCab","Presto","NetFront","Tasman","KHTML","Gecko"]),r=Ee(["Adobe AIR","Arora","Avant Browser","Breach","Camino","Electron","Epiphany","Fennec","Flock","Galeon","GreenBrowser","iCab","Iceweasel","K-Meleon","Konqueror","Lunascape","Maxthon",{label:"Microsoft Edge",pattern:"(?:Edge|Edg|EdgA|EdgiOS)"},"Midori","Nook Browser","PaleMoon","PhantomJS","Raven","Rekonq","RockMelt",{label:"Samsung Internet",pattern:"SamsungBrowser"},"SeaMonkey",{label:"Silk",pattern:"(?:Cloud9|Silk-Accelerated)"},"Sleipnir","SlimBrowser",{label:"SRWare Iron",pattern:"Iron"},"Sunrise","Swiftfox","Vivaldi","Waterfox","WebPositive",{label:"Yandex Browser",pattern:"YaBrowser"},{label:"UC Browser",pattern:"UCBrowser"},"Opera Mini",{label:"Opera Mini",pattern:"OPiOS"},"Opera",{label:"Opera",pattern:"OPR"},"Chromium","Chrome",{label:"Chrome",pattern:"(?:HeadlessChrome)"},{label:"Chrome Mobile",pattern:"(?:CriOS|CrMo)"},{label:"Firefox",pattern:"(?:Firefox|Minefield)"},{label:"Firefox for iOS",pattern:"FxiOS"},{label:"IE",pattern:"IEMobile"},{label:"IE",pattern:"MSIE"},"Safari"]),n=ne([{label:"BlackBerry",pattern:"BB10"},"BlackBerry",{label:"Galaxy S",pattern:"GT-I9000"},{label:"Galaxy S2",pattern:"GT-I9100"},{label:"Galaxy S3",pattern:"GT-I9300"},{label:"Galaxy S4",pattern:"GT-I9500"},{label:"Galaxy S5",pattern:"SM-G900"},{label:"Galaxy S6",pattern:"SM-G920"},{label:"Galaxy S6 Edge",pattern:"SM-G925"},{label:"Galaxy S7",pattern:"SM-G930"},{label:"Galaxy S7 Edge",pattern:"SM-G935"},"Google TV","Lumia","iPad","iPod","iPhone","Kindle",{label:"Kindle Fire",pattern:"(?:Cloud9|Silk-Accelerated)"},"Nexus","Nook","PlayBook","PlayStation Vita","PlayStation","TouchPad","Transformer",{label:"Wii U",pattern:"WiiU"},"Wii","Xbox One",{label:"Xbox 360",pattern:"Xbox"},"Xoom"]),S=Pe({Apple:{iPad:1,iPhone:1,iPod:1},Alcatel:{},Archos:{},Amazon:{Kindle:1,"Kindle Fire":1},Asus:{Transformer:1},"Barnes & Noble":{Nook:1},BlackBerry:{PlayBook:1},Google:{"Google TV":1,Nexus:1},HP:{TouchPad:1},HTC:{},Huawei:{},Lenovo:{},LG:{},Microsoft:{Xbox:1,"Xbox One":1},Motorola:{Xoom:1},Nintendo:{"Wii U":1,Wii:1},Nokia:{Lumia:1},Oppo:{},Samsung:{"Galaxy S":1,"Galaxy S2":1,"Galaxy S3":1,"Galaxy S4":1},Sony:{PlayStation:1,"PlayStation Vita":1},Xiaomi:{Mi:1,Redmi:1}}),i=Ae(["Windows Phone","KaiOS","Android","CentOS",{label:"Chrome OS",pattern:"CrOS"},"Debian",{label:"DragonFly BSD",pattern:"DragonFly"},"Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Tizen","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "]);function Me(h){return F(h,function(u,f){return u||RegExp("\\b"+(f.pattern||P(f))+"\\b","i").exec(t)&&(f.label||f)})}function Pe(h){return F(h,function(u,f,O){return u||(f[n]||f[/^[a-z]+(?: +[a-z]+\b)*/i.exec(n)]||RegExp("\\b"+P(O)+"(?:\\b|\\w*\\d)","i").exec(t))&&O})}function Ee(h){return F(h,function(u,f){return u||RegExp("\\b"+(f.pattern||P(f))+"\\b","i").exec(t)&&(f.label||f)})}function Ae(h){return F(h,function(u,f){var O=f.pattern||P(f);return!u&&(u=RegExp("\\b"+O+"(?:/[\\d.]+|[ \\w.]*)","i").exec(t))&&(u=me(u,O,f.label||f)),u})}function ne(h){return F(h,function(u,f){var O=f.pattern||P(f);return!u&&(u=RegExp("\\b"+O+" *\\d+[.\\w_]*","i").exec(t)||RegExp("\\b"+O+" *\\w+-[\\w]*","i").exec(t)||RegExp("\\b"+O+"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)","i").exec(t))&&((u=String(f.label&&!RegExp(O,"i").test(f.label)?f.label:u).split("/"))[1]&&!/[\d.]+/.test(u[0])&&(u[0]+=" "+u[1]),f=f.label||f,u=G(u[0].replace(RegExp(O,"i"),f).replace(RegExp("; *(?:"+f+"[_-])?","i")," ").replace(RegExp("("+f+")[-_.]?(\\w)","i"),"$1 $2"))),u})}function se(h){return F(h,function(u,f){return u||(RegExp(f+"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)","i").exec(t)||0)[1]||null})}function Be(){return this.description||""}if(d&&(d=[d]),/\bAndroid\b/.test(i)&&!n&&(e=/\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(t))&&(n=J(e[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i,"")||null),S&&!n?n=ne([S]):S&&n&&(n=n.replace(RegExp("^("+P(S)+")[-_.\\s]","i"),S+" ").replace(RegExp("^("+P(S)+")[-_.]?(\\w)","i"),S+" $2")),(e=/\bGoogle TV\b/.exec(n))&&(n=e[0]),/\bSimulator\b/i.test(t)&&(n=(n?n+" ":"")+"Simulator"),r=="Opera Mini"&&/\bOPiOS\b/.test(t)&&p.push("running in Turbo/Uncompressed mode"),r=="IE"&&/\blike iPhone OS\b/.test(t)?(e=N(t.replace(/like iPhone OS/,"")),S=e.manufacturer,n=e.product):/^iP/.test(n)?(r||(r="Safari"),i="iOS"+((e=/ OS ([\d_]+)/i.exec(t))?" "+e[1].replace(/_/g,"."):"")):r=="Konqueror"&&/^Linux\b/i.test(i)?i="Kubuntu":S&&S!="Google"&&(/Chrome/.test(r)&&!/\bMobile Safari\b/i.test(t)||/\bVita\b/.test(n))||/\bAndroid\b/.test(i)&&/^Chrome/.test(r)&&/\bVersion\//i.test(t)?(r="Android Browser",i=/\bAndroid\b/.test(i)?i:"Android"):r=="Silk"?(/\bMobi/i.test(t)||(i="Android",p.unshift("desktop mode")),/Accelerated *= *true/i.test(t)&&p.unshift("accelerated")):r=="UC Browser"&&/\bUCWEB\b/.test(t)?p.push("speed mode"):r=="PaleMoon"&&(e=/\bFirefox\/([\d.]+)\b/.exec(t))?p.push("identifying as Firefox "+e[1]):r=="Firefox"&&(e=/\b(Mobile|Tablet|TV)\b/i.exec(t))?(i||(i="Firefox OS"),n||(n=e[1])):!r||(e=!/\bMinefield\b/i.test(t)&&/\b(?:Firefox|Safari)\b/.exec(r))?(r&&!n&&/[\/,]|^[^(]+?\)/.test(t.slice(t.indexOf(e+"/")+8))&&(r=null),(e=n||S||i)&&(n||S||/\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(i))&&(r=/[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(i)?i:e)+" Browser")):r=="Electron"&&(e=(/\bChrome\/([\d.]+)\b/.exec(t)||0)[1])&&p.push("Chromium "+e),o||(o=se(["(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)","Version",P(r),"(?:Firefox|Minefield|NetFront)"])),(e=d=="iCab"&&parseFloat(o)>3&&"WebKit"||/\bOpera\b/.test(r)&&(/\bOPR\b/.test(t)?"Blink":"Presto")||/\b(?:Midori|Nook|Safari)\b/i.test(t)&&!/^(?:Trident|EdgeHTML)$/.test(d)&&"WebKit"||!d&&/\bMSIE\b/i.test(t)&&(i=="Mac OS"?"Tasman":"Trident")||d=="WebKit"&&/\bPlayStation\b(?! Vita\b)/i.test(r)&&"NetFront")&&(d=[e]),r=="IE"&&(e=(/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(t)||0)[1])?(r+=" Mobile",i="Windows Phone "+(/\+$/.test(e)?e:e+".x"),p.unshift("desktop mode")):/\bWPDesktop\b/i.test(t)?(r="IE Mobile",i="Windows Phone 8.x",p.unshift("desktop mode"),o||(o=(/\brv:([\d.]+)/.exec(t)||0)[1])):r!="IE"&&d=="Trident"&&(e=/\brv:([\d.]+)/.exec(t))&&(r&&p.push("identifying as "+r+(o?" "+o:"")),r="IE",o=e[1]),I){if(Se(l,"global"))if(k&&(e=k.lang.System,X=e.getProperty("os.arch"),i=i||e.getProperty("os.name")+" "+e.getProperty("os.version")),Oe){try{o=l.require("ringo/engine").version.join("."),r="RingoJS"}catch{(e=l.system)&&e.global.system==l.system&&(r="Narwhal",i||(i=e[0].os||null))}r||(r="Rhino")}else typeof l.process=="object"&&!l.process.browser&&(e=l.process)&&(typeof e.versions=="object"&&(typeof e.versions.electron=="string"?(p.push("Node "+e.versions.node),r="Electron",o=e.versions.electron):typeof e.versions.nw=="string"&&(p.push("Chromium "+o,"Node "+e.versions.node),r="NW.js",o=e.versions.nw)),r||(r="Node.js",X=e.arch,i=e.platform,o=/[\d.]+/.exec(e.version),o=o?o[0]:null));else W(e=l.runtime)==he?(r="Adobe AIR",i=e.flash.system.Capabilities.os):W(e=l.phantom)==ye?(r="PhantomJS",o=(e=e.version||null)&&e.major+"."+e.minor+"."+e.patch):typeof Z.documentMode=="number"&&(e=/\bTrident\/(\d+)/i.exec(t))?(o=[o,Z.documentMode],(e=+e[1]+4)!=o[1]&&(p.push("IE "+o[1]+" mode"),d&&(d[1]=""),o[1]=e),o=r=="IE"?String(o[1].toFixed(1)):o[0]):typeof Z.documentMode=="number"&&/^(?:Chrome|Firefox)\b/.test(r)&&(p.push("masking as "+r+" "+o),r="IE",o="11.0",d=["Trident"],i="Windows");i=i&&G(i)}if(o&&(e=/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(o)||/(?:alpha|beta)(?: ?\d)?/i.exec(t+";"+(I&&x.appMinorVersion))||/\bMinefield\b/i.test(t)&&"a")&&(K=/b/i.test(e)?"beta":"alpha",o=o.replace(RegExp(e+"\\+?$"),"")+(K=="beta"?we:Ce)+(/\d+\+?/.exec(e)||"")),r=="Fennec"||r=="Firefox"&&/\b(?:Android|Firefox OS|KaiOS)\b/.test(i))r="Firefox Mobile";else if(r=="Maxthon"&&o)o=o.replace(/\.[\d.]+/,".x");else if(/\bXbox\b/i.test(n))n=="Xbox 360"&&(i=null),n=="Xbox 360"&&/\bIEMobile\b/.test(t)&&p.unshift("mobile mode");else if((/^(?:Chrome|IE|Opera)$/.test(r)||r&&!n&&!/Browser|Mobi/.test(r))&&(i=="Windows CE"||/Mobi/i.test(t)))r+=" Mobile";else if(r=="IE"&&I)try{l.external===null&&p.unshift("platform preview")}catch{p.unshift("embedded")}else(/\bBlackBerry\b/.test(n)||/\bBB10\b/.test(t))&&(e=(RegExp(n.replace(/ +/g," *")+"/([.\\d]+)","i").exec(t)||0)[1]||o)?(e=[e,/BB10/.test(t)],i=(e[1]?(n=null,S="BlackBerry"):"Device Software")+" "+e[0],o=null):this!=_&&n!="Wii"&&(I&&B||/Opera/.test(r)&&/\b(?:MSIE|Firefox)\b/i.test(t)||r=="Firefox"&&/\bOS X (?:\d+\.){2,}/.test(i)||r=="IE"&&(i&&!/^Win/.test(i)&&o>5.5||/\bWindows XP\b/.test(i)&&o>8||o==8&&!/\bTrident\b/.test(t)))&&!M.test(e=N.call(_,t.replace(M,"")+";"))&&e.name&&(e="ing as "+e.name+((e=e.version)?" "+e:""),M.test(r)?(/\bIE\b/.test(e)&&i=="Mac OS"&&(i=null),e="identify"+e):(e="mask"+e,L?r=G(L.replace(/([a-z])([A-Z])/g,"$1 $2")):r="Opera",/\bIE\b/.test(e)&&(i=null),I||(o=null)),d=["Presto"],p.push(e));(e=(/\bAppleWebKit\/([\d.]+\+?)/i.exec(t)||0)[1])&&(e=[parseFloat(e.replace(/\.(\d)$/,".0$1")),e],r=="Safari"&&e[1].slice(-1)=="+"?(r="WebKit Nightly",K="alpha",o=e[1].slice(0,-1)):(o==e[1]||o==(e[2]=(/\bSafari\/([\d.]+\+?)/i.exec(t)||0)[1]))&&(o=null),e[1]=(/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(t)||0)[1],e[0]==537.36&&e[2]==537.36&&parseFloat(e[1])>=28&&d=="WebKit"&&(d=["Blink"]),!I||!xe&&!e[1]?(d&&(d[1]="like Safari"),e=(e=e[0],e<400?1:e<500?2:e<526?3:e<533?4:e<534?"4+":e<535?5:e<537?6:e<538?7:e<601?8:e<602?9:e<604?10:e<606?11:e<608?12:"12")):(d&&(d[1]="like Chrome"),e=e[1]||(e=e[0],e<530?1:e<532?2:e<532.05?3:e<533?4:e<534.03?5:e<534.07?6:e<534.1?7:e<534.13?8:e<534.16?9:e<534.24?10:e<534.3?11:e<535.01?12:e<535.02?"13+":e<535.07?15:e<535.11?16:e<535.19?17:e<536.05?18:e<536.1?19:e<537.01?20:e<537.11?"21+":e<537.13?23:e<537.18?24:e<537.24?25:e<537.36?26:d!="Blink"?"27":"28")),d&&(d[1]+=" "+(e+=typeof e=="number"?".x":/[.+]/.test(e)?"":"+")),r=="Safari"&&(!o||parseInt(o)>45)?o=e:r=="Chrome"&&/\bHeadlessChrome/i.test(t)&&p.unshift("headless")),r=="Opera"&&(e=/\bzbov|zvav$/.exec(i))?(r+=" ",p.unshift("desktop mode"),e=="zvav"?(r+="Mini",o=null):r+="Mobile",i=i.replace(RegExp(" *"+e+"$"),"")):r=="Safari"&&/\bChrome\b/.exec(d&&d[1])?(p.unshift("desktop mode"),r="Chrome Mobile",o=null,/\bOS X\b/.test(i)?(S="Apple",i="iOS 4.3+"):i=null):/\bSRWare Iron\b/.test(r)&&!o&&(o=se("Chrome")),o&&o.indexOf(e=/[\d.]+$/.exec(i))==0&&t.indexOf("/"+e+"-")>-1&&(i=J(i.replace(e,""))),i&&i.indexOf(r)!=-1&&!RegExp(r+" OS").test(i)&&(i=i.replace(RegExp(" *"+P(r)+" *"),"")),d&&!/\b(?:Avant|Nook)\b/.test(r)&&(/Browser|Lunascape|Maxthon/.test(r)||r!="Safari"&&/^iOS/.test(i)&&/\bSafari\b/.test(d[1])||/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(r)&&d[1])&&(e=d[d.length-1])&&p.push(e),p.length&&(p=["("+p.join("; ")+")"]),S&&n&&n.indexOf(S)<0&&p.push("on "+S),n&&p.push((/^on /.test(p[p.length-1])?"":"on ")+n),i&&(e=/ ([\d.+]+)$/.exec(i),Q=e&&i.charAt(i.length-e[0].length-1)=="/",i={architecture:32,family:e&&!Q?i.replace(e[0],""):i,version:e?e[1]:null,toString:function(){var h=this.version;return this.family+(h&&!Q?" "+h:"")+(this.architecture==64?" 64-bit":"")}}),(e=/\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(X))&&!/\bi686\b/i.test(X)?(i&&(i.architecture=64,i.family=i.family.replace(RegExp(" *"+e),"")),r&&(/\bWOW64\b/i.test(t)||I&&/\w(?:86|32)$/.test(x.cpuClass||x.platform)&&!/\bWin64; x64\b/i.test(t))&&p.unshift("32-bit")):i&&/^OS X/.test(i.family)&&r=="Chrome"&&parseFloat(o)>=39&&(i.architecture=64),t||(t=null);var v={};return v.description=t,v.layout=d&&d[0],v.manufacturer=S,v.name=r,v.prerelease=K,v.product=n,v.ua=t,v.version=r&&o,v.os=i||{architecture:null,family:null,version:null,toString:function(){return"null"}},v.parse=N,v.toString=Be,v.version&&p.unshift(o),v.name&&p.unshift(r),i&&r&&!(i==String(i).split(" ")[0]&&(i==r.split(" ")[0]||n))&&p.push(n?"("+i+")":"on "+i),p.length&&(v.description=p.join(" ")),v}var ae=N();w&&E?_(ae,function(t,l){w[l]=t}):b.platform=ae}).call(ee)})(re,re.exports);var H=re.exports;const xt=()=>`${H.name} ${H.version}`,ht=()=>{var a,s;return`${(a=H.os)==null?void 0:a.family} ${(s=H.os)==null?void 0:s.version}`},gt=De().shape({user:q().trim().required("El usuario es requerido"),password:q().trim().required("La contrase\xF1a es requerida"),isEmail:Je().required("Favor seleccionar si ingresar con el correo o usuario").default(!1),dispositivo:q().trim().required("").default(xt()),os:q().trim().required("").default(ht())}),vt=()=>{var A;const{setHide:a,modalState:s,setOpen:c}=Ze(),{signIn:b}=V.exports.useContext(je),w=Le(),{isLoading:E,send:y,response:C}=Ye();return{isLoading:E,onSubmit:async D=>{var T;const R=await y({url:"/signin",method:"POST",data:D});R.status===201?(b($({},R.data)),w(((T=R.data)==null?void 0:T.tipo)==="Consulta-NIT"?"/nit":"/",{replace:!0})):c()},setHide:a,modalState:s,message:(A=C==null?void 0:C.error)==null?void 0:A.message,setOpen:c}},yt=()=>g(Qe,{color:"primary",loading:!0,variant:"contained",children:"Submit"}),Ot=()=>{var b;const{formState:a,register:s}=be(),{errors:c}=a;return g(et,$({id:"password",label:"Contrase\xF1a",error:!!c.password,helperText:(b=c.password)==null?void 0:b.message,fullWidth:!0},s("password")))},Ct=()=>{var b;const{formState:a,register:s}=be(),{errors:c}=a;return g(tt,$({id:"user",type:"text",label:"Usuario",error:!!c.user,helperText:(b=c.user)==null?void 0:b.message,autoFocus:!0,focused:!0,fullWidth:!0,InputProps:{startAdornment:g(rt,{position:"start",children:g(oe,{})})},style:{marginBottom:20,marginTop:20}},s("user")))},wt=V.exports.lazy(()=>Xe(()=>import("./ModalAlert.js"),["assets/ModalAlert.js","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index3.css","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Typography.js","assets/IconButton.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/CheckCircle.js","assets/DialogContent.js","assets/LoadingButton.js","assets/Button.js","assets/CircularProgress.js"])),nr=()=>{const a=qe({mode:"all",resolver:Ve(gt)}),{handleSubmit:s}=a,A=vt(),{isLoading:c,onSubmit:b,setOpen:w}=A,E=fe(A,["isLoading","onSubmit","setOpen"]),{modalState:y,setHide:C,message:M}=E;return U(He,de($({},a),{children:[g("form",{onSubmit:s(b),style:{width:"100%"},children:U(it,{variant:"outlined",children:[U(ot,{style:{textAlign:"center"},children:[g(at,{color:"textSecondary",gutterBottom:!0,variant:"h5",children:"Formulario de Ingreso"}),g(oe,{style:{fontSize:"120px"}}),g(Ct,{}),g(Ot,{})]}),U(ft,{style:{justifyContent:"center"},children:[!c&&g(nt,{type:"submit",variant:"contained",color:"primary",children:"Ingresar"}),c&&g(yt,{})]})]})}),g(V.exports.Suspense,{fallback:g("div",{}),children:g(wt,{modalState:y,setHide:C,message:M,setOpen:w})})]}))};export{nr as default};
