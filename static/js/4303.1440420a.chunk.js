"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[4303],{7455:function(e,i,n){n.r(i);var r=n(15671),t=n(43144),l=n(60136),a=n(29388),s=n(50165),u=n(40133),o=n(42687),y=n(73627),v=n(60470),d=(n(22984),n(69738),n(17493),n(52155),function(e){(0,l.Z)(n,e);var i=(0,a.Z)(n);function n(e){var t;return(0,r.Z)(this,n),(t=i.call(this,e)).type="group",t.layerViews=new u.j,t}return(0,t.Z)(n,[{key:"_allLayerViewVisibility",value:function(e){this.layerViews.forEach((function(i){i.visible=e}))}},{key:"initialize",value:function(){var e=this;this.handles.add([this.layerViews.on("change",(function(i){return e._layerViewsChangeHandler(i)})),(0,y.l)((function(){return e.layer.visibilityMode}),(function(){return e._applyVisibility((function(){return e._allLayerViewVisibility(e.visible)}),(function(){return e._applyExclusiveVisibility(null)}))}),y.U),(0,y.l)((function(){return e.visible}),(function(i){e._applyVisibility((function(){return e._allLayerViewVisibility(i)}),(function(){}))}),y.U)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}},{key:"layerViews",set:function(e){this._set("layerViews",(0,o.n)(e,this._get("layerViews")))}},{key:"updatingProgress",get:function(){return 0===this.layerViews.length?1:this.layerViews.reduce((function(e,i){return e+i.updatingProgress}),0)/this.layerViews.length}},{key:"isUpdating",value:function(){return this.layerViews.some((function(e){return e.updating}))}},{key:"_hasLayerViewVisibleOverrides",value:function(){return this.layerViews.some((function(e){return e._isOverridden("visible")}))}},{key:"_findLayerViewForLayer",value:function(e){return e&&this.layerViews.find((function(i){return i.layer===e}))}},{key:"_firstVisibleOnLayerOrder",value:function(){var e=this,i=this.layer.layers.find((function(i){var n;return null===(n=e._findLayerViewForLayer(i))||void 0===n?void 0:n.visible}));return i&&this._findLayerViewForLayer(i)}},{key:"_applyExclusiveVisibility",value:function(e){(0,s.t)(e)&&(e=this._firstVisibleOnLayerOrder(),(0,s.t)(e)&&this.layerViews.length>0&&(e=this._findLayerViewForLayer(this.layer.layers.getItemAt(0)))),this.layerViews.forEach((function(i){i.visible=i===e}))}},{key:"_layerViewsChangeHandler",value:function(e){var i=this;this.handles.remove("grouplayerview:visible"),this.handles.add(this.layerViews.map((function(e){return(0,y.l)((function(){return e.visible}),(function(n){return i._applyVisibility((function(){n!==i.visible&&(e.visible=i.visible)}),(function(){return i._applyExclusiveVisibility(n?e:null)}))}),y.U)})).toArray(),"grouplayerview:visible");var n=e.added[e.added.length-1];this._applyVisibility((function(){return i._allLayerViewVisibility(i.visible)}),(function(){return i._applyExclusiveVisibility(null!==n&&void 0!==n&&n.visible?n:null)}))}},{key:"_applyVisibility",value:function(e,i){var n,r;this._hasLayerViewVisibleOverrides()&&("inherited"===(null===(n=this.layer)||void 0===n?void 0:n.visibilityMode)?e():"exclusive"===(null===(r=this.layer)||void 0===r?void 0:r.visibilityMode)&&i())}}]),n}(v.u));(0,s.e)([(0,s.d)({cast:o.t})],d.prototype,"layerViews",null),(0,s.e)([(0,s.d)({readOnly:!0})],d.prototype,"updatingProgress",null),(0,s.e)([(0,s.d)()],d.prototype,"view",void 0);var h=d=(0,s.e)([(0,s.n)("esri.views.layers.GroupLayerView")],d);i.default=h},94303:function(e,i,n){n.r(i);var r=n(15671),t=n(43144),l=n(60136),a=n(29388),s=n(50165),u=n(20786),o=n(35744),y=n(7455),v=(n(48308),n(68634),n(69738),n(40133),n(73627),n(73393),n(87110),n(42),n(13994),n(52155),n(72577),n(61772),n(92870),n(26079),n(22984),n(15508),n(17691),n(48561),n(55269),n(2760),n(73428),n(77322),n(32335),n(89031),n(33530),n(96263),n(31278),n(98496),n(4483),n(79747),n(75662),n(17493),n(62980),n(16377),n(9887),n(88406),n(66307),n(42488),n(9330),n(79146),n(3029),n(42687),n(78330),n(78697),n(78664),n(86931),n(51613),n(80392),n(10489),n(62298),n(2815),n(2326),n(90339),n(76375),n(82046),n(49961),n(31412),n(53089),n(83172),n(66270),n(60418),n(84539),n(75366),n(5233),n(36235),n(61340),n(57439),n(59075),n(97823),n(49350),n(89354),n(16897),n(47642),n(63334),n(38419),n(84231),n(38665),n(32717),n(39853),n(94872),n(3969),n(43895),n(30594),n(73267),n(22628),n(24982),n(46584),n(7093),n(85966),n(28003),n(49796),n(58428),n(8049),n(80933),n(40858),n(95076),n(56389),n(86738),n(69205),n(50338),n(33074),n(31134),n(41524),n(68668),n(55916),n(66319),n(24781),n(2329),n(37243),n(97345),n(39001),n(84913),n(84823),n(9411),n(14826),n(64620),n(22225),n(75272),n(4197),n(86905),n(64997),n(26208),n(2816),n(46237),n(98428),n(5792),n(42094),n(67871),n(75097),n(47672),n(98643),n(83745),n(96401),n(87833),n(21523),n(84192),n(99057),n(26995),n(35341),n(6819),n(25346),n(99797),n(50463),n(48968),n(47692),n(45578),n(3441),n(94640),n(14023),n(27969),n(77372),n(66281),n(69754),n(38802),n(14527),n(3096),n(66156),n(60470),function(e){(0,l.Z)(n,e);var i=(0,a.Z)(n);function n(){var e;return(0,r.Z)(this,n),(e=i.apply(this,arguments)).container=new u.r,e}return(0,t.Z)(n,[{key:"attach",value:function(){var e=this;this._updateStageChildren(),this.handles.add(this.layerViews.on("after-changes",(function(){return e._updateStageChildren()})),"grouplayerview2d")}},{key:"detach",value:function(){this.handles.remove("grouplayerview2d"),this.container.removeAllChildren()}},{key:"update",value:function(e){}},{key:"moveStart",value:function(){}},{key:"viewChange",value:function(){}},{key:"moveEnd",value:function(){}},{key:"_updateStageChildren",value:function(){var e=this;this.container.removeAllChildren(),this.layerViews.forEach((function(i,n){return e.container.addChildAt(i.container,n)}))}}]),n}((0,o.f)(y.default))),d=v=(0,s.e)([(0,s.n)("esri.views.2d.layers.GroupLayerView2D")],v);i.default=d}}]);
//# sourceMappingURL=4303.1440420a.chunk.js.map