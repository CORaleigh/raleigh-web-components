"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[4470],{55540:function(e,t,i){i.d(t,{i:function(){return c}});var r=i(15671),n=i(43144),a=i(11752),s=i(61120),h=i(60136),u=i(29388),l=i(3441),c=function(e){(0,h.Z)(i,e);var t=(0,u.Z)(i);function i(){return(0,r.Z)(this,i),t.apply(this,arguments)}return(0,n.Z)(i,[{key:"renderChildren",value:function(e){this.attributeView.bindTextures(e.context,!1),this.children.some((function(e){return e.hasData}))&&((0,a.Z)((0,s.Z)(i.prototype),"renderChildren",this).call(this,e),e.drawPhase===l.I.MAP&&this._renderChildren(e),this.hasHighlight()&&e.drawPhase===l.I.HIGHLIGHT&&this._renderHighlight(e),this._boundsRenderer&&this._boundsRenderer.doRender(e))}},{key:"_renderHighlight",value:function(e){var t=e.painter.effects.highlight;t.bind(e),this._renderChildren(e,t.defines),t.draw(e),t.unbind()}}]),i}(i(28372).t)},64470:function(e,t,i){i.r(t);var r=i(37762),n=i(74165),a=i(15861),s=i(15671),h=i(43144),u=i(60136),l=i(29388),c=i(50165),o=i(89031),f=i(40133),p=i(73627),d=i(14527),g=i(20786),v=i(35744),y=i(55540),w=i(28372),_=i(60470),m=(i(33530),i(96263),i(77322),i(32335),i(31278),i(13994),i(98496),i(4483),i(79747),i(42),i(52155),i(75662),i(17493),i(62980),i(16377),i(9887),i(88406),i(66307),i(2760),i(42488),i(9330),i(79146),i(3029),i(42687),i(78330),i(78697),i(78664),i(68634),i(69738),i(73393),i(87110),i(72577),i(61772),i(92870),i(26079),i(22984),i(15508),i(17691),i(48561),i(55269),i(73428),i(86931),i(51613),i(80392),i(10489),i(62298),i(2815),i(2326),i(90339),i(76375),i(82046),i(49961),i(31412),i(53089),i(83172),i(66270),i(60418),i(84539),i(75366),i(5233),i(36235),i(61340),i(57439),i(59075),i(97823),i(49350),i(89354),i(16897),i(47642),i(63334),i(38419),i(84231),i(38665),i(32717),i(39853),i(94872),i(3969),i(43895),i(30594),i(73267),i(22628),i(24982),i(46584),i(7093),i(85966),i(28003),i(49796),i(58428),i(8049),i(80933),i(40858),i(95076),i(56389),i(86738),i(69205),i(50338),i(33074),i(31134),i(41524),i(68668),i(55916),i(66319),i(24781),i(2329),i(37243),i(97345),i(39001),i(84913),i(84823),i(9411),i(14826),i(64620),i(22225),i(75272),i(4197),i(86905),i(64997),i(26208),i(2816),i(46237),i(98428),i(5792),i(42094),i(67871),i(75097),i(47672),i(98643),i(83745),i(96401),i(87833),i(21523),i(84192),i(99057),i(26995),i(3096),i(99797),i(48308),i(35341),i(6819),i(25346),i(50463),i(48968),i(47692),i(45578),i(3441),i(94640),i(14023),i(27969),i(77372),i(66281),i(69754),i(38802),i(66156),i(33265),i(20592),i(44365),i(77006),i(29648),i(35650),i(7513),i(48606),i(68792),i(49510),i(6927),i(82909),i(95734),i(25593),i(69379),i(22494),i(18392),i(89324),i(6283),i(98057),i(20422),i(38969),i(75105),i(25715),i(51386),i(81044),i(40100),i(88533),i(77639),i(13089),i(49862),i(37783),"sublayers"),k="layerView",b=Object.freeze({remove:function(){},pause:function(){},resume:function(){}}),V=function(e){(0,u.Z)(i,e);var t=(0,l.Z)(i);function i(){var e;return(0,s.Z)(this,i),(e=t.apply(this,arguments))._highlightIds=new Map,e.container=new g.r,e}return(0,h.Z)(i,[{key:"fetchPopupFeatures",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Array.from(this.graphicsViews(),(function(e){return e.hitTest(t).filter((function(e){return!!e.popupTemplate}))})).flat());case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"graphicsViews",value:(0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,c.r)(this._graphicsViewsFeatureCollectionMap)){e.next=4;break}return e.delegateYield(this._graphicsViewsFeatureCollectionMap.keys(),"t0",2);case 2:case 6:e.next=9;break;case 4:if(!(0,c.r)(this._graphicsViews)){e.next=8;break}return e.delegateYield(this._graphicsViews,"t1",6);case 8:return e.delegateYield([],"t2",9);case 9:case"end":return e.stop()}}),e,this)}))},{key:"hitTest",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,i){var a=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Array.from(this.graphicsViews(),(function(e){var i=e.hitTest(t);if((0,c.r)(a._graphicsViewsFeatureCollectionMap)){var n,s=a._graphicsViewsFeatureCollectionMap.get(e),h=(0,r.Z)(i);try{for(h.s();!(n=h.n()).done;){var u=n.value;!u.popupTemplate&&s.popupTemplate&&(u.popupTemplate=s.popupTemplate)}}catch(l){h.e(l)}finally{h.f()}}return i})).flat().map((function(e){return{type:"graphic",graphic:e,layer:a.layer,mapPoint:t}})));case 1:case"end":return e.stop()}}),e,this)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"highlight",value:function(e){var t,i=this;return"number"==typeof e?t=[e]:e instanceof o.g?t=[e.uid]:Array.isArray(e)&&e.length>0?t="number"==typeof e[0]?e:e.map((function(e){return e&&e.uid})):f.j.isCollection(e)&&(t=e.map((function(e){return e&&e.uid})).toArray()),t=t.filter((function(e){return null!=e})),t.length?(this._addHighlight(t),{remove:function(){i._removeHighlight(t)}}):b}},{key:"update",value:function(e){var t,i=(0,r.Z)(this.graphicsViews());try{for(i.s();!(t=i.n()).done;){t.value.processUpdate(e)}}catch(n){i.e(n)}finally{i.f()}}},{key:"attach",value:function(){var e=this,t=this.view,i=function(){return e.requestUpdate()},n=this.layer.featureCollections;if((0,c.r)(n)&&n.length){this._graphicsViewsFeatureCollectionMap=new Map;var a,s=(0,r.Z)(n);try{var h=function(){var r=a.value,n=new y.i(e.view.featuresTilingScheme);n.fadeTransitionEnabled=!0;var s=new w.a({view:t,graphics:r.source,renderer:r.renderer,requestUpdateCallback:i,container:n});e._graphicsViewsFeatureCollectionMap.set(s,r),e.container.addChild(s.container),e.handles.add([(0,p.l)((function(){return r.visible}),(function(e){return s.container.visible=e}),p.h),(0,p.l)((function(){return s.updating}),(function(){return e.notifyChange("updating")}),p.h)],k)};for(s.s();!(a=s.n()).done;)h()}catch(u){s.e(u)}finally{s.f()}this._updateHighlight()}else(0,c.r)(this.layer.sublayers)&&this.handles.add((0,p.a)((function(){return e.layer.sublayers}),"change",(function(){return e._createGraphicsViews()}),{onListenerAdd:function(){return e._createGraphicsViews()},onListenerRemove:function(){return e._destroyGraphicsViews()}}),m)}},{key:"detach",value:function(){this._destroyGraphicsViews(),this.handles.remove(m)}},{key:"moveStart",value:function(){}},{key:"moveEnd",value:function(){}},{key:"viewChange",value:function(){var e,t=(0,r.Z)(this.graphicsViews());try{for(t.s();!(e=t.n()).done;){e.value.viewChange()}}catch(i){t.e(i)}finally{t.f()}}},{key:"isUpdating",value:function(){var e,t=(0,r.Z)(this.graphicsViews());try{for(t.s();!(e=t.n()).done;){if(e.value.updating)return!0}}catch(i){t.e(i)}finally{t.f()}return!1}},{key:"_destroyGraphicsViews",value:function(){this.container.removeAllChildren(),this.handles.remove(k);var e,t=(0,r.Z)(this.graphicsViews());try{for(t.s();!(e=t.n()).done;){e.value.destroy()}}catch(i){t.e(i)}finally{t.f()}this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}},{key:"_createGraphicsViews",value:function(){var e=this;if(this._destroyGraphicsViews(),!(0,c.t)(this.layer.sublayers)){var t,i=[],n=this.view,a=function(){return e.requestUpdate()},s=(0,r.Z)(this.layer.sublayers);try{var h=function(){var r=t.value,s=new d.s,h=new y.i(e.view.featuresTilingScheme);h.fadeTransitionEnabled=!0;var u=new w.a({view:n,graphics:r.graphics,requestUpdateCallback:a,container:h});e.handles.add([r.on("graphic-update",u.graphicUpdateHandler),(0,p.l)((function(){return r.visible}),(function(e){return u.container.visible=e}),p.h),(0,p.l)((function(){return u.updating}),(function(){return e.notifyChange("updating")}),p.h)],k),s.addChild(u.container),e.container.addChild(s),i.push(u)};for(s.s();!(t=s.n()).done;)h()}catch(u){s.e(u)}finally{s.f()}this._graphicsViews=i,this._updateHighlight()}}},{key:"_addHighlight",value:function(e){var t,i=(0,r.Z)(e);try{for(i.s();!(t=i.n()).done;){var n=t.value;if(this._highlightIds.has(n)){var a=this._highlightIds.get(n);this._highlightIds.set(n,a+1)}else this._highlightIds.set(n,1)}}catch(s){i.e(s)}finally{i.f()}this._updateHighlight()}},{key:"_removeHighlight",value:function(e){var t,i=(0,r.Z)(e);try{for(i.s();!(t=i.n()).done;){var n=t.value;if(this._highlightIds.has(n)){var a=this._highlightIds.get(n)-1;0===a?this._highlightIds.delete(n):this._highlightIds.set(n,a)}}}catch(s){i.e(s)}finally{i.f()}this._updateHighlight()}},{key:"_updateHighlight",value:function(){var e,t=Array.from(this._highlightIds.keys()),i=(0,r.Z)(this.graphicsViews());try{for(i.s();!(e=i.n()).done;){e.value.setHighlight(t)}}catch(n){i.e(n)}finally{i.f()}}}]),i}((0,v.f)(_.u)),Z=V=(0,c.e)([(0,c.n)("esri.views.2d.layers.MapNotesLayerView2D")],V);t.default=Z}}]);
//# sourceMappingURL=4470.3f0823fb.chunk.js.map