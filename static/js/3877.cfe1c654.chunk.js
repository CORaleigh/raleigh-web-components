"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[3877],{60470:function(e,t,n){n.d(t,{u:function(){return d}});var r=n(15671),i=n(43144),a=n(60136),l=n(29388),o=n(50165),s=n(40133),u=n(22984),c=n(17493),p=n(52155),f=function(e){(0,a.Z)(n,e);var t=(0,l.Z)(n);function n(e){var i;return(0,r.Z)(this,n),(i=t.call(this,e)).layer=null,i.parent=null,i}return(0,i.Z)(n,[{key:"initialize",value:function(){var e=this;this.when().catch((function(t){if("layerview:create-error"!==t.name){var n=e.layer&&e.layer.id||"no id",r=e.layer&&e.layer.title||"no title";o.s.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '".concat(r,"', id: '").concat(n,"')"),t)}}))}},{key:"fullOpacity",get:function(){return(0,o.af)(this.get("layer.opacity"),1)*(0,o.af)(this.get("parent.fullOpacity"),1)}},{key:"suspended",get:function(){return!this.canResume()}},{key:"suspendInfo",get:function(){return this.getSuspendInfo()}},{key:"legendEnabled",get:function(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}},{key:"updating",get:function(){var e;return!((null===(e=this.updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}},{key:"updatingProgress",get:function(){return this.updating?0:1}},{key:"visible",get:function(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}},{key:"canResume",value:function(){var e,t,n;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(n=this.view)||void 0===n?void 0:n.ready)||!1}},{key:"getSuspendInfo",value:function(){var e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}},{key:"isUpdating",value:function(){return!1}}]),n}((0,u.a)((0,c.s)((0,p.m)(s.n.EventedMixin(o.y)))));(0,o.e)([(0,o.d)()],f.prototype,"fullOpacity",null),(0,o.e)([(0,o.d)()],f.prototype,"layer",void 0),(0,o.e)([(0,o.d)()],f.prototype,"parent",void 0),(0,o.e)([(0,o.d)({readOnly:!0})],f.prototype,"suspended",null),(0,o.e)([(0,o.d)({readOnly:!0})],f.prototype,"suspendInfo",null),(0,o.e)([(0,o.d)({readOnly:!0})],f.prototype,"legendEnabled",null),(0,o.e)([(0,o.d)({type:Boolean,readOnly:!0})],f.prototype,"updating",null),(0,o.e)([(0,o.d)({readOnly:!0})],f.prototype,"updatingProgress",null),(0,o.e)([(0,o.d)()],f.prototype,"visible",null),(0,o.e)([(0,o.d)()],f.prototype,"view",void 0);var d=f=(0,o.e)([(0,o.n)("esri.views.layers.LayerView")],f)},29398:function(e,t,n){n.d(t,{n:function(){return h}});var r=n(74165),i=n(15861),a=n(15671),l=n(43144),o=n(11752),s=n(61120),u=n(60136),c=n(29388),p=n(50165),f=n(73627),d=n(75097),h=function(e){var t=function(e){(0,u.Z)(n,e);var t=(0,c.Z)(n);function n(){var e;return(0,a.Z)(this,n),(e=t.apply(this,arguments)).slicePlaneEnabled=!1,e.supportsHeightUnitConversion=!1,e}return(0,l.Z)(n,[{key:"postscript",value:function(e){(0,o.Z)((0,s.Z)(n.prototype),"postscript",this).call(this,e),(0,d.g)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}},{key:"_validateHeightModelInfo",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t,n,i,a=this;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new AbortController,n=t.signal,this.handles.add((0,p.p)((function(){return t.abort()}))),e.next=4,(0,f.j)((function(){var e;return null===(e=a.view.defaultsFromMap)||void 0===e?void 0:e.heightModelInfoReady}),n);case 4:if((0,p.W)(n),!(i=(0,d.o)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion))){e.next=8;break}throw i;case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"canResume",value:function(){var e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return(0,o.Z)((0,s.Z)(n.prototype),"canResume",this).call(this)&&(!e||!e.minScale||!e.maxScale||e.minScale>=e.maxScale)}},{key:"getSuspendInfo",value:function(){var e=(0,o.Z)((0,s.Z)(n.prototype),"getSuspendInfo",this).call(this),t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return t&&t.minScale&&t.maxScale&&t.minScale<t.maxScale&&(e.outsideScaleRange=!0),e}}]),n}(e);return(0,p.e)([(0,p.d)()],t.prototype,"view",void 0),(0,p.e)([(0,p.d)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,p.e)([(0,p.n)("esri.views.3d.layers.LayerView3D")],t)}},1894:function(e,t,n){n.d(t,{i:function(){return u}});var r=n(15671),i=n(43144),a=n(60136),l=n(29388),o=n(50165),s=n(73627),u=function(e){var t=function(e){(0,a.Z)(n,e);var t=(0,l.Z)(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"initialize",value:function(){var e=this;this.handles.add((0,s.a)((function(){return e.layer}),"refresh",(function(t){e.doRefresh(t.dataChanged).catch((function(t){(0,o.I)(t)||o.s.getLogger(e.declaredClass).error(t)}))})),"RefreshableLayerView")}}]),n}(e);return(0,o.e)([(0,o.d)()],t.prototype,"layer",void 0),t=(0,o.e)([(0,o.n)("esri.layers.mixins.RefreshableLayerView")],t)}},96272:function(e,t,n){n.d(t,{i:function(){return f}});var r=n(93433),i=n(74165),a=n(15861),l=n(15671),o=n(43144),s=n(60136),u=n(29388),c=n(50165),p=n(41513),f=function(e){var t=function(e){(0,s.Z)(n,e);var t=(0,u.Z)(n);function n(){return(0,l.Z)(this,n),t.apply(this,arguments)}return(0,o.Z)(n,[{key:"fetchPopupFeatures",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t,n){var l,o,s,u=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=this.layer,t){e.next=3;break}throw new c.a("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:l});case 3:if("tile"===l.type){e.next=5;break}throw new c.a("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:l.type});case 5:return o=this.get("view.scale"),s=l.allSublayers.toArray().filter((function(e){var t=0===e.minScale||o<=e.minScale,n=0===e.maxScale||o>=e.maxScale;return e.popupTemplate&&e.popupEnabled&&e.visible&&t&&n})),e.abrupt("return",(0,c.E)(s.map(function(){var e=(0,a.Z)((0,i.Z)().mark((function e(r){var a,l,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.createQuery(),l=(0,c.r)(n)?n.event:null,o=(0,p.s)({renderer:r.renderer,event:l}),a.geometry=u.createFetchPopupFeaturesQueryGeometry(t,o),e.next=4,r.popupTemplate.getRequiredFields();case 4:return a.outFields=e.sent,e.next=7,r.queryFeatures(a);case 7:return e.abrupt("return",e.sent.features);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).then((function(e){var t;return(t=[]).concat.apply(t,(0,r.Z)(e.map((function(e){return e.value})).filter(Boolean)))})));case 7:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),n}(e);return(0,c.e)([(0,c.d)()],t.prototype,"layer",void 0),t=(0,c.e)([(0,c.n)("esri.layers.mixins.TileLayerView")],t)}},53877:function(e,t,n){n.r(t);var r=n(74165),i=n(15861),a=n(15671),l=n(43144),o=n(60136),s=n(29388),u=n(50165),c=n(98643),p=n(29398),f=n(2979),d=n(60470),h=n(1894),y=n(96272),v=n(12736),m=(n(2760),n(73428),n(13994),n(77322),n(32335),n(40133),n(61340),n(96263),n(31278),n(61772),n(79146),n(76375),n(73627),n(75097),n(85966),n(80933),n(3029),n(35691),n(83745),n(78697),n(55269),n(33530),n(78664),n(89031),n(98496),n(4483),n(79747),n(42),n(52155),n(75662),n(17493),n(62980),n(16377),n(9887),n(88406),n(66307),n(42488),n(9330),n(42687),n(78330),n(73393),n(87110),n(72577),n(69738),n(92870),n(26079),n(49796),n(42094),n(22984),n(44217),n(5233),n(96401),n(71573),n(57952),n(15820),n(40438),n(48561),n(84192),n(3969),n(64747),n(47672),n(12317),n(20838),n(6243),n(37783),n(74021),n(56864),n(66339),n(68634),n(15508),n(17691),n(86931),n(51613),n(80392),n(10489),n(62298),n(2815),n(2326),n(90339),n(82046),n(49961),n(31412),n(53089),n(83172),n(66270),n(60418),n(84539),n(75366),n(36235),n(57439),n(59075),n(97823),n(49350),n(89354),n(16897),n(47642),n(63334),n(38419),n(84231),n(38665),n(32717),n(39853),n(94872),n(43895),n(30594),n(73267),n(22628),n(24982),n(46584),n(7093),n(28003),n(58428),n(8049),n(40858),n(95076),n(56389),n(86738),n(69205),n(50338),n(33074),n(31134),n(41524),n(68668),n(55916),n(66319),n(24781),n(2329),n(37243),n(97345),n(39001),n(84913),n(84823),n(9411),n(14826),n(64620),n(22225),n(75272),n(4197),n(86905),n(64997),n(26208),n(2816),n(46237),n(98428),n(5792),n(67871),n(87833),n(21523),n(99057),n(26995),n(13445),n(57405),n(92694),n(25715),n(83262),n(7225),n(21286),n(47901),n(6819),n(12989),n(24695),n(94867),n(47692),n(48968),n(92820),n(76821),n(21984),n(61377),n(64591),n(14023),n(44365),n(50463),n(27670),n(75105),n(49734),n(66156),n(62469),n(85490),n(77576),n(38969),n(8369),n(21277),n(80581),n(34095),n(85245),n(75777),n(68792),n(99797),n(49510),n(71871),function(e){(0,o.Z)(n,e);var t=(0,s.Z)(n);function n(){var e;return(0,a.Z)(this,n),(e=t.apply(this,arguments)).type="tile-3d",e}return(0,l.Z)(n,[{key:"imageFormatIsOpaque",get:function(){return"jpg"===this.layer.tileInfo.format}},{key:"hasMixedImageFormats",get:function(){return"mixed"===this.layer.tileInfo.format}},{key:"dataLevelRange",get:function(){if(this.tileInfo){var e=this.tileInfo.lods,t=e[0].scale,n=e[e.length-1].scale;return this.levelRangeFromScaleRange(t,n)}return{minLevel:0,maxLevel:0}}},{key:"initialize",value:function(){if("web-tile"===this.layer.type){var e=this.layer.get("fullExtent.spatialReference"),t=this.layer.get("tileInfo.spatialReference");if((0,u.t)(e)||(0,u.t)(t)||!(0,c.A)(e,t)){var n="defaults"===this.layer.originOf("fullExtent")||(0,u.t)(this.layer.fullExtent)?"SceneView requires fullExtent to be specified by the user on WebTileLayer":"SceneView requires fullExtent to be specified in the same spatial reference as tileInfo on WebTileLayer";this.addResolvingPromise(Promise.reject(new u.a("layerview:incompatible-fullextent",n)))}}this._addTilingSchemeMatchPromise()}},{key:"createFetchPopupFeaturesQueryGeometry",value:function(e,t){return(0,v.a)(e,t,this.view)}},{key:"doRefresh",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.suspended||this.emit("data-changed");case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),n}((0,h.i)((0,f.c)((0,y.i)((0,p.n)(d.u))))));(0,u.e)([(0,u.d)({readOnly:!0})],m.prototype,"imageFormatIsOpaque",null),(0,u.e)([(0,u.d)({readOnly:!0})],m.prototype,"hasMixedImageFormats",null),(0,u.e)([(0,u.d)()],m.prototype,"layer",void 0),(0,u.e)([(0,u.d)({readOnly:!0,aliasOf:"layer.tileInfo"})],m.prototype,"tileInfo",void 0),(0,u.e)([(0,u.d)({readOnly:!0})],m.prototype,"dataLevelRange",null);var g=m=(0,u.e)([(0,u.n)("esri.views.3d.layers.TileLayerView3D")],m);t.default=g},2979:function(e,t,n){n.d(t,{c:function(){return c}});var r=n(15671),i=n(43144),a=n(60136),l=n(29388),o=n(50165),s=n(73627),u=n(35691),c=function(e){var t=function(e){(0,a.Z)(n,e);var t=(0,l.Z)(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"imageFormatIsOpaque",get:function(){return!1}},{key:"fullExtent",get:function(){return this.layer.fullExtent}},{key:"isOpaque",get:function(){return this.fullOpacity>=1&&this.imageFormatIsOpaque}},{key:"dataLevelRange",get:function(){var e=this.tileInfo.lods,t=e[0].scale,n=e[e.length-1].scale;return this.levelRangeFromScaleRange(t,n)}},{key:"displayLevelRange",get:function(){var e=this.tileInfo.lods,t=this.layer.minScale||e[0].scale,n=this.layer.maxScale||e[e.length-1].scale,r=this.levelRangeFromScaleRange(t,n);return this.layer.maxScale&&r.maxLevel++,r}},{key:"getTileUrl",value:function(e,t,n){return this.layer.getTileUrl(e,t,n)}},{key:"_addTilingSchemeMatchPromise",value:function(){var e=this;if((0,o.t)(this.fullExtent))return this.addResolvingPromise(Promise.reject(new o.a("tilingscheme:extent-not-defined","This layer doesn't define a fullExtent.")));var t=this._getTileInfoSupportError(this.tileInfo,this.fullExtent);if((0,o.r)(t))return this.addResolvingPromise(Promise.reject(t));var n=(0,s.j)((function(){var t,n;return null===(t=e.view)||void 0===t||null===(n=t.basemapTerrain)||void 0===n?void 0:n.tilingSchemeLocked})).then((function(){var t=e.view.basemapTerrain.tilingScheme,n=e._getTileInfoCompatibilityError(e.tileInfo,t);if(n)throw n}));this.addResolvingPromise(n)}},{key:"_getTileInfoSupportError",value:function(e,t){var n=(0,u.L)(e,t,this.view.spatialReference,this.view.state.viewingMode);if(n){var r,i={layer:this.layer,error:n};switch(n.name){case"tilingscheme:spatial-reference-mismatch":case"tilingscheme:global-unsupported-spatial-reference":case"tilingscheme:local-unsupported-spatial-reference":r=new o.a("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",i);break;default:r=new o.a("layerview:tiling-scheme-unsupported","The tiling scheme of this layer is not supported by SceneView",i)}return r}return null}},{key:"_getTileInfoCompatibilityError",value:function(e,t){return t.compatibleWith(e)?null:new o.a("layerview:tiling-scheme-incompatible","The tiling scheme of this layer is incompatible with the tiling scheme of the surface")}},{key:"levelRangeFromScaleRange",value:function(e,t){var n={minLevel:0,maxLevel:1/0},r=this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.tilingScheme;if(!r)return n;var i=r.levels[0],a=function(e){var t=Math.log(i.scale/e)/Math.LN2;return.5-Math.abs(.5-t%1)<1e-9?Math.round(t):Math.ceil(t)};return null!=e&&e>0&&(n.minLevel=Math.max(0,a(e))),null!=t&&t>0&&(n.maxLevel=Math.max(0,a(t))),n}},{key:"isUpdating",value:function(){return!!(this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.updating)}}]),n}(e);return(0,o.e)([(0,o.d)({readOnly:!0})],t.prototype,"imageFormatIsOpaque",null),(0,o.e)([(0,o.d)({readOnly:!0})],t.prototype,"updating",void 0),(0,o.e)([(0,o.d)(u.t)],t.prototype,"updatingProgress",void 0),(0,o.e)([(0,o.d)(u.u)],t.prototype,"updatingProgressValue",void 0),(0,o.e)([(0,o.d)()],t.prototype,"fullExtent",null),(0,o.e)([(0,o.d)({readOnly:!0})],t.prototype,"isOpaque",null),(0,o.e)([(0,o.d)({readOnly:!0})],t.prototype,"dataLevelRange",null),(0,o.e)([(0,o.d)({readOnly:!0})],t.prototype,"displayLevelRange",null),(0,o.e)([(0,o.d)()],t.prototype,"layer",void 0),(0,o.e)([(0,o.d)()],t.prototype,"tileInfo",void 0),t=(0,o.e)([(0,o.n)("esri.views.3d.layers.TiledLayerView3D")],t)}},41513:function(e,t,n){function r(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function i(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?function(e){for(var t=0,n=0,r=0;r<e.length;r++){var i=e[r].size;"number"==typeof i&&(t+=i,n++)}return t/n}(e.stops):t}function a(e,t){if(!t)return e;var n=t.filter((function(e){return"size"===e.type})).map((function(t){var n=t.maxSize,r=t.minSize;return(i(n,e)+i(r,e))/2})),r=0,a=n.length;if(0===a)return e;for(var l=0;l<a;l++)r+=n[l];var o=Math.floor(r/a);return Math.max(o,e)}function l(e){var t=e&&e.renderer,n="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!t)return n;var i="visualVariables"in t?a(n,t.visualVariables):n;if("simple"===t.type)return r(i,t.symbol);if("unique-value"===t.type){var l=i;return t.uniqueValueInfos.forEach((function(e){l=r(l,e.symbol)})),l}if("class-breaks"===t.type){var o=i;return t.classBreakInfos.forEach((function(e){o=r(o,e.symbol)})),o}return i}n.d(t,{s:function(){return l}})},12736:function(e,t,n){n.d(t,{a:function(){return l}});n(33530);var r=n(50165),i=n(73428),a=n(96263);function l(e,t,n){var l,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new a.M;if("2d"===n.type)l=t*n.resolution;else if("3d"===n.type){var s=n.overlayPixelSizeInMapUnits(e),u=n.basemapSpatialReference;l=(0,r.r)(u)&&!u.equals(n.spatialReference)?(0,i.z)(u)/(0,i.z)(n.spatialReference):t*s}var c=e.x-l,p=e.y-l,f=e.x+l,d=e.y+l,h=n.spatialReference;return o.xmin=Math.min(c,f),o.ymin=Math.min(p,d),o.xmax=Math.max(c,f),o.ymax=Math.max(p,d),o.spatialReference=h,o}new a.M}}]);
//# sourceMappingURL=3877.cfe1c654.chunk.js.map