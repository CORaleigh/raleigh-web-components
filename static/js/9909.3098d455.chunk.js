"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[9909],{29909:function(e,t,a){a.r(t),a.d(t,{getContrastingBackgroundTheme:function(){return S},getRenderSymbolParameters:function(){return L},previewSymbol2D:function(){return Z}});var n=a(74165),l=a(1413),i=a(15861),o=a(78674),r=a(23132),u=a(78880),s=a(30664),c=a(60424);a(66307),a(2760),a(75610),a(21583),a(24980),a(3114),a(50448),a(57714),a(30709),a(70441),a(50526),a(91204),a(80262),a(36460),a(22144),a(88370),a(72820),a(78311),a(96349),a(80175),a(9055),a(79611),a(43920),a(2157),a(38304),a(83024),a(61340),a(33703),a(47626),a(25316),a(84538),a(49580),a(41742),a(54841),a(77470),a(36551),a(92870),a(22225);function d(e){var t=function(e){var t=e.r,a=e.g,n=e.b,l=e.a;return l<1&&(t=Math.round(l*t+255*(1-l)),a=Math.round(l*a+255*(1-l)),n=Math.round(l*n+255*(1-l))),new o.l({r:t,g:a,b:n})}(e);return.2126*t.r+.7152*t.g+.0722*t.b}var h="picture-fill",m=c.t.size,p=c.t.maxSize,v=c.t.maxOutlineSize,f=c.t.lineWidth,y=225,g=document.createElement("canvas");function w(e,t){var a=g.getContext("2d"),n=[];return t&&(t.weight&&n.push(t.weight),t.size&&n.push(t.size+"px"),t.family&&n.push(t.family)),a.font=n.join(" "),a.measureText(e).width}function b(e){if(0===e.length)return 0;if(e.length>2){var t=(0,u.e)(1),a=parseFloat(e);switch(e.slice(-2)){case"px":return a;case"pt":return a*t;case"in":return 72*a*t;case"pc":return 12*a*t;case"mm":return 2.8346456692913384*a*t;case"cm":return 28.346456692913385*a*t}}return parseFloat(e)}function k(e){var t=null===e||void 0===e?void 0:e.size;return{width:null!=t&&"object"==typeof t&&"width"in t?(0,u.u)(t.width):null,height:null!=t&&"object"==typeof t&&"height"in t?(0,u.u)(t.height):null}}function M(e,t){return x.apply(this,arguments)}function x(){return x=(0,i.Z)((0,n.Z)().mark((function e(t,a){var l,i,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=a.fill,i=t.color,"pattern"!==(null===l||void 0===l?void 0:l.type)||!i||t.type===h){e.next=6;break}return e.next=4,(0,s.c)(l.src,i.toCss(!0));case 4:o=e.sent,l.src=o,a.fill=l;case 6:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}function z(e,t){return e>t?"dark":"light"}function L(e,t){var a,n,i="number"==typeof(null===t||void 0===t?void 0:t.size)?null===t||void 0===t?void 0:t.size:null,o=null!=i?(0,u.u)(i):null,r=null!=(null===t||void 0===t?void 0:t.maxSize)?(0,u.u)(t.maxSize):null,d=null!=(null===t||void 0===t?void 0:t.rotation)?t.rotation:"angle"in e?e.angle:null,y=(0,s.b)(e),g=(0,s.a)(e);"dark"!==S(e,245)||(null===t||void 0===t?void 0:t.ignoreWhiteSymbols)||(g=(0,l.Z)((0,l.Z)({width:.75},g),{},{color:"#bdc3c7"}));var M={shape:null,fill:y,stroke:g,offset:[0,0]};(null===(a=g)||void 0===a?void 0:a.width)&&(g.width=Math.min(g.width,v));var x=(null===(n=g)||void 0===n?void 0:n.width)||0,z=null!=(null===t||void 0===t?void 0:t.size)&&(null==(null===t||void 0===t?void 0:t.scale)||(null===t||void 0===t?void 0:t.scale)),L=0,Z=0,C=!1;switch(e.type){case"simple-marker":var j=e.style,F=Math.min(null!=o?o:(0,u.u)(e.size),r||p);switch(L=F,Z=F,j){case"circle":M.shape={type:"circle",cx:0,cy:0,r:.5*F},z||(L+=x,Z+=x);break;case"cross":M.shape={type:"path",path:[{command:"M",values:[0,.5*Z]},{command:"L",values:[L,.5*Z]},{command:"M",values:[.5*L,0]},{command:"L",values:[.5*L,Z]}]};break;case"diamond":M.shape={type:"path",path:[{command:"M",values:[0,.5*Z]},{command:"L",values:[.5*L,0]},{command:"L",values:[L,.5*Z]},{command:"L",values:[.5*L,Z]},{command:"Z",values:[]}]},z||(L+=x,Z+=x);break;case"square":M.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[L,0]},{command:"L",values:[L,Z]},{command:"L",values:[0,Z]},{command:"Z",values:[]}]},z||(L+=x,Z+=x),d&&(C=!0);break;case"triangle":M.shape={type:"path",path:[{command:"M",values:[.5*L,0]},{command:"L",values:[L,Z]},{command:"L",values:[0,Z]},{command:"Z",values:[]}]},z||(L+=x,Z+=x),d&&(C=!0);break;case"x":M.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[L,Z]},{command:"M",values:[L,0]},{command:"L",values:[0,Z]}]},d&&(C=!0);break;case"path":M.shape={type:"path",path:e.path||""},z||(L+=x,Z+=x),d&&(C=!0),z=!0}break;case"simple-line":var D,_=k(t),q=_.width,E=_.height,O=null!=E?E:Math.min(null!=o?o:x,r||v),P=null!=q?q:f;g.width=O,L=P,Z=O;var T=(null===M||void 0===M||null===(D=M.stroke)||void 0===D?void 0:D.cap)||"butt",A="round"===T;z=!0,M.stroke.cap="butt"===T?"square":T,M.shape={type:"path",path:[{command:"M",values:[A?O/2:0,Z/2]},{command:"L",values:[A?L-O/2:L,Z/2]}]};break;case h:case"simple-fill":var B="object"==typeof(null===t||void 0===t?void 0:t.symbolConfig)&&(null===t||void 0===t?void 0:t.symbolConfig.isSquareFill),R=k(t),V=R.width,W=R.height;L=B&&null!=V?V:null!=o?o:m,Z=B&&null!=W?W:L,z||(L+=x,Z+=x),z=!0,M.shape=B?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[L,0]},{command:"L",values:[L,Z]},{command:"L",values:[0,Z]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:c.e.fill[0];break;case"picture-marker":var H=(0,u.u)(e.width),G=(0,u.u)(e.height),I=null!=o?o:Math.max(H,G),J=H/G;H=J<=1?Math.ceil(I*J):I,G=J<=1?I:Math.ceil(I/J),L=Math.min(H,r||p),Z=Math.min(G,r||p),M.shape={type:"image",x:-Math.round(L/2),y:-Math.round(Z/2),width:L,height:Z,src:e.url||""},d&&(C=!0);break;case"text":var K=e,N=K.text||"Aa",Q=K.font,U=Math.min(null!=o?o:(0,u.u)(Q.size),r||p),X=w(N,{weight:Q.weight,size:U,family:Q.family}),Y=/[\uE600-\uE6FF]/.test(N);L=Y?U:X,Z=U;var $=.25*b((Q?U:0).toString());Y&&($+=5),M.shape={type:"text",text:N,x:K.xoffset||0,y:K.yoffset||$,align:"middle",alignBaseline:K.verticalAlignment,decoration:Q&&Q.decoration,rotated:K.rotated,kerning:K.kerning},M.font=Q&&{size:U,style:Q.style,decoration:Q.decoration,weight:Q.weight,family:Q.family}}return{shapeDescriptor:M,size:[L,Z],renderOptions:{node:null===t||void 0===t?void 0:t.node,scale:z,opacity:null===t||void 0===t?void 0:t.opacity,rotation:d,useRotationSize:C,effectView:null===t||void 0===t?void 0:t.effectView}}}function Z(e,t){return C.apply(this,arguments)}function C(){return C=(0,i.Z)((0,n.Z)().mark((function e(t,a){var i,o,u,s,d,h;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=L(t,a),o=i.shapeDescriptor,u=i.size,s=i.renderOptions,o.shape){e.next=3;break}throw new r.a("symbolPreview: renderPreviewHTML2D","symbol not supported.");case 3:return e.next=5,M(t,o);case 5:return d=[[o]],"object"==typeof(null===a||void 0===a?void 0:a.symbolConfig)&&null!==a&&void 0!==a&&a.symbolConfig.applyColorModulation&&(h=.6*u[0],d.unshift([(0,l.Z)((0,l.Z)({},o),{},{offset:[-h,0],fill:(0,c.i)(o.fill,-.3)})]),d.push([(0,l.Z)((0,l.Z)({},o),{},{offset:[h,0],fill:(0,c.i)(o.fill,.3)})]),u[0]+=2*h,s.scale=!1),e.abrupt("return",(0,c.l)(d,u,s));case 8:case"end":return e.stop()}}),e)}))),C.apply(this,arguments)}function S(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y,a=(0,s.b)(e),n=(0,s.a)(e),l=!a||"type"in a?null:new o.l(a),i=null!==n&&void 0!==n&&n.color?new o.l(null===n||void 0===n?void 0:n.color):null,r=l?z(d(l),t):null,u=i?z(d(i),t):null;return u?r?r===u?r:t>=y?"light":"dark":u:r}}}]);
//# sourceMappingURL=9909.3098d455.chunk.js.map