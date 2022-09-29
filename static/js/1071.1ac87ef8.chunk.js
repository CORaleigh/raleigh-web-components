"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[1071],{5900:function(e,t,n){n.d(t,{u:function(){return v}});var i=n(15671),r=n(43144),a=n(60136),s=n(29388),u=n(23132),o=n(80175),l=n(97033),h=n(77196),c=n(75610),d=n(43920),p=function(e){(0,a.Z)(n,e);var t=(0,s.Z)(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e)).layer=null,r.parent=null,r}return(0,r.Z)(n,[{key:"initialize",value:function(){var e=this;this.when().catch((function(t){if("layerview:create-error"!==t.name){var n=e.layer&&e.layer.id||"no id",i=e.layer&&e.layer.title||"no title";u.s.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '".concat(i,"', id: '").concat(n,"')"),t)}}))}},{key:"fullOpacity",get:function(){return(0,c.n)(this.get("layer.opacity"),1)*(0,c.n)(this.get("parent.fullOpacity"),1)}},{key:"suspended",get:function(){return!this.canResume()}},{key:"suspendInfo",get:function(){return this.getSuspendInfo()}},{key:"legendEnabled",get:function(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}},{key:"updating",get:function(){var e;return!((null===(e=this.updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}},{key:"updatingProgress",get:function(){return this.updating?0:1}},{key:"visible",get:function(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}},{key:"canResume",value:function(){var e,t,n;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(n=this.view)||void 0===n?void 0:n.ready)||!1}},{key:"getSuspendInfo",value:function(){var e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}},{key:"isUpdating",value:function(){return!1}}]),n}((0,l.a)((0,h.s)((0,d.m)(o.n.EventedMixin(u.y)))));(0,u.e)([(0,u.d)()],p.prototype,"fullOpacity",null),(0,u.e)([(0,u.d)()],p.prototype,"layer",void 0),(0,u.e)([(0,u.d)()],p.prototype,"parent",void 0),(0,u.e)([(0,u.d)({readOnly:!0})],p.prototype,"suspended",null),(0,u.e)([(0,u.d)({readOnly:!0})],p.prototype,"suspendInfo",null),(0,u.e)([(0,u.d)({readOnly:!0})],p.prototype,"legendEnabled",null),(0,u.e)([(0,u.d)({type:Boolean,readOnly:!0})],p.prototype,"updating",null),(0,u.e)([(0,u.d)({readOnly:!0})],p.prototype,"updatingProgress",null),(0,u.e)([(0,u.d)()],p.prototype,"visible",null),(0,u.e)([(0,u.d)()],p.prototype,"view",void 0);var v=p=(0,u.e)([(0,u.n)("esri.views.layers.LayerView")],p)},20842:function(e,t,n){n.d(t,{f:function(){return T}});var i,r=n(11752),a=n(61120),s=n(43144),u=n(15671),o=n(60136),l=n(29388),h=n(23132),c=n(80175),d=n(9055),p=n(36551),v=(n(75610),n(49607)),f=n(70441),y=(n(91204),n(30709)),m=n(30604),g=n(80262),_=n(36460),x=function(e){(0,o.Z)(n,e);var t=(0,l.Z)(n);function n(){return(0,u.Z)(this,n),t.apply(this,arguments)}return(0,s.Z)(n)}(f.l),w=x=(0,h.e)([(0,h.n)("esri.views.layers.support.ClipArea")],x),k=i=function(e){(0,o.Z)(n,e);var t=(0,l.Z)(n);function n(){var e;return(0,u.Z)(this,n),(e=t.apply(this,arguments)).type="rect",e.left=null,e.right=null,e.top=null,e.bottom=null,e}return(0,s.Z)(n,[{key:"clone",value:function(){return new i({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}},{key:"version",get:function(){return(this._get("version")||0)+1}}]),n}(w);(0,h.e)([(0,h.d)({type:[Number,String],json:{write:!0}})],k.prototype,"left",void 0),(0,h.e)([(0,h.d)({type:[Number,String],json:{write:!0}})],k.prototype,"right",void 0),(0,h.e)([(0,h.d)({type:[Number,String],json:{write:!0}})],k.prototype,"top",void 0),(0,h.e)([(0,h.d)({type:[Number,String],json:{write:!0}})],k.prototype,"bottom",void 0),(0,h.e)([(0,h.d)({readOnly:!0})],k.prototype,"version",null);var Z,R=k=i=(0,h.e)([(0,h.n)("esri.views.layers.support.ClipRect")],k),b={base:y.p,key:"type",typeMap:{extent:g.M,polygon:_.v}},S=Z=function(e){(0,o.Z)(n,e);var t=(0,l.Z)(n);function n(){var e;return(0,u.Z)(this,n),(e=t.apply(this,arguments)).type="geometry",e.geometry=null,e}return(0,s.Z)(n,[{key:"version",get:function(){return(this._get("version")||0)+1}},{key:"clone",value:function(){return new Z({geometry:this.geometry.clone()})}}]),n}(w);(0,h.e)([(0,h.d)({types:b,json:{read:m.d,write:!0}})],S.prototype,"geometry",void 0),(0,h.e)([(0,h.d)({readOnly:!0})],S.prototype,"version",null);var C=S=Z=(0,h.e)([(0,h.n)("esri.views.layers.support.Geometry")],S),O=function(e){(0,o.Z)(n,e);var t=(0,l.Z)(n);function n(){var e;return(0,u.Z)(this,n),(e=t.apply(this,arguments)).type="path",e.path=[],e}return(0,s.Z)(n,[{key:"version",get:function(){return(this._get("version")||0)+1}}]),n}(w);(0,h.e)([(0,h.d)({type:[[[Number]]],json:{write:!0}})],O.prototype,"path",void 0),(0,h.e)([(0,h.d)({readOnly:!0})],O.prototype,"version",null);var I=O=(0,h.e)([(0,h.n)("esri.views.layers.support.Path")],O),M=c.j.ofType({key:"type",base:w,typeMap:{rect:R,path:I,geometry:C}}),T=function(e){var t=function(e){(0,o.Z)(n,e);var t=(0,l.Z)(n);function n(){var e;return(0,u.Z)(this,n),(e=t.apply(this,arguments)).attached=!1,e.clips=new M,e.lastUpdateId=-1,e.moving=!1,e.updateRequested=!1,e}return(0,s.Z)(n,[{key:"initialize",value:function(){var e,t,n,i,r=this,a=null===(e=null===(t=this.view)||void 0===t?void 0:t.spatialReferenceLocked)||void 0===e||e;(null===(n=this.view)||void 0===n?void 0:n.spatialReference)&&a&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new h.a("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new v.s),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([(0,p.l)((function(){return r.suspended}),(function(e){r.container&&(r.container.visible=!e),r.view&&!e&&r.updateRequested&&r.view.requestUpdate()}),p.w),(0,p.l)((function(){var e,t;return null!==(e=null===(t=r.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1}),(function(e){r.container&&(r.container.opacity=e)}),p.w),(0,p.l)((function(){return r.layer&&"blendMode"in r.layer?r.layer.blendMode:"normal"}),(function(e){r.container&&(r.container.blendMode=e)}),p.w),(0,p.l)((function(){return r.layer&&"effect"in r.layer?r.layer.effect:null}),(function(e){r.container&&(r.container.effect=e)}),p.w),(0,p.a)((function(){return r.clips}),"change",(function(){r.container&&(r.container.clips=r.clips)}))]),null!==(i=this.view)&&void 0!==i&&i.whenLayerView?this.view.whenLayerView(this.layer).then((function(e){e===r&&r.processAttach()}),(function(){})):this.when().then((function(){r.processAttach()}),(function(){})))}},{key:"destroy",value:function(){this.processDetach(),this.updateRequested=!1}},{key:"spatialReferenceSupported",get:function(){var e,t=null===(e=this.view)||void 0===e?void 0:e.spatialReference;return null==t||this.supportsSpatialReference(t)}},{key:"updating",get:function(){var e;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null===(e=this.updatingHandles)||void 0===e||!e.updating))}},{key:"visibleAtCurrentScale",get:function(){return this.isVisibleAtScale(this.view.scale)}},{key:"processAttach",value:function(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}},{key:"processDetach",value:function(){this.attached&&(this.attached=!1,this.detach(),this.updateRequested=!1)}},{key:"isVisibleAtScale",value:function(e){var t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;var n=t.minScale,i=t.maxScale;return(0===n||e<=n)&&(0===i||e>=i)}},{key:"requestUpdate",value:function(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}},{key:"processUpdate",value:function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}},{key:"hitTest",value:function(e,t){return Promise.resolve(null)}},{key:"supportsSpatialReference",value:function(e){return!0}},{key:"canResume",value:function(){return!!this.spatialReferenceSupported&&!!(0,r.Z)((0,a.Z)(n.prototype),"canResume",this).call(this)&&this.visibleAtCurrentScale}},{key:"getSuspendInfo",value:function(){var e=(0,r.Z)((0,a.Z)(n.prototype),"getSuspendInfo",this).call(this),t=!this.spatialReferenceSupported,i=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),i&&(e.outsideScaleRange=i),e}}]),n}(e);return(0,h.e)([(0,h.d)()],t.prototype,"attached",void 0),(0,h.e)([(0,h.d)({type:M,set:function(e){var t=(0,d.n)(e,this._get("clips"),M);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,h.e)([(0,h.d)()],t.prototype,"container",void 0),(0,h.e)([(0,h.d)()],t.prototype,"moving",void 0),(0,h.e)([(0,h.d)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,h.e)([(0,h.d)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,h.e)([(0,h.d)()],t.prototype,"updateRequested",void 0),(0,h.e)([(0,h.d)()],t.prototype,"updating",null),(0,h.e)([(0,h.d)()],t.prototype,"view",void 0),(0,h.e)([(0,h.d)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",null),t=(0,h.e)([(0,h.n)("esri.views.2d.layers.LayerView2D")],t)}},11071:function(e,t,n){n.r(t);var i=n(74165),r=n(15861),a=n(93433),s=n(37762),u=n(29439),o=n(15671),l=n(43144),h=n(11752),c=n(61120),d=n(60136),p=n(29388),v=n(23132),f=(n(91204),n(80175)),y=n(75610),m=n(36551),g=n(78311),_=n(80262),x=n(88844),w=n(54026),k=(n(38415),n(59819),n(2760)),Z=n(42446),R=n(90138),b=n(6819),S=n(97566),C=n(78880),O=n(96401),I=n(40273),M=n(21523),T=n(37783),P=n(1241),q=n(30709),A=n(76470),V=n(28329),E=n(95208),L=n(20842),U=n(5900),D=(n(36460),n(57714),n(21583),n(63022),n(44455),n(61340),n(33703),n(69953),n(45379),n(30604),n(87833),n(6794),n(49580),n(41742),n(43920),n(54841),n(18392),n(34860),n(36638),n(70441),n(50448),n(43124),n(69797),n(45332),n(77470),n(84538),n(92870),n(97033),n(72692),n(77389),n(48561),n(55269),n(83822),n(51451),n(50526),n(1773),n(77196),n(24980),n(3114),n(22144),n(78674),n(66307),n(88370),n(72820),n(96349),n(9055),n(79611),n(2157),n(32568),n(69202),n(27597),n(67417),n(15181),n(33642),n(28999),n(15612),n(10590),n(19948),n(96636),n(30664),n(38304),n(83024),n(47626),n(25316),n(407),n(67154),n(79054),n(29709),n(47642),n(18411),n(43782),n(33976),n(28210),n(17436),n(53373),n(94872),n(3969),n(79042),n(61495),n(16485),n(92029),n(74575),n(9575),n(53249),n(83996),n(72763),n(28681),n(38929),n(97866),n(68890),n(31513),n(25838),n(54539),n(19967),n(50338),n(28623),n(10312),n(95254),n(61099),n(12158),n(93874),n(62446),n(27264),n(50905),n(78945),n(55827),n(70516),n(25279),n(22268),n(40452),n(60424),n(22225),n(38425),n(42471),n(78470),n(1665),n(38843),n(24892),n(48889),n(30150),n(53647),n(81663),n(14181),n(86270),n(47672),n(10815),n(84192),n(71710),n(93669),n(90584),n(45578),n(45794),n(14946),n(85331),n(77372),n(85523),n(69754),n(38802),n(49607),n(38058),n(66156),function(e){(0,d.Z)(n,e);var t=(0,p.Z)(n);function n(e){var i;return(0,o.Z)(this,n),(i=t.call(this)).elementView=e,i.isWrapAround=!1,i._vertices=new Float32Array(20),i._handles=[],i._handles.push((0,m.l)((function(){return i.elementView.element.opacity}),(function(e){return i.opacity=e}),m.h),(0,m.l)((function(){return[i.elementView.coords]}),(function(){i.requestRender()}),m.h),(0,m.f)((function(){return i.elementView.element.loaded}),(function(){var e=i.elementView.element;i.ready(),"video"===e.type&&(0,y.r)(e.content)&&i._handles.push((0,v.f)(e.content,"play",(function(){return i.requestRender()})))}),m.h)),e.element.load().catch((function(t){v.s.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new v.a("element-load-error","Element cannot be displayed",{element:e,error:t}))})),i}return(0,l.Z)(n,[{key:"destroy",value:function(){var e;this._handles.forEach((function(e){return e.remove()})),null!==(e=this.texture)&&void 0!==e&&e.dispose(),this.texture=null}},{key:"dvsMat3",get:function(){return this.parent.dvsMat3}},{key:"beforeRender",value:function(e){var t=e.context,i=this.elementView.element.content;if((0,y.r)(i)){var r=i instanceof HTMLImageElement,a=i instanceof HTMLVideoElement,s=r?i.naturalWidth:a?i.videoWidth:i.width,u=r?i.naturalHeight:a?i.videoHeight:i.height;this.texture?a&&!i.paused&&(this.texture.setData(i),this.requestRender(),((0,S.n)(t.gl)||(0,k.ah)(s)&&(0,k.ah)(u))&&this.texture.generateMipmap()):(this.texture=new S.u(t,{pixelFormat:b.P.RGBA,dataType:b.G.UNSIGNED_BYTE,samplingMode:b.L.LINEAR,wrapMode:b.D.CLAMP_TO_EDGE,width:s,height:u},i),((0,S.n)(t.gl)||(0,k.ah)(s)&&(0,k.ah)(u))&&this.texture.generateMipmap(),a&&!i.paused&&this.requestRender())}(0,h.Z)((0,c.Z)(n.prototype),"beforeRender",this).call(this,e)}},{key:"_createTransforms",value:function(){return null}},{key:"updateDrawCoords",value:function(e,t){var n=this.elementView.coords;if(!(0,y.t)(n)){var i=(0,u.Z)(n.rings[0],4),r=i[0],a=i[1],s=i[2],o=i[3],l=this._vertices,h=e.x,c=e.y,d=0!==t;d?l.set([a[0]-h,a[1]-c,r[0]-h,r[1]-c,s[0]-h,s[1]-c,o[0]-h,o[1]-c,o[0]-h,o[1]-c,a[0]+t-h,a[1]-c,a[0]+t-h,a[1]-c,r[0]+t-h,r[1]-c,s[0]+t-h,s[1]-c,o[0]+t-h,o[1]-c]):l.set([a[0]-h,a[1]-c,r[0]-h,r[1]-c,s[0]-h,s[1]-c,o[0]-h,o[1]-c]),this.isWrapAround=d}}},{key:"getVAO",value:function(e,t,n){if((0,y.t)(this.elementView.coords))return null;var i=this._vertices;if(this._vao)this._geometryVbo.setData(i);else{this._geometryVbo=R.c.createVertex(e,b.F.DYNAMIC_DRAW,i);var r=R.c.createVertex(e,b.F.STATIC_DRAW,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]));this._vao=new R.f(e,n,t,{geometry:this._geometryVbo,tex:r})}return this._vao}}]),n}(Z.a)),N=function(e){(0,d.Z)(n,e);var t=(0,p.Z)(n);function n(){var e;return(0,o.Z)(this,n),(e=t.apply(this,arguments))._localOrigin=(0,C.c)(0,0),e._viewStateId=-1,e._dvsMat3=(0,I.M)(),e.requiresDedicatedFBO=!1,e}return(0,l.Z)(n,[{key:"dvsMat3",get:function(){return this._dvsMat3}},{key:"beforeRender",value:function(e){this._updateMatrices(e),this._updateOverlays(e,this.children);var t,n=(0,s.Z)(this.children);try{for(n.s();!(t=n.n()).done;){t.value.beforeRender(e)}}catch(i){n.e(i)}finally{n.f()}}},{key:"prepareRenderPasses",value:function(e){var t=this,i=e.registerRenderPass({name:"overlay",brushes:[A.W.overlay],target:function(){return t.children},drawPhase:V.I.MAP});return[].concat((0,a.Z)((0,h.Z)((0,c.Z)(n.prototype),"prepareRenderPasses",this).call(this,e)),[i])}},{key:"_updateMatrices",value:function(e){var t=e.state,n=t.id,i=t.size,r=t.pixelRatio,a=t.resolution,s=t.rotation,u=t.viewpoint,o=t.displayMat3;if(this._viewStateId!==n){var l=Math.PI/180*s,h=r*i[0],c=r*i[1],d=u.targetGeometry,p=d.x,v=d.y,f=(0,P.z)(p,t.spatialReference);this._localOrigin.x=f,this._localOrigin.y=v;var y=a*h,m=a*c,g=(0,O.r)(this._dvsMat3);(0,O.i)(g,g,o),(0,O.M)(g,g,(0,M.t)(h/2,c/2)),(0,O.f)(g,g,(0,T.r)(h/y,-c/m,1)),(0,O.h)(g,g,-l),this._viewStateId=n}}},{key:"_updateOverlays",value:function(e,t){var n=e.state,i=n.rotation,r=n.spatialReference,a=n.worldScreenWidth,o=n.size,l=n.viewpoint,h=this._localOrigin,c=0;if(r.isWrappable){var d=o[0],p=o[1],v=180/Math.PI*i,f=Math.abs(Math.cos(v)),m=Math.abs(Math.sin(v)),g=Math.round(d*f+p*m),_=(0,u.Z)((0,q.b)(r).valid,2),x=_[0],w=_[1],k=(0,I.Q)(r),Z=l.targetGeometry,R=Z.x,b=[R,Z.y],S=[0,0];n.toScreen(S,b);var C,O=[0,0];C=g>a?.5*a:.5*g;var M=Math.floor((R+.5*k)/k),T=x+M*k,P=w+M*k,A=[S[0]+C,0];n.toMap(O,A),O[0]>P&&(c=k),A[0]=S[0]-C,n.toMap(O,A),O[0]<T&&(c=-k);var V,E=(0,s.Z)(t);try{for(E.s();!(V=E.n()).done;){var L=V.value,U=L.elementView.bounds;if(!(0,y.t)(U)){var D=(0,u.Z)(U,3),N=D[0],z=D[2];N<x&&z>x?L.updateDrawCoords(h,k):z>w&&N<w?L.updateDrawCoords(h,-k):L.updateDrawCoords(h,c)}}}catch(W){E.e(W)}finally{E.f()}}else{var j,F=(0,s.Z)(t);try{for(F.s();!(j=F.n()).done;){j.value.updateDrawCoords(h,c)}}catch(W){F.e(W)}finally{F.f()}}}}]),n}(E.a),z=function(e){(0,d.Z)(n,e);var t=(0,p.Z)(n);function n(){var e;return(0,o.Z)(this,n),(e=t.apply(this,arguments))._overlayContainer=null,e._fetchQueue=null,e._tileStrategy=null,e._elementReferences=new Map,e.layer=null,e.elements=new f.j,e}return(0,l.Z)(n,[{key:"attach",value:function(){var e=this;this.handles.add((0,m.a)((function(){return e.layer.source}),"refresh",(function(){var t,n=(0,s.Z)(e._tileStrategy.tiles);try{for(n.s();!(t=n.n()).done;){var i=t.value;e._updateTile(i)}}catch(r){n.e(r)}finally{n.f()}e.requestUpdate()}))),this._overlayContainer=new N,this.container.addChild(this._overlayContainer),this._fetchQueue=new w.p({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:function(t,n){return e._queryElements(t,n)}}),this._tileStrategy=new w.r({cachePolicy:"purge",resampling:!0,acquireTile:function(t){return e._acquireTile(t)},releaseTile:function(t){return e._releaseTile(t)},tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate()}},{key:"detach",value:function(){this.handles.removeAll(),this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear()}},{key:"supportsSpatialReference",value:function(e){return!0}},{key:"moveStart",value:function(){this.requestUpdate()}},{key:"viewChange",value:function(){this.requestUpdate()}},{key:"moveEnd",value:function(){this.requestUpdate()}},{key:"update",value:function(e){this._tileStrategy.update(e)}},{key:"hitTest",value:function(){var e=(0,r.Z)((0,i.Z)().mark((function e(t,n){var r,a,u,o,l,h,c;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=[],a=[t.x,t.y],u=(0,s.Z)(this.elements);try{for(u.s();!(o=u.n()).done;)h=o.value,c=null===(l=(0,y.e)(h.georeference))||void 0===l?void 0:l.coords,(0,y.r)(c)&&(0,_.s)(c.rings,a)&&r.push({type:"media",element:h,layer:this.layer,mapPoint:t})}catch(n){u.e(n)}finally{u.f()}return e.abrupt("return",r.reverse());case 4:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"canResume",value:function(){return null!=this.layer.source&&(0,h.Z)((0,c.Z)(n.prototype),"canResume",this).call(this)}},{key:"doRefresh",value:function(){var e=(0,r.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"_acquireTile",value:function(e){var t=new F(e.clone());return this._updateTile(t),t}},{key:"_updateTile",value:function(e){var t=this;this.updatingHandles.addPromise(this._fetchQueue.push(e.key).then((function(n){var i=e.setElements(n),r=(0,u.Z)(i,2),a=r[0],s=r[1];t._acquireElements(e,a),t._releaseElements(e,s),t.requestUpdate()}),(function(e){(0,v.u)(e)||v.s.getLogger(t.declaredClass).error(e)})))}},{key:"_releaseTile",value:function(e){this._fetchQueue.abort(e.key.id),e.elements&&this._releaseElements(e,e.elements),this.requestUpdate()}},{key:"_queryElements",value:function(){var e=(0,r.Z)((0,i.Z)().mark((function e(t,n){var r,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.layer.source,!(0,y.t)(r)){e.next=3;break}return e.abrupt("return",[]);case 3:return this.view.featuresTilingScheme.getTileBounds(j,t,!0),a=new _.M({xmin:j[0],ymin:j[1],xmax:j[2],ymax:j[3],spatialReference:this.view.spatialReference}),e.abrupt("return",r.queryElements(a,n));case 6:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_acquireElements",value:function(e,t){var n=this,i=this.layer.source,r=this.view.spatialReference;if(!(0,y.t)(i)){var a,u=(0,s.Z)(t);try{var o=function(){var t=a.value;(0,v.ac)(n._elementReferences,t.uid,(function(){var e=new x.a({element:t,spatialReference:r}),i=new D(e);return n._overlayContainer.addChild(i),n.elements.add(t),{tiles:new Set,projectedElement:e,overlay:i}})).tiles.add(e)};for(u.s();!(a=u.n()).done;)o()}catch(l){u.e(l)}finally{u.f()}}}},{key:"_releaseElements",value:function(e,t){var n,i=(0,s.Z)(t);try{for(i.s();!(n=i.n()).done;){var r=n.value,a=this._elementReferences.get(r.uid);a.tiles.delete(e),a.tiles.size||(this._overlayContainer.removeChild(a.overlay),a.overlay.destroy(),a.projectedElement.destroy(),this._elementReferences.delete(r.uid),this.elements.remove(r))}}catch(u){i.e(u)}finally{i.f()}}}]),n}((0,L.f)(U.u));(0,v.e)([(0,v.d)()],z.prototype,"_fetchQueue",void 0),(0,v.e)([(0,v.d)()],z.prototype,"layer",void 0),(0,v.e)([(0,v.d)({readOnly:!0})],z.prototype,"elements",void 0),z=(0,v.e)([(0,v.n)("esri.views.2d.layers.MediaLayerView2D")],z);var j=(0,g.u)(),F=function(){function e(t){(0,o.Z)(this,e),this.key=t,this.elements=null,this.isReady=!1,this.visible=!0}return(0,l.Z)(e,[{key:"setElements",value:function(e){var t=[],n=new Set(this.elements);this.elements=e;var i,r=(0,s.Z)(e);try{for(r.s();!(i=r.n()).done;){var a=i.value;n.has(a)?n.delete(a):t.push(a)}}catch(u){r.e(u)}finally{r.f()}return this.isReady=!0,[t,Array.from(n)]}}]),e}(),W=z;t.default=W},88844:function(e,t,n){n.d(t,{a:function(){return p}});var i=n(15671),r=n(43144),a=n(60136),s=n(29388),u=n(23132),o=n(75610),l=n(36460),h=n(63022),c=n(78311),d=n(45379),p=function(e){(0,a.Z)(n,e);var t=(0,s.Z)(n);function n(e){return(0,i.Z)(this,n),t.call(this,e)}return(0,r.Z)(n,[{key:"bounds",get:function(){var e=this.coords;return(0,o.t)(e)?null:(0,c.c)(e.extent)}},{key:"coords",get:function(){var e,t=null===(e=(0,o.e)(this.element.georeference))||void 0===e?void 0:e.coords;return(0,h.u)(t,this.spatialReference).geometry}},{key:"normalizedCoords",get:function(){return l.v.fromJSON((0,d.p)(this.coords))}},{key:"normalizedBounds",get:function(){return(0,o.r)(this.normalizedCoords)?(0,c.c)(this.normalizedCoords.extent):null}}]),n}(u.y);(0,u.e)([(0,u.d)()],p.prototype,"spatialReference",void 0),(0,u.e)([(0,u.d)()],p.prototype,"element",void 0),(0,u.e)([(0,u.d)()],p.prototype,"bounds",null),(0,u.e)([(0,u.d)()],p.prototype,"coords",null),(0,u.e)([(0,u.d)()],p.prototype,"normalizedCoords",null),(0,u.e)([(0,u.d)()],p.prototype,"normalizedBounds",null),p=(0,u.e)([(0,u.n)("esri.layers.support.media.MediaElementView")],p)},45379:function(e,t,n){n.d(t,{f:function(){return v},p:function(){return p}});var i=n(43144),r=n(15671),a=n(37762),s=n(29439),u=n(75610),o=n(78311),l=n(36460),h=n(30604),c=n(1241),d=n(30709);function p(e){return f(e,!0)}function v(e){return f(e,!1)}function f(e,t){if((0,u.t)(e))return null;var n=e.spatialReference,i=(0,d.b)(n),r="toJSON"in e?e.toJSON():e;if(!i)return r;var a=(0,d.f)(n)?102100:4326,s=c.r[a].maxX,o=c.r[a].minX;if((0,h.l)(r))return m(r,s,o);if((0,h.f)(r))return r.points=r.points.map((function(e){return m(e,s,o)})),r;if((0,h.s)(r))return y(r,i);if((0,h.c)(r)||(0,h.y)(r)){var p=(0,l.c)(Z,r),v={xmin:p[0],ymin:p[1],xmax:p[2],ymax:p[3]},f=(0,c.i)(v.xmin,o)*(2*s),g=0===f?r:(0,c.s)(r,f);return v.xmin+=f,v.xmax+=f,v.xmax>s?w(g,s,t):v.xmin<o?w(g,o,t):g}return r}function y(e,t){if(!t)return e;var n=function(e,t){var n=[],i=e.ymin,r=e.ymax,a=e.xmin,u=e.xmax,o=e.xmax-e.xmin,l=(0,s.Z)(t.valid,2),h=l[0],c=l[1],d=g(e.xmin,t),p=d.x,v=d.frameId,f=g(e.xmax,t),y=f.x,m=f.frameId,x=p===y&&o>0;if(o>2*c){var w={xmin:a<u?p:y,ymin:i,xmax:c,ymax:r},Z={xmin:h,ymin:i,xmax:a<u?y:p,ymax:r},R={xmin:0,ymin:i,xmax:c,ymax:r},b={xmin:h,ymin:i,xmax:0,ymax:r},S=[],C=[];_(w,R)&&S.push(v),_(w,b)&&C.push(v),_(Z,R)&&S.push(m),_(Z,b)&&C.push(m);for(var O=v+1;O<m;O++)S.push(O),C.push(O);n.push(new k(w,[v]),new k(Z,[m]),new k(R,S),new k(b,C))}else p>y||x?n.push(new k({xmin:p,ymin:i,xmax:c,ymax:r},[v]),new k({xmin:h,ymin:i,xmax:y,ymax:r},[m])):n.push(new k({xmin:p,ymin:i,xmax:y,ymax:r},[v]));return n}(e,t).map((function(e){return e.extent}));return n.length<2?n[0]||e:n.length>2?(e.xmin=t.valid[0],e.xmax=t.valid[1],e):{rings:n.map((function(e){return[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]}))}}function m(e,t,n){if(Array.isArray(e)){var i=e[0];if(i>t){var r=(0,c.i)(i,t);e[0]=i+r*(-2*t)}else if(i<n){var a=(0,c.i)(i,n);e[0]=i+a*(-2*n)}}else{var s=e.x;if(s>t){var u=(0,c.i)(s,t);e.x+=u*(-2*t)}else if(s<n){var o=(0,c.i)(s,n);e.x+=o*(-2*n)}}return e}function g(e,t){var n,i=(0,s.Z)(t.valid,2),r=i[0],a=i[1],u=2*a,o=0;return e>a?(e-=(n=Math.ceil(Math.abs(e-a)/u))*u,o=n):e<r&&(e+=(n=Math.ceil(Math.abs(e-r)/u))*u,o=-n),{x:e,frameId:o}}function _(e,t){var n=t.xmin,i=t.ymin,r=t.xmax,a=t.ymax;return x(e,n,i)&&x(e,n,a)&&x(e,r,a)&&x(e,r,i)}function x(e,t,n){return t>=e.xmin&&t<=e.xmax&&n>=e.ymin&&n<=e.ymax}function w(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=!(0,h.y)(e);if(i&&(0,l.i)(e),n)return(new R).cut(e,t);for(var r=i?e.rings:e.paths,s=i?4:2,u=r.length,o=-2*t,c=0;c<u;c++){var d=r[c];if(d&&d.length>=s){var p,v=[],f=(0,a.Z)(d);try{for(f.s();!(p=f.n()).done;){var y=p.value;v.push([y[0]+o,y[1]])}}catch(m){f.e(m)}finally{f.f()}r.push(v)}}return i?e.rings=r:e.paths=r,e}var k=(0,i.Z)((function e(t,n){(0,r.Z)(this,e),this.extent=t,this.frameIds=n})),Z=(0,o.u)(),R=function(){function e(){(0,r.Z)(this,e),this.linesIn=[],this.linesOut=[]}return(0,i.Z)(e,[{key:"cut",value:function(e,t){var n;if(this.xCut=t,e.rings)this.closed=!0,n=e.rings,this.minPts=4;else{if(!e.paths)return null;this.closed=!1,n=e.paths,this.minPts=2}var i,r=(0,a.Z)(n);try{for(r.s();!(i=r.n()).done;){var s=i.value;if(s&&!(s.length<this.minPts)){var u,o=!0,l=(0,a.Z)(s);try{for(l.s();!(u=l.n()).done;){var h=u.value;o?(this.moveTo(h),o=!1):this.lineTo(h)}}catch(x){l.e(x)}finally{l.f()}this.closed&&this.close()}}}catch(x){r.e(x)}finally{r.f()}this._pushLineIn(),this._pushLineOut(),n=[];var c,d=(0,a.Z)(this.linesIn);try{for(d.s();!(c=d.n()).done;){var p=c.value;p&&p.length>=this.minPts&&n.push(p)}}catch(x){d.e(x)}finally{d.f()}var v,f=-2*this.xCut,y=(0,a.Z)(this.linesOut);try{for(y.s();!(v=y.n()).done;){var m=v.value;if(m&&m.length>=this.minPts){var g,_=(0,a.Z)(m);try{for(_.s();!(g=_.n()).done;){g.value[0]+=f}}catch(x){_.e(x)}finally{_.f()}n.push(m)}}}catch(x){y.e(x)}finally{y.f()}return this.closed?e.rings=n:e.paths=n,e}},{key:"moveTo",value:function(e){this._pushLineIn(),this._pushLineOut(),this._prevSide=this._side(e[0]),this._moveTo(e[0],e[1],this._prevSide),this._prevPt=e,this._firstPt=e}},{key:"lineTo",value:function(e){var t=this._side(e[0]);if(t*this._prevSide==-1){var n=this._intersect(this._prevPt,e);this._lineTo(this.xCut,n,0),this._prevSide=0,this._lineTo(e[0],e[1],t)}else this._lineTo(e[0],e[1],t);this._prevSide=t,this._prevPt=e}},{key:"close",value:function(){var e=this._firstPt,t=this._prevPt;e[0]===t[0]&&e[1]===t[1]||this.lineTo(e),this._checkClosingPt(this.lineIn),this._checkClosingPt(this.lineOut)}},{key:"_moveTo",value:function(e,t,n){this.closed?(this.lineIn.push([n<=0?e:this.xCut,t]),this.lineOut.push([n>=0?e:this.xCut,t])):(n<=0&&this.lineIn.push([e,t]),n>=0&&this.lineOut.push([e,t]))}},{key:"_lineTo",value:function(e,t,n){this.closed?(this._addPolyVertex(this.lineIn,n<=0?e:this.xCut,t),this._addPolyVertex(this.lineOut,n>=0?e:this.xCut,t)):n<0?(0===this._prevSide&&this._pushLineOut(),this.lineIn.push([e,t])):n>0?(0===this._prevSide&&this._pushLineIn(),this.lineOut.push([e,t])):this._prevSide<0?(this.lineIn.push([e,t]),this.lineOut.push([e,t])):this._prevSide>0&&(this.lineOut.push([e,t]),this.lineIn.push([e,t]))}},{key:"_addPolyVertex",value:function(e,t,n){var i=e.length;i>1&&e[i-1][0]===t&&e[i-2][0]===t?e[i-1][1]=n:e.push([t,n])}},{key:"_checkClosingPt",value:function(e){var t=e.length;t>3&&e[0][0]===this.xCut&&e[t-2][0]===this.xCut&&e[1][0]===this.xCut&&(e[0][1]=e[t-2][1],e.pop())}},{key:"_side",value:function(e){return e<this.xCut?-1:e>this.xCut?1:0}},{key:"_intersect",value:function(e,t){var n=(this.xCut-e[0])/(t[0]-e[0]);return e[1]+n*(t[1]-e[1])}},{key:"_pushLineIn",value:function(){this.lineIn&&this.lineIn.length>=this.minPts&&this.linesIn.push(this.lineIn),this.lineIn=[]}},{key:"_pushLineOut",value:function(){this.lineOut&&this.lineOut.length>=this.minPts&&this.linesOut.push(this.lineOut),this.lineOut=[]}}]),e}()},37783:function(e,t,n){function i(){return new Float32Array(3)}function r(e){var t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function a(e,t,n){var i=new Float32Array(3);return i[0]=e,i[1]=t,i[2]=n,i}function s(e,t){return new Float32Array(e,t,3)}function u(){return i()}function o(){return a(1,1,1)}function l(){return a(1,0,0)}function h(){return a(0,1,0)}function c(){return a(0,0,1)}n.d(t,{a:function(){return u},e:function(){return s},n:function(){return i},r:function(){return a},t:function(){return r}});var d=u(),p=o(),v=l(),f=h(),y=c();Object.freeze(Object.defineProperty({__proto__:null,create:i,clone:r,fromValues:a,createView:s,zeros:u,ones:o,unitX:l,unitY:h,unitZ:c,ZEROS:d,ONES:p,UNIT_X:v,UNIT_Y:f,UNIT_Z:y},Symbol.toStringTag,{value:"Module"}))}}]);
//# sourceMappingURL=1071.1ac87ef8.chunk.js.map