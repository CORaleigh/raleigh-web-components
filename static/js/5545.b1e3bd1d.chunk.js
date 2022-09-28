"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[5545],{15545:function(e,t,i){i.r(t),i.d(t,{D:function(){return Pe},n:function(){return B}});var n,r,a=i(74165),s=i(15861),o=i(1413),l=i(30168),u=i(15671),d=i(43144),c=i(60136),h=i(29388),v=i(50165),p=i(77378),g=i(66385),_=i(69738),y=i(62582),m=i(73627),f=i(2760),w=i(40942),b=i(31278),O=i(98643),L=i(73428),P=i(34236),S=(i(87110),i(78880)),z=i(87833),C=i(50463),M=i(57952),k=i(3969),E=i(40438),A=i(35691),V=i(92694),D=i(92820),Z=i(24695),G=i(94867),T=i(6819),x=i(20561),R=i(52155),j=i(72577),N=v.s.getLogger("esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementController"),q=function(e){(0,c.Z)(i,e);var t=(0,h.Z)(i);function i(e){var n;return(0,u.Z)(this,i),(n=t.call(this,e))._unitNormalizer=new p.t,n._handles=new _.u,n._tempStartPosition=(0,f.n)(),n._tempEndPosition=(0,f.n)(),n._tempCornerPosition=(0,f.n)(),n}return(0,d.Z)(i,[{key:"initialize",value:function(){var e=this;this._handles.add((0,m.f)((function(){var t;return null===(t=e.view)||void 0===t?void 0:t.ready}),(function(){return e._initialize()}),{once:!0,sync:!0,initial:!0}))}},{key:"destroy",value:function(){this._handles=(0,v.G)(this._handles)}},{key:"_initialize",value:function(){var e=this,t=this.view.spatialReference,i=(0,L.O)(t),n=i===L.G?L.R:i;this._sphericalPCPF=n;var r=(0,O.A)(t,n);this._unitNormalizer.spatialReference=r?n:t,this._handles.add([(0,m.l)((function(){return{viewData:e.viewData,startPoint:e.analysis.startPoint}}),(function(t){var i=t.viewData,n=t.startPoint;i.elevationAlignedStartPoint=e._applyProjectionAndElevationAlignment(n)}),m.w),(0,m.l)((function(){return{viewData:e.viewData,endPoint:e.analysis.endPoint}}),(function(t){var i=t.viewData,n=t.endPoint;i.elevationAlignedEndPoint=e._applyProjectionAndElevationAlignment(n)}),m.w),(0,m.l)((function(){return{result:e._computedResult,viewData:e.viewData}}),(function(e){var t=e.result;e.viewData.result=t}),m.w)])}},{key:"_applyProjectionAndElevationAlignment",value:function(e){if((0,v.t)(e))return e;var t=(0,P.n)(e,this.view.spatialReference,this.view.elevationProvider);return(0,v.t)(t)?((0,P.a)(this.analysis,e.spatialReference,N),null):t}},{key:"_computedResult",get:function(){var e=this.viewData,t=e.elevationAlignedStartPoint,i=e.elevationAlignedEndPoint,n=e.measurementMode;if((0,v.t)(t)||(0,v.t)(i))return null;var r=this._euclideanDistances(t,i),a=this._geodesicDistance(t,i,r.horizontal.value),s=n===p.e.Geodesic||n===p.e.Auto&&r.horizontal.value>1e5?"geodesic":"euclidean";return{mode:s,distance:"euclidean"===s?r.direct:a,directDistance:r.direct,horizontalDistance:r.horizontal,verticalDistance:r.vertical,geodesicDistance:a}}},{key:"_euclideanDistances",value:function(e,t){var i=this,n=e.clone();n.z=t.z;var r=this._tempStartPosition,a=this._tempEndPosition,s=this._tempCornerPosition,o=this.view.spatialReference,l=this._sphericalPCPF,u=(0,O.A)(o,l)?l:o;(0,O.H)(e,r,u),(0,O.H)(t,a,u),(0,O.H)(n,s,u);var d=(0,f.x)(r,a),c=(0,f.x)(s,a),h=Math.abs(t.z-e.z),v=function(e){return i._unitNormalizer.normalizeDistance(e)},p=v(d),g=v(c),_=v(h);return{direct:(0,y.r)(p,"meters"),horizontal:(0,y.r)(g,"meters"),vertical:(0,y.r)(_,"meters")}}},{key:"_geodesicDistance",value:function(e,t,i){var n=e.spatialReference,r=new b.m({spatialReference:n});r.addPath([e,t]);var a=n.isGeographic&&(0,p.M)(n)?(0,p.y)([r],"meters")[0]:n.isWebMercator?(0,w.geodesicLength)(r,"meters"):null,s=(0,v.r)(a)?a:this._fallbackGeodesicDistance(e,t,i);return(0,y.r)(s,"meters")}},{key:"_fallbackGeodesicDistance",value:function(e,t,i){if((0,O.j)(e,Q)&&(0,O.j)(t,W)){var n={distance:0};return(0,p.z)(n,Q,W),n.distance}return i}}]),i}(v.y);(0,v.e)([(0,v.d)()],q.prototype,"view",void 0),(0,v.e)([(0,v.d)()],q.prototype,"analysis",void 0),(0,v.e)([(0,v.d)()],q.prototype,"viewData",void 0),(0,v.e)([(0,v.d)()],q.prototype,"_computedResult",null),q=(0,v.e)([(0,v.n)("esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementController")],q);var I,H,Q=(0,f.n)(),W=(0,f.n)();function B(e){var t=new V.a;(0,V.P)(t,e),t.vertex.uniforms.add(new V.p("width",(function(e){return e.width}))),t.attributes.add(G.O.POSITION,"vec3"),t.attributes.add(G.O.NORMAL,"vec3"),t.attributes.add(G.O.UV0,"vec2"),t.attributes.add(G.O.AUXPOS1,"float"),t.varyings.add("vtc","vec2"),t.varyings.add("vlength","float"),t.varyings.add("vradius","float"),t.vertex.code.add((0,V.n)(n||(n=(0,l.Z)(["void main(void) {\nvec3 bitangent = normal;\nvtc = uv0;\nvlength = auxpos1;\nvradius = 0.5 * width;\nvec4 pos = view * vec4(position + vradius * bitangent * uv0.y, 1.0);\ngl_Position = proj * pos;\n}"])))),t.fragment.uniforms.add([new V.p("outlineSize",(function(e){return e.outlineSize})),new V.J("outlineColor",(function(e){return e.outlineColor})),new V.p("stripeLength",(function(e){return e.stripeLength})),new V.J("stripeEvenColor",(function(e){return e.stripeEvenColor})),new V.J("stripeOddColor",(function(e){return e.stripeOddColor}))]);var i=1/Math.sqrt(2);return t.fragment.code.add((0,V.n)(r||(r=(0,l.Z)(["\n    const float INV_SQRT2 = ",";\n\n    vec4 arrowColor(vec2 tc, float len) {\n      float d = INV_SQRT2 * (tc.x - abs(tc.y));\n      d = min(d, INV_SQRT2 * (len - tc.x - abs(tc.y)));\n      d = min(d, 1.0 - abs(tc.y));\n\n      if (d < 0.0) {\n        return vec4(0.0);\n      } else if (d < outlineSize) {\n        return outlineColor;\n      } else {\n        return fract(0.5 / stripeLength * tc.x * vradius) >= 0.5 ? stripeOddColor : stripeEvenColor;\n      }\n    }\n\n    void main(void) {\n      vec2 ntc = vec2(vtc.x / vradius, vtc.y);\n      vec4 color = arrowColor(ntc, vlength / vradius);\n      if (color.a == 0.0) {\n        discard;\n      }\n      gl_FragColor = color;\n    }\n  "])),V.n.float(i))),t}!function(e){e[e.None=0]="None",e[e.Direct=1]="Direct",e[e.Triangle=2]="Triangle",e[e.ProjectedGeodesic=3]="ProjectedGeodesic"}(I||(I={})),function(e){e[e.Auto=0]="Auto",e[e.AboveSegment=1]="AboveSegment",e[e.BelowSegment=2]="BelowSegment"}(H||(H={}));var F=Object.freeze(Object.defineProperty({__proto__:null,build:B},Symbol.toStringTag,{value:"Module"})),U=function(e){(0,c.Z)(i,e);var t=(0,h.Z)(i);function i(e,n,r){return(0,u.Z)(this,i),t.call(this,e,n,r)}return(0,d.Z)(i,[{key:"initializeProgram",value:function(e){var t=i.shader.get().build(this.configuration);return new V.h(e.rctx,t,V.E)}},{key:"_setPipelineState",value:function(e){var t=e===Z.O.NONE,i=this.configuration;return(0,Z.W)({blending:i.transparent?t?Z.d:(0,Z.E)(e):null,polygonOffset:this.configuration.polygonOffsetEnabled&&{factor:0,units:-4},depthTest:{func:T.I.LESS},depthWrite:Z.b,colorWrite:Z.c})}},{key:"initializePipeline",value:function(){return this._setPipelineState(this.configuration.transparencyPassType)}},{key:"primitiveType",get:function(){return T.E.TRIANGLE_STRIP}}]),i}(V.g);U.shader=new V.t(F,(function(){return i.e(3498).then(i.bind(i,83498))}));var J=function(e){(0,c.Z)(i,e);var t=(0,h.Z)(i);function i(){var e;return(0,u.Z)(this,i),(e=t.apply(this,arguments)).polygonOffsetEnabled=!1,e.transparent=!1,e.transparencyPassType=Z.O.NONE,e}return(0,d.Z)(i)}(V.a2);(0,v.e)([(0,V.j)()],J.prototype,"polygonOffsetEnabled",void 0),(0,v.e)([(0,V.j)()],J.prototype,"transparent",void 0),(0,v.e)([(0,V.j)({count:Z.O.COUNT})],J.prototype,"transparencyPassType",void 0);var X,K=function(e){(0,c.Z)(i,e);var t=(0,h.Z)(i);function i(e){var n;return(0,u.Z)(this,i),(n=t.call(this,e,new $)).techniqueConfig=new J,n}return(0,d.Z)(i,[{key:"getConfiguration",value:function(e,t){var i;return this.techniqueConfig.polygonOffsetEnabled=this.parameters.polygonOffset,this.techniqueConfig.transparent=this.parameters.stripeEvenColor[3]<1||this.parameters.stripeOddColor[3]<1||this.parameters.outlineColor[3]<1,this.techniqueConfig.transparencyPassType=null!==(i=null===t||void 0===t?void 0:t.transparencyPassType)&&void 0!==i?i:Z.O.NONE,this.techniqueConfig}},{key:"dispose",value:function(){}},{key:"intersect",value:function(){}},{key:"requiresSlot",value:function(e){return e===V.C.OPAQUE_MATERIAL}},{key:"createGLMaterial",value:function(e){return e.output===V.V.Color?new Y(e):null}},{key:"createBufferWriter",value:function(){return new se}}]),i}(V.a3),Y=function(e){(0,c.Z)(i,e);var t=(0,h.Z)(i);function i(){return(0,u.Z)(this,i),t.apply(this,arguments)}return(0,d.Z)(i,[{key:"beginSlot",value:function(e){return this.ensureTechnique(U,e)}}]),i}(V.ah),$=function(e){(0,c.Z)(i,e);var t=(0,h.Z)(i);function i(){var e;return(0,u.Z)(this,i),(e=t.apply(this,arguments)).width=32,e.outlineSize=.2,e.outlineColor=[1,.5,0,1],e.stripeLength=1,e.stripeEvenColor=[1,1,1,1],e.stripeOddColor=[1,.5,0,1],e.polygonOffset=!1,e}return(0,d.Z)(i)}(V.ai),ee=(0,D.T)().vec3f(G.O.POSITION).vec3f(G.O.NORMAL).vec2f(G.O.UV0).f32(G.O.AUXPOS1),te=(0,f.n)(),ie=(0,f.n)(),ne=(0,f.n)(),re=(0,f.n)(),ae=(0,f.n)(),se=function(){function e(){(0,u.Z)(this,e),this.vertexBufferLayout=ee}return(0,d.Z)(e,[{key:"allocate",value:function(e){return this.vertexBufferLayout.createBuffer(e)}},{key:"elementCount",value:function(e){return 2*(e.indices.get(G.O.POSITION).length/2+1)}},{key:"write",value:function(e,t,i,n){var r=t.vertexAttributes.get(G.O.POSITION).data,a=t.vertexAttributes.get(G.O.NORMAL).data,s=r.length/3,o=t&&t.indices&&t.indices.get(G.O.POSITION);o&&o.length!==2*(s-1)&&console.warn("MeasurementArrowMaterial does not support indices");for(var l=te,u=ie,d=ne,c=re,h=ae,v=e.transformation,p=e.invTranspTransformation,g=i.position,_=i.normal,y=i.uv0,m=0,w=0;w<s;++w){var b=3*w;if((0,f.f)(l,r[b],r[b+1],r[b+2]),w<s-1){var O=3*(w+1);(0,f.f)(u,r[O],r[O+1],r[O+2]),(0,f.f)(h,a[O],a[O+1],a[O+2]),(0,f.z)(h,h),(0,f.e)(d,u,l),(0,f.z)(d,d),(0,f._)(c,h,d),(0,f.z)(c,c)}var L=(0,f.x)(l,u);v&&p&&((0,f.L)(l,l,v),(0,f.L)(u,u,v),(0,f.L)(c,c,p));var P=n+2*w,S=P+1;g.setVec(P,l),g.setVec(S,l),_.setVec(P,c),_.setVec(S,c),y.set(P,0,m),y.set(P,1,-1),y.set(S,0,m),y.set(S,1,1),w<s-1&&(m+=L)}for(var z=i.auxpos1,C=0;C<2*s;++C)z.set(n+C,m)}}]),e}(),oe=function(e){(0,c.Z)(i,e);var t=(0,h.Z)(i);function i(e){var n;return(0,u.Z)(this,i),(n=t.call(this,e))._parameters=le,n._handles=null,n._origin=(0,f.n)(),n._originTransform=(0,M.e)(),n._arrowCenter=(0,f.n)(),n._renderOccluded=V.a9.OccludeAndTransparent,n._geometry=null,n._stripeLength=1,n._stripesEnabled=!0,n._opacity=1,n.applyProps(e),n}return(0,d.Z)(i,[{key:"renderOccluded",get:function(){return this._renderOccluded},set:function(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._arrowMaterial&&this._arrowMaterial.setParameters({renderOccluded:e}))}},{key:"geometry",get:function(){return this._geometry},set:function(e){this._geometry=e,this._geometryChanged()}},{key:"stripeLength",get:function(){return this._stripeLength},set:function(e){this._stripeLength=e,this.attached&&this._arrowMaterial.setParameters({stripeLength:this._stripeLength})}},{key:"stripesEnabled",get:function(){return this._stripesEnabled},set:function(e){if(this._stripesEnabled=e,this.attached){var t=this.opacity,i=this._parameters,n=i.arrowStripeEvenColor,r=i.arrowStripeOddColor,a=(0,f.al)(ue,this._stripesEnabled?n:r,t);this._arrowMaterial.setParameters({stripeEvenColor:a})}}},{key:"opacity",get:function(){return this._opacity},set:function(e){e!==this._opacity&&(this._opacity=e,this._updateArrowOpacity())}},{key:"createExternalResources",value:function(){var e=this,t=this._parameters,i=t.arrowStripeEvenColor,n=t.arrowStripeOddColor,r=t.arrowOutlineColor,a=this._stripesEnabled?i:n;this._arrowMaterial=new K({outlineColor:r,stripeEvenColor:a,stripeOddColor:n,renderOccluded:this.renderOccluded,polygonOffset:!0}),this._handles=new _.u,this._handles.add((0,m.l)((function(){return e.view.state.camera}),(function(){e._viewChanged()})))}},{key:"destroyExternalResources",value:function(){this._arrowMaterial=null,this._handles.destroy(),this._handles=null}},{key:"forEachExternalMaterial",value:function(e){e(this._arrowMaterial)}},{key:"createGeometries",value:function(e){if(!((0,v.t)(this._geometry)||(0,v.t)(this._geometry.startRenderSpace)||(0,v.t)(this._geometry.endRenderSpace))){var t=this._createArrowGeometry(this._geometry.startRenderSpace,this._geometry.endRenderSpace,this._origin,this._geometry);e.addGeometry(t,this._arrowMaterial,this._originTransform),this._viewChanged()}}},{key:"_createArrowGeometry",value:function(e,t,i,n){var r=this.view.renderCoordsHelper,a=[],s=[],o=function(e,t){var n=E.c.get();(0,f.e)(n,e,i),a.push(n),s.push(t)};if("euclidean"===n.type){n.eval(.5,this._arrowCenter);var l=E.c.get();r.worldUpAtPosition(this._arrowCenter,l),o(e,l),o(t,l)}else{n.eval(.5,this._arrowCenter);for(var u=this._parameters.arrowSubdivisions+1&-2,d=0;d<u;++d){var c=d/(u-1),h=E.c.get(),v=E.c.get();n.eval(c,h),r.worldUpAtPosition(h,v),o(h,v)}}return A.T.createPolylineGeometry(a,s)}},{key:"_geometryChanged",value:function(){this.recreateGeometry()}},{key:"_viewChanged",value:function(){if(this.view.ready&&this.attached&&(0,v.r)(this._geometry)){var e=this.view.state.camera.computeScreenPixelSizeAt(this._arrowCenter);this._arrowMaterial.setParameters({width:this._parameters.arrowWidth*e})}}},{key:"_updateArrowOpacity",value:function(){var e=this.opacity,t=this._parameters,i=t.arrowStripeEvenColor,n=t.arrowStripeOddColor,r=t.arrowOutlineColor,a=(0,f.al)(ue,this._stripesEnabled?i:n,e),s=(0,f.al)(de,r,e),o=(0,f.al)(ce,n,e);this._arrowMaterial.setParameters({stripeEvenColor:a,outlineColor:s,stripeOddColor:o})}}]),i}(g.n),le={arrowWidth:16,arrowOutlineColor:[1,.5,0,1],arrowOutlineWidth:.2,arrowStripeEvenColor:[1,1,1,1],arrowStripeOddColor:[1,.5,0,1],arrowStripeLength:16,arrowSubdivisions:128},ue=(0,k.n)(),de=(0,k.n)(),ce=(0,k.n)();!function(e){e[e.Pending=0]="Pending",e[e.Ready=1]="Ready",e[e.Destroyed=2]="Destroyed"}(X||(X={}));var he=function(e){(0,c.Z)(i,e);var t=(0,h.Z)(i);function i(e){var n;return(0,u.Z)(this,i),(n=t.call(this,e))._params=(0,o.Z)({},ge),n._handles=new _.u,n._segmentVisualElement=null,n._triangleVisualElement=null,n._rightAngleQuad=null,n._projectedGeodesicLine=null,n._geodesicStartHint=null,n._geodesicEndHint=null,n._segmentLabel=null,n._verticalLabel=null,n._horizontalLabel=null,n._startPosition=(0,f.n)(),n._endPosition=(0,f.n)(),n._cornerPosition=(0,f.n)(),n._startPositionAtSeaLevel=(0,f.n)(),n._endPositionAtSeaLevel=(0,f.n)(),n._triangleOrientationOverride=null,n.messages=null,n.loadingMessages=!0,n.visualElementOrientation=H.Auto,n.triangleCollapseRatioThreshold=.03,n}return(0,d.Z)(i,[{key:"visible",get:function(){return this.analysisView.visible}},{key:"viewMode",get:function(){var e=this.analysisView,t=e.elevationAlignedStartPoint,i=e.elevationAlignedEndPoint;if((0,v.t)(t)||(0,v.t)(i)||t.equals(i))return I.None;var n=this.analysisView.result;if((0,v.t)(n))return I.Direct;if("geodesic"===n.mode)return this._requiresGeodesicGuideAt(this._startPosition)||this._requiresGeodesicGuideAt(this._endPosition)?I.ProjectedGeodesic:I.Direct;var r=n.verticalDistance,a=n.horizontalDistance,s=r.value,o=a.value;return Math.min(s/o,o/s)<this.triangleCollapseRatioThreshold?I.Direct:I.Triangle}},{key:"actualVisualizedMeasurement",get:function(){if((0,v.t)(this.analysisView.result))switch(this.analysisView.measurementMode){case p.e.Auto:case p.e.Euclidean:default:return"euclidean";case p.e.Geodesic:return"geodesic"}return this.analysisView.result.mode}},{key:"allowVisualElementsOrientationChange",get:function(){return(0,v.t)(this._triangleOrientationOverride)},set:function(e){(0,v.t)(this._triangleOrientationOverride)!==e&&((0,v.t)(this._triangleOrientationOverride)?this._triangleOrientationOverride=this._actualVisualElementsOrientation:this._triangleOrientationOverride=null)}},{key:"labels",get:function(){var e="geodesic"===this.actualVisualizedMeasurement;return{direct:this._segmentLabel,horizontal:e?this._segmentLabel:this._horizontalLabel,vertical:this._verticalLabel}}},{key:"initialize",value:function(){var e=this,t=this._params,i={attached:!0,view:this.view};this._segmentVisualElement=new oe((0,o.Z)((0,o.Z)({},i),{},{geometry:null,renderOccluded:V.a9.OccludeAndTransparent})),this._triangleVisualElement=new g.C((0,o.Z)((0,o.Z)({},i),{},{width:t.triangleLineWidth,color:t.triangleColor,renderOccluded:V.a9.OccludeAndTransparent})),this._rightAngleQuad=new x.j((0,o.Z)((0,o.Z)({},i),{},{color:pe,renderOccluded:V.a9.OccludeAndTransparent}));var n=(0,o.Z)((0,o.Z)({},i),{},{polygonOffset:!0,renderOccluded:V.a9.OccludeAndTransparent});this._projectedGeodesicLine=new g.C((0,o.Z)((0,o.Z)({},n),{},{width:t.geodesicProjectionLineWidth,color:t.geodesicProjectionLineColor,stipplePattern:(0,A.aQ)(t.guideStippleLengthPixels)})),this._geodesicStartHint=new g.C((0,o.Z)((0,o.Z)({},n),{},{width:t.guideLineWidth,color:t.geodesicProjectionLineColor,stipplePattern:(0,A.aQ)(t.guideStippleLengthPixels)})),this._geodesicEndHint=new g.C((0,o.Z)((0,o.Z)({},n),{},{width:t.guideLineWidth,color:t.geodesicProjectionLineColor,stipplePattern:(0,A.aQ)(t.guideStippleLengthPixels)})),this._segmentLabel=new y.v((0,o.Z)((0,o.Z)({},i),{},{fontSize:t.direcLabelFontSize})),this._verticalLabel=new y.v((0,o.Z)((0,o.Z)({},i),{},{fontSize:t.verticalLabelFontSize})),this._horizontalLabel=new y.v((0,o.Z)((0,o.Z)({},i),{},{fontSize:t.horizontalLabelFontSize})),this._handles.add([(0,m.l)((function(){var t=e.analysisView,i=t.elevationAlignedStartPoint,n=t.elevationAlignedEndPoint,r=e.view;return{view:r,camera:r.state.camera,viewMode:e.viewMode,elevationAlignedStartPoint:i,elevationAlignedEndPoint:n,orientation:e._actualVisualElementsOrientation,visualizedMeasurement:e.actualVisualizedMeasurement,stripeLength:e._measurementArrowStripeLength}}),(function(t){return e._updateGeometryAndViewMode(t)}),m.w),(0,m.l)((function(){return{visible:e.visible,viewMode:e.viewMode}}),(function(t){return e._updateVisualElementVisibility(t)}),m.w),(0,m.l)((function(){return{text:e._labelsText,visualizedMeasurement:e.actualVisualizedMeasurement}}),(function(t){return e._updateLabelText(t)}),m.w),(0,m.l)((function(){return{visible:e.visible,viewMode:e.viewMode}}),(function(t){return e._updateLabelVisibility(t)}),m.w),(0,m.l)((function(){return e._measurementArrowStripeLength}),(function(t){return e._updateSegmentStripeLength(t)}),m.w),(0,R.s)((0,s.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e._updateMessageBundle());case 1:case"end":return t.stop()}}),t)}))))]),this._updateMessageBundle()}},{key:"destroy",value:function(){this._handles=(0,v.G)(this._handles),this._segmentVisualElement=(0,v.G)(this._segmentVisualElement),this._triangleVisualElement=(0,v.G)(this._triangleVisualElement),this._rightAngleQuad=(0,v.G)(this._rightAngleQuad),this._projectedGeodesicLine=(0,v.G)(this._projectedGeodesicLine),this._geodesicStartHint=(0,v.G)(this._geodesicStartHint),this._geodesicEndHint=(0,v.G)(this._geodesicEndHint),this._segmentLabel=(0,v.G)(this._segmentLabel),this._verticalLabel=(0,v.G)(this._verticalLabel),this._horizontalLabel=(0,v.G)(this._horizontalLabel),this.set("view",null)}},{key:"_updateVisualElementVisibility",value:function(e){var t=e.visible,i=e.viewMode;if(this._segmentVisualElement.visible=!1,this._triangleVisualElement.visible=!1,this._rightAngleQuad.visible=!1,this._projectedGeodesicLine.visible=!1,this._geodesicStartHint.visible=!1,this._geodesicEndHint.visible=!1,t)switch(i){case I.None:break;case I.Direct:this._segmentVisualElement.visible=!0;break;case I.Triangle:this._segmentVisualElement.visible=!0,this._triangleVisualElement.visible=!0,this._rightAngleQuad.visible=!0;break;case I.ProjectedGeodesic:this._segmentVisualElement.visible=!0,this._projectedGeodesicLine.visible=!0,this._geodesicStartHint.visible=!0,this._geodesicEndHint.visible=!0}}},{key:"_updateGeometryAndViewMode",value:function(e){var t=e.view,i=e.camera,n=e.viewMode,r=e.elevationAlignedStartPoint,a=e.elevationAlignedEndPoint,s=e.orientation,o=e.visualizedMeasurement,l=e.stripeLength,u=t.renderCoordsHelper;if(!((0,v.t)(u)||(0,v.t)(r)||(0,v.t)(a)||r.equals(a))){var d=this._startPosition,c=this._endPosition;u.toRenderCoords(r,d),u.toRenderCoords(a,c);var h=s===H.AboveSegment?1:-1,p=h*(u.getAltitude(c)-u.getAltitude(d));p<0&&(d=this._endPosition,c=this._startPosition);var g="geodesic"===o?new y.m(this._startPosition,this._endPosition,u.spatialReference):new y.l(this._startPosition,this._endPosition);switch(this._segmentVisualElement.geometry=g,this._updateSegmentStripeLength(l),n){case I.Direct:this._updateSegment(g,s);break;case I.Triangle:this._updateSegmentAndTriangle({view:t,camera:i,segment:g,orientation:s,startPosition:d,endPosition:c,deltaSign:h,altitudeDelta:p});break;case I.ProjectedGeodesic:this._updateSegmentAndProjection({view:t,orientation:s,startPosition:d,endPosition:c})}}}},{key:"_updateSegment",value:function(e,t){this._segmentLabel.anchor=t===H.AboveSegment?"top":"bottom",this._segmentLabel.geometry={type:"segment",segment:e,sampleLocation:"center"}}},{key:"_updateSegmentAndTriangle",value:function(e){var t=e.view.renderCoordsHelper,i=e.camera,n=e.segment,r=e.orientation,a=e.startPosition,s=e.endPosition,o=e.deltaSign,l=e.altitudeDelta,u=this._cornerPosition;t.worldUpAtPosition(a,u),(0,f.q)(u,u,o*Math.abs(l)),(0,f.u)(u,u,a),this._triangleVisualElement.geometry=[[[a[0],a[1],a[2]],[u[0],u[1],u[2]],[s[0],s[1],s[2]]]],this._rightAngleQuad.geometry={previous:a,center:u,next:s};var d=new y.l(a,u),c=new y.l(u,s),h=ve(a,s,u,r,i);this._segmentLabel.anchor=h.segment,this._segmentLabel.geometry={type:"segment",segment:n,sampleLocation:"center"},this._verticalLabel.geometry={type:"segment",segment:d,sampleLocation:"center"},this._verticalLabel.anchor=h.vertical,this._horizontalLabel.geometry={type:"segment",segment:c,sampleLocation:"center"},this._horizontalLabel.anchor=h.horizontal}},{key:"_updateSegmentAndProjection",value:function(e){var t=e.view.renderCoordsHelper,i=e.orientation,n=e.startPosition,r=e.endPosition;t.setAltitude(this._startPositionAtSeaLevel,0,n),t.setAltitude(this._endPositionAtSeaLevel,0,r);var a=new y.m(this._startPositionAtSeaLevel,this._endPositionAtSeaLevel,t.spatialReference);this._projectedGeodesicLine.setGeometryFromSegment(a),this._geodesicStartHint.setGeometryFromSegment(new y.l(this._startPositionAtSeaLevel,n)),this._geodesicEndHint.setGeometryFromSegment(new y.l(this._endPositionAtSeaLevel,r)),this._segmentLabel.geometry={type:"segment",segment:a,sampleLocation:"center"},this._segmentLabel.anchor=i===H.AboveSegment?"top":"bottom"}},{key:"_updateLabelText",value:function(e){var t=e.text,i=e.visualizedMeasurement;(0,v.r)(t)?(this._segmentLabel.text="euclidean"===i?t.euclideanDistance:t.geodesicDistance,this._horizontalLabel.text=t.horizontalDistance,this._verticalLabel.text=t.verticalDistance):(this._segmentLabel.text=null,this._horizontalLabel.text=null,this._verticalLabel.text=null),this.notifyChange("labels")}},{key:"_updateLabelVisibility",value:function(e){var t=e.visible,i=e.viewMode,n=this._segmentLabel,r=this._horizontalLabel,a=this._verticalLabel;if(n.visible=!1,r.visible=!1,a.visible=!1,t)switch(i){case I.Direct:n.visible=!0;break;case I.Triangle:n.visible=!0,r.visible=!0,a.visible=!0;break;case I.ProjectedGeodesic:n.visible=!0}}},{key:"_labelsText",get:function(){if(this.destroyed)return null;var e=this.messages,t=this.analysisView.result;if((0,v.t)(t)||(0,v.t)(e))return null;var i=t.directDistance,n=t.horizontalDistance,r=t.verticalDistance,a=t.geodesicDistance,s=this.analysisView.unit,l=function(e){return(0,o.Z)({euclideanDistance:"",geodesicDistance:"",horizontalDistance:"",verticalDistance:""},e)};switch(s){case"metric":return l({euclideanDistance:i&&(0,p.b)(e,i),geodesicDistance:a&&(0,p.b)(e,a),horizontalDistance:n&&(0,p.b)(e,n),verticalDistance:r&&(0,p.w)(e,r)});case"imperial":return l({euclideanDistance:i&&(0,p.a)(e,i),geodesicDistance:a&&(0,p.a)(e,a),horizontalDistance:n&&(0,p.a)(e,n),verticalDistance:r&&(0,p.j)(e,r)});default:return l({euclideanDistance:i&&(0,p.g)(e,i,s),geodesicDistance:a&&(0,p.g)(e,a,s),horizontalDistance:n&&(0,p.g)(e,n,s),verticalDistance:r&&(0,p.g)(e,r,s)})}}},{key:"_updateSegmentStripeLength",value:function(e){var t=this._segmentVisualElement;(0,v.r)(e)?(t.stripeLength=e,t.stripesEnabled=!0):t.stripesEnabled=!1}},{key:"_actualVisualElementsOrientation",get:function(){if((0,v.r)(this._triangleOrientationOverride))return this._triangleOrientationOverride;var e=this.visualElementOrientation;return e===H.Auto?this.view.state.camera.aboveGround?H.AboveSegment:H.BelowSegment:e}},{key:"_requiresGeodesicGuideAt",value:function(e){var t=this.view;if(null===t||void 0===t||!t.state)return!1;var i=t.state.camera,n=t.renderCoordsHelper,r=i.computeScreenPixelSizeAt(e);return n.getAltitude(e)/r>=10}},{key:"_measurementArrowStripeLength",get:function(){var e=this.analysisView,t=e.result,i=e.unit;if((0,v.t)(t))return null;var n=null,r=t.directDistance;switch(i){case"metric":n=r&&(0,y.b)(r,"meters");break;case"imperial":n=r&&(0,y.b)(r,(0,L.K)(r.value,r.unit));break;default:n=r&&(0,y.b)(r,i)}return(0,v.t)(n)?null:(0,f.ak)(n.value/30)*(0,L.N)(1,n.unit,"meters")}},{key:"_updateMessageBundle",value:function(){var e=this;this.loadingMessages=!0,(0,j.h)("esri/core/t9n/Units").then((function(t){e.messages=t})).finally((function(){e.loadingMessages=!1}))}},{key:"testData",get:function(){var e;return{labels:this.labels,stripeLength:null===(e=this._segmentVisualElement)||void 0===e?void 0:e.stripeLength}}}]),i}(v.y);function ve(e,t,i,n,r){var a=ye,s=me;r.projectToRenderScreen(i,a),r.projectToRenderScreen(t,s);var o={segment:"bottom",horizontal:"top",vertical:a[0]<s[0]?"left":"right"},l=fe,u=we;if((0,p.i)(e,i,l,r),(0,p.i)(e,t,u,r),(0,z.j)(l,u)>=_e){var d=Math.sign(l[1])===Math.sign(u[1]);o.segment=d?(0,y.I)(o.vertical):o.vertical}else{var c=be;(0,p.i)(i,t,c,r),(0,z.j)(c,u)>=_e&&(o.segment=Math.sign(c[0])===Math.sign(u[0])?(0,y.I)(o.horizontal):o.horizontal)}if(n===H.BelowSegment){var h=function(e){return"top"===e?"bottom":"top"};o.segment=h(o.segment),o.horizontal=h(o.horizontal),o.vertical=h(o.vertical)}return o}(0,v.e)([(0,v.d)()],he.prototype,"_triangleOrientationOverride",void 0),(0,v.e)([(0,v.d)()],he.prototype,"messages",void 0),(0,v.e)([(0,v.d)()],he.prototype,"view",void 0),(0,v.e)([(0,v.d)()],he.prototype,"analysis",void 0),(0,v.e)([(0,v.d)()],he.prototype,"analysisView",void 0),(0,v.e)([(0,v.d)()],he.prototype,"loadingMessages",void 0),(0,v.e)([(0,v.d)()],he.prototype,"visible",null),(0,v.e)([(0,v.d)()],he.prototype,"viewMode",null),(0,v.e)([(0,v.d)()],he.prototype,"actualVisualizedMeasurement",null),(0,v.e)([(0,v.d)()],he.prototype,"visualElementOrientation",void 0),(0,v.e)([(0,v.d)()],he.prototype,"triangleCollapseRatioThreshold",void 0),(0,v.e)([(0,v.d)()],he.prototype,"allowVisualElementsOrientationChange",null),(0,v.e)([(0,v.d)()],he.prototype,"labels",null),(0,v.e)([(0,v.d)()],he.prototype,"_labelsText",null),(0,v.e)([(0,v.d)()],he.prototype,"_actualVisualElementsOrientation",null),(0,v.e)([(0,v.d)()],he.prototype,"_measurementArrowStripeLength",null),he=(0,v.e)([(0,v.n)("esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementVisualization")],he);var pe=(0,C.r)(1,.5,0,.75),ge={laserLineGlowColor:[1,.5,0],laserLineGlowWidth:8,laserLineGlowFalloff:8,laserLineInnerColor:[1,1,1],laserLineInnerWidth:.75,laserLineGlobalAlpha:.75,laserLineEnabled:!0,handleColor:[1,.5,0],handleOpacity:.5,handleRadius:5,triangleColor:pe,triangleLineWidth:3,triangleCornerSize:32,triangleSubdivisions:128,arrowWidth:16,arrowOutlineColor:[1,.5,0,1],arrowOutlineWidth:.2,arrowStripeEvenColor:[1,1,1,1],arrowStripeOddColor:[1,.5,0,1],arrowStripeLength:16,arrowSubdivisions:128,geodesicProjectionLineWidth:2,geodesicProjectionLineColor:pe,guideLineWidth:2,guideLineColor:pe,guideStippleLengthPixels:6,labelDistance:25,direcLabelFontSize:16,horizontalLabelFontSize:12,verticalLabelFontSize:12},_e=Math.cos((0,f.M)(12)),ye=(0,S.x)(),me=(0,S.x)(),fe=(0,S.s)(),we=(0,S.s)(),be=(0,S.s)(),Oe=function(e){(0,c.Z)(i,e);var t=(0,h.Z)(i);function i(e){var n;return(0,u.Z)(this,i),(n=t.call(this,e)).type="direct-line-measurement-view-3d",n.analysis=null,n.result=null,n.measurementMode=p.e.Auto,n.elevationAlignedStartPoint=null,n.elevationAlignedEndPoint=null,n}return(0,d.Z)(i,[{key:"initialize",value:function(){var e=this.view,t=this.analysis;this._analysisVisualization=new he({view:e,analysis:t,analysisView:this}),this._analysisController=new q({view:e,analysis:t,viewData:this})}},{key:"destroy",value:function(){this._analysisController=(0,v.G)(this._analysisController),this._analysisVisualization=(0,v.G)(this._analysisVisualization)}},{key:"updating",get:function(){var e;return!(null===(e=this._analysisVisualization)||void 0===e||!e.loadingMessages)}},{key:"viewMode",get:function(){return this._analysisVisualization.viewMode}},{key:"actualVisualizedMeasurement",get:function(){return this._analysisVisualization.actualVisualizedMeasurement}},{key:"visualElementOrientation",get:function(){return this._analysisVisualization.visualElementOrientation},set:function(e){this._analysisVisualization.visualElementOrientation=e}},{key:"allowVisualElementsOrientationChange",get:function(){return this._analysisVisualization.allowVisualElementsOrientationChange},set:function(e){this._analysisVisualization.allowVisualElementsOrientationChange=e}},{key:"triangleCollapseRatioThreshold",get:function(){return this._analysisVisualization.triangleCollapseRatioThreshold},set:function(e){this._analysisVisualization.triangleCollapseRatioThreshold=e}},{key:"directLabelText",get:function(){return this._analysisVisualization.labels.direct.text}},{key:"horizontalLabelText",get:function(){return this._analysisVisualization.labels.horizontal.text}},{key:"verticalLabelText",get:function(){return this._analysisVisualization.labels.vertical.text}},{key:"unit",get:function(){return(0,v.af)(this.analysis.unit,this._defaultUnit)}},{key:"testData",get:function(){var e;return this.destroyed?{labels:null,stripeLength:null,visualization:null,controller:null}:(0,o.Z)((0,o.Z)({},null===(e=this._analysisVisualization)||void 0===e?void 0:e.testData),{},{visualization:this._analysisVisualization,controller:this._analysisController})}}]),i}((0,g.a)(v.y));(0,v.e)([(0,v.d)()],Oe.prototype,"updating",null),(0,v.e)([(0,v.d)({readOnly:!0})],Oe.prototype,"type",void 0),(0,v.e)([(0,v.d)({constructOnly:!0,nonNullable:!0})],Oe.prototype,"analysis",void 0),(0,v.e)([(0,v.d)()],Oe.prototype,"result",void 0),(0,v.e)([(0,v.d)()],Oe.prototype,"measurementMode",void 0),(0,v.e)([(0,v.d)()],Oe.prototype,"elevationAlignedStartPoint",void 0),(0,v.e)([(0,v.d)()],Oe.prototype,"elevationAlignedEndPoint",void 0),(0,v.e)([(0,v.d)({readOnly:!0})],Oe.prototype,"viewMode",null),(0,v.e)([(0,v.d)({readOnly:!0})],Oe.prototype,"actualVisualizedMeasurement",null),(0,v.e)([(0,v.d)()],Oe.prototype,"visualElementOrientation",null),(0,v.e)([(0,v.d)()],Oe.prototype,"allowVisualElementsOrientationChange",null),(0,v.e)([(0,v.d)()],Oe.prototype,"triangleCollapseRatioThreshold",null),(0,v.e)([(0,v.d)({readOnly:!0})],Oe.prototype,"directLabelText",null),(0,v.e)([(0,v.d)({readOnly:!0})],Oe.prototype,"horizontalLabelText",null),(0,v.e)([(0,v.d)({readOnly:!0})],Oe.prototype,"verticalLabelText",null),(0,v.e)([(0,v.d)()],Oe.prototype,"_analysisVisualization",void 0),(0,v.e)([(0,v.d)()],Oe.prototype,"_analysisController",void 0),(0,v.e)([(0,v.d)()],Oe.prototype,"unit",null),(0,v.e)([(0,v.d)(p.r)],Oe.prototype,"_defaultUnit",void 0);var Le=Oe=(0,v.e)([(0,v.n)("esri.views.3d.analysis.DirectLineMeasurementAnalysisView3D")],Oe),Pe=Object.freeze({__proto__:null,default:Le})},20561:function(e,t,i){i.d(t,{j:function(){return w}});var n=i(93433),r=i(15671),a=i(43144),s=i(60136),o=i(29388),l=i(69738),u=i(50165),d=i(73627),c=i(61340),h=i(57952),v=i(2760),p=i(50463),g=i(40438),_=i(66385),y=i(92694),m=i(35691),f=i(94867),w=function(e){(0,s.Z)(i,e);var t=(0,o.Z)(i);function i(e){var n;return(0,r.Z)(this,i),(n=t.call(this,e))._handles=new l.u,n._quadMaterial=null,n._outlineMaterial=null,n._maxSize=0,n._position=(0,v.n)(),n._up=(0,v.n)(),n._right=(0,v.n)(),n._renderOccluded=y.a9.OccludeAndTransparent,n._color=(0,p.r)(1,0,0,1),n._outlineColor=(0,p.r)(0,0,0,1),n._outlineSize=0,n._size=32,n._outlineRenderOccluded=y.a9.Opaque,n.applyProps(e),n}return(0,a.Z)(i,[{key:"renderOccluded",get:function(){return this._renderOccluded},set:function(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateQuadMaterial())}},{key:"color",get:function(){return this._color},set:function(e){(0,v.B)(this._color,e),this._updateQuadMaterial()}},{key:"outlineColor",get:function(){return this._outlineColor},set:function(e){(0,v.B)(this._outlineColor,e),this._updateOutlineMaterial()}},{key:"outlineSize",get:function(){return this._outlineSize},set:function(e){var t=0===this._outlineSize!=(0===e);this._outlineSize=e,t?this.recreateGeometry():this._updateOutlineMaterial()}},{key:"size",get:function(){return this._size},set:function(e){e!==this._size&&(this._size=e,this._updateTransform())}},{key:"outlineRenderOccluded",get:function(){return this._outlineRenderOccluded},set:function(e){this._outlineRenderOccluded=e,this._updateOutlineMaterial()}},{key:"geometry",set:function(e){var t=e.previous,i=e.center,n=e.next;this._maxSize=Math.min((0,v.x)(i,t),(0,v.x)(i,n))/3,(0,v.z)(this._up,(0,v.e)(this._up,t,i)),(0,v.z)(this._right,(0,v.e)(this._right,n,i)),(0,v.a)(this._position,i),this.recreateGeometry()}},{key:"createExternalResources",value:function(){var e=this;this._quadMaterial=new m.aZ(this.quadMaterialParameters),this._outlineMaterial=new m.aS(this.outlineMaterialParameters),this._handles.add((0,d.l)((function(){return e.view.state.camera}),(function(){return e._updateTransform()})))}},{key:"destroyExternalResources",value:function(){this._quadMaterial=null,this._outlineMaterial=null,this._handles.removeAll()}},{key:"forEachExternalMaterial",value:function(e){e(this._quadMaterial),e(this._outlineMaterial)}},{key:"createGeometries",value:function(e){this._createQuadGeometry(e),this._createOutlineGeometry(e),this._updateTransform(e)}},{key:"_createQuadGeometry",value:function(e){var t=this._quadGeometryData(this._up,this._right);e.addGeometry(t,this._quadMaterial)}},{key:"_createOutlineGeometry",value:function(e){if(0!==this._outlineSize){var t=(0,v.u)(g.c.get(),this._up,this._right),i=m.T.createPolylineGeometry([this._up,t,this._right]);e.addGeometry(i,this._outlineMaterial)}}},{key:"_updateTransform",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.object,t=this.view.state.camera,i=this._size*t.computeScreenPixelSizeAt(this._position),n=Math.min(this._maxSize,i);(0,c.x)(b,this._position),(0,c.i)(b,b,[n,n,n]),(0,u.r)(e)&&(e.transformation=b)}},{key:"_quadGeometryData",value:function(e,t){var i=(0,v.u)(g.c.get(),e,t);return new y.I([[f.O.POSITION,{size:3,data:[0,0,0].concat((0,n.Z)(t),(0,n.Z)(e),(0,n.Z)(i)),exclusive:!0}]],[[f.O.POSITION,new Uint16Array([0,1,2,1,2,3])]])}},{key:"quadMaterialParameters",get:function(){return{color:this._color,transparent:!0,writeDepth:!1,polygonOffset:!0,renderOccluded:this._renderOccluded}}},{key:"_updateQuadMaterial",value:function(){this._quadMaterial&&this._quadMaterial.setParameters(this.quadMaterialParameters)}},{key:"outlineMaterialParameters",get:function(){return{color:this._outlineColor,width:this._outlineSize,renderOccluded:this._outlineRenderOccluded}}},{key:"_updateOutlineMaterial",value:function(){this._outlineMaterial&&this._outlineMaterial.setParameters(this.outlineMaterialParameters)}}]),i}(_.n),b=(0,h.e)()}}]);
//# sourceMappingURL=5545.b1e3bd1d.chunk.js.map