"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[3950],{91346:function(e,r,t){t.d(r,{s:function(){return c}});var a=t(15671),n=t(43144),i=t(60136),o=t(29388),l=t(50165),s=(t(33530),t(77322)),u=t(85914),c=function(e){var r=function(e){(0,i.Z)(t,e);var r=(0,o.Z)(t);function t(){var e;return(0,a.Z)(this,t),(e=r.apply(this,arguments)).copyright=null,e.minScale=0,e.maxScale=0,e.spatialReference=null,e.tileInfo=null,e.tilemapCache=null,e}return(0,n.Z)(t,[{key:"readMinScale",value:function(e,r){return null!=r.minLOD&&null!=r.maxLOD?e:0}},{key:"readMaxScale",value:function(e,r){return null!=r.minLOD&&null!=r.maxLOD?e:0}},{key:"supportsBlankTile",get:function(){return this.version>=10.2}},{key:"readTilemapCache",value:function(e,r){return r.capabilities&&r.capabilities.includes("Tilemap")?new u.z({layer:this}):null}}]),t}(e);return(0,l.e)([(0,l.d)({json:{read:{source:"copyrightText"}}})],r.prototype,"copyright",void 0),(0,l.e)([(0,l.d)()],r.prototype,"minScale",void 0),(0,l.e)([(0,s.o)("service","minScale")],r.prototype,"readMinScale",null),(0,l.e)([(0,l.d)()],r.prototype,"maxScale",void 0),(0,l.e)([(0,s.o)("service","maxScale")],r.prototype,"readMaxScale",null),(0,l.e)([(0,l.d)({type:s.k})],r.prototype,"spatialReference",void 0),(0,l.e)([(0,l.d)({readOnly:!0})],r.prototype,"supportsBlankTile",null),(0,l.e)([(0,l.d)(u.r)],r.prototype,"tileInfo",void 0),(0,l.e)([(0,l.d)()],r.prototype,"tilemapCache",void 0),(0,l.e)([(0,s.o)("service","tilemapCache",["capabilities"])],r.prototype,"readTilemapCache",null),(0,l.e)([(0,l.d)()],r.prototype,"version",void 0),r=(0,l.e)([(0,l.n)("esri.layers.mixins.ArcGISCachedService")],r)}},43950:function(e,r,t){t.r(r);var a=t(1413),n=t(15671),i=t(43144),o=t(60136),l=t(29388),s=t(50165),u=t(13994),c=t(22984),p=t(46584),d=t(77322),y=t(28003),v=t(58428),f=t(91346),h=t(78891),m=t(8049),g=t(40858),_=t(95076),S=t(33074),k=t(41524),T=t(55916),b=t(66319),w=t(80933),O=t(63334),Z=(t(69738),t(40133),t(73627),t(32335),t(33530),t(96263),t(31278),t(17493),t(78330),t(52155),t(85914),t(57405),t(73428),t(79146),t(2760),t(48561),t(32717),t(59075),t(12989),t(98428),t(98496),t(4483),t(79747),t(42),t(75662),t(49350),t(62980),t(16377),t(9887),t(88406),t(66307),t(42488),t(9330),t(3029),t(42687),t(78697),t(84539),t(89354),t(16897),t(47642),t(89031),t(78664),t(38419),t(84231),t(97823),t(38665),t(17691),t(39853),t(94872),t(3969),t(7093),t(37243),t(49961),t(31412),t(39001),t(86738),t(69205),t(50338),t(84913),t(53089),t(83172),t(14826),t(43634),t(36235),t(61340),t(5233),t(68668),t(61772),["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"]),C=function(e){(0,o.Z)(t,e);var r=(0,l.Z)(t);function t(){var e;(0,n.Z)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=r.call.apply(r,[this].concat(i))).listMode="show",e.isReference=null,e.operationalLayerType="ArcGISTiledMapServiceLayer",e.resampling=!0,e.sourceJSON=null,e.spatialReference=null,e.path=null,e.sublayers=null,e.type="tile",e.url=null,e}return(0,i.Z)(t,[{key:"normalizeCtorArgs",value:function(e,r){return"string"==typeof e?(0,a.Z)({url:e},r):e}},{key:"load",value:function(e){var r=this,t=(0,s.r)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(s._).then((function(){return r._fetchService(t)}))),Promise.resolve(this)}},{key:"attributionDataUrl",get:function(){var e,r=null===(e=this.parsedUrl)||void 0===e?void 0:e.path.toLowerCase();return r&&this._getDefaultAttribution(this._getMapName(r))}},{key:"readSpatialReference",value:function(e,r){return(e=e||r.tileInfo&&r.tileInfo.spatialReference)&&d.k.fromJSON(e)}},{key:"writeSublayers",value:function(e,r,t,n){if(this.loaded&&e){var i=e.slice().reverse().flatten((function(e){var r=e.sublayers;return r&&r.toArray().reverse()})).toArray(),o=[],l=(0,a.Z)({writeSublayerStructure:!1},n);i.forEach((function(e){var r=e.write({},l);o.push(r)})),o.some((function(e){return Object.keys(e).length>1}))&&(r.layers=o)}}},{key:"tileServers",get:function(){return this._getDefaultTileServers(this.parsedUrl.path)}},{key:"castTileServers",value:function(e){return Array.isArray(e)?e.map((function(e){return(0,u.j)(e).path})):null}},{key:"fetchTile",value:function(e,r,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=n.signal,o=this.getTileUrl(e,r,t),l={responseType:"image",signal:i,query:(0,a.Z)({},this.refreshParameters)};return(0,u.U)(o,l).then((function(e){return e.data}))}},{key:"getTileUrl",value:function(e,r,t){var n=!this.tilemapCache&&this.supportsBlankTile,i=(0,u.h)((0,a.Z)((0,a.Z)((0,a.Z)({},this.parsedUrl.query),{},{blankTile:!n&&null},this.customParameters),{},{token:this.apiKey})),o=this.tileServers;return"".concat(o&&o.length?o[r%o.length]:this.parsedUrl.path,"/tile/").concat(e,"/").concat(r,"/").concat(t).concat(i?"?"+i:"")}},{key:"_fetchService",value:function(e){var r=this;return new Promise((function(t,n){if(r.sourceJSON){if(null!=r.sourceJSON.bandCount&&null!=r.sourceJSON.pixelSizeX)throw new s.a("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");t({data:r.sourceJSON})}else{if(!r.parsedUrl)throw new s.a("tile-layer:undefined-url","layer's url is not defined");var i=(0,w.m)(r.parsedUrl.path);if((0,s.r)(i)&&"ImageServer"===i.serverType)throw new s.a("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");(0,u.U)(r.parsedUrl.path,{query:(0,a.Z)((0,a.Z)((0,a.Z)({f:"json"},r.parsedUrl.query),r.customParameters),{},{token:r.apiKey}),responseType:"json",signal:e}).then(t,n)}})).then((function(t){if(t.ssl&&(r.url=r.url.replace(/^http:/i,"https:")),r.sourceJSON=t.data,r.read(t.data,{origin:"service",url:r.parsedUrl}),10.1===r.version&&!(0,w.g)(r.url))return r._fetchServerVersion(r.url,e).then((function(e){r.read({currentVersion:e})})).catch((function(){}))}))}},{key:"_fetchServerVersion",value:function(e,r){if(!(0,w.d)(e))return Promise.reject();var t=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return(0,u.U)(t,{query:(0,a.Z)((0,a.Z)({f:"json"},this.customParameters),{},{token:this.apiKey}),responseType:"json",signal:r}).then((function(e){if(e.data&&e.data.currentVersion)return e.data.currentVersion;throw new s.a("tile-layer:version-not-available")}))}},{key:"_getMapName",value:function(e){var r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r&&r[2]}},{key:"_getDefaultAttribution",value:function(e){if(e){var r;e=e.toLowerCase();for(var t=0,a=Z.length;t<a;t++)if((r=Z[t]).toLowerCase().includes(e))return(0,u.Q)("//static.arcgis.com/attribution/"+r)}}},{key:"_getDefaultTileServers",value:function(e){var r=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),t=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}},{key:"hasOverriddenFetchTile",get:function(){return!this.fetchTile.__isDefault__}}]),t}((0,g.a)((0,h.E)((0,b.t)((0,S.c)((0,k.v)((0,f.s)((0,h.y)((0,m.p)((0,p.O)((0,c.a)((0,T.n)((0,v.i)((0,_.o)(y.b))))))))))))));(0,s.e)([(0,s.d)({readOnly:!0})],C.prototype,"attributionDataUrl",null),(0,s.e)([(0,s.d)({type:["show","hide","hide-children"]})],C.prototype,"listMode",void 0),(0,s.e)([(0,s.d)({json:{read:!0,write:!0}})],C.prototype,"blendMode",void 0),(0,s.e)([(0,s.d)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],C.prototype,"isReference",void 0),(0,s.e)([(0,s.d)({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],C.prototype,"operationalLayerType",void 0),(0,s.e)([(0,s.d)({type:Boolean})],C.prototype,"resampling",void 0),(0,s.e)([(0,s.d)()],C.prototype,"sourceJSON",void 0),(0,s.e)([(0,s.d)({type:d.k})],C.prototype,"spatialReference",void 0),(0,s.e)([(0,d.o)("spatialReference",["spatialReference","tileInfo"])],C.prototype,"readSpatialReference",null),(0,s.e)([(0,s.d)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],C.prototype,"path",void 0),(0,s.e)([(0,s.d)({readOnly:!0})],C.prototype,"sublayers",void 0),(0,s.e)([(0,d.r)("sublayers",{layers:{type:[h.X]}})],C.prototype,"writeSublayers",null),(0,s.e)([(0,s.d)({json:{read:!1,write:!1}})],C.prototype,"popupEnabled",void 0),(0,s.e)([(0,s.d)()],C.prototype,"tileServers",null),(0,s.e)([(0,s.H)("tileServers")],C.prototype,"castTileServers",null),(0,s.e)([(0,s.d)({readOnly:!0,json:{read:!1}})],C.prototype,"type",void 0),(0,s.e)([(0,s.d)(O.f)],C.prototype,"url",void 0),(C=(0,s.e)([(0,s.n)("esri.layers.TileLayer")],C)).prototype.fetchTile.__isDefault__=!0;var R=C;r.default=R}}]);
//# sourceMappingURL=3950.8709767f.chunk.js.map