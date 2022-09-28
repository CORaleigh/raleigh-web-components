"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[2046],{82046:function(e,t,r){r.r(t);var n,i=r(29439),o=r(37762),a=r(15671),l=r(43144),s=r(60136),u=r(29388),y=r(50165),f=r(33530),p=r(89031),c=r(13994),m=r(32335),v=r(77322),h=r(78664),d=r(49961),g=(r(96263),r(31278),r(98496),r(40133),r(4483),r(79747),r(42),r(52155),r(75662),r(17493),r(62980),r(16377),r(9887),r(88406),r(66307),r(2760),r(42488),r(9330),r(79146),r(3029),r(42687),r(78330),r(78697),r(31412),new c.s({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null})),w=n=function(e){(0,s.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n;return(0,a.Z)(this,r),(n=t.call(this,e)).displayFieldName=null,n.exceededTransferLimit=!1,n.features=[],n.fields=null,n.geometryType=null,n.hasM=!1,n.hasZ=!1,n.queryGeometry=null,n.spatialReference=null,n}return(0,l.Z)(r,[{key:"readFeatures",value:function(e,t){for(var r=v.k.fromJSON(t.spatialReference),n=[],i=0;i<e.length;i++){var o=e[i],a=p.g.fromJSON(o),l=o.geometry&&o.geometry.spatialReference;(0,y.r)(a.geometry)&&!l&&(a.geometry.spatialReference=r);var s=o.aggregateGeometries,u=a.aggregateGeometries;if(s&&(0,y.r)(u))for(var f in u){var c,m=u[f],h=null===(c=s[f])||void 0===c?void 0:c.spatialReference;(0,y.r)(m)&&!h&&(m.spatialReference=r)}n.push(a)}return n}},{key:"writeGeometryType",value:function(e,t,r,n){if(e)g.write(e,t,r,n);else{var i=this.features;if(i){var a,l=(0,o.Z)(i);try{for(l.s();!(a=l.n()).done;){var s=a.value;if(s&&(0,y.r)(s.geometry))return void g.write(s.geometry.type,t,r,n)}}catch(u){l.e(u)}finally{l.f()}}}}},{key:"readQueryGeometry",value:function(e,t){if(!e)return null;var r=!!e.spatialReference,n=(0,h.d)(e);return!r&&t.spatialReference&&(n.spatialReference=v.k.fromJSON(t.spatialReference)),n}},{key:"writeSpatialReference",value:function(e,t){if(e)t.spatialReference=e.toJSON();else{var r=this.features;if(r){var n,i=(0,o.Z)(r);try{for(i.s();!(n=i.n()).done;){var a=n.value;if(a&&(0,y.r)(a.geometry)&&a.geometry.spatialReference)return void(t.spatialReference=a.geometry.spatialReference.toJSON())}}catch(l){i.e(l)}finally{i.f()}}}}},{key:"clone",value:function(){return new n(this.cloneProperties())}},{key:"cloneProperties",value:function(){return(0,y.m)({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}},{key:"toJSON",value:function(e){var t=this.write();if(t.features&&Array.isArray(e)&&e.length>0)for(var r=0;r<t.features.length;r++){var n=t.features[r];if(n.geometry){var i=e&&e[r];n.geometry=i&&i.toJSON()||n.geometry}}return t}},{key:"quantize",value:function(e){for(var t=(0,i.Z)(e.scale,2),r=t[0],n=t[1],o=(0,i.Z)(e.translate,2),a=o[0],l=o[1],s=this.features,u=this._getQuantizationFunction(this.geometryType,(function(e){return Math.round((e-a)/r)}),(function(e){return Math.round((l-e)/n)})),f=0,p=s.length;f<p;f++)u((0,y.g)(s[f].geometry))||(s.splice(f,1),f--,p--);return this.transform=e,this}},{key:"unquantize",value:function(){var e=this.geometryType,t=this.features,r=this.transform;if(!r)return this;var n,a=(0,i.Z)(r.translate,2),l=a[0],s=a[1],u=(0,i.Z)(r.scale,2),f=u[0],p=u[1],c=this._getHydrationFunction(e,(function(e){return e*f+l}),(function(e){return s-e*p})),m=(0,o.Z)(t);try{for(m.s();!(n=m.n()).done;){var v=n.value.geometry;(0,y.r)(v)&&c(v)}}catch(h){m.e(h)}finally{m.f()}return this.transform=null,this}},{key:"_quantizePoints",value:function(e,t,r){for(var n,i,o=[],a=0,l=e.length;a<l;a++){var s=e[a];if(a>0){var u=t(s[0]),y=r(s[1]);u===n&&y===i||(o.push([u-n,y-i]),n=u,i=y)}else n=t(s[0]),i=r(s[1]),o.push([n,i])}return o.length>0?o:null}},{key:"_getQuantizationFunction",value:function(e,t,r){var n=this;return"point"===e?function(e){return e.x=t(e.x),e.y=r(e.y),e}:"polyline"===e||"polygon"===e?function(e){for(var i=(0,h.c)(e)?e.rings:e.paths,o=[],a=0,l=i.length;a<l;a++){var s=i[a],u=n._quantizePoints(s,t,r);u&&o.push(u)}return o.length>0?((0,h.c)(e)?e.rings=o:e.paths=o,e):null}:"multipoint"===e?function(e){var i=n._quantizePoints(e.points,t,r);return i.length>0?(e.points=i,e):null}:"extent"===e?function(e){return e}:null}},{key:"_getHydrationFunction",value:function(e,t,r){return"point"===e?function(e){e.x=t(e.x),e.y=r(e.y)}:"polyline"===e||"polygon"===e?function(e){for(var n,i,o=(0,h.c)(e)?e.rings:e.paths,a=0,l=o.length;a<l;a++)for(var s=o[a],u=0,y=s.length;u<y;u++){var f=s[u];u>0?(n+=f[0],i+=f[1]):(n=f[0],i=f[1]),f[0]=t(n),f[1]=r(i)}}:"extent"===e?function(e){e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax)}:"multipoint"===e?function(e){for(var n,i,o=e.points,a=0,l=o.length;a<l;a++){var s=o[a];a>0?(n+=s[0],i+=s[1]):(n=s[0],i=s[1]),s[0]=t(n),s[1]=r(i)}}:void 0}}]),r}(m.l);(0,y.e)([(0,y.d)({type:String,json:{write:!0}})],w.prototype,"displayFieldName",void 0),(0,y.e)([(0,y.d)({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],w.prototype,"exceededTransferLimit",void 0),(0,y.e)([(0,y.d)({type:[p.g],json:{write:!0}})],w.prototype,"features",void 0),(0,y.e)([(0,v.o)("features")],w.prototype,"readFeatures",null),(0,y.e)([(0,y.d)({type:[d.y],json:{write:!0}})],w.prototype,"fields",void 0),(0,y.e)([(0,y.d)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:g.read}}})],w.prototype,"geometryType",void 0),(0,y.e)([(0,v.r)("geometryType")],w.prototype,"writeGeometryType",null),(0,y.e)([(0,y.d)({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],w.prototype,"hasM",void 0),(0,y.e)([(0,y.d)({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],w.prototype,"hasZ",void 0),(0,y.e)([(0,y.d)({types:f.i,json:{write:!0}})],w.prototype,"queryGeometry",void 0),(0,y.e)([(0,v.o)("queryGeometry")],w.prototype,"readQueryGeometry",null),(0,y.e)([(0,y.d)({type:v.k,json:{write:!0}})],w.prototype,"spatialReference",void 0),(0,y.e)([(0,v.r)("spatialReference")],w.prototype,"writeSpatialReference",null),(0,y.e)([(0,y.d)({json:{write:!0}})],w.prototype,"transform",void 0),(w=n=(0,y.e)([(0,y.n)("esri.rest.support.FeatureSet")],w)).prototype.toJSON.isDefaultToJSON=!0;var x=w;t.default=x}}]);
//# sourceMappingURL=2046.aeada8d1.chunk.js.map