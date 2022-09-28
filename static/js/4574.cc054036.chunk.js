"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[4574],{80933:function(e,r,t){t.d(r,{I:function(){return w},L:function(){return I},S:function(){return b},b:function(){return S},d:function(){return f},g:function(){return h},h:function(){return y},j:function(){return x},m:function(){return v},w:function(){return d},y:function(){return m}});var n=t(29439),a=t(50165),u=t(13994),s=t(3029),l={mapserver:"MapServer",imageserver:"ImageServer",featureserver:"FeatureServer",sceneserver:"SceneServer",streamserver:"StreamServer",vectortileserver:"VectorTileServer"},o=Object.values(l),i=new RegExp("^((?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/(".concat(o.join("|"),"))(?:\\/(?:layers\\/)?(\\d+))?"),"i"),c=new RegExp("^((?:https?:)?\\/\\/\\S+?\\/([^\\/\\n]+)\\/(".concat(o.join("|"),"))(?:\\/(?:layers\\/)?(\\d+))?"),"i"),p=/(.*?)\/(?:layers\/)?(\d+)\/?$/i;function f(e){return!!i.test(e)}function v(e){if((0,a.t)(e))return null;var r=(0,u.j)(e),t=r.path.match(i)||r.path.match(c);if(!t)return null;var s=(0,n.Z)(t,5),o=s[1],p=s[2],f=s[3],v=s[4],d=p.indexOf("/");return{title:y(-1!==d?p.slice(d+1):p),serverType:l[f.toLowerCase()],sublayer:null!=v&&""!==v?parseInt(v,10):null,url:{path:o}}}function d(e){var r=(0,u.j)(e).path.match(p);return r?{serviceUrl:r[1],sublayerId:Number(r[2])}:null}function y(e){return(e=e.replace(/\s*[/_]+\s*/g," "))[0].toUpperCase()+e.slice(1)}function m(e,r){var t=[];if(e){var n=v(e);(0,a.r)(n)&&n.title&&t.push(n.title)}if(r){var u=y(r);t.push(u)}if(2===t.length){if(t[0].toLowerCase().includes(t[1].toLowerCase()))return t[0];if(t[1].toLowerCase().includes(t[0].toLowerCase()))return t[1]}return t.join(" - ")}function h(e){if(!e)return!1;var r=(e=e.toLowerCase()).includes(".arcgis.com/"),t=e.includes("//services")||e.includes("//tiles")||e.includes("//features");return r&&t}function b(e,r){return e?(0,u.C)((0,u.A)(e,r)):e}function I(e){var r=e.url;if(!r)return{url:r};r=(0,u.A)(r,e.logger);var t,n=(0,u.j)(r),s=v(n.path);if((0,a.r)(s))null!=s.sublayer&&null==e.layer.layerId&&(t=s.sublayer),r=s.url.path;else if(e.nonStandardUrlAllowed){var l=d(n.path);(0,a.r)(l)&&(r=l.serviceUrl,t=l.sublayerId)}return{url:(0,u.C)(r),layerId:t}}function S(e,r,t,n,a){(0,s.p)(r,n,"url",a),n.url&&null!=e.layerId&&(n.url=(0,u.G)(n.url,t,e.layerId.toString()))}function w(e){if(!e)return!1;var r=e.toLowerCase(),t=r.includes("/services/"),n=r.includes("/mapserver/wmsserver"),a=r.includes("/imageserver/wmsserver"),u=r.includes("/wmsserver");return t&&(n||a||u)}function x(e){if(!e)return!1;var r=new u.y((0,u.Q)(e)).authority.toLowerCase();return"server.arcgisonline.com"===r||"services.arcgisonline.com"===r}},4574:function(e,r,t){t.r(r),t.d(r,{fetchFeatureService:function(){return x},fromUrl:function(){return c}});var n=t(74165),a=t(1413),u=t(15861),s=t(13994),l=t(50165),o=t(80933),i=t(31056);t(3029);function c(e){return p.apply(this,arguments)}function p(){return(p=(0,u.Z)((0,n.Z)().mark((function e(r){var u,s,l,o,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=null===(u=r.properties)||void 0===u?void 0:u.customParameters,e.next=3,d(r.url,s);case 3:if(l=e.sent,o=(0,a.Z)((0,a.Z)({},r.properties),{},{url:r.url}),l.sublayerIds){e.next=7;break}return e.abrupt("return",(null!=l.layerOrTableId&&(o.layerId=l.layerOrTableId,o.sourceJSON=l.sourceJSON),new l.Constructor(o)));case 7:return e.next=9,Promise.all([t.e(1340),t.e(6626),t.e(6857),t.e(6235),t.e(1290)]).then(t.bind(t,28729));case 9:return e.t0=e.sent.default,e.t1={title:l.parsedUrl.title},i=new e.t0(e.t1),e.abrupt("return",(v(i,l,o),i));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e,r){return e?e.find((function(e){return e.id===r})):null}function v(e,r,t){function n(e,n){var u=(0,a.Z)((0,a.Z)({},t),{},{layerId:e,sublayerTitleMode:"service-name"});return(0,l.r)(n)&&(u.sourceJSON=n),new r.Constructor(u)}r.sublayerIds.forEach((function(t){var a=n(t,f(r.sublayerInfos,t));e.add(a)})),r.tableIds.forEach((function(t){var a=n(t,f(r.tableInfos,t));e.tables.add(a)}))}function d(e,r){return y.apply(this,arguments)}function y(){return y=(0,u.Z)((0,n.Z)().mark((function e(r,t){var a,u,s,i,c,p,f,v,d,y,h,b,S;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=(0,o.m)(r),e.t0=(0,l.t)(a),!e.t0){e.next=6;break}return e.next=5,m(r,t);case 5:a=e.sent;case 6:if(!(0,l.t)(a)){e.next=8;break}throw new l.a("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:r});case 8:s=(u=a).serverType,i=u.sublayer,p={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"},e.t1=s,e.next="MapServer"===e.t1?13:"ImageServer"===e.t1?15:"SceneServer"===e.t1?17:19;break;case 13:return c=null!=i?"FeatureLayer":Z(r,t).then((function(e){return e?"TileLayer":"MapImageLayer"})),e.abrupt("break",20);case 15:return c=k(r,{customParameters:t}).then((function(e){var r=e.tileInfo&&e.tileInfo.format;return e.tileInfo?"LERC"!==(null===r||void 0===r?void 0:r.toUpperCase())||e.cacheType&&"elevation"!==e.cacheType.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"})),e.abrupt("break",20);case 17:return c=k(a.url.path,{customParameters:t}).then((function(e){if(e){if("Voxel"===(null===e||void 0===e?void 0:e.layerType))return"VoxelLayer";if(null!==e&&void 0!==e&&e.layers&&Array.isArray(e.layers)&&e.layers.length>0){var r,t={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},n=null===(r=e.layers[0])||void 0===r?void 0:r.layerType;if(null!=t[n])return t[n]}}return"SceneLayer"})),e.abrupt("break",20);case 19:c=p[s];case 20:return f={FeatureLayer:!0,SceneLayer:!0},d={parsedUrl:a,Constructor:null,layerOrTableId:(v="FeatureServer"===s)?i:null,sublayerIds:null,tableIds:null},e.next=25,c;case 25:if(y=e.sent,!f[y]||null!=i){e.next=32;break}return e.next=29,I(r,s,t);case 29:S=e.sent,v&&(d.sublayerInfos=S.layerInfos,d.tableInfos=S.tableInfos),1!==S.layerIds.length+S.tableIds.length?(d.sublayerIds=S.layerIds,d.tableIds=S.tableIds):v&&(d.layerOrTableId=null!==(h=S.layerIds[0])&&void 0!==h?h:S.tableIds[0],d.sourceJSON=null!==(b=S.layerInfos[0])&&void 0!==b?b:S.tableInfos[0]);case 32:return e.next=34,O(y);case 34:return d.Constructor=e.sent,e.abrupt("return",d);case 36:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}function m(e,r){return h.apply(this,arguments)}function h(){return h=(0,u.Z)((0,n.Z)().mark((function e(r,t){var a,u,i,c,p,f;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(r,{customParameters:t});case 2:if(u=e.sent,i=null,c=null,"Feature Layer"===(p=u.type)||"Table"===p?(i="FeatureServer",c=u.id):"indexedVector"===p?i="VectorTileServer":u.hasOwnProperty("mapName")?i="MapServer":u.hasOwnProperty("bandCount")&&u.hasOwnProperty("pixelSizeX")?i="ImageServer":u.hasOwnProperty("maxRecordCount")&&u.hasOwnProperty("allowGeometryUpdates")?i="FeatureServer":u.hasOwnProperty("streamUrls")?i="StreamServer":b(u)?(i="SceneServer",c=u.id):u.hasOwnProperty("layers")&&b(null===(a=u.layers)||void 0===a?void 0:a[0])&&(i="SceneServer"),i){e.next=7;break}return e.abrupt("return",null);case 7:return f=null!=c?(0,o.w)(r):null,e.abrupt("return",{title:(0,l.r)(f)&&u.name||(0,s.q)(r),serverType:i,sublayer:c,url:{path:(0,l.r)(f)?f.serviceUrl:(0,s.j)(r).path}});case 9:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function b(e){return(null===e||void 0===e?void 0:e.hasOwnProperty("store"))&&e.hasOwnProperty("id")&&"number"==typeof e.id}function I(e,r,t){return S.apply(this,arguments)}function S(){return(S=(0,u.Z)((0,n.Z)().mark((function e(r,t,a){var u,s,l,o,i,c,p;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=!1,"FeatureServer"!==t){e.next=8;break}return e.next=4,x(r,{customParameters:a});case 4:i=e.sent,o=!!i.layersJSON,l=i.layersJSON||i.serviceJSON,e.next=11;break;case 8:return e.next=10,k(r,{customParameters:a});case 10:l=e.sent;case 11:return c=null===(u=l)||void 0===u?void 0:u.layers,p=null===(s=l)||void 0===s?void 0:s.tables,e.abrupt("return",{layerIds:(null===c||void 0===c?void 0:c.map((function(e){return e.id})).reverse())||[],tableIds:(null===p||void 0===p?void 0:p.map((function(e){return e.id})).reverse())||[],layerInfos:o?c:[],tableInfos:o?p:[]});case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return!e.type||"Feature Layer"===e.type}function x(e,r){return g.apply(this,arguments)}function g(){return(g=(0,u.Z)((0,n.Z)().mark((function e(r,t){var a,u,s,l,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(r,t);case 2:if((s=(s=e.sent)||{}).layers=(null===(a=s.layers)||void 0===a?void 0:a.filter(w))||[],l={serviceJSON:s},!(s.currentVersion<10.5)){e.next=7;break}return e.abrupt("return",l);case 7:return e.next=9,k(r+"/layers",t);case 9:return o=e.sent,e.abrupt("return",(l.layersJSON={layers:(null===o||void 0===o||null===(u=o.layers)||void 0===u?void 0:u.filter(w))||[],tables:(null===o||void 0===o?void 0:o.tables)||[]},l));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){return L.apply(this,arguments)}function L(){return(L=(0,u.Z)((0,n.Z)().mark((function e(r){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.a[r])());case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e,r){return P.apply(this,arguments)}function P(){return(P=(0,u.Z)((0,n.Z)().mark((function e(r,t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(r,{customParameters:t});case 2:return e.abrupt("return",e.sent.tileInfo);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,r){return U.apply(this,arguments)}function U(){return(U=(0,u.Z)((0,n.Z)().mark((function e(r,t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.U)(r,{responseType:"json",query:(0,a.Z)((0,a.Z)({f:"json"},null===t||void 0===t?void 0:t.customParameters),{},{token:null===t||void 0===t?void 0:t.apiKey})});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},3029:function(e,r,t){t.d(r,{I:function(){return i},R:function(){return m},U:function(){return d},c:function(){return s},h:function(){return v},i:function(){return u},m:function(){return l},p:function(){return o}});var n=t(50165),a=t(13994);function u(e,r){var t=r&&r.url&&r.url.path;if(e&&t&&(e=(0,a.Q)(e,t,{preserveProtocolRelative:!0}),r.portalItem&&r.readResourcePaths)){var n=(0,a._)(e,r.portalItem.itemUrl);f.test(n)&&r.readResourcePaths.push(r.portalItem.resourceFromPath(n).path)}return y(e,r&&r.portal)}function s(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i.YES;if(!e)return e;!(0,a.K)(e)&&r&&r.blockedRelativeUrls&&r.blockedRelativeUrls.push(e);var n=(0,a.Q)(e);if(r){var u=r.verifyItemRelativeUrls&&r.verifyItemRelativeUrls.rootPath||r.url&&r.url.path;if(u){var s=y(u,r.portal);(n=(0,a._)(y(n,r.portal),s,s))!==e&&r.verifyItemRelativeUrls&&r.verifyItemRelativeUrls.writtenUrls.push(n)}}return n=d(n,r&&r.portal),(0,a.K)(n)&&(n=(0,a.F)(n)),null!==r&&void 0!==r&&r.resources&&null!==r&&void 0!==r&&r.portalItem&&!(0,a.K)(n)&&!(0,a.X)(n)&&t===i.YES&&r.resources.toKeep.push({resource:r.portalItem.resourceFromPath(n)}),n}function l(e,r,t){return u(e,t)}function o(e,r,t,n){var a=s(e,n);void 0!==a&&(r[t]=a)}var i,c,p=/\/items\/([^\/]+)\/resources\//,f=/^\.\/resources\//;function v(e){var r=(0,n.r)(e)?e.match(p):null;return(0,n.r)(r)?r[1]:null}function d(e,r){return r&&!r.isPortal&&r.urlKey&&r.customBaseUrl?(0,a.v)(e,"".concat(r.urlKey,".").concat(r.customBaseUrl),r.portalHostname):e}function y(e,r){if(!r||r.isPortal||!r.urlKey||!r.customBaseUrl)return e;var t="".concat(r.urlKey,".").concat(r.customBaseUrl),n=(0,a.b)();return(0,a.z)(n,"".concat(n.scheme,"://").concat(t))?(0,a.v)(e,r.portalHostname,t):(0,a.v)(e,t,r.portalHostname)}(c=i||(i={}))[c.YES=0]="YES",c[c.NO=1]="NO";var m=Object.freeze(Object.defineProperty({__proto__:null,fromJSON:u,toJSON:s,read:l,write:o,itemIdFromResourceUrl:v,ensureMainOnlineDomain:d,get MarkKeep(){return i}},Symbol.toStringTag,{value:"Module"}))}}]);
//# sourceMappingURL=4574.cc054036.chunk.js.map