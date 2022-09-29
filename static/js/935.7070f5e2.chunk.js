"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[935],{90935:function(e,t,i){i.d(t,{d:function(){return x},l:function(){return _},s:function(){return I}});var n=i(37762),r=i(60136),s=i(29388),a=i(15671),o=i(43144),h=i(23132),u=i(80175),c=i(77470),l=i(75610),d=i(36551),v=i(78311),p=i(14181),y=i(45414),f=i(44455),g=i(58687),m=function(){function e(){(0,a.Z)(this,e),this._extents=new h.ab({allocator:function(e){return e||(0,v.u)()}}),this._tmpExtent=(0,v.u)(),this._dirty=!1}return(0,o.Z)(e,[{key:"empty",get:function(){return 0===this._extents.length}},{key:"size",get:function(){return this._extents.length}},{key:"clear",value:function(){this._extents.clear()}},{key:"add",value:function(e){this._contains(e)||(this._removeContained(e),(0,v.a)(this._extents.pushNew(),e),this._dirty=!0)}},{key:"pop",value:function(){return this._dirty&&this._mergeTight(),this._extents.pop()}},{key:"merge",value:function(e){return this._mergeTight(e),e.hasProgressed}},{key:"_mergeTight",value:function(){for(var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p.w,i=this._extents,n=new Set,r=0;r!==i.length;){i.sort((function(e,t){return e[0]-t[0]})),r=i.length,n.clear();for(var s=function(r){if(t.done)return{v:void 0};for(var s=i.getItemAt(r),a=r+1;a<i.length;++a){var o=i.getItemAt(a);if(o[0]>=s[2])break;n.add(o)}n.forEach((function(r){if(s!==r)if(r[2]<=s[0])n.delete(r);else{var a=(0,v.y)(s),o=(0,v.y)(r),h=e._tmpExtent;(0,v.h)(s,r,h);var u=a+o;((0,v.y)(h)-u)/u<.05&&((0,v.a)(s,h),n.delete(r),i.remove(r),t.madeProgress())}})),n.add(s)},a=0;a<i.length;++a){var o=s(a);if("object"===typeof o)return o.v}}this._dirty=!1}},{key:"_contains",value:function(e){return this._extents.some((function(t){return(0,v.R)(t,e)}))}},{key:"_removeContained",value:function(e){this._extents.filterInPlace((function(t){return!(0,v.R)(e,t)}))}},{key:"test",get:function(){var e=this;return{containsPoint:function(t){return e._extents.some((function(e){return(0,v.b)(e,t)}))}}}}]),e}(),S=function(e){(0,r.Z)(i,e);var t=(0,s.Z)(i);function i(){var e;return(0,a.Z)(this,i),(e=t.apply(this,arguments)).dirtyExtents=new m,e.globalDirty=!1,e.averageExtentUpdateSize=0,e.dirtyGraphicsSet=new Set,e.handles=new c.u,e.updateElevation=!1,e.graphicsCoreOwner=null,e.graphicsCore=null,e.events=new u.n,e}return(0,o.Z)(i,[{key:"setup",value:function(e,t,i,n){var r=this;this.graphicsCoreOwner=e,this.queryGraphicUIDsInExtent=t,this.graphicsCore=i,this.elevationProvider=n;var s=this.graphicsCoreOwner.view.resourceController.scheduler;this.handles.add([n.on("elevation-change",(function(e){return r._elevationChanged(e)})),(0,d.l)((function(){return r.graphicsCoreOwner.suspended}),(function(){return r._suspendedChange()})),s.registerTask(p.L.ELEVATION_ALIGNMENT,this)])}},{key:"destroy",value:function(){this.dirtyGraphicsSet.clear(),this.handles.destroy(),this.handles=null,this.graphicsCoreOwner=null,this.graphicsCore=null,this.queryGraphicUIDsInExtent=null}},{key:"clear",value:function(){this.dirtyGraphicsSet.clear(),this.notifyChange("updating")}},{key:"_suspendedChange",value:function(){!0===this.graphicsCoreOwner.suspended?this.updateElevation=!1:!1===this.graphicsCoreOwner.suspended&&this.updateElevation&&(this.globalDirty=!0,this.notifyChange("updating"))}},{key:"elevationInfoChange",value:function(){this.globalDirty=!0,this.notifyChange("updating")}},{key:"updating",get:function(){return this.running}},{key:"running",get:function(){return this.dirtyGraphicsSet.size>0||this.dirtyExtents&&!this.dirtyExtents.empty||this.globalDirty}},{key:"updatingRemaining",get:function(){return this.dirtyGraphicsSet.size+this.dirtyExtents.size*this.averageExtentUpdateSize}},{key:"runTask",value:function(e){var t=this;for(this.globalDirty&&(this._markAllGraphicsElevationDirty(),this.globalDirty=!1,e.madeProgress()),e.run((function(){return t.dirtyExtents.merge(e)}));this.running&&!e.done;)this._updateDirtyGraphics(e),this._updateDirtyExtents(e);this.graphicsCoreOwner.view.deconflictor.setDirty(),this.notifyChange("updating")}},{key:"_updateDirtyGraphics",value:function(e){var t,i=this.graphicsCoreOwner.view.renderCoordsHelper,r=this.graphicsCore.effectiveUpdatePolicy===y.o.ASYNC,s=(0,n.Z)(this.dirtyGraphicsSet.keys());try{for(s.s();!(t=s.n()).done;){var a=t.value,o=this.graphicsCore.getGraphics3DGraphicById(a);if(this.dirtyGraphicsSet.delete(a),(0,l.r)(o)&&(o.alignWithElevation(this.elevationProvider,i,r),e.madeProgress()),e.done)return}}catch(h){s.e(h)}finally{s.f()}}},{key:"_updateDirtyExtents",value:function(e){for(var t=this;!this.dirtyExtents.empty&&!e.done;){var i=this.dirtyExtents.pop(),n=this.elevationProvider.spatialReference;this.events.emit("invalidate-elevation",{extent:i,spatialReference:n});var r=this.dirtyGraphicsSet.size;this.queryGraphicUIDsInExtent(i,n,(function(e){var i=t.graphicsCore.getGraphics3DGraphicById(e);(0,l.r)(i)&&i.needsElevationUpdates()&&t.dirtyGraphicsSet.add(e)})),this.averageExtentUpdateSize=.1*(this.dirtyGraphicsSet.size-r)+.9*this.averageExtentUpdateSize,e.madeProgress()}}},{key:"_markAllGraphicsElevationDirty",value:function(){var e=this;this.dirtyExtents.clear(),this.dirtyGraphicsSet.clear(),this.graphicsCore.graphics3DGraphics.forEach((function(t,i){return e.dirtyGraphicsSet.add(i)}))}},{key:"_elevationChanged",value:function(e){if("scene"!==e.context||this.graphicsCore.layer.elevationInfo&&"relative-to-scene"===this.graphicsCore.layer.elevationInfo.mode){var t=e.extent,i=e.spatialReference;if(this.graphicsCoreOwner.suspended){if(!this.updateElevation){var n=this.graphicsCore.computedExtent;n&&t[2]>n.xmin&&t[0]<n.xmax&&t[3]>n.ymin&&t[1]<n.ymax&&(this.updateElevation=!0)}this.events.emit("invalidate-elevation",{extent:t,spatialReference:i})}else t[0]===-1/0?this.globalDirty=!0:this.dirtyExtents.add(t),this.notifyChange("updating")}}}]),i}(h.y);(0,h.e)([(0,h.d)({readOnly:!0})],S.prototype,"updating",null),(0,h.e)([(0,h.d)({readOnly:!0})],S.prototype,"updatingRemaining",null);var _=S=(0,h.e)([(0,h.n)("esri.views.3d.layers.graphics.Graphics3DElevationAlignment")],S),b=function(e){(0,r.Z)(i,e);var t=(0,s.Z)(i);function i(){var e;return(0,a.Z)(this,i),(e=t.apply(this,arguments)).suspended=!1,e.extent=null,e.extentIntersectionDirty=!0,e._isVisibleBelowSurface=!1,e.handles=new c.u,e.graphicsCoreOwner=null,e.updating=!0,e}return(0,o.Z)(i,[{key:"setup",value:function(e){var t=this;this.graphicsCoreOwner=e,this.extentIntersection=new g._({renderCoordsHelper:e.view.renderCoordsHelper});var i=e.view,n=i.basemapTerrain,r=i.resourceController.scheduler;this.handles.add([i.on("resize",(function(){return t._viewChange()})),(0,d.l)((function(){return i.state.camera}),(function(){return t._viewChange()}),d.U),r.registerTask(p.L.FRUSTUM_VISIBILITY,this),n.on("elevation-bounds-change",(function(){return t._elevationBoundsChange()}))]),"local"===i.viewingMode?this.isVisibleBelowSurface=!0:this.handles.add([(0,d.l)((function(){var e,t,r;return[n.baseOpacity,n.wireframe,null===(e=i.map)||void 0===e||null===(t=e.ground)||void 0===t||null===(r=t.navigationConstraint)||void 0===r?void 0:r.type]}),(function(){return t._updateIsVisibleBelowSurface()}),d.h)])}},{key:"destroy",value:function(){this.graphicsCoreOwner=null,this.extent=null,this.extentIntersection=null,this.handles&&(this.handles.destroy(),this.handles=null)}},{key:"_setDirty",value:function(){this.updating||this._set("updating",!0)}},{key:"setExtent",value:function(e){this.extent=e,this.extentIntersectionDirty=!0,this._setDirty()}},{key:"_viewChange",value:function(){this._setDirty()}},{key:"_elevationBoundsChange",value:function(){this._setDirty(),this.extentIntersectionDirty=!0}},{key:"isVisibleBelowSurface",set:function(e){this._isVisibleBelowSurface=e,this._setDirty(),this.extentIntersectionDirty=!0}},{key:"_updateIsVisibleBelowSurface",value:function(){var e=this.graphicsCoreOwner.view,t=e.basemapTerrain,i="local"===e.viewingMode,n=e.map.ground&&e.map.ground.navigationConstraint&&"none"===e.map.ground.navigationConstraint.type;this.isVisibleBelowSurface=i||!t.opaque||n}},{key:"_updateExtentIntersection",value:function(){if(this.extentIntersectionDirty){this.extentIntersectionDirty=!1;var e,t=this.graphicsCoreOwner.view;if(this._isVisibleBelowSurface)e=-.3*(0,f.p)(t.spatialReference).radius;else{var i=t.basemapTerrain.elevationBounds,n=i.min,r=i.max;e=n-Math.max(1,(r-n)*(1.2-1))}this.extentIntersection.update(this.extent,t.spatialReference,e)}}},{key:"running",get:function(){return this.updating}},{key:"runTask",value:function(){if(this._set("updating",!1),this.extent){this._updateExtentIntersection();var e=this.graphicsCoreOwner.view.frustum,t=(0,f.p)(this.graphicsCoreOwner.view.spatialReference).radius;this._set("suspended",!this.extentIntersection.isVisibleInFrustum(e,t))}else this._set("suspended",!1)}}]),i}(h.y);(0,h.e)([(0,h.d)({readOnly:!0})],b.prototype,"suspended",void 0),(0,h.e)([(0,h.d)({readOnly:!0})],b.prototype,"updating",void 0);var k,x=b=(0,h.e)([(0,h.n)("esri.views.3d.layers.graphics.Graphics3DFrustumVisibility")],b);!function(e){e[e.Object=0]="Object",e[e.RenderGeometry=1]="RenderGeometry",e[e.External=2]="External",e[e.COUNT=3]="COUNT"}(k||(k={}));var w=function(){function e(){(0,a.Z)(this,e),this.items=[]}return(0,o.Z)(e,[{key:"addObject",value:function(e,t){this.items.push({type:k.Object,objectStateId:t,object:e})}},{key:"addRenderGeometry",value:function(e,t,i){this.items.push({type:k.RenderGeometry,objectStateId:t,renderGeometry:e,owner:i})}},{key:"addExternal",value:function(e,t){this.items.push({type:k.External,objectStateId:t,remove:e})}},{key:"remove",value:function(e){for(var t=this.items.length-1;t>=0;--t){var i=this.items[t];i.objectStateId===e&&(this._removeObjectStateItem(i),this.items.splice(t,1))}}},{key:"removeObject",value:function(e){for(var t=this.items.length-1;t>=0;--t){var i=this.items[t];i.type===k.Object&&i.object===e&&(this._removeObjectStateItem(i),this.items.splice(t,1))}}},{key:"removeRenderGeometry",value:function(e){for(var t=this.items.length-1;t>=0;--t){var i=this.items[t];i.type===k.RenderGeometry&&i.renderGeometry===e&&(this._removeObjectStateItem(i),this.items.splice(t,1))}}},{key:"removeAll",value:function(){var e=this;this.items.forEach((function(t){e._removeObjectStateItem(t)})),this.items=[]}},{key:"_removeObjectStateItem",value:function(e){switch(e.type){case k.Object:e.objectStateId.channel===y.u.Highlight?e.object.removeHighlight(e.objectStateId):e.objectStateId.channel===y.u.MaskOccludee&&e.object.removeOcclude(e.objectStateId);break;case k.RenderGeometry:e.owner.removeRenderGeometryObjectState(e.renderGeometry,e.objectStateId);break;case k.External:e.remove(e.objectStateId)}}}]),e}(),C=function(){function e(t,i){(0,a.Z)(this,e),this.stateType=t,this.objectIdField=i,this.objectStateSet=new w,this.ids=new Set,this.paused=!1}return(0,o.Z)(e,[{key:"hasGraphic",value:function(e){if(this.objectIdField){var t=e.graphic.attributes[this.objectIdField];return this.ids.has(t)}return this.ids.has(e.graphic.uid)}}]),e}(),I=function(){function e(t){(0,a.Z)(this,e),this._graphicsCore=t,this._stateSets=new Array}return(0,o.Z)(e,[{key:"destroy",value:function(){this._stateSets&&this._stateSets.forEach((function(e){return e.objectStateSet.removeAll()})),this._stateSets=null}},{key:"acquireSet",value:function(e,t){var i=this,n=new C(e,t);this._stateSets.push(n);var r=(0,h.g)((function(){return i.releaseSet(n)}));return{set:n,handle:r}}},{key:"releaseSet",value:function(e){e.objectStateSet.removeAll();var t=this._stateSets?this._stateSets.indexOf(e):-1;-1!==t&&this._stateSets.splice(t,1)}},{key:"_addObjectStateSet",value:function(e,t){e.addObjectStateSet(t.stateType,t.objectStateSet)}},{key:"_removeObjectStateSet",value:function(e,t){e.removeObjectState(t.objectStateSet)}},{key:"setUid",value:function(e,t){e.ids.add(t);var i=this._graphicsCore.graphics3DGraphics.get(t);i&&this._addObjectStateSet(i,e)}},{key:"setUids",value:function(e,t){var i=this;t.forEach((function(t){return i.setUid(e,t)}))}},{key:"setObjectIds",value:function(e,t){t.forEach((function(t){return e.ids.add(t)})),this._initializeSet(e)}},{key:"addGraphic",value:function(e){var t=this;this._stateSets.forEach((function(i){!i.paused&&i.hasGraphic(e)&&t._addObjectStateSet(e,i)}))}},{key:"removeGraphic",value:function(e){var t=this;this._stateSets.forEach((function(i){i.hasGraphic(e)&&t._removeObjectStateSet(e,i)}))}},{key:"allGraphicsDeleted",value:function(){this._stateSets&&this._stateSets.forEach((function(e){return e.objectStateSet.removeAll()}))}},{key:"_initializeSet",value:function(e){var t=this,i=this._graphicsCore.graphics3DGraphics;e.objectIdField?i.forEach((function(i){i&&e.hasGraphic(i)&&t._addObjectStateSet(i,e)})):e.ids.forEach((function(n){var r=i.get(n);r&&t._addObjectStateSet(r,e)}))}},{key:"test",get:function(){return{states:this._stateSets}}}]),e}()}}]);
//# sourceMappingURL=935.7070f5e2.chunk.js.map