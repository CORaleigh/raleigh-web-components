"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[7998],{32965:function(e,t,r){r.d(t,{i:function(){return p}});var n=r(93433),i=r(74165),a=r(15861),u=r(15671),s=r(43144),l=r(60136),o=r(29388),c=r(23132),h=r(75610),f=r(41513),p=function(e){var t=function(e){(0,l.Z)(r,e);var t=(0,o.Z)(r);function r(){return(0,u.Z)(this,r),t.apply(this,arguments)}return(0,s.Z)(r,[{key:"fetchPopupFeatures",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t,r){var u,s,l,o=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u=this.layer,t){e.next=3;break}throw new c.a("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:u});case 3:if("tile"===u.type){e.next=5;break}throw new c.a("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:u.type});case 5:return s=this.get("view.scale"),l=u.allSublayers.toArray().filter((function(e){var t=0===e.minScale||s<=e.minScale,r=0===e.maxScale||s>=e.maxScale;return e.popupTemplate&&e.popupEnabled&&e.visible&&t&&r})),e.abrupt("return",(0,c.E)(l.map(function(){var e=(0,a.Z)((0,i.Z)().mark((function e(n){var a,u,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.createQuery(),u=(0,h.r)(r)?r.event:null,s=(0,f.s)({renderer:n.renderer,event:u}),a.geometry=o.createFetchPopupFeaturesQueryGeometry(t,s),e.next=4,n.popupTemplate.getRequiredFields();case 4:return a.outFields=e.sent,e.next=7,n.queryFeatures(a);case 7:return e.abrupt("return",e.sent.features);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).then((function(e){var t;return(t=[]).concat.apply(t,(0,n.Z)(e.map((function(e){return e.value})).filter(Boolean)))})));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()}]),r}(e);return(0,c.e)([(0,c.d)()],t.prototype,"layer",void 0),t=(0,c.e)([(0,c.n)("esri.layers.mixins.TileLayerView")],t)}},7998:function(e,t,r){r.r(t);var n=r(1413),i=r(29439),a=r(74165),u=r(15861),s=r(15671),l=r(43144),o=r(11752),c=r(61120),h=r(60136),f=r(29388),p=r(23132),v=r(36551),y=(r(75610),r(30709)),d=r(79750),m=r(20842),w=r(38415),g=r(59819),b=r(54026),_=r(5900),k=r(19231),x=r(32965),Z=r(52131),I=(r(21583),r(70441),r(74858),r(78311),r(2760),r(80262),r(40273),r(77470),r(80175),r(84538),r(49580),r(41742),r(57714),r(43920),r(54841),r(33703),r(92870),r(97033),r(72692),r(77389),r(48561),r(55269),r(44455),r(83822),r(91204),r(36460),r(51451),r(50526),r(50448),r(1773),r(77196),r(24980),r(3114),r(22144),r(78674),r(66307),r(88370),r(72820),r(96349),r(9055),r(79611),r(2157),r(30604),r(32568),r(69202),r(27597),r(1241),r(67417),r(15181),r(33642),r(28999),r(69953),r(15612),r(43124),r(69797),r(34860),r(36638),r(10590),r(19948),r(96636),r(30664),r(38304),r(83024),r(61340),r(47626),r(25316),r(407),r(67154),r(79054),r(29709),r(47642),r(18411),r(43782),r(33976),r(28210),r(17436),r(53373),r(94872),r(3969),r(79042),r(61495),r(16485),r(92029),r(74575),r(9575),r(53249),r(83996),r(72763),r(6794),r(28681),r(38929),r(97866),r(68890),r(31513),r(25838),r(54539),r(19967),r(50338),r(28623),r(10312),r(95254),r(61099),r(12158),r(93874),r(62446),r(27264),r(50905),r(78945),r(55827),r(70516),r(25279),r(22268),r(40452),r(60424),r(22225),r(38425),r(42471),r(78470),r(1665),r(38843),r(24892),r(48889),r(30150),r(53647),r(81663),r(14181),r(86270),r(47672),r(63022),r(10815),r(96401),r(87833),r(21523),r(84192),r(71710),r(45332),r(54323),r(42446),r(6819),r(97566),r(76071),r(76470),r(93669),r(90584),r(90138),r(45578),r(28329),r(45794),r(14946),r(85331),r(77372),r(85523),r(69754),r(38802),r(59038),r(95208),r(49607),r(38058),r(66156),r(18392),[0,0]),V=function(e){(0,h.Z)(r,e);var t=(0,f.Z)(r);function r(){var e;return(0,s.Z)(this,r),(e=t.apply(this,arguments))._tileStrategy=null,e._fetchQueue=null,e.layer=null,e}return(0,l.Z)(r,[{key:"resampling",get:function(){return!("resampling"in this.layer)||!1!==this.layer.resampling}},{key:"update",value:function(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}},{key:"attach",value:function(){var e=this,t="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new w.h(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new b.p({tileInfoView:this._tileInfoView,concurrency:t&&10*t.length||10,process:function(t,r){return e.fetchTile(t,r)}}),this._tileStrategy=new b.r({cachePolicy:"keep",resampling:this.resampling,acquireTile:function(t){return e.acquireTile(t)},releaseTile:function(t){return e.releaseTile(t)},tileInfoView:this._tileInfoView}),this.requestUpdate(),this.handles.add((0,v.l)((function(){return e.resampling}),(function(){e.doRefresh()}))),(0,o.Z)((0,c.Z)(r.prototype),"attach",this).call(this)}},{key:"detach",value:function(){(0,o.Z)((0,c.Z)(r.prototype),"detach",this).call(this),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}},{key:"moveStart",value:function(){this.requestUpdate()}},{key:"viewChange",value:function(){this.requestUpdate()}},{key:"moveEnd",value:function(){this.requestUpdate()}},{key:"supportsSpatialReference",value:function(e){var t;return(0,y.E)(null===(t=this.layer.tileInfo)||void 0===t?void 0:t.spatialReference,e)}},{key:"createFetchPopupFeaturesQueryGeometry",value:function(e,t){return(0,Z.a)(e,t,this.view)}},{key:"doRefresh",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(){var t=this;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((function(e){return t._enqueueTileFetch(e)})));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isUpdating",value:function(){var e,t;return null!==(e=null===(t=this._fetchQueue)||void 0===t?void 0:t.updating)&&void 0!==e&&e}},{key:"acquireTile",value:function(e){var t,r,n,a=this._bitmapView.createTile(e),u=a.bitmap;return t=this._tileInfoView.getTileCoords(I,a.key),r=(0,i.Z)(t,2),u.x=r[0],u.y=r[1],u.resolution=this._tileInfoView.getTileResolution(a.key),n=(0,i.Z)(this._tileInfoView.tileInfo.size,2),u.width=n[0],u.height=n[1],this._enqueueTileFetch(a),this._bitmapView.addChild(a),this.requestUpdate(),a}},{key:"releaseTile",value:function(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(function(){return e.destroy()})),this.requestUpdate()}},{key:"fetchTile",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(t){var r,i,u,s,l,o,c,h,f,v,y=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=y.length>1&&void 0!==y[1]?y[1]:{},i="tilemapCache"in this.layer?this.layer.tilemapCache:null,u=r.signal,s=r.resamplingLevel,l=void 0===s?0:s,i){e.next=22;break}return e.prev=3,e.next=6,this._fetchImage(t,u);case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),(0,p.u)(e.t0)||this.resampling){e.next=13;break}return e.abrupt("return",(0,d.o)(this._tileInfoView.tileInfo.size));case 13:if(!(l<3)){e.next=21;break}if(!(o=this._tileInfoView.getTileParentId(t.id))){e.next=21;break}return c=new g.e(o),e.next=19,this.fetchTile(c,(0,n.Z)((0,n.Z)({},r),{},{resamplingLevel:l+1}));case 19:return h=e.sent,e.abrupt("return",(0,d.n)(this._tileInfoView,h,c,t));case 21:throw e.t0;case 22:return f=new g.e(0,0,0,0),e.prev=23,e.next=26,i.fetchAvailabilityUpsample(t.level,t.row,t.col,f,{signal:u});case 26:if(f.level===t.level||this.resampling){e.next=28;break}return e.abrupt("return",(0,d.o)(this._tileInfoView.tileInfo.size));case 28:return e.next=30,this._fetchImage(f,u);case 30:v=e.sent,e.next=40;break;case 33:if(e.prev=33,e.t1=e.catch(23),!(0,p.u)(e.t1)){e.next=37;break}throw e.t1;case 37:return e.next=39,this._fetchImage(t,u);case 39:v=e.sent;case 40:return e.abrupt("return",this.resampling?(0,d.n)(this._tileInfoView,v,f,t):v);case 41:case"end":return e.stop()}}),e,this,[[3,9],[23,33]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_enqueueTileFetch",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(t){var r,n=this;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._fetchQueue.has(t.key.id)){e.next=12;break}return e.prev=1,e.next=4,this._fetchQueue.push(t.key);case 4:r=e.sent,t.bitmap.source=r,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.once("attach",(function(){return n.requestUpdate()})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),(0,p.u)(e.t0)||p.s.getLogger(this.declaredClass).error(e.t0);case 11:this.requestUpdate();case 12:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_fetchImage",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(t,r){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.layer.fetchTile(t.level,t.row,t.col,{signal:r}));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()}]),r}((0,x.i)((0,k.i)((0,d.r)((0,m.f)(_.u)))));(0,p.e)([(0,p.d)()],V.prototype,"_fetchQueue",void 0),(0,p.e)([(0,p.d)()],V.prototype,"resampling",null);var T=V=(0,p.e)([(0,p.n)("esri.views.2d.layers.TileLayerView2D")],V);t.default=T},41513:function(e,t,r){function n(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function i(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?function(e){for(var t=0,r=0,n=0;n<e.length;n++){var i=e[n].size;"number"==typeof i&&(t+=i,r++)}return t/r}(e.stops):t}function a(e,t){if(!t)return e;var r=t.filter((function(e){return"size"===e.type})).map((function(t){var r=t.maxSize,n=t.minSize;return(i(r,e)+i(n,e))/2})),n=0,a=r.length;if(0===a)return e;for(var u=0;u<a;u++)n+=r[u];var s=Math.floor(n/a);return Math.max(s,e)}function u(e){var t=e&&e.renderer,r="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!t)return r;var i="visualVariables"in t?a(r,t.visualVariables):r;if("simple"===t.type)return n(i,t.symbol);if("unique-value"===t.type){var u=i;return t.uniqueValueInfos.forEach((function(e){u=n(u,e.symbol)})),u}if("class-breaks"===t.type){var s=i;return t.classBreakInfos.forEach((function(e){s=n(s,e.symbol)})),s}return i}r.d(t,{s:function(){return u}})},52131:function(e,t,r){r.d(t,{a:function(){return u}});r(91204);var n=r(75610),i=r(44455),a=r(80262);function u(e,t,r){var u,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new a.M;if("2d"===r.type)u=t*r.resolution;else if("3d"===r.type){var l=r.overlayPixelSizeInMapUnits(e),o=r.basemapSpatialReference;u=(0,n.r)(o)&&!o.equals(r.spatialReference)?(0,i.z)(o)/(0,i.z)(r.spatialReference):t*l}var c=e.x-u,h=e.y-u,f=e.x+u,p=e.y+u,v=r.spatialReference;return s.xmin=Math.min(c,f),s.ymin=Math.min(h,p),s.xmax=Math.max(c,f),s.ymax=Math.max(h,p),s.spatialReference=v,s}new a.M}}]);
//# sourceMappingURL=7998.0542976c.chunk.js.map