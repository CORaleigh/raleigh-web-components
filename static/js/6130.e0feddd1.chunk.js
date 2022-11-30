"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[6130],{4596:function(e,t,i){i.d(t,{r:function(){return y}});var n=i(1413),r=i(37762),a=i(15671),o=i(43144),s=i(11752),l=i(61120),u=i(60136),p=i(29388),c=i(6994),d=i(93122),y=function(e){(0,u.Z)(i,e);var t=(0,p.Z)(i);function i(){var e;return(0,a.Z)(this,i),(e=t.apply(this,arguments)).requiresDedicatedFBO=!1,e}return(0,o.Z)(i,[{key:"dispose",value:function(){}},{key:"doRender",value:function(e){var t=this.createRenderParams(e),i=t.context,n=t.painter,a=t.profiler;this._prevFBO=i.getBoundFramebufferObject(),a.recordContainerStart(this.name);var o=this._getFbo(t),s=n.getRenderTarget();i.bindFramebuffer(o),n.setRenderTarget(o),i.setDepthWriteEnabled(!0),i.setColorMask(!0,!0,!0,!0),i.setClearColor(0,0,0,0),i.setClearDepth(1),i.clear(i.gl.COLOR_BUFFER_BIT|i.gl.DEPTH_BUFFER_BIT),i.setDepthWriteEnabled(!1);var l,u=(0,r.Z)(this.children);try{for(u.s();!(l=u.n()).done;){l.value.beforeRender(e)}}catch(v){u.e(v)}finally{u.f()}var p,c=(0,r.Z)(this.children);try{for(c.s();!(p=c.n()).done;){p.value.processRender(t)}}catch(v){c.e(v)}finally{c.f()}var y,h=(0,r.Z)(this.children);try{for(h.s();!(y=h.n()).done;){y.value.afterRender(e)}}catch(v){h.e(v)}finally{h.f()}n.setRenderTarget(s),n.releaseFbo(o),i.bindFramebuffer(this._prevFBO),n.beforeRenderLayer(t,this._clippingInfos?255:0,this.computedOpacity),i.setStencilTestEnabled(!1),i.setStencilWriteMask(0),n.blitTexture(i,o.colorTexture,d.L.NEAREST),n.compositeLayer(t,this.computedOpacity),a.recordContainerEnd()}},{key:"createRenderParams",value:function(e){return(0,n.Z)((0,n.Z)({},(0,s.Z)((0,l.Z)(i.prototype),"createRenderParams",this).call(this,e)),{},{blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:1})}},{key:"_getFbo",value:function(e){var t=e.context,i=e.painter,n=t.getViewport(),r=n.width,a=n.height;return i.acquireFbo(r,a)}}]),i}(c.o)},52195:function(e,t,i){i.d(t,{u:function(){return h}});var n=i(15671),r=i(43144),a=i(60136),o=i(29388),s=i(48848),l=i(37856),u=i(630),p=i(92072),c=i(93661),d=i(65094),y=function(e){(0,a.Z)(i,e);var t=(0,o.Z)(i);function i(e){var r;return(0,n.Z)(this,i),(r=t.call(this,e)).layer=null,r.parent=null,r}return(0,r.Z)(i,[{key:"initialize",value:function(){var e=this;this.when().catch((function(t){if("layerview:create-error"!==t.name){var i=e.layer&&e.layer.id||"no id",n=e.layer&&e.layer.title||"no title";s.a.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '".concat(n,"', id: '").concat(i,"')"),t)}}))}},{key:"fullOpacity",get:function(){return(0,c.v)(this.get("layer.opacity"),1)*(0,c.v)(this.get("parent.fullOpacity"),1)}},{key:"suspended",get:function(){return!this.canResume()}},{key:"suspendInfo",get:function(){return this.getSuspendInfo()}},{key:"legendEnabled",get:function(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}},{key:"updating",get:function(){var e;return!((null===(e=this.updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}},{key:"updatingProgress",get:function(){return this.updating?0:1}},{key:"visible",get:function(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)},set:function(e){this._overrideIfSome("visible",e)}},{key:"canResume",value:function(){var e,t,i;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)||!1}},{key:"getSuspendInfo",value:function(){var e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}},{key:"isUpdating",value:function(){return!1}}]),i}((0,u.a)((0,p.s)((0,d.m)(l.n.EventedMixin(s.m)))));(0,s.e)([(0,s.y)()],y.prototype,"fullOpacity",null),(0,s.e)([(0,s.y)()],y.prototype,"layer",void 0),(0,s.e)([(0,s.y)()],y.prototype,"parent",void 0),(0,s.e)([(0,s.y)({readOnly:!0})],y.prototype,"suspended",null),(0,s.e)([(0,s.y)({readOnly:!0})],y.prototype,"suspendInfo",null),(0,s.e)([(0,s.y)({readOnly:!0})],y.prototype,"legendEnabled",null),(0,s.e)([(0,s.y)({type:Boolean,readOnly:!0})],y.prototype,"updating",null),(0,s.e)([(0,s.y)({readOnly:!0})],y.prototype,"updatingProgress",null),(0,s.e)([(0,s.y)()],y.prototype,"visible",null),(0,s.e)([(0,s.y)()],y.prototype,"view",void 0);var h=y=(0,s.e)([(0,s.n)("esri.views.layers.LayerView")],y)},91502:function(e,t,i){i.d(t,{y:function(){return E}});var n=i(11752),r=i(61120),a=i(15671),o=i(43144),s=i(60136),l=i(29388),u=i(48848),p=i(93314),c=i(81556),d=i(50690),y=(i(93661),i(84234)),h=i(40114),v=i(74384),f=i(82474),g=i(56162),m=i(46817),b=function(e){(0,s.Z)(i,e);var t=(0,l.Z)(i);function i(){return(0,a.Z)(this,i),t.apply(this,arguments)}return(0,o.Z)(i,[{key:"version",get:function(){return this.commitVersionProperties(),(this._get("version")||0)+1}}]),i}(h.l);(0,u.e)([(0,u.y)({readOnly:!0})],b.prototype,"version",null);var w,R=b=(0,u.e)([(0,u.n)("esri.views.layers.support.ClipArea")],b),k=w=function(e){(0,s.Z)(i,e);var t=(0,l.Z)(i);function i(e){var n;return(0,a.Z)(this,i),(n=t.call(this,e)).type="rect",n.left=null,n.right=null,n.top=null,n.bottom=null,n}return(0,o.Z)(i,[{key:"clone",value:function(){return new w({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}},{key:"commitVersionProperties",value:function(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}}]),i}(R);(0,u.e)([(0,u.y)({type:[Number,String],json:{write:!0}})],k.prototype,"left",void 0),(0,u.e)([(0,u.y)({type:[Number,String],json:{write:!0}})],k.prototype,"right",void 0),(0,u.e)([(0,u.y)({type:[Number,String],json:{write:!0}})],k.prototype,"top",void 0),(0,u.e)([(0,u.y)({type:[Number,String],json:{write:!0}})],k.prototype,"bottom",void 0);var Z,S=k=w=(0,u.e)([(0,u.n)("esri.views.layers.support.ClipRect")],k),P={base:f.p,key:"type",typeMap:{extent:m.w,polygon:v.v}},O=Z=function(e){(0,s.Z)(i,e);var t=(0,l.Z)(i);function i(e){var n;return(0,a.Z)(this,i),(n=t.call(this,e)).type="geometry",n.geometry=null,n}return(0,o.Z)(i,[{key:"clone",value:function(){var e,t;return new Z({geometry:null!==(e=null===(t=this.geometry)||void 0===t?void 0:t.clone())&&void 0!==e?e:null})}},{key:"commitVersionProperties",value:function(){this.commitProperty("geometry")}}]),i}(R);(0,u.e)([(0,u.y)({types:P,json:{read:g.v,write:!0}})],O.prototype,"geometry",void 0);var _=O=Z=(0,u.e)([(0,u.n)("esri.views.layers.support.Geometry")],O),q=function(e){(0,s.Z)(i,e);var t=(0,l.Z)(i);function i(e){var n;return(0,a.Z)(this,i),(n=t.call(this,e)).type="path",n.path=[],n}return(0,o.Z)(i,[{key:"commitVersionProperties",value:function(){this.commitProperty("path")}}]),i}(R);(0,u.e)([(0,u.y)({type:[[[Number]]],json:{write:!0}})],q.prototype,"path",void 0);var C=q=(0,u.e)([(0,u.n)("esri.views.layers.support.Path")],q),F=p.j.ofType({key:"type",base:null,typeMap:{rect:S,path:C,geometry:_}}),E=function(e){var t=function(e){(0,s.Z)(i,e);var t=(0,l.Z)(i);function i(){var e;return(0,a.Z)(this,i),(e=t.apply(this,arguments)).attached=!1,e.clips=new F,e.lastUpdateId=-1,e.moving=!1,e.updateRequested=!1,e.visibleAtCurrentScale=!1,e}return(0,o.Z)(i,[{key:"initialize",value:function(){var e,t,i,n,r=this,a=null===(e=null===(t=this.view)||void 0===t?void 0:t.spatialReferenceLocked)||void 0===e||e;(null===(i=this.view)||void 0===i?void 0:i.spatialReference)&&a&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new u.s("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new y.i),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.handles.add([(0,d.l)((function(){return r.suspended}),(function(e){r.container&&(r.container.visible=!e),r.view&&!e&&r.updateRequested&&r.view.requestUpdate()}),d.w),(0,d.l)((function(){var e,t;return null!==(e=null===(t=r.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1}),(function(e){r.container&&(r.container.opacity=e)}),d.w),(0,d.l)((function(){return r.layer&&"blendMode"in r.layer?r.layer.blendMode:"normal"}),(function(e){r.container&&(r.container.blendMode=e)}),d.w),(0,d.l)((function(){return r.layer&&"effect"in r.layer?r.layer.effect:null}),(function(e){r.container&&(r.container.effect=e)}),d.w),(0,d.a)((function(){return r.clips}),"change",(function(){r.container&&(r.container.clips=r.clips)}),d.w),(0,d.l)((function(){var e;return{scale:null===(e=r.view)||void 0===e?void 0:e.scale,scaleRange:r.layer&&"effectiveScaleRange"in r.layer?r.layer.effectiveScaleRange:null}}),(function(e){var t=e.scale,i=t&&r.isVisibleAtScale(t);i!==r.visibleAtCurrentScale&&r._set("visibleAtCurrentScale",i)}),d.w)]),null!==(n=this.view)&&void 0!==n&&n.whenLayerView?this.view.whenLayerView(this.layer).then((function(e){e===r&&r.processAttach()}),(function(){})):this.when().then((function(){r.processAttach()}),(function(){})))}},{key:"destroy",value:function(){this.processDetach(),this.updateRequested=!1}},{key:"spatialReferenceSupported",get:function(){var e,t=null===(e=this.view)||void 0===e?void 0:e.spatialReference;return null==t||this.supportsSpatialReference(t)}},{key:"updating",get:function(){var e;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null===(e=this.updatingHandles)||void 0===e||!e.updating))}},{key:"processAttach",value:function(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}},{key:"processDetach",value:function(){this.attached&&(this.attached=!1,this.detach(),this.updateRequested=!1)}},{key:"isVisibleAtScale",value:function(e){var t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;var i=t.minScale,n=t.maxScale;return(0===i||e<=i)&&(0===n||e>=n)}},{key:"requestUpdate",value:function(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}},{key:"processUpdate",value:function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}},{key:"hitTest",value:function(e,t){return Promise.resolve(null)}},{key:"supportsSpatialReference",value:function(e){return!0}},{key:"canResume",value:function(){return!!this.spatialReferenceSupported&&!!(0,n.Z)((0,r.Z)(i.prototype),"canResume",this).call(this)&&this.visibleAtCurrentScale}},{key:"getSuspendInfo",value:function(){var e=(0,n.Z)((0,r.Z)(i.prototype),"getSuspendInfo",this).call(this),t=!this.spatialReferenceSupported,a=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),a&&(e.outsideScaleRange=a),e}}]),i}(e);return(0,u.e)([(0,u.y)()],t.prototype,"attached",void 0),(0,u.e)([(0,u.y)({type:F,set:function(e){var t=(0,c.n)(e,this._get("clips"),F);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,u.e)([(0,u.y)()],t.prototype,"container",void 0),(0,u.e)([(0,u.y)()],t.prototype,"moving",void 0),(0,u.e)([(0,u.y)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,u.e)([(0,u.y)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,u.e)([(0,u.y)()],t.prototype,"updateRequested",void 0),(0,u.e)([(0,u.y)()],t.prototype,"updating",null),(0,u.e)([(0,u.y)()],t.prototype,"view",void 0),(0,u.e)([(0,u.y)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",void 0),t=(0,u.e)([(0,u.n)("esri.views.2d.layers.LayerView2D")],t)}}}]);
//# sourceMappingURL=6130.e0feddd1.chunk.js.map