"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[3850],{2301:function(e,t,i){i.d(t,{F:function(){return P},l:function(){return Q}});var r=i(1413),n=i(74165),s=i(15861),a=i(15671),u=i(43144),o=i(60136),l=i(29388),c=i(23132),d=i(83822),h=i(75610),p=i(97033),y=i(36551),f=i(79054),g=i(30709),v=i(58687),m=i(34860),b=i(84452),w=i(90935),_=i(77470),E=i(80175),x=i(25838),C=i(42814),S=i(91204),k=i(80262),V=i(20880),I=i(15612),R=i(14181),F=i(82414),O=i(45414),Z=V.Y,Q=function(e){(0,o.Z)(i,e);var t=(0,l.Z)(i);function i(e){var r;return(0,a.Z)(this,i),(r=t.call(this,e))._dataQueryEngineInstance=null,r}return(0,u.Z)(i,[{key:"queryGeometryType",get:function(){switch(this.layer.geometryType){case"multipoint":case"point":case"polygon":case"polyline":return this.layer.geometryType;case"mesh":return"polygon";default:return}}},{key:"defaultQueryJSON",get:function(){return new m.b({outSpatialReference:this.spatialReference}).toJSON()}},{key:"dataQueryEngine",get:function(){return this._ensureDataQueryEngine()}},{key:"destroy",value:function(){this.clear()}},{key:"clear",value:function(){return!!this._dataQueryEngineInstance&&(this._dataQueryEngineInstance.destroy(),this._dataQueryEngineInstance=null,!0)}},{key:"executeQueryForIdSet",value:function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t,i){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.dataQueryEngine.executeQueryForIdSet(this._ensureQueryJSON(t,i)));case 1:case"end":return e.stop()}}),e,this)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"executeQueryForCount",value:function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t,i){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.dataQueryEngine.executeQueryForCount(this._ensureQueryJSON(t),i));case 1:case"end":return e.stop()}}),e,this)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"executeQueryForExtent",value:function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t,i){var r,s,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.dataQueryEngine.executeQueryForExtent(this._ensureQueryJSON(t),i);case 2:return r=e.sent,s=r.count,a=r.extent,e.abrupt("return",{count:s,extent:k.M.fromJSON(a)});case 6:case"end":return e.stop()}}),e,this)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"executeQueryForIds",value:function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t,i){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.dataQueryEngine.executeQueryForIds(this._ensureQueryJSON(t),i));case 1:case"end":return e.stop()}}),e,this)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"executeQueryForLatestObservations",value:function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t,i){var r,s,a=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.dataQueryEngine.executeQueryForLatestObservations(this._ensureQueryJSON(t),i);case 2:return r=e.sent,s=I.default.fromJSON(r),e.abrupt("return",(s.features.forEach((function(e){e.layer=a.layer,e.sourceLayer=a.layer})),s));case 5:case"end":return e.stop()}}),e,this)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"executeQuery",value:function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t,i){var r,s,a=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.dataQueryEngine.executeQuery(this._ensureQueryJSON(t),i);case 2:return r=e.sent,s=I.default.fromJSON(r),e.abrupt("return",(s.features.forEach((function(e){e.layer=a.layer,e.sourceLayer=a.layer})),s));case 5:case"end":return e.stop()}}),e,this)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"_ensureQueryJSON",value:function(e,t){var i=this.defaultQueryJSON;return(0,h.r)(e)&&("outSpatialReference"in e&&!e.outSpatialReference&&(e.outSpatialReference=this.spatialReference),i=e.toJSON()),(0,h.r)(t)&&(i=(0,r.Z)((0,r.Z)({},i),{},{sceneFilter:(0,r.Z)((0,r.Z)({},t),{},{geometry:t.geometry.toJSON()})})),i}},{key:"_ensureDataQueryEngine",value:function(){if(this._dataQueryEngineInstance)return this._dataQueryEngineInstance;var e="timeInfo"in this.layer&&this.layer.timeInfo&&this.layer.timeInfo.toJSON()||null,t=this.layer.objectIdField,i=S.a.toJSON(this.queryGeometryType),r=this.layer.fields.map((function(e){return e.toJSON()})),n=this.layerView.view.resourceController.scheduler,s=this.priority,a=this.spatialReference.toJSON(),u=this.layerView.processor.featureStore,o=this.layerView,l=o.hasZ,c=o.hasM;return this._dataQueryEngineInstance=new Z({hasZ:l,hasM:c,geometryType:i,fields:r,timeInfo:e,spatialReference:a,objectIdField:t,featureStore:u,scheduler:n,priority:s}),this._dataQueryEngineInstance}}]),i}(c.y);(0,c.e)([(0,c.d)({constructOnly:!0})],Q.prototype,"layerView",void 0),(0,c.e)([(0,c.d)({constructOnly:!0})],Q.prototype,"priority",void 0),(0,c.e)([(0,c.d)({readOnly:!0,aliasOf:"layerView.view.spatialReference"})],Q.prototype,"spatialReference",void 0),(0,c.e)([(0,c.d)({readOnly:!0,aliasOf:"layerView.layer"})],Q.prototype,"layer",void 0),(0,c.e)([(0,c.d)({readOnly:!0})],Q.prototype,"queryGeometryType",null),(0,c.e)([(0,c.d)({readOnly:!0})],Q.prototype,"defaultQueryJSON",null),Q=(0,c.e)([(0,c.n)("esri.views.3d.layers.graphics.QueryEngine")],Q);var G=c.s.getLogger("esri.views.3d.layers.graphics.Graphics3DFilterVisibility"),A=function(e){(0,o.Z)(i,e);var t=(0,l.Z)(i);function i(){var e;(0,a.Z)(this,i);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n)))._dirty=!1,e._querying=!1,e._handles=new _.u,e}return(0,u.Z)(i,[{key:"updating",get:function(){return this._dirty||this._querying||(0,h.r)(this._queryResult)}},{key:"setup",value:function(e,t){var i=this;this._layerView=e,this._core=t,this._objectIdField=e.layer.objectIdField,this._queryEngine=new Q({layerView:this._layerView,priority:R.L.FILTER_VISIBILITY});var r=this._layerView.view.resourceController.scheduler;this._handles.add(r.registerTask(R.L.FILTER_VISIBILITY,this)),this._handles.add((0,y.a)((function(){var e;return null===(e=t.owner)||void 0===e?void 0:e.loadedGraphics}),"after-changes",(function(e){return i._graphicsChanged(e)}),{onListenerAdd:function(){return i.dirty=!0}})),this.filterChanged()}},{key:"destroy",value:function(){this._handles.destroy(),this._handles=null,this.clear(),this._layerView=null,this._core=null}},{key:"clear",value:function(){this._queryEngine.clear()&&(this._core.modifyGraphics3DGraphicVisibilities((function(e){return e.clearVisibilityFlag(v.C.FILTER)})),this._queryResult=null,this._querying=!1),this.dirty=!1}},{key:"_graphicsChanged",value:function(e){this._queryEngine&&0==(e.type&E.E.ADD)||(this.dirty=!0)}},{key:"updateVisibility",value:function(e){this.active&&(e.hasVisibilityFlag(v.C.FILTER,v.E.GRAPHIC)||e.setVisibilityFlag(v.C.FILTER,!1,v.E.GRAPHIC),this.dirty=!0)}},{key:"filterChanged",value:function(){var e=this._recomputeFilter();e!==this._featureFilter&&(this._featureFilter=e,this.dirty=!0);var t="layerFilter"in this._layerView?this._layerView.layerFilter:null;t!==this._sceneFilter&&(this._sceneFilter=t,this.dirty=!0)}},{key:"active",get:function(){return(this._featureFilter||this._sceneFilter)&&this._core.graphics3DGraphics.size>0}},{key:"_recomputeFilter",value:function(){var e="filter"in this._layerView?this._layerView.filter:null,t="timeExtent"in this._layerView?this._layerView.timeExtent:null,i=(0,C.o)(this._layerView);if((0,h.t)(t)&&(0,h.t)(i))return e;var r=(0,h.r)(e)?e.clone():new x.y;if((0,h.r)(t)&&(r.timeExtent=(0,h.r)(r.timeExtent)?r.timeExtent.intersection(t):t),(0,h.r)(i)){var n=null==r.where||""===r.where;r.where=n?i:"(".concat(r.where,") AND (").concat(i,")")}return r}},{key:"running",get:function(){return this._dirty&&!this._querying||(0,h.r)(this._queryResult)}},{key:"runTask",value:function(e){var t=this;if(this.active){!this._dirty||this._querying||e.done||(this._querying=!0,this.dirty=!1,this._queryEngine.executeQueryForIdSet(this._featureFilter,this._sceneFilter).then((function(e){t._queryResult=e,t._querying=!1})).catch((function(e){if(!(0,c.u)(e)){G.warn("FeatureFilter query failed: "+e,{error:e});var i=new Set;t._core.graphics3DGraphics.forEach((function(e){return i.add(t._getFeatureId(e.graphic))})),t._queryResult=i,t._querying=!1}})),e.madeProgress());var i=this._queryResult;(0,h.r)(i)&&!e.done&&(this._core.modifyGraphics3DGraphicVisibilities((function(r){if(e.done)return!1;var n=i.has(t._getFeatureId(r.graphic));return!!r.setVisibilityFlag(v.C.FILTER,n,v.E.GRAPHIC)&&(e.madeProgress(),!0)})),e.done||(this._queryResult=null))}else this.clear()}},{key:"_getFeatureId",value:function(e){return null==e.objectId?e.attributes[this._objectIdField]:e.objectId}},{key:"dirty",set:function(e){this._dirty=e}}]),i}(c.y);(0,c.e)([(0,c.d)({readOnly:!0})],A.prototype,"updating",null),(0,c.e)([(0,c.d)({readOnly:!0})],A.prototype,"running",null),(0,c.e)([(0,c.d)()],A.prototype,"_dirty",void 0),(0,c.e)([(0,c.d)()],A.prototype,"_querying",void 0),(0,c.e)([(0,c.d)()],A.prototype,"_queryResult",void 0),A=(0,c.e)([(0,c.n)("esri.views.3d.layers.graphics.Graphics3DFilterVisibility")],A);var q=function(e){(0,o.Z)(i,e);var t=(0,l.Z)(i);function i(e){var r;return(0,a.Z)(this,i),(r=t.call(this,e)).type="graphics-3d",r.elevationFeatureExpressionEnabled=!1,r.dataExtent=null,r.drapeSourceType=v.e.Features,r.preferredUpdatePolicy=O.o.ASYNC,r.suspendResumeExtent=null,r}return(0,u.Z)(i,[{key:"normalizeCtorArgs",value:function(e){var t=e.frustumVisibilityEnabled?new w.d:null,i=e.scaleVisibilityEnabled?new b.b:null,r=(e.filterVisibilityEnabled||e.timeExtentEnabled)&&"multipatch"!==e.owner.layer.geometryType?new A:null,n=e.elevationAlignmentEnabled?new w.l:null;return{owner:e.owner,updateClippingExtent:e.updateClippingExtent,dataExtent:e.dataExtent,frustumVisibility:t,scaleVisibility:i,filterVisibility:r,elevationAlignment:n,elevationFeatureExpressionEnabled:e.elevationFeatureExpressionEnabled,preferredUpdatePolicy:e.preferredUpdatePolicy}}},{key:"initialize",value:function(){var e=this,t=new b.j({owner:this,layer:this.layer,preferredUpdatePolicy:this.preferredUpdatePolicy,elevationFeatureExpressionEnabled:this.elevationFeatureExpressionEnabled,graphicSymbolSupported:!1,hasZ:this.owner.hasZ,hasM:this.owner.hasM});this._set("graphicsCore",t),this.scaleVisibility&&this.updatingHandles.add((function(){return e.layer.effectiveScaleRange}),(function(){return e.scaleVisibility.layerMinMaxScaleChangeHandler()}));var i=this.filterVisibility;(0,h.r)(i)&&(this.updatingHandles.add((function(){return"filter"in e.owner&&e.owner.filter}),(function(){return i.filterChanged()})),this.updatingHandles.add((function(){return"timeExtent"in e.owner&&e.owner.timeExtent}),(function(){return i.filterChanged()})),this.updatingHandles.add((function(){return"layerFilter"in e.owner&&e.owner.layerFilter}),(function(){return i.filterChanged()}))),this.elevationAlignment&&this.updatingHandles.add((function(){return e.layer.elevationInfo}),(function(t,i){(0,f.m)(t,i)&&e.updatingHandles.addPromise(e.graphicsCore.elevationInfoChange())})),this.updatingHandles.add((function(){return e.layer.labelsVisible}),(function(){return e.graphicsCore.updateVisibilityInfo()})),this.updatingHandles.add((function(){return e.layer.labelingInfo}),(function(t,i){(0,f.m)(t,i)&&e.graphicsCore.updateLabelingInfo()})),this.updatingHandles.add((function(){return e.preferredUpdatePolicy}),(function(t){return e.graphicsCore.preferredUpdatePolicy=t}))}},{key:"destroy",value:function(){this.handles.removeAll(),this.updatingHandles.removeAll(),this._set("frustumVisibility",(0,h.l)(this.frustumVisibility)),this._set("scaleVisibility",(0,h.l)(this.scaleVisibility)),this._set("filterVisibility",(0,h.l)(this.filterVisibility)),this._set("elevationAlignment",(0,h.l)(this.elevationAlignment)),this._set("objectStates",(0,h.l)(this.objectStates)),this._set("graphicsCore",(0,h.l)(this.graphicsCore)),this._set("owner",null)}},{key:"layer",get:function(){return this.owner.layer}},{key:"suspendResumeExtentMode",get:function(){return"suspendResumeExtentMode"in this.owner?this.owner.suspendResumeExtentMode:"computed"}},{key:"scaleVisibilitySuspended",get:function(){var e;return null===(e=this.scaleVisibility)||void 0===e?void 0:e.suspended}},{key:"suspended",get:function(){return this.owner.suspended}},{key:"legendEnabled",get:function(){return(0,h.t)(this.frustumVisibility)||!this.frustumVisibility.suspended}},{key:"suspendInfo",get:function(){var e,t={};return null!==(e=this.scaleVisibility)&&void 0!==e&&e.suspended&&(t.outsideScaleRange=!0),(0,h.r)(this.frustumVisibility)&&this.frustumVisibility.suspended&&(t.outsideOfView=!0),t}},{key:"updating",get:function(){var e,t;return!!(null!==(e=this.graphicsCore)&&void 0!==e&&e.updating||(0,h.r)(this.frustumVisibility)&&this.frustumVisibility.updating||null!==(t=this.updatingHandles)&&void 0!==t&&t.updating)}},{key:"updatingRemaining",get:function(){var e,t;return null!==(e=null===(t=this.graphicsCore)||void 0===t?void 0:t.updatingRemaining)&&void 0!==e?e:0}},{key:"featureStore",get:function(){var e;return null===(e=this.graphicsCore)||void 0===e?void 0:e.featureStore}},{key:"view",get:function(){return this.owner.view}},{key:"loadedGraphics",get:function(){return this.owner.loadedGraphics}},{key:"fullOpacity",get:function(){var e;return null===(e=this.owner)||void 0===e?void 0:e.fullOpacity}},{key:"filter",get:function(){return"filter"in this.owner?this.owner.filter:null}},{key:"slicePlaneEnabled",get:function(){return this.owner.slicePlaneEnabled}},{key:"updatePolicy",get:function(){return this.owner.updatePolicy}},{key:"featureSpatialReference",get:function(){return"featureSpatialReference"in this.owner?this.owner.featureSpatialReference:this.owner.view.spatialReference}},{key:"graphics3DGraphics",get:function(){var e;return null===(e=this.graphicsCore)||void 0===e?void 0:e.graphics3DGraphics}},{key:"graphics3DGraphicsByObjectID",get:function(){var e;return null===(e=this.graphicsCore)||void 0===e?void 0:e.graphics3DGraphicsByObjectID}},{key:"symbolUpdateType",get:function(){var e;return null===(e=this.graphicsCore)||void 0===e?void 0:e.symbolUpdateType}},{key:"displayFeatureLimit",get:function(){var e,t=this.view.resourceController.memoryController.memoryFactor,i=null===(e=this.graphicsCore)||void 0===e?void 0:e.displayFeatureLimit;if(1===t)return i;var n=Math.ceil(i.maximumNumberOfFeatures*t),s=Math.ceil(i.maximumTotalNumberOfFeatures*t),a=Math.ceil(i.minimumTotalNumberOfFeatures*t);return(0,r.Z)((0,r.Z)({},i),{},{maximumNumberOfFeatures:n,maximumTotalNumberOfFeatures:s,minimumTotalNumberOfFeatures:a})}},{key:"usedMemory",get:function(){var e,t;return null!==(e=null===(t=this.graphicsCore)||void 0===t?void 0:t.usedMemory)&&void 0!==e?e:0}},{key:"usedMemoryPerFeature",get:function(){var e,t;return null!==(e=null===(t=this.graphicsCore)||void 0===t?void 0:t.usedMemoryPerGraphic)&&void 0!==e?e:0}},{key:"unprocessedMemoryEstimate",get:function(){var e,t;return null!==(e=null===(t=this.graphicsCore)||void 0===t?void 0:t.unprocessedMemoryEstimate)&&void 0!==e?e:0}},{key:"performanceInfo",get:function(){return{core:this.graphicsCore.performanceInfo,elevationUpdating:this.elevationAlignment.updating,visibilityFrustum:(0,h.t)(this.frustumVisibility)||!this.frustumVisibility.suspended,visibilityScale:!this.scaleVisibility.suspended}}},{key:"setup",value:function(){var e=(0,s.Z)((0,n.Z)().mark((function e(){var t,i,r,s,a=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,h.r)(this.frustumVisibility)&&this.frustumVisibility.setup(this),t=this.owner,i=this.owner.view.basemapTerrain,r=function(e,t,i){return a.graphicsCore.spatialIndex.queryGraphicUIDsInExtent(e,t,i)},this.scaleVisibility&&this.scaleVisibility.setup(this,this.layer,r,this.graphicsCore,i),(0,h.r)(this.filterVisibility)&&("filter"in t||"timeExtent"in t)&&this.filterVisibility.setup(t,this.graphicsCore),this.elevationAlignment&&(s=t.view.elevationProvider,this.elevationAlignment.setup(this,r,this.graphicsCore,s)),this._set("objectStates",new w.s(this.graphicsCore)),this._set("labeling",this.owner.view.labeler.addGraphicsOwner(this.graphicsCore,this.scaleVisibility)),this._set("deconfliction",t.view.deconflictor.addGraphicsOwner(this.graphicsCore)),e.next=8,(0,c.aE)(this.graphicsCore.setup({elevationAlignment:this.elevationAlignment,scaleVisibility:this.scaleVisibility,filterVisibility:this.filterVisibility,deconflictor:this.deconfliction,labeler:this.labeling,objectStates:this.objectStates}));case 8:if(this.updatingHandles.add((function(){return a.layer.renderer}),(function(e){return a.updatingHandles.addPromise(a.graphicsCore.rendererChange(e))})),this.updatingHandles.add((function(){return t.fullOpacity}),(function(){return a.graphicsCore.opacityChange()})),this._setupSuspendResumeExtent(),this.updateClippingExtent&&(this.updatingHandles.add((function(){return t.view.clippingArea}),(function(){return a._updateClippingExtent()})),this._updateClippingExtent()),this.graphicsCore.startCreateGraphics(),e.t0=this.graphicsCore.labelsEnabled,!e.t0){e.next=17;break}return e.next=17,(0,c.aE)(this.graphicsCore.updateLabelingInfo());case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"maskOccludee",value:function(e){var t=this.objectStates.acquireSet(O.u.MaskOccludee,null),i=t.set,r=t.handle;return this.objectStates.setUid(i,e.uid),r}},{key:"highlight",value:function(e,t){var i=this;if(e instanceof m.b){var r=this.objectStates.acquireSet(O.u.Highlight,t),n=r.set,s=r.handle;return this.owner.queryObjectIds(e).then((function(e){return i.objectStates.setObjectIds(n,e)})),s}if("number"==typeof e||"string"==typeof e)return this.highlight([e],t);if(e instanceof d.g)return this.highlight([e],t);if("toArray"in e&&(e=e.toArray()),Array.isArray(e)&&e.length>0){if(e[0]instanceof d.g){var a=e;if(null==(0,F.n)(this.layer.fieldsIndex,a[0].attributes,t)){var u=a.map((function(e){return e.uid})),o=this.objectStates.acquireSet(O.u.Highlight,null),l=o.set,c=o.handle;return this.objectStates.setUids(l,u),c}e=a.map((function(e){return(0,F.n)(i.layer.fieldsIndex,e.attributes,t)}))}if("number"==typeof e[0]||"string"==typeof e[0]){var h=e,p=this.objectStates.acquireSet(O.u.Highlight,t),y=p.set,f=p.handle;return this.objectStates.setObjectIds(y,h),f}}return M}},{key:"whenGraphicBounds",value:function(e,t){var i;return null===(i=this.graphicsCore)||void 0===i?void 0:i.whenGraphicBounds(e,t)}},{key:"computeAttachmentOrigin",value:function(e,t){var i;return null===(i=this.graphicsCore)||void 0===i?void 0:i.computeAttachmentOrigin(e,t)}},{key:"notifyGraphicGeometryChanged",value:function(e){this.graphicsCore.notifyGraphicGeometryChanged(e)}},{key:"notifyGraphicVisibilityChanged",value:function(e){this.graphicsCore.notifyGraphicVisibilityChanged(e)}},{key:"getRenderingInfo",value:function(e,t,i){var r=(0,v.a)(e,{renderer:t,arcade:i});if((0,h.r)(r)&&r.color){var n=r.color;n[0]=n[0]/255,n[1]=n[1]/255,n[2]=n[2]/255}return r}},{key:"getRenderingInfoAsync",value:function(e,t,i,n){return(0,v.s)(e,(0,r.Z)({renderer:t,arcade:i},n))}},{key:"getSymbolLayerSize",value:function(e,t){var i;return null===(i=this.graphicsCore)||void 0===i?void 0:i.getSymbolLayerSize(e,t)}},{key:"setObjectIdVisibility",value:function(e,t){var i;null===(i=this.graphicsCore)||void 0===i||i.setObjectIdVisibility(e,t)}},{key:"_updateClippingExtent",value:function(){var e=this.owner.view.clippingArea;this.graphicsCore.setClippingExtent(e,this.owner.view.spatialReference)&&(this.updateClippingExtent(e)||this.graphicsCore.recreateAllGraphics())}},{key:"_setupSuspendResumeExtent",value:function(){var e=this;(this.frustumVisibility||this.scaleVisibility)&&this.handles.add((0,y.l)((function(){return e.suspendResumeExtentMode}),(function(){switch(e.handles.remove(j),e.suspendResumeExtentMode){case"computed":e.handles.add([(0,y.l)((function(){return e.graphicsCore.computedExtent}),(function(t){return e._updateSuspendResumeExtent(t)}),y.h),(0,y.l)((function(){return e.graphicsCore.extentPadding}),(function(){return e._updateSuspendResumeExtent(e.graphicsCore.computedExtent)}))],j);break;case"data":e.handles.add([(0,y.f)((function(){return e.dataExtent}),(function(t){return e._updateSuspendResumeExtent(t)}),y.h),(0,y.l)((function(){return e.graphicsCore.extentPadding}),(function(){return e._updateSuspendResumeExtent((0,h.e)(e.dataExtent))}))],j)}}),y.h))}},{key:"_updateSuspendResumeExtent",value:function(e){e?this._suspendResumeExtentChanged(this._extentToSuspendResumeRect(e,this.suspendResumeExtent)):this._suspendResumeExtentChanged(null)}},{key:"_extentToSuspendResumeRect",value:function(e,t){var i=this.owner.view.spatialReference;if(!e.spatialReference.equals(i)){if(!(0,g.g)(e,i))return;e=(0,g.M)(e,i)}return(0,v.k)(e,t,v.r,this.graphicsCore.extentPadding)}},{key:"_suspendResumeExtentChanged",value:function(e){(0,h.r)(this.frustumVisibility)&&this.frustumVisibility.setExtent(e),this.scaleVisibility&&this.scaleVisibility.setExtent(e)}}]),i}(p.d);(0,c.e)([(0,c.d)()],q.prototype,"type",void 0),(0,c.e)([(0,c.d)({constructOnly:!0})],q.prototype,"owner",void 0),(0,c.e)([(0,c.d)()],q.prototype,"layer",null),(0,c.e)([(0,c.d)({constructOnly:!0})],q.prototype,"updateClippingExtent",void 0),(0,c.e)([(0,c.d)({constructOnly:!0})],q.prototype,"elevationFeatureExpressionEnabled",void 0),(0,c.e)([(0,c.d)({constructOnly:!0})],q.prototype,"graphicsCore",void 0),(0,c.e)([(0,c.d)({constructOnly:!0})],q.prototype,"scaleVisibility",void 0),(0,c.e)([(0,c.d)({constructOnly:!0})],q.prototype,"filterVisibility",void 0),(0,c.e)([(0,c.d)({constructOnly:!0})],q.prototype,"elevationAlignment",void 0),(0,c.e)([(0,c.d)({constructOnly:!0})],q.prototype,"frustumVisibility",void 0),(0,c.e)([(0,c.d)({readOnly:!0})],q.prototype,"deconfliction",void 0),(0,c.e)([(0,c.d)({readOnly:!0})],q.prototype,"labeling",void 0),(0,c.e)([(0,c.d)({readOnly:!0})],q.prototype,"objectStates",void 0),(0,c.e)([(0,c.d)()],q.prototype,"suspendResumeExtentMode",null),(0,c.e)([(0,c.d)()],q.prototype,"dataExtent",void 0),(0,c.e)([(0,c.d)()],q.prototype,"scaleVisibilitySuspended",null),(0,c.e)([(0,c.d)()],q.prototype,"suspended",null),(0,c.e)([(0,c.d)()],q.prototype,"legendEnabled",null),(0,c.e)([(0,c.d)()],q.prototype,"suspendInfo",null),(0,c.e)([(0,c.d)()],q.prototype,"updating",null),(0,c.e)([(0,c.d)()],q.prototype,"updatingRemaining",null),(0,c.e)([(0,c.d)()],q.prototype,"featureStore",null),(0,c.e)([(0,c.d)()],q.prototype,"view",null),(0,c.e)([(0,c.d)()],q.prototype,"loadedGraphics",null),(0,c.e)([(0,c.d)()],q.prototype,"fullOpacity",null),(0,c.e)([(0,c.d)()],q.prototype,"filter",null),(0,c.e)([(0,c.d)()],q.prototype,"slicePlaneEnabled",null),(0,c.e)([(0,c.d)()],q.prototype,"drapeSourceType",void 0),(0,c.e)([(0,c.d)()],q.prototype,"updatePolicy",null),(0,c.e)([(0,c.d)()],q.prototype,"preferredUpdatePolicy",void 0),(0,c.e)([(0,c.d)()],q.prototype,"displayFeatureLimit",null);var P=q=(0,c.e)([(0,c.n)("esri.views.3d.layers.graphics.Graphics3DFeatureProcessor")],q),j="suspendResumeExtentMode",M={remove:function(){},pause:function(){},resume:function(){}}},3964:function(e,t,i){i.d(t,{n:function(){return y}});var r=i(74165),n=i(15861),s=i(15671),a=i(43144),u=i(11752),o=i(61120),l=i(60136),c=i(29388),d=i(23132),h=i(36551),p=(i(75610),i(86270)),y=function(e){var t=function(e){(0,l.Z)(i,e);var t=(0,c.Z)(i);function i(){var e;return(0,s.Z)(this,i),(e=t.apply(this,arguments)).slicePlaneEnabled=!1,e.supportsHeightUnitConversion=!1,e}return(0,a.Z)(i,[{key:"postscript",value:function(e){(0,u.Z)((0,o.Z)(i.prototype),"postscript",this).call(this,e),(0,p.g)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}},{key:"_validateHeightModelInfo",value:function(){var e=(0,n.Z)((0,r.Z)().mark((function e(){var t,i,n,s=this;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new AbortController,i=t.signal,this.handles.add((0,d.g)((function(){return t.abort()}))),e.next=4,(0,h.j)((function(){var e;return null===(e=s.view.defaultsFromMap)||void 0===e?void 0:e.heightModelInfoReady}),i);case 4:if((0,d.H)(i),!(n=(0,p.o)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion))){e.next=8;break}throw n;case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"canResume",value:function(){var e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return(0,u.Z)((0,o.Z)(i.prototype),"canResume",this).call(this)&&(!e||!e.minScale||!e.maxScale||e.minScale>=e.maxScale)}},{key:"getSuspendInfo",value:function(){var e=(0,u.Z)((0,o.Z)(i.prototype),"getSuspendInfo",this).call(this),t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return t&&t.minScale&&t.maxScale&&t.minScale<t.maxScale&&(e.outsideScaleRange=!0),e}}]),i}(e);return(0,d.e)([(0,d.d)()],t.prototype,"view",void 0),(0,d.e)([(0,d.d)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,d.e)([(0,d.n)("esri.views.3d.layers.LayerView3D")],t)}},82414:function(e,t,i){function r(e,t,i){if(!i||null==t)return null;if(!e)return function(e,t){var i=t.toLowerCase();for(var r in e)if(r.toLowerCase()===i)return e[r];return null}(t,i);var r=e.get(i);return r?t[r.name]:null}i.d(t,{n:function(){return r}})}}]);
//# sourceMappingURL=3850.99b8ca36.chunk.js.map