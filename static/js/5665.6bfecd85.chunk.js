"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[5665],{80175:function(e,t,i){i.d(t,{E:function(){return _},a:function(){return g},e:function(){return d},j:function(){return x},n:function(){return m}});var n=i(37762),r=i(74165),s=i(97326),a=i(60136),h=i(29388),l=i(93433),o=i(15671),u=i(43144),c=i(23132),v=i(75610),f=function(){function e(){(0,o.Z)(this,e),this._emitter=new e.EventEmitter(this)}return(0,u.Z)(e,[{key:"emit",value:function(e,t){return this._emitter.emit(e,t)}},{key:"on",value:function(e,t){return this._emitter.on(e,t)}},{key:"once",value:function(e,t){return this._emitter.once(e,t)}},{key:"hasEventListener",value:function(e){return this._emitter.hasEventListener(e)}}]),e}();!function(e){var t=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;(0,o.Z)(this,e),this.target=t,this._listenersMap=null}return(0,u.Z)(e,[{key:"clear",value:function(){this._listenersMap&&this._listenersMap.clear(),this._listenersMap=null}},{key:"emit",value:function(e,t){var i=this._listenersMap&&this._listenersMap.get(e);if(!i)return!1;var n=this.target||this;return(0,l.Z)(i).forEach((function(e){e.call(n,t)})),i.length>0}},{key:"on",value:function(e,t){var i=this;if(Array.isArray(e)){var n=e.map((function(e){return i.on(e,t)}));return(0,c.h)(n)}if(e.includes(","))throw new TypeError("Evented.on() with a comma delimited string of event types is not supported");this._listenersMap||(this._listenersMap=new Map);var r=this._listenersMap.get(e)||[];return r.push(t),this._listenersMap.set(e,r),{remove:function(){var n=i._listenersMap&&i._listenersMap.get(e)||[],r=n.indexOf(t);r>=0&&n.splice(r,1)}}}},{key:"once",value:function(e,t){var i=this.on(e,(function(e){i.remove(),t.call(null,e)}));return i}},{key:"hasEventListener",value:function(e){var t=this._listenersMap&&this._listenersMap.get(e);return null!=t&&t.length>0}}]),e}();e.EventEmitter=t,e.EventedMixin=function(e){var i=function(e){(0,a.Z)(n,e);var i=(0,h.Z)(n);function n(){var e;return(0,o.Z)(this,n),(e=i.apply(this,arguments))._emitter=new t,e}return(0,u.Z)(n,[{key:"destroy",value:function(){this._emitter.clear()}},{key:"emit",value:function(e,t){return this._emitter.emit(e,t)}},{key:"on",value:function(e,t){return this._emitter.on(e,t)}},{key:"once",value:function(e,t){return this._emitter.once(e,t)}},{key:"hasEventListener",value:function(e){return this._emitter.hasEventListener(e)}}]),n}(e);return i=(0,c.e)([(0,c.n)("esri.core.Evented")],i)};var i=function(e){(0,a.Z)(i,e);var t=(0,h.Z)(i);function i(){var e;return(0,o.Z)(this,i),(e=t.apply(this,arguments))._emitter=new f.EventEmitter((0,s.Z)(e)),e}return(0,u.Z)(i,[{key:"destroy",value:function(){this._emitter.clear()}},{key:"emit",value:function(e,t){return this._emitter.emit(e,t)}},{key:"on",value:function(e,t){return this._emitter.on(e,t)}},{key:"once",value:function(e,t){return this._emitter.once(e,t)}},{key:"hasEventListener",value:function(e){return this._emitter.hasEventListener(e)}}]),i}(c.y);i=(0,c.e)([(0,c.n)("esri.core.Evented")],i),e.EventedAccessor=i}(f||(f={}));var _,m=f;function g(e){return function(t,i){t[i]=e}}!function(e){e[e.ADD=1]="ADD",e[e.REMOVE=2]="REMOVE",e[e.MOVE=4]="MOVE"}(_||(_={}));var y,d=function(){function e(){(0,o.Z)(this,e),this._observers=[]}return(0,u.Z)(e,[{key:"observe",value:function(e){return this._observers.includes(e)||this._observers.push(e),new c.w(this._observers,e)}},{key:"notify",value:function(){for(var e=this._observers.slice(),t=0;t<e.length;++t){var i=e[t];i.onInvalidated(),i.onCommitted()}}}]),e}(),p=function(){function e(){(0,o.Z)(this,e),this.target=null,this.cancellable=!1,this.defaultPrevented=!1,this.item=void 0,this.type=void 0}return(0,u.Z)(e,[{key:"preventDefault",value:function(){this.cancellable&&(this.defaultPrevented=!0)}},{key:"reset",value:function(e){this.defaultPrevented=!1,this.item=e}}]),e}(),b=new c.z(p,void 0,(function(e){e.item=null,e.target=null,e.defaultPrevented=!1,e.cancellable=!1})),A=function(){};function k(e){return e?e instanceof V?e.toArray():e.length?Array.prototype.slice.apply(e):[]:[]}function E(e){if(e&&e.length)return e[0]}function C(e,t,i,n){for(var r=Math.min(e.length-i,t.length-n),s=0;s<r&&e[i+s]===t[n+s];)s++;return s}function M(e,t,i,n){t&&t.forEach((function(t,r,s){e.push(t),M(e,i.call(n,t,r,s),i,n)}))}var Z=new Set,O=new Set,w=new Set,D=new Map,L=0,V=y=function(e,t){(0,a.Z)(f,e);var i=(0,h.Z)(f);function f(e){var t;return(0,o.Z)(this,f),(t=i.call(this,e))._chgListeners=[],t._notifications=null,t._timer=null,t._observable=new d,t.length=0,t._items=[],Object.defineProperty((0,s.Z)(t),"uid",{value:L++}),t}return(0,u.Z)(f,[{key:"normalizeCtorArgs",value:function(e){return e?Array.isArray(e)||e instanceof y?{items:e}:e:{}}},{key:"destroy",value:function(){this.removeAll()}},{key:t,value:(0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.delegateYield(this.items,"t0",1);case 1:case"end":return e.stop()}}),e,this)}))},{key:"items",get:function(){return(0,c.A)(this._observable),this._items}},{key:"items",set:function(e){this._emitBeforeChanges(_.ADD)||(this._splice(0,this.length,k(e)),this._emitAfterChanges(_.ADD))}},{key:"hasEventListener",value:function(e){return"change"===e?this._chgListeners.length>0:this._emitter.hasEventListener(e)}},{key:"on",value:function(e,t){if("change"===e){var i=this._chgListeners,n={removed:!1,callback:t};return i.push(n),this._notifications&&this._notifications.push({listeners:i.slice(),items:this._items.slice(),changes:[]}),{remove:function(){this.remove=A,n.removed=!0,i.splice(i.indexOf(n),1)}}}return this._emitter.on(e,t)}},{key:"once",value:function(e,t){var i=this.on(e,t);return{remove:function(){i.remove()}}}},{key:"add",value:function(e,t){if((0,c.A)(this._observable),this._emitBeforeChanges(_.ADD))return this;var i=this.getNextIndex(null!==t&&void 0!==t?t:null);return this._splice(i,0,[e]),this._emitAfterChanges(_.ADD),this}},{key:"addMany",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._items.length;if((0,c.A)(this._observable),!e||!e.length)return this;if(this._emitBeforeChanges(_.ADD))return this;var i=this.getNextIndex(t);return this._splice(i,0,k(e)),this._emitAfterChanges(_.ADD),this}},{key:"at",value:function(e){if((0,c.A)(this._observable),(e=Math.trunc(e)||0)<0&&(e+=this.length),!(e<0||e>=this.length))return this._items[e]}},{key:"removeAll",value:function(){if((0,c.A)(this._observable),!this.length||this._emitBeforeChanges(_.REMOVE))return[];var e=this._splice(0,this.length)||[];return this._emitAfterChanges(_.REMOVE),e}},{key:"clone",value:function(){return(0,c.A)(this._observable),this._createNewInstance({items:this._items.map(v.m)})}},{key:"concat",value:function(){var e;(0,c.A)(this._observable);for(var t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];var r=i.map(k);return this._createNewInstance({items:(e=this._items).concat.apply(e,(0,l.Z)(r))})}},{key:"drain",value:function(e,t){if((0,c.A)(this._observable),this.length&&!this._emitBeforeChanges(_.REMOVE)){for(var i=(0,v.q)(this._splice(0,this.length)),n=i.length,r=0;r<n;r++)e.call(t,i[r],r,i);this._emitAfterChanges(_.REMOVE)}}},{key:"every",value:function(e,t){return(0,c.A)(this._observable),this._items.every(e,t)}},{key:"filter",value:function(e,t){var i;return(0,c.A)(this._observable),i=2===arguments.length?this._items.filter(e,t):this._items.filter(e),this._createNewInstance({items:i})}},{key:"find",value:function(e,t){return(0,c.A)(this._observable),this._items.find(e,t)}},{key:"findIndex",value:function(e,t){return(0,c.A)(this._observable),this._items.findIndex(e,t)}},{key:"flatten",value:function(e,t){(0,c.A)(this._observable);var i=[];return M(i,this,e,t),new y(i)}},{key:"forEach",value:function(e,t){return(0,c.A)(this._observable),this._items.forEach(e,t)}},{key:"getItemAt",value:function(e){return(0,c.A)(this._observable),this._items[e]}},{key:"getNextIndex",value:function(e){(0,c.A)(this._observable);var t=this.length;return(e=null==e?t:e)<0?e=0:e>t&&(e=t),e}},{key:"includes",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(0,c.A)(this._observable),this._items.includes(e,t)}},{key:"indexOf",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(0,c.A)(this._observable),this._items.indexOf(e,t)}},{key:"join",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:",";return(0,c.A)(this._observable),this._items.join(e)}},{key:"lastIndexOf",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.length-1;return(0,c.A)(this._observable),this._items.lastIndexOf(e,t)}},{key:"map",value:function(e,t){(0,c.A)(this._observable);var i=this._items.map(e,t);return new y({items:i})}},{key:"reorder",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.length-1;(0,c.A)(this._observable);var i=this.indexOf(e);if(-1!==i){if(t<0?t=0:t>=this.length&&(t=this.length-1),i!==t){if(this._emitBeforeChanges(_.MOVE))return e;this._splice(i,1),this._splice(t,0,[e]),this._emitAfterChanges(_.MOVE)}return e}}},{key:"pop",value:function(){if((0,c.A)(this._observable),this.length&&!this._emitBeforeChanges(_.REMOVE)){var e=E(this._splice(this.length-1,1));return this._emitAfterChanges(_.REMOVE),e}}},{key:"push",value:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(0,c.A)(this._observable),this._emitBeforeChanges(_.ADD)||(this._splice(this.length,0,t),this._emitAfterChanges(_.ADD)),this.length}},{key:"reduce",value:function(e,t){(0,c.A)(this._observable);var i=this._items;return 2===arguments.length?i.reduce(e,t):i.reduce(e)}},{key:"reduceRight",value:function(e,t){(0,c.A)(this._observable);var i=this._items;return 2===arguments.length?i.reduceRight(e,t):i.reduceRight(e)}},{key:"remove",value:function(e){return(0,c.A)(this._observable),this.removeAt(this.indexOf(e))}},{key:"removeAt",value:function(e){if((0,c.A)(this._observable),!(e<0||e>=this.length||this._emitBeforeChanges(_.REMOVE))){var t=E(this._splice(e,1));return this._emitAfterChanges(_.REMOVE),t}}},{key:"removeMany",value:function(e){if((0,c.A)(this._observable),!e||!e.length||this._emitBeforeChanges(_.REMOVE))return[];for(var t=e instanceof y?e.toArray():e,i=this._items,n=[],r=t.length,s=0;s<r;s++){var a=t[s],h=i.indexOf(a);if(h>-1){var l=1+C(t,i,s+1,h+1),o=this._splice(h,l);o&&o.length>0&&n.push.apply(n,o),s+=l-1}}return this._emitAfterChanges(_.REMOVE),n}},{key:"reverse",value:function(){if((0,c.A)(this._observable),this._emitBeforeChanges(_.MOVE))return this;var e=this._splice(0,this.length);return e&&(e.reverse(),this._splice(0,0,e)),this._emitAfterChanges(_.MOVE),this}},{key:"shift",value:function(){if((0,c.A)(this._observable),this.length&&!this._emitBeforeChanges(_.REMOVE)){var e=E(this._splice(0,1));return this._emitAfterChanges(_.REMOVE),e}}},{key:"slice",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.length;return(0,c.A)(this._observable),this._createNewInstance({items:this._items.slice(e,t)})}},{key:"some",value:function(e,t){return(0,c.A)(this._observable),this._items.some(e,t)}},{key:"sort",value:function(e){if((0,c.A)(this._observable),!this.length||this._emitBeforeChanges(_.MOVE))return this;var t=(0,v.q)(this._splice(0,this.length));return arguments.length?t.sort(e):t.sort(),this._splice(0,0,t),this._emitAfterChanges(_.MOVE),this}},{key:"splice",value:function(e,t){(0,c.A)(this._observable);for(var i=arguments.length,n=new Array(i>2?i-2:0),r=2;r<i;r++)n[r-2]=arguments[r];var s=(t?_.REMOVE:0)|(n.length?_.ADD:0);if(this._emitBeforeChanges(s))return[];var a=this._splice(e,t,n)||[];return this._emitAfterChanges(s),a}},{key:"toArray",value:function(){return(0,c.A)(this._observable),this._items.slice()}},{key:"toJSON",value:function(){return(0,c.A)(this._observable),this.toArray()}},{key:"toLocaleString",value:function(){return(0,c.A)(this._observable),this._items.toLocaleString()}},{key:"toString",value:function(){return(0,c.A)(this._observable),this._items.toString()}},{key:"unshift",value:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(0,c.A)(this._observable),!t.length||this._emitBeforeChanges(_.ADD)||(this._splice(0,0,t),this._emitAfterChanges(_.ADD)),this.length}},{key:"_createNewInstance",value:function(e){return new this.constructor(e)}},{key:"_splice",value:function(e,t,i){var r,s,a=this,h=this._items,o=this.itemType;if(!this._notifications&&this.hasEventListener("change")&&(this._notifications=[{listeners:this._chgListeners.slice(),items:this._items.slice(),changes:[]}],this._timer&&this._timer.remove(),this._timer=(0,c.B)((function(){return a._dispatchChange()}))),t){if(s=h.splice(e,t),this.hasEventListener("before-remove")){var u=b.acquire();u.target=this,u.cancellable=!0;for(var v=0,f=s.length;v<f;v++)r=s[v],u.reset(r),this.emit("before-remove",u),u.defaultPrevented&&(s.splice(v,1),h.splice(e,0,r),e+=1,v-=1,f-=1);b.release(u)}if(this.length=this._items.length,this.hasEventListener("after-remove")){var _=b.acquire();_.target=this,_.cancellable=!1;for(var m=s.length,g=0;g<m;g++)_.reset(s[g]),this.emit("after-remove",_);b.release(_)}}if(i&&i.length){if(o){var y,d=[],p=(0,n.Z)(i);try{for(p.s();!(y=p.n()).done;){var A=y.value,k=o.ensureType(A);null==k&&null!=A||d.push(k)}}catch(B){p.e(B)}finally{p.f()}i=d}var E=this.hasEventListener("before-add"),C=this.hasEventListener("after-add"),M=e===this.length;if(E||C){var Z=b.acquire();Z.target=this,Z.cancellable=!0;var O=b.acquire();O.target=this,O.cancellable=!1;var w,D=(0,n.Z)(i);try{for(D.s();!(w=D.n()).done;){var L=w.value;E?(Z.reset(L),this.emit("before-add",Z),Z.defaultPrevented||(M?h.push(L):h.splice(e++,0,L),this._set("length",h.length),C&&(O.reset(L),this.emit("after-add",O)))):(M?h.push(L):h.splice(e++,0,L),this._set("length",h.length),O.reset(L),this.emit("after-add",O))}}catch(B){D.e(B)}finally{D.f()}b.release(O),b.release(Z)}else{if(M){var V,x=(0,n.Z)(i);try{for(x.s();!(V=x.n()).done;){var R=V.value;h.push(R)}}catch(B){x.e(B)}finally{x.f()}}else h.splice.apply(h,[e,0].concat((0,l.Z)(i)));this._set("length",h.length)}}return(i&&i.length||s&&s.length)&&this._notifyChangeEvent(i,s),s}},{key:"_emitBeforeChanges",value:function(e){var t=!1;if(this.hasEventListener("before-changes")){var i=b.acquire();i.target=this,i.cancellable=!0,i.type=e,this.emit("before-changes",i),t=i.defaultPrevented,b.release(i)}return t}},{key:"_emitAfterChanges",value:function(e){if(this.hasEventListener("after-changes")){var t=b.acquire();t.target=this,t.cancellable=!1,t.type=e,this.emit("after-changes",t),b.release(t)}this._observable.notify()}},{key:"_notifyChangeEvent",value:function(e,t){this.hasEventListener("change")&&this._notifications&&this._notifications[this._notifications.length-1].changes.push({added:e,removed:t})}},{key:"_dispatchChange",value:function(){var e=this;if(this._timer&&(this._timer.remove(),this._timer=null),this._notifications){var t=this._notifications;this._notifications=null;var i,r=(0,n.Z)(t);try{var s=function(){var t=i.value,r=t.changes;Z.clear(),O.clear(),w.clear();var s,a=(0,n.Z)(r);try{for(a.s();!(s=a.n()).done;){var h=s.value,l=h.added,o=h.removed;if(l)if(0===w.size&&0===O.size){var u,v=(0,n.Z)(l);try{for(v.s();!(u=v.n()).done;){var f=u.value;Z.add(f)}}catch(I){v.e(I)}finally{v.f()}}else{var _,m=(0,n.Z)(l);try{for(m.s();!(_=m.n()).done;){var g=_.value;O.has(g)?(w.add(g),O.delete(g)):w.has(g)||Z.add(g)}}catch(I){m.e(I)}finally{m.f()}}if(o)if(0===w.size&&0===Z.size){var y,d=(0,n.Z)(o);try{for(d.s();!(y=d.n()).done;){var p=y.value;O.add(p)}}catch(I){d.e(I)}finally{d.f()}}else{var b,A=(0,n.Z)(o);try{for(A.s();!(b=A.n()).done;){var k=b.value;Z.has(k)?Z.delete(k):(w.delete(k),O.add(k))}}catch(I){A.e(I)}finally{A.f()}}}}catch(I){a.e(I)}finally{a.f()}var E=c.t.acquire();Z.forEach((function(e){E.push(e)}));var C=c.t.acquire();O.forEach((function(e){C.push(e)}));var M=e._items,D=t.items,L=c.t.acquire();if(w.forEach((function(e){D.indexOf(e)!==M.indexOf(e)&&L.push(e)})),t.listeners&&(E.length||C.length||L.length))for(var V={target:e,added:E,removed:C,moved:L},x=t.listeners.length,R=0;R<x;R++){var B=t.listeners[R];B.removed||B.callback.call(e,V)}c.t.release(E),c.t.release(C),c.t.release(L)};for(r.s();!(i=r.n()).done;)s()}catch(a){r.e(a)}finally{r.f()}Z.clear(),O.clear(),w.clear()}}}],[{key:"isCollection",value:function(e){return null!=e&&e instanceof y}}]),f}(m.EventedAccessor,Symbol.iterator);V.ofType=function(e){if(!e)return y;if(D.has(e))return D.get(e);var t=null;if("function"==typeof e)t=e.prototype.declaredClass;else if(e.base)t=e.base.prototype.declaredClass;else for(var i in e.typeMap){var n=e.typeMap[i].prototype.declaredClass;t?t+=" | ".concat(n):t=n}var r=function(e){(0,a.Z)(i,e);var t=(0,h.Z)(i);function i(){return(0,o.Z)(this,i),t.apply(this,arguments)}return(0,u.Z)(i)}(y);return(0,c.e)([g({Type:e,ensureType:"function"==typeof e?(0,c.b)(e):(0,c.N)(e)})],r.prototype,"itemType",void 0),r=(0,c.e)([(0,c.n)("esri.core.Collection<".concat(t,">"))],r),D.set(e,r),r},(0,c.e)([(0,c.d)()],V.prototype,"length",void 0),(0,c.e)([(0,c.d)()],V.prototype,"items",null);var x=V=y=(0,c.e)([(0,c.n)("esri.core.Collection")],V)}}]);
//# sourceMappingURL=5665.6bfecd85.chunk.js.map