"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[3282],{33282:function(e,r,t){t.r(r);var n=t(15671),i=t(43144),o=t(11752),a=t(61120),u=t(60136),s=t(29388),l=t(23132),c=t(83822),f=t(75610),d=t(36551),h=t(40023),v=t(58687),I=t(3964),g=t(5900),p=(t(91204),t(80262),t(30709),t(70441),t(36460),t(57714),t(51451),t(80175),t(50526),t(50448),t(41742),t(43920),t(1773),t(77196),t(24980),t(3114),t(22144),t(78674),t(66307),t(2760),t(88370),t(72820),t(78311),t(96349),t(9055),t(79611),t(2157),t(30604),t(21583),t(48561),t(44455),t(96401),t(40273),t(77470),t(84538),t(49580),t(54841),t(33703),t(92870),t(97033),t(72692),t(77389),t(55269),t(32568),t(69202),t(27597),t(1241),t(67417),t(15181),t(33642),t(28999),t(69953),t(15612),t(43124),t(69797),t(34860),t(36638),t(10590),t(19948),t(96636),t(30664),t(38304),t(83024),t(61340),t(47626),t(25316),t(407),t(67154),t(79054),t(29709),t(47642),t(18411),t(43782),t(33976),t(28210),t(17436),t(53373),t(94872),t(3969),t(79042),t(61495),t(16485),t(92029),t(74575),t(9575),t(53249),t(83996),t(72763),t(6794),t(28681),t(38929),t(97866),t(68890),t(31513),t(25838),t(54539),t(19967),t(50338),t(28623),t(10312),t(95254),t(61099),t(12158),t(93874),t(62446),t(27264),t(50905),t(78945),t(55827),t(70516),t(25279),t(22268),t(40452),t(60424),t(22225),t(38425),t(42471),t(78470),t(1665),t(38843),t(24892),t(48889),t(30150),t(53647),t(81663),t(14181),t(86270),t(47672),t(63022),t(10815),t(87833),t(21523),t(84192),t(71710),t(45332),t(57952),t(48466),t(86148),t(60912),t(68528),t(55806),t(44344),t(71573),t(64571),t(94867),t(91309),t(25715),t(83262),t(2822),t(61349),t(32990),t(6819),t(52376),t(6243),t(64296),t(45414),t(74021),t(97566),t(90138),t(50982),t(37783),t(14432),t(56864),t(58394),t(20005),t(62400),t(16936),t(84452),t(63662),t(86068),t(75370),t(62268),t(18392),t(97627),t(64004),t(21924),t(13425),t(21165),t(21984),t(83059),t(4720),t(48373),t(61473),t(14946),t(44365),t(90584),t(98907),t(66156),t(10534),t(25459),t(78556),t(77787),t(85511),t(87603),t(22051),t(46123),t(75777),t(76071),t(42446),t(59819),function(e){(0,u.Z)(t,e);var r=(0,s.Z)(t);function t(){var e;return(0,n.Z)(this,t),(e=r.apply(this,arguments)).type="integrated-mesh-3d",e.lodFactor=1,e._elevationContext="im",e._isIntegratedMesh=!0,e._supportsLabeling=!1,e.drapeTargetType=v.ax.WithoutRasterImage,e}return(0,i.Z)(t,[{key:"progressiveLoadFactor",get:function(){return this.lodFactor>=1?.2:1}},{key:"initialize",value:function(){var e=this;this.updatingHandles.add((function(){return e.layer.modifications}),(function(){return e._loadModifications()}),d.h),this.view.basemapTerrain.overlayManager.registerDrapeTarget(this)}},{key:"destroy",value:function(){this.view.basemapTerrain.overlayManager.unregisterDrapeTarget(this)}},{key:"_createLayerGraphic",value:function(){var e=new c.g;return e.layer=this.layer,e.sourceLayer=this.layer,e}},{key:"canResume",value:function(){return(0,o.Z)((0,a.Z)(t.prototype),"canResume",this).call(this)&&(!this._controller||this._controller.rootNodeVisible)}},{key:"_loadModifications",value:function(){var e=this;if(this.handles.remove("modifications"),(0,f.t)(this.layer.modifications))this._modifications=[];else{var r=this.layer.modifications;this.handles.add(this.updatingHandles.addOnCollectionChange((function(){return r}),(function(){return e._modifications=r.toArray()}),d.h),"modifications")}}}]),t}((0,h.p)((0,I.n)(g.u))));(0,l.e)([(0,l.d)()],p.prototype,"layer",void 0),(0,l.e)([(0,l.d)({aliasOf:"layer"})],p.prototype,"i3slayer",void 0),(0,l.e)([(0,l.d)(v.t)],p.prototype,"updatingProgress",void 0),(0,l.e)([(0,l.d)({readOnly:!0,aliasOf:"_controller.updatingProgress"})],p.prototype,"updatingProgressValue",void 0),(0,l.e)([(0,l.d)({readOnly:!0,aliasOf:"view.qualitySettings.sceneService.integratedMesh.lodFactor"})],p.prototype,"lodFactor",void 0),(0,l.e)([(0,l.d)({readOnly:!0})],p.prototype,"progressiveLoadFactor",null);var y=p=(0,l.e)([(0,l.n)("esri.views.3d.layers.SceneLayerView3D")],p);r.default=y},75370:function(e,r,t){t.d(r,{e:function(){return a}});var n=t(37762),i=t(75610);function o(e,r){return e?r?4:3:r?3:2}function a(e,r,t,a,l){if((0,i.t)(r)||!r.lengths.length)return null;var c="upperLeft"===(null===l||void 0===l?void 0:l.originPosition)?-1:1;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);var f,d=e.coords,h=[],v=t?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],I=r.lengths,g=r.coords,p=o(t,a),y=0,N=(0,n.Z)(I);try{for(N.s();!(f=N.n()).done;){var m=f.value,T=u(v,g,y,m,t,a,c);T&&h.push(T),y+=m*p}}catch(F){N.e(F)}finally{N.f()}if(h.sort((function(e,r){var n=c*e[2]-c*r[2];return 0===n&&t&&(n=e[4]-r[4]),n})),h.length){var _=6*h[0][2];d[0]=h[0][0]/_,d[1]=h[0][1]/_,t&&(_=6*h[0][4],d[2]=0!==_?h[0][3]/_:0),(d[0]<v[0]||d[0]>v[1]||d[1]<v[2]||d[1]>v[3]||t&&(d[2]<v[4]||d[2]>v[5]))&&(d.length=0)}if(!d.length){var b=r.lengths[0]?s(g,0,I[0],t,a):null;if(!b)return null;d[0]=b[0],d[1]=b[1],t&&b.length>2&&(d[2]=b[2])}return e}function u(e,r,t,n,i,a){for(var u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1,s=o(i,a),l=t,c=t+s,f=0,d=0,h=0,v=0,I=0,g=0,p=n-1;g<p;g++,l+=s,c+=s){var y=r[l],N=r[l+1],m=r[l+2],T=r[c],_=r[c+1],b=r[c+2],F=y*_-T*N;v+=F,f+=(y+T)*F,d+=(N+_)*F,i&&(h+=(m+b)*(F=y*b-T*m),I+=F),y<e[0]&&(e[0]=y),y>e[1]&&(e[1]=y),N<e[2]&&(e[2]=N),N>e[3]&&(e[3]=N),i&&(m<e[4]&&(e[4]=m),m>e[5]&&(e[5]=m))}if(v*u>0&&(v*=-1),I*u>0&&(I*=-1),!v)return null;var E=[f,d,.5*v];return i&&(E[3]=h,E[4]=.5*I),E}function s(e,r,t,n,i){for(var a=o(n,i),u=r,s=r+a,h=0,v=0,I=0,g=0,p=0,y=t-1;p<y;p++,u+=a,s+=a){var N=e[u],m=e[u+1],T=e[u+2],_=e[s],b=e[s+1],F=e[s+2],E=n?c(N,m,T,_,b,F):l(N,m,_,b);if(E)if(h+=E,n){var M=d(N,m,T,_,b,F);v+=E*M[0],I+=E*M[1],g+=E*M[2]}else{var V=f(N,m,_,b);v+=E*V[0],I+=E*V[1]}}return h>0?n?[v/h,I/h,g/h]:[v/h,I/h]:t>0?n?[e[r],e[r+1],e[r+2]]:[e[r],e[r+1]]:null}function l(e,r,t,n){var i=t-e,o=n-r;return Math.sqrt(i*i+o*o)}function c(e,r,t,n,i,o){var a=n-e,u=i-r,s=o-t;return Math.sqrt(a*a+u*u+s*s)}function f(e,r,t,n){return[e+.5*(t-e),r+.5*(n-r)]}function d(e,r,t,n,i,o){return[e+.5*(n-e),r+.5*(i-r),t+.5*(o-t)]}},18392:function(e,r,t){t.d(r,{a:function(){return u}});var n,i,o,a={exports:{}};n=a,i=function(){function e(t,n,i,o,a){for(;o>i;){if(o-i>600){var u=o-i+1,s=n-i+1,l=Math.log(u),c=.5*Math.exp(2*l/3),f=.5*Math.sqrt(l*c*(u-c)/u)*(s-u/2<0?-1:1);e(t,n,Math.max(i,Math.floor(n-s*c/u+f)),Math.min(o,Math.floor(n+(u-s)*c/u+f)),a)}var d=t[n],h=i,v=o;for(r(t,i,n),a(t[o],d)>0&&r(t,i,o);h<v;){for(r(t,h,v),h++,v--;a(t[h],d)<0;)h++;for(;a(t[v],d)>0;)v--}0===a(t[i],d)?r(t,i,v):r(t,++v,o),v<=n&&(i=v+1),n<=v&&(o=v-1)}}function r(e,r,t){var n=e[r];e[r]=e[t],e[t]=n}function t(e,r){return e<r?-1:e>r?1:0}return function(r,n,i,o,a){e(r,n,i||0,o||r.length-1,a||t)}},void 0!==(o=i())&&(n.exports=o);var u=a.exports}}]);
//# sourceMappingURL=3282.cf04c2cb.chunk.js.map