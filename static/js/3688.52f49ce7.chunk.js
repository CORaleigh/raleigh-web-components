"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[3688],{77196:function(e,t,r){r.d(t,{o:function(){return c},s:function(){return p}});var n=r(43144),o=r(15671),a=r(97326),i=r(60136),l=r(29388),u=r(23132),s=0,p=function(e){var t=function(e){(0,i.Z)(r,e);var t=(0,l.Z)(r);function r(){var e;(0,o.Z)(this,r);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return e=t.call.apply(t,[this].concat(i)),Object.defineProperty((0,a.Z)(e),"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+s++}),e}return(0,n.Z)(r)}(e);return t=(0,u.e)([(0,u.n)("esri.core.Identifiable")],t)},c=function(e){(0,i.Z)(r,e);var t=(0,l.Z)(r);function r(){return(0,o.Z)(this,r),t.apply(this,arguments)}return(0,n.Z)(r)}(p(function(){return(0,n.Z)((function e(){(0,o.Z)(this,e)}))}()));c=(0,u.e)([(0,u.n)("esri.core.Identifiable")],c)},72763:function(e,t,r){r.d(t,{b:function(){return Z}});var n=r(74165),o=r(15671),a=r(43144),i=r(60136),l=r(29388),u=r(15861),s=r(23132),p=(r(91204),r(57714)),c=r(80175),y=r(77196),d=r(79611),f=r(75610),v=r(80262),m=r(30709),h=s.s.getLogger("esri.layers.support.fromPortalItem");function b(){return b=(0,u.Z)((0,n.Z)().mark((function e(t){var o,a,i,l,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o="portalItem"in t?t:{portalItem:t},e.next=3,Promise.all([r.e(1340),r.e(3022),r.e(8854),r.e(6498),r.e(9737)]).then(r.bind(r,76498));case 3:return a=e.sent,e.prev=4,e.next=7,a.fromItem(o);case 7:return e.abrupt("return",e.sent);case 10:throw e.prev=10,e.t0=e.catch(4),i=o&&o.portalItem,l=i&&i.id||"unset",u=i&&i.portal&&i.portal.url||f.b.portalUrl,h.error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+u+"', id: '"+l+"')",e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[4,10]])}))),b.apply(this,arguments)}var g=0,U=function(e){(0,i.Z)(c,e);var t=(0,l.Z)(c);function c(){var e;return(0,o.Z)(this,c),(e=t.apply(this,arguments)).attributionDataUrl=null,e.fullExtent=new v.M(-180,-90,180,90,m.k.WGS84),e.id=Date.now().toString(16)+"-layer-"+g++,e.legendEnabled=!0,e.listMode="show",e.opacity=1,e.parent=null,e.popupEnabled=!0,e.attributionVisible=!0,e.spatialReference=m.k.WGS84,e.title=null,e.type=null,e.url=null,e.visible=!0,e}return(0,a.Z)(c,[{key:"initialize",value:function(){var e=this;this.when().catch((function(t){var r,n;(0,s.u)(t)||s.s.getLogger(e.declaredClass).error("#load()","Failed to load layer (title: '".concat(null!==(r=e.title)&&void 0!==r?r:"no title","', id: '").concat(null!==(n=e.id)&&void 0!==n?n:"no id","')"),{error:t})}))}},{key:"destroy",value:function(){if(this.parent){var e=this,t=this.parent;"layers"in t&&t.layers.includes(e)?t.layers.remove(e):"tables"in t&&t.tables.includes(e)?t.tables.remove(e):"baseLayers"in t&&t.baseLayers.includes(e)?t.baseLayers.remove(e):"baseLayers"in t&&t.referenceLayers.includes(e)&&t.referenceLayers.remove(e)}}},{key:"hasAttributionData",get:function(){return null!=this.attributionDataUrl}},{key:"parsedUrl",get:function(){var e=this.url;return e?(0,p.j)(e):null}},{key:"fetchAttributionData",value:function(){var e=(0,u.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.attributionDataUrl,!this.hasAttributionData||!t){e.next=5;break}return e.next=4,(0,p.U)(t,{query:{f:"json"},responseType:"json"});case 4:return e.abrupt("return",e.sent.data);case 5:throw new s.a("layer:no-attribution-data","Layer does not have attribution data");case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}],[{key:"fromArcGISServerUrl",value:function(){var e=(0,u.Z)((0,n.Z)().mark((function e(t){var o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o="string"==typeof t?{url:t}:t,e.next=3,Promise.all([r.e(8854),r.e(8201)]).then(r.bind(r,38201));case 3:return e.abrupt("return",e.sent.fromUrl(o));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"fromPortalItem",value:function(e){return function(e){return b.apply(this,arguments)}(e)}}]),c}(c.n.EventedMixin((0,y.s)(d.m)));(0,s.e)([(0,s.d)({type:String})],U.prototype,"attributionDataUrl",void 0),(0,s.e)([(0,s.d)({type:v.M})],U.prototype,"fullExtent",void 0),(0,s.e)([(0,s.d)({readOnly:!0})],U.prototype,"hasAttributionData",null),(0,s.e)([(0,s.d)({type:String,clonable:!1})],U.prototype,"id",void 0),(0,s.e)([(0,s.d)({type:Boolean,nonNullable:!0})],U.prototype,"legendEnabled",void 0),(0,s.e)([(0,s.d)({type:["show","hide","hide-children"]})],U.prototype,"listMode",void 0),(0,s.e)([(0,s.d)({type:Number,range:{min:0,max:1},nonNullable:!0})],U.prototype,"opacity",void 0),(0,s.e)([(0,s.d)({clonable:!1})],U.prototype,"parent",void 0),(0,s.e)([(0,s.d)({readOnly:!0})],U.prototype,"parsedUrl",null),(0,s.e)([(0,s.d)({type:Boolean})],U.prototype,"popupEnabled",void 0),(0,s.e)([(0,s.d)({type:Boolean})],U.prototype,"attributionVisible",void 0),(0,s.e)([(0,s.d)({type:m.k})],U.prototype,"spatialReference",void 0),(0,s.e)([(0,s.d)({type:String})],U.prototype,"title",void 0),(0,s.e)([(0,s.d)({readOnly:!0,json:{read:!1}})],U.prototype,"type",void 0),(0,s.e)([(0,s.d)()],U.prototype,"url",void 0),(0,s.e)([(0,s.d)({type:Boolean,nonNullable:!0})],U.prototype,"visible",void 0);var Z=U=(0,s.e)([(0,s.n)("esri.layers.Layer")],U)},91204:function(e,t,r){r.d(t,{a:function(){return u},i:function(){return p},t:function(){return s}});var n=r(23132),o=r(80262),a=r(30709),i=r(36460),l=r(57714),u=(0,l.o)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"}),s=(0,l.o)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh"}),p={base:a.p,key:"type",typeMap:{extent:o.M,multipoint:i.a,point:a.j,polyline:i.m,polygon:i.v}};(0,n.N)(p)},96349:function(e,t,r){r.d(t,{I:function(){return s},R:function(){return m},U:function(){return f},c:function(){return i},h:function(){return d},i:function(){return a},m:function(){return l},p:function(){return u}});var n=r(75610),o=r(57714);function a(e,t){var r=t&&t.url&&t.url.path;if(e&&r&&(e=(0,o.Q)(e,r,{preserveProtocolRelative:!0}),t.portalItem&&t.readResourcePaths)){var n=(0,o._)(e,t.portalItem.itemUrl);y.test(n)&&t.readResourcePaths.push(t.portalItem.resourceFromPath(n).path)}return v(e,t&&t.portal)}function i(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s.YES;if(!e)return e;!(0,o.K)(e)&&t&&t.blockedRelativeUrls&&t.blockedRelativeUrls.push(e);var n=(0,o.Q)(e);if(t){var a=t.verifyItemRelativeUrls&&t.verifyItemRelativeUrls.rootPath||t.url&&t.url.path;if(a){var i=v(a,t.portal);(n=(0,o._)(v(n,t.portal),i,i))!==e&&t.verifyItemRelativeUrls&&t.verifyItemRelativeUrls.writtenUrls.push(n)}}return n=f(n,t&&t.portal),(0,o.K)(n)&&(n=(0,o.F)(n)),null!==t&&void 0!==t&&t.resources&&null!==t&&void 0!==t&&t.portalItem&&!(0,o.K)(n)&&!(0,o.X)(n)&&r===s.YES&&t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(n)}),n}function l(e,t,r){return a(e,r)}function u(e,t,r,n){var o=i(e,n);void 0!==o&&(t[r]=o)}var s,p,c=/\/items\/([^\/]+)\/resources\//,y=/^\.\/resources\//;function d(e){var t=(0,n.r)(e)?e.match(c):null;return(0,n.r)(t)?t[1]:null}function f(e,t){return t&&!t.isPortal&&t.urlKey&&t.customBaseUrl?(0,o.v)(e,"".concat(t.urlKey,".").concat(t.customBaseUrl),t.portalHostname):e}function v(e,t){if(!t||t.isPortal||!t.urlKey||!t.customBaseUrl)return e;var r="".concat(t.urlKey,".").concat(t.customBaseUrl),n=(0,o.b)();return(0,o.z)(n,"".concat(n.scheme,"://").concat(r))?(0,o.v)(e,t.portalHostname,r):(0,o.v)(e,r,t.portalHostname)}(p=s||(s={}))[p.YES=0]="YES",p[p.NO=1]="NO";var m=Object.freeze(Object.defineProperty({__proto__:null,fromJSON:a,toJSON:i,read:l,write:u,itemIdFromResourceUrl:d,ensureMainOnlineDomain:f,get MarkKeep(){return s}},Symbol.toStringTag,{value:"Module"}))}}]);
//# sourceMappingURL=3688.52f49ce7.chunk.js.map