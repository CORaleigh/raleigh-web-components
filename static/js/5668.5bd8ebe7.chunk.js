"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[5668],{55540:function(e,t,i){i.d(t,{i:function(){return h}});var n=i(15671),r=i(43144),a=i(11752),s=i(61120),o=i(60136),u=i(29388),l=i(3441),h=function(e){(0,o.Z)(i,e);var t=(0,u.Z)(i);function i(){return(0,n.Z)(this,i),t.apply(this,arguments)}return(0,r.Z)(i,[{key:"renderChildren",value:function(e){this.attributeView.bindTextures(e.context,!1),this.children.some((function(e){return e.hasData}))&&((0,a.Z)((0,s.Z)(i.prototype),"renderChildren",this).call(this,e),e.drawPhase===l.I.MAP&&this._renderChildren(e),this.hasHighlight()&&e.drawPhase===l.I.HIGHLIGHT&&this._renderHighlight(e),this._boundsRenderer&&this._boundsRenderer.doRender(e))}},{key:"_renderHighlight",value:function(e){var t=e.painter.effects.highlight;t.bind(e),this._renderChildren(e,t.defines),t.draw(e),t.unbind()}}]),i}(i(28372).t)},35668:function(e,t,i){i.r(t);var n=i(37762),r=i(74165),a=i(15861),s=i(15671),o=i(43144),u=i(60136),l=i(29388),h=i(50165),p=i(89031),d=i(40133),c=i(35744),v=i(55540),y=i(28372),f=i(60470),g=(i(33530),i(96263),i(77322),i(32335),i(31278),i(13994),i(98496),i(4483),i(79747),i(42),i(52155),i(75662),i(17493),i(62980),i(16377),i(9887),i(88406),i(66307),i(2760),i(42488),i(9330),i(79146),i(3029),i(42687),i(78330),i(78697),i(78664),i(73627),i(14527),i(68634),i(69738),i(73393),i(87110),i(72577),i(61772),i(92870),i(26079),i(22984),i(15508),i(17691),i(48561),i(55269),i(73428),i(86931),i(51613),i(80392),i(10489),i(62298),i(2815),i(2326),i(90339),i(76375),i(82046),i(49961),i(31412),i(53089),i(83172),i(66270),i(60418),i(84539),i(75366),i(5233),i(36235),i(61340),i(57439),i(59075),i(97823),i(49350),i(89354),i(16897),i(47642),i(63334),i(38419),i(84231),i(38665),i(32717),i(39853),i(94872),i(3969),i(43895),i(30594),i(73267),i(22628),i(24982),i(46584),i(7093),i(85966),i(28003),i(49796),i(58428),i(8049),i(80933),i(40858),i(95076),i(56389),i(86738),i(69205),i(50338),i(33074),i(31134),i(41524),i(68668),i(55916),i(66319),i(24781),i(2329),i(37243),i(97345),i(39001),i(84913),i(84823),i(9411),i(14826),i(64620),i(22225),i(75272),i(4197),i(86905),i(64997),i(26208),i(2816),i(46237),i(98428),i(5792),i(42094),i(67871),i(75097),i(47672),i(98643),i(83745),i(96401),i(87833),i(21523),i(84192),i(99057),i(26995),i(3096),i(99797),i(3441),i(45578),i(6819),i(47692),i(33265),i(20592),i(44365),i(77372),i(77006),i(29648),i(35650),i(7513),i(48968),i(48606),i(68792),i(49510),i(6927),i(82909),i(95734),i(48308),i(35341),i(25346),i(50463),i(94640),i(14023),i(27969),i(66281),i(69754),i(38802),i(66156),i(25593),i(69379),i(22494),i(18392),i(89324),i(6283),i(98057),i(20422),i(38969),i(75105),i(25715),i(51386),i(81044),i(40100),i(88533),i(77639),i(13089),i(49862),i(37783),{remove:function(){},pause:function(){},resume:function(){}}),w=function(e){(0,u.Z)(i,e);var t=(0,l.Z)(i);function i(){var e;return(0,s.Z)(this,i),(e=t.apply(this,arguments))._highlightIds=new Map,e}return(0,o.Z)(i,[{key:"attach",value:function(){var e=this;this.graphicsView=new y.a({requestUpdateCallback:function(){return e.requestUpdate()},view:this.view,graphics:this.layer.graphics,container:new v.i(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")}},{key:"detach",value:function(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.graphicsView=null,this.handles.remove("graphicslayerview2d")}},{key:"hitTest",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var i=this;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.graphicsView?this.graphicsView.hitTest(t).map((function(e){return{type:"graphic",graphic:e,mapPoint:t,layer:i.layer}})):null);case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"fetchPopupFeatures",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.graphicsView){e.next=2;break}return e.abrupt("return",this.graphicsView.hitTest(t).filter((function(e){return!!e.popupTemplate})));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"queryGraphics",value:function(){return Promise.resolve(this.graphicsView.graphics)}},{key:"update",value:function(e){this.graphicsView.processUpdate(e)}},{key:"moveStart",value:function(){}},{key:"viewChange",value:function(){this.graphicsView.viewChange()}},{key:"moveEnd",value:function(){}},{key:"isUpdating",value:function(){return!this.graphicsView||this.graphicsView.updating}},{key:"highlight",value:function(e){var t,i,n=this;return"number"==typeof e?i=[e]:e instanceof p.g?i=[e.uid]:Array.isArray(e)&&e.length>0?i="number"==typeof e[0]?e:e.map((function(e){return e&&e.uid})):d.j.isCollection(e)&&e.length>0&&(i=e.map((function(e){return e&&e.uid})).toArray()),i=null===(t=i)||void 0===t?void 0:t.filter((function(e){return null!=e})),i.length?(this._addHighlight(i),{remove:function(){return n._removeHighlight(i)}}):g}},{key:"_addHighlight",value:function(e){var t,i=(0,n.Z)(e);try{for(i.s();!(t=i.n()).done;){var r=t.value;if(this._highlightIds.has(r)){var a=this._highlightIds.get(r);this._highlightIds.set(r,a+1)}else this._highlightIds.set(r,1)}}catch(s){i.e(s)}finally{i.f()}this._updateHighlight()}},{key:"_removeHighlight",value:function(e){var t,i=(0,n.Z)(e);try{for(i.s();!(t=i.n()).done;){var r=t.value;if(this._highlightIds.has(r)){var a=this._highlightIds.get(r)-1;0===a?this._highlightIds.delete(r):this._highlightIds.set(r,a)}}}catch(s){i.e(s)}finally{i.f()}this._updateHighlight()}},{key:"_updateHighlight",value:function(){var e;null===(e=this.graphicsView)||void 0===e||e.setHighlight(Array.from(this._highlightIds.keys()))}}]),i}((0,c.f)(f.u));(0,h.e)([(0,h.d)()],w.prototype,"graphicsView",void 0);var m=w=(0,h.e)([(0,h.n)("esri.views.2d.layers.GraphicsLayerView2D")],w);t.default=m},60470:function(e,t,i){i.d(t,{u:function(){return c}});var n=i(15671),r=i(43144),a=i(60136),s=i(29388),o=i(50165),u=i(40133),l=i(22984),h=i(17493),p=i(52155),d=function(e){(0,a.Z)(i,e);var t=(0,s.Z)(i);function i(e){var r;return(0,n.Z)(this,i),(r=t.call(this,e)).layer=null,r.parent=null,r}return(0,r.Z)(i,[{key:"initialize",value:function(){var e=this;this.when().catch((function(t){if("layerview:create-error"!==t.name){var i=e.layer&&e.layer.id||"no id",n=e.layer&&e.layer.title||"no title";o.s.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '".concat(n,"', id: '").concat(i,"')"),t)}}))}},{key:"fullOpacity",get:function(){return(0,o.af)(this.get("layer.opacity"),1)*(0,o.af)(this.get("parent.fullOpacity"),1)}},{key:"suspended",get:function(){return!this.canResume()}},{key:"suspendInfo",get:function(){return this.getSuspendInfo()}},{key:"legendEnabled",get:function(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}},{key:"updating",get:function(){var e;return!((null===(e=this.updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}},{key:"updatingProgress",get:function(){return this.updating?0:1}},{key:"visible",get:function(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}},{key:"canResume",value:function(){var e,t,i;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)||!1}},{key:"getSuspendInfo",value:function(){var e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}},{key:"isUpdating",value:function(){return!1}}]),i}((0,l.a)((0,h.s)((0,p.m)(u.n.EventedMixin(o.y)))));(0,o.e)([(0,o.d)()],d.prototype,"fullOpacity",null),(0,o.e)([(0,o.d)()],d.prototype,"layer",void 0),(0,o.e)([(0,o.d)()],d.prototype,"parent",void 0),(0,o.e)([(0,o.d)({readOnly:!0})],d.prototype,"suspended",null),(0,o.e)([(0,o.d)({readOnly:!0})],d.prototype,"suspendInfo",null),(0,o.e)([(0,o.d)({readOnly:!0})],d.prototype,"legendEnabled",null),(0,o.e)([(0,o.d)({type:Boolean,readOnly:!0})],d.prototype,"updating",null),(0,o.e)([(0,o.d)({readOnly:!0})],d.prototype,"updatingProgress",null),(0,o.e)([(0,o.d)()],d.prototype,"visible",null),(0,o.e)([(0,o.d)()],d.prototype,"view",void 0);var c=d=(0,o.e)([(0,o.n)("esri.views.layers.LayerView")],d)},35744:function(e,t,i){i.d(t,{f:function(){return A}});var n,r=i(11752),a=i(61120),s=i(43144),o=i(15671),u=i(60136),l=i(29388),h=i(50165),p=i(40133),d=i(42687),c=i(73627),v=i(14527),y=i(32335),f=(i(33530),i(77322)),g=i(78664),w=i(96263),m=i(31278),k=function(e){(0,u.Z)(i,e);var t=(0,l.Z)(i);function i(){return(0,o.Z)(this,i),t.apply(this,arguments)}return(0,s.Z)(i)}(y.l),b=k=(0,h.e)([(0,h.n)("esri.views.layers.support.ClipArea")],k),Z=n=function(e){(0,u.Z)(i,e);var t=(0,l.Z)(i);function i(){var e;return(0,o.Z)(this,i),(e=t.apply(this,arguments)).type="rect",e.left=null,e.right=null,e.top=null,e.bottom=null,e}return(0,s.Z)(i,[{key:"clone",value:function(){return new n({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}},{key:"version",get:function(){return(this._get("version")||0)+1}}]),i}(b);(0,h.e)([(0,h.d)({type:[Number,String],json:{write:!0}})],Z.prototype,"left",void 0),(0,h.e)([(0,h.d)({type:[Number,String],json:{write:!0}})],Z.prototype,"right",void 0),(0,h.e)([(0,h.d)({type:[Number,String],json:{write:!0}})],Z.prototype,"top",void 0),(0,h.e)([(0,h.d)({type:[Number,String],json:{write:!0}})],Z.prototype,"bottom",void 0),(0,h.e)([(0,h.d)({readOnly:!0})],Z.prototype,"version",null);var R,_=Z=n=(0,h.e)([(0,h.n)("esri.views.layers.support.ClipRect")],Z),S={base:f.p,key:"type",typeMap:{extent:w.M,polygon:m.v}},V=R=function(e){(0,u.Z)(i,e);var t=(0,l.Z)(i);function i(){var e;return(0,o.Z)(this,i),(e=t.apply(this,arguments)).type="geometry",e.geometry=null,e}return(0,s.Z)(i,[{key:"version",get:function(){return(this._get("version")||0)+1}},{key:"clone",value:function(){return new R({geometry:this.geometry.clone()})}}]),i}(b);(0,h.e)([(0,h.d)({types:S,json:{read:g.d,write:!0}})],V.prototype,"geometry",void 0),(0,h.e)([(0,h.d)({readOnly:!0})],V.prototype,"version",null);var I=V=R=(0,h.e)([(0,h.n)("esri.views.layers.support.Geometry")],V),q=function(e){(0,u.Z)(i,e);var t=(0,l.Z)(i);function i(){var e;return(0,o.Z)(this,i),(e=t.apply(this,arguments)).type="path",e.path=[],e}return(0,s.Z)(i,[{key:"version",get:function(){return(this._get("version")||0)+1}}]),i}(b);(0,h.e)([(0,h.d)({type:[[[Number]]],json:{write:!0}})],q.prototype,"path",void 0),(0,h.e)([(0,h.d)({readOnly:!0})],q.prototype,"version",null);var C=q=(0,h.e)([(0,h.n)("esri.views.layers.support.Path")],q),H=p.j.ofType({key:"type",base:b,typeMap:{rect:_,path:C,geometry:I}}),A=function(e){var t=function(e){(0,u.Z)(i,e);var t=(0,l.Z)(i);function i(){var e;return(0,o.Z)(this,i),(e=t.apply(this,arguments)).attached=!1,e.clips=new H,e.lastUpdateId=-1,e.moving=!1,e.updateRequested=!1,e}return(0,s.Z)(i,[{key:"initialize",value:function(){var e,t,i,n,r=this,a=null===(e=null===(t=this.view)||void 0===t?void 0:t.spatialReferenceLocked)||void 0===e||e;(null===(i=this.view)||void 0===i?void 0:i.spatialReference)&&a&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new h.a("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new v.s),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([(0,c.l)((function(){return r.suspended}),(function(e){r.container&&(r.container.visible=!e),r.view&&!e&&r.updateRequested&&r.view.requestUpdate()}),c.w),(0,c.l)((function(){var e,t;return null!==(e=null===(t=r.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1}),(function(e){r.container&&(r.container.opacity=e)}),c.w),(0,c.l)((function(){return r.layer&&"blendMode"in r.layer?r.layer.blendMode:"normal"}),(function(e){r.container&&(r.container.blendMode=e)}),c.w),(0,c.l)((function(){return r.layer&&"effect"in r.layer?r.layer.effect:null}),(function(e){r.container&&(r.container.effect=e)}),c.w),(0,c.a)((function(){return r.clips}),"change",(function(){r.container&&(r.container.clips=r.clips)}))]),null!==(n=this.view)&&void 0!==n&&n.whenLayerView?this.view.whenLayerView(this.layer).then((function(e){e===r&&r.processAttach()}),(function(){})):this.when().then((function(){r.processAttach()}),(function(){})))}},{key:"destroy",value:function(){this.processDetach(),this.updateRequested=!1}},{key:"spatialReferenceSupported",get:function(){var e,t=null===(e=this.view)||void 0===e?void 0:e.spatialReference;return null==t||this.supportsSpatialReference(t)}},{key:"updating",get:function(){var e;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null===(e=this.updatingHandles)||void 0===e||!e.updating))}},{key:"visibleAtCurrentScale",get:function(){return this.isVisibleAtScale(this.view.scale)}},{key:"processAttach",value:function(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}},{key:"processDetach",value:function(){this.attached&&(this.attached=!1,this.detach(),this.updateRequested=!1)}},{key:"isVisibleAtScale",value:function(e){var t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;var i=t.minScale,n=t.maxScale;return(0===i||e<=i)&&(0===n||e>=n)}},{key:"requestUpdate",value:function(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}},{key:"processUpdate",value:function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}},{key:"hitTest",value:function(e,t){return Promise.resolve(null)}},{key:"supportsSpatialReference",value:function(e){return!0}},{key:"canResume",value:function(){return!!this.spatialReferenceSupported&&!!(0,r.Z)((0,a.Z)(i.prototype),"canResume",this).call(this)&&this.visibleAtCurrentScale}},{key:"getSuspendInfo",value:function(){var e=(0,r.Z)((0,a.Z)(i.prototype),"getSuspendInfo",this).call(this),t=!this.spatialReferenceSupported,n=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),n&&(e.outsideScaleRange=n),e}}]),i}(e);return(0,h.e)([(0,h.d)()],t.prototype,"attached",void 0),(0,h.e)([(0,h.d)({type:H,set:function(e){var t=(0,d.n)(e,this._get("clips"),H);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,h.e)([(0,h.d)()],t.prototype,"container",void 0),(0,h.e)([(0,h.d)()],t.prototype,"moving",void 0),(0,h.e)([(0,h.d)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,h.e)([(0,h.d)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,h.e)([(0,h.d)()],t.prototype,"updateRequested",void 0),(0,h.e)([(0,h.d)()],t.prototype,"updating",null),(0,h.e)([(0,h.d)()],t.prototype,"view",void 0),(0,h.e)([(0,h.d)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",null),t=(0,h.e)([(0,h.n)("esri.views.2d.layers.LayerView2D")],t)}}}]);
//# sourceMappingURL=5668.5bd8ebe7.chunk.js.map