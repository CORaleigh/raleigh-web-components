"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[7115],{67115:function(e,t,i){i.r(t);var n=i(74165),r=i(37762),a=i(15861),o=i(15671),s=i(43144),l=i(60136),u=i(29388),p=i(48848),c=i(25577),y=i(93314),d=i(50690),h=(i(93661),i(2959)),v=i(68781),f=i(91502),g=i(33371),m=i(35202),w=i(52195),b=(i(62610),i(40114),i(82474),i(59984),i(74384),i(46817),i(40558),i(20302),i(53586),i(65094),i(60369),i(92072),i(37856),i(15751),i(2821),i(37944),i(86086),i(21385),i(89794),i(48200),i(71802),i(85253),i(93209),i(25456),i(46337),i(81556),i(93116),i(66577),i(33794),i(71147),i(84186),i(64998),i(56162),i(15529),i(47855),i(70449),i(22603),i(56546),i(39926),i(6762),i(8141),i(26151),i(91681),i(69641),i(15436),i(84234),i(43066),i(18030),i(33795),i(79557),i(64095),i(1206),i(5650),i(35602),i(54233),i(18144),i(93122),i(75833),i(27205),i(82017),i(91242),i(21438),i(70607),i(29048),i(68136),i(63999),i(45184),i(43924),i(25217),i(630),i(23075),i(63212),i(39994),i(69717),i(62753),i(95249),i(75255),i(65415),i(83948),i(63393),i(90442),i(64854),i(31698),i(35496),i(26313),i(26789),i(51732),i(85113),i(46737),i(52113),i(66911),i(33563),i(17327),i(6994),i(7131),i(1797),i(13239),i(92739),i(74337),i(44954),i(4679),i(62312),i(60491),i(87917),i(52559),i(62466),i(50253),i(63504),i(97880),i(5430),i(53921),i(35237),i(89181),i(69768),i(65703),i(64419),i(10309),i(55944),i(20675),i(50796),i(87753),i(18007),i(51920),i(12953),i(95415),i(62399),i(44513),i(77755),i(88659),i(87424),function(e){(0,l.Z)(i,e);var t=(0,u.Z)(i);function i(){var e;return(0,o.Z)(this,i),(e=t.apply(this,arguments))._graphicsViewMap={},e._popupTemplates=new Map,e.graphicsViews=[],e}return(0,s.Z)(i,[{key:"hitTest",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,i){var a,o=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.graphicsViews.length){e.next=2;break}return e.abrupt("return",null);case 2:return a=this.layer,e.abrupt("return",this.graphicsViews.reverse().map((function(e){var i,n=o._popupTemplates.get(e),s=e.hitTest(t),l=(0,r.Z)(s);try{for(l.s();!(i=l.n()).done;){var u=i.value;u.layer=a,u.sourceLayer=a,u.popupTemplate=n}}catch(p){l.e(p)}finally{l.f()}return s})).flat().map((function(e){return{type:"graphic",graphic:e,layer:a,mapPoint:t}})));case 4:case"end":return e.stop()}}),e,this)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"update",value:function(e){if(this.graphicsViews){var t,i=(0,r.Z)(this.graphicsViews);try{for(i.s();!(t=i.n()).done;){t.value.processUpdate(e)}}catch(n){i.e(n)}finally{i.f()}}}},{key:"attach",value:function(){var e=this;this.handles.add([(0,d.l)((function(){var t;return null===(t=e.layer)||void 0===t?void 0:t.featureCollections}),(function(t){e._clear();var i,n=(0,r.Z)(t);try{for(n.s();!(i=n.n()).done;){var a=i.value,o=a.popupInfo,s=a.featureSet,l=a.layerDefinition,u=v.default.fromJSON(s),p=new y.j(u.features),d=l.drawingInfo,f=o?c.k.fromJSON(o):null,w=(0,h.t)(d.renderer),b=new m.o({requestUpdateCallback:function(){return e.requestUpdate()},view:e.view,graphics:p,renderer:w,container:new g.i(e.view.featuresTilingScheme)});e._graphicsViewMap[u.geometryType]=b,e._popupTemplates.set(b,f),"polygon"!==u.geometryType||e.layer.polygonSymbol?"polyline"!==u.geometryType||e.layer.lineSymbol?"point"!==u.geometryType||e.layer.pointSymbol||(e.layer.pointSymbol=w.symbol):e.layer.lineSymbol=w.symbol:e.layer.polygonSymbol=w.symbol,e.graphicsViews.push(b),e.container.addChild(b.container)}}catch(k){n.e(k)}finally{n.f()}}),d.h),(0,d.l)((function(){var t;return null===(t=e.layer)||void 0===t?void 0:t.polygonSymbol}),(function(t){e._graphicsViewMap.polygon.renderer=new h.p({symbol:t})}),d.h),(0,d.l)((function(){var t;return null===(t=e.layer)||void 0===t?void 0:t.lineSymbol}),(function(t){e._graphicsViewMap.polyline.renderer=new h.p({symbol:t})}),d.h),(0,d.l)((function(){var t;return null===(t=e.layer)||void 0===t?void 0:t.pointSymbol}),(function(t){e._graphicsViewMap.point.renderer=new h.p({symbol:t})}),d.h)],"georsslayerview")}},{key:"detach",value:function(){this.handles.remove("georsslayerview"),this._clear()}},{key:"moveStart",value:function(){}},{key:"moveEnd",value:function(){}},{key:"viewChange",value:function(){var e,t=(0,r.Z)(this.graphicsViews);try{for(t.s();!(e=t.n()).done;){e.value.viewChange()}}catch(i){t.e(i)}finally{t.f()}}},{key:"_clear",value:function(){this.container.removeAllChildren();var e,t=(0,r.Z)(this.graphicsViews);try{for(t.s();!(e=t.n()).done;){e.value.destroy()}}catch(i){t.e(i)}finally{t.f()}this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}}]),i}((0,f.y)(w.u))),k=b=(0,p.e)([(0,p.n)("esri.views.2d.layers.GeoRSSLayerView2D")],b);t.default=k},33371:function(e,t,i){i.d(t,{i:function(){return p}});var n=i(15671),r=i(43144),a=i(11752),o=i(61120),s=i(60136),l=i(29388),u=i(1206),p=function(e){(0,s.Z)(i,e);var t=(0,l.Z)(i);function i(){return(0,n.Z)(this,i),t.apply(this,arguments)}return(0,r.Z)(i,[{key:"renderChildren",value:function(e){this.attributeView.update(),this.children.some((function(e){return e.hasData}))&&(this.attributeView.bindTextures(e.context,!1),(0,a.Z)((0,o.Z)(i.prototype),"renderChildren",this).call(this,e),e.drawPhase===u.I.MAP&&this._renderChildren(e),this.hasHighlight()&&e.drawPhase===u.I.HIGHLIGHT&&this._renderHighlight(e),this._boundsRenderer&&this._boundsRenderer.doRender(e))}},{key:"_renderHighlight",value:function(e){var t=e.painter.effects.highlight;t.bind(e),this._renderChildren(e,t.defines),t.draw(e),t.unbind()}}]),i}(i(35202).t)},52195:function(e,t,i){i.d(t,{u:function(){return h}});var n=i(15671),r=i(43144),a=i(60136),o=i(29388),s=i(48848),l=i(37856),u=i(630),p=i(92072),c=i(93661),y=i(65094),d=function(e){(0,a.Z)(i,e);var t=(0,o.Z)(i);function i(e){var r;return(0,n.Z)(this,i),(r=t.call(this,e)).layer=null,r.parent=null,r}return(0,r.Z)(i,[{key:"initialize",value:function(){var e=this;this.when().catch((function(t){if("layerview:create-error"!==t.name){var i=e.layer&&e.layer.id||"no id",n=e.layer&&e.layer.title||"no title";s.a.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '".concat(n,"', id: '").concat(i,"')"),t)}}))}},{key:"fullOpacity",get:function(){return(0,c.v)(this.get("layer.opacity"),1)*(0,c.v)(this.get("parent.fullOpacity"),1)}},{key:"suspended",get:function(){return!this.canResume()}},{key:"suspendInfo",get:function(){return this.getSuspendInfo()}},{key:"legendEnabled",get:function(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}},{key:"updating",get:function(){var e;return!((null===(e=this.updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}},{key:"updatingProgress",get:function(){return this.updating?0:1}},{key:"visible",get:function(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)},set:function(e){this._overrideIfSome("visible",e)}},{key:"canResume",value:function(){var e,t,i;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)||!1}},{key:"getSuspendInfo",value:function(){var e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}},{key:"isUpdating",value:function(){return!1}}]),i}((0,u.a)((0,p.s)((0,y.m)(l.n.EventedMixin(s.m)))));(0,s.e)([(0,s.y)()],d.prototype,"fullOpacity",null),(0,s.e)([(0,s.y)()],d.prototype,"layer",void 0),(0,s.e)([(0,s.y)()],d.prototype,"parent",void 0),(0,s.e)([(0,s.y)({readOnly:!0})],d.prototype,"suspended",null),(0,s.e)([(0,s.y)({readOnly:!0})],d.prototype,"suspendInfo",null),(0,s.e)([(0,s.y)({readOnly:!0})],d.prototype,"legendEnabled",null),(0,s.e)([(0,s.y)({type:Boolean,readOnly:!0})],d.prototype,"updating",null),(0,s.e)([(0,s.y)({readOnly:!0})],d.prototype,"updatingProgress",null),(0,s.e)([(0,s.y)()],d.prototype,"visible",null),(0,s.e)([(0,s.y)()],d.prototype,"view",void 0);var h=d=(0,s.e)([(0,s.n)("esri.views.layers.LayerView")],d)},91502:function(e,t,i){i.d(t,{y:function(){return I}});var n=i(11752),r=i(61120),a=i(15671),o=i(43144),s=i(60136),l=i(29388),u=i(48848),p=i(93314),c=i(81556),y=i(50690),d=(i(93661),i(84234)),h=i(40114),v=i(74384),f=i(82474),g=i(56162),m=i(46817),w=function(e){(0,s.Z)(i,e);var t=(0,l.Z)(i);function i(){return(0,a.Z)(this,i),t.apply(this,arguments)}return(0,o.Z)(i,[{key:"version",get:function(){return this.commitVersionProperties(),(this._get("version")||0)+1}}]),i}(h.l);(0,u.e)([(0,u.y)({readOnly:!0})],w.prototype,"version",null);var b,k=w=(0,u.e)([(0,u.n)("esri.views.layers.support.ClipArea")],w),S=b=function(e){(0,s.Z)(i,e);var t=(0,l.Z)(i);function i(e){var n;return(0,a.Z)(this,i),(n=t.call(this,e)).type="rect",n.left=null,n.right=null,n.top=null,n.bottom=null,n}return(0,o.Z)(i,[{key:"clone",value:function(){return new b({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}},{key:"commitVersionProperties",value:function(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}}]),i}(k);(0,u.e)([(0,u.y)({type:[Number,String],json:{write:!0}})],S.prototype,"left",void 0),(0,u.e)([(0,u.y)({type:[Number,String],json:{write:!0}})],S.prototype,"right",void 0),(0,u.e)([(0,u.y)({type:[Number,String],json:{write:!0}})],S.prototype,"top",void 0),(0,u.e)([(0,u.y)({type:[Number,String],json:{write:!0}})],S.prototype,"bottom",void 0);var Z,R=S=b=(0,u.e)([(0,u.n)("esri.views.layers.support.ClipRect")],S),_={base:f.p,key:"type",typeMap:{extent:m.w,polygon:v.v}},V=Z=function(e){(0,s.Z)(i,e);var t=(0,l.Z)(i);function i(e){var n;return(0,a.Z)(this,i),(n=t.call(this,e)).type="geometry",n.geometry=null,n}return(0,o.Z)(i,[{key:"clone",value:function(){var e,t;return new Z({geometry:null!==(e=null===(t=this.geometry)||void 0===t?void 0:t.clone())&&void 0!==e?e:null})}},{key:"commitVersionProperties",value:function(){this.commitProperty("geometry")}}]),i}(k);(0,u.e)([(0,u.y)({types:_,json:{read:g.v,write:!0}})],V.prototype,"geometry",void 0);var P=V=Z=(0,u.e)([(0,u.n)("esri.views.layers.support.Geometry")],V),C=function(e){(0,s.Z)(i,e);var t=(0,l.Z)(i);function i(e){var n;return(0,a.Z)(this,i),(n=t.call(this,e)).type="path",n.path=[],n}return(0,o.Z)(i,[{key:"commitVersionProperties",value:function(){this.commitProperty("path")}}]),i}(k);(0,u.e)([(0,u.y)({type:[[[Number]]],json:{write:!0}})],C.prototype,"path",void 0);var T=C=(0,u.e)([(0,u.n)("esri.views.layers.support.Path")],C),q=p.j.ofType({key:"type",base:null,typeMap:{rect:R,path:T,geometry:P}}),I=function(e){var t=function(e){(0,s.Z)(i,e);var t=(0,l.Z)(i);function i(){var e;return(0,a.Z)(this,i),(e=t.apply(this,arguments)).attached=!1,e.clips=new q,e.lastUpdateId=-1,e.moving=!1,e.updateRequested=!1,e.visibleAtCurrentScale=!1,e}return(0,o.Z)(i,[{key:"initialize",value:function(){var e,t,i,n,r=this,a=null===(e=null===(t=this.view)||void 0===t?void 0:t.spatialReferenceLocked)||void 0===e||e;(null===(i=this.view)||void 0===i?void 0:i.spatialReference)&&a&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new u.s("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new d.i),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.handles.add([(0,y.l)((function(){return r.suspended}),(function(e){r.container&&(r.container.visible=!e),r.view&&!e&&r.updateRequested&&r.view.requestUpdate()}),y.w),(0,y.l)((function(){var e,t;return null!==(e=null===(t=r.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1}),(function(e){r.container&&(r.container.opacity=e)}),y.w),(0,y.l)((function(){return r.layer&&"blendMode"in r.layer?r.layer.blendMode:"normal"}),(function(e){r.container&&(r.container.blendMode=e)}),y.w),(0,y.l)((function(){return r.layer&&"effect"in r.layer?r.layer.effect:null}),(function(e){r.container&&(r.container.effect=e)}),y.w),(0,y.a)((function(){return r.clips}),"change",(function(){r.container&&(r.container.clips=r.clips)}),y.w),(0,y.l)((function(){var e;return{scale:null===(e=r.view)||void 0===e?void 0:e.scale,scaleRange:r.layer&&"effectiveScaleRange"in r.layer?r.layer.effectiveScaleRange:null}}),(function(e){var t=e.scale,i=t&&r.isVisibleAtScale(t);i!==r.visibleAtCurrentScale&&r._set("visibleAtCurrentScale",i)}),y.w)]),null!==(n=this.view)&&void 0!==n&&n.whenLayerView?this.view.whenLayerView(this.layer).then((function(e){e===r&&r.processAttach()}),(function(){})):this.when().then((function(){r.processAttach()}),(function(){})))}},{key:"destroy",value:function(){this.processDetach(),this.updateRequested=!1}},{key:"spatialReferenceSupported",get:function(){var e,t=null===(e=this.view)||void 0===e?void 0:e.spatialReference;return null==t||this.supportsSpatialReference(t)}},{key:"updating",get:function(){var e;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null===(e=this.updatingHandles)||void 0===e||!e.updating))}},{key:"processAttach",value:function(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}},{key:"processDetach",value:function(){this.attached&&(this.attached=!1,this.detach(),this.updateRequested=!1)}},{key:"isVisibleAtScale",value:function(e){var t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;var i=t.minScale,n=t.maxScale;return(0===i||e<=i)&&(0===n||e>=n)}},{key:"requestUpdate",value:function(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}},{key:"processUpdate",value:function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}},{key:"hitTest",value:function(e,t){return Promise.resolve(null)}},{key:"supportsSpatialReference",value:function(e){return!0}},{key:"canResume",value:function(){return!!this.spatialReferenceSupported&&!!(0,n.Z)((0,r.Z)(i.prototype),"canResume",this).call(this)&&this.visibleAtCurrentScale}},{key:"getSuspendInfo",value:function(){var e=(0,n.Z)((0,r.Z)(i.prototype),"getSuspendInfo",this).call(this),t=!this.spatialReferenceSupported,a=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),a&&(e.outsideScaleRange=a),e}}]),i}(e);return(0,u.e)([(0,u.y)()],t.prototype,"attached",void 0),(0,u.e)([(0,u.y)({type:q,set:function(e){var t=(0,c.n)(e,this._get("clips"),q);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,u.e)([(0,u.y)()],t.prototype,"container",void 0),(0,u.e)([(0,u.y)()],t.prototype,"moving",void 0),(0,u.e)([(0,u.y)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,u.e)([(0,u.y)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,u.e)([(0,u.y)()],t.prototype,"updateRequested",void 0),(0,u.e)([(0,u.y)()],t.prototype,"updating",null),(0,u.e)([(0,u.y)()],t.prototype,"view",void 0),(0,u.e)([(0,u.y)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",void 0),t=(0,u.e)([(0,u.n)("esri.views.2d.layers.LayerView2D")],t)}}}]);
//# sourceMappingURL=7115.9c81c00e.chunk.js.map