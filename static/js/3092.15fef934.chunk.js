"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[3092],{93092:function(e,t,r){r.d(t,{Y:function(){return T},a:function(){return x},e:function(){return I},f:function(){return Z},n:function(){return L},o:function(){return A},r:function(){return N},s:function(){return ue}});var i=r(74165),n=r(1413),a=r(15861),o=r(93433),l=r(15671),f=r(43144),c=r(29439),s=r(37762),u=r(78674),m=r(75610),v=r(23132),y=r(78880),p=r(50526),h=r(28080),d=r(45578),g=r(44365),S=r(30604),b=r(38511),M=r(77787);function N(e){if(!e)return null;switch(e.type){case"CIMPointSymbol":var t=e.symbolLayers;return t&&1===t.length?N(t[0]):null;case"CIMVectorMarker":var r,i=e.markerGraphics;if(!i||1!==i.length)return null;var n=i[0];if(!n)return null;var a=n.geometry;if(!a)return null;var o=n.symbol;return!o||"CIMPolygonSymbol"!==o.type&&"CIMLineSymbol"!==o.type||null!==(r=o.symbolLayers)&&void 0!==r&&r.some((function(e){return!!e.effects}))?null:{geom:a,asFill:"CIMPolygonSymbol"===o.type};case"sdf":return{geom:e.geom,asFill:e.asFill}}return null}function k(e){var t,r=1/0,i=-1/0,n=1/0,a=-1/0,o=(0,s.Z)(e);try{for(o.s();!(t=o.n()).done;){var l,f=t.value,c=(0,s.Z)(f);try{for(c.s();!(l=c.n()).done;){var u=l.value;u[0]<r&&(r=u[0]),u[0]>i&&(i=u[0]),u[1]<n&&(n=u[1]),u[1]>a&&(a=u[1])}}catch(m){c.e(m)}finally{c.f()}}}catch(m){o.e(m)}finally{o.f()}return[r,n,i,a]}function C(e){return e?e.rings?k(e.rings):e.paths?k(e.paths):(0,S.s)(e)?[e.xmin,e.ymin,e.xmax,e.ymax]:null:null}function O(e,t,r,i,n){var a=(0,c.Z)(e,4),o=a[0],l=a[1],f=a[2],s=a[3];if(f<o||s<l)return[0,0,0];var u=f-o,m=s-l,v=Math.floor(31.5),y=(128-2*(v+1))/Math.max(u,m),p=Math.round(u*y)+2*v,h=Math.round(m*y)+2*v,d=1;t&&(d=h/y/(t.ymax-t.ymin));var g=0,S=0;if(i)if(n){if(t&&r&&t.ymax-t.ymin>0){var b=(t.xmax-t.xmin)/(t.ymax-t.ymin);g=i.x/(r*b),S=i.y/r}}else g=i.x,S=i.y;return g=.5*(t.xmax+t.xmin)+g*(t.xmax-t.xmin),S=.5*(t.ymax+t.ymin)+S*(t.ymax-t.ymin),g-=o,S-=l,g*=y,S*=y,[d,(g+=v)/p-.5,-((S+=v)/h-.5)]}function x(e){var t,r=function(e){return e?e.rings?e.rings:e.paths?e.paths:void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax?[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]:null:null}(e.geom),i=function(e){var t,r=1/0,i=-1/0,n=1/0,a=-1/0,o=(0,s.Z)(e);try{for(o.s();!(t=o.n()).done;){var l,f=t.value,c=(0,s.Z)(f);try{for(c.s();!(l=c.n()).done;){var u=l.value;u[0]<r&&(r=u[0]),u[0]>i&&(i=u[0]),u[1]<n&&(n=u[1]),u[1]>a&&(a=u[1])}}catch(m){c.e(m)}finally{c.f()}}}catch(m){o.e(m)}finally{o.f()}return new h.t(r,n,i-r,a-n)}(r),n=Math.floor(31.5),a=(128-2*(n+1))/Math.max(i.width,i.height),o=Math.round(i.width*a)+2*n,l=Math.round(i.height*a)+2*n,f=[],u=(0,s.Z)(r);try{for(u.s();!(t=u.n()).done;){var m=t.value;if(m&&m.length>1){var v,y=[],p=(0,s.Z)(m);try{for(p.s();!(v=p.n()).done;){var d=v.value,g=(0,c.Z)(d,2),S=g[0],b=g[1];S-=i.x,b-=i.y,S*=a,b*=a,S+=n-.5,b+=n-.5,e.asFill?y.push([S,b]):y.push([Math.round(S),Math.round(b)])}}catch(k){p.e(k)}finally{p.f()}if(e.asFill){var M=y.length-1;y[0][0]===y[M][0]&&y[0][1]===y[M][1]||y.push(y[0])}f.push(y)}}}catch(k){u.e(k)}finally{u.f()}var N=function(e,t,r,i){for(var n=t*r,a=new Array(n),o=i*i+1,l=0;l<n;++l)a[l]=o;var f,c=(0,s.Z)(e);try{for(c.s();!(f=c.n()).done;)for(var u=f.value,m=u.length,v=1;v<m;++v){var y=u[v-1],p=u[v],h=void 0,d=void 0,g=void 0,S=void 0;y[0]<p[0]?(h=y[0],d=p[0]):(h=p[0],d=y[0]),y[1]<p[1]?(g=y[1],S=p[1]):(g=p[1],S=y[1]);var b=Math.floor(h)-i,M=Math.floor(d)+i,N=Math.floor(g)-i,C=Math.floor(S)+i;b<0&&(b=0),M>t&&(M=t),N<0&&(N=0),C>r&&(C=r);for(var O=p[0]-y[0],x=p[1]-y[1],P=O*O+x*x,Z=b;Z<M;Z++)for(var w=N;w<C;w++){var L=void 0,I=void 0,A=(Z-y[0])*O+(w-y[1])*x;A<0?(L=y[0],I=y[1]):A>P?(L=p[0],I=p[1]):(A/=P,L=y[0]+A*O,I=y[1]+A*x);var X=(Z-L)*(Z-L)+(w-I)*(w-I),z=(r-w-1)*t+Z;X<a[z]&&(a[z]=X)}}}catch(k){c.e(k)}finally{c.f()}for(var R=0;R<n;++R)a[R]=Math.sqrt(a[R]);return a}(f,o,l,n);return e.asFill&&function(e,t,r,i,n){var a,o=(0,s.Z)(e);try{for(o.s();!(a=o.n()).done;)for(var l=a.value,f=l.length,c=1;c<f;++c){var u=l[c-1],m=l[c],v=void 0,y=void 0,p=void 0,h=void 0;u[0]<m[0]?(v=u[0],y=m[0]):(v=m[0],y=u[0]),u[1]<m[1]?(p=u[1],h=m[1]):(p=m[1],h=u[1]);var d=Math.floor(v),g=Math.floor(y)+1,S=Math.floor(p),b=Math.floor(h)+1;d<i&&(d=i),g>t-i&&(g=t-i),S<i&&(S=i),b>r-i&&(b=r-i);for(var M=S;M<b;++M)if(u[1]>M!=m[1]>M){for(var N=(r-M-1)*t,C=d;C<g;++C)C<(m[0]-u[0])*(M-u[1])/(m[1]-u[1])+u[0]&&(n[N+C]=-n[N+C]);for(var O=i;O<d;++O)n[N+O]=-n[N+O]}}}catch(k){o.e(k)}finally{o.f()}}(f,o,l,n,N),[P(N,n),o,l]}function P(e,t){for(var r=2*t,i=e.length,n=new Uint8Array(4*i),a=0;a<i;++a){var o=.5-e[a]/r;(0,g.o)(o,n,4*a)}return n}var Z=function(){function e(){(0,l.Z)(this,e)}return(0,f.Z)(e,null,[{key:"executeEffects",value:function(e,t,r){var i,n=(0,h.a)(t),a=new h.r(n),o=(0,s.Z)(e);try{for(o.s();!(i=o.n()).done;){var l=i.value,f=(0,h.A)(l);f&&(a=f.execute(a,l,1.3333333333333333,r))}}catch(c){o.e(c)}finally{o.f()}return a}},{key:"next",value:function(e){var t=e.next();return(0,h.x)(t),t}},{key:"applyEffects",value:function(e,t,r){if(!e)return t;var i,n=new h.r(t),a=(0,s.Z)(e);try{for(a.s();!(i=a.n()).done;){var l=i.value,f=(0,h.A)(l);f&&(n=f.execute(n,l,1,r))}}catch(y){a.e(y)}finally{a.f()}for(var c,u=null;c=n.next();){var m,v;u?(0,S.y)(u)?(0,S.y)(c)&&(m=u.paths).push.apply(m,(0,o.Z)(c.paths)):(0,S.c)(u)&&(0,S.c)(c)&&(v=u.rings).push.apply(v,(0,o.Z)(c.rings)):u=c}return u}}]),e}();function w(e){var t=e.toLowerCase().split(" ").join("-");switch(t){case"serif":return"noto-serif";case"sans-serif":return"arial-unicode-ms";case"monospace":return"ubuntu-mono";case"fantasy":return"cabin-sketch";case"cursive":return"redressed";default:return t}}function L(e){var t=function(e){if(!e.weight)return"";switch(e.weight.toLowerCase()){case"bold":case"bolder":return"-bold"}return""}(e)+function(e){if(!e.style)return"";switch(e.style.toLowerCase()){case"italic":case"oblique":return"-italic"}return""}(e);return w(e.family)+(t.length>0?t:"-regular")}function I(e,t){var r;if("string"==typeof e)r=(0,v.$)(e+"-seed(".concat(t,")"));else{var i=12;r=e^t;do{r=107*(r>>8^r)+i|0}while(0!=--i)}return(1+r/(1<<31))/2}function A(e){return Math.floor(I(e,X)*z)}var X=53290320,z=10,R=v.s.getLogger("esri.symbols.cim.cimAnalyzer");function J(e){switch(e){case"Butt":return d.e.BUTT;case"Square":return d.e.SQUARE;default:return d.e.ROUND}}function H(e){switch(e){case"Bevel":return d.n.BEVEL;case"Miter":return d.n.MITER;default:return d.n.ROUND}}function Y(e){switch(e){case"Left":default:return"left";case"Right":return"right";case"Center":return"center";case"Justify":return R.warnOnce("Horizontal alignment 'justify' is not implemented. Falling back to 'center'."),"center"}}function E(e){switch(e){case"Top":default:return"top";case"Center":return"middle";case"Baseline":return"baseline";case"Bottom":return"bottom"}}function F(e,t,r,i){var n;e[t]?n=e[t]:(n={},e[t]=n),n[r]=i}function $(e){var t=e.markerPlacement;return t&&t.angleToLine?d.L.MAP:d.L.SCREEN}function T(e,t,r,i,n){return W.apply(this,arguments)}function W(){return W=(0,a.Z)((0,i.Z)().mark((function e(t,r,n,a,o){var l,f,c,u,m,v,y,h,d;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=null!==a&&void 0!==a?a:[],t){e.next=3;break}return e.abrupt("return",l);case 3:if(u={},"CIMSymbolReference"===t.type){e.next=6;break}return e.abrupt("return",(R.error("Expect cim type to be 'CIMSymbolReference'"),l));case 6:if(f=t.symbol,!(c=t.primitiveOverrides)){e.next=14;break}m=[],v=(0,s.Z)(c);try{for(h=function(){var e=y.value,t=e.valueExpressionInfo;if(t&&r){var i=t.expression,n=(0,p.i)(i,r.spatialReference,r.fields).then((function(t){t&&F(u,e.primitiveName,e.propertyName,t)}));m.push(n)}else null!=e.value&&F(u,e.primitiveName,e.propertyName,e.value)},v.s();!(y=v.n()).done;)h()}catch(i){v.e(i)}finally{v.f()}if(e.t0=m.length>0,!e.t0){e.next=14;break}return e.next=14,Promise.all(m);case 14:if(ve(f,n,d=[]),e.t2=d.length>0,!e.t2){e.next=20;break}return e.next=20,Promise.all(d);case 20:e.t1=f.type,e.next="CIMPointSymbol"===e.t1||"CIMLineSymbol"===e.t1||"CIMPolygonSymbol"===e.t1?23:24;break;case 23:G(f,c,u,r,l,n,o);case 24:return e.abrupt("return",l);case 25:case"end":return e.stop()}}),e)}))),W.apply(this,arguments)}function G(e,t,r,i,n,a,l){if(e){var f=e.symbolLayers;if(f){var c,s=e.effects,u=h.Z.getSize(e);"CIMPointSymbol"===e.type&&"Map"===e.angleAlignment&&(c=d.L.MAP);for(var m=f.length;m--;){var v,y=f[m];if(y&&!1!==y.enable){var p=void 0;s&&s.length&&(p=(0,o.Z)(s));var g=y.effects;g&&g.length&&(s?(v=p).push.apply(v,(0,o.Z)(g)):p=(0,o.Z)(g));var S,b=[];h.c.findEffectOverrides(p,t,b),S=b.length>0?fe(p,b,r,i):p;var M=[];switch(h.c.findApplicableOverrides(y,t,M),y.type){case"CIMSolidFill":U(y,S,r,M,i,n);break;case"CIMPictureFill":D(y,S,r,M,i,a,n);break;case"CIMHatchFill":j(y,S,r,M,i,n);break;case"CIMGradientFill":B(y,S,r,M,i,n);break;case"CIMSolidStroke":q(y,S,r,M,i,n,"CIMPolygonSymbol"===e.type,u);break;case"CIMPictureStroke":_(y,S,r,M,i,n,"CIMPolygonSymbol"===e.type,u);break;case"CIMGradientStroke":V(y,S,r,M,i,n,"CIMPolygonSymbol"===e.type,u);break;case"CIMCharacterMarker":if(K(y,S,r,M,i,n))break;break;case"CIMPictureMarker":if(K(y,S,r,M,i,n))break;"CIMLineSymbol"===e.type&&(c=$(y)),Q(y,S,r,M,i,a,n,c,u);break;case"CIMVectorMarker":if(K(y,S,r,M,i,n))break;"CIMLineSymbol"===e.type&&(c=$(y)),ee(y,S,r,M,i,n,a,c,u,l);break;default:R.error("Cannot analyze CIM layer",y.type)}}}}}}function U(e,t,r,i,n,a){var o=e.primitiveName,l=(0,b.i)(e.color),f=me(i,o,t,null,null),s=(0,c.Z)(f,2),u=s[0],m=s[1],y=(0,v.$)(JSON.stringify(e)+m).toString();a.push({type:"fill",templateHash:y,materialHash:u?function(){return y}:y,cim:e,materialOverrides:null,colorLocked:e.colorLocked,color:oe(o,r,"Color",n,l,ae),height:0,angle:0,offsetX:0,offsetY:0,scaleX:1,effects:t,applyRandomOffset:!1,sampleAlphaOnly:!0})}function D(e,t,r,i,n,a,o){var l=e.primitiveName,f=e.tintColor?(0,b.i)(e.tintColor):{r:255,g:255,b:255,a:1},s=me(i,l,t,null,null),u=(0,c.Z)(s,2),y=u[0],p=u[1],h=(0,v.$)(JSON.stringify(e)+p).toString(),d=(0,v.$)("".concat(e.url).concat(JSON.stringify(e.colorSubstitutions))).toString(),g=(0,b.M)(e.scaleX);if("width"in e){var S=e.width,M=1,N=a.getResource(e.url);(0,m.r)(N)&&(M=N.width/N.height),g/=M*(e.height/S)}o.push({type:"fill",templateHash:h,materialHash:y?function(){return d}:d,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:t,color:oe(l,r,"TintColor",n,f,ae),height:oe(l,r,"Height",n,e.height),scaleX:oe(l,r,"ScaleX",n,g),angle:oe(l,r,"Rotation",n,(0,b.M)(e.rotation)),offsetX:oe(l,r,"OffsetX",n,(0,b.M)(e.offsetX)),offsetY:oe(l,r,"OffsetY",n,(0,b.M)(e.offsetY)),url:e.url,applyRandomOffset:!1,sampleAlphaOnly:!1})}function j(e,t,r,i,n,a){var o=["Rotation","OffsetX","OffsetY"],l=i.filter((function(t){return t.primitiveName!==e.primitiveName&&!o.includes(t.propertyName)})),f=e.primitiveName,s=me(i,f,t,null,null),u=(0,c.Z)(s,2),m=u[0],y=u[1],p=(0,v.$)(JSON.stringify(e)+y).toString(),h=(0,v.$)("".concat(e.separation).concat(JSON.stringify(e.lineSymbol))).toString(),d={r:255,g:255,b:255,a:1};if(e.lineSymbol){var g,S=null===(g=e.lineSymbol)||void 0===g?void 0:g.symbolLayers.find((function(e){return"CIMSolidStroke"===e.type}));S&&(d=(0,b.i)(S.color))}a.push({type:"fill",templateHash:p,materialHash:m?se(h,r,l,n):h,cim:e,materialOverrides:l,colorLocked:e.colorLocked,effects:t,color:d,height:oe(f,r,"Separation",n,e.separation),scaleX:1,angle:oe(f,r,"Rotation",n,(0,b.M)(e.rotation)),offsetX:oe(f,r,"OffsetX",n,(0,b.M)(e.offsetX)),offsetY:oe(f,r,"OffsetY",n,(0,b.M)(e.offsetY)),applyRandomOffset:!1,sampleAlphaOnly:!0})}function B(e,t,r,i,n,a){var o=me(i,e.primitiveName,t,null,null),l=(0,c.Z)(o,2),f=l[0],s=l[1],u=(0,v.$)(JSON.stringify(e)+s).toString();a.push({type:"fill",templateHash:u,materialHash:f?se(u,r,i,n):u,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:t,color:{r:128,g:128,b:128,a:1},height:0,angle:0,offsetX:0,offsetY:0,scaleX:1,applyRandomOffset:!1,sampleAlphaOnly:!1})}function q(e,t,r,i,n,a,l,f){var s,u,m=e.primitiveName,y=(0,b.i)(e.color),p=void 0!==e.width?e.width:4,h=J(e.capStyle),d=H(e.joinStyle),g=e.miterLimit,S=me(i,m,t,null,null),M=(0,c.Z)(S,2),N=M[0],k=M[1],C=(0,v.$)(JSON.stringify(e)+k).toString();if(t&&t instanceof Array&&t.length>0){var O=t[t.length-1];if("CIMGeometricEffectDashes"===O.type&&"NoConstraint"===O.lineDashEnding&&null===O.offsetAlongLine){var x=(t=(0,o.Z)(t)).pop();s=x.dashTemplate,u=x.scaleDash}}a.push({type:"line",templateHash:C,materialHash:N?function(){return C}:C,cim:e,materialOverrides:null,isOutline:l,colorLocked:e.colorLocked,effects:t,color:oe(m,r,"Color",n,y,ae),width:oe(m,r,"Width",n,p),cap:oe(m,r,"CapStyle",n,h),join:oe(m,r,"JoinStyle",n,d),miterLimit:oe(m,r,"MiterLimit",n,g),referenceWidth:f,zOrder:ne(e.name),dashTemplate:s,scaleDash:u,sampleAlphaOnly:!0})}function _(e,t,r,i,n,a,o,l){var f=(0,v.$)("".concat(e.url).concat(JSON.stringify(e.colorSubstitutions))).toString(),s=e.primitiveName,u=(0,b.i)(e.tintColor),m=void 0!==e.width?e.width:4,y=J(e.capStyle),p=H(e.joinStyle),h=e.miterLimit,d=me(i,s,t,null,null),g=(0,c.Z)(d,2),S=g[0],M=g[1],N=(0,v.$)(JSON.stringify(e)+M).toString();a.push({type:"line",templateHash:N,materialHash:S?function(){return f}:f,cim:e,materialOverrides:null,isOutline:o,colorLocked:e.colorLocked,effects:t,color:oe(s,r,"TintColor",n,u,ae),width:oe(s,r,"Width",n,m),cap:oe(s,r,"CapStyle",n,y),join:oe(s,r,"JoinStyle",n,p),miterLimit:oe(s,r,"MiterLimit",n,h),referenceWidth:l,zOrder:ne(e.name),dashTemplate:null,scaleDash:!1,url:e.url,sampleAlphaOnly:!1})}function V(e,t,r,i,n,a,o,l){var f=e.primitiveName,s=void 0!==e.width?e.width:4,u=J(e.capStyle),m=H(e.joinStyle),y=e.miterLimit,p=me(i,f,t,null,null),h=(0,c.Z)(p,2),d=h[0],g=h[1],S=(0,v.$)(JSON.stringify(e)+g).toString();a.push({type:"line",templateHash:S,materialHash:d?se(S,r,i,n):S,cim:e,materialOverrides:null,isOutline:o,colorLocked:e.colorLocked,effects:t,color:{r:128,g:128,b:128,a:1},width:oe(f,r,"Width",n,s),cap:oe(f,r,"CapStyle",n,u),join:oe(f,r,"JoinStyle",n,m),miterLimit:oe(f,r,"MiterLimit",n,y),referenceWidth:l,zOrder:ne(e.name),dashTemplate:null,scaleDash:!1,sampleAlphaOnly:!1})}function K(e,t,r,i,n,a){var o=e.markerPlacement;if(!o||"CIMMarkerPlacementInsidePolygon"!==o.type)return!1;var l=o,f=Math.abs(l.stepX),s=Math.abs(l.stepY);if(0===f||0===s)return!0;var u,m,p=["Rotation","OffsetX","OffsetY"],h=i.filter((function(t){return t.primitiveName!==e.primitiveName&&!p.includes(t.propertyName)})),g="url"in e?e.url:null,S=me(i,l.primitiveName,t,null,null),M=(0,c.Z)(S,2),N=M[0],k=M[1],C=(0,v.$)(JSON.stringify(e)+k).toString(),O=null;if("Random"===o.gridType){var x=(0,y.e)(d.F),P=Math.max(Math.floor(x/f),1),Z=Math.max(Math.floor(x/s),1);O=function(e){return e?e*Z:0},m=P*f/(u=s*Z)}else o.shiftOddRows?(u=2*s,O=function(e){return e?2*e:0},m=f/s*.5):(u=s,O=null,m=f/s);var w={r:255,g:255,b:255,a:1};return"tintColor"in e&&(w=(0,b.i)(e.tintColor)),a.push({type:"fill",templateHash:C,materialHash:N?se(C,r,h,n):C,cim:e,materialOverrides:h,colorLocked:e.colorLocked,effects:t,color:oe(l.primitiveName,r,"TintColor",n,w,ae),height:oe(l.primitiveName,r,"StepY",n,u,O),scaleX:m,angle:oe(l.primitiveName,r,"GridAngle",n,l.gridAngle),offsetX:oe(l.primitiveName,r,"OffsetX",n,(0,b.M)(l.offsetX)),offsetY:oe(l.primitiveName,r,"OffsetY",n,(0,b.M)(l.offsetY)),url:g,applyRandomOffset:"Random"===o.gridType,sampleAlphaOnly:!g}),!0}function Q(e,t,r,i,n,a,o,l,f){var u,y=e.primitiveName,d=(0,b.M)(e.size),g=(0,b.M)(e.scaleX),S=(0,b.M)(e.rotation),N=(0,b.M)(e.offsetX),k=(0,b.M)(e.offsetY),C=e.tintColor?(0,b.i)(e.tintColor):{r:255,g:255,b:255,a:1},O=(0,v.$)("".concat(e.url).concat(JSON.stringify(e.colorSubstitutions)).concat(JSON.stringify(e.animatedSymbolProperties))).toString(),x=ce(e.markerPlacement,i,r,n),P=function(e,t,r,i){var n=[];if(h.c.findApplicableOverrides(e,t,n),0===n.length)return e;for(var a=0,o=n;a<o.length;a++){var l=o[a];l.valueExpressionInfo&&function(){var e=r[l.primitiveName]&&r[l.primitiveName][l.propertyName];e instanceof p.o&&(l.fn=function(t,r,n){return(0,M.s)(e,t,{$view:n},i.geometryType,r)})}()}return function(t,r,i){var a,o=(0,s.Z)(n);try{for(o.s();!(a=o.n()).done;){var l=a.value;l.fn&&(l.value=l.fn(t,r,i))}}catch(h){o.e(h)}finally{o.f()}var f,c=(0,m.m)(e),u=e.primitiveName,v=(0,s.Z)(n);try{for(v.s();!(f=v.n()).done;){var y=f.value;if(y.primitiveName===u){var p=le(y.propertyName);null!=y.value&&y.value!==c[p]&&(c[p]=y.value)}}}catch(h){v.e(h)}finally{v.f()}return c}}(e.animatedSymbolProperties,i,r,n),Z=me(i,y,t,x,P),w=(0,c.Z)(Z,2),L=w[0],I=w[1],X=(0,v.$)(JSON.stringify(e)+I).toString(),z=null!==(u=e.anchorPoint)&&void 0!==u?u:{x:0,y:0};if("width"in e){var R=e.width,J=1,H=a.getResource(e.url);(0,m.r)(H)&&(J=H.width/H.height),g/=J*(d/R)}function Y(e,t){return(0,b.e)(P,e,t)}var E=e.animatedSymbolProperties&&!0===e.animatedSymbolProperties.randomizeStartTime?function(e,t,r,i){var n=A(i),a=Y(e,t);return O+"-MATERIALGROUP(".concat(n,")")+"-ASP(".concat(JSON.stringify(a),")")}:L?function(e,t){var r=Y(e,t);return O+"-ASP(".concat(JSON.stringify(r),")")}:O;o.push({type:"marker",templateHash:X,materialHash:E,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:!1,alignment:l,size:oe(y,r,"Size",n,d),scaleX:oe(y,r,"ScaleX",n,g),rotation:oe(y,r,"Rotation",n,S),offsetX:oe(y,r,"OffsetX",n,N),offsetY:oe(y,r,"OffsetY",n,k),color:oe(y,r,"TintColor",n,C,ae),anchorPoint:{x:z.x,y:-z.y},isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,frameHeight:0,rotateClockwise:e.rotateClockwise,referenceSize:f,sizeRatio:1,markerPlacement:x,url:e.url,animatedSymbolProperties:P})}function ee(e,t,r,i,n,a,o,l,f,c){var u=e.markerGraphics;if(u){var m=0;if(e.scaleSymbolsProportionally){var v=e.frame;v&&(m=v.ymax-v.ymin)}var y,p=ce(e.markerPlacement,i,r,n),h=(0,s.Z)(u);try{for(h.s();!(y=h.n()).done;){var d=y.value;if(d){var g=d.symbol;if(!g)continue;switch(g.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":re(e,t,p,null,d,i,r,n,a,o,l,f,m,c);break;case"CIMTextSymbol":te(e,t,p,d,r,i,n,a,l,f,m)}}}}catch(S){h.e(S)}finally{h.f()}}}function te(e,t,r,i,a,o,l,f,s,u,m){h.c.findApplicableOverrides(i,o,[]);var y=i.geometry;if("x"in y&&"y"in y){var p=i.symbol,d=function(e){return e.underline?"underline":e.strikethrough?"line-through":"none"}(p),g=function(e){var t="",r="";if(e){var i=e.toLowerCase();i.includes("italic")?t="italic":i.includes("oblique")&&(t="oblique"),i.includes("bold")?r="bold":i.includes("light")&&(r="lighter")}return{style:t,weight:r}}(p.fontStyleName),S=w(p.fontFamilyName);p.font=(0,n.Z)({family:S,decoration:d},g);var M=e.frame,N=y.x-.5*(M.xmin+M.xmax),k=y.y-.5*(M.ymin+M.ymax),C=e.size/m,O=e.primitiveName,x=(0,b.M)(p.height)*C,P=(0,b.M)(p.angle),Z=(0,b.M)(e.offsetX)+((0,b.M)(p.offsetX)+N)*C,L=(0,b.M)(e.offsetY)+((0,b.M)(p.offsetY)+k)*C,I=(0,b.i)(h.Z.getFillColor(p)),A=(0,b.i)(h.Z.getStrokeColor(p)),X=h.Z.getStrokeWidth(p);X||(A=(0,b.i)(h.Z.getFillColor(p.haloSymbol)),X=p.haloSize*C);var z=me(o,O,t,r,null),R=(0,c.Z)(z,2),J=R[0],H=R[1],F=JSON.stringify(e.effects)+Number(e.colorLocked)+JSON.stringify(e.anchorPoint)+e.anchorPointUnits+JSON.stringify(e.markerPlacement),$=(0,v.$)(JSON.stringify(i)+F+H).toString(),T=oe(i.primitiveName,a,"TextString",l,i.textString,b.o,p.textCase);if(null!=T){var W=p.fontStyleName,G=S+(W?"-"+W.toLowerCase():"-regular"),U=G;"string"==typeof T&&T.includes("[")&&p.fieldMap&&(T=(0,b.n)(p.fieldMap,T,p.textCase)),f.push({type:"text",templateHash:$,materialHash:J||"function"==typeof T||T.match(/\[(.*?)\]/)?function(e,t,r){return U+"-"+(0,b.e)(T,e,t,r)}:U+"-"+(0,v.$)(T),cim:p,materialOverrides:null,colorLocked:e.colorLocked,effects:t,alignment:s,anchorPoint:{x:e.anchorPoint?e.anchorPoint.x:0,y:e.anchorPoint?e.anchorPoint.y:0},isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,fontName:G,decoration:d,weight:oe(O,a,"Weight",l,g.weight),style:oe(O,a,"Size",l,g.style),size:oe(O,a,"Size",l,x),angle:oe(O,a,"Rotation",l,P),offsetX:oe(O,a,"OffsetX",l,Z),offsetY:oe(O,a,"OffsetY",l,L),horizontalAlignment:Y(p.horizontalAlignment),verticalAlignment:E(p.verticalAlignment),text:T,color:I,outlineColor:A,outlineSize:X,referenceSize:u,sizeRatio:1,markerPlacement:r})}}}function re(e,t,r,i,a,o,l,f,u,y,p,d,g,S){var M=a.symbol,N=M.symbolLayers;if(N)if(S)ie(e,t,r,i,a,l,o,f,u,y,p,d,g);else{var k=N.length;if(pe(N))!function(e,t,r,i,a,o,l,f,u,m,y,p,d){var g=a.geometry,S=o[0],M=o[1],N=C(g);if(!N)return;var k,x=O(N,e.frame,e.size,e.anchorPoint,"Relative"!==e.anchorPointUnits),P=(0,c.Z)(x,3),Z=P[0],w=P[1],L=P[2],I={type:"sdf",geom:g,asFill:!0},A=e.primitiveName,X=(0,b.M)(e.size),z=(0,b.M)(e.rotation),R=(0,b.M)(e.offsetX),J=(0,b.M)(e.offsetY),H=M.path,Y=M.primitiveName,E=S.primitiveName,F=(0,b.i)(h.Z.getFillColor(M)),$=(0,b.i)(h.Z.getStrokeColor(S)),T=h.Z.getStrokeWidth(S),W=!1,G="",U=(0,s.Z)(l);try{for(U.s();!(k=U.n()).done;){var D=k.value;D.primitiveName!==Y&&D.primitiveName!==E&&D.primitiveName!==A||(void 0!==D.value?G+="-".concat(D.primitiveName,"-").concat(D.propertyName,"-").concat(JSON.stringify(D.value)):D.valueExpressionInfo&&(W=!0))}}catch(_){U.e(_)}finally{U.f()}var j=JSON.stringify((0,n.Z)((0,n.Z)({},e),{},{markerGraphics:null})),B=(0,v.$)(JSON.stringify(I)+H).toString(),q={type:"marker",templateHash:(0,v.$)(JSON.stringify(a)+JSON.stringify(M)+JSON.stringify(S)+j+G).toString(),materialHash:W?function(){return B}:B,cim:I,materialOverrides:null,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:y,anchorPoint:{x:w,y:L},isAbsoluteAnchorPoint:!1,size:oe(e.primitiveName,f,"Size",u,X),rotation:oe(e.primitiveName,f,"Rotation",u,z),offsetX:oe(e.primitiveName,f,"OffsetX",u,R),offsetY:oe(e.primitiveName,f,"OffsetY",u,J),scaleX:1,frameHeight:d,rotateClockwise:e.rotateClockwise,referenceSize:p,sizeRatio:Z,color:oe(Y,f,"Color",u,F,ae),outlineColor:oe(E,f,"Color",u,$,ae),outlineWidth:oe(E,f,"Width",u,T),markerPlacement:r,path:H,animatedSymbolProperties:i};m.push(q)}(e,t,r,i,a,N,o,l,f,u,p,d,g);else{var x=Z.applyEffects(M.effects,a.geometry,y.geometryEngine);if(x)for(;k--;){var P=N[k];if(P&&!1!==P.enable)switch(P.type){case"CIMSolidFill":case"CIMSolidStroke":var w=function(){var S,M=Z.applyEffects(P.effects,x,y.geometryEngine),N=C(M);if(!N)return"continue";var k=O(N,e.frame,e.size,e.anchorPoint,"Relative"!==e.anchorPointUnits),w=(0,c.Z)(k,3),L=w[0],I=w[1],A=w[2],X="CIMSolidFill"===P.type,z={type:"sdf",geom:M,asFill:X},R=e.primitiveName,J=null!==(S=(0,b.M)(e.size))&&void 0!==S?S:10,H=(0,b.M)(e.rotation),Y=(0,b.M)(e.offsetX),E=(0,b.M)(e.offsetY),F=P.path,$=P.primitiveName,T=(0,b.i)(X?h.Z.getFillColor(P):h.Z.getStrokeColor(P)),W=X?{r:0,g:0,b:0,a:0}:(0,b.i)(h.Z.getStrokeColor(P)),G=h.Z.getStrokeWidth(P);if(!X&&!G)return"break";var U,D=!1,j="",B=(0,s.Z)(o);try{for(B.s();!(U=B.n()).done;){var q=U.value;q.primitiveName!==$&&q.primitiveName!==R||(void 0!==q.value?j+="-".concat(q.primitiveName,"-").concat(q.propertyName,"-").concat(JSON.stringify(q.value)):q.valueExpressionInfo&&(D=!0))}}catch(Q){B.e(Q)}finally{B.f()}(0,m.r)(t)&&"function"==typeof t&&(D=!0);var _=JSON.stringify((0,n.Z)((0,n.Z)({},e),{},{markerGraphics:null})),V=(0,v.$)(JSON.stringify(z)+F).toString(),K={type:"marker",templateHash:(0,v.$)(JSON.stringify(a)+JSON.stringify(P)+_+j).toString(),materialHash:D?function(){return V}:V,cim:z,materialOverrides:null,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:p,anchorPoint:{x:I,y:A},isAbsoluteAnchorPoint:!1,size:oe(e.primitiveName,l,"Size",f,J),rotation:oe(e.primitiveName,l,"Rotation",f,H),offsetX:oe(e.primitiveName,l,"OffsetX",f,Y),offsetY:oe(e.primitiveName,l,"OffsetY",f,E),scaleX:1,frameHeight:g,rotateClockwise:e.rotateClockwise,referenceSize:d,sizeRatio:L,color:oe($,l,"Color",f,T,ae),outlineColor:oe($,l,"Color",f,W,ae),outlineWidth:oe($,l,"Width",f,G),markerPlacement:r,animatedSymbolProperties:i,path:F};return u.push(K),"break"}();if("continue"===w)continue;if("break"===w)break;default:ie(e,t,r,i,a,l,o,f,u,y,p,d,g)}}}}}function ie(e,t,r,i,n,a,o,l,f,u,p,d,g){var S,M=function(e,t){return{type:e.type,enable:!0,name:e.name,colorLocked:e.colorLocked,primitiveName:e.primitiveName,anchorPoint:e.anchorPoint,anchorPointUnits:e.anchorPointUnits,offsetX:0,offsetY:0,rotateClockwise:e.rotateClockwise,rotation:0,size:e.size,billboardMode3D:e.billboardMode3D,depth3D:e.depth3D,frame:e.frame,markerGraphics:[t],scaleSymbolsProportionally:e.scaleSymbolsProportionally,respectFrame:e.respectFrame,clippingPath:e.clippingPath}}(e,n),N=["Rotation","OffsetX","OffsetY"];S=o.filter((function(t){return t.primitiveName!==e.primitiveName||!N.includes(t.propertyName)}));var k,C="",O=(0,s.Z)(o);try{for(O.s();!(k=O.n()).done;){var x=k.value;void 0!==x.value&&(C+="-".concat(x.primitiveName,"-").concat(x.propertyName,"-").concat(JSON.stringify(x.value)))}}catch(Y){O.e(Y)}finally{O.f()}var P=h.Z.getTextureAnchor(M,u),Z=(0,c.Z)(P,3),w=Z[0],L=Z[1],I=Z[2],A=e.primitiveName,X=(0,b.M)(e.rotation),z=(0,b.M)(e.offsetX),R=(0,b.M)(e.offsetY),J=(0,v.$)(JSON.stringify(M)+C).toString(),H={type:"marker",templateHash:J,materialHash:S.length>0||(0,m.r)(t)&&"function"==typeof t?se(J,a,S,l):J,cim:M,materialOverrides:S,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:p,anchorPoint:{x:w,y:L},isAbsoluteAnchorPoint:!1,size:e.size,rotation:oe(A,a,"Rotation",l,X),offsetX:oe(A,a,"OffsetX",l,z),offsetY:oe(A,a,"OffsetY",l,R),color:{r:255,g:255,b:255,a:1},outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,scaleX:1,frameHeight:g,rotateClockwise:e.rotateClockwise,referenceSize:d,sizeRatio:I/(0,y.u)(e.size),markerPlacement:r,animatedSymbolProperties:i};f.push(H)}function ne(e){if(e&&0===e.indexOf("Level_")){var t=parseInt(e.substr(6),10);if(!isNaN(t))return t}return 0}function ae(e){if(!e||0===e.length)return null;var t=new u.l(e).toRgba();return{r:t[0],g:t[1],b:t[2],a:t[3]}}function oe(e,t,r,i,n,a,o){var l=t[e];if(l){var f=l[r];if("string"==typeof f||"number"==typeof f||f instanceof Array)return a?a.call(null,f,o):f;if(null!=f&&f instanceof p.o)return function(e,t,r){var l=(0,M.s)(f,e,{$view:r},i.geometryType,t);return null!==l&&a&&(l=a.call(null,l,o)),null!==l?l:n}}return n}function le(e){return e?e.charAt(0).toLowerCase()+e.substr(1):e}function fe(e,t,r,i){var n,a=(0,s.Z)(t);try{for(a.s();!(n=a.n()).done;){var o=n.value;o.valueExpressionInfo&&function(){var e=r[o.primitiveName]&&r[o.primitiveName][o.propertyName];e instanceof p.o&&(o.fn=function(t,r,n){return(0,M.s)(e,t,{$view:n},i.geometryType,r)})}()}}catch(l){a.e(l)}finally{a.f()}return function(r,i,n){var a,o=(0,s.Z)(t);try{for(o.s();!(a=o.n()).done;){var f=a.value;f.fn&&(f.value=f.fn(r,i,n))}}catch(l){o.e(l)}finally{o.f()}var c,u=[],v=(0,s.Z)(e);try{for(v.s();!(c=v.n()).done;){var y,p=c.value,h=null===(y=p)||void 0===y?void 0:y.primitiveName;if(h){var d,g=!1,S=(0,s.Z)(t);try{for(S.s();!(d=S.n()).done;){var b=d.value;if(b.primitiveName===h){var M=le(b.propertyName);null!=b.value&&b.value!==p[M]&&(g||(p=(0,m.m)(p),g=!0),p[M]=b.value)}}}catch(l){S.e(l)}finally{S.f()}}u.push(p)}}catch(l){v.e(l)}finally{v.f()}return u}}function ce(e,t,r,i){var n=[];if(h.c.findApplicableOverrides(e,t,n),0===n.length)return e;for(var a=0,o=n;a<o.length;a++){var l=o[a];l.valueExpressionInfo&&function(){var e=r[l.primitiveName]&&r[l.primitiveName][l.propertyName];e instanceof p.o&&(l.fn=function(t,r,n){return(0,M.s)(e,t,{$view:n},i.geometryType,r)})}()}return function(t,r,i){var a,o=(0,s.Z)(n);try{for(o.s();!(a=o.n()).done;){var l=a.value;l.fn&&(l.value=l.fn(t,r,i))}}catch(h){o.e(h)}finally{o.f()}var f,c=(0,m.m)(e),u=e.primitiveName,v=(0,s.Z)(n);try{for(v.s();!(f=v.n()).done;){var y=f.value;if(y.primitiveName===u){var p=le(y.propertyName);null!=y.value&&y.value!==c[p]&&(c[p]=y.value)}}}catch(h){v.e(h)}finally{v.f()}return c}}function se(e,t,r,i){var n,a=(0,s.Z)(r);try{for(a.s();!(n=a.n()).done;){var o=n.value;o.valueExpressionInfo&&function(){var e=t[o.primitiveName]&&t[o.primitiveName][o.propertyName];e instanceof p.o&&(o.fn=function(t,r,n){return(0,M.s)(e,t,{$view:n},i.geometryType,r)})}()}}catch(l){a.e(l)}finally{a.f()}return function(t,i,n){var a,o=(0,s.Z)(r);try{for(o.s();!(a=o.n()).done;){var f=a.value;f.fn&&(f.value=f.fn(t,i,n))}}catch(l){o.e(l)}finally{o.f()}return(0,v.$)(e+h.c.buildOverrideKey(r)).toString()}}function ue(e,t){if(!t||0===t.length)return e;var r=JSON.parse(JSON.stringify(e));return h.c.applyOverrides(r,t),r}function me(e,t,r,i,n){var a,o=!1,l="",f=(0,s.Z)(e);try{for(f.s();!(a=f.n()).done;){var c=a.value;c.primitiveName===t&&(void 0!==c.value?l+="-".concat(c.primitiveName,"-").concat(c.propertyName,"-").concat(JSON.stringify(c.value)):c.valueExpressionInfo&&(o=!0))}}catch(u){f.e(u)}finally{f.f()}return(0,m.r)(r)&&"function"==typeof r&&(o=!0),(0,m.r)(i)&&"function"==typeof i&&(o=!0),(0,m.r)(n)&&"function"==typeof n&&(o=!0),[o,l]}function ve(e,t,r){if(e&&t)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":var i=e.symbolLayers;if(!i)return;var n,a=(0,s.Z)(i);try{for(a.s();!(n=a.n()).done;){var o=n.value;switch(he(o,t,r),o.type){case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMCharacterMarker":case"CIMPictureMarker":"url"in o&&o.url&&r.push(t.fetchResource(o.url,null));break;case"CIMVectorMarker":var l=o.markerGraphics;if(!l)continue;var f,c=(0,s.Z)(l);try{for(c.s();!(f=c.n()).done;){var u=f.value;if(u){var m=u.symbol;m&&ve(m,t,r)}}}catch(v){c.e(v)}finally{c.f()}}}}catch(v){a.e(v)}finally{a.f()}}}var ye,pe=function(e){return e&&2===e.length&&e[0].enable&&e[1].enable&&"CIMSolidStroke"===e[0].type&&"CIMSolidFill"===e[1].type&&!e[0].effects&&!e[1].effects};function he(e,t,r){e.effects&&!(0,m.r)(t.geometryEngine)&&(ye?r.push(ye):(0,b.p)(e.effects)&&(ye=(0,b.C)(),r.push(ye),ye.then((function(e){return t.geometryEngine=e}))))}}}]);
//# sourceMappingURL=3092.15fef934.chunk.js.map