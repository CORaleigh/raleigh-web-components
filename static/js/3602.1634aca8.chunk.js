"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[3602],{23602:function(e,t,r){r.d(t,{F:function(){return D}});var n=r(1413),a=r(37762),i=r(74165),o=r(15861),s=r(15671),u=r(43144),l=r(11752),c=r(61120),h=r(60136),d=r(29388),p=r(48848),f=r(59389),v=r(93661),y=r(50690),g=r(46817),m=r(25456),x=r(28390),w=r(72770),_=r(70381),S=r(43345),Z=r(3393),b=r(32161),k=r(57791),R=r(42947),O=r(52195),T=r(35264),P=r(85700),A=r(93122);function E(e){return(0,x.G)([[e[0],e[1],-1],[e[2],e[1],-1],[e[2],e[3],-1],[e[0],e[3],-1]])}function C(e,t){if(!(0,m.E)(e,t))return E(t);for(var r=[e[1]-t[1],Math.min(e[3],t[3])-Math.max(e[1],t[1]),t[3]-e[3],123456],n=[e[0]-t[0],Math.min(e[2],t[2])-Math.max(e[0],t[0]),t[2]-e[2],123456],a=t[2]-t[0],i=t[3]-t[1],o=n[0]>0&&n[2]>0?3:2,s=r[0]>0&&r[2]>0?3:2,u=(s+1)*(o+1),l=new Float64Array(3*u),c=new Float32Array(2*u),h=new Array(6*(s*o-1)),d=0,p=0,f=0,v=0,y=0,g=0;g<4;g++){var x=r[g];if(!(x<=0)){for(var w=0,Z=0;Z<4;Z++){var b=n[Z];b<=0||(l[p++]=t[0]+w,l[p++]=t[1]+d,l[p++]=-1,c[f++]=w/a,c[f++]=d/i,Z<3&&g<3&&(1!==Z||1!==g)&&(h[y++]=v,h[y++]=v+1,h[y++]=v+o+1,h[y++]=v+1,h[y++]=v+o+2,h[y++]=v+o+1),v++,w+=b)}d+=x}}var k=new Array(h.length);return new _.M([[S.O.POSITION,{size:3,data:l,exclusive:!0}],[S.O.NORMAL,{size:3,data:I,exclusive:!0}],[S.O.UV0,{size:2,data:c,exclusive:!0}]],[[S.O.POSITION,h],[S.O.NORMAL,k],[S.O.UV0,h]])}var I=[0,0,1],M=function(e){(0,h.Z)(r,e);var t=(0,d.Z)(r);function r(){var e;return(0,s.Z)(this,r),(e=t.apply(this,arguments)).drapeSourceType=x.e.RasterImage,e.updatePolicy=k.i.SYNC,e.fullExtentInLocalViewSpatialReference=null,e.maximumDataResolution=null,e._images=new Array,e._extents=new Array,e._overlays=new Array,e.updateWhenStationary=!0,e._drapeSourceRenderer=null,e.refreshDebounced=(0,p.a1)(function(){var t=(0,o.Z)((0,i.Z)().mark((function t(r){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=e.destroyed,t.t0){t.next=4;break}return t.next=4,e._doRefresh(r).catch((function(t){(0,p.j)(t)||p.a.getLogger(e.declaredClass).error(t)}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),2e3),e}return(0,u.Z)(r,[{key:"initialize",value:function(){var e=this;this._drapeSourceRenderer=this.view.basemapTerrain.overlayManager.registerGeometryDrapeSource(this),this.handles.add((0,p.D)((function(){return e.view.basemapTerrain.overlayManager.unregisterDrapeSource(e)}))),this.addResolvingPromise((0,Z.l)(this).then((function(t){return e._set("fullExtentInLocalViewSpatialReference",t)}))),this.updatingHandles.add((function(){return e.suspended}),(function(){return e._suspendedChangeHandler()})),this.handles.add(this.view.resourceController.scheduler.registerIdleStateCallbacks((function(){e._isScaleRangeActive()&&e.notifyChange("suspended")}),(function(){}))),this._isScaleRangeLayer()&&this.updatingHandles.add((function(){return e.layer.effectiveScaleRange}),(function(){return e.notifyChange("suspended")}))}},{key:"destroy",value:function(){this.clear()}},{key:"setDrapingExtent",value:function(e,t){var r=this;this._spatialReference=t,e.forEach((function(e){r._overlays[e.index]=e,r._updateImageExtent(e)}))}},{key:"_updateImageExtent",value:function(e){var t=this,r=this._clippedExtent(e.extent,L);if(!(0,v.t)(r)){var n=function(e,t,r){var n=(0,m.s)(e)/(0,m.l)(e),a={width:r,height:r};return n>1.0001?a.height=r/n:n<.9999&&(a.width=r*n),a.width=Math.round(a.width/((0,m.s)(e)/(0,m.s)(t))),a.height=Math.round(a.height/((0,m.l)(e)/(0,m.l)(t))),a}(e.extent,r,e.resolution),a=e.pixelRatio*this.view.state.pixelRatio;if("imageMaxWidth"in this.layer||"imageMaxHeight"in this.layer){var i=this.layer.imageMaxWidth,o=this.layer.imageMaxHeight;if(n.width>i){var s=i/n.width;n.height=Math.floor(n.height*s),n.width=i,a*=s}if(n.height>o){var u=o/n.height;n.width=Math.floor(n.width*u),n.height=o,a*=u}}var l=this._extents[e.index];l&&(0,m.I)(l.extent,r)&&this._imageSizeEquals(r,l.imageSize,n)||(this._extents[e.index]={extent:(0,m.u)(r),imageSize:n,pixelRatio:a},this.suspended||this._fetch(e.index).catch((function(e){(0,p.j)(e)||p.a.getLogger(t.declaredClass).error(e)})))}}},{key:"clear",value:function(){for(var e=0;e<this._images.length;e++)this._clearImage(e)}},{key:"doRefresh",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._doRefresh());case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_doRefresh",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t){var r,n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.suspended){e.next=2;break}return e.abrupt("return");case 2:for(r=[],n=0;n<this._extents.length;n++)this._extents[n]&&r.push(this._fetch(n,t));return e.next=6,(0,p.E)(r);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"canResume",value:function(){if(!(0,l.Z)((0,c.Z)(r.prototype),"canResume",this).call(this))return!1;var e=this.layer;if(this._isScaleRangeActive()){var t=e.effectiveScaleRange,n=t.minScale,a=t.maxScale,i=this.view.scale;if(i<a||n>0&&i>n)return!1}return!0}},{key:"isUpdating",value:function(){return this._images.some((function(e){return!!e.loadingPromise}))}},{key:"processResult",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r,n){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(r instanceof HTMLImageElement||r instanceof HTMLCanvasElement)&&(t.image=r);case 1:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"findExtentInfoAt",value:function(e){var t,r=(0,a.Z)(this._extents);try{for(r.s();!(t=r.n()).done;){var n=t.value,i=n.extent;if(new g.w(i[0],i[1],i[2],i[3],this._spatialReference).contains(e))return n}}catch(o){r.e(o)}finally{r.f()}return null}},{key:"getFetchOptions",value:function(){}},{key:"redraw",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){var n=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.c)(this._images,function(){var e=(0,o.Z)((0,i.Z)().mark((function e(a,o){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=a,!e.t0){e.next=6;break}return e.next=4,t(a,r);case 4:return e.next=6,n._createStageObjects(o,a.image,r);case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_imageSizeEquals",value:function(e,t,r){if(!this.maximumDataResolution)return!1;var n=(0,m.s)(e)/this.maximumDataResolution.x,a=(0,m.l)(e)/this.maximumDataResolution.y,i=n/t.width,o=a/t.height,s=n/r.width,u=a/r.height,l=Math.abs(i-s),c=Math.abs(o-u),h=b.t.TESTS_DISABLE_OPTIMIZATIONS?0:1.5;return l<=h&&c<=h}},{key:"_fetch",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){var a,s,u,l,c,h,d,f=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.suspended){e.next=2;break}return e.abrupt("return");case 2:if(a=this._extents[t],s=a.extent,this._images[t]||(this._images[t]={texture:null,material:null,renderGeometry:null,loadingPromise:null,loadingAbortController:null,image:null,pixelData:null,renderExtent:(0,m.u)(s)}),(u=this._images[t]).loadingAbortController&&(u.loadingAbortController.abort(),u.loadingAbortController=null),0!==(l=new g.w(s[0],s[1],s[2],s[3],this._spatialReference)).width&&0!==l.height){e.next=9;break}return e.abrupt("return",void this._clearImage(t));case 9:return c=new AbortController,u.loadingAbortController=c,(0,p.v)(r,(function(){return c.abort()})),h=c.signal,d=this._waitFetchReady(h).then((0,o.Z)((0,i.Z)().mark((function e(){var r,o,s,u;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,n.Z)((0,n.Z)({requestAsImageElement:!0,pixelRatio:f._overlays[t].pixelRatio},f.getFetchOptions()),{},{signal:h}),o=a.imageSize,s=o.height,u=o.width,e.abrupt("return",f.layer.fetchImage(l,u,s,r));case 2:case"end":return e.stop()}}),e)})))).then((function(e){if((0,p.p)(h))throw p.a.getLogger(f.declaredClass).warnOnce("A call to fetchImage resolved even though the request was aborted. fetchImage should not resolve if options.signal.aborted is true."),(0,p.d)();return f.processResult(u,e)})).then((function(){(0,m.a)(u.renderExtent,s)})).finally((function(){d===u.loadingPromise&&(u.loadingPromise=null,u.loadingAbortController=null)})),u.loadingPromise=d,this.notifyChange("updating"),e.next=16,d.then((0,o.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!h.aborted){e.next=2;break}throw(0,p.d)();case 2:return e.next=4,f._createStageObjects(t,u.image,h);case 4:f.notifyChange("updating");case 5:case"end":return e.stop()}}),e)})))).catch((function(e){throw e&&!(0,p.j)(e)&&p.a.getLogger(f.declaredClass).error(e),f.notifyChange("updating"),e}));case 16:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_clearImage",value:function(e){var t=this._images[e];if(t){(0,v.r)(t.renderGeometry)&&(this._drapeSourceRenderer.removeGeometries([t.renderGeometry],x.w.UPDATE),t.renderGeometry=null);var r=this.view._stage;r.remove(t.texture),t.texture=null,r.remove(t.material),t.material=null,t.loadingAbortController&&(t.loadingAbortController.abort(),t.loadingAbortController=null),t.loadingPromise=null,t.image=null,t.pixelData=null}}},{key:"_createStageObjects",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r,n){var a,o,s,u,l,c,h=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.view._stage,o=this._images[t],s=function(){a.remove(o.texture),o.texture=null,(0,v.r)(o.renderGeometry)&&(h._drapeSourceRenderer.removeGeometries([o.renderGeometry],x.w.UPDATE),o.renderGeometry=null)},!r){e.next=25;break}return u=new _.Y(r,{width:r.width,height:r.height,preMultiplyAlpha:!0,wrap:{s:A.D.CLAMP_TO_EDGE,t:A.D.CLAMP_TO_EDGE}}),e.next=5,(0,f.b)(this._images[t===x.T.INNER?x.T.OUTER:x.T.INNER].loadingPromise);case 5:if((0,p.f)(n),t!==x.T.INNER){e.next=10;break}l=E(o.renderExtent),e.next=14;break;case 10:if(c=this._images[0].renderExtent){e.next=13;break}return e.abrupt("return",void s());case 13:l=C(c,o.renderExtent);case 14:return s(),a.add(u),e.next=18,a.loadImmediate(u);case 18:o.texture=u,(0,v.t)(o.material)?(o.material=new R.p({transparent:!0,textureId:u.id}),a.add(o.material)):o.material.setParameters({textureId:u.id}),o.renderGeometry=new x.B(l,o.material),o.renderGeometry.origin=this._overlays[t].renderLocalOrigin,this._drapeSourceRenderer.addGeometries([o.renderGeometry],x.w.UPDATE),e.next=26;break;case 25:s(),a.remove(o.material),o.material=null;case 26:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"_isScaleRangeLayer",value:function(){return"effectiveScaleRange"in this.layer}},{key:"_isScaleRangeActive",value:function(){var e=this.layer;if(!this._isScaleRangeLayer())return!1;var t=e.effectiveScaleRange,r=t.minScale,n=t.maxScale;return(0,P.o)(r,n)}},{key:"_clippedExtent",value:function(e,t){if("local"!==this.view.viewingMode)return(0,m.a)(t,e);var r=this.view.basemapTerrain;return r.ready?(0,m.U)(e,r.extent,t):(0,m.a)(t,e)}},{key:"_suspendedChangeHandler",value:function(){this.suspended?this.clear():this.refreshDebounced()}},{key:"_waitFetchReady",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t){var r=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,y.j)((function(){return r.view.stationary}),t);case 2:(0,p.f)(t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),r}((0,T.i)((0,w.n)(O.u)));(0,p.e)([(0,p.y)()],M.prototype,"layer",void 0),(0,p.e)([(0,p.y)()],M.prototype,"suspended",void 0),(0,p.e)([(0,p.y)({readOnly:!0})],M.prototype,"fullExtentInLocalViewSpatialReference",void 0),(0,p.e)([(0,p.y)()],M.prototype,"updating",void 0);var D=M=(0,p.e)([(0,p.n)("esri.views.3d.layers.DynamicLayerView3D")],M),L=(0,m.u)()},42947:function(e,t,r){r.d(t,{f:function(){return S},p:function(){return O}});var n,a,i,o=r(1413),s=r(15671),u=r(43144),l=r(11752),c=r(61120),h=r(60136),d=r(29388),p=r(30168),f=r(70381),v=r(57791),y=r(28390),g=r(48848),m=r(93661),x=r(13239),w=r(43345),_=r(93122);function S(e){var t=new f.o,r=t.vertex,o=t.fragment;return(0,f.T)(r,e),t.include(f.K,e),t.attributes.add(w.O.POSITION,"vec3"),t.attributes.add(w.O.UV0,"vec2"),t.varyings.add("vpos","vec3"),e.hasMultipassTerrain&&t.varyings.add("depth","float"),r.uniforms.add(new f.b("textureCoordinateScaleFactor",(function(e){return(0,m.r)(e.texture)&&(0,m.r)(e.texture.descriptor.textureCoordinateScaleFactor)?e.texture.descriptor.textureCoordinateScaleFactor:x.i}))),r.code.add((0,f.n)(n||(n=(0,p.Z)(["\n    void main(void) {\n      vpos = position;\n      ","\n      vTexCoord = uv0 * textureCoordinateScaleFactor;\n      gl_Position = transformPosition(proj, view, vpos);\n    }\n  "])),e.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":"")),t.include(f.a0,e),t.include(f.aw,e),o.uniforms.add([new f.h("tex",(function(e){return e.texture})),new f.g("opacity",(function(e){return e.opacity}))]),t.varyings.add("vTexCoord","vec2"),e.output===f.O.Alpha?o.code.add((0,f.n)(a||(a=(0,p.Z)(["\n    void main() {\n      discardBySlice(vpos);\n      ","\n\n      float alpha = texture2D(tex, vTexCoord).a * opacity;\n      if (alpha  < ",") {\n        discard;\n      }\n\n      gl_FragColor = vec4(alpha);\n    }\n    "])),e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":"",f.n.float(f.a8))):(o.include(f.x),o.code.add((0,f.n)(i||(i=(0,p.Z)(["\n    void main() {\n      discardBySlice(vpos);\n      ","\n      gl_FragColor = texture2D(tex, vTexCoord) * opacity;\n\n      if (gl_FragColor.a < ",") {\n        discard;\n      }\n\n      gl_FragColor = highlightSlice(gl_FragColor, vpos);\n      ","\n    }\n    "])),e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":"",f.n.float(f.a8),e.transparencyPassType===v.o.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""))),t}var Z=Object.freeze(Object.defineProperty({__proto__:null,build:S},Symbol.toStringTag,{value:"Module"})),b=function(e){(0,h.Z)(r,e);var t=(0,d.Z)(r);function r(){return(0,s.Z)(this,r),t.apply(this,arguments)}return(0,u.Z)(r,[{key:"initializeProgram",value:function(e){return new f.l(e.rctx,r.shader.get().build(this.configuration),f.E)}},{key:"_setPipelineState",value:function(e,t){var r=this.configuration,n=e===v.o.NONE,a=e===v.o.FrontFace;return(0,v.W)({blending:r.output!==f.O.Color&&r.output!==f.O.Alpha||!r.transparent?null:n?k:(0,v.A)(e),culling:(0,v.k)(r.cullFace),depthTest:{func:(0,v.e)(e)},depthWrite:n?r.writeDepth&&v.b:(0,v.E)(e),colorWrite:v._,stencilWrite:r.hasOccludees?f.ax:null,stencilTest:r.hasOccludees?t?f.ay:f.az:null,polygonOffset:n||a?null:(0,v.g)(r.enableOffset)})}},{key:"initializePipeline",value:function(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}},{key:"getPipelineState",value:function(e,t){return t?this._occludeePipelineState:(0,l.Z)((0,c.Z)(r.prototype),"getPipelineState",this).call(this,e,t)}}]),r}(f.k);b.shader=new f.m(Z,(function(){return r.e(8168).then(r.bind(r,58168))}));var k=(0,v.s)(_.R.ONE,_.R.ONE_MINUS_SRC_ALPHA),R=function(e){(0,h.Z)(r,e);var t=(0,d.Z)(r);function r(){var e;return(0,s.Z)(this,r),(e=t.apply(this,arguments)).output=f.O.Color,e.cullFace=v.n.None,e.hasSlicePlane=!1,e.transparent=!1,e.enableOffset=!0,e.writeDepth=!0,e.hasOccludees=!1,e.transparencyPassType=v.o.NONE,e.hasMultipassTerrain=!1,e.cullAboveGround=!1,e}return(0,u.Z)(r)}(f.J);(0,g.e)([(0,f.p)({count:f.O.COUNT})],R.prototype,"output",void 0),(0,g.e)([(0,f.p)({count:v.n.COUNT})],R.prototype,"cullFace",void 0),(0,g.e)([(0,f.p)()],R.prototype,"hasSlicePlane",void 0),(0,g.e)([(0,f.p)()],R.prototype,"transparent",void 0),(0,g.e)([(0,f.p)()],R.prototype,"enableOffset",void 0),(0,g.e)([(0,f.p)()],R.prototype,"writeDepth",void 0),(0,g.e)([(0,f.p)()],R.prototype,"hasOccludees",void 0),(0,g.e)([(0,f.p)({count:v.o.COUNT})],R.prototype,"transparencyPassType",void 0),(0,g.e)([(0,f.p)()],R.prototype,"hasMultipassTerrain",void 0),(0,g.e)([(0,f.p)()],R.prototype,"cullAboveGround",void 0);var O=function(e){(0,h.Z)(r,e);var t=(0,d.Z)(r);function r(e){var n;return(0,s.Z)(this,r),(n=t.call(this,e,new P)).supportsEdges=!0,n._configuration=new R,n}return(0,u.Z)(r,[{key:"getConfiguration",value:function(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<v.S,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration}},{key:"intersect",value:function(e,t,r,n,a,i,o){(0,f.aN)(e,t,n,a,i,void 0,o)}},{key:"requiresSlot",value:function(e,t){return(t===f.O.Color||t===f.O.Alpha||t===f.O.Highlight)&&(e===f.H.DRAPED_MATERIAL||(t===f.O.Highlight?e===f.H.OPAQUE_MATERIAL:e===(this.parameters.transparent?this.parameters.writeDepth?f.H.TRANSPARENT_MATERIAL:f.H.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:f.H.OPAQUE_MATERIAL)))}},{key:"createGLMaterial",value:function(e){return new T(e)}},{key:"createBufferWriter",value:function(){return new y.D(y.F)}}]),r}(f.aa),T=function(e){(0,h.Z)(r,e);var t=(0,d.Z)(r);function r(e){return(0,s.Z)(this,r),t.call(this,(0,o.Z)((0,o.Z)({},e),e.material.parameters))}return(0,u.Z)(r,[{key:"_updateParameters",value:function(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(b,e)}},{key:"_updateOccludeeState",value:function(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}},{key:"beginSlot",value:function(e){return this._output!==f.O.Color&&this._output!==f.O.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}}]),r}(f.af),P=function(e){(0,h.Z)(r,e);var t=(0,d.Z)(r);function r(){var e;return(0,s.Z)(this,r),(e=t.apply(this,arguments)).transparent=!1,e.writeDepth=!0,e.hasSlicePlane=!1,e.cullFace=v.n.None,e.hasOccludees=!1,e.opacity=1,e.textureId=null,e.initTextureTransparent=!0,e}return(0,u.Z)(r)}(f.ar)},52195:function(e,t,r){r.d(t,{u:function(){return f}});var n=r(15671),a=r(43144),i=r(60136),o=r(29388),s=r(48848),u=r(37856),l=r(630),c=r(92072),h=r(93661),d=r(65094),p=function(e){(0,i.Z)(r,e);var t=(0,o.Z)(r);function r(e){var a;return(0,n.Z)(this,r),(a=t.call(this,e)).layer=null,a.parent=null,a}return(0,a.Z)(r,[{key:"initialize",value:function(){var e=this;this.when().catch((function(t){if("layerview:create-error"!==t.name){var r=e.layer&&e.layer.id||"no id",n=e.layer&&e.layer.title||"no title";s.a.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '".concat(n,"', id: '").concat(r,"')"),t)}}))}},{key:"fullOpacity",get:function(){return(0,h.v)(this.get("layer.opacity"),1)*(0,h.v)(this.get("parent.fullOpacity"),1)}},{key:"suspended",get:function(){return!this.canResume()}},{key:"suspendInfo",get:function(){return this.getSuspendInfo()}},{key:"legendEnabled",get:function(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}},{key:"updating",get:function(){var e;return!((null===(e=this.updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}},{key:"updatingProgress",get:function(){return this.updating?0:1}},{key:"visible",get:function(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)},set:function(e){this._overrideIfSome("visible",e)}},{key:"canResume",value:function(){var e,t,r;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(r=this.view)||void 0===r?void 0:r.ready)||!1}},{key:"getSuspendInfo",value:function(){var e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}},{key:"isUpdating",value:function(){return!1}}]),r}((0,l.a)((0,c.s)((0,d.m)(u.n.EventedMixin(s.m)))));(0,s.e)([(0,s.y)()],p.prototype,"fullOpacity",null),(0,s.e)([(0,s.y)()],p.prototype,"layer",void 0),(0,s.e)([(0,s.y)()],p.prototype,"parent",void 0),(0,s.e)([(0,s.y)({readOnly:!0})],p.prototype,"suspended",null),(0,s.e)([(0,s.y)({readOnly:!0})],p.prototype,"suspendInfo",null),(0,s.e)([(0,s.y)({readOnly:!0})],p.prototype,"legendEnabled",null),(0,s.e)([(0,s.y)({type:Boolean,readOnly:!0})],p.prototype,"updating",null),(0,s.e)([(0,s.y)({readOnly:!0})],p.prototype,"updatingProgress",null),(0,s.e)([(0,s.y)()],p.prototype,"visible",null),(0,s.e)([(0,s.y)()],p.prototype,"view",void 0);var f=p=(0,s.e)([(0,s.n)("esri.views.layers.LayerView")],p)},72770:function(e,t,r){r.d(t,{n:function(){return f}});var n=r(74165),a=r(15861),i=r(15671),o=r(43144),s=r(11752),u=r(61120),l=r(60136),c=r(29388),h=r(48848),d=r(50690),p=(r(93661),r(70522)),f=function(e){var t=function(e){(0,l.Z)(r,e);var t=(0,c.Z)(r);function r(){var e;return(0,i.Z)(this,r),(e=t.apply(this,arguments)).slicePlaneEnabled=!1,e.supportsHeightUnitConversion=!1,e}return(0,o.Z)(r,[{key:"postscript",value:function(e){(0,s.Z)((0,u.Z)(r.prototype),"postscript",this).call(this,e),(0,p.g)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}},{key:"_validateHeightModelInfo",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r,a,i=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new AbortController,r=t.signal,this.handles.add((0,h.D)((function(){return t.abort()}))),e.next=4,(0,d.j)((function(){var e;return null===(e=i.view.defaultsFromMap)||void 0===e?void 0:e.heightModelInfoReady}),r);case 4:if((0,h.f)(r),!(a=(0,p.o)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion))){e.next=8;break}throw a;case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"canResume",value:function(){var e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return(0,s.Z)((0,u.Z)(r.prototype),"canResume",this).call(this)&&(!e||!e.minScale||!e.maxScale||e.minScale>=e.maxScale)}},{key:"getSuspendInfo",value:function(){var e=(0,s.Z)((0,u.Z)(r.prototype),"getSuspendInfo",this).call(this),t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return t&&t.minScale&&t.maxScale&&t.minScale<t.maxScale&&(e.outsideScaleRange=!0),e}}]),r}(e);return(0,h.e)([(0,h.y)()],t.prototype,"view",void 0),(0,h.e)([(0,h.y)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,h.e)([(0,h.n)("esri.views.3d.layers.LayerView3D")],t)}},35264:function(e,t,r){r.d(t,{i:function(){return l}});var n=r(15671),a=r(43144),i=r(60136),o=r(29388),s=r(48848),u=r(50690),l=(r(93661),function(e){var t=function(e){(0,i.Z)(r,e);var t=(0,o.Z)(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,a.Z)(r,[{key:"initialize",value:function(){var e=this;this.handles.add((0,u.a)((function(){return e.layer}),"refresh",(function(t){e.doRefresh(t.dataChanged).catch((function(t){(0,s.j)(t)||s.a.getLogger(e.declaredClass).error(t)}))})),"RefreshableLayerView")}}]),r}(e);return(0,s.e)([(0,s.y)()],t.prototype,"layer",void 0),t=(0,s.e)([(0,s.n)("esri.layers.mixins.RefreshableLayerView")],t)})},3393:function(e,t,r){r.d(t,{l:function(){return o}});var n=r(93661),a=r(82474),i=r(5526);function o(e){var t=e.view.spatialReference,r=e.layer.fullExtent,o=(0,n.r)(r)&&r.spatialReference;if((0,n.t)(r)||!o)return Promise.resolve(null);if(o.equals(t))return Promise.resolve(r.clone());var s=(0,a.M)(r,t);return(0,n.r)(s)?Promise.resolve(s):e.view.state.isLocal?(0,i.projectGeometry)(r,t,e.layer.portalItem).then((function(t){return!e.destroyed&&t?t:void 0})).catch((function(){return null})):Promise.resolve(null)}}}]);
//# sourceMappingURL=3602.1634aca8.chunk.js.map