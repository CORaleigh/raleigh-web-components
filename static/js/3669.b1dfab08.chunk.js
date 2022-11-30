"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[3669],{3669:function(r,e,t){t.d(e,{D:function(){return L},F:function(){return O},a:function(){return z},b:function(){return x},c:function(){return m},d:function(){return k},f:function(){return B},g:function(){return b},j:function(){return T},l:function(){return g},m:function(){return M},x:function(){return Z}});var n=t(74165),a=t(37762),i=t(15861),o=t(29439),l=t(40558),u=t(93661),h=t(44954),s=(t(74384),t(48848)),f=t(71802),c=t(82474),v=t(46817),d=new Map;d.set("meter-per-second",1),d.set("kilometer-per-hour",.277778),d.set("knots",.514444),d.set("feet-per-second",.3048),d.set("mile-per-hour",.44704);var p=180/Math.PI,m=new l.s({esriMetersPerSecond:"meter-per-second",esriKilometersPerHour:"kilometer-per-hour",esriKnots:"knots",esriFeetPerSecond:"feet-per-second",esriMilesPerHour:"mile-per-hour"});function g(r,e){return d.get(r)/d.get(e)||1}function w(r){return(450-r)%360}function x(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"geographic",t=(0,o.Z)(r,2),n=t[0],a=t[1],i=Math.sqrt(n*n+a*a),l=Math.atan2(a,n)*p;return l=(360+l)%360,"geographic"===e&&(l=w(l)),[i,l]}function y(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"geographic",t=r[1];"geographic"===e&&(t=w(t)),t%=360;var n=r[0];return[n*Math.cos(t/p),n*Math.sin(t/p)]}function M(r,e,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"geographic";if(!(0,h.r)(r)||(0,u.t)(t))return r;for(var a="vector-magdir"===e?r.clone():(0,u.e)(k(r,e)),i=a.pixels[1],o=0;o<i.length;o++)i[o]="geographic"===n?(i[o]+t[o]+270)%360:(i[o]+360-t[o])%360;return"vector-magdir"===e?a:k(a,"vector-magdir")}function k(r,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"geographic",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if(!(0,h.r)(r))return r;for(var a=r.pixels,i=r.width,l=r.height,u=i*l,s=a[0],f=a[1],c=r.pixelType.startsWith("f")?r.pixelType:"f32",v=h.g.createEmptyBand(c,u),d=h.g.createEmptyBand(c,u),p=0,m=0;m<l;m++)for(var g=0;g<i;g++){var w,M,k,b;"vector-uv"===e?(w=x([s[p],f[p]],t),M=(0,o.Z)(w,2),v[p]=M[0],d[p]=M[1],v[p]*=n):(k=y([s[p],f[p]],t),b=(0,o.Z)(k,2),v[p]=b[0],d[p]=b[1],v[p]*=n,d[p]*=n),p++}var Z=new h.g({pixelType:c,width:r.width,height:r.height,mask:r.mask,validPixelCount:r.validPixelCount,maskIsAlpha:r.maskIsAlpha,pixels:[v,d]});return Z.updateStatistics(),Z}function b(r,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(1===t||!(0,h.r)(r))return r;for(var n=r.clone(),a=n.pixels,i=n.width,o=n.height,l=a[0],u=a[1],s=0,f=0;f<o;f++)for(var c=0;c<i;c++)"vector-uv"===e?(l[s]*=t,u[s]*=t):l[s]*=t,s++;return n.updateStatistics(),n}function Z(r,e,t,n,a){if((0,u.t)(a)||!a.spatialReference.equals(r.spatialReference))return{extent:r,width:Math.round(e/n),height:Math.round(t/n),resolution:r.width/e};var i=a.xmin,o=a.ymax,l=(r.xmax-r.xmin)/e*n,h=(r.ymax-r.ymin)/t*n,s=(l+h)/2;return r.xmin=i+Math.floor((r.xmin-i)/l)*l,r.xmax=i+Math.ceil((r.xmax-i)/l)*l,r.ymin=o+Math.floor((r.ymin-o)/h)*h,r.ymax=o+Math.ceil((r.ymax-o)/h)*h,{extent:r,width:Math.round(r.width/l),height:Math.round(r.height/h),resolution:s}}var A=I(0,0,0);function I(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Math.PI,n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];n&&(t=(2*Math.PI-t)%(2*Math.PI));var a=n?-1:1,i=13*a,l=-7*a,u=-2*a,h=-16*a,s=21.75,f=D(0,e+i,t,s),c=(0,o.Z)(f,2),v=c[0],d=c[1],p=D(r-5.5,e+l,t,s),m=(0,o.Z)(p,2),g=m[0],w=m[1],x=D(r+5.5,e+l,t,s),y=(0,o.Z)(x,2),M=y[0],k=y[1],b=D(r-1.5,e+u,t,s),Z=(0,o.Z)(b,2),A=Z[0],I=Z[1],P=D(r+1.5,e+u,t,s),F=(0,o.Z)(P,2),S=F[0],V=F[1],_=D(r-1.5,e+h,t,s),U=(0,o.Z)(_,2),q=U[0],L=U[1],O=D(r+1.5,e+h,t,s),T=(0,o.Z)(O,2),N=T[0],B=T[1];return[v,d,g,w,A,I,S,V,M,k,q,L,N,B]}function P(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Math.PI,t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];t&&(e=(2*Math.PI-e)%(2*Math.PI));var n=10,a=t?-1:1,i=5*a,l=20*a,u=25*a,h=45,s=0,f=0,c=2,v=0,d=c*a,p=t?1:-1,m=n/2*p,g=s+m,w=f-l,x=g+c*p,y=w,M=x-v*p,k=y+d,b=s-m,Z=f-u,A=b+v*p,I=Z-d,P=Math.ceil(r/5),F=Math.floor(P/10);P-=8*F;for(var S=[],V=[],_=0;_<P/2;_++,F--){F<=0&&P%2==1&&_===(P-1)/2&&(A=(b=s)+v*p,I=(Z=(Z+w)/2)-d);var U=D(b,Z,e,h),q=(0,o.Z)(U,2),L=q[0],O=q[1];if(F>0){var T=D(x,Z,e,h),N=(0,o.Z)(T,2),B=N[0],C=N[1],R=D(g,w,e,h),E=(0,o.Z)(R,2),J=E[0],W=E[1];S.push(B),S.push(C),S.push(L),S.push(O),S.push(J),S.push(W)}else{var j=D(x,y,e,h),H=(0,o.Z)(j,2),K=H[0],z=H[1],X=D(M,k,e,h),G=(0,o.Z)(X,2),Q=G[0],Y=G[1],$=D(A,I,e,h),rr=(0,o.Z)($,2),er=rr[0],tr=rr[1];V.push(L),V.push(O),V.push(er),V.push(tr),V.push(Q),V.push(Y),V.push(K),V.push(z)}Z+=i,w+=i,y+=i,k+=i,I+=i}var nr=D(s+m,f+l,e,h),ar=(0,o.Z)(nr,2),ir=ar[0],or=ar[1],lr=(n/2+c)*p,ur=D(s+lr,f+l,e,h),hr=(0,o.Z)(ur,2),sr=hr[0],fr=hr[1],cr=D(s+m,f-u,e,h),vr=(0,o.Z)(cr,2),dr=vr[0],pr=vr[1],mr=D(s+lr,f-u,e,h),gr=(0,o.Z)(mr,2),wr=gr[0],xr=gr[1];return{pennants:S,barbs:V,shaft:[ir,or,sr,fr,dr,pr,wr,xr]}}function D(r,e,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,a=Math.sqrt(r*r+e*e)/n,i=(2*Math.PI+Math.atan2(e,r))%(2*Math.PI);return[a,(2*Math.PI+i-t)%(2*Math.PI)]}var F=[0,1,3,6,10,16,21,27,33,40,47,55,63],S=[0,.5,1,1.5,2],V=[0,.25,.5,1,1.5,2,2.5,3,3.5,4];function _(r,e,t,n){var a,i=g(n||"knots",t);for(a=1;a<e.length;a++)if(a===e.length-1){if(r<e[a]*i)break}else if(r<=e[a]*i)break;return Math.min(a-1,e.length-2)}function U(r,e,t,n,a){var i=0;switch(e){case"beaufort_kn":i=_(r,F,"knots",t);break;case"beaufort_km":i=_(r,F,"kilometer-per-hour",t);break;case"beaufort_ft":i=_(r,F,"feet-per-second",t);break;case"beaufort_m":i=_(r,F,"meter-per-second",t);break;case"classified_arrow":i=_(r,null!==a&&void 0!==a?a:[],n,t);break;case"ocean_current_m":i=_(r,S,"meter-per-second",t);break;case"ocean_current_kn":i=_(r,V,"knots",t)}return i}var q=[];function L(r,e){for(var t=0,n=0,a=r.width,i=r.height,o=r.mask,l=r.pixels[0],u=[],h=[],s=g(m.fromJSON(e.inputUnit),"knots"),f="wind_speed"===e.style?5:Number.MAX_VALUE,c=0;c<i;c++)for(var v=0;v<a;v++){var d=l[c*a+v]*s;if((!o||o[c*a+v])&&d<f){for(var p=0;p<4;p++)u[t++]=(v+.5)/a,u[t++]=(c+.5)/i,u[t++]=p<2?-.5:.5,u[t++]=p%2==0?-.5:.5,u[t++]=0,u[t++]=d;var w=4*(t/24-1);h[n++]=w,h[n++]=w+1,h[n++]=w+2,h[n++]=w+1,h[n++]=w+2,h[n++]=w+3}}return{vertexData:new Float32Array(u),indexData:new Uint32Array(h)}}function O(r,e){return"simple_scalar"===e.style?L(r,e):"wind_speed"===e.style?function(r,e){if(0===q.length)for(var t=0;t<30;t++)q.push(P(5*t,0,!e.invertDirection));for(var n=g(m.fromJSON(e.inputUnit),"knots"),a=r.width,i=r.height,o=r.mask,l=r.pixels[0],u=r.pixels[1],h=[],s=[],f=0,c=0,v=0;v<i;v++)for(var d=0;d<a;d++){var p=v*a+d,w=l[p]*n;if((!o||o[v*a+d])&&w>=5){var x=(u[p]+360)%360/180*Math.PI,y=q[Math.min(Math.floor(w/5),29)],M=y.pennants,k=y.barbs,b=y.shaft;if(M.length+k.length===0)continue;for(var Z=h.length/6,A=(d+.5)/a,I=(v+.5)/i,D=0;D<M.length;D+=2)h[f++]=A,h[f++]=I,h[f++]=M[D],h[f++]=M[D+1]+x,h[f++]=0,h[f++]=w;for(var F=0;F<k.length;F+=2)h[f++]=A,h[f++]=I,h[f++]=k[F],h[f++]=k[F+1]+x,h[f++]=0,h[f++]=w;for(var S=0;S<b.length;S+=2)h[f++]=A,h[f++]=I,h[f++]=b[S],h[f++]=b[S+1]+x,h[f++]=0,h[f++]=w;for(var V=0;V<M.length/6;V++)s[c++]=Z,s[c++]=Z+1,s[c++]=Z+2,Z+=3;for(var _=0;_<k.length/8;_++)s[c++]=Z,s[c++]=Z+1,s[c++]=Z+2,s[c++]=Z+1,s[c++]=Z+2,s[c++]=Z+3,Z+=4;s[c++]=Z+0,s[c++]=Z+1,s[c++]=Z+2,s[c++]=Z+1,s[c++]=Z+3,s[c++]=Z+2,Z+=4}}return{vertexData:new Float32Array(h),indexData:new Uint32Array(s)}}(r,e):function(r,e){for(var t=e.style,n=e.inputUnit,a=e.outputUnit,i=e.breakValues,o=m.fromJSON(n),l=m.fromJSON(a),h=0,s=0,f=r.width,c=r.height,v=r.mask,d=r.pixels[0],p=r.pixels[1],g=(0,u.r)(v)?v.filter((function(r){return r>0})).length:f*c,w=new Float32Array(42*g),x=new Uint32Array(15*g),y=e.invertDirection?I(0,0,0,!1):A,M=0;M<c;M++)for(var k=0;k<f;k++){var b=M*f+k;if(!v||v[M*f+k]){for(var Z=(p[b]+360)%360/180*Math.PI,P=U(d[b],t,o,l,i),D=0;D<y.length;D+=2)w[h++]=(k+.5)/f,w[h++]=(M+.5)/c,w[h++]=y[D],w[h++]=y[D+1]+Z,w[h++]=P,w[h++]=d[b];var F=7*(h/42-1);x[s++]=F,x[s++]=F+1,x[s++]=F+2,x[s++]=F+0,x[s++]=F+4,x[s++]=F+3,x[s++]=F+0,x[s++]=F+2,x[s++]=F+3,x[s++]=F+2,x[s++]=F+5,x[s++]=F+3,x[s++]=F+5,x[s++]=F+6,x[s++]=F+3}}return{vertexData:w,indexData:x}}(r,e)}function T(r,e,t){for(var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0,0],a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.5,i=r.width,l=r.height,u=r.mask,s=(0,o.Z)(r.pixels,2),f=s[0],c=s[1],v=(0,o.Z)(n,2),d=v[0],p=v[1],m=Math.round((i-d)/t),g=Math.round((l-p)/t),w=m*g,M=new Float32Array(w),k=new Float32Array(w),b=new Uint8Array(w),Z="vector-uv"===e,A=0;A<g;A++)for(var I=0;I<m;I++){for(var P=0,D=A*m+I,F=Math.max(0,A*t+p),S=Math.max(0,I*t+d),V=Math.min(l,F+t),_=Math.min(i,S+t),U=F;U<V;U++)for(var q=S;q<_;q++){var L=U*i+q;if(!u||u[L]){P++;var O=Z?[f[L],c[L]]:[f[L],(360+c[L])%360],T=Z?O:y(O),N=(0,o.Z)(T,2),B=N[0],C=N[1];M[D]+=B,k[D]+=C}}if(P>=(V-F)*(_-S)*(1-a)){b[D]=1;var R=x([M[D]/P,k[D]/P]),E=(0,o.Z)(R,2),J=E[0],W=E[1];M[D]=J,k[D]=W}else b[D]=0,M[D]=0,k[D]=0}var j=new h.g({width:m,height:g,pixels:[M,k],mask:b});return j.updateStatistics(),j}var N=s.a.getLogger("esri.views.2d.engine.flow.dataUtils");function B(r,e,t,n){return C.apply(this,arguments)}function C(){return C=(0,i.Z)((0,n.Z)().mark((function r(e,t,a,i){var o,l,h,f,c,v,d,p,m;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=performance.now(),l=R(t,a),h=performance.now(),f=J(t,l,a.width,a.height),c=performance.now(),v=W(f,!0),d=performance.now(),p="Streamlines"===e?j(v,10):H(v),m=performance.now(),(0,u.h)("esri-2d-profiler")&&(N.info("I.1","_createFlowFieldFromData (ms)",Math.round(h-o)),N.info("I.2","_getStreamlines (ms)",Math.round(c-h)),N.info("I.3","createAnimatedLinesData (ms)",Math.round(d-c)),N.info("I.4","create{Streamlines|Particles}Mesh (ms)",Math.round(m-d)),N.info("I.5","createFlowMesh (ms)",Math.round(m-o)),N.info("I.6","Mesh size (bytes)",p.vertexData.buffer.byteLength+p.indexData.buffer.byteLength)),r.next=4,Promise.resolve();case 4:return(0,s.f)(i),r.abrupt("return",p);case 6:case"end":return r.stop()}}),r)}))),C.apply(this,arguments)}function R(r,e){var t=function(r,e,t,n){if(0===n)return r;for(var a=Math.round(3*n),i=new Array(2*a+1),o=0,l=-a;l<=a;l++){var u=Math.exp(-l*l/(n*n));i[l+a]=u,o+=u}for(var h=-a;h<=a;h++)i[h+a]/=o;for(var s=new Float32Array(r.length),f=0;f<t;f++)for(var c=0;c<e;c++){for(var v=0,d=0,p=-a;p<=a;p++)if(!(c+p<0||c+p>=e)){var m=i[p+a];v+=m*r[2*(f*e+(c+p))+0],d+=m*r[2*(f*e+(c+p))+1]}s[2*(f*e+c)+0]=v,s[2*(f*e+c)+1]=d}for(var g=new Float32Array(r.length),w=0;w<e;w++)for(var x=0;x<t;x++){for(var y=0,M=0,k=-a;k<=a;k++)if(!(x+k<0||x+k>=t)){var b=i[k+a];y+=b*s[2*((x+k)*e+w)+0],M+=b*s[2*((x+k)*e+w)+1]}g[2*(x*e+w)+0]=y,g[2*(x*e+w)+1]=M}return g}(e.data,e.width,e.height,r.smoothing);return r.interpolate?function(r,n){var a=Math.floor(r),i=Math.floor(n);if(a<0||a>=e.width)return[0,0];if(i<0||i>=e.height)return[0,0];var o=r-a,l=n-i,u=a,h=i,s=a<e.width-1?a+1:a,f=i<e.height-1?i+1:i,c=t[2*(h*e.width+u)],v=t[2*(h*e.width+s)],d=t[2*(f*e.width+u)],p=t[2*(f*e.width+s)],m=t[2*(h*e.width+u)+1],g=t[2*(h*e.width+s)+1];return[(c*(1-l)+d*l)*(1-o)+(v*(1-l)+p*l)*o,(m*(1-l)+t[2*(f*e.width+u)+1]*l)*(1-o)+(g*(1-l)+t[2*(f*e.width+s)+1]*l)*o]}:function(r,n){var a=Math.round(r),i=Math.round(n);return a<0||a>=e.width||i<0||i>=e.height?[0,0]:[t[2*(i*e.width+a)+0],t[2*(i*e.width+a)+1]]}}function E(r,e,t,n,a,i,l,u,h){var s=[],f=t,c=n,v=0,d=e(f,c),p=(0,o.Z)(d,2),m=p[0],g=p[1];m*=r.velocityScale,g*=r.velocityScale;var w,x,y=Math.sqrt(m*m+g*g);s.push({x:f,y:c,t:v,speed:y});for(var M=0;M<r.verticesPerLine;M++){var k=e(f,c),b=(0,o.Z)(k,2),Z=b[0],A=b[1];Z*=r.velocityScale,A*=r.velocityScale;var I=Math.sqrt(Z*Z+A*A);if(I<r.minSpeedThreshold)return s;var P=Z/I,D=A/I;if(f+=P*r.segmentLength,c+=D*r.segmentLength,v+=r.segmentLength/I,Math.acos(P*w+D*x)>r.maxTurnAngle)return s;if(r.collisions){var F=Math.round(f*h),S=Math.round(c*h);if(F<0||F>l-1||S<0||S>u-1)return s;var V=i[S*l+F];if(-1!==V&&V!==a)return s;i[S*l+F]=a}s.push({x:f,y:c,t:v,speed:I}),w=P,x=D}return s}function J(r,e,t,n){for(var a=[],i=new u.W,o=1/Math.max(r.lineCollisionWidth,1),l=Math.round(t*o),h=Math.round(n*o),s=new Int32Array(l*h),f=0;f<s.length;f++)s[f]=-1;for(var c=[],v=0;v<n;v+=r.lineSpacing)for(var d=0;d<t;d+=r.lineSpacing)c.push({x:d,y:v,sort:i.getFloat()});c.sort((function(r,e){return r.sort-e.sort}));for(var p=0,m=c;p<m.length;p++){var g=m[p],w=g.x,x=g.y;if(i.getFloat()<r.density){var y=E(r,e,w,x,a.length,s,l,h,o);if(y.length<2)continue;a.push(y)}}return a}function W(r,e){var t,n=new u.W,i=r.reduce((function(r,e){return r+e.length}),0),o=new Float32Array(4*i),l=new Array(r.length),h=0,s=0,f=(0,a.Z)(r);try{for(f.s();!(t=f.n()).done;){var c,v=t.value,d=h,p=(0,a.Z)(v);try{for(p.s();!(c=p.n()).done;){var m=c.value;o[4*h+0]=m.x,o[4*h+1]=m.y,o[4*h+2]=m.t,o[4*h+3]=m.speed,h++}}catch(g){p.e(g)}finally{p.f()}l[s++]={startVertex:d,numberOfVertices:v.length,totalTime:v[v.length-1].t,timeSeed:e?n.getFloat():0}}}catch(g){f.e(g)}finally{f.f()}return{lineVertices:o,lineDescriptors:l}}function j(r,e){var t,n=r.lineVertices,i=r.lineDescriptors,o=0,l=0,u=(0,a.Z)(i);try{for(u.s();!(t=u.n()).done;){var h=t.value;o+=2*h.numberOfVertices,l+=6*(h.numberOfVertices-1)}}catch(C){u.e(C)}finally{u.f()}var s=new Float32Array(9*o),f=new Uint32Array(l),c=0,v=0;function d(r,e,t,n,a,i,o,l){var u=9*c,h=0;s[u+h++]=r,s[u+h++]=e,s[u+h++]=1,s[u+h++]=t,s[u+h++]=i,s[u+h++]=o,s[u+h++]=n/2,s[u+h++]=a/2,s[u+h++]=l,c++,s[u+h++]=r,s[u+h++]=e,s[u+h++]=-1,s[u+h++]=t,s[u+h++]=i,s[u+h++]=o,s[u+h++]=-n/2,s[u+h++]=-a/2,s[u+h++]=l,c++}var p,m=(0,a.Z)(i);try{for(m.s();!(p=m.n()).done;){for(var g=p.value,w=g.totalTime,x=g.timeSeed,y=null,M=null,k=null,b=null,Z=null,A=null,I=0;I<g.numberOfVertices;I++){var P=n[4*(g.startVertex+I)+0],D=n[4*(g.startVertex+I)+1],F=n[4*(g.startVertex+I)+2],S=n[4*(g.startVertex+I)+3],V=null,_=null,U=null,q=null;if(I>0){V=P-y,_=D-M;var L=Math.sqrt(V*V+_*_);if(V/=L,_/=L,I>1){var O=V+Z,T=_+A,N=Math.sqrt(O*O+T*T);O/=N,T/=N;var B=Math.min(1/(O*V+T*_),e);U=-(T*=B),q=O*=B}else U=-_,q=V;null!==U&&null!==q&&(d(y,M,k,U,q,w,x,S),f[v++]=c-2,f[v++]=c,f[v++]=c-1,f[v++]=c,f[v++]=c+1,f[v++]=c-1)}y=P,M=D,k=F,Z=V,A=_,b=S}d(y,M,k,-A,Z,w,x,b)}}catch(C){m.e(C)}finally{m.f()}return{vertexData:s,indexData:f}}function H(r){var e,t=r.lineVertices,n=r.lineDescriptors,i=0,o=0,l=(0,a.Z)(n);try{for(l.s();!(e=l.n()).done;){var u=e.value.numberOfVertices-1;i+=4*u*2,o+=6*u*2}}catch(N){l.e(N)}finally{l.f()}var h,s,f,c,v,d,p,m,g,w,x,y,M,k,b=new Float32Array(16*i),Z=new Uint32Array(o),A=0,I=0;function P(){Z[I++]=A-8,Z[I++]=A-7,Z[I++]=A-6,Z[I++]=A-7,Z[I++]=A-5,Z[I++]=A-6,Z[I++]=A-4,Z[I++]=A-3,Z[I++]=A-2,Z[I++]=A-3,Z[I++]=A-1,Z[I++]=A-2}function D(r,e,t,n,a,i,o,l,u,h,s,f,c,v){for(var d=16*A,p=0,m=0,g=[1,2];m<g.length;m++)for(var w=g[m],x=0,y=[1,2,3,4];x<y.length;x++){var M=y[x];b[d+p++]=r,b[d+p++]=e,b[d+p++]=t,b[d+p++]=n,b[d+p++]=o,b[d+p++]=l,b[d+p++]=u,b[d+p++]=h,b[d+p++]=w,b[d+p++]=M,b[d+p++]=c,b[d+p++]=v,b[d+p++]=a/2,b[d+p++]=i/2,b[d+p++]=s/2,b[d+p++]=f/2,A++}}function F(r,e){var t=g+x,n=w+y,a=Math.sqrt(t*t+n*n),i=g*(t/=a)+w*(n/=a);t/=i,n/=i;var o=x+M,l=y+k,u=Math.sqrt(o*o+l*l),b=x*(o/=u)+y*(l/=u);D(h,s,f,c,-n,t,v,d,p,m,-(l/=b),o/=b,r,e),P()}function S(r,e,t,n,a,i){if(g=x,w=y,x=M,y=k,null==g&&null==w&&(g=x,w=y),null!=v&&null!=d){M=r-v,k=e-d;var o=Math.sqrt(M*M+k*k);M/=o,k/=o}null!=g&&null!=w&&F(a,i),h=v,s=d,f=p,c=m,v=r,d=e,p=t,m=n}function V(r,e){g=x,w=y,x=M,y=k,null==g&&null==w&&(g=x,w=y),null!=g&&null!=w&&F(r,e)}var _,U=(0,a.Z)(n);try{for(U.s();!(_=U.n()).done;){var q=_.value;h=null,s=null,f=null,c=null,v=null,d=null,p=null,m=null,g=null,w=null,x=null,y=null,M=null,k=null;for(var L=q.totalTime,O=q.timeSeed,T=0;T<q.numberOfVertices;T++)S(t[4*(q.startVertex+T)+0],t[4*(q.startVertex+T)+1],t[4*(q.startVertex+T)+2],t[4*(q.startVertex+T)+3],L,O);V(L,O)}}catch(N){U.e(N)}finally{U.f()}return{vertexData:b,indexData:Z}}function K(r,e){var t=e.pixels,n=e.width,a=e.height,i=new Float32Array(n*a*2),o=e.mask||new Uint8Array(n*a*2);if(e.mask||o.fill(255),"vector-uv"===r)for(var l=0;l<n*a;l++)i[2*l+0]=t[0][l],i[2*l+1]=-t[1][l];else if("vector-magdir"===r)for(var u=0;u<n*a;u++){var h=t[0][u],s=(0,f.m)(t[1][u]),c=Math.cos(s-Math.PI/2),v=Math.sin(s-Math.PI/2);i[2*u+0]=c*h,i[2*u+1]=v*h}return{data:i,mask:o,width:n,height:a}}function z(r,e,t,n,a,i){return X.apply(this,arguments)}function X(){return X=(0,i.Z)((0,n.Z)().mark((function r(e,t,i,l,h,s){var f,d,p,m,g,w,x,y,M,k,b,Z,A,I,P,D,F,S,V,_,U,q,L;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(f=performance.now(),d=(0,c.a)(t.spatialReference)){r.next=6;break}return r.next=4,G(e,t,i,l,h,s);case 4:return p=r.sent,r.abrupt("return",((0,u.h)("esri-2d-profiler")&&N.info("I.7","loadImagery, early exit (ms)",Math.round(performance.now()-f)),(0,u.h)("esri-2d-profiler")&&N.info("I.9","Number of parts",1),p));case 6:for(m=(0,o.Z)(d.valid,2),g=m[0],w=m[1],x=w-g,y=Math.ceil(t.width/x),M=t.width/y,k=Math.round(i/y),b=t.xmin,Z=[],A=performance.now(),I=0;I<y;I++)P=new v.w({xmin:b,xmax:b+M,ymin:t.ymin,ymax:t.ymax,spatialReference:t.spatialReference}),Z.push(G(e,P,k,l,h,s)),b+=M;return r.next=12,Promise.all(Z);case 12:D=r.sent,(0,u.h)("esri-2d-profiler")&&N.info("I.8","All calls to _fetchPart (ms)",Math.round(performance.now()-A)),(0,u.h)("esri-2d-profiler")&&N.info("I.9","Number of parts",D.length),F={data:new Float32Array(i*l*2),mask:new Uint8Array(i*l),width:i,height:l},S=0,V=(0,a.Z)(D);try{for(V.s();!(_=V.n()).done;){for(U=_.value,q=0;q<U.height;q++)for(L=0;L<U.width;L++)S+L>=i||(F.data[2*(q*i+S+L)+0]=U.data[2*(q*U.width+L)+0],F.data[2*(q*i+S+L)+1]=U.data[2*(q*U.width+L)+1],F.mask[q*i+S+L]=U.mask[q*U.width+L]);S+=U.width}}catch(n){V.e(n)}finally{V.f()}return r.abrupt("return",((0,u.h)("esri-2d-profiler")&&N.info("I.10","loadImagery, general exit (ms)",Math.round(performance.now()-f)),F));case 19:case"end":return r.stop()}}),r)}))),X.apply(this,arguments)}function G(r,e,t,n,a,i){return Q.apply(this,arguments)}function Q(){return Q=(0,i.Z)((0,n.Z)().mark((function r(e,t,a,i,o,l){var h,s,f,c,v;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(h={requestProjectedLocalDirections:!0,signal:l},(0,u.r)(o)&&(h.timeExtent=o),"imagery"!==e.type){r.next=9;break}return r.next=4,e.load({signal:l});case 4:return s=e.rasterInfo.dataType,r.next=7,e.fetchImage(t,a,i,h);case 7:return f=r.sent,r.abrupt("return",!f||(0,u.t)(f.pixelData)||(0,u.t)(f.pixelData.pixelBlock)?{data:new Float32Array(a*i*2),mask:new Uint8Array(a*i),width:a,height:i}:K(s,f.pixelData.pixelBlock));case 9:return r.next=11,e.load({signal:l});case 11:return c=e.rasterInfo.dataType,r.next=14,e.fetchPixels(t,a,i,h);case 14:return v=r.sent,r.abrupt("return",!v||(0,u.t)(v.pixelBlock)?{data:new Float32Array(a*i*2),mask:new Uint8Array(a*i),width:a,height:i}:K(c,v.pixelBlock));case 16:case"end":return r.stop()}}),r)}))),Q.apply(this,arguments)}}}]);
//# sourceMappingURL=3669.b1dfab08.chunk.js.map