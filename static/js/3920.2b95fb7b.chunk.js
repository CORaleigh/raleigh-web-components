"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[3920],{43920:function(e,n,i){i.d(n,{_:function(){return Z},g:function(){return k},l:function(){return P},m:function(){return D},s:function(){return g}});var s,r,o,t,l,u=i(97326),a=i(60136),c=i(29388),v=i(93433),f=i(15671),h=i(43144),_=i(23132),d=i(75610),p=null!==(s=null===(r=globalThis.esriConfig)||void 0===r?void 0:r.locale)&&void 0!==s?s:null===(o=globalThis.dojoConfig)||void 0===o?void 0:o.locale;function m(){var e,n;return null!==(e=null!==p&&void 0!==p?p:null===(n=globalThis.navigator)||void 0===n?void 0:n.language)&&void 0!==e?e:"en"}function P(){return void 0===l&&(l=m()),l}var E=[];function g(e){return E.push(e),{remove:function(){E.splice(E.indexOf(e),1)}}}var y,R=[];function k(e){return R.push(e),{remove:function(){E.splice(R.indexOf(e),1)}}}null===(t=globalThis.addEventListener)||void 0===t||t.call(globalThis,"languagechange",(function(){var e=m();l!==e&&(l=e,[].concat(R).forEach((function(n){n.call(null,e)})),[].concat(E).forEach((function(n){n.call(null,e)})))})),function(e){e[e.PENDING=0]="PENDING",e[e.RESOLVED=1]="RESOLVED",e[e.REJECTED=2]="REJECTED"}(y||(y={}));var w=function(){function e(n){var i=this;(0,f.Z)(this,e),this.instance=n,this._resolver=(0,_.T)(),this._status=y.PENDING,this._resolvingPromises=[],this._resolver.promise.then((function(){i._status=y.RESOLVED,i._cleanUp()}),(function(){i._status=y.REJECTED,i._cleanUp()}))}return(0,h.Z)(e,[{key:"addResolvingPromise",value:function(e){this._resolvingPromises.push(e),this._tryResolve()}},{key:"isResolved",value:function(){return this._status===y.RESOLVED}},{key:"isRejected",value:function(){return this._status===y.REJECTED}},{key:"isFulfilled",value:function(){return this._status!==y.PENDING}},{key:"abort",value:function(){this._resolver.reject((0,_.m)())}},{key:"when",value:function(e,n){return this._resolver.promise.then(e,n)}},{key:"_cleanUp",value:function(){this._allPromise=this._resolvingPromises=this._allPromise=null}},{key:"_tryResolve",value:function(){var e=this;if(!this.isFulfilled()){var n=(0,_.T)(),i=[].concat((0,v.Z)(this._resolvingPromises),[(0,d.q)(n.promise)]),s=this._allPromise=Promise.all(i);s.then((function(){e.isFulfilled()||e._allPromise!==s||e._resolver.resolve(e.instance)}),(function(n){e.isFulfilled()||e._allPromise!==s||(0,_.u)(n)||e._resolver.reject(n)})),n.resolve()}}}]),e}(),D=function(e){var n=function(e){(0,a.Z)(i,e);var n=(0,c.Z)(i);function i(){var e;(0,f.Z)(this,i);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r)))._promiseProps=new w((0,u.Z)(e)),e.addResolvingPromise(Promise.resolve()),e}return(0,h.Z)(i,[{key:"isResolved",value:function(){return this._promiseProps.isResolved()}},{key:"isRejected",value:function(){return this._promiseProps.isRejected()}},{key:"isFulfilled",value:function(){return this._promiseProps.isFulfilled()}},{key:"when",value:function(e,n){var i=this;return new Promise((function(e,n){i._promiseProps.when(e,n)})).then(e,n)}},{key:"catch",value:function(e){return this.when(null,e)}},{key:"addResolvingPromise",value:function(e){e&&!this._promiseProps.isFulfilled()&&this._promiseProps.addResolvingPromise("_promiseProps"in e?e.when():e)}}]),i}(e);return n=(0,_.e)([(0,_.n)("esri.core.Promise")],n)},Z=function(e){(0,a.Z)(i,e);var n=(0,c.Z)(i);function i(){return(0,f.Z)(this,i),n.apply(this,arguments)}return(0,h.Z)(i)}(D(_.y));Z=(0,_.e)([(0,_.n)("esri.core.Promise")],Z)}}]);
//# sourceMappingURL=3920.2b95fb7b.chunk.js.map