"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[6817],{46817:function(t,e,n){n.d(e,{G:function(){return W},Z:function(){return A},c:function(){return z},e:function(){return p},f:function(){return v},i:function(){return y},o:function(){return w},p:function(){return G},r:function(){return f},s:function(){return d},w:function(){return q}});var i=n(15671),r=n(43144),a=n(60136),m=n(29388),s=n(29439),h=n(37762),u=n(48848),o=n(93661),x=n(82474),l=[0,0];function f(t,e){return!!(0,o.r)(e)&&v(t,e.x,e.y,e.z)}function y(t,e){if(!e.points||e.points.length)return!1;var n,i=(0,h.Z)(e.points);try{for(i.s();!(n=i.n()).done;){if(!c(t,n.value))return!1}}catch(r){i.e(r)}finally{i.f()}return!0}function c(t,e){return v(t,e[0],e[1])}function p(t,e){return v(t,e[0],e[1],e[2])}function v(t,e,n,i){return e>=t.xmin&&e<=t.xmax&&n>=t.ymin&&n<=t.ymax&&(null==i||!t.hasZ||i>=t.zmin&&i<=t.zmax)}function z(t,e){return l[1]=e.y,l[0]=e.x,function(t,e){return d(t.rings,e)}(t,l)}function d(t,e){if(!t)return!1;if(function(t){return!Array.isArray(t[0][0])}(t))return g(!1,t,e);for(var n=!1,i=0,r=t.length;i<r;i++)n=g(n,t[i],e);return n}function g(t,e,n){for(var i=(0,s.Z)(n,2),r=i[0],a=i[1],m=t,h=0,u=0,o=e.length;u<o;u++){++h===o&&(h=0);var x=(0,s.Z)(e[u],2),l=x[0],f=x[1],y=(0,s.Z)(e[h],2),c=y[0],p=y[1];(f<a&&p>=a||p<a&&f>=a)&&l+(a-f)/(p-f)*(c-l)<r&&(m=!m)}return m}function M(t,e){return f(t,e)}function w(t,e){var n,i,r,a=t.hasZ&&e.hasZ;if(t.xmin<=e.xmin){if(n=e.xmin,t.xmax<n)return!1}else if(n=t.xmin,e.xmax<n)return!1;if(t.ymin<=e.ymin){if(i=e.ymin,t.ymax<i)return!1}else if(i=t.ymin,e.ymax<i)return!1;if(a&&e.hasZ)if(t.zmin<=e.zmin){if(r=e.zmin,t.zmax<r)return!1}else if(r=t.zmin,e.zmax<r)return!1;return!0}function Z(t,e){var n,i=e.points,r=e.hasZ?p:c,a=(0,h.Z)(i);try{for(a.s();!(n=a.n()).done;){if(r(t,n.value))return!0}}catch(m){a.e(m)}finally{a.f()}return!1}var k=[0,0],b=[0,0],R=[0,0],P=[0,0],_=[k,b,R,P],j=[[R,k],[k,b],[b,P],[P,R]];function N(t,e){return function(t,e){k[0]=t.xmin,k[1]=t.ymax,b[0]=t.xmax,b[1]=t.ymax,R[0]=t.xmin,R[1]=t.ymin,P[0]=t.xmax,P[1]=t.ymin;var n,i=(0,h.Z)(_);try{for(i.s();!(n=i.n()).done;){if(d(e,n.value))return!0}}catch(x){i.e(x)}finally{i.f()}var r,a=(0,h.Z)(e);try{for(a.s();!(r=a.n()).done;){var m=r.value;if(m.length){var s=m[0];if(c(t,s))return!0;for(var u=1;u<m.length;u++){var o=m[u];if(c(t,o)||S(s,o,j))return!0;s=o}}}}catch(x){a.e(x)}finally{a.f()}return!1}(t,e.rings)}function C(t,e){k[0]=t.xmin,k[1]=t.ymax,b[0]=t.xmax,b[1]=t.ymax,R[0]=t.xmin,R[1]=t.ymin,P[0]=t.xmax,P[1]=t.ymin;var n,i=e.paths,r=(0,h.Z)(i);try{for(r.s();!(n=r.n()).done;){var a=n.value;if(i.length){var m=a[0];if(c(t,m))return!0;for(var s=1;s<a.length;s++){var u=a[s];if(c(t,u)||S(m,u,j))return!0;m=u}}}}catch(o){r.e(o)}finally{r.f()}return!1}var I,O=[0,0];function G(t){for(var e=0;e<t.length;e++){for(var n=t[e],i=0;i<n.length-1;i++)for(var r=n[i],a=n[i+1],m=e+1;m<t.length;m++)for(var s=0;s<t[m].length-1;s++){var h=t[m][s],u=t[m][s+1];if(W(r,a,h,u,O)&&!(O[0]===r[0]&&O[1]===r[1]||O[0]===h[0]&&O[1]===h[1]||O[0]===a[0]&&O[1]===a[1]||O[0]===u[0]&&O[1]===u[1]))return!0}var o=n.length;if(!(o<=4))for(var x=0;x<o-3;x++){var l=o-1;0===x&&(l=o-2);for(var f=n[x],y=n[x+1],c=x+2;c<l;c++){var p=n[c],v=n[c+1];if(W(f,y,p,v,O)&&!(O[0]===f[0]&&O[1]===f[1]||O[0]===p[0]&&O[1]===p[1]||O[0]===y[0]&&O[1]===y[1]||O[0]===v[0]&&O[1]===v[1]))return!0}}}return!1}function S(t,e,n){for(var i=0;i<n.length;i++)if(W(t,e,n[i][0],n[i][1]))return!0;return!1}function W(t,e,n,i,r){var a=(0,s.Z)(t,2),m=a[0],h=a[1],u=(0,s.Z)(e,2),o=u[0],x=u[1],l=(0,s.Z)(n,2),f=l[0],y=l[1],c=(0,s.Z)(i,2),p=c[0]-f,v=m-f,z=o-m,d=c[1]-y,g=h-y,M=x-h,w=d*z-p*M;if(0===w)return!1;var Z=(p*g-d*v)/w,k=(z*g-M*v)/w;return Z>=0&&Z<=1&&k>=0&&k<=1&&(r&&(r[0]=m+Z*(o-m),r[1]=h+Z*(x-h)),!0)}function A(t){switch(t){case"esriGeometryEnvelope":case"extent":return w;case"esriGeometryMultipoint":case"multipoint":return Z;case"esriGeometryPoint":case"point":return M;case"esriGeometryPolygon":case"polygon":return N;case"esriGeometryPolyline":case"polyline":return C}}function E(t,e,n){return null==e?n:null==n?e:t(e,n)}var X=I=function(t){(0,a.Z)(n,t);var e=(0,m.Z)(n);function n(){var t;(0,i.Z)(this,n);for(var r=arguments.length,a=new Array(r),m=0;m<r;m++)a[m]=arguments[m];return(t=e.call.apply(e,[this].concat(a))).type="extent",t.xmin=0,t.ymin=0,t.mmin=void 0,t.zmin=void 0,t.xmax=0,t.ymax=0,t.mmax=void 0,t.zmax=void 0,t}return(0,r.Z)(n,[{key:"normalizeCtorArgs",value:function(t,e,n,i,r){return function(t){return t&&("esri.geometry.SpatialReference"===t.declaredClass||null!=t.wkid)}(t)?{spatialReference:t,xmin:0,ymin:0,xmax:0,ymax:0}:"object"==typeof t?(t.spatialReference=null==t.spatialReference?x.k.WGS84:t.spatialReference,t):{xmin:t,ymin:e,xmax:n,ymax:i,spatialReference:null!==r&&void 0!==r?r:x.k.WGS84}}},{key:"cache",get:function(){return this.commitProperty("xmin"),this.commitProperty("ymin"),this.commitProperty("zmin"),this.commitProperty("mmin"),this.commitProperty("xmax"),this.commitProperty("ymax"),this.commitProperty("zmax"),this.commitProperty("mmax"),this.commitProperty("spatialReference"),{}}},{key:"center",get:function(){var t=new x.w({x:.5*(this.xmin+this.xmax),y:.5*(this.ymin+this.ymax),spatialReference:this.spatialReference});return this.hasZ&&(t.z=.5*(this.zmin+this.zmax)),this.hasM&&(t.m=.5*(this.mmin+this.mmax)),t}},{key:"extent",get:function(){return this.clone()}},{key:"hasM",get:function(){return null!=this.mmin&&null!=this.mmax}},{key:"hasZ",get:function(){return null!=this.zmin&&null!=this.zmax}},{key:"height",get:function(){return Math.abs(this.ymax-this.ymin)}},{key:"width",get:function(){return Math.abs(this.xmax-this.xmin)}},{key:"centerAt",value:function(t){var e=this.center;return null!=t.z&&this.hasZ?this.offset(t.x-e.x,t.y-e.y,t.z-e.z):this.offset(t.x-e.x,t.y-e.y)}},{key:"clone",value:function(){var t=new I;return t.xmin=this.xmin,t.ymin=this.ymin,t.xmax=this.xmax,t.ymax=this.ymax,t.spatialReference=this.spatialReference,null!=this.zmin&&(t.zmin=this.zmin,t.zmax=this.zmax),null!=this.mmin&&(t.mmin=this.mmin,t.mmax=this.mmax),t}},{key:"contains",value:function(t){if(!t)return!1;var e=this.spatialReference,n=t.spatialReference;return e&&n&&!e.equals(n)&&(0,x.g)(e,n)&&(t=e.isWebMercator?(0,x.R)(t):(0,x.j)(t,!0)),"point"===t.type?f(this,t):"extent"===t.type&&function(t,e){var n=e.xmin,i=e.ymin,r=e.zmin,a=e.xmax,m=e.ymax,s=e.zmax;return t.hasZ&&e.hasZ?v(t,n,i,r)&&v(t,n,m,r)&&v(t,a,m,r)&&v(t,a,i,r)&&v(t,n,i,s)&&v(t,n,m,s)&&v(t,a,m,s)&&v(t,a,i,s):v(t,n,i)&&v(t,n,m)&&v(t,a,m)&&v(t,a,i)}(this,t)}},{key:"equals",value:function(t){if(this===t)return!0;if((0,o.t)(t))return!1;var e=this.spatialReference,n=t.spatialReference;return e&&n&&!e.equals(n)&&(0,x.g)(e,n)&&(t=e.isWebMercator?(0,x.R)(t):(0,x.j)(t,!0)),this.xmin===t.xmin&&this.ymin===t.ymin&&this.zmin===t.zmin&&this.mmin===t.mmin&&this.xmax===t.xmax&&this.ymax===t.ymax&&this.zmax===t.zmax&&this.mmax===t.mmax}},{key:"expand",value:function(t){var e=.5*(1-t),n=this.width*e,i=this.height*e;if(this.xmin+=n,this.ymin+=i,this.xmax-=n,this.ymax-=i,this.hasZ){var r=(this.zmax-this.zmin)*e;this.zmin+=r,this.zmax-=r}if(this.hasM){var a=(this.mmax-this.mmin)*e;this.mmin+=a,this.mmax-=a}return this}},{key:"intersects",value:function(t){if((0,o.t)(t))return!1;"mesh"===t.type&&(t=t.extent);var e=this.spatialReference,n=t.spatialReference;return e&&n&&!(0,x.E)(e,n)&&(0,x.g)(e,n)&&(t=e.isWebMercator?(0,x.R)(t):(0,x.j)(t,!0)),A(t.type)(this,t)}},{key:"normalize",value:function(){var t=this._normalize(!1,!0);return Array.isArray(t)?t:[t]}},{key:"offset",value:function(t,e,n){return this.xmin+=t,this.ymin+=e,this.xmax+=t,this.ymax+=e,null!=n&&(this.zmin+=n,this.zmax+=n),this}},{key:"shiftCentralMeridian",value:function(){return this._normalize(!0)}},{key:"union",value:function(t){return this===t||(this.xmin=Math.min(this.xmin,t.xmin),this.ymin=Math.min(this.ymin,t.ymin),this.xmax=Math.max(this.xmax,t.xmax),this.ymax=Math.max(this.ymax,t.ymax),(this.hasZ||t.hasZ)&&(this.zmin=E(Math.min,this.zmin,t.zmin),this.zmax=E(Math.max,this.zmax,t.zmax)),(this.hasM||t.hasM)&&(this.mmin=E(Math.min,this.mmin,t.mmin),this.mmax=E(Math.max,this.mmax,t.mmax))),this}},{key:"intersection",value:function(t){return this===t?this:(0,o.t)(t)||!this.intersects(t)?null:(this.xmin=Math.max(this.xmin,t.xmin),this.ymin=Math.max(this.ymin,t.ymin),this.xmax=Math.min(this.xmax,t.xmax),this.ymax=Math.min(this.ymax,t.ymax),(this.hasZ||t.hasZ)&&(this.zmin=E(Math.max,this.zmin,t.zmin),this.zmax=E(Math.min,this.zmax,t.zmax)),(this.hasM||t.hasM)&&(this.mmin=E(Math.max,this.mmin,t.mmin),this.mmax=E(Math.min,this.mmax,t.mmax)),this)}},{key:"toJSON",value:function(t){return this.write({},t)}},{key:"_shiftCM",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,x.a)(this.spatialReference);if(!t||!this.spatialReference)return this;var e=this.spatialReference,n=this._getCM(t);if(n){var i,r=e.isWebMercator?(0,x.j)(n):n;this.xmin-=n.x,this.xmax-=n.x,e.isWebMercator||(r.x=this._normalizeX(r.x,t).x),this.spatialReference=new x.k((0,u.H)(null!==(i=e.isWGS84?t.altTemplate:null)&&void 0!==i?i:t.wkTemplate,{Central_Meridian:r.x}))}return this}},{key:"_getCM",value:function(t){var e=null,n=(0,s.Z)(t.valid,2),i=n[0],r=n[1],a=this.xmin,m=this.xmax;return a>=i&&a<=r&&m>=i&&m<=r||(e=this.center),e}},{key:"_normalize",value:function(t,e,n){var i=this.spatialReference;if(!i)return this;var r=null!==n&&void 0!==n?n:(0,x.a)(i);if(null==r)return this;var a=this._getParts(r).map((function(t){return t.extent}));if(a.length<2)return a[0]||this;if(a.length>2)return t?this._shiftCM(r):this.set({xmin:r.valid[0],xmax:r.valid[1]});if(t)return this._shiftCM(r);if(e)return a;var m=!0,s=!0;return a.forEach((function(t){t.hasZ||(m=!1),t.hasM||(s=!1)})),{rings:a.map((function(t){var e=[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]];if(m)for(var n=(t.zmax-t.zmin)/2,i=0;i<e.length;i++)e[i].push(n);if(s)for(var r=(t.mmax-t.mmin)/2,a=0;a<e.length;a++)e[a].push(r);return e})),hasZ:m,hasM:s,spatialReference:i}}},{key:"_getParts",value:function(t){var e=this.cache._parts;if(!e){e=[];var n,i=this.ymin,r=this.ymax,a=this.spatialReference,m=this.width,h=this.xmin,u=this.xmax;t=t||(0,x.a)(a);var o=(0,s.Z)(t.valid,2),l=o[0],f=o[1],y=(n=this._normalizeX(this.xmin,t)).x,c=n.frameId,p=(n=this._normalizeX(this.xmax,t)).x,v=n.frameId,z=y===p&&m>0;if(m>2*f){var d=new I(h<u?y:p,i,f,r,a),g=new I(l,i,h<u?p:y,r,a),M=new I(0,i,f,r,a),w=new I(l,i,0,r,a),Z=[],k=[];d.contains(M)&&Z.push(c),d.contains(w)&&k.push(c),g.contains(M)&&Z.push(v),g.contains(w)&&k.push(v);for(var b=c+1;b<v;b++)Z.push(b),k.push(b);e.push({extent:d,frameIds:[c]},{extent:g,frameIds:[v]},{extent:M,frameIds:Z},{extent:w,frameIds:k})}else y>p||z?e.push({extent:new I(y,i,f,r,a),frameIds:[c]},{extent:new I(l,i,p,r,a),frameIds:[v]}):e.push({extent:new I(y,i,p,r,a),frameIds:[c]});this.cache._parts=e}var R=this.hasZ,P=this.hasM;if(R||P){var _={};R&&(_.zmin=this.zmin,_.zmax=this.zmax),P&&(_.mmin=this.mmin,_.mmax=this.mmax);for(var j=0;j<e.length;j++)e[j].extent.set(_)}return e}},{key:"_normalizeX",value:function(t,e){var n,i=(0,s.Z)(e.valid,2),r=i[0],a=i[1],m=2*a,h=0;return t>a?(t-=(n=Math.ceil(Math.abs(t-a)/m))*m,h=n):t<r&&(t+=(n=Math.ceil(Math.abs(t-r)/m))*m,h=-n),{x:t,frameId:h}}}],[{key:"fromBounds",value:function(t,e){return new I({xmin:t[0],ymin:t[1],xmax:t[2],ymax:t[3],spatialReference:e})}},{key:"fromPoint",value:function(t){return new I({xmin:t.x,ymin:t.y,zmin:t.z,xmax:t.x,ymax:t.y,zmax:t.z,spatialReference:t.spatialReference})}}]),n}(x.p);(0,u.e)([(0,u.y)({readOnly:!0})],X.prototype,"cache",null),(0,u.e)([(0,u.y)({readOnly:!0})],X.prototype,"center",null),(0,u.e)([(0,u.y)({readOnly:!0})],X.prototype,"extent",null),(0,u.e)([(0,u.y)({readOnly:!0,json:{write:{enabled:!1,overridePolicy:null}}})],X.prototype,"hasM",null),(0,u.e)([(0,u.y)({readOnly:!0,json:{write:{enabled:!1,overridePolicy:null}}})],X.prototype,"hasZ",null),(0,u.e)([(0,u.y)({readOnly:!0})],X.prototype,"height",null),(0,u.e)([(0,u.y)({readOnly:!0})],X.prototype,"width",null),(0,u.e)([(0,u.y)({type:Number,json:{type:[Number,String],write:{enabled:!0,allowNull:!0}}})],X.prototype,"xmin",void 0),(0,u.e)([(0,u.y)({type:Number,json:{write:!0}})],X.prototype,"ymin",void 0),(0,u.e)([(0,u.y)({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy:function(){return{enabled:this.hasM}}}}})],X.prototype,"mmin",void 0),(0,u.e)([(0,u.y)({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy:function(){return{enabled:this.hasZ}}}}})],X.prototype,"zmin",void 0),(0,u.e)([(0,u.y)({type:Number,json:{write:!0}})],X.prototype,"xmax",void 0),(0,u.e)([(0,u.y)({type:Number,json:{write:!0}})],X.prototype,"ymax",void 0),(0,u.e)([(0,u.y)({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy:function(){return{enabled:this.hasM}}}}})],X.prototype,"mmax",void 0),(0,u.e)([(0,u.y)({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy:function(){return{enabled:this.hasZ}}}}})],X.prototype,"zmax",void 0),(X=I=(0,u.e)([(0,u.n)("esri.geometry.Extent")],X)).prototype.toJSON.isDefaultToJSON=!0;var q=X}}]);
//# sourceMappingURL=6817.69270a86.chunk.js.map