"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[4622],{73679:function(e,n,a){a.d(n,{a:function(){return x},l:function(){return b}});var t=a(43144),r=a(15671),i=a(60136),l=a(29388),u=a(48848),o=a(40558),s=(a(93661),a(40114)),f=a(71147),c=a(21385),v=new o.s({classBreaksDef:"class-breaks-definition",uniqueValueDef:"unique-value-definition"}),d=function(e){(0,i.Z)(a,e);var n=(0,l.Z)(a);function a(){var e;return(0,r.Z)(this,a),(e=n.apply(this,arguments)).baseSymbol=null,e.colorRamp=null,e.type=null,e}return(0,t.Z)(a)}(s.l);(0,u.e)([(0,u.y)({type:c.a,json:{write:!0}})],d.prototype,"baseSymbol",void 0),(0,u.e)([(0,u.y)({types:f.m,json:{read:{reader:f.p},write:!0}})],d.prototype,"colorRamp",void 0),(0,u.e)([(0,u.y)({json:{read:v.read,write:v.write}})],d.prototype,"type",void 0);var m=d=(0,u.e)([(0,u.n)("esri.rest.support.ClassificationDefinition")],d),p=new o.s({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation",esriClassifyDefinedInterval:"defined-interval"}),h=new o.s({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"}),y=function(e){(0,i.Z)(a,e);var n=(0,l.Z)(a);function a(){var e;return(0,r.Z)(this,a),(e=n.apply(this,arguments)).breakCount=null,e.classificationField=null,e.classificationMethod=null,e.normalizationField=null,e.normalizationType=null,e.type="class-breaks-definition",e}return(0,t.Z)(a,[{key:"standardDeviationInterval",set:function(e){"standard-deviation"===this.classificationMethod&&this._set("standardDeviationInterval",e)}},{key:"definedInterval",set:function(e){"defined-interval"===this.classificationMethod&&this._set("definedInterval",e)}}]),a}(m);(0,u.e)([(0,u.y)({json:{write:!0}})],y.prototype,"breakCount",void 0),(0,u.e)([(0,u.y)({json:{write:!0}})],y.prototype,"classificationField",void 0),(0,u.e)([(0,u.y)({type:String,json:{read:p.read,write:p.write}})],y.prototype,"classificationMethod",void 0),(0,u.e)([(0,u.y)({json:{write:!0}})],y.prototype,"normalizationField",void 0),(0,u.e)([(0,u.y)({json:{read:h.read,write:h.write}})],y.prototype,"normalizationType",void 0),(0,u.e)([(0,u.y)({value:null,json:{write:!0}})],y.prototype,"standardDeviationInterval",null),(0,u.e)([(0,u.y)({value:null,json:{write:!0}})],y.prototype,"definedInterval",null),(0,u.e)([(0,u.y)()],y.prototype,"type",void 0);var b=y=(0,u.e)([(0,u.n)("esri.rest.support.ClassBreaksDefinition")],y),V=u.a.getLogger("esri.rest.support.generateRendererUtils");function g(e,n){return Number(e.toFixed(n))}function x(e){var n=e.normalizationTotal;return{classBreaks:T(e),normalizationTotal:n}}function T(e){var n=e.definition,a=n.classificationMethod,t=n.breakCount,r=n.normalizationType,i=n.definedInterval,l=[],u=e.values;if(0===u.length)return[];u=u.sort((function(e,n){return e-n}));var o=u[0],s=u[u.length-1];if("equal-interval"===a)if(u.length>=t){for(var f=(s-o)/t,c=o,v=1;v<t;v++){var d=g(o+v*f,6);l.push({minValue:c,maxValue:d,label:M(c,d,r)}),c=d}l.push({minValue:c,maxValue:s,label:M(c,s,r)})}else u.forEach((function(e){l.push({minValue:e,maxValue:e,label:M(e,e,r)})}));else if("natural-breaks"===a){for(var m=function(e){for(var n=[],a=[],t=Number.MIN_VALUE,r=1,i=-1,l=0;l<e.length;l++){var u=e[l];u===t?(r++,a[i]=r):null!==u&&(n.push(u),t=u,r=1,a.push(r),i++)}return{uniqueValues:n,valueFrequency:a}}(u),p=e.valueFrequency||m.valueFrequency,h=F(m.uniqueValues,p,t),y=o,b=1;b<t;b++)if(m.uniqueValues.length>b){var V=g(m.uniqueValues[h[b]],6);l.push({minValue:y,maxValue:V,label:M(y,V,r)}),y=V}l.push({minValue:y,maxValue:s,label:M(y,s,r)})}else if("quantile"===a)if(u.length>=t&&o!==s){for(var x=o,T=Math.ceil(u.length/t),D=0,z=1;z<t;z++){var I=T+D-1;I>u.length&&(I=u.length-1),I<0&&(I=0),l.push({minValue:x,maxValue:u[I],label:M(x,u[I],r)}),x=u[I],D+=T,T=Math.ceil((u.length-D)/(t-z))}l.push({minValue:x,maxValue:s,label:M(x,s,r)})}else for(var k=-1,w=0;w<u.length;w++){var N=u[w];N!==k&&(k=N,l.push({minValue:k,maxValue:N,label:M(k,N,r)}),k=N)}else if("standard-deviation"===a){var S=function(e){for(var n=0,a=0;a<e.length;a++)n+=e[a];return n/e.length}(u),C=function(e,n){for(var a=0,t=0;t<e.length;t++){var r=e[t];a+=(r-n)*(r-n)}return a/=e.length,Math.sqrt(a)}(u,S);if(0===C)l.push({minValue:u[0],maxValue:u[0],label:M(u[0],u[0],r)});else{for(var q=function(e,n,a,t,r){var i=Math.max(t-e,n-t)/r/a;return i>=1?1:i>=.5?.5:.25}(o,s,t,S,C)*C,Z=0,B=o,E=t;E>=1;E--){var j=g(S-(E-.5)*q,6);l.push({minValue:B,maxValue:j,label:M(B,j,r)}),B=j,Z++}var _=g(S+.5*q,6);l.push({minValue:B,maxValue:_,label:M(B,_,r)}),B=_,Z++;for(var U=1;U<=t;U++)_=Z===2*t?s:g(S+(U+.5)*q,6),l.push({minValue:B,maxValue:_,label:M(B,_,r)}),B=_,Z++}}else if("defined-interval"===a){if(!i)return l;for(var P=u[0],G=u[u.length-1],L=Math.ceil((G-P)/i),O=P,A=1;A<L;A++){var R=g(P+A*i,6);l.push({minValue:O,maxValue:R,label:M(O,R,r)}),O=R}l.push({minValue:O,maxValue:G,label:M(O,G,r)})}return l}function M(e,n,a){return e===n?a&&"percent-of-total"===a?e+"%":e.toString():a&&"percent-of-total"===a?e+"% - "+n+"%":e+" - "+n}function F(e,n,a){var t=e.length,r=[];a>t&&(a=t);for(var i=0;i<a;i++)r.push(Math.round(i*t/a-1));r.push(t-1);var l=D(r,e,n,a);return function(e,n,a,t,r,i){for(var l=0,u=0,o=0,s=0,f=!0,c=0;c<2&&f;c++){0===c&&(f=!1);for(var v=0;v<i-1;v++)for(;a[v+1]+1!==a[v+2];){a[v+1]=a[v+1]+1;var d=z(v,a,t,r);o=d.sbMean,l=d.sbSdcm;var m=z(v+1,a,t,r);if(s=m.sbMean,!(l+(u=m.sbSdcm)<n[v]+n[v+1])){a[v+1]=a[v+1]-1;break}n[v]=l,n[v+1]=u,e[v]=o,e[v+1]=s,f=!0}for(var p=i-1;p>0;p--)for(;a[p]!==a[p-1]+1;){a[p]=a[p]-1;var h=z(p-1,a,t,r);o=h.sbMean,l=h.sbSdcm;var y=z(p,a,t,r);if(s=y.sbMean,!(l+(u=y.sbSdcm)<n[p-1]+n[p])){a[p]=a[p]+1;break}n[p-1]=l,n[p]=u,e[p-1]=o,e[p]=s,f=!0}}return f}(l.mean,l.sdcm,r,e,n,a)&&(l=D(r,e,n,a)),r}function D(e,n,a,t){for(var r=[],i=[],l=[],u=0,o=[],s=[],f=0;f<t;f++){var c=z(f,e,n,a);o.push(c.sbMean),s.push(c.sbSdcm),u+=s[f]}for(var v,d=u,m=!0;m||u<d;){m=!1,r=[];for(var p=0;p<t;p++)r.push(e[p]);for(var h=0;h<t;h++)for(var y=e[h]+1;y<=e[h+1];y++)if(v=n[y],h>0&&y!==e[h+1]&&Math.abs(v-o[h])>Math.abs(v-o[h-1]))e[h]=y;else if(h<t-1&&e[h]!==y-1&&Math.abs(v-o[h])>Math.abs(v-o[h+1])){e[h+1]=y-1;break}d=u,u=0,i=[],l=[];for(var b=0;b<t;b++){i.push(o[b]),l.push(s[b]);var V=z(b,e,n,a);o[b]=V.sbMean,s[b]=V.sbSdcm,u+=s[b]}}if(u>d){for(var g=0;g<t;g++)e[g]=r[g],o[g]=i[g],s[g]=l[g];u=d}return{mean:o,sdcm:s}}function z(e,n,a,t){for(var r=0,i=0,l=n[e]+1;l<=n[e+1];l++){var u=t[l];r+=a[l]*u,i+=u}i<=0&&V.warn("Exception in Natural Breaks calculation");for(var o=r/i,s=0,f=n[e]+1;f<=n[e+1];f++)s+=t[f]*Math.pow(a[f]-o,2);return{sbMean:o,sbSdcm:s}}},54622:function(e,n,a){a.d(n,{D:function(){return T},F:function(){return g},N:function(){return F},S:function(){return D},T:function(){return b},V:function(){return y},c:function(){return s},d:function(){return v},f:function(){return c},m:function(){return f},p:function(){return d},v:function(){return m},x:function(){return x}});var t=a(37762),r=a(93433),i=a(73679),l=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,u=new Set(["esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]),o=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function s(e){return null==e||"string"==typeof e&&!e?"<Null>":e}function f(e){var n=null!=e.normalizationField||null!=e.normalizationType,a=null!=e.minValue||null!=e.maxValue,t=!!e.sqlExpression&&e.supportsSQLExpression;return!n&&!a&&!t}function c(e){var n=e.returnDistinct?(0,r.Z)(new Set(e.values)):e.values,a=n.filter((function(e){return null!=e})).length,t={count:a};return e.supportsNullCount&&(t.nullcount=n.length-a),e.percentileParams&&(t.median=d(n,e.percentileParams)),t}function v(e){var n,a=e.values,r=e.useSampleStdDev,i=e.supportsNullCount,l=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY,o=null,s=null,f=null,c=null,v=0,m=null==e.minValue?-1/0:e.minValue,p=null==e.maxValue?1/0:e.maxValue,h=(0,t.Z)(a);try{for(h.s();!(n=h.n()).done;){var y=n.value;Number.isFinite(y)?y>=m&&y<=p&&(o+=y,l=Math.min(l,y),u=Math.max(u,y),v++):"string"==typeof y&&v++}}catch(M){h.e(M)}finally{h.f()}if(v&&null!=o){s=o/v;var b,V=0,g=(0,t.Z)(a);try{for(g.s();!(b=g.n()).done;){var x=b.value;Number.isFinite(x)&&x>=m&&x<=p&&(V+=Math.pow(x-s,2))}}catch(M){g.e(M)}finally{g.f()}c=r?v>1?V/(v-1):0:v>0?V/v:0,f=Math.sqrt(c)}else l=null,u=null;var T={avg:s,count:v,max:u,min:l,stddev:f,sum:o,variance:c};return i&&(T.nullcount=a.length-v),e.percentileParams&&(T.median=d(a,e.percentileParams)),T}function d(e,n){var a=n.fieldType,t=n.value,i=n.orderBy,l=n.isDiscrete,u=m(a,"desc"===i);if(0===(e=(0,r.Z)(e).filter((function(e){return null!=e})).sort((function(e,n){return u(e,n)}))).length)return null;if(t<=0)return e[0];if(t>=1)return e[e.length-1];var o=(e.length-1)*t,s=Math.floor(o),f=s+1,c=o%1,v=e[s],d=e[f];return f>=e.length||l||"string"==typeof v||"string"==typeof d?v:v*(1-c)+d*c}function m(e,n){var a=n?1:-1,t=function(e){return e?function(e,n){return n-e}:function(e,n){return e-n}}(n),i=p(n);if(!e||!["esriFieldTypeDate","esriFieldTypeString","esriFieldTypeGUID","esriFieldTypeGlobalID"].concat((0,r.Z)(u)).includes(e))return function(e,n){return"number"==typeof e&&"number"==typeof n?t(e,n):"string"==typeof e&&"string"==typeof n?i(e,n):a};if("esriFieldTypeDate"===e)return function(e,n){var r=new Date(e).getTime(),i=new Date(n).getTime();return isNaN(r)||isNaN(i)?a:t(r,i)};if(u.has(e))return function(e,n){return t(e,n)};if("esriFieldTypeString"===e)return function(e,n){return i(e,n)};if("esriFieldTypeGUID"===e||"esriFieldTypeGlobalID"===e){var l=p(n);return function(e,n){return l(h(e),h(n))}}return n?function(e,n){return 1}:function(e,n){return-1}}function p(e){return e?function(e,n){var a,t;return(e=null===(a=e)||void 0===a?void 0:a.toUpperCase())>(n=null===(t=n)||void 0===t?void 0:t.toUpperCase())?-1:e<n?1:0}:function(e,n){var a,t;return(e=null===(a=e)||void 0===a?void 0:a.toUpperCase())<(n=null===(t=n)||void 0===t?void 0:t.toUpperCase())?-1:e>n?1:0}}function h(e){return e.substr(24,12)+e.substr(19,4)+e.substr(16,2)+e.substr(14,2)+e.substr(11,2)+e.substr(9,2)+e.substr(6,2)+e.substr(4,2)+e.substr(2,2)+e.substr(0,2)}function y(e,n){var a;for(a in e)o.includes(a)&&(Number.isFinite(e[a])||(e[a]=null));return n?(["avg","stddev","variance"].forEach((function(n){null!=e[n]&&(e[n]=Math.ceil(e[n]))})),e):e}function b(e){var n,a={},r=(0,t.Z)(e);try{for(r.s();!(n=r.n()).done;){var i=n.value;(null==i||"string"==typeof i&&""===i.trim())&&(i=null),null==a[i]?a[i]={count:1,data:i}:a[i].count++}}catch(l){r.e(l)}finally{r.f()}return{count:a}}function V(e){return"coded-value"!==(null===e||void 0===e?void 0:e.type)?[]:e.codedValues.map((function(e){return e.code}))}function g(e,n,a,r){var i=e.count,l=[];if(a&&n){var u,o=[],f=V(n[0]),c=(0,t.Z)(f);try{for(c.s();!(u=c.n()).done;){var v=u.value;if(n[1]){var d,m=V(n[1]),p=(0,t.Z)(m);try{for(p.s();!(d=p.n()).done;){var h=d.value;if(n[2]){var y,b=V(n[2]),g=(0,t.Z)(b);try{for(g.s();!(y=g.n()).done;){var x=y.value;o.push("".concat(s(v)).concat(r).concat(s(h)).concat(r).concat(s(x)))}}catch(I){g.e(I)}finally{g.f()}}else o.push("".concat(s(v)).concat(r).concat(s(h)))}}catch(I){p.e(I)}finally{p.f()}}else o.push(v)}}catch(I){c.e(I)}finally{c.f()}for(var T=0,M=o;T<M.length;T++){var F=M[T];i.hasOwnProperty(F)||(i[F]={data:F,count:0})}}for(var D in i){var z=i[D];l.push({value:z.data,count:z.count,label:z.label})}return{uniqueValueInfos:l}}function x(e,n,a,t){var r=null;switch(n){case"log":0!==e&&(r=Math.log(e)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(t)&&0!==t&&(r=e/t*100);break;case"field":Number.isFinite(a)&&0!==a&&(r=e/a);break;case"natural-log":e>0&&(r=Math.log(e));break;case"square-root":e>0&&(r=Math.pow(e,.5))}return r}function T(e,n){var a=M({field:n.field,normalizationType:n.normalizationType,normalizationField:n.normalizationField,classificationMethod:n.classificationMethod,standardDeviationInterval:n.standardDeviationInterval,breakCount:n.numClasses||5});return e=function(e,n,a){var t,r;return n=null!==(t=n)&&void 0!==t?t:-1/0,a=null!==(r=a)&&void 0!==r?r:1/0,e.filter((function(e){return Number.isFinite(e)&&e>=n&&e<=a}))}(e,n.minValue,n.maxValue),(0,i.a)({definition:a,values:e,normalizationTotal:n.normalizationTotal})}function M(e){var n=e.field,a=e.classificationMethod||"equal-interval",t=e.normalizationType,r=e.normalizationField,l=new i.l;return l.classificationField=n,l.breakCount=e.breakCount,l.classificationMethod=a,l.standardDeviationInterval="standard-deviation"===a?e.standardDeviationInterval||1:void 0,l.normalizationType=t,l.normalizationField="field"===t?r:void 0,l}function F(e,n){var a=e.classBreaks,t=a.length,r=a[0].minValue,i=a[t-1].maxValue,u="standard-deviation"===n,o=l;return a=a.map((function(e){var n=e.label,a={minValue:e.minValue,maxValue:e.maxValue,label:n};if(u&&n){var t=n.match(o).map((function(e){return+e.trim()}));2===t.length?(a.minStdDev=t[0],a.maxStdDev=t[1],t[0]<0&&t[1]>0&&(a.hasAvg=!0)):1===t.length&&(n.includes("<")?(a.minStdDev=null,a.maxStdDev=t[0]):n.includes(">")&&(a.minStdDev=t[0],a.maxStdDev=null))}return a})),{minValue:r,maxValue:i,classBreakInfos:a,normalizationTotal:e.normalizationTotal}}function D(e,n){var a,r=function(e,n){var a=n.field,t=n.classificationMethod,r=n.standardDeviationInterval,i=n.normalizationType,l=n.normalizationField,u=n.normalizationTotal,o=n.minValue,s=n.maxValue,c=n.numBins||10,d=null,m=null,p=null;if(t&&"equal-interval"!==t||i){var h=T(e,{field:a,normalizationType:i,normalizationField:l,normalizationTotal:u,classificationMethod:t,standardDeviationInterval:r,minValue:o,maxValue:s,numClasses:c}).classBreaks;d=h[0].minValue,m=h[h.length-1].maxValue,p=h.map((function(e){return[e.minValue,e.maxValue]}))}else{if(null!=o&&null!=s)d=o,m=s;else{var y=v({values:e,minValue:o,maxValue:s,useSampleStdDev:!i,supportsNullCount:f({normalizationType:i,normalizationField:l,minValue:o,maxValue:s})});d=y.min,m=y.max}p=function(e,n,a){for(var t,r=(n-e)/a,i=[],l=e,u=1;u<=a;u++)t=l+r,t=Number(t.toFixed(16)),i.push([l,u===a?n:t]),l=t;return i}(d,m,c)}return{min:d,max:m,intervals:p}}(e,n),i=r.min,l=r.max,u=r.intervals,o=u.map((function(e,n){return{minValue:u[n][0],maxValue:u[n][1],count:0}})),s=(0,t.Z)(e);try{for(s.s();!(a=s.n()).done;){var c=a.value;if(null!=c&&c>=i&&c<=l){var d=z(u,c);d>-1&&o[d].count++}}}catch(m){s.e(m)}finally{s.f()}return{bins:o,minValue:i,maxValue:l,normalizationTotal:n.normalizationTotal}}function z(e,n){for(var a=-1,t=e.length-1;t>=0;t--)if(n>=e[t][0]){a=t;break}return a}}}]);
//# sourceMappingURL=4622.91d17a21.chunk.js.map