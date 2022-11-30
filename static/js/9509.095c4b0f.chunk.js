"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[9509],{75618:function(e,t,r){r.d(t,{v:function(){return C}});var i=r(74165),n=r(37762),a=r(15861),o=r(15671),s=r(43144),u=r(60136),l=r(29388),c=r(29439),h=r(48848),p=(r(93661),r(25456)),d=r(82474),y=r(3356),v=r(37677),f=r(65703),m=r(51732),g=Math.PI/180;function x(e){return e*g}function w(e,t){var r=x(t.rotation),i=Math.abs(Math.cos(r)),n=Math.abs(Math.sin(r)),a=(0,c.Z)(t.size,2),o=a[0],s=a[1];return e[0]=Math.round(s*n+o*i),e[1]=Math.round(s*i+o*n),e}function b(e,t,r,i){var n=(0,c.Z)(t,2),a=n[0],o=n[1],s=(0,c.Z)(i,2),u=s[0],l=s[1],h=.5*r;return e[0]=a-h*u,e[1]=o-h*l,e[2]=a+h*u,e[3]=o+h*l,e}var k=(0,p.u)(),_=[0,0],Z=new m.e(0,0,0,0),P=2048,R=2048,S=!1,E=!1,V=!1,M=function(e){(0,u.Z)(r,e);var t=(0,l.Z)(r);function r(e){var s;return(0,o.Z)(this,r),(s=t.call(this,e))._imagePromise=null,s.bitmaps=[],s.hidpi=V,s.imageMaxWidth=P,s.imageMaxHeight=R,s.imageRotationSupported=S,s.imageNormalizationSupported=E,s.update=(0,h.a1)(function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t,r){var a,o,u,l,c,p,y,v,f,m,g,x,b,k,Z,P,R,S,E,V;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,h.f)(r),t.stationary&&!s.destroyed){e.next=2;break}return e.abrupt("return");case 2:return a=t.state,o=(0,d.a)(a.spatialReference),u=s.hidpi?t.pixelRatio:1,(l=s.imageNormalizationSupported&&a.worldScreenWidth&&a.worldScreenWidth<a.size[0])?(_[0]=a.worldScreenWidth,_[1]=a.size[1]):s.imageRotationSupported?(_[0]=a.size[0],_[1]=a.size[1]):w(_,a),c=Math.floor(_[0]*u)>s.imageMaxWidth||Math.floor(_[1]*u)>s.imageMaxHeight,p=o&&(a.extent.xmin<o.valid[0]||a.extent.xmax>o.valid[1]),y=!s.imageNormalizationSupported&&p,v=!c&&!y,f=s.imageRotationSupported?a.rotation:0,m=s.container.children.slice(),v?(g=l?a.paddedViewState.center:a.center,s._imagePromise&&console.error("Image promise was not defined!"),s._imagePromise=s._singleExport(a,_,g,a.resolution,f,u,r)):(x=Math.min(s.imageMaxWidth,s.imageMaxHeight),y&&(x=Math.min(a.worldScreenWidth,x)),s._imagePromise=s._tiledExport(a,x,u,r)),e.prev=6,e.next=9,s._imagePromise;case 9:if(b=e.sent,(0,h.f)(r),k=[],s._imagePromise=null,!s.destroyed){e.next=14;break}return e.abrupt("return");case 14:s.bitmaps=null!==b&&void 0!==b?b:[],Z=(0,n.Z)(m);try{for(R=function(){var e=P.value;b.includes(e)||k.push(e.fadeOut().then((function(){e.remove(),e.destroy()})))},Z.s();!(P=Z.n()).done;)R()}catch(i){Z.e(i)}finally{Z.f()}S=(0,n.Z)(b);try{for(S.s();!(E=S.n()).done;)V=E.value,k.push(V.fadeIn())}catch(i){S.e(i)}finally{S.f()}return e.next=21,Promise.all(k);case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(6),s._imagePromise=null,(0,h.w)(e.t0);case 26:case"end":return e.stop()}}),e,null,[[6,23]])})));return function(t,r){return e.apply(this,arguments)}}(),5e3),s.updateExports=(0,h.a1)(function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){var r,a,o,u,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=[],a=(0,n.Z)(s.container.children),e.prev=2,u=function(){var e=o.value;if(!e.visible||!e.stage)return{v:void 0};r.push(t(e).then((function(){e.invalidateTexture(),e.requestRender()})))},a.s();case 5:if((o=a.n()).done){e.next=11;break}if("object"!==typeof(l=u())){e.next=9;break}return e.abrupt("return",l.v);case 9:e.next=5;break;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),a.e(e.t0);case 16:return e.prev=16,a.f(),e.finish(16);case 19:return s._imagePromise=(0,h.E)(r).then((function(){return s._imagePromise=null})),e.next=22,s._imagePromise;case 22:case"end":return e.stop()}}),e,null,[[2,13,16,19]])})));return function(t){return e.apply(this,arguments)}}()),s}return(0,s.Z)(r,[{key:"destroy",value:function(){this.bitmaps.forEach((function(e){return e.destroy()})),this.bitmaps=[]}},{key:"updating",get:function(){return!this.destroyed&&null!==this._imagePromise}},{key:"_export",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t,r,n,a,o,s){var u,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchSource(t,Math.floor(r*o),Math.floor(n*o),{rotation:a,pixelRatio:o,signal:s});case 2:return u=e.sent,(0,h.f)(s),(l=new v.R(null,{immutable:!0,requestRenderOnSourceChangedEnabled:!0})).x=t.xmin,l.y=t.ymax,l.resolution=t.width/r,l.rotation=a,l.pixelRatio=o,l.opacity=0,this.container.addChild(l),e.next=14,l.setSourceAsync(u,s);case 14:return(0,h.f)(s),e.abrupt("return",l);case 16:case"end":return e.stop()}}),e,this)})));return function(t,r,i,n,a,o){return e.apply(this,arguments)}}()},{key:"_singleExport",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t,r,n,a,o,s,u){var l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(k,n,a,r),l=(0,p.f)(k,t.spatialReference),e.next=4,this._export(l,r[0],r[1],o,s,u);case 4:return e.t0=e.sent,e.abrupt("return",[e.t0]);case 6:case"end":return e.stop()}}),e,this)})));return function(t,r,i,n,a,o,s){return e.apply(this,arguments)}}()},{key:"_tiledExport",value:function(e,t,r,i){var n=this,a=y.j.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),o=new f.h(a),s=o.getTileCoverage(e);if(!s)return null;var u=[];return s.forEach((function(a,s,l,c){Z.set(a,s,l,0),o.getTileBounds(k,Z);var h=(0,p.f)(k,e.spatialReference);u.push(n._export(h,t,t,0,r,i).then((function(e){return 0!==c&&(Z.set(a,s,l,c),o.getTileBounds(k,Z),e.x=k[0],e.y=k[3]),e})))})),Promise.all(u)}}]),r}(h.m);(0,h.e)([(0,h.y)()],M.prototype,"_imagePromise",void 0),(0,h.e)([(0,h.y)()],M.prototype,"bitmaps",void 0),(0,h.e)([(0,h.y)()],M.prototype,"container",void 0),(0,h.e)([(0,h.y)()],M.prototype,"fetchSource",void 0),(0,h.e)([(0,h.y)()],M.prototype,"hidpi",void 0),(0,h.e)([(0,h.y)()],M.prototype,"imageMaxWidth",void 0),(0,h.e)([(0,h.y)()],M.prototype,"imageMaxHeight",void 0),(0,h.e)([(0,h.y)()],M.prototype,"imageRotationSupported",void 0),(0,h.e)([(0,h.y)()],M.prototype,"imageNormalizationSupported",void 0),(0,h.e)([(0,h.y)()],M.prototype,"requestUpdate",void 0),(0,h.e)([(0,h.y)()],M.prototype,"updating",null);var C=M=(0,h.e)([(0,h.n)("esri.views.2d.layers.support.ExportStrategy")],M)},50051:function(e,t,r){r.d(t,{n:function(){return y}});var i=r(15671),n=r(43144),a=r(11752),o=r(61120),s=r(60136),u=r(29388),l=r(48848),c=(r(93661),r(1206)),h=r(35202),p=r(93122),d=function(e){(0,s.Z)(r,e);var t=(0,u.Z)(r);function r(){return(0,i.Z)(this,r),t.apply(this,arguments)}return(0,n.Z)(r,[{key:"doRender",value:function(e){e.drawPhase===c.I.HIGHLIGHT&&(0,a.Z)((0,o.Z)(r.prototype),"doRender",this).call(this,e)}},{key:"renderChildren",value:function(e){if(this.attributeView.update(),this.children.some((function(e){return e.hasData}))){this.attributeView.bindTextures(e.context),(0,a.Z)((0,o.Z)(r.prototype),"renderChildren",this).call(this,e);var t=e.painter.effects.highlight;t.bind(e),e.context.setColorMask(!0,!0,!0,!0),e.context.clear(p._.COLOR_BUFFER_BIT),this._renderChildren(e,t.defines.concat(["highlightAll"])),t.draw(e),t.unbind()}}}]),r}(h.t),y=d=(0,l.e)([(0,l.n)("esri.views.2d.layers.support.HighlightGraphicContainer")],d)},59155:function(e,t,r){r.d(t,{m:function(){return m}});var i=r(74165),n=r(15861),a=r(15671),o=r(43144),s=r(11752),u=r(61120),l=r(60136),c=r(29388),h=r(48848),p=r(93661),d=r(82474),y=r(12953),v=r(35237),f=r(31303),m=function(e){var t=function(e){(0,l.Z)(r,e);var t=(0,c.Z)(r);function r(){var e;return(0,a.Z)(this,r),(e=t.apply(this,arguments)).view=null,e}return(0,o.Z)(r,[{key:"fetchPopupFeatures",value:function(){var e=(0,n.Z)((0,i.Z)().mark((function e(t,r){var n,a,o,s,u,l,c,y,m,g,x;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.layer,t){e.next=3;break}throw new h.s("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:n});case 3:if(a=n.popupEnabled,o=(0,f.s)(n,r),a&&!(0,p.t)(o)){e.next=6;break}throw new h.s("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:a,popupTemplate:o});case 6:return e.next=8,o.getRequiredFields();case 8:return s=e.sent,(u=new v.x).timeExtent=this.timeExtent,u.geometry=t,u.outFields=s,u.outSpatialReference=t.spatialReference,l=this.view.resolution,c="2d"===this.view.type?new d.w(l,l,this.view.spatialReference):new d.w(.5*l,.5*l,this.view.spatialReference),y=o.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},m=y.returnTopmostRaster,g=y.showNoDataRecords,x={returnDomainValues:!0,returnTopmostRaster:m,pixelSize:c,showNoDataRecords:g,signal:(0,p.r)(r)?r.signal:null},e.abrupt("return",n.queryVisibleRasters(u,x).then((function(e){return e})));case 13:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"canResume",value:function(){var e;return!!(0,s.Z)((0,u.Z)(r.prototype),"canResume",this).call(this)&&!(null!==(e=this.timeExtent)&&void 0!==e&&e.isEmpty)}}]),r}(e);return(0,h.e)([(0,h.y)()],t.prototype,"layer",void 0),(0,h.e)([(0,h.y)()],t.prototype,"suspended",void 0),(0,h.e)([(0,h.y)(y.g)],t.prototype,"timeExtent",void 0),(0,h.e)([(0,h.y)()],t.prototype,"view",void 0),t=(0,h.e)([(0,h.n)("esri.views.layers.ImageryLayerView")],t)}},79509:function(e,t,r){r.r(t);var i=r(29439),n=r(93433),a=r(11752),o=r(61120),s=r(74165),u=r(1413),l=r(15861),c=r(15671),h=r(43144),p=r(60136),d=r(29388),y=r(48848),v=r(64998),f=r(93314),m=r(50690),g=r(93661),x=r(23585),w=r(14776),b=r(91502),k=r(35202),_=r(50051),Z=r(44954),P=r(68146),R=r(84234),S=r(37677),E=r(75618),V=r(40558),M=r(630),C=r(46817),T=r(31532),q=r(3669),z=r(6994),I=r(1206),B=r(59155),D=r(52195),F=r(35264),U=(r(74384),r(82474),r(40114),r(25577),r(62610),r(59984),r(20302),r(53586),r(65094),r(60369),r(92072),r(37944),r(86086),r(21385),r(89794),r(48200),r(71802),r(85253),r(93209),r(25456),r(46337),r(81556),r(93116),r(56162),r(37856),r(15751),r(31698),r(93122),r(75833),r(27205),r(26313),r(43066),r(64095),r(68136),r(54233),r(18144),r(82017),r(91242),r(21438),r(35602),r(70607),r(29048),r(63999),r(45184),r(43924),r(25217),r(23075),r(63212),r(39994),r(69717),r(62753),r(95249),r(47855),r(79557),r(75255),r(65415),r(83948),r(63393),r(90442),r(64854),r(70449),r(35496),r(26789),r(51732),r(85113),r(46737),r(52113),r(66911),r(33563),r(17327),r(15529),r(50253),r(5650),r(63504),r(97880),r(5430),r(53921),r(35237),r(89181),r(69641),r(15436),r(69768),r(65703),r(64419),r(10309),r(55944),r(74337),r(52559),r(62466),r(87917),r(39926),r(6762),r(20675),r(22603),r(50796),r(87753),r(33794),r(18007),r(51920),r(33795),r(2821),r(66577),r(71147),r(84186),r(2959),r(56546),r(8141),r(26151),r(91681),r(12953),r(95415),r(62399),r(44513),r(77755),r(88659),r(87424),r(18030),r(3356),r(7131),r(1797),r(13239),r(92739),r(4679),r(62312),r(60491),r(31303),function(e){(0,p.Z)(r,e);var t=(0,d.Z)(r);function r(){var e;return(0,c.Z)(this,r),(e=t.apply(this,arguments)).attached=!1,e.container=new R.i,e.updateRequested=!1,e.type="imagery",e._bitmapView=new P.a,e}return(0,h.Z)(r,[{key:"destroy",value:function(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}},{key:"updating",get:function(){return!this.attached||this.isUpdating()}},{key:"update",value:function(e){var t=this;this.strategy.update(e).catch((function(e){(0,y.j)(e)||y.a.getLogger(t.declaredClass).error(e)}))}},{key:"hitTest",value:function(e){return new v.g({attributes:{},geometry:e.clone(),layer:this.layer})}},{key:"attach",value:function(){var e=this;this.container.addChild(this._bitmapView);var t=this.layer.version>=10,r=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new E.v({container:this._bitmapView,imageNormalizationSupported:t,imageMaxHeight:r,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:function(){return e.requestUpdate()}})}},{key:"detach",value:function(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1}},{key:"redraw",value:function(){var e=this;this.strategy.updateExports(function(){var t=(0,l.Z)((0,s.Z)().mark((function t(r){var i,n,a;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r.source instanceof HTMLImageElement)){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.layer.applyRenderer({extent:r.source.extent,pixelBlock:null!==(i=r.source.originalPixelBlock)&&void 0!==i?i:r.source.pixelBlock});case 4:n=t.sent,(a=r.source).filter=function(t){return e.layer.pixelFilter?e.layer.applyFilter(t):(0,u.Z)((0,u.Z)({},n),{},{extent:a.extent})};case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){(0,y.j)(t)||y.a.getLogger(e.declaredClass).error(t)}))}},{key:"requestUpdate",value:function(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}},{key:"isUpdating",value:function(){return this.strategy.updating||this.updateRequested}},{key:"getPixelData",value:function(){if(this.updating)return null;var e=this.strategy.bitmaps;if(1===e.length&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){var t=this.view.extent,r=e.map((function(e){return e.source})).filter((function(e){return e.extent&&e.extent.intersects(t)})).map((function(e){return{extent:e.extent,pixelBlock:e.originalPixelBlock}})),i=(0,Z.A)(r,t);return(0,g.r)(i)?{extent:i.extent,pixelBlock:i.pixelBlock}:null}return null}},{key:"_fetchImage",value:function(e,t,r,i){var n=this;return(i=i||{}).timeExtent=this.timeExtent,i.requestAsImageElement=!0,this.layer.fetchImage(e,t,r,i).then((function(e){return e.imageOrCanvasElement?e.imageOrCanvasElement:n.layer.applyRenderer(e.pixelData,{signal:i.signal}).then((function(t){var r=new S.i(t.pixelBlock,t.extent.clone(),e.pixelData.pixelBlock);return r.filter=function(e){return n.layer.applyFilter(e)},r}))}))}}]),r}(y.m));(0,y.e)([(0,y.y)()],U.prototype,"attached",void 0),(0,y.e)([(0,y.y)()],U.prototype,"container",void 0),(0,y.e)([(0,y.y)()],U.prototype,"layer",void 0),(0,y.e)([(0,y.y)()],U.prototype,"strategy",void 0),(0,y.e)([(0,y.y)()],U.prototype,"timeExtent",void 0),(0,y.e)([(0,y.y)()],U.prototype,"view",void 0),(0,y.e)([(0,y.y)()],U.prototype,"updateRequested",void 0),(0,y.e)([(0,y.y)()],U.prototype,"updating",null),(0,y.e)([(0,y.y)()],U.prototype,"type",void 0);var A=U=(0,y.e)([(0,y.n)("esri.views.2d.layers.imagery.ImageryView2D")],U),O=function(e){(0,p.Z)(r,e);var t=(0,d.Z)(r);function r(){var e;return(0,c.Z)(this,r),(e=t.apply(this,arguments)).symbolTypes=["triangle"],e}return(0,h.Z)(r,[{key:"requiresDedicatedFBO",get:function(){return!1}},{key:"prepareRenderPasses",value:function(e){var t=this,i=e.registerRenderPass({name:"imagery (vf)",brushes:[z.d],target:function(){return t.children},drawPhase:I.I.MAP});return[].concat((0,n.Z)((0,a.Z)((0,o.Z)(r.prototype),"prepareRenderPasses",this).call(this,e)),[i])}},{key:"doRender",value:function(e){var t=this;this.visible&&e.drawPhase===I.I.MAP&&this.symbolTypes.forEach((function(i){e.renderPass=i,(0,a.Z)((0,o.Z)(r.prototype),"doRender",t).call(t,e)}))}}]),r}(z.o),j=function(e){(0,p.Z)(r,e);var t=(0,d.Z)(r);function r(e){var i;return(0,c.Z)(this,r),(i=t.call(this,e)).update=(0,y.a1)((function(e,t){return i._update(e,t).catch((function(e){(0,y.j)(e)||y.a.getLogger(i.declaredClass).error(e)}))})),i}return(0,h.Z)(r,[{key:"updating",get:function(){return!!this._loading}},{key:"redraw",value:function(e){if(this.container.children.length){var t=this.container.children[0];t.symbolizerParameters=e,t.invalidateVAO(),this.container.symbolTypes="wind_speed"===e.style?["scalar","triangle"]:"simple_scalar"===e.style?["scalar"]:["triangle"],this.container.requestRender()}}},{key:"_update",value:function(){var e=(0,l.Z)((0,s.Z)().mark((function e(t,r,n){var a,o,u,l,c,h,p,d;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.stationary){e.next=2;break}return e.abrupt("return");case 2:return a=t.state,o=a.extent,u=a.spatialReference,l=new C.w({xmin:o.xmin,ymin:o.ymin,xmax:o.xmax,ymax:o.ymax,spatialReference:u}),c=(0,i.Z)(t.state.size,2),h=c[0],p=c[1],this._loading=this.fetchPixels(l,h,p,n),e.next=6,this._loading;case 6:d=e.sent,this._addToDisplay(d,r,t.state),this._loading=null;case 8:case"end":return e.stop()}}),e,this)})));return function(t,r,i){return e.apply(this,arguments)}}()},{key:"_addToDisplay",value:function(e,t,r){if((0,g.t)(e.pixelBlock))return this.container.children.forEach((function(e){return e.destroy()})),void this.container.removeAllChildren();var i=e.extent,n=e.pixelBlock,a=new w.y(n);a.offset=[0,0],a.symbolizerParameters=t,a.rawPixelData=e,a.invalidateVAO(),a.x=i.xmin,a.y=i.ymax,a.pixelRatio=r.pixelRatio,a.rotation=r.rotation,a.resolution=r.resolution,a.width=n.width*t.symbolTileSize,a.height=n.height*t.symbolTileSize,this.container.children.forEach((function(e){return e.destroy()})),this.container.removeAllChildren(),this.container.symbolTypes="wind_speed"===t.style?["scalar","triangle"]:"simple_scalar"===t.style?["scalar"]:["triangle"],this.container.addChild(a)}}]),r}(y.m);(0,y.e)([(0,y.y)()],j.prototype,"fetchPixels",void 0),(0,y.e)([(0,y.y)()],j.prototype,"container",void 0),(0,y.e)([(0,y.y)()],j.prototype,"_loading",void 0),(0,y.e)([(0,y.y)()],j.prototype,"updating",null);var H=j=(0,y.e)([(0,y.n)("esri.views.2d.layers.imagery.ImageryVFStrategy")],j),N=function(e){(0,p.Z)(r,e);var t=(0,d.Z)(r);function r(){var e;return(0,c.Z)(this,r),(e=t.apply(this,arguments)).attached=!1,e.container=new O,e.type="imageryVF",e._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},e._fetchpixels=function(){var t=(0,l.Z)((0,s.Z)().mark((function t(r,i,n,a){var o,u,l,c,h,p,d,y,v,f;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._projectFullExtentPromise;case 2:if(o=t.sent,u=e.layer.renderer.symbolTileSize,l=(0,q.x)(r,i,n,u,o),c=l.extent,h=l.width,p=l.height,!(0,g.r)(o)||o.intersects(r)){t.next=10;break}return t.abrupt("return",{extent:c,pixelBlock:null});case 10:if(d={bbox:"".concat(c.xmin,", ").concat(c.ymin,", ").concat(c.xmax,", ").concat(c.ymax),exportParametersVersion:e.layer.exportImageServiceParameters.version,symbolTileSize:u,time:JSON.stringify(e.timeExtent||"")},!e._canReuseVectorFieldData(d)){t.next=16;break}if(y=e.getPixelData(),!(0,g.r)(y)){t.next=16;break}if("".concat(y.extent.xmin,", ").concat(y.extent.ymin,", ").concat(y.extent.xmax,", ").concat(y.extent.ymax)!==d.bbox){t.next=16;break}return t.abrupt("return",y);case 16:return t.next=18,e.layer.fetchImage(c,h,p,{timeExtent:e.timeExtent,requestAsImageElement:!1,signal:a});case 18:if(v=t.sent,f=v.pixelData,e._dataParameters=d,!(0,g.t)(f.pixelBlock)){t.next=22;break}return t.abrupt("return",{extent:c,pixelBlock:null});case 22:return t.abrupt("return",{extent:c,pixelBlock:"vector-uv"===e.layer.rasterInfo.dataType?(0,g.e)((0,q.d)(f.pixelBlock,"vector-uv")):f.pixelBlock});case 23:case"end":return t.stop()}}),t)})));return function(e,r,i,n){return t.apply(this,arguments)}}(),e}return(0,h.Z)(r,[{key:"updating",get:function(){return!this.attached||this._strategy.updating}},{key:"attach",value:function(){var e=this;this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new H({container:this.container,fetchPixels:this._fetchpixels}),this.handles.add((0,m.l)((function(){return e.layer.renderer}),(function(t){return e._updateSymbolizerParams(t)}),m.w),"vector-field-view-update")}},{key:"detach",value:function(){this._strategy.destroy(),this.container.children.forEach((function(e){return e.destroy()})),this.container.removeAllChildren(),this.handles.remove("vector-field-view-update"),this._strategy=this.container=this._projectFullExtentPromise=null}},{key:"getPixelData",value:function(){if(this.updating||!this.container.children.length)return null;var e=this.container.children[0].rawPixelData;return{extent:e.extent,pixelBlock:e.pixelBlock}}},{key:"hitTest",value:function(e){return new v.g({attributes:{},geometry:e.clone(),layer:this.layer})}},{key:"update",value:function(e){this._strategy.update(e,this._symbolizerParams)}},{key:"redraw",value:function(){this._updateSymbolizerParams(this.layer.renderer),this._strategy.redraw(this._symbolizerParams)}},{key:"_canReuseVectorFieldData",value:function(e){var t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,r=this._dataParameters.time===e.time,i=this._dataParameters.symbolTileSize===e.symbolTileSize,n=this._dataParameters.bbox===e.bbox;return t&&r&&i&&n}},{key:"_getProjectedFullExtent",value:function(){var e=(0,l.Z)((0,s.Z)().mark((function e(t){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,T.J)(this.layer.fullExtent,t);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.prev=8,e.next=11,(0,V.U)(this.layer.url,{query:{option:"footprints",outSR:t.wkid||JSON.stringify(t.toJSON()),f:"json"}});case 11:return r=e.sent.data.featureCollection.layers[0].layerDefinition.extent,e.abrupt("return",r?C.w.fromJSON(r):null);case 15:return e.prev=15,e.t1=e.catch(8),e.abrupt("return",null);case 18:case"end":return e.stop()}}),e,this,[[0,6],[8,15]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_updateSymbolizerParams",value:function(e){"vector-field"===e.type&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))}}]),r}(M.d);(0,y.e)([(0,y.y)()],N.prototype,"attached",void 0),(0,y.e)([(0,y.y)()],N.prototype,"container",void 0),(0,y.e)([(0,y.y)()],N.prototype,"layer",void 0),(0,y.e)([(0,y.y)()],N.prototype,"timeExtent",void 0),(0,y.e)([(0,y.y)()],N.prototype,"type",void 0),(0,y.e)([(0,y.y)()],N.prototype,"view",void 0),(0,y.e)([(0,y.y)()],N.prototype,"updating",null);var W=N=(0,y.e)([(0,y.n)("esri.views.2d.layers.imagery.VectorFieldView2D")],N),L=function(e){(0,p.Z)(r,e);var t=(0,d.Z)(r);function r(){var e;return(0,c.Z)(this,r),(e=t.apply(this,arguments))._exportImageVersion=-1,e._highlightGraphics=new x.i,e.subview=null,e}return(0,h.Z)(r,[{key:"pixelData",get:function(){return this.updating?null:"getPixelData"in this.subview?this.subview.getPixelData():null}},{key:"hitTest",value:function(){var e=(0,l.Z)((0,s.Z)().mark((function e(t,r){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.subview?[{type:"graphic",graphic:this.subview.hitTest(t),layer:this.layer,mapPoint:t}]:null);case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"update",value:function(e){var t;null===(t=this.subview)||void 0===t||t.update(e)}},{key:"attach",value:function(){var e=this;this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new k.o({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:function(){return e.requestUpdate()},container:new _.n(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.handles.add([(0,m.l)((function(){var t;return null!==(t=e.layer.blendMode)&&void 0!==t?t:"normal"}),(function(t){return e.subview.container.blendMode=t}),m.w),(0,m.l)((function(){var t;return null!==(t=e.layer.effect)&&void 0!==t?t:null}),(function(t){return e.subview.container.effect=t}),m.w),(0,m.l)((function(){return e.layer.exportImageServiceParameters.version}),(function(t){t&&e._exportImageVersion!==t&&(e._exportImageVersion=t,e.requestUpdate())}),m.U),(0,m.l)((function(){return e.timeExtent}),(function(t){e.subview.timeExtent=t,"redraw"in e.subview?e.requestUpdate():e.subview.redrawOrRefetch()}),m.U),this.layer.on("redraw",(function(){"redraw"in e.subview?e.subview.redraw():e.subview.redrawOrRefetch()})),(0,m.l)((function(){return e.layer.renderer}),(function(){return e._setSubView()}))],"imagerylayerview-update")}},{key:"detach",value:function(){var e,t;this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),null!==(e=this.subview)&&void 0!==e&&e.destroy(),this.handles.remove("imagerylayerview-update"),this.subview=null,null!==(t=this._highlightView)&&void 0!==t&&t.destroy(),this._exportImageVersion=-1}},{key:"moveStart",value:function(){}},{key:"viewChange",value:function(){}},{key:"moveEnd",value:function(){this.requestUpdate()}},{key:"highlight",value:function(e,t){var r=this;if(!((Array.isArray(e)?e[0]:f.j.isCollection(e)?e.getItemAt(0):e)instanceof v.g))return{remove:function(){}};var i=[];return Array.isArray(e)||f.j.isCollection(e)?i=e.map((function(e){return e.clone()})):e instanceof v.g&&(i=[e.clone()]),this._highlightGraphics.addMany(i),{remove:function(){r._highlightGraphics.removeMany(i)}}}},{key:"doRefresh",value:function(){var e=(0,l.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.requestUpdate();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isUpdating",value:function(){return!this.subview||this.subview.updating}},{key:"_setSubView",value:function(){var e;if(this.view){var t=null===(e=this.layer.renderer)||void 0===e?void 0:e.type,r="imagery";if("vector-field"===t?r="imageryVF":"flow"===t&&(r="flow"),this.subview){var i,n=this.subview.type;if(n===r)return this._attachSubview(this.subview),void("flow"===n?this.subview.redrawOrRefetch():"imagery"===n&&"lerc"===this.layer.format?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),null===(i=this.subview)||void 0===i||i.destroy()}this.subview="imagery"===r?new A({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):"imageryVF"===r?new W({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new w.d({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate()}}},{key:"_attachSubview",value:function(e){e&&!e.attached&&(e.attach(),e.attached=!0,this.container.addChildAt(e.container,0),e.container.blendMode=this.layer.blendMode,e.container.effect=this.layer.effect)}},{key:"_detachSubview",value:function(e){(null===e||void 0===e?void 0:e.attached)&&(this.container.removeChild(e.container),e.detach(),e.attached=!1)}}]),r}((0,B.m)((0,F.i)((0,b.y)(D.u))));(0,y.e)([(0,y.y)()],L.prototype,"pixelData",null),(0,y.e)([(0,y.y)()],L.prototype,"subview",void 0);var G=L=(0,y.e)([(0,y.n)("esri.views.2d.layers.ImageryLayerView2D")],L);t.default=G}}]);
//# sourceMappingURL=9509.095c4b0f.chunk.js.map