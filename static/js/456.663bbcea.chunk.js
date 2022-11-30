"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[456],{42947:function(e,t,n){n.d(t,{f:function(){return w},p:function(){return Z}});var i,r,a,s=n(1413),o=n(15671),u=n(43144),l=n(11752),h=n(61120),c=n(60136),d=n(29388),p=n(30168),v=n(70381),f=n(57791),y=n(28390),m=n(48848),_=n(93661),g=n(13239),x=n(43345),O=n(93122);function w(e){var t=new v.o,n=t.vertex,s=t.fragment;return(0,v.T)(n,e),t.include(v.K,e),t.attributes.add(x.O.POSITION,"vec3"),t.attributes.add(x.O.UV0,"vec2"),t.varyings.add("vpos","vec3"),e.hasMultipassTerrain&&t.varyings.add("depth","float"),n.uniforms.add(new v.b("textureCoordinateScaleFactor",(function(e){return(0,_.r)(e.texture)&&(0,_.r)(e.texture.descriptor.textureCoordinateScaleFactor)?e.texture.descriptor.textureCoordinateScaleFactor:g.i}))),n.code.add((0,v.n)(i||(i=(0,p.Z)(["\n    void main(void) {\n      vpos = position;\n      ","\n      vTexCoord = uv0 * textureCoordinateScaleFactor;\n      gl_Position = transformPosition(proj, view, vpos);\n    }\n  "])),e.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":"")),t.include(v.a0,e),t.include(v.aw,e),s.uniforms.add([new v.h("tex",(function(e){return e.texture})),new v.g("opacity",(function(e){return e.opacity}))]),t.varyings.add("vTexCoord","vec2"),e.output===v.O.Alpha?s.code.add((0,v.n)(r||(r=(0,p.Z)(["\n    void main() {\n      discardBySlice(vpos);\n      ","\n\n      float alpha = texture2D(tex, vTexCoord).a * opacity;\n      if (alpha  < ",") {\n        discard;\n      }\n\n      gl_FragColor = vec4(alpha);\n    }\n    "])),e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":"",v.n.float(v.a8))):(s.include(v.x),s.code.add((0,v.n)(a||(a=(0,p.Z)(["\n    void main() {\n      discardBySlice(vpos);\n      ","\n      gl_FragColor = texture2D(tex, vTexCoord) * opacity;\n\n      if (gl_FragColor.a < ",") {\n        discard;\n      }\n\n      gl_FragColor = highlightSlice(gl_FragColor, vpos);\n      ","\n    }\n    "])),e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":"",v.n.float(v.a8),e.transparencyPassType===f.o.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""))),t}var T=Object.freeze(Object.defineProperty({__proto__:null,build:w},Symbol.toStringTag,{value:"Module"})),k=function(e){(0,c.Z)(n,e);var t=(0,d.Z)(n);function n(){return(0,o.Z)(this,n),t.apply(this,arguments)}return(0,u.Z)(n,[{key:"initializeProgram",value:function(e){return new v.l(e.rctx,n.shader.get().build(this.configuration),v.E)}},{key:"_setPipelineState",value:function(e,t){var n=this.configuration,i=e===f.o.NONE,r=e===f.o.FrontFace;return(0,f.W)({blending:n.output!==v.O.Color&&n.output!==v.O.Alpha||!n.transparent?null:i?E:(0,f.A)(e),culling:(0,f.k)(n.cullFace),depthTest:{func:(0,f.e)(e)},depthWrite:i?n.writeDepth&&f.b:(0,f.E)(e),colorWrite:f._,stencilWrite:n.hasOccludees?v.ax:null,stencilTest:n.hasOccludees?t?v.ay:v.az:null,polygonOffset:i||r?null:(0,f.g)(n.enableOffset)})}},{key:"initializePipeline",value:function(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}},{key:"getPipelineState",value:function(e,t){return t?this._occludeePipelineState:(0,l.Z)((0,h.Z)(n.prototype),"getPipelineState",this).call(this,e,t)}}]),n}(v.k);k.shader=new v.m(T,(function(){return n.e(8168).then(n.bind(n,58168))}));var E=(0,f.s)(O.R.ONE,O.R.ONE_MINUS_SRC_ALPHA),S=function(e){(0,c.Z)(n,e);var t=(0,d.Z)(n);function n(){var e;return(0,o.Z)(this,n),(e=t.apply(this,arguments)).output=v.O.Color,e.cullFace=f.n.None,e.hasSlicePlane=!1,e.transparent=!1,e.enableOffset=!0,e.writeDepth=!0,e.hasOccludees=!1,e.transparencyPassType=f.o.NONE,e.hasMultipassTerrain=!1,e.cullAboveGround=!1,e}return(0,u.Z)(n)}(v.J);(0,m.e)([(0,v.p)({count:v.O.COUNT})],S.prototype,"output",void 0),(0,m.e)([(0,v.p)({count:f.n.COUNT})],S.prototype,"cullFace",void 0),(0,m.e)([(0,v.p)()],S.prototype,"hasSlicePlane",void 0),(0,m.e)([(0,v.p)()],S.prototype,"transparent",void 0),(0,m.e)([(0,v.p)()],S.prototype,"enableOffset",void 0),(0,m.e)([(0,v.p)()],S.prototype,"writeDepth",void 0),(0,m.e)([(0,v.p)()],S.prototype,"hasOccludees",void 0),(0,m.e)([(0,v.p)({count:f.o.COUNT})],S.prototype,"transparencyPassType",void 0),(0,m.e)([(0,v.p)()],S.prototype,"hasMultipassTerrain",void 0),(0,m.e)([(0,v.p)()],S.prototype,"cullAboveGround",void 0);var Z=function(e){(0,c.Z)(n,e);var t=(0,d.Z)(n);function n(e){var i;return(0,o.Z)(this,n),(i=t.call(this,e,new D)).supportsEdges=!0,i._configuration=new S,i}return(0,u.Z)(n,[{key:"getConfiguration",value:function(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<f.S,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration}},{key:"intersect",value:function(e,t,n,i,r,a,s){(0,v.aN)(e,t,i,r,a,void 0,s)}},{key:"requiresSlot",value:function(e,t){return(t===v.O.Color||t===v.O.Alpha||t===v.O.Highlight)&&(e===v.H.DRAPED_MATERIAL||(t===v.O.Highlight?e===v.H.OPAQUE_MATERIAL:e===(this.parameters.transparent?this.parameters.writeDepth?v.H.TRANSPARENT_MATERIAL:v.H.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:v.H.OPAQUE_MATERIAL)))}},{key:"createGLMaterial",value:function(e){return new P(e)}},{key:"createBufferWriter",value:function(){return new y.D(y.F)}}]),n}(v.aa),P=function(e){(0,c.Z)(n,e);var t=(0,d.Z)(n);function n(e){return(0,o.Z)(this,n),t.call(this,(0,s.Z)((0,s.Z)({},e),e.material.parameters))}return(0,u.Z)(n,[{key:"_updateParameters",value:function(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(k,e)}},{key:"_updateOccludeeState",value:function(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}},{key:"beginSlot",value:function(e){return this._output!==v.O.Color&&this._output!==v.O.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}}]),n}(v.af),D=function(e){(0,c.Z)(n,e);var t=(0,d.Z)(n);function n(){var e;return(0,o.Z)(this,n),(e=t.apply(this,arguments)).transparent=!1,e.writeDepth=!0,e.hasSlicePlane=!1,e.cullFace=f.n.None,e.hasOccludees=!1,e.opacity=1,e.textureId=null,e.initTextureTransparent=!0,e}return(0,u.Z)(n)}(v.ar)},52195:function(e,t,n){n.d(t,{u:function(){return v}});var i=n(15671),r=n(43144),a=n(60136),s=n(29388),o=n(48848),u=n(37856),l=n(630),h=n(92072),c=n(93661),d=n(65094),p=function(e){(0,a.Z)(n,e);var t=(0,s.Z)(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e)).layer=null,r.parent=null,r}return(0,r.Z)(n,[{key:"initialize",value:function(){var e=this;this.when().catch((function(t){if("layerview:create-error"!==t.name){var n=e.layer&&e.layer.id||"no id",i=e.layer&&e.layer.title||"no title";o.a.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '".concat(i,"', id: '").concat(n,"')"),t)}}))}},{key:"fullOpacity",get:function(){return(0,c.v)(this.get("layer.opacity"),1)*(0,c.v)(this.get("parent.fullOpacity"),1)}},{key:"suspended",get:function(){return!this.canResume()}},{key:"suspendInfo",get:function(){return this.getSuspendInfo()}},{key:"legendEnabled",get:function(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}},{key:"updating",get:function(){var e;return!((null===(e=this.updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}},{key:"updatingProgress",get:function(){return this.updating?0:1}},{key:"visible",get:function(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)},set:function(e){this._overrideIfSome("visible",e)}},{key:"canResume",value:function(){var e,t,n;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(n=this.view)||void 0===n?void 0:n.ready)||!1}},{key:"getSuspendInfo",value:function(){var e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}},{key:"isUpdating",value:function(){return!1}}]),n}((0,l.a)((0,h.s)((0,d.m)(u.n.EventedMixin(o.m)))));(0,o.e)([(0,o.y)()],p.prototype,"fullOpacity",null),(0,o.e)([(0,o.y)()],p.prototype,"layer",void 0),(0,o.e)([(0,o.y)()],p.prototype,"parent",void 0),(0,o.e)([(0,o.y)({readOnly:!0})],p.prototype,"suspended",null),(0,o.e)([(0,o.y)({readOnly:!0})],p.prototype,"suspendInfo",null),(0,o.e)([(0,o.y)({readOnly:!0})],p.prototype,"legendEnabled",null),(0,o.e)([(0,o.y)({type:Boolean,readOnly:!0})],p.prototype,"updating",null),(0,o.e)([(0,o.y)({readOnly:!0})],p.prototype,"updatingProgress",null),(0,o.e)([(0,o.y)()],p.prototype,"visible",null),(0,o.e)([(0,o.y)()],p.prototype,"view",void 0);var v=p=(0,o.e)([(0,o.n)("esri.views.layers.LayerView")],p)},72770:function(e,t,n){n.d(t,{n:function(){return v}});var i=n(74165),r=n(15861),a=n(15671),s=n(43144),o=n(11752),u=n(61120),l=n(60136),h=n(29388),c=n(48848),d=n(50690),p=(n(93661),n(70522)),v=function(e){var t=function(e){(0,l.Z)(n,e);var t=(0,h.Z)(n);function n(){var e;return(0,a.Z)(this,n),(e=t.apply(this,arguments)).slicePlaneEnabled=!1,e.supportsHeightUnitConversion=!1,e}return(0,s.Z)(n,[{key:"postscript",value:function(e){(0,o.Z)((0,u.Z)(n.prototype),"postscript",this).call(this,e),(0,p.g)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}},{key:"_validateHeightModelInfo",value:function(){var e=(0,r.Z)((0,i.Z)().mark((function e(){var t,n,r,a=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new AbortController,n=t.signal,this.handles.add((0,c.D)((function(){return t.abort()}))),e.next=4,(0,d.j)((function(){var e;return null===(e=a.view.defaultsFromMap)||void 0===e?void 0:e.heightModelInfoReady}),n);case 4:if((0,c.f)(n),!(r=(0,p.o)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion))){e.next=8;break}throw r;case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"canResume",value:function(){var e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return(0,o.Z)((0,u.Z)(n.prototype),"canResume",this).call(this)&&(!e||!e.minScale||!e.maxScale||e.minScale>=e.maxScale)}},{key:"getSuspendInfo",value:function(){var e=(0,o.Z)((0,u.Z)(n.prototype),"getSuspendInfo",this).call(this),t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return t&&t.minScale&&t.maxScale&&t.minScale<t.maxScale&&(e.outsideScaleRange=!0),e}}]),n}(e);return(0,c.e)([(0,c.y)()],t.prototype,"view",void 0),(0,c.e)([(0,c.y)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,c.e)([(0,c.n)("esri.views.3d.layers.LayerView3D")],t)}},90456:function(e,t,n){n.r(t);var i=n(29439),r=n(37762),a=n(74165),s=n(15861),o=n(15671),u=n(43144),l=n(60136),h=n(29388),c=n(48848),d=n(93661),p=n(50690),v=n(25456),f=n(66653),y=n(28390),m=n(72770),_=n(57791),g=n(70381),x=n(43345),O=n(42947),w=n(52195),T=n(93122),k=(n(71802),n(46817),n(82474),n(40114),n(74384),n(40558),n(95249),n(47855),n(15751),n(79557),n(75255),n(65415),n(23075),n(56162),n(63212),n(39994),n(69717),n(17455),n(62610),n(1500),n(64998),n(25577),n(93314),n(37856),n(59984),n(20302),n(53586),n(65094),n(60369),n(92072),n(37944),n(86086),n(21385),n(89794),n(48200),n(85253),n(93209),n(46337),n(81556),n(93116),n(42467),n(46737),n(52113),n(42667),n(61118),n(85113),n(23585),n(630),n(82396),n(25747),n(59389),n(26313),n(37077),n(49228),n(41723),n(64772),n(91681),n(43955),n(76291),n(13239),n(24093),n(6189),n(17332),n(87750),n(20846),n(67430),n(87424),n(10464),n(32043),n(98598),n(19941),n(49871),n(53409),n(35182),n(62466),n(51816),n(68781),n(69641),n(15436),n(35237),n(89181),n(69768),n(35865),n(51219),n(66577),n(95643),n(33795),n(43976),n(6762),n(2959),n(2821),n(33794),n(71147),n(84186),n(15529),n(70449),n(22603),n(56546),n(39926),n(8141),n(26151),n(90429),n(52559),n(95399),n(98987),n(99795),n(87753),n(29130),n(1685),n(12953),n(74797),n(45999),n(72973),n(62710),n(52721),n(61903),n(23444),n(40811),n(51920),n(63393),n(90442),n(64854),n(24623),n(64264),n(6379),n(21015),n(23341),n(41820),n(20086),n(92982),n(61416),n(77880),n(74494),n(77755),n(71645),n(89311),n(67066),n(39769),n(70607),n(85700),n(3719),n(32161),n(37686),n(16641),n(62642),n(90316),n(19891),n(47748),n(70522),n(43066),n(29048),n(68136),n(50253),n(27205),n(16263),n(3356),n(31698),n(75833),n(87440),n(21744),n(94777),n(85026),n(42233),n(33973),n(70288),n(18936),n(4397),n(95414),n(25217),n(43406),n(45184),n(72361),n(22159),n(73911),n(4937),n(87917),n(46018),n(70863),n(62312),n(24648),n(63999),n(1797),n(5526),n(2473),n(59929),n(2467),n(75257),n(26789),n(64095),n(51732),n(2851),n(70285),n(20675),function(e){(0,l.Z)(n,e);var t=(0,h.Z)(n);function n(){var e;return(0,o.Z)(this,n),(e=t.apply(this,arguments)).type="media-3d",e.drapeSourceType=y.e.RasterImage,e.updatePolicy=_.i.ASYNC,e._uidToElement=new Map,e._renderedElements=new Map,e._lastDrapingExtent=null,e._update=(0,c.a1)(function(){var t=(0,s.Z)((0,a.Z)().mark((function t(n,i,r){var s;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._collectMediaElements(n,i,r);case 2:s=t.sent,e._synchronizeRenderElements(s);case 4:case"end":return t.stop()}}),t)})));return function(e,n,i){return t.apply(this,arguments)}}(),0),e}return(0,u.Z)(n,[{key:"initialize",value:function(){var e=this;this._renderer=this.view.basemapTerrain.overlayManager.registerGeometryDrapeSource(this),this.handles.add([(0,c.D)((function(){return e.view.basemapTerrain.overlayManager.unregisterDrapeSource(e)})),(0,p.a)((function(){return e.layer.source}),"refresh",(function(){return e._updateWithLastDrapingExtent()}))]),this.updatingHandles.add((function(){return e.suspended}),(function(){return e._updateWithLastDrapingExtent()}))}},{key:"setDrapingExtent",value:function(e,t){this._lastDrapingExtent={overlays:e,spatialReference:t},this._updateWithLastDrapingExtent()}},{key:"getHit",value:function(e){var t=this._uidToElement.get(e);return t?{type:"media",element:t,layer:this.layer}:null}},{key:"_updateWithLastDrapingExtent",value:function(){if((0,d.t)(this._lastDrapingExtent)||this.suspended)this._renderer&&this._synchronizeRenderElements(new Set);else{var e=this._lastDrapingExtent,t=e.overlays,n=e.spatialReference;this.updatingHandles.addPromise(this._update(t,n).catch((function(){})))}}},{key:"_collectMediaElements",value:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t,n,i){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.layer.source,!(0,d.t)(r)){e.next=5;break}e.t0=new Set,e.next=10;break;case 5:return e.t1=Set,e.next=8,Promise.all(t.map((function(e){return r.queryElements((0,v.f)(e.extent,n),{signal:i})})));case 8:e.t2=e.sent.flat(),e.t0=new e.t1(e.t2);case 10:return e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,this)})));return function(t,n,i){return e.apply(this,arguments)}}()},{key:"_synchronizeRenderElements",value:function(e){this._synchronizeRenderElementsRemove(e),this._synchronizeRenderElementsAdd(e)}},{key:"_synchronizeRenderElementsRemove",value:function(e){var t=this,n=new Set,i=[];this._renderedElements.forEach((function(r,a){e.has(a)||(n.add(a),(0,d.r)(r.renderData)&&i.push(r.renderData.renderGeometry),t._removeElement(a,r))})),this._renderer.removeGeometries(i,y.w.REMOVE)}},{key:"_synchronizeRenderElementsAdd",value:function(e){var t,n=(0,r.Z)(e);try{for(n.s();!(t=n.n()).done;){var i=t.value;this._renderedElements.has(i)||this._createRenderElement(i)}}catch(a){n.e(a)}finally{n.f()}}},{key:"_removeElement",value:function(e,t){var n=t.renderData,i=t.handle;this._destroyRenderData(n),this._renderedElements.delete(e),this._uidToElement.delete(e.uid),i.remove()}},{key:"_createRenderElement",value:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t){var n,i,r=this;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=new f.a({spatialReference:this.view.spatialReference,element:t}),i={renderData:null,handle:(0,c.F)([this.updatingHandles.add((function(){return t.opacity}),(function(e){(0,d.r)(i.renderData)&&i.renderData.material.setParameters({opacity:e})})),this.updatingHandles.add((function(){return n.coords}),(function(e){(0,d.r)(i.renderData)?r._updateGeometry(i,i.renderData,e):r._initializeRenderData(n,i)})),this.updatingHandles.add((function(){return t.content}),(function(){return r._initializeRenderData(n,i)})),(0,c.aF)(n)])},this._renderedElements.set(t,i),this._uidToElement.set(t.uid,t),this.updatingHandles.addPromise(t.load().catch((function(){}))),this._initializeRenderData(n,i);case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_initializeRenderData",value:function(e,t){var n=e.coords,i=e.element;if((0,d.t)(n)||(0,d.t)(i.content))t.renderData=this._destroyRenderData(t.renderData);else if(!(0,d.r)(t.renderData)){var r=this._createTexture(i.content);this.view._stage.add(r);var a=this.view._stage.loadImmediate(r);(0,c.V)(a)&&this.updatingHandles.addPromise(a);var s=new O.p({initTextureTransparent:!0,textureId:r.id,opacity:i.opacity,transparent:!0}),o=this._positionVertexBufferFromCoordinates(n),u=[0,1,2,0,2,3],l=new g.M([[x.O.POSITION,{data:o,size:3,exclusive:!0}],[x.O.UV0,{data:[0,0,1,0,1,1,0,1],size:2,exclusive:!0}]],[[x.O.POSITION,u],[x.O.UV0,u]]),h=new y.B(l,s,{layerUid:this.layer.uid,graphicUid:i.uid});this._renderer.addGeometries([h],y.w.ADD),t.renderData={renderGeometry:h,texture:r,material:s}}}},{key:"_updateGeometry",value:function(e,t,n){if((0,d.t)(n))e.renderData=this._destroyRenderData(e.renderData);else{var i=this._positionVertexBufferFromCoordinates(n);t.renderGeometry.vertexAttributes.get(x.O.POSITION).data=i,this._renderer.modifyGeometries([t.renderGeometry],y.X.VERTEXATTRS)}}},{key:"_positionVertexBufferFromCoordinates",value:function(e){var t=(0,i.Z)(e.rings[0],4),n=t[0],r=t[1],a=t[2],s=t[3];return new Float64Array([n[0],n[1],y.W,s[0],s[1],y.W,a[0],a[1],y.W,r[0],r[1],y.W])}},{key:"_destroyRenderData",value:function(e){return(0,d.t)(e)||(this.view._stage.remove(e.texture),this._renderer.removeGeometries([e.renderGeometry],y.w.REMOVE),e.material.dispose()),null}},{key:"_createTexture",value:function(e){var t=this,n=e instanceof HTMLImageElement?e.naturalWidth:e.width,i=e instanceof HTMLImageElement?e.naturalHeight:e.height;return new g.Y(e,{wrap:{s:T.D.CLAMP_TO_EDGE,t:T.D.CLAMP_TO_EDGE},preMultiplyAlpha:!0,width:n,height:i,mipmap:!0,powerOfTwoResizeMode:_.h.STRETCH,updateCallback:function(){return t.view.basemapTerrain.overlayManager.setDrawTexturesDirty()}})}},{key:"test",get:function(){var e=this;return{get numberOfElements(){return e._renderedElements.size}}}}]),n}((0,m.n)(w.u)));(0,c.e)([(0,c.y)({readOnly:!0})],k.prototype,"type",void 0),(0,c.e)([(0,c.y)()],k.prototype,"layer",void 0);var E=k=(0,c.e)([(0,c.n)("esri.views.3d.layers.MediaLayerView3D")],k);t.default=E},66653:function(e,t,n){n.d(t,{a:function(){return p}});var i=n(15671),r=n(43144),a=n(60136),s=n(29388),o=n(48848),u=n(93661),l=n(74384),h=n(95249),c=n(25456),d=n(23075),p=function(e){(0,a.Z)(n,e);var t=(0,s.Z)(n);function n(e){return(0,i.Z)(this,n),t.call(this,e)}return(0,r.Z)(n,[{key:"bounds",get:function(){var e=this.coords;return(0,u.t)(e)||(0,u.t)(e.extent)?null:(0,c.c)(e.extent)}},{key:"coords",get:function(){var e,t=null===(e=(0,u.e)(this.element.georeference))||void 0===e?void 0:e.coords;return(0,h.u)(t,this.spatialReference).geometry}},{key:"normalizedCoords",get:function(){return l.v.fromJSON((0,d.a)(this.coords))}},{key:"normalizedBounds",get:function(){var e=(0,u.r)(this.normalizedCoords)?this.normalizedCoords.extent:null;return(0,u.r)(e)?(0,c.c)(e):null}}]),n}(o.m);(0,o.e)([(0,o.y)()],p.prototype,"spatialReference",void 0),(0,o.e)([(0,o.y)()],p.prototype,"element",void 0),(0,o.e)([(0,o.y)()],p.prototype,"bounds",null),(0,o.e)([(0,o.y)()],p.prototype,"coords",null),(0,o.e)([(0,o.y)()],p.prototype,"normalizedCoords",null),(0,o.e)([(0,o.y)()],p.prototype,"normalizedBounds",null),p=(0,o.e)([(0,o.n)("esri.layers.support.media.MediaElementView")],p)},23075:function(e,t,n){n.d(t,{a:function(){return p},p:function(){return v}});var i=n(43144),r=n(15671),a=n(37762),s=n(29439),o=n(93661),u=n(25456),l=n(74384),h=n(56162),c=n(63212),d=n(82474);function p(e){return f(e,!0)}function v(e){return f(e,!1)}function f(e,t){if((0,o.t)(e))return null;var n=e.spatialReference,i=(0,d.a)(n),r="toJSON"in e?e.toJSON():e;if(!i)return r;var a=(0,d.b)(n)?102100:4326,s=c.r[a].maxX,u=c.r[a].minX;if((0,h.s)(r))return m(r,s,u);if((0,h.l)(r))return r.points=r.points.map((function(e){return m(e,s,u)})),r;if((0,h.u)(r))return y(r,i);if((0,h.y)(r)||(0,h.f)(r)){var p=(0,l.e)(T,r),v={xmin:p[0],ymin:p[1],xmax:p[2],ymax:p[3]},f=(0,c.i)(v.xmin,u)*(2*s),_=0===f?r:(0,c.s)(r,f);return v.xmin+=f,v.xmax+=f,v.xmax>s?O(_,s,t):v.xmin<u?O(_,u,t):_}return r}function y(e,t){if(!t)return e;var n=function(e,t){var n=[],i=e.ymin,r=e.ymax,a=e.xmin,o=e.xmax,u=e.xmax-e.xmin,l=(0,s.Z)(t.valid,2),h=l[0],c=l[1],d=_(e.xmin,t),p=d.x,v=d.frameId,f=_(e.xmax,t),y=f.x,m=f.frameId,x=p===y&&u>0;if(u>2*c){var O={xmin:a<o?p:y,ymin:i,xmax:c,ymax:r},T={xmin:h,ymin:i,xmax:a<o?y:p,ymax:r},k={xmin:0,ymin:i,xmax:c,ymax:r},E={xmin:h,ymin:i,xmax:0,ymax:r},S=[],Z=[];g(O,k)&&S.push(v),g(O,E)&&Z.push(v),g(T,k)&&S.push(m),g(T,E)&&Z.push(m);for(var P=v+1;P<m;P++)S.push(P),Z.push(P);n.push(new w(O,[v]),new w(T,[m]),new w(k,S),new w(E,Z))}else p>y||x?n.push(new w({xmin:p,ymin:i,xmax:c,ymax:r},[v]),new w({xmin:h,ymin:i,xmax:y,ymax:r},[m])):n.push(new w({xmin:p,ymin:i,xmax:y,ymax:r},[v]));return n}(e,t).map((function(e){return e.extent}));return n.length<2?n[0]||e:n.length>2?(e.xmin=t.valid[0],e.xmax=t.valid[1],e):{rings:n.map((function(e){return[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]}))}}function m(e,t,n){if(Array.isArray(e)){var i=e[0];if(i>t){var r=(0,c.i)(i,t);e[0]=i+r*(-2*t)}else if(i<n){var a=(0,c.i)(i,n);e[0]=i+a*(-2*n)}}else{var s=e.x;if(s>t){var o=(0,c.i)(s,t);e.x+=o*(-2*t)}else if(s<n){var u=(0,c.i)(s,n);e.x+=u*(-2*n)}}return e}function _(e,t){var n,i=(0,s.Z)(t.valid,2),r=i[0],a=i[1],o=2*a,u=0;return e>a?(e-=(n=Math.ceil(Math.abs(e-a)/o))*o,u=n):e<r&&(e+=(n=Math.ceil(Math.abs(e-r)/o))*o,u=-n),{x:e,frameId:u}}function g(e,t){var n=t.xmin,i=t.ymin,r=t.xmax,a=t.ymax;return x(e,n,i)&&x(e,n,a)&&x(e,r,a)&&x(e,r,i)}function x(e,t,n){return t>=e.xmin&&t<=e.xmax&&n>=e.ymin&&n<=e.ymax}function O(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=!(0,h.f)(e);if(i&&(0,l.q)(e),n)return(new k).cut(e,t);for(var r=i?e.rings:e.paths,s=i?4:2,o=r.length,u=-2*t,c=0;c<o;c++){var d=r[c];if(d&&d.length>=s){var p,v=[],f=(0,a.Z)(d);try{for(f.s();!(p=f.n()).done;){var y=p.value;v.push([y[0]+u,y[1]])}}catch(m){f.e(m)}finally{f.f()}r.push(v)}}return i?e.rings=r:e.paths=r,e}var w=(0,i.Z)((function e(t,n){(0,r.Z)(this,e),this.extent=t,this.frameIds=n})),T=(0,u.u)(),k=function(){function e(){(0,r.Z)(this,e),this._linesIn=[],this._linesOut=[]}return(0,i.Z)(e,[{key:"cut",value:function(e,t){var n;if(this._xCut=t,e.rings)this._closed=!0,n=e.rings,this._minPts=4;else{if(!e.paths)return null;this._closed=!1,n=e.paths,this._minPts=2}var i,r=(0,a.Z)(n);try{for(r.s();!(i=r.n()).done;){var s=i.value;if(s&&!(s.length<this._minPts)){var o,u=!0,l=(0,a.Z)(s);try{for(l.s();!(o=l.n()).done;){var h=o.value;u?(this.moveTo(h),u=!1):this.lineTo(h)}}catch(x){l.e(x)}finally{l.f()}this._closed&&this.close()}}}catch(x){r.e(x)}finally{r.f()}this._pushLineIn(),this._pushLineOut(),n=[];var c,d=(0,a.Z)(this._linesIn);try{for(d.s();!(c=d.n()).done;){var p=c.value;p&&p.length>=this._minPts&&n.push(p)}}catch(x){d.e(x)}finally{d.f()}var v,f=-2*this._xCut,y=(0,a.Z)(this._linesOut);try{for(y.s();!(v=y.n()).done;){var m=v.value;if(m&&m.length>=this._minPts){var _,g=(0,a.Z)(m);try{for(g.s();!(_=g.n()).done;){_.value[0]+=f}}catch(x){g.e(x)}finally{g.f()}n.push(m)}}}catch(x){y.e(x)}finally{y.f()}return this._closed?e.rings=n:e.paths=n,e}},{key:"moveTo",value:function(e){this._pushLineIn(),this._pushLineOut(),this._prevSide=this._side(e[0]),this._moveTo(e[0],e[1],this._prevSide),this._prevPt=e,this._firstPt=e}},{key:"lineTo",value:function(e){var t=this._side(e[0]);if(t*this._prevSide==-1){var n=this._intersect(this._prevPt,e);this._lineTo(this._xCut,n,0),this._prevSide=0,this._lineTo(e[0],e[1],t)}else this._lineTo(e[0],e[1],t);this._prevSide=t,this._prevPt=e}},{key:"close",value:function(){var e=this._firstPt,t=this._prevPt;e[0]===t[0]&&e[1]===t[1]||this.lineTo(e),this._checkClosingPt(this._lineIn),this._checkClosingPt(this._lineOut)}},{key:"_moveTo",value:function(e,t,n){this._closed?(this._lineIn.push([n<=0?e:this._xCut,t]),this._lineOut.push([n>=0?e:this._xCut,t])):(n<=0&&this._lineIn.push([e,t]),n>=0&&this._lineOut.push([e,t]))}},{key:"_lineTo",value:function(e,t,n){this._closed?(this._addPolyVertex(this._lineIn,n<=0?e:this._xCut,t),this._addPolyVertex(this._lineOut,n>=0?e:this._xCut,t)):n<0?(0===this._prevSide&&this._pushLineOut(),this._lineIn.push([e,t])):n>0?(0===this._prevSide&&this._pushLineIn(),this._lineOut.push([e,t])):this._prevSide<0?(this._lineIn.push([e,t]),this._lineOut.push([e,t])):this._prevSide>0&&(this._lineOut.push([e,t]),this._lineIn.push([e,t]))}},{key:"_addPolyVertex",value:function(e,t,n){var i=e.length;i>1&&e[i-1][0]===t&&e[i-2][0]===t?e[i-1][1]=n:e.push([t,n])}},{key:"_checkClosingPt",value:function(e){var t=e.length;t>3&&e[0][0]===this._xCut&&e[t-2][0]===this._xCut&&e[1][0]===this._xCut&&(e[0][1]=e[t-2][1],e.pop())}},{key:"_side",value:function(e){return e<this._xCut?-1:e>this._xCut?1:0}},{key:"_intersect",value:function(e,t){var n=(this._xCut-e[0])/(t[0]-e[0]);return e[1]+n*(t[1]-e[1])}},{key:"_pushLineIn",value:function(){this._lineIn&&this._lineIn.length>=this._minPts&&this._linesIn.push(this._lineIn),this._lineIn=[]}},{key:"_pushLineOut",value:function(){this._lineOut&&this._lineOut.length>=this._minPts&&this._linesOut.push(this._lineOut),this._lineOut=[]}}]),e}()}}]);
//# sourceMappingURL=456.663bbcea.chunk.js.map