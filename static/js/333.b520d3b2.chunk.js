"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[333],{25715:function(e,n,t){function r(e){return e=e||globalThis.location.hostname,u.some((function(n){var t;return null!=(null===(t=e)||void 0===t?void 0:t.match(n))}))}function o(e,n){return e&&(n=n||globalThis.location.hostname)?null!=n.match(a)||null!=n.match(i)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=n.match(l)||null!=n.match(s)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}t.d(n,{a:function(){return o},c:function(){return r}});var a=/^devext.arcgis.com$/,l=/^qaext.arcgis.com$/,i=/^[\w-]*\.mapsdevext.arcgis.com$/,s=/^[\w-]*\.mapsqa.arcgis.com$/,u=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,a,l,/^jsapps.esri.com$/,i,s]},43782:function(e,n,t){t.d(n,{a:function(){return i},b:function(){return c},m:function(){return u},p:function(){return y}});var r=t(24980),o=t(23132),a=t(75610),l={retainId:!1,ignoreDrivers:!1,hasLabelingContext:!0};function i(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l;if(!e)return{symbol:null};var t,a=n.retainId,i=void 0===a?l.retainId:a,s=n.ignoreDrivers,u=void 0===s?l.ignoreDrivers:s,c=n.hasLabelingContext,m=void 0===c?l.hasLabelingContext:c,f=n.retainCIM,y=void 0===f?l.retainCIM:f;if((0,r.d)(e)||e instanceof r.c)t=e.clone();else if("cim"===e.type){var d,b,p=null===(d=e.data)||void 0===d||null===(b=d.symbol)||void 0===b?void 0:b.type;if("CIMPointSymbol"!==p)return{error:new o.a("symbol-conversion:unsupported-cim-symbol","CIM symbol of type '".concat(p||"unknown","' is unsupported in 3D"),{symbol:e})};t=y?e.clone():r.e.fromCIMSymbol(e)}else if(e instanceof r.m)t=r.f.fromSimpleLineSymbol(e);else if(e instanceof r.y)t=r.e.fromSimpleMarkerSymbol(e);else if(e instanceof r.n)t=r.e.fromPictureMarkerSymbol(e);else if(e instanceof r.S)t=r.b.fromSimpleFillSymbol(e);else{if(!(e instanceof r.a))return{error:new o.a("symbol-conversion:unsupported-2d-symbol","2D symbol of type '".concat(e.type||e.declaredClass,"' is unsupported in 3D"),{symbol:e})};t=m?r.i.fromTextSymbol(e):r.e.fromTextSymbol(e)}if(i&&"cim"!==t.type&&(t.id=e.id),u&&(0,r.d)(t))for(var v=0;v<t.symbolLayers.length;++v)t.symbolLayers.getItemAt(v)._ignoreDrivers=!0;return{symbol:t}}var s=["building-scene","integrated-mesh","point-cloud","scene"];function u(e,n,t,r){var o=f(e,{},{context:r,isLabelSymbol:!1});(0,a.r)(o)&&(n[t]=o)}function c(e,n,t,r){var o=f(e,{},{context:r,isLabelSymbol:!0});(0,a.r)(o)&&(n[t]=o)}function m(e){return e instanceof r.A||e instanceof r.c}function f(e,n,t){var r;if((0,a.t)(e))return null;var l=t.context,u=t.isLabelSymbol,c=null===l||void 0===l?void 0:l.origin,f=null===l||void 0===l?void 0:l.messages;if("web-scene"===c&&!m(e)){var y=i(e,{retainCIM:!0,hasLabelingContext:u});return(0,a.r)(y.symbol)?y.symbol.write(n,l):(null!==f&&void 0!==f&&f.push(new o.a("symbol:unsupported","Symbols of type '".concat(e.declaredClass,"' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView"),{symbol:e,context:l,error:y.error})),null)}return("web-map"===c||"portal-item"===c&&!s.includes(null===l||void 0===l||null===(r=l.layer)||void 0===r?void 0:r.type))&&m(e)?(null!==f&&void 0!==f&&f.push(new o.a("symbol:unsupported","Symbols of type '".concat(e.declaredClass,"' are not supported in web maps and portal items. Use 2D symbology and CIMSymbol instead when working with MapView"),{symbol:e,context:l})),null):e.write(n,l)}function y(e,n){return(0,r.k)(e,null,n)}},33976:function(e,n,t){t.d(n,{U:function(){return S},a:function(){return m},c:function(){return b},d:function(){return v},j:function(){return h},p:function(){return p}});var r=t(74165),o=t(1413),a=t(37762),l=t(15861),i=t(57714),s=t(23132),u=t(75610),c=t(79611),m=function(){return!!(0,u.a)("enable-feature:direct-3d-object-feature-layer-display")},f={};function y(){return y=(0,l.Z)((0,r.Z)().mark((function e(n,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h(n,t);case 3:return e.t0=e.sent.data,e.t1=(0,i.O)(n),e.t2=n,e.abrupt("return",{data:e.t0,baseUrl:e.t1,styleUrl:e.t2});case 9:return e.prev=9,e.t3=e.catch(0),e.abrupt("return",((0,s.M)(e.t3),null));case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),y.apply(this,arguments)}function d(e,n,t){var r,o=(0,u.r)(n.portal)?n.portal:c.B.getDefault(),l="".concat(o.url," - ").concat(o.user&&o.user.username," - ").concat(e);return f[l]||(f[l]=function(e,n,t){return n.load(t).then((function(){var r=new c.d({disableExtraQuery:!0,query:"owner:".concat(g," AND type:").concat(w,' AND typekeywords:"').concat(e,'"')});return n.queryItems(r,t)})).then((function(n){var r=n.results,o=null,l=e.toLowerCase();if(r&&Array.isArray(r)){var i,u=(0,a.Z)(r);try{for(u.s();!(i=u.n()).done;){var c=i.value;if(c.typeKeywords.some((function(e){return e.toLowerCase()===l}))&&c.type===w&&c.owner===g){o=c;break}}}catch(m){u.e(m)}finally{u.f()}}if(!o)throw new s.a("symbolstyleutils:style-not-found","The style '".concat(e,"' could not be found"),{styleName:e});return o.load(t)}))}(e,o,t).then((function(e){return r=e,e.fetchData()})).then((function(n){return{data:n,baseUrl:r.itemUrl,styleName:e}}))),f[l]}function b(e,n,t){return e.styleUrl?function(e,n){return y.apply(this,arguments)}(e.styleUrl,t):e.styleName?d(e.styleName,n,t):Promise.reject(new s.a("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))}function p(e){return null===e||"CIMSymbolReference"===e.type?e:{type:"CIMSymbolReference",symbol:e}}function v(e,n){if("cimRef"===n)return e.cimRef;if(e.formatInfos&&!(0,u.a)("enable-feature:force-wosr")){var t,r=(0,a.Z)(e.formatInfos);try{for(r.s();!(t=r.n()).done;){var o=t.value;if("gltf"===o.type)return o.href}}catch(l){r.e(l)}finally{r.f()}}return e.webRef}function h(e,n){var t=(0,o.Z)({responseType:"json",query:{f:"json"}},n);return(0,i.U)((0,i.F)(e),t)}var g="esri_en",w="Style",S="https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json"},10333:function(e,n,t){t.r(n),t.d(n,{fetchSymbolFromStyle:function(){return y},resolveWebStyleSymbol:function(){return f}});var r=t(24980),o=t(25715),a=t(23132),l=t(75610),i=t(57714),s=t(79611),u=t(96349),c=t(43782),m=t(33976);t(3114),t(50448),t(30709),t(70441),t(50526),t(91204),t(80262),t(36460),t(22144),t(78674),t(66307),t(2760),t(88370),t(72820),t(78311),t(80175),t(9055),t(2157),t(21583),t(43920);function f(e,n,t,r){return e.name?e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName?function(e,n,t){var r=m.U.replace(/\{SymbolName\}/gi,e.name),o=(0,l.r)(n.portal)?n.portal:s.B.getDefault();return(0,m.j)(r,t).then((function(e){var n=(0,m.p)(e.data);return(0,c.p)(n,{portal:o,url:(0,i.j)((0,i.O)(r)),origin:"portal-item"})}))}(e,n,r):(0,m.c)(e,n,r).then((function(o){return y(o,e.name,n,t,r)})):Promise.reject(new a.a("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function y(e,n,t,f,y){var d=e.data,b=t&&(0,l.r)(t.portal)?t.portal:s.B.getDefault(),p={portal:b,url:(0,i.j)(e.baseUrl),origin:"portal-item"},v=d.items.find((function(e){return e.name===n}));if(!v){var h="The symbol name '".concat(n,"' could not be found");return Promise.reject(new a.a("symbolstyleutils:symbol-name-not-found",h,{symbolName:n}))}var g=(0,u.i)((0,m.d)(v,f),p),w=v.thumbnail&&v.thumbnail.href,S=v.thumbnail&&v.thumbnail.imageData;(0,o.c)()&&(g=(0,o.a)(g),w=(0,o.a)(w));var C={portal:b,url:(0,i.j)((0,i.O)(g)),origin:"portal-item"};return(0,m.j)(g,y).then((function(o){var a="cimRef"===f?(0,m.p)(o.data):o.data,l=(0,c.p)(a,C);if(l&&(0,r.d)(l)){if(w){var i=(0,u.i)(w,p);l.thumbnail=new r.z({url:i})}else S&&(l.thumbnail=new r.z({url:"data:image/png;base64,".concat(S)}));e.styleUrl?l.styleOrigin=new r.B({portal:t.portal,styleUrl:e.styleUrl,name:n}):e.styleName&&(l.styleOrigin=new r.B({portal:t.portal,styleName:e.styleName,name:n}))}return l}))}}}]);
//# sourceMappingURL=333.b520d3b2.chunk.js.map