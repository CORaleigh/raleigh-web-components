"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[7269],{17269:function(e,t,r){r.r(t);var n=r(74165),u=r(37762),a=r(15861),s=r(15671),o=r(43144),i=r(59389),c=r(48848),p=r(93661),l=r(82474),f=r(52559),h=r(26593),y=r(62753),v=r(69838),d=r(74219),_=r(95818),g=r(3588),m=r(77755),w=(r(40114),r(56162),r(46817),r(74384),r(40558),r(62466),r(37856),r(93209),r(25456),r(71802),r(90325),r(53921),r(44581),r(44513),r(95249),r(47855),r(15751),r(79557),r(75255),r(65415),r(83948),r(6762),r(63212),r(39994),r(69717),r(2352),r(45184),r(43976),r(62470),r(54622),r(73679),r(71147),r(89794),r(48200),r(20302),r(21385),r(94663),r(59984),r(67477),r(78413),r(47748),r(50690),r(69641),r(15436),function(){function e(){var t=this;(0,s.Z)(this,e),this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var a,s,o,i,h,v,m,w,k,Z,b,x;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t._queryEngine.objectIdField,e.next=3,(0,g.K)(null!==(a=t._getFeatureUrl)&&void 0!==a?a:"",t._featureType.typeName,t._getFeatureOutputFormat,{customParameters:t._customParameters,dateFields:t._queryEngine.fieldsIndex.dateFields.map((function(e){return e.name})),signal:r});case 3:return o=e.sent,e.next=6,(0,d.T)(o);case 6:if((0,c.f)(r),i=(0,d.I)(o,{geometryType:t._queryEngine.geometryType,hasZ:!1,objectIdField:s}),!(0,l.E)(t._queryEngine.spatialReference,l.n)){h=(0,u.Z)(i);try{for(h.s();!(v=h.n()).done;)m=v.value,(0,p.r)(m.geometry)&&(m.geometry=(0,f.n)((0,y.g)((0,f.r)(m.geometry,t._queryEngine.geometryType,!1,!1),l.n,t._queryEngine.spatialReference)))}catch(n){h.e(n)}finally{h.f()}}w=1,k=(0,u.Z)(i);try{for(k.s();!(Z=k.n()).done;)b=Z.value,x={},(0,_.m)(t._fieldsIndex,x,b.attributes,!0),b.attributes=x,null==b.attributes[s]&&(b.objectId=b.attributes[s]=w++)}catch(n){k.e(n)}finally{k.f()}return e.abrupt("return",i);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}return(0,o.Z)(e,[{key:"destroy",value:function(){var e;null!==(e=this._queryEngine)&&void 0!==e&&e.destroy(),this._queryEngine=null}},{key:"load",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var u,a,s,o,i,l,f,y,d;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=t.getFeatureUrl,a=t.getFeatureOutputFormat,s=t.spatialReference,o=t.fields,i=t.geometryType,l=t.featureType,f=t.objectIdField,y=t.customParameters,this._featureType=l,this._customParameters=y,this._getFeatureUrl=u,this._getFeatureOutputFormat=a,this._fieldsIndex=new m.r(o),e.next=8,this._checkProjection(s);case 8:return(0,c.f)(r),this._queryEngine=new v.Y({fields:o,geometryType:i,hasM:!1,hasZ:!1,objectIdField:f,spatialReference:s,timeInfo:null,featureStore:new h.u({geometryType:i,hasM:!1,hasZ:!1})}),e.next=12,this._snapshotFeatures((0,p.e)(r.signal));case 12:return d=e.sent,e.abrupt("return",(this._queryEngine.featureStore.addMany(d),{extent:this._queryEngine.fullExtent}));case 14:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"applyEdits",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:throw new c.s("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"queryFeatures",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r,u=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:{},r=u.length>1&&void 0!==u[1]?u[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQuery(t,r.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryFeatureCount",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r,u=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:{},r=u.length>1&&void 0!==u[1]?u[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForCount(t,r.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryObjectIds",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r,u=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:{},r=u.length>1&&void 0!==u[1]?u[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForIds(t,r.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryExtent",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r,u=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:{},r=u.length>1&&void 0!==u[1]?u[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForExtent(t,r.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"querySnapping",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,u=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:{},e.next=3,this._waitSnapshotComplete();case 3:return e.abrupt("return",this._queryEngine.executeQueryForSnapping(t,r.signal));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"refresh",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,u=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._customParameters=t,null!==(r=this._snapshotTask)&&void 0!==r&&r.abort(),this._snapshotTask=(0,i.j)(this._snapshotFeatures),this._snapshotTask.promise.then((function(e){u._queryEngine.featureStore.clear(),e&&u._queryEngine.featureStore.addMany(e)}),(function(e){u._queryEngine.featureStore.clear(),(0,c.j)(e)||c.a.getLogger("esri.layers.WFSLayer").error(new c.s("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:e}))})),e.next=6,this._waitSnapshotComplete();case 6:return e.abrupt("return",{extent:this._queryEngine.fullExtent});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_waitSnapshotComplete",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._snapshotTask||this._snapshotTask.finished){e.next=9;break}return e.prev=1,e.next=4,this._snapshotTask.promise;case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.abrupt("return",this._waitSnapshotComplete());case 9:case"end":return e.stop()}}),e,this,[[1,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"_checkProjection",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,y.f)(l.n,t);case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),new c.s("unsupported-projection","Projection not supported",{spatialReference:t});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()}]),e}());t.default=w},59389:function(e,t,r){r.d(t,{b:function(){return d},c:function(){return l},d:function(){return g},h:function(){return f},j:function(){return k},v:function(){return w}});var n=r(74165),u=r(15671),a=r(43144),s=r(60136),o=r(29388),i=r(15861),c=r(48848),p=r(93661);function l(e,t,r){return(0,c.E)(e.map((function(e,n){return t.apply(r,[e,n])})))}function f(e,t,r){return h.apply(this,arguments)}function h(){return(h=(0,i.Z)((0,n.Z)().mark((function e(t,r,u){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.E)(t.map((function(e,t){return r.apply(u,[e,t])})));case 2:return e.abrupt("return",e.sent.map((function(e){return e.value})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return{ok:!0,value:e}}function v(e){return{ok:!1,error:e}}function d(e){return _.apply(this,arguments)}function _(){return(_=(0,i.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,p.t)(t)){e.next=2;break}return e.abrupt("return",{ok:!1,error:new Error("no promise provided")});case 2:return e.prev=2,e.t0=y,e.next=6,t;case 6:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 10:return e.prev=10,e.t2=e.catch(2),e.abrupt("return",v(e.t2));case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}function g(e){return m.apply(this,arguments)}function m(){return(m=(0,i.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=y,e.next=4,t;case 4:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 8:return e.prev=8,e.t2=e.catch(0),e.abrupt("return",((0,c.w)(e.t2),v(e.t2)));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function w(e){if(!0===e.ok)return e.value;throw e.error}function k(e,t){return new Z(e,t)}var Z=function(e){(0,s.Z)(r,e);var t=(0,o.Z)(r);function r(e,n){var a;(0,u.Z)(this,r),(a=t.call(this,{}))._result=null,a._abortHandle=null,a.abort=function(){a._abortController=(0,p.l)(a._abortController)},a.remove=a.abort,a._abortController=new AbortController;var s=a._abortController.signal;return a.promise=e(s),a.promise.then((function(e){a._result=y(e),a._cleanup()}),(function(e){a._result=v(e),a._cleanup()})),a._abortHandle=(0,c.v)(n,a.abort),a}return(0,a.Z)(r,[{key:"value",get:function(){return e=this._result,(0,p.r)(e)&&!0===e.ok?e.value:null;var e}},{key:"error",get:function(){return e=this._result,(0,p.r)(e)&&!1===e.ok?e.error:null;var e}},{key:"finished",get:function(){return(0,p.r)(this._result)}},{key:"normalizeCtorArgs",value:function(){return{}}},{key:"destroy",value:function(){this.abort()}},{key:"_cleanup",value:function(){this._abortHandle=(0,p.f)(this._abortHandle),this._abortController=null}}]),r}(c.m);(0,c.e)([(0,c.y)()],Z.prototype,"value",null),(0,c.e)([(0,c.y)()],Z.prototype,"error",null),(0,c.e)([(0,c.y)()],Z.prototype,"finished",null),(0,c.e)([(0,c.y)()],Z.prototype,"promise",void 0),(0,c.e)([(0,c.y)()],Z.prototype,"_result",void 0),Z=(0,c.e)([(0,c.n)("esri.core.asyncUtils.ReactiveTask")],Z)}}]);
//# sourceMappingURL=7269.a71a8fcd.chunk.js.map