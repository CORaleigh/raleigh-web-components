"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[6265],{49607:function(e,t,i){i.d(t,{s:function(){return d}});var n=i(1413),s=i(37762),r=i(15671),a=i(43144),l=i(11752),h=i(61120),o=i(60136),c=i(29388),u=i(40273),f=i(38058),d=function(e){(0,o.Z)(i,e);var t=(0,c.Z)(i);function i(){var e;return(0,r.Z)(this,i),(e=t.apply(this,arguments))._childrenSet=new Set,e._needsSort=!1,e.children=[],e._effectView=null,e}return(0,a.Z)(i,[{key:"blendMode",get:function(){return this._blendMode},set:function(e){this._blendMode=e,this.requestRender()}},{key:"clips",get:function(){return this._clips},set:function(e){this._clips=e,this.children.forEach((function(t){return t.clips=e}))}},{key:"computedEffects",get:function(){var e,t;return null!==(e=null===(t=this._effectView)||void 0===t?void 0:t.effects)&&void 0!==e?e:null}},{key:"effect",get:function(){var e,t;return null!==(e=null===(t=this._effectView)||void 0===t?void 0:t.effect)&&void 0!==e?e:""},set:function(e){(this._effectView||e)&&(this._effectView||(this._effectView=new f.h),this._effectView.effect=e,this.requestRender())}},{key:"updateTransitionProperties",value:function(e,t){(0,l.Z)((0,h.Z)(i.prototype),"updateTransitionProperties",this).call(this,e,t),this._effectView&&(this._effectView.transitionStep(e,t),this._effectView.transitioning&&this.requestRender())}},{key:"doRender",value:function(e){var t=this.createRenderParams(e);this.renderChildren(t)}},{key:"addChild",value:function(e){return this.addChildAt(e,this.children.length)}},{key:"addChildAt",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.children.length;if(!e)return e;if(this.contains(e))return e;this._needsSort=!0;var i=e.parent;return i&&i!==this&&i.removeChild(e),t>=this.children.length?this.children.push(e):this.children.splice(t,0,e),this._childrenSet.add(e),e.parent=this,e.stage=this.stage,this!==this.stage&&(e.clips=this.clips),this.requestRender(),e}},{key:"contains",value:function(e){return this._childrenSet.has(e)}},{key:"removeAllChildren",value:function(){this._childrenSet.clear(),this._needsSort=!0;var e,t=(0,s.Z)(this.children);try{for(t.s();!(e=t.n()).done;){var i=e.value;this!==this.stage&&(i.clips=null),i.stage=null,i.parent=null}}catch(n){t.e(n)}finally{t.f()}this.children.length=0}},{key:"removeChild",value:function(e){return this.contains(e)?this.removeChildAt(this.children.indexOf(e)):e}},{key:"removeChildAt",value:function(e){if(e<0||e>=this.children.length)return null;this._needsSort=!0;var t=this.children.splice(e,1)[0];return this._childrenSet.delete(t),this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null,t}},{key:"sortChildren",value:function(e){this._needsSort&&(this.children.sort(e),this._needsSort=!1)}},{key:"_createTransforms",value:function(){return{dvs:(0,u.M)()}}},{key:"onAttach",value:function(){(0,l.Z)((0,h.Z)(i.prototype),"onAttach",this).call(this);var e,t=this.stage,n=(0,s.Z)(this.children);try{for(n.s();!(e=n.n()).done;){e.value.stage=t}}catch(r){n.e(r)}finally{n.f()}}},{key:"onDetach",value:function(){(0,l.Z)((0,h.Z)(i.prototype),"onDetach",this).call(this);var e,t=(0,s.Z)(this.children);try{for(t.s();!(e=t.n()).done;){e.value.stage=null}}catch(n){t.e(n)}finally{t.f()}}},{key:"renderChildren",value:function(e){var t,i=(0,s.Z)(this.children);try{for(i.s();!(t=i.n()).done;){t.value.beforeRender(e)}}catch(h){i.e(h)}finally{i.f()}var n,r=(0,s.Z)(this.children);try{for(r.s();!(n=r.n()).done;){n.value.processRender(e)}}catch(h){r.e(h)}finally{r.f()}var a,l=(0,s.Z)(this.children);try{for(l.s();!(a=l.n()).done;){a.value.afterRender(e)}}catch(h){l.e(h)}finally{l.f()}}},{key:"createRenderParams",value:function(e){return(0,n.Z)((0,n.Z)({},e),{},{blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:e.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition})}}]),i}(i(42446).a)},42446:function(e,t,i){i.d(t,{a:function(){return u}});var n=i(15671),s=i(43144),r=i(60136),a=i(29388),l=i(80175),h=i(75610),o=i(23132),c=1/(0,h.a)("mapview-transitions-duration"),u=function(e){(0,r.Z)(i,e);var t=(0,a.Z)(i);function i(){var e;return(0,n.Z)(this,i),(e=t.apply(this,arguments))._fadeOutResolver=null,e._fadeInResolver=null,e._clips=null,e.computedVisible=!0,e.computedOpacity=1,e.fadeTransitionEnabled=!1,e.inFadeTransition=!1,e._isReady=!1,e._opacity=1,e._stage=null,e._visible=!0,e}return(0,s.Z)(i,[{key:"clips",get:function(){return this._clips},set:function(e){this._clips=e,this.requestRender()}},{key:"isReady",get:function(){return this._isReady}},{key:"opacity",get:function(){return this._opacity},set:function(e){this._opacity!==e&&(this._opacity=Math.min(1,Math.max(e,0)),this.requestRender())}},{key:"stage",get:function(){return this._stage},set:function(e){if(this._stage!==e){var t=this._stage;this._stage=e,e?this._stage.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):t.trashDisplayObject(this)}}},{key:"transforms",get:function(){return this._getTransforms()}},{key:"_getTransforms",value:function(){return(0,h.t)(this._transforms)&&(this._transforms=this._createTransforms()),this._transforms}},{key:"visible",get:function(){return this._visible},set:function(e){this._visible!==e&&(this._visible=e,this.requestRender())}},{key:"fadeIn",value:function(){return this._fadeInResolver||(this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.computedOpacity=0,this.fadeTransitionEnabled=!0,this._fadeInResolver=(0,o.ap)(),this.requestRender()),this._fadeInResolver.promise}},{key:"fadeOut",value:function(){return this._fadeOutResolver||(this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this.fadeTransitionEnabled=!0,this._fadeOutResolver=(0,o.ap)(),this.requestRender()),this._fadeOutResolver.promise}},{key:"beforeRender",value:function(e){this.updateTransitionProperties(e.deltaTime,e.state.scale)}},{key:"afterRender",value:function(e){this._fadeInResolver&&this.computedOpacity===this.opacity?(this._fadeInResolver(),this._fadeInResolver=null):this._fadeOutResolver&&0===this.computedOpacity&&(this._fadeOutResolver(),this._fadeOutResolver=null)}},{key:"remove",value:function(){var e;null===(e=this.parent)||void 0===e||e.removeChild(this)}},{key:"setTransform",value:function(e){}},{key:"processRender",value:function(e){this.stage&&this.computedVisible&&this.doRender(e)}},{key:"requestRender",value:function(){this.stage&&this.stage.requestRender()}},{key:"processDetach",value:function(){this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.onDetach(),this.emit("detach")}},{key:"updateTransitionProperties",value:function(e,t){if(this.fadeTransitionEnabled){var i=this._fadeOutResolver||!this.visible?0:this.opacity,n=this.computedOpacity;if(n===i)this.computedVisible=this.visible;else{var s=e*c;this.computedOpacity=n>i?Math.max(i,n-s):Math.min(i,n+s),this.computedVisible=this.computedOpacity>0;var r=i===this.computedOpacity;this.inFadeTransition=!r,r||this.requestRender()}}else this.computedOpacity=this.opacity,this.computedVisible=this.visible}},{key:"onAttach",value:function(){}},{key:"onDetach",value:function(){}},{key:"doRender",value:function(e){}},{key:"ready",value:function(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}}]),i}(l.n)},38058:function(e,t,i){i.d(t,{h:function(){return f}});var n=i(93433),s=i(15671),r=i(43144),a=i(60136),l=i(29388),h=i(23132),o=i(75610),c=i(83024),u=-1,f=function(e){(0,a.Z)(i,e);var t=(0,l.Z)(i);function i(e){var n;return(0,s.Z)(this,i),(n=t.call(this,e))._from=null,n._to=null,n._final=null,n._current=[],n._time=0,n.duration=(0,o.a)("mapview-transitions-duration"),n.effects=[],n}return(0,r.Z)(i,[{key:"effect",set:function(e){if(this._get("effect")!==(e=e||"")){this._set("effect",e);try{this._transitionTo(d(e))}catch(t){this._transitionTo([]),h.s.getLogger(this.declaredClass).warn("Invalid Effect",{effect:e,error:t})}}}},{key:"hasEffects",get:function(){return this.transitioning||!!this.effects.length}},{key:"scale",set:function(e){this._updateForScale(e)}},{key:"transitioning",get:function(){return null!==this._to}},{key:"canTransitionTo",value:function(e){try{return this.scale>0&&v(this._current,d(e),this.scale)}catch(t){return!1}}},{key:"transitionStep",value:function(e,t){this._applyTimeTransition(e),this._updateForScale(t)}},{key:"end",value:function(){this._applyTimeTransition(this.duration)}},{key:"_transitionTo",value:function(e){this.scale>0&&v(this._current,e,this.scale)?(this._final=e,this._to=(0,o.m)(e),function(e,t,i){for(var s,r,a=e.length>t.length?e:t,l=e.length>t.length?t:e,h=l[l.length-1],o=null!==(s=null===h||void 0===h?void 0:h.scale)&&void 0!==s?s:i,f=null!==(r=null===h||void 0===h?void 0:h.effects)&&void 0!==r?r:[],d=l.length;d<a.length;d++)l.push({scale:o,effects:(0,n.Z)(f)});for(var v=0;v<a.length;v++)l[v].scale=l[v].scale===u?i:l[v].scale,a[v].scale=a[v].scale===u?i:a[v].scale,(0,c.c)(l[v].effects,a[v].effects)}(this._current,this._to,this.scale),this._from=(0,o.m)(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=e),this._set("effects",this._current[0]?(0,o.m)(this._current[0].effects):[])}},{key:"_applyTimeTransition",value:function(e){if(this._to&&this._from&&this._current&&this._final){this._time+=e;for(var t=Math.min(1,this._time/this.duration),i=0;i<this._current.length;i++){var n=this._current[i],s=this._from[i],r=this._to[i];n.scale=_(s.scale,r.scale,t);for(var a=0;a<n.effects.length;a++){var l=n.effects[a],h=s.effects[a],c=r.effects[a];l.interpolate(h,c,t)}}1===t&&(this._current=this._final,this._set("effects",this._current[0]?(0,o.m)(this._current[0].effects):[]),this._from=this._to=this._final=null)}}},{key:"_updateForScale",value:function(e){if(this._set("scale",e),0!==this._current.length){var t,i,n=this._current,s=this._current.length-1,r=1;if(1===n.length||e>=n[0].scale)i=t=n[0].effects;else if(e<=n[s].scale)i=t=n[s].effects;else for(var a=0;a<s;a++){var l=n[a],h=n[a+1];if(l.scale>=e&&h.scale<=e){r=(e-l.scale)/(h.scale-l.scale),t=l.effects,i=h.effects;break}}for(var o=0;o<this.effects.length;o++)this.effects[o].interpolate(t[o],i[o],r)}}}]),i}(h.y);function d(e){var t=(0,c.d)(e)||[];return function(e){var t=e[0];return!!t&&"type"in t}(t)?[{scale:u,effects:t}]:t}function v(e,t,i){var n,s,r,a;return null===(n=e[0])||void 0===n||!n.effects||null===(s=t[0])||void 0===s||!s.effects||!(((null===(r=e[0])||void 0===r?void 0:r.scale)===u||(null===(a=t[0])||void 0===a?void 0:a.scale)===u)&&(e.length>1||t.length>1)&&i<=0)&&(0,c.b)(e[0].effects,t[0].effects)}function _(e,t,i){return e+(t-e)*i}(0,h.e)([(0,h.d)()],f.prototype,"_to",void 0),(0,h.e)([(0,h.d)()],f.prototype,"duration",void 0),(0,h.e)([(0,h.d)({value:""})],f.prototype,"effect",null),(0,h.e)([(0,h.d)({readOnly:!0})],f.prototype,"effects",void 0),(0,h.e)([(0,h.d)({readOnly:!0})],f.prototype,"hasEffects",null),(0,h.e)([(0,h.d)({value:0})],f.prototype,"scale",null),(0,h.e)([(0,h.d)({readOnly:!0})],f.prototype,"transitioning",null),f=(0,h.e)([(0,h.n)("esri.layers.effects.EffectView")],f)},49655:function(e,t,i){i.d(t,{t:function(){return r}});var n=i(43144),s=i(15671),r=(0,n.Z)((function e(t,i,n,r,a){var l=arguments.length>5&&void 0!==arguments[5]&&arguments[5],h=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;(0,s.Z)(this,e),this.name=t,this.count=i,this.type=n,this.offset=r,this.stride=a,this.normalized=l,this.divisor=h}))}}]);
//# sourceMappingURL=6265.daec5bd5.chunk.js.map