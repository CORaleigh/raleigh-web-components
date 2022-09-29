"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[6700],{53478:function(e,t,i){i.d(t,{_:function(){return V}});var r=i(74165),n=i(15861),s=i(1413),a=i(15671),u=i(43144),o=i(60136),l=i(29388),c=i(23132),h=i(83822),p=i(80175),d=i(97033),y=i(75610),f=i(36551),g=i(79054),v=i(72763),b=i(58687),m=i(34860),k=i(84452),w=i(90935),I=i(45414),V=function(e){(0,o.Z)(i,e);var t=(0,l.Z)(i);function i(e){var r;return(0,a.Z)(this,i),(r=t.call(this,e)).type="graphics-3d",r.graphicsCore=null,r.elevationAlignment=new w.l,r.drapeSourceType=b.e.Features,r._suspendResumeExtent=null,r}return(0,u.Z)(i,[{key:"normalizeCtorArgs",value:function(e){var t=(0,s.Z)((0,s.Z)({},e),{},{scaleVisibility:null,frustumVisibility:null});return delete t.scaleVisibilityEnabled,delete t.frustumVisibilityEnabled,e.scaleVisibilityEnabled&&(t.scaleVisibility=new k.b),e.frustumVisibilityEnabled&&(t.frustumVisibility=new w.d),t}},{key:"initialize",value:function(){var e=this,t=new k.j({owner:this,layer:this.owner.layer,preferredUpdatePolicy:I.o.SYNC,graphicSymbolSupported:!0});this._set("graphicsCore",t);var i=this.layer,r=this.scaleVisibility;if((0,y.r)(r)&&"effectiveScaleRange"in i){var n=i;this.updatingHandles.add((function(){return n.effectiveScaleRange}),(function(){return r.layerMinMaxScaleChangeHandler()}))}if("fullOpacity"in this.owner){var s=this.owner;this.updatingHandles.add((function(){return s.fullOpacity}),(function(){return e.graphicsCore.opacityChange()}))}if("elevationInfo"in i){var a=i;this.updatingHandles.add((function(){return a.elevationInfo}),(function(t,i){(0,g.m)(t,i)&&e.updatingHandles.addPromise(e.graphicsCore.elevationInfoChange())}))}}},{key:"setup",value:function(){var e=(0,n.Z)((0,r.Z)().mark((function e(){var t,i,n=this;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=function(e,t,i){return n.graphicsCore.spatialIndex.queryGraphicUIDsInExtent(e,t,i)},this.elevationAlignment.setup(this,t,this.graphicsCore,this.view.elevationProvider),(0,y.r)(this.scaleVisibility)&&"effectiveScaleRange"in this.layer&&(i=this.owner.view.basemapTerrain,this.scaleVisibility.setup(this,this.layer,t,this.graphicsCore,i)),(0,y.r)(this.frustumVisibility)&&this.frustumVisibility.setup(this),this._set("objectStates",new w.s(this.graphicsCore)),e.prev=3,e.next=6,this.graphicsCore.setup({elevationAlignment:this.elevationAlignment,scaleVisibility:this.scaleVisibility,objectStates:this.objectStates});case 6:e.next=13;break;case 8:if(e.prev=8,e.t0=e.catch(3),!(0,c.u)(e.t0)){e.next=12;break}return e.abrupt("return");case 12:throw e.t0;case 13:this.destroyed||(this.handles.add((0,f.l)((function(){return n.view.clippingArea}),(function(){return n._updateClippingExtent()}),f.U)),this._updateClippingExtent(),this._setupSuspendResumeExtent(),this.graphicsCore.startCreateGraphics());case 14:case"end":return e.stop()}}),e,this,[[3,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"destroy",value:function(){this.handles.removeAll(),this.updatingHandles.removeAll(),this._set("elevationAlignment",(0,y.l)(this.elevationAlignment)),this._set("scaleVisibility",(0,y.l)(this.scaleVisibility)),this._set("frustumVisibility",(0,y.l)(this.frustumVisibility)),this._set("objectStates",(0,y.l)(this.objectStates)),this._set("graphicsCore",(0,y.l)(this.graphicsCore))}},{key:"layer",get:function(){return this.owner.layer}},{key:"view",get:function(){return this.owner.view}},{key:"scaleVisibilitySuspended",get:function(){return!(!(0,y.r)(this.scaleVisibility)||!this.scaleVisibility.suspended)}},{key:"frustumVisibilitySuspended",get:function(){return!(!(0,y.r)(this.frustumVisibility)||!this.frustumVisibility.suspended)}},{key:"suspended",get:function(){var e;return null!==(e=this.owner.suspended)&&void 0!==e&&e}},{key:"updating",get:function(){var e;return!!(null!==(e=this.graphicsCore)&&void 0!==e&&e.updating||(0,y.r)(this.scaleVisibility)&&this.scaleVisibility.updating||(0,y.r)(this.frustumVisibility)&&this.frustumVisibility.updating||this.updatingHandles.updating)}},{key:"graphics3DGraphics",get:function(){var e;return null===(e=this.graphicsCore)||void 0===e?void 0:e.graphics3DGraphics}},{key:"graphics3DGraphicsByObjectID",get:function(){var e;return null===(e=this.graphicsCore)||void 0===e?void 0:e.graphics3DGraphicsByObjectID}},{key:"loadedGraphics",get:function(){return this.owner.loadedGraphics}},{key:"fullOpacity",get:function(){var e;return null!==(e=this.owner.fullOpacity)&&void 0!==e?e:1}},{key:"slicePlaneEnabled",get:function(){return this.owner.slicePlaneEnabled}},{key:"updatePolicy",get:function(){return this.owner.updatePolicy}},{key:"notifyGraphicGeometryChanged",value:function(e){this.graphicsCore.notifyGraphicGeometryChanged(e)}},{key:"notifyGraphicVisibilityChanged",value:function(e){this.graphicsCore.notifyGraphicVisibilityChanged(e)}},{key:"getRenderingInfo",value:function(e,t,i){var r=(0,b.a)(e,{renderer:t,arcade:i});if((0,y.r)(r)&&r.color){var n=r.color;n[0]=n[0]/255,n[1]=n[1]/255,n[2]=n[2]/255}return r}},{key:"getRenderingInfoAsync",value:function(e,t,i,r){return(0,b.s)(e,(0,s.Z)({renderer:t,arcade:i},r))}},{key:"getHit",value:function(e){if(this.owner.loadedGraphics){var t=this.owner.loadedGraphics.find((function(t){return t.uid===e}));if(t){var i=this.layer instanceof v.b?this.layer:null,r=(0,b.c)(t,i);return{type:"graphic",graphic:r,layer:r.layer}}}return null}},{key:"whenGraphicBounds",value:function(e,t){return this.graphicsCore?this.graphicsCore.whenGraphicBounds(e,t):Promise.reject()}},{key:"computeAttachmentOrigin",value:function(e,t){return this.graphicsCore?this.graphicsCore.computeAttachmentOrigin(e,t):null}},{key:"getSymbolLayerSize",value:function(e,t){return this.graphicsCore?this.graphicsCore.getSymbolLayerSize(e,t):null}},{key:"maskOccludee",value:function(e){var t=this.objectStates.acquireSet(I.u.MaskOccludee,null),i=t.set,r=t.handle;return this.objectStates.setUid(i,e.uid),r}},{key:"highlight",value:function(e){if(e instanceof m.b)return C;if("number"==typeof e)return this.highlight([e]);if(e instanceof h.g)return this.highlight([e]);if(e instanceof p.j&&(e=e.toArray()),Array.isArray(e)&&e.length>0){if(e[0]instanceof h.g){var t=e.map((function(e){return e.uid})),i=this.objectStates.acquireSet(I.u.Highlight,null),r=i.set,n=i.handle;return this.objectStates.setUids(r,t),n}if("number"==typeof e[0]){var s=e,a=this.objectStates.acquireSet(I.u.Highlight,null),u=a.set,o=a.handle;return this.objectStates.setObjectIds(u,s),o}}return C}},{key:"_setupSuspendResumeExtent",value:function(){var e=this,t=this.scaleVisibility,i=this.frustumVisibility;if(!(0,y.t)(t)||!(0,y.t)(i)){this.handles.add((0,f.l)((function(){var t,i;return{computedExtent:null===(t=e.graphicsCore)||void 0===t?void 0:t.computedExtent,extentPadding:null===(i=e.graphicsCore)||void 0===i?void 0:i.extentPadding}}),(function(r){return function(r){var n=r.computedExtent,s=r.extentPadding;e._suspendResumeExtent=(0,b.k)(n,e._suspendResumeExtent,b.r,s),(0,y.r)(t)&&t.setExtent(e._suspendResumeExtent),(0,y.r)(i)&&i.setExtent(e._suspendResumeExtent)}(r)}),f.w))}}},{key:"_updateClippingExtent",value:function(){var e=this.view.clippingArea;this.graphicsCore.setClippingExtent(e,this.view.spatialReference)&&this.graphicsCore.recreateAllGraphics()}}]),i}(d.d);(0,c.e)([(0,c.d)()],V.prototype,"type",void 0),(0,c.e)([(0,c.d)({constructOnly:!0})],V.prototype,"owner",void 0),(0,c.e)([(0,c.d)()],V.prototype,"layer",null),(0,c.e)([(0,c.d)()],V.prototype,"view",null),(0,c.e)([(0,c.d)({constructOnly:!0})],V.prototype,"graphicsCore",void 0),(0,c.e)([(0,c.d)({constructOnly:!0})],V.prototype,"scaleVisibility",void 0),(0,c.e)([(0,c.d)({constructOnly:!0})],V.prototype,"frustumVisibility",void 0),(0,c.e)([(0,c.d)({readOnly:!0})],V.prototype,"elevationAlignment",void 0),(0,c.e)([(0,c.d)({readOnly:!0})],V.prototype,"objectStates",void 0),(0,c.e)([(0,c.d)({readOnly:!0})],V.prototype,"scaleVisibilitySuspended",null),(0,c.e)([(0,c.d)({readOnly:!0})],V.prototype,"frustumVisibilitySuspended",null),(0,c.e)([(0,c.d)()],V.prototype,"suspended",null),(0,c.e)([(0,c.d)({readOnly:!0})],V.prototype,"updating",null),(0,c.e)([(0,c.d)()],V.prototype,"loadedGraphics",null),(0,c.e)([(0,c.d)()],V.prototype,"fullOpacity",null),(0,c.e)([(0,c.d)()],V.prototype,"slicePlaneEnabled",null),(0,c.e)([(0,c.d)()],V.prototype,"drapeSourceType",void 0),(0,c.e)([(0,c.d)()],V.prototype,"updatePolicy",null),V=(0,c.e)([(0,c.n)("esri.views.3d.layers.graphics.GraphicsProcessor")],V);var C=(0,c.g)()},3426:function(e,t,i){i.d(t,{t:function(){return l}});var r=i(43144),n=i(15671),s=i(60136),a=i(29388),u=i(23132),o=i(77196),l=(i(75610),function(e){var t=function(e){(0,s.Z)(i,e);var t=(0,a.Z)(i);function i(){var e;return(0,n.Z)(this,i),(e=t.apply(this,arguments)).graphics=null,e.renderer=null,e}return(0,r.Z)(i)}((0,o.s)(e));return(0,u.e)([(0,u.d)()],t.prototype,"graphics",void 0),(0,u.e)([(0,u.d)()],t.prototype,"renderer",void 0),(0,u.e)([(0,u.d)()],t.prototype,"updating",void 0),(0,u.e)([(0,u.d)()],t.prototype,"view",void 0),t=(0,u.e)([(0,u.n)("esri.views.layers.GraphicsView")],t)})},76700:function(e,t,i){i.r(t);var r=i(74165),n=i(15861),s=i(15671),a=i(43144),u=i(60136),o=i(29388),l=i(23132),c=i(77196),h=i(75610),p=i(53478),d=i(3426),y=(i(21583),i(83822),i(91204),i(80262),i(30709),i(70441),i(36460),i(57714),i(51451),i(80175),i(50526),i(50448),i(41742),i(43920),i(1773),i(24980),i(3114),i(22144),i(78674),i(66307),i(2760),i(88370),i(72820),i(78311),i(96349),i(9055),i(79611),i(2157),i(30604),i(97033),i(77470),i(36551),i(79054),i(72763),i(58687),i(10815),i(55269),i(84538),i(49580),i(54841),i(33703),i(92870),i(6794),i(81663),i(83996),i(44455),i(63022),i(61340),i(69953),i(97627),i(38304),i(96401),i(71573),i(57952),i(58394),i(44344),i(48561),i(84192),i(3969),i(55806),i(47672),i(64296),i(14432),i(6243),i(37783),i(74021),i(56864),i(64004),i(40273),i(72692),i(77389),i(32568),i(69202),i(27597),i(1241),i(67417),i(15181),i(33642),i(28999),i(15612),i(43124),i(69797),i(34860),i(36638),i(10590),i(19948),i(96636),i(30664),i(83024),i(47626),i(25316),i(407),i(67154),i(29709),i(47642),i(18411),i(43782),i(33976),i(28210),i(17436),i(53373),i(94872),i(79042),i(61495),i(16485),i(92029),i(74575),i(9575),i(53249),i(28681),i(38929),i(97866),i(68890),i(31513),i(25838),i(54539),i(19967),i(50338),i(28623),i(10312),i(95254),i(61099),i(12158),i(93874),i(62446),i(27264),i(50905),i(78945),i(55827),i(70516),i(25279),i(22268),i(40452),i(60424),i(22225),i(38425),i(42471),i(78470),i(1665),i(38843),i(24892),i(48889),i(30150),i(53647),i(14181),i(86270),i(87833),i(21523),i(71710),i(45332),i(83059),i(4720),i(91309),i(25715),i(83262),i(2822),i(61349),i(32990),i(6819),i(52376),i(45414),i(94867),i(97566),i(90138),i(50982),i(21165),i(21984),i(48373),i(61473),i(14946),i(44365),i(90584),i(86148),i(60912),i(98907),i(66156),i(10534),i(25459),i(78556),i(77787),i(85511),i(87603),i(22051),i(21924),i(46123),i(75777),i(76071),i(42446),i(59819),i(64571),i(84452),i(63662),i(86068),i(75370),i(62268),i(18392),i(90935),function(e){(0,u.Z)(i,e);var t=(0,o.Z)(i);function i(e){var r;return(0,s.Z)(this,i),(r=t.call(this,e)).processor=null,r.slicePlaneEnabled=!1,r.layer=new f,r}return(0,a.Z)(i,[{key:"initialize",value:function(){this._set("processor",new p._({owner:this})),this.processor.setup()}},{key:"destroy",value:function(){this._set("processor",(0,h.l)(this.processor))}},{key:"graphics",get:function(){return this.view.graphics}},{key:"loadedGraphics",get:function(){return this.graphics}},{key:"updating",get:function(){var e;return!(null===(e=this.processor)||void 0===e||!e.updating)}},{key:"symbolUpdateType",get:function(){return this.processor.graphicsCore.symbolUpdateType}},{key:"getHit",value:function(e){return this.processor.getHit(e)}},{key:"whenGraphicBounds",value:function(e,t){return this.processor.whenGraphicBounds(e,t)}},{key:"graphicChanged",value:function(e){this.processor.graphicsCore.graphicUpdateHandler(e)}},{key:"updatePolicy",get:function(){return this.processor.graphicsCore.effectiveUpdatePolicy}},{key:"queryGraphics",value:function(){var e=(0,n.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.loadedGraphics);case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchPopupFeatures",value:function(){var e=(0,n.Z)((0,r.Z)().mark((function e(t,i){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,h.r)(i)?i.clientGraphics:null);case 1:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"highlight",value:function(e){return this.processor.highlight(e)}},{key:"maskOccludee",value:function(e){return this.processor.maskOccludee(e)}}]),i}((0,d.t)(l.y)));(0,l.e)([(0,l.d)({readOnly:!0})],y.prototype,"graphics",null),(0,l.e)([(0,l.d)()],y.prototype,"loadedGraphics",null),(0,l.e)([(0,l.d)({readOnly:!0})],y.prototype,"updating",null),(0,l.e)([(0,l.d)({constructOnly:!0})],y.prototype,"view",void 0),(0,l.e)([(0,l.d)()],y.prototype,"processor",void 0),(0,l.e)([(0,l.d)({type:Boolean})],y.prototype,"slicePlaneEnabled",void 0),(0,l.e)([(0,l.d)()],y.prototype,"layer",void 0),y=(0,l.e)([(0,l.n)("esri.views.3d.layers.GraphicsView3D")],y);var f=function(e){(0,u.Z)(i,e);var t=(0,o.Z)(i);function i(){var e;return(0,s.Z)(this,i),(e=t.call(this)).type="graphics-view-3d-dummy",e.id=e.uid,e}return(0,a.Z)(i)}(c.o),g=y;t.default=g},75370:function(e,t,i){i.d(t,{e:function(){return a}});var r=i(37762),n=i(75610);function s(e,t){return e?t?4:3:t?3:2}function a(e,t,i,a,l){if((0,n.t)(t)||!t.lengths.length)return null;var c="upperLeft"===(null===l||void 0===l?void 0:l.originPosition)?-1:1;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);var h,p=e.coords,d=[],y=i?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],f=t.lengths,g=t.coords,v=s(i,a),b=0,m=(0,r.Z)(f);try{for(m.s();!(h=m.n()).done;){var k=h.value,w=u(y,g,b,k,i,a,c);w&&d.push(w),b+=k*v}}catch(C){m.e(C)}finally{m.f()}if(d.sort((function(e,t){var r=c*e[2]-c*t[2];return 0===r&&i&&(r=e[4]-t[4]),r})),d.length){var I=6*d[0][2];p[0]=d[0][0]/I,p[1]=d[0][1]/I,i&&(I=6*d[0][4],p[2]=0!==I?d[0][3]/I:0),(p[0]<y[0]||p[0]>y[1]||p[1]<y[2]||p[1]>y[3]||i&&(p[2]<y[4]||p[2]>y[5]))&&(p.length=0)}if(!p.length){var V=t.lengths[0]?o(g,0,f[0],i,a):null;if(!V)return null;p[0]=V[0],p[1]=V[1],i&&V.length>2&&(p[2]=V[2])}return e}function u(e,t,i,r,n,a){for(var u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1,o=s(n,a),l=i,c=i+o,h=0,p=0,d=0,y=0,f=0,g=0,v=r-1;g<v;g++,l+=o,c+=o){var b=t[l],m=t[l+1],k=t[l+2],w=t[c],I=t[c+1],V=t[c+2],C=b*I-w*m;y+=C,h+=(b+w)*C,p+=(m+I)*C,n&&(d+=(k+V)*(C=b*V-w*k),f+=C),b<e[0]&&(e[0]=b),b>e[1]&&(e[1]=b),m<e[2]&&(e[2]=m),m>e[3]&&(e[3]=m),n&&(k<e[4]&&(e[4]=k),k>e[5]&&(e[5]=k))}if(y*u>0&&(y*=-1),f*u>0&&(f*=-1),!y)return null;var E=[h,p,.5*y];return n&&(E[3]=d,E[4]=.5*f),E}function o(e,t,i,r,n){for(var a=s(r,n),u=t,o=t+a,d=0,y=0,f=0,g=0,v=0,b=i-1;v<b;v++,u+=a,o+=a){var m=e[u],k=e[u+1],w=e[u+2],I=e[o],V=e[o+1],C=e[o+2],E=r?c(m,k,w,I,V,C):l(m,k,I,V);if(E)if(d+=E,r){var S=p(m,k,w,I,V,C);y+=E*S[0],f+=E*S[1],g+=E*S[2]}else{var N=h(m,k,I,V);y+=E*N[0],f+=E*N[1]}}return d>0?r?[y/d,f/d,g/d]:[y/d,f/d]:i>0?r?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function l(e,t,i,r){var n=i-e,s=r-t;return Math.sqrt(n*n+s*s)}function c(e,t,i,r,n,s){var a=r-e,u=n-t,o=s-i;return Math.sqrt(a*a+u*u+o*o)}function h(e,t,i,r){return[e+.5*(i-e),t+.5*(r-t)]}function p(e,t,i,r,n,s){return[e+.5*(r-e),t+.5*(n-t),i+.5*(s-i)]}},18392:function(e,t,i){i.d(t,{a:function(){return u}});var r,n,s,a={exports:{}};r=a,n=function(){function e(i,r,n,s,a){for(;s>n;){if(s-n>600){var u=s-n+1,o=r-n+1,l=Math.log(u),c=.5*Math.exp(2*l/3),h=.5*Math.sqrt(l*c*(u-c)/u)*(o-u/2<0?-1:1);e(i,r,Math.max(n,Math.floor(r-o*c/u+h)),Math.min(s,Math.floor(r+(u-o)*c/u+h)),a)}var p=i[r],d=n,y=s;for(t(i,n,r),a(i[s],p)>0&&t(i,n,s);d<y;){for(t(i,d,y),d++,y--;a(i[d],p)<0;)d++;for(;a(i[y],p)>0;)y--}0===a(i[n],p)?t(i,n,y):t(i,++y,s),y<=r&&(n=y+1),r<=y&&(s=y-1)}}function t(e,t,i){var r=e[t];e[t]=e[i],e[i]=r}function i(e,t){return e<t?-1:e>t?1:0}return function(t,r,n,s,a){e(t,r,n||0,s||t.length-1,a||i)}},void 0!==(s=n())&&(r.exports=s);var u=a.exports}}]);
//# sourceMappingURL=6700.151b1fce.chunk.js.map