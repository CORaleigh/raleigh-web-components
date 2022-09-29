"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[6878],{80817:function(e,t,r){r.d(t,{S:function(){return z}});var n=r(74165),i=r(37762),a=r(15861),o=r(15671),u=r(43144),s=r(60136),l=r(29388),p=r(29439),c=r(23132),h=(r(75610),r(80262)),d=r(78311),y=r(30709),f=r(4720),v=r(54323),m=r(38415),g=r(59819),x=Math.PI/180;function w(e){return e*x}function b(e,t){var r=w(t.rotation),n=Math.abs(Math.cos(r)),i=Math.abs(Math.sin(r)),a=(0,p.Z)(t.size,2),o=a[0],u=a[1];return e[0]=Math.round(u*i+o*n),e[1]=Math.round(u*n+o*i),e}function Z(e,t,r,n){var i=(0,p.Z)(t,2),a=i[0],o=i[1],u=(0,p.Z)(n,2),s=u[0],l=u[1],c=.5*r;return e[0]=a-c*s,e[1]=o-c*l,e[2]=a+c*s,e[3]=o+c*l,e}var S=(0,d.u)(),k=[0,0],M=new g.e(0,0,0,0),P=2048,R=2048,_=!1,E=!1,I=!1,W=function(e){(0,s.Z)(r,e);var t=(0,l.Z)(r);function r(e){var u;return(0,o.Z)(this,r),(u=t.call(this,e))._imagePromise=null,u.bitmaps=[],u.hidpi=I,u.imageMaxWidth=P,u.imageMaxHeight=R,u.imageRotationSupported=_,u.imageNormalizationSupported=E,u.update=(0,c.x)(function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var o,s,l,p,c,h,d,f,v,m,g;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.stationary&&!u.destroyed){e.next=2;break}return e.abrupt("return",null);case 2:return o=t.state,s=(0,y.b)(o.spatialReference),l=u.hidpi?t.pixelRatio:1,(p=u.imageNormalizationSupported&&o.worldScreenWidth&&o.worldScreenWidth<o.size[0])?(k[0]=o.worldScreenWidth,k[1]=o.size[1]):u.imageRotationSupported?(k[0]=o.size[0],k[1]=o.size[1]):b(k,o),c=Math.floor(k[0]*l)>u.imageMaxWidth||Math.floor(k[1]*l)>u.imageMaxHeight,h=s&&(o.extent.xmin<s.valid[0]||o.extent.xmax>s.valid[1]),d=!u.imageNormalizationSupported&&h,f=!c&&!d,v=u.imageRotationSupported?o.rotation:0,f?(m=p?o.paddedViewState.center:o.center,u._imagePromise=u._singleExport(o,k,m,o.resolution,v,l,r)):(g=Math.min(u.imageMaxWidth,u.imageMaxHeight),d&&(g=Math.min(o.worldScreenWidth,g)),u._imagePromise=u._tiledExport(o,g,l,r)),e.abrupt("return",u._imagePromise.then(function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,o,s,l,p;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u._imagePromise=null,!u.destroyed){u.bitmaps=null!==t&&void 0!==t?t:[],r=(0,i.Z)(u.container.children);try{for(o=function(){var e=a.value;t.includes(e)||e.fadeOut().then((function(){e.remove()}))},r.s();!(a=r.n()).done;)o()}catch(n){r.e(n)}finally{r.f()}s=(0,i.Z)(t);try{for(s.s();!(l=s.n()).done;)p=l.value,u.container.addChild(p),p.fadeIn()}catch(n){s.e(n)}finally{s.f()}}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){throw u._imagePromise=null,e})));case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),5e3),u}return(0,u.Z)(r,[{key:"destroy",value:function(){this.bitmaps=[]}},{key:"updating",get:function(){return!this.destroyed&&null!==this._imagePromise}},{key:"updateExports",value:function(e){var t,r=(0,i.Z)(this.container.children);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(!n.visible||!n.stage)return;e(n),n.invalidateTexture(),n.requestRender()}}catch(a){r.e(a)}finally{r.f()}}},{key:"_export",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r,i,a,o,u){var s,l;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchSource(t,Math.floor(r*o),Math.floor(i*o),{rotation:a,pixelRatio:o,signal:u});case 2:return s=e.sent,l=new v.v(s,"additive"),e.abrupt("return",(l.x=t.xmin,l.y=t.ymax,l.resolution=t.width/r,l.rotation=a,l.pixelRatio=o,l));case 5:case"end":return e.stop()}}),e,this)})));return function(t,r,n,i,a,o){return e.apply(this,arguments)}}()},{key:"_singleExport",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r,i,a,o,u,s){var l;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z(S,i,a,r),l=new h.M(S[0],S[1],S[2],S[3],t.spatialReference),e.next=4,this._export(l,r[0],r[1],o,u,s);case 4:return e.t0=e.sent,e.abrupt("return",[e.t0]);case 6:case"end":return e.stop()}}),e,this)})));return function(t,r,n,i,a,o,u){return e.apply(this,arguments)}}()},{key:"_tiledExport",value:function(e,t,r,n){var i=this,a=f.S.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),o=new m.h(a),u=o.getTileCoverage(e);if(!u)return null;var s=[];return u.forEach((function(a,u,l,p){M.set(a,u,l,p),o.getTileBounds(S,M);var c=new h.M(S[0],S[1],S[2],S[3],e.spatialReference);s.push(i._export(c,t,t,0,r,n))})),Promise.all(s)}}]),r}(c.y);(0,c.e)([(0,c.d)()],W.prototype,"_imagePromise",void 0),(0,c.e)([(0,c.d)()],W.prototype,"bitmaps",void 0),(0,c.e)([(0,c.d)()],W.prototype,"container",void 0),(0,c.e)([(0,c.d)()],W.prototype,"fetchSource",void 0),(0,c.e)([(0,c.d)()],W.prototype,"hidpi",void 0),(0,c.e)([(0,c.d)()],W.prototype,"imageMaxWidth",void 0),(0,c.e)([(0,c.d)()],W.prototype,"imageMaxHeight",void 0),(0,c.e)([(0,c.d)()],W.prototype,"imageRotationSupported",void 0),(0,c.e)([(0,c.d)()],W.prototype,"imageNormalizationSupported",void 0),(0,c.e)([(0,c.d)()],W.prototype,"requestUpdate",void 0),(0,c.e)([(0,c.d)()],W.prototype,"updating",null);var z=W=(0,c.e)([(0,c.n)("esri.views.2d.layers.support.ExportStrategy")],W)},65087:function(e,t,r){r.d(t,{l:function(){return p}});var n=r(15671),i=r(43144),a=r(60136),o=r(29388),u=r(23132),s=r(97033),l=(r(75610),{visible:"visibleSublayers"}),p=function(e){(0,a.Z)(r,e);var t=(0,o.Z)(r);function r(e){var i;return(0,n.Z)(this,r),(i=t.call(this,e)).scale=0,i}return(0,i.Z)(r,[{key:"layer",set:function(e){var t=this;this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.sublayers.on("change",(function(){return t.notifyChange("visibleSublayers")})),e.on("wms-sublayer-update",(function(e){return t.notifyChange(l[e.propertyName])}))],"layer"))}},{key:"layers",get:function(){return this.visibleSublayers.filter((function(e){return e.name})).map((function(e){return e.name})).join(",")}},{key:"version",get:function(){this.commitProperty("layers");var e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}},{key:"visibleSublayers",get:function(){var e=this.layer,t=this.scale,r=null===e||void 0===e?void 0:e.sublayers,n=[];return null!==r&&void 0!==r&&r.forEach((function e(r){var i=r.minScale,a=r.maxScale,o=r.sublayers;r.visible&&(0===t||(0===i||t<=i)&&(0===a||t>=a))&&(o?o.forEach(e):n.unshift(r))})),n}},{key:"toJSON",value:function(){var e=this.layer,t=this.layers;return{format:e.imageFormat,request:"GetMap",service:"WMS",styles:"",transparent:e.imageTransparency?"TRUE":"FALSE",version:e.version,layers:t}}}]),r}((0,s.a)(u.y));(0,u.e)([(0,u.d)()],p.prototype,"layer",null),(0,u.e)([(0,u.d)({readOnly:!0})],p.prototype,"layers",null),(0,u.e)([(0,u.d)({type:Number})],p.prototype,"scale",void 0),(0,u.e)([(0,u.d)({readOnly:!0})],p.prototype,"version",null),(0,u.e)([(0,u.d)({readOnly:!0})],p.prototype,"visibleSublayers",null),p=(0,u.e)([(0,u.n)("esri.layers.support.ExportWMSImageParameters")],p)},19231:function(e,t,r){r.d(t,{i:function(){return l}});var n=r(15671),i=r(43144),a=r(60136),o=r(29388),u=r(23132),s=r(36551),l=(r(75610),function(e){var t=function(e){(0,a.Z)(r,e);var t=(0,o.Z)(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,i.Z)(r,[{key:"initialize",value:function(){var e=this;this.handles.add((0,s.a)((function(){return e.layer}),"refresh",(function(t){e.doRefresh(t.dataChanged).catch((function(t){(0,u.u)(t)||u.s.getLogger(e.declaredClass).error(t)}))})),"RefreshableLayerView")}}]),r}(e);return(0,u.e)([(0,u.d)()],t.prototype,"layer",void 0),t=(0,u.e)([(0,u.n)("esri.layers.mixins.RefreshableLayerView")],t)})},84467:function(e,t,r){r.d(t,{a:function(){return p}});var n=r(15671),i=r(43144),a=r(60136),o=r(29388),u=r(23132),s=(r(75610),r(18411)),l=r(65087),p=function(e){var t=function(e){(0,a.Z)(r,e);var t=(0,o.Z)(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,i.Z)(r,[{key:"initialize",value:function(){this.exportImageParameters=new l.l({layer:this.layer})}},{key:"destroy",value:function(){this.exportImageParameters.destroy(),this.exportImageParameters=null}},{key:"exportImageVersion",get:function(){var e;return null!==(e=this.exportImageParameters)&&void 0!==e&&e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}},{key:"fetchPopupFeatures",value:function(e){var t=this.layer;if(!e)return Promise.reject(new u.a("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}));var r=t.popupEnabled;if(!r)return Promise.reject(new u.a("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:r}));var n=this.createFetchPopupFeaturesQuery(e);if(!n)return Promise.resolve([]);var i=n.extent,a=n.width,o=n.height,s=n.x,l=n.y;if(!(i&&a&&o))throw new u.a("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:i,width:a,height:o});var p=t.fetchFeatureInfo(i,a,o,s,l);return Promise.resolve(p?[p]:[])}}]),r}(e);return(0,u.e)([(0,u.d)()],t.prototype,"exportImageParameters",void 0),(0,u.e)([(0,u.d)({readOnly:!0})],t.prototype,"exportImageVersion",null),(0,u.e)([(0,u.d)()],t.prototype,"layer",void 0),(0,u.e)([(0,u.d)(s.g)],t.prototype,"timeExtent",void 0),t=(0,u.e)([(0,u.n)("esri.layers.mixins.WMSLayerView")],t)}},86878:function(e,t,r){r.r(t);var n=r(1413),i=r(74165),a=r(15861),o=r(15671),u=r(43144),s=r(60136),l=r(29388),p=r(23132),c=r(36551),h=(r(75610),r(80262)),d=r(97402),y=r(20842),f=r(80817),v=r(5900),m=r(19231),g=r(84467),x=(r(21583),r(30709),r(70441),r(76470),r(40273),r(77470),r(80175),r(84538),r(49580),r(41742),r(57714),r(43920),r(54841),r(33703),r(92870),r(97033),r(72692),r(77389),r(48561),r(55269),r(2760),r(44455),r(83822),r(91204),r(36460),r(51451),r(50526),r(50448),r(1773),r(77196),r(24980),r(3114),r(22144),r(78674),r(66307),r(88370),r(72820),r(78311),r(96349),r(9055),r(79611),r(2157),r(30604),r(32568),r(69202),r(27597),r(1241),r(67417),r(15181),r(33642),r(28999),r(69953),r(15612),r(43124),r(69797),r(34860),r(36638),r(10590),r(19948),r(96636),r(30664),r(38304),r(83024),r(61340),r(47626),r(25316),r(407),r(67154),r(79054),r(29709),r(47642),r(18411),r(43782),r(33976),r(28210),r(17436),r(53373),r(94872),r(3969),r(79042),r(61495),r(16485),r(92029),r(74575),r(9575),r(53249),r(83996),r(72763),r(6794),r(28681),r(38929),r(97866),r(68890),r(31513),r(25838),r(54539),r(19967),r(50338),r(28623),r(10312),r(95254),r(61099),r(12158),r(93874),r(62446),r(27264),r(50905),r(78945),r(55827),r(70516),r(25279),r(22268),r(40452),r(60424),r(22225),r(38425),r(42471),r(78470),r(1665),r(38843),r(24892),r(48889),r(30150),r(53647),r(81663),r(14181),r(86270),r(47672),r(63022),r(10815),r(96401),r(87833),r(21523),r(84192),r(71710),r(45332),r(6819),r(93669),r(42446),r(90584),r(90138),r(97566),r(45578),r(28329),r(45794),r(14946),r(85331),r(77372),r(85523),r(69754),r(38802),r(95208),r(49607),r(38058),r(66156),r(4720),r(54323),r(38415),r(59819),r(18392),r(65087),p.s.getLogger("esri.views.2d.layers.WMSLayerView2D")),w=function(e){(0,s.Z)(r,e);var t=(0,l.Z)(r);function r(){var e;return(0,o.Z)(this,r),(e=t.apply(this,arguments)).container=new d.t,e}return(0,u.Z)(r,[{key:"supportsSpatialReference",value:function(e){return this.layer.serviceSupportsSpatialReference(e)}},{key:"update",value:function(e){this.strategy.update(e).catch((function(e){(0,p.u)(e)||x.error(e)}))}},{key:"attach",value:function(){var e=this,t=this.layer,r=this.container,n=t.imageMaxHeight,i=t.imageMaxWidth;this.strategy=new f.S({container:r,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:n,imageMaxWidth:i,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.handles.add((0,c.l)((function(){return e.exportImageVersion}),(function(){return e.requestUpdate()})),"exportImageVersion")}},{key:"detach",value:function(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.strategy=null,this.container.removeAllChildren()}},{key:"moveStart",value:function(){}},{key:"viewChange",value:function(){}},{key:"moveEnd",value:function(){this.requestUpdate()}},{key:"createFetchPopupFeaturesQuery",value:function(e){var t=this.view,r=this.container,n=e.x,i=e.y,a=t.spatialReference,o=null,u=0,s=0;if(r.children.some((function(e){var t=e.width,r=e.height,l=e.resolution,p=e.x,c=e.y,d=p+l*t,y=c-l*r;return n>=p&&n<=d&&i<=c&&i>=y&&(o=new h.M({xmin:p,ymin:y,xmax:d,ymax:c,spatialReference:a}),u=t,s=r,!0)})),!o)return null;var l=o.width/u,p=Math.round((n-o.xmin)/l),c=Math.round((o.ymax-i)/l);return{extent:o,width:u,height:s,x:p,y:c}}},{key:"doRefresh",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.requestUpdate();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isUpdating",value:function(){return this.strategy.updating||this.updateRequested}},{key:"fetchImage",value:function(e,t,r,i){return this.layer.fetchImage(e,t,r,(0,n.Z)({timeExtent:this.timeExtent},i))}}]),r}((0,g.a)((0,m.i)((0,y.f)(v.u))));(0,p.e)([(0,p.d)()],w.prototype,"strategy",void 0),(0,p.e)([(0,p.d)()],w.prototype,"updating",void 0);var b=w=(0,p.e)([(0,p.n)("esri.views.2d.layers.WMSLayerView2D")],w);t.default=b}}]);
//# sourceMappingURL=6878.e2333b07.chunk.js.map