"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[406],{25715:function(e,t,a){function r(e){return e=e||globalThis.location.hostname,u.some((function(t){var a;return null!=(null===(a=e)||void 0===a?void 0:a.match(t))}))}function n(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(l)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(i)||null!=t.match(o)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}a.d(t,{a:function(){return n},c:function(){return r}});var l=/^devext.arcgis.com$/,i=/^qaext.arcgis.com$/,s=/^[\w-]*\.mapsdevext.arcgis.com$/,o=/^[\w-]*\.mapsqa.arcgis.com$/,u=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,l,i,/^jsapps.esri.com$/,s,o]},406:function(e,t,a){a.r(t),a.d(t,{getPatternDescriptor:function(){return S},getSizeFromOptions:function(){return O},getSymbolLayerFill:function(){return L},previewSymbol3D:function(){return U}});var r=a(74165),n=a(1413),l=a(15861),i=a(33703),s=a(29084),o=a(75610),u=a(23132),c=a(78880),p=a(30664),h=a(24980),m=a(60424),f=a(10333),y=(a(57714),a(21583),a(78674),a(66307),a(2760),a(38304),a(83024),a(61340),a(47626),a(25316),a(3114),a(50448),a(30709),a(70441),a(50526),a(91204),a(80262),a(36460),a(22144),a(88370),a(72820),a(78311),a(96349),a(80175),a(9055),a(79611),a(43920),a(2157),a(84538),a(49580),a(41742),a(54841),a(77470),a(36551),a(92870),a(22225),a(25715),a(43782),a(33976),m.t.size),v=m.t.maxSize,b=m.t.maxOutlineSize,d=m.t.lineWidth,g=m.t.tallSymbolWidth,k=u.s.getLogger("esri.symbols.support.previewSymbol3D");function w(e){var t=e.outline,a=(0,o.r)(e.material)?e.material.color:null,r=(0,o.r)(a)?a.toHex():null;if((0,o.t)(t)||"pattern"in t&&(0,o.r)(t.pattern)&&"style"===t.pattern.type&&"none"===t.pattern.style)return"fill"===e.type&&"#ffffff"===r?{color:"#bdc3c7",width:.75}:null;var n=(0,c.u)(t.size)||0;return{color:"rgba("+((0,o.r)(t.color)?t.color.toRgba():"255,255,255,1")+")",width:Math.min(n,b),style:"pattern"in t&&(0,o.r)(t.pattern)&&"style"===t.pattern.type?(0,p.e)(t.pattern.style):null,join:"butt",cap:"patternCap"in t?t.patternCap:"butt"}}function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=e.a,r=(0,s.y)(e),n=r.h,l=r.s/t,i=100-(100-r.v)/t,o=(0,s.p)({h:n,s:l,v:i}),u=o.r,c=o.g,p=o.b;return[u,c,p,a]}function M(e){return"water"===e.type?(0,o.t)(e.color)?null:e.color:(0,o.t)(e.material)||(0,o.t)(e.material.color)?null:e.material.color}function L(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=M(e);if(!a){if("fill"===e.type)return null;var r=p.k.r,n=(0,m.h)(r,t);return[n,n,n,100]}for(var l=a.toRgba(),i=0;i<3;i++)l[i]=(0,m.h)(l[i],t);return l}function S(e,t){return z.apply(this,arguments)}function z(){return(z=(0,l.Z)((0,r.Z)().mark((function e(t,a){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("none"!==(n=t.style)){e.next=3;break}return e.abrupt("return",null);case 3:return e.next=5,(0,p.c)((0,i.a)("esri/symbols/patterns/".concat(n,".png")),a.toCss(!0));case 5:return e.t0=e.sent,e.abrupt("return",{type:"pattern",x:0,y:0,src:e.t0,width:5,height:5});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return e.outline?w(e):{color:"rgba(0, 0, 0, 1)",width:1.5}}function P(e,t){var a=M(e);if(!a)return null;var r="rgba(";return r+=(0,m.h)(a.r,t)+",",r+=(0,m.h)(a.g,t)+",",(r+=(0,m.h)(a.b,t)+",")+a.a+");"}function Z(e,t){var a=P(e,t);return a?"pattern"in e&&(0,o.r)(e.pattern)&&"style"===e.pattern.type&&"none"===e.pattern.style?null:{color:a,width:Math.min(e.size?(0,c.u)(e.size):.75,b),style:"pattern"in e&&(0,o.r)(e.pattern)&&"style"===e.pattern.type?(0,p.e)(e.pattern.style):null,cap:"cap"in e?e.cap:null,join:"join"in e?"miter"===e.join?(0,c.u)(2):e.join:null}:{}}function D(e,t,a){var r=.75*a;return{type:"linear",x1:r?.25*r:0,y1:r?.5*r:0,x2:r||4,y2:r?.5*r:4,colors:[{color:e,offset:0},{color:t,offset:1}]}}function O(e){var t="number"==typeof(null===e||void 0===e?void 0:e.size)?null===e||void 0===e?void 0:e.size:null;return t?(0,c.u)(t):null}function N(e,t){var a,r=O(t),n=t&&t.maxSize?(0,c.u)(t.maxSize):null,l=t&&t.disableUpsampling,s=e.symbolLayers,o=[],b=0,d=0,x=s.getItemAt(s.length-1);return x&&"icon"===x.type&&(a=x.size&&(0,c.u)(x.size)),s.forEach((function(s){if("icon"===s.type||"object"===s.type){var u="icon"===s.type?s.size&&(0,c.u)(s.size):0,k=r||u?Math.ceil(Math.min(r||u,n||v)):y;if(s&&s.resource&&s.resource.href){var x=function(e,t){var a=t&&t.resource,r=a&&a.href;if(e.thumbnail&&e.thumbnail.url)return Promise.resolve(e.thumbnail.url);if(r&&"object"!==t.type)return Promise.resolve((0,p.g)(e,t));var n=(0,i.a)("esri/images/Legend/legend3dsymboldefault.png");return e.styleOrigin&&(e.styleOrigin.styleName||e.styleOrigin.styleUrl)?(0,f.resolveWebStyleSymbol)(e.styleOrigin,{portal:e.styleOrigin.portal},"webRef").catch((function(e){return e})).then((function(e){var t;return(null===e||void 0===e||null===(t=e.thumbnail)||void 0===t?void 0:t.url)||n})):Promise.resolve(n)}(e,s).then((function(e){var t=s.get("material.color"),a=function(e){return"icon"===e.type?"multiply":"tint"}(s);return(0,m.f)(e,k,t,a,l)})).then((function(e){var t=e.width,a=e.height;return b=Math.max(b,t),d=Math.max(d,a),[{shape:{type:"image",x:0,y:0,width:t,height:a,src:e.url},fill:null,stroke:null}]}));o.push(x)}else{var M,S=k;"icon"===s.type&&a&&r&&(S=k*(u/a));var z="tall"===(null===t||void 0===t?void 0:t.symbolConfig)||(null===t||void 0===t||null===(M=t.symbolConfig)||void 0===M?void 0:M.isTall)||"object"===s.type&&function(e){var t=e.depth,a=e.height,r=e.width;return r&&t&&a&&r===t&&r<a}(s);b=Math.max(b,z?g:S),d=Math.max(d,S),o.push(Promise.resolve(function(e,t,a){var r=[];if(!e)return r;switch(e.type){case"icon":var n=t,l=t;switch(e.resource&&e.resource.primitive||h.s){case"circle":r.push({shape:{type:"circle",cx:0,cy:0,r:.5*t},fill:L(e,0),stroke:w(e)});break;case"square":r.push({shape:{type:"path",path:[{command:"M",values:[0,l]},{command:"L",values:[0,0]},{command:"L",values:[n,0]},{command:"L",values:[n,l]},{command:"Z",values:[]}]},fill:L(e,0),stroke:w(e)});break;case"triangle":r.push({shape:{type:"path",path:[{command:"M",values:[0,l]},{command:"L",values:[.5*n,0]},{command:"L",values:[n,l]},{command:"Z",values:[]}]},fill:L(e,0),stroke:w(e)});break;case"cross":r.push({shape:{type:"path",path:[{command:"M",values:[.5*n,0]},{command:"L",values:[.5*n,l]},{command:"M",values:[0,.5*l]},{command:"L",values:[n,.5*l]}]},stroke:j(e)});break;case"x":r.push({shape:{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[n,l]},{command:"M",values:[n,0]},{command:"L",values:[0,l]}]},stroke:j(e)});break;case"kite":r.push({shape:{type:"path",path:[{command:"M",values:[0,.5*l]},{command:"L",values:[.5*n,0]},{command:"L",values:[n,.5*l]},{command:"L",values:[.5*n,l]},{command:"Z",values:[]}]},fill:L(e,0),stroke:w(e)})}break;case"object":switch(e.resource&&e.resource.primitive||h.o){case"cone":var i=D(L(e,0),L(e,-.6),a?g:t),s=(0,m.c)(t,a);r.push({shape:s[0],fill:i}),r.push({shape:s[1],fill:i});break;case"inverted-cone":var o=L(e,0),u=D(o,L(e,-.6),t),c=(0,m.o)(t);r.push({shape:c[0],fill:u}),r.push({shape:c[1],fill:o});break;case"cube":var p=(0,m.n)(t,a);r.push({shape:p[0],fill:L(e,0)}),r.push({shape:p[1],fill:L(e,-.3)}),r.push({shape:p[2],fill:L(e,-.5)});break;case"cylinder":var f=D(L(e,0),L(e,-.6),a?g:t),y=(0,m.L)(t,a);r.push({shape:y[0],fill:f}),r.push({shape:y[1],fill:f}),r.push({shape:y[2],fill:L(e,0)});break;case"diamond":var v=(0,m.s)(t);r.push({shape:v[0],fill:L(e,-.3)}),r.push({shape:v[1],fill:L(e,0)}),r.push({shape:v[2],fill:L(e,-.3)}),r.push({shape:v[3],fill:L(e,-.7)});break;case"sphere":var b=D(L(e,0),L(e,-.6));b.x1=0,b.y1=0,b.x2=.25*t,b.y2=.25*t,r.push({shape:{type:"circle",cx:0,cy:0,r:.5*t},fill:b});break;case"tetrahedron":var d=(0,m.u)(t);r.push({shape:d[0],fill:L(e,-.3)}),r.push({shape:d[1],fill:L(e,0)}),r.push({shape:d[2],fill:L(e,-.6)})}}return r}(s,S,z)))}}})),(0,u.E)(o).then((function(e){var a=[];return e.forEach((function(e){e.value?a.push(e.value):e.error&&k.warn("error while building swatchInfo!",e.error)})),(0,m.l)(a,[b,d],{node:t&&t.node,scale:!1,opacity:t&&t.opacity})}))}function C(){return(C=(0,l.Z)((0,r.Z)().mark((function e(t,a){var l,i,s,u,p,h,f,b,d,g,k,z,j,P,D,N,C,U,$,q,E,T,B,I,R,W,_,F,A,H,G,J,K;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l="mesh-3d"===t.type,i=t.symbolLayers,s=O(a),u=a&&a.maxSize?(0,c.u)(a.maxSize):null,p=s||y,h=[],f=0,b=0,d=!1,g=0;case 3:if(!(g<i.length)){e.next=42;break}if(k=i.getItemAt(g),z=[],!l||"fill"===k.type){e.next=7;break}return e.abrupt("continue",39);case 7:j=m.e.fill[0],e.t0=k.type,e.next="fill"===e.t0?11:"line"===e.t0?22:"extrude"===e.t0?28:"water"===e.t0?33:38;break;case 11:if(P=w(k),D=Math.min(p,u||v),f=Math.max(f,D),b=Math.max(b,D),d=!0,N=L(k,0),C="pattern"in k&&k.pattern,U=M(k),e.t1=!l&&(0,o.r)(C)&&"style"===C.type&&"solid"!==C.style&&U,!e.t1){e.next=20;break}return e.next=19,S(C,U);case 19:N=e.sent;case 20:return z.push({shape:j,fill:N,stroke:P}),e.abrupt("break",38);case 22:if($=Z(k,0),!(0,o.t)($)){e.next=25;break}return e.abrupt("break",38);case 25:return q={stroke:$,shape:j},f=Math.max(f,y),b=Math.max(b,y),z.push(q),e.abrupt("break",38);case 28:return E=(0,n.Z)({join:"round",width:1},Z(k,-.4)),T=L(k,0),B=L(k,-.2),I=Math.min(p,u||v),R=(0,m.d)(I),E.width=1,z.push({shape:R[0],fill:B,stroke:E}),z.push({shape:R[1],fill:B,stroke:E}),z.push({shape:R[2],fill:T,stroke:E}),W=y,_=.7*y+.5*I,f=Math.max(f,W),b=Math.max(b,_),e.abrupt("break",38);case 33:return F=M(k),A=x(F),H=x(F,2),G=x(F,3),J=(0,m.p)(),d=!0,z.push({shape:J[0],fill:A}),z.push({shape:J[1],fill:H}),z.push({shape:J[2],fill:G}),K=Math.min(p,u||v),f=Math.max(f,K),b=Math.max(b,K),e.abrupt("break",38);case 38:h.push(z);case 39:g++,e.next=3;break;case 42:return e.abrupt("return",(0,m.l)(h,[f,b],{node:a&&a.node,scale:d,opacity:a&&a.opacity}));case 43:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e,t){if(0===e.symbolLayers.length)return Promise.reject(new u.a("symbolPreview: renderPreviewHTML3D","No symbolLayers in the symbol."));switch(e.type){case"point-3d":return N(e,t);case"line-3d":return function(e,t){var a,r=e.symbolLayers,l=[],i=(0,p.d)(e),s=O(t),u=(t&&t.maxSize?(0,c.u)(t.maxSize):null)||b,h=0,f=0;return r.forEach((function(e,t){if(e&&("line"===e.type||"path"===e.type)){var r=[];switch(e.type){case"line":var i=Z(e,0);if((0,o.t)(i))break;var c=i&&i.width||0;0===t&&(a=c);var p=Math.min(s||c,u),v=0===t?p:s?p*(c/a):p,b=v>d/2?2*v:d;f=Math.max(f,v),h=Math.max(h,b),i.width=v,r.push({shape:{type:"path",path:[{command:"M",values:[0,.5*f]},{command:"L",values:[h,.5*f]}]},stroke:i});break;case"path":var g=Math.min(s||y,u),k=L(e,0),w=L(e,-.2),x=P(e,-.4),M=x?{color:x,width:1}:{};if("quad"===e.profile){var S=e.width,z=e.height,j=(0,m.a)(S&&z?S/z:1,0===z,0===S),D=(0,n.Z)((0,n.Z)({},M),{},{join:"bevel"});r.push({shape:j[0],fill:w,stroke:D}),r.push({shape:j[1],fill:w,stroke:D}),r.push({shape:j[2],fill:k,stroke:D})}else r.push({shape:m.e.pathSymbol3DLayer[0],fill:w,stroke:M}),r.push({shape:m.e.pathSymbol3DLayer[1],fill:k,stroke:M});f=Math.max(f,g),h=f}l.push(r)}})),Promise.resolve((0,m.l)(l,[h,f],{node:t&&t.node,scale:i,opacity:t&&t.opacity}))}(e,t);case"polygon-3d":case"mesh-3d":return function(e,t){return C.apply(this,arguments)}(e,t)}return Promise.reject(new u.a("symbolPreview: swatchInfo3D","symbol not supported."))}},10333:function(e,t,a){a.r(t),a.d(t,{fetchSymbolFromStyle:function(){return m},resolveWebStyleSymbol:function(){return h}});var r=a(24980),n=a(25715),l=a(23132),i=a(75610),s=a(57714),o=a(79611),u=a(96349),c=a(43782),p=a(33976);a(3114),a(50448),a(30709),a(70441),a(50526),a(91204),a(80262),a(36460),a(22144),a(78674),a(66307),a(2760),a(88370),a(72820),a(78311),a(80175),a(9055),a(2157),a(21583),a(43920);function h(e,t,a,r){return e.name?e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName?function(e,t,a){var r=p.U.replace(/\{SymbolName\}/gi,e.name),n=(0,i.r)(t.portal)?t.portal:o.B.getDefault();return(0,p.j)(r,a).then((function(e){var t=(0,p.p)(e.data);return(0,c.p)(t,{portal:n,url:(0,s.j)((0,s.O)(r)),origin:"portal-item"})}))}(e,t,r):(0,p.c)(e,t,r).then((function(n){return m(n,e.name,t,a,r)})):Promise.reject(new l.a("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function m(e,t,a,h,m){var f=e.data,y=a&&(0,i.r)(a.portal)?a.portal:o.B.getDefault(),v={portal:y,url:(0,s.j)(e.baseUrl),origin:"portal-item"},b=f.items.find((function(e){return e.name===t}));if(!b){var d="The symbol name '".concat(t,"' could not be found");return Promise.reject(new l.a("symbolstyleutils:symbol-name-not-found",d,{symbolName:t}))}var g=(0,u.i)((0,p.d)(b,h),v),k=b.thumbnail&&b.thumbnail.href,w=b.thumbnail&&b.thumbnail.imageData;(0,n.c)()&&(g=(0,n.a)(g),k=(0,n.a)(k));var x={portal:y,url:(0,s.j)((0,s.O)(g)),origin:"portal-item"};return(0,p.j)(g,m).then((function(n){var l="cimRef"===h?(0,p.p)(n.data):n.data,i=(0,c.p)(l,x);if(i&&(0,r.d)(i)){if(k){var s=(0,u.i)(k,v);i.thumbnail=new r.z({url:s})}else w&&(i.thumbnail=new r.z({url:"data:image/png;base64,".concat(w)}));e.styleUrl?i.styleOrigin=new r.B({portal:a.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(i.styleOrigin=new r.B({portal:a.portal,styleName:e.styleName,name:t}))}return i}))}}}]);
//# sourceMappingURL=406.0b82c115.chunk.js.map