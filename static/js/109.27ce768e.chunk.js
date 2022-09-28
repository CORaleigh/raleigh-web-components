"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[109,4077],{17493:function(e,r,t){t.d(r,{o:function(){return p},s:function(){return l}});var n=t(43144),o=t(15671),u=t(97326),a=t(60136),i=t(29388),s=t(50165),c=0,l=function(e){var r=function(e){(0,a.Z)(t,e);var r=(0,i.Z)(t);function t(){var e;(0,o.Z)(this,t);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return e=r.call.apply(r,[this].concat(a)),Object.defineProperty((0,u.Z)(e),"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+c++}),e}return(0,n.Z)(t)}(e);return r=(0,s.e)([(0,s.n)("esri.core.Identifiable")],r)},p=function(e){(0,a.Z)(t,e);var r=(0,i.Z)(t);function t(){return(0,o.Z)(this,t),r.apply(this,arguments)}return(0,n.Z)(t)}(l(function(){return(0,n.Z)((function e(){(0,o.Z)(this,e)}))}()));p=(0,s.e)([(0,s.n)("esri.core.Identifiable")],p)},80933:function(e,r,t){t.d(r,{I:function(){return Z},L:function(){return g},S:function(){return w},b:function(){return b},d:function(){return f},g:function(){return y},h:function(){return d},j:function(){return I},m:function(){return h},w:function(){return v},y:function(){return m}});var n=t(29439),o=t(50165),u=t(13994),a=t(3029),i={mapserver:"MapServer",imageserver:"ImageServer",featureserver:"FeatureServer",sceneserver:"SceneServer",streamserver:"StreamServer",vectortileserver:"VectorTileServer"},s=Object.values(i),c=new RegExp("^((?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/(".concat(s.join("|"),"))(?:\\/(?:layers\\/)?(\\d+))?"),"i"),l=new RegExp("^((?:https?:)?\\/\\/\\S+?\\/([^\\/\\n]+)\\/(".concat(s.join("|"),"))(?:\\/(?:layers\\/)?(\\d+))?"),"i"),p=/(.*?)\/(?:layers\/)?(\d+)\/?$/i;function f(e){return!!c.test(e)}function h(e){if((0,o.t)(e))return null;var r=(0,u.j)(e),t=r.path.match(c)||r.path.match(l);if(!t)return null;var a=(0,n.Z)(t,5),s=a[1],p=a[2],f=a[3],h=a[4],v=p.indexOf("/");return{title:d(-1!==v?p.slice(v+1):p),serverType:i[f.toLowerCase()],sublayer:null!=h&&""!==h?parseInt(h,10):null,url:{path:s}}}function v(e){var r=(0,u.j)(e).path.match(p);return r?{serviceUrl:r[1],sublayerId:Number(r[2])}:null}function d(e){return(e=e.replace(/\s*[/_]+\s*/g," "))[0].toUpperCase()+e.slice(1)}function m(e,r){var t=[];if(e){var n=h(e);(0,o.r)(n)&&n.title&&t.push(n.title)}if(r){var u=d(r);t.push(u)}if(2===t.length){if(t[0].toLowerCase().includes(t[1].toLowerCase()))return t[0];if(t[1].toLowerCase().includes(t[0].toLowerCase()))return t[1]}return t.join(" - ")}function y(e){if(!e)return!1;var r=(e=e.toLowerCase()).includes(".arcgis.com/"),t=e.includes("//services")||e.includes("//tiles")||e.includes("//features");return r&&t}function w(e,r){return e?(0,u.C)((0,u.A)(e,r)):e}function g(e){var r=e.url;if(!r)return{url:r};r=(0,u.A)(r,e.logger);var t,n=(0,u.j)(r),a=h(n.path);if((0,o.r)(a))null!=a.sublayer&&null==e.layer.layerId&&(t=a.sublayer),r=a.url.path;else if(e.nonStandardUrlAllowed){var i=v(n.path);(0,o.r)(i)&&(r=i.serviceUrl,t=i.sublayerId)}return{url:(0,u.C)(r),layerId:t}}function b(e,r,t,n,o){(0,a.p)(r,n,"url",o),n.url&&null!=e.layerId&&(n.url=(0,u.G)(n.url,t,e.layerId.toString()))}function Z(e){if(!e)return!1;var r=e.toLowerCase(),t=r.includes("/services/"),n=r.includes("/mapserver/wmsserver"),o=r.includes("/imageserver/wmsserver"),u=r.includes("/wmsserver");return t&&(n||o||u)}function I(e){if(!e)return!1;var r=new u.y((0,u.Q)(e)).authority.toLowerCase();return"server.arcgisonline.com"===r||"services.arcgisonline.com"===r}},33530:function(e,r,t){t.d(r,{a:function(){return s},i:function(){return l},t:function(){return c}});var n=t(50165),o=t(96263),u=t(77322),a=t(31278),i=t(13994),s=(0,i.o)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"}),c=(0,i.o)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh"}),l={base:u.p,key:"type",typeMap:{extent:o.M,multipoint:a.a,point:u.j,polyline:a.m,polygon:a.v}};(0,n.N)(l)},98805:function(e,r,t){function n(e){return e&&"getAtOrigin"in e&&"originOf"in e}t.d(r,{i:function(){return n}})},81905:function(e,r,t){t.d(r,{i:function(){return o}});var n=t(98805);function o(e){e&&e.writtenProperties&&e.writtenProperties.forEach((function(e){var r=e.target,t=e.propName,o=e.newOrigin;(0,n.i)(r)&&o&&r.originOf(t)!==o&&r.updateOrigin(t,o)}))}},3029:function(e,r,t){t.d(r,{I:function(){return c},R:function(){return m},U:function(){return v},c:function(){return a},h:function(){return h},i:function(){return u},m:function(){return i},p:function(){return s}});var n=t(50165),o=t(13994);function u(e,r){var t=r&&r.url&&r.url.path;if(e&&t&&(e=(0,o.Q)(e,t,{preserveProtocolRelative:!0}),r.portalItem&&r.readResourcePaths)){var n=(0,o._)(e,r.portalItem.itemUrl);f.test(n)&&r.readResourcePaths.push(r.portalItem.resourceFromPath(n).path)}return d(e,r&&r.portal)}function a(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c.YES;if(!e)return e;!(0,o.K)(e)&&r&&r.blockedRelativeUrls&&r.blockedRelativeUrls.push(e);var n=(0,o.Q)(e);if(r){var u=r.verifyItemRelativeUrls&&r.verifyItemRelativeUrls.rootPath||r.url&&r.url.path;if(u){var a=d(u,r.portal);(n=(0,o._)(d(n,r.portal),a,a))!==e&&r.verifyItemRelativeUrls&&r.verifyItemRelativeUrls.writtenUrls.push(n)}}return n=v(n,r&&r.portal),(0,o.K)(n)&&(n=(0,o.F)(n)),null!==r&&void 0!==r&&r.resources&&null!==r&&void 0!==r&&r.portalItem&&!(0,o.K)(n)&&!(0,o.X)(n)&&t===c.YES&&r.resources.toKeep.push({resource:r.portalItem.resourceFromPath(n)}),n}function i(e,r,t){return u(e,t)}function s(e,r,t,n){var o=a(e,n);void 0!==o&&(r[t]=o)}var c,l,p=/\/items\/([^\/]+)\/resources\//,f=/^\.\/resources\//;function h(e){var r=(0,n.r)(e)?e.match(p):null;return(0,n.r)(r)?r[1]:null}function v(e,r){return r&&!r.isPortal&&r.urlKey&&r.customBaseUrl?(0,o.v)(e,"".concat(r.urlKey,".").concat(r.customBaseUrl),r.portalHostname):e}function d(e,r){if(!r||r.isPortal||!r.urlKey||!r.customBaseUrl)return e;var t="".concat(r.urlKey,".").concat(r.customBaseUrl),n=(0,o.b)();return(0,o.z)(n,"".concat(n.scheme,"://").concat(t))?(0,o.v)(e,r.portalHostname,t):(0,o.v)(e,t,r.portalHostname)}(l=c||(c={}))[l.YES=0]="YES",l[l.NO=1]="NO";var m=Object.freeze(Object.defineProperty({__proto__:null,fromJSON:u,toJSON:a,read:i,write:s,itemIdFromResourceUrl:h,ensureMainOnlineDomain:v,get MarkKeep(){return c}},Symbol.toStringTag,{value:"Module"}))},54077:function(e,r,t){t.r(r),t.d(r,{addOrUpdateResource:function(){return l},contentToBlob:function(){return w},fetchResources:function(){return s},getSiblingOfSameType:function(){return b},getSiblingOfSameTypeI:function(){return Z},removeAllResources:function(){return v},removeResource:function(){return f},splitPrefixFileNameAndExtension:function(){return y}});var n=t(74165),o=t(29439),u=t(15861),a=t(13994),i=t(50165);function s(e){return c.apply(this,arguments)}function c(){return c=(0,u.Z)((0,n.Z)().mark((function e(r){var t,o,u,s,c,l,p,f,h,v,d,m,y=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=y.length>1&&void 0!==y[1]?y[1]:{},o=y.length>2?y[2]:void 0,e.next=4,r.load(o);case 4:return u=(0,a.G)(r.itemUrl,"resources"),s=t.start,c=void 0===s?1:s,l=t.num,p=void 0===l?10:l,f=t.sortOrder,h=void 0===f?"asc":f,v=t.sortField,d={query:{start:c,num:p,sortOrder:h,sortField:void 0===v?"created":v,token:r.apiKey},signal:(0,i.aj)(o,"signal")},e.next=16,r.portal._request(u,d);case 16:return m=e.sent,e.abrupt("return",{total:m.total,nextStart:m.nextStart,resources:m.resources.map((function(e){var t=e.created,n=e.size,o=e.resource;return{created:new Date(t),size:n,resource:r.resourceFromPath(o)}}))});case 18:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}function l(e,r,t,n){return p.apply(this,arguments)}function p(){return p=(0,u.Z)((0,n.Z)().mark((function e(r,t,u,s){var c,l,p,f,h,v,d,y;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.hasPath()){e.next=2;break}throw new i.a("portal-item-resource-".concat(t,":invalid-path"),"Resource does not have a valid path");case 2:return c=r.portalItem,e.next=5,c.load(s);case 5:return l=(0,a.G)(c.userItemUrl,"add"===t?"addResources":"updateResources"),p=m(r.path),f=(0,o.Z)(p,2),h=f[0],v=f[1],e.next=12,w(u);case 12:return d=e.sent,y=new FormData,h&&"."!==h&&y.append("resourcesPrefix",h),y.append("fileName",v),y.append("file",d,v),y.append("f","json"),(0,i.r)(s)&&s.access&&y.append("access",s.access),e.next=21,c.portal._request(l,{method:"post",body:y,signal:(0,i.aj)(s,"signal")});case 21:return e.abrupt("return",r);case 22:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function f(e,r,t){return h.apply(this,arguments)}function h(){return(h=(0,u.Z)((0,n.Z)().mark((function e(r,t,o){var u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.hasPath()){e.next=2;break}throw new i.a("portal-item-resources-remove:invalid-path","Resource does not have a valid path");case 2:return e.next=4,r.load(o);case 4:return u=(0,a.G)(r.userItemUrl,"removeResources"),e.next=7,r.portal._request(u,{method:"post",query:{resource:t.path},signal:(0,i.aj)(o,"signal")});case 7:t.portalItem=null;case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,r){return d.apply(this,arguments)}function d(){return(d=(0,u.Z)((0,n.Z)().mark((function e(r,t){var o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.load(t);case 2:return o=(0,a.G)(r.userItemUrl,"removeResources"),e.abrupt("return",r.portal._request(o,{method:"post",query:{deleteAll:!0},signal:(0,i.aj)(t,"signal")}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){var r=e.lastIndexOf("/");return-1===r?[".",e]:[e.slice(0,r),e.slice(r+1)]}function y(e){var r=function(e){var r=(0,a.k)(e);return(0,i.t)(r)?[e,""]:[e.slice(0,e.length-r.length-1),".".concat(r)]}(e),t=(0,o.Z)(r,2),n=t[0],u=t[1],s=m(n),c=(0,o.Z)(s,2);return[c[0],c[1],u]}function w(e){return g.apply(this,arguments)}function g(){return(g=(0,u.Z)((0,n.Z)().mark((function e(r){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r instanceof Blob)){e.next=2;break}return e.abrupt("return",r);case 2:return e.next=4,(0,a.U)(r.url,{responseType:"blob"});case 4:return e.abrupt("return",e.sent.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e,r){if(!e.hasPath())return null;var t=y(e.path),n=(0,o.Z)(t,3),u=n[0],i=n[2];return e.portalItem.resourceFromPath((0,a.G)(u,r+i))}function Z(e,r){if(!e.hasPath())return null;var t=y(e.path),n=(0,o.Z)(t,3),u=n[0],i=n[2];return e.portalItem.resourceFromPath((0,a.G)(u,r+i))}},64972:function(e,r,t){t.d(r,{a:function(){return l}});var n=t(74165),o=t(37762),u=t(15861),a=t(5233),i=t(50165),s=t(92870),c=t(54077);function l(e,r,t){return p.apply(this,arguments)}function p(){return p=(0,u.Z)((0,n.Z)().mark((function e(r,t,u){var a,l,p,h,d,m,y,w,g,b,Z,I,x,S,U,k,P;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.resources){e.next=2;break}return e.abrupt("return");case 2:a=t.portalItem===r.portalItem?new Set(r.paths):new Set,r.paths.length=0,r.portalItem=t.portalItem,l=new Set(t.resources.toKeep.map((function(e){return e.resource.path}))),p=new Set,h=[],l.forEach((function(e){a.delete(e),r.paths.push(e)})),d=(0,o.Z)(t.resources.toUpdate);try{for(d.s();!(m=d.n()).done;)y=m.value,a.delete(y.resource.path),l.has(y.resource.path)||p.has(y.resource.path)?(w=y.resource,g=y.content,b=y.finish,Z=y.error,I=(0,c.getSiblingOfSameTypeI)(w,(0,s.t)()),r.paths.push(I.path),h.push(f({resource:I,content:g,finish:b,error:Z},u))):(r.paths.push(y.resource.path),h.push(v(y,u)),p.add(y.resource.path))}catch(n){d.e(n)}finally{d.f()}x=(0,o.Z)(t.resources.toAdd);try{for(x.s();!(S=x.n()).done;)U=S.value,h.push(f(U,u)),r.paths.push(U.resource.path)}catch(n){x.e(n)}finally{x.f()}if(a.forEach((function(e){var r=t.portalItem.resourceFromPath(e);h.push(r.portalItem.removeResource(r).catch((function(){})))})),0!==h.length){e.next=12;break}return e.abrupt("return");case 12:return e.next=14,(0,i.E)(h);case 14:if(k=e.sent,(0,i.W)(u),P=k.filter((function(e){return"error"in e})).map((function(e){return e.error})),!(P.length>0)){e.next=19;break}throw new i.a("save:resources","Failed to save one or more resources",{errors:P});case 19:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function f(e,r){return h.apply(this,arguments)}function h(){return(h=(0,u.Z)((0,n.Z)().mark((function e(r,t){var o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,a.a)(r.resource.portalItem.addResource(r.resource,r.content,t));case 2:if(!0===(o=e.sent).ok){e.next=5;break}throw r.error&&r.error(o.error),o.error;case 5:r.finish&&r.finish(r.resource);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,r){return d.apply(this,arguments)}function d(){return(d=(0,u.Z)((0,n.Z)().mark((function e(r,t){var o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,a.a)(r.resource.update(r.content,t));case 2:if(!0===(o=e.sent).ok){e.next=5;break}throw r.error(o.error),o.error;case 5:r.finish(r.resource);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},92870:function(e,r,t){t.d(r,{t:function(){return o}});var n="randomUUID"in crypto;function o(){if(n)return crypto.randomUUID();var e=crypto.getRandomValues(new Uint16Array(8));e[3]=4095&e[3]|16384,e[4]=16383&e[4]|32768;var r=function(r){return e[r].toString(16)};return r(0)+r(1)+"-"+r(2)+"-"+r(3)+"-"+r(4)+"-"+r(5)+r(6)+r(7)}}}]);
//# sourceMappingURL=109.27ce768e.chunk.js.map