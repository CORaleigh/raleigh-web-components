"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[5836],{95836:function(e,t,n){n.r(t),n.d(t,{GraphicsSnappingSource:function(){return z}});var r=n(4942),i=n(29439),a=n(93433),s=n(37762),o=n(74165),u=n(15861),c=n(15671),l=n(43144),h=n(60136),f=n(29388),d=n(48848),p=n(93661),v=n(59389),y=n(630),_=n(50690),g=n(74384),m=n(95249),x=n(23075),Z=n(52559),k=n(62466),w=n(26593),S=n(69838),b=n(52638),C=n(95643),I=n(21078),E=n(53731),P=n(52752),O=(n(46817),n(82474),n(40114),n(40558),n(71802),n(47855),n(15751),n(79557),n(75255),n(25456),n(65415),n(56162),n(63212),n(39994),n(69717),n(37856),n(93209),n(90325),n(53921),n(44581),n(44513),n(6762),n(2352),n(45184),n(43976),n(62470),n(54622),n(73679),n(71147),n(89794),n(48200),n(20302),n(21385),n(62753),n(83948),n(94663),n(59984),n(67477),n(78413),n(77755),n(47748),n(15529),n(37944),n(86086),n(85253),n(46337),n(93314),n(81556),n(93116),n(65094),n(62610),n(33795),n(75016),n(25747),n(17455),n(1500),n(64998),n(25577),n(53586),n(60369),n(92072),n(26313),n(37077),n(49228),n(41723),n(64772),n(91681),n(43955),n(76291),n(13239),n(24093),n(6189),n(17332),n(87750),n(20846),n(67430),n(87424),n(10464),n(1797),n(27205),n(93122),n(75833),n(57791),n(28390),n(42467),n(46737),n(52113),n(42667),n(61118),n(85113),n(23585),n(82396),n(32043),n(98598),n(19941),n(49871),n(53409),n(35182),n(51816),n(68781),n(69641),n(15436),n(35237),n(89181),n(69768),n(35865),n(51219),n(66577),n(2959),n(2821),n(33794),n(84186),n(70449),n(22603),n(56546),n(39926),n(8141),n(26151),n(90429),n(95399),n(98987),n(99795),n(87753),n(29130),n(1685),n(12953),n(74797),n(45999),n(72973),n(62710),n(52721),n(61903),n(23444),n(40811),n(51920),n(63393),n(90442),n(64854),n(24623),n(64264),n(6379),n(21015),n(23341),n(41820),n(20086),n(92982),n(61416),n(77880),n(74494),n(71645),n(89311),n(67066),n(39769),n(70607),n(85700),n(3719),n(32161),n(37686),n(16641),n(62642),n(90316),n(19891),n(70522),n(43066),n(29048),n(68136),n(50253),n(16263),n(3356),n(70381),n(20675),n(85026),n(33973),n(42233),n(70288),n(95414),n(43345),n(31698),n(94777),n(4937),n(87440),n(21744),n(18936),n(4397),n(25217),n(43406),n(72361),n(22159),n(73911),n(87917),n(46018),n(70863),n(62312),n(24648),n(63999),n(5526),n(2473),n(59929),n(2467),n(75257),n(26789),n(64095),n(51732),n(2851),n(70285),n(52102),n(8586),n(82509),n(42947),n(92251),n(91386),n(18668),n(15132),n(40345),n(66633),n(43486),"graphics-collections"),z=function(e){(0,h.Z)(n,e);var t=(0,f.Z)(n);function n(e){var r;return(0,c.Z)(this,n),(r=t.call(this,e)).availability=1,r._sources={multipoint:null,point:null,polygon:null,polyline:null},r._loadedWkids=new Set,r._loadedWkts=new Set,r._pendingAdds=[],r._extrudedPolygonSymbolsCount=0,r}return(0,l.Z)(n,[{key:"updating",get:function(){return this.updatingHandles.updating}},{key:"_hasZ",get:function(){var e=this.view;return(0,p.r)(e)&&"3d"===e.type&&"map-notes"!==this.layerSource.layer.type}},{key:"_snappingElevationAligner",get:function(){var e=this.view,t=this.layerSource.layer,n=(0,p.r)(e)&&"3d"===e.type;if(!n||"map-notes"===t.type)return(0,P.r)();var r=function(){var n=(0,u.Z)((0,o.Z)().mark((function n(r,i){return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,d.Y)(e.whenLayerView(t),i);case 2:return n.abrupt("return",n.sent.elevationAlignPointsInFeatures(r,i));case 3:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return(0,P.r)(n,{elevationInfo:t.elevationInfo,alignPointsInFeatures:r,spatialReference:e.spatialReference})}},{key:"_snappingElevationFilter",get:function(){var e=this.view,t=(0,p.r)(e)&&"3d"===e.type&&"map-notes"!==this.layerSource.layer.type;return(0,P.a)(t)}},{key:"_symbologySnappingFetcher",get:function(){var e=this.view,t=this.layerSource.layer,n=(0,p.r)(e)&&"3d"===e.type,r=this._extrudedPolygonSymbolsCount>0;return n&&"map-notes"!==t.type&&r?(0,P.n)(r,function(){var n=(0,u.Z)((0,o.Z)().mark((function n(r,i){var a;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.whenLayerView(t);case 2:return a=n.sent,n.abrupt("return",((0,d.f)(i),a.queryForSymbologySnapping({candidates:r,spatialReference:e.spatialReference},i)));case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()):(0,P.n)()}},{key:"destroy",value:function(){var e,t=this,n=(0,s.Z)(this._pendingAdds);try{for(n.s();!(e=n.n()).done;){e.value.task.abort()}}catch(r){n.e(r)}finally{n.f()}this._pendingAdds.length=0,this._mapSources((function(e){return t._destroySource(e)}))}},{key:"initialize",value:function(){var e=this;this.updatingHandles.add((function(){return e.getGraphicsLayers()}),(function(t){e.updatingHandles.removeHandles(O);var n,r=(0,s.Z)(t);try{var i=function(){var t=n.value;e._addMany(t.graphics.toArray()),e.handles.add([t.on("graphic-update",(function(t){return e._onGraphicUpdate(t)})),e.updatingHandles.addOnCollectionChange((function(){return t.graphics}),(function(t){return e._onGraphicsChanged(t)}))],O)};for(r.s();!(n=r.n()).done;)i()}catch(a){r.e(a)}finally{r.f()}}),_.h);var t=this.view,n=this.layerSource.layer;(0,p.r)(t)&&"3d"===t.type&&"map-notes"!==n.type&&this.addHandles([t.elevationProvider.on("elevation-change",(function(t){var r=t.context;(0,b.y)(r,n.elevationInfo)&&e._snappingElevationAligner.notifyElevationSourceChange()})),(0,_.l)((function(){return n.elevationInfo}),(function(){return e._snappingElevationAligner.notifyElevationSourceChange()}),_.h)])}},{key:"fetchCandidates",value:function(){var e=(0,u.Z)((0,o.Z)().mark((function e(t,n){var r,i,a,s,u,c,l,h=this;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.point,i=t.coordinateHelper,a=t.elevationInfo,e.next=5,(0,d.ah)(this._mapSources((function(e){return h._fetchCandidatesForSource(e,t,n)})));case 5:return s=e.sent,(0,d.f)(n),u=i.hasZ()?b.E:a,c=this._getGroundElevation,l=s.flat().map((function(e){return(0,E.r)(e,i,u,c)})),e.abrupt("return",((0,I.b)(r,l,i),l));case 9:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_getGroundElevation",get:function(){return(0,E.a)(this.view)}},{key:"_fetchCandidatesForSource",value:function(){var e=(0,u.Z)((0,o.Z)().mark((function e(t,n,r){var i,s,u,c,l;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=(0,I.h)(n),e.next=3,t.queryEngine.executeQueryForSnapping(i,r);case 3:return s=e.sent,(0,d.f)(r),e.next=7,this._snappingElevationAligner.alignCandidates(s.candidates,r);case 7:return u=e.sent,(0,d.f)(r),e.next=11,this._symbologySnappingFetcher.fetch(u,r);case 11:return c=e.sent,(0,d.f)(r),l=0===c.length?u:[].concat((0,a.Z)(u),(0,a.Z)(c)),e.abrupt("return",this._snappingElevationFilter.filter(i,l));case 15:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"refresh",value:function(){}},{key:"_onGraphicUpdate",value:function(e){if(this.getGraphicsLayers().some((function(t){return t.graphics.includes(e.graphic)})))switch(e.property){case"geometry":case"visible":this._remove(e.graphic),this._addMany([e.graphic])}}},{key:"_onGraphicsChanged",value:function(e){var t,n=(0,s.Z)(e.removed);try{for(n.s();!(t=n.n()).done;){var r=t.value;this._remove(r)}}catch(i){n.e(i)}finally{n.f()}this._addMany(e.added)}},{key:"_addMany",value:function(e){var t,n=[],r=new Map,i=(0,s.Z)(e);try{for(i.s();!(t=i.n()).done;){var a=t.value;(0,p.t)(a.geometry)||(this._needsInitializeProjection(a.geometry.spatialReference)?(n.push(a.geometry.spatialReference),r.set(a.uid,a)):this._add(a))}}catch(o){i.e(o)}finally{i.f()}this._createPendingAdd(n,r)}},{key:"_createPendingAdd",value:function(e,t){var n=this;if(e.length){var r=(0,v.j)(function(){var r=(0,u.Z)((0,o.Z)().mark((function r(a){var u,c,l,h;return(0,o.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,m._)(e.map((function(e){return{source:e,dest:n.spatialReference}})),{signal:a});case 2:n._markLoadedSpatialReferences(e),u=(0,s.Z)(t);try{for(u.s();!(c=u.n()).done;)l=(0,i.Z)(c.value,2),h=l[1],n._add(h)}catch(o){u.e(o)}finally{u.f()}case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}());this.updatingHandles.addPromise(r.promise);var a={task:r,graphics:t},c=function(){return(0,p.A)(n._pendingAdds,a)};r.promise.then(c,c),this._pendingAdds.push(a)}}},{key:"_markLoadedSpatialReferences",value:function(e){var t,n=(0,s.Z)(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;null!=r.wkid&&this._loadedWkids.add(r.wkid),null!=r.wkt&&this._loadedWkts.add(r.wkt)}}catch(i){n.e(i)}finally{n.f()}}},{key:"_add",value:function(e){if(!(0,p.t)(e.geometry)&&e.visible){var t=e.geometry;if("mesh"!==t.type){"extent"===t.type&&(t=g.v.fromExtent(t));var n=this._ensureSource(t.type);if(!(0,p.t)(n)){var r=this._createOptimizedFeature(e.uid,t);(0,p.t)(r)||(n.featureStore.add(r),(0,C.B)(e.symbol)&&this._extrudedPolygonSymbolsCount++)}}}}},{key:"_needsInitializeProjection",value:function(e){return(null==e.wkid||!this._loadedWkids.has(e.wkid))&&(null==e.wkt||!this._loadedWkts.has(e.wkt))&&!(0,m.A)(e,this.spatialReference)}},{key:"_createOptimizedFeature",value:function(e,t){var n=(0,m.r)((0,x.p)(t),this.spatialReference);if(!n)return null;var i=this._ensureGeometryHasZ(n),a=(0,Z.n)(i,this._hasZ,!1);return new k.s(a,(0,r.Z)({},T,e),null,e)}},{key:"_ensureGeometryHasZ",value:function(e){var t;if(!this._hasZ)return e;var n=function(e){for(;e.length<3;)e.push(0)},r=e.clone();switch(r.hasZ=!0,r.type){case"point":r.z=null!==(t=r.z)&&void 0!==t?t:0;break;case"multipoint":r.points.forEach(n);break;case"polyline":r.paths.forEach((function(e){return e.forEach(n)}));break;case"polygon":r.rings.forEach((function(e){return e.forEach(n)}))}return r}},{key:"_ensureSource",value:function(e){var t=this._sources[e];if((0,p.r)(t))return t;var n=this._createSource(e);return this._sources[e]=n,n}},{key:"_createSource",value:function(e){var t=g.a.toJSON(e),n=this._hasZ,r=new w.u({geometryType:t,hasZ:n,hasM:!1});return{featureStore:r,queryEngine:new S.Y({featureStore:r,fields:[{name:T,type:"esriFieldTypeOID",alias:T}],geometryType:t,hasM:!1,hasZ:n,objectIdField:T,spatialReference:this.spatialReference,scheduler:(0,p.r)(this.view)&&"3d"===this.view.type?this.view.resourceController.scheduler:null}),type:e}}},{key:"_remove",value:function(e){var t=this;this._mapSources((function(n){return t._removeFromSource(n,e)}));var n,r=(0,s.Z)(this._pendingAdds);try{for(r.s();!(n=r.n()).done;){var i=n.value;i.graphics.delete(e.uid),0===i.graphics.size&&i.task.abort()}}catch(a){r.e(a)}finally{r.f()}}},{key:"_removeFromSource",value:function(e,t){var n=t.uid;e.featureStore.has(n)&&(e.featureStore.removeById(t.uid),(0,C.B)(t.symbol)&&this._extrudedPolygonSymbolsCount--)}},{key:"_destroySource",value:function(e){e.queryEngine.destroy(),this._sources[e.type]=null}},{key:"_mapSources",value:function(e){var t=this._sources,n=t.point,r=t.polygon,i=t.polyline,a=t.multipoint,s=[];return(0,p.r)(n)&&s.push(e(n)),(0,p.r)(r)&&s.push(e(r)),(0,p.r)(i)&&s.push(e(i)),(0,p.r)(a)&&s.push(e(a)),s}}]),n}((0,y.a)(d.m));(0,d.e)([(0,d.y)()],z.prototype,"getGraphicsLayers",void 0),(0,d.e)([(0,d.y)({constructOnly:!0})],z.prototype,"layerSource",void 0),(0,d.e)([(0,d.y)({constructOnly:!0})],z.prototype,"spatialReference",void 0),(0,d.e)([(0,d.y)({constructOnly:!0})],z.prototype,"view",void 0),(0,d.e)([(0,d.y)({readOnly:!0})],z.prototype,"updating",null),(0,d.e)([(0,d.y)({readOnly:!0})],z.prototype,"availability",void 0),(0,d.e)([(0,d.y)()],z.prototype,"_hasZ",null),(0,d.e)([(0,d.y)()],z.prototype,"_snappingElevationAligner",null),(0,d.e)([(0,d.y)()],z.prototype,"_snappingElevationFilter",null),(0,d.e)([(0,d.y)()],z.prototype,"_symbologySnappingFetcher",null),(0,d.e)([(0,d.y)()],z.prototype,"_extrudedPolygonSymbolsCount",void 0),(0,d.e)([(0,d.y)()],z.prototype,"_getGroundElevation",null),z=(0,d.e)([(0,d.n)("esri.views.interactive.snapping.featureSources.GraphicsSnappingSource")],z);var T="OBJECTID"},43486:function(e,t,n){n.d(t,{o:function(){return c}});var r=n(1413),i=n(15671),a=n(43144),s=n(60136),o=n(29388),u=n(21078),c=function(e){(0,s.Z)(n,e);var t=(0,o.Z)(n);function n(e){return(0,i.Z)(this,n),t.call(this,(0,r.Z)((0,r.Z)({},e),{},{constraint:new u.j(e.coordinateHelper,e.targetPoint)}))}return(0,a.Z)(n,[{key:"hints",get:function(){return[new u.a(this.targetPoint,this.elevationInfo,this.domain)]}}]),n}(u.n)},23075:function(e,t,n){n.d(t,{a:function(){return d},p:function(){return p}});var r=n(43144),i=n(15671),a=n(37762),s=n(29439),o=n(93661),u=n(25456),c=n(74384),l=n(56162),h=n(63212),f=n(82474);function d(e){return v(e,!0)}function p(e){return v(e,!1)}function v(e,t){if((0,o.t)(e))return null;var n=e.spatialReference,r=(0,f.a)(n),i="toJSON"in e?e.toJSON():e;if(!r)return i;var a=(0,f.b)(n)?102100:4326,s=h.r[a].maxX,u=h.r[a].minX;if((0,l.s)(i))return _(i,s,u);if((0,l.l)(i))return i.points=i.points.map((function(e){return _(e,s,u)})),i;if((0,l.u)(i))return y(i,r);if((0,l.y)(i)||(0,l.f)(i)){var d=(0,c.e)(w,i),p={xmin:d[0],ymin:d[1],xmax:d[2],ymax:d[3]},v=(0,h.i)(p.xmin,u)*(2*s),g=0===v?i:(0,h.s)(i,v);return p.xmin+=v,p.xmax+=v,p.xmax>s?Z(g,s,t):p.xmin<u?Z(g,u,t):g}return i}function y(e,t){if(!t)return e;var n=function(e,t){var n=[],r=e.ymin,i=e.ymax,a=e.xmin,o=e.xmax,u=e.xmax-e.xmin,c=(0,s.Z)(t.valid,2),l=c[0],h=c[1],f=g(e.xmin,t),d=f.x,p=f.frameId,v=g(e.xmax,t),y=v.x,_=v.frameId,x=d===y&&u>0;if(u>2*h){var Z={xmin:a<o?d:y,ymin:r,xmax:h,ymax:i},w={xmin:l,ymin:r,xmax:a<o?y:d,ymax:i},S={xmin:0,ymin:r,xmax:h,ymax:i},b={xmin:l,ymin:r,xmax:0,ymax:i},C=[],I=[];m(Z,S)&&C.push(p),m(Z,b)&&I.push(p),m(w,S)&&C.push(_),m(w,b)&&I.push(_);for(var E=p+1;E<_;E++)C.push(E),I.push(E);n.push(new k(Z,[p]),new k(w,[_]),new k(S,C),new k(b,I))}else d>y||x?n.push(new k({xmin:d,ymin:r,xmax:h,ymax:i},[p]),new k({xmin:l,ymin:r,xmax:y,ymax:i},[_])):n.push(new k({xmin:d,ymin:r,xmax:y,ymax:i},[p]));return n}(e,t).map((function(e){return e.extent}));return n.length<2?n[0]||e:n.length>2?(e.xmin=t.valid[0],e.xmax=t.valid[1],e):{rings:n.map((function(e){return[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]}))}}function _(e,t,n){if(Array.isArray(e)){var r=e[0];if(r>t){var i=(0,h.i)(r,t);e[0]=r+i*(-2*t)}else if(r<n){var a=(0,h.i)(r,n);e[0]=r+a*(-2*n)}}else{var s=e.x;if(s>t){var o=(0,h.i)(s,t);e.x+=o*(-2*t)}else if(s<n){var u=(0,h.i)(s,n);e.x+=u*(-2*n)}}return e}function g(e,t){var n,r=(0,s.Z)(t.valid,2),i=r[0],a=r[1],o=2*a,u=0;return e>a?(e-=(n=Math.ceil(Math.abs(e-a)/o))*o,u=n):e<i&&(e+=(n=Math.ceil(Math.abs(e-i)/o))*o,u=-n),{x:e,frameId:u}}function m(e,t){var n=t.xmin,r=t.ymin,i=t.xmax,a=t.ymax;return x(e,n,r)&&x(e,n,a)&&x(e,i,a)&&x(e,i,r)}function x(e,t,n){return t>=e.xmin&&t<=e.xmax&&n>=e.ymin&&n<=e.ymax}function Z(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=!(0,l.f)(e);if(r&&(0,c.q)(e),n)return(new S).cut(e,t);for(var i=r?e.rings:e.paths,s=r?4:2,o=i.length,u=-2*t,h=0;h<o;h++){var f=i[h];if(f&&f.length>=s){var d,p=[],v=(0,a.Z)(f);try{for(v.s();!(d=v.n()).done;){var y=d.value;p.push([y[0]+u,y[1]])}}catch(_){v.e(_)}finally{v.f()}i.push(p)}}return r?e.rings=i:e.paths=i,e}var k=(0,r.Z)((function e(t,n){(0,i.Z)(this,e),this.extent=t,this.frameIds=n})),w=(0,u.u)(),S=function(){function e(){(0,i.Z)(this,e),this._linesIn=[],this._linesOut=[]}return(0,r.Z)(e,[{key:"cut",value:function(e,t){var n;if(this._xCut=t,e.rings)this._closed=!0,n=e.rings,this._minPts=4;else{if(!e.paths)return null;this._closed=!1,n=e.paths,this._minPts=2}var r,i=(0,a.Z)(n);try{for(i.s();!(r=i.n()).done;){var s=r.value;if(s&&!(s.length<this._minPts)){var o,u=!0,c=(0,a.Z)(s);try{for(c.s();!(o=c.n()).done;){var l=o.value;u?(this.moveTo(l),u=!1):this.lineTo(l)}}catch(x){c.e(x)}finally{c.f()}this._closed&&this.close()}}}catch(x){i.e(x)}finally{i.f()}this._pushLineIn(),this._pushLineOut(),n=[];var h,f=(0,a.Z)(this._linesIn);try{for(f.s();!(h=f.n()).done;){var d=h.value;d&&d.length>=this._minPts&&n.push(d)}}catch(x){f.e(x)}finally{f.f()}var p,v=-2*this._xCut,y=(0,a.Z)(this._linesOut);try{for(y.s();!(p=y.n()).done;){var _=p.value;if(_&&_.length>=this._minPts){var g,m=(0,a.Z)(_);try{for(m.s();!(g=m.n()).done;){g.value[0]+=v}}catch(x){m.e(x)}finally{m.f()}n.push(_)}}}catch(x){y.e(x)}finally{y.f()}return this._closed?e.rings=n:e.paths=n,e}},{key:"moveTo",value:function(e){this._pushLineIn(),this._pushLineOut(),this._prevSide=this._side(e[0]),this._moveTo(e[0],e[1],this._prevSide),this._prevPt=e,this._firstPt=e}},{key:"lineTo",value:function(e){var t=this._side(e[0]);if(t*this._prevSide==-1){var n=this._intersect(this._prevPt,e);this._lineTo(this._xCut,n,0),this._prevSide=0,this._lineTo(e[0],e[1],t)}else this._lineTo(e[0],e[1],t);this._prevSide=t,this._prevPt=e}},{key:"close",value:function(){var e=this._firstPt,t=this._prevPt;e[0]===t[0]&&e[1]===t[1]||this.lineTo(e),this._checkClosingPt(this._lineIn),this._checkClosingPt(this._lineOut)}},{key:"_moveTo",value:function(e,t,n){this._closed?(this._lineIn.push([n<=0?e:this._xCut,t]),this._lineOut.push([n>=0?e:this._xCut,t])):(n<=0&&this._lineIn.push([e,t]),n>=0&&this._lineOut.push([e,t]))}},{key:"_lineTo",value:function(e,t,n){this._closed?(this._addPolyVertex(this._lineIn,n<=0?e:this._xCut,t),this._addPolyVertex(this._lineOut,n>=0?e:this._xCut,t)):n<0?(0===this._prevSide&&this._pushLineOut(),this._lineIn.push([e,t])):n>0?(0===this._prevSide&&this._pushLineIn(),this._lineOut.push([e,t])):this._prevSide<0?(this._lineIn.push([e,t]),this._lineOut.push([e,t])):this._prevSide>0&&(this._lineOut.push([e,t]),this._lineIn.push([e,t]))}},{key:"_addPolyVertex",value:function(e,t,n){var r=e.length;r>1&&e[r-1][0]===t&&e[r-2][0]===t?e[r-1][1]=n:e.push([t,n])}},{key:"_checkClosingPt",value:function(e){var t=e.length;t>3&&e[0][0]===this._xCut&&e[t-2][0]===this._xCut&&e[1][0]===this._xCut&&(e[0][1]=e[t-2][1],e.pop())}},{key:"_side",value:function(e){return e<this._xCut?-1:e>this._xCut?1:0}},{key:"_intersect",value:function(e,t){var n=(this._xCut-e[0])/(t[0]-e[0]);return e[1]+n*(t[1]-e[1])}},{key:"_pushLineIn",value:function(){this._lineIn&&this._lineIn.length>=this._minPts&&this._linesIn.push(this._lineIn),this._lineIn=[]}},{key:"_pushLineOut",value:function(){this._lineOut&&this._lineOut.length>=this._minPts&&this._linesOut.push(this._lineOut),this._lineOut=[]}}]),e}()},53731:function(e,t,n){n.d(t,{a:function(){return d},r:function(){return f}});var r=n(1413),i=n(15671),a=n(43144),s=n(60136),o=n(29388),u=n(93661),c=n(21078),l=n(43486),h=function(e){(0,s.Z)(n,e);var t=(0,o.Z)(n);function n(e){return(0,i.Z)(this,n),t.call(this,(0,r.Z)((0,r.Z)({},e),{},{constraint:new c.N(e.coordinateHelper,e.edgeStart,e.edgeEnd,e.getGroundElevation)}))}return(0,a.Z)(n,[{key:"hints",get:function(){return[new c.s(c.l.REFERENCE,this.constraint.start,this.constraint.end,this.elevationInfo,this.domain)]}}]),n}(c.n);function f(e,t,n,r){switch(e.type){case"edge":return e.draped?new h({coordinateHelper:t,edgeStart:t.pointToVector(e.start),edgeEnd:t.pointToVector(e.end),targetPoint:t.pointToVector(e.target),objectId:e.objectId,getGroundElevation:r,elevationInfo:n}):new c.e({coordinateHelper:t,edgeStart:t.pointToVector(e.start),edgeEnd:t.pointToVector(e.end),targetPoint:t.pointToVector(e.target),objectId:e.objectId,elevationInfo:n});case"vertex":return new l.o({coordinateHelper:t,targetPoint:t.pointToVector(e.target),objectId:e.objectId,elevationInfo:n})}}function d(e){return(0,u.r)(e)&&"3d"===e.type?function(t,n,r){return e.elevationProvider.getElevation(t,n,r,e.spatialReference,"ground")}:function(){return null}}},52752:function(e,t,n){n.d(t,{a:function(){return w},n:function(){return I},r:function(){return p}});var r=n(29439),i=n(37762),a=n(74165),s=n(15861),o=n(15671),u=n(43144),c=n(93661),l=n(39926),h=n(48848),f=n(47855),d=n(15529);function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;if(e){var n=t.elevationInfo,r=t.alignPointsInFeatures,i=t.spatialReference;return new y(n,r,i)}return new v}var v=function(){function e(){(0,o.Z)(this,e)}return(0,u.Z)(e,[{key:"alignCandidates",value:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t,n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"notifyElevationSourceChange",value:function(){}}]),e}(),y=function(){function e(t,n,r){(0,o.Z)(this,e),this._elevationInfo=t,this._alignPointsInFeatures=n,this.spatialReference=r,this._alignmentsCache=new l.e(1024),this._cacheVersion=0,this._metersPerVerticalUnit=(0,f.L)(r)}return(0,u.Z)(e,[{key:"alignCandidates",value:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t,n){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this._elevationInfo,e.abrupt("return",(0,c.r)(r)&&"absolute-height"===r.mode&&!r.featureExpressionInfo?(this._alignAbsoluteElevationCandidates(t,r),t):this._alignComputedElevationCandidates(t,n));case 2:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"notifyElevationSourceChange",value:function(){this._alignmentsCache.clear(),this._cacheVersion++}},{key:"_alignAbsoluteElevationCandidates",value:function(e,t){var n=t.offset,r=t.unit;if(!(0,c.t)(n)){var a,s=n*((0,d.r)(null!==r&&void 0!==r?r:"meters")/this._metersPerVerticalUnit),o=(0,i.Z)(e);try{for(o.s();!(a=o.n()).done;){var u=a.value;switch(u.type){case"edge":u.start.z+=s,u.end.z+=s;continue;case"vertex":u.target.z+=s;continue}}}catch(l){o.e(l)}finally{o.f()}}}},{key:"_alignComputedElevationCandidates",value:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t,n){var s,o,u,c,l,f,d,p,v,y,_,g,x,Z,k,w,S;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=new Map,o=(0,i.Z)(t);try{for(o.s();!(u=o.n()).done;)c=u.value,(0,h.am)(s,c.objectId,m).push(c)}catch(a){o.e(a)}finally{o.f()}return l=this._prepareQuery(s),f=(0,r.Z)(l,3),d=f[0],p=f[1],v=f[2],e.next=10,this._alignPointsInFeatures(d,n);case 10:if(y=e.sent,(0,h.f)(n),v===this._cacheVersion){e.next=14;break}return e.abrupt("return",this._alignComputedElevationCandidates(t,n));case 14:this._applyCacheAndResponse(d,y,p),_=y.drapedObjectIds,g=y.failedObjectIds,x=[],Z=(0,i.Z)(t);try{for(Z.s();!(k=Z.n()).done;)w=k.value,S=w.objectId,_.has(S)&&"edge"===w.type&&(w.draped=!0),g.has(S)||x.push(w)}catch(a){Z.e(a)}finally{Z.f()}return e.abrupt("return",x);case 19:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_prepareQuery",value:function(e){var t,n=[],a=[],s=(0,i.Z)(e);try{for(s.s();!(t=s.n()).done;){var o,u=(0,r.Z)(t.value,2),c=u[0],l=u[1],h=[],f=(0,i.Z)(l);try{for(f.s();!(o=f.n()).done;){var d=o.value;this._addToQueriesOrCachedResult(c,d.target,h,a),"edge"===d.type&&(this._addToQueriesOrCachedResult(c,d.start,h,a),this._addToQueriesOrCachedResult(c,d.end,h,a))}}catch(p){f.e(p)}finally{f.f()}0!==h.length&&n.push({objectId:c,points:h})}}catch(p){s.e(p)}finally{s.f()}return[n,a,this._cacheVersion]}},{key:"_addToQueriesOrCachedResult",value:function(e,t,n,r){var i=g(e,t),a=this._alignmentsCache.get(i);(0,c.r)(a)?r.push(new _(t,a)):n.push(t)}},{key:"_applyCacheAndResponse",value:function(e,t,n){var r,a=t.elevations,s=t.drapedObjectIds,o=t.failedObjectIds,u=(0,i.Z)(n);try{for(u.s();!(r=u.n()).done;){r.value.apply()}}catch(w){u.e(w)}finally{u.f()}var c,l=0,h=this._alignmentsCache,f=(0,i.Z)(e);try{for(f.s();!(c=f.n()).done;){var d=c.value,p=d.objectId,v=d.points;if(o.has(p))l+=v.length;else{var y,_=!s.has(p),m=(0,i.Z)(v);try{for(m.s();!(y=m.n()).done;){var x=y.value,Z=g(p,x),k=a[l++];x.z=k,_&&h.put(Z,k,1)}}catch(w){m.e(w)}finally{m.f()}}}}catch(w){f.e(w)}finally{f.f()}}}]),e}(),_=function(){function e(t,n){(0,o.Z)(this,e),this.point=t,this.z=n}return(0,u.Z)(e,[{key:"apply",value:function(){this.point.z=this.z}}]),e}();function g(e,t){var n=t.x,r=t.y,i=t.z;return"".concat(e,"-").concat(n,"-").concat(r,"-").concat(null!==i&&void 0!==i?i:0,"}")}function m(){return[]}var x=function(){function e(){(0,o.Z)(this,e)}return(0,u.Z)(e,[{key:"filter",value:function(e,t){return t}},{key:"notifyElevationSourceChange",value:function(){}}]),e}(),Z=function(){function e(){(0,o.Z)(this,e)}return(0,u.Z)(e,[{key:"filter",value:function(e,t){var n=e.point,r=e.distance;if(null==n.z)return t;if(0===t.length)return t;var i=function(e){return"number"==typeof e?{x:e,y:e,z:e}:e}(r),a=this._updateCandidatesTo3D(t,n,i).filter(k);return a.sort(C),a}},{key:"_updateCandidatesTo3D",value:function(e,t,n){var r,a=(0,i.Z)(e);try{for(a.s();!(r=a.n()).done;){var s=r.value;switch(s.type){case"edge":S(s,t,n);continue;case"vertex":b(s,t,n);continue}}}catch(o){a.e(o)}finally{a.f()}return e}}]),e}();function k(e){return e.distance<=1}function w(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e?new Z:new x}function S(e,t,n){var r=n.x,i=n.y,a=n.z,s=e.start,o=e.end,u=e.target;e.draped||function(e,t,n,r){var i=r.x-n.x,a=r.y-n.y,s=r.z-n.z,o=i*i+a*a+s*s,u=(t.x-n.x)*i+(t.y-n.y)*a+s*(t.z-n.z),c=Math.min(1,Math.max(0,u/o)),l=n.x+i*c,h=n.y+a*c,f=n.z+s*c;e.x=l,e.y=h,e.z=f}(u,t,s,o);var c=(t.x-u.x)/r,l=(t.y-u.y)/i,h=(t.z-u.z)/a;e.distance=Math.sqrt(c*c+l*l+h*h)}function b(e,t,n){var r=n.x,i=n.y,a=n.z,s=e.target,o=(t.x-s.x)/r,u=(t.y-s.y)/i,c=(t.z-s.z)/a,l=Math.sqrt(o*o+u*u+c*c);e.distance=l}function C(e,t){return e.distance-t.distance}function I(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return e?new P(t):new E}var E=function(){function e(){(0,o.Z)(this,e)}return(0,u.Z)(e,[{key:"fetch",value:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",[]);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"notifySymbologyChange",value:function(){}}]),e}(),P=function(){function e(t){(0,o.Z)(this,e),this._getSymbologyCandidates=t,this._candidatesCache=new l.e(1024),this._cacheVersion=0}return(0,u.Z)(e,[{key:"fetch",value:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t,n){var r,s,o,u,l,f,d,p,v,y,_,g,m,x,Z,k,w,S,b,C,I;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=2;break}return e.abrupt("return",[]);case 2:r=[],s=[],o=this._candidatesCache,u=(0,i.Z)(t);try{for(u.s();!(l=u.n()).done;)if(f=l.value,d=O(f),p=o.get(d)){v=(0,i.Z)(p);try{for(v.s();!(y=v.n()).done;)_=y.value,s.push((0,c.y)(_))}catch(a){v.e(a)}finally{v.f()}}else r.push(f),o.put(d,[],1)}catch(a){u.e(a)}finally{u.f()}if(0!==r.length){e.next=7;break}return e.abrupt("return",s);case 7:return g=this._cacheVersion,e.next=10,this._getSymbologyCandidates(r,n);case 10:if(m=e.sent,x=m.candidates,Z=m.sourceCandidateIndices,(0,h.f)(n),g===this._cacheVersion){e.next=16;break}return e.abrupt("return",this.fetch(t,n));case 16:for(k=[],w=x.length,S=0;S<w;++S)b=x[S],C=O(r[Z[S]]),(I=o.get(C)).push(b),o.put(C,I,I.length),k.push((0,c.y)(b));return e.abrupt("return",s.concat(k));case 19:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"notifySymbologyChange",value:function(){this._candidatesCache.clear(),this._cacheVersion++}}]),e}();function O(e){switch(e.type){case"vertex":var t,n=e.objectId,r=e.target,i="".concat(n,"-vertex-").concat(r.x,"-").concat(r.y,"-").concat(null!==(t=r.z)&&void 0!==t?t:0);return(0,h.a3)(i).toString();case"edge":var a,s,o=e.objectId,u=e.start,c=e.end,l="".concat(o,"-edge-").concat(u.x,"-").concat(u.y,"-").concat(null!==(a=u.z)&&void 0!==a?a:0,"-to-").concat(c.x,"-").concat(c.y,"-").concat(null!==(s=c.z)&&void 0!==s?s:0);return(0,h.a3)(l).toString();default:return""}}}}]);
//# sourceMappingURL=5836.4c897da8.chunk.js.map