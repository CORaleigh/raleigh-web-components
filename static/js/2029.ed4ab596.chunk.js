"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[2029],{9575:function(e,r,t){t.d(r,{O:function(){return m},S:function(){return S}});var i=t(37762),n=t(97326),o=t(60136),a=t(29388),s=t(93433),u=t(15671),l=t(43144),c=t(23132),p=t(75610),f=t(70441),y=function(){function e(){(0,u.Z)(this,e),this._propertyOriginMap=new Map,this._originStores=new Array(c.a1),this._values=new Map,this.multipleOriginsSupported=!0}return(0,l.Z)(e,[{key:"clone",value:function(r){var t=this,i=new e,n=this._originStores[c.O.DEFAULTS];n&&n.forEach((function(e,r){i.set(r,(0,p.m)(e),c.O.DEFAULTS)}));for(var o=function(e){var n=t._originStores[e];n&&n.forEach((function(t,n){r&&r.has(n)||i.set(n,(0,p.m)(t),e)}))},a=c.O.SERVICE;a<c.a1;a++)o(a);return i}},{key:"get",value:function(e,r){var t=void 0===r?this._values:this._originStores[r];return t?t.get(e):void 0}},{key:"keys",value:function(e){var r=null==e?this._values:this._originStores[e];return r?(0,s.Z)(r.keys()):[]}},{key:"set",value:function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c.O.USER,i=this._originStores[t];if(i||(i=new Map,this._originStores[t]=i),i.set(e,r),!this._values.has(e)||(0,p.q)(this._propertyOriginMap.get(e))<=t){var n=this._values.get(e);return this._values.set(e,r),this._propertyOriginMap.set(e,t),n!==r}return!1}},{key:"delete",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.O.USER,t=this._originStores[r];if(t){var i=t.get(e);if(t.delete(e),this._values.has(e)&&this._propertyOriginMap.get(e)===r){this._values.delete(e);for(var n=r-1;n>=0;n--){var o=this._originStores[n];if(o&&o.has(e)){this._values.set(e,o.get(e)),this._propertyOriginMap.set(e,n);break}}}return i}}},{key:"has",value:function(e,r){var t=void 0===r?this._values:this._originStores[r];return!!t&&t.has(e)}},{key:"revert",value:function(e,r){for(;r>0&&!this.has(e,r);)--r;var t=this._originStores[r],i=t&&t.get(e),n=this._values.get(e);return this._values.set(e,i),this._propertyOriginMap.set(e,r),n!==i}},{key:"originOf",value:function(e){return this._propertyOriginMap.get(e)||c.O.DEFAULTS}},{key:"forEach",value:function(e){this._values.forEach(e)}}]),e}(),v=function(e){var r=function(e){(0,o.Z)(t,e);var r=(0,a.Z)(t);function t(){var e;(0,u.Z)(this,t);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];e=r.call.apply(r,[this].concat(o));var s=(0,p.q)((0,c.Q)((0,n.Z)(e))),l=s.store,v=new y;return s.store=v,(0,f.e)(s,l,v),e}return(0,l.Z)(t,[{key:"read",value:function(e,r){(0,f.a)(this,e,r)}},{key:"getAtOrigin",value:function(e,r){var t=d(this),i=(0,c.X)(r);if("string"==typeof e)return t.get(e,i);var n={};return e.forEach((function(e){n[e]=t.get(e,i)})),n}},{key:"originOf",value:function(e){return(0,c.a2)(this.originIdOf(e))}},{key:"originIdOf",value:function(e){return d(this).originOf(e)}},{key:"revert",value:function(e,r){var t=d(this),i=(0,c.X)(r),n=(0,c.Q)(this);("string"==typeof e?"*"===e?t.keys(i):[e]:e).forEach((function(e){n.invalidate(e),t.revert(e,i),n.commit(e)}))}}]),t}(e);return r=(0,c.e)([(0,c.n)("esri.core.ReadOnlyMultiOriginJSONSupport")],r),r};function d(e){return(0,c.Q)(e).store}var g=function(e){(0,o.Z)(t,e);var r=(0,a.Z)(t);function t(){return(0,u.Z)(this,t),r.apply(this,arguments)}return(0,l.Z)(t)}(v(c.y));g=(0,c.e)([(0,c.n)("esri.core.ReadOnlyMultiOriginJSONSupport")],g);function h(e){return(0,c.Q)(e).store}var m=function(e){var r=function(e){(0,o.Z)(t,e);var r=(0,a.Z)(t);function t(){(0,u.Z)(this,t);for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return r.call.apply(r,[this].concat(i))}return(0,l.Z)(t)}(function(e){var r=function(e){(0,o.Z)(t,e);var r=(0,a.Z)(t);function t(){(0,u.Z)(this,t);for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return r.call.apply(r,[this].concat(i))}return(0,l.Z)(t,[{key:"clear",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"user";return h(this).delete(e,(0,c.X)(r))}},{key:"write",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;return(0,f.b)(this,e=e||{},r),e}},{key:"setAtOrigin",value:function(e,r,t){(0,c.Q)(this).setAtOrigin(e,r,(0,c.X)(t))}},{key:"removeOrigin",value:function(e){var r,t=h(this),n=(0,c.X)(e),o=t.keys(n),a=(0,i.Z)(o);try{for(a.s();!(r=a.n()).done;){var s=r.value;t.originOf(s)===n&&t.set(s,t.get(s,n),c.O.USER)}}catch(u){a.e(u)}finally{a.f()}}},{key:"updateOrigin",value:function(e,r){for(var t=h(this),i=(0,c.X)(r),n=this.get(e),o=i+1;o<c.a1;++o)t.delete(e,o);t.set(e,n,i)}},{key:"toJSON",value:function(e){return this.write({},e)}}]),t}(e);return(r=(0,c.e)([(0,c.n)("esri.core.WriteableMultiOriginJSONSupport")],r)).prototype.toJSON.isDefaultToJSON=!0,r}(v(e)));return r=(0,c.e)([(0,c.n)("esri.core.MultiOriginJSONSupport")],r)},S=function(e){(0,o.Z)(t,e);var r=(0,a.Z)(t);function t(){return(0,u.Z)(this,t),r.apply(this,arguments)}return(0,l.Z)(t)}(m(c.y));S=(0,c.e)([(0,c.n)("esri.core.MultiOriginJSONSupport")],S)},28623:function(e,r,t){t.d(r,{c:function(){return g},u:function(){return h}});var i=t(1413),n=t(15671),o=t(43144),a=t(11752),s=t(61120),u=t(60136),l=t(29388),c=t(23132),p=t(57714),f=(t(75610),t(30709)),y=t(70441),v=t(18411),d={"web-scene/operational-layers":{ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,GroupLayer:!0,IntegratedMeshLayer:!0,OGCFeatureLayer:!0,PointCloudLayer:!0,WebTiledLayer:!0,CSV:!0,GeoJSON:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,KML:!0,RasterDataLayer:!0,Voxel:!0,LineOfSightLayer:!0},"web-scene/basemap":{ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,WebTiledLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,ArcGISImageServiceLayer:!0,WMS:!0,ArcGISMapServiceLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-map/operational-layers":{ArcGISAnnotationLayer:!0,ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,CSV:!0,GeoRSS:!0,GeoJSON:!0,GroupLayer:!0,KML:!0,OGCFeatureLayer:!0,SubtypeGroupLayer:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},"web-map/basemap":{ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0},"web-map/tables":{ArcGISFeatureLayer:!0},"portal-item/operational-layers":{ArcGISFeatureLayer:!0,ArcGISSceneServiceLayer:!0,PointCloudLayer:!0,BuildingSceneLayer:!0,IntegratedMeshLayer:!0}},g=function(e){var r=function(e){(0,u.Z)(t,e);var r=(0,l.Z)(t);function t(){var e;return(0,n.Z)(this,t),(e=r.apply(this,arguments)).title=null,e}return(0,o.Z)(t,[{key:"writeListMode",value:function(e,r,t,i){(i&&"ground"===i.layerContainerType||e&&(0,y.g)(this,t,{},i))&&(r[t]=e)}},{key:"writeOperationalLayerType",value:function(e,r,t,i){!e||i&&"tables"===i.layerContainerType||(r.layerType=e)}},{key:"writeTitle",value:function(e,r){r.title=e||"Layer"}},{key:"read",value:function(e,r){var i=this;r&&(r.layer=this),(0,y.d)(this,e,(function(r){return(0,a.Z)((0,s.Z)(t.prototype),"read",i).call(i,e,r)}),r)}},{key:"write",value:function(e,r){var n;if(null!==r&&void 0!==r&&r.origin){var o,u="".concat(r.origin,"/").concat(r.layerContainerType||"operational-layers"),l=d[u],f=l&&l[this.operationalLayerType];if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===u&&(f=!1),!f)return null!==(o=r.messages)&&void 0!==o&&o.push(new c.a("layer:unsupported","Layers (".concat(this.title,", ").concat(this.id,") of type '").concat(this.declaredClass,"' are not supported in the context of '").concat(u,"'"),{layer:this})),null}var y=(0,a.Z)((0,s.Z)(t.prototype),"write",this).call(this,e,(0,i.Z)((0,i.Z)({},r),{},{layer:this})),v=!!r&&!!r.messages&&!!r.messages.filter((function(e){return e instanceof c.a&&"web-document-write:property-required"===e.name})).length;return(0,p.V)(null===y||void 0===y?void 0:y.url)?(null!==r&&void 0!==r&&null!==(n=r.messages)&&void 0!==n&&n.push(new c.a("layer:invalid-url","Layer (".concat(this.title,", ").concat(this.id,") of type '").concat(this.declaredClass,"' using a Blob URL cannot be written to web scenes and web maps"),{layer:this})),null):!this.url&&v?null:y}},{key:"beforeSave",value:function(){}}]),t}(e);return(0,c.e)([(0,c.d)({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],r.prototype,"id",void 0),(0,c.e)([(0,c.d)(v.D)],r.prototype,"listMode",void 0),(0,c.e)([(0,f.r)("listMode")],r.prototype,"writeListMode",null),(0,c.e)([(0,c.d)({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1}}}})],r.prototype,"operationalLayerType",void 0),(0,c.e)([(0,f.r)("operationalLayerType")],r.prototype,"writeOperationalLayerType",null),(0,c.e)([(0,c.d)(v.w)],r.prototype,"opacity",void 0),(0,c.e)([(0,c.d)({type:String,json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],r.prototype,"title",void 0),(0,c.e)([(0,f.r)([void 0,"web-scene"],"title")],r.prototype,"writeTitle",null),(0,c.e)([(0,c.d)({type:Boolean,json:{name:"visibility"}})],r.prototype,"visible",void 0),r=(0,c.e)([(0,c.n)("esri.layers.mixins.OperationalLayer")],r)};function h(e){return"operationalLayerType"in e}},18411:function(e,r,t){t.d(r,{D:function(){return Q},I:function(){return P},a:function(){return b},b:function(){return X},c:function(){return B},d:function(){return C},f:function(){return F},g:function(){return W},j:function(){return U},l:function(){return j},m:function(){return D},n:function(){return E},p:function(){return R},r:function(){return T},u:function(){return q},v:function(){return z},w:function(){return J},x:function(){return N},y:function(){return V}});var i,n=t(1413),o=t(11752),a=t(61120),s=t(74165),u=t(15861),l=t(15671),c=t(43144),p=t(60136),f=t(29388),y=t(36638),v=t(80262),d=t(30709),g=t(96349),h=t(75610),m=t(23132),S=t(57714),w=t(70441),I=t(50526),L=t(44455),O=t(88370),b={inches:(0,L.N)(1,"meters","inches"),feet:(0,L.N)(1,"meters","feet"),"us-feet":(0,L.N)(1,"meters","us-feet"),yards:(0,L.N)(1,"meters","yards"),miles:(0,L.N)(1,"meters","miles"),"nautical-miles":(0,L.N)(1,"meters","nautical-miles"),millimeters:(0,L.N)(1,"meters","millimeters"),centimeters:(0,L.N)(1,"meters","centimeters"),decimeters:(0,L.N)(1,"meters","decimeters"),meters:(0,L.N)(1,"meters","meters"),kilometers:(0,L.N)(1,"meters","kilometers"),"decimal-degrees":1/(0,L.a)(1,"meters",d.s.radius)};var Z=i=function(e){(0,p.Z)(t,e);var r=(0,f.Z)(t);function t(){return(0,l.Z)(this,t),r.apply(this,arguments)}return(0,c.Z)(t,[{key:"collectRequiredFields",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(r,t){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,I.b)(r,t,this.expression));case 1:case"end":return e.stop()}}),e,this)})));return function(r,t){return e.apply(this,arguments)}}()},{key:"clone",value:function(){return new i({expression:this.expression,title:this.title})}},{key:"equals",value:function(e){return this.expression===e.expression&&this.title===e.title}}]),t}(w.l);(0,m.e)([(0,m.d)({type:String,json:{write:!0}})],Z.prototype,"expression",void 0),(0,m.e)([(0,m.d)({type:String,json:{write:!0}})],Z.prototype,"title",void 0);var k=Z=i=(0,m.e)([(0,m.n)("esri.layers.support.FeatureExpressionInfo")],Z);function E(e){return null!=b[e]}function T(e){return 1/(b[e]||1)}var M,A=function(){var e=Object.keys(b);return e.sort(),e}(),x=(0,S.o)()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),G=new S.s({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"}),_=M=function(e){(0,p.Z)(t,e);var r=(0,f.Z)(t);function t(){var e;return(0,l.Z)(this,t),(e=r.apply(this,arguments)).offset=null,e}return(0,c.Z)(t,[{key:"readFeatureExpressionInfo",value:function(e,r){return null!=e?e:r.featureExpression&&0===r.featureExpression.value?{expression:"0"}:void 0}},{key:"writeFeatureExpressionInfo",value:function(e,r,t,i){r[t]=e.write({},i),"0"===e.expression&&(r.featureExpression={value:0})}},{key:"mode",get:function(){var e=this.offset,r=this.featureExpressionInfo;return this._isOverridden("mode")?this._get("mode"):(0,h.r)(e)||r?"relative-to-ground":"on-the-ground"},set:function(e){this._override("mode",e)}},{key:"unit",set:function(e){this._set("unit",e)}},{key:"write",value:function(e,r){return this.offset||this.mode||this.featureExpressionInfo||this.unit?(0,o.Z)((0,a.Z)(t.prototype),"write",this).call(this,e,r):null}},{key:"clone",value:function(){return new M({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}},{key:"equals",value:function(e){return this.mode===e.mode&&this.offset===e.offset&&this.unit===e.unit&&(0,h.w)(this.featureExpressionInfo,e.featureExpressionInfo)}}]),t}(w.l);(0,m.e)([(0,m.d)({type:k,json:{write:!0}})],_.prototype,"featureExpressionInfo",void 0),(0,m.e)([(0,d.o)("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],_.prototype,"readFeatureExpressionInfo",null),(0,m.e)([(0,d.r)("featureExpressionInfo",{featureExpressionInfo:{type:k},"featureExpression.value":{type:[0]}})],_.prototype,"writeFeatureExpressionInfo",null),(0,m.e)([(0,m.d)({type:x.apiValues,nonNullable:!0,json:{type:x.jsonValues,read:x.read,write:{writer:x.write,isRequired:!0}}})],_.prototype,"mode",null),(0,m.e)([(0,m.d)({type:Number,json:{write:!0}})],_.prototype,"offset",void 0),(0,m.e)([(0,m.d)({type:A,json:{type:String,read:G.read,write:G.write}})],_.prototype,"unit",null);var N=_=M=(0,m.e)([(0,m.n)("esri.layers.support.ElevationInfo")],_),j={type:Boolean,value:!0,json:{origins:{service:{read:!1,write:!1},"web-map":{read:!1,write:!1}},name:"screenSizePerspective",write:!0}},R={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:function(e,r){return!r.disablePopup}},write:{enabled:!0,writer:function(e,r,t){r[t]=!e}}}},D={type:Boolean,value:!0,json:{name:"showLabels",write:!0}},F={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:g.p}}},B={type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:!0}},C={value:null,type:N,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:!0}};function V(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}var J={type:Number,json:{origins:{"web-document":{write:!0,read:!0},"portal-item":{write:!0}}}},q=(0,n.Z)((0,n.Z)({},J),{},{json:(0,n.Z)((0,n.Z)({},J.json),{},{origins:{"web-document":(0,n.Z)((0,n.Z)({},J.json.origins["web-document"]),{},{write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}})},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:function(e,r,t){return t&&"service"!==t.origin||!r.drawingInfo||void 0===r.drawingInfo.transparency?r.layerDefinition&&r.layerDefinition.drawingInfo&&void 0!==r.layerDefinition.drawingInfo.transparency?(0,O.r)(r.layerDefinition.drawingInfo.transparency):void 0:(0,O.r)(r.drawingInfo.transparency)}}})}),W={type:y.y,readOnly:!0,get:function(){var e,r;if(null===(e=this.layer)||void 0===e||!e.timeInfo)return null;var t=this.layer,i=t.datesInUnknownTimezone,n=t.timeOffset,o=t.useViewTime,a=null===(r=this.view)||void 0===r?void 0:r.timeExtent,s=this.layer.timeExtent;i&&(s=function(e){if(!e)return e;var r=e.start,t=e.end;return new y.y({start:(0,h.r)(r)?(0,y.n)(r,r.getTimezoneOffset(),"minutes"):r,end:(0,h.r)(t)?(0,y.n)(t,t.getTimezoneOffset(),"minutes"):t})}(s));var u=o?a&&s?a.intersection(s):a||s:s;if(!u||u.isEmpty||u.isAllTime)return u;n&&(u=u.offset(-n.value,n.unit)),i&&(u=function(e){if(!e)return e;var r=e.start,t=e.end;return new y.y({start:(0,h.r)(r)?(0,y.n)(r,-r.getTimezoneOffset(),"minutes"):r,end:(0,h.r)(t)?(0,y.n)(t,-t.getTimezoneOffset(),"minutes"):t})}(u));var l=this._get("timeExtent");return u.equals(l)?l:u}},U={type:v.M,readOnly:!0,json:{origins:{service:{read:{source:["fullExtent","spatialReference"],reader:function(e,r){var t=v.M.fromJSON(e);return null!=r.spatialReference&&"object"==typeof r.spatialReference&&(t.spatialReference=d.k.fromJSON(r.spatialReference)),t}}}},read:!1}},z={type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}}}},X={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.minScale"},write:{target:"layerDefinition.minScale"}}},P={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.maxScale"},write:{target:"layerDefinition.maxScale"}}},Q={json:{write:{ignoreOrigin:!0},origins:{"web-map":{read:!1,write:!1}}}}}}]);
//# sourceMappingURL=2029.ed4ab596.chunk.js.map