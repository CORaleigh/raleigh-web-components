"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[1561],{47672:function(n,r,t){var e;function u(n){return"global"===n?e.Global:e.Local}function o(n){return n===e.Global?"global":"local"}t.d(r,{a:function(){return o},l:function(){return e},o:function(){return u}}),function(n){n[n.Global=1]="Global",n[n.Local=2]="Local"}(e||(e={}))},48561:function(n,r,t){function e(n){return 32+n.length}function u(){return 16}function o(n){if(!n)return 0;var r=32;for(var t in n)if(n.hasOwnProperty(t)){var u=n[t];switch(typeof u){case"string":r+=e(u);break;case"number":r+=16;break;case"boolean":r+=4}}return r}function i(n,r){return 32+n.length*r}var c;t.d(r,{e:function(){return i},n:function(){return e},o:function(){return c},r:function(){return o},t:function(){return u}}),function(n){n[n.KILOBYTES=1024]="KILOBYTES",n[n.MEGABYTES=1048576]="MEGABYTES",n[n.GIGABYTES=1073741824]="GIGABYTES"}(c||(c={}))},46237:function(n,r,t){t.d(r,{n:function(){return e},o:function(){return u}});t(50165);function e(n){}function u(n){return function(){return n}}},26995:function(n,r,t){t.d(r,{i:function(){return c},l:function(){return a},n:function(){return i},o:function(){return e}});var e,u,o=t(50165);function i(n,r){for(var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},e=c(n);e.length>1;){var u=a(r,e.shift(),t);if((0,o.r)(u))return u}return f(r,e.shift(),t)}function c(n){var r=(0,o.c)("esri-force-webgl");if(r===e.WEBGL1||r===e.WEBGL2)return[r];switch(n){case"2d":return(0,o.c)("mac")&&(0,o.c)("chrome")?[e.WEBGL1,e.WEBGL2]:[e.WEBGL2,e.WEBGL1];case"3d":return[e.WEBGL2,e.WEBGL1]}}function f(n,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!window.WebGLRenderingContext)return l(n,b),null;var e=a(n,r,t);return(0,o.t)(e)&&l(n,g),e}function a(n,r){for(var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},u=r===e.WEBGL1?["webgl","experimental-webgl","webkit-3d","moz-webgl"]:["webgl2"],o=null,i=0,c=u;i<c.length;i++){var a=c[i];try{o=n.getContext(a,t)}catch(f){}if(o)break}return o}function l(n,r){var t=n.parentNode;t&&(t.innerHTML='<table style="background-color: #8CE; width: 100%; height: 100%;"><tr><td align="center"><div style="display: table-cell; vertical-align: middle;"><div style="">'+r+"</div></div></td></tr></table>")}(u=e||(e={}))[u.WEBGL1=1]="WEBGL1",u[u.WEBGL2=2]="WEBGL2";var b='This page requires a browser that supports WebGL.<br/><a href="http://get.webgl.org">Click here to upgrade your browser.</a>',g='It doesn\'t appear your computer can support WebGL.<br/><a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>'},3969:function(n,r,t){function e(){return[0,0,0,0]}function u(n){return[n[0],n[1],n[2],n[3]]}function o(n,r,t,e){return[n,r,t,e]}function i(n){for(var r=[0,0,0,0],t=Math.min(4,n.length),e=0;e<t;++e)r[e]=n[e];return r}function c(n,r){return new Float64Array(n,r,4)}function f(){return[0,0,0,0]}function a(){return o(1,1,1,1)}function l(){return o(1,0,0,0)}function b(){return o(0,1,0,0)}function g(){return o(0,0,1,0)}function h(){return o(0,0,0,1)}t.d(r,{_:function(){return d},e:function(){return i},l:function(){return s},n:function(){return e},r:function(){return o},t:function(){return u},u:function(){return c}});var s=[0,0,0,0],d=a(),v=l(),G=b(),E=g(),p=h();Object.freeze(Object.defineProperty({__proto__:null,create:e,clone:u,fromValues:o,fromArray:i,createView:c,zeros:f,ones:a,unitX:l,unitY:b,unitZ:g,unitW:h,ZEROS:s,ONES:d,UNIT_X:v,UNIT_Y:G,UNIT_Z:E,UNIT_W:p},Symbol.toStringTag,{value:"Module"}))}}]);
//# sourceMappingURL=1561.957a1e6e.chunk.js.map