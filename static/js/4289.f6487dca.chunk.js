"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[4289],{54289:function(e,i,t){t.r(i);var n=t(15671),r=t(43144),l=t(60136),a=t(29388),s=t(23132),u=t(80175),o=t(9055),y=t(75610),d=t(36551),v=t(5900),p=(t(21583),t(97033),t(77470),t(77196),t(43920),function(e){(0,l.Z)(t,e);var i=(0,a.Z)(t);function t(e){var r;return(0,n.Z)(this,t),(r=i.call(this,e)).type="group",r.layerViews=new u.j,r}return(0,r.Z)(t,[{key:"_allLayerViewVisibility",value:function(e){this.layerViews.forEach((function(i){i.visible=e}))}},{key:"initialize",value:function(){var e=this;this.handles.add([this.layerViews.on("change",(function(i){return e._layerViewsChangeHandler(i)})),(0,d.l)((function(){return e.layer.visibilityMode}),(function(){return e._applyVisibility((function(){return e._allLayerViewVisibility(e.visible)}),(function(){return e._applyExclusiveVisibility(null)}))}),d.U),(0,d.l)((function(){return e.visible}),(function(i){e._applyVisibility((function(){return e._allLayerViewVisibility(i)}),(function(){}))}),d.U)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}},{key:"layerViews",set:function(e){this._set("layerViews",(0,o.n)(e,this._get("layerViews")))}},{key:"updatingProgress",get:function(){return 0===this.layerViews.length?1:this.layerViews.reduce((function(e,i){return e+i.updatingProgress}),0)/this.layerViews.length}},{key:"isUpdating",value:function(){return this.layerViews.some((function(e){return e.updating}))}},{key:"_hasLayerViewVisibleOverrides",value:function(){return this.layerViews.some((function(e){return e._isOverridden("visible")}))}},{key:"_findLayerViewForLayer",value:function(e){return e&&this.layerViews.find((function(i){return i.layer===e}))}},{key:"_firstVisibleOnLayerOrder",value:function(){var e=this,i=this.layer.layers.find((function(i){var t;return null===(t=e._findLayerViewForLayer(i))||void 0===t?void 0:t.visible}));return i&&this._findLayerViewForLayer(i)}},{key:"_applyExclusiveVisibility",value:function(e){(0,y.t)(e)&&(e=this._firstVisibleOnLayerOrder(),(0,y.t)(e)&&this.layerViews.length>0&&(e=this._findLayerViewForLayer(this.layer.layers.getItemAt(0)))),this.layerViews.forEach((function(i){i.visible=i===e}))}},{key:"_layerViewsChangeHandler",value:function(e){var i=this;this.handles.remove("grouplayerview:visible"),this.handles.add(this.layerViews.map((function(e){return(0,d.l)((function(){return e.visible}),(function(t){return i._applyVisibility((function(){t!==i.visible&&(e.visible=i.visible)}),(function(){return i._applyExclusiveVisibility(t?e:null)}))}),d.U)})).toArray(),"grouplayerview:visible");var t=e.added[e.added.length-1];this._applyVisibility((function(){return i._allLayerViewVisibility(i.visible)}),(function(){return i._applyExclusiveVisibility(null!==t&&void 0!==t&&t.visible?t:null)}))}},{key:"_applyVisibility",value:function(e,i){var t,n;this._hasLayerViewVisibleOverrides()&&("inherited"===(null===(t=this.layer)||void 0===t?void 0:t.visibilityMode)?e():"exclusive"===(null===(n=this.layer)||void 0===n?void 0:n.visibilityMode)&&i())}}]),t}(v.u));(0,s.e)([(0,s.d)({cast:o.t})],p.prototype,"layerViews",null),(0,s.e)([(0,s.d)({readOnly:!0})],p.prototype,"updatingProgress",null),(0,s.e)([(0,s.d)()],p.prototype,"view",void 0);var c=p=(0,s.e)([(0,s.n)("esri.views.layers.GroupLayerView")],p);i.default=c},5900:function(e,i,t){t.d(i,{u:function(){return c}});var n=t(15671),r=t(43144),l=t(60136),a=t(29388),s=t(23132),u=t(80175),o=t(97033),y=t(77196),d=t(75610),v=t(43920),p=function(e){(0,l.Z)(t,e);var i=(0,a.Z)(t);function t(e){var r;return(0,n.Z)(this,t),(r=i.call(this,e)).layer=null,r.parent=null,r}return(0,r.Z)(t,[{key:"initialize",value:function(){var e=this;this.when().catch((function(i){if("layerview:create-error"!==i.name){var t=e.layer&&e.layer.id||"no id",n=e.layer&&e.layer.title||"no title";s.s.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '".concat(n,"', id: '").concat(t,"')"),i)}}))}},{key:"fullOpacity",get:function(){return(0,d.n)(this.get("layer.opacity"),1)*(0,d.n)(this.get("parent.fullOpacity"),1)}},{key:"suspended",get:function(){return!this.canResume()}},{key:"suspendInfo",get:function(){return this.getSuspendInfo()}},{key:"legendEnabled",get:function(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}},{key:"updating",get:function(){var e;return!((null===(e=this.updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}},{key:"updatingProgress",get:function(){return this.updating?0:1}},{key:"visible",get:function(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}},{key:"canResume",value:function(){var e,i,t;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(i=this.parent)&&void 0!==i&&i.suspended)&&(null===(t=this.view)||void 0===t?void 0:t.ready)||!1}},{key:"getSuspendInfo",value:function(){var e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}},{key:"isUpdating",value:function(){return!1}}]),t}((0,o.a)((0,y.s)((0,v.m)(u.n.EventedMixin(s.y)))));(0,s.e)([(0,s.d)()],p.prototype,"fullOpacity",null),(0,s.e)([(0,s.d)()],p.prototype,"layer",void 0),(0,s.e)([(0,s.d)()],p.prototype,"parent",void 0),(0,s.e)([(0,s.d)({readOnly:!0})],p.prototype,"suspended",null),(0,s.e)([(0,s.d)({readOnly:!0})],p.prototype,"suspendInfo",null),(0,s.e)([(0,s.d)({readOnly:!0})],p.prototype,"legendEnabled",null),(0,s.e)([(0,s.d)({type:Boolean,readOnly:!0})],p.prototype,"updating",null),(0,s.e)([(0,s.d)({readOnly:!0})],p.prototype,"updatingProgress",null),(0,s.e)([(0,s.d)()],p.prototype,"visible",null),(0,s.e)([(0,s.d)()],p.prototype,"view",void 0);var c=p=(0,s.e)([(0,s.n)("esri.views.layers.LayerView")],p)}}]);
//# sourceMappingURL=4289.f6487dca.chunk.js.map