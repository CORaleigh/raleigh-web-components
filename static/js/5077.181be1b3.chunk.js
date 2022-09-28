"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[5077],{45077:function(e,r,t){t.d(r,{w:function(){return E}});var i=t(74165),n=t(15861),u=t(11752),o=t(61120),a=t(60136),s=t(29388),l=t(37762),c=t(1413),y=t(15671),d=t(43144),h=t(50165),p=t(73627),f=t(35691),v=t(72629),m=t(29398),g=t(27670),F=t(80392),b=t(89031),w=t(34095),Z=t(77322),k=t(49961),x=t(8184),_=t(24695),C=t(61490),O=t(60470),M=t(1894),q=function(){function e(r){(0,y.Z)(this,e),this._schedule=r,this._handle=new R(r)}return(0,d.Z)(e,[{key:"destroy",value:function(){this._handle.destroy()}},{key:"invoke",value:function(e,r){var t=this;return e.buffer&&0!==e.buffer.byteLength?(e.options.sourceSpatialReference&&e.options.sourceSpatialReference instanceof Z.k&&(e.options=(0,c.Z)((0,c.Z)({},e.options),{},{sourceSpatialReference:e.options.sourceSpatialReference.toJSON()})),this._handle.invoke(e,r).then((function(e){return t._schedule((function(){if(e.spatialReference=Z.k.fromJSON(e.spatialReference),e.fields)for(var r=0;r<e.fields.length;r++)e.fields[r]=k.y.fromJSON(e.fields[r]);var t,i=e.spatialReference,n=(0,l.Z)(e.features);try{for(n.s();!(t=n.n()).done;){var u=t.value;u.uid=b.g.generateUID(),(0,h.r)(u.geometry)&&(u.geometry.spatialReference=i)}}catch(o){n.e(o)}finally{n.f()}return e}))}))):Promise.resolve(null)}}]),e}(),R=function(e){(0,a.Z)(t,e);var r=(0,s.Z)(t);function t(e){return(0,y.Z)(this,t),r.call(this,"PBFDecoderWorker","_parseFeatureQuery",{_parseFeatureQuery:function(e){return[e.buffer]}},e)}return(0,d.Z)(t)}(w.a),V=function(e){(0,a.Z)(t,e);var r=(0,s.Z)(t);function t(e){return(0,y.Z)(this,t),r.call(this,e)}return(0,d.Z)(t,[{key:"queryFeaturesDehydrated",get:function(){var e=this,r=this.layer.capabilities,t=r&&r.query;if(t&&t.supportsFormatPBF){var i,n;(0,h.t)(this._decoder)&&(this._decoder=new q(this.schedule));var u={sourceSpatialReference:null!==(i=null===(n=this.layer.spatialReference)||void 0===n?void 0:n.toJSON())&&void 0!==i?i:null,applyTransform:!0,maxStringAttributeLength:1024};return function(r,t){return(0,F.E)(e.layer.parsedUrl,r,"pbf",e._createRequestOptions(t)).then((function(r){return(0,h.W)(t),(0,h.r)(e._decoder)?e._decoder.invoke({buffer:r.data,options:u},t.signal):Promise.reject((0,h.v)())}))}}return function(r,t){return(0,F.c)(e.layer.parsedUrl,r,e.layer.spatialReference,e._createRequestOptions(t)).then((function(e){return(0,g.z)(e.data)}))}}},{key:"queryFeatureCount",value:function(e,r){return this.layer.queryFeatureCount(e,r)}},{key:"destroy",value:function(){this._decoder=(0,h.G)(this._decoder)}},{key:"_createRequestOptions",value:function(e){return(0,c.Z)((0,c.Z)({},e),{},{query:(0,c.Z)((0,c.Z)({},this.layer.customParameters),{},{token:this.layer.apiKey},null===e||void 0===e?void 0:e.query)})}}]),t}(h.y);(0,h.e)([(0,h.d)({constructOnly:!0})],V.prototype,"layer",void 0),(0,h.e)([(0,h.d)({constructOnly:!0})],V.prototype,"schedule",void 0),(0,h.e)([(0,h.d)({readOnly:!0})],V.prototype,"queryFeaturesDehydrated",null),V=(0,h.e)([(0,h.n)("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],V);var S=function(e){(0,a.Z)(t,e);var r=(0,s.Z)(t);function t(e){return(0,y.Z)(this,t),r.call(this,e)}return(0,d.Z)(t,[{key:"queryFeaturesDehydrated",value:function(e,r){return this.layer.queryFeatures(e,r)}},{key:"queryFeatureCount",value:function(e,r){return this.layer.queryFeatureCount(e,r)}}]),t}(h.y);(0,h.e)([(0,h.d)({constructOnly:!0})],S.prototype,"layer",void 0),(0,h.e)([(0,h.d)({readOnly:!0})],S.prototype,"queryFeaturesDehydrated",null),S=(0,h.e)([(0,h.n)("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceMeshQuery3D")],S);var D=function(e){(0,a.Z)(t,e);var r=(0,s.Z)(t);function t(e){return(0,y.Z)(this,t),r.call(this,e)}return(0,d.Z)(t,[{key:"queryFeaturesDehydrated",value:function(e,r){return this.layer.queryFeatures(e,r)}}]),t}(h.y);(0,h.e)([(0,h.d)({constructOnly:!0})],D.prototype,"layer",void 0),D=(0,h.e)([(0,h.n)("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],D);var T=function(e){(0,a.Z)(t,e);var r=(0,s.Z)(t);function t(e){return(0,y.Z)(this,t),r.call(this,e)}return(0,d.Z)(t,[{key:"queryFeaturesDehydrated",value:function(e,r){var t=this;return this.source.queryFeaturesJSON(e,r).then(g.z,(function(i){if(i&&"query-features-json:unsupported"===i.name)return t.layer.queryFeatures(e,r);throw i}))}},{key:"queryFeatureCount",value:function(e,r){return this.layer.queryFeatureCount(e,r)}}]),t}(h.y);(0,h.e)([(0,h.d)({constructOnly:!0})],T.prototype,"layer",void 0),(0,h.e)([(0,h.d)({constructOnly:!0})],T.prototype,"source",void 0),T=(0,h.e)([(0,h.n)("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileClientQuery3D")],T);var N=function(){function e(r){(0,y.Z)(this,e),this._memoryCache=null,this._capabilities=null;var t=r.layerView.layer;this.layerView=r.layerView,this.objectIdField=t.objectIdField,this.globalIdField="globalIdField"in t?t.globalIdField:null,this.returnZ=r.returnZ,this.returnM=r.returnM;var i=this.layerView.view.resourceController;this.query=function(e,r){return"feature"===e.type&&"feature-layer"===e.source.type?(0,h.r)(e.infoFor3D)?new S({layer:e}):new V({layer:e,schedule:r}):"feature"===e.type&&"memory"===e.source.type||"csv"===e.type||"geojson"===e.type||"wfs"===e.type?new T({layer:e,source:e.source}):"ogc-feature"===e.type?new D({layer:e}):null}(t,(function(e){return i.schedule(e)})),i&&this.memoryCacheEnabled&&(this._memoryCache=i.memoryController.newCache(t.uid))}return(0,d.Z)(e,[{key:"memoryCacheEnabled",get:function(){switch(this.layerView.layer.source.type){case"feature-layer":case"ogc-feature":return!0;case"csv":case"geojson":case"memory":case"wfs":return!1}}},{key:"destroy",value:function(){this._memoryCache=(0,h.G)(this._memoryCache),this.query.destroy()}},{key:"createQuery",value:function(){var e=this.layerView.layer.createQuery();return e.outFields=this.layerView.availableFields,e.returnZ=this.returnZ,e.returnM=this.returnM,e.outSpatialReference=this.tilingScheme.spatialReference,e}},{key:"memoryCache",get:function(){return this._memoryCache}},{key:"viewingMode",get:function(){return this.layerView.view.state.viewingMode}},{key:"tilingScheme",get:function(){return this.layerView.view.featureTiles.tilingScheme}},{key:"scheduler",get:function(){var e=this.layerView.view.resourceController;return e?e.scheduler:null}},{key:"geometryType",get:function(){return this.layerView.layer.geometryType}},{key:"fullExtent",get:function(){return this.layerView.layer.fullExtent}},{key:"tileMaxRecordCount",get:function(){return this.layerView.layer.capabilities.query.tileMaxRecordCount}},{key:"maxRecordCount",get:function(){return this.layerView.layer.capabilities.query.maxRecordCount}},{key:"capabilities",get:function(){return(0,h.r)(this._capabilities)||(this._capabilities=(0,v.S)(this.layerView.layer)),this._capabilities}},{key:"logFetchError",value:function(e,r){e.error("#fetchTile()",this.layerView.layer,r&&r.message?r.message:r)}}]),e}(),P=function(e){(0,a.Z)(t,e);var r=(0,s.Z)(t);function t(e){var i;return(0,y.Z)(this,t),(i=r.call(this,e))._controllerTotal=0,i._processorTotal=0,i.suspendResumeExtentMode="data",i}return(0,d.Z)(t,[{key:"initialize",value:function(){var e=this;this.updatingHandles.add((function(){return e.view.floors}),(function(){return(0,h.r)(e.processor.filterVisibility)&&e.processor.filterVisibility.filterChanged()})),this.handles.add((0,p.l)((function(){return e._updatingRequiredFieldsPromise}),(function(r){return e.updatingHandles.addPromise(r)}),p.w))}},{key:"destroy",value:function(){this.updatingHandles.removeAll(),this.handles.removeAll(),this.fetcherContext=(0,h.G)(this.fetcherContext)}},{key:"maximumNumberOfFeatures",get:function(){var e,r;return null!==(e=null===(r=this.controller)||void 0===r?void 0:r.maximumNumberOfFeatures)&&void 0!==e?e:this._get("maximumNumberOfFeatures")},set:function(e){this._set("maximumNumberOfFeatures",e),this.controller&&(this.controller.maximumNumberOfFeatures=e)}},{key:"maximumNumberOfFeaturesExceeded",get:function(){return!!this.controller&&!(this.suspended||!this.controller.maximumNumberOfFeaturesExceeded)}},{key:"updatingProgressValue",get:function(){var e,r,t=0;if(null!==(e=this.controller)&&void 0!==e&&e.updating){var i=this.controller.updatingRemaining,n=Math.max(this.controller.updatingTotal,this._controllerTotal);n>0&&(t=(n-i)/n,this._controllerTotal=n)}var u=0;if(null!==(r=this.processor)&&void 0!==r&&r.updating){var o=this.processor.updatingRemaining,a=Math.max(o,this._processorTotal);a>0&&(u=(a-o)/a,this._processorTotal=a)}return.5*(t+u)}},{key:"updatePolicy",get:function(){if(!this.controller)return _.o.ASYNC;switch(this.controller.mode){case"snapshot":var e=Q[this.layer.geometryType];return null==e||this.controller.serviceDataCount>e?_.o.ASYNC:_.o.SYNC;case"tiles":return _.o.ASYNC}}},{key:"hasZ",get:function(){var e=this.layer,r=e.capabilities&&e.capabilities.data;return!(!r||!r.supportsZ)&&("returnZ"in e&&null!=e.returnZ?e.returnZ:r.supportsZ)}},{key:"hasM",get:function(){var e=this.layer,r=e.capabilities&&e.capabilities.data;return!(!r||!r.supportsM)&&"returnM"in e&&null!=e.returnM&&e.returnM}},{key:"setVisibility",value:function(e,r){var t;null===(t=this.processor)||void 0===t||t.setObjectIdVisibility(e,r)}},{key:"createQuery",value:function(){return(0,u.Z)((0,o.Z)(t.prototype),"createQuery",this).call(this)}},{key:"queryFeatures",value:function(e,r){var i=this,n=function(){return(0,u.Z)((0,o.Z)(t.prototype),"queryFeatures",i).call(i,e,r)};return"mesh"===this.layer.geometryType?this._queryFeaturesMesh(this._ensureQuery(e),n):n()}},{key:"beforeSetController",value:function(e){e.maximumNumberOfFeatures=this.maximumNumberOfFeatures}},{key:"createController",value:function(){var e=this;this.fetcherContext=new N({layerView:this,returnZ:this.hasZ,returnM:this.hasM});var r=new v.I({layerView:this,context:this.fetcherContext,graphics:new x.r,extent:this.clippingExtent});return this.updatingHandles.add((function(){return r.serviceDataExtent}),(function(r){e.processor&&(e.processor.dataExtent=r)}),p.h),this.handles.add((0,p.l)((function(){return e.suspended}),(function(e){e?r.suspend():r.resume()}),p.w)),this.updatingHandles.add((function(){var r;return null===(r=e.processor)||void 0===r?void 0:r.displayFeatureLimit}),(function(e){return r.displayFeatureLimit=e}),p.h),this.handles.add((0,p.f)((function(){return!e.updating}),(function(){e._controllerTotal=0,e._processorTotal=0}))),r}},{key:"doRefresh",value:function(){var e=(0,n.Z)((0,i.Z)().mark((function e(r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r&&!this.suspended&&this.controller&&this.controller.refetch(),(0,h.r)(this.processor.filterVisibility)&&(this.processor.filterVisibility.dirty=!0);case 1:case"end":return e.stop()}}),e,this)})));return function(r){return e.apply(this,arguments)}}()},{key:"getUsedMemory",value:function(){var e,r,t,i;return(null!==(e=null===(r=this.processor)||void 0===r?void 0:r.usedMemory)&&void 0!==e?e:0)+(null!==(t=null===(i=this.controller)||void 0===i?void 0:i.memoryForUnusedFeatures)&&void 0!==t?t:0)}},{key:"getUnloadedMemory",value:function(){var e,r,t,i,n;return(null!==(e=null===(r=this.processor)||void 0===r?void 0:r.unprocessedMemoryEstimate)&&void 0!==e?e:0)+(null!==(t=(null===(i=this.controller)||void 0===i?void 0:i.expectedFeatureDiff)*(null===(n=this.processor)||void 0===n?void 0:n.usedMemoryPerFeature))&&void 0!==t?t:0)}},{key:"ignoresMemoryFactor",value:function(){var e;return null===(e=this.controller)||void 0===e?void 0:e.hasMaximumNumberOfFeaturesOverride}},{key:"_queryFeaturesMesh",value:function(){var e=(0,n.Z)((0,i.Z)().mark((function e(r,t){var n,u,o,a,s,c,y,d;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._validateQueryFeaturesMesh(r);case 2:return e.next=4,t();case 4:if(n=e.sent,!(r&&r.outStatistics||(0,h.t)(this.graphics3DProcessor))){e.next=7;break}return e.abrupt("return",n);case 7:u=this.layer.objectIdField,o=this.graphics3DProcessor.graphics3DGraphicsByObjectID,a=[],s=(0,l.Z)(n.features);try{for(s.s();!(c=s.n()).done;)(y=c.value).geometry?(d=o.get(y.attributes[u]))&&(y.geometry=(0,f.ar)(d.graphic.geometry),a.push(y)):a.push(y)}catch(i){s.e(i)}finally{s.f()}return e.abrupt("return",(n.features=a,n));case 11:case"end":return e.stop()}}),e,this)})));return function(r,t){return e.apply(this,arguments)}}()},{key:"_validateQueryFeaturesMesh",value:function(){var e=(0,n.Z)((0,i.Z)().mark((function e(r){var t,n,u,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return");case 2:for(t=function(e){throw new h.a("feature-layer-view:unsupported-query","Queries on Mesh feature collection layers do not support '".concat(e,"'"))},n=0,u=["quantizationParameters","geometryPrecision","maxAllowableOffset"];n<u.length;n++)null!=r[o=u[n]]&&t(o);"returnM"in r&&r.returnM&&t("returnM"),"returnCentroid"in r&&r.returnCentroid&&t("returnCentroid"),(0,h.r)(r.outSpatialReference)&&!r.outSpatialReference.equals(this.view.spatialReference)&&t("outSpatialReference");case 5:case"end":return e.stop()}}),e,this)})));return function(r){return e.apply(this,arguments)}}()},{key:"performanceInfo",get:function(){var e,r,t,i,n,u=null===(e=this.controller)||void 0===e?void 0:e.displayFeatureLimit,o=(0,h.r)(u)&&u.averageSymbolComplexity,a=(0,h.r)(o)?"f:".concat(o.primitivesPerFeature,",v:").concat(o.primitivesPerCoordinate):"n/a",s=(0,c.Z)((0,c.Z)({},this._getResourceInfo()),{},{storedFeatures:0,totalVertices:0,partial:this.maximumNumberOfFeaturesExceeded,mode:null!==(r=null===(t=this.controller)||void 0===t?void 0:t.mode)&&void 0!==r?r:"n/a",symbolComplexity:a,nodes:null!==(i=null===(n=this.controller)||void 0===n?void 0:n.tileDescriptors.length)&&void 0!==i?i:0});if(this.controller&&s.displayedNumberOfFeatures){var l=this.controller.debug;s.storedFeatures=l.storedFeatures,s.totalVertices=l.totalVertices}return s}},{key:"test",get:function(){var e;return{updatePolicy:this.updatePolicy,controller:this.controller,loadedGraphics:null===(e=this.controller)||void 0===e?void 0:e.graphics}}}]),t}((0,M.i)((0,v.E)((0,C.A)((0,m.n)(O.u)))));(0,h.e)([(0,h.d)()],P.prototype,"layer",void 0),(0,h.e)([(0,h.d)()],P.prototype,"controller",void 0),(0,h.e)([(0,h.d)()],P.prototype,"_controllerTotal",void 0),(0,h.e)([(0,h.d)()],P.prototype,"_processorTotal",void 0),(0,h.e)([(0,h.d)()],P.prototype,"maximumNumberOfFeatures",null),(0,h.e)([(0,h.d)()],P.prototype,"maximumNumberOfFeaturesExceeded",null),(0,h.e)([(0,h.d)(f.t)],P.prototype,"updatingProgress",void 0),(0,h.e)([(0,h.d)({readOnly:!0})],P.prototype,"updatingProgressValue",null),(0,h.e)([(0,h.d)({readOnly:!0})],P.prototype,"updatePolicy",null),(0,h.e)([(0,h.d)({readOnly:!0})],P.prototype,"hasZ",null),(0,h.e)([(0,h.d)({readOnly:!0})],P.prototype,"hasM",null),(0,h.e)([(0,h.d)()],P.prototype,"suspendResumeExtentMode",void 0),P=(0,h.e)([(0,h.n)("esri.views.3d.layers.FeatureLayerViewBase3D")],P);var Q={point:5e3,polygon:500,polyline:1e3},E=P}}]);
//# sourceMappingURL=5077.181be1b3.chunk.js.map