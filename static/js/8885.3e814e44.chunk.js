"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[8885],{28885:function(e,t,i){i.r(t);var n=i(74165),r=i(15861),s=i(15671),a=i(43144),l=i(11752),o=i(61120),u=i(60136),c=i(29388),d=i(23132),h=i(75610),p=i(36551),y=i(3964),v=i(53478),f=i(91034),g=i(45414),b=i(5900),m=(i(21583),i(86270),i(83996),i(57714),i(70441),i(44455),i(30709),i(97866),i(96349),i(83822),i(91204),i(80262),i(36460),i(51451),i(80175),i(50526),i(50448),i(41742),i(43920),i(1773),i(77196),i(24980),i(3114),i(22144),i(78674),i(66307),i(2760),i(88370),i(72820),i(78311),i(9055),i(79611),i(2157),i(30604),i(97033),i(77470),i(79054),i(72763),i(58687),i(10815),i(55269),i(84538),i(49580),i(54841),i(33703),i(92870),i(6794),i(81663),i(63022),i(61340),i(69953),i(97627),i(38304),i(96401),i(71573),i(57952),i(58394),i(44344),i(48561),i(84192),i(3969),i(55806),i(47672),i(64296),i(14432),i(6243),i(37783),i(74021),i(56864),i(64004),i(40273),i(72692),i(77389),i(32568),i(69202),i(27597),i(1241),i(67417),i(15181),i(33642),i(28999),i(15612),i(43124),i(69797),i(34860),i(36638),i(10590),i(19948),i(96636),i(30664),i(83024),i(47626),i(25316),i(407),i(67154),i(29709),i(47642),i(18411),i(43782),i(33976),i(28210),i(17436),i(53373),i(94872),i(79042),i(61495),i(16485),i(92029),i(74575),i(9575),i(53249),i(28681),i(38929),i(68890),i(31513),i(25838),i(54539),i(19967),i(50338),i(28623),i(10312),i(95254),i(61099),i(12158),i(93874),i(62446),i(27264),i(50905),i(78945),i(55827),i(70516),i(25279),i(22268),i(40452),i(60424),i(22225),i(38425),i(42471),i(78470),i(1665),i(38843),i(24892),i(48889),i(30150),i(53647),i(14181),i(87833),i(21523),i(71710),i(45332),i(83059),i(4720),i(91309),i(25715),i(83262),i(2822),i(61349),i(32990),i(6819),i(52376),i(94867),i(97566),i(90138),i(50982),i(21165),i(21984),i(48373),i(61473),i(14946),i(44365),i(90584),i(86148),i(60912),i(98907),i(66156),i(10534),i(25459),i(78556),i(77787),i(85511),i(87603),i(22051),i(21924),i(46123),i(75777),i(76071),i(42446),i(59819),i(64571),i(84452),i(63662),i(86068),i(75370),i(62268),i(18392),i(90935),function(e){(0,u.Z)(i,e);var t=(0,c.Z)(i);function i(){var e;return(0,s.Z)(this,i),(e=t.apply(this,arguments)).type="graphics-3d",e.slicePlaneEnabled=!1,e.fullExtentInLocalViewSpatialReference=null,e}return(0,a.Z)(i,[{key:"initialize",value:function(){var e=this;this._set("processor",new v._({owner:this,scaleVisibilityEnabled:!0,frustumVisibilityEnabled:!0})),this.addResolvingPromise(this.processor.setup()),this.handles.add(this.layer.on("graphic-update",(function(t){return e.processor.graphicsCore.graphicUpdateHandler(t)}))),this.addResolvingPromise((0,f.l)(this).then((function(t){return e.fullExtentInLocalViewSpatialReference=t}))),this.layer.internal?this.notifyChange("updating"):this.handles.add((0,p.f)((function(){var t,i;return null===(t=e.view)||void 0===t||null===(i=t.basemapTerrain)||void 0===i?void 0:i.ready}),(function(){return function(){return e.notifyChange("updating")}}),{once:!0}))}},{key:"destroy",value:function(){this.handles.removeAll(),this.updatingHandles.removeAll(),this._set("processor",(0,h.l)(this.processor))}},{key:"loadedGraphics",get:function(){return this.layer.graphics}},{key:"legendEnabled",get:function(){var e;return this.canResume()&&!(null!==(e=this.processor)&&void 0!==e&&e.frustumVisibilitySuspended)}},{key:"getSuspendInfo",value:function(){var e,t,n,r,s=(0,l.Z)((0,o.Z)(i.prototype),"getSuspendInfo",this).call(this);return s.outsideScaleRange=null!==(e=null===(t=this.processor)||void 0===t?void 0:t.scaleVisibilitySuspended)&&void 0!==e&&e,s.outsideOfView=null!==(n=null===(r=this.processor)||void 0===r?void 0:r.frustumVisibilitySuspended)&&void 0!==n&&n,s}},{key:"fetchPopupFeatures",value:function(){var e=(0,r.Z)((0,n.Z)().mark((function e(t,i){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,h.r)(i)?i.clientGraphics:null);case 1:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"getHit",value:function(e){return this.processor.getHit(e)}},{key:"whenGraphicBounds",value:function(e,t){return this.processor.whenGraphicBounds(e,t)}},{key:"computeAttachmentOrigin",value:function(e,t){var i;return null===(i=this.processor)||void 0===i?void 0:i.computeAttachmentOrigin(e,t)}},{key:"getSymbolLayerSize",value:function(e,t){return this.processor.getSymbolLayerSize(e,t)}},{key:"queryGraphics",value:function(){return Promise.resolve(this.loadedGraphics)}},{key:"maskOccludee",value:function(e){return this.processor.maskOccludee(e)}},{key:"highlight",value:function(e){return this.processor.highlight(e)}},{key:"updatePolicy",get:function(){var e;return(null===(e=this.processor)||void 0===e?void 0:e.graphicsCore.effectiveUpdatePolicy)||g.o.SYNC}},{key:"canResume",value:function(){var e;return(0,l.Z)((0,o.Z)(i.prototype),"canResume",this).call(this)&&!(null!==(e=this.processor)&&void 0!==e&&e.scaleVisibilitySuspended)}},{key:"isUpdating",value:function(){var e,t,i;return!((null===(e=this.processor)||void 0===e||!e.updating)&&(this.layer.internal||null!==(t=this.view)&&void 0!==t&&null!==(i=t.basemapTerrain)&&void 0!==i&&i.ready))}},{key:"performanceInfo",get:function(){var e,t,i,n;return{displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:-1,totalNumberOfFeatures:-1,nodes:0,core:null,updating:this.updating,elevationUpdating:null!==(e=null===(t=this.processor)||void 0===t?void 0:t.elevationAlignment.updating)&&void 0!==e&&e,visibilityFrustum:null!==(i=!(null!==(n=this.processor)&&void 0!==n&&n.frustumVisibilitySuspended))&&void 0!==i&&i}}}]),i}((0,y.n)(b.u)));(0,d.e)([(0,d.d)()],m.prototype,"loadedGraphics",null),(0,d.e)([(0,d.d)({readOnly:!0})],m.prototype,"legendEnabled",null),(0,d.e)([(0,d.d)()],m.prototype,"layer",void 0),(0,d.e)([(0,d.d)({readOnly:!0})],m.prototype,"processor",void 0),(0,d.e)([(0,d.d)({type:Boolean})],m.prototype,"slicePlaneEnabled",void 0);var k=m=(0,d.e)([(0,d.n)("esri.views.3d.layers.GraphicsLayerView3D")],m);t.default=k},53478:function(e,t,i){i.d(t,{_:function(){return S}});var n=i(74165),r=i(15861),s=i(1413),a=i(15671),l=i(43144),o=i(60136),u=i(29388),c=i(23132),d=i(83822),h=i(80175),p=i(97033),y=i(75610),v=i(36551),f=i(79054),g=i(72763),b=i(58687),m=i(34860),k=i(84452),I=i(90935),w=i(45414),S=function(e){(0,o.Z)(i,e);var t=(0,u.Z)(i);function i(e){var n;return(0,a.Z)(this,i),(n=t.call(this,e)).type="graphics-3d",n.graphicsCore=null,n.elevationAlignment=new I.l,n.drapeSourceType=b.e.Features,n._suspendResumeExtent=null,n}return(0,l.Z)(i,[{key:"normalizeCtorArgs",value:function(e){var t=(0,s.Z)((0,s.Z)({},e),{},{scaleVisibility:null,frustumVisibility:null});return delete t.scaleVisibilityEnabled,delete t.frustumVisibilityEnabled,e.scaleVisibilityEnabled&&(t.scaleVisibility=new k.b),e.frustumVisibilityEnabled&&(t.frustumVisibility=new I.d),t}},{key:"initialize",value:function(){var e=this,t=new k.j({owner:this,layer:this.owner.layer,preferredUpdatePolicy:w.o.SYNC,graphicSymbolSupported:!0});this._set("graphicsCore",t);var i=this.layer,n=this.scaleVisibility;if((0,y.r)(n)&&"effectiveScaleRange"in i){var r=i;this.updatingHandles.add((function(){return r.effectiveScaleRange}),(function(){return n.layerMinMaxScaleChangeHandler()}))}if("fullOpacity"in this.owner){var s=this.owner;this.updatingHandles.add((function(){return s.fullOpacity}),(function(){return e.graphicsCore.opacityChange()}))}if("elevationInfo"in i){var a=i;this.updatingHandles.add((function(){return a.elevationInfo}),(function(t,i){(0,f.m)(t,i)&&e.updatingHandles.addPromise(e.graphicsCore.elevationInfoChange())}))}}},{key:"setup",value:function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){var t,i,r=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=function(e,t,i){return r.graphicsCore.spatialIndex.queryGraphicUIDsInExtent(e,t,i)},this.elevationAlignment.setup(this,t,this.graphicsCore,this.view.elevationProvider),(0,y.r)(this.scaleVisibility)&&"effectiveScaleRange"in this.layer&&(i=this.owner.view.basemapTerrain,this.scaleVisibility.setup(this,this.layer,t,this.graphicsCore,i)),(0,y.r)(this.frustumVisibility)&&this.frustumVisibility.setup(this),this._set("objectStates",new I.s(this.graphicsCore)),e.prev=3,e.next=6,this.graphicsCore.setup({elevationAlignment:this.elevationAlignment,scaleVisibility:this.scaleVisibility,objectStates:this.objectStates});case 6:e.next=13;break;case 8:if(e.prev=8,e.t0=e.catch(3),!(0,c.u)(e.t0)){e.next=12;break}return e.abrupt("return");case 12:throw e.t0;case 13:this.destroyed||(this.handles.add((0,v.l)((function(){return r.view.clippingArea}),(function(){return r._updateClippingExtent()}),v.U)),this._updateClippingExtent(),this._setupSuspendResumeExtent(),this.graphicsCore.startCreateGraphics());case 14:case"end":return e.stop()}}),e,this,[[3,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"destroy",value:function(){this.handles.removeAll(),this.updatingHandles.removeAll(),this._set("elevationAlignment",(0,y.l)(this.elevationAlignment)),this._set("scaleVisibility",(0,y.l)(this.scaleVisibility)),this._set("frustumVisibility",(0,y.l)(this.frustumVisibility)),this._set("objectStates",(0,y.l)(this.objectStates)),this._set("graphicsCore",(0,y.l)(this.graphicsCore))}},{key:"layer",get:function(){return this.owner.layer}},{key:"view",get:function(){return this.owner.view}},{key:"scaleVisibilitySuspended",get:function(){return!(!(0,y.r)(this.scaleVisibility)||!this.scaleVisibility.suspended)}},{key:"frustumVisibilitySuspended",get:function(){return!(!(0,y.r)(this.frustumVisibility)||!this.frustumVisibility.suspended)}},{key:"suspended",get:function(){var e;return null!==(e=this.owner.suspended)&&void 0!==e&&e}},{key:"updating",get:function(){var e;return!!(null!==(e=this.graphicsCore)&&void 0!==e&&e.updating||(0,y.r)(this.scaleVisibility)&&this.scaleVisibility.updating||(0,y.r)(this.frustumVisibility)&&this.frustumVisibility.updating||this.updatingHandles.updating)}},{key:"graphics3DGraphics",get:function(){var e;return null===(e=this.graphicsCore)||void 0===e?void 0:e.graphics3DGraphics}},{key:"graphics3DGraphicsByObjectID",get:function(){var e;return null===(e=this.graphicsCore)||void 0===e?void 0:e.graphics3DGraphicsByObjectID}},{key:"loadedGraphics",get:function(){return this.owner.loadedGraphics}},{key:"fullOpacity",get:function(){var e;return null!==(e=this.owner.fullOpacity)&&void 0!==e?e:1}},{key:"slicePlaneEnabled",get:function(){return this.owner.slicePlaneEnabled}},{key:"updatePolicy",get:function(){return this.owner.updatePolicy}},{key:"notifyGraphicGeometryChanged",value:function(e){this.graphicsCore.notifyGraphicGeometryChanged(e)}},{key:"notifyGraphicVisibilityChanged",value:function(e){this.graphicsCore.notifyGraphicVisibilityChanged(e)}},{key:"getRenderingInfo",value:function(e,t,i){var n=(0,b.a)(e,{renderer:t,arcade:i});if((0,y.r)(n)&&n.color){var r=n.color;r[0]=r[0]/255,r[1]=r[1]/255,r[2]=r[2]/255}return n}},{key:"getRenderingInfoAsync",value:function(e,t,i,n){return(0,b.s)(e,(0,s.Z)({renderer:t,arcade:i},n))}},{key:"getHit",value:function(e){if(this.owner.loadedGraphics){var t=this.owner.loadedGraphics.find((function(t){return t.uid===e}));if(t){var i=this.layer instanceof g.b?this.layer:null,n=(0,b.c)(t,i);return{type:"graphic",graphic:n,layer:n.layer}}}return null}},{key:"whenGraphicBounds",value:function(e,t){return this.graphicsCore?this.graphicsCore.whenGraphicBounds(e,t):Promise.reject()}},{key:"computeAttachmentOrigin",value:function(e,t){return this.graphicsCore?this.graphicsCore.computeAttachmentOrigin(e,t):null}},{key:"getSymbolLayerSize",value:function(e,t){return this.graphicsCore?this.graphicsCore.getSymbolLayerSize(e,t):null}},{key:"maskOccludee",value:function(e){var t=this.objectStates.acquireSet(w.u.MaskOccludee,null),i=t.set,n=t.handle;return this.objectStates.setUid(i,e.uid),n}},{key:"highlight",value:function(e){if(e instanceof m.b)return V;if("number"==typeof e)return this.highlight([e]);if(e instanceof d.g)return this.highlight([e]);if(e instanceof h.j&&(e=e.toArray()),Array.isArray(e)&&e.length>0){if(e[0]instanceof d.g){var t=e.map((function(e){return e.uid})),i=this.objectStates.acquireSet(w.u.Highlight,null),n=i.set,r=i.handle;return this.objectStates.setUids(n,t),r}if("number"==typeof e[0]){var s=e,a=this.objectStates.acquireSet(w.u.Highlight,null),l=a.set,o=a.handle;return this.objectStates.setObjectIds(l,s),o}}return V}},{key:"_setupSuspendResumeExtent",value:function(){var e=this,t=this.scaleVisibility,i=this.frustumVisibility;if(!(0,y.t)(t)||!(0,y.t)(i)){this.handles.add((0,v.l)((function(){var t,i;return{computedExtent:null===(t=e.graphicsCore)||void 0===t?void 0:t.computedExtent,extentPadding:null===(i=e.graphicsCore)||void 0===i?void 0:i.extentPadding}}),(function(n){return function(n){var r=n.computedExtent,s=n.extentPadding;e._suspendResumeExtent=(0,b.k)(r,e._suspendResumeExtent,b.r,s),(0,y.r)(t)&&t.setExtent(e._suspendResumeExtent),(0,y.r)(i)&&i.setExtent(e._suspendResumeExtent)}(n)}),v.w))}}},{key:"_updateClippingExtent",value:function(){var e=this.view.clippingArea;this.graphicsCore.setClippingExtent(e,this.view.spatialReference)&&this.graphicsCore.recreateAllGraphics()}}]),i}(p.d);(0,c.e)([(0,c.d)()],S.prototype,"type",void 0),(0,c.e)([(0,c.d)({constructOnly:!0})],S.prototype,"owner",void 0),(0,c.e)([(0,c.d)()],S.prototype,"layer",null),(0,c.e)([(0,c.d)()],S.prototype,"view",null),(0,c.e)([(0,c.d)({constructOnly:!0})],S.prototype,"graphicsCore",void 0),(0,c.e)([(0,c.d)({constructOnly:!0})],S.prototype,"scaleVisibility",void 0),(0,c.e)([(0,c.d)({constructOnly:!0})],S.prototype,"frustumVisibility",void 0),(0,c.e)([(0,c.d)({readOnly:!0})],S.prototype,"elevationAlignment",void 0),(0,c.e)([(0,c.d)({readOnly:!0})],S.prototype,"objectStates",void 0),(0,c.e)([(0,c.d)({readOnly:!0})],S.prototype,"scaleVisibilitySuspended",null),(0,c.e)([(0,c.d)({readOnly:!0})],S.prototype,"frustumVisibilitySuspended",null),(0,c.e)([(0,c.d)()],S.prototype,"suspended",null),(0,c.e)([(0,c.d)({readOnly:!0})],S.prototype,"updating",null),(0,c.e)([(0,c.d)()],S.prototype,"loadedGraphics",null),(0,c.e)([(0,c.d)()],S.prototype,"fullOpacity",null),(0,c.e)([(0,c.d)()],S.prototype,"slicePlaneEnabled",null),(0,c.e)([(0,c.d)()],S.prototype,"drapeSourceType",void 0),(0,c.e)([(0,c.d)()],S.prototype,"updatePolicy",null),S=(0,c.e)([(0,c.n)("esri.views.3d.layers.graphics.GraphicsProcessor")],S);var V=(0,c.g)()},5900:function(e,t,i){i.d(t,{u:function(){return y}});var n=i(15671),r=i(43144),s=i(60136),a=i(29388),l=i(23132),o=i(80175),u=i(97033),c=i(77196),d=i(75610),h=i(43920),p=function(e){(0,s.Z)(i,e);var t=(0,a.Z)(i);function i(e){var r;return(0,n.Z)(this,i),(r=t.call(this,e)).layer=null,r.parent=null,r}return(0,r.Z)(i,[{key:"initialize",value:function(){var e=this;this.when().catch((function(t){if("layerview:create-error"!==t.name){var i=e.layer&&e.layer.id||"no id",n=e.layer&&e.layer.title||"no title";l.s.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '".concat(n,"', id: '").concat(i,"')"),t)}}))}},{key:"fullOpacity",get:function(){return(0,d.n)(this.get("layer.opacity"),1)*(0,d.n)(this.get("parent.fullOpacity"),1)}},{key:"suspended",get:function(){return!this.canResume()}},{key:"suspendInfo",get:function(){return this.getSuspendInfo()}},{key:"legendEnabled",get:function(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}},{key:"updating",get:function(){var e;return!((null===(e=this.updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}},{key:"updatingProgress",get:function(){return this.updating?0:1}},{key:"visible",get:function(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}},{key:"canResume",value:function(){var e,t,i;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)||!1}},{key:"getSuspendInfo",value:function(){var e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}},{key:"isUpdating",value:function(){return!1}}]),i}((0,u.a)((0,c.s)((0,h.m)(o.n.EventedMixin(l.y)))));(0,l.e)([(0,l.d)()],p.prototype,"fullOpacity",null),(0,l.e)([(0,l.d)()],p.prototype,"layer",void 0),(0,l.e)([(0,l.d)()],p.prototype,"parent",void 0),(0,l.e)([(0,l.d)({readOnly:!0})],p.prototype,"suspended",null),(0,l.e)([(0,l.d)({readOnly:!0})],p.prototype,"suspendInfo",null),(0,l.e)([(0,l.d)({readOnly:!0})],p.prototype,"legendEnabled",null),(0,l.e)([(0,l.d)({type:Boolean,readOnly:!0})],p.prototype,"updating",null),(0,l.e)([(0,l.d)({readOnly:!0})],p.prototype,"updatingProgress",null),(0,l.e)([(0,l.d)()],p.prototype,"visible",null),(0,l.e)([(0,l.d)()],p.prototype,"view",void 0);var y=p=(0,l.e)([(0,l.n)("esri.views.layers.LayerView")],p)},3964:function(e,t,i){i.d(t,{n:function(){return y}});var n=i(74165),r=i(15861),s=i(15671),a=i(43144),l=i(11752),o=i(61120),u=i(60136),c=i(29388),d=i(23132),h=i(36551),p=(i(75610),i(86270)),y=function(e){var t=function(e){(0,u.Z)(i,e);var t=(0,c.Z)(i);function i(){var e;return(0,s.Z)(this,i),(e=t.apply(this,arguments)).slicePlaneEnabled=!1,e.supportsHeightUnitConversion=!1,e}return(0,a.Z)(i,[{key:"postscript",value:function(e){(0,l.Z)((0,o.Z)(i.prototype),"postscript",this).call(this,e),(0,p.g)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}},{key:"_validateHeightModelInfo",value:function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){var t,i,r,s=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new AbortController,i=t.signal,this.handles.add((0,d.g)((function(){return t.abort()}))),e.next=4,(0,h.j)((function(){var e;return null===(e=s.view.defaultsFromMap)||void 0===e?void 0:e.heightModelInfoReady}),i);case 4:if((0,d.H)(i),!(r=(0,p.o)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion))){e.next=8;break}throw r;case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"canResume",value:function(){var e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return(0,l.Z)((0,o.Z)(i.prototype),"canResume",this).call(this)&&(!e||!e.minScale||!e.maxScale||e.minScale>=e.maxScale)}},{key:"getSuspendInfo",value:function(){var e=(0,l.Z)((0,o.Z)(i.prototype),"getSuspendInfo",this).call(this),t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return t&&t.minScale&&t.maxScale&&t.minScale<t.maxScale&&(e.outsideScaleRange=!0),e}}]),i}(e);return(0,d.e)([(0,d.d)()],t.prototype,"view",void 0),(0,d.e)([(0,d.d)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,d.e)([(0,d.n)("esri.views.3d.layers.LayerView3D")],t)}},75370:function(e,t,i){i.d(t,{e:function(){return a}});var n=i(37762),r=i(75610);function s(e,t){return e?t?4:3:t?3:2}function a(e,t,i,a,u){if((0,r.t)(t)||!t.lengths.length)return null;var c="upperLeft"===(null===u||void 0===u?void 0:u.originPosition)?-1:1;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);var d,h=e.coords,p=[],y=i?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],v=t.lengths,f=t.coords,g=s(i,a),b=0,m=(0,n.Z)(v);try{for(m.s();!(d=m.n()).done;){var k=d.value,I=l(y,f,b,k,i,a,c);I&&p.push(I),b+=k*g}}catch(V){m.e(V)}finally{m.f()}if(p.sort((function(e,t){var n=c*e[2]-c*t[2];return 0===n&&i&&(n=e[4]-t[4]),n})),p.length){var w=6*p[0][2];h[0]=p[0][0]/w,h[1]=p[0][1]/w,i&&(w=6*p[0][4],h[2]=0!==w?p[0][3]/w:0),(h[0]<y[0]||h[0]>y[1]||h[1]<y[2]||h[1]>y[3]||i&&(h[2]<y[4]||h[2]>y[5]))&&(h.length=0)}if(!h.length){var S=t.lengths[0]?o(f,0,v[0],i,a):null;if(!S)return null;h[0]=S[0],h[1]=S[1],i&&S.length>2&&(h[2]=S[2])}return e}function l(e,t,i,n,r,a){for(var l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1,o=s(r,a),u=i,c=i+o,d=0,h=0,p=0,y=0,v=0,f=0,g=n-1;f<g;f++,u+=o,c+=o){var b=t[u],m=t[u+1],k=t[u+2],I=t[c],w=t[c+1],S=t[c+2],V=b*w-I*m;y+=V,d+=(b+I)*V,h+=(m+w)*V,r&&(p+=(k+S)*(V=b*S-I*k),v+=V),b<e[0]&&(e[0]=b),b>e[1]&&(e[1]=b),m<e[2]&&(e[2]=m),m>e[3]&&(e[3]=m),r&&(k<e[4]&&(e[4]=k),k>e[5]&&(e[5]=k))}if(y*l>0&&(y*=-1),v*l>0&&(v*=-1),!y)return null;var E=[d,h,.5*y];return r&&(E[3]=p,E[4]=.5*v),E}function o(e,t,i,n,r){for(var a=s(n,r),l=t,o=t+a,p=0,y=0,v=0,f=0,g=0,b=i-1;g<b;g++,l+=a,o+=a){var m=e[l],k=e[l+1],I=e[l+2],w=e[o],S=e[o+1],V=e[o+2],E=n?c(m,k,I,w,S,V):u(m,k,w,S);if(E)if(p+=E,n){var C=h(m,k,I,w,S,V);y+=E*C[0],v+=E*C[1],f+=E*C[2]}else{var O=d(m,k,w,S);y+=E*O[0],v+=E*O[1]}}return p>0?n?[y/p,v/p,f/p]:[y/p,v/p]:i>0?n?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function u(e,t,i,n){var r=i-e,s=n-t;return Math.sqrt(r*r+s*s)}function c(e,t,i,n,r,s){var a=n-e,l=r-t,o=s-i;return Math.sqrt(a*a+l*l+o*o)}function d(e,t,i,n){return[e+.5*(i-e),t+.5*(n-t)]}function h(e,t,i,n,r,s){return[e+.5*(n-e),t+.5*(r-t),i+.5*(s-i)]}},91034:function(e,t,i){i.d(t,{l:function(){return a}});var n=i(75610),r=i(30709),s=i(87603);function a(e){var t=e.view.spatialReference,i=e.layer.fullExtent,a=(0,n.r)(i)&&i.spatialReference;if((0,n.t)(i)||!a)return Promise.resolve(null);if(a.equals(t))return Promise.resolve(i.clone());var l=(0,r.M)(i,t);return(0,n.r)(l)?Promise.resolve(l):e.view.state.isLocal?(0,s.projectGeometry)(i,t,e.layer.portalItem).then((function(t){return!e.destroyed&&t?t:void 0})).catch((function(){return null})):Promise.resolve(null)}},18392:function(e,t,i){i.d(t,{a:function(){return l}});var n,r,s,a={exports:{}};n=a,r=function(){function e(i,n,r,s,a){for(;s>r;){if(s-r>600){var l=s-r+1,o=n-r+1,u=Math.log(l),c=.5*Math.exp(2*u/3),d=.5*Math.sqrt(u*c*(l-c)/l)*(o-l/2<0?-1:1);e(i,n,Math.max(r,Math.floor(n-o*c/l+d)),Math.min(s,Math.floor(n+(l-o)*c/l+d)),a)}var h=i[n],p=r,y=s;for(t(i,r,n),a(i[s],h)>0&&t(i,r,s);p<y;){for(t(i,p,y),p++,y--;a(i[p],h)<0;)p++;for(;a(i[y],h)>0;)y--}0===a(i[r],h)?t(i,r,y):t(i,++y,s),y<=n&&(r=y+1),n<=y&&(s=y-1)}}function t(e,t,i){var n=e[t];e[t]=e[i],e[i]=n}function i(e,t){return e<t?-1:e>t?1:0}return function(t,n,r,s,a){e(t,n,r||0,s||t.length-1,a||i)}},void 0!==(s=r())&&(n.exports=s);var l=a.exports}}]);
//# sourceMappingURL=8885.3e814e44.chunk.js.map