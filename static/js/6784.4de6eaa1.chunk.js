"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[6784],{26784:function(e,t,r){r.d(t,{c:function(){return k},l:function(){return S},r:function(){return x},u:function(){return C}});var n=r(60136),a=r(29388),i=r(37762),s=r(74165),u=r(15861),d=r(15671),o=r(43144),c=r(1413),l=r(57686),h=r(40133),f=r(50165),y=r(22494),_=r(9330),v=r(89354),p=r(4483),g=r(77639);var I=r.e(9734).then(r.bind(r,49734)),k=function(){function e(t,r){(0,d.Z)(this,e),this._canCacheExpressionValue=!1,this._sourceInfo=t,this._storage=r,this._bitsets={computed:r.getBitset(r.createBitset())}}return(0,o.Z)(e,[{key:"storage",get:function(){return this._storage}},{key:"invalidate",value:function(){this._bitsets.computed.clear()}},{key:"updateSchema",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(t,r){var n,a,i,u,d,o;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=(0,v.m)(this._schema,r),this._schema=r,r&&!(0,f.t)(n)&&(0,v.a)(n,"attributes")){e.next=3;break}return e.abrupt("return");case 3:(0,f.c)("esri-2d-update-debug")&&console.debug("Applying Update - Store:",n),this._bitsets.computed.clear(),t.targets[r.name]=!0,a=r.attributes,i=[],u=[],e.t0=(0,s.Z)().keys(a);case 6:if((e.t1=e.t0()).done){e.next=20;break}d=e.t1.value,o=a[d],e.t2=o.type,e.next="field"===e.t2?12:"expression"===e.t2?13:"label-expression"===e.t2?15:"statistic"===e.t2?17:18;break;case 12:return e.abrupt("break",18);case 13:return i.push(this._createArcadeComputedField(o)),e.abrupt("break",18);case 15:return i.push(this._createLabelArcadeComputedField(o)),e.abrupt("break",18);case 17:u.push(o);case 18:e.next=6;break;case 20:return e.next=22,Promise.all(i);case 22:this._computedFields=e.sent,this._canCacheExpressionValue=!this._computedFields.some((function(e){return"expression"===e.type&&e.expression.referencesScale()})),this._statisticFields=u;case 25:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"setComputedAttributes",value:function(e,t,r,n){var a=this._bitsets.computed;if(!this._canCacheExpressionValue||!a.has(r)){a.set(r);var s,u=(0,i.Z)(this._computedFields);try{for(u.s();!(s=u.n()).done;){var d=s.value,o=this._evaluateField(t,d,n);switch(d.resultType){case"numeric":e.setComputedNumericAtIndex(r,d.fieldIndex,o);break;case"string":e.setComputedStringAtIndex(r,d.fieldIndex,o)}}}catch(c){u.e(c)}finally{u.f()}}}},{key:"_createArcadeComputedField",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(t){var r,n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this._sourceInfo.spatialReference,n=this._sourceInfo.fieldsIndex,e.t0=c.Z,e.t1=(0,c.Z)({},t),e.t2={},e.next=6,(0,p.i)(t.valueExpression,r,n);case 6:return e.t3=e.sent,e.t4={expression:e.t3},e.abrupt("return",(0,e.t0)(e.t1,e.t2,e.t4));case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_createLabelArcadeComputedField",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(t){var r,n,a,i,u;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this._sourceInfo.spatialReference,n=this._sourceInfo.fieldsIndex,e.next=4,I;case 4:return a=e.sent,i=a.createLabelFunction,e.next=8,i(t.label,n,r);case 8:return u=e.sent,e.abrupt("return",(0,c.Z)((0,c.Z)({},t),{},{builder:u}));case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_evaluateField",value:function(e,t,r){switch(t.type){case"label-expression":var n=e.readArcadeFeature();return t.builder.evaluate(n)||"";case"expression":return function(e,t,r){e.referencesGeometry();var n=t.readArcadeFeature();try{return e.evaluate((0,c.Z)((0,c.Z)({},r),{},{$feature:n}))}catch(I){return f.s.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",I),null}}(t.expression,e,{$view:{scale:r}})}}}]),e}(),x=function(e){(0,n.Z)(r,e);var t=(0,a.Z)(r);function r(e,n){var a;return(0,d.Z)(this,r),(a=t.call(this,g.A.createInstance(),e.fullSchema()))._currentIndex=-1,a._reader=e,a._indices=n,a}return(0,o.Z)(r,[{key:"hasNext",get:function(){return this._currentIndex+1<this._indices.length}},{key:"getSize",value:function(){return this._indices.length}},{key:"getCursor",value:function(){return this.copy()}},{key:"copy",value:function(){var e=new r(this._reader.copy(),this._indices);return e._currentIndex=this._currentIndex,e}},{key:"next",value:function(){for(;this._nextIndex()&&!this._reader._getExists(););return this._currentIndex<this._indices.length}},{key:"_nextIndex",value:function(){return++this._currentIndex<this._indices.length&&(this._reader.setIndex(this._indices[this._currentIndex]),!0)}},{key:"setArcadeSpatialReference",value:function(e){this._reader.setArcadeSpatialReference(e)}},{key:"attachStorage",value:function(e){this._reader.attachStorage(e)}},{key:"geometryType",get:function(){return this._reader.geometryType}},{key:"hasFeatures",get:function(){return this._reader.hasFeatures}},{key:"exceededTransferLimit",get:function(){return this._reader.exceededTransferLimit}},{key:"hasZ",get:function(){return this._reader.hasZ}},{key:"hasM",get:function(){return this._reader.hasM}},{key:"getStorage",value:function(){return this._reader.getStorage()}},{key:"getComputedNumeric",value:function(e){return this._reader.getComputedNumericAtIndex(0)}},{key:"setComputedNumeric",value:function(e,t){return this._reader.setComputedNumericAtIndex(t,0)}},{key:"getComputedString",value:function(e){return this._reader.getComputedStringAtIndex(0)}},{key:"setComputedString",value:function(e,t){return this._reader.setComputedStringAtIndex(0,t)}},{key:"getComputedNumericAtIndex",value:function(e){return this._reader.getComputedNumericAtIndex(e)}},{key:"setComputedNumericAtIndex",value:function(e,t){this._reader.setComputedNumericAtIndex(e,t)}},{key:"getComputedStringAtIndex",value:function(e){return this._reader.getComputedStringAtIndex(e)}},{key:"setComputedStringAtIndex",value:function(e,t){return this._reader.setComputedStringAtIndex(e,t)}},{key:"transform",value:function(e,t,r,n){var a=this.copy();return a._reader=this._reader.transform(e,t,r,n),a}},{key:"readAttribute",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this._reader.readAttribute(e,t)}},{key:"readAttributes",value:function(){return this._reader.readAttributes()}},{key:"joinAttributes",value:function(e){return this._reader.joinAttributes(e)}},{key:"readArcadeFeature",value:function(){return this._reader.readArcadeFeature()}},{key:"geometry",value:function(){return this._reader.geometry()}},{key:"field",value:function(e){return this.readAttribute(e,!0)}},{key:"hasField",value:function(e){return this._reader.hasField(e)}},{key:"setField",value:function(e,t){return this._reader.setField(e,t)}},{key:"keys",value:function(){return this._reader.keys()}},{key:"castToText",value:function(){return this._reader.castToText()}},{key:"getQuantizationTransform",value:function(){return this._reader.getQuantizationTransform()}},{key:"getFieldNames",value:function(){return this._reader.getFieldNames()}},{key:"getAttributeHash",value:function(){return this._reader.getAttributeHash()}},{key:"getObjectId",value:function(){return this._reader.getObjectId()}},{key:"getDisplayId",value:function(){return this._reader.getDisplayId()}},{key:"setDisplayId",value:function(e){return this._reader.setDisplayId(e)}},{key:"getGroupId",value:function(){return this._reader.getGroupId()}},{key:"setGroupId",value:function(e){return this._reader.setGroupId(e)}},{key:"getXHydrated",value:function(){return this._reader.getXHydrated()}},{key:"getYHydrated",value:function(){return this._reader.getYHydrated()}},{key:"getX",value:function(){return this._reader.getX()}},{key:"getY",value:function(){return this._reader.getY()}},{key:"setIndex",value:function(e){return this._reader.setIndex(e)}},{key:"getIndex",value:function(){return this._reader.getIndex()}},{key:"readLegacyFeature",value:function(){return this._reader.readLegacyFeature()}},{key:"readOptimizedFeature",value:function(){return this._reader.readOptimizedFeature()}},{key:"readLegacyPointGeometry",value:function(){return this._reader.readLegacyPointGeometry()}},{key:"readLegacyGeometry",value:function(){return this._reader.readLegacyGeometry()}},{key:"readLegacyCentroid",value:function(){return this._reader.readLegacyCentroid()}},{key:"readGeometryArea",value:function(){return this._reader.readGeometryArea()}},{key:"readUnquantizedGeometry",value:function(){return this._reader.readUnquantizedGeometry()}},{key:"readHydratedGeometry",value:function(){return this._reader.readHydratedGeometry()}},{key:"readGeometry",value:function(){return this._reader.readGeometry()}},{key:"readCentroid",value:function(){return this._reader.readCentroid()}},{key:"_readAttribute",value:function(e,t){throw new Error("Error: Should not be called. Underlying _reader should be used instead")}},{key:"_readAttributes",value:function(){throw new Error("Error: Should not be called. Underlying _reader should be used instead")}}],[{key:"from",value:function(e,t){return new r(e.copy(),t)}}]),r}(g.A);function m(e,t){return e<<16|t}function b(e){return(4294901760&e)>>>16}function A(e){return 65535&e}var C={getObjectId:function(e){return e.getObjectId()},getAttributes:function(e){return e.readAttributes()},getAttribute:function(e,t){return e.readAttribute(t)},cloneWithGeometry:function(e,t){return e},getGeometry:function(e){return e.readHydratedGeometry()},getCentroid:function(e,t){return e.readCentroid()}},S=function(e){(0,n.Z)(r,e);var t=(0,a.Z)(r);function r(e,n,a){var i;return(0,d.Z)(this,r),(i=t.call(this,e,n)).featureAdapter=C,i.events=new h.n,i._featureSetsByInstance=new Map,i._objectIdToDisplayId=new Map,i._spatialIndexInvalid=!0,i._indexSearchCache=new l.s(50),i._index=(0,y.i)(9,(function(e){return{minX:i._storage.getXMin(e),minY:i._storage.getYMin(e),maxX:i._storage.getXMax(e),maxY:i._storage.getYMax(e)}})),i.mode=a,i}return(0,o.Z)(r,[{key:"storeStatistics",get:function(){var e=0,t=0,r=0;return this.forEach((function(n){var a=n.readGeometry();a&&(t+=a.isPoint?1:a.lengths.reduce((function(e,t){return e+t}),0),r+=a.isPoint?1:a.lengths.length,e+=1)})),{featureCount:e,vertexCount:t,ringCount:r}}},{key:"hasInstance",value:function(e){return this._featureSetsByInstance.has(e)}},{key:"onTileData",value:function(e,t){if((0,f.t)(t.addOrUpdate))return t;if(t.addOrUpdate.attachStorage(this._storage),"snapshot"===this.mode){for(var r=t.addOrUpdate.getCursor();r.next();){var n=r.getDisplayId();this.setComputedAttributes(this._storage,r,n,e.scale)}return t}this._featureSetsByInstance.set(t.addOrUpdate.instance,t.addOrUpdate);for(var a=t.addOrUpdate.getCursor();a.next();)this._insertFeature(a,e.scale);return this._spatialIndexInvalid=!0,this.events.emit("changed"),t}},{key:"search",value:function(e){var t=this;this._rebuildIndex();var r=e.id,n=this._indexSearchCache.find((function(e){return e.tileId===r}));if((0,f.r)(n))return n.readers;var a,s=new Map,u=this._searchIndex(e.bounds),d=[],o=(0,i.Z)(u);try{for(o.s();!(a=o.n()).done;){var c=a.value,l=this._storage.getInstanceId(c),h=b(l),y=A(l);s.has(h)||s.set(h,[]),s.get(h).push(y)}}catch(_){o.e(_)}finally{o.f()}return s.forEach((function(e,r){var n=t._featureSetsByInstance.get(r);d.push(x.from(n,e))})),this._indexSearchCache.enqueue({tileId:r,readers:d}),d}},{key:"insert",value:function(e){for(var t=e.getCursor(),r=this._storage;t.next();){var n,a=m(t.instance,t.getIndex()),i=t.getObjectId(),s=null!==(n=this._objectIdToDisplayId.get(i))&&void 0!==n?n:this._storage.createDisplayId();t.setDisplayId(s),r.setInstanceId(s,a),this._objectIdToDisplayId.set(i,s)}this._featureSetsByInstance.set(e.instance,e),this._spatialIndexInvalid=!0}},{key:"remove",value:function(e){var t=this._objectIdToDisplayId.get(e);if(t){var r=this._storage.getInstanceId(t),n=A(r),a=b(r),i=this._featureSetsByInstance.get(a);this._objectIdToDisplayId.delete(e),this._storage.releaseDisplayId(t),i.removeAtIndex(n),i.isEmpty&&this._featureSetsByInstance.delete(a),this._spatialIndexInvalid=!0}}},{key:"toArray",value:function(){var e=new Array;return this.forEach((function(t){return e.push(t)})),e}},{key:"forEach",value:function(e){var t=this;this._objectIdToDisplayId.forEach((function(r){var n=t._storage.getInstanceId(r),a=t._lookupFeature(n);e(a)}))}},{key:"forEachUnsafe",value:function(e){var t=this;this._objectIdToDisplayId.forEach((function(r){var n=t._storage.getInstanceId(r),a=b(n),i=A(n),s=t._getFeatureSet(a);s.setIndex(i),e(s)}))}},{key:"forEachInBounds",value:function(e,t){var r,n=this._searchIndex(e),a=(0,i.Z)(n);try{for(a.s();!(r=a.n()).done;){var s=r.value,u=this.lookupFeatureByDisplayId(s,this._storage);t((0,f.g)(u))}}catch(d){a.e(d)}finally{a.f()}}},{key:"forEachBounds",value:function(e,t,r){this._rebuildIndex();var n,a=[0,0,0,0],s=(0,i.Z)(e);try{for(s.s();!(n=s.n()).done;){var u=n.value;if(u.readGeometry()){var d=u.getDisplayId();a[0]=this._storage.getXMin(d),a[1]=this._storage.getYMin(d),a[2]=this._storage.getXMax(d),a[3]=this._storage.getYMax(d),t((0,_.O)(r,a))}}}catch(o){s.e(o)}finally{s.f()}}},{key:"sweepFeatures",value:function(e,t,r){var n=this;this._spatialIndexInvalid=!0,this._objectIdToDisplayId.forEach((function(a,i){e.has(a)||(t.releaseDisplayId(a),r&&r.unsetAttributeData(a),n._objectIdToDisplayId.delete(i))})),this.events.emit("changed")}},{key:"sweepFeatureSets",value:function(e){var t=this;this._spatialIndexInvalid=!0,this._featureSetsByInstance.forEach((function(r,n){e.has(n)||t._featureSetsByInstance.delete(n)}))}},{key:"lookupObjectId",value:function(e,t){var r=this.lookupFeatureByDisplayId(e,t);return(0,f.t)(r)?null:r.getObjectId()}},{key:"lookupDisplayId",value:function(e){return this._objectIdToDisplayId.get(e)}},{key:"lookupFeatureByDisplayId",value:function(e,t){var r=t.getInstanceId(e);return this._lookupFeature(r)}},{key:"lookupByDisplayIdUnsafe",value:function(e){var t=this._storage.getInstanceId(e),r=b(t),n=A(t),a=this._getFeatureSet(r);return a?(a.setIndex(n),a):null}},{key:"_insertFeature",value:function(e,t){var r=this._storage,n=e.getObjectId(),a=m(e.instance,e.getIndex());r.getInstanceId(e.getDisplayId());var i=this._objectIdToDisplayId.get(n);i||(i=r.createDisplayId(),this._objectIdToDisplayId.set(n,i),this._spatialIndexInvalid=!0),e.setDisplayId(i),r.setInstanceId(i,a),this.setComputedAttributes(r,e,i,t)}},{key:"_searchIndex",value:function(e){this._rebuildIndex();var t={minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]};return this._index.search(t)}},{key:"_rebuildIndex",value:function(){var e=this;if(this._spatialIndexInvalid){var t=[];"snapshot"===this.mode?this._featureSetsByInstance.forEach((function(r){for(var n=r.getCursor();n.next();){var a=n.getDisplayId();e._storage.setBounds(a,n)&&t.push(a)}})):this._objectIdToDisplayId.forEach((function(r){var n=e._storage.getInstanceId(r);e._storage.setBounds(r,e._lookupFeature(n))&&t.push(r)})),this._index.clear(),this._index.load(t),this._indexSearchCache.clear(),this._spatialIndexInvalid=!1}}},{key:"_lookupFeature",value:function(e){var t=b(e),r=this._getFeatureSet(t);if(!r)return null;var n=r.getCursor(),a=A(e);return n.setIndex(a),n}},{key:"_getFeatureSet",value:function(e){return this._featureSetsByInstance.get(e)}}]),r}(k)}}]);
//# sourceMappingURL=6784.4de6eaa1.chunk.js.map