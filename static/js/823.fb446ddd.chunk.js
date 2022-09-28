"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[823],{40823:function(e,t,n){n.r(t),n.d(t,{FeatureTileTree3DDebugger:function(){return p}});var i=n(1413),r=n(29439),a=n(15671),l=n(43144),o=n(60136),s=n(29388),u=n(50165),c=(n(33530),n(69738)),h=n(73627),d=n(22984),y=n(55024),g=n(31278),p=(n(96263),n(77322),n(32335),n(13994),n(40133),n(88406),n(66307),n(2760),n(89031),n(98496),n(4483),n(79747),n(42),n(52155),n(75662),n(17493),n(62980),n(16377),n(9887),n(42488),n(9330),n(79146),n(3029),n(42687),n(78330),n(78697),n(78664),function(e){(0,o.Z)(n,e);var t=(0,s.Z)(n);function n(e){var i;return(0,a.Z)(this,n),(i=t.call(this,e)).watchUpdatingTracking=new d.c,i.handles=new c.u,i}return(0,l.Z)(n,[{key:"initialize",value:function(){var e=this,t=this.view.featureTiles;this.handles.add(t.addClient()),this.watchUpdatingTracking.addOnCollectionChange((function(){return null===t||void 0===t?void 0:t.tiles}),(function(){return e.update()}),h.h)}},{key:"destroy",value:function(){this.handles&&(this.handles.destroy(),this.handles=null),this.watchUpdatingTracking.destroy()}},{key:"getTiles",value:function(){var e=this,t=function(t){var n=(0,r.Z)(t.lij,3),i=n[0],a=n[1],l=n[2];return g.v.fromExtent(e.view.featureTiles.tilingScheme.getExtentGeometry(i,a,l))};return this.view.featureTiles.tiles.toArray().sort((function(e,t){return e.loadPriority-t.loadPriority})).map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{geometry:t(e)})}))}}]),n}(y.b));(0,u.e)([(0,u.d)({readOnly:!0})],p.prototype,"watchUpdatingTracking",void 0),(0,u.e)([(0,u.d)({readOnly:!0,aliasOf:"watchUpdatingTracking.updating"})],p.prototype,"updating",void 0),(0,u.e)([(0,u.d)()],p.prototype,"view",void 0),p=(0,u.e)([(0,u.n)("esri.views.3d.layers.support.FeatureTileTree3DDebugger")],p)},55024:function(e,t,n){n.d(t,{b:function(){return y}});var i=n(15671),r=n(43144),a=n(60136),l=n(29388),o=n(50165),s=n(88406),u=n(89031),c=n(2760),h=n(62980),d=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]],y=function(e){(0,a.Z)(n,e);var t=(0,l.Z)(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e)).updating=!1,r.enablePolygons=!0,r.enableLabels=!0,r._polygons=new Map,r._labels=new Map,r._enabled=!0,r}return(0,r.Z)(n,[{key:"initialize",value:function(){this._symbols=d.map((function(e){return new h.S({color:[e[0],e[1],e[2],.6],outline:{color:"black",width:1}})})),this.update()}},{key:"destroy",value:function(){this._enabled=!1,this.clear()}},{key:"enabled",get:function(){return this._enabled},set:function(e){this._enabled!==e&&(this._enabled=e,this.update())}},{key:"update",value:function(){var e=this;if(this._enabled){var t=this.getTiles(),n=new Array,i=new Set(this._labels.keys());t.forEach((function(r,a){var l=r.lij.toString();i.delete(l);var d=r.lij[0],y=r.geometry;if(e.enablePolygons&&!e._polygons.has(l)){var g=new u.g({geometry:y,symbol:e._symbols[d%e._symbols.length]});e._polygons.set(l,g),n.push(g)}if(e.enableLabels){var p=function(e){if((0,o.r)(e.label))return e.label;var t=e.lij.toString();return(0,o.r)(e.loadPriority)&&(t+=" (".concat(e.loadPriority,")")),t}(r),v=a/(t.length-1),f=(0,c.Z)(0,200,v),b=(0,c.Z)(20,6,v)/.75,w=(0,o.r)(r.loadPriority)&&r.loadPriority>=t.length,_=new s.l([f,w?0:f,w?0:f]),m="3d"===e.view.type?function(){return new h.e({verticalOffset:{screenLength:40/.75},callout:{type:"line",color:"white",border:{color:"black"}},symbolLayers:[new h.w({text:p,halo:{color:"white",size:1/.75},material:{color:_},size:b})]})}:function(){return new h.a({text:p,haloColor:"white",haloSize:1/.75,color:_,size:b})};if(e._labels.has(l)){var k=e._labels.get(l),T=m();((0,o.t)(k.symbol)||JSON.stringify(T)!==JSON.stringify(k.symbol))&&(k.symbol=T)}else{var Z=new u.g({geometry:y.extent.center,symbol:m()});e._labels.set(l,Z),n.push(Z)}}}));var r=new Array;i.forEach((function(t){e._polygons.has(t)&&(r.push(e._polygons.get(t)),e._polygons.delete(t)),e._labels.has(t)&&(r.push(e._labels.get(t)),e._labels.delete(t))})),this.view.graphics.removeMany(r),this.view.graphics.addMany(n)}else this.clear()}},{key:"clear",value:function(){this.view.graphics.removeMany(Array.from(this._polygons.values())),this.view.graphics.removeMany(Array.from(this._labels.values())),this._polygons.clear(),this._labels.clear()}}]),n}(o.y);(0,o.e)([(0,o.d)({constructOnly:!0})],y.prototype,"view",void 0),(0,o.e)([(0,o.d)({readOnly:!0})],y.prototype,"updating",void 0),(0,o.e)([(0,o.d)()],y.prototype,"enabled",null),y=(0,o.e)([(0,o.n)("esri.views.support.TileTreeDebugger")],y)}}]);
//# sourceMappingURL=823.fb446ddd.chunk.js.map