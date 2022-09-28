"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[594],{2326:function(e,r,t){t.d(r,{e:function(){return f},o:function(){return d},s:function(){return h},t:function(){return c}});var n=t(60136),o=t(29388),s=t(29439),i=t(93433),u=t(15671),a=t(43144),l=t(50165),c=function(){function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];(0,u.Z)(this,e),this.lengths=null!==r&&void 0!==r?r:[],this.coords=null!==t&&void 0!==t?t:[],this.hasIndeterminateRingOrder=n}return(0,a.Z)(e,[{key:"isPoint",get:function(){return 0===this.lengths.length}},{key:"maxLength",get:function(){return Math.max.apply(Math,(0,i.Z)(this.lengths))}},{key:"size",get:function(){return this.lengths.reduce((function(e,r){return e+r}))}},{key:"forEachVertex",value:function(e){var r=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(var t=0;t<this.lengths.length;t++){for(var n=this.lengths[t],o=0;o<n;o++)e(this.coords[2*(o+r)],this.coords[2*(o+r)+1]);r+=n}}},{key:"clone",value:function(r){return r?(r.set(this.coords),new e(this.lengths.slice(),r,this.hasIndeterminateRingOrder)):new e(this.lengths.slice(),this.coords.slice(),this.hasIndeterminateRingOrder)}}],[{key:"fromRect",value:function(r){var t=(0,s.Z)(r,4),n=t[0],o=t[1],i=t[2]-n,u=t[3]-o;return new e([5],[n,o,i,0,0,u,-i,0,0,-u])}}]),e}(),h=function(){function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0;(0,u.Z)(this,e),this.geometry=r,this.attributes=t,this.centroid=n,this.objectId=o,this.displayId=0,this.geohashX=0,this.geohashY=0}return(0,a.Z)(e,[{key:"weakClone",value:function(){var r=new e(this.geometry,this.attributes,this.centroid,this.objectId);return r.displayId=this.displayId,r.geohashX=this.geohashX,r.geohashY=this.geohashY,r}}]),e}();function f(e){return!((0,l.t)(e.geometry)||!e.geometry.coords||!e.geometry.coords.length)}var d=function(e){(0,n.Z)(t,e);var r=(0,o.Z)(t);function t(){return(0,u.Z)(this,t),r.apply(this,arguments)}return(0,a.Z)(t)}(h)},9e4:function(e,r,t){t.d(r,{e:function(){return s}});var n=t(15671),o=t(43144),s=function(){function e(){(0,n.Z)(this,e),this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}return(0,o.Z)(e,[{key:"weakClone",value:function(){var r=new e;return r.objectIdFieldName=this.objectIdFieldName,r.globalIdFieldName=this.globalIdFieldName,r.geohashFieldName=this.geohashFieldName,r.geometryProperties=this.geometryProperties,r.geometryType=this.geometryType,r.spatialReference=this.spatialReference,r.hasZ=this.hasZ,r.hasM=this.hasM,r.features=this.features,r.fields=this.fields,r.transform=this.transform,r.exceededTransferLimit=this.exceededTransferLimit,r.uniqueIdField=this.uniqueIdField,r.queryGeometry=this.queryGeometry,r.queryGeometryType=this.queryGeometryType,r}}]),e}()},30594:function(e,r,t){t.d(r,{$:function(){return Y},C:function(){return U},D:function(){return O},G:function(){return I},H:function(){return S},L:function(){return C},M:function(){return Z},Q:function(){return D},V:function(){return R},W:function(){return H},X:function(){return Q},_:function(){return L},a:function(){return he},b:function(){return p},c:function(){return ee},e:function(){return W},f:function(){return oe},g:function(){return ue},i:function(){return ne},l:function(){return re},m:function(){return ae},n:function(){return B},s:function(){return K},t:function(){return $},u:function(){return te},w:function(){return fe},y:function(){return le}});var n=t(93433),o=t(29439),s=t(37762),i=t(50165),u=t(78664),a=t(2326),l=t(9e4);function c(e,r){return e?r?4:3:r?3:2}var h=i.s.getLogger("esri.layers.graphics.featureConversionUtils"),f={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0},d=function(e,r,t,n,o,s){e[t]=o,e[t+1]=s},g=function(e,r,t,n,o,s){e[t]=o,e[t+1]=s,e[t+2]=r[n+2]},y=function(e,r,t,n,o,s){e[t]=o,e[t+1]=s,e[t+2]=r[n+3]},v=function(e,r,t,n,o,s){e[t]=o,e[t+1]=s,e[t+2]=r[n+2],e[t+3]=r[n+3]};function m(e,r,t,n){if(e){if(t)return r&&n?v:g;if(r&&n)return y}else if(r&&n)return g;return d}function p(e,r){var t=e.scale,n=e.translate;return Math.round((r-n[0])/t[0])}function Z(e,r){var t=e.scale,n=e.translate;return Math.round((n[1]-r)/t[1])}function b(e,r){var t=e.scale,n=e.translate;return r*t[0]+n[0]}function w(e,r){var t=e.scale;return e.translate[1]-r*t[1]}function I(e,r,t){return e?r?t?P(e):T(e):t?F(e):G(e):null}function G(e){var r=e.coords;return{x:r[0],y:r[1]}}function M(e,r){return e.coords[0]=r.x,e.coords[1]=r.y,e}function T(e){var r=e.coords;return{x:r[0],y:r[1],z:r[2]}}function N(e,r){return e.coords[0]=r.x,e.coords[1]=r.y,e.coords[2]=r.z,e}function F(e){var r=e.coords;return{x:r[0],y:r[1],m:r[2]}}function k(e,r){return e.coords[0]=r.x,e.coords[1]=r.y,e.coords[2]=r.m,e}function P(e){var r=e.coords;return{x:r[0],y:r[1],z:r[2],m:r[3]}}function x(e,r){return e.coords[0]=r.x,e.coords[1]=r.y,e.coords[2]=r.z,e.coords[3]=r.m,e}function q(e,r){return e&&r?x:e?N:r?k:M}function j(e,r,t,n,o){var i,u=q(t,n),l=(0,s.Z)(r);try{for(l.s();!(i=l.n()).done;){var c=i.value,h=c.geometry,f=c.attributes,d=void 0;h&&(d=u(new a.t,h)),e.push(new a.s(d,f,null,f[o]))}}catch(g){l.e(g)}finally{l.f()}return e}function R(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:q(null!=r.z,null!=r.m);return t(e,r)}function L(e,r,t){if((0,i.t)(e))return null;for(var n=c(r,t),o=[],s=0;s<e.coords.length;s+=n){for(var u=[],a=0;a<n;a++)u.push(e.coords[s+a]);o.push(u)}return r?t?{points:o,hasZ:r,hasM:t}:{points:o,hasZ:r}:t?{points:o,hasM:t}:{points:o}}function _(e,r,t,n,o){var i,u=c(t,n),l=(0,s.Z)(r);try{for(l.s();!(i=l.n()).done;){var h=i.value,f=h.geometry,d=h.attributes,g=void 0;f&&(g=z(new a.t,f,u)),e.push(new a.s(g,d,null,d[o]))}}catch(y){l.e(y)}finally{l.f()}return e}function z(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c(r.hasZ,r.hasM);e.lengths[0]=r.points.length;var n,o=e.coords,i=0,u=(0,s.Z)(r.points);try{for(u.s();!(n=u.n()).done;)for(var a=n.value,l=0;l<t;l++)o[i++]=a[l]}catch(h){u.e(h)}finally{u.f()}return e}function C(e,r,t){if(!e)return null;var n,o=c(r,t),i=e.coords,u=e.lengths,a=[],l=0,h=(0,s.Z)(u);try{for(h.s();!(n=h.n()).done;){for(var f=n.value,d=[],g=0;g<f;g++){for(var y=[],v=0;v<o;v++)y.push(i[l++]);d.push(y)}a.push(d)}}catch(m){h.e(m)}finally{h.f()}return r?t?{paths:a,hasZ:r,hasM:t}:{paths:a,hasZ:r}:t?{paths:a,hasM:t}:{paths:a}}function E(e,r,t,n,o){var i,u=c(t,n),l=(0,s.Z)(r);try{for(l.s();!(i=l.n()).done;){var h=i.value,f=h.geometry,d=h.attributes,g=void 0;f&&(g=Y(new a.t,f,u)),e.push(new a.s(g,d,null,d[o]))}}catch(y){l.e(y)}finally{l.f()}return e}function Y(e,r){var t,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c(r.hasZ,r.hasM),o=e.lengths,i=e.coords,u=0,a=(0,s.Z)(r.paths);try{for(a.s();!(t=a.n()).done;){var l,h=t.value,f=(0,s.Z)(h);try{for(f.s();!(l=f.n()).done;)for(var d=l.value,g=0;g<n;g++)i[u++]=d[g]}catch(y){f.e(y)}finally{f.f()}o.push(h.length)}}catch(y){a.e(y)}finally{a.f()}return e}function U(e,r,t){if(!e)return null;var n,o=c(r,t),i=e.coords,u=e.lengths,a=[],l=0,h=(0,s.Z)(u);try{for(h.s();!(n=h.n()).done;){for(var f=n.value,d=[],g=0;g<f;g++){for(var y=[],v=0;v<o;v++)y.push(i[l++]);d.push(y)}a.push(d)}}catch(m){h.e(m)}finally{h.f()}return r?t?{rings:a,hasZ:r,hasM:t}:{rings:a,hasZ:r}:t?{rings:a,hasM:t}:{rings:a}}function V(e,r,t,n,o){var u,l=(0,s.Z)(r);try{for(l.s();!(u=l.n()).done;){var c=u.value,h=c.geometry,f=c.centroid,d=c.attributes,g=void 0;h&&(g=O(new a.t,h,t,n)),(0,i.r)(f)?e.push(new a.s(g,d,M(new a.t,f),d[o])):e.push(new a.s(g,d,null,d[o]))}}catch(y){l.e(y)}finally{l.f()}return e}function O(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r.hasZ,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r.hasM;return S(e,r.rings,t,n),e}function S(e,r,t,n){var o=c(t,n),i=e.lengths,u=e.coords,a=0;i.length=u.length=0;var l,h=(0,s.Z)(r);try{for(h.s();!(l=h.n()).done;){var f,d=l.value,g=(0,s.Z)(d);try{for(g.s();!(f=g.n()).done;)for(var y=f.value,v=0;v<o;v++)u[a++]=y[v]}catch(m){g.e(m)}finally{g.f()}i.push(d.length)}}catch(m){h.e(m)}finally{h.f()}return e}var A=[],X=[];function D(e,r,t,n,s){A[0]=e;var i=H(X,A,r,t,n,s),u=(0,o.Z)(i,1)[0];return A.length=X.length=0,u}function H(e,r,t,n,o,u){if(e.length=0,!t){var l,c=(0,s.Z)(r);try{for(c.s();!(l=c.n()).done;){var f=l.value,d=f.attributes[u];e.push(new a.s(null,f.attributes,null,d))}}catch(g){c.e(g)}finally{c.f()}return e}switch(t){case"esriGeometryPoint":return j(e,r,n,o,u);case"esriGeometryMultipoint":return _(e,r,n,o,u);case"esriGeometryPolyline":return E(e,r,n,o,u);case"esriGeometryPolygon":return V(e,r,n,o,u);default:h.error("convertToFeatureSet:unknown-geometry",new i.a("Unable to parse unknown geometry type '".concat(t,"'"))),e.length=0}return e}function Q(e,r,t,n,o,s){var u=e.length;switch(t){case"esriGeometryPoint":j(e,r,n,o,s);break;case"esriGeometryMultipoint":_(e,r,n,o,s);break;case"esriGeometryPolyline":E(e,r,n,o,s);break;case"esriGeometryPolygon":V(e,r,n,o,s);break;default:h.error("convertToFeatureSet:unknown-geometry",new i.a("Unable to parse unknown geometry type '".concat(t,"'")))}for(var a=0;a<r.length;a++)e[a+u].geometryType=t,e[a+u].insertAfter=r[a].insertAfter,e[a+u].groupId=r[a].groupId;return e}function W(e,r,t,n){X[0]=e,J(A,X,r,t,n);var o=A[0];return A.length=X.length=0,o}function $(e,r,t){if((0,i.t)(e))return null;var n=new a.t;return"hasZ"in e&&null==r&&(r=e.hasZ),"hasM"in e&&null==t&&(t=e.hasM),(0,u.l)(e)?q(null!=r?r:null!=e.z,null!=t?t:null!=e.m)(n,e):(0,u.c)(e)?O(n,e,r,t):(0,u.y)(e)?Y(n,e,c(r,t)):(0,u.f)(e)?z(n,e,c(r,t)):void h.error("convertFromGeometry:unknown-geometry",new i.a("Unable to parse unknown geometry type '".concat(e,"'")))}function B(e,r,t,n){var o=e&&("coords"in e?e:e.geometry);if((0,i.t)(o))return null;switch(r){case"esriGeometryPoint":var s=G;return t&&n?s=P:t?s=T:n&&(s=F),s(o);case"esriGeometryMultipoint":return L(o,t,n);case"esriGeometryPolyline":return C(o,t,n);case"esriGeometryPolygon":return U(o,t,n);default:return void h.error("convertToGeometry:unknown-geometry",new i.a("Unable to parse unknown geometry type '".concat(r,"'")))}}function J(e,r,t,n,o){if(e.length=0,(0,i.t)(t))return function(e,r){var t,n=(0,s.Z)(r);try{for(n.s();!(t=n.n()).done;){var o=t.value;e.push({attributes:o.attributes})}}catch(i){n.e(i)}finally{n.f()}return e}(e,r);switch(t){case"esriGeometryPoint":return function(e,r,t,n){var o=G;t&&n?o=P:t?o=T:n&&(o=F);var u,a=(0,s.Z)(r);try{for(a.s();!(u=a.n()).done;){var l=u.value,c=l.geometry,h=l.attributes,f=(0,i.r)(c)?o(c):null;e.push({attributes:h,geometry:f})}}catch(d){a.e(d)}finally{a.f()}return e}(e,r,n,o);case"esriGeometryMultipoint":return function(e,r,t,n){var o,i=(0,s.Z)(r);try{for(i.s();!(o=i.n()).done;){var u=o.value,a=u.geometry,l=u.attributes,c=void 0;a&&(c=L(a,t,n)),e.push({attributes:l,geometry:c})}}catch(h){i.e(h)}finally{i.f()}return e}(e,r,n,o);case"esriGeometryPolyline":return function(e,r,t,n){var o,u=(0,s.Z)(r);try{for(u.s();!(o=u.n()).done;){var a=o.value,l=a.geometry,c=a.attributes,h=void 0;(0,i.r)(l)&&(h=C(l,t,n)),e.push({attributes:c,geometry:h})}}catch(f){u.e(f)}finally{u.f()}return e}(e,r,n,o);case"esriGeometryPolygon":return function(e,r,t,n){var o,u=(0,s.Z)(r);try{for(u.s();!(o=u.n()).done;){var a=o.value,l=a.geometry,c=a.attributes,h=a.centroid,f=void 0;if((0,i.r)(l)&&(f=U(l,t,n)),(0,i.r)(h)){var d=G(h);e.push({attributes:c,centroid:d,geometry:f})}else e.push({attributes:c,geometry:f})}}catch(g){u.e(g)}finally{u.f()}return e}(e,r,n,o);default:h.error("convertToFeatureSet:unknown-geometry",new i.a("Unable to parse unknown geometry type '".concat(t,"'")))}return e}function K(e){var r=e.objectIdFieldName,t=e.spatialReference,n=e.transform,o=e.fields,s=e.hasM,i=e.hasZ,u=e.features,a=e.geometryType,l=e.exceededTransferLimit,c=e.uniqueIdField,h=e.queryGeometry,f=e.queryGeometryType,d={features:J([],u,a,i,s),fields:o,geometryType:a,objectIdFieldName:r,spatialReference:t,uniqueIdField:c,queryGeometry:B(h,f,!1,!1)};return n&&(d.transform=n),l&&(d.exceededTransferLimit=l),s&&(d.hasM=s),i&&(d.hasZ=i),d}function ee(e,r){var t=new l.e,n=e.hasM,o=e.hasZ,s=e.features,u=e.objectIdFieldName,a=e.spatialReference,c=e.geometryType,f=e.exceededTransferLimit,d=e.transform,g=e.fields;return g&&(t.fields=g),t.geometryType=c,t.objectIdFieldName=u||r,t.spatialReference=a,t.objectIdFieldName?(s&&H(t.features,s,c,o,n,t.objectIdFieldName),f&&(t.exceededTransferLimit=f),n&&(t.hasM=n),o&&(t.hasZ=o),d&&(t.transform=d),t):(h.error(new i.a("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),t)}function re(e){var r=e.transform,t=e.features,n=e.hasM,o=e.hasZ;if(!r)return e;var u,a=(0,s.Z)(t);try{for(a.s();!(u=a.n()).done;){var l=u.value;(0,i.r)(l.geometry)&&ae(l.geometry,l.geometry,n,o,r),(0,i.r)(l.centroid)&&ae(l.centroid,l.centroid,n,o,r)}}catch(c){a.e(c)}finally{a.f()}return e.transform=null,e}function te(e,r){var t=r.geometryType,n=r.features,o=r.hasM,s=r.hasZ;if(!e)return r;for(var i=0;i<n.length;i++){var u=n[i],l=u.weakClone();l.geometry=new a.t,ne(l.geometry,u.geometry,o,s,t,e),u.centroid&&(l.centroid=new a.t,ne(l.centroid,u.centroid,o,s,"esriGeometryPoint",e)),n[i]=l}return r.transform=e,r}function ne(e,r,t,n,o,u){var a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:t,l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:n;if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),(0,i.t)(r)||!r.coords.length)return null;var h=f[o],d=r.coords,g=r.lengths,y=c(t,n),v=c(t&&a,n&&l),b=m(t,n,a,l);if(!g.length)return b(e.coords,d,0,0,p(u,d[0]),Z(u,d[1])),e.lengths.length&&(e.lengths.length=0),e.coords.length=y,e;var w,I,G,M,T,N=0,F=0,k=F,P=(0,s.Z)(g);try{for(P.s();!(T=P.n()).done;){var x=T.value;if(!(x<h)){var q=0;F=k,G=w=p(u,d[N]),M=I=Z(u,d[N+1]),b(e.coords,d,F,N,G,M),q++,N+=y,F+=v;for(var j=1;j<x;j++,N+=y)G=p(u,d[N]),M=Z(u,d[N+1]),G===w&&M===I||(b(e.coords,d,F,N,G-w,M-I),F+=v,q++,w=G,I=M);q>=h&&(e.lengths.push(q),k=F)}}}catch(R){P.e(R)}finally{P.f()}return e.coords.length=k,e.coords.length?e:null}function oe(e,r,t,n,o,i){var u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:t,a=arguments.length>7&&void 0!==arguments[7]?arguments[7]:n;if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),!r||!r.coords.length)return null;var l=f[o],h=r.coords,d=r.lengths,g=c(t,n),y=c(t&&u,n&&a),v=m(t,n,u,a);if(!d.length)return v(e.coords,h,0,0,h[0],h[1]),e.lengths.length&&(e.lengths.length=0),e.coords.length=g,e;var p,Z=0,b=i*i,w=(0,s.Z)(d);try{for(w.s();!(p=w.n()).done;){var I=p.value;if(I<l)Z+=I*g;else{var G=e.coords.length/y,M=Z,T=Z+(I-1)*g;v(e.coords,h,e.coords.length,M,h[M],h[M+1]),ie(e.coords,h,g,b,v,M,T),v(e.coords,h,e.coords.length,T,h[T],h[T+1]);var N=e.coords.length/y-G;N>=l?e.lengths.push(N):e.coords.length=G*y,Z+=I*g}}}catch(F){w.e(F)}finally{w.f()}return e.coords.length?e:null}function se(e,r,t,n){var o=e[r],s=e[r+1],i=e[t],u=e[t+1],a=e[n],l=e[n+1],c=i,h=u,f=a-c,d=l-h;if(0!==f||0!==d){var g=((o-c)*f+(s-h)*d)/(f*f+d*d);g>1?(c=a,h=l):g>0&&(c+=f*g,h+=d*g)}return(f=o-c)*f+(d=s-h)*d}function ie(e,r,t,n,o,s,i){for(var u,a=n,l=0,c=s+t;c<i;c+=t)(u=se(r,c,s,i))>a&&(l=c,a=u);a>n&&(l-s>t&&ie(e,r,t,n,o,s,l),o(e,r,e.length,l,r[l],r[l+1]),i-l>t&&ie(e,r,t,n,o,l,i))}function ue(e,r,t,n){if((0,i.t)(r)||!r.coords||!r.coords.length)return null;var o=c(t,n),s=Number.POSITIVE_INFINITY,u=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,l=Number.NEGATIVE_INFINITY;if(r&&r.coords)for(var h=r.coords,f=0;f<h.length;f+=o){var d=h[f],g=h[f+1];s=Math.min(s,d),a=Math.max(a,d),u=Math.min(u,g),l=Math.max(l,g)}return e[0]=s,e[1]=u,e[2]=a,e[3]=l,e}function ae(e,r,t,n,s){var i=r.coords,u=r.lengths,a=t?n?v:g:n?g:d,l=c(t,n);if(!i.length)return e!==r&&(e.lengths.length=0,e.coords.length=0),e;if(!u.length)return a(e.coords,i,0,0,b(s,i[0]),w(s,i[1])),e!==r&&(e.lengths.length=0,e.coords.length=l),e;for(var h=(0,o.Z)(s.scale,2),f=h[0],y=h[1],m=0,p=0;p<u.length;p++){var Z=u[p];e.lengths[p]=Z;var I=b(s,i[m]),G=w(s,i[m+1]);a(e.coords,i,m,m,I,G),m+=l;for(var M=1;M<Z;M++,m+=l)I+=i[m]*f,G-=i[m+1]*y,a(e.coords,i,m,m,I,G)}return e!==r&&(e.lengths.length=u.length,e.coords.length=i.length),e}function le(e,r,t,o,s,i){var u,a=c(t,o),l=m(t,o,s,i),h=r.coords;e.coords.length=0,e.lengths.length=0,(u=e.lengths).push.apply(u,(0,n.Z)(r.lengths));for(var f=0;f<h.length;f+=a)l(e.coords,h,e.coords.length,f,h[f],h[f+1]);return e}function ce(e,r,t,n){for(var o=0,s=e[n*r],i=e[n*(r+1)],u=1;u<t;u++){var a=s+e[n*(r+u)],l=i+e[n*(r+u)+1],c=(a-s)*(l+i);s=a,i=l,o+=c}return.5*o}function he(e,r){for(var t=e.coords,n=e.lengths,o=0,s=0,i=0;i<n.length;i++)s+=ce(t,o,n[i],r),o+=i;return Math.abs(s)}function fe(e,r){if((0,i.t)(e))return null;for(var t=e.clone(),n=e.coords,o=e.lengths,s=0,u=0;u<o.length;u++){for(var a=o[u],l=n[r*s],c=n[r*s+1],h=1;h<a;h++){var f=l+n[r*(s+h)],d=c+n[r*(s+h)+1];t.coords[r*(s+h)]=f,t.coords[r*(s+h)+1]=d,l=f,c=d}s+=a}return t}}}]);
//# sourceMappingURL=594.dfb144a5.chunk.js.map