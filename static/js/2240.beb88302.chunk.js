"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[2240],{99795:function(e,t,r){r.d(t,{O:function(){return m},S:function(){return k}});var n=r(37762),i=r(97326),a=r(60136),o=r(29388),s=r(93433),u=r(15671),l=r(43144),c=r(48848),p=r(93661),h=r(40114),f=function(){function e(){(0,u.Z)(this,e),this._propertyOriginMap=new Map,this._originStores=new Array(c.q),this._values=new Map,this.multipleOriginsSupported=!0}return(0,l.Z)(e,[{key:"clone",value:function(t){var r=this,n=new e,i=this._originStores[c.r.DEFAULTS];i&&i.forEach((function(e,t){n.set(t,(0,p.y)(e),c.r.DEFAULTS)}));for(var a=function(e){var i=r._originStores[e];i&&i.forEach((function(r,i){t&&t.has(i)||n.set(i,(0,p.y)(r),e)}))},o=c.r.SERVICE;o<c.q;o++)a(o);return n}},{key:"get",value:function(e,t){var r=void 0===t?this._values:this._originStores[t];return r?r.get(e):void 0}},{key:"keys",value:function(e){var t=null==e?this._values:this._originStores[e];return t?(0,s.Z)(t.keys()):[]}},{key:"set",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c.r.USER,n=this._originStores[r];if(n||(n=new Map,this._originStores[r]=n),n.set(e,t),!this._values.has(e)||(0,p.x)(this._propertyOriginMap.get(e))<=r){var i=this._values.get(e);return this._values.set(e,t),this._propertyOriginMap.set(e,r),i!==t}return!1}},{key:"delete",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.r.USER,r=this._originStores[t];if(r){var n=r.get(e);if(r.delete(e),this._values.has(e)&&this._propertyOriginMap.get(e)===t){this._values.delete(e);for(var i=t-1;i>=0;i--){var a=this._originStores[i];if(a&&a.has(e)){this._values.set(e,a.get(e)),this._propertyOriginMap.set(e,i);break}}}return n}}},{key:"has",value:function(e,t){var r=void 0===t?this._values:this._originStores[t];return!!r&&r.has(e)}},{key:"revert",value:function(e,t){for(;t>0&&!this.has(e,t);)--t;var r=this._originStores[t],n=r&&r.get(e),i=this._values.get(e);return this._values.set(e,n),this._propertyOriginMap.set(e,t),i!==n}},{key:"originOf",value:function(e){return this._propertyOriginMap.get(e)||c.r.DEFAULTS}},{key:"forEach",value:function(e){this._values.forEach(e)}}]),e}(),v=function(e){var t=function(e){(0,a.Z)(r,e);var t=(0,o.Z)(r);function r(){var e;(0,u.Z)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];e=t.call.apply(t,[this].concat(a));var s=(0,p.x)((0,c.x)((0,i.Z)(e))),l=s.store,v=new f;return s.store=v,(0,h.e)(s,l,v),e}return(0,l.Z)(r,[{key:"read",value:function(e,t){(0,h.a)(this,e,t)}},{key:"getAtOrigin",value:function(e,t){var r=y(this),n=(0,c.z)(t);if("string"==typeof e)return r.get(e,n);var i={};return e.forEach((function(e){i[e]=r.get(e,n)})),i}},{key:"originOf",value:function(e){return(0,c.u)(this.originIdOf(e))}},{key:"originIdOf",value:function(e){return y(this).originOf(e)}},{key:"revert",value:function(e,t){var r=y(this),n=(0,c.z)(t),i=(0,c.x)(this);("string"==typeof e?"*"===e?r.keys(n):[e]:e).forEach((function(e){i.invalidate(e),r.revert(e,n),i.commit(e)}))}}]),r}(e);return t=(0,c.e)([(0,c.n)("esri.core.ReadOnlyMultiOriginJSONSupport")],t),t};function y(e){return(0,c.x)(e).store}var d=function(e){(0,a.Z)(r,e);var t=(0,o.Z)(r);function r(){return(0,u.Z)(this,r),t.apply(this,arguments)}return(0,l.Z)(r)}(v(c.m));d=(0,c.e)([(0,c.n)("esri.core.ReadOnlyMultiOriginJSONSupport")],d);function g(e){return(0,c.x)(e).store}var m=function(e){var t=function(e){(0,a.Z)(r,e);var t=(0,o.Z)(r);function r(){(0,u.Z)(this,r);for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return t.call.apply(t,[this].concat(n))}return(0,l.Z)(r)}(function(e){var t=function(e){(0,a.Z)(r,e);var t=(0,o.Z)(r);function r(){(0,u.Z)(this,r);for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return t.call.apply(t,[this].concat(n))}return(0,l.Z)(r,[{key:"clear",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"user";return g(this).delete(e,(0,c.z)(t))}},{key:"write",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return(0,h.c)(this,e=e||{},t),e}},{key:"setAtOrigin",value:function(e,t,r){(0,c.x)(this).setAtOrigin(e,t,(0,c.z)(r))}},{key:"removeOrigin",value:function(e){var t,r=g(this),i=(0,c.z)(e),a=r.keys(i),o=(0,n.Z)(a);try{for(o.s();!(t=o.n()).done;){var s=t.value;r.originOf(s)===i&&r.set(s,r.get(s,i),c.r.USER)}}catch(u){o.e(u)}finally{o.f()}}},{key:"updateOrigin",value:function(e,t){for(var r=g(this),n=(0,c.z)(t),i=this.get(e),a=n+1;a<c.q;++a)r.delete(e,a);r.set(e,i,n)}},{key:"toJSON",value:function(e){return this.write({},e)}}]),r}(e);return(t=(0,c.e)([(0,c.n)("esri.core.WriteableMultiOriginJSONSupport")],t)).prototype.toJSON.isDefaultToJSON=!0,t}(v(e)));return t=(0,c.e)([(0,c.n)("esri.core.MultiOriginJSONSupport")],t)},k=function(e){(0,a.Z)(r,e);var t=(0,o.Z)(r);function r(){return(0,u.Z)(this,r),t.apply(this,arguments)}return(0,l.Z)(r)}(m(c.m));k=(0,c.e)([(0,c.n)("esri.core.MultiOriginJSONSupport")],k)},6379:function(e,t,r){r.d(t,{v:function(){return k}});var n=r(1413),i=r(74165),a=r(15861),o=r(15671),s=r(43144),u=r(11752),l=r(61120),c=r(60136),p=r(29388),h=r(48848),f=r(40558),v=r(59389),y=r(93661),d=r(82474),g=r(93116),m=r(21015),k=function(e){var t=function(e){(0,c.Z)(d,e);var t=(0,p.Z)(d);function d(){var e;return(0,o.Z)(this,d),(e=t.apply(this,arguments)).resourceReferences={portalItem:null,paths:[]},e.userHasEditingPrivileges=!0,e}return(0,s.Z)(d,[{key:"destroy",value:function(){this.portalItem=(0,y.g)(this.portalItem)}},{key:"portalItem",set:function(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}},{key:"readPortalItem",value:function(e,t,r){if(t.itemId)return new m.default({id:t.itemId,portal:r&&r.portal})}},{key:"writePortalItem",value:function(e,t){e&&e.id&&(t.itemId=e.id)}},{key:"loadFromPortal",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t,n){var a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.portalItem||!this.portalItem.id){e.next=14;break}return e.prev=1,e.next=4,Promise.all([r.e(9557),r.e(5249),r.e(3028)]).then(r.bind(r,64789)).then((function(e){return e.l}));case 4:return a=e.sent,(0,h.f)(n),e.next=8,a.load({instance:this,supportedTypes:t.supportedTypes,validateItem:t.validateItem,supportsData:t.supportsData,layerModuleTypeMap:t.layerModuleTypeMap},n);case 8:return e.abrupt("return",e.sent);case 11:throw e.prev=11,e.t0=e.catch(1),(0,h.j)(e.t0)||h.a.getLogger(this.declaredClass).warn("Failed to load layer (".concat(this.title,", ").concat(this.id,") portal item (").concat(this.portalItem.id,")\n  ").concat(e.t0)),e.t0;case 14:case"end":return e.stop()}}),e,this,[[1,11]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"finishLoadEditablePortalLayer",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,this._fetchUserHasEditingPrivileges(t).catch((function(e){return(0,h.w)(e),!0}));case 3:e.t1=e.sent,e.t0._set.call(e.t0,"userHasEditingPrivileges",e.t1);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_fetchUserHasEditingPrivileges",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){var r,n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.url?null===f.b||void 0===f.b?void 0:f.b.findCredential(this.url):null){e.next=3;break}return e.abrupt("return",!0);case 3:if(Z.credential!==r){e.next=7;break}e.t0=Z.user,e.next=10;break;case 7:return e.next=9,this._fetchEditingUser(t);case 9:e.t0=e.sent;case 10:return n=e.t0,e.abrupt("return",(Z.credential=r,Z.user=n,(0,y.t)(n)||null==n.privileges||n.privileges.includes("features:user:edit")));case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_fetchEditingUser",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){var r,n,a,o,s,u,l,c,p,h;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(o=null===(r=this.portalItem)||void 0===r||null===(n=r.portal)||void 0===n?void 0:n.user)){e.next=3;break}return e.abrupt("return",o);case 3:if(null!==(s=f.b.findServerInfo(null!==(a=this.url)&&void 0!==a?a:""))&&void 0!==s&&s.owningSystemUrl){e.next=6;break}return e.abrupt("return",null);case 6:if(u="".concat(s.owningSystemUrl,"/sharing/rest"),!(l=g.j.getDefault())||!l.loaded||(0,f.F)(l.restUrl)!==(0,f.F)(u)){e.next=9;break}return e.abrupt("return",l.user);case 9:return c="".concat(u,"/community/self"),p=(0,y.r)(t)?t.signal:null,e.next=13,(0,v.b)((0,f.U)(c,{authMode:"no-prompt",query:{f:"json"},signal:p}));case 13:return h=e.sent,e.abrupt("return",h.ok?g.p.fromJSON(h.value.data):null);case 15:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"read",value:function(e,t){t&&(t.layer=this),(0,u.Z)((0,l.Z)(d.prototype),"read",this).call(this,e,t)}},{key:"write",value:function(e,t){var r=t&&t.portal,i=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||g.j.getDefault());return r&&i&&!(0,f.N)(i.restUrl,r.restUrl)?(t.messages&&t.messages.push(new h.s("layer:cross-portal","The layer '".concat(this.title," (").concat(this.id,")' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer"),{layer:this})),null):(0,u.Z)((0,l.Z)(d.prototype),"write",this).call(this,e,(0,n.Z)((0,n.Z)({},t),{},{layer:this}))}}]),d}(e);return(0,h.e)([(0,h.y)({type:m.default})],t.prototype,"portalItem",null),(0,h.e)([(0,d.o)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),(0,h.e)([(0,d.r)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),(0,h.e)([(0,h.y)({clonable:!1})],t.prototype,"resourceReferences",void 0),(0,h.e)([(0,h.y)({readOnly:!0})],t.prototype,"userHasEditingPrivileges",void 0),t=(0,h.e)([(0,h.n)("esri.layers.mixins.PortalLayer")],t)},Z={credential:null,user:null}},92240:function(e,t,r){r.r(t);var n=r(15671),i=r(43144),a=r(11752),o=r(61120),s=r(60136),u=r(29388),l=r(48848),c=r(99795),p=(r(93661),r(45999)),h=r(6379),f=(r(40114),r(74384),r(46817),r(82474),r(40558),r(37856),r(92072),r(93116),r(65094),r(59389),r(21015),r(75255),function(e){(0,s.Z)(r,e);var t=(0,u.Z)(r);function r(e){var i;return(0,n.Z)(this,r),(i=t.call(this,e)).resourceInfo=null,i.type="unsupported",i}return(0,i.Z)(r,[{key:"initialize",value:function(){var e=this;this.addResolvingPromise(new Promise((function(t,r){(0,l.k)((function(){var t=e.resourceInfo&&(e.resourceInfo.layerType||e.resourceInfo.type),n="Unsupported layer type";t&&(n+=" "+t),r(new l.s("layer:unsupported-layer-type",n,{layerType:t}))}))})))}},{key:"read",value:function(e,t){var n={resourceInfo:e};null!=e.id&&(n.id=e.id),null!=e.title&&(n.title=e.title),(0,a.Z)((0,o.Z)(r.prototype),"read",this).call(this,n,t)}},{key:"write",value:function(e){return Object.assign(e||{},this.resourceInfo,{id:this.id})}}]),r}((0,h.v)((0,c.O)(p.b))));(0,l.e)([(0,l.y)({readOnly:!0})],f.prototype,"resourceInfo",void 0),(0,l.e)([(0,l.y)({type:["show","hide"]})],f.prototype,"listMode",void 0),(0,l.e)([(0,l.y)({json:{read:!1},readOnly:!0,value:"unsupported"})],f.prototype,"type",void 0);var v=f=(0,l.e)([(0,l.n)("esri.layers.UnsupportedLayer")],f);t.default=v}}]);
//# sourceMappingURL=2240.beb88302.chunk.js.map