"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[6641],{5900:function(e,t,n){n.d(t,{u:function(){return h}});var r=n(15671),i=n(43144),o=n(60136),a=n(29388),l=n(23132),u=n(80175),s=n(97033),c=n(77196),d=n(75610),p=n(43920),y=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(e){var i;return(0,r.Z)(this,n),(i=t.call(this,e)).layer=null,i.parent=null,i}return(0,i.Z)(n,[{key:"initialize",value:function(){var e=this;this.when().catch((function(t){if("layerview:create-error"!==t.name){var n=e.layer&&e.layer.id||"no id",r=e.layer&&e.layer.title||"no title";l.s.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '".concat(r,"', id: '").concat(n,"')"),t)}}))}},{key:"fullOpacity",get:function(){return(0,d.n)(this.get("layer.opacity"),1)*(0,d.n)(this.get("parent.fullOpacity"),1)}},{key:"suspended",get:function(){return!this.canResume()}},{key:"suspendInfo",get:function(){return this.getSuspendInfo()}},{key:"legendEnabled",get:function(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}},{key:"updating",get:function(){var e;return!((null===(e=this.updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}},{key:"updatingProgress",get:function(){return this.updating?0:1}},{key:"visible",get:function(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}},{key:"canResume",value:function(){var e,t,n;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(n=this.view)||void 0===n?void 0:n.ready)||!1}},{key:"getSuspendInfo",value:function(){var e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}},{key:"isUpdating",value:function(){return!1}}]),n}((0,s.a)((0,c.s)((0,p.m)(u.n.EventedMixin(l.y)))));(0,l.e)([(0,l.d)()],y.prototype,"fullOpacity",null),(0,l.e)([(0,l.d)()],y.prototype,"layer",void 0),(0,l.e)([(0,l.d)()],y.prototype,"parent",void 0),(0,l.e)([(0,l.d)({readOnly:!0})],y.prototype,"suspended",null),(0,l.e)([(0,l.d)({readOnly:!0})],y.prototype,"suspendInfo",null),(0,l.e)([(0,l.d)({readOnly:!0})],y.prototype,"legendEnabled",null),(0,l.e)([(0,l.d)({type:Boolean,readOnly:!0})],y.prototype,"updating",null),(0,l.e)([(0,l.d)({readOnly:!0})],y.prototype,"updatingProgress",null),(0,l.e)([(0,l.d)()],y.prototype,"visible",null),(0,l.e)([(0,l.d)()],y.prototype,"view",void 0);var h=y=(0,l.e)([(0,l.n)("esri.views.layers.LayerView")],y)},23010:function(e,t,n){n.r(t);var r=n(15671),i=n(43144),o=n(60136),a=n(29388),l=n(23132),u=n(36551),s=n(75610),c=n(91204),d=n(83822),p=n(97033),y=n(43920),h=n(53804),v=n(46805),f=n(34860),g=n(52275),m=n(3964),I=n(45414),k=n(5900),w=n(25838),_=(n(21583),n(80262),n(30709),n(70441),n(36460),n(57714),n(51451),n(80175),n(50526),n(50448),n(41742),n(1773),n(77196),n(24980),n(3114),n(22144),n(78674),n(66307),n(2760),n(88370),n(72820),n(78311),n(96349),n(9055),n(79611),n(2157),n(30604),n(77470),n(17802),n(69953),n(44455),n(27597),n(1241),n(67417),n(15181),n(33642),n(28999),n(36638),n(43124),n(69797),n(58687),n(10815),n(55269),n(84538),n(49580),n(54841),n(33703),n(92870),n(6794),n(81663),n(83996),n(63022),n(61340),n(97627),n(38304),n(96401),n(71573),n(57952),n(58394),n(44344),n(48561),n(84192),n(3969),n(55806),n(47672),n(64296),n(14432),n(6243),n(37783),n(74021),n(56864),n(64004),n(40273),n(72692),n(77389),n(32568),n(69202),n(15612),n(10590),n(19948),n(96636),n(30664),n(83024),n(47626),n(25316),n(407),n(67154),n(79054),n(29709),n(47642),n(18411),n(43782),n(33976),n(28210),n(17436),n(53373),n(94872),n(79042),n(61495),n(16485),n(92029),n(74575),n(9575),n(53249),n(72763),n(28681),n(38929),n(97866),n(68890),n(31513),n(28623),n(10312),n(95254),n(61099),n(12158),n(93874),n(62446),n(27264),n(50905),n(78945),n(55827),n(54539),n(19967),n(50338),n(70516),n(25279),n(22268),n(40452),n(60424),n(22225),n(38425),n(42471),n(78470),n(1665),n(38843),n(24892),n(48889),n(30150),n(53647),n(14181),n(86270),n(87833),n(21523),n(71710),n(45332),n(83059),n(4720),n(91309),n(25715),n(83262),n(2822),n(61349),n(32990),n(6819),n(52376),n(94867),n(97566),n(90138),n(50982),n(21165),n(21984),n(48373),n(61473),n(14946),n(44365),n(90584),n(86148),n(60912),n(98907),n(66156),n(10534),n(25459),n(78556),n(77787),n(85511),n(87603),n(22051),n(21924),n(46123),n(75777),n(76071),n(42446),n(59819),n(64571),n(29009),n(2301),n(84452),n(63662),n(86068),n(75370),n(62268),n(18392),n(90935),n(20880),n(73554),n(81019),n(68826),n(61212),n(83712),n(7513),n(75955),n(14739),n(10780),n(86548),n(91034),function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"getObjectId",value:function(){return this.objectId}}]),n}(d.g));(0,l.e)([(0,l.d)({type:Number,json:{read:!0}})],_.prototype,"objectId",void 0),_=(0,l.e)([(0,l.n)("esri.layers.graphics.controllers.StreamGraphic")],_);var b=function(){function e(t){(0,r.Z)(this,e),this.onUpdate=t,this._idToGraphic=new Map}return(0,i.Z)(e,[{key:"destroy",value:function(){this._idToGraphic.clear()}},{key:"add",value:function(e){this._idToGraphic.set(e.objectId,e)}},{key:"get",value:function(e){return this._idToGraphic.get(e)}},{key:"forEach",value:function(e){this._idToGraphic.forEach(e)}},{key:"removeById",value:function(e){var t=this._idToGraphic.get(e);return t?(t.sourceLayer=t.layer=null,this._idToGraphic.delete(e),t):null}},{key:"update",value:function(e,t){this.onUpdate(e,t)}},{key:"size",get:function(){return this._idToGraphic.size}}]),e}(),O=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(){var e;return(0,r.Z)(this,n),(e=t.apply(this,arguments))._updateInfo={websocket:0,client:0},e.graphics=new v.r,e}return(0,i.Z)(n,[{key:"initialize",value:function(){var e=this;this.addResolvingPromise(this.layer.when((function(){return e._startup()})))}},{key:"destroy",value:function(){this.clear()}},{key:"_clearInterval",value:function(){this._updateIntervalId&&(clearInterval(this._updateIntervalId),this._updateIntervalId=0)}},{key:"clear",value:function(){this._clearInterval(),this.connection&&(this.connection.destroy(),this.connection=null),this.store&&(this.store.destroy(),this.store=null),this.graphics.clear(),this.handles.removeAll()}},{key:"updating",get:function(){return!this.connection||"connected"===this.connection.connectionStatus}},{key:"_startup",value:function(){var e=this,t=this.layer,n=this.layerView,r=t.parsedUrl,i=t.spatialReference,o=t.definitionExpression,a=t.geometryDefinition,l=t.objectIdField,s=t.timeInfo,d=t.purgeOptions,p=t.maxReconnectionAttempts,y=t.maxReconnectionInterval,v=t.customParameters,f=c.a.toJSON(t.geometryType),g=i,m=n.view.spatialReference,I={geometry:a,where:o};this.clear(),this._set("connection",(0,h.t)(r,g,m,f,I,p,y,v)),this._outSpatialReference=m.toJSON(),this.store=new b(this._onUpdate.bind(this)),this.featuresManager=new h.h(this.store,l,s.toJSON(),d);var k="startup-watches";this.handles.remove(k),this.handles.add([this.connection.on("feature",(function(t){return e._onFeature(t)})),(0,u.l)((function(){return[t.definitionExpression,t.geometryDefinition,t.purgeOptions]}),(function(){return e._startup()}))],k),this._initUpdateInterval()}},{key:"_onFeature",value:function(e){this._updateInfo.websocket++,this.layerView.hasEventListener("data-received")&&this.layerView.emit("data-received",{attributes:e.attributes,centroid:e.centroid,geometry:e.geometry});try{(0,s.r)(e.geometry)&&!e.geometry.spatialReference&&(e.geometry.spatialReference=this._outSpatialReference);var t=_.fromJSON(e);t.sourceLayer=t.layer=this.layer,this.featuresManager.add(t)}catch(n){}}},{key:"_onUpdate",value:function(e,t){(0,s.r)(t)&&this.graphics.removeMany(t),(0,s.r)(e)&&(this._updateInfo.client+=e.length,this.graphics.addMany(e))}},{key:"_initUpdateInterval",value:function(){var e=this;this._clearInterval();var t=this.layer.updateInterval,n=performance.now();this._updateIntervalId=setInterval((function(){var t=performance.now(),r=t-n;if(r>2500){n=t;var i=Math.round(e._updateInfo.client/(r/1e3)),o=Math.round(e._updateInfo.websocket/(r/1e3));e._updateInfo.client=0,e._updateInfo.websocket=0,e.layerView.emit("update-rate",{client:i,websocket:o})}e.featuresManager.checkForUpdates()}),t)}},{key:"pauseStream",value:function(){this._clearInterval()}},{key:"resumeStream",value:function(){this._initUpdateInterval()}}]),n}((0,p.a)((0,y.m)(l.y)));(0,l.e)([(0,l.d)()],O.prototype,"connection",void 0),(0,l.e)([(0,l.d)()],O.prototype,"layer",void 0),(0,l.e)([(0,l.d)()],O.prototype,"layerView",void 0),(0,l.e)([(0,l.d)({readOnly:!0})],O.prototype,"updating",null),O=(0,l.e)([(0,l.n)("esri.layers.graphics.controllers.StreamController")],O);var S=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(){var e;return(0,r.Z)(this,n),(e=t.apply(this,arguments)).type="stream-3d",e.updatePolicy=I.o.ASYNC,e.hasZ=!0,e.hasM=!1,e}return(0,i.Z)(n,[{key:"initialize",value:function(){var e=this;this.handles.add((0,u.l)((function(){return e.suspended}),(function(t){e.controller&&(t?e.controller.pauseStream():e.controller.resumeStream())})))}},{key:"connectionError",get:function(){var e=this.get("controller.connection.errorString");if(e)return new l.a("stream-controller",e)}},{key:"createQuery",value:function(){return new f.b({outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference})}},{key:"queryLatestObservations",value:function(e,t){return this.queryEngine.executeQueryForLatestObservations(this._ensureQuery(e),null===t||void 0===t?void 0:t.signal)}},{key:"createController",value:function(){return new O({layer:this.layer,layerView:this})}},{key:"beforeSetController",value:function(){}}]),n}(function(e){var t=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(){var e;(0,r.Z)(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).connectionError=null,e.connectionStatus="disconnected",e.filter=null,e}return(0,i.Z)(n)}(e);return(0,l.e)([(0,l.d)({readOnly:!0})],t.prototype,"connectionError",void 0),(0,l.e)([(0,l.d)({aliasOf:"controller.connection.connectionStatus",readOnly:!0})],t.prototype,"connectionStatus",void 0),(0,l.e)([(0,l.d)({type:w.y})],t.prototype,"filter",void 0),t=(0,l.e)([(0,l.n)("esri.layers.mixins.StreamLayerView")],t)}((0,g.E)((0,m.n)(k.u))));(0,l.e)([(0,l.d)({readOnly:!0})],S.prototype,"updatePolicy",void 0),(0,l.e)([(0,l.d)({readOnly:!0})],S.prototype,"connectionError",null),(0,l.e)([(0,l.d)()],S.prototype,"controller",void 0),(0,l.e)([(0,l.d)({readOnly:!0})],S.prototype,"hasZ",void 0),(0,l.e)([(0,l.d)({readOnly:!0})],S.prototype,"hasM",void 0);var Z=S=(0,l.e)([(0,l.n)("esri.views.3d.layers.StreamLayerView3D")],S);t.default=Z},42814:function(e,t,n){function r(e){var t,n=e.layer;return"floorInfo"in n&&null!==(t=n.floorInfo)&&void 0!==t&&t.floorField&&"floors"in e.view?o(e.view.floors,n.floorInfo.floorField):null}function i(e,t){var n;return"floorInfo"in t&&null!==(n=t.floorInfo)&&void 0!==n&&n.floorField?o(e,t.floorInfo.floorField):null}function o(e,t){if(null===e||void 0===e||!e.length)return null;var n=e.filter((function(e){return""!==e})).map((function(e){return"'".concat(e,"'")}));return n.push("''"),"".concat(t," IN (").concat(n.join(","),") OR ").concat(t," IS NULL")}n.d(t,{n:function(){return i},o:function(){return r}})}}]);
//# sourceMappingURL=6641.205909c3.chunk.js.map