"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[1613],{54289:function(e,i,n){n.r(i);var r=n(15671),t=n(43144),l=n(60136),a=n(29388),s=n(23132),u=n(80175),o=n(9055),y=n(75610),v=n(36551),d=n(5900),h=(n(21583),n(97033),n(77470),n(77196),n(43920),function(e){(0,l.Z)(n,e);var i=(0,a.Z)(n);function n(e){var t;return(0,r.Z)(this,n),(t=i.call(this,e)).type="group",t.layerViews=new u.j,t}return(0,t.Z)(n,[{key:"_allLayerViewVisibility",value:function(e){this.layerViews.forEach((function(i){i.visible=e}))}},{key:"initialize",value:function(){var e=this;this.handles.add([this.layerViews.on("change",(function(i){return e._layerViewsChangeHandler(i)})),(0,v.l)((function(){return e.layer.visibilityMode}),(function(){return e._applyVisibility((function(){return e._allLayerViewVisibility(e.visible)}),(function(){return e._applyExclusiveVisibility(null)}))}),v.U),(0,v.l)((function(){return e.visible}),(function(i){e._applyVisibility((function(){return e._allLayerViewVisibility(i)}),(function(){}))}),v.U)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}},{key:"layerViews",set:function(e){this._set("layerViews",(0,o.n)(e,this._get("layerViews")))}},{key:"updatingProgress",get:function(){return 0===this.layerViews.length?1:this.layerViews.reduce((function(e,i){return e+i.updatingProgress}),0)/this.layerViews.length}},{key:"isUpdating",value:function(){return this.layerViews.some((function(e){return e.updating}))}},{key:"_hasLayerViewVisibleOverrides",value:function(){return this.layerViews.some((function(e){return e._isOverridden("visible")}))}},{key:"_findLayerViewForLayer",value:function(e){return e&&this.layerViews.find((function(i){return i.layer===e}))}},{key:"_firstVisibleOnLayerOrder",value:function(){var e=this,i=this.layer.layers.find((function(i){var n;return null===(n=e._findLayerViewForLayer(i))||void 0===n?void 0:n.visible}));return i&&this._findLayerViewForLayer(i)}},{key:"_applyExclusiveVisibility",value:function(e){(0,y.t)(e)&&(e=this._firstVisibleOnLayerOrder(),(0,y.t)(e)&&this.layerViews.length>0&&(e=this._findLayerViewForLayer(this.layer.layers.getItemAt(0)))),this.layerViews.forEach((function(i){i.visible=i===e}))}},{key:"_layerViewsChangeHandler",value:function(e){var i=this;this.handles.remove("grouplayerview:visible"),this.handles.add(this.layerViews.map((function(e){return(0,v.l)((function(){return e.visible}),(function(n){return i._applyVisibility((function(){n!==i.visible&&(e.visible=i.visible)}),(function(){return i._applyExclusiveVisibility(n?e:null)}))}),v.U)})).toArray(),"grouplayerview:visible");var n=e.added[e.added.length-1];this._applyVisibility((function(){return i._allLayerViewVisibility(i.visible)}),(function(){return i._applyExclusiveVisibility(null!==n&&void 0!==n&&n.visible?n:null)}))}},{key:"_applyVisibility",value:function(e,i){var n,r;this._hasLayerViewVisibleOverrides()&&("inherited"===(null===(n=this.layer)||void 0===n?void 0:n.visibilityMode)?e():"exclusive"===(null===(r=this.layer)||void 0===r?void 0:r.visibilityMode)&&i())}}]),n}(d.u));(0,s.e)([(0,s.d)({cast:o.t})],h.prototype,"layerViews",null),(0,s.e)([(0,s.d)({readOnly:!0})],h.prototype,"updatingProgress",null),(0,s.e)([(0,s.d)()],h.prototype,"view",void 0);var c=h=(0,s.e)([(0,s.n)("esri.views.layers.GroupLayerView")],h);i.default=c},81613:function(e,i,n){n.r(i);var r=n(15671),t=n(43144),l=n(60136),a=n(29388),s=n(23132),u=(n(75610),n(62666)),o=n(20842),y=n(54289),v=(n(21583),n(95208),n(40273),n(77470),n(80175),n(36551),n(84538),n(49580),n(41742),n(57714),n(43920),n(54841),n(33703),n(92870),n(97033),n(72692),n(77389),n(48561),n(55269),n(2760),n(44455),n(30709),n(70441),n(83822),n(91204),n(80262),n(36460),n(51451),n(50526),n(50448),n(1773),n(77196),n(24980),n(3114),n(22144),n(78674),n(66307),n(88370),n(72820),n(78311),n(96349),n(9055),n(79611),n(2157),n(30604),n(32568),n(69202),n(27597),n(1241),n(67417),n(15181),n(33642),n(28999),n(69953),n(15612),n(43124),n(69797),n(34860),n(36638),n(10590),n(19948),n(96636),n(30664),n(38304),n(83024),n(61340),n(47626),n(25316),n(407),n(67154),n(79054),n(29709),n(47642),n(18411),n(43782),n(33976),n(28210),n(17436),n(53373),n(94872),n(3969),n(79042),n(61495),n(16485),n(92029),n(74575),n(9575),n(53249),n(83996),n(72763),n(6794),n(28681),n(38929),n(97866),n(68890),n(31513),n(25838),n(54539),n(19967),n(50338),n(28623),n(10312),n(95254),n(61099),n(12158),n(93874),n(62446),n(27264),n(50905),n(78945),n(55827),n(70516),n(25279),n(22268),n(40452),n(60424),n(22225),n(38425),n(42471),n(78470),n(1665),n(38843),n(24892),n(48889),n(30150),n(53647),n(81663),n(14181),n(86270),n(47672),n(63022),n(10815),n(96401),n(87833),n(21523),n(84192),n(71710),n(45332),n(76470),n(6819),n(93669),n(42446),n(90584),n(90138),n(97566),n(45578),n(28329),n(45794),n(14946),n(85331),n(77372),n(85523),n(69754),n(38802),n(49607),n(38058),n(66156),n(5900),function(e){(0,l.Z)(n,e);var i=(0,a.Z)(n);function n(){var e;return(0,r.Z)(this,n),(e=i.apply(this,arguments)).container=new u.r,e}return(0,t.Z)(n,[{key:"attach",value:function(){var e=this;this._updateStageChildren(),this.handles.add(this.layerViews.on("after-changes",(function(){return e._updateStageChildren()})),"grouplayerview2d")}},{key:"detach",value:function(){this.handles.remove("grouplayerview2d"),this.container.removeAllChildren()}},{key:"update",value:function(e){}},{key:"moveStart",value:function(){}},{key:"viewChange",value:function(){}},{key:"moveEnd",value:function(){}},{key:"_updateStageChildren",value:function(){var e=this;this.container.removeAllChildren(),this.layerViews.forEach((function(i,n){return e.container.addChildAt(i.container,n)}))}}]),n}((0,o.f)(y.default))),d=v=(0,s.e)([(0,s.n)("esri.views.2d.layers.GroupLayerView2D")],v);i.default=d}}]);
//# sourceMappingURL=1613.0084fb3c.chunk.js.map