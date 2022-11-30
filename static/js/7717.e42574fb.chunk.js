"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[7717],{35561:function(e,t,r){r.d(t,{i:function(){return p}});var n=r(93433),i=r(74165),a=r(15861),u=r(15671),s=r(43144),l=r(60136),o=r(29388),c=r(48848),h=r(93661),f=r(59366),p=function(e){var t=function(e){(0,l.Z)(r,e);var t=(0,o.Z)(r);function r(){return(0,u.Z)(this,r),t.apply(this,arguments)}return(0,s.Z)(r,[{key:"fetchPopupFeatures",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t,r){var u,s,l,o=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u=this.layer,t){e.next=3;break}throw new c.s("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:u});case 3:if("tile"===u.type){e.next=5;break}throw new c.s("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:u.type});case 5:return s=this.get("view.scale"),l=u.allSublayers.toArray().filter((function(e){var t=0===e.minScale||s<=e.minScale,r=0===e.maxScale||s>=e.maxScale;return e.popupTemplate&&e.popupEnabled&&e.visible&&t&&r})),e.abrupt("return",(0,c.E)(l.map(function(){var e=(0,a.Z)((0,i.Z)().mark((function e(n){var a,u,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.createQuery(),u=(0,h.r)(r)?r.event:null,s=(0,f.s)({renderer:n.renderer,event:u}),a.geometry=o.createFetchPopupFeaturesQueryGeometry(t,s),e.next=4,n.popupTemplate.getRequiredFields();case 4:return a.outFields=e.sent,e.next=7,n.queryFeatures(a);case 7:return e.abrupt("return",e.sent.features);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).then((function(e){var t;return(t=[]).concat.apply(t,(0,n.Z)(e.map((function(e){return e.value})).filter(Boolean)))})));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()}]),r}(e);return(0,c.e)([(0,c.y)()],t.prototype,"layer",void 0),t=(0,c.e)([(0,c.n)("esri.layers.mixins.TileLayerView")],t)}},17717:function(e,t,r){r.r(t);var n=r(1413),i=r(29439),a=r(74165),u=r(15861),s=r(15671),l=r(43144),o=r(11752),c=r(61120),h=r(60136),f=r(29388),p=r(48848),y=r(50690),v=(r(93661),r(82474)),d=r(90047),m=r(91502),w=r(65703),g=r(51732),b=r(97880),_=r(52195),k=r(35264),x=r(35561),Z=r(79108),I=(r(40114),r(85540),r(25456),r(71802),r(46817),r(43066),r(37677),r(26313),r(68136),r(64095),r(37856),r(27205),r(93122),r(75833),r(26789),r(6994),r(7131),r(1797),r(13239),r(18144),r(1206),r(31698),r(92739),r(74337),r(44954),r(54233),r(4679),r(62312),r(5650),r(35602),r(84234),r(18030),r(33795),r(48200),r(79557),r(26151),r(91681),r(89794),r(60491),r(87917),r(29048),r(52559),r(56162),r(74384),r(40558),r(62466),r(17327),r(93314),r(15751),r(81556),r(5430),r(85113),r(75255),r(46737),r(53586),r(65094),r(52113),r(53921),r(35237),r(89181),r(20302),r(69641),r(15436),r(69768),r(62610),r(630),r(92072),r(47855),[0,0]),V=function(e){(0,h.Z)(r,e);var t=(0,f.Z)(r);function r(){var e;return(0,s.Z)(this,r),(e=t.apply(this,arguments))._tileStrategy=null,e._fetchQueue=null,e.layer=null,e}return(0,l.Z)(r,[{key:"resampling",get:function(){return!("resampling"in this.layer)||!1!==this.layer.resampling}},{key:"update",value:function(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}},{key:"attach",value:function(){var e=this,t="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new w.h(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new b.y({tileInfoView:this._tileInfoView,concurrency:t&&10*t.length||10,process:function(t,r){return e.fetchTile(t,r)}}),this._tileStrategy=new b.r({cachePolicy:"keep",resampling:this.resampling,acquireTile:function(t){return e.acquireTile(t)},releaseTile:function(t){return e.releaseTile(t)},tileInfoView:this._tileInfoView}),this.requestUpdate(),this.handles.add((0,y.l)((function(){return e.resampling}),(function(){e.doRefresh()}))),(0,o.Z)((0,c.Z)(r.prototype),"attach",this).call(this)}},{key:"detach",value:function(){(0,o.Z)((0,c.Z)(r.prototype),"detach",this).call(this),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}},{key:"moveStart",value:function(){this.requestUpdate()}},{key:"viewChange",value:function(){this.requestUpdate()}},{key:"moveEnd",value:function(){this.requestUpdate()}},{key:"supportsSpatialReference",value:function(e){var t;return(0,v.E)(null===(t=this.layer.tileInfo)||void 0===t?void 0:t.spatialReference,e)}},{key:"createFetchPopupFeaturesQueryGeometry",value:function(e,t){return(0,Z.a)(e,t,this.view)}},{key:"doRefresh",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(){var t=this;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!this.attached||this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((function(e){return t._enqueueTileFetch(e)})));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isUpdating",value:function(){var e,t;return null!==(e=null===(t=this._fetchQueue)||void 0===t?void 0:t.updating)&&void 0!==e&&e}},{key:"acquireTile",value:function(e){var t,r,n,a=this._bitmapView.createTile(e),u=a.bitmap;return t=this._tileInfoView.getTileCoords(I,a.key),r=(0,i.Z)(t,2),u.x=r[0],u.y=r[1],u.resolution=this._tileInfoView.getTileResolution(a.key),n=(0,i.Z)(this._tileInfoView.tileInfo.size,2),u.width=n[0],u.height=n[1],this._enqueueTileFetch(a),this._bitmapView.addChild(a),this.requestUpdate(),a}},{key:"releaseTile",value:function(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(function(){return e.destroy()})),this.requestUpdate()}},{key:"fetchTile",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(t){var r,i,u,s,l,o,c,h,f,y,v=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=v.length>1&&void 0!==v[1]?v[1]:{},i="tilemapCache"in this.layer?this.layer.tilemapCache:null,u=r.signal,s=r.resamplingLevel,l=void 0===s?0:s,i){e.next=22;break}return e.prev=3,e.next=6,this._fetchImage(t,u);case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),(0,p.j)(e.t0)||this.resampling){e.next=13;break}return e.abrupt("return",(0,d.o)(this._tileInfoView.tileInfo.size));case 13:if(!(l<3)){e.next=21;break}if(!(o=this._tileInfoView.getTileParentId(t.id))){e.next=21;break}return c=new g.e(o),e.next=19,this.fetchTile(c,(0,n.Z)((0,n.Z)({},r),{},{resamplingLevel:l+1}));case 19:return h=e.sent,e.abrupt("return",(0,d.n)(this._tileInfoView,h,c,t));case 21:throw e.t0;case 22:return f=new g.e(0,0,0,0),e.prev=23,e.next=26,i.fetchAvailabilityUpsample(t.level,t.row,t.col,f,{signal:u});case 26:if(f.level===t.level||this.resampling){e.next=28;break}return e.abrupt("return",(0,d.o)(this._tileInfoView.tileInfo.size));case 28:return e.next=30,this._fetchImage(f,u);case 30:y=e.sent,e.next=40;break;case 33:if(e.prev=33,e.t1=e.catch(23),!(0,p.j)(e.t1)){e.next=37;break}throw e.t1;case 37:return e.next=39,this._fetchImage(t,u);case 39:y=e.sent;case 40:return e.abrupt("return",this.resampling?(0,d.n)(this._tileInfoView,y,f,t):y);case 41:case"end":return e.stop()}}),e,this,[[3,9],[23,33]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_enqueueTileFetch",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(t){var r,n=this;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._fetchQueue.has(t.key.id)){e.next=12;break}return e.prev=1,e.next=4,this._fetchQueue.push(t.key);case 4:r=e.sent,t.bitmap.source=r,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.once("attach",(function(){return n.requestUpdate()})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),(0,p.j)(e.t0)||p.a.getLogger(this.declaredClass).error(e.t0);case 11:this.requestUpdate();case 12:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_fetchImage",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(t,r){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.layer.fetchImageBitmapTile(t.level,t.row,t.col,{signal:r}));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()}]),r}((0,x.i)((0,k.i)((0,d.t)((0,m.y)(_.u)))));(0,p.e)([(0,p.y)()],V.prototype,"_fetchQueue",void 0),(0,p.e)([(0,p.y)()],V.prototype,"resampling",null);var T=V=(0,p.e)([(0,p.n)("esri.views.2d.layers.TileLayerView2D")],V);t.default=T},59366:function(e,t,r){function n(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function i(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?function(e){for(var t=0,r=0,n=0;n<e.length;n++){var i=e[n].size;"number"==typeof i&&(t+=i,r++)}return t/r}(e.stops):t}function a(e,t){if(!t)return e;var r=t.filter((function(e){return"size"===e.type})).map((function(t){var r=t.maxSize,n=t.minSize;return(i(r,e)+i(n,e))/2})),n=0,a=r.length;if(0===a)return e;for(var u=0;u<a;u++)n+=r[u];var s=Math.floor(n/a);return Math.max(s,e)}function u(e){var t=e&&e.renderer,r="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!t)return r;var i="visualVariables"in t?a(r,t.visualVariables):r;if("simple"===t.type)return n(i,t.symbol);if("unique-value"===t.type){var u,s=i;return null!==(u=t.uniqueValueInfos)&&void 0!==u&&u.forEach((function(e){s=n(s,e.symbol)})),s}if("class-breaks"===t.type){var l=i;return t.classBreakInfos.forEach((function(e){l=n(l,e.symbol)})),l}return i}r.d(t,{s:function(){return u}})},79108:function(e,t,r){r.d(t,{a:function(){return u}});r(74384);var n=r(93661),i=r(47855),a=r(46817);function u(e,t,r){var u,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new a.w;if("2d"===r.type)u=t*r.resolution;else if("3d"===r.type){var l=r.overlayPixelSizeInMapUnits(e),o=r.basemapSpatialReference;u=(0,n.r)(o)&&!o.equals(r.spatialReference)?(0,i.$)(o)/(0,i.$)(r.spatialReference):t*l}var c=e.x-u,h=e.y-u,f=e.x+u,p=e.y+u,y=r.spatialReference;return s.xmin=Math.min(c,f),s.ymin=Math.min(h,p),s.xmax=Math.max(c,f),s.ymax=Math.max(h,p),s.spatialReference=y,s}new a.w}}]);
//# sourceMappingURL=7717.e42574fb.chunk.js.map