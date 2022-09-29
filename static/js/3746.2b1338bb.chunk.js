"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[3746],{62666:function(e,t,n){n.d(t,{r:function(){return h}});var i=n(1413),r=n(37762),a=n(15671),o=n(43144),s=n(11752),l=n(61120),u=n(60136),d=n(29388),p=n(95208),c=n(6819),h=function(e){(0,u.Z)(n,e);var t=(0,d.Z)(n);function n(){var e;return(0,a.Z)(this,n),(e=t.apply(this,arguments)).requiresDedicatedFBO=!1,e}return(0,o.Z)(n,[{key:"dispose",value:function(){}},{key:"doRender",value:function(e){var t=this.createRenderParams(e),n=t.context,i=t.painter,a=t.profiler;this._prevFBO=n.getBoundFramebufferObject(),a.recordContainerStart(this.name);var o=this._getFbo(t),s=i.getRenderTarget();n.bindFramebuffer(o),i.setRenderTarget(o),n.setDepthWriteEnabled(!0),n.setColorMask(!0,!0,!0,!0),n.setClearColor(0,0,0,0),n.setClearDepth(1),n.clear(n.gl.COLOR_BUFFER_BIT|n.gl.DEPTH_BUFFER_BIT),n.setDepthWriteEnabled(!1);var l,u=(0,r.Z)(this.children);try{for(u.s();!(l=u.n()).done;){l.value.beforeRender(e)}}catch(v){u.e(v)}finally{u.f()}var d,p=(0,r.Z)(this.children);try{for(p.s();!(d=p.n()).done;){d.value.processRender(t)}}catch(v){p.e(v)}finally{p.f()}var h,y=(0,r.Z)(this.children);try{for(y.s();!(h=y.n()).done;){h.value.afterRender(e)}}catch(v){y.e(v)}finally{y.f()}i.setRenderTarget(s),i.releaseFbo(o),n.bindFramebuffer(this._prevFBO),i.beforeRenderLayer(t,this._clippingInfos?255:0,this.computedOpacity),n.setStencilTestEnabled(!1),n.setStencilWriteMask(0),i.blitTexture(n,o.colorTexture,c.L.NEAREST),i.compositeLayer(t,this.computedOpacity),a.recordContainerEnd()}},{key:"createRenderParams",value:function(e){return(0,i.Z)((0,i.Z)({},(0,s.Z)((0,l.Z)(n.prototype),"createRenderParams",this).call(this,e)),{},{blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:1})}},{key:"_getFbo",value:function(e){var t=e.context,n=e.painter,i=t.getViewport(),r=i.width,a=i.height;return n.acquireFbo(r,a)}}]),n}(p.a)},5900:function(e,t,n){n.d(t,{u:function(){return y}});var i=n(15671),r=n(43144),a=n(60136),o=n(29388),s=n(23132),l=n(80175),u=n(97033),d=n(77196),p=n(75610),c=n(43920),h=function(e){(0,a.Z)(n,e);var t=(0,o.Z)(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e)).layer=null,r.parent=null,r}return(0,r.Z)(n,[{key:"initialize",value:function(){var e=this;this.when().catch((function(t){if("layerview:create-error"!==t.name){var n=e.layer&&e.layer.id||"no id",i=e.layer&&e.layer.title||"no title";s.s.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '".concat(i,"', id: '").concat(n,"')"),t)}}))}},{key:"fullOpacity",get:function(){return(0,p.n)(this.get("layer.opacity"),1)*(0,p.n)(this.get("parent.fullOpacity"),1)}},{key:"suspended",get:function(){return!this.canResume()}},{key:"suspendInfo",get:function(){return this.getSuspendInfo()}},{key:"legendEnabled",get:function(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}},{key:"updating",get:function(){var e;return!((null===(e=this.updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}},{key:"updatingProgress",get:function(){return this.updating?0:1}},{key:"visible",get:function(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}},{key:"canResume",value:function(){var e,t,n;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(n=this.view)||void 0===n?void 0:n.ready)||!1}},{key:"getSuspendInfo",value:function(){var e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}},{key:"isUpdating",value:function(){return!1}}]),n}((0,u.a)((0,d.s)((0,c.m)(l.n.EventedMixin(s.y)))));(0,s.e)([(0,s.d)()],h.prototype,"fullOpacity",null),(0,s.e)([(0,s.d)()],h.prototype,"layer",void 0),(0,s.e)([(0,s.d)()],h.prototype,"parent",void 0),(0,s.e)([(0,s.d)({readOnly:!0})],h.prototype,"suspended",null),(0,s.e)([(0,s.d)({readOnly:!0})],h.prototype,"suspendInfo",null),(0,s.e)([(0,s.d)({readOnly:!0})],h.prototype,"legendEnabled",null),(0,s.e)([(0,s.d)({type:Boolean,readOnly:!0})],h.prototype,"updating",null),(0,s.e)([(0,s.d)({readOnly:!0})],h.prototype,"updatingProgress",null),(0,s.e)([(0,s.d)()],h.prototype,"visible",null),(0,s.e)([(0,s.d)()],h.prototype,"view",void 0);var y=h=(0,s.e)([(0,s.n)("esri.views.layers.LayerView")],h)},20842:function(e,t,n){n.d(t,{f:function(){return T}});var i,r=n(11752),a=n(61120),o=n(43144),s=n(15671),l=n(60136),u=n(29388),d=n(23132),p=n(80175),c=n(9055),h=n(36551),y=(n(75610),n(49607)),v=n(70441),f=(n(91204),n(30709)),g=n(30604),b=n(80262),w=n(36460),R=function(e){(0,l.Z)(n,e);var t=(0,u.Z)(n);function n(){return(0,s.Z)(this,n),t.apply(this,arguments)}return(0,o.Z)(n)}(v.l),m=R=(0,d.e)([(0,d.n)("esri.views.layers.support.ClipArea")],R),k=i=function(e){(0,l.Z)(n,e);var t=(0,u.Z)(n);function n(){var e;return(0,s.Z)(this,n),(e=t.apply(this,arguments)).type="rect",e.left=null,e.right=null,e.top=null,e.bottom=null,e}return(0,o.Z)(n,[{key:"clone",value:function(){return new i({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}},{key:"version",get:function(){return(this._get("version")||0)+1}}]),n}(m);(0,d.e)([(0,d.d)({type:[Number,String],json:{write:!0}})],k.prototype,"left",void 0),(0,d.e)([(0,d.d)({type:[Number,String],json:{write:!0}})],k.prototype,"right",void 0),(0,d.e)([(0,d.d)({type:[Number,String],json:{write:!0}})],k.prototype,"top",void 0),(0,d.e)([(0,d.d)({type:[Number,String],json:{write:!0}})],k.prototype,"bottom",void 0),(0,d.e)([(0,d.d)({readOnly:!0})],k.prototype,"version",null);var Z,S=k=i=(0,d.e)([(0,d.n)("esri.views.layers.support.ClipRect")],k),O={base:f.p,key:"type",typeMap:{extent:b.M,polygon:w.v}},_=Z=function(e){(0,l.Z)(n,e);var t=(0,u.Z)(n);function n(){var e;return(0,s.Z)(this,n),(e=t.apply(this,arguments)).type="geometry",e.geometry=null,e}return(0,o.Z)(n,[{key:"version",get:function(){return(this._get("version")||0)+1}},{key:"clone",value:function(){return new Z({geometry:this.geometry.clone()})}}]),n}(m);(0,d.e)([(0,d.d)({types:O,json:{read:g.d,write:!0}})],_.prototype,"geometry",void 0),(0,d.e)([(0,d.d)({readOnly:!0})],_.prototype,"version",null);var q=_=Z=(0,d.e)([(0,d.n)("esri.views.layers.support.Geometry")],_),C=function(e){(0,l.Z)(n,e);var t=(0,u.Z)(n);function n(){var e;return(0,s.Z)(this,n),(e=t.apply(this,arguments)).type="path",e.path=[],e}return(0,o.Z)(n,[{key:"version",get:function(){return(this._get("version")||0)+1}}]),n}(m);(0,d.e)([(0,d.d)({type:[[[Number]]],json:{write:!0}})],C.prototype,"path",void 0),(0,d.e)([(0,d.d)({readOnly:!0})],C.prototype,"version",null);var F=C=(0,d.e)([(0,d.n)("esri.views.layers.support.Path")],C),E=p.j.ofType({key:"type",base:m,typeMap:{rect:S,path:F,geometry:q}}),T=function(e){var t=function(e){(0,l.Z)(n,e);var t=(0,u.Z)(n);function n(){var e;return(0,s.Z)(this,n),(e=t.apply(this,arguments)).attached=!1,e.clips=new E,e.lastUpdateId=-1,e.moving=!1,e.updateRequested=!1,e}return(0,o.Z)(n,[{key:"initialize",value:function(){var e,t,n,i,r=this,a=null===(e=null===(t=this.view)||void 0===t?void 0:t.spatialReferenceLocked)||void 0===e||e;(null===(n=this.view)||void 0===n?void 0:n.spatialReference)&&a&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new d.a("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new y.s),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([(0,h.l)((function(){return r.suspended}),(function(e){r.container&&(r.container.visible=!e),r.view&&!e&&r.updateRequested&&r.view.requestUpdate()}),h.w),(0,h.l)((function(){var e,t;return null!==(e=null===(t=r.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1}),(function(e){r.container&&(r.container.opacity=e)}),h.w),(0,h.l)((function(){return r.layer&&"blendMode"in r.layer?r.layer.blendMode:"normal"}),(function(e){r.container&&(r.container.blendMode=e)}),h.w),(0,h.l)((function(){return r.layer&&"effect"in r.layer?r.layer.effect:null}),(function(e){r.container&&(r.container.effect=e)}),h.w),(0,h.a)((function(){return r.clips}),"change",(function(){r.container&&(r.container.clips=r.clips)}))]),null!==(i=this.view)&&void 0!==i&&i.whenLayerView?this.view.whenLayerView(this.layer).then((function(e){e===r&&r.processAttach()}),(function(){})):this.when().then((function(){r.processAttach()}),(function(){})))}},{key:"destroy",value:function(){this.processDetach(),this.updateRequested=!1}},{key:"spatialReferenceSupported",get:function(){var e,t=null===(e=this.view)||void 0===e?void 0:e.spatialReference;return null==t||this.supportsSpatialReference(t)}},{key:"updating",get:function(){var e;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null===(e=this.updatingHandles)||void 0===e||!e.updating))}},{key:"visibleAtCurrentScale",get:function(){return this.isVisibleAtScale(this.view.scale)}},{key:"processAttach",value:function(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}},{key:"processDetach",value:function(){this.attached&&(this.attached=!1,this.detach(),this.updateRequested=!1)}},{key:"isVisibleAtScale",value:function(e){var t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;var n=t.minScale,i=t.maxScale;return(0===n||e<=n)&&(0===i||e>=i)}},{key:"requestUpdate",value:function(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}},{key:"processUpdate",value:function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}},{key:"hitTest",value:function(e,t){return Promise.resolve(null)}},{key:"supportsSpatialReference",value:function(e){return!0}},{key:"canResume",value:function(){return!!this.spatialReferenceSupported&&!!(0,r.Z)((0,a.Z)(n.prototype),"canResume",this).call(this)&&this.visibleAtCurrentScale}},{key:"getSuspendInfo",value:function(){var e=(0,r.Z)((0,a.Z)(n.prototype),"getSuspendInfo",this).call(this),t=!this.spatialReferenceSupported,i=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),i&&(e.outsideScaleRange=i),e}}]),n}(e);return(0,d.e)([(0,d.d)()],t.prototype,"attached",void 0),(0,d.e)([(0,d.d)({type:E,set:function(e){var t=(0,c.n)(e,this._get("clips"),E);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,d.e)([(0,d.d)()],t.prototype,"container",void 0),(0,d.e)([(0,d.d)()],t.prototype,"moving",void 0),(0,d.e)([(0,d.d)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,d.e)([(0,d.d)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,d.e)([(0,d.d)()],t.prototype,"updateRequested",void 0),(0,d.e)([(0,d.d)()],t.prototype,"updating",null),(0,d.e)([(0,d.d)()],t.prototype,"view",void 0),(0,d.e)([(0,d.d)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",null),t=(0,d.e)([(0,d.n)("esri.views.2d.layers.LayerView2D")],t)}}}]);
//# sourceMappingURL=3746.2b1338bb.chunk.js.map