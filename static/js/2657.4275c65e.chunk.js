"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[2657],{49961:function(n,e,t){t.d(e,{n:function(){return N},p:function(){return m},t:function(){return F},u:function(){return b},y:function(){return C}});var r,i=t(15671),o=t(43144),a=t(60136),u=t(29388),s=t(50165),l=t(13994),c=t(32335),f=t(79747),h=t(77322),d=t(31412),m=r=function(n){(0,a.Z)(t,n);var e=(0,u.Z)(t);function t(n){var r;return(0,i.Z)(this,t),(r=e.call(this,n)).name=null,r.code=null,r}return(0,o.Z)(t,[{key:"clone",value:function(){return new r({name:this.name,code:this.code})}}]),t}(c.l);(0,s.e)([(0,s.d)({type:String,json:{write:!0}})],m.prototype,"name",void 0),(0,s.e)([(0,s.d)({type:[String,Number],json:{write:!0}})],m.prototype,"code",void 0),m=r=(0,s.e)([(0,s.n)("esri.layers.support.CodedValue")],m);var p=new l.s({inherited:"inherited",codedValue:"coded-value",range:"range"}),y=function(n){(0,a.Z)(t,n);var e=(0,u.Z)(t);function t(n){var r;return(0,i.Z)(this,t),(r=e.call(this,n)).name=null,r.type=null,r}return(0,o.Z)(t)}(c.l);(0,s.e)([(0,s.d)({type:String,json:{write:!0}})],y.prototype,"name",void 0),(0,s.e)([(0,f.r)(p)],y.prototype,"type",void 0);var v,g=y=(0,s.e)([(0,s.n)("esri.layers.support.Domain")],y),x=v=function(n){(0,a.Z)(t,n);var e=(0,u.Z)(t);function t(n){var r;return(0,i.Z)(this,t),(r=e.call(this,n)).codedValues=null,r.type="coded-value",r}return(0,o.Z)(t,[{key:"getName",value:function(n){var e=null;if(this.codedValues){var t=String(n);this.codedValues.some((function(n){return String(n.code)===t&&(e=n.name),!!e}))}return e}},{key:"clone",value:function(){return new v({codedValues:(0,s.m)(this.codedValues),name:this.name})}}]),t}(g);(0,s.e)([(0,s.d)({type:[m],json:{write:!0}})],x.prototype,"codedValues",void 0),(0,s.e)([(0,f.r)({codedValue:"coded-value"})],x.prototype,"type",void 0);var M,b=x=v=(0,s.e)([(0,s.n)("esri.layers.support.CodedValueDomain")],x),Z=M=function(n){(0,a.Z)(t,n);var e=(0,u.Z)(t);function t(n){var r;return(0,i.Z)(this,t),(r=e.call(this,n)).type="inherited",r}return(0,o.Z)(t,[{key:"clone",value:function(){return new M}}]),t}(g);(0,s.e)([(0,f.r)({inherited:"inherited"})],Z.prototype,"type",void 0);var k,w=Z=M=(0,s.e)([(0,s.n)("esri.layers.support.InheritedDomain")],Z),T=k=function(n){(0,a.Z)(t,n);var e=(0,u.Z)(t);function t(n){var r;return(0,i.Z)(this,t),(r=e.call(this,n)).maxValue=null,r.minValue=null,r.type="range",r}return(0,o.Z)(t,[{key:"clone",value:function(){return new k({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}}]),t}(g);(0,s.e)([(0,s.d)({type:Number,json:{type:[Number],read:{source:"range",reader:function(n,e){return e.range&&e.range[1]}},write:{enabled:!1,overridePolicy:function(){return{enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer:function(n,e,t){e[t]=[this.minValue||0,n]}}}})],T.prototype,"maxValue",void 0),(0,s.e)([(0,s.d)({type:Number,json:{type:[Number],read:{source:"range",reader:function(n,e){return e.range&&e.range[0]}},write:{target:"range",writer:function(n,e,t){e[t]=[n,this.maxValue||0]}}}})],T.prototype,"minValue",void 0),(0,s.e)([(0,f.r)({range:"range"})],T.prototype,"type",void 0);var P,G=T=k=(0,s.e)([(0,s.n)("esri.layers.support.RangeDomain")],T),N={key:"type",base:g,typeMap:{range:G,"coded-value":b,inherited:w}};function F(n){if(!n||!n.type)return null;switch(n.type){case"range":return G.fromJSON(n);case"codedValue":return b.fromJSON(n);case"inherited":return w.fromJSON(n)}return null}var S=new l.s({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"}),I=P=function(n){(0,a.Z)(t,n);var e=(0,u.Z)(t);function t(n){var r;return(0,i.Z)(this,t),(r=e.call(this,n)).alias=null,r.defaultValue=void 0,r.description=null,r.domain=null,r.editable=!0,r.length=-1,r.name=null,r.nullable=!0,r.type=null,r.valueType=null,r}return(0,o.Z)(t,[{key:"readDescription",value:function(n,e){var t,r=e.description;try{t=JSON.parse(r)}catch(i){}return t?t.value:null}},{key:"readValueType",value:function(n,e){var t,r=e.description;try{t=JSON.parse(r)}catch(i){}return t?S.fromJSON(t.fieldValueType):null}},{key:"clone",value:function(){return new P({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType})}}]),t}(c.l);(0,s.e)([(0,s.d)({type:String,json:{write:!0}})],I.prototype,"alias",void 0),(0,s.e)([(0,s.d)({type:[String,Number],json:{write:{allowNull:!0}}})],I.prototype,"defaultValue",void 0),(0,s.e)([(0,s.d)()],I.prototype,"description",void 0),(0,s.e)([(0,h.o)("description")],I.prototype,"readDescription",null),(0,s.e)([(0,s.d)({types:N,json:{read:{reader:F},write:!0}})],I.prototype,"domain",void 0),(0,s.e)([(0,s.d)({type:Boolean,json:{write:!0}})],I.prototype,"editable",void 0),(0,s.e)([(0,s.d)({type:s.S,json:{write:!0}})],I.prototype,"length",void 0),(0,s.e)([(0,s.d)({type:String,json:{write:!0}})],I.prototype,"name",void 0),(0,s.e)([(0,s.d)({type:Boolean,json:{write:!0}})],I.prototype,"nullable",void 0),(0,s.e)([(0,f.r)(d.i)],I.prototype,"type",void 0),(0,s.e)([(0,s.d)()],I.prototype,"valueType",void 0),(0,s.e)([(0,h.o)("valueType",["description"])],I.prototype,"readValueType",null);var C=I=P=(0,s.e)([(0,s.n)("esri.layers.support.Field")],I)},62657:function(n,e,t){t.r(e);var r=t(1413),i=t(37762),o=t(15671),a=t(43144),u=t(50165),s=t(77322),l=t(76375),c=t(27670),f=t(30594),h=t(49961),d=t(62298);t(32335),t(73428),t(13994),t(48561),t(9330),t(96263),t(79146),t(2760),t(75105),t(78664),t(31278),t(33530),t(2326),t(79747),t(31412),t(2815);function m(n,e){return e}function p(n,e,t,r){switch(t){case 0:return x(n,e+r,0);case 1:return"lowerLeft"===n.originPosition?x(n,e+r,1):function(n,e,t){var r=n.translate,i=n.scale;return r[t]-e*i[t]}(n,e+r,1)}}function y(n,e,t,r){return 2===t?x(n,e,2):p(n,e,t,r)}function v(n,e,t,r){return 2===t?x(n,e,3):p(n,e,t,r)}function g(n,e,t,r){return 3===t?x(n,e,3):y(n,e,t,r)}function x(n,e,t){var r=n.translate,i=n.scale;return r[t]+e*i[t]}var M=function(){function n(e){(0,o.Z)(this,n),this.options=e,this.geometryTypes=["point","multipoint","polyline","polygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=m,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this._attributesConstructor=function(){}}return(0,a.Z)(n,[{key:"createFeatureResult",value:function(){return new c.N}},{key:"finishFeatureResult",value:function(n){if(this.options.applyTransform&&(n.transform=null),this._attributesConstructor=function(){},this.coordinateBuffer=null,this.lengths.length=0,n.hasZ){var e=(0,l.o)(n.geometryType,this.options.sourceSpatialReference,n.spatialReference);if(!(0,u.t)(e)){var t,r=(0,i.Z)(n.features);try{for(r.s();!(t=r.n()).done;){e(t.value.geometry)}}catch(o){r.e(o)}finally{r.f()}}}}},{key:"createSpatialReference",value:function(){return new s.k}},{key:"addField",value:function(n,e){n.fields.push(h.y.fromJSON(e));var t=n.fields.map((function(n){return n.name}));this._attributesConstructor=function(){var n,e=(0,i.Z)(t);try{for(e.s();!(n=e.n()).done;){this[n.value]=null}}catch(r){e.e(r)}finally{e.f()}}}},{key:"addFeature",value:function(n,e){var t=this.options.maxStringAttributeLength?this.options.maxStringAttributeLength:0;if(t>0)for(var r in e.attributes){var i=e.attributes[r];"string"==typeof i&&i.length>t&&(e.attributes[r]="")}n.features.push(e)}},{key:"addQueryGeometry",value:function(n,e){var t=e.queryGeometry,r=e.queryGeometryType,i=(0,f.m)(t.clone(),t,!1,!1,this.transform),o=(0,f.n)(i,r,!1,!1),a=null;switch(r){case"esriGeometryPoint":a="point";break;case"esriGeometryPolygon":a="polygon";break;case"esriGeometryPolyline":a="polyline";break;case"esriGeometryMultipoint":a="multipoint"}o.type=a,n.queryGeometryType=r,n.queryGeometry=o}},{key:"prepareFeatures",value:function(n){var e=this;switch(this.transform=n.transform,this.options.applyTransform&&n.transform&&(this.applyTransform=this._deriveApplyTransform(n)),this.vertexDimension=2,n.hasZ&&this.vertexDimension++,n.hasM&&this.vertexDimension++,n.geometryType){case"point":this.addCoordinate=function(n,t,r){return e.addCoordinatePoint(n,t,r)},this.createGeometry=function(n){return e.createPointGeometry(n)};break;case"polygon":this.addCoordinate=function(n,t,r){return e._addCoordinatePolygon(n,t,r)},this.createGeometry=function(n){return e._createPolygonGeometry(n)};break;case"polyline":this.addCoordinate=function(n,t,r){return e._addCoordinatePolyline(n,t,r)},this.createGeometry=function(n){return e._createPolylineGeometry(n)};break;case"multipoint":this.addCoordinate=function(n,t,r){return e._addCoordinateMultipoint(n,t,r)},this.createGeometry=function(n){return e._createMultipointGeometry(n)}}}},{key:"createFeature",value:function(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,new c.j((0,u.Q)(),null,new this._attributesConstructor)}},{key:"allocateCoordinates",value:function(){var n=this.lengths.reduce((function(n,e){return n+e}),0);this.coordinateBuffer=new Float64Array(n*this.vertexDimension),this.coordinateBufferPtr=0}},{key:"addLength",value:function(n,e,t){0===this.lengths.length&&(this.toAddInCurrentPath=e),this.lengths.push(e)}},{key:"createPointGeometry",value:function(n){var e={type:"point",x:0,y:0,spatialReference:n.spatialReference,hasZ:!!n.hasZ,hasM:!!n.hasM};return e.hasZ&&(e.z=0),e.hasM&&(e.m=0),e}},{key:"addCoordinatePoint",value:function(n,e,t){switch(e=this.applyTransform(this.transform,e,t,0),t){case 0:n.x=e;break;case 1:n.y=e;break;case 2:n.hasZ?n.z=e:n.m=e;break;case 3:n.m=e}}},{key:"_transformPathLikeValue",value:function(n,e){var t=0;return e<=1&&(t=this.previousCoordinate[e],this.previousCoordinate[e]+=n),this.applyTransform(this.transform,n,e,t)}},{key:"_addCoordinatePolyline",value:function(n,e,t){this._dehydratedAddPointsCoordinate(n.paths,e,t)}},{key:"_addCoordinatePolygon",value:function(n,e,t){this._dehydratedAddPointsCoordinate(n.rings,e,t)}},{key:"_addCoordinateMultipoint",value:function(n,e,t){0===t&&n.points.push([]);var r=this._transformPathLikeValue(e,t);n.points[n.points.length-1].push(r)}},{key:"_createPolygonGeometry",value:function(n){return{type:"polygon",rings:[[]],spatialReference:n.spatialReference,hasZ:!!n.hasZ,hasM:!!n.hasM}}},{key:"_createPolylineGeometry",value:function(n){return{type:"polyline",paths:[[]],spatialReference:n.spatialReference,hasZ:!!n.hasZ,hasM:!!n.hasM}}},{key:"_createMultipointGeometry",value:function(n){return{type:"multipoint",points:[],spatialReference:n.spatialReference,hasZ:!!n.hasZ,hasM:!!n.hasM}}},{key:"_dehydratedAddPointsCoordinate",value:function(n,e,t){0===t&&0==this.toAddInCurrentPath--&&(n.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);var r=this._transformPathLikeValue(e,t),i=n[n.length-1];0===t&&i.push(new Float64Array(this.coordinateBuffer.buffer,this.coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT,this.vertexDimension)),this.coordinateBuffer[this.coordinateBufferPtr++]=r}},{key:"_deriveApplyTransform",value:function(n){var e=n.hasZ,t=n.hasM;return e&&t?g:e?y:t?v:p}}]),n}(),b=function(){function n(){(0,o.Z)(this,n)}return(0,a.Z)(n,[{key:"_parseFeatureQuery",value:function(n){var e=(0,d.t)(n.buffer,new M(n.options)),t=(0,r.Z)((0,r.Z)({},e),{},{spatialReference:e.spatialReference.toJSON(),fields:e.fields?e.fields.map((function(n){return n.toJSON()})):void 0});return Promise.resolve(t)}}]),n}();e.default=function(){return new b}},9330:function(n,e,t){t.d(e,{A:function(){return S},B:function(){return I},C:function(){return j},D:function(){return z},E:function(){return Z},F:function(){return M},G:function(){return C},H:function(){return B},I:function(){return p},M:function(){return h},N:function(){return v},O:function(){return V},R:function(){return T},S:function(){return R},V:function(){return P},Y:function(){return G},a:function(){return a},b:function(){return k},c:function(){return c},f:function(){return l},g:function(){return g},h:function(){return f},j:function(){return w},k:function(){return _},l:function(){return m},m:function(){return s},p:function(){return x},q:function(){return N},s:function(){return d},u:function(){return u},v:function(){return A},w:function(){return F},y:function(){return y},z:function(){return b}});var r=t(50165),i=t(96263),o=t(79146);function a(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B;return[n[0],n[1],n[2],n[3],n[4],n[5]]}function u(n,e,t,r,i,o){var u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:a();return u[0]=n,u[1]=e,u[2]=t,u[3]=r,u[4]=i,u[5]=o,u}function s(n,e){var t=isFinite(n[2])||isFinite(n[5]);return new i.M(t?{xmin:n[0],xmax:n[3],ymin:n[1],ymax:n[4],zmin:n[2],zmax:n[5],spatialReference:e}:{xmin:n[0],xmax:n[3],ymin:n[1],ymax:n[4],spatialReference:e})}function l(n,e){n[0]=Math.min(n[0],e[0]),n[1]=Math.min(n[1],e[1]),n[2]=Math.min(n[2],e[2]),n[3]=Math.max(n[3],e[3]),n[4]=Math.max(n[4],e[4]),n[5]=Math.max(n[5],e[5])}function c(n,e){n[0]=Math.min(n[0],e[0]),n[1]=Math.min(n[1],e[1]),n[3]=Math.max(n[3],e[2]),n[4]=Math.max(n[4],e[3])}function f(n,e){n[0]=Math.min(n[0],e[0]),n[1]=Math.min(n[1],e[1]),n[2]=Math.min(n[2],e[2]),n[3]=Math.max(n[3],e[0]),n[4]=Math.max(n[4],e[1]),n[5]=Math.max(n[5],e[2])}function h(n,e){for(var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.length/3,i=n[0],o=n[1],a=n[2],u=n[3],s=n[4],l=n[5],c=0;c<r;c++)i=Math.min(i,e[t+3*c]),o=Math.min(o,e[t+3*c+1]),a=Math.min(a,e[t+3*c+2]),u=Math.max(u,e[t+3*c]),s=Math.max(s,e[t+3*c+1]),l=Math.max(l,e[t+3*c+2]);n[0]=i,n[1]=o,n[2]=a,n[3]=u,n[4]=s,n[5]=l}function d(n,e,t){var r=e.length,i=n[0],o=n[1],a=n[2],u=n[3],s=n[4],l=n[5];if(t)for(var c=0;c<r;c++){var f=e[c];i=Math.min(i,f[0]),o=Math.min(o,f[1]),a=Math.min(a,f[2]),u=Math.max(u,f[0]),s=Math.max(s,f[1]),l=Math.max(l,f[2])}else for(var h=0;h<r;h++){var d=e[h];i=Math.min(i,d[0]),o=Math.min(o,d[1]),u=Math.max(u,d[0]),s=Math.max(s,d[1])}n[0]=i,n[1]=o,n[2]=a,n[3]=u,n[4]=s,n[5]=l}function m(n){for(var e=0;e<6;e++)if(!isFinite(n[e]))return!1;return!0}function p(n){return n[0]>=n[3]?0:n[3]-n[0]}function y(n){return n[1]>=n[4]?0:n[4]-n[1]}function v(n){return n[2]>=n[5]?0:n[5]-n[2]}function g(n){var e=p(n),t=v(n),r=y(n);return Math.sqrt(e*e+t*t+r*r)}function x(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0,0];return e[0]=n[0]+p(n)/2,e[1]=n[1]+y(n)/2,e[2]=n[2]+v(n)/2,e}function M(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0,0];return e[0]=p(n),e[1]=y(n),e[2]=v(n),e}function b(n){return Math.max(p(n),v(n),y(n))}function Z(n,e){return e[0]>=n[0]&&e[1]>=n[1]&&e[2]>=n[2]&&e[0]<=n[3]&&e[1]<=n[4]&&e[2]<=n[5]}function k(n,e){return e[0]>=n[0]&&e[1]>=n[1]&&e[2]>=n[2]&&e[3]<=n[3]&&e[4]<=n[4]&&e[5]<=n[5]}function w(n,e){return Math.max(e[0],n[0])<=Math.min(e[3],n[3])&&Math.max(e[1],n[1])<=Math.min(e[4],n[4])&&Math.max(e[2],n[2])<=Math.min(e[5],n[5])}function T(n,e){return!!(0,r.t)(e)||w(n,e)}function P(n,e,t,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n;return i[0]=n[0]+e,i[1]=n[1]+t,i[2]=n[2]+r,i[3]=n[3]+e,i[4]=n[4]+t,i[5]=n[5]+r,i}function G(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n,r=n[0]+p(n)/2,i=n[1]+y(n)/2,o=n[2]+v(n)/2;return t[0]=r+(n[0]-r)*e,t[1]=i+(n[1]-i)*e,t[2]=o+(n[2]-o)*e,t[3]=r+(n[3]-r)*e,t[4]=i+(n[4]-i)*e,t[5]=o+(n[5]-o)*e,t}function N(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n;return t[0]=e[0],t[1]=e[1],t[2]=e[2],t!==n&&(t[3]=n[3],t[4]=n[4],t[5]=n[5]),t}function F(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n;return t[3]=e[0],t[4]=e[1],t[5]=e[2],t!==n&&(t[0]=n[0],t[1]=n[1],t[2]=n[2]),n}function S(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n}function I(n){return n?S(n,z):a(z)}function C(n,e){return e||(e=(0,o.u)()),e[0]=n[0],e[1]=n[1],e[2]=n[3],e[3]=n[4],e}function V(n,e){return n[0]=e[0],n[1]=e[1],n[2]=Number.NEGATIVE_INFINITY,n[3]=e[2],n[4]=e[3],n[5]=Number.POSITIVE_INFINITY,n}function O(n){return 6===n.length}function R(n){return 0===p(n)&&0===y(n)&&0===v(n)}function _(n,e,t){if((0,r.t)(n)||(0,r.t)(e))return n===e;if(!O(n)||!O(e))return!1;if(t){for(var i=0;i<n.length;i++)if(!t(n[i],e[i]))return!1}else for(var o=0;o<n.length;o++)if(n[o]!==e[o])return!1;return!0}function A(n,e,t,r,i,o){return u(n,e,t,r,i,o,E)}var j=[-1/0,-1/0,-1/0,1/0,1/0,1/0],z=[1/0,1/0,1/0,-1/0,-1/0,-1/0],B=[0,0,0,0,0,0],E=a()},79146:function(n,e,t){t.d(e,{D:function(){return I},E:function(){return P},F:function(){return k},H:function(){return V},I:function(){return O},J:function(){return R},K:function(){return _},M:function(){return p},R:function(){return G},U:function(){return N},a:function(){return s},b:function(){return M},c:function(){return c},d:function(){return F},e:function(){return u},f:function(){return f},g:function(){return b},h:function(){return d},j:function(){return Z},l:function(){return v},m:function(){return h},o:function(){return l},p:function(){return x},q:function(){return T},s:function(){return y},u:function(){return a},w:function(){return w},x:function(){return m},y:function(){return g},z:function(){return S}});var r=t(50165),i=t(2760),o=t(96263);function a(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A;return[n[0],n[1],n[2],n[3]]}function u(n){return[n[0],n[1],n[2],n[3]]}function s(n,e){return n!==e&&(n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3]),n}function l(n,e,t,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:a();return i[0]=n,i[1]=e,i[2]=t,i[3]=r,i}function c(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a();return e[0]=n.xmin,e[1]=n.ymin,e[2]=n.xmax,e[3]=n.ymax,e}function f(n,e){return new o.M({xmin:n[0],ymin:n[1],xmax:n[2],ymax:n[3],spatialReference:e})}function h(n,e){e[0]<n[0]&&(n[0]=e[0]),e[0]>n[2]&&(n[2]=e[0]),e[1]<n[1]&&(n[1]=e[1]),e[1]>n[3]&&(n[3]=e[1])}function d(n,e,t){if((0,r.t)(e))s(t,n);else if("length"in e)C(e)?(t[0]=Math.min(n[0],e[0]),t[1]=Math.min(n[1],e[1]),t[2]=Math.max(n[2],e[2]),t[3]=Math.max(n[3],e[3])):2!==e.length&&3!==e.length||(t[0]=Math.min(n[0],e[0]),t[1]=Math.min(n[1],e[1]),t[2]=Math.max(n[2],e[0]),t[3]=Math.max(n[3],e[1]));else switch(e.type){case"extent":t[0]=Math.min(n[0],e.xmin),t[1]=Math.min(n[1],e.ymin),t[2]=Math.max(n[2],e.xmax),t[3]=Math.max(n[3],e.ymax);break;case"point":t[0]=Math.min(n[0],e.x),t[1]=Math.min(n[1],e.y),t[2]=Math.max(n[2],e.x),t[3]=Math.max(n[3],e.y)}}function m(n,e){for(var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n,r=e.length,i=n[0],o=n[1],a=n[2],u=n[3],s=0;s<r;s++){var l=e[s];i=Math.min(i,l[0]),o=Math.min(o,l[1]),a=Math.max(a,l[0]),u=Math.max(u,l[1])}return t[0]=i,t[1]=o,t[2]=a,t[3]=u,t}function p(n){for(var e=0;e<4;e++)if(!isFinite(n[e]))return!1;return!0}function y(n){return(0,r.t)(n)||n[0]>=n[2]?0:n[2]-n[0]}function v(n){return n[1]>=n[3]?0:n[3]-n[1]}function g(n){return y(n)*v(n)}function x(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0];return e[0]=(n[0]+n[2])/2,e[1]=(n[1]+n[3])/2,e}function M(n,e){return w(n,e[0],e[1])}function b(n,e){var t=e[3],r=.5*(n[0]+n[2]),i=Math.abs(e[0]-r),o=.5*(n[2]-n[0]);if(i>t+o)return!1;var a=.5*(n[1]+n[3]),u=.5*(n[3]-n[1]),s=Math.abs(e[1]-a);if(s>t+u)return!1;if(i<o||s<u)return!0;var l=i-o,c=s-u;return l*l+c*c<=t*t}function Z(n,e,t){var r=n[0],i=n[1],o=n[2],a=n[3],u=e.x,s=e.y,l=t.x,c=t.y,f=function(n,e){return(c-s)*n+(u-l)*e+(l*s-u*c)<0},h=f(r,a),d=f(o,a),m=f(o,i),p=f(r,i);return!(h===d&&d===m&&m===p&&p===h||u<r&&l<r||u>o&&l>o||s>a&&c>a||s<i&&c<i)}function k(n,e){return w(n,e.x,e.y)}function w(n,e,t){return e>=n[0]&&t>=n[1]&&e<=n[2]&&t<=n[3]}function T(n,e,t){return e[0]>=n[0]-t&&e[1]>=n[1]-t&&e[0]<=n[2]+t&&e[1]<=n[3]+t}function P(n,e){return Math.max(e[0],n[0])<=Math.min(e[2],n[2])&&Math.max(e[1],n[1])<=Math.min(e[3],n[3])}function G(n,e){return e[0]>=n[0]&&e[2]<=n[2]&&e[1]>=n[1]&&e[3]<=n[3]}function N(n,e,t){if((0,r.t)(e))return s(t,n);var o=e[0],a=e[1],u=e[2],l=e[3];return t[0]=(0,i.o)(n[0],o,u),t[1]=(0,i.o)(n[1],a,l),t[2]=(0,i.o)(n[2],o,u),t[3]=(0,i.o)(n[3],a,l),t}function F(n,e){var t=(n[0]+n[2])/2,r=(n[1]+n[3])/2,i=Math.max(Math.abs(e[0]-t)-y(n)/2,0),o=Math.max(Math.abs(e[1]-r)-v(n)/2,0);return Math.sqrt(i*i+o*o)}function S(n,e,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n;return r[0]=n[0]+e,r[1]=n[1]+t,r[2]=n[2]+e,r[3]=n[3]+t,r}function I(n){return n?s(n,_):a(_)}function C(n){return null!=n&&4===n.length}function V(n){return!(0!==y(n)&&isFinite(n[0])||0!==v(n)&&isFinite(n[1]))}function O(n,e){return C(n)&&C(e)?n[0]===e[0]&&n[1]===e[1]&&n[2]===e[2]&&n[3]===e[3]:n===e}var R=[-1/0,-1/0,1/0,1/0],_=[1/0,1/0,-1/0,-1/0],A=[0,0,0,0]},48561:function(n,e,t){function r(n){return 32+n.length}function i(){return 16}function o(n){if(!n)return 0;var e=32;for(var t in n)if(n.hasOwnProperty(t)){var i=n[t];switch(typeof i){case"string":e+=r(i);break;case"number":e+=16;break;case"boolean":e+=4}}return e}function a(n,e){return 32+n.length*e}var u;t.d(e,{e:function(){return a},n:function(){return r},o:function(){return u},r:function(){return o},t:function(){return i}}),function(n){n[n.KILOBYTES=1024]="KILOBYTES",n[n.MEGABYTES=1048576]="MEGABYTES",n[n.GIGABYTES=1073741824]="GIGABYTES"}(u||(u={}))},27670:function(n,e,t){t.d(e,{A:function(){return M},J:function(){return w},M:function(){return p},N:function(){return y},O:function(){return T},S:function(){return Z},T:function(){return k},j:function(){return m},v:function(){return x},w:function(){return b},z:function(){return v}});var r=t(37762),i=t(43144),o=t(15671),a=t(48561),u=t(50165),s=t(77322),l=t(9330),c=t(79146),f=t(75105),h=t(33530),d=t(49961),m=(0,i.Z)((function n(e,t,r){(0,o.Z)(this,n),this.uid=e,this.geometry=t,this.attributes=r,this.visible=!0,this.objectId=null,this.centroid=null}));function p(n){return(0,u.r)(n.geometry)}var y=(0,i.Z)((function n(){(0,o.Z)(this,n),this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null}));function v(n){var e=h.a.fromJSON(n.geometryType),t=s.k.fromJSON(n.spatialReference),r=n.transform,i=n.features.map((function(i){var o=function(n,e,t,r){return{uid:(0,u.Q)(),objectId:r&&n.attributes?n.attributes[r]:null,attributes:n.attributes,geometry:g(n.geometry,e,t),visible:!0}}(i,e,t,n.objectIdFieldName),a=o.geometry;if((0,u.r)(a)&&r)switch(a.type){case"point":o.geometry=(0,f.v)(r,a,a,a.hasZ,a.hasM);break;case"multipoint":o.geometry=(0,f.q)(r,a,a,a.hasZ,a.hasM);break;case"polygon":o.geometry=(0,f.B)(r,a,a,a.hasZ,a.hasM);break;case"polyline":o.geometry=(0,f.C)(r,a,a,a.hasZ,a.hasM);break;case"extent":case"mesh":o.geometry=a}return o}));return{geometryType:e,features:i,spatialReference:t,fields:n.fields?n.fields.map((function(n){return d.y.fromJSON(n)})):null,objectIdFieldName:n.objectIdFieldName,globalIdFieldName:n.globalIdFieldName,geohashFieldName:n.geohashFieldName,geometryProperties:n.geometryProperties,hasZ:n.hasZ,hasM:n.hasM,exceededTransferLimit:n.exceededTransferLimit,transform:null}}function g(n,e,t){if((0,u.t)(n))return null;switch(e){case"point":var r=n;return{x:r.x,y:r.y,z:r.z,m:r.m,hasZ:null!=r.z,hasM:null!=r.m,type:"point",spatialReference:t};case"polyline":var i=n;return{paths:i.paths,hasZ:!!i.hasZ,hasM:!!i.hasM,type:"polyline",spatialReference:t};case"polygon":var o=n;return{rings:o.rings,hasZ:!!o.hasZ,hasM:!!o.hasM,type:"polygon",spatialReference:t};case"multipoint":var a=n;return{points:a.points,hasZ:!!a.hasZ,hasM:!!a.hasM,type:"multipoint",spatialReference:t}}}function x(n,e,t,r){return{x:n,y:e,z:t,hasZ:null!=t,hasM:!1,spatialReference:r,type:"point"}}function M(n){var e=32;return e+=(0,a.r)(n.attributes),e+=3,e+=8+function(n){if((0,u.t)(n))return 0;var e=32;switch(n.type){case"point":e+=42;break;case"polyline":case"polygon":var t,i=0,o=2+(n.hasZ?1:0)+(n.hasM?1:0),a="polyline"===n.type?n.paths:n.rings,s=(0,r.Z)(a);try{for(s.s();!(t=s.n()).done;)i+=t.value.length}catch(f){s.e(f)}finally{s.f()}e+=8*i*o+64,e+=128*i,e+=34,e+=32*(a.length+1);break;case"multipoint":var l=2+(n.hasZ?1:0)+(n.hasM?1:0),c=n.points.length;e+=8*c*l+64,e+=128*c,e+=34,e+=32;break;case"extent":e+=98,n.hasM&&(e+=32),n.hasZ&&(e+=32);break;case"mesh":e+=(0,u.bd)(n.vertexAttributes.position),e+=(0,u.bd)(n.vertexAttributes.normal),e+=(0,u.bd)(n.vertexAttributes.uv),e+=(0,u.bd)(n.vertexAttributes.tangent)}return e}(n.geometry)}function b(n){if((0,u.t)(n))return 0;switch(n.type){case"point":return 1;case"polyline":var e,t=0,i=(0,r.Z)(n.paths);try{for(i.s();!(e=i.n()).done;){t+=e.value.length}}catch(c){i.e(c)}finally{i.f()}return t;case"polygon":var o,a=0,s=(0,r.Z)(n.rings);try{for(s.s();!(o=s.n()).done;){a+=o.value.length}}catch(c){s.e(c)}finally{s.f()}return a;case"multipoint":return n.points.length;case"extent":return 2;case"mesh":var l=n.vertexAttributes&&n.vertexAttributes.position;return l?l.length/3:0;default:return}}function Z(n){if((0,u.t)(n))return!1;switch(n.type){case"extent":case"point":return!0;case"polyline":var e,t=(0,r.Z)(n.paths);try{for(t.s();!(e=t.n()).done;){if(e.value.length>0)return!0}}catch(a){t.e(a)}finally{t.f()}return!1;case"polygon":var i,o=(0,r.Z)(n.rings);try{for(o.s();!(i=o.n()).done;){if(i.value.length>0)return!0}}catch(a){o.e(a)}finally{o.f()}return!1;case"multipoint":return n.points.length>0;case"mesh":return!n.loaded||n.vertexAttributes.position.length>0}}function k(n,e){switch((0,l.B)(e),"mesh"===n.type&&(n=n.extent),n.type){case"point":e[0]=e[3]=n.x,e[1]=e[4]=n.y,n.hasZ&&(e[2]=e[5]=n.z);break;case"polyline":for(var t=0;t<n.paths.length;t++)(0,l.s)(e,n.paths[t],n.hasZ);break;case"polygon":for(var r=0;r<n.rings.length;r++)(0,l.s)(e,n.rings[r],n.hasZ);break;case"multipoint":(0,l.s)(e,n.points,n.hasZ);break;case"extent":e[0]=n.xmin,e[1]=n.ymin,e[3]=n.xmax,e[4]=n.ymax,null!=n.zmin&&(e[2]=n.zmin),null!=n.zmax&&(e[5]=n.zmax)}}function w(n,e){switch((0,c.D)(e),"mesh"===n.type&&(n=n.extent),n.type){case"point":e[0]=e[2]=n.x,e[1]=e[3]=n.y;break;case"polyline":for(var t=0;t<n.paths.length;t++)(0,c.x)(e,n.paths[t]);break;case"polygon":for(var r=0;r<n.rings.length;r++)(0,c.x)(e,n.rings[r]);break;case"multipoint":(0,c.x)(e,n.points);break;case"extent":e[0]=n.xmin,e[1]=n.ymin,e[2]=n.xmax,e[3]=n.ymax}}function T(n,e){return null!=n.objectId?n.objectId:n.attributes&&e?n.attributes[e]:null}},79747:function(n,e,t){t.d(e,{r:function(){return o}});var r=t(13994),i=t(50165);function o(n){var e,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=n instanceof r.s?n:new r.s(n,t),a={type:null===(e=null===t||void 0===t?void 0:t.ignoreUnknown)||void 0===e||e?o.apiValues:String,json:{type:o.jsonValues,read:!(null!==t&&void 0!==t&&t.readOnly)&&{reader:o.read},write:{writer:o.write}}};return void 0!==(null===t||void 0===t?void 0:t.readOnly)&&(a.readOnly=!!t.readOnly),void 0!==(null===t||void 0===t?void 0:t.default)&&(a.json.default=t.default),void 0!==(null===t||void 0===t?void 0:t.name)&&(a.json.name=t.name),(0,i.d)(a)}},31412:function(n,e,t){t.d(e,{i:function(){return r}});var r=new(t(13994).s)({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml"})},78664:function(n,e,t){t.d(e,{a:function(){return p},c:function(){return f},d:function(){return h},f:function(){return s},l:function(){return l},s:function(){return u},v:function(){return d},y:function(){return c}});var r=t(50165),i=t(96263),o=t(77322),a=t(31278);function u(n){return void 0!==n.xmin&&void 0!==n.ymin&&void 0!==n.xmax&&void 0!==n.ymax}function s(n){return void 0!==n.points}function l(n){return void 0!==n.x&&void 0!==n.y}function c(n){return void 0!==n.paths}function f(n){return void 0!==n.rings}function h(n){return(0,r.t)(n)?null:n instanceof o.p?n:l(n)?o.j.fromJSON(n):c(n)?a.m.fromJSON(n):f(n)?a.v.fromJSON(n):s(n)?a.a.fromJSON(n):u(n)?i.M.fromJSON(n):null}function d(n){return n?l(n)?"esriGeometryPoint":c(n)?"esriGeometryPolyline":f(n)?"esriGeometryPolygon":u(n)?"esriGeometryEnvelope":s(n)?"esriGeometryMultipoint":null:null}var m={esriGeometryPoint:o.j,esriGeometryPolyline:a.m,esriGeometryPolygon:a.v,esriGeometryEnvelope:i.M,esriGeometryMultipoint:a.a};function p(n){return n&&m[n]||null}},75105:function(n,e,t){t.d(e,{B:function(){return w},C:function(){return T},O:function(){return g},U:function(){return b},q:function(){return Z},s:function(){return l},v:function(){return k}});var r=t(29439),i=t(50165),o=t(78664),a=function(n,e,t){return[e,t]},u=function(n,e,t){return[e,t,n[2]]},s=function(n,e,t){return[e,t,n[2],n[3]]};function l(n){return n?{originPosition:"upper-left"===n.originPosition?"upperLeft":"lower-left"===n.originPosition?"lowerLeft":n.originPosition,scale:n.tolerance?[n.tolerance,n.tolerance]:[1,1],translate:(0,i.r)(n.extent)?[n.extent.xmin,n.extent.ymax]:[0,0]}:null}function c(n,e){var t=n.scale,r=n.translate;return Math.round((e-r[0])/t[0])}function f(n,e){var t=n.scale,r=n.translate;return Math.round((r[1]-e)/t[1])}function h(n,e,t){for(var r,i,o,a,u=[],s=0;s<t.length;s++){var l=t[s];s>0?(o=c(n,l[0]),a=f(n,l[1]),o===r&&a===i||(u.push(e(l,o-r,a-i)),r=o,i=a)):(r=c(n,l[0]),i=f(n,l[1]),u.push(e(l,r,i)))}return u.length>0?u:null}function d(n,e){var t=n.scale,r=n.translate;return e*t[0]+r[0]}function m(n,e){var t=n.scale;return n.translate[1]-e*t[1]}function p(n,e,t){var i=new Array(t.length);if(!t.length)return i;var o=(0,r.Z)(n.scale,2),a=o[0],u=o[1],s=d(n,t[0][0]),l=m(n,t[0][1]);i[0]=e(t[0],s,l);for(var c=1;c<t.length;c++){var f=t[c];s+=f[0]*a,l-=f[1]*u,i[c]=e(f,s,l)}return i}function y(n,e,t){for(var r=new Array(t.length),i=0;i<t.length;i++)r[i]=p(n,e,t[i]);return r}function v(n,e,t,r,i){return e.points=function(n,e,t,r){return h(n,t?r?s:u:r?u:a,e)}(n,t.points,r,i),e}function g(n,e,t,r,i){return e.x=c(n,t.x),e.y=f(n,t.y),e!==t&&(r&&(e.z=t.z),i&&(e.m=t.m)),e}function x(n,e,t,r,i){var o=function(n,e,t,r){for(var i=[],o=t?r?s:u:r?u:a,l=0;l<e.length;l++){var c=h(n,o,e[l]);c&&c.length>=3&&i.push(c)}return i.length?i:null}(n,t.rings,r,i);return o?(e.rings=o,e):null}function M(n,e,t,r,i){var o=function(n,e,t,r){for(var i=[],o=t?r?s:u:r?u:a,l=0;l<e.length;l++){var c=h(n,o,e[l]);c&&c.length>=2&&i.push(c)}return i.length?i:null}(n,t.paths,r,i);return o?(e.paths=o,e):null}function b(n,e){return n&&e?(0,o.l)(e)?g(n,{},e,!1,!1):(0,o.y)(e)?M(n,{},e,!1,!1):(0,o.c)(e)?x(n,{},e,!1,!1):(0,o.f)(e)?v(n,{},e,!1,!1):(0,o.s)(e)?function(n,e,t,r,i){return e.xmin=c(n,t.xmin),e.ymin=f(n,t.ymin),e.xmax=c(n,t.xmax),e.ymax=f(n,t.ymax),e!==t&&(r&&(e.zmin=t.zmin,e.zmax=t.zmax),i&&(e.mmin=t.mmin,e.mmax=t.mmax)),e}(n,{},e,!1,!1):null:null}function Z(n,e,t,r,o){return(0,i.r)(t)&&(e.points=function(n,e,t,r){return p(n,t?r?s:u:r?u:a,e)}(n,t.points,r,o)),e}function k(n,e,t,r,o){return(0,i.t)(t)||(e.x=d(n,t.x),e.y=m(n,t.y),e!==t&&(r&&(e.z=t.z),o&&(e.m=t.m))),e}function w(n,e,t,r,o){return(0,i.r)(t)&&(e.rings=function(n,e,t,r){return y(n,t?r?s:u:r?u:a,e)}(n,t.rings,r,o)),e}function T(n,e,t,r,o){return(0,i.r)(t)&&(e.paths=function(n,e,t,r){return y(n,t?r?s:u:r?u:a,e)}(n,t.paths,r,o)),e}},76375:function(n,e,t){t.d(e,{o:function(){return u}});var r=t(37762),i=t(50165),o=t(73428),a=t(77322);function u(n,e,t){if((0,i.t)(e)||(0,i.t)(t)||t.vcsWkid||(0,a.E)(e,t))return null;var u=(0,o.W)(e)/(0,o.W)(t);if(1===u)return null;switch(n){case"point":case"esriGeometryPoint":return function(n){return function(n,e){n&&null!=n.z&&(n.z*=e)}(n,u)};case"polyline":case"esriGeometryPolyline":return function(n){return function(n,e){if(n){var t,i=(0,r.Z)(n.paths);try{for(i.s();!(t=i.n()).done;){var o,a=t.value,u=(0,r.Z)(a);try{for(u.s();!(o=u.n()).done;){var s=o.value;s.length>2&&(s[2]*=e)}}catch(l){u.e(l)}finally{u.f()}}}catch(l){i.e(l)}finally{i.f()}}}(n,u)};case"polygon":case"esriGeometryPolygon":return function(n){return function(n,e){if(n){var t,i=(0,r.Z)(n.rings);try{for(i.s();!(t=i.n()).done;){var o,a=t.value,u=(0,r.Z)(a);try{for(u.s();!(o=u.n()).done;){var s=o.value;s.length>2&&(s[2]*=e)}}catch(l){u.e(l)}finally{u.f()}}}catch(l){i.e(l)}finally{i.f()}}}(n,u)};case"multipoint":case"esriGeometryMultipoint":return function(n){return function(n,e){if(n){var t,i=(0,r.Z)(n.points);try{for(i.s();!(t=i.n()).done;){var o=t.value;o.length>2&&(o[2]*=e)}}catch(a){i.e(a)}finally{i.f()}}}(n,u)};case"extent":case"esriGeometryExtent":return function(n){return function(n,e){n&&null!=n.zmin&&null!=n.zmax&&(n.zmin*=e,n.zmax*=e)}(n,u)};default:return null}}}}]);
//# sourceMappingURL=2657.4275c65e.chunk.js.map