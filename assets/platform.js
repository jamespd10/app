import{g as xe,e as ge,s as z,r as ee,u as ve,h as Oe,i as Ce,j as ye,_ as Me,a as we,k as Q,a9 as _}from"./index.js";import{B as Ae}from"./ButtonBase.js";import"./jwt-decode.esm.js";function Ee(f){return xe("MuiCardActionArea",f)}const Pe=ge("MuiCardActionArea",["root","focusVisible","focusHighlight"]);var L=Pe;const Be=["children","className","focusVisibleClassName"],Re=f=>{const{classes:g}=f;return Ce({root:["root"],focusHighlight:["focusHighlight"]},Ee,g)},We=z(Ae,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(f,g)=>g.root})(({theme:f})=>({display:"block",textAlign:"inherit",width:"100%",[`&:hover .${L.focusHighlight}`]:{opacity:f.palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${L.focusVisible} .${L.focusHighlight}`]:{opacity:f.palette.action.focusOpacity}})),ke=z("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(f,g)=>g.focusHighlight})(({theme:f})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:f.transitions.create("opacity",{duration:f.transitions.duration.short})})),Ie=ee.exports.forwardRef(function(g,R){const M=ve({props:g,name:"MuiCardActionArea"}),{children:P,className:W,focusVisibleClassName:x}=M,H=Oe(M,Be),O=M,w=Re(O);return ye(We,Me({className:Q(w.root,W),focusVisibleClassName:Q(x,w.focusVisible),ref:R,ownerState:O},H,{children:[P,we(ke,{className:w.focusHighlight,ownerState:O})]}))});var Fe=Ie;const Ne=z(Fe)(({theme:f})=>({"&:hover":{backgroundColor:f.palette.primary.main,color:"white","& .MuiListItemIcon-root":{color:"white"}}}));ee.exports.createContext({});var U={exports:{}};/*!
 * Platform.js v1.3.6
 * Copyright 2014-2020 Benjamin Tan
 * Copyright 2011-2013 John-David Dalton
 * Available under MIT license
 */(function(f,g){(function(){var R={function:!0,object:!0},M=R[typeof window]&&window||this,P=g,W=f&&!f.nodeType&&f,x=P&&W&&typeof _=="object"&&_;x&&(x.global===x||x.window===x||x.self===x)&&(M=x);var H=Math.pow(2,53)-1,O=/\bOpera/,w=Object.prototype,te=w.hasOwnProperty,D=w.toString;function q(t){return t=String(t),t.charAt(0).toUpperCase()+t.slice(1)}function ie(t,n,b){var h={"10.0":"10","6.4":"10 Technical Preview","6.3":"8.1","6.2":"8","6.1":"Server 2008 R2 / 7","6.0":"Server 2008 / Vista","5.2":"Server 2003 / XP 64-bit","5.1":"XP","5.01":"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"};return n&&b&&/^Win/i.test(t)&&!/^Windows Phone /i.test(t)&&(h=h[/[\d.]+$/.exec(t)])&&(t="Windows "+h),t=String(t),n&&b&&(t=t.replace(RegExp(n,"i"),b)),t=k(t.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0]),t}function re(t,n){var b=-1,h=t?t.length:0;if(typeof h=="number"&&h>-1&&h<=H)for(;++b<h;)n(t[b],b,t);else I(t,n)}function k(t){return t=X(t),/^(?:webOS|i(?:OS|P))/.test(t)?t:q(t)}function I(t,n){for(var b in t)te.call(t,b)&&n(t[b],b,t)}function A(t){return t==null?q(t):D.call(t).slice(8,-1)}function oe(t,n){var b=t!=null?typeof t[n]:"number";return!/^(?:boolean|number|string|undefined)$/.test(b)&&(b=="object"?!!t[n]:!0)}function v(t){return String(t).replace(/([ -])(?!$)/g,"$1?")}function E(t,n){var b=null;return re(t,function(h,T){b=n(b,h,T,t)}),b}function X(t){return String(t).replace(/^ +| +$/g,"")}function F(t){var n=M,b=t&&typeof t=="object"&&A(t)!="String";b&&(n=t,t=null);var h=n.navigator||{},T=h.userAgent||"";t||(t=T);var ae=b?!!h.likeChrome:/\bChrome\b/.test(t)&&!/internal|\n/i.test(D.toString()),K="Object",ne=b?K:"ScriptBridgingProxyObject",le=b?K:"Environment",se=b&&n.java?"JavaPackage":A(n.java),ce=b?K:"RuntimeObject",B=/\bJava/.test(se)&&n.java,be=B&&A(n.environment)==le,pe=B?"a":"\u03B1",fe=B?"b":"\u03B2",V=n.document||{},C=n.operamini||n.opera,$=O.test($=b&&C?C["[[Class]]"]:A(C))?$:C=null,e,G=t,l=[],N=null,y=t==T,o=y&&C&&typeof C.version=="function"&&C.version(),j,s=de([{label:"EdgeHTML",pattern:"Edge"},"Trident",{label:"WebKit",pattern:"AppleWebKit"},"iCab","Presto","NetFront","Tasman","KHTML","Gecko"]),i=ue(["Adobe AIR","Arora","Avant Browser","Breach","Camino","Electron","Epiphany","Fennec","Flock","Galeon","GreenBrowser","iCab","Iceweasel","K-Meleon","Konqueror","Lunascape","Maxthon",{label:"Microsoft Edge",pattern:"(?:Edge|Edg|EdgA|EdgiOS)"},"Midori","Nook Browser","PaleMoon","PhantomJS","Raven","Rekonq","RockMelt",{label:"Samsung Internet",pattern:"SamsungBrowser"},"SeaMonkey",{label:"Silk",pattern:"(?:Cloud9|Silk-Accelerated)"},"Sleipnir","SlimBrowser",{label:"SRWare Iron",pattern:"Iron"},"Sunrise","Swiftfox","Vivaldi","Waterfox","WebPositive",{label:"Yandex Browser",pattern:"YaBrowser"},{label:"UC Browser",pattern:"UCBrowser"},"Opera Mini",{label:"Opera Mini",pattern:"OPiOS"},"Opera",{label:"Opera",pattern:"OPR"},"Chromium","Chrome",{label:"Chrome",pattern:"(?:HeadlessChrome)"},{label:"Chrome Mobile",pattern:"(?:CriOS|CrMo)"},{label:"Firefox",pattern:"(?:Firefox|Minefield)"},{label:"Firefox for iOS",pattern:"FxiOS"},{label:"IE",pattern:"IEMobile"},{label:"IE",pattern:"MSIE"},"Safari"]),a=Y([{label:"BlackBerry",pattern:"BB10"},"BlackBerry",{label:"Galaxy S",pattern:"GT-I9000"},{label:"Galaxy S2",pattern:"GT-I9100"},{label:"Galaxy S3",pattern:"GT-I9300"},{label:"Galaxy S4",pattern:"GT-I9500"},{label:"Galaxy S5",pattern:"SM-G900"},{label:"Galaxy S6",pattern:"SM-G920"},{label:"Galaxy S6 Edge",pattern:"SM-G925"},{label:"Galaxy S7",pattern:"SM-G930"},{label:"Galaxy S7 Edge",pattern:"SM-G935"},"Google TV","Lumia","iPad","iPod","iPhone","Kindle",{label:"Kindle Fire",pattern:"(?:Cloud9|Silk-Accelerated)"},"Nexus","Nook","PlayBook","PlayStation Vita","PlayStation","TouchPad","Transformer",{label:"Wii U",pattern:"WiiU"},"Wii","Xbox One",{label:"Xbox 360",pattern:"Xbox"},"Xoom"]),d=he({Apple:{iPad:1,iPhone:1,iPod:1},Alcatel:{},Archos:{},Amazon:{Kindle:1,"Kindle Fire":1},Asus:{Transformer:1},"Barnes & Noble":{Nook:1},BlackBerry:{PlayBook:1},Google:{"Google TV":1,Nexus:1},HP:{TouchPad:1},HTC:{},Huawei:{},Lenovo:{},LG:{},Microsoft:{Xbox:1,"Xbox One":1},Motorola:{Xoom:1},Nintendo:{"Wii U":1,Wii:1},Nokia:{Lumia:1},Oppo:{},Samsung:{"Galaxy S":1,"Galaxy S2":1,"Galaxy S3":1,"Galaxy S4":1},Sony:{PlayStation:1,"PlayStation Vita":1},Xiaomi:{Mi:1,Redmi:1}}),r=Se(["Windows Phone","KaiOS","Android","CentOS",{label:"Chrome OS",pattern:"CrOS"},"Debian",{label:"DragonFly BSD",pattern:"DragonFly"},"Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Tizen","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "]);function de(u){return E(u,function(p,c){return p||RegExp("\\b"+(c.pattern||v(c))+"\\b","i").exec(t)&&(c.label||c)})}function he(u){return E(u,function(p,c,m){return p||(c[a]||c[/^[a-z]+(?: +[a-z]+\b)*/i.exec(a)]||RegExp("\\b"+v(m)+"(?:\\b|\\w*\\d)","i").exec(t))&&m})}function ue(u){return E(u,function(p,c){return p||RegExp("\\b"+(c.pattern||v(c))+"\\b","i").exec(t)&&(c.label||c)})}function Se(u){return E(u,function(p,c){var m=c.pattern||v(c);return!p&&(p=RegExp("\\b"+m+"(?:/[\\d.]+|[ \\w.]*)","i").exec(t))&&(p=ie(p,m,c.label||c)),p})}function Y(u){return E(u,function(p,c){var m=c.pattern||v(c);return!p&&(p=RegExp("\\b"+m+" *\\d+[.\\w_]*","i").exec(t)||RegExp("\\b"+m+" *\\w+-[\\w]*","i").exec(t)||RegExp("\\b"+m+"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)","i").exec(t))&&((p=String(c.label&&!RegExp(m,"i").test(c.label)?c.label:p).split("/"))[1]&&!/[\d.]+/.test(p[0])&&(p[0]+=" "+p[1]),c=c.label||c,p=k(p[0].replace(RegExp(m,"i"),c).replace(RegExp("; *(?:"+c+"[_-])?","i")," ").replace(RegExp("("+c+")[-_.]?(\\w)","i"),"$1 $2"))),p})}function Z(u){return E(u,function(p,c){return p||(RegExp(c+"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)","i").exec(t)||0)[1]||null})}function me(){return this.description||""}if(s&&(s=[s]),/\bAndroid\b/.test(r)&&!a&&(e=/\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(t))&&(a=X(e[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i,"")||null),d&&!a?a=Y([d]):d&&a&&(a=a.replace(RegExp("^("+v(d)+")[-_.\\s]","i"),d+" ").replace(RegExp("^("+v(d)+")[-_.]?(\\w)","i"),d+" $2")),(e=/\bGoogle TV\b/.exec(a))&&(a=e[0]),/\bSimulator\b/i.test(t)&&(a=(a?a+" ":"")+"Simulator"),i=="Opera Mini"&&/\bOPiOS\b/.test(t)&&l.push("running in Turbo/Uncompressed mode"),i=="IE"&&/\blike iPhone OS\b/.test(t)?(e=F(t.replace(/like iPhone OS/,"")),d=e.manufacturer,a=e.product):/^iP/.test(a)?(i||(i="Safari"),r="iOS"+((e=/ OS ([\d_]+)/i.exec(t))?" "+e[1].replace(/_/g,"."):"")):i=="Konqueror"&&/^Linux\b/i.test(r)?r="Kubuntu":d&&d!="Google"&&(/Chrome/.test(i)&&!/\bMobile Safari\b/i.test(t)||/\bVita\b/.test(a))||/\bAndroid\b/.test(r)&&/^Chrome/.test(i)&&/\bVersion\//i.test(t)?(i="Android Browser",r=/\bAndroid\b/.test(r)?r:"Android"):i=="Silk"?(/\bMobi/i.test(t)||(r="Android",l.unshift("desktop mode")),/Accelerated *= *true/i.test(t)&&l.unshift("accelerated")):i=="UC Browser"&&/\bUCWEB\b/.test(t)?l.push("speed mode"):i=="PaleMoon"&&(e=/\bFirefox\/([\d.]+)\b/.exec(t))?l.push("identifying as Firefox "+e[1]):i=="Firefox"&&(e=/\b(Mobile|Tablet|TV)\b/i.exec(t))?(r||(r="Firefox OS"),a||(a=e[1])):!i||(e=!/\bMinefield\b/i.test(t)&&/\b(?:Firefox|Safari)\b/.exec(i))?(i&&!a&&/[\/,]|^[^(]+?\)/.test(t.slice(t.indexOf(e+"/")+8))&&(i=null),(e=a||d||r)&&(a||d||/\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(r))&&(i=/[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(r)?r:e)+" Browser")):i=="Electron"&&(e=(/\bChrome\/([\d.]+)\b/.exec(t)||0)[1])&&l.push("Chromium "+e),o||(o=Z(["(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)","Version",v(i),"(?:Firefox|Minefield|NetFront)"])),(e=s=="iCab"&&parseFloat(o)>3&&"WebKit"||/\bOpera\b/.test(i)&&(/\bOPR\b/.test(t)?"Blink":"Presto")||/\b(?:Midori|Nook|Safari)\b/i.test(t)&&!/^(?:Trident|EdgeHTML)$/.test(s)&&"WebKit"||!s&&/\bMSIE\b/i.test(t)&&(r=="Mac OS"?"Tasman":"Trident")||s=="WebKit"&&/\bPlayStation\b(?! Vita\b)/i.test(i)&&"NetFront")&&(s=[e]),i=="IE"&&(e=(/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(t)||0)[1])?(i+=" Mobile",r="Windows Phone "+(/\+$/.test(e)?e:e+".x"),l.unshift("desktop mode")):/\bWPDesktop\b/i.test(t)?(i="IE Mobile",r="Windows Phone 8.x",l.unshift("desktop mode"),o||(o=(/\brv:([\d.]+)/.exec(t)||0)[1])):i!="IE"&&s=="Trident"&&(e=/\brv:([\d.]+)/.exec(t))&&(i&&l.push("identifying as "+i+(o?" "+o:"")),i="IE",o=e[1]),y){if(oe(n,"global"))if(B&&(e=B.lang.System,G=e.getProperty("os.arch"),r=r||e.getProperty("os.name")+" "+e.getProperty("os.version")),be){try{o=n.require("ringo/engine").version.join("."),i="RingoJS"}catch{(e=n.system)&&e.global.system==n.system&&(i="Narwhal",r||(r=e[0].os||null))}i||(i="Rhino")}else typeof n.process=="object"&&!n.process.browser&&(e=n.process)&&(typeof e.versions=="object"&&(typeof e.versions.electron=="string"?(l.push("Node "+e.versions.node),i="Electron",o=e.versions.electron):typeof e.versions.nw=="string"&&(l.push("Chromium "+o,"Node "+e.versions.node),i="NW.js",o=e.versions.nw)),i||(i="Node.js",G=e.arch,r=e.platform,o=/[\d.]+/.exec(e.version),o=o?o[0]:null));else A(e=n.runtime)==ne?(i="Adobe AIR",r=e.flash.system.Capabilities.os):A(e=n.phantom)==ce?(i="PhantomJS",o=(e=e.version||null)&&e.major+"."+e.minor+"."+e.patch):typeof V.documentMode=="number"&&(e=/\bTrident\/(\d+)/i.exec(t))?(o=[o,V.documentMode],(e=+e[1]+4)!=o[1]&&(l.push("IE "+o[1]+" mode"),s&&(s[1]=""),o[1]=e),o=i=="IE"?String(o[1].toFixed(1)):o[0]):typeof V.documentMode=="number"&&/^(?:Chrome|Firefox)\b/.test(i)&&(l.push("masking as "+i+" "+o),i="IE",o="11.0",s=["Trident"],r="Windows");r=r&&k(r)}if(o&&(e=/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(o)||/(?:alpha|beta)(?: ?\d)?/i.exec(t+";"+(y&&h.appMinorVersion))||/\bMinefield\b/i.test(t)&&"a")&&(N=/b/i.test(e)?"beta":"alpha",o=o.replace(RegExp(e+"\\+?$"),"")+(N=="beta"?fe:pe)+(/\d+\+?/.exec(e)||"")),i=="Fennec"||i=="Firefox"&&/\b(?:Android|Firefox OS|KaiOS)\b/.test(r))i="Firefox Mobile";else if(i=="Maxthon"&&o)o=o.replace(/\.[\d.]+/,".x");else if(/\bXbox\b/i.test(a))a=="Xbox 360"&&(r=null),a=="Xbox 360"&&/\bIEMobile\b/.test(t)&&l.unshift("mobile mode");else if((/^(?:Chrome|IE|Opera)$/.test(i)||i&&!a&&!/Browser|Mobi/.test(i))&&(r=="Windows CE"||/Mobi/i.test(t)))i+=" Mobile";else if(i=="IE"&&y)try{n.external===null&&l.unshift("platform preview")}catch{l.unshift("embedded")}else(/\bBlackBerry\b/.test(a)||/\bBB10\b/.test(t))&&(e=(RegExp(a.replace(/ +/g," *")+"/([.\\d]+)","i").exec(t)||0)[1]||o)?(e=[e,/BB10/.test(t)],r=(e[1]?(a=null,d="BlackBerry"):"Device Software")+" "+e[0],o=null):this!=I&&a!="Wii"&&(y&&C||/Opera/.test(i)&&/\b(?:MSIE|Firefox)\b/i.test(t)||i=="Firefox"&&/\bOS X (?:\d+\.){2,}/.test(r)||i=="IE"&&(r&&!/^Win/.test(r)&&o>5.5||/\bWindows XP\b/.test(r)&&o>8||o==8&&!/\bTrident\b/.test(t)))&&!O.test(e=F.call(I,t.replace(O,"")+";"))&&e.name&&(e="ing as "+e.name+((e=e.version)?" "+e:""),O.test(i)?(/\bIE\b/.test(e)&&r=="Mac OS"&&(r=null),e="identify"+e):(e="mask"+e,$?i=k($.replace(/([a-z])([A-Z])/g,"$1 $2")):i="Opera",/\bIE\b/.test(e)&&(r=null),y||(o=null)),s=["Presto"],l.push(e));(e=(/\bAppleWebKit\/([\d.]+\+?)/i.exec(t)||0)[1])&&(e=[parseFloat(e.replace(/\.(\d)$/,".0$1")),e],i=="Safari"&&e[1].slice(-1)=="+"?(i="WebKit Nightly",N="alpha",o=e[1].slice(0,-1)):(o==e[1]||o==(e[2]=(/\bSafari\/([\d.]+\+?)/i.exec(t)||0)[1]))&&(o=null),e[1]=(/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(t)||0)[1],e[0]==537.36&&e[2]==537.36&&parseFloat(e[1])>=28&&s=="WebKit"&&(s=["Blink"]),!y||!ae&&!e[1]?(s&&(s[1]="like Safari"),e=(e=e[0],e<400?1:e<500?2:e<526?3:e<533?4:e<534?"4+":e<535?5:e<537?6:e<538?7:e<601?8:e<602?9:e<604?10:e<606?11:e<608?12:"12")):(s&&(s[1]="like Chrome"),e=e[1]||(e=e[0],e<530?1:e<532?2:e<532.05?3:e<533?4:e<534.03?5:e<534.07?6:e<534.1?7:e<534.13?8:e<534.16?9:e<534.24?10:e<534.3?11:e<535.01?12:e<535.02?"13+":e<535.07?15:e<535.11?16:e<535.19?17:e<536.05?18:e<536.1?19:e<537.01?20:e<537.11?"21+":e<537.13?23:e<537.18?24:e<537.24?25:e<537.36?26:s!="Blink"?"27":"28")),s&&(s[1]+=" "+(e+=typeof e=="number"?".x":/[.+]/.test(e)?"":"+")),i=="Safari"&&(!o||parseInt(o)>45)?o=e:i=="Chrome"&&/\bHeadlessChrome/i.test(t)&&l.unshift("headless")),i=="Opera"&&(e=/\bzbov|zvav$/.exec(r))?(i+=" ",l.unshift("desktop mode"),e=="zvav"?(i+="Mini",o=null):i+="Mobile",r=r.replace(RegExp(" *"+e+"$"),"")):i=="Safari"&&/\bChrome\b/.exec(s&&s[1])?(l.unshift("desktop mode"),i="Chrome Mobile",o=null,/\bOS X\b/.test(r)?(d="Apple",r="iOS 4.3+"):r=null):/\bSRWare Iron\b/.test(i)&&!o&&(o=Z("Chrome")),o&&o.indexOf(e=/[\d.]+$/.exec(r))==0&&t.indexOf("/"+e+"-")>-1&&(r=X(r.replace(e,""))),r&&r.indexOf(i)!=-1&&!RegExp(i+" OS").test(r)&&(r=r.replace(RegExp(" *"+v(i)+" *"),"")),s&&!/\b(?:Avant|Nook)\b/.test(i)&&(/Browser|Lunascape|Maxthon/.test(i)||i!="Safari"&&/^iOS/.test(r)&&/\bSafari\b/.test(s[1])||/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(i)&&s[1])&&(e=s[s.length-1])&&l.push(e),l.length&&(l=["("+l.join("; ")+")"]),d&&a&&a.indexOf(d)<0&&l.push("on "+d),a&&l.push((/^on /.test(l[l.length-1])?"":"on ")+a),r&&(e=/ ([\d.+]+)$/.exec(r),j=e&&r.charAt(r.length-e[0].length-1)=="/",r={architecture:32,family:e&&!j?r.replace(e[0],""):r,version:e?e[1]:null,toString:function(){var u=this.version;return this.family+(u&&!j?" "+u:"")+(this.architecture==64?" 64-bit":"")}}),(e=/\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(G))&&!/\bi686\b/i.test(G)?(r&&(r.architecture=64,r.family=r.family.replace(RegExp(" *"+e),"")),i&&(/\bWOW64\b/i.test(t)||y&&/\w(?:86|32)$/.test(h.cpuClass||h.platform)&&!/\bWin64; x64\b/i.test(t))&&l.unshift("32-bit")):r&&/^OS X/.test(r.family)&&i=="Chrome"&&parseFloat(o)>=39&&(r.architecture=64),t||(t=null);var S={};return S.description=t,S.layout=s&&s[0],S.manufacturer=d,S.name=i,S.prerelease=N,S.product=a,S.ua=t,S.version=i&&o,S.os=r||{architecture:null,family:null,version:null,toString:function(){return"null"}},S.parse=F,S.toString=me,S.version&&l.unshift(o),S.name&&l.unshift(i),r&&i&&!(r==String(r).split(" ")[0]&&(r==i.split(" ")[0]||a))&&l.push(a?"("+r+")":"on "+r),l.length&&(S.description=l.join(" ")),S}var J=F();P&&W?I(J,function(t,n){P[n]=t}):M.platform=J}).call(_)})(U,U.exports);var He=U.exports;export{Ne as S,He as p};
