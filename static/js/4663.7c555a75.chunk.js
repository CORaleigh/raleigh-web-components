"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[4663],{64663:function(e,t,n){n.r(t),n.d(t,{TerrainTileTree3DDebugger:function(){return b}});var r=n(1413),i=n(15671),l=n(43144),a=n(60136),o=n(29388),s=n(23132),u=(n(91204),n(36551)),c=(n(75610),n(78311)),h=n(12079),y=n(36460),b=(n(80262),n(30709),n(70441),n(57714),n(21583),n(2760),n(78674),n(66307),n(83822),n(51451),n(80175),n(50526),n(50448),n(41742),n(43920),n(1773),n(77196),n(24980),n(3114),n(22144),n(88370),n(72820),n(96349),n(9055),n(79611),n(2157),n(30604),function(e){(0,a.Z)(n,e);var t=(0,o.Z)(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e)).enablePolygons=!1,r}return(0,l.Z)(n,[{key:"initialize",value:function(){var e=this;(0,u.l)((function(){return e.enabled}),(function(t){return e.view.basemapTerrain.renderPatchBorders=t}),u.h)}},{key:"getTiles",value:function(){var e=this;return this.view.basemapTerrain.test.getRenderedTiles().map((function(t){return(0,r.Z)((0,r.Z)({},t),{},{geometry:y.v.fromExtent((0,c.f)(t.extent,e.view.basemapTerrain.spatialReference))})}))}}]),n}(h.b));b=(0,s.e)([(0,s.n)("esri.views.3d.layers.support.TerrainTileTree3DDebugger")],b)},12079:function(e,t,n){n.d(t,{b:function(){return g}});var r=n(15671),i=n(43144),l=n(60136),a=n(29388),o=n(23132),s=n(78674),u=n(83822),c=n(2760),h=n(75610),y=n(24980),b=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]],g=function(e){(0,l.Z)(n,e);var t=(0,a.Z)(n);function n(e){var i;return(0,r.Z)(this,n),(i=t.call(this,e)).updating=!1,i.enablePolygons=!0,i.enableLabels=!0,i._polygons=new Map,i._labels=new Map,i._enabled=!0,i}return(0,i.Z)(n,[{key:"initialize",value:function(){this._symbols=b.map((function(e){return new y.S({color:[e[0],e[1],e[2],.6],outline:{color:"black",width:1}})})),this.update()}},{key:"destroy",value:function(){this._enabled=!1,this.clear()}},{key:"enabled",get:function(){return this._enabled},set:function(e){this._enabled!==e&&(this._enabled=e,this.update())}},{key:"update",value:function(){var e=this;if(this._enabled){var t=this.getTiles(),n=new Array,r=new Set(this._labels.keys());t.forEach((function(i,l){var a=i.lij.toString();r.delete(a);var o=i.lij[0],b=i.geometry;if(e.enablePolygons&&!e._polygons.has(a)){var g=new u.g({geometry:b,symbol:e._symbols[o%e._symbols.length]});e._polygons.set(a,g),n.push(g)}if(e.enableLabels){var p=function(e){if((0,h.r)(e.label))return e.label;var t=e.lij.toString();return(0,h.r)(e.loadPriority)&&(t+=" (".concat(e.loadPriority,")")),t}(i),v=l/(t.length-1),f=(0,c.Z)(0,200,v),d=(0,c.Z)(20,6,v)/.75,w=(0,h.r)(i.loadPriority)&&i.loadPriority>=t.length,_=new s.l([f,w?0:f,w?0:f]),m="3d"===e.view.type?function(){return new y.e({verticalOffset:{screenLength:40/.75},callout:{type:"line",color:"white",border:{color:"black"}},symbolLayers:[new y.w({text:p,halo:{color:"white",size:1/.75},material:{color:_},size:d})]})}:function(){return new y.a({text:p,haloColor:"white",haloSize:1/.75,color:_,size:d})};if(e._labels.has(a)){var k=e._labels.get(a),T=m();((0,h.t)(k.symbol)||JSON.stringify(T)!==JSON.stringify(k.symbol))&&(k.symbol=T)}else{var Z=new u.g({geometry:b.extent.center,symbol:m()});e._labels.set(a,Z),n.push(Z)}}}));var i=new Array;r.forEach((function(t){e._polygons.has(t)&&(i.push(e._polygons.get(t)),e._polygons.delete(t)),e._labels.has(t)&&(i.push(e._labels.get(t)),e._labels.delete(t))})),this.view.graphics.removeMany(i),this.view.graphics.addMany(n)}else this.clear()}},{key:"clear",value:function(){this.view.graphics.removeMany(Array.from(this._polygons.values())),this.view.graphics.removeMany(Array.from(this._labels.values())),this._polygons.clear(),this._labels.clear()}}]),n}(o.y);(0,o.e)([(0,o.d)({constructOnly:!0})],g.prototype,"view",void 0),(0,o.e)([(0,o.d)({readOnly:!0})],g.prototype,"updating",void 0),(0,o.e)([(0,o.d)()],g.prototype,"enabled",null),g=(0,o.e)([(0,o.n)("esri.views.support.TileTreeDebugger")],g)}}]);
//# sourceMappingURL=4663.7c555a75.chunk.js.map