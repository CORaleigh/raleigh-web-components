"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[9680],{38929:function(t,e,r){r.d(e,{p:function(){return p}});var n=r(15671),a=r(43144),i=r(60136),o=r(29388),l=r(23132),s=r(75610),u=r(97866),p=function(t){var e=function(t){(0,i.Z)(r,t);var e=(0,o.Z)(r);function r(){return(0,n.Z)(this,r),e.apply(this,arguments)}return(0,a.Z)(r,[{key:"title",get:function(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){var t=(0,u.m)(this.url);if((0,s.r)(t)&&t.title)return t.title}return this._get("title")||""},set:function(t){this._set("title",t)}},{key:"url",set:function(t){this._set("url",(0,u.S)(t,l.s.getLogger(this.declaredClass)))}}]),r}(t);return(0,l.e)([(0,l.d)()],e.prototype,"title",null),(0,l.e)([(0,l.d)({type:String})],e.prototype,"url",null),e=(0,l.e)([(0,l.n)("esri.layers.mixins.ArcGISService")],e)}},72763:function(t,e,r){r.d(e,{b:function(){return w}});var n=r(74165),a=r(15671),i=r(43144),o=r(60136),l=r(29388),s=r(15861),u=r(23132),p=(r(91204),r(57714)),c=r(80175),d=r(77196),y=r(79611),f=r(75610),h=r(80262),v=r(30709),m=u.s.getLogger("esri.layers.support.fromPortalItem");function b(){return b=(0,s.Z)((0,n.Z)().mark((function t(e){var a,i,o,l,s;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="portalItem"in e?e:{portalItem:e},t.next=3,Promise.all([r.e(1340),r.e(3022),r.e(8854),r.e(6498),r.e(9737)]).then(r.bind(r,76498));case 3:return i=t.sent,t.prev=4,t.next=7,i.fromItem(a);case 7:return t.abrupt("return",t.sent);case 10:throw t.prev=10,t.t0=t.catch(4),o=a&&a.portalItem,l=o&&o.id||"unset",s=o&&o.portal&&o.portal.url||f.b.portalUrl,m.error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+s+"', id: '"+l+"')",t.t0),t.t0;case 14:case"end":return t.stop()}}),t,null,[[4,10]])}))),b.apply(this,arguments)}var g=0,k=function(t){(0,o.Z)(c,t);var e=(0,l.Z)(c);function c(){var t;return(0,a.Z)(this,c),(t=e.apply(this,arguments)).attributionDataUrl=null,t.fullExtent=new h.M(-180,-90,180,90,v.k.WGS84),t.id=Date.now().toString(16)+"-layer-"+g++,t.legendEnabled=!0,t.listMode="show",t.opacity=1,t.parent=null,t.popupEnabled=!0,t.attributionVisible=!0,t.spatialReference=v.k.WGS84,t.title=null,t.type=null,t.url=null,t.visible=!0,t}return(0,i.Z)(c,[{key:"initialize",value:function(){var t=this;this.when().catch((function(e){var r,n;(0,u.u)(e)||u.s.getLogger(t.declaredClass).error("#load()","Failed to load layer (title: '".concat(null!==(r=t.title)&&void 0!==r?r:"no title","', id: '").concat(null!==(n=t.id)&&void 0!==n?n:"no id","')"),{error:e})}))}},{key:"destroy",value:function(){if(this.parent){var t=this,e=this.parent;"layers"in e&&e.layers.includes(t)?e.layers.remove(t):"tables"in e&&e.tables.includes(t)?e.tables.remove(t):"baseLayers"in e&&e.baseLayers.includes(t)?e.baseLayers.remove(t):"baseLayers"in e&&e.referenceLayers.includes(t)&&e.referenceLayers.remove(t)}}},{key:"hasAttributionData",get:function(){return null!=this.attributionDataUrl}},{key:"parsedUrl",get:function(){var t=this.url;return t?(0,p.j)(t):null}},{key:"fetchAttributionData",value:function(){var t=(0,s.Z)((0,n.Z)().mark((function t(){var e;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.attributionDataUrl,!this.hasAttributionData||!e){t.next=5;break}return t.next=4,(0,p.U)(e,{query:{f:"json"},responseType:"json"});case 4:return t.abrupt("return",t.sent.data);case 5:throw new u.a("layer:no-attribution-data","Layer does not have attribution data");case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}],[{key:"fromArcGISServerUrl",value:function(){var t=(0,s.Z)((0,n.Z)().mark((function t(e){var a;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="string"==typeof e?{url:e}:e,t.next=3,Promise.all([r.e(8854),r.e(8201)]).then(r.bind(r,38201));case 3:return t.abrupt("return",t.sent.fromUrl(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"fromPortalItem",value:function(t){return function(t){return b.apply(this,arguments)}(t)}}]),c}(c.n.EventedMixin((0,d.s)(y.m)));(0,u.e)([(0,u.d)({type:String})],k.prototype,"attributionDataUrl",void 0),(0,u.e)([(0,u.d)({type:h.M})],k.prototype,"fullExtent",void 0),(0,u.e)([(0,u.d)({readOnly:!0})],k.prototype,"hasAttributionData",null),(0,u.e)([(0,u.d)({type:String,clonable:!1})],k.prototype,"id",void 0),(0,u.e)([(0,u.d)({type:Boolean,nonNullable:!0})],k.prototype,"legendEnabled",void 0),(0,u.e)([(0,u.d)({type:["show","hide","hide-children"]})],k.prototype,"listMode",void 0),(0,u.e)([(0,u.d)({type:Number,range:{min:0,max:1},nonNullable:!0})],k.prototype,"opacity",void 0),(0,u.e)([(0,u.d)({clonable:!1})],k.prototype,"parent",void 0),(0,u.e)([(0,u.d)({readOnly:!0})],k.prototype,"parsedUrl",null),(0,u.e)([(0,u.d)({type:Boolean})],k.prototype,"popupEnabled",void 0),(0,u.e)([(0,u.d)({type:Boolean})],k.prototype,"attributionVisible",void 0),(0,u.e)([(0,u.d)({type:v.k})],k.prototype,"spatialReference",void 0),(0,u.e)([(0,u.d)({type:String})],k.prototype,"title",void 0),(0,u.e)([(0,u.d)({readOnly:!0,json:{read:!1}})],k.prototype,"type",void 0),(0,u.e)([(0,u.d)()],k.prototype,"url",void 0),(0,u.e)([(0,u.d)({type:Boolean,nonNullable:!0})],k.prototype,"visible",void 0);var w=k=(0,u.e)([(0,u.n)("esri.layers.Layer")],k)},95254:function(t,e,r){r.d(e,{v:function(){return k}});var n=r(1413),a=r(74165),i=r(15861),o=r(15671),l=r(43144),s=r(11752),u=r(61120),p=r(60136),c=r(29388),d=r(23132),y=r(57714),f=r(38304),h=r(75610),v=r(30709),m=r(79611),b=r(61099),g=d.s.getLogger("esri.layers.mixins.PortalLayer"),k=function(t){var e=function(t){(0,p.Z)(v,t);var e=(0,c.Z)(v);function v(){var t;return(0,o.Z)(this,v),(t=e.apply(this,arguments)).resourceReferences={portalItem:null,paths:[]},t.userHasEditingPrivileges=!0,t}return(0,l.Z)(v,[{key:"destroy",value:function(){var t;null!==(t=this.portalItem)&&void 0!==t&&t.destroy(),this.portalItem=null}},{key:"portalItem",set:function(t){t!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",t))}},{key:"readPortalItem",value:function(t,e,r){if(e.itemId)return new b.default({id:e.itemId,portal:r&&r.portal})}},{key:"writePortalItem",value:function(t,e){t&&t.id&&(e.itemId=t.id)}},{key:"loadFromPortal",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(e,n){var i;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.portalItem||!this.portalItem.id){t.next=14;break}return t.prev=1,t.next=4,Promise.all([r.e(8854),r.e(277)]).then(r.bind(r,50277)).then((function(t){return t.l}));case 4:return i=t.sent,(0,d.H)(n),t.next=8,i.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},n);case 8:return t.abrupt("return",t.sent);case 11:throw t.prev=11,t.t0=t.catch(1),(0,d.u)(t.t0)||g.warn("Failed to load layer (".concat(this.title,", ").concat(this.id,") portal item (").concat(this.portalItem.id,")\n  ").concat(t.t0)),t.t0;case 14:case"end":return t.stop()}}),t,this,[[1,11]])})));return function(e,r){return t.apply(this,arguments)}}()},{key:"finishLoadEditablePortalLayer",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(e){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=this,t.next=3,this._fetchUserHasEditingPrivileges(e).catch((function(t){return(0,d.M)(t),!0}));case 3:t.t1=t.sent,t.t0._set.call(t.t0,"userHasEditingPrivileges",t.t1);case 5:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"_fetchUserHasEditingPrivileges",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(e){var r,n;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=this.url?null===y.a||void 0===y.a?void 0:y.a.findCredential(this.url):null){t.next=3;break}return t.abrupt("return",!0);case 3:if(w.credential!==r){t.next=7;break}t.t0=w.user,t.next=10;break;case 7:return t.next=9,this._fetchEditingUser(e);case 9:t.t0=t.sent;case 10:return n=t.t0,t.abrupt("return",(w.credential=r,w.user=n,(0,h.t)(n)||null==n.privileges||n.privileges.includes("features:user:edit")));case 12:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"_fetchEditingUser",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(e){var r,n,i,o,l,s,u,p,c;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(i=null===(r=this.portalItem)||void 0===r||null===(n=r.portal)||void 0===n?void 0:n.user)){t.next=3;break}return t.abrupt("return",i);case 3:if(null!==(o=y.a.findServerInfo(this.url))&&void 0!==o&&o.owningSystemUrl){t.next=6;break}return t.abrupt("return",null);case 6:if(l="".concat(o.owningSystemUrl,"/sharing/rest"),!(s=m.B.getDefault())||!s.loaded||(0,y.F)(s.restUrl)!==(0,y.F)(l)){t.next=9;break}return t.abrupt("return",s.user);case 9:return u="".concat(l,"/community/self"),p=(0,h.r)(e)?e.signal:null,t.next=13,(0,f.a)((0,y.U)(u,{authMode:"no-prompt",query:{f:"json"},signal:p}));case 13:return c=t.sent,t.abrupt("return",c.ok?m.p.fromJSON(c.value.data):null);case 15:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"read",value:function(t,e){e&&(e.layer=this),(0,s.Z)((0,u.Z)(v.prototype),"read",this).call(this,t,e)}},{key:"write",value:function(t,e){var r=e&&e.portal,a=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||m.B.getDefault());return r&&a&&!(0,y.N)(a.restUrl,r.restUrl)?(e.messages&&e.messages.push(new d.a("layer:cross-portal","The layer '".concat(this.title," (").concat(this.id,")' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer"),{layer:this})),null):(0,s.Z)((0,u.Z)(v.prototype),"write",this).call(this,t,(0,n.Z)((0,n.Z)({},e),{},{layer:this}))}}]),v}(t);return(0,d.e)([(0,d.d)({type:b.default})],e.prototype,"portalItem",null),(0,d.e)([(0,v.o)("web-document","portalItem",["itemId"])],e.prototype,"readPortalItem",null),(0,d.e)([(0,v.r)("web-document","portalItem",{itemId:{type:String}})],e.prototype,"writePortalItem",null),(0,d.e)([(0,d.d)({clonable:!1})],e.prototype,"resourceReferences",void 0),(0,d.e)([(0,d.d)({readOnly:!0})],e.prototype,"userHasEditingPrivileges",void 0),e=(0,d.e)([(0,d.n)("esri.layers.mixins.PortalLayer")],e),e},w={credential:null,user:null}}}]);
//# sourceMappingURL=9680.a4b44882.chunk.js.map