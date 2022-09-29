"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[7783],{87783:function(e,t,r){r.r(t);var n=r(74165),i=r(15861),a=r(15671),o=r(43144),u=r(60136),s=r(29388),c=r(23132),p=(r(75610),r(97402)),d=r(20842),h=r(80817),l=r(5900),f=r(19231),v=(r(21583),r(76470),r(40273),r(77470),r(80175),r(36551),r(84538),r(49580),r(41742),r(57714),r(43920),r(54841),r(33703),r(92870),r(97033),r(72692),r(77389),r(48561),r(55269),r(2760),r(44455),r(30709),r(70441),r(83822),r(91204),r(80262),r(36460),r(51451),r(50526),r(50448),r(1773),r(77196),r(24980),r(3114),r(22144),r(78674),r(66307),r(88370),r(72820),r(78311),r(96349),r(9055),r(79611),r(2157),r(30604),r(32568),r(69202),r(27597),r(1241),r(67417),r(15181),r(33642),r(28999),r(69953),r(15612),r(43124),r(69797),r(34860),r(36638),r(10590),r(19948),r(96636),r(30664),r(38304),r(83024),r(61340),r(47626),r(25316),r(407),r(67154),r(79054),r(29709),r(47642),r(18411),r(43782),r(33976),r(28210),r(17436),r(53373),r(94872),r(3969),r(79042),r(61495),r(16485),r(92029),r(74575),r(9575),r(53249),r(83996),r(72763),r(6794),r(28681),r(38929),r(97866),r(68890),r(31513),r(25838),r(54539),r(19967),r(50338),r(28623),r(10312),r(95254),r(61099),r(12158),r(93874),r(62446),r(27264),r(50905),r(78945),r(55827),r(70516),r(25279),r(22268),r(40452),r(60424),r(22225),r(38425),r(42471),r(78470),r(1665),r(38843),r(24892),r(48889),r(30150),r(53647),r(81663),r(14181),r(86270),r(47672),r(63022),r(10815),r(96401),r(87833),r(21523),r(84192),r(71710),r(45332),r(6819),r(93669),r(42446),r(90584),r(90138),r(97566),r(45578),r(28329),r(45794),r(14946),r(85331),r(77372),r(85523),r(69754),r(38802),r(95208),r(49607),r(38058),r(66156),r(4720),r(54323),r(38415),r(59819),r(18392),c.s.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D")),y=function(e){(0,u.Z)(r,e);var t=(0,s.Z)(r);function r(){return(0,a.Z)(this,r),t.apply(this,arguments)}return(0,o.Z)(r,[{key:"update",value:function(e){this.strategy.update(e).catch((function(e){(0,c.u)(e)||v.error(e)})),this.notifyChange("updating")}},{key:"attach",value:function(){this._bitmapContainer=new p.t,this.container.addChild(this._bitmapContainer),this.strategy=new h.S({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}},{key:"detach",value:function(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}},{key:"moveStart",value:function(){}},{key:"viewChange",value:function(){}},{key:"moveEnd",value:function(){this.requestUpdate()}},{key:"fetchBitmapData",value:function(e,t,r){return this.layer.fetchImage(e,t,r)}},{key:"doRefresh",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.requestUpdate();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isUpdating",value:function(){return this.strategy.updating||this.updateRequested}}]),r}((0,f.i)((0,d.f)(l.u)));(0,c.e)([(0,c.d)()],y.prototype,"strategy",void 0),(0,c.e)([(0,c.d)()],y.prototype,"updating",void 0);var m=y=(0,c.e)([(0,c.n)("esri.views.2d.layers.BaseDynamicLayerView2D")],y);t.default=m},80817:function(e,t,r){r.d(t,{S:function(){return W}});var n=r(74165),i=r(37762),a=r(15861),o=r(15671),u=r(43144),s=r(60136),c=r(29388),p=r(29439),d=r(23132),h=(r(75610),r(80262)),l=r(78311),f=r(30709),v=r(4720),y=r(54323),m=r(38415),g=r(59819),x=Math.PI/180;function w(e){return e*x}function Z(e,t){var r=w(t.rotation),n=Math.abs(Math.cos(r)),i=Math.abs(Math.sin(r)),a=(0,p.Z)(t.size,2),o=a[0],u=a[1];return e[0]=Math.round(u*i+o*n),e[1]=Math.round(u*n+o*i),e}function b(e,t,r,n){var i=(0,p.Z)(t,2),a=i[0],o=i[1],u=(0,p.Z)(n,2),s=u[0],c=u[1],d=.5*r;return e[0]=a-d*s,e[1]=o-d*c,e[2]=a+d*s,e[3]=o+d*c,e}var k=(0,l.u)(),_=[0,0],M=new g.e(0,0,0,0),S=2048,R=2048,C=!1,z=!1,P=!1,E=function(e){(0,s.Z)(r,e);var t=(0,c.Z)(r);function r(e){var u;return(0,o.Z)(this,r),(u=t.call(this,e))._imagePromise=null,u.bitmaps=[],u.hidpi=P,u.imageMaxWidth=S,u.imageMaxHeight=R,u.imageRotationSupported=C,u.imageNormalizationSupported=z,u.update=(0,d.x)(function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var o,s,c,p,d,h,l,v,y,m,g;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.stationary&&!u.destroyed){e.next=2;break}return e.abrupt("return",null);case 2:return o=t.state,s=(0,f.b)(o.spatialReference),c=u.hidpi?t.pixelRatio:1,(p=u.imageNormalizationSupported&&o.worldScreenWidth&&o.worldScreenWidth<o.size[0])?(_[0]=o.worldScreenWidth,_[1]=o.size[1]):u.imageRotationSupported?(_[0]=o.size[0],_[1]=o.size[1]):Z(_,o),d=Math.floor(_[0]*c)>u.imageMaxWidth||Math.floor(_[1]*c)>u.imageMaxHeight,h=s&&(o.extent.xmin<s.valid[0]||o.extent.xmax>s.valid[1]),l=!u.imageNormalizationSupported&&h,v=!d&&!l,y=u.imageRotationSupported?o.rotation:0,v?(m=p?o.paddedViewState.center:o.center,u._imagePromise=u._singleExport(o,_,m,o.resolution,y,c,r)):(g=Math.min(u.imageMaxWidth,u.imageMaxHeight),l&&(g=Math.min(o.worldScreenWidth,g)),u._imagePromise=u._tiledExport(o,g,c,r)),e.abrupt("return",u._imagePromise.then(function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,o,s,c,p;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u._imagePromise=null,!u.destroyed){u.bitmaps=null!==t&&void 0!==t?t:[],r=(0,i.Z)(u.container.children);try{for(o=function(){var e=a.value;t.includes(e)||e.fadeOut().then((function(){e.remove()}))},r.s();!(a=r.n()).done;)o()}catch(n){r.e(n)}finally{r.f()}s=(0,i.Z)(t);try{for(s.s();!(c=s.n()).done;)p=c.value,u.container.addChild(p),p.fadeIn()}catch(n){s.e(n)}finally{s.f()}}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){throw u._imagePromise=null,e})));case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),5e3),u}return(0,u.Z)(r,[{key:"destroy",value:function(){this.bitmaps=[]}},{key:"updating",get:function(){return!this.destroyed&&null!==this._imagePromise}},{key:"updateExports",value:function(e){var t,r=(0,i.Z)(this.container.children);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(!n.visible||!n.stage)return;e(n),n.invalidateTexture(),n.requestRender()}}catch(a){r.e(a)}finally{r.f()}}},{key:"_export",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r,i,a,o,u){var s,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchSource(t,Math.floor(r*o),Math.floor(i*o),{rotation:a,pixelRatio:o,signal:u});case 2:return s=e.sent,c=new y.v(s,"additive"),e.abrupt("return",(c.x=t.xmin,c.y=t.ymax,c.resolution=t.width/r,c.rotation=a,c.pixelRatio=o,c));case 5:case"end":return e.stop()}}),e,this)})));return function(t,r,n,i,a,o){return e.apply(this,arguments)}}()},{key:"_singleExport",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r,i,a,o,u,s){var c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(k,i,a,r),c=new h.M(k[0],k[1],k[2],k[3],t.spatialReference),e.next=4,this._export(c,r[0],r[1],o,u,s);case 4:return e.t0=e.sent,e.abrupt("return",[e.t0]);case 6:case"end":return e.stop()}}),e,this)})));return function(t,r,n,i,a,o,u){return e.apply(this,arguments)}}()},{key:"_tiledExport",value:function(e,t,r,n){var i=this,a=v.S.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),o=new m.h(a),u=o.getTileCoverage(e);if(!u)return null;var s=[];return u.forEach((function(a,u,c,p){M.set(a,u,c,p),o.getTileBounds(k,M);var d=new h.M(k[0],k[1],k[2],k[3],e.spatialReference);s.push(i._export(d,t,t,0,r,n))})),Promise.all(s)}}]),r}(d.y);(0,d.e)([(0,d.d)()],E.prototype,"_imagePromise",void 0),(0,d.e)([(0,d.d)()],E.prototype,"bitmaps",void 0),(0,d.e)([(0,d.d)()],E.prototype,"container",void 0),(0,d.e)([(0,d.d)()],E.prototype,"fetchSource",void 0),(0,d.e)([(0,d.d)()],E.prototype,"hidpi",void 0),(0,d.e)([(0,d.d)()],E.prototype,"imageMaxWidth",void 0),(0,d.e)([(0,d.d)()],E.prototype,"imageMaxHeight",void 0),(0,d.e)([(0,d.d)()],E.prototype,"imageRotationSupported",void 0),(0,d.e)([(0,d.d)()],E.prototype,"imageNormalizationSupported",void 0),(0,d.e)([(0,d.d)()],E.prototype,"requestUpdate",void 0),(0,d.e)([(0,d.d)()],E.prototype,"updating",null);var W=E=(0,d.e)([(0,d.n)("esri.views.2d.layers.support.ExportStrategy")],E)},19231:function(e,t,r){r.d(t,{i:function(){return c}});var n=r(15671),i=r(43144),a=r(60136),o=r(29388),u=r(23132),s=r(36551),c=(r(75610),function(e){var t=function(e){(0,a.Z)(r,e);var t=(0,o.Z)(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,i.Z)(r,[{key:"initialize",value:function(){var e=this;this.handles.add((0,s.a)((function(){return e.layer}),"refresh",(function(t){e.doRefresh(t.dataChanged).catch((function(t){(0,u.u)(t)||u.s.getLogger(e.declaredClass).error(t)}))})),"RefreshableLayerView")}}]),r}(e);return(0,u.e)([(0,u.d)()],t.prototype,"layer",void 0),t=(0,u.e)([(0,u.n)("esri.layers.mixins.RefreshableLayerView")],t)})}}]);
//# sourceMappingURL=7783.581e3e6d.chunk.js.map