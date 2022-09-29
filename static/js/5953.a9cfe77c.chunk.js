"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[5953],{45953:function(e,t,n){n.r(t),n.d(t,{FeatureTileTree3DDebugger:function(){return p}});var i=n(1413),r=n(29439),a=n(15671),l=n(43144),o=n(60136),s=n(29388),u=n(23132),c=(n(91204),n(77470)),h=n(36551),d=(n(75610),n(97033)),y=n(12079),g=n(36460),p=(n(80262),n(30709),n(70441),n(57714),n(80175),n(21583),n(78674),n(66307),n(2760),n(83822),n(51451),n(50526),n(50448),n(41742),n(43920),n(1773),n(77196),n(24980),n(3114),n(22144),n(88370),n(72820),n(78311),n(96349),n(9055),n(79611),n(2157),n(30604),function(e){(0,o.Z)(n,e);var t=(0,s.Z)(n);function n(e){var i;return(0,a.Z)(this,n),(i=t.call(this,e)).watchUpdatingTracking=new d.c,i.handles=new c.u,i}return(0,l.Z)(n,[{key:"initialize",value:function(){var e=this,t=this.view.featureTiles;this.handles.add(t.addClient()),this.watchUpdatingTracking.addOnCollectionChange((function(){return null===t||void 0===t?void 0:t.tiles}),(function(){return e.update()}),h.h)}},{key:"destroy",value:function(){this.handles&&(this.handles.destroy(),this.handles=null),this.watchUpdatingTracking.destroy()}},{key:"getTiles",value:function(){var e=this,t=function(t){var n=(0,r.Z)(t.lij,3),i=n[0],a=n[1],l=n[2];return g.v.fromExtent(e.view.featureTiles.tilingScheme.getExtentGeometry(i,a,l))};return this.view.featureTiles.tiles.toArray().sort((function(e,t){return e.loadPriority-t.loadPriority})).map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{geometry:t(e)})}))}}]),n}(y.b));(0,u.e)([(0,u.d)({readOnly:!0})],p.prototype,"watchUpdatingTracking",void 0),(0,u.e)([(0,u.d)({readOnly:!0,aliasOf:"watchUpdatingTracking.updating"})],p.prototype,"updating",void 0),(0,u.e)([(0,u.d)()],p.prototype,"view",void 0),p=(0,u.e)([(0,u.n)("esri.views.3d.layers.support.FeatureTileTree3DDebugger")],p)},12079:function(e,t,n){n.d(t,{b:function(){return g}});var i=n(15671),r=n(43144),a=n(60136),l=n(29388),o=n(23132),s=n(78674),u=n(83822),c=n(2760),h=n(75610),d=n(24980),y=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]],g=function(e){(0,a.Z)(n,e);var t=(0,l.Z)(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e)).updating=!1,r.enablePolygons=!0,r.enableLabels=!0,r._polygons=new Map,r._labels=new Map,r._enabled=!0,r}return(0,r.Z)(n,[{key:"initialize",value:function(){this._symbols=y.map((function(e){return new d.S({color:[e[0],e[1],e[2],.6],outline:{color:"black",width:1}})})),this.update()}},{key:"destroy",value:function(){this._enabled=!1,this.clear()}},{key:"enabled",get:function(){return this._enabled},set:function(e){this._enabled!==e&&(this._enabled=e,this.update())}},{key:"update",value:function(){var e=this;if(this._enabled){var t=this.getTiles(),n=new Array,i=new Set(this._labels.keys());t.forEach((function(r,a){var l=r.lij.toString();i.delete(l);var o=r.lij[0],y=r.geometry;if(e.enablePolygons&&!e._polygons.has(l)){var g=new u.g({geometry:y,symbol:e._symbols[o%e._symbols.length]});e._polygons.set(l,g),n.push(g)}if(e.enableLabels){var p=function(e){if((0,h.r)(e.label))return e.label;var t=e.lij.toString();return(0,h.r)(e.loadPriority)&&(t+=" (".concat(e.loadPriority,")")),t}(r),v=a/(t.length-1),f=(0,c.Z)(0,200,v),b=(0,c.Z)(20,6,v)/.75,w=(0,h.r)(r.loadPriority)&&r.loadPriority>=t.length,_=new s.l([f,w?0:f,w?0:f]),m="3d"===e.view.type?function(){return new d.e({verticalOffset:{screenLength:40/.75},callout:{type:"line",color:"white",border:{color:"black"}},symbolLayers:[new d.w({text:p,halo:{color:"white",size:1/.75},material:{color:_},size:b})]})}:function(){return new d.a({text:p,haloColor:"white",haloSize:1/.75,color:_,size:b})};if(e._labels.has(l)){var k=e._labels.get(l),T=m();((0,h.t)(k.symbol)||JSON.stringify(T)!==JSON.stringify(k.symbol))&&(k.symbol=T)}else{var Z=new u.g({geometry:y.extent.center,symbol:m()});e._labels.set(l,Z),n.push(Z)}}}));var r=new Array;i.forEach((function(t){e._polygons.has(t)&&(r.push(e._polygons.get(t)),e._polygons.delete(t)),e._labels.has(t)&&(r.push(e._labels.get(t)),e._labels.delete(t))})),this.view.graphics.removeMany(r),this.view.graphics.addMany(n)}else this.clear()}},{key:"clear",value:function(){this.view.graphics.removeMany(Array.from(this._polygons.values())),this.view.graphics.removeMany(Array.from(this._labels.values())),this._polygons.clear(),this._labels.clear()}}]),n}(o.y);(0,o.e)([(0,o.d)({constructOnly:!0})],g.prototype,"view",void 0),(0,o.e)([(0,o.d)({readOnly:!0})],g.prototype,"updating",void 0),(0,o.e)([(0,o.d)()],g.prototype,"enabled",null),g=(0,o.e)([(0,o.n)("esri.views.support.TileTreeDebugger")],g)}}]);
//# sourceMappingURL=5953.a9cfe77c.chunk.js.map