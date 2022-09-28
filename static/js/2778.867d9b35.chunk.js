"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[2778,42,4391,1772],{55269:function(e,t,n){n.d(t,{i:function(){return a},o:function(){return u},r:function(){return l},s:function(){return c}});var r=n(15671),i=n(43144),o=n(2760),a=function(){function e(t,n){(0,r.Z)(this,e),this.min=t,this.max=n,this.range=n-t}return(0,i.Z)(e,[{key:"ndiff",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.ceil((e-t)/this.range)*this.range+t}},{key:"_normalize",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return(n-=r)<e?n+=this.ndiff(e-n):n>t&&(n-=this.ndiff(n-t)),i&&n===t&&(n=e),n+r}},{key:"normalize",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return this._normalize(this.min,this.max,e,t,n)}},{key:"clamp",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(0,o.o)(e-t,this.min,this.max)+t}},{key:"monotonic",value:function(e,t,n){return e<t?t:t+this.ndiff(e-t,n)}},{key:"minimalMonotonic",value:function(e,t,n){return this._normalize(e,e+this.range,t,n)}},{key:"center",value:function(e,t,n){return t=this.monotonic(e,t,n),this.normalize((e+t)/2,n)}},{key:"diff",value:function(e,t,n){return this.monotonic(e,t,n)-e}},{key:"shortestSignedDiff",value:function(e,t){e=this.normalize(e);var n=(t=this.normalize(t))-e,r=t<e?this.minimalMonotonic(e,t)-e:t-this.minimalMonotonic(t,e);return Math.abs(n)<Math.abs(r)?n:r}},{key:"contains",value:function(e,t,n){return t=this.minimalMonotonic(e,t),(n=this.minimalMonotonic(e,n))>e&&n<t}}]),e}();function s(e){for(var t in e){var n=e[t];n instanceof Function&&(e[t]=n.bind(e))}return e}var u=s(new a(0,2*Math.PI)),l=s(new a(-Math.PI,Math.PI)),c=s(new a(0,360))},69738:function(e,t,n){n.d(t,{u:function(){return c}});var r=n(15671),i=n(43144),o=n(60136),a=n(29388),s=n(50165),u=n(40133),l=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(e){var i;return(0,r.Z)(this,n),(i=t.call(this,e))._groups=new Map,i}return(0,i.Z)(n,[{key:"destroy",value:function(){this.removeAll()}},{key:"size",get:function(){var e=0;return this._groups.forEach((function(t){e+=t.length})),e}},{key:"add",value:function(e,t){var n=this;if(!this._isHandle(e)&&!Array.isArray(e)&&!u.j.isCollection(e))return this;var r=this._getOrCreateGroup(t);return Array.isArray(e)||u.j.isCollection(e)?e.forEach((function(e){return n._isHandle(e)&&r.push(e)})):r.push(e),this.notifyChange("size"),this}},{key:"forEach",value:function(e,t){if("function"==typeof e)this._groups.forEach((function(t){return t.forEach(e)}));else{var n=this._getGroup(e);n&&t&&n.forEach(t)}}},{key:"has",value:function(e){return this._groups.has(this._ensureGroupKey(e))}},{key:"remove",value:function(e){if(Array.isArray(e)||u.j.isCollection(e))return e.forEach(this.remove,this),this;if(!this.has(e))return this;for(var t=this._getGroup(e),n=0;n<t.length;n++)t[n].remove();return this._deleteGroup(e),this.notifyChange("size"),this}},{key:"removeAll",value:function(){return this._groups.forEach((function(e){for(var t=0;t<e.length;t++)e[t].remove()})),this._groups.clear(),this.notifyChange("size"),this}},{key:"_isHandle",value:function(e){return e&&!!e.remove}},{key:"_getOrCreateGroup",value:function(e){if(this.has(e))return this._getGroup(e);var t=[];return this._groups.set(this._ensureGroupKey(e),t),t}},{key:"_getGroup",value:function(e){return(0,s.q)(this._groups.get(this._ensureGroupKey(e)))}},{key:"_deleteGroup",value:function(e){return this._groups.delete(this._ensureGroupKey(e))}},{key:"_ensureGroupKey",value:function(e){return e||"_default_"}}]),n}(s.y);(0,s.e)([(0,s.d)({readOnly:!0})],l.prototype,"size",null);var c=l=(0,s.e)([(0,s.n)("esri.core.Handles")],l)},52155:function(e,t,n){n.d(t,{_:function(){return S},g:function(){return _},l:function(){return m},m:function(){return j},s:function(){return w}});var r,i,o,a,s,u=n(97326),l=n(60136),c=n(29388),h=n(93433),d=n(15671),y=n(43144),f=n(50165),v=null!==(r=null===(i=globalThis.esriConfig)||void 0===i?void 0:i.locale)&&void 0!==r?r:null===(o=globalThis.dojoConfig)||void 0===o?void 0:o.locale;function p(){var e,t;return null!==(e=null!==v&&void 0!==v?v:null===(t=globalThis.navigator)||void 0===t?void 0:t.language)&&void 0!==e?e:"en"}function m(){return void 0===s&&(s=p()),s}var g=[];function w(e){return g.push(e),{remove:function(){g.splice(g.indexOf(e),1)}}}var Z,b=[];function _(e){return b.push(e),{remove:function(){g.splice(b.indexOf(e),1)}}}null===(a=globalThis.addEventListener)||void 0===a||a.call(globalThis,"languagechange",(function(){var e=p();s!==e&&(s=e,[].concat(b).forEach((function(t){t.call(null,e)})),[].concat(g).forEach((function(t){t.call(null,e)})))})),function(e){e[e.PENDING=0]="PENDING",e[e.RESOLVED=1]="RESOLVED",e[e.REJECTED=2]="REJECTED"}(Z||(Z={}));var k=function(){function e(t){var n=this;(0,d.Z)(this,e),this.instance=t,this._resolver=(0,f.T)(),this._status=Z.PENDING,this._resolvingPromises=[],this._resolver.promise.then((function(){n._status=Z.RESOLVED,n._cleanUp()}),(function(){n._status=Z.REJECTED,n._cleanUp()}))}return(0,y.Z)(e,[{key:"addResolvingPromise",value:function(e){this._resolvingPromises.push(e),this._tryResolve()}},{key:"isResolved",value:function(){return this._status===Z.RESOLVED}},{key:"isRejected",value:function(){return this._status===Z.REJECTED}},{key:"isFulfilled",value:function(){return this._status!==Z.PENDING}},{key:"abort",value:function(){this._resolver.reject((0,f.v)())}},{key:"when",value:function(e,t){return this._resolver.promise.then(e,t)}},{key:"_cleanUp",value:function(){this._allPromise=this._resolvingPromises=this._allPromise=null}},{key:"_tryResolve",value:function(){var e=this;if(!this.isFulfilled()){var t=(0,f.T)(),n=[].concat((0,h.Z)(this._resolvingPromises),[(0,f.q)(t.promise)]),r=this._allPromise=Promise.all(n);r.then((function(){e.isFulfilled()||e._allPromise!==r||e._resolver.resolve(e.instance)}),(function(t){e.isFulfilled()||e._allPromise!==r||(0,f.I)(t)||e._resolver.reject(t)})),t.resolve()}}}]),e}(),j=function(e){var t=function(e){(0,l.Z)(n,e);var t=(0,c.Z)(n);function n(){var e;(0,d.Z)(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i)))._promiseProps=new k((0,u.Z)(e)),e.addResolvingPromise(Promise.resolve()),e}return(0,y.Z)(n,[{key:"isResolved",value:function(){return this._promiseProps.isResolved()}},{key:"isRejected",value:function(){return this._promiseProps.isRejected()}},{key:"isFulfilled",value:function(){return this._promiseProps.isFulfilled()}},{key:"when",value:function(e,t){var n=this;return new Promise((function(e,t){n._promiseProps.when(e,t)})).then(e,t)}},{key:"catch",value:function(e){return this.when(null,e)}},{key:"addResolvingPromise",value:function(e){e&&!this._promiseProps.isFulfilled()&&this._promiseProps.addResolvingPromise("_promiseProps"in e?e.when():e)}}]),n}(e);return t=(0,f.e)([(0,f.n)("esri.core.Promise")],t)},S=function(e){(0,l.Z)(n,e);var t=(0,c.Z)(n);function n(){return(0,d.Z)(this,n),t.apply(this,arguments)}return(0,y.Z)(n)}(j(f.y));S=(0,f.e)([(0,f.n)("esri.core.Promise")],S)},31966:function(e,t,n){n.d(t,{a:function(){return j},i:function(){return H},l:function(){return b},p:function(){return B}});var r=n(43144),i=n(15671),o=n(60136),a=n(29388),s=n(50165),u=n(32335),l=n(40133),c=n(77322),h=n(79747),d=n(31412),y=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e)).facilityIdField=null,r.layerId=null,r.nameField=null,r.siteIdField=null,r.sublayerId=null,r}return(0,r.Z)(n)}(u.l);(0,s.e)([(0,s.d)({type:String,json:{write:!0}})],y.prototype,"facilityIdField",void 0),(0,s.e)([(0,s.d)({type:String,json:{write:!0}})],y.prototype,"layerId",void 0),(0,s.e)([(0,s.d)({type:String,json:{write:!0}})],y.prototype,"nameField",void 0),(0,s.e)([(0,s.d)({type:String,json:{write:!0}})],y.prototype,"siteIdField",void 0),(0,s.e)([(0,s.d)({type:Number,json:{read:{source:"subLayerId"},write:{target:"subLayerId"},origins:{"web-scene":{read:!1,write:!1}}}})],y.prototype,"sublayerId",void 0);var f=y=(0,s.e)([(0,s.n)("esri.layers.support.FacilityLayerInfo")],y),v=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e)).facilityIdField=null,r.layerId=null,r.levelIdField=null,r.levelNumberField=null,r.longNameField=null,r.shortNameField=null,r.sublayerId=null,r.verticalOrderField=null,r}return(0,r.Z)(n)}(u.l);(0,s.e)([(0,s.d)({type:String,json:{write:!0}})],v.prototype,"facilityIdField",void 0),(0,s.e)([(0,s.d)({type:String,json:{write:!0}})],v.prototype,"layerId",void 0),(0,s.e)([(0,s.d)({type:String,json:{write:!0}})],v.prototype,"levelIdField",void 0),(0,s.e)([(0,s.d)({type:String,json:{write:!0}})],v.prototype,"levelNumberField",void 0),(0,s.e)([(0,s.d)({type:String,json:{write:!0}})],v.prototype,"longNameField",void 0),(0,s.e)([(0,s.d)({type:String,json:{write:!0}})],v.prototype,"shortNameField",void 0),(0,s.e)([(0,s.d)({type:Number,json:{read:{source:"subLayerId"},write:{target:"subLayerId"},origins:{"web-scene":{read:!1,write:!1}}}})],v.prototype,"sublayerId",void 0),(0,s.e)([(0,s.d)({type:String,json:{write:!0}})],v.prototype,"verticalOrderField",void 0);var p=v=(0,s.e)([(0,s.n)("esri.layers.support.LevelLayerInfo")],v),m=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e)).layerId=null,r.nameField=null,r.siteIdField=null,r.sublayerId=null,r}return(0,r.Z)(n)}(u.l);(0,s.e)([(0,s.d)({type:String,json:{write:!0}})],m.prototype,"layerId",void 0),(0,s.e)([(0,s.d)({type:String,json:{write:!0}})],m.prototype,"nameField",void 0),(0,s.e)([(0,s.d)({type:String,json:{write:!0}})],m.prototype,"siteIdField",void 0),(0,s.e)([(0,s.d)({type:Number,json:{read:{source:"subLayerId"},write:{target:"subLayerId"},origins:{"web-scene":{read:!1,write:!1}}}})],m.prototype,"sublayerId",void 0);var g=m=(0,s.e)([(0,s.n)("esri.layers.support.SiteLayerInfo")],m),w=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e)).levelLayer=null,r.facilityLayer=null,r.siteLayer=null,r}return(0,r.Z)(n)}(u.l);(0,s.e)([(0,s.d)({type:p,json:{write:!0}})],w.prototype,"levelLayer",void 0),(0,s.e)([(0,s.d)({type:f,json:{write:!0}})],w.prototype,"facilityLayer",void 0),(0,s.e)([(0,s.d)({type:g,json:{write:!0}})],w.prototype,"siteLayer",void 0);var Z,b=w=(0,s.e)([(0,s.n)("esri.support.MapFloorInfo")],w),_={width:600,height:400},k=1.5;function j(e,t){var n=t=t||_,r=n.width,i=n.height,o=r/i;return o<k?i=r/k:o>k&&(r=i*k),r>e.width&&(i*=e.width/r,r=e.width),i>e.height&&(r*=e.height/i,i=e.height),{width:Math.round(r),height:Math.round(i)}}function S(e){return{enabled:!(null===e||void 0===e||!e.length)}}var P=Z=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e)).exactMatch=!1,r.name=null,r.type=null,r}return(0,r.Z)(n,[{key:"clone",value:function(){return new Z({exactMatch:this.exactMatch,type:this.type,name:this.name})}}]),n}(u.l);(0,s.e)([(0,s.d)({type:Boolean,json:{write:!0}})],P.prototype,"exactMatch",void 0),(0,s.e)([(0,s.d)({type:String,json:{write:!0}})],P.prototype,"name",void 0),(0,s.e)([(0,h.r)(d.i)],P.prototype,"type",void 0);var T,F=P=Z=(0,s.e)([(0,s.n)("esri.webdoc.applicationProperties.SearchLayerField")],P),L=T=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e)).field=null,r.id=null,r.subLayer=null,r}return(0,r.Z)(n,[{key:"clone",value:function(){return new T((0,s.m)({field:this.field,id:this.id,subLayer:this.subLayer}))}}]),n}(u.l);(0,s.e)([(0,s.d)({type:F,json:{write:{isRequired:!0}}})],L.prototype,"field",void 0),(0,s.e)([(0,s.d)({type:String,json:{write:{isRequired:!0}}})],L.prototype,"id",void 0),(0,s.e)([(0,s.d)({type:s.S,json:{write:!0}})],L.prototype,"subLayer",void 0);var E,I=L=T=(0,s.e)([(0,s.n)("esri.webdoc.applicationProperties.SearchLayer")],L),x=E=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e)).exactMatch=!1,r.name=null,r.type=null,r}return(0,r.Z)(n,[{key:"clone",value:function(){return new E({exactMatch:this.exactMatch,type:this.type,name:this.name})}}]),n}(u.l);(0,s.e)([(0,s.d)({type:Boolean,json:{write:!0}})],x.prototype,"exactMatch",void 0),(0,s.e)([(0,s.d)({type:String,json:{write:!0}})],x.prototype,"name",void 0),(0,s.e)([(0,h.r)(d.i)],x.prototype,"type",void 0);var M,D=x=E=(0,s.e)([(0,s.n)("esri.webdoc.applicationProperties.SearchTableField")],x),R=M=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e)).field=null,r.id=null,r}return(0,r.Z)(n,[{key:"clone",value:function(){return new M((0,s.m)({field:this.field,id:this.id}))}}]),n}(u.l);(0,s.e)([(0,s.d)({type:D,json:{write:{isRequired:!0}}})],R.prototype,"field",void 0),(0,s.e)([(0,s.d)({type:String,json:{write:{isRequired:!0}}})],R.prototype,"id",void 0);var N,z=R=M=(0,s.e)([(0,s.n)("esri.webdoc.applicationProperties.SearchTable")],R),G=l.j.ofType(I),A=l.j.ofType(z),C=N=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e)).addressSearchEnabled=!0,r.enabled=!0,r.hintText=null,r.layers=new G,r.tables=new A,r}return(0,r.Z)(n,[{key:"readAddressSearchEnabled",value:function(e){return!e}},{key:"writeAddressSearchEnabled",value:function(e,t,n){t[n]=!e}},{key:"clone",value:function(){return new N((0,s.m)({addressSearchEnabled:this.addressSearchEnabled,enabled:this.enabled,hintText:this.hintText,layers:this.layers,tables:this.tables}))}}]),n}(u.l);(0,s.e)([(0,s.d)({type:Boolean,nonNullable:!0,json:{read:{source:"disablePlaceFinder"},write:{target:"disablePlaceFinder",isRequired:!0},origins:{"web-scene":{read:!1,write:!1}}}})],C.prototype,"addressSearchEnabled",void 0),(0,s.e)([(0,c.o)("addressSearchEnabled")],C.prototype,"readAddressSearchEnabled",null),(0,s.e)([(0,c.r)("addressSearchEnabled")],C.prototype,"writeAddressSearchEnabled",null),(0,s.e)([(0,s.d)({type:Boolean,nonNullable:!0,json:{write:!0,origins:{"web-map":{write:{isRequired:!0}},"web-scene":{default:!0,write:!0}}}})],C.prototype,"enabled",void 0),(0,s.e)([(0,s.d)({type:String,json:{write:!0}})],C.prototype,"hintText",void 0),(0,s.e)([(0,s.d)({type:G,json:{write:{overridePolicy:S},origins:{"web-scene":{write:{isRequired:!0}}}}})],C.prototype,"layers",void 0),(0,s.e)([(0,s.d)({type:A,json:{read:!0,write:{overridePolicy:S}}})],C.prototype,"tables",void 0);var q,O=C=N=(0,s.e)([(0,s.n)("esri.webdoc.applicationProperties.Search")],C),U=q=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e)).search=null,r}return(0,r.Z)(n,[{key:"clone",value:function(){return new q((0,s.m)({search:this.search}))}}]),n}(u.l);(0,s.e)([(0,s.d)({type:O,json:{write:!0}})],U.prototype,"search",void 0);var Y,H=U=q=(0,s.e)([(0,s.n)("esri.webdoc.applicationProperties.Viewing")],U),B=Y=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(){var e;return(0,i.Z)(this,n),(e=t.apply(this,arguments)).url="",e}return(0,r.Z)(n,[{key:"destroy",value:function(){this.url=""}},{key:"clone",value:function(){return new Y({url:this.url})}}]),n}(u.l);(0,s.e)([(0,s.d)({type:String,json:{write:{isRequired:!0}}})],B.prototype,"url",void 0),B=Y=(0,s.e)([(0,s.n)("esri.webdoc.support.SlideThumbnail")],B)},12989:function(e,t,n){n.d(t,{r:function(){return s}});var r=n(29439),i=n(15671),o=n(43144),a=n(50165),s=function(){function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";(0,i.Z)(this,e),this.major=t,this.minor=n,this._context=r}return(0,o.Z)(e,[{key:"lessThan",value:function(e,t){return this.major<e||e===this.major&&this.minor<t}},{key:"since",value:function(e,t){return!this.lessThan(e,t)}},{key:"validate",value:function(e){if(this.major!==e.major){var t=this._context&&this._context+":",n=this._context&&this._context+" ";throw new a.a(t+"unsupported-version","Required major ".concat(n,"version is '").concat(this.major,"', but got '${version.major}.${version.minor}'"),{version:e})}}},{key:"clone",value:function(){return new e(this.major,this.minor,this._context)}}],[{key:"parse",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=t.split("."),o=(0,r.Z)(i,2),s=o[0],u=o[1],l=/^\s*\d+\s*$/;if(!s||!s.match||!s.match(l))throw new a.a((n&&n+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:t});if(!u||!u.match||!u.match(l))throw new a.a((n&&n+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:t});var c=parseInt(s,10),h=parseInt(u,10);return new e(c,h,n)}}]),e}()},83745:function(e,t,n){n.d(t,{d:function(){return m},u:function(){return Z}});var r=n(15671),i=n(43144),o=n(60136),a=n(29388),s=n(50165),u=n(78697),l=n(55269),c=n(32335),h=n(2760),d=n(77322),y=n(33530),f=n(78664),v=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(){var e;(0,r.Z)(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).position=new d.j([0,0,0]),e.heading=0,e.tilt=0,e.fov=55,e}return(0,i.Z)(n,[{key:"normalizeCtorArgs",value:function(e,t,n,r){if(e&&"object"==typeof e&&("x"in e||Array.isArray(e))){var i={position:e};return null!=t&&(i.heading=t),null!=n&&(i.tilt=n),null!=r&&(i.fov=r),i}return e}},{key:"writePosition",value:function(e,t,n,r){var i=e.clone();i.x=(0,s.U)(e.x||0),i.y=(0,s.U)(e.y||0),i.z=e.hasZ?(0,s.U)(e.z||0):e.z,t[n]=i.write({},r)}},{key:"readPosition",value:function(e,t){var n=new d.j;return n.read(e,t),n.x=(0,s.U)(n.x||0),n.y=(0,s.U)(n.y||0),n.z=n.hasZ?(0,s.U)(n.z||0):n.z,n}},{key:"equals",value:function(e){return!!e&&this.tilt===e.tilt&&this.heading===e.heading&&this.fov===e.fov&&this.position.equals(e.position)}}]),n}((0,u.l)(c.l));(0,s.e)([(0,s.d)({type:d.j,json:{write:{isRequired:!0}}})],v.prototype,"position",void 0),(0,s.e)([(0,d.r)("position")],v.prototype,"writePosition",null),(0,s.e)([(0,d.o)("position")],v.prototype,"readPosition",null),(0,s.e)([(0,s.d)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),(0,s.H)((function(e){return l.s.normalize((0,s.U)(e))}))],v.prototype,"heading",void 0),(0,s.e)([(0,s.d)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),(0,s.H)((function(e){return(0,h.o)((0,s.U)(e),-180,180)}))],v.prototype,"tilt",void 0),(0,s.e)([(0,s.d)({type:Number,nonNullable:!0,json:{read:!1,write:!1}})],v.prototype,"fov",void 0);var p,m=v=(0,s.e)([(0,s.n)("esri.Camera")],v),g=p=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(e){var i;return(0,r.Z)(this,n),(i=t.call(this,e)).rotation=0,i.scale=0,i.targetGeometry=null,i.camera=null,i}return(0,i.Z)(n,[{key:"castRotation",value:function(e){return(e%=360)<0&&(e+=360),e}},{key:"clone",value:function(){return new p({rotation:this.rotation,scale:this.scale,targetGeometry:(0,s.r)(this.targetGeometry)?this.targetGeometry.clone():null,camera:(0,s.r)(this.camera)?this.camera.clone():null})}}]),n}(c.l);function w(){return{enabled:!this.camera}}(0,s.e)([(0,s.d)({type:Number,json:{write:!0,origins:{"web-map":{default:0,write:!0},"web-scene":{write:{overridePolicy:w}}}}})],g.prototype,"rotation",void 0),(0,s.e)([(0,s.H)("rotation")],g.prototype,"castRotation",null),(0,s.e)([(0,s.d)({type:Number,json:{write:!0,origins:{"web-map":{default:0,write:!0},"web-scene":{write:{overridePolicy:w}}}}})],g.prototype,"scale",void 0),(0,s.e)([(0,s.d)({types:y.i,json:{read:f.d,write:!0,origins:{"web-scene":{read:f.d,write:{overridePolicy:w}}}}})],g.prototype,"targetGeometry",void 0),(0,s.e)([(0,s.d)({type:m,json:{write:!0}})],g.prototype,"camera",void 0);var Z=g=p=(0,s.e)([(0,s.n)("esri.Viewpoint")],g)},61772:function(e,t,n){n.d(t,{a:function(){return s},n:function(){return a}});var r=n(50165),i=n(13994),o=r.s.getLogger("esri.assets");function a(e,t){return(0,i.U)(s(e),t)}function s(e){if(!r.f.assetsPath)throw o.errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new r.a("assets:path-not-set","config.assetsPath is not set");return(0,i.G)(r.f.assetsPath,e)}},31412:function(e,t,n){n.d(t,{i:function(){return r}});var r=new(n(13994).s)({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml"})},72577:function(e,t,n){n.d(t,{h:function(){return g},l:function(){return m},u:function(){return Z}});var r=n(74165),i=n(15671),o=n(43144),a=n(29439),s=n(15861),u=n(37762),l=n(50165),c=n(52155),h=/^([a-z]{2})(?:[-_]([A-Za-z]{2}))?$/,d={ar:!0,bg:!0,bs:!0,ca:!0,cs:!0,da:!0,de:!0,el:!0,en:!0,es:!0,et:!0,fi:!0,fr:!0,he:!0,hr:!0,hu:!0,id:!0,it:!0,ja:!0,ko:!0,lt:!0,lv:!0,nb:!0,nl:!0,pl:!0,"pt-BR":!0,"pt-PT":!0,ro:!0,ru:!0,sk:!0,sl:!0,sr:!0,sv:!0,th:!0,tr:!0,uk:!0,vi:!0,"zh-CN":!0,"zh-HK":!0,"zh-TW":!0};function y(e){var t;return null!==(t=d[e])&&void 0!==t&&t}var f=[],v=new Map;function p(e){var t,n=(0,u.Z)(v.keys());try{for(n.s();!(t=n.n()).done;){var r=t.value;k(e.pattern,r)&&v.delete(r)}}catch(i){n.e(i)}finally{n.f()}}function m(e){return f.includes(e)||(p(e),f.unshift(e)),{remove:function(){var t=f.indexOf(e);t>-1&&(f.splice(t,1),p(e))}}}function g(e){return w.apply(this,arguments)}function w(){return(w=(0,s.Z)((0,r.Z)().mark((function e(t){var n,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,c.l)(),v.has(t)||v.set(t,b(t,n)),i=v.get(t),e.next=5,j.add(i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e){if(!h.test(e))return null;var t=h.exec(e),n=(0,a.Z)(t,3),r=n[1],i=n[2],o=r+(i?"-"+i.toUpperCase():"");return y(o)?o:y(r)?r:null}function b(e,t){return _.apply(this,arguments)}function _(){return(_=(0,s.Z)((0,r.Z)().mark((function e(t,n){var i,o,a,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=[],o=(0,u.Z)(f),e.prev=2,o.s();case 4:if((a=o.n()).done){e.next=18;break}if(!k((s=a.value).pattern,t)){e.next=16;break}return e.prev=7,e.next=10,s.fetchMessageBundle(t,n);case 10:return e.abrupt("return",e.sent);case 13:e.prev=13,e.t0=e.catch(7),i.push(e.t0);case 16:e.next=4;break;case 18:e.next=23;break;case 20:e.prev=20,e.t1=e.catch(2),o.e(e.t1);case 23:return e.prev=23,o.f(),e.finish(23);case 26:if(!i.length){e.next=28;break}throw new l.a("intl:message-bundle-error",'Errors occurred while loading "'.concat(t,'"'),{errors:i});case 28:throw new l.a("intl:no-message-bundle-loader",'No loader found for message bundle "'.concat(t,'"'));case 29:case"end":return e.stop()}}),e,null,[[2,20,23,26],[7,13]])})))).apply(this,arguments)}function k(e,t){return"string"==typeof e?t.startsWith(e):e.test(t)}(0,c.g)((function(){v.clear()}));var j=new(function(){function e(){(0,i.Z)(this,e),this._numLoading=0}return(0,o.Z)(e,[{key:"waitForAll",value:function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=this._dfd,!e.t0){e.next=4;break}return e.next=4,this._dfd.promise;case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"add",value:function(e){var t=this;return this._increase(),e.then((function(){return t._decrease()}),(function(){return t._decrease()})),this.waitForAll()}},{key:"_increase",value:function(){this._numLoading++,this._dfd||(this._dfd=(0,l.T)())}},{key:"_decrease",value:function(){this._numLoading=Math.max(this._numLoading-1,0),this._dfd&&0===this._numLoading&&(this._dfd.resolve(),this._dfd=null)}}]),e}())},42:function(e,t,n){n.d(t,{L:function(){return w},S:function(){return g},m:function(){return j},u:function(){return k}});var r=n(1413),i=n(13994),o=n(52155),a=n(50165),s={year:"numeric",month:"numeric",day:"numeric"},u={year:"numeric",month:"long",day:"numeric"},l={year:"numeric",month:"short",day:"numeric"},c={year:"numeric",month:"long",weekday:"long",day:"numeric"},h={hour:"numeric",minute:"numeric"},d=(0,r.Z)((0,r.Z)({},h),{},{second:"numeric"}),y={"short-date":s,"short-date-short-time":(0,r.Z)((0,r.Z)({},s),h),"short-date-short-time-24":(0,r.Z)((0,r.Z)((0,r.Z)({},s),h),{},{hour12:!1}),"short-date-long-time":(0,r.Z)((0,r.Z)({},s),d),"short-date-long-time-24":(0,r.Z)((0,r.Z)((0,r.Z)({},s),d),{},{hour12:!1}),"short-date-le":s,"short-date-le-short-time":(0,r.Z)((0,r.Z)({},s),h),"short-date-le-short-time-24":(0,r.Z)((0,r.Z)((0,r.Z)({},s),h),{},{hour12:!1}),"short-date-le-long-time":(0,r.Z)((0,r.Z)({},s),d),"short-date-le-long-time-24":(0,r.Z)((0,r.Z)((0,r.Z)({},s),d),{},{hour12:!1}),"long-month-day-year":u,"long-month-day-year-short-time":(0,r.Z)((0,r.Z)({},u),h),"long-month-day-year-short-time-24":(0,r.Z)((0,r.Z)((0,r.Z)({},u),h),{},{hour12:!1}),"long-month-day-year-long-time":(0,r.Z)((0,r.Z)({},u),d),"long-month-day-year-long-time-24":(0,r.Z)((0,r.Z)((0,r.Z)({},u),d),{},{hour12:!1}),"day-short-month-year":l,"day-short-month-year-short-time":(0,r.Z)((0,r.Z)({},l),h),"day-short-month-year-short-time-24":(0,r.Z)((0,r.Z)((0,r.Z)({},l),h),{},{hour12:!1}),"day-short-month-year-long-time":(0,r.Z)((0,r.Z)({},l),d),"day-short-month-year-long-time-24":(0,r.Z)((0,r.Z)((0,r.Z)({},l),d),{},{hour12:!1}),"long-date":c,"long-date-short-time":(0,r.Z)((0,r.Z)({},c),h),"long-date-short-time-24":(0,r.Z)((0,r.Z)((0,r.Z)({},c),h),{},{hour12:!1}),"long-date-long-time":(0,r.Z)((0,r.Z)({},c),d),"long-date-long-time-24":(0,r.Z)((0,r.Z)((0,r.Z)({},c),d),{},{hour12:!1}),"long-month-year":{month:"long",year:"numeric"},"short-month-year":{month:"short",year:"numeric"},year:{year:"numeric"},"short-time":h,"long-time":d},f=(0,i.o)()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"});f.toJSON.bind(f),f.fromJSON.bind(f);var v={ar:"ar-u-nu-latn-ca-gregory"},p=new WeakMap,m=y["short-date-short-time"];function g(e){return y[e]||null}function w(e,t){return function(e){var t=e||m;if(!p.has(t)){var n=(0,o.l)(),r=v[(0,o.l)()]||n;p.set(t,new Intl.DateTimeFormat(r,t))}return p.get(t)}(t).format(e)}(0,o.g)((function(){p=new WeakMap,m=y["short-date-short-time"]}));var Z={ar:"ar-u-nu-latn"},b=new WeakMap,_={};function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={};return null!=e.digitSeparator&&(t.useGrouping=e.digitSeparator),null!=e.places&&(t.minimumFractionDigits=t.maximumFractionDigits=e.places),t}function j(e,t){return-0===e&&(e=0),function(e){var t=e||_;if(!b.has(t)){var n=(0,o.l)(),r=Z[(0,o.l)()]||n;b.set(t,new Intl.NumberFormat(r,e))}return(0,a.q)(b.get(t))}(t).format(e)}(0,o.g)((function(){b=new WeakMap,_={}}))},73627:function(e,t,n){n.d(t,{P:function(){return h},U:function(){return d},a:function(){return s},f:function(){return o},h:function(){return y},j:function(){return u},l:function(){return i},w:function(){return f}});var r=n(50165);function i(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a(e,t,n,l)}function o(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a(e,t,n,c)}function a(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0,o=null,a=n.once?function(e,n){i(e)&&((0,r.z)(o),t(e,n))}:function(e,n){i(e)&&t(e,n)};if(o=(0,r.P)(e,a,n.sync,n.equals),n.initial){var s=e();a(s,s)}return o}function s(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=null,s=null,u=null;function l(){var e;a&&s&&(s.remove(),null!==(e=o.onListenerRemove)&&void 0!==e&&e.call(o,a),a=null,s=null)}function c(e){o.once&&o.once&&(0,r.z)(u),n(e)}var h=i(e,(function(e,n){var i;l(),(0,r.k)(e)&&(a=e,s=(0,r.l)(e,t,c),null===(i=o.onListenerAdd)||void 0===i||i.call(o,e))}),{sync:o.sync,initial:!0});return u=(0,r.p)((function(){h.remove(),l()}))}function u(e,t){return function(e,t,n){if((0,r.u)(n))return Promise.reject((0,r.v)());var i=e();if(null!==t&&void 0!==t&&t(i))return Promise.resolve(i);var o=null;function s(){o=(0,r.z)(o)}return new Promise((function(i,u){o=(0,r.w)([(0,r.x)(n,(function(){s(),u((0,r.v)())})),a(e,(function(e){s(),i(e)}),{sync:!1,once:!0},null!==t&&void 0!==t?t:l)])}))}(e,c,t)}function l(e){return!0}function c(e){return!!e}function h(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=!1,o=i(e,(function(e,n){r||t(e,n)}),n);return{remove:function(){o.remove()},pause:function(){r=!0},resume:function(){r=!1}}}var d={sync:!0},y={initial:!0},f={sync:!0,initial:!0}}}]);
//# sourceMappingURL=2778.867d9b35.chunk.js.map