"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[5555],{72355:function(e,t,r){r.d(t,{p:function(){return d}});var n=r(15671),i=r(43144),a=r(60136),s=r(29388),o=r(50165),u=r(92637),l=r(35691),c=o.s.getLogger("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView"),d=function(e){var t=function(e){(0,a.Z)(r,e);var t=(0,s.Z)(r);function r(){var e;return(0,n.Z)(this,r),(e=t.apply(this,arguments))._definitionExpressionErrors=0,e._maxDefinitionExpressionErrors=20,e.logError=function(t){e._definitionExpressionErrors<e._maxDefinitionExpressionErrors&&c.error("Error while evaluating definitionExpression: "+t),e._definitionExpressionErrors++,e._definitionExpressionErrors===e._maxDefinitionExpressionErrors&&c.error("Further errors are ignored")},e}return(0,i.Z)(r,[{key:"parsedDefinitionExpression",get:function(){if(!this.i3slayer||!this.i3slayer.definitionExpression)return null;try{var e=u.WhereClause.create(this.i3slayer.definitionExpression,this.i3slayer.fieldsIndex);if(!e.isStandardized)return c.error("definitionExpression is using non standard function"),null;var t=[],r=e.fieldNames;return(0,l.J)(r,this.i3slayer.fields,{missingFields:t}),t.length>0?(c.error("definitionExpression references unknown fields: ".concat(t.join(", "))),null):(this._definitionExpressionErrors=0,e)}catch(e){return c.error("Failed to parse definitionExpression: "+e),null}}},{key:"definitionExpressionFields",get:function(){return this.parsedDefinitionExpression?this.parsedDefinitionExpression.fieldNames:null}},{key:"_evaluateClause",value:function(e,t){try{return e.testFeature(t)}catch(r){return this.logError(r),!1}}},{key:"_addDefinitionExpressionToQuery",value:function(e){if(!this.parsedDefinitionExpression)return e;var t=this.i3slayer.definitionExpression,r=e.clone();return r.where?r.where="(".concat(t,") AND (").concat(r.where,")"):r.where=t,r}}]),r}(e);return(0,o.e)([(0,o.d)()],t.prototype,"i3slayer",void 0),(0,o.e)([(0,o.d)({readOnly:!0})],t.prototype,"parsedDefinitionExpression",null),(0,o.e)([(0,o.d)({readOnly:!0})],t.prototype,"definitionExpressionFields",null),t=(0,o.e)([(0,o.n)("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView")],t),t}},29322:function(e,t,r){r.d(t,{C:function(){return C},f:function(){return Y},n:function(){return z},p:function(){return U}});var n=r(29439),i=r(74165),a=r(15861),s=r(37762),o=r(15671),u=r(43144),l=r(60136),c=r(29388),d=r(50165),f=(r(33530),r(2760)),p=r(73627),y=r(73428),h=r(92637),v=r(98643),g=r(9330),E=r(79146),m=r(77322),w=r(56389),b=r(35691),x=r(69738),k=r(96263),S=r(17704),F=r(82046),I=r(53089),_=r(13089),O=r(2326),R=r(40133),Z=r(3969),D=r(73552),j=d.s.getLogger("esri.views.3d.layers.i3s.I3SMeshViewFilter"),C=function(e){(0,l.Z)(n,e);var t=(0,c.Z)(n);function n(e){var r;return(0,o.Z)(this,n),(r=t.call(this,e))._projectionEngineLoaded=!1,r}return(0,u.Z)(n,[{key:"initialize",value:function(){var e=this;(0,p.j)((function(){var t;return(null===(t=(0,d.g)(e.viewFilter))||void 0===t?void 0:t.geometry)||(0,d.r)(e.layerFilter)})).then((function(){return e.loadAsyncModule(Promise.all([r.e(6549),r.e(942)]).then(r.bind(r,40942)).then((function(t){e.destroyed||(e._geometryEngine=t,e.applyFilters())})))}))}},{key:"sortedObjectIds",get:function(){if((0,d.t)(this.viewFilter)||(0,d.t)(this.viewFilter.objectIds))return null;var e=new Float64Array(this.viewFilter.objectIds);return e.sort(),e}},{key:"parsedWhereClause",get:function(){var e=(0,d.r)(this.viewFilter)?this.viewFilter.where:null;if((0,d.t)(e)||!e)return null;try{return h.WhereClause.create(e,this.layerFieldsIndex)}catch(t){j.error("Failed to parse filter where clause: ".concat(t))}return null}},{key:"addFilters",value:function(e,t,r,n){var i=this.sortedObjectIds;(0,d.r)(i)&&e.push((function(e){return(0,b.ad)(i,!0,e)})),this.addSqlFilter(e,this.parsedWhereClause);var a=this._layerMaskGeometries,s=this._geometryEngine;if((0,d.r)(a)&&(0,d.r)(this.layerFilter)&&(0,d.r)(s)){var o=this.layerFilter.spatialRelationship;e.push((function(e,i){return G(s,e,i,n,t,r,a,o)}))}var u=this._viewMaskGeometries;if((0,d.r)(u)&&(0,d.r)(this.viewFilter)&&(0,d.r)(s)){var l=this.viewFilter.spatialRelationship;e.push((function(e,i){return G(s,e,i,n,t,r,u,l)}))}}},{key:"isMBSGeometryVisible",value:function(e,t,r){var n=this._layerMaskGeometries,i=this._geometryEngine;if((0,d.r)(n)&&(0,d.r)(this.layerFilter)&&(0,d.r)(i)){var a=this.layerFilter.spatialRelationship,s=n[0].spatialReference||t;return(0,v.b)(e,r,L,s)?A(i,L,n,s,a):(j.warnOnce("SceneLayer.mask geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}var o=this._viewMaskGeometries;if((0,d.r)(o)&&(0,d.r)(this.viewFilter)&&(0,d.r)(i)){var u=this.viewFilter.spatialRelationship,l=o[0].spatialReference||t;return(0,v.b)(e,r,L,l)?A(i,L,o,l,u):(j.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}return!0}},{key:"parsedGeometry",get:function(){var e=this._viewMaskGeometries,t=this._layerMaskGeometries;return(0,d.t)(e)||(0,d.t)(t)?e||t:t.concat(e)}},{key:"_layerMaskGeometries",get:function(){var e=this.layerFilter;return(0,d.t)(e)||(0,d.t)(this._geometryEngine)?null:N(this._geometryEngine,e.geometry,e.spatialRelationship)}},{key:"_viewMaskGeometries",get:function(){var e=this;if((0,d.t)(this.viewFilter)||(0,d.t)(this._geometryEngine))return null;var t=this.viewFilter.geometry;if((0,d.t)(t))return null;var r=this.viewFilter,n=r.distance,i=r.units,a=this.viewFilter.spatialRelationship,s="mesh"===t.type?t.extent:t;if((0,d.t)(n)||0===n)return N(this._geometryEngine,s,a);var o=i||(0,y.Z)(s.spatialReference);if(s.spatialReference.isWGS84){var u=this._geometryEngine.geodesicBuffer(s,n,o);return N(this._geometryEngine,u,a)}var l=(0,m.M)(s,m.k.WGS84);if((0,d.r)(l)){var c=(0,m.M)(this._geometryEngine.geodesicBuffer(l,n,o),s.spatialReference);return N(this._geometryEngine,c,a)}if(!this._projectionEngineLoaded&&(this.loadAsyncModule((0,v.t)().then((function(){return e._projectionEngineLoaded=!0}))),!this._projectionEngineLoaded))return null;var f=null;try{f=(0,v.r)(s,m.k.WGS84)}catch(p){}if(f)try{f=(0,v.r)(this._geometryEngine.geodesicBuffer(f,n,o),s.spatialReference)}catch(p){f=null}return f||j.error("Filter by geodesic buffer (distance) unsupported, failed to project input geometry (".concat(s.spatialReference.wkid,") to WGS84.")),N(this._geometryEngine,f,a)}}],[{key:"checkSupport",value:function(e){return!(0,d.t)(e)&&(e.timeExtent?(j.warn("Filters with a timeExtent are not supported for mesh scene layers"),!1):!!function(e){return null!=e&&T.includes(e)}(e.spatialRelationship)||(j.warn("Filters with spatialRelationship other than ".concat(T.join(", ")," are not supported for mesh scene layers")),!1))}}]),n}(d.y);(0,d.e)([(0,d.d)()],C.prototype,"layerFilter",void 0),(0,d.e)([(0,d.d)({type:w.y})],C.prototype,"viewFilter",void 0),(0,d.e)([(0,d.d)()],C.prototype,"layerFieldsIndex",void 0),(0,d.e)([(0,d.d)()],C.prototype,"loadAsyncModule",void 0),(0,d.e)([(0,d.d)()],C.prototype,"applyFilters",void 0),(0,d.e)([(0,d.d)()],C.prototype,"addSqlFilter",void 0),(0,d.e)([(0,d.d)({readOnly:!0})],C.prototype,"sortedObjectIds",null),(0,d.e)([(0,d.d)({readOnly:!0})],C.prototype,"parsedWhereClause",null),(0,d.e)([(0,d.d)({readOnly:!0})],C.prototype,"parsedGeometry",null),(0,d.e)([(0,d.d)({readOnly:!0})],C.prototype,"_layerMaskGeometries",null),(0,d.e)([(0,d.d)({readOnly:!0})],C.prototype,"_viewMaskGeometries",null),(0,d.e)([(0,d.d)()],C.prototype,"_projectionEngineLoaded",void 0),(0,d.e)([(0,d.d)()],C.prototype,"_geometryEngine",void 0),C=(0,d.e)([(0,d.n)("esri.views.3d.layers.i3s.I3SMeshViewFilter")],C);var M,Q,T=["contains","intersects","disjoint"];function N(e,t,r){if((0,d.t)(t))return null;if("disjoint"===r&&"polygon"===t.type){var n=function(){for(var r=new Array(t.rings.length),n=0;n<t.rings.length;++n){var i=(0,E.o)(1/0,1/0,-1/0,-1/0);(0,E.x)(i,t.rings[n]),r[n]={type:"polygon",rings:[t.rings[n]],spatialReference:t.spatialReference,aabr:i}}r.sort((function(e,t){return e.aabr[0]-t.aabr[0]}));for(var a=new Set,s=new d.bl,o=function(t){for(var n=r[t],i=t+1;i<r.length;++i){var o=r[i];if(o.aabr[0]>=n.aabr[2])break;a.add(o)}a.forEach((function(t){if(n!==t)if(t.aabr[2]<=n.aabr[0])a.delete(t);else if(e.intersects(n,t)){n.rings=n.rings.concat(t.rings),(0,E.h)(n.aabr,t.aabr,n.aabr),delete n._geVersion,a.delete(t);var i=(0,d.bk)(r,t,r.length,s);r.splice(i,1)}})),a.add(n)},u=0;u<r.length;++u)o(u);for(var l=0,c=r;l<c.length;l++){delete c[l].aabr}return{v:r}}();if("object"===typeof n)return n.v}return[t]}function A(e,t,r,n,i){var a=J(e,t,n);return r.every((function(t){return P(e,t,a,i)!==M.DISCARD}))}function G(e,t,r,n,i,a,o,u){var l=o[0].spatialReference||i.spatialReference;if((0,v.b)(r.node.mbs,a,L,l)){var c,d=J(e,L,l),p=function(e,t,r,n,i){var a=t.renderSpatialReference,s=new Map,o={rings:[[[0,0,0],[0,0,0],[0,0,0],[0,0,0]]],hasZ:!1,hasM:!1,type:"polygon",spatialReference:r};o.rings[0][3]=o.rings[0][0];var u,l,c={indices:null,data:null,stride:0,startIndex:0,endIndex:0};switch(e){case"intersects":u=function(e,t,r){return e.intersects(t,r)?M.KEEP:M.TEST},l=V;break;case"contains":u=function(e,t,r){return e.contains(t,r)?M.TEST:M.DISCARD},l=V;break;default:u=function(e,t,r){return e.disjoint(t,r)?M.TEST:M.DISCARD},l=B}return{collection:n,object:i,type:e,maskSR:r,renderSR:a,aabbCache:s,triangle:o,positions:c,triangleTest:u,geometryTest:l}}(u,i,l,n,r.objectHandle),y=(0,s.Z)(o);try{var h=function(){var n=c.value;if(0===t.length)return{v:void 0};switch(P(e,n,d,u)){case M.DISCARD:return{v:void(t.length=0)};case M.KEEP:return"continue"}(0,b.a3)(t,r.featureIds,(function(t){return function(e,t,r,n){var i=n.collection,a=n.object,s=n.renderSR,o=n.maskSR,u=n.geometryTest,l=n.aabbCache,c=l.get(r);if(!c){var d=i.getObjectTransform(a);i.getComponentAabb(a,r,K);for(var p=[[K[0],K[1],0],[K[0],K[4],0],[K[3],K[4],0],[K[3],K[1],0]],y=0;y<4;++y)(0,f.O)(p[y],p[y],d.rotationScale),(0,f.u)(p[y],p[y],d.position),(0,v.B)(p[y],s,p[y],o);(c={rings:[p],hasZ:!1,hasM:!1,type:"polygon",spatialReference:o}).rings[0][4]=c.rings[0][0],l.set(r,c)}switch(u(e,t,c)){case M.DISCARD:return!1;case M.KEEP:return!0}var h=n.triangle,g=n.triangleTest,E=n.positions,m=h.rings[0][0],w=h.rings[0][1],b=h.rings[0][2],x=i.getObjectTransform(a);i.getComponentPositions(a,r,E);for(var k=E.indices,S=E.data,F=E.stride,I=E.startIndex,_=E.endIndex,O=I;O<_;O+=3){var R=F*k[O+0],Z=F*k[O+1],D=F*k[O+2];(0,f.f)(m,S[R+0],S[R+1],S[R+2]),(0,f.f)(w,S[Z+0],S[Z+1],S[Z+2]),(0,f.f)(b,S[D+0],S[D+1],S[D+2]),(0,f.O)(m,m,x.rotationScale),(0,f.O)(w,w,x.rotationScale),(0,f.O)(b,b,x.rotationScale),(0,f.u)(m,m,x.position),(0,f.u)(w,w,x.position),(0,f.u)(b,b,x.position),(0,v.B)(m,s,m,o),(0,v.B)(w,s,w,o),(0,v.B)(b,s,b,o);var j=w[0]-m[0],C=w[1]-m[1],Q=b[0]-m[0],T=b[1]-m[1];if(!(Math.abs(j*T-C*Q)<W))switch(delete h._geVersion,g(e,t,h)){case M.DISCARD:return!1;case M.KEEP:return!0}}return"intersects"!==n.type}(e,n,t,p)}))};for(y.s();!(c=y.n()).done;){var g=h();if("continue"!==g&&"object"===typeof g)return g.v}}catch(E){y.e(E)}finally{y.f()}}else j.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter")}(Q=M||(M={}))[Q.KEEP=0]="KEEP",Q[Q.DISCARD=1]="DISCARD",Q[Q.TEST=2]="TEST";var L=[0,0,0,0];function J(e,t,r){var n={x:t[0],y:t[1],hasZ:!1,hasM:!1,type:"point",spatialReference:r},i=!r.isWGS84&&!r.isWebMercator,a=Number.isNaN(t[3])?0:(0,f.o)(t[3],0,2*m.s.radius),s=i?e.buffer(n,a,1):e.geodesicBuffer(n,a,1);return s.type="polygon",s}function P(e,t,r,n){switch(n){case"intersects":case"contains":return V(e,t,r);case"disjoint":return B(e,t,r)}}function V(e,t,r){return e.intersects(t,r)?e.contains(t,r)?M.KEEP:M.TEST:M.DISCARD}function B(e,t,r){return e.intersects(t,r)?e.contains(t,r)?M.DISCARD:M.TEST:M.KEEP}var W=Math.pow(2,-32);var K=(0,g.a)(),q=S.Y,U=function(e){(0,l.Z)(r,e);var t=(0,c.Z)(r);function r(e){var n;return(0,o.Z)(this,r),(n=t.call(this,e))._dataQueryEngineInstance=null,n._handles=new x.u,n}return(0,u.Z)(r,[{key:"defaultQueryJSON",get:function(){return new I.b({outSpatialReference:this.spatialReference}).toJSON()}},{key:"dataQueryEngine",get:function(){return this._ensureDataQueryEngine()}},{key:"initialize",value:function(){var e=this;this._handles.add(this.layerView.on("visible-geometry-changed",(function(){return e.spatialIndex.events.emit("changed")})))}},{key:"destroy",value:function(){this._dataQueryEngineInstance&&(this._dataQueryEngineInstance.destroy(),this._dataQueryEngineInstance=null),this._handles&&(this._handles.destroy(),this._handles=null),this._set("layerView",null)}},{key:"executeQueryForCount",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t,r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.dataQueryEngine.executeQueryForCount(this._ensureQueryJSON(t),r));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"executeQueryForExtent",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t,r){var n,a,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.dataQueryEngine.executeQueryForExtent(this._ensureQueryJSON(t),r);case 2:return n=e.sent,a=n.count,s=n.extent,e.abrupt("return",{count:a,extent:k.M.fromJSON(s)});case 6:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"executeQueryForIds",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t,r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.dataQueryEngine.executeQueryForIds(this._ensureQueryJSON(t),r));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"executeQuery",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t,r){var n,a,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=this._ensureQueryJSON(t)).returnGeometry){e.next=3;break}throw new d.a("feature-store:unsupported-query","returnGeometry is not yet supported for mesh scene layer queries");case 3:if(!n.returnCentroid){e.next=5;break}throw new d.a("feature-store:unsupported-query","returnCentroid is not yet supported for mesh scene layer queries");case 5:return e.next=7,this.dataQueryEngine.executeQuery(n,r);case 7:return a=e.sent,s=F.default.fromJSON(a),e.abrupt("return",(s.features.forEach((function(e){e.geometry=null})),s));case 10:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_ensureQueryJSON",value:function(e){return(0,d.t)(e)?this.defaultQueryJSON:e.toJSON()}},{key:"_ensureDataQueryEngine",value:function(){if(this._dataQueryEngineInstance)return this._dataQueryEngineInstance;var e=this.layer.objectIdField||"OBJECTID",t=this.layer.fields.map((function(e){return e.toJSON()})),r=this.layerView.view.resourceController.scheduler,n=this.spatialReference.toJSON(),i=this.priority,a=this.spatialIndex;return this._dataQueryEngineInstance=new q({hasZ:!0,hasM:!1,geometryType:"esriGeometryPolygon",fields:t,timeInfo:null,spatialReference:n,objectIdField:e,featureStore:a,scheduler:r,priority:i}),this._dataQueryEngineInstance}}]),r}(d.y);(0,d.e)([(0,d.d)({constructOnly:!0})],U.prototype,"layerView",void 0),(0,d.e)([(0,d.d)({constructOnly:!0})],U.prototype,"priority",void 0),(0,d.e)([(0,d.d)({constructOnly:!0})],U.prototype,"spatialIndex",void 0),(0,d.e)([(0,d.d)({readOnly:!0,aliasOf:"layerView.view.spatialReference"})],U.prototype,"spatialReference",void 0),(0,d.e)([(0,d.d)({readOnly:!0,aliasOf:"layerView.i3slayer"})],U.prototype,"layer",void 0),(0,d.e)([(0,d.d)({readOnly:!0})],U.prototype,"defaultQueryJSON",null),U=(0,d.e)([(0,d.n)("esri.views.3d.layers.i3s.I3SQueryEngine")],U);var z=function(){function e(t){(0,o.Z)(this,e),this.objectIdField=t.objectIdField,this.getFeatureExtent=t.getFeatureExtent}return(0,u.Z)(e,[{key:"getObjectId",value:function(e){return e.id}},{key:"getAttributes",value:function(e){var t=e.meta,r=e.index,n={};this.objectIdField&&(n[this.objectIdField]=e.id);var i=(0,d.r)(t.attributeInfo)&&t.attributeInfo.attributeData;if((0,d.r)(i))for(var a=0,s=Object.keys(i);a<s.length;a++){var o=s[a];n[o]=(0,b.a8)(i[o],r)}return n}},{key:"getAttribute",value:function(e,t){if(t===this.objectIdField)return e.id;var r=e.meta,n=e.index,i=(0,d.r)(r.attributeInfo)&&r.attributeInfo.attributeData;return(0,d.r)(i)?(0,b.a8)(i[t],n):null}},{key:"getGeometry",value:function(e){if(e.geometry)return e.geometry;var t=this.getFeatureExtent(e,H),r=(0,n.Z)(t,5),i=r[0],a=r[1],s=r[2],o=r[3],u=r[4];return new O.t([5],[i,a,s,o,a,s,o,u,s,i,u,s,i,a,s])}},{key:"getCentroid",value:function(e,t){if(e.geometry)return(0,_.e)(new O.t,e.geometry,t.hasZ,t.hasM);var r=this.getFeatureExtent(e,H),i=(0,n.Z)(r,6),a=i[0],s=i[1],o=i[2],u=i[3],l=i[4],c=i[5];return new O.t([0],[(a+u)/2,(s+l)/2,(o+c)/2])}},{key:"cloneWithGeometry",value:function(e,t){return{id:e.id,index:e.index,meta:e.meta,geometry:t}}}]),e}(),H=(0,g.a)(),Y=function(e){(0,l.Z)(r,e);var t=(0,c.Z)(r);function r(e){var n;return(0,o.Z)(this,r),(n=t.call(this,e)).events=new R.n,n}return(0,u.Z)(r,[{key:"forEach",value:function(e){this.forAllFeatures((function(t){return e(t),D.L.CONTINUE}))}},{key:"forEachBounds",value:function(e,t,r){var n,i=this.getFeatureExtent,a=(0,s.Z)(e);try{for(a.s();!(n=a.n()).done;){t(i(n.value,r))}}catch(o){a.e(o)}finally{a.f()}}},{key:"forEachInBounds",value:function(e,t){var r=this;this.forAllFeatures((function(n){var i=r.getFeatureExtent(n,$);return(0,E.E)(e,(0,g.G)(i,ee))&&t(n),D.L.CONTINUE}),(function(t){if((0,v.b)(t.node.mbs,r.sourceSpatialReference,X,r.viewSpatialReference),X[0]>=e[0]&&X[2]<=e[2]&&X[1]>=e[1]&&X[3]<=e[3])return D.L.CONTINUE;var n=Math.max(e[0],Math.min(X[0],e[2])),i=Math.max(e[1],Math.min(X[1],e[3])),a=X[0]-n,s=X[1]-i;return a*a+s*s<=X[3]*X[3]?D.L.CONTINUE:D.L.SKIP}))}}]),r}(d.y);(0,d.e)([(0,d.d)({constructOnly:!0})],Y.prototype,"featureAdapter",void 0),(0,d.e)([(0,d.d)({constructOnly:!0})],Y.prototype,"toArray",void 0),(0,d.e)([(0,d.d)({constructOnly:!0})],Y.prototype,"forAllFeatures",void 0),(0,d.e)([(0,d.d)({constructOnly:!0})],Y.prototype,"getFeatureExtent",void 0),(0,d.e)([(0,d.d)({constructOnly:!0})],Y.prototype,"sourceSpatialReference",void 0),(0,d.e)([(0,d.d)({constructOnly:!0})],Y.prototype,"viewSpatialReference",void 0),Y=(0,d.e)([(0,d.n)("esri.views.3d.layers.i3s.I3SQueryFeatureStore")],Y);var X=(0,Z.n)(),$=(0,g.a)(),ee=(0,E.u)()},33117:function(e,t,r){r.d(t,{d:function(){return u},s:function(){return c}});var n=r(74165),i=r(93433),a=r(15861),s=r(50165),o=r(4483);function u(e){return l.apply(this,arguments)}function l(){return l=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,u,l,c,d,f,p,y,h=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=h.length>1&&void 0!==h[1]?h[1]:t.popupTemplate,!(0,s.t)(r)){e.next=3;break}return e.abrupt("return",[]);case 3:return e.next=5,r.getRequiredFields(t.fieldsIndex);case 5:if(a=e.sent,u=r.lastEditInfoEnabled,l=t.objectIdField,c=t.typeIdField,d=t.globalIdField,f=t.relationships,!a.includes("*")){e.next=13;break}return e.abrupt("return",["*"]);case 13:if(!u){e.next=19;break}return e.next=16,(0,o.L)(t);case 16:e.t0=e.sent,e.next=20;break;case 19:e.t0=[];case 20:return p=e.t0,y=(0,o.y)(t.fieldsIndex,[].concat((0,i.Z)(a),(0,i.Z)(p))),e.abrupt("return",(c&&y.push(c),y&&l&&t.fieldsIndex.has(l)&&!y.includes(l)&&y.push(l),y&&d&&t.fieldsIndex.has(d)&&!y.includes(d)&&y.push(d),f&&f.forEach((function(e){var r=e.keyField;y&&r&&t.fieldsIndex.has(r)&&!y.includes(r)&&y.push(r)})),y));case 23:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function c(e,t){return e.popupTemplate?e.popupTemplate:(0,s.r)(t)&&t.defaultPopupTemplateEnabled&&(0,s.r)(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}}}]);
//# sourceMappingURL=5555.8a3891a1.chunk.js.map