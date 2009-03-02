/**************** Preamble ****************/
//  Hyphenator 1.0.1 - client side hyphenation for webbrowsers
//  Copyright (C) 2009  Mathias Nater, Zürich (mathias at mnn dot ch)
// 
//  This program is free software: you can redistribute it and/or modify
//  it under the terms of the GNU General Public License as published by
//  the Free Software Foundation, either version 3 of the License, or
//  (at your option) any later version.
// 
//  This program is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU General Public License for more details.
// 
//  You should have received a copy of the GNU General Public License
//  along with this program.  If not, see [http://www.gnu.org/licenses/].
/**************** Preamble ****************/
var Hyphenator=function(){var v="bn, de, en, es, fi, fr, gu, hi, it, ka, ml, nl, or, pa, pl, ru, sv, ta, te";var b=function(){var N,O=0,M=v.split(", "),P={};while(!!(N=M[O++])){P[N]=true;}return P;}();var y={de:"Die Sprache dieser Webseite konnte nicht automatisch bestimmt werden. Bitte Sprache angeben:",en:"The language of this website could not be determined automatically. Please indicate main language:",es:"El idioma del sitio no pudo determinarse autom%E1ticamente. Por favor, indique el idioma principal:",fr:"La langue de ce site n%u2019a pas pu %EAtre d%E9termin%E9e automatiquement. Veuillez indiquer une langue, s.v.p.%A0:",nl:"De taal van deze website kan niet automatisch worden bepaald. Geef de hoofdtaal op:",sv:"Spr%E5ket p%E5 den h%E4r webbplatsen kunde inte avg%F6ras automatiskt. V%E4nligen ange:",ml:"ഈ വെബ്‌സൈറ്റിന്റെ ഭാഷ കണ്ടുപിടിയ്ക്കാന്‍ കഴിഞ്ഞില്ല. ഭാഷ ഏതാണെന്നു തിരഞ്ഞെടുക്കുക:",it:"Lingua del sito sconosciuta. Indicare una lingua, per favore:",ru:"Язык этого сайта не может быть определен автоматически. Пожалуйста укажите язык:",fi:"Sivun kielt%E4 ei tunnistettu automaattisesti. M%E4%E4rit%E4 sivun p%E4%E4kieli:"};var k=function(){var O=document.getElementsByTagName("script"),N=0,P,Q,M;while(!!(M=O[N++])){if(!M.src){continue;}Q=M.src;P=Q.indexOf("Hyphenator.js");if(P!==-1){return Q.substring(0,P);}}return"http://hyphenator.googlecode.com/svn/trunk/";}();var e=function(){var M=false;if(k.indexOf(window.location.hostname)!==-1){M=true;}return M;}();var w={script:true,code:true,pre:true,img:true,br:true,samp:true,kbd:true,"var":true,abbr:true,acronym:true,sub:true,sup:true,button:true,option:true,label:true};var q=true;var x=true;var c=false;var l="hyphenate";var I=6;var t=function(){var Q=null,P=false;var O=document.getElementsByTagName("script");for(var N=0,M=O.length;N<M;N++){if(!!O[N].getAttribute("src")){Q=O[N].getAttribute("src");}if(!Q){continue;}else{if(Q.indexOf("Hyphenator.js?bm=true")!==-1){P=true;}}}return P;}();var A=null;var f=[];var n={};var a={};var L=0;var h="(\\w*://)((\\w*:)?(\\w*)@)?([\\w\\.]*)?(:\\d*)?(/[\\w#!:\\.?\\+=&%@!\\-]*)*";var g="[\\w-\\.]+@[\\w\\.]+";var C=new RegExp(h,"i");var E=new RegExp(g,"i");var F=function(){var M=navigator.userAgent.toLowerCase();if(M.indexOf("msie 6")===-1&&M.indexOf("msie 8")===-1){F=String.fromCharCode(8203);}else{F="";}return F;}();var G=function(){};var p=function(M){alert("Hyphenator.js says:\n\nAn Error ocurred:\n"+M.message);};var K=function(){var O,P=[],N,M;if(document.getElementsByClassName){P=document.getElementsByClassName(l);}else{O=document.getElementsByTagName("*");M=O.length;for(N=0;N<M;N++){if(O[N].className.indexOf(l)!==-1&&O[N].className.indexOf("donthyphenate")===-1){P.push(O[N]);}}}return P;};var d="hidden";var r=String.fromCharCode(173);var s=F;function o(R,P){var Q=R.document,M="DOMContentLoaded",T=R.navigator.userAgent.toLowerCase(),S=parseFloat(T.match(/.+(?:rv|it|ml|ra|ie)[\/: ]([\d.]+)/)[1]),O=false;function U(V){if(!O){O=true;P((V.type&&V.type===M)?V:{type:M,target:Q,eventPhase:0,currentTarget:Q,timeStamp:new Date().getTime(),eventType:V.type||V});}}if(/webkit\//.test(T)&&S<525.13){(function(){if(/complete|loaded/.test(Q.readyState)){U("khtml-poll");}else{setTimeout(arguments.callee,10);}})();}else{if(/msie/.test(T)&&!R.opera){Q.attachEvent("onreadystatechange",function(V){if(Q.readyState==="complete"){Q.detachEvent("on"+V.type,arguments.callee);U(V);}});if(R==top){(function(){try{Q.documentElement.doScroll("left");}catch(V){setTimeout(arguments.callee,10);return;}U("msie-poll");})();}}else{if(Q.addEventListener&&(/opera\//.test(T)&&S>9)||(/gecko\//.test(T)&&S>=1.8)||(/khtml\//.test(T)&&S>=4)||(/webkit\//.test(T)&&S>=525.13)){Q.addEventListener(M,function(V){Q.removeEventListener(M,arguments.callee,false);U(V);},false);}else{var N=R.onload;R.onload=function(V){U(V||R.event);if(typeof N==="function"){N(V||R.event);}};}}}}function z(N,O){if(!!N.getAttribute("lang")){return N.getAttribute("lang").substring(0,2);}try{if(!!N.getAttribute("xml:lang")){return N.getAttribute("xml:lang").substring(0,2);}}catch(M){}if(N.tagName!="HTML"){return z(N.parentNode,true);}if(O){return A;}return null;}function u(){var P=document.getElementsByTagName("html")[0];A=z(P);if(!A){var M=document.getElementsByTagName("meta");for(var O=0;O<M.length;O++){if(!!M[O].getAttribute("http-equiv")&&(M[O].getAttribute("http-equiv")==="content-language")){A=M[O].getAttribute("content").substring(0,2);}if(!!M[O].getAttribute("name")&&(M[O].getAttribute("name")==="DC.language")){A=M[O].getAttribute("content").substring(0,2);}if(!!M[O].getAttribute("name")&&(M[O].getAttribute("name")==="language")){A=M[O].getAttribute("content").substring(0,2);}}}if(!A){var R="";var N=navigator.language?navigator.language:navigator.userLanguage;N=N.substring(0,2);if(y.hasOwnProperty(N)){R=y[N];}else{R=y.en;}R+=" (ISO 639-1)\n\n"+v;var Q=window.prompt(unescape(R),N);if(b[Q]){A=Q;}}}function B(){var M,O,N=0;var P=function(T,S){var Q,U,V,R=0;if(S){T.style.visibility=d;}if(T.lang){U=T.lang;}else{U=z(T,true);T.lang=U;}if(b[U]){a[U]=true;}else{p(new Error("Language "+U+" is not yet supported."));}f.push(T);while(!!(V=T.childNodes[R++])){if(V.nodeType===1&&!w[V.nodeName.toLowerCase()]&&V.className.indexOf("donthyphenate")===-1&&!(V in M)){P(V,false);}}};if(Hyphenator.isBookmarklet()){M=document.getElementsByTagName("body")[0];P(M,false);}else{M=K();while(!!(O=M[N++])){P(O,true);}}if(f.length>0){f[f.length-1].isLast=true;}}function j(Q){var M=Hyphenator.languages[Q].patterns.split(" ");Hyphenator.languages[Q].patterns={};var N,P,O=0;while(!!(N=M[O++])){P=N.replace(/\d/g,"");Hyphenator.languages[Q].patterns[P]=N;}}function D(M){var O=M.split(", ");var R={};for(var Q=0,N=O.length;Q<N;Q++){var P=O[Q].replace(/-/g,"");if(!R.hasOwnProperty(P)){R[P]=O[Q];}}return R;}function i(R){if(b[R]&&!Hyphenator.languages[R]){var N=k+"patterns/"+R+".js";}else{return;}if(e&&!t){var Q=null;if(typeof XMLHttpRequest!="undefined"){Q=new XMLHttpRequest();}if(!Q){try{Q=new ActiveXObject("Msxml2.XMLHTTP");}catch(P){Q=null;}}if(Q){Q.open("HEAD",N,false);Q.send(null);if(Q.status==404){p(new Error("Could not load\n"+N));delete a[R];return;}}}if(document.createElement){var O=document.getElementsByTagName("head").item(0);var M=document.createElement("script");M.src=N;M.id=R;M.type="text/javascript";O.appendChild(M);}}function J(M){if(q){Hyphenator.languages[M].cache={};}if(Hyphenator.languages[M].hasOwnProperty("exceptions")){Hyphenator.addExceptions(M,Hyphenator.languages[M].exceptions);delete Hyphenator.languages[M].exceptions;}if(n.hasOwnProperty(M)){Hyphenator.languages[M].exceptions=D(n[M]);delete n[M];}else{Hyphenator.languages[M].exceptions={};}}function H(O){var N;if(!x){for(N in Hyphenator.languages){if(Hyphenator.languages.hasOwnProperty(N)){j(N);J(N);}}L=2;O();return;}L=1;a[A]=true;for(N in a){if(a.hasOwnProperty(N)){i(N);}}var M=window.setInterval(function(){var P=false;for(var Q in a){if(a.hasOwnProperty(Q)){if(!Hyphenator.languages[Q]){P=false;break;}else{P=true;delete a[Q];j(Q);J(Q);}}}if(P){window.clearInterval(M);L=2;O();}},100);}var m=function(Q){var R;if(!!(R=document.getElementById("HyphenatorToggleBox"))){if(Q){R.firstChild.data="Hy-phe-na-ti-on";}else{R.firstChild.data="Hyphenation";}}else{var P,M,O,N;P=document.getElementsByTagName("body")[0];R=document.createElement("div");M=document.createAttribute("id");M.nodeValue="HyphenatorToggleBox";N=document.createAttribute("class");N.nodeValue="donthyphenate";O=document.createTextNode("Hy-phe-na-ti-on");R.appendChild(O);R.setAttributeNode(M);R.setAttributeNode(N);R.onclick=Hyphenator.toggleHyphenation;R.style.position="absolute";R.style.top="0px";R.style.right="0px";R.style.margin="0";R.style.backgroundColor="#AAAAAA";R.style.color="#FFFFFF";R.style.font="6pt Arial";R.style.letterSpacing="0.2em";R.style.padding="3px";R.style.cursor="pointer";R.style.WebkitBorderBottomLeftRadius="4px";R.style.MozBorderRadiusBottomleft="4px";P.appendChild(R);}};return{version:"1.0.0",languages:{},config:function(N){var M=function(O,P){if(typeof N[O]===P){return true;}else{p(new Error("Config onError: "+O+" must be of type "+P));return false;}};if(N.hasOwnProperty("classname")){if(M("classname","string")){l=N.classname;}}if(N.hasOwnProperty("minwordlength")){if(M("minwordlength","number")){I=N.minwordlength;}}if(N.hasOwnProperty("hyphenchar")){if(M("hyphenchar","string")){if(N.hyphenchar==="&shy;"){N.hyphenchar=String.fromCharCode(173);}r=N.hyphenchar;}}if(N.hasOwnProperty("urlhyphenchar")){if(M("urlhyphenchar","string")){s=N.urlhyphenchar;}}if(N.hasOwnProperty("togglebox")){if(M("togglebox","function")){m=N.togglebox;}}if(N.hasOwnProperty("displaytogglebox")){if(M("displaytogglebox","boolean")){c=N.displaytogglebox;}}if(N.hasOwnProperty("remoteloading")){if(M("remoteloading","boolean")){x=N.remoteloading;}}if(N.hasOwnProperty("enablecache")){if(M("enablecache","boolean")){q=N.enablecache;}}if(N.hasOwnProperty("onhyphenationdonecallback")){if(M("onhyphenationdonecallback","function")){G=N.onhyphenationdonecallback;}}if(N.hasOwnProperty("onerrorhandler")){if(M("onerrorhandler","function")){p=N.onerrorhandler;}}if(N.hasOwnProperty("intermediatestate")){if(M("intermediatestate","string")){d=N.intermediatestate;}}if(N.hasOwnProperty("selectorfunction")){if(M("selectorfunction","function")){K=N.selectorfunction;}}},run:function(){var M=function(){try{u();B();H(Hyphenator.hyphenateDocument);if(c){m(true);}}catch(N){p(N);}};o(window,M);if(Hyphenator.isBookmarklet()){M();}},addExceptions:function(N,M){if(n.hasOwnProperty[N]){n[N]+=", "+M;}else{n[N]=M;}},isBookmarklet:function(){return t;},hyphenateDocument:function(){function O(R,P,Q){return function(){var S=R[P];return S.call(R,Q);};}var M=0,N;while(!!(N=f[M++])){window.setTimeout(O(Hyphenator,"hyphenateElement",N),0);}},removeHyphenationFromDocument:function(){var M=0,N;while(!!(N=f[M++])){Hyphenator.removeHyphenationFromElement(N);}L=4;},hyphenateElement:function(P,R){if(!R){R=P.lang;}if(Hyphenator.languages.hasOwnProperty(R)){var M="[\\w"+Hyphenator.languages[R].specialChars+"@"+String.fromCharCode(173)+"-]{"+I+",}";var Q=function(T){if(C.test(T)||E.test(T)){return Hyphenator.hyphenateURL(T);}else{return Hyphenator.hyphenateWord(R,T);}};var O=new RegExp("("+h+")|("+g+")|("+M+")","gi");var S,N=0;while(!!(S=P.childNodes[N++])){if(S.nodeType===3&&S.data.length>=I){S.data=S.data.replace(O,Q);}}}P.style.visibility="visible";if(P.isLast){L=3;G();}},removeHyphenationFromElement:function(O){var N,M=0,P;switch(r){case"|":N="\\|";break;case"+":N="\\+";break;case"*":N="\\*";break;default:N=r;}while(!!(P=O.childNodes[M++])){if(P.nodeType===3){P.data=P.data.replace(new RegExp(N,"g"),"");P.data=P.data.replace(new RegExp(F,"g"),"");}else{if(P.nodeType===1){Hyphenator.removeHyphenationFromElement(P);}}}},hyphenateWord:function(ai,ag){var R=Hyphenator.languages[ai];if(ag===""){return"";}if(ag.indexOf(r)!==-1){return ag;}if(R.exceptions.hasOwnProperty(ag)){return R.exceptions[ag].replace(/-/g,r);}if(q&&R.cache.hasOwnProperty(ag)){return R.cache[ag];}if(ag.indexOf("-")!==-1){var ac=ag.split("-");for(var af=0,ae=ac.length;af<ae;af++){ac[af]=Hyphenator.hyphenateWord(ai,ac[af]);}return ac.join("-"+F);}var U="_"+ag+"_";var O=U.length;var Y=U.split("");U=U.toLowerCase();var V=[];var aa,M,P,Z,W=false,X,ah,T,Q;var ad={"0":true,"1":true,"2":true,"3":true,"4":true,"5":true,"6":true,"7":true,"8":true,"9":true};var ab=O-R.shortestPattern;for(aa=0;aa<=ab;aa++){M=Math.min((O-aa),R.longestPattern);for(P=R.shortestPattern;P<=M;P++){if(R.patterns.hasOwnProperty(Z=U.substr(aa,P))){W=R.patterns[Z];}else{continue;}T=1;X=W.length;for(af=0;af<X;af++){ah=W.charAt(af);if(ad[ah]){if(af===0){Q=aa-1;if(!V[Q]||V[Q]<ah){V[Q]=ah;}}else{Q=aa+af-T;if(!V[Q]||V[Q]<ah){V[Q]=ah;}}T++;}}}}var N=0;for(af=R.leftmin;af<=(ag.length-R.rightmin);af++){if(!!(V[af]&1)){Y.splice(af+N+1,0,r);N++;}}var S=Y.slice(1,-1).join("");if(q){R.cache[ag]=S;}return S;},hyphenateURL:function(M){return M.replace(/([:\/\.\?#&_,;!@]+)/gi,"$&"+s);},toggleHyphenation:function(){switch(L){case 3:Hyphenator.removeHyphenationFromDocument();m(false);break;case 4:Hyphenator.hyphenateDocument();m(true);break;}}};}();if(Hyphenator.isBookmarklet()){Hyphenator.config({displaytogglebox:true});Hyphenator.run();}