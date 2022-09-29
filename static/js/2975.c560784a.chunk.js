"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[2975],{97033:function(e,t,n){n.d(t,{a:function(){return d},c:function(){return v},d:function(){return y}});var r=n(15671),i=n(43144),o=n(60136),a=n(29388),l=n(23132),u=n(77470),s=n(75610),c=n(36551),v=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(){var e;return(0,r.Z)(this,n),(e=t.apply(this,arguments)).updating=!1,e.handleId=0,e.handles=new u.u,e.scheduleHandleId=0,e.pendingPromises=new Set,e}return(0,i.Z)(n,[{key:"destroy",value:function(){this.removeAll(),this.handles.destroy()}},{key:"add",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this._installWatch(e,t,n,c.l)}},{key:"addWhen",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this._installWatch(e,t,n,c.f)}},{key:"addOnCollectionChange",value:function(e,t){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=r.initial,o=void 0!==i&&i,a=r.final,l=void 0!==a&&a,u=++this.handleId;return this.handles.add([(0,c.a)(e,"after-changes",this._createSyncUpdatingCallback(),c.U),(0,c.a)(e,"change",t,{onListenerAdd:o?function(e){return t({added:e.toArray(),removed:[]})}:void 0,onListenerRemove:l?function(e){return t({added:[],removed:e.toArray()})}:void 0})],u),{remove:function(){return n.handles.remove(u)}}}},{key:"addPromise",value:function(e){var t=this;if((0,s.t)(e))return e;var n=++this.handleId;this.handles.add({remove:function(){t.pendingPromises.delete(e)&&(0!==t.pendingPromises.size||t.handles.has(p)||t._set("updating",!1))}},n),this.pendingPromises.add(e),this._set("updating",!0);var r=function(){return t.handles.remove(n)};return e.then(r,r),e}},{key:"removeAll",value:function(){this.pendingPromises.clear(),this.handles.removeAll(),this._set("updating",!1)}},{key:"_installWatch",value:function(e,t){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0,o=++this.handleId;r.sync||this._installSyncUpdatingWatch(e,o);var a=i(e,t,r);return this.handles.add(a,o),{remove:function(){return n.handles.remove(o)}}}},{key:"_installSyncUpdatingWatch",value:function(e,t){var n=this._createSyncUpdatingCallback(),r=(0,c.l)(e,n,{sync:!0,equals:function(){return!1}});return this.handles.add(r,t),r}},{key:"_createSyncUpdatingCallback",value:function(){var e=this;return function(){e.handles.remove(p),++e.scheduleHandleId;var t=e.scheduleHandleId;e._get("updating")||e._set("updating",!0),e.handles.add((0,l.B)((function(){t===e.scheduleHandleId&&(e._set("updating",e.pendingPromises.size>0),e.handles.remove(p))})),p)}}}]),n}(l.y);(0,l.e)([(0,l.d)({readOnly:!0})],v.prototype,"updating",void 0),v=(0,l.e)([(0,l.n)("esri.core.support.WatchUpdatingTracking")],v);var h,f,p=-42;(f=h||(h={}))[f.NONE=0]="NONE",f[f.SYNC=1]="SYNC",f[f.INIT=2]="INIT";var d=function(e){var t=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"destroy",value:function(){var e,t;this.destroyed||(null!==(e=this._get("handles"))&&void 0!==e&&e.destroy(),null===(t=this._get("updatingHandles"))||void 0===t||t.destroy())}},{key:"handles",get:function(){return this._get("handles")||new u.u}},{key:"updatingHandles",get:function(){return this._get("updatingHandles")||new v}}]),n}(e);return(0,l.e)([(0,l.d)({readOnly:!0})],t.prototype,"handles",null),(0,l.e)([(0,l.d)({readOnly:!0})],t.prototype,"updatingHandles",null),t=(0,l.e)([(0,l.n)("esri.core.HandleOwner")],t),t},y=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n)}(d(l.y));y=(0,l.e)([(0,l.n)("esri.core.HandleOwner")],y)},77470:function(e,t,n){n.d(t,{u:function(){return v}});var r=n(15671),i=n(43144),o=n(60136),a=n(29388),l=n(23132),u=n(80175),s=n(75610),c=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(e){var i;return(0,r.Z)(this,n),(i=t.call(this,e))._groups=new Map,i}return(0,i.Z)(n,[{key:"destroy",value:function(){this.removeAll()}},{key:"size",get:function(){var e=0;return this._groups.forEach((function(t){e+=t.length})),e}},{key:"add",value:function(e,t){var n=this;if(!this._isHandle(e)&&!Array.isArray(e)&&!u.j.isCollection(e))return this;var r=this._getOrCreateGroup(t);return Array.isArray(e)||u.j.isCollection(e)?e.forEach((function(e){return n._isHandle(e)&&r.push(e)})):r.push(e),this.notifyChange("size"),this}},{key:"forEach",value:function(e,t){if("function"==typeof e)this._groups.forEach((function(t){return t.forEach(e)}));else{var n=this._getGroup(e);n&&t&&n.forEach(t)}}},{key:"has",value:function(e){return this._groups.has(this._ensureGroupKey(e))}},{key:"remove",value:function(e){if(Array.isArray(e)||u.j.isCollection(e))return e.forEach(this.remove,this),this;if(!this.has(e))return this;for(var t=this._getGroup(e),n=0;n<t.length;n++)t[n].remove();return this._deleteGroup(e),this.notifyChange("size"),this}},{key:"removeAll",value:function(){return this._groups.forEach((function(e){for(var t=0;t<e.length;t++)e[t].remove()})),this._groups.clear(),this.notifyChange("size"),this}},{key:"_isHandle",value:function(e){return e&&!!e.remove}},{key:"_getOrCreateGroup",value:function(e){if(this.has(e))return this._getGroup(e);var t=[];return this._groups.set(this._ensureGroupKey(e),t),t}},{key:"_getGroup",value:function(e){return(0,s.q)(this._groups.get(this._ensureGroupKey(e)))}},{key:"_deleteGroup",value:function(e){return this._groups.delete(this._ensureGroupKey(e))}},{key:"_ensureGroupKey",value:function(e){return e||"_default_"}}]),n}(l.y);(0,l.e)([(0,l.d)({readOnly:!0})],c.prototype,"size",null);var v=c=(0,l.e)([(0,l.n)("esri.core.Handles")],c)},77196:function(e,t,n){n.d(t,{o:function(){return v},s:function(){return c}});var r=n(43144),i=n(15671),o=n(97326),a=n(60136),l=n(29388),u=n(23132),s=0,c=function(e){var t=function(e){(0,a.Z)(n,e);var t=(0,l.Z)(n);function n(){var e;(0,i.Z)(this,n);for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return e=t.call.apply(t,[this].concat(a)),Object.defineProperty((0,o.Z)(e),"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+s++}),e}return(0,r.Z)(n)}(e);return t=(0,u.e)([(0,u.n)("esri.core.Identifiable")],t)},v=function(e){(0,a.Z)(n,e);var t=(0,l.Z)(n);function n(){return(0,i.Z)(this,n),t.apply(this,arguments)}return(0,r.Z)(n)}(c(function(){return(0,r.Z)((function e(){(0,i.Z)(this,e)}))}()));v=(0,u.e)([(0,u.n)("esri.core.Identifiable")],v)},4720:function(e,t,n){n.d(t,{S:function(){return b},p:function(){return g}});var r,i=n(1413),o=n(15671),a=n(43144),l=n(60136),u=n(29388),s=n(23132),c=n(57714),v=n(70441),h=n(75610),f=n(44455),p=n(30709),d=n(78311),y=r=function(e){(0,l.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;return(0,o.Z)(this,n),(r=t.call(this,e)).cols=null,r.level=0,r.levelValue=null,r.origin=null,r.resolution=0,r.rows=null,r.scale=0,r}return(0,a.Z)(n,[{key:"clone",value:function(){return new r({cols:this.cols,level:this.level,levelValue:this.levelValue,resolution:this.resolution,rows:this.rows,scale:this.scale})}}]),n}(v.l);(0,s.e)([(0,s.d)({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],y.prototype,"cols",void 0),(0,s.e)([(0,s.d)({type:s.S,json:{write:!0}})],y.prototype,"level",void 0),(0,s.e)([(0,s.d)({type:String,json:{write:!0}})],y.prototype,"levelValue",void 0),(0,s.e)([(0,s.d)({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],y.prototype,"origin",void 0),(0,s.e)([(0,s.d)({type:Number,json:{write:!0}})],y.prototype,"resolution",void 0),(0,s.e)([(0,s.d)({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],y.prototype,"rows",void 0),(0,s.e)([(0,s.d)({type:Number,json:{write:!0}})],y.prototype,"scale",void 0);var m,g=y=r=(0,s.e)([(0,s.n)("esri.layers.support.LOD")],y),w=new c.s({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc",LERC2D:"lerc2d",RAW:"raw",pbf:"pbf"}),_=m=function(e){(0,l.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;return(0,o.Z)(this,n),(r=t.call(this,e)).dpi=96,r.format=null,r.origin=null,r.minScale=0,r.maxScale=0,r.size=null,r.spatialReference=null,r}return(0,a.Z)(n,[{key:"isWrappable",get:function(){var e=this.spatialReference,t=this.origin;if(e&&t){var n=(0,p.b)(e);return e.isWrappable&&Math.abs(n.origin[0]-t.x)<=n.dx}return!1}},{key:"readOrigin",value:function(e,t){return p.j.fromJSON((0,i.Z)({spatialReference:t.spatialReference},e))}},{key:"lods",set:function(e){var t=this,n=0,r=0,i=[];this._levelToLOD={},e&&(n=-1/0,r=1/0,e.forEach((function(e){i.push(e.scale),n=e.scale>n?e.scale:n,r=e.scale<r?e.scale:r,t._levelToLOD[e.level]=e}))),this._set("scales",i),this._set("minScale",n),this._set("maxScale",r),this._set("lods",e),this._initializeUpsampleLevels()}},{key:"readSize",value:function(e,t){return[t.cols,t.rows]}},{key:"writeSize",value:function(e,t){t.cols=e[0],t.rows=e[1]}},{key:"zoomToScale",value:function(e){var t=this.scales;if(e<=0)return t[0];if(e>=t.length-1)return t[t.length-1];var n=Math.floor(e),r=n+1;return t[n]/Math.pow(t[n]/t[r],e-n)}},{key:"scaleToZoom",value:function(e){for(var t=this.scales,n=t.length-1,r=0;r<n;r++){var i=t[r],o=t[r+1];if(i<=e)return r;if(o===e)return r+1;if(i>e&&o<e)return r+Math.log(i/e)/Math.log(i/o)}return r}},{key:"snapScale",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.95,n=this.scaleToZoom(e);return n%Math.floor(n)>=t?this.zoomToScale(Math.ceil(n)):this.zoomToScale(Math.floor(n))}},{key:"tileAt",value:function(e,t,n,r){var i,o,a=this.lodAt(e);if(!a)return null;if("number"==typeof t)i=t,o=n;else if((0,p.E)(t.spatialReference,this.spatialReference))i=t.x,o=t.y,r=n;else{var l=(0,p.M)(t,this.spatialReference);if((0,h.t)(l))return null;i=l.x,o=l.y,r=n}var u=a.resolution*this.size[0],s=a.resolution*this.size[1];return r||(r={id:null,level:0,row:0,col:0,extent:(0,d.u)()}),r.level=e,r.row=Math.floor((this.origin.y-o)/s+.001),r.col=Math.floor((i-this.origin.x)/u+.001),this.updateTileInfo(r),r}},{key:"updateTileInfo",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m.ExtrapolateOptions.NONE,n=this.lodAt(e.level);if(!n&&t===m.ExtrapolateOptions.POWER_OF_TWO){var r=this.lods[this.lods.length-1];r.level<e.level&&(n=r)}if(n){var i=e.level-n.level,o=n.resolution*this.size[0]/Math.pow(2,i),a=n.resolution*this.size[1]/Math.pow(2,i);e.id="".concat(e.level,"/").concat(e.row,"/").concat(e.col),e.extent||(e.extent=(0,d.u)()),e.extent[0]=this.origin.x+e.col*o,e.extent[1]=this.origin.y-(e.row+1)*a,e.extent[2]=e.extent[0]+o,e.extent[3]=e.extent[1]+a}}},{key:"upsampleTile",value:function(e){var t=this._upsampleLevels[e.level];return!(!t||-1===t.parentLevel)&&(e.level=t.parentLevel,e.row=Math.floor(e.row/t.factor+.001),e.col=Math.floor(e.col/t.factor+.001),this.updateTileInfo(e),!0)}},{key:"getTileBounds",value:function(e,t){var n=this.lodAt(t.level).resolution,r=n*this.size[0],i=n*this.size[1];return e[0]=this.origin.x+t.col*r,e[1]=this.origin.y-(t.row+1)*i,e[2]=e[0]+r,e[3]=e[1]+i,e}},{key:"lodAt",value:function(e){return this._levelToLOD&&this._levelToLOD[e]||null}},{key:"clone",value:function(){return m.fromJSON(this.write({}))}},{key:"getOrCreateCompatible",value:function(e,t){if(256===this.size[0]&&256===this.size[1])return 256===e?this:null;for(var n=[],r=this.lods.length,i=0;i<r;i++){var o=this.lods[i],a=o.resolution*t;n.push(new g({level:o.level,scale:o.scale,resolution:a}))}return new m({size:[e,e],dpi:this.dpi,format:this.format,compressionQuality:this.compressionQuality,origin:this.origin,spatialReference:this.spatialReference,lods:n})}},{key:"_initializeUpsampleLevels",value:function(){var e=this.lods;this._upsampleLevels=[];for(var t=null,n=0;n<e.length;n++){var r=e[n];this._upsampleLevels[r.level]={parentLevel:t?t.level:-1,factor:t?t.resolution/r.resolution:0},t=r}}}],[{key:"create",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.resolutionFactor,n=void 0===t?1:t,r=e.scales,i=e.size,o=void 0===i?256:i,a=e.spatialReference,l=void 0===a?p.k.WebMercator:a,u=e.numLODs,s=void 0===u?24:u;if(!(0,p.I)(l)){var c=[];if(r)for(var v=0;v<r.length;v++){var h=r[v];c.push({level:v,scale:h,resolution:h})}else for(var d=5e-4,y=s-1;y>=0;y--)c.unshift({level:y,scale:d,resolution:d}),d*=2;return new m({dpi:96,lods:c,origin:new p.j(0,0,l),size:[o,o],spatialReference:l})}var g=(0,p.b)(l),w=e.origin?new p.j({x:e.origin.x,y:e.origin.y,spatialReference:l}):new p.j(g?{x:g.origin[0],y:g.origin[1],spatialReference:l}:{x:0,y:0,spatialReference:l}),_=96,b=1/(39.37*(0,f.z)(l)*_),S=[];if(r)for(var k=0;k<r.length;k++){var O=r[k],Z=O*b;S.push({level:k,scale:O,resolution:Z})}else{var z=(0,p.h)(l)?512/o*591657527.5917094:256/o*591657527.591555,A=Math.ceil(s/n);S.push({level:0,scale:z,resolution:z*b});for(var T=1;T<A;T++){var I=z/Math.pow(2,n),E=I*b;S.push({level:T,scale:I,resolution:E}),z=I}}return new m({dpi:_,lods:S,origin:w,size:[o,o],spatialReference:l})}}]),n}(v.l);(0,s.e)([(0,s.d)({type:Number,json:{write:!0}})],_.prototype,"compressionQuality",void 0),(0,s.e)([(0,s.d)({type:Number,json:{write:!0}})],_.prototype,"dpi",void 0),(0,s.e)([(0,s.d)({type:String,json:{read:w.read,write:w.write,origins:{"web-scene":{read:!1,write:!1}}}})],_.prototype,"format",void 0),(0,s.e)([(0,s.d)({readOnly:!0})],_.prototype,"isWrappable",null),(0,s.e)([(0,s.d)({type:p.j,json:{write:!0}})],_.prototype,"origin",void 0),(0,s.e)([(0,p.o)("origin")],_.prototype,"readOrigin",null),(0,s.e)([(0,s.d)({type:[g],value:null,json:{write:!0}})],_.prototype,"lods",null),(0,s.e)([(0,s.d)({readOnly:!0})],_.prototype,"minScale",void 0),(0,s.e)([(0,s.d)({readOnly:!0})],_.prototype,"maxScale",void 0),(0,s.e)([(0,s.d)({readOnly:!0})],_.prototype,"scales",void 0),(0,s.e)([(0,s.d)({cast:function(e){return Array.isArray(e)?e:"number"==typeof e?[e,e]:[256,256]}})],_.prototype,"size",void 0),(0,s.e)([(0,p.o)("size",["rows","cols"])],_.prototype,"readSize",null),(0,s.e)([(0,p.r)("size",{cols:{type:s.S},rows:{type:s.S}})],_.prototype,"writeSize",null),(0,s.e)([(0,s.d)({type:p.k,json:{write:!0}})],_.prototype,"spatialReference",void 0),function(e){var t;(t=e.ExtrapolateOptions||(e.ExtrapolateOptions={}))[t.NONE=0]="NONE",t[t.POWER_OF_TWO=1]="POWER_OF_TWO"}((_=m=(0,s.e)([(0,s.n)("esri.layers.support.TileInfo")],_))||(_={}));var b=_},11670:function(e,t,n){n.d(t,{n:function(){return w},r:function(){return g},z:function(){return O}});var r=n(74165),i=n(15861),o=n(60136),a=n(29388),l=n(15671),u=n(43144),s=n(1413),c=n(4720),v=n(23132),h=n(57714),f=n(48561),p=n(97033),d=n(17436),y=n(36551),m=n(75610),g={type:c.S,json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:w}}}}};function w(e,t,n,r){if(!e)return null;var i=t.minScale,o=t.maxScale,a=t.minLOD,l=t.maxLOD;if(null!=a&&null!=l)return r&&r.ignoreMinMaxLOD?c.S.fromJSON(e):c.S.fromJSON((0,s.Z)((0,s.Z)({},e),{},{lods:e.lods.filter((function(e){var t=e.level;return null!=t&&t>=a&&t<=l}))}));if(0!==i&&0!==o){var u=function(e){return Math.round(1e4*e)/1e4},v=i?u(i):1/0,h=o?u(o):-1/0;return c.S.fromJSON((0,s.Z)((0,s.Z)({},e),{},{lods:e.lods.filter((function(e){var t=u(e.scale);return t<=v&&t>=h}))}))}return c.S.fromJSON(e)}var _,b=function(){function e(){(0,l.Z)(this,e),this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40}return(0,u.Z)(e,[{key:"getAvailability",value:function(e,t){if("unknown"!==this._allAvailability)return this._allAvailability;var n=(e-this.location.top)*this.location.width+(t-this.location.left),r=n%8,i=n>>3,o=this._tileAvailabilityBitSet;return i<0||i>o.length?"unknown":o[i]&1<<r?"available":"unavailable"}},{key:"_updateFromData",value:function(e){for(var t=this.location.width,n=this.location.height,r=!0,i=!0,o=Math.ceil(t*n/8),a=new Uint8Array(o),l=0,u=0;u<e.length;u++){var s=u%8;e[u]?(i=!1,a[l]|=1<<s):r=!1,7===s&&++l}i?this._allAvailability="unavailable":r?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=a,this.byteSize+=a.length)}}],[{key:"fromDefinition",value:function(t,n){var r=t.service.request||h.U,i=t.row,o=t.col,a=t.width,l=t.height,u={query:{f:"json"}};return n=n?(0,s.Z)((0,s.Z)({},u),n):u,r(function(e){var t;if("vector-tile"===e.service.type)t="".concat(e.service.url,"/tilemap/").concat(e.level,"/").concat(e.row,"/").concat(e.col,"/").concat(e.width,"/").concat(e.height);else{var n=e.service.tileServers;t="".concat(n&&n.length?n[e.row%n.length]:e.service.url,"/tilemap/").concat(e.level,"/").concat(e.row,"/").concat(e.col,"/").concat(e.width,"/").concat(e.height)}var r=e.service.query;return r&&(t="".concat(t,"?").concat(r)),t}(t),n).then((function(e){return e.data})).catch((function(e){if(e&&e.details&&422===e.details.httpStatus)return{location:{top:i,left:o,width:a,height:l},valid:!0,data:(0,m.a0)(a*l,0)};throw e})).then((function(t){if(t.location&&(t.location.top!==i||t.location.left!==o||t.location.width!==a||t.location.height!==l))throw new v.a("tilemap:location-mismatch","Tilemap response for different location than requested",{response:t,definition:{top:i,left:o,width:a,height:l}});return e.fromJSON(t)}))}},{key:"fromJSON",value:function(t){e._validateJSON(t);var n=new e;return n.location=Object.freeze((0,m.m)(t.location)),n._updateFromData(t.data),Object.freeze(n)}},{key:"_validateJSON",value:function(e){if(!e||!e.location)throw new v.a("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new v.a("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new v.a("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new v.a("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new v.a("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}]),e}();function S(e){return"".concat(e.level,"/").concat(e.row,"/").concat(e.col,"/").concat(e.width,"/").concat(e.height)}var k=v.s.getLogger("esri.layers.support.TilemapCache"),O=_=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(e){var r;return(0,l.Z)(this,n),(r=t.call(this,e))._pendingTilemapRequests={},r._availableLevels={},r.levels=5,r.cacheByteSize=2*f.o.MEGABYTES,r.request=h.U,r._prefetchingEnabled=!0,r}return(0,u.Z)(n,[{key:"initialize",value:function(){var e=this;this._tilemapCache=new d.e(this.cacheByteSize),this.own([(0,y.l)((function(){var t=e.layer;return[null===t||void 0===t?void 0:t.parsedUrl,null===t||void 0===t?void 0:t.tileServers,null===t||void 0===t?void 0:t.apiKey,null===t||void 0===t?void 0:t.customParameters]}),(function(){return e._initializeTilemapDefinition()})),(0,y.l)((function(){var t,n;return null===(t=e.layer)||void 0===t||null===(n=t.tileInfo)||void 0===n?void 0:n.lods}),(function(t){return e._initializeAvailableLevels(t)}),y.w)]),this._initializeTilemapDefinition()}},{key:"castLevels",value:function(e){return e<=2?(k.error("Minimum levels for Tilemap is 3, but got ",e),3):e}},{key:"size",get:function(){return 1<<this.levels}},{key:"fetchTilemap",value:function(e,t,n,r){var i=this;if(!this._availableLevels[e])return Promise.reject(new v.a("tilemap-cache:level-unavailable","Level ".concat(e," is unavailable in the service")));var o=this._tmpTilemapDefinition,a=this._tilemapFromCache(e,t,n,o);if(a)return Promise.resolve(a);var l=r&&r.signal;return r=(0,s.Z)((0,s.Z)({},r),{},{signal:null}),new Promise((function(e,t){(0,v.v)(l,(function(){return t((0,v.m)())}));var n=S(o),a=i._pendingTilemapRequests[n];if(!a){a=b.fromDefinition(o,r).then((function(e){return i._tilemapCache.put(n,e,e.byteSize),e}));var u=function(){return delete i._pendingTilemapRequests[n]};i._pendingTilemapRequests[n]=a,a.then(u,u)}a.then(e,t)}))}},{key:"getAvailability",value:function(e,t,n){if(!this._availableLevels[e])return"unavailable";var r=this._tilemapFromCache(e,t,n,this._tmpTilemapDefinition);return r?r.getAvailability(t,n):"unknown"}},{key:"fetchAvailability",value:function(e,t,n,r){return this._availableLevels[e]?this.fetchTilemap(e,t,n,r).catch((function(e){return e})).then((function(r){if(r instanceof b){var i=r.getAvailability(t,n);if("unavailable"===i)throw new v.a("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:n});return i}if((0,v.u)(r))throw r;return"unknown"})):Promise.reject(new v.a("tilemap-cache:level-unavailable","Level ".concat(e," is unavailable in the service")))}},{key:"fetchAvailabilityUpsample",value:function(e,t,n,r,i){var o=this;r.level=e,r.row=t,r.col=n;var a=this.layer.tileInfo;a.updateTileInfo(r);var l=this.fetchAvailability(e,t,n,i).catch((function(e){if((0,v.u)(e))throw e;if(a.upsampleTile(r))return o.fetchAvailabilityUpsample(r.level,r.row,r.col,r);throw e}));return this._fetchAvailabilityUpsamplePrefetch(r.id,e,t,n,i,l),l}},{key:"_fetchAvailabilityUpsamplePrefetch",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t,n,i,o,a,l){var u,c,h,f,p,d,y,m,g,w=this;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._prefetchingEnabled){e.next=2;break}return e.abrupt("return");case 2:if(u="prefetch-".concat(t),!this.handles.has(u)){e.next=5;break}return e.abrupt("return");case 5:return c=new AbortController,l.then((function(){return c.abort()}),(function(){return c.abort()})),h=!1,f={remove:function(){h||(h=!0,c.abort())}},this.handles.add(f,u),e.next=12,(0,v.ay)(10,c.signal).catch((function(){}));case 12:if(h||(h=!0,this.handles.remove(u)),!(0,v.p)(c)){e.next=15;break}return e.abrupt("return");case 15:for(p={id:t,level:n,row:i,col:o},d=(0,s.Z)((0,s.Z)({},a),{},{signal:c.signal}),y=this.layer.tileInfo,m=function(e){var t=w.fetchAvailability(p.level,p.row,p.col,d);_._prefetches.push(t);var n=function(){_._prefetches.removeUnordered(t)};t.then(n,n)},g=0;_._prefetches.length<_._maxPrefetch&&y.upsampleTile(p);++g)m();case 18:case"end":return e.stop()}}),e,this)})));return function(t,n,r,i,o,a){return e.apply(this,arguments)}}()},{key:"_initializeTilemapDefinition",value:function(){var e;if(this.layer.parsedUrl){var t=this.layer,n=t.parsedUrl,r=t.apiKey,i=t.customParameters;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:n.path,query:(0,h.h)((0,s.Z)((0,s.Z)((0,s.Z)({},n.query),i),{},{token:null!==r&&void 0!==r?r:null===(e=n.query)||void 0===e?void 0:e.token})),tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}}},{key:"_tilemapFromCache",value:function(e,t,n,r){r.level=e,r.row=t-t%this.size,r.col=n-n%this.size;var i=S(r);return this._tilemapCache.get(i)}},{key:"_initializeAvailableLevels",value:function(e){var t=this;this._availableLevels={},e&&e.forEach((function(e){return t._availableLevels[e.level]=!0}))}},{key:"test",get:function(){var e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:function(t,n,r){return!!e._tilemapFromCache(t,n,r,e._tmpTilemapDefinition)}}}}]),n}((0,p.a)(v.y));O._maxPrefetch=4,O._prefetches=new v.ab({initialSize:_._maxPrefetch}),(0,v.e)([(0,v.d)({constructOnly:!0,type:Number})],O.prototype,"levels",void 0),(0,v.e)([(0,v.q)("levels")],O.prototype,"castLevels",null),(0,v.e)([(0,v.d)({readOnly:!0,type:Number})],O.prototype,"size",null),(0,v.e)([(0,v.d)({constructOnly:!0,type:Number})],O.prototype,"cacheByteSize",void 0),(0,v.e)([(0,v.d)({constructOnly:!0})],O.prototype,"layer",void 0),(0,v.e)([(0,v.d)({constructOnly:!0})],O.prototype,"request",void 0),O=_=(0,v.e)([(0,v.n)("esri.layers.support.TilemapCache")],O)},97866:function(e,t,n){n.d(t,{I:function(){return b},L:function(){return w},S:function(){return g},b:function(){return _},d:function(){return h},g:function(){return m},h:function(){return d},j:function(){return S},m:function(){return f},w:function(){return p},y:function(){return y}});var r=n(29439),i=n(75610),o=n(57714),a=n(96349),l={mapserver:"MapServer",imageserver:"ImageServer",featureserver:"FeatureServer",sceneserver:"SceneServer",streamserver:"StreamServer",vectortileserver:"VectorTileServer"},u=Object.values(l),s=new RegExp("^((?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/(".concat(u.join("|"),"))(?:\\/(?:layers\\/)?(\\d+))?"),"i"),c=new RegExp("^((?:https?:)?\\/\\/\\S+?\\/([^\\/\\n]+)\\/(".concat(u.join("|"),"))(?:\\/(?:layers\\/)?(\\d+))?"),"i"),v=/(.*?)\/(?:layers\/)?(\d+)\/?$/i;function h(e){return!!s.test(e)}function f(e){if((0,i.t)(e))return null;var t=(0,o.j)(e),n=t.path.match(s)||t.path.match(c);if(!n)return null;var a=(0,r.Z)(n,5),u=a[1],v=a[2],h=a[3],f=a[4],p=v.indexOf("/");return{title:d(-1!==p?v.slice(p+1):v),serverType:l[h.toLowerCase()],sublayer:null!=f&&""!==f?parseInt(f,10):null,url:{path:u}}}function p(e){var t=(0,o.j)(e).path.match(v);return t?{serviceUrl:t[1],sublayerId:Number(t[2])}:null}function d(e){return(e=e.replace(/\s*[/_]+\s*/g," "))[0].toUpperCase()+e.slice(1)}function y(e,t){var n=[];if(e){var r=f(e);(0,i.r)(r)&&r.title&&n.push(r.title)}if(t){var o=d(t);n.push(o)}if(2===n.length){if(n[0].toLowerCase().includes(n[1].toLowerCase()))return n[0];if(n[1].toLowerCase().includes(n[0].toLowerCase()))return n[1]}return n.join(" - ")}function m(e){if(!e)return!1;var t=(e=e.toLowerCase()).includes(".arcgis.com/"),n=e.includes("//services")||e.includes("//tiles")||e.includes("//features");return t&&n}function g(e,t){return e?(0,o.C)((0,o.A)(e,t)):e}function w(e){var t=e.url;if(!t)return{url:t};t=(0,o.A)(t,e.logger);var n,r=(0,o.j)(t),a=f(r.path);if((0,i.r)(a))null!=a.sublayer&&null==e.layer.layerId&&(n=a.sublayer),t=a.url.path;else if(e.nonStandardUrlAllowed){var l=p(r.path);(0,i.r)(l)&&(t=l.serviceUrl,n=l.sublayerId)}return{url:(0,o.C)(t),layerId:n}}function _(e,t,n,r,i){(0,a.p)(t,r,"url",i),r.url&&null!=e.layerId&&(r.url=(0,o.G)(r.url,n,e.layerId.toString()))}function b(e){if(!e)return!1;var t=e.toLowerCase(),n=t.includes("/services/"),r=t.includes("/mapserver/wmsserver"),i=t.includes("/imageserver/wmsserver"),o=t.includes("/wmsserver");return n&&(r||i||o)}function S(e){if(!e)return!1;var t=new o.y((0,o.Q)(e)).authority.toLowerCase();return"server.arcgisonline.com"===t||"services.arcgisonline.com"===t}},48561:function(e,t,n){function r(e){return 32+e.length}function i(){return 16}function o(e){if(!e)return 0;var t=32;for(var n in e)if(e.hasOwnProperty(n)){var i=e[n];switch(typeof i){case"string":t+=r(i);break;case"number":t+=16;break;case"boolean":t+=4}}return t}function a(e,t){return 32+e.length*t}var l;n.d(t,{e:function(){return a},n:function(){return r},o:function(){return l},r:function(){return o},t:function(){return i}}),function(e){e[e.KILOBYTES=1024]="KILOBYTES",e[e.MEGABYTES=1048576]="MEGABYTES",e[e.GIGABYTES=1073741824]="GIGABYTES"}(l||(l={}))},91204:function(e,t,n){n.d(t,{a:function(){return u},i:function(){return c},t:function(){return s}});var r=n(23132),i=n(80262),o=n(30709),a=n(36460),l=n(57714),u=(0,l.o)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"}),s=(0,l.o)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh"}),c={base:o.p,key:"type",typeMap:{extent:i.M,multipoint:a.a,point:o.j,polyline:a.m,polygon:a.v}};(0,r.N)(c)},96349:function(e,t,n){n.d(t,{I:function(){return s},R:function(){return y},U:function(){return p},c:function(){return a},h:function(){return f},i:function(){return o},m:function(){return l},p:function(){return u}});var r=n(75610),i=n(57714);function o(e,t){var n=t&&t.url&&t.url.path;if(e&&n&&(e=(0,i.Q)(e,n,{preserveProtocolRelative:!0}),t.portalItem&&t.readResourcePaths)){var r=(0,i._)(e,t.portalItem.itemUrl);h.test(r)&&t.readResourcePaths.push(t.portalItem.resourceFromPath(r).path)}return d(e,t&&t.portal)}function a(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s.YES;if(!e)return e;!(0,i.K)(e)&&t&&t.blockedRelativeUrls&&t.blockedRelativeUrls.push(e);var r=(0,i.Q)(e);if(t){var o=t.verifyItemRelativeUrls&&t.verifyItemRelativeUrls.rootPath||t.url&&t.url.path;if(o){var a=d(o,t.portal);(r=(0,i._)(d(r,t.portal),a,a))!==e&&t.verifyItemRelativeUrls&&t.verifyItemRelativeUrls.writtenUrls.push(r)}}return r=p(r,t&&t.portal),(0,i.K)(r)&&(r=(0,i.F)(r)),null!==t&&void 0!==t&&t.resources&&null!==t&&void 0!==t&&t.portalItem&&!(0,i.K)(r)&&!(0,i.X)(r)&&n===s.YES&&t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(r)}),r}function l(e,t,n){return o(e,n)}function u(e,t,n,r){var i=a(e,r);void 0!==i&&(t[n]=i)}var s,c,v=/\/items\/([^\/]+)\/resources\//,h=/^\.\/resources\//;function f(e){var t=(0,r.r)(e)?e.match(v):null;return(0,r.r)(t)?t[1]:null}function p(e,t){return t&&!t.isPortal&&t.urlKey&&t.customBaseUrl?(0,i.v)(e,"".concat(t.urlKey,".").concat(t.customBaseUrl),t.portalHostname):e}function d(e,t){if(!t||t.isPortal||!t.urlKey||!t.customBaseUrl)return e;var n="".concat(t.urlKey,".").concat(t.customBaseUrl),r=(0,i.b)();return(0,i.z)(r,"".concat(r.scheme,"://").concat(n))?(0,i.v)(e,t.portalHostname,n):(0,i.v)(e,n,t.portalHostname)}(c=s||(s={}))[c.YES=0]="YES",c[c.NO=1]="NO";var y=Object.freeze(Object.defineProperty({__proto__:null,fromJSON:o,toJSON:a,read:l,write:u,itemIdFromResourceUrl:f,ensureMainOnlineDomain:p,get MarkKeep(){return s}},Symbol.toStringTag,{value:"Module"}))},36551:function(e,t,n){n.d(t,{P:function(){return h},U:function(){return f},a:function(){return u},f:function(){return a},h:function(){return p},j:function(){return s},l:function(){return o},w:function(){return d}});var r=n(23132),i=n(75610);function o(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return l(e,t,n,c)}function a(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return l(e,t,n,v)}function l(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0,a=null,l=n.once?function(e,n){o(e)&&((0,i.d)(a),t(e,n))}:function(e,n){o(e)&&t(e,n)};if(a=(0,r.P)(e,l,n.sync,n.equals),n.initial){var u=e();l(u,u)}return a}function u(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},l=null,u=null,s=null;function c(){var e;l&&u&&(u.remove(),null!==(e=a.onListenerRemove)&&void 0!==e&&e.call(a,l),l=null,u=null)}function v(e){a.once&&a.once&&(0,i.d)(s),n(e)}var h=o(e,(function(e,n){var i;c(),(0,r.c)(e)&&(l=e,u=(0,r.f)(e,t,v),null===(i=a.onListenerAdd)||void 0===i||i.call(a,e))}),{sync:a.sync,initial:!0});return s=(0,r.g)((function(){h.remove(),c()}))}function s(e,t){return function(e,t,n){if((0,r.p)(n))return Promise.reject((0,r.m)());var o=e();if(null!==t&&void 0!==t&&t(o))return Promise.resolve(o);var a=null;function u(){a=(0,i.d)(a)}return new Promise((function(i,o){a=(0,r.h)([(0,r.v)(n,(function(){u(),o((0,r.m)())})),l(e,(function(e){u(),i(e)}),{sync:!1,once:!0},null!==t&&void 0!==t?t:c)])}))}(e,v,t)}function c(e){return!0}function v(e){return!!e}function h(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=!1,i=o(e,(function(e,n){r||t(e,n)}),n);return{remove:function(){i.remove()},pause:function(){r=!0},resume:function(){r=!1}}}var f={sync:!0},p={initial:!0},d={sync:!0,initial:!0}}}]);
//# sourceMappingURL=2975.c560784a.chunk.js.map