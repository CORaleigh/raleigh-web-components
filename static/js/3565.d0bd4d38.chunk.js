"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[3565,8007],{63999:function(e,r,t){t.d(r,{i:function(){return o}});var n=t(1413),i=t(48848),a=t(93661),l=t(45184);function o(e,r,t,l,o){if((0,a.t)(e))return null;var s=e.referencesGeometry()&&o?u(r,l,o):r,c=e.repurposeFeature(s);try{return e.evaluate((0,n.Z)((0,n.Z)({},t),{},{$feature:c}))}catch(f){return i.a.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",f),null}}var s=new Map;function u(e,r,t){var a=t.transform,o=t.hasZ,u=t.hasM;s.has(r)||s.set(r,function(e){var r={};switch(e){case"esriGeometryPoint":return function(e,t,n,i){return(0,l.v)(t,r,e,n,i)};case"esriGeometryPolygon":return function(e,t,n,i){return(0,l.B)(t,r,e,n,i)};case"esriGeometryPolyline":return function(e,t,n,i){return(0,l.C)(t,r,e,n,i)};case"esriGeometryMultipoint":return function(e,t,n,i){return(0,l.q)(t,r,e,n,i)};default:return i.a.getLogger("esri.views.2d.support.arcadeOnDemand").error(new i.s("mapview-arcade","Unable to handle geometryType: ".concat(e))),function(e){return e}}}(r));var c=s.get(r)(e.geometry,a,o,u);return(0,n.Z)((0,n.Z)({},e),{},{geometry:c})}},18007:function(e,r,t){t.r(r),t.d(r,{createSymbolSchema:function(){return s}});var n=t(1413),i=t(1206),a=t(5650);t(48848),t(93661),t(35602);function l(e){var r;return"line-marker"===e.type?{type:"line-marker",color:null===(r=e.color)||void 0===r?void 0:r.toJSON(),placement:e.placement,style:e.style}:e.constructor.fromJSON(e.toJSON()).toJSON()}function o(e){return(0,a.A)(e)}function s(e,r){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e)return null;switch(e.type){case"simple-fill":case"picture-fill":return c(e,r,t);case"simple-marker":case"picture-marker":return p(e,r,t);case"simple-line":return f(e,r,t);case"text":return d(e,r,t);case"label":return u(e,r,t);case"cim":return{type:"cim",rendererKey:r.vvFlags,data:e.data,maxVVSize:r.maxVVSize};case"CIMSymbolReference":return{type:"cim",rendererKey:r.vvFlags,data:e,maxVVSize:r.maxVVSize};case"web-style":return(0,n.Z)((0,n.Z)({},l(e)),{},{type:"web-style",hash:e.hash(),rendererKey:r.vvFlags,maxVVSize:r.maxVVSize});default:throw new Error("symbol not supported ".concat(e.type))}}function u(e,r,t){var l=e.toJSON(),s=(0,a.f)(i.E.LABEL,(0,n.Z)((0,n.Z)({},r),{},{placement:l.labelPlacement}));return(0,n.Z)((0,n.Z)({materialKey:t?o(s):s,hash:e.hash()},l),{},{labelPlacement:l.labelPlacement})}function c(e,r,t){var s=(0,a.f)(i.E.FILL,r),u=t?o(s):s,c=e.clone(),f=c.outline,p=(0,a._)(r.symbologyType);p||(c.outline=null);var d=(0,n.Z)({materialKey:u,hash:c.hash()},l(c));if(p)return d;var y=[];if(y.push(d),f){var m=(0,a.f)(i.E.LINE,(0,n.Z)((0,n.Z)({},r),{},{isOutline:!0})),v=(0,n.Z)({materialKey:t?o(m):m,hash:f.hash()},l(f));y.push(v)}return{type:"composite-symbol",layers:y,hash:y.reduce((function(e,r){return r.hash+e}),"")}}function f(e,r,t){var s=(0,a._)(r.symbologyType)?i.S.DEFAULT:r.symbologyType,u=(0,a.f)(i.E.LINE,(0,n.Z)((0,n.Z)({},r),{},{symbologyType:s})),c=t?o(u):u,f=e.clone(),p=f.marker;f.marker=null;var d=[];if(d.push((0,n.Z)({materialKey:c,hash:f.hash()},l(f))),p){var y,m=(0,a.f)(i.E.MARKER,r),v=t?o(m):m;p.color=null!==(y=p.color)&&void 0!==y?y:f.color,d.push((0,n.Z)({materialKey:v,hash:p.hash(),lineWidth:f.width},l(p)))}return{type:"composite-symbol",layers:d,hash:d.reduce((function(e,r){return r.hash+e}),"")}}function p(e,r,t){var s=(0,a.f)(i.E.MARKER,r),u=t?o(s):s,c=l(e);return(0,n.Z)((0,n.Z)({materialKey:u,hash:e.hash()},c),{},{angle:e.angle,maxVVSize:r.maxVVSize})}function d(e,r,t){var s=(0,a.f)(i.E.TEXT,r),u=t?o(s):s,c=l(e);return(0,n.Z)((0,n.Z)({materialKey:u,hash:e.hash()},c),{},{angle:e.angle,maxVVSize:r.maxVVSize})}},25217:function(e,r,t){t.d(r,{o:function(){return i},r:function(){return a}});var n=t(71802);function i(e,r){for(var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=(0,n.a)(e,0,s),a=0;a<4;a++)r[t+a]=Math.floor(256*u(i*l[a]))}function a(e){for(var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=0,n=0;n<4;n++)t+=e[r+n]*o[n];return t}var l=[1,256,65536,16777216],o=[1/256,1/65536,1/16777216,1/4294967296],s=a(new Uint8ClampedArray([255,255,255,255]));function u(e){return e-Math.floor(e)}},45184:function(e,r,t){t.d(r,{B:function(){return E},C:function(){return F},O:function(){return b},U:function(){return S},q:function(){return w},s:function(){return u},v:function(){return T}});var n=t(29439),i=t(93661),a=t(56162),l=function(e,r,t){return[r,t]},o=function(e,r,t){return[r,t,e[2]]},s=function(e,r,t){return[r,t,e[2],e[3]]};function u(e){return e?{originPosition:"upper-left"===e.originPosition?"upperLeft":"lower-left"===e.originPosition?"lowerLeft":e.originPosition,scale:e.tolerance?[e.tolerance,e.tolerance]:[1,1],translate:(0,i.r)(e.extent)?[e.extent.xmin,e.extent.ymax]:[0,0]}:null}function c(e,r){var t=e.scale,n=e.translate;return Math.round((r-n[0])/t[0])}function f(e,r){var t=e.scale,n=e.translate;return Math.round((n[1]-r)/t[1])}function p(e,r,t){for(var n,i,a,l,o=[],s=0;s<t.length;s++){var u=t[s];s>0?(a=c(e,u[0]),l=f(e,u[1]),a===n&&l===i||(o.push(r(u,a-n,l-i)),n=a,i=l)):(n=c(e,u[0]),i=f(e,u[1]),o.push(r(u,n,i)))}return o.length>0?o:null}function d(e,r){var t=e.scale,n=e.translate;return r*t[0]+n[0]}function y(e,r){var t=e.scale;return e.translate[1]-r*t[1]}function m(e,r,t){var i=new Array(t.length);if(!t.length)return i;var a=(0,n.Z)(e.scale,2),l=a[0],o=a[1],s=d(e,t[0][0]),u=y(e,t[0][1]);i[0]=r(t[0],s,u);for(var c=1;c<t.length;c++){var f=t[c];s+=f[0]*l,u-=f[1]*o,i[c]=r(f,s,u)}return i}function v(e,r,t){for(var n=new Array(t.length),i=0;i<t.length;i++)n[i]=m(e,r,t[i]);return n}function g(e,r,t,n,i){var a;return r.points=null!==(a=function(e,r,t,n){return p(e,t?n?s:o:n?o:l,r)}(e,t.points,n,i))&&void 0!==a?a:[],r}function b(e,r,t,n,i){return r.x=c(e,t.x),r.y=f(e,t.y),r!==t&&(n&&(r.z=t.z),i&&(r.m=t.m)),r}function h(e,r,t,n,i){var a=function(e,r,t,n){for(var i=[],a=t?n?s:o:n?o:l,u=0;u<r.length;u++){var c=p(e,a,r[u]);c&&c.length>=3&&i.push(c)}return i.length?i:null}(e,t.rings,n,i);return a?(r.rings=a,r):null}function x(e,r,t,n,i){var a=function(e,r,t,n){for(var i=[],a=t?n?s:o:n?o:l,u=0;u<r.length;u++){var c=p(e,a,r[u]);c&&c.length>=2&&i.push(c)}return i.length?i:null}(e,t.paths,n,i);return a?(r.paths=a,r):null}function S(e,r){return e&&r?(0,a.s)(r)?b(e,{},r,!1,!1):(0,a.f)(r)?x(e,{},r,!1,!1):(0,a.y)(r)?h(e,{},r,!1,!1):(0,a.l)(r)?g(e,{},r,!1,!1):(0,a.u)(r)?function(e,r,t,n,i){return r.xmin=c(e,t.xmin),r.ymin=f(e,t.ymin),r.xmax=c(e,t.xmax),r.ymax=f(e,t.ymax),r!==t&&(n&&(r.zmin=t.zmin,r.zmax=t.zmax),i&&(r.mmin=t.mmin,r.mmax=t.mmax)),r}(e,{},r,!1,!1):null:null}function w(e,r,t,n,a){return(0,i.r)(t)&&(r.points=function(e,r,t,n){return m(e,t?n?s:o:n?o:l,r)}(e,t.points,n,a)),r}function T(e,r,t,n,a){return(0,i.t)(t)||(r.x=d(e,t.x),r.y=y(e,t.y),r!==t&&(n&&(r.z=t.z),a&&(r.m=t.m))),r}function E(e,r,t,n,a){return(0,i.r)(t)&&(r.rings=function(e,r,t,n){return v(e,t?n?s:o:n?o:l,r)}(e,t.rings,n,a)),r}function F(e,r,t,n,a){return(0,i.r)(t)&&(r.paths=function(e,r,t,n){return v(e,t?n?s:o:n?o:l,r)}(e,t.paths,n,a)),r}},50796:function(e,r,t){t.d(r,{$:function(){return ee},F:function(){return k},h:function(){return A},n:function(){return Z},w:function(){return P}});var n=t(1413),i=t(93433),a=t(83878),l=t(59199),o=t(40181),s=t(25267);function u(e){return(0,a.Z)(e)||(0,l.Z)(e)||(0,o.Z)(e)||(0,s.Z)()}var c=t(37762),f=t(48848),p=t(93661),d=t(77956),y=t(87753),m=t(33794),v=t(63393),g=t(1206),b=t(54233),h=t(84234),x=t(33563),S=t(18007),w=(t(82017),t(74384),t(71802),t(46817),t(82474),t(35602),t(70607),t(29048),t(68136),t(5650),t(40558),t(93116),t(46337),t(50253)),T=t(51920),E=t(95415);function F(e,r){return Math.max(e,r)}var V=f.a.getLogger("esri.views.2d.layers.features.support.rendererUtils"),Z=function(e){if(!("visualVariables"in e)||!e.visualVariables||!e.visualVariables.length)return e;var r=e.clone(),t=r.visualVariables.map((function(e){return z(e)?I(e):e}));return r.visualVariables=t,r};function z(e){return("size"===e.type||"color"===e.type||"opacity"===e.type)&&null!=e.stops}function I(e){return e.stops=function(e,r){return r.length<=8?r:(V.warn("Found ".concat(r.length," Visual Variable stops, but MapView only supports ").concat(8,". Displayed stops will be simplified.")),r.length>16?function(e,r){for(var t=u(r),n=t[0],i=t.slice(1),a=i.pop(),l=i[0].value,o=i[i.length-1].value,s=(o-l)/6,c=[],f=l;f<o;f+=s){for(var p=0;f>=i[p].value;)p++;var y=i[p],m=r[p-1],v=f-m.value,g=y.value===m.value?1:v/(y.value-m.value);if("color"===e){var b=i[p],h=r[p-1],x=b.color.clone();x.r=O(h.color.r,x.r,g),x.g=O(h.color.g,x.g,g),x.b=O(h.color.b,x.b,g),x.a=O(h.color.a,x.a,g),c.push({value:f,color:x,label:b.label})}else if("size"===e){var S=i[p],w=r[p-1],T=(0,d.o)(S.size),E=O((0,d.o)(w.size),T,g);c.push({value:f,size:E,label:S.label})}else{var F=i[p],V=O(r[p-1].opacity,F.opacity,g);c.push({value:f,opacity:V,label:F.label})}}return[n].concat(c,[a])}(e,r):function(e){for(var r=u(e),t=r[0],n=r.slice(1),a=n.pop();n.length>6;){for(var l=0,o=0,s=1;s<n.length;s++){var c=n[s-1],f=n[s],p=Math.abs(f.value-c.value);p>o&&(o=p,l=s)}n.splice(l,1)}return[t].concat((0,i.Z)(n),[a])}(r))}(e.type,e.stops),e}function O(e,r,t){return(1-t)*e+t*r}function M(){if((0,p.h)("heatmap-force-raster"))return"raster";var e=(0,w.l)("2d"),r=e.supportsTextureFloat,t=e.supportsTextureHalfFloat,n=e.supportsColorBufferFloat,i=e.supportsColorBufferFloatBlend,a=e.supportsColorBufferHalfFloat;return r&&n&&i||t&&a?"symbol":(0,p.h)("heatmap-allow-raster-fallback")?"raster":"none"}function A(e){if(!e)return!0;switch(e.type){case"dot-density":if(!(0,w.l)("2d").supportsTextureFloat)return V.error(new f.s("webgl-missing-extension","Missing WebGL extension OES_Texture_Float which is required for DotDensity")),!1;break;case"heatmap":var r=M();if("none"===r||"raster"===r&&!(0,p.h)("heatmap-force-raster")){var t=(0,w.l)("2d"),n=["supportsTextureFloat","supportsTextureHalfFloat","supportsColorBufferFloat","supportsColorBufferFloatBlend","supportsColorBufferHalfFloat"].filter((function(e){return!t[e]})).join(", ");if("none"===r)return V.errorOnce(new f.s("webgl-missing-extension","Missing WebGL".concat(t.type," requirements for Heatmap: ").concat(n))),!1;"raster"===r&&V.warnOnce("Missing WebGL".concat(t.type," requirements for accelerated Heatmap: ").concat(n,". Feature support may be limited."))}}return!0}var L=f.a.getLogger("esri.views.2d.layers.features.schemaUtils"),N="ValidationError";function P(e,r){var t=0,n=0,i=g.S.DEFAULT;if((0,p.r)(e)){if(n=function(e,r){if(!("visualVariables"in e))return 0;if(!e.hasVisualVariables("size"))return 0;var t=e.getVisualVariablesForType("size");if(!t[0])return 0;var n,i,a=t[0];return r&&"cluster_count"===a.field&&"cluster"===r.type?r.clusterMaxSize:"outline"===a.target?0:"stops"===a.transformationType?a.stops.map((function(e){return e.size})).reduce(F,0):"clamped-linear"===a.transformationType?(n="number"==typeof a.maxSize?a.maxSize:a.maxSize.stops.map((function(e){return e.size})).reduce(F,0),i="number"==typeof a.minSize?a.minSize:a.minSize.stops.map((function(e){return e.size})).reduce(F,0),Math.max(n,i)):"real-world-size"===a.transformationType?30:void 0}(e,r),"visualVariables"in e&&(t=function(e){if(!e)return g.A.NONE;var r,t=0,n=(0,c.Z)(e);try{for(n.s();!(r=n.n()).done;){var i=r.value;if("size"===i.type){var a=(0,x.l)(i);t|=a,"outline"===i.target&&(t|=a<<4)}else"color"===i.type?t|=g.A.COLOR:"opacity"===i.type?t|=g.A.OPACITY:"rotation"===i.type&&(t|=g.A.ROTATION)}}catch(l){n.e(l)}finally{n.f()}return t}(e.visualVariables||[]),"dot-density"===e.type&&(i=g.S.DOT_DENSITY)),"heatmap"===e.type&&(i=g.S.HEATMAP),"dictionary"===e.type)return{maxVVSize:n,vvFlags:t,symbologyType:g.S.DEFAULT};if("pie-chart"===e.type)return{maxVVSize:n,vvFlags:t,symbologyType:g.S.PIE_CHART};if(i!==g.S.DOT_DENSITY&&i!==g.S.HEATMAP){var a=e.getSymbols();"backgroundFillSymbol"in e&&e.backgroundFillSymbol&&a.push(e.backgroundFillSymbol);var l,o=!0,s=!0,u=(0,c.Z)(a);try{for(u.s();!(l=u.n()).done;){var f=l.value;if("cim"===f.type&&(s=!1),"simple-fill"===f.type||"picture-fill"===f.type){var d=f.outline,y=d&&"none"!==d.style&&"solid"!==d.style,m="simple-fill"===f.type&&"none"!==f.style&&"solid"!==f.style,v="picture-fill"===f.type||m||y;y&&(o=!1),v&&(s=!1)}}}catch(b){u.e(b)}finally{u.f()}o?i=s?g.S.OUTLINE_FILL_SIMPLE:g.S.OUTLINE_FILL:s&&(i=g.S.SIMPLE)}}return{vvFlags:t,maxVVSize:n,symbologyType:i}}var C=null;function k(e){if((0,p.h)("esri-2d-update-debug")){var r=_(e,!0);console.debug("Created new schema",r),console.debug("Schema diff",(0,m.m)(C,r)),C=r}return _(e)}function _(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{var t,n,i=H(e,r),a=Y(e),l={};i.map((function(r){return B(l,e,r)}));var o=(0,p.r)(e.subtypeCode)?"".concat(e.subtypeField," = ").concat(e.subtypeCode):null,s=(0,y.t)(e.definitionExpression,o);return{source:{definitionExpression:s,fields:e.fields.map((function(e){return e.toJSON()})),gdbVersion:e.gdbVersion,historicMoment:null===(t=e.historicMoment)||void 0===t?void 0:t.getTime(),outFields:e.availableFields,pixelBuffer:e.pixelBuffer,spatialReference:e.spatialReference.toJSON(),timeExtent:null===(n=e.timeExtent)||void 0===n?void 0:n.toJSON(),customParameters:e.customParameters},attributes:{fields:{},indexCount:0},processors:i,tileRenderer:a,targets:l}}catch(u){if(u.fieldName===N)return L.error(u),null;throw u}}function B(e,r,t){switch(t.target){case"feature":return void U(e,D(r),t);case"aggregate":if(!("featureReduction"in r))return;var i=r.featureReduction;switch(i.type){case"selection":throw new f.s(N,"Mapview does not support `selection` reduction type",i);case"binning":return U(e,D(r),t),void function(e,r,t,i){var a;e.aggregate||(e.aggregate={name:"aggregate",type:"bin",filters:null,input:"feature",params:{fixedBinLevel:r.fixedBinLevel,fields:(null!==(a=r.fields)&&void 0!==a?a:[]).map((function(e){return(0,n.Z)((0,n.Z)({},e.toJSON()),{},{type:G(e,t)})}))},attributes:{}}),R(e.aggregate,i.attributes.fields)}(e,i,r.fields.map((function(e){return e.toJSON()})),t);case"cluster":return U(e,D(r),t),void function(e,r,t,i){var a,l;e.aggregate||(e.aggregate={name:"aggregate",type:"cluster",input:"feature",filters:null,attributes:{},params:{clusterRadius:(0,d.u)(r.clusterRadius/2),clusterPixelBuffer:64*Math.ceil((0,d.u)(r.clusterMaxSize)/64),fields:null===(a=null!==(l=r.fields)&&void 0!==l?l:[])||void 0===a?void 0:a.map((function(e){return(0,n.Z)((0,n.Z)({},e.toJSON()),{},{type:G(e,t)})}))}}),R(e.aggregate,i.attributes.fields)}(e,i,r.fields.map((function(e){return e.toJSON()})),t)}}}function R(e,r){for(var t in r){var n=r[t];if(n.target===e.name){var i=e.attributes[t];i?(i.context.mesh=i.context.mesh||n.context.mesh,i.context.storage=i.context.storage||n.context.storage):e.attributes[t]=n}}return e}function D(e){var r,t,n,i,a;return[null!==(r=null===(t=(0,p.e)(e.filter))||void 0===t?void 0:t.toJSON())&&void 0!==r?r:null,null!==(n=null===(i=(0,p.e)(null===(a=(0,p.e)(e.featureEffect))||void 0===a?void 0:a.filter))||void 0===i?void 0:i.toJSON())&&void 0!==n?n:null]}function U(e,r,t){return e.feature||(e.feature={name:"feature",input:"source",filters:r,attributes:{}}),R(e.feature,t.attributes.fields),e}function G(e,r){var t=e.onStatisticExpression,n=e.onStatisticField;switch(e.statisticType){case"min":case"max":case"avg":case"avg_angle":case"sum":case"count":return"esriFieldTypeDouble";case"mode":if(t){var i=t.returnType;return i?"string"===i?"esriFieldTypeString":"esriFieldTypeDouble":(L.error(new f.s(N,"Unable to infer type of aggregateField with onStatisticExpression. ReturnType is not defined",e)),"esriFieldTypeString")}var a=r.find((function(e){return e.name===n}));return a?a.type:(L.error(new f.s(N,"Unable to infer type of aggregateField with onStatisticExpression. ReturnType is not defined",e)),"esriFieldTypeString")}}function J(e,r){return r.field?K(e,(0,n.Z)((0,n.Z)({},r),{},{type:"field",field:r.field})):r.valueExpression?K(e,(0,n.Z)((0,n.Z)({},r),{},{type:"expression",valueExpression:r.valueExpression})):{field:null,fieldIndex:null}}function K(e,r){switch(r.type){case"expression":var t=r.valueExpression;if(!e.fields[t]){var i=e.indexCount++;e.fields[t]=(0,n.Z)((0,n.Z)({},r),{},{name:t,fieldIndex:i})}return{fieldIndex:e.fields[t].fieldIndex};case"label-expression":var a=JSON.stringify(r.label);if(!e.fields[a]){var l=e.indexCount++;e.fields[a]=(0,n.Z)((0,n.Z)({},r),{},{name:a,fieldIndex:l})}return{fieldIndex:e.fields[a].fieldIndex};case"field":var o=r.field;return"aggregate"===r.target&&e.fields[o]||(e.fields[o]=(0,n.Z)((0,n.Z)({},r),{},{name:o})),{field:o};case"statistic":return e.fields[r.name]=(0,n.Z)({},r),{field:r.name}}}function H(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=new Array,n=0;return t.push(W(e,n++,r)),t}function q(e,r,t,i,a){var l=arguments.length>5&&void 0!==arguments[5]&&arguments[5],o=K(e,{type:"label-expression",target:t,context:{mesh:!0},resultType:"string",label:{labelExpression:r.labelExpression,labelExpressionInfo:r.labelExpressionInfo?{expression:r.labelExpressionInfo.expression}:null,symbol:!!r.symbol,where:r.where}}),s=o.fieldIndex;return(0,n.Z)((0,n.Z)({},(0,S.createSymbolSchema)(r,a,l)),{},{fieldIndex:s,target:t,index:i})}function $(e,r,t){var n,a,l="featureReduction"in r&&r.featureReduction;if(!l)return{fields:[],labels:[],matcher:null,rendererOverride:null};var o=[],s=null,u=(0,E.e)(r.geometryType),p=[],d=null;if(l)switch(l.type){case"selection":return L.error(new f.s(N,"Mapview does not support `selection` reduction type",l)),{fields:[],labels:[],matcher:null,rendererOverride:null};case"cluster":case"binning":if(o.push.apply(o,(0,i.Z)(null!==(n=l.fields)&&void 0!==n?n:[])),"cluster"===l.type?u="esriGeometryPoint":"binning"===l.type&&(u="esriGeometryPolygon"),!l.renderer||null!==(a=l.renderer.authoringInfo)&&void 0!==a&&a.isAutoGenerated){if("cluster"===l.type){if(d=(0,T.d)(o,r.renderer,l,null,!0),l.symbol){var y=P(d,l);s={type:"simple",symbol:(0,S.createSymbolSchema)(l.symbol,y,t),symbologyType:y.symbologyType}}p=l&&l.labelsVisible&&l.labelingInfo||[]}}else{if("cluster"===l.type)d=(0,T.m)(l.renderer,l,null).renderer;else d=l.renderer;var m=P(l.renderer,l);s=ee(null,"aggregate",l.renderer,m,t),p=l&&l.labelsVisible&&l.labelingInfo||[]}}return function(e,r){var t,n={mesh:!0,storage:!0},i=(0,c.Z)(r);try{for(i.s();!(t=i.n()).done;){var a=t.value,l=a.name,o=a.onStatisticField,s=a.onStatisticExpression,u=a.statisticType,f=null,p=null,d="numeric",y="feature";s?p=K(e,{type:"expression",target:y,valueExpression:s.expression,resultType:d}).fieldIndex:f=K(e,{type:"field",target:y,field:o,resultType:d}).field,K(e,{type:"statistic",target:"aggregate",name:l,context:n,inField:f,inFieldIndex:p,statisticType:u})}}catch(m){i.e(m)}finally{i.f()}}(e,o),{labels:(0,v.c)(p,"binning"===l.type?"esriGeometryPolygon":u),matcher:s,fields:o,rendererOverride:d}}function W(e,r){var t,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a={indexCount:0,fields:{}},l="featureReduction"in e&&e.featureReduction,o=l?"aggregate":"feature";if("sublayers"in e){var s=function(){var r,t={type:"subtype",subtypeField:e.subtypeField,renderers:{},symbologyType:g.S.DEFAULT},i={type:"subtype",mapping:{},target:"feature"},l={type:"subtype",classes:{}},s={type:"symbol",target:"feature",aggregateFields:[],attributes:a,storage:i,mesh:{matcher:t,aggregateMatcher:null,labels:l,sortKey:null}},u=new Set,d=0,y=(0,c.Z)(e.sublayers);try{var m=function(){var e=r.value,s=e.renderer,c=e.subtypeCode,y=e.labelingInfo,m=e.labelsVisible,v={symbologyType:g.S.DEFAULT,vvFlags:0,maxVVSize:0},b=ee(a,o,s,v,n),h=Q(a,o,s),x=m&&y;if("visualVariables"in s&&s.visualVariables&&s.visualVariables.length)throw new f.s(N,"Visual variables are currently not supported for subtype layers");if("dictionary"===b.type)throw new f.s(N,"Dictionary renderer is not supported in subtype layers");if("subtype"===b.type)throw new f.s(N,"Nested subtype renderers is not supported");if((0,p.r)(h)&&"subtype"===h.type)throw new f.s(N,"Nested subtype storage is not supported");if((0,p.r)(h)&&(0,p.r)(h.attributeMapping))throw new f.s(N,"Non-visual-variable attributes are not supported in subtype layers");if("heatmap"===b.type)throw new f.s(N,"Heatmaps are not supported in subtype layers");if("pie-chart"===b.type)throw new f.s(N,"Pie-charts are not supported in subtype layers");if(u.has(c))throw new f.s(N,"Subtype codes for sublayers must be unique");u.add(c),t.renderers[c]=b,i.mapping[c]=h,x&&(l.classes[c]=x.map((function(e){return q(a,e,"feature",d++,v,n)})))};for(y.s();!(r=y.n()).done;)m()}catch(v){y.e(v)}finally{y.f()}return{v:s}}();if("object"===typeof s)return s.v}if("heatmap"===e.renderer.type&&"raster"===M()){var u=e.renderer,d=u.radius,y=u.fieldOffset,m=u.field;return{type:"heatmap",aggregateFields:[],attributes:a,target:o,storage:null,mesh:{radius:d,fieldOffset:y,field:J(a,{target:o,field:m,resultType:"numeric"}).field}}}var b=$(a,e,n),h=(0,E.e)(e.geometryType),x=null!==(t=b.rendererOverride)&&void 0!==t?t:e.renderer,S=P(x,l),w=ee(a,o,x,S,n),T=Q(a,o,x),F=j(a,e.orderBy,l),V=e.labelsVisible&&e.labelingInfo||[],Z=(0,v.c)(V,h),z=0,I=[].concat((0,i.Z)(Z.map((function(e){return q(a,e,"feature",z++,S,n)}))),(0,i.Z)(b.labels.map((function(e){return q(a,e,"aggregate",z++,S,n)}))));return{type:"symbol",target:o,attributes:a,aggregateFields:b.fields,storage:T,mesh:{matcher:w,labels:{type:"simple",classes:I},aggregateMatcher:b.matcher,sortKey:F}}}function Y(e){var r;return"heatmap"===(null===(r=e.renderer)||void 0===r?void 0:r.type)&&"raster"===M()?{type:"heatmap"}:{type:"symbol"}}function j(e,r,t){if((0,p.r)(t)||(0,p.t)(r)||!r.length)return null;r.length>1&&L.warn("Layer rendering currently only supports ordering by 1 orderByInfo, but found ".concat(r.length,". All but the first will be discarded"));var n=r[0],i="ascending"===n.order?"asc":"desc";return n.field?{field:n.field,order:i}:n.valueExpression?{fieldIndex:K(e,{type:"expression",target:"feature",valueExpression:n.valueExpression,resultType:"numeric"}).fieldIndex,order:i}:(L.error(new f.s(N,"Expected to find a field or valueExpression for OrderByInfo",n)),null)}function Q(e,r,t){var n;switch(t.type){case"simple":case"class-breaks":case"unique-value":case"dictionary":n={visualVariables:!0,attributes:null};break;default:n=(0,h.c)(t).getStorageSpec(t)}return function(e,r,t,n){if((0,p.t)(t))return null;var i=t.visualVariables,a=t.attributes,l=null;i&&"visualVariables"in n&&(l=X(e,r,n.visualVariables));var o=(0,p.r)(l)?4:0,s=null;return(0,p.r)(a)&&(s=a.map((function(t,n){var i=J(e,{valueExpression:t.valueExpression,field:t.field,resultType:"numeric",target:r}),a=i.field,l=i.fieldIndex;return{binding:n+o,field:a,fieldIndex:l}}))),{type:"simple",target:r,attributeMapping:s,vvMapping:l}}(e,r,n,t)}function X(e,r,t){if(!t||!t.length)return[];var n={storage:!0},i="numeric";return function(e){return e.map((function(e){return z(e)?I(e.clone()):e}))}(t).map((function(t){var a,l=(0,b.r)(t.type),o=J(e,{target:r,valueExpression:t.valueExpression,field:t.field,context:n,resultType:i}),s=o.field,u=o.fieldIndex;switch(t.type){case"size":return"$view.scale"===t.valueExpression?null:{type:"size",binding:l,field:s,fieldIndex:u,normalizationField:J(e,{target:r,field:t.normalizationField,context:n,resultType:i}).field,valueRepresentation:null!==(a=t.valueRepresentation)&&void 0!==a?a:null};case"color":return{type:"color",binding:l,field:s,fieldIndex:u,normalizationField:J(e,{target:r,field:t.normalizationField,context:n,resultType:i}).field};case"opacity":return{type:"opacity",binding:l,field:s,fieldIndex:u,normalizationField:J(e,{target:r,field:t.normalizationField,context:n,resultType:i}).field};case"rotation":return{type:"rotation",binding:l,field:s,fieldIndex:u}}})).filter((function(e){return e}))}function ee(e,r,t,n){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=(0,p.v)(e,{indexCount:0,fields:{}});switch(t.type){case"simple":case"dot-density":return re(a,t,n,i);case"class-breaks":return ne(a,r,t,n,i);case"unique-value":return ie(a,r,t,n,i);case"dictionary":return ae(a,t,n,i);case"heatmap":return le(a,t,n,i);case"pie-chart":return te(a,t,n,i)}}function re(e,r,t){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=r.getSymbols(),a=i.length?i[0]:null;return{type:"simple",symbol:(0,S.createSymbolSchema)(a,t,n),symbologyType:t.symbologyType}}function te(e,r,t){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=r.getSymbols(),a=i[0],l=i.length>1?i[1]:null;return{type:"pie-chart",markerSymbol:(0,S.createSymbolSchema)(a,t,n),fillSymbol:(0,S.createSymbolSchema)(l,t,n),symbologyType:t.symbologyType}}function ne(e,r,t,n){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a={mesh:!0,use:"renderer.field"},l=t.backgroundFillSymbol,o=J(e,{target:r,field:t.field,valueExpression:t.valueExpression,resultType:"numeric",context:a}),s=o.field,u=o.fieldIndex,c=t.normalizationType,f="log"===c?"esriNormalizeByLog":"percent-of-total"===c?"esriNormalizeByPercentOfTotal":"field"===c?"esriNormalizeByField":null,p=t.classBreakInfos.map((function(e){return{symbol:(0,S.createSymbolSchema)(e.symbol,n,i),min:e.minValue,max:e.maxValue}})).sort((function(e,r){return e.min-r.min}));return{type:"interval",attributes:e.fields,field:s,fieldIndex:u,backgroundFillSymbol:(0,S.createSymbolSchema)(l,n,i),defaultSymbol:(0,S.createSymbolSchema)(t.defaultSymbol,n,i),intervals:p,normalizationField:t.normalizationField,normalizationTotal:t.normalizationTotal,normalizationType:f,isMaxInclusive:t.isMaxInclusive,symbologyType:n.symbologyType}}function ie(e,r,t,i){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],l=[],o=t.backgroundFillSymbol,s={target:r,context:{mesh:!0},resultType:"string"};if(t.field&&"string"!=typeof t.field)throw new f.s(N,"Expected renderer.field to be a string",t);var u,p=J(e,(0,n.Z)((0,n.Z)({},s),{},{field:t.field,valueExpression:t.valueExpression})),d=p.field,y=p.fieldIndex,m=(0,c.Z)(t.uniqueValueInfos);try{for(m.s();!(u=m.n()).done;){var v=u.value;l.push({value:""+v.value,symbol:(0,S.createSymbolSchema)(v.symbol,i,a)})}}catch(g){m.e(g)}finally{m.f()}return{type:"map",attributes:e.fields,field:d,fieldIndex:y,field2:J(e,(0,n.Z)((0,n.Z)({},s),{},{field:t.field2})).field,field3:J(e,(0,n.Z)((0,n.Z)({},s),{},{field:t.field3})).field,fieldDelimiter:t.fieldDelimiter,backgroundFillSymbol:(0,S.createSymbolSchema)(o,i),defaultSymbol:(0,S.createSymbolSchema)(t.defaultSymbol,i),map:l,symbologyType:i.symbologyType}}function ae(e,r,t){return{type:"dictionary",config:r.config,fieldMap:r.fieldMap,scaleExpression:r.scaleExpression,url:r.url,symbolOptions:t,symbologyType:t.symbologyType}}function le(e,r,t){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=r.getSymbols(),a=i.length?i[0]:null;return{type:"heatmap",symbol:(0,S.createSymbolSchema)(a,t,n),symbologyType:t.symbologyType}}},95415:function(e,r,t){t.d(r,{e:function(){return i},r:function(){return a}});var n=new(t(40558).s)({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"});function i(e){return n.toJSON(e)}function a(e){var r=e.rasterInfo,t=r.bandCount,n=r.attributeTable,i=r.colormap,a=r.pixelType;return 1===t&&(null!=n||null!=i||"u8"===a||"s8"===a)}},33563:function(e,r,t){t.d(r,{l:function(){return l}});var n=t(48848),i=t(1206),a=t(54233);function l(e){return(0,a.Q)(e.minDataValue)&&(0,a.Q)(e.maxDataValue)&&null!=e.minSize&&null!=e.maxSize?i.A.SIZE_MINMAX_VALUE:(e.expression&&"view.scale"===e.expression||e.valueExpression&&"$view.scale"===e.valueExpression)&&Array.isArray(e.stops)?i.A.SIZE_SCALE_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&(Array.isArray(e.stops)||"levels"in e&&e.levels)?i.A.SIZE_FIELD_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&null!=e.valueUnit?i.A.SIZE_UNIT_VALUE:(n.a.getLogger("esri.views.2d.engine.webgl").error(new n.s("mapview-bad-type","Found invalid size VisualVariable",e)),i.A.NONE)}}}]);
//# sourceMappingURL=3565.d0bd4d38.chunk.js.map