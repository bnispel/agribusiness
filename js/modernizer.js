/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csstransforms3d-flexboxtweener-preserve3d-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function s(){var e,n,t,s,o,i,a;for(var l in S)if(S.hasOwnProperty(l)){if(e=[],n=S[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=r(n.fn,"function")?n.fn():n.fn,o=0;o<e.length;o++)i=e[o],a=i.split("."),1===a.length?Modernizr[a[0]]=s:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=s),C.push((s?"":"no-")+a.join("-"))}}function o(e){var n=x.className,t=Modernizr._config.classPrefix||"";if(_&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),_?x.className.baseVal=n:x.className=n)}function i(e,n){return!!~(""+e).indexOf(n)}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):_?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function u(e,n){return function(){return e.apply(n,arguments)}}function f(e,n,t){var s;for(var o in e)if(e[o]in n)return t===!1?e[o]:(s=n[e[o]],r(s,"function")?u(s,t||n):s);return!1}function d(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function p(n,t,r){var s;if("getComputedStyle"in e){s=getComputedStyle.call(e,n,t);var o=e.console;if(null!==s)r&&(s=s.getPropertyValue(r));else if(o){var i=o.error?"error":"log";o[i].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else s=!t&&n.currentStyle&&n.currentStyle[r];return s}function c(){var e=n.body;return e||(e=a(_?"svg":"body"),e.fake=!0),e}function m(e,t,r,s){var o,i,l,u,f="modernizr",d=a("div"),p=c();if(parseInt(r,10))for(;r--;)l=a("div"),l.id=s?s[r]:f+(r+1),d.appendChild(l);return o=a("style"),o.type="text/css",o.id="s"+f,(p.fake?p:d).appendChild(o),p.appendChild(d),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(n.createTextNode(e)),d.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",u=x.style.overflow,x.style.overflow="hidden",x.appendChild(p)),i=t(d,e),p.fake?(p.parentNode.removeChild(p),x.style.overflow=u,x.offsetHeight):d.parentNode.removeChild(d),!!i}function g(n,r){var s=n.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(d(n[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];s--;)o.push("("+d(n[s])+":"+r+")");return o=o.join(" or "),m("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==p(e,null,"position")})}return t}function h(e,n,s,o){function u(){d&&(delete N.style,delete N.modElem)}if(o=r(o,"undefined")?!1:o,!r(s,"undefined")){var f=g(e,s);if(!r(f,"undefined"))return f}for(var d,p,c,m,h,y=["modernizr","tspan","samp"];!N.style&&y.length;)d=!0,N.modElem=a(y.shift()),N.style=N.modElem.style;for(c=e.length,p=0;c>p;p++)if(m=e[p],h=N.style[m],i(m,"-")&&(m=l(m)),N.style[m]!==t){if(o||r(s,"undefined"))return u(),"pfx"==n?m:!0;try{N.style[m]=s}catch(v){}if(N.style[m]!=h)return u(),"pfx"==n?m:!0}return u(),!1}function y(e,n,t,s,o){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+z.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?h(a,n,s,o):(a=(e+" "+E.join(i+" ")+i).split(" "),f(a,n,t))}function v(e,n,r){return y(e,t,t,n,r)}var C=[],S=[],w={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){S.push({name:e,fn:n,options:t})},addAsyncTest:function(e){S.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var x=n.documentElement,_="svg"===x.nodeName.toLowerCase(),b="CSS"in e&&"supports"in e.CSS,T="supportsCSS"in e;Modernizr.addTest("supports",b||T);var P="Moz O ms Webkit",z=w._config.usePrefixes?P.split(" "):[];w._cssomPrefixes=z;var E=w._config.usePrefixes?P.toLowerCase().split(" "):[];w._domPrefixes=E;var k={elem:a("modernizr")};Modernizr._q.push(function(){delete k.elem});var N={style:k.elem.style};Modernizr._q.unshift(function(){delete N.style}),w.testAllProps=y,w.testAllProps=v,Modernizr.addTest("flexboxtweener",v("flexAlign","end",!0)),Modernizr.addTest("csstransforms3d",function(){return!!v("perspective","1px",!0)}),Modernizr.addTest("preserve3d",function(){var n,t,r=e.CSS,s=!1;return r&&r.supports&&r.supports("(transform-style: preserve-3d)")?!0:(n=a("a"),t=a("a"),n.style.cssText="display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);",t.style.cssText="display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);",n.appendChild(t),x.appendChild(n),s=t.getBoundingClientRect(),x.removeChild(n),s=s.width&&s.width<4)}),s(),o(C),delete w.addTest,delete w.addAsyncTest;for(var j=0;j<Modernizr._q.length;j++)Modernizr._q[j]();e.Modernizr=Modernizr}(window,document);