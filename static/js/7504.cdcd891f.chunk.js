"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[7504],{37504:function(e,r,t){t.r(r);var n=t(15671),i=t(43144),o=t(11752),a=t(61120),u=t(60136),s=t(29388),l=t(50165),c=t(89031),f=t(73627),d=t(73552),h=t(35691),v=t(29398),I=t(60470),g=(t(33530),t(96263),t(77322),t(32335),t(31278),t(13994),t(98496),t(40133),t(4483),t(79747),t(42),t(52155),t(75662),t(17493),t(62980),t(16377),t(9887),t(88406),t(66307),t(2760),t(42488),t(9330),t(79146),t(3029),t(42687),t(78330),t(78697),t(78664),t(48561),t(73428),t(96401),t(68634),t(69738),t(73393),t(87110),t(72577),t(61772),t(92870),t(26079),t(22984),t(15508),t(17691),t(55269),t(86931),t(51613),t(80392),t(10489),t(62298),t(2815),t(2326),t(90339),t(76375),t(82046),t(49961),t(31412),t(53089),t(83172),t(66270),t(60418),t(84539),t(75366),t(5233),t(36235),t(61340),t(57439),t(59075),t(97823),t(49350),t(89354),t(16897),t(47642),t(63334),t(38419),t(84231),t(38665),t(32717),t(39853),t(94872),t(3969),t(43895),t(30594),t(73267),t(22628),t(24982),t(46584),t(7093),t(85966),t(28003),t(49796),t(58428),t(8049),t(80933),t(40858),t(95076),t(56389),t(86738),t(69205),t(50338),t(33074),t(31134),t(41524),t(68668),t(55916),t(66319),t(24781),t(2329),t(37243),t(97345),t(39001),t(84913),t(84823),t(9411),t(14826),t(64620),t(22225),t(75272),t(4197),t(86905),t(64997),t(26208),t(2816),t(46237),t(98428),t(5792),t(42094),t(67871),t(75097),t(47672),t(98643),t(83745),t(87833),t(21523),t(84192),t(99057),t(26995),t(57952),t(39972),t(27670),t(75105),t(92692),t(64747),t(40438),t(71573),t(71871),t(94867),t(92694),t(25715),t(83262),t(7225),t(21286),t(47901),t(6819),t(12989),t(6243),t(12317),t(24695),t(74021),t(47692),t(48968),t(92820),t(37783),t(20838),t(56864),t(15820),t(50252),t(95013),t(89180),t(28360),t(8180),t(43750),t(13089),t(55985),t(18392),t(44217),t(66339),t(34095),t(34428),t(76821),t(21984),t(13445),t(57405),t(61377),t(64591),t(14023),t(44365),t(50463),t(49734),t(66156),t(62469),t(85490),t(77576),t(38969),t(8369),t(21277),t(80581),t(85245),t(75777),t(68792),t(99797),t(49510),function(e){(0,u.Z)(t,e);var r=(0,s.Z)(t);function t(){var e;return(0,n.Z)(this,t),(e=r.apply(this,arguments)).type="integrated-mesh-3d",e.lodFactor=1,e._elevationContext="im",e._isIntegratedMesh=!0,e._supportsLabeling=!1,e.drapeTargetType=h.ax.WithoutRasterImage,e}return(0,i.Z)(t,[{key:"progressiveLoadFactor",get:function(){return this.lodFactor>=1?.2:1}},{key:"initialize",value:function(){var e=this;this.updatingHandles.add((function(){return e.layer.modifications}),(function(){return e._loadModifications()}),f.h),this.view.basemapTerrain.overlayManager.registerDrapeTarget(this)}},{key:"destroy",value:function(){this.view.basemapTerrain.overlayManager.unregisterDrapeTarget(this)}},{key:"_createLayerGraphic",value:function(){var e=new c.g;return e.layer=this.layer,e.sourceLayer=this.layer,e}},{key:"canResume",value:function(){return(0,o.Z)((0,a.Z)(t.prototype),"canResume",this).call(this)&&(!this._controller||this._controller.rootNodeVisible)}},{key:"_loadModifications",value:function(){var e=this;if(this.handles.remove("modifications"),(0,l.t)(this.layer.modifications))this._modifications=[];else{var r=this.layer.modifications;this.handles.add(this.updatingHandles.addOnCollectionChange((function(){return r}),(function(){return e._modifications=r.toArray()}),f.h),"modifications")}}}]),t}((0,d.p)((0,v.n)(I.u))));(0,l.e)([(0,l.d)()],g.prototype,"layer",void 0),(0,l.e)([(0,l.d)({aliasOf:"layer"})],g.prototype,"i3slayer",void 0),(0,l.e)([(0,l.d)(h.t)],g.prototype,"updatingProgress",void 0),(0,l.e)([(0,l.d)({readOnly:!0,aliasOf:"_controller.updatingProgress"})],g.prototype,"updatingProgressValue",void 0),(0,l.e)([(0,l.d)({readOnly:!0,aliasOf:"view.qualitySettings.sceneService.integratedMesh.lodFactor"})],g.prototype,"lodFactor",void 0),(0,l.e)([(0,l.d)({readOnly:!0})],g.prototype,"progressiveLoadFactor",null);var p=g=(0,l.e)([(0,l.n)("esri.views.3d.layers.SceneLayerView3D")],g);r.default=p},13089:function(e,r,t){t.d(r,{e:function(){return a}});var n=t(37762),i=t(50165);function o(e,r){return e?r?4:3:r?3:2}function a(e,r,t,a,l){if((0,i.t)(r)||!r.lengths.length)return null;var c="upperLeft"===(null===l||void 0===l?void 0:l.originPosition)?-1:1;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);var f,d=e.coords,h=[],v=t?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],I=r.lengths,g=r.coords,p=o(t,a),y=0,N=(0,n.Z)(I);try{for(N.s();!(f=N.n()).done;){var m=f.value,T=u(v,g,y,m,t,a,c);T&&h.push(T),y+=m*p}}catch(F){N.e(F)}finally{N.f()}if(h.sort((function(e,r){var n=c*e[2]-c*r[2];return 0===n&&t&&(n=e[4]-r[4]),n})),h.length){var _=6*h[0][2];d[0]=h[0][0]/_,d[1]=h[0][1]/_,t&&(_=6*h[0][4],d[2]=0!==_?h[0][3]/_:0),(d[0]<v[0]||d[0]>v[1]||d[1]<v[2]||d[1]>v[3]||t&&(d[2]<v[4]||d[2]>v[5]))&&(d.length=0)}if(!d.length){var b=r.lengths[0]?s(g,0,I[0],t,a):null;if(!b)return null;d[0]=b[0],d[1]=b[1],t&&b.length>2&&(d[2]=b[2])}return e}function u(e,r,t,n,i,a){for(var u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1,s=o(i,a),l=t,c=t+s,f=0,d=0,h=0,v=0,I=0,g=0,p=n-1;g<p;g++,l+=s,c+=s){var y=r[l],N=r[l+1],m=r[l+2],T=r[c],_=r[c+1],b=r[c+2],F=y*_-T*N;v+=F,f+=(y+T)*F,d+=(N+_)*F,i&&(h+=(m+b)*(F=y*b-T*m),I+=F),y<e[0]&&(e[0]=y),y>e[1]&&(e[1]=y),N<e[2]&&(e[2]=N),N>e[3]&&(e[3]=N),i&&(m<e[4]&&(e[4]=m),m>e[5]&&(e[5]=m))}if(v*u>0&&(v*=-1),I*u>0&&(I*=-1),!v)return null;var E=[f,d,.5*v];return i&&(E[3]=h,E[4]=.5*I),E}function s(e,r,t,n,i){for(var a=o(n,i),u=r,s=r+a,h=0,v=0,I=0,g=0,p=0,y=t-1;p<y;p++,u+=a,s+=a){var N=e[u],m=e[u+1],T=e[u+2],_=e[s],b=e[s+1],F=e[s+2],E=n?c(N,m,T,_,b,F):l(N,m,_,b);if(E)if(h+=E,n){var M=d(N,m,T,_,b,F);v+=E*M[0],I+=E*M[1],g+=E*M[2]}else{var V=f(N,m,_,b);v+=E*V[0],I+=E*V[1]}}return h>0?n?[v/h,I/h,g/h]:[v/h,I/h]:t>0?n?[e[r],e[r+1],e[r+2]]:[e[r],e[r+1]]:null}function l(e,r,t,n){var i=t-e,o=n-r;return Math.sqrt(i*i+o*o)}function c(e,r,t,n,i,o){var a=n-e,u=i-r,s=o-t;return Math.sqrt(a*a+u*u+s*s)}function f(e,r,t,n){return[e+.5*(t-e),r+.5*(n-r)]}function d(e,r,t,n,i,o){return[e+.5*(n-e),r+.5*(i-r),t+.5*(o-t)]}},18392:function(e,r,t){t.d(r,{a:function(){return u}});var n,i,o,a={exports:{}};n=a,i=function(){function e(t,n,i,o,a){for(;o>i;){if(o-i>600){var u=o-i+1,s=n-i+1,l=Math.log(u),c=.5*Math.exp(2*l/3),f=.5*Math.sqrt(l*c*(u-c)/u)*(s-u/2<0?-1:1);e(t,n,Math.max(i,Math.floor(n-s*c/u+f)),Math.min(o,Math.floor(n+(u-s)*c/u+f)),a)}var d=t[n],h=i,v=o;for(r(t,i,n),a(t[o],d)>0&&r(t,i,o);h<v;){for(r(t,h,v),h++,v--;a(t[h],d)<0;)h++;for(;a(t[v],d)>0;)v--}0===a(t[i],d)?r(t,i,v):r(t,++v,o),v<=n&&(i=v+1),n<=v&&(o=v-1)}}function r(e,r,t){var n=e[r];e[r]=e[t],e[t]=n}function t(e,r){return e<r?-1:e>r?1:0}return function(r,n,i,o,a){e(r,n,i||0,o||r.length-1,a||t)}},void 0!==(o=i())&&(n.exports=o);var u=a.exports}}]);
//# sourceMappingURL=7504.cdcd891f.chunk.js.map