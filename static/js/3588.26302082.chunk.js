"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[3588],{69641:function(e,t,n){n.d(t,{n:function(){return P},p:function(){return v},t:function(){return V},u:function(){return k},y:function(){return G}});var r,a=n(15671),i=n(43144),o=n(60136),u=n(29388),s=n(48848),l=n(40558),c=n(40114),p=n(93661),d=n(20302),f=n(82474),y=n(15436),v=r=function(e){(0,o.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;return(0,a.Z)(this,n),(r=t.call(this,e)).name=null,r.code=null,r}return(0,i.Z)(n,[{key:"clone",value:function(){return new r({name:this.name,code:this.code})}}]),n}(c.l);(0,s.e)([(0,s.y)({type:String,json:{write:!0}})],v.prototype,"name",void 0),(0,s.e)([(0,s.y)({type:[String,Number],json:{write:!0}})],v.prototype,"code",void 0),v=r=(0,s.e)([(0,s.n)("esri.layers.support.CodedValue")],v);var m=new l.s({inherited:"inherited",codedValue:"coded-value",range:"range"}),h=function(e){(0,o.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;return(0,a.Z)(this,n),(r=t.call(this,e)).name=null,r.type=null,r}return(0,i.Z)(n)}(c.l);(0,s.e)([(0,s.y)({type:String,json:{write:!0}})],h.prototype,"name",void 0),(0,s.e)([(0,d.r)(m)],h.prototype,"type",void 0);var g,b=h=(0,s.e)([(0,s.n)("esri.layers.support.Domain")],h),w=g=function(e){(0,o.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;return(0,a.Z)(this,n),(r=t.call(this,e)).codedValues=null,r.type="coded-value",r}return(0,i.Z)(n,[{key:"getName",value:function(e){var t=null;if(this.codedValues){var n=String(e);this.codedValues.some((function(e){return String(e.code)===n&&(t=e.name),!!t}))}return t}},{key:"clone",value:function(){return new g({codedValues:(0,p.y)(this.codedValues),name:this.name})}}]),n}(b);(0,s.e)([(0,s.y)({type:[v],json:{write:!0}})],w.prototype,"codedValues",void 0),(0,s.e)([(0,d.r)({codedValue:"coded-value"})],w.prototype,"type",void 0);var x,k=w=g=(0,s.e)([(0,s.n)("esri.layers.support.CodedValueDomain")],w),Z=x=function(e){(0,o.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;return(0,a.Z)(this,n),(r=t.call(this,e)).type="inherited",r}return(0,i.Z)(n,[{key:"clone",value:function(){return new x}}]),n}(b);(0,s.e)([(0,d.r)({inherited:"inherited"})],Z.prototype,"type",void 0);var S,T=Z=x=(0,s.e)([(0,s.n)("esri.layers.support.InheritedDomain")],Z),F=S=function(e){(0,o.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;return(0,a.Z)(this,n),(r=t.call(this,e)).maxValue=null,r.minValue=null,r.type="range",r}return(0,i.Z)(n,[{key:"clone",value:function(){return new S({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}}]),n}(b);(0,s.e)([(0,s.y)({type:Number,json:{type:[Number],read:{source:"range",reader:function(e,t){return t.range&&t.range[1]}},write:{enabled:!1,overridePolicy:function(){return{enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer:function(e,t,n){t[n]=[this.minValue||0,e]}}}})],F.prototype,"maxValue",void 0),(0,s.e)([(0,s.y)({type:Number,json:{type:[Number],read:{source:"range",reader:function(e,t){return t.range&&t.range[0]}},write:{target:"range",writer:function(e,t,n){t[n]=[e,this.maxValue||0]}}}})],F.prototype,"minValue",void 0),(0,s.e)([(0,d.r)({range:"range"})],F.prototype,"type",void 0);var N,C=F=S=(0,s.e)([(0,s.n)("esri.layers.support.RangeDomain")],F),P={key:"type",base:b,typeMap:{range:C,"coded-value":k,inherited:T}};function V(e){if(!e||!e.type)return null;switch(e.type){case"range":return C.fromJSON(e);case"codedValue":return k.fromJSON(e);case"inherited":return T.fromJSON(e)}return null}var j=new l.s({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"}),E=N=function(e){(0,o.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;return(0,a.Z)(this,n),(r=t.call(this,e)).alias=null,r.defaultValue=void 0,r.description=null,r.domain=null,r.editable=!0,r.length=-1,r.name=null,r.nullable=!0,r.type=null,r.valueType=null,r.visible=!0,r}return(0,i.Z)(n,[{key:"readDescription",value:function(e,t){var n,r,a=t.description,i=null;try{i=a?JSON.parse(a):null}catch(o){}return null!==(n=null===(r=i)||void 0===r?void 0:r.value)&&void 0!==n?n:null}},{key:"readValueType",value:function(e,t){var n=t.description,r=null;try{r=n?JSON.parse(n):null}catch(a){}return r?j.fromJSON(r.fieldValueType):null}},{key:"clone",value:function(){return new N({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType,visible:this.visible})}}]),n}(c.l);(0,s.e)([(0,s.y)({type:String,json:{write:!0}})],E.prototype,"alias",void 0),(0,s.e)([(0,s.y)({type:[String,Number],json:{write:{allowNull:!0}}})],E.prototype,"defaultValue",void 0),(0,s.e)([(0,s.y)()],E.prototype,"description",void 0),(0,s.e)([(0,f.o)("description")],E.prototype,"readDescription",null),(0,s.e)([(0,s.y)({types:P,json:{read:{reader:V},write:!0}})],E.prototype,"domain",void 0),(0,s.e)([(0,s.y)({type:Boolean,json:{write:!0}})],E.prototype,"editable",void 0),(0,s.e)([(0,s.y)({type:s.T,json:{write:!0}})],E.prototype,"length",void 0),(0,s.e)([(0,s.y)({type:String,json:{write:!0}})],E.prototype,"name",void 0),(0,s.e)([(0,s.y)({type:Boolean,json:{write:!0}})],E.prototype,"nullable",void 0),(0,s.e)([(0,d.r)(y.i)],E.prototype,"type",void 0),(0,s.e)([(0,s.y)()],E.prototype,"valueType",void 0),(0,s.e)([(0,f.o)("valueType",["description"])],E.prototype,"readValueType",null),(0,s.e)([(0,s.y)({type:Boolean,json:{read:!1}})],E.prototype,"visible",void 0);var G=E=N=(0,s.e)([(0,s.n)("esri.layers.support.Field")],E)},74219:function(e,t,n){n.d(t,{I:function(){return P},L:function(){return C},T:function(){return N},s:function(){return f}});var r=n(29439),a=n(74165),i=n(37762),o=n(48848),u=n(62466),s=n(59984),l=(0,a.Z)().mark(y),c=(0,a.Z)().mark(v),p=(0,a.Z)().mark(m),d={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function f(e){return d[e]}function y(e){var t,n,r;return(0,a.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:a.t0=e.type,a.next="Feature"===a.t0?3:"FeatureCollection"===a.t0?6:25;break;case 3:return a.next=5,e;case 5:return a.abrupt("break",25);case 6:t=(0,i.Z)(e.features),a.prev=7,t.s();case 9:if((n=t.n()).done){a.next=17;break}if(r=n.value,a.t1=r,!a.t1){a.next=15;break}return a.next=15,r;case 15:a.next=9;break;case 17:a.next=22;break;case 19:a.prev=19,a.t2=a.catch(7),t.e(a.t2);case 22:return a.prev=22,t.f(),a.finish(22);case 25:case"end":return a.stop()}}),l,null,[[7,19,22,25]])}function v(e){var t,n,r,o,u,s,l,p,d;return(0,a.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e){a.next=2;break}return a.abrupt("return",null);case 2:a.t0=e.type,a.next="Point"===a.t0?5:"LineString"===a.t0||"MultiPoint"===a.t0?8:"MultiLineString"===a.t0||"Polygon"===a.t0?10:"MultiPolygon"===a.t0?27:58;break;case 5:return a.next=7,e.coordinates;case 7:return a.abrupt("break",58);case 8:return a.delegateYield(e.coordinates,"t1",9);case 9:return a.abrupt("break",58);case 10:t=(0,i.Z)(e.coordinates),a.prev=11,t.s();case 13:if((n=t.n()).done){a.next=18;break}return r=n.value,a.delegateYield(r,"t2",16);case 16:a.next=13;break;case 18:a.next=23;break;case 20:a.prev=20,a.t3=a.catch(11),t.e(a.t3);case 23:return a.prev=23,t.f(),a.finish(23);case 26:return a.abrupt("break",58);case 27:o=(0,i.Z)(e.coordinates),a.prev=28,o.s();case 30:if((u=o.n()).done){a.next=50;break}s=u.value,l=(0,i.Z)(s),a.prev=33,l.s();case 35:if((p=l.n()).done){a.next=40;break}return d=p.value,a.delegateYield(d,"t4",38);case 38:a.next=35;break;case 40:a.next=45;break;case 42:a.prev=42,a.t5=a.catch(33),l.e(a.t5);case 45:return a.prev=45,l.f(),a.finish(45);case 48:a.next=30;break;case 50:a.next=55;break;case 52:a.prev=52,a.t6=a.catch(28),o.e(a.t6);case 55:return a.prev=55,o.f(),a.finish(55);case 58:case"end":return a.stop()}}),c,null,[[11,20,23,26],[28,52,55,58],[33,42,45,48]])}function m(e){var t,n,r,o,s,l,c,d,y,v,m,h,g,b=arguments;return(0,a.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t=b.length>1&&void 0!==b[1]?b[1]:{},n=t.geometryType,r=t.objectIdField,o=(0,i.Z)(e),a.prev=3,o.s();case 5:if((s=o.n()).done){a.next=18;break}if(c=s.value,d=c.geometry,y=c.properties,v=c.id,!d||f(d.type)===n){a.next=10;break}return a.abrupt("continue",16);case 10:return h=null!==(l=(m=y||{})[r])&&void 0!==l?l:null,r&&null!=v&&!m[r]&&(m[r]=h=v),g=new u.s(d?w(new u.t,d,t):null,m,null,h),a.next=16,g;case 16:a.next=5;break;case 18:a.next=23;break;case 20:a.prev=20,a.t0=a.catch(3),o.e(a.t0);case 23:return a.prev=23,o.f(),a.finish(23);case 26:case"end":return a.stop()}}),p,null,[[3,20,23,26]])}function h(e){var t,n=(0,i.Z)(e);try{for(n.s();!(t=n.n()).done;){if(t.value.length>2)return!0}}catch(r){n.e(r)}finally{n.f()}return!1}function g(e){for(var t=0,n=0;n<e.length;n++){var r=e[n],a=e[(n+1)%e.length];t+=r[0]*a[1]-a[0]*r[1]}return t<=0}function b(e){var t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function w(e,t,n){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,n){return Z(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){var r,a=(0,i.Z)(t.coordinates);try{for(a.s();!(r=a.n()).done;){Z(e,r.value,n)}}catch(o){a.e(o)}finally{a.f()}return e}(e,t,n);case"MultiPolygon":return function(e,t,n){var r,a=(0,i.Z)(t.coordinates);try{for(a.s();!(r=a.n()).done;){var o=r.value;x(e,o[0],n);for(var u=1;u<o.length;u++)k(e,o[u],n)}}catch(s){a.e(s)}finally{a.f()}return e}(e,t,n);case"Point":return function(e,t,n){return T(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){var r=t.coordinates;x(e,r[0],n);for(var a=1;a<r.length;a++)k(e,r[a],n);return e}(e,t,n)}}function x(e,t,n){var r=b(t);!function(e){return!g(e)}(r)?Z(e,r,n):S(e,r,n)}function k(e,t,n){var r=b(t);!function(e){return g(e)}(r)?Z(e,r,n):S(e,r,n)}function Z(e,t,n){var r,a=(0,i.Z)(t);try{for(a.s();!(r=a.n()).done;){T(e,r.value,n)}}catch(o){a.e(o)}finally{a.f()}e.lengths.push(t.length)}function S(e,t,n){for(var r=t.length-1;r>=0;r--)T(e,t[r],n);e.lengths.push(t.length)}function T(e,t,n){var a=(0,r.Z)(t,3),i=a[0],o=a[1],u=a[2];e.coords.push(i,o),n.hasZ&&e.coords.push(u||0)}function F(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function N(e){if(!e)throw new o.s("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new o.s("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});var t=e.crs;if(t){var n="string"==typeof t?t:"name"===t.type?t.properties.name:"EPSG"===t.type?t.properties.code:null,r=new RegExp(".*(CRS84H?|4326)$","i");if(!n||!r.test(n))throw new o.s("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}}function C(e){var t,n,r,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=[],u=new Set,l=new Set,c=!1,p=null,d=!1,m=a.geometryType,g=void 0===m?null:m,b=!1,w=(0,i.Z)(y(e));try{var x=function(){var e=r.value,t=e.geometry,a=e.properties,i=e.id;if((!t||(g||(g=f(t.type)),f(t.type)===g))&&(c||(c=h(v(t))),d||(d=null!=i)&&(n=typeof i,p=Object.keys(a).filter((function(e){return a[e]===i}))),d&&null!=i&&(p.length>1?p=p.filter((function(e){return a[e]===i})):1===p.length&&(p=a[p[0]]===i?p:[])),!b&&a)){var y=!0;for(var m in a)if(!u.has(m)){var w=a[m];if(null!=w){var x=F(w);"unknown"!==x?(l.delete(m),u.add(m),o.push({name:(0,s.p)(m),alias:m,type:x})):l.add(m)}else y=!1,l.add(m)}b=y}};for(w.s();!(r=w.n()).done;)x()}catch(N){w.e(N)}finally{w.f()}var k=(0,s.p)(1===(null===(t=p)||void 0===t?void 0:t.length)&&p[0]||null);if(k){var Z,S=(0,i.Z)(o);try{for(S.s();!(Z=S.n()).done;){var T=Z.value;if(T.name===k&&(0,s.b)(T)){T.type="esriFieldTypeOID";break}}}catch(N){S.e(N)}finally{S.f()}}return{fields:o,geometryType:g,hasZ:c,objectIdFieldName:k,objectIdFieldType:n,unknownFields:Array.from(l)}}function P(e,t){return Array.from(m(y(e),t))}},3588:function(e,t,n){n.d(t,{C:function(){return S},D:function(){return G},K:function(){return Q},W:function(){return U},X:function(){return I},z:function(){return _}});var r=n(74165),a=n(1413),i=n(29439),o=n(37762),u=n(93433),s=n(15861),l=n(70804),c=n(74384),p=n(40558),d=n(48848),f=n(93661),y=n(95249),v=n(82474),m=n(74219),h=n(73588),g=n(69641),b=n(46817);function w(e){var t;return null!==(t=function(e){var t,n,r,a,i=x.exec(e);if(null===i||void 0===i||!i.groups)return null;var o=i.groups,u=+o.year,s=+o.month-1,l=+o.day,c=+(null!==(t=o.hours)&&void 0!==t?t:"0"),p=+(null!==(n=o.minutes)&&void 0!==n?n:"0"),d=+(null!==(r=o.seconds)&&void 0!==r?r:"0");if(c>23)return null;if(p>59)return null;if(d>59)return null;var f,y=null!==(a=o.ms)&&void 0!==a?a:"0",v=y?+y.padEnd(3,"0").substring(0,3):0;if(o.isUTC)f=Date.UTC(u,s,l,c,p,d,v);else if(o.offsetSign){var m=+o.offsetHours,h=+o.offsetMinutes;f=6e4*("+"===o.offsetSign?-1:1)*(60*m+h)+Date.UTC(u,s,l,c,p,d,v)}else f=new Date(u,s,l,c,p,d,v).getTime();return Number.isNaN(f)?null:f}(e))&&void 0!==t?t:function(e){var t=new Date(e).getTime();return Number.isNaN(t)?null:t}(e)}var x=(0,l.Z)(/^(?:(\x2D?\d{4,})\x2D(\d{2})\x2D(\d{2}))(?:T(\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?)?(?:(Z)|(?:(\+|\x2D)(\d{2}):(\d{2})))?$/,{year:1,month:2,day:3,hours:4,minutes:5,seconds:6,ms:7,isUTC:8,offsetSign:9,offsetHours:10,offsetMinutes:11}),k="xlink:href",Z="2.0.0",S="__esri_wfs_id__",T="wfs-layer:getWFSLayerTypeInfo-error",F="wfs-layer:empty-service",N="wfs-layer:feature-type-not-found",C="wfs-layer:malformed-json",P="wfs-layer:unknown-geometry-type",V="wfs-layer:unknown-field-type",j="wfs-layer:unsupported-spatial-reference",E="wfs-layer:unsupported-wfs-version";function G(e,t){return D.apply(this,arguments)}function D(){return D=(0,s.Z)((0,r.Z)().mark((function e(t,n){var i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=O,e.next=3,(0,p.U)(t,{responseType:"text",query:(0,a.Z)({SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:Z},null===n||void 0===n?void 0:n.customParameters),signal:null===n||void 0===n?void 0:n.signal});case 3:return e.t1=e.sent.data,i=(0,e.t0)(e.t1),e.abrupt("return",(M(t,i),i));case 6:case"end":return e.stop()}}),e)}))),D.apply(this,arguments)}function O(e){var t=ne(e);(function(e){var t,n=null===(t=e.firstElementChild)||void 0===t?void 0:t.getAttribute("version");if(n&&n!==Z)throw new d.s(E,"Unsupported WFS version ".concat(n,". Supported version: ").concat(Z))})(t),ae(t);var n=t.firstElementChild,r=(0,d.az)(function(e){return(0,h.n)(e,{FeatureTypeList:{FeatureType:function(e){var t,n={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",supportedSpatialReferences:[]},r=new Set([4326]),a=function(e){var t,n,a,i,o=parseInt(null!==(t=null===(n=e.textContent)||void 0===n||null===(a=n.match((0,l.Z)(/(\d+$)/i,{wkid:1})))||void 0===a||null===(i=a.groups)||void 0===i?void 0:i.wkid)&&void 0!==t?t:"",10);Number.isNaN(o)||r.add(o)};return(0,h.o)(e,{Name:function(e){var t=re(e.textContent),r=t.name,a=t.prefix;n.typeName="".concat(a,":").concat(r),n.name=r,n.namespacePrefix=a,n.namespaceUri=e.lookupNamespaceURI(a)},Abstract:function(e){n.description=e.textContent},Title:function(e){n.title=e.textContent},WGS84BoundingBox:function(e){n.extent=function(e){var t,n,r,a,u,s=(0,o.Z)(e.children);try{for(s.s();!(u=s.n()).done;){var l=u.value;switch(l.localName){case"LowerCorner":var c=l.textContent.split(" ").map((function(e){return Number.parseFloat(e)})),p=(0,i.Z)(c,2);t=p[0],n=p[1];break;case"UpperCorner":var d=l.textContent.split(" ").map((function(e){return Number.parseFloat(e)})),f=(0,i.Z)(d,2);r=f[0],a=f[1]}}}catch(y){s.e(y)}finally{s.f()}return{xmin:t,ymin:n,xmax:r,ymax:a,spatialReference:v.n}}(e)},DefaultSRS:a,DefaultCRS:a,OtherSRS:a,OtherCRS:a}),n.title||(n.title=n.name),(t=n.supportedSpatialReferences).push.apply(t,(0,u.Z)(r)),n}}})}(n));return{operations:A(n),get featureTypes(){return Array.from(r())},readFeatureTypes:r}}var R=new Set(["json","application/json","geojson","application/json; subtype=geojson"]);function A(e){var t=!1,n={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}};if((0,h.o)(e,{OperationsMetadata:{Operation:function(e){switch(e.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:function(e){n.GetCapabilities.url=e.getAttribute(k)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:function(e){n.DescribeFeatureType.url=e.getAttribute(k)}}}};case"GetFeature":return{DCP:{HTTP:{Get:function(e){n.GetFeature.url=e.getAttribute(k)}}},Parameter:function(e){if("outputFormat"===e.getAttribute("name"))return{AllowedValues:{Value:function(e){var t=e.textContent;t&&R.has(t.toLowerCase())&&(n.GetFeature.outputFormat=t)}}}}}}},Constraint:function(e){switch(e.getAttribute("name")){case"KVPEncoding":return{DefaultValue:function(e){t="true"===e.textContent.toLowerCase()}};case"ImplementsResultPaging":return{DefaultValue:function(e){n.GetFeature.supportsPagination="true"===e.textContent.toLowerCase()}}}}}}),!t)throw new d.s("wfs-layer:kvp-encoding-not-supported","WFS service doesn't support key/value pair (KVP) encoding");if((0,f.t)(n.GetFeature.outputFormat))throw new d.s("wfs-layer:geojson-not-supported","WFS service doesn't support GeoJSON output format");return n}function M(e,t){(0,p.u)(e)&&((0,p.z)(e,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=(0,p.v)(t.operations.DescribeFeatureType.url)),(0,p.z)(e,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=(0,p.v)(t.operations.GetFeature.url)))}function U(e,t,n){return(0,d.ai)(e,(function(e){return n?e.name===t&&e.namespaceUri===n:e.typeName===t||e.name===t}))}function I(e,t,n){return L.apply(this,arguments)}function L(){return L=(0,s.Z)((0,r.Z)().mark((function e(t,n,a){var i,o,u,s,l,c,p,d,f,y,m,h=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=h.length>3&&void 0!==h[3]?h[3]:{},e.next=3,J(t,n,a,o);case 3:return u=e.sent,s=u.featureType,l=u.extent,e.next=8,z(t,s.typeName,o);case 8:return c=e.sent,p=c.fields,d=c.geometryType,f=c.swapXY,y=c.objectIdField,m=c.geometryField,e.abrupt("return",{url:t.operations.GetCapabilities.url,name:s.name,namespaceUri:s.namespaceUri,fields:p,geometryField:m,geometryType:d,objectIdField:y,spatialReference:null!==(i=o.spatialReference)&&void 0!==i?i:v.k.WGS84,extent:l,swapXY:f,wfsCapabilities:t,customParameters:o.customParameters});case 15:case"end":return e.stop()}}),e)}))),L.apply(this,arguments)}function J(e,t,n){return W.apply(this,arguments)}function W(){return W=(0,s.Z)((0,r.Z)().mark((function e(t,n,i){var o,u,s,l,c,p,m=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=m.length>3&&void 0!==m[3]?m[3]:{},u=o.spatialReference,s=void 0===u?v.k.WGS84:u,l=t.readFeatureTypes(),c=n?U(l,n,i):l.next().value,!(0,f.t)(c)){e.next=4;break}throw n?new d.s(N,"The type '".concat(n,"' could not be found in the service")):new d.s(F,"The service is empty");case 4:if(p=new b.w((0,a.Z)((0,a.Z)({},c.extent),{},{spatialReference:s})),(0,v.E)(s,v.n)){e.next=15;break}return e.prev=6,e.next=9,(0,y._)(v.n,s,void 0,o);case 9:p=(0,y.r)(p,v.n),e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(6),new d.s(j,"Projection not supported");case 15:return e.abrupt("return",{extent:p,spatialReference:s,featureType:c});case 16:case"end":return e.stop()}}),e,null,[[6,12]])}))),W.apply(this,arguments)}function z(e,t){return Y.apply(this,arguments)}function Y(){return Y=(0,s.Z)((0,r.Z)().mark((function e(t,n){var o,u,s,l,c,p,y,v,m,h,g,b,w,x,k,Z=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p=Z.length>2&&void 0!==Z[2]?Z[2]:{},e.next=3,(0,d.E)([$(t.operations.DescribeFeatureType.url,n,p),X(t,n,p)]);case 3:if(y=e.sent,v=(0,i.Z)(y,2),m=v[0],h=v[1],!m.error&&!h.error){e.next=9;break}throw new d.s(T,"An error occurred while getting info about the feature type '".concat(n,"'"),{error:m.error||h.error});case 9:if(g=null!==(o=m.value)&&void 0!==o?o:{},b=g.fields,w=g.errors,x=(null===(u=m.value)||void 0===u?void 0:u.geometryType)||(null===(s=h.value)||void 0===s?void 0:s.geometryType),k=null!==(l=null===(c=h.value)||void 0===c?void 0:c.swapXY)&&void 0!==l&&l,!(0,f.t)(x)){e.next=12;break}throw new d.s(P,"The geometry type could not be determined for type '".concat(n),{typeName:n,geometryType:x,fields:b,errors:w});case 12:return e.abrupt("return",(0,a.Z)((0,a.Z)({},_(null!==b&&void 0!==b?b:[])),{},{geometryType:x,swapXY:k}));case 13:case"end":return e.stop()}}),e)}))),Y.apply(this,arguments)}function _(e){var t,n=e.find((function(e){return"geometry"===e.type})),r=e.find((function(e){return"oid"===e.type}));return e=e.filter((function(e){return"geometry"!==e.type})),r||(r=new g.y({name:S,type:"oid",alias:S}),e.unshift(r)),{geometryField:null!==(t=null===n||void 0===n?void 0:n.name)&&void 0!==t?t:null,objectIdField:r.name,fields:e}}function X(e,t){return q.apply(this,arguments)}function q(){return q=(0,s.Z)((0,r.Z)().mark((function e(t,n){var o,u,s,l,d,f,y,v,h,g,b,w,x,k,Z=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=Z.length>2&&void 0!==Z[2]?Z[2]:{},l=!1,e.next=4,Promise.all([Q(t.operations.GetFeature.url,n,t.operations.GetFeature.outputFormat,(0,a.Z)((0,a.Z)({},u),{},{count:1})),(0,p.U)(t.operations.GetFeature.url,{responseType:"text",query:te(n,void 0,(0,a.Z)((0,a.Z)({},u),{},{count:1})),signal:null===u||void 0===u?void 0:u.signal})]);case 4:if(d=e.sent,f=(0,i.Z)(d,2),y=f[0],v=f[1],!(h="FeatureCollection"===y.type&&(null===(o=y.features[0])||void 0===o?void 0:o.geometry))){e.next=22;break}e.t0=(s=c.a.fromJSON((0,m.s)(h.type)),h.type),e.next="Point"===e.t0?13:"LineString"===e.t0||"MultiPoint"===e.t0?15:"MultiLineString"===e.t0||"Polygon"===e.t0?17:"MultiPolygon"===e.t0?19:20;break;case 13:return g=h.coordinates,e.abrupt("break",20);case 15:return g=h.coordinates[0],e.abrupt("break",20);case 17:return g=h.coordinates[0][0],e.abrupt("break",20);case 19:g=h.coordinates[0][0][0];case 20:(b=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(v.data))&&(w=g[0].toFixed(3),x=g[1].toFixed(3),k=parseFloat(b[1]).toFixed(3),w===parseFloat(b[2]).toFixed(3)&&x===k&&(l=!0));case 22:return e.abrupt("return",{geometryType:s,swapXY:l});case 23:case"end":return e.stop()}}),e)}))),q.apply(this,arguments)}function $(e,t,n){return H.apply(this,arguments)}function H(){return H=(0,s.Z)((0,r.Z)().mark((function e(t,n,i){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=B,e.t1=n,e.next=4,(0,p.U)(t,{responseType:"text",query:(0,a.Z)({SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:Z,TYPENAME:n},null===i||void 0===i?void 0:i.customParameters),signal:null===i||void 0===i?void 0:i.signal});case 4:return e.t2=e.sent.data,e.abrupt("return",(0,e.t0)(e.t1,e.t2));case 6:case"end":return e.stop()}}),e)}))),H.apply(this,arguments)}function B(e,t){var n=re(e).name,r=ne(t);ae(r);var a=(0,d.ai)((0,h.n)(r.firstElementChild,{element:function(e){return{name:e.getAttribute("name"),typeName:re(e.getAttribute("type")).name}}}),(function(e){return e.name===n}));if((0,f.r)(a)){var i=(0,d.ai)((0,h.n)(r.firstElementChild,{complexType:function(e){return e}}),(function(e){return e.getAttribute("name")===a.typeName}));if((0,f.r)(i))return function(e){var t,n,r,a,i=[],u=[],s=(0,h.n)(e,{complexContent:{extension:{sequence:{element:function(e){return e}}}}}),l=(0,o.Z)(s);try{for(l.s();!(a=l.n()).done;){var c=a.value,p=c.getAttribute("name");if(p){var f=void 0,y=void 0;if(c.hasAttribute("type")?f=re(c.getAttribute("type")).name:(0,h.o)(c,{simpleType:{restriction:function(e){return f=re(e.getAttribute("base")).name,{maxLength:function(e){y=+e.getAttribute("value")}}}}}),f){var v="true"===c.getAttribute("nillable"),m=!1;switch(f.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":u.push(new g.y({name:p,alias:p,type:"integer",nullable:v}));break;case"float":case"double":case"decimal":u.push(new g.y({name:p,alias:p,type:"double",nullable:v}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":u.push(new g.y({name:p,alias:p,type:"string",nullable:v,length:null!==(t=y)&&void 0!==t?t:255}));break;case"datetime":case"date":u.push(new g.y({name:p,alias:p,type:"date",nullable:v,length:null!==(n=y)&&void 0!==n?n:36}));break;case"pointpropertytype":r="point",m=!0;break;case"multipointpropertytype":r="multipoint",m=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":r="polyline",m=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":r="polygon",m=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":m=!0,i.push(new d.s(P,"geometry type '".concat(f,"' is not supported"),{type:(new XMLSerializer).serializeToString(e)}));break;default:i.push(new d.s(V,"Unknown field type '".concat(f,"'"),{type:(new XMLSerializer).serializeToString(e)}))}m&&u.push(new g.y({name:p,alias:p,type:"geometry",nullable:v}))}}}}catch(k){l.e(k)}finally{l.f()}for(var b=0,w=u;b<w.length;b++){var x=w[b];if("integer"===x.type&&!x.nullable&&K.has(x.name.toLowerCase())){x.type="oid";break}}return{geometryType:r,fields:u,errors:i}}(i)}throw new d.s(N,"Type '".concat(e,"' not found in document"),{document:(new XMLSerializer).serializeToString(r)})}var K=new Set(["objectid","fid"]);function Q(e,t,n,r){return ee.apply(this,arguments)}function ee(){return ee=(0,s.Z)((0,r.Z)().mark((function e(t,n,a,i){var o,u,s,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.U)(t,{responseType:"text",query:te(n,a,i),signal:null===i||void 0===i?void 0:i.signal});case 2:if(o=e.sent,u=(u=o.data).replace(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3'),e.prev=5,null===i||void 0===i||null===(s=i.dateFields)||void 0===s||!s.length){e.next=9;break}return l=new Set(i.dateFields),e.abrupt("return",JSON.parse(u,(function(e,t){return l.has(e)?w(t):t})));case 9:return e.abrupt("return",JSON.parse(u));case 12:throw e.prev=12,e.t0=e.catch(5),new d.s(C,"Error while parsing the\xa0response",{response:u,error:e.t0});case 15:case"end":return e.stop()}}),e,null,[[5,12]])}))),ee.apply(this,arguments)}function te(e,t,n){return(0,a.Z)({SERVICE:"WFS",REQUEST:"GetFeature",VERSION:Z,TYPENAMES:e,OUTPUTFORMAT:t,SRSNAME:"EPSG:4326",STARTINDEX:null===n||void 0===n?void 0:n.startIndex,COUNT:null===n||void 0===n?void 0:n.count},null===n||void 0===n?void 0:n.customParameters)}function ne(e){return(new DOMParser).parseFromString(e.trim(),"text/xml")}function re(e){var t=e.split(":"),n=(0,i.Z)(t,2),r=n[0],a=n[1];return{prefix:a?r:"",name:null!==a&&void 0!==a?a:r}}function ae(e){var t="",n="";if((0,h.o)(e.firstElementChild,{Exception:function(e){return t=e.getAttribute("exceptionCode"),{ExceptionText:function(e){n=e.textContent}}}}),t)throw new d.s("wfs-layer:".concat(t),n)}},73588:function(e,t,n){n.d(t,{n:function(){return u},o:function(){return o}});var r=n(74165),a=n(37762),i=(0,r.Z)().mark(u);function o(e,t){if(e&&t){var n,r=(0,a.Z)(e.children);try{for(r.s();!(n=r.n()).done;){var i=n.value;if(i.localName in t){var u=t[i.localName];if("function"==typeof u){var s=u(i);s&&o(i,s)}else o(i,u)}}}catch(l){r.e(l)}finally{r.f()}}}function u(e,t){var n,o,s,l;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=(0,a.Z)(e.children),r.prev=1,n.s();case 3:if((o=n.n()).done){r.next=15;break}if(!((s=o.value).localName in t)){r.next=13;break}if("function"!=typeof(l=t[s.localName])){r.next=12;break}return r.next=10,l(s);case 10:r.next=13;break;case 12:return r.delegateYield(u(s,l),"t0",13);case 13:r.next=3;break;case 15:r.next=20;break;case 17:r.prev=17,r.t1=r.catch(1),n.e(r.t1);case 20:return r.prev=20,n.f(),r.finish(20);case 23:case"end":return r.stop()}}),i,null,[[1,17,20,23]])}},70804:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(71002),a=n(89611),i=n(60136);function o(){o=function(e,t){return new n(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function n(e,r,i){var o=new RegExp(e,r);return t.set(o,i||t.get(e)),(0,a.Z)(o,n.prototype)}function u(e,n){var r=t.get(n);return Object.keys(r).reduce((function(t,n){var a=r[n];if("number"==typeof a)t[n]=e[a];else{for(var i=0;void 0===e[a[i]]&&i+1<a.length;)i++;t[n]=e[a[i]]}return t}),Object.create(null))}return(0,i.Z)(n,RegExp),n.prototype.exec=function(t){var n=e.exec.call(this,t);return n&&(n.groups=u(n,this)),n},n.prototype[Symbol.replace]=function(n,a){if("string"==typeof a){var i=t.get(this);return e[Symbol.replace].call(this,n,a.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+i[t]})))}if("function"==typeof a){var o=this;return e[Symbol.replace].call(this,n,(function(){var e=arguments;return"object"!=(0,r.Z)(e[e.length-1])&&(e=[].slice.call(e)).push(u(e,o)),a.apply(this,e)}))}return e[Symbol.replace].call(this,n,a)},o.apply(this,arguments)}}}]);
//# sourceMappingURL=3588.26302082.chunk.js.map