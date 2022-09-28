"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[4811],{96272:function(e,t,r){r.d(t,{i:function(){return f}});var n=r(93433),i=r(74165),a=r(15861),u=r(15671),s=r(43144),l=r(60136),o=r(29388),c=r(50165),h=r(41513),f=function(e){var t=function(e){(0,l.Z)(r,e);var t=(0,o.Z)(r);function r(){return(0,u.Z)(this,r),t.apply(this,arguments)}return(0,s.Z)(r,[{key:"fetchPopupFeatures",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t,r){var u,s,l,o=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u=this.layer,t){e.next=3;break}throw new c.a("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:u});case 3:if("tile"===u.type){e.next=5;break}throw new c.a("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:u.type});case 5:return s=this.get("view.scale"),l=u.allSublayers.toArray().filter((function(e){var t=0===e.minScale||s<=e.minScale,r=0===e.maxScale||s>=e.maxScale;return e.popupTemplate&&e.popupEnabled&&e.visible&&t&&r})),e.abrupt("return",(0,c.E)(l.map(function(){var e=(0,a.Z)((0,i.Z)().mark((function e(n){var a,u,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.createQuery(),u=(0,c.r)(r)?r.event:null,s=(0,h.s)({renderer:n.renderer,event:u}),a.geometry=o.createFetchPopupFeaturesQueryGeometry(t,s),e.next=4,n.popupTemplate.getRequiredFields();case 4:return a.outFields=e.sent,e.next=7,n.queryFeatures(a);case 7:return e.abrupt("return",e.sent.features);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).then((function(e){var t;return(t=[]).concat.apply(t,(0,n.Z)(e.map((function(e){return e.value})).filter(Boolean)))})));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()}]),r}(e);return(0,c.e)([(0,c.d)()],t.prototype,"layer",void 0),t=(0,c.e)([(0,c.n)("esri.layers.mixins.TileLayerView")],t)}},24811:function(e,t,r){r.r(t);var n=r(1413),i=r(29439),a=r(74165),u=r(15861),s=r(15671),l=r(43144),o=r(11752),c=r(61120),h=r(60136),f=r(29388),p=r(50165),v=r(73627),y=r(77322),d=r(88036),m=r(35744),w=r(22494),g=r(49510),b=r(69379),_=r(60470),k=r(1894),x=r(96272),Z=r(12736),I=(r(32335),r(3168),r(79146),r(2760),r(96263),r(68634),r(69738),r(40133),r(73393),r(87110),r(42),r(13994),r(52155),r(72577),r(61772),r(92870),r(26079),r(22984),r(15508),r(17691),r(48561),r(55269),r(73428),r(89031),r(33530),r(31278),r(98496),r(4483),r(79747),r(75662),r(17493),r(62980),r(16377),r(9887),r(88406),r(66307),r(42488),r(9330),r(3029),r(42687),r(78330),r(78697),r(78664),r(86931),r(51613),r(80392),r(10489),r(62298),r(2815),r(2326),r(90339),r(76375),r(82046),r(49961),r(31412),r(53089),r(83172),r(66270),r(60418),r(84539),r(75366),r(5233),r(36235),r(61340),r(57439),r(59075),r(97823),r(49350),r(89354),r(16897),r(47642),r(63334),r(38419),r(84231),r(38665),r(32717),r(39853),r(94872),r(3969),r(43895),r(30594),r(73267),r(22628),r(24982),r(46584),r(7093),r(85966),r(28003),r(49796),r(58428),r(8049),r(80933),r(40858),r(95076),r(56389),r(86738),r(69205),r(50338),r(33074),r(31134),r(41524),r(68668),r(55916),r(66319),r(24781),r(2329),r(37243),r(97345),r(39001),r(84913),r(84823),r(9411),r(14826),r(64620),r(22225),r(75272),r(4197),r(86905),r(64997),r(26208),r(2816),r(46237),r(98428),r(5792),r(42094),r(67871),r(75097),r(47672),r(98643),r(83745),r(96401),r(87833),r(21523),r(84192),r(99057),r(26995),r(73151),r(99797),r(6819),r(47692),r(68792),r(35341),r(25346),r(50463),r(48968),r(45578),r(3441),r(94640),r(14023),r(27969),r(77372),r(66281),r(69754),r(38802),r(95734),r(48308),r(14527),r(3096),r(66156),r(18392),[0,0]),V=function(e){(0,h.Z)(r,e);var t=(0,f.Z)(r);function r(){var e;return(0,s.Z)(this,r),(e=t.apply(this,arguments))._tileStrategy=null,e._fetchQueue=null,e.layer=null,e}return(0,l.Z)(r,[{key:"resampling",get:function(){return!("resampling"in this.layer)||!1!==this.layer.resampling}},{key:"update",value:function(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}},{key:"attach",value:function(){var e=this,t="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new w.h(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new b.p({tileInfoView:this._tileInfoView,concurrency:t&&10*t.length||10,process:function(t,r){return e.fetchTile(t,r)}}),this._tileStrategy=new b.r({cachePolicy:"keep",resampling:this.resampling,acquireTile:function(t){return e.acquireTile(t)},releaseTile:function(t){return e.releaseTile(t)},tileInfoView:this._tileInfoView}),this.requestUpdate(),this.handles.add((0,v.l)((function(){return e.resampling}),(function(){e.doRefresh()}))),(0,o.Z)((0,c.Z)(r.prototype),"attach",this).call(this)}},{key:"detach",value:function(){(0,o.Z)((0,c.Z)(r.prototype),"detach",this).call(this),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}},{key:"moveStart",value:function(){this.requestUpdate()}},{key:"viewChange",value:function(){this.requestUpdate()}},{key:"moveEnd",value:function(){this.requestUpdate()}},{key:"supportsSpatialReference",value:function(e){var t;return(0,y.E)(null===(t=this.layer.tileInfo)||void 0===t?void 0:t.spatialReference,e)}},{key:"createFetchPopupFeaturesQueryGeometry",value:function(e,t){return(0,Z.a)(e,t,this.view)}},{key:"doRefresh",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(){var t=this;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((function(e){return t._enqueueTileFetch(e)})));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isUpdating",value:function(){var e,t;return null!==(e=null===(t=this._fetchQueue)||void 0===t?void 0:t.updating)&&void 0!==e&&e}},{key:"acquireTile",value:function(e){var t,r,n,a=this._bitmapView.createTile(e),u=a.bitmap;return t=this._tileInfoView.getTileCoords(I,a.key),r=(0,i.Z)(t,2),u.x=r[0],u.y=r[1],u.resolution=this._tileInfoView.getTileResolution(a.key),n=(0,i.Z)(this._tileInfoView.tileInfo.size,2),u.width=n[0],u.height=n[1],this._enqueueTileFetch(a),this._bitmapView.addChild(a),this.requestUpdate(),a}},{key:"releaseTile",value:function(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(function(){return e.destroy()})),this.requestUpdate()}},{key:"fetchTile",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(t){var r,i,u,s,l,o,c,h,f,v,y=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=y.length>1&&void 0!==y[1]?y[1]:{},i="tilemapCache"in this.layer?this.layer.tilemapCache:null,u=r.signal,s=r.resamplingLevel,l=void 0===s?0:s,i){e.next=22;break}return e.prev=3,e.next=6,this._fetchImage(t,u);case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),(0,p.I)(e.t0)||this.resampling){e.next=13;break}return e.abrupt("return",(0,d.o)(this._tileInfoView.tileInfo.size));case 13:if(!(l<3)){e.next=21;break}if(!(o=this._tileInfoView.getTileParentId(t.id))){e.next=21;break}return c=new g.e(o),e.next=19,this.fetchTile(c,(0,n.Z)((0,n.Z)({},r),{},{resamplingLevel:l+1}));case 19:return h=e.sent,e.abrupt("return",(0,d.n)(this._tileInfoView,h,c,t));case 21:throw e.t0;case 22:return f=new g.e(0,0,0,0),e.prev=23,e.next=26,i.fetchAvailabilityUpsample(t.level,t.row,t.col,f,{signal:u});case 26:if(f.level===t.level||this.resampling){e.next=28;break}return e.abrupt("return",(0,d.o)(this._tileInfoView.tileInfo.size));case 28:return e.next=30,this._fetchImage(f,u);case 30:v=e.sent,e.next=40;break;case 33:if(e.prev=33,e.t1=e.catch(23),!(0,p.I)(e.t1)){e.next=37;break}throw e.t1;case 37:return e.next=39,this._fetchImage(t,u);case 39:v=e.sent;case 40:return e.abrupt("return",this.resampling?(0,d.n)(this._tileInfoView,v,f,t):v);case 41:case"end":return e.stop()}}),e,this,[[3,9],[23,33]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_enqueueTileFetch",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(t){var r,n=this;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._fetchQueue.has(t.key.id)){e.next=12;break}return e.prev=1,e.next=4,this._fetchQueue.push(t.key);case 4:r=e.sent,t.bitmap.source=r,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.once("attach",(function(){return n.requestUpdate()})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),(0,p.I)(e.t0)||p.s.getLogger(this.declaredClass).error(e.t0);case 11:this.requestUpdate();case 12:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_fetchImage",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(t,r){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.layer.fetchTile(t.level,t.row,t.col,{signal:r}));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()}]),r}((0,x.i)((0,k.i)((0,d.r)((0,m.f)(_.u)))));(0,p.e)([(0,p.d)()],V.prototype,"_fetchQueue",void 0),(0,p.e)([(0,p.d)()],V.prototype,"resampling",null);var T=V=(0,p.e)([(0,p.n)("esri.views.2d.layers.TileLayerView2D")],V);t.default=T},41513:function(e,t,r){function n(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function i(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?function(e){for(var t=0,r=0,n=0;n<e.length;n++){var i=e[n].size;"number"==typeof i&&(t+=i,r++)}return t/r}(e.stops):t}function a(e,t){if(!t)return e;var r=t.filter((function(e){return"size"===e.type})).map((function(t){var r=t.maxSize,n=t.minSize;return(i(r,e)+i(n,e))/2})),n=0,a=r.length;if(0===a)return e;for(var u=0;u<a;u++)n+=r[u];var s=Math.floor(n/a);return Math.max(s,e)}function u(e){var t=e&&e.renderer,r="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!t)return r;var i="visualVariables"in t?a(r,t.visualVariables):r;if("simple"===t.type)return n(i,t.symbol);if("unique-value"===t.type){var u=i;return t.uniqueValueInfos.forEach((function(e){u=n(u,e.symbol)})),u}if("class-breaks"===t.type){var s=i;return t.classBreakInfos.forEach((function(e){s=n(s,e.symbol)})),s}return i}r.d(t,{s:function(){return u}})},12736:function(e,t,r){r.d(t,{a:function(){return u}});r(33530);var n=r(50165),i=r(73428),a=r(96263);function u(e,t,r){var u,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new a.M;if("2d"===r.type)u=t*r.resolution;else if("3d"===r.type){var l=r.overlayPixelSizeInMapUnits(e),o=r.basemapSpatialReference;u=(0,n.r)(o)&&!o.equals(r.spatialReference)?(0,i.z)(o)/(0,i.z)(r.spatialReference):t*l}var c=e.x-u,h=e.y-u,f=e.x+u,p=e.y+u,v=r.spatialReference;return s.xmin=Math.min(c,f),s.ymin=Math.min(h,p),s.xmax=Math.max(c,f),s.ymax=Math.max(h,p),s.spatialReference=v,s}new a.M}}]);
//# sourceMappingURL=4811.46d5f95c.chunk.js.map