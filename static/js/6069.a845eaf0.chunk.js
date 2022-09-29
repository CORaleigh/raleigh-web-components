"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[6069],{56069:function(e,t,n){n.d(t,{C:function(){return k},D:function(){return G},K:function(){return B},W:function(){return L},X:function(){return z},z:function(){return Y}});var r=n(74165),a=n(1413),i=n(29439),o=n(37762),u=n(93433),s=n(15861),c=n(70804),l=n(91204),p=n(57714),f=n(23132),d=n(75610),y=n(63022),m=n(30709),v=n(36659),g=n(46604),b=n(43124),h=n(80262);function w(e){var t;return null!==(t=function(e){var t,n,r,a,i=x.exec(e);if(!i)return null;var o=i.groups,u=+o.year,s=+o.month-1,c=+o.day,l=+(null!==(t=o.hours)&&void 0!==t?t:"0"),p=+(null!==(n=o.minutes)&&void 0!==n?n:"0"),f=+(null!==(r=o.seconds)&&void 0!==r?r:"0");if(l>23)return null;if(p>59)return null;if(f>59)return null;var d,y=null!==(a=o.ms)&&void 0!==a?a:"0",m=y?+y.padEnd(3,"0").substring(0,3):0;if(o.isUTC)d=Date.UTC(u,s,c,l,p,f,m);else if(o.offsetSign){var v=+o.offsetHours,g=+o.offsetMinutes;d=6e4*("+"===o.offsetSign?-1:1)*(60*v+g)+Date.UTC(u,s,c,l,p,f,m)}else d=new Date(u,s,c,l,p,f,m).getTime();return Number.isNaN(d)?null:d}(e))&&void 0!==t?t:function(e){var t=new Date(e).getTime();return Number.isNaN(t)?null:t}(e)}var x=(0,c.Z)(/^(?:(\x2D?\d{4,})\x2D(\d{2})\x2D(\d{2}))(?:T(\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?)?(?:(Z)|(?:(\+|\x2D)(\d{2}):(\d{2})))?$/,{year:1,month:2,day:3,hours:4,minutes:5,seconds:6,ms:7,isUTC:8,offsetSign:9,offsetHours:10,offsetMinutes:11}),T="xlink:href",F="2.0.0",k="__esri_wfs_id__",S="wfs-layer:getWFSLayerTypeInfo-error",C="wfs-layer:empty-service",Z="wfs-layer:feature-type-not-found",N="wfs-layer:malformed-json",E="wfs-layer:unknown-geometry-type",P="wfs-layer:unknown-field-type",A="wfs-layer:unsupported-spatial-reference",D="wfs-layer:unsupported-wfs-version";function G(e,t){return R.apply(this,arguments)}function R(){return R=(0,s.Z)((0,r.Z)().mark((function e(t,n){var i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=U,e.next=3,(0,p.U)(t,{responseType:"text",query:(0,a.Z)({SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:F},null===n||void 0===n?void 0:n.customParameters),signal:null===n||void 0===n?void 0:n.signal});case 3:return e.t1=e.sent.data,i=(0,e.t0)(e.t1),e.abrupt("return",(O(t,i),i));case 6:case"end":return e.stop()}}),e)}))),R.apply(this,arguments)}function U(e){var t=ne(e);(function(e){var t=e.firstElementChild.getAttribute("version");if(t&&t!==F)throw new f.a(D,"Unsupported WFS version ".concat(t,". Supported version: ").concat(F))})(t),ae(t);var n=t.firstElementChild,r=(0,f.aA)(function(e){return(0,g.n)(e,{FeatureTypeList:{FeatureType:function(e){var t,n={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",supportedSpatialReferences:[]},r=new Set([4326]),a=function(e){var t,n,a=parseInt(null===(t=e.textContent.match((0,c.Z)(/(\d+$)/i,{wkid:1})))||void 0===t||null===(n=t.groups)||void 0===n?void 0:n.wkid,10);Number.isNaN(a)||r.add(a)};return(0,g.o)(e,{Name:function(e){var t=re(e.textContent),r=t.name,a=t.prefix;n.typeName="".concat(a,":").concat(r),n.name=r,n.namespacePrefix=a,n.namespaceUri=e.lookupNamespaceURI(a)},Abstract:function(e){n.description=e.textContent},Title:function(e){n.title=e.textContent},WGS84BoundingBox:function(e){n.extent=function(e){var t,n,r,a,u,s=(0,o.Z)(e.children);try{for(s.s();!(u=s.n()).done;){var c=u.value;switch(c.localName){case"LowerCorner":var l=c.textContent.split(" ").map((function(e){return Number.parseFloat(e)})),p=(0,i.Z)(l,2);t=p[0],n=p[1];break;case"UpperCorner":var f=c.textContent.split(" ").map((function(e){return Number.parseFloat(e)})),d=(0,i.Z)(f,2);r=d[0],a=d[1]}}}catch(y){s.e(y)}finally{s.f()}return{xmin:t,ymin:n,xmax:r,ymax:a,spatialReference:m.n}}(e)},DefaultSRS:a,DefaultCRS:a,OtherSRS:a,OtherCRS:a}),n.title||(n.title=n.name),(t=n.supportedSpatialReferences).push.apply(t,(0,u.Z)(r)),n}}})}(n));return{operations:M(n),get featureTypes(){return Array.from(r())},readFeatureTypes:r}}var I=new Set(["json","application/json","geojson","application/json; subtype=geojson"]);function M(e){var t=!1,n={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}};if((0,g.o)(e,{OperationsMetadata:{Operation:function(e){switch(e.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:function(e){n.GetCapabilities.url=e.getAttribute(T)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:function(e){n.DescribeFeatureType.url=e.getAttribute(T)}}}};case"GetFeature":return{DCP:{HTTP:{Get:function(e){n.GetFeature.url=e.getAttribute(T)}}},Parameter:function(e){if("outputFormat"===e.getAttribute("name"))return{AllowedValues:{Value:function(e){var t=e.textContent;I.has(t.toLowerCase())&&(n.GetFeature.outputFormat=t)}}}}}}},Constraint:function(e){switch(e.getAttribute("name")){case"KVPEncoding":return{DefaultValue:function(e){t="true"===e.textContent.toLowerCase()}};case"ImplementsResultPaging":return{DefaultValue:function(e){n.GetFeature.supportsPagination="true"===e.textContent.toLowerCase()}}}}}}),!t)throw new f.a("wfs-layer:kvp-encoding-not-supported","WFS service doesn't support key/value pair (KVP) encoding");if((0,d.t)(n.GetFeature.outputFormat))throw new f.a("wfs-layer:geojson-not-supported","WFS service doesn't support GeoJSON output format");return n}function O(e,t){(0,p.t)(e)&&((0,p.z)(e,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=(0,p.u)(t.operations.DescribeFeatureType.url)),(0,p.z)(e,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=(0,p.u)(t.operations.GetFeature.url)))}function L(e,t,n){return(0,f.az)(e,(function(e){return n?e.name===t&&e.namespaceUri===n:e.typeName===t||e.name===t}))}function z(e,t,n){return j.apply(this,arguments)}function j(){return j=(0,s.Z)((0,r.Z)().mark((function e(t,n,a){var i,o,u,s,c,l,p,f,d,y,v,g=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=g.length>3&&void 0!==g[3]?g[3]:{},e.next=3,V(t,n,a,o);case 3:return u=e.sent,s=u.featureType,c=u.extent,e.next=8,X(t,s.typeName,o);case 8:return l=e.sent,p=l.fields,f=l.geometryType,d=l.swapXY,y=l.objectIdField,v=l.geometryField,e.abrupt("return",{url:t.operations.GetCapabilities.url,name:s.name,namespaceUri:s.namespaceUri,fields:p,geometryField:v,geometryType:f,objectIdField:y,spatialReference:null!==(i=o.spatialReference)&&void 0!==i?i:m.k.WGS84,extent:c,swapXY:d,wfsCapabilities:t,customParameters:o.customParameters});case 15:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}function V(e,t,n){return W.apply(this,arguments)}function W(){return W=(0,s.Z)((0,r.Z)().mark((function e(t,n,i){var o,u,s,c,l,p,v=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=v.length>3&&void 0!==v[3]?v[3]:{},u=o.spatialReference,s=void 0===u?m.k.WGS84:u,c=t.readFeatureTypes(),l=n?L(c,n,i):c.next().value,!(0,d.t)(l)){e.next=4;break}throw n?new f.a(Z,"The type '".concat(n,"' could not be found in the service")):new f.a(C,"The service is empty");case 4:if(p=new h.M((0,a.Z)((0,a.Z)({},l.extent),{},{spatialReference:s})),(0,m.E)(s,m.n)){e.next=15;break}return e.prev=6,e.next=9,(0,y.f)(m.n,s,void 0,o);case 9:p=(0,y.r)(p,m.n),e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(6),new f.a(A,"Projection not supported");case 15:return e.abrupt("return",{extent:p,spatialReference:s,featureType:l});case 16:case"end":return e.stop()}}),e,null,[[6,12]])}))),W.apply(this,arguments)}function X(e,t){return _.apply(this,arguments)}function _(){return _=(0,s.Z)((0,r.Z)().mark((function e(t,n){var o,u,s,c,l,p,y,m,v,g,b=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=b.length>2&&void 0!==b[2]?b[2]:{},e.next=3,(0,f.E)([$(t.operations.DescribeFeatureType.url,n,o),q(t,n,o)]);case 3:if(u=e.sent,s=(0,i.Z)(u,2),c=s[0],l=s[1],!c.error&&!l.error){e.next=9;break}throw new f.a(S,"An error occurred while getting info about the feature type '".concat(n,"'"),{error:c.error||l.error});case 9:if(p=c.value,y=p.fields,m=p.errors,v=c.value.geometryType||l.value.geometryType,g=l.value.swapXY,!(0,d.t)(v)){e.next=12;break}throw new f.a(E,"The geometry type could not be determined for type '".concat(n),{typeName:n,geometryType:v,fields:y,errors:m});case 12:return e.abrupt("return",(0,a.Z)((0,a.Z)({},Y(y)),{},{geometryType:v,swapXY:g}));case 13:case"end":return e.stop()}}),e)}))),_.apply(this,arguments)}function Y(e){var t,n=e.find((function(e){return"geometry"===e.type})),r=e.find((function(e){return"oid"===e.type}));return e=e.filter((function(e){return"geometry"!==e.type})),r||(r=new b.y({name:k,type:"oid",alias:k}),e.unshift(r)),{geometryField:null!==(t=null===n||void 0===n?void 0:n.name)&&void 0!==t?t:null,objectIdField:r.name,fields:e}}function q(e,t){return H.apply(this,arguments)}function H(){return H=(0,s.Z)((0,r.Z)().mark((function e(t,n){var o,u,s,c,f,d,y,m,g,b,h,w,x,T,F=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=F.length>2&&void 0!==F[2]?F[2]:{},c=!1,e.next=4,Promise.all([B(t.operations.GetFeature.url,n,t.operations.GetFeature.outputFormat,(0,a.Z)((0,a.Z)({},u),{},{count:1})),(0,p.U)(t.operations.GetFeature.url,{responseType:"text",query:te(n,void 0,(0,a.Z)((0,a.Z)({},u),{},{count:1})),signal:null===u||void 0===u?void 0:u.signal})]);case 4:if(f=e.sent,d=(0,i.Z)(f,2),y=d[0],m=d[1],!(g="FeatureCollection"===y.type&&(null===(o=y.features[0])||void 0===o?void 0:o.geometry))){e.next=22;break}e.t0=(s=l.a.fromJSON((0,v.i)(g.type)),g.type),e.next="Point"===e.t0?13:"LineString"===e.t0||"MultiPoint"===e.t0?15:"MultiLineString"===e.t0||"Polygon"===e.t0?17:"MultiPolygon"===e.t0?19:20;break;case 13:return b=g.coordinates,e.abrupt("break",20);case 15:return b=g.coordinates[0],e.abrupt("break",20);case 17:return b=g.coordinates[0][0],e.abrupt("break",20);case 19:b=g.coordinates[0][0][0];case 20:(h=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(m.data))&&(w=b[0].toFixed(3),x=b[1].toFixed(3),T=parseFloat(h[1]).toFixed(3),w===parseFloat(h[2]).toFixed(3)&&x===T&&(c=!0));case 22:return e.abrupt("return",{geometryType:s,swapXY:c});case 23:case"end":return e.stop()}}),e)}))),H.apply(this,arguments)}function $(e,t,n){return J.apply(this,arguments)}function J(){return J=(0,s.Z)((0,r.Z)().mark((function e(t,n,i){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=K,e.t1=n,e.next=4,(0,p.U)(t,{responseType:"text",query:(0,a.Z)({SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:F,TYPENAME:n},null===i||void 0===i?void 0:i.customParameters),signal:null===i||void 0===i?void 0:i.signal});case 4:return e.t2=e.sent.data,e.abrupt("return",(0,e.t0)(e.t1,e.t2));case 6:case"end":return e.stop()}}),e)}))),J.apply(this,arguments)}function K(e,t){var n=re(e).name,r=ne(t);ae(r);var a=(0,f.az)((0,g.n)(r.firstElementChild,{element:function(e){return{name:e.getAttribute("name"),typeName:re(e.getAttribute("type")).name}}}),(function(e){return e.name===n}));if((0,d.r)(a)){var i=(0,f.az)((0,g.n)(r.firstElementChild,{complexType:function(e){return e}}),(function(e){return e.getAttribute("name")===a.typeName}));if((0,d.r)(i))return function(e){var t,n,r,a,i=[],u=[],s=(0,g.n)(e,{complexContent:{extension:{sequence:{element:function(e){return e}}}}}),c=(0,o.Z)(s);try{for(c.s();!(a=c.n()).done;){var l=a.value,p=l.getAttribute("name");if(p){var d=void 0,y=void 0;if(l.hasAttribute("type")?d=re(l.getAttribute("type")).name:(0,g.o)(l,{simpleType:{restriction:function(e){return d=re(e.getAttribute("base")).name,{maxLength:function(e){y=+e.getAttribute("value")}}}}}),d){var m="true"===l.getAttribute("nillable"),v=!1;switch(d.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":u.push(new b.y({name:p,alias:p,type:"integer",nullable:m}));break;case"float":case"double":case"decimal":u.push(new b.y({name:p,alias:p,type:"double",nullable:m}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":u.push(new b.y({name:p,alias:p,type:"string",nullable:m,length:null!==(t=y)&&void 0!==t?t:255}));break;case"datetime":case"date":u.push(new b.y({name:p,alias:p,type:"date",nullable:m,length:null!==(n=y)&&void 0!==n?n:36}));break;case"pointpropertytype":r="point",v=!0;break;case"multipointpropertytype":r="multipoint",v=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":r="polyline",v=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":r="polygon",v=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":v=!0,i.push(new f.a(E,"geometry type '".concat(d,"' is not supported"),{type:(new XMLSerializer).serializeToString(e)}));break;default:i.push(new f.a(P,"Unknown field type '".concat(d,"'"),{type:(new XMLSerializer).serializeToString(e)}))}v&&u.push(new b.y({name:p,alias:p,type:"geometry",nullable:m}))}}}}catch(T){c.e(T)}finally{c.f()}for(var h=0,w=u;h<w.length;h++){var x=w[h];if("integer"===x.type&&!x.nullable&&Q.has(x.name.toLowerCase())){x.type="oid";break}}return{geometryType:r,fields:u,errors:i}}(i)}throw new f.a(Z,"Type '".concat(e,"' not found in document"),{document:(new XMLSerializer).serializeToString(r)})}var Q=new Set(["objectid","fid"]);function B(e,t,n,r){return ee.apply(this,arguments)}function ee(){return ee=(0,s.Z)((0,r.Z)().mark((function e(t,n,a,i){var o,u,s,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.U)(t,{responseType:"text",query:te(n,a,i),signal:null===i||void 0===i?void 0:i.signal});case 2:if(o=e.sent,u=(u=o.data).replace(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3'),e.prev=5,null===i||void 0===i||null===(s=i.dateFields)||void 0===s||!s.length){e.next=9;break}return c=new Set(i.dateFields),e.abrupt("return",JSON.parse(u,(function(e,t){return c.has(e)?w(t):t})));case 9:return e.abrupt("return",JSON.parse(u));case 12:throw e.prev=12,e.t0=e.catch(5),new f.a(N,"Error while parsing the\xa0response",{response:u,error:e.t0});case 15:case"end":return e.stop()}}),e,null,[[5,12]])}))),ee.apply(this,arguments)}function te(e,t,n){return(0,a.Z)({SERVICE:"WFS",REQUEST:"GetFeature",VERSION:F,TYPENAMES:e,OUTPUTFORMAT:t,SRSNAME:"EPSG:4326",STARTINDEX:null===n||void 0===n?void 0:n.startIndex,COUNT:null===n||void 0===n?void 0:n.count},null===n||void 0===n?void 0:n.customParameters)}function ne(e){return(new DOMParser).parseFromString(e.trim(),"text/xml")}function re(e){var t=e.split(":"),n=(0,i.Z)(t,2),r=n[0],a=n[1];return{prefix:a?r:"",name:null!==a&&void 0!==a?a:r}}function ae(e){var t,n;if((0,g.o)(e.firstElementChild,{Exception:function(e){return t=e.getAttribute("exceptionCode"),{ExceptionText:function(e){n=e.textContent}}}}),t)throw new f.a("wfs-layer:".concat(t),n)}},46604:function(e,t,n){n.d(t,{n:function(){return u},o:function(){return o}});var r=n(74165),a=n(37762),i=(0,r.Z)().mark(u);function o(e,t){var n,r=(0,a.Z)(e.children);try{for(r.s();!(n=r.n()).done;){var i=n.value;if(i.localName in t){var u=t[i.localName];if("function"==typeof u){var s=u(i);s&&o(i,s)}else o(i,u)}}}catch(c){r.e(c)}finally{r.f()}}function u(e,t){var n,o,s,c;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=(0,a.Z)(e.children),r.prev=1,n.s();case 3:if((o=n.n()).done){r.next=15;break}if(!((s=o.value).localName in t)){r.next=13;break}if("function"!=typeof(c=t[s.localName])){r.next=12;break}return r.next=10,c(s);case 10:r.next=13;break;case 12:return r.delegateYield(u(s,c),"t0",13);case 13:r.next=3;break;case 15:r.next=20;break;case 17:r.prev=17,r.t1=r.catch(1),n.e(r.t1);case 20:return r.prev=20,n.f(),r.finish(20);case 23:case"end":return r.stop()}}),i,null,[[1,17,20,23]])}}}]);
//# sourceMappingURL=6069.a845eaf0.chunk.js.map