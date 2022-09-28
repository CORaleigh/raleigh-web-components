"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[429],{69628:function(e,t,i){i.d(t,{_:function(){return w}});var r=i(74165),n=i(15861),s=i(1413),a=i(15671),u=i(43144),o=i(60136),l=i(29388),c=i(50165),p=i(89031),h=i(40133),d=i(22984),y=i(73627),f=i(89354),g=i(28003),v=i(35691),b=i(53089),m=i(28360),I=i(97457),k=i(24695),w=function(e){(0,o.Z)(i,e);var t=(0,l.Z)(i);function i(e){var r;return(0,a.Z)(this,i),(r=t.call(this,e)).type="graphics-3d",r.graphicsCore=null,r.elevationAlignment=new I.l,r.drapeSourceType=v.e.Features,r._suspendResumeExtent=null,r}return(0,u.Z)(i,[{key:"normalizeCtorArgs",value:function(e){var t=(0,s.Z)((0,s.Z)({},e),{},{scaleVisibility:null,frustumVisibility:null});return delete t.scaleVisibilityEnabled,delete t.frustumVisibilityEnabled,e.scaleVisibilityEnabled&&(t.scaleVisibility=new m.b),e.frustumVisibilityEnabled&&(t.frustumVisibility=new I.d),t}},{key:"initialize",value:function(){var e=this,t=new m.j({owner:this,layer:this.owner.layer,preferredUpdatePolicy:k.o.SYNC,graphicSymbolSupported:!0});this._set("graphicsCore",t);var i=this.layer,r=this.scaleVisibility;if((0,c.r)(r)&&"effectiveScaleRange"in i){var n=i;this.updatingHandles.add((function(){return n.effectiveScaleRange}),(function(){return r.layerMinMaxScaleChangeHandler()}))}if("fullOpacity"in this.owner){var s=this.owner;this.updatingHandles.add((function(){return s.fullOpacity}),(function(){return e.graphicsCore.opacityChange()}))}if("elevationInfo"in i){var a=i;this.updatingHandles.add((function(){return a.elevationInfo}),(function(t,i){(0,f.m)(t,i)&&e.updatingHandles.addPromise(e.graphicsCore.elevationInfoChange())}))}}},{key:"setup",value:function(){var e=(0,n.Z)((0,r.Z)().mark((function e(){var t,i,n=this;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=function(e,t,i){return n.graphicsCore.spatialIndex.queryGraphicUIDsInExtent(e,t,i)},this.elevationAlignment.setup(this,t,this.graphicsCore,this.view.elevationProvider),(0,c.r)(this.scaleVisibility)&&"effectiveScaleRange"in this.layer&&(i=this.owner.view.basemapTerrain,this.scaleVisibility.setup(this,this.layer,t,this.graphicsCore,i)),(0,c.r)(this.frustumVisibility)&&this.frustumVisibility.setup(this),this._set("objectStates",new I.s(this.graphicsCore)),e.prev=3,e.next=6,this.graphicsCore.setup({elevationAlignment:this.elevationAlignment,scaleVisibility:this.scaleVisibility,objectStates:this.objectStates});case 6:e.next=13;break;case 8:if(e.prev=8,e.t0=e.catch(3),!(0,c.I)(e.t0)){e.next=12;break}return e.abrupt("return");case 12:throw e.t0;case 13:this.destroyed||(this.handles.add((0,y.l)((function(){return n.view.clippingArea}),(function(){return n._updateClippingExtent()}),y.U)),this._updateClippingExtent(),this._setupSuspendResumeExtent(),this.graphicsCore.startCreateGraphics());case 14:case"end":return e.stop()}}),e,this,[[3,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"destroy",value:function(){this.handles.removeAll(),this.updatingHandles.removeAll(),this._set("elevationAlignment",(0,c.G)(this.elevationAlignment)),this._set("scaleVisibility",(0,c.G)(this.scaleVisibility)),this._set("frustumVisibility",(0,c.G)(this.frustumVisibility)),this._set("objectStates",(0,c.G)(this.objectStates)),this._set("graphicsCore",(0,c.G)(this.graphicsCore))}},{key:"layer",get:function(){return this.owner.layer}},{key:"view",get:function(){return this.owner.view}},{key:"scaleVisibilitySuspended",get:function(){return!(!(0,c.r)(this.scaleVisibility)||!this.scaleVisibility.suspended)}},{key:"frustumVisibilitySuspended",get:function(){return!(!(0,c.r)(this.frustumVisibility)||!this.frustumVisibility.suspended)}},{key:"suspended",get:function(){var e;return null!==(e=this.owner.suspended)&&void 0!==e&&e}},{key:"updating",get:function(){var e;return!!(null!==(e=this.graphicsCore)&&void 0!==e&&e.updating||(0,c.r)(this.scaleVisibility)&&this.scaleVisibility.updating||(0,c.r)(this.frustumVisibility)&&this.frustumVisibility.updating||this.updatingHandles.updating)}},{key:"graphics3DGraphics",get:function(){var e;return null===(e=this.graphicsCore)||void 0===e?void 0:e.graphics3DGraphics}},{key:"graphics3DGraphicsByObjectID",get:function(){var e;return null===(e=this.graphicsCore)||void 0===e?void 0:e.graphics3DGraphicsByObjectID}},{key:"loadedGraphics",get:function(){return this.owner.loadedGraphics}},{key:"fullOpacity",get:function(){var e;return null!==(e=this.owner.fullOpacity)&&void 0!==e?e:1}},{key:"slicePlaneEnabled",get:function(){return this.owner.slicePlaneEnabled}},{key:"updatePolicy",get:function(){return this.owner.updatePolicy}},{key:"notifyGraphicGeometryChanged",value:function(e){this.graphicsCore.notifyGraphicGeometryChanged(e)}},{key:"notifyGraphicVisibilityChanged",value:function(e){this.graphicsCore.notifyGraphicVisibilityChanged(e)}},{key:"getRenderingInfo",value:function(e,t,i){var r=(0,v.a)(e,{renderer:t,arcade:i});if((0,c.r)(r)&&r.color){var n=r.color;n[0]=n[0]/255,n[1]=n[1]/255,n[2]=n[2]/255}return r}},{key:"getRenderingInfoAsync",value:function(e,t,i,r){return(0,v.s)(e,(0,s.Z)({renderer:t,arcade:i},r))}},{key:"getHit",value:function(e){if(this.owner.loadedGraphics){var t=this.owner.loadedGraphics.find((function(t){return t.uid===e}));if(t){var i=this.layer instanceof g.b?this.layer:null,r=(0,v.c)(t,i);return{type:"graphic",graphic:r,layer:r.layer}}}return null}},{key:"whenGraphicBounds",value:function(e,t){return this.graphicsCore?this.graphicsCore.whenGraphicBounds(e,t):Promise.reject()}},{key:"computeAttachmentOrigin",value:function(e,t){return this.graphicsCore?this.graphicsCore.computeAttachmentOrigin(e,t):null}},{key:"getSymbolLayerSize",value:function(e,t){return this.graphicsCore?this.graphicsCore.getSymbolLayerSize(e,t):null}},{key:"maskOccludee",value:function(e){var t=this.objectStates.acquireSet(k.u.MaskOccludee,null),i=t.set,r=t.handle;return this.objectStates.setUid(i,e.uid),r}},{key:"highlight",value:function(e){if(e instanceof b.b)return V;if("number"==typeof e)return this.highlight([e]);if(e instanceof p.g)return this.highlight([e]);if(e instanceof h.j&&(e=e.toArray()),Array.isArray(e)&&e.length>0){if(e[0]instanceof p.g){var t=e.map((function(e){return e.uid})),i=this.objectStates.acquireSet(k.u.Highlight,null),r=i.set,n=i.handle;return this.objectStates.setUids(r,t),n}if("number"==typeof e[0]){var s=e,a=this.objectStates.acquireSet(k.u.Highlight,null),u=a.set,o=a.handle;return this.objectStates.setObjectIds(u,s),o}}return V}},{key:"_setupSuspendResumeExtent",value:function(){var e=this,t=this.scaleVisibility,i=this.frustumVisibility;if(!(0,c.t)(t)||!(0,c.t)(i)){this.handles.add((0,y.l)((function(){var t,i;return{computedExtent:null===(t=e.graphicsCore)||void 0===t?void 0:t.computedExtent,extentPadding:null===(i=e.graphicsCore)||void 0===i?void 0:i.extentPadding}}),(function(r){return function(r){var n=r.computedExtent,s=r.extentPadding;e._suspendResumeExtent=(0,v.k)(n,e._suspendResumeExtent,v.r,s),(0,c.r)(t)&&t.setExtent(e._suspendResumeExtent),(0,c.r)(i)&&i.setExtent(e._suspendResumeExtent)}(r)}),y.w))}}},{key:"_updateClippingExtent",value:function(){var e=this.view.clippingArea;this.graphicsCore.setClippingExtent(e,this.view.spatialReference)&&this.graphicsCore.recreateAllGraphics()}}]),i}(d.d);(0,c.e)([(0,c.d)()],w.prototype,"type",void 0),(0,c.e)([(0,c.d)({constructOnly:!0})],w.prototype,"owner",void 0),(0,c.e)([(0,c.d)()],w.prototype,"layer",null),(0,c.e)([(0,c.d)()],w.prototype,"view",null),(0,c.e)([(0,c.d)({constructOnly:!0})],w.prototype,"graphicsCore",void 0),(0,c.e)([(0,c.d)({constructOnly:!0})],w.prototype,"scaleVisibility",void 0),(0,c.e)([(0,c.d)({constructOnly:!0})],w.prototype,"frustumVisibility",void 0),(0,c.e)([(0,c.d)({readOnly:!0})],w.prototype,"elevationAlignment",void 0),(0,c.e)([(0,c.d)({readOnly:!0})],w.prototype,"objectStates",void 0),(0,c.e)([(0,c.d)({readOnly:!0})],w.prototype,"scaleVisibilitySuspended",null),(0,c.e)([(0,c.d)({readOnly:!0})],w.prototype,"frustumVisibilitySuspended",null),(0,c.e)([(0,c.d)()],w.prototype,"suspended",null),(0,c.e)([(0,c.d)({readOnly:!0})],w.prototype,"updating",null),(0,c.e)([(0,c.d)()],w.prototype,"loadedGraphics",null),(0,c.e)([(0,c.d)()],w.prototype,"fullOpacity",null),(0,c.e)([(0,c.d)()],w.prototype,"slicePlaneEnabled",null),(0,c.e)([(0,c.d)()],w.prototype,"drapeSourceType",void 0),(0,c.e)([(0,c.d)()],w.prototype,"updatePolicy",null),w=(0,c.e)([(0,c.n)("esri.views.3d.layers.graphics.GraphicsProcessor")],w);var V=(0,c.p)()},49862:function(e,t,i){i.d(t,{t:function(){return l}});var r=i(43144),n=i(15671),s=i(60136),a=i(29388),u=i(50165),o=i(17493),l=function(e){var t=function(e){(0,s.Z)(i,e);var t=(0,a.Z)(i);function i(){var e;return(0,n.Z)(this,i),(e=t.apply(this,arguments)).graphics=null,e.renderer=null,e}return(0,r.Z)(i)}((0,o.s)(e));return(0,u.e)([(0,u.d)()],t.prototype,"graphics",void 0),(0,u.e)([(0,u.d)()],t.prototype,"renderer",void 0),(0,u.e)([(0,u.d)()],t.prototype,"updating",void 0),(0,u.e)([(0,u.d)()],t.prototype,"view",void 0),t=(0,u.e)([(0,u.n)("esri.views.layers.GraphicsView")],t)}},90429:function(e,t,i){i.r(t);var r=i(74165),n=i(15861),s=i(15671),a=i(43144),u=i(60136),o=i(29388),l=i(50165),c=i(17493),p=i(69628),h=i(49862),d=(i(89031),i(33530),i(96263),i(77322),i(32335),i(31278),i(13994),i(98496),i(40133),i(4483),i(79747),i(42),i(52155),i(75662),i(62980),i(16377),i(9887),i(88406),i(66307),i(2760),i(42488),i(9330),i(79146),i(3029),i(42687),i(78330),i(78697),i(78664),i(22984),i(69738),i(73627),i(89354),i(28003),i(35691),i(83745),i(55269),i(73393),i(87110),i(72577),i(61772),i(92870),i(26079),i(49796),i(42094),i(85966),i(73428),i(98643),i(61340),i(76375),i(44217),i(5233),i(96401),i(71573),i(57952),i(15820),i(40438),i(48561),i(84192),i(3969),i(64747),i(47672),i(12317),i(20838),i(6243),i(37783),i(74021),i(56864),i(66339),i(68634),i(15508),i(17691),i(86931),i(51613),i(80392),i(10489),i(62298),i(2815),i(2326),i(90339),i(82046),i(49961),i(31412),i(53089),i(83172),i(66270),i(60418),i(84539),i(75366),i(36235),i(57439),i(59075),i(97823),i(49350),i(16897),i(47642),i(63334),i(38419),i(84231),i(38665),i(32717),i(39853),i(94872),i(43895),i(30594),i(73267),i(22628),i(24982),i(46584),i(7093),i(58428),i(8049),i(80933),i(40858),i(95076),i(56389),i(86738),i(69205),i(50338),i(33074),i(31134),i(41524),i(68668),i(55916),i(66319),i(24781),i(2329),i(37243),i(97345),i(39001),i(84913),i(84823),i(9411),i(14826),i(64620),i(22225),i(75272),i(4197),i(86905),i(64997),i(26208),i(2816),i(46237),i(98428),i(5792),i(67871),i(75097),i(87833),i(21523),i(99057),i(26995),i(13445),i(57405),i(92694),i(25715),i(83262),i(7225),i(21286),i(47901),i(6819),i(12989),i(24695),i(94867),i(47692),i(48968),i(92820),i(76821),i(21984),i(61377),i(64591),i(14023),i(44365),i(50463),i(27670),i(75105),i(49734),i(66156),i(62469),i(85490),i(77576),i(38969),i(8369),i(21277),i(80581),i(34095),i(85245),i(75777),i(68792),i(99797),i(49510),i(71871),i(28360),i(8180),i(43750),i(13089),i(55985),i(18392),i(97457),function(e){(0,u.Z)(i,e);var t=(0,o.Z)(i);function i(e){var r;return(0,s.Z)(this,i),(r=t.call(this,e)).processor=null,r.slicePlaneEnabled=!1,r.layer=new y,r}return(0,a.Z)(i,[{key:"initialize",value:function(){this._set("processor",new p._({owner:this})),this.processor.setup()}},{key:"destroy",value:function(){this._set("processor",(0,l.G)(this.processor))}},{key:"graphics",get:function(){return this.view.graphics}},{key:"loadedGraphics",get:function(){return this.graphics}},{key:"updating",get:function(){var e;return!(null===(e=this.processor)||void 0===e||!e.updating)}},{key:"symbolUpdateType",get:function(){return this.processor.graphicsCore.symbolUpdateType}},{key:"getHit",value:function(e){return this.processor.getHit(e)}},{key:"whenGraphicBounds",value:function(e,t){return this.processor.whenGraphicBounds(e,t)}},{key:"graphicChanged",value:function(e){this.processor.graphicsCore.graphicUpdateHandler(e)}},{key:"updatePolicy",get:function(){return this.processor.graphicsCore.effectiveUpdatePolicy}},{key:"queryGraphics",value:function(){var e=(0,n.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.loadedGraphics);case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchPopupFeatures",value:function(){var e=(0,n.Z)((0,r.Z)().mark((function e(t,i){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.r)(i)?i.clientGraphics:null);case 1:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"highlight",value:function(e){return this.processor.highlight(e)}},{key:"maskOccludee",value:function(e){return this.processor.maskOccludee(e)}}]),i}((0,h.t)(l.y)));(0,l.e)([(0,l.d)({readOnly:!0})],d.prototype,"graphics",null),(0,l.e)([(0,l.d)()],d.prototype,"loadedGraphics",null),(0,l.e)([(0,l.d)({readOnly:!0})],d.prototype,"updating",null),(0,l.e)([(0,l.d)({constructOnly:!0})],d.prototype,"view",void 0),(0,l.e)([(0,l.d)()],d.prototype,"processor",void 0),(0,l.e)([(0,l.d)({type:Boolean})],d.prototype,"slicePlaneEnabled",void 0),(0,l.e)([(0,l.d)()],d.prototype,"layer",void 0),d=(0,l.e)([(0,l.n)("esri.views.3d.layers.GraphicsView3D")],d);var y=function(e){(0,u.Z)(i,e);var t=(0,o.Z)(i);function i(){var e;return(0,s.Z)(this,i),(e=t.call(this)).type="graphics-view-3d-dummy",e.id=e.uid,e}return(0,a.Z)(i)}(c.o),f=d;t.default=f},13089:function(e,t,i){i.d(t,{e:function(){return a}});var r=i(37762),n=i(50165);function s(e,t){return e?t?4:3:t?3:2}function a(e,t,i,a,l){if((0,n.t)(t)||!t.lengths.length)return null;var c="upperLeft"===(null===l||void 0===l?void 0:l.originPosition)?-1:1;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);var p,h=e.coords,d=[],y=i?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],f=t.lengths,g=t.coords,v=s(i,a),b=0,m=(0,r.Z)(f);try{for(m.s();!(p=m.n()).done;){var I=p.value,k=u(y,g,b,I,i,a,c);k&&d.push(k),b+=I*v}}catch(C){m.e(C)}finally{m.f()}if(d.sort((function(e,t){var r=c*e[2]-c*t[2];return 0===r&&i&&(r=e[4]-t[4]),r})),d.length){var w=6*d[0][2];h[0]=d[0][0]/w,h[1]=d[0][1]/w,i&&(w=6*d[0][4],h[2]=0!==w?d[0][3]/w:0),(h[0]<y[0]||h[0]>y[1]||h[1]<y[2]||h[1]>y[3]||i&&(h[2]<y[4]||h[2]>y[5]))&&(h.length=0)}if(!h.length){var V=t.lengths[0]?o(g,0,f[0],i,a):null;if(!V)return null;h[0]=V[0],h[1]=V[1],i&&V.length>2&&(h[2]=V[2])}return e}function u(e,t,i,r,n,a){for(var u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1,o=s(n,a),l=i,c=i+o,p=0,h=0,d=0,y=0,f=0,g=0,v=r-1;g<v;g++,l+=o,c+=o){var b=t[l],m=t[l+1],I=t[l+2],k=t[c],w=t[c+1],V=t[c+2],C=b*w-k*m;y+=C,p+=(b+k)*C,h+=(m+w)*C,n&&(d+=(I+V)*(C=b*V-k*I),f+=C),b<e[0]&&(e[0]=b),b>e[1]&&(e[1]=b),m<e[2]&&(e[2]=m),m>e[3]&&(e[3]=m),n&&(I<e[4]&&(e[4]=I),I>e[5]&&(e[5]=I))}if(y*u>0&&(y*=-1),f*u>0&&(f*=-1),!y)return null;var E=[p,h,.5*y];return n&&(E[3]=d,E[4]=.5*f),E}function o(e,t,i,r,n){for(var a=s(r,n),u=t,o=t+a,d=0,y=0,f=0,g=0,v=0,b=i-1;v<b;v++,u+=a,o+=a){var m=e[u],I=e[u+1],k=e[u+2],w=e[o],V=e[o+1],C=e[o+2],E=r?c(m,I,k,w,V,C):l(m,I,w,V);if(E)if(d+=E,r){var G=h(m,I,k,w,V,C);y+=E*G[0],f+=E*G[1],g+=E*G[2]}else{var S=p(m,I,w,V);y+=E*S[0],f+=E*S[1]}}return d>0?r?[y/d,f/d,g/d]:[y/d,f/d]:i>0?r?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function l(e,t,i,r){var n=i-e,s=r-t;return Math.sqrt(n*n+s*s)}function c(e,t,i,r,n,s){var a=r-e,u=n-t,o=s-i;return Math.sqrt(a*a+u*u+o*o)}function p(e,t,i,r){return[e+.5*(i-e),t+.5*(r-t)]}function h(e,t,i,r,n,s){return[e+.5*(r-e),t+.5*(n-t),i+.5*(s-i)]}},18392:function(e,t,i){i.d(t,{a:function(){return u}});var r,n,s,a={exports:{}};r=a,n=function(){function e(i,r,n,s,a){for(;s>n;){if(s-n>600){var u=s-n+1,o=r-n+1,l=Math.log(u),c=.5*Math.exp(2*l/3),p=.5*Math.sqrt(l*c*(u-c)/u)*(o-u/2<0?-1:1);e(i,r,Math.max(n,Math.floor(r-o*c/u+p)),Math.min(s,Math.floor(r+(u-o)*c/u+p)),a)}var h=i[r],d=n,y=s;for(t(i,n,r),a(i[s],h)>0&&t(i,n,s);d<y;){for(t(i,d,y),d++,y--;a(i[d],h)<0;)d++;for(;a(i[y],h)>0;)y--}0===a(i[n],h)?t(i,n,y):t(i,++y,s),y<=r&&(n=y+1),r<=y&&(s=y-1)}}function t(e,t,i){var r=e[t];e[t]=e[i],e[i]=r}function i(e,t){return e<t?-1:e>t?1:0}return function(t,r,n,s,a){e(t,r,n||0,s||t.length-1,a||i)}},void 0!==(s=n())&&(r.exports=s);var u=a.exports}}]);
//# sourceMappingURL=429.a2db0e51.chunk.js.map