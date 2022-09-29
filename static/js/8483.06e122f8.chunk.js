"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[8483],{7214:function(e,t,n){n.d(t,{f:function(){return O},m:function(){return S}});var i,r,a,s=n(1413),u=n(15671),o=n(43144),l=n(11752),h=n(61120),d=n(60136),c=n(29388),p=n(30168),v=n(91309),f=n(45414),y=n(58687),m=n(23132),g=n(75610),x=n(84192),_=n(94867),w=n(6819);function O(e){var t=new v.a;(0,v.P)(t,e),t.include(v.G),t.attributes.add(_.O.POSITION,"vec3"),t.attributes.add(_.O.UV0,"vec2"),t.varyings.add("vpos","vec3"),e.hasMultipassTerrain&&t.varyings.add("depth","float");var n=t.vertex,s=t.fragment;return n.uniforms.add(new v.f("textureCoordinateScaleFactor",(function(e){return(0,g.r)(e.texture)&&(0,g.r)(e.texture.descriptor.textureCoordinateScaleFactor)?e.texture.descriptor.textureCoordinateScaleFactor:x.i}))),n.code.add((0,v.n)(i||(i=(0,p.Z)(["\n    void main(void) {\n      vpos = position;\n      ","\n      vTexCoord = uv0 * textureCoordinateScaleFactor;\n      gl_Position = transformPosition(proj, view, vpos);\n    }\n  "])),e.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":"")),t.include(v.U,e),t.include(v.ak,e),s.uniforms.add([new v.B("tex",(function(e){return e.texture})),new v.p("opacity",(function(e){return e.opacity}))]),t.varyings.add("vTexCoord","vec2"),e.output===v.V.Alpha?s.code.add((0,v.n)(r||(r=(0,p.Z)(["\n    void main() {\n      discardBySlice(vpos);\n      ","\n\n      float alpha = texture2D(tex, vTexCoord).a * opacity;\n      if (alpha  < ",") {\n        discard;\n      }\n\n      gl_FragColor = vec4(alpha);\n    }\n    "])),e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":"",v.n.float(v.a0))):(s.include(v.q),s.code.add((0,v.n)(a||(a=(0,p.Z)(["\n    void main() {\n      discardBySlice(vpos);\n      ","\n      gl_FragColor = texture2D(tex, vTexCoord) * opacity;\n\n      if (gl_FragColor.a < ",") {\n        discard;\n      }\n\n      gl_FragColor = highlightSlice(gl_FragColor, vpos);\n      ","\n    }\n    "])),e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":"",v.n.float(v.a0),e.transparencyPassType===f.O.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""))),t}var T=Object.freeze(Object.defineProperty({__proto__:null,build:O},Symbol.toStringTag,{value:"Module"})),C=function(e){(0,d.Z)(n,e);var t=(0,c.Z)(n);function n(){return(0,u.Z)(this,n),t.apply(this,arguments)}return(0,o.Z)(n,[{key:"initializeProgram",value:function(e){var t=n.shader.get().build(this.configuration);return new v.h(e.rctx,t,v.E)}},{key:"_setPipelineState",value:function(e,t){var n=this.configuration,i=e===f.O.NONE,r=e===f.O.FrontFace;return(0,f.W)({blending:n.output!==v.V.Color&&n.output!==v.V.Alpha||!n.transparent?null:i?k:(0,f.E)(e),culling:(0,f.k)(n.cullFace),depthTest:{func:(0,f.e)(e)},depthWrite:i?n.writeDepth&&f.b:(0,f.S)(e),colorWrite:f.c,stencilWrite:n.hasOccludees?v.al:null,stencilTest:n.hasOccludees?t?v.am:v.an:null,polygonOffset:i||r?null:(0,f.g)(n.enableOffset)})}},{key:"initializePipeline",value:function(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}},{key:"getPipelineState",value:function(e,t){return t?this._occludeePipelineState:(0,l.Z)((0,h.Z)(n.prototype),"getPipelineState",this).call(this,e,t)}}]),n}(v.g);C.shader=new v.t(T,(function(){return n.e(5258).then(n.bind(n,35258))}));var k=(0,f.s)(w.R.ONE,w.R.ONE_MINUS_SRC_ALPHA),E=function(e){(0,d.Z)(n,e);var t=(0,c.Z)(n);function n(){var e;return(0,u.Z)(this,n),(e=t.apply(this,arguments)).output=v.V.Color,e.cullFace=f.n.None,e.hasSlicePlane=!1,e.transparent=!1,e.enableOffset=!0,e.writeDepth=!0,e.hasOccludees=!1,e.transparencyPassType=f.O.NONE,e.hasMultipassTerrain=!1,e.cullAboveGround=!1,e}return(0,o.Z)(n)}(v.a2);(0,m.e)([(0,v.j)({count:v.V.COUNT})],E.prototype,"output",void 0),(0,m.e)([(0,v.j)({count:f.n.COUNT})],E.prototype,"cullFace",void 0),(0,m.e)([(0,v.j)()],E.prototype,"hasSlicePlane",void 0),(0,m.e)([(0,v.j)()],E.prototype,"transparent",void 0),(0,m.e)([(0,v.j)()],E.prototype,"enableOffset",void 0),(0,m.e)([(0,v.j)()],E.prototype,"writeDepth",void 0),(0,m.e)([(0,v.j)()],E.prototype,"hasOccludees",void 0),(0,m.e)([(0,v.j)({count:f.O.COUNT})],E.prototype,"transparencyPassType",void 0),(0,m.e)([(0,v.j)()],E.prototype,"hasMultipassTerrain",void 0),(0,m.e)([(0,v.j)()],E.prototype,"cullAboveGround",void 0);var S=function(e){(0,d.Z)(n,e);var t=(0,c.Z)(n);function n(e){var i;return(0,u.Z)(this,n),(i=t.call(this,e,new P)).supportsEdges=!0,i.techniqueConfig=new E,i}return(0,o.Z)(n,[{key:"getConfiguration",value:function(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.cullFace=this.parameters.cullFace,this.techniqueConfig.hasSlicePlane=this.parameters.hasSlicePlane,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.hasOccludees=this.parameters.hasOccludees,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.enableOffset=t.camera.relativeElevation<f._,this.techniqueConfig.hasMultipassTerrain=t.multipassTerrain.enabled,this.techniqueConfig.cullAboveGround=t.multipassTerrain.cullAboveGround,this.techniqueConfig}},{key:"intersect",value:function(e,t,n,i,r,a,s){(0,v.aA)(e,t,i,r,a,void 0,s)}},{key:"requiresSlot",value:function(e,t){return e===v.C.DRAPED_MATERIAL||((0,y.D)(t)===v.V.Highlight?e===v.C.OPAQUE_MATERIAL:e===(this.parameters.transparent?this.parameters.writeDepth?v.C.TRANSPARENT_MATERIAL:v.C.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:v.C.OPAQUE_MATERIAL))}},{key:"createGLMaterial",value:function(e){return e.output===v.V.Color||e.output===v.V.Alpha||e.output===v.V.Highlight?new Z(e):void 0}},{key:"createBufferWriter",value:function(){return new y.F(y.G)}}]),n}(v.a3),Z=function(e){(0,d.Z)(n,e);var t=(0,c.Z)(n);function n(e){return(0,u.Z)(this,n),t.call(this,(0,s.Z)((0,s.Z)({},e),e.material.parameters))}return(0,o.Z)(n,[{key:"_updateParameters",value:function(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(C,e)}},{key:"_updateOccludeeState",value:function(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}},{key:"beginSlot",value:function(e){return this._output!==v.V.Color&&this._output!==v.V.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}}]),n}(v.a7),P=function(e){(0,d.Z)(n,e);var t=(0,c.Z)(n);function n(){var e;return(0,u.Z)(this,n),(e=t.apply(this,arguments)).transparent=!1,e.writeDepth=!0,e.hasSlicePlane=!1,e.cullFace=f.n.None,e.hasOccludees=!1,e.opacity=1,e.textureId=null,e.initTextureTransparent=!0,e}return(0,o.Z)(n)}(v.ai)},5900:function(e,t,n){n.d(t,{u:function(){return v}});var i=n(15671),r=n(43144),a=n(60136),s=n(29388),u=n(23132),o=n(80175),l=n(97033),h=n(77196),d=n(75610),c=n(43920),p=function(e){(0,a.Z)(n,e);var t=(0,s.Z)(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e)).layer=null,r.parent=null,r}return(0,r.Z)(n,[{key:"initialize",value:function(){var e=this;this.when().catch((function(t){if("layerview:create-error"!==t.name){var n=e.layer&&e.layer.id||"no id",i=e.layer&&e.layer.title||"no title";u.s.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '".concat(i,"', id: '").concat(n,"')"),t)}}))}},{key:"fullOpacity",get:function(){return(0,d.n)(this.get("layer.opacity"),1)*(0,d.n)(this.get("parent.fullOpacity"),1)}},{key:"suspended",get:function(){return!this.canResume()}},{key:"suspendInfo",get:function(){return this.getSuspendInfo()}},{key:"legendEnabled",get:function(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}},{key:"updating",get:function(){var e;return!((null===(e=this.updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}},{key:"updatingProgress",get:function(){return this.updating?0:1}},{key:"visible",get:function(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}},{key:"canResume",value:function(){var e,t,n;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(n=this.view)||void 0===n?void 0:n.ready)||!1}},{key:"getSuspendInfo",value:function(){var e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}},{key:"isUpdating",value:function(){return!1}}]),n}((0,l.a)((0,h.s)((0,c.m)(o.n.EventedMixin(u.y)))));(0,u.e)([(0,u.d)()],p.prototype,"fullOpacity",null),(0,u.e)([(0,u.d)()],p.prototype,"layer",void 0),(0,u.e)([(0,u.d)()],p.prototype,"parent",void 0),(0,u.e)([(0,u.d)({readOnly:!0})],p.prototype,"suspended",null),(0,u.e)([(0,u.d)({readOnly:!0})],p.prototype,"suspendInfo",null),(0,u.e)([(0,u.d)({readOnly:!0})],p.prototype,"legendEnabled",null),(0,u.e)([(0,u.d)({type:Boolean,readOnly:!0})],p.prototype,"updating",null),(0,u.e)([(0,u.d)({readOnly:!0})],p.prototype,"updatingProgress",null),(0,u.e)([(0,u.d)()],p.prototype,"visible",null),(0,u.e)([(0,u.d)()],p.prototype,"view",void 0);var v=p=(0,u.e)([(0,u.n)("esri.views.layers.LayerView")],p)},3964:function(e,t,n){n.d(t,{n:function(){return v}});var i=n(74165),r=n(15861),a=n(15671),s=n(43144),u=n(11752),o=n(61120),l=n(60136),h=n(29388),d=n(23132),c=n(36551),p=(n(75610),n(86270)),v=function(e){var t=function(e){(0,l.Z)(n,e);var t=(0,h.Z)(n);function n(){var e;return(0,a.Z)(this,n),(e=t.apply(this,arguments)).slicePlaneEnabled=!1,e.supportsHeightUnitConversion=!1,e}return(0,s.Z)(n,[{key:"postscript",value:function(e){(0,u.Z)((0,o.Z)(n.prototype),"postscript",this).call(this,e),(0,p.g)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}},{key:"_validateHeightModelInfo",value:function(){var e=(0,r.Z)((0,i.Z)().mark((function e(){var t,n,r,a=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new AbortController,n=t.signal,this.handles.add((0,d.g)((function(){return t.abort()}))),e.next=4,(0,c.j)((function(){var e;return null===(e=a.view.defaultsFromMap)||void 0===e?void 0:e.heightModelInfoReady}),n);case 4:if((0,d.H)(n),!(r=(0,p.o)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion))){e.next=8;break}throw r;case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"canResume",value:function(){var e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return(0,u.Z)((0,o.Z)(n.prototype),"canResume",this).call(this)&&(!e||!e.minScale||!e.maxScale||e.minScale>=e.maxScale)}},{key:"getSuspendInfo",value:function(){var e=(0,u.Z)((0,o.Z)(n.prototype),"getSuspendInfo",this).call(this),t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return t&&t.minScale&&t.maxScale&&t.minScale<t.maxScale&&(e.outsideScaleRange=!0),e}}]),n}(e);return(0,d.e)([(0,d.d)()],t.prototype,"view",void 0),(0,d.e)([(0,d.d)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,d.e)([(0,d.n)("esri.views.3d.layers.LayerView3D")],t)}},98483:function(e,t,n){n.r(t);var i=n(29439),r=n(37762),a=n(74165),s=n(15861),u=n(15671),o=n(43144),l=n(60136),h=n(29388),d=n(23132),c=n(75610),p=n(36551),v=n(78311),f=n(88844),y=n(58687),m=n(3964),g=n(45414),x=n(91309),_=n(94867),w=n(7214),O=n(5900),T=n(6819),C=(n(21583),n(2760),n(80262),n(30709),n(70441),n(36460),n(63022),n(44455),n(57714),n(80175),n(61340),n(33703),n(69953),n(45379),n(30604),n(1241),n(91204),n(10815),n(2157),n(55269),n(83822),n(51451),n(50526),n(50448),n(41742),n(43920),n(1773),n(77196),n(24980),n(3114),n(22144),n(78674),n(66307),n(88370),n(72820),n(96349),n(9055),n(79611),n(84538),n(49580),n(54841),n(77470),n(92870),n(6794),n(81663),n(97033),n(83996),n(97627),n(38304),n(96401),n(71573),n(57952),n(58394),n(44344),n(48561),n(84192),n(3969),n(55806),n(47672),n(64296),n(14432),n(6243),n(37783),n(74021),n(56864),n(64004),n(40273),n(72692),n(77389),n(32568),n(69202),n(27597),n(67417),n(15181),n(33642),n(28999),n(15612),n(43124),n(69797),n(34860),n(36638),n(10590),n(19948),n(96636),n(30664),n(83024),n(47626),n(25316),n(407),n(67154),n(79054),n(29709),n(47642),n(18411),n(43782),n(33976),n(28210),n(17436),n(53373),n(94872),n(79042),n(61495),n(16485),n(92029),n(74575),n(9575),n(53249),n(72763),n(28681),n(38929),n(97866),n(68890),n(31513),n(25838),n(54539),n(19967),n(50338),n(28623),n(10312),n(95254),n(61099),n(12158),n(93874),n(62446),n(27264),n(50905),n(78945),n(55827),n(70516),n(25279),n(22268),n(40452),n(60424),n(22225),n(38425),n(42471),n(78470),n(1665),n(38843),n(24892),n(48889),n(30150),n(53647),n(14181),n(86270),n(87833),n(21523),n(71710),n(45332),n(83059),n(4720),n(90138),n(97566),n(21165),n(21984),n(50982),n(83262),n(32990),n(61349),n(2822),n(52376),n(48373),n(61473),n(14946),n(44365),n(90584),n(86148),n(60912),n(98907),n(66156),n(10534),n(25459),n(78556),n(77787),n(85511),n(87603),n(22051),n(21924),n(46123),n(75777),n(76071),n(42446),n(59819),n(64571),n(25715),function(e){(0,l.Z)(n,e);var t=(0,h.Z)(n);function n(){var e;return(0,u.Z)(this,n),(e=t.apply(this,arguments)).type="media-3d",e.drapeSourceType=y.e.RasterImage,e.updatePolicy=g.o.ASYNC,e._uidToElement=new Map,e._renderedElements=new Map,e._lastDrapingExtent=null,e._update=(0,d.x)(function(){var t=(0,s.Z)((0,a.Z)().mark((function t(n,i,r){var s;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._collectMediaElements(n,i,r);case 2:s=t.sent,e._synchronizeRenderElements(s);case 4:case"end":return t.stop()}}),t)})));return function(e,n,i){return t.apply(this,arguments)}}(),0),e}return(0,o.Z)(n,[{key:"initialize",value:function(){var e=this;this._renderer=this.view.basemapTerrain.overlayManager.registerGeometryDrapeSource(this),this.handles.add([(0,d.g)((function(){return e.view.basemapTerrain.overlayManager.unregisterDrapeSource(e)})),(0,p.a)((function(){return e.layer.source}),"refresh",(function(){return e._updateWithLastDrapingExtent()}))]),this.updatingHandles.add((function(){return e.suspended}),(function(){return e._updateWithLastDrapingExtent()}))}},{key:"setDrapingExtent",value:function(e,t){this._lastDrapingExtent={overlays:e,spatialReference:t},this._updateWithLastDrapingExtent()}},{key:"getHit",value:function(e){var t=this._uidToElement.get(e);return t?{type:"media",element:t,layer:this.layer}:null}},{key:"_updateWithLastDrapingExtent",value:function(){if((0,c.t)(this._lastDrapingExtent)||this.suspended)this._renderer&&this._synchronizeRenderElements(new Set);else{var e=this._lastDrapingExtent,t=e.overlays,n=e.spatialReference;this.updatingHandles.addPromise(this._update(t,n).catch((function(){})))}}},{key:"_collectMediaElements",value:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t,n,i){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.layer.source,!(0,c.t)(r)){e.next=5;break}e.t0=new Set,e.next=10;break;case 5:return e.t1=Set,e.next=8,Promise.all(t.map((function(e){return r.queryElements((0,v.f)(e.extent,n),{signal:i})})));case 8:e.t2=e.sent.flat(),e.t0=new e.t1(e.t2);case 10:return e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,this)})));return function(t,n,i){return e.apply(this,arguments)}}()},{key:"_synchronizeRenderElements",value:function(e){this._synchronizeRenderElementsRemove(e),this._synchronizeRenderElementsAdd(e)}},{key:"_synchronizeRenderElementsRemove",value:function(e){var t=this,n=new Set,i=[];this._renderedElements.forEach((function(r,a){e.has(a)||(n.add(a),(0,c.r)(r.renderData)&&i.push(r.renderData.renderGeometry),t._removeElement(a,r))})),this._renderer.removeGeometries(i,y.v.Geometry.REMOVE)}},{key:"_synchronizeRenderElementsAdd",value:function(e){var t,n=(0,r.Z)(e);try{for(n.s();!(t=n.n()).done;){var i=t.value;this._renderedElements.has(i)||this._createRenderElement(i)}}catch(a){n.e(a)}finally{n.f()}}},{key:"_removeElement",value:function(e,t){var n=t.renderData,i=t.handle;this._destroyRenderData(n),this._renderedElements.delete(e),this._uidToElement.delete(e.uid),i.remove()}},{key:"_createRenderElement",value:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t){var n,i,r=this;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=new f.a({spatialReference:this.view.spatialReference,element:t}),i={renderData:null,handle:(0,d.h)([this.updatingHandles.add((function(){return t.opacity}),(function(e){(0,c.r)(i.renderData)&&i.renderData.material.setParameters({opacity:e})})),this.updatingHandles.add((function(){return n.coords}),(function(e){(0,c.r)(i.renderData)?r._updateGeometry(i,i.renderData,e):r._initializeRenderData(n,i)})),this.updatingHandles.add((function(){return t.content}),(function(){return r._initializeRenderData(n,i)})),(0,d.aF)(n)])},this._renderedElements.set(t,i),this._uidToElement.set(t.uid,t),this.updatingHandles.addPromise(t.load().catch((function(){}))),this._initializeRenderData(n,i);case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_initializeRenderData",value:function(e,t){var n=e.coords,i=e.element;if((0,c.t)(n)||(0,c.t)(i.content))t.renderData=this._destroyRenderData(t.renderData);else if(!(0,c.r)(t.renderData)){var r=this._createTexture(i.content);this.view._stage.add(r);var a=this.view._stage.loadImmediate(r);(0,d.D)(a)&&this.updatingHandles.addPromise(a);var s=new w.m({initTextureTransparent:!0,textureId:r.id,opacity:i.opacity,transparent:!0}),u=this._positionVertexBufferFromCoordinates(n),o=new Uint16Array([0,1,2,0,2,3]),l=new x.I([[_.O.POSITION,{data:u,size:3,exclusive:!0}],[_.O.UV0,{data:[0,0,1,0,1,1,0,1],size:2,exclusive:!0}]],[[_.O.POSITION,o],[_.O.UV0,o]]),h=new y.A(l,s,{layerUid:this.layer.uid,graphicUid:i.uid});this._renderer.addGeometries([h],y.v.Geometry.ADD),t.renderData={renderGeometry:h,texture:r,material:s}}}},{key:"_updateGeometry",value:function(e,t,n){if((0,c.t)(n))e.renderData=this._destroyRenderData(e.renderData);else{var i=this._positionVertexBufferFromCoordinates(n);t.renderGeometry.vertexAttributes.get(_.O.POSITION).data=i,this._renderer.modifyGeometries([t.renderGeometry],y.v.State.VERTEXATTRS)}}},{key:"_positionVertexBufferFromCoordinates",value:function(e){var t=(0,i.Z)(e.rings[0],4),n=t[0],r=t[1],a=t[2],s=t[3];return new Float64Array([n[0],n[1],y.aw,s[0],s[1],y.aw,a[0],a[1],y.aw,r[0],r[1],y.aw])}},{key:"_destroyRenderData",value:function(e){return(0,c.t)(e)||(this.view._stage.remove(e.texture),this._renderer.removeGeometries([e.renderGeometry],y.v.Geometry.REMOVE),e.material.dispose()),null}},{key:"_createTexture",value:function(e){var t=this,n=e instanceof HTMLImageElement?e.naturalWidth:e.width,i=e instanceof HTMLImageElement?e.naturalHeight:e.height;return new x.T(e,{wrap:{s:T.D.CLAMP_TO_EDGE,t:T.D.CLAMP_TO_EDGE},preMultiplyAlpha:!0,width:n,height:i,mipmap:!0,powerOfTwoResizeMode:g.h.STRETCH,updateCallback:function(){return t.view.basemapTerrain.overlayManager.setDrawTexturesDirty()}})}},{key:"test",get:function(){var e=this;return{get numberOfElements(){return e._renderedElements.size}}}}]),n}((0,m.n)(O.u)));(0,d.e)([(0,d.d)({readOnly:!0})],C.prototype,"type",void 0),(0,d.e)([(0,d.d)()],C.prototype,"layer",void 0);var k=C=(0,d.e)([(0,d.n)("esri.views.3d.layers.MediaLayerView3D")],C);t.default=k},88844:function(e,t,n){n.d(t,{a:function(){return p}});var i=n(15671),r=n(43144),a=n(60136),s=n(29388),u=n(23132),o=n(75610),l=n(36460),h=n(63022),d=n(78311),c=n(45379),p=function(e){(0,a.Z)(n,e);var t=(0,s.Z)(n);function n(e){return(0,i.Z)(this,n),t.call(this,e)}return(0,r.Z)(n,[{key:"bounds",get:function(){var e=this.coords;return(0,o.t)(e)?null:(0,d.c)(e.extent)}},{key:"coords",get:function(){var e,t=null===(e=(0,o.e)(this.element.georeference))||void 0===e?void 0:e.coords;return(0,h.u)(t,this.spatialReference).geometry}},{key:"normalizedCoords",get:function(){return l.v.fromJSON((0,c.p)(this.coords))}},{key:"normalizedBounds",get:function(){return(0,o.r)(this.normalizedCoords)?(0,d.c)(this.normalizedCoords.extent):null}}]),n}(u.y);(0,u.e)([(0,u.d)()],p.prototype,"spatialReference",void 0),(0,u.e)([(0,u.d)()],p.prototype,"element",void 0),(0,u.e)([(0,u.d)()],p.prototype,"bounds",null),(0,u.e)([(0,u.d)()],p.prototype,"coords",null),(0,u.e)([(0,u.d)()],p.prototype,"normalizedCoords",null),(0,u.e)([(0,u.d)()],p.prototype,"normalizedBounds",null),p=(0,u.e)([(0,u.n)("esri.layers.support.media.MediaElementView")],p)},45379:function(e,t,n){n.d(t,{f:function(){return v},p:function(){return p}});var i=n(43144),r=n(15671),a=n(37762),s=n(29439),u=n(75610),o=n(78311),l=n(36460),h=n(30604),d=n(1241),c=n(30709);function p(e){return f(e,!0)}function v(e){return f(e,!1)}function f(e,t){if((0,u.t)(e))return null;var n=e.spatialReference,i=(0,c.b)(n),r="toJSON"in e?e.toJSON():e;if(!i)return r;var a=(0,c.f)(n)?102100:4326,s=d.r[a].maxX,o=d.r[a].minX;if((0,h.l)(r))return m(r,s,o);if((0,h.f)(r))return r.points=r.points.map((function(e){return m(e,s,o)})),r;if((0,h.s)(r))return y(r,i);if((0,h.c)(r)||(0,h.y)(r)){var p=(0,l.c)(T,r),v={xmin:p[0],ymin:p[1],xmax:p[2],ymax:p[3]},f=(0,d.i)(v.xmin,o)*(2*s),g=0===f?r:(0,d.s)(r,f);return v.xmin+=f,v.xmax+=f,v.xmax>s?w(g,s,t):v.xmin<o?w(g,o,t):g}return r}function y(e,t){if(!t)return e;var n=function(e,t){var n=[],i=e.ymin,r=e.ymax,a=e.xmin,u=e.xmax,o=e.xmax-e.xmin,l=(0,s.Z)(t.valid,2),h=l[0],d=l[1],c=g(e.xmin,t),p=c.x,v=c.frameId,f=g(e.xmax,t),y=f.x,m=f.frameId,_=p===y&&o>0;if(o>2*d){var w={xmin:a<u?p:y,ymin:i,xmax:d,ymax:r},T={xmin:h,ymin:i,xmax:a<u?y:p,ymax:r},C={xmin:0,ymin:i,xmax:d,ymax:r},k={xmin:h,ymin:i,xmax:0,ymax:r},E=[],S=[];x(w,C)&&E.push(v),x(w,k)&&S.push(v),x(T,C)&&E.push(m),x(T,k)&&S.push(m);for(var Z=v+1;Z<m;Z++)E.push(Z),S.push(Z);n.push(new O(w,[v]),new O(T,[m]),new O(C,E),new O(k,S))}else p>y||_?n.push(new O({xmin:p,ymin:i,xmax:d,ymax:r},[v]),new O({xmin:h,ymin:i,xmax:y,ymax:r},[m])):n.push(new O({xmin:p,ymin:i,xmax:y,ymax:r},[v]));return n}(e,t).map((function(e){return e.extent}));return n.length<2?n[0]||e:n.length>2?(e.xmin=t.valid[0],e.xmax=t.valid[1],e):{rings:n.map((function(e){return[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]}))}}function m(e,t,n){if(Array.isArray(e)){var i=e[0];if(i>t){var r=(0,d.i)(i,t);e[0]=i+r*(-2*t)}else if(i<n){var a=(0,d.i)(i,n);e[0]=i+a*(-2*n)}}else{var s=e.x;if(s>t){var u=(0,d.i)(s,t);e.x+=u*(-2*t)}else if(s<n){var o=(0,d.i)(s,n);e.x+=o*(-2*n)}}return e}function g(e,t){var n,i=(0,s.Z)(t.valid,2),r=i[0],a=i[1],u=2*a,o=0;return e>a?(e-=(n=Math.ceil(Math.abs(e-a)/u))*u,o=n):e<r&&(e+=(n=Math.ceil(Math.abs(e-r)/u))*u,o=-n),{x:e,frameId:o}}function x(e,t){var n=t.xmin,i=t.ymin,r=t.xmax,a=t.ymax;return _(e,n,i)&&_(e,n,a)&&_(e,r,a)&&_(e,r,i)}function _(e,t,n){return t>=e.xmin&&t<=e.xmax&&n>=e.ymin&&n<=e.ymax}function w(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=!(0,h.y)(e);if(i&&(0,l.i)(e),n)return(new C).cut(e,t);for(var r=i?e.rings:e.paths,s=i?4:2,u=r.length,o=-2*t,d=0;d<u;d++){var c=r[d];if(c&&c.length>=s){var p,v=[],f=(0,a.Z)(c);try{for(f.s();!(p=f.n()).done;){var y=p.value;v.push([y[0]+o,y[1]])}}catch(m){f.e(m)}finally{f.f()}r.push(v)}}return i?e.rings=r:e.paths=r,e}var O=(0,i.Z)((function e(t,n){(0,r.Z)(this,e),this.extent=t,this.frameIds=n})),T=(0,o.u)(),C=function(){function e(){(0,r.Z)(this,e),this.linesIn=[],this.linesOut=[]}return(0,i.Z)(e,[{key:"cut",value:function(e,t){var n;if(this.xCut=t,e.rings)this.closed=!0,n=e.rings,this.minPts=4;else{if(!e.paths)return null;this.closed=!1,n=e.paths,this.minPts=2}var i,r=(0,a.Z)(n);try{for(r.s();!(i=r.n()).done;){var s=i.value;if(s&&!(s.length<this.minPts)){var u,o=!0,l=(0,a.Z)(s);try{for(l.s();!(u=l.n()).done;){var h=u.value;o?(this.moveTo(h),o=!1):this.lineTo(h)}}catch(_){l.e(_)}finally{l.f()}this.closed&&this.close()}}}catch(_){r.e(_)}finally{r.f()}this._pushLineIn(),this._pushLineOut(),n=[];var d,c=(0,a.Z)(this.linesIn);try{for(c.s();!(d=c.n()).done;){var p=d.value;p&&p.length>=this.minPts&&n.push(p)}}catch(_){c.e(_)}finally{c.f()}var v,f=-2*this.xCut,y=(0,a.Z)(this.linesOut);try{for(y.s();!(v=y.n()).done;){var m=v.value;if(m&&m.length>=this.minPts){var g,x=(0,a.Z)(m);try{for(x.s();!(g=x.n()).done;){g.value[0]+=f}}catch(_){x.e(_)}finally{x.f()}n.push(m)}}}catch(_){y.e(_)}finally{y.f()}return this.closed?e.rings=n:e.paths=n,e}},{key:"moveTo",value:function(e){this._pushLineIn(),this._pushLineOut(),this._prevSide=this._side(e[0]),this._moveTo(e[0],e[1],this._prevSide),this._prevPt=e,this._firstPt=e}},{key:"lineTo",value:function(e){var t=this._side(e[0]);if(t*this._prevSide==-1){var n=this._intersect(this._prevPt,e);this._lineTo(this.xCut,n,0),this._prevSide=0,this._lineTo(e[0],e[1],t)}else this._lineTo(e[0],e[1],t);this._prevSide=t,this._prevPt=e}},{key:"close",value:function(){var e=this._firstPt,t=this._prevPt;e[0]===t[0]&&e[1]===t[1]||this.lineTo(e),this._checkClosingPt(this.lineIn),this._checkClosingPt(this.lineOut)}},{key:"_moveTo",value:function(e,t,n){this.closed?(this.lineIn.push([n<=0?e:this.xCut,t]),this.lineOut.push([n>=0?e:this.xCut,t])):(n<=0&&this.lineIn.push([e,t]),n>=0&&this.lineOut.push([e,t]))}},{key:"_lineTo",value:function(e,t,n){this.closed?(this._addPolyVertex(this.lineIn,n<=0?e:this.xCut,t),this._addPolyVertex(this.lineOut,n>=0?e:this.xCut,t)):n<0?(0===this._prevSide&&this._pushLineOut(),this.lineIn.push([e,t])):n>0?(0===this._prevSide&&this._pushLineIn(),this.lineOut.push([e,t])):this._prevSide<0?(this.lineIn.push([e,t]),this.lineOut.push([e,t])):this._prevSide>0&&(this.lineOut.push([e,t]),this.lineIn.push([e,t]))}},{key:"_addPolyVertex",value:function(e,t,n){var i=e.length;i>1&&e[i-1][0]===t&&e[i-2][0]===t?e[i-1][1]=n:e.push([t,n])}},{key:"_checkClosingPt",value:function(e){var t=e.length;t>3&&e[0][0]===this.xCut&&e[t-2][0]===this.xCut&&e[1][0]===this.xCut&&(e[0][1]=e[t-2][1],e.pop())}},{key:"_side",value:function(e){return e<this.xCut?-1:e>this.xCut?1:0}},{key:"_intersect",value:function(e,t){var n=(this.xCut-e[0])/(t[0]-e[0]);return e[1]+n*(t[1]-e[1])}},{key:"_pushLineIn",value:function(){this.lineIn&&this.lineIn.length>=this.minPts&&this.linesIn.push(this.lineIn),this.lineIn=[]}},{key:"_pushLineOut",value:function(){this.lineOut&&this.lineOut.length>=this.minPts&&this.linesOut.push(this.lineOut),this.lineOut=[]}}]),e}()}}]);
//# sourceMappingURL=8483.06e122f8.chunk.js.map