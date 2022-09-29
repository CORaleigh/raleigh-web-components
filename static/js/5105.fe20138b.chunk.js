"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[5105],{75105:function(e,r,n){n.d(r,{D:function(){return B},F:function(){return z},H:function(){return I},M:function(){return p},T:function(){return P},V:function(){return F},X:function(){return Z},_:function(){return k},e:function(){return J},k:function(){return R},n:function(){return K},t:function(){return X},v:function(){return E}});var t,i,a=n(74165),o=n(1413),s=n(29439),u=n(15861),f=(n(91204),n(23132)),l=n(75610),c=n(44455),h=n(63022),x=n(80262),v=n(30709),m=n(36460);function p(e,r,n){return!(0,h.A)(e,r,n)}function g(e,r,n){var t=p(e,r,n);if(t&&!(0,h.e)())throw new f.a("rasterprojectionhelper-project","projection engine is not loaded");return t}(i=t||(t={}))[i.None=0]="None",i[i.North=1]="North",i[i.South=2]="South",i[i.Both=3]="Both";var d=function(e,r,n){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(1===n[0])return[0,0];for(var i=1,a=-1,o=1,s=-1,u=0;u<e.length;u+=2)isNaN(e[u])||(i=i>e[u]?e[u]:i,a=a>e[u]?a:e[u],o=o>e[u+1]?e[u+1]:o,s=s>e[u+1]?s:e[u+1]);var f=r.cols,l=r.rows,c=(a-i)/f/n[0],h=(s-o)/l/n[1],x=2*t,v=0,m=!1,p=[0,0];for(u=0;u<f-3;u++){for(var g=0;g<l-3;g++){var d=u*l*2+2*g,y=(e[d]+e[d+4]+e[d+4*l]+e[d+4*l+4])/4,M=(e[d+1]+e[d+5]+e[d+4*l+1]+e[d+4*l+5])/4,w=Math.abs((y-e[d+2*l+2])/c),R=Math.abs((M-e[d+2*l+3])/h);if(w+R>v&&(v=w+R,p=[w,R]),x&&v>x){m=!0;break}}if(m)break}return p},y={3395:20037508.342789244,3410:17334193.943686873,3857:20037508.342788905,3975:17367530.445161372,4087:20037508.342789244,4088:20015108.787169147,6933:17367530.445161372,32662:20037508.342789244,53001:20015086.79602057,53002:10007543.39801029,53003:20015086.79602057,53004:20015086.79602057,53016:14152803.599503474,53017:17333573.624304302,53034:20015086.79602057,53079:20015114.352186374,53080:20015114.352186374,54001:20037508.342789244,54002:10018754.171394624,54003:20037508.342789244,54004:20037508.342789244,54016:14168658.027268292,54017:17367530.44516137,54034:20037508.342789244,54079:20037508.342789244,54080:20037508.342789244,54100:20037508.342789244,54101:20037508.342789244},M=new Map,w=new Map;function R(){return b.apply(this,arguments)}function b(){return(b=(0,u.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,h.e)()){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,(0,h.t)();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e,r,n){return g(e.spatialReference,r)?n?(0,h.o)(r,e.spatialReference,e):(0,h.o)(e.spatialReference,r,e):null}function E(e,r,n){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=e.spatialReference;if(i.equals(r))return e;g(i,r,t);var a,o=n.center,s=new x.M({xmin:o.x-e.x/2,xmax:o.x+e.x/2,ymin:o.y-e.y/2,ymax:o.y+e.y/2,spatialReference:i}),u=(0,h.r)(s,r,t),f=Z(r);if((0,l.t)(u)||(0,l.r)(f)&&u.width>=f){var v=(0,c.z)(i)/(0,c.z)(r);a={x:e.x*v,y:e.y*v}}else a={x:u.width,y:u.height};return a}function S(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.01;return(0,c.z)(e)?r/(0,c.z)(e):0}function k(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,t=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],i=e.spatialReference;if(i.equals(r))return e;g(i,r,n);var a=(0,h.r)(e,r,n);if(!t||!a)return a;var o=L(i,!0),s=L(r,!0),u=S(i);return u&&(0,l.r)(o)&&(0,l.r)(s)&&(a.x>0&&Math.abs(e.x-o[0])<u?a.x-=s[1]-s[0]:a.x<0&&Math.abs(e.x-o[1])<u&&(a.x+=s[1]-s[0])),a}function G(e){var r=e.inSR,n=e.outSR,t=e.datumTransformation,i=e.preferPE;if(r.equals(n))return C(e,null).points;if(r.isWebMercator&&n.isWGS84||r.isWGS84&&n.isWebMercator)return function(e){var r=e.cols,n=e.rows,t=e.xres,i=e.yres,a=e.usePixelCenter,o=e.inSR,s=e.outSR,u=e.xmin,f=e.ymax;a&&(u+=t/2,f-=i/2);for(var l=[],c=[],x=Math.max(r,n),m=0;m<x;m++){var p=u+t*Math.min(r,m),g=f-i*Math.min(n,m),d=(0,h.r)(new v.j({x:p,y:g,spatialReference:o}),s);m<=r&&l.push(d.x),m<=n&&c.push(d.y)}for(var y=[],M=0;M<r;M++)for(var w=0;w<n;w++)y.push([l[M],c[w]]);return y}(e);if(g(r,n,t)&&i){if(r.isGeographic)return N(e);var a=T(r);if((0,l.r)(a))return N(e)}return function(e){var r=C(e,null).points.map((function(r){return new v.j(r[0],r[1],e.inSR)}));return(0,h.r)(r,e.outSR,e.datumTransformation).map((function(e){return e?[e.x,e.y]:[NaN,NaN]}))}(e)}function N(e){var r=e.inSR,n=e.outSR,t=e.datumTransformation,i=C(e,T(r)),a=i.points,o=i.mask;if(!r.isGeographic){var u=r.wkid?h.i.coordsys(r.wkid):h.i.fromString(r.isGeographic?h.E.PE_TYPE_GEOGCS:h.E.PE_TYPE_PROJCS,r.wkt);h.a.projToGeog(u,a.length,a)}if((0,l.r)(t)&&t.steps.length&&t.steps.forEach((function(e){var r=e.wkid?h.i.geogtran(e.wkid):h.i.fromString(h.E.PE_TYPE_GEOGTRAN,e.wkt);h.c.geogToGeog(r,a.length,a,null,e.isInverse?h.E.PE_TRANSFORM_2_TO_1:h.E.PE_TRANSFORM_1_TO_2)})),!n.isGeographic){var f=T(n,!0),c=(0,l.r)(f)&&f.isEnvelope?[f.bbox[1],f.bbox[3]]:[-90,90];!function(e,r){for(var n=(0,s.Z)(r,2),t=n[0],i=n[1],a=0;a<e.length;a++){var o=e[a][1];(o<t||o>i)&&(e[a]=[NaN,NaN])}}(a,c);var x=n.wkid?h.i.coordsys(n.wkid):h.i.fromString(n.isGeographic?h.E.PE_TYPE_GEOGCS:h.E.PE_TYPE_PROJCS,n.wkt);h.a.geogToProj(x,a.length,a)}var v=a;if(o&&a.length!==o.length){v=[];for(var m=0,p=0;m<o.length;m++)o[m]?v.push(a[p++]):v.push([NaN,NaN])}return v}function T(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.wkid||e.wkt;if(!n||e.isGeographic)return null;if(n=String(n),M.has(n)){var t=M.get(n);return r?null===t||void 0===t?void 0:t.gcs:null===t||void 0===t?void 0:t.pcs}var i=e.wkid?h.i.coordsys(e.wkid):h.i.fromString(e.isGeographic?h.E.PE_TYPE_GEOGCS:h.E.PE_TYPE_PROJCS,e.wkt),a=_(i,S(e,1e-4)),o=_(i,0,!0);return M.set(n,{pcs:a,gcs:o}),r?o:a}function _(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],t=h.g.generate(e),i=n?e.horizonGcsGenerate():e.horizonPcsGenerate();if(null===i||void 0===i||!i.length)return null;var a=!1,o=i.find((function(e){return 1===e.getInclusive()&&1===e.getKind()}));if(!o){if(o=i.find((function(e){return 1===e.getInclusive()&&0===e.getKind()})),!o)return null;a=!0}var u=n?0:(2===t.getNorthPoleLocation()?1:0)|(2===t.getSouthPoleLocation()?2:0),f=t.isPannableRectangle(),l=o.getCoord();if(a)return{isEnvelope:a,isPannable:f,vertices:l,coef:null,bbox:[l[0][0]-r,l[0][1]-r,l[1][0]+r,l[1][1]+r],poleLocation:u};for(var c=0,x=[],v=(0,s.Z)(l[0],2),m=v[0],p=v[1],g=(0,s.Z)(l[0],2),d=g[0],y=g[1],M=0,w=l.length;M<w;M++){++c===w&&(c=0);var R=(0,s.Z)(l[M],2),b=R[0],P=R[1],E=(0,s.Z)(l[c],2),S=E[0],k=E[1];if(k===P)x.push([b,S,P,k,2]);else{var G=(S-b)/(k-P||1e-4),N=b-G*P;P<k?x.push([G,N,P,k,0]):x.push([G,N,k,P,1])}m=m<b?m:b,p=p<P?p:P,d=d>b?d:b,y=y>P?y:P}return{isEnvelope:!1,isPannable:f,vertices:l,coef:x,bbox:[m,p,d,y],poleLocation:u}}function C(e,r){var n=[],t=e.cols,i=e.rows,a=e.xres,o=e.yres,u=e.usePixelCenter,f=e.xmin,c=e.ymax;if(u&&(f+=a/2,c-=o/2),(0,l.t)(r)){for(var h=0;h<t;h++)for(var x=0;x<i;x++)n.push([f+a*h,c-o*x]);return{points:n}}var v=new Uint8Array(t*i);if(r.isEnvelope){for(var m=(0,s.Z)(r.bbox,4),p=m[0],g=m[1],d=m[2],y=m[3],M=0,w=0;M<t;M++)for(var R=f+a*M,b=r.isPannable||R>=p&&R<=d,P=0;P<i;P++,w++){var E=c-o*P;b&&E>=g&&E<=y&&(n.push([R,E]),v[w]=1)}return{points:n,mask:v}}for(var S=r.coef,k=[],G=0;G<i;G++){for(var N=c-o*G,T=[],_=[],C=0;C<S.length;C++){var j=(0,s.Z)(S[C],5),z=j[0],W=j[1],O=j[2],Z=j[3],L=j[4];if(N===O&&O===Z)T.push(z),T.push(W),_.push(2),_.push(2);else if(N>=O&&N<=Z){var A=z*N+W;T.push(A),_.push(L)}}var B=T;if(T.length>2){var I=2===_[0]?0:_[0],F=T[0];B=[];for(var Y=1;Y<_.length;Y++)2===_[Y]&&Y!==_.length-1||(_[Y]!==I&&(B.push(0===I?Math.min(F,T[Y-1]):Math.max(F,T[Y-1])),I=_[Y],F=T[Y]),Y===_.length-1&&B.push(0===_[Y]?Math.min(F,T[Y]):Math.max(F,T[Y])));B.sort((function(e,r){return e-r}))}else T[0]>T[1]&&(B=[T[1],T[0]]);k.push(B)}var q=0;for(w=0;q<t;q++)for(var J=f+a*q,X=0;X<i;X++,w++){var K=c-o*X,D=k[X];if(2===D.length)J>=D[0]&&J<=D[1]&&(n.push([J,K]),v[w]=1);else if(D.length>2){for(var H=!1,U=0;U<D.length;U+=2)if(J>=D[U]&&J<=D[U+1]){H=!0;break}H&&(n.push([J,K]),v[w]=1)}}return{points:n,mask:v}}function j(e){var r=Z(e[0].spatialReference);if(e.length<2||(0,l.t)(r))return e[0];for(var n=e[0],t=n.xmin,i=n.xmax,a=n.ymin,o=n.ymax,s=1;s<e.length;s++){var u=e[s];i=u.xmax+r*s,a=Math.min(a,u.ymin),o=Math.max(o,u.ymax)}return new x.M({xmin:t,xmax:i,ymin:a,ymax:o,spatialReference:e[0].spatialReference})}function z(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=e.spatialReference;if(a.equals(r))return e;var o=B(e),s=Z(a,!0),u=Z(r);if(0===o||(0,l.t)(s)||(0,l.t)(u)){var f=O(e,r,n,i);if((0,l.t)(s)&&(0,l.r)(u)&&Math.abs(f.width-u)<S(r)&&(0,h.e)()){var c=T(a);if((0,l.r)(c)&&c.poleLocation===t.None&&e.width<(c.bbox[2]-c.bbox[0])/2)return W(e,r)||f}return f}var v=e.clone().normalize();if(1===v.length&&e.xmax<s&&e.xmax-s/2>S(a))for(var m=e.xmin,p=e.xmax,g=0;g<=o;g++){var d=0===g?m:-s/2,y=g===o?p-s*g:s/2;v[g]=new x.M({xmin:d,xmax:y,ymin:e.ymin,ymax:e.ymax,spatialReference:a})}return j(v.map((function(e){return O(e,r,n,i)})).filter((function(e){return!!e})))}function W(e,r){var n=Z(r);if((0,l.t)(n))return null;var t=e.xmin,i=e.ymin,a=e.xmax,o=e.ymax,s=e.spatialReference,u=new m.v({spatialReference:s,rings:[[[t,i],[a,i],[a,o],[t,o],[t,i]]]}),f=(0,h.r)(u,r);if(2!==f.rings.length||!f.rings[0].length||!f.rings[1].length)return null;for(var c=f.rings,v=S(s),p=new x.M({spatialReference:r}),g=0;g<2;g++){t=a=c[g][0][0],i=o=c[g][0][1];for(var d=0;d<c[g].length;d++)t=t>c[g][d][0]?c[g][d][0]:t,a=a<c[g][d][0]?c[g][d][0]:a,i=i>c[g][d][1]?c[g][d][1]:i,o=o<c[g][d][1]?c[g][d][1]:o;if(0===g)p.ymin=i,p.ymax=o,p.xmin=t,p.xmax=a;else if(p.ymin=Math.min(p.ymin,i),p.ymax=Math.max(p.ymax,o),Math.abs(a-n/2)<v)p.xmin=t,p.xmax=p.xmax+n;else{if(!(Math.abs(t+n/2)<v))return null;p.xmax=a+n}}return p}function O(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,t=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],a=e.spatialReference;if(a.equals(r))return e;g(a,r,n);var o=(0,h.r)(e,r,n);if(i&&r.isWebMercator&&o&&(o.ymax=Math.min(20037508.342787,o.ymax),o.ymin=Math.max(-20037508.342787,o.ymin),o.ymin>=o.ymax))return null;if(!t||!o)return o;var s=L(a,!0),u=L(r,!0);if((0,l.t)(s)||(0,l.t)(u))return o;var f=S(a,.001),c=S(a,500),x=S(r,.001);if(Math.abs(o.xmin-u[0])<x&&Math.abs(o.xmax-u[1])<x){var m=Math.abs(e.xmin-s[0]),p=Math.abs(s[1]-e.xmax);if(m<f&&p>c){o.xmin=u[0];var d=[];d.push(new v.j(e.xmax,e.ymin,a)),d.push(new v.j(e.xmax,(e.ymin+e.ymax)/2,a)),d.push(new v.j(e.xmax,e.ymax,a));var y=d.map((function(e){return k(e,r,n)})).filter((function(e){return!isNaN(null===e||void 0===e?void 0:e.x)})).map((function(e){return e.x}));o.xmax=Math.max.apply(null,y)}if(p<f&&m>c){o.xmax=u[1];var M=[];M.push(new v.j(e.xmin,e.ymin,a)),M.push(new v.j(e.xmin,(e.ymin+e.ymax)/2,a)),M.push(new v.j(e.xmin,e.ymax,a));var w=M.map((function(e){return k(e,r,n)})).filter((function(e){return!isNaN(null===e||void 0===e?void 0:e.x)})).map((function(e){return e.x}));o.xmin=Math.min.apply(null,w)}}else{var R=S(r,.001);Math.abs(o.xmin-u[0])<R&&(o.xmin=u[0]),Math.abs(o.xmax-u[1])<R&&(o.xmax=u[1])}return o}function Z(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=r?20037508.342787:20037508.342788905;return e.isWebMercator?2*n:e.wkid&&e.isGeographic?360:2*y[e.wkid]||null}function L(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e.isGeographic)return[-180,180];var n=Z(e,r);return(0,l.r)(n)?[-n/2,n/2]:null}function A(e,r,n,t){var i=(e-r)/n;return i-Math.floor(i)!=0?i=Math.floor(i):t&&(i-=1),i}function B(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Z(e.spatialReference);if((0,l.t)(n))return 0;var t=r?0:-n/2,i=S(e.spatialReference),a=!r&&Math.abs(e.xmax-n/2)<i?n/2:e.xmax,o=!r&&Math.abs(e.xmin+n/2)<i?-n/2:e.xmin;return A(a,t,n,!0)-A(o,t,n,!1)}function I(e){var r=e.storageInfo.origin.x,n=Z(e.spatialReference,!0);if((0,l.t)(n))return{originX:r,halfWorldWidth:null,pyramidsInfo:null};for(var t=n/2,i=e.nativePixelSize,a=e.storageInfo,o=e.extent,s=a.maximumPyramidLevel,u=a.blockWidth,f=a.pyramidScalingFactor,c=i.x,h=[],x=(0,l.r)(e.transform)&&"gcs-shift"===e.transform.type,v=r+(x?0:t),m=x?n-r:t-r,p=0;p<=s;p++){var g=(o.xmax-r)/c/u,d=g-Math.floor(g)==0?g:Math.ceil(g),y=m/c/u,M=y-Math.floor(y)==0?y:Math.ceil(y),w=Math.floor(v/c/u),R=Math.round(v/c)%u,b=(u-Math.round(m/c)%u)%u;h.push({resolutionX:c,blockWidth:u,datsetColumnCount:d,worldColumnCountFromOrigin:M,leftMargin:R,rightPadding:b,originColumnOffset:w}),c*=f}return{originX:r,halfWorldWidth:t,pyramidsInfo:h,hasGCSSShiftTransform:x}}function F(e){var r=e.isAdaptive&&null==e.spacing,n=e.spacing||[32,32],t=Y(e),i={cols:t.size[0]+1,rows:t.size[1]+1},a=t.outofBoundPointCount>0&&t.outofBoundPointCount<t.offsets.length/2,s=t.outofBoundPointCount===t.offsets.length/2||r&&a?[0,0]:d(t.offsets,i,n,4),u=(s[0]+s[1])/2,f=e.projectedExtent.spatialReference,c=e.srcBufferExtent.spatialReference;if(r&&(a||u>4)&&(p(f,c,e.datumTransformation)&&(f.isGeographic||(0,l.r)(T(f))),n=[4,4],i={cols:(t=Y((0,o.Z)((0,o.Z)({},e),{},{spacing:n}))).size[0]+1,rows:t.size[1]+1},s=d(t.offsets,i,n,4)),t.error=s,n[0]>1&&(t.coefficients=q(t.offsets,i,a)),e.includeGCSGrid&&!f.isGeographic&&!f.isWebMercator)if(c.isGeographic)t.gcsGrid={offsets:t.offsets,coefficients:t.coefficients,spacing:n};else{var x=T(f);if((0,l.r)(x)&&!x.isEnvelope){var m=function(e){if(!e||e.isGeographic)return e;var r,n=String(e.wkid||e.wkt);return w.has(n)?r=w.get(n):(r=(e.wkid?h.i.coordsys(e.wkid):h.i.fromString(h.E.PE_TYPE_PROJCS,e.wkt)).getGeogcs().getCode(),w.set(n,r)),new v.k({wkid:r})}(f),g=z(e.projectedExtent,m),y=Y((0,o.Z)((0,o.Z)({},e),{},{srcBufferExtent:g,spacing:n})).offsets,M=q(y,i,a);t.gcsGrid={offsets:y,coefficients:M,spacing:n}}}return t}function Y(e){var r,n=e.projectedExtent,t=e.srcBufferExtent,i=e.pixelSize,a=e.datumTransformation,o=e.rasterTransform,s=n.spatialReference,u=t.spatialReference,f=g(s,u),c=n.xmin,h=n.ymin,x=n.xmax,m=n.ymax,p=Z(u),d=(0,l.r)(p)&&(e.hasWrapAround||"gcs-shift"===(null===o||void 0===o?void 0:o.type)),y=e.spacing||[32,32],M=y[0]*i.x,w=y[1]*i.y,R=1===y[0],b=Math.ceil((x-c)/M-.1/y[0])+(R?0:1),P=Math.ceil((m-h)/w-.1/y[1])+(R?0:1),E=G({cols:b,rows:P,xmin:c,ymax:m,xres:M,yres:w,inSR:s,outSR:u,datumTransformation:a,preferPE:y[0]<=4,usePixelCenter:R}),k=[],N=0,_=R?-1:NaN,C=t.xmin,j=t.xmax,z=t.ymax,W=t.width,O=t.height,L=S(u,500),A=(0,l.r)(p)&&C>0&&j>p/2,B=!1;if(f){var I=T(s);B=(0,l.r)(I)&&I.poleLocation>0}for(var F=0;F<b;F++){for(var Y=[],q=0;q<P;q++){var J=E[F*P+q];if(d&&J[0]>j&&J[0]>p/2-L?J[0]-=p:d&&0===F&&J[0]<0&&A&&!o&&(J[0]+=p),!J||isNaN(J[0])||isNaN(J[1]))k.push(_),k.push(_),Y.push(null),N++;else{if(o){var X=o.inverseTransform(new v.j({x:J[0],y:J[1],spatialReference:u}));J=[X.x,X.y]}Y.push(J),F>0&&d&&r[q]&&J[0]<r[q][0]&&(J[0]+=p,B&&J[0]>j&&J[0]>p&&(J[0]-=p)),k.push((J[0]-C)/W),k.push((z-J[1])/O)}}r=Y}return{offsets:k,error:null,coefficients:null,outofBoundPointCount:N,spacing:y,size:R?[b,P]:[b-1,P-1]}}function q(e,r,n){for(var t=r.cols,i=r.rows,a=new Float32Array((t-1)*(i-1)*2*6),o=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),s=new Float32Array([-1,1,0,0,-1,1,1,0,0]),u=0;u<t-1;u++){for(var f=0;f<i-1;f++){for(var l=u*i*2+2*f,c=e[l],h=e[l+1],x=e[l+2],v=e[l+3],m=e[l+=2*i],p=e[l+1],g=e[l+2],d=e[l+3],y=0,M=12*(f*(t-1)+u),w=0;w<3;w++)a[M++]=o[y++]*c+o[y++]*x+o[y++]*g;y=0;for(var R=0;R<3;R++)a[M++]=o[y++]*h+o[y++]*v+o[y++]*d;y=0;for(var b=0;b<3;b++)a[M++]=s[y++]*c+s[y++]*m+s[y++]*g;y=0;for(var P=0;P<3;P++)a[M++]=s[y++]*h+s[y++]*p+s[y++]*d}if(n)for(var E=0;E<a.length;E++)isNaN(a[E])&&(a[E]=-1)}return a}function J(e){var r=e.clone().normalize();return 1===r.length?r[0]:j(r)}function X(e,r,n){var t,i=r.storageInfo,a=r.pixelSize,o=!1,s=i.pyramidResolutions;if((0,l.r)(s)&&s.length){var u=(e.x+e.y)/2,f=s[s.length-1],h=(f.x+f.y)/2,x=(a.x+a.y)/2;if(u<=x)t=0;else if(u>=h)t=s.length,o=u/h>8;else for(var m,p=x,g=1;g<=s.length;g++){if(u<=(m=(s[g-1].x+s[g-1].y)/2)){u===m?t=g:"down"===n?(t=g-1,o=u/p>8):t="up"===n||u-p>m-u||u/p>2?g:g-1;break}p=m}var d=0===t?a:s[t-1];return o&&Math.min(d.x,d.y)*(0,c.z)(r.spatialReference)>19567&&(o=!1),{pyramidLevel:t,pyramidResolution:new v.j({x:d.x,y:d.y,spatialReference:r.spatialReference}),excessiveReading:o}}var y=Math.log(e.x/a.x)/Math.LN2,M=Math.log(e.y/a.y)/Math.LN2,w=r.storageInfo.maximumPyramidLevel||0;(t="down"===n?Math.floor(Math.min(y,M)):"up"===n?Math.ceil(Math.max(y,M)):Math.round((y+M)/2))<0?t=0:t>w&&(o=t>w+3,t=w);var R=Math.pow(2,t);return{pyramidLevel:t,pyramidResolution:new v.j({x:R*r.nativePixelSize.x,y:R*r.nativePixelSize.y,spatialReference:r.spatialReference}),excessiveReading:o}}function K(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:512,t=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],i=e.extent,a=e.spatialReference,o=e.pixelSize,s=E(new v.j({x:o.x,y:o.y,spatialReference:a}),r,i);if(null==s)return{projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};var u=(s.x+s.y)/2,f=(0,c.z)(r),l=u*f*96*39.37,h=r.isGeographic?256/n*295828763.7958547:256/n*591657527.591555,x="vector-magdir"===e.dataType||"vector-uv"===e.dataType,m=z(i,r);x||t&&(r.isGeographic||r.isWebMercator)&&(x=m.xmin*m.xmax<0);var p,g=l,d=1.001;if(x){g=h;var y=r.isGeographic?1341104507446289e-21:.29858214164761665,M=y*(96*f*39.37),w=r.isGeographic?4326:3857;(p=E(new v.j({x:y,y:y,spatialReference:{wkid:w}}),a,m)).x*=g/M,p.y*=g/M}else{p={x:o.x,y:o.y};for(var R=Math.ceil(Math.log(Math.min(e.width,e.height)/32)/Math.LN2),b=0;g<h*(d/2)&&b<R;)b++,g*=2,p.x*=2,p.y*=2;Math.max(g,h)/Math.min(g,h)<=d&&(g=h)}for(var P=[g],S=[{x:p.x,y:p.y}],k=70.5310735,G=Math.min(k,l)/d;g>=G;)g/=2,p.x/=2,p.y/=2,P.push(g),S.push({x:p.x,y:p.y});return{projectedPixelSize:s,scales:P,srcResolutions:S,isCustomTilingScheme:!x}}}}]);
//# sourceMappingURL=5105.fe20138b.chunk.js.map