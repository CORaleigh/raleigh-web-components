"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[8771],{60470:function(e,t,n){n.d(t,{u:function(){return y}});var r=n(15671),i=n(43144),o=n(60136),a=n(29388),l=n(50165),u=n(40133),s=n(22984),c=n(17493),d=n(52155),p=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(e){var i;return(0,r.Z)(this,n),(i=t.call(this,e)).layer=null,i.parent=null,i}return(0,i.Z)(n,[{key:"initialize",value:function(){var e=this;this.when().catch((function(t){if("layerview:create-error"!==t.name){var n=e.layer&&e.layer.id||"no id",r=e.layer&&e.layer.title||"no title";l.s.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '".concat(r,"', id: '").concat(n,"')"),t)}}))}},{key:"fullOpacity",get:function(){return(0,l.af)(this.get("layer.opacity"),1)*(0,l.af)(this.get("parent.fullOpacity"),1)}},{key:"suspended",get:function(){return!this.canResume()}},{key:"suspendInfo",get:function(){return this.getSuspendInfo()}},{key:"legendEnabled",get:function(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}},{key:"updating",get:function(){var e;return!((null===(e=this.updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}},{key:"updatingProgress",get:function(){return this.updating?0:1}},{key:"visible",get:function(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}},{key:"canResume",value:function(){var e,t,n;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(n=this.view)||void 0===n?void 0:n.ready)||!1}},{key:"getSuspendInfo",value:function(){var e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}},{key:"isUpdating",value:function(){return!1}}]),n}((0,s.a)((0,c.s)((0,d.m)(u.n.EventedMixin(l.y)))));(0,l.e)([(0,l.d)()],p.prototype,"fullOpacity",null),(0,l.e)([(0,l.d)()],p.prototype,"layer",void 0),(0,l.e)([(0,l.d)()],p.prototype,"parent",void 0),(0,l.e)([(0,l.d)({readOnly:!0})],p.prototype,"suspended",null),(0,l.e)([(0,l.d)({readOnly:!0})],p.prototype,"suspendInfo",null),(0,l.e)([(0,l.d)({readOnly:!0})],p.prototype,"legendEnabled",null),(0,l.e)([(0,l.d)({type:Boolean,readOnly:!0})],p.prototype,"updating",null),(0,l.e)([(0,l.d)({readOnly:!0})],p.prototype,"updatingProgress",null),(0,l.e)([(0,l.d)()],p.prototype,"visible",null),(0,l.e)([(0,l.d)()],p.prototype,"view",void 0);var y=p=(0,l.e)([(0,l.n)("esri.views.layers.LayerView")],p)},41038:function(e,t,n){n.r(t);var r=n(15671),i=n(43144),o=n(60136),a=n(29388),l=n(50165),u=n(73627),s=n(33530),c=n(89031),d=n(22984),p=n(52155),y=n(13112),h=n(8184),v=n(53089),f=n(72629),g=n(29398),m=n(24695),I=n(60470),k=n(56389),w=(n(96263),n(77322),n(32335),n(31278),n(13994),n(98496),n(40133),n(4483),n(79747),n(42),n(75662),n(17493),n(62980),n(16377),n(9887),n(88406),n(66307),n(2760),n(42488),n(9330),n(79146),n(3029),n(42687),n(78330),n(78697),n(78664),n(69738),n(57686),n(76375),n(73428),n(80392),n(10489),n(62298),n(2815),n(2326),n(90339),n(83172),n(49961),n(31412),n(35691),n(83745),n(55269),n(73393),n(87110),n(72577),n(61772),n(92870),n(26079),n(49796),n(42094),n(85966),n(98643),n(61340),n(44217),n(5233),n(96401),n(71573),n(57952),n(15820),n(40438),n(48561),n(84192),n(3969),n(64747),n(47672),n(12317),n(20838),n(6243),n(37783),n(74021),n(56864),n(66339),n(68634),n(15508),n(17691),n(86931),n(51613),n(82046),n(66270),n(60418),n(84539),n(75366),n(36235),n(57439),n(59075),n(97823),n(49350),n(89354),n(16897),n(47642),n(63334),n(38419),n(84231),n(38665),n(32717),n(39853),n(94872),n(43895),n(30594),n(73267),n(22628),n(24982),n(46584),n(7093),n(28003),n(58428),n(8049),n(80933),n(40858),n(95076),n(33074),n(31134),n(41524),n(68668),n(55916),n(66319),n(24781),n(2329),n(37243),n(97345),n(39001),n(86738),n(69205),n(50338),n(84913),n(84823),n(9411),n(14826),n(64620),n(22225),n(75272),n(4197),n(86905),n(64997),n(26208),n(2816),n(46237),n(98428),n(5792),n(67871),n(75097),n(87833),n(21523),n(99057),n(26995),n(13445),n(57405),n(92694),n(25715),n(83262),n(7225),n(21286),n(47901),n(6819),n(12989),n(94867),n(47692),n(48968),n(92820),n(76821),n(21984),n(61377),n(64591),n(14023),n(44365),n(50463),n(27670),n(75105),n(49734),n(66156),n(62469),n(85490),n(77576),n(38969),n(8369),n(21277),n(80581),n(34095),n(85245),n(75777),n(68792),n(99797),n(49510),n(71871),n(3822),n(85273),n(28360),n(8180),n(43750),n(13089),n(55985),n(18392),n(97457),n(17704),n(45940),n(92637),n(62335),n(70146),n(35650),n(7513),n(29173),n(14739),n(7671),n(91403),n(43643),function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"getObjectId",value:function(){return this.objectId}}]),n}(c.g));(0,l.e)([(0,l.d)({type:Number,json:{read:!0}})],w.prototype,"objectId",void 0),w=(0,l.e)([(0,l.n)("esri.layers.graphics.controllers.StreamGraphic")],w);var _=function(){function e(t){(0,r.Z)(this,e),this.onUpdate=t,this._idToGraphic=new Map}return(0,i.Z)(e,[{key:"destroy",value:function(){this._idToGraphic.clear()}},{key:"add",value:function(e){this._idToGraphic.set(e.objectId,e)}},{key:"get",value:function(e){return this._idToGraphic.get(e)}},{key:"forEach",value:function(e){this._idToGraphic.forEach(e)}},{key:"removeById",value:function(e){var t=this._idToGraphic.get(e);return t?(t.sourceLayer=t.layer=null,this._idToGraphic.delete(e),t):null}},{key:"update",value:function(e,t){this.onUpdate(e,t)}},{key:"size",get:function(){return this._idToGraphic.size}}]),e}(),b=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(){var e;return(0,r.Z)(this,n),(e=t.apply(this,arguments))._updateInfo={websocket:0,client:0},e.graphics=new h.r,e}return(0,i.Z)(n,[{key:"initialize",value:function(){var e=this;this.addResolvingPromise(this.layer.when((function(){return e._startup()})))}},{key:"destroy",value:function(){this.clear()}},{key:"_clearInterval",value:function(){this._updateIntervalId&&(clearInterval(this._updateIntervalId),this._updateIntervalId=0)}},{key:"clear",value:function(){this._clearInterval(),this.connection&&(this.connection.destroy(),this.connection=null),this.store&&(this.store.destroy(),this.store=null),this.graphics.clear(),this.handles.removeAll()}},{key:"updating",get:function(){return!this.connection||"connected"===this.connection.connectionStatus}},{key:"_startup",value:function(){var e=this,t=this.layer,n=this.layerView,r=t.parsedUrl,i=t.spatialReference,o=t.definitionExpression,a=t.geometryDefinition,l=t.objectIdField,c=t.timeInfo,d=t.purgeOptions,p=t.maxReconnectionAttempts,h=t.maxReconnectionInterval,v=t.customParameters,f=s.a.toJSON(t.geometryType),g=i,m=n.view.spatialReference,I={geometry:a,where:o};this.clear(),this._set("connection",(0,y.t)(r,g,m,f,I,p,h,v)),this._outSpatialReference=m.toJSON(),this.store=new _(this._onUpdate.bind(this)),this.featuresManager=new y.h(this.store,l,c.toJSON(),d);var k="startup-watches";this.handles.remove(k),this.handles.add([this.connection.on("feature",(function(t){return e._onFeature(t)})),(0,u.l)((function(){return[t.definitionExpression,t.geometryDefinition,t.purgeOptions]}),(function(){return e._startup()}))],k),this._initUpdateInterval()}},{key:"_onFeature",value:function(e){this._updateInfo.websocket++,this.layerView.hasEventListener("data-received")&&this.layerView.emit("data-received",{attributes:e.attributes,centroid:e.centroid,geometry:e.geometry});try{(0,l.r)(e.geometry)&&!e.geometry.spatialReference&&(e.geometry.spatialReference=this._outSpatialReference);var t=w.fromJSON(e);t.sourceLayer=t.layer=this.layer,this.featuresManager.add(t)}catch(n){}}},{key:"_onUpdate",value:function(e,t){(0,l.r)(t)&&this.graphics.removeMany(t),(0,l.r)(e)&&(this._updateInfo.client+=e.length,this.graphics.addMany(e))}},{key:"_initUpdateInterval",value:function(){var e=this;this._clearInterval();var t=this.layer.updateInterval,n=performance.now();this._updateIntervalId=setInterval((function(){var t=performance.now(),r=t-n;if(r>2500){n=t;var i=Math.round(e._updateInfo.client/(r/1e3)),o=Math.round(e._updateInfo.websocket/(r/1e3));e._updateInfo.client=0,e._updateInfo.websocket=0,e.layerView.emit("update-rate",{client:i,websocket:o})}e.featuresManager.checkForUpdates()}),t)}},{key:"pauseStream",value:function(){this._clearInterval()}},{key:"resumeStream",value:function(){this._initUpdateInterval()}}]),n}((0,d.a)((0,p.m)(l.y)));(0,l.e)([(0,l.d)()],b.prototype,"connection",void 0),(0,l.e)([(0,l.d)()],b.prototype,"layer",void 0),(0,l.e)([(0,l.d)()],b.prototype,"layerView",void 0),(0,l.e)([(0,l.d)({readOnly:!0})],b.prototype,"updating",null),b=(0,l.e)([(0,l.n)("esri.layers.graphics.controllers.StreamController")],b);var O=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(){var e;return(0,r.Z)(this,n),(e=t.apply(this,arguments)).type="stream-3d",e.updatePolicy=m.o.ASYNC,e.hasZ=!0,e.hasM=!1,e}return(0,i.Z)(n,[{key:"initialize",value:function(){var e=this;this.handles.add((0,u.l)((function(){return e.suspended}),(function(t){e.controller&&(t?e.controller.pauseStream():e.controller.resumeStream())})))}},{key:"connectionError",get:function(){var e=this.get("controller.connection.errorString");if(e)return new l.a("stream-controller",e)}},{key:"createQuery",value:function(){return new v.b({outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference})}},{key:"queryLatestObservations",value:function(e,t){return this.queryEngine.executeQueryForLatestObservations(this._ensureQuery(e),null===t||void 0===t?void 0:t.signal)}},{key:"createController",value:function(){return new b({layer:this.layer,layerView:this})}},{key:"beforeSetController",value:function(){}}]),n}(function(e){var t=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(){var e;(0,r.Z)(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).connectionError=null,e.connectionStatus="disconnected",e.filter=null,e}return(0,i.Z)(n)}(e);return(0,l.e)([(0,l.d)({readOnly:!0})],t.prototype,"connectionError",void 0),(0,l.e)([(0,l.d)({aliasOf:"controller.connection.connectionStatus",readOnly:!0})],t.prototype,"connectionStatus",void 0),(0,l.e)([(0,l.d)({type:k.y})],t.prototype,"filter",void 0),t=(0,l.e)([(0,l.n)("esri.layers.mixins.StreamLayerView")],t)}((0,f.E)((0,g.n)(I.u))));(0,l.e)([(0,l.d)({readOnly:!0})],O.prototype,"updatePolicy",void 0),(0,l.e)([(0,l.d)({readOnly:!0})],O.prototype,"connectionError",null),(0,l.e)([(0,l.d)()],O.prototype,"controller",void 0),(0,l.e)([(0,l.d)({readOnly:!0})],O.prototype,"hasZ",void 0),(0,l.e)([(0,l.d)({readOnly:!0})],O.prototype,"hasM",void 0);var S=O=(0,l.e)([(0,l.n)("esri.views.3d.layers.StreamLayerView3D")],O);t.default=S},42814:function(e,t,n){function r(e){var t,n=e.layer;return"floorInfo"in n&&null!==(t=n.floorInfo)&&void 0!==t&&t.floorField&&"floors"in e.view?o(e.view.floors,n.floorInfo.floorField):null}function i(e,t){var n;return"floorInfo"in t&&null!==(n=t.floorInfo)&&void 0!==n&&n.floorField?o(e,t.floorInfo.floorField):null}function o(e,t){if(null===e||void 0===e||!e.length)return null;var n=e.filter((function(e){return""!==e})).map((function(e){return"'".concat(e,"'")}));return n.push("''"),"".concat(t," IN (").concat(n.join(","),") OR ").concat(t," IS NULL")}n.d(t,{n:function(){return i},o:function(){return r}})}}]);
//# sourceMappingURL=8771.9018432b.chunk.js.map