"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[4333],{34333:function(e,t,n){n.r(t),n.d(t,{TerrainTileTree3DDebugger:function(){return p}});var r=n(1413),i=n(15671),l=n(43144),a=n(60136),o=n(29388),s=n(48848),u=n(74384),c=n(93661),h=n(50690),y=n(25456),b=n(48024),p=(n(46817),n(82474),n(40114),n(40558),n(71802),n(89794),n(48200),n(64998),n(25577),n(62610),n(93314),n(37856),n(15751),n(59984),n(20302),n(53586),n(65094),n(60369),n(92072),n(37944),n(86086),n(21385),n(85253),n(93209),n(46337),n(81556),n(93116),n(56162),function(e){(0,a.Z)(n,e);var t=(0,o.Z)(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e)).enablePolygons=!1,r}return(0,l.Z)(n,[{key:"initialize",value:function(){var e=this;(0,h.l)((function(){return e.enabled}),(function(t){return e.view.basemapTerrain.renderPatchBorders=t}),h.h)}},{key:"getTiles",value:function(){var e=(0,c.r)(this.view.basemapTerrain.spatialReference)?this.view.basemapTerrain.spatialReference:null;return this.view.basemapTerrain.test.getRenderedTiles().map((function(t){return(0,r.Z)((0,r.Z)({},t),{},{geometry:u.v.fromExtent((0,y.f)(t.extent,e))})}))}}]),n}(b.b));p=(0,s.e)([(0,s.n)("esri.views.3d.layers.support.TerrainTileTree3DDebugger")],p)},48024:function(e,t,n){n.d(t,{b:function(){return p}});var r=n(15671),i=n(43144),l=n(60136),a=n(29388),o=n(48848),s=n(89794),u=n(64998),c=n(71802),h=n(93661),y=n(37944),b=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]],p=function(e){(0,l.Z)(n,e);var t=(0,a.Z)(n);function n(e){var i;return(0,r.Z)(this,n),(i=t.call(this,e)).updating=!1,i.enablePolygons=!0,i.enableLabels=!0,i._polygons=new Map,i._labels=new Map,i._enabled=!0,i}return(0,i.Z)(n,[{key:"initialize",value:function(){this._symbols=b.map((function(e){return new y.a({color:[e[0],e[1],e[2],.6],outline:{color:"black",width:1}})})),this.update()}},{key:"destroy",value:function(){this._enabled=!1,this.clear()}},{key:"enabled",get:function(){return this._enabled},set:function(e){this._enabled!==e&&(this._enabled=e,this.update())}},{key:"update",value:function(){var e=this;if(this._enabled){var t=this.getTiles(),n=new Array,r=new Set(this._labels.keys());t.forEach((function(i,l){var a=i.lij.toString();r.delete(a);var o=i.lij[0],b=i.geometry;if(e.enablePolygons&&!e._polygons.has(a)){var p=new u.g({geometry:b,symbol:e._symbols[o%e._symbols.length]});e._polygons.set(a,p),n.push(p)}if(e.enableLabels){var g=function(e){if((0,h.r)(e.label))return e.label;var t=e.lij.toString();return(0,h.r)(e.loadPriority)&&(t+=" (".concat(e.loadPriority,")")),t}(i),v=l/(t.length-1),f=(0,c.Z)(0,200,v),d=(0,c.Z)(20,6,v)/.75,w=(0,h.r)(i.loadPriority)&&i.loadPriority>=t.length,_=new s.l([f,w?0:f,w?0:f]),m="3d"===e.view.type?function(){return new y.d({verticalOffset:{screenLength:40/.75},callout:{type:"line",color:"white",border:{color:"black"}},symbolLayers:[new y.A({text:g,halo:{color:"white",size:1/.75},material:{color:_},size:d})]})}:function(){return new y.b({text:g,haloColor:"white",haloSize:1/.75,color:_,size:d})};if(e._labels.has(a)){var T=e._labels.get(a),k=m();((0,h.t)(T.symbol)||JSON.stringify(k)!==JSON.stringify(T.symbol))&&(T.symbol=k)}else{var Z=new u.g({geometry:b.extent.center,symbol:m()});e._labels.set(a,Z),n.push(Z)}}}));var i=new Array;r.forEach((function(t){e._polygons.has(t)&&(i.push(e._polygons.get(t)),e._polygons.delete(t)),e._labels.has(t)&&(i.push(e._labels.get(t)),e._labels.delete(t))})),this.view.graphics.removeMany(i),this.view.graphics.addMany(n)}else this.clear()}},{key:"clear",value:function(){this.view.graphics.removeMany(Array.from(this._polygons.values())),this.view.graphics.removeMany(Array.from(this._labels.values())),this._polygons.clear(),this._labels.clear()}}]),n}(o.m);(0,o.e)([(0,o.y)({constructOnly:!0})],p.prototype,"view",void 0),(0,o.e)([(0,o.y)({readOnly:!0})],p.prototype,"updating",void 0),(0,o.e)([(0,o.y)()],p.prototype,"enabled",null),p=(0,o.e)([(0,o.n)("esri.views.support.TileTreeDebugger")],p)}}]);
//# sourceMappingURL=4333.67baf5db.chunk.js.map