"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[2461,2151,339],{37243:function(e,t,n){n.d(t,{n:function(){return v},p:function(){return f}});var r=n(43144),o=n(15671),i=n(60136),a=n(29388),u=n(50165),l=n(78697),s=n(32335),c=n(77322),d=n(49961),h=new(n(13994).s)({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"}),p=function(e){(0,i.Z)(n,e);var t=(0,a.Z)(n);function n(e){var r;return(0,o.Z)(this,n),(r=t.call(this,e)).name=null,r.description=null,r.drawingTool=null,r.prototype=null,r.thumbnail=null,r}return(0,r.Z)(n)}((0,l.l)(s.l));(0,u.e)([(0,u.d)({json:{write:!0}})],p.prototype,"name",void 0),(0,u.e)([(0,u.d)({json:{write:!0}})],p.prototype,"description",void 0),(0,u.e)([(0,u.d)({json:{read:h.read,write:h.write}})],p.prototype,"drawingTool",void 0),(0,u.e)([(0,u.d)({json:{write:!0}})],p.prototype,"prototype",void 0),(0,u.e)([(0,u.d)({json:{write:!0}})],p.prototype,"thumbnail",void 0);var f=p=(0,u.e)([(0,u.n)("esri.layers.support.FeatureTemplate")],p),y=function(e){(0,i.Z)(n,e);var t=(0,a.Z)(n);function n(e){var r;return(0,o.Z)(this,n),(r=t.call(this,e)).id=null,r.name=null,r.domains=null,r.templates=null,r}return(0,r.Z)(n,[{key:"readDomains",value:function(e){for(var t={},n=0,r=Object.keys(e);n<r.length;n++){var o=r[n];t[o]=(0,d.t)(e[o])}return t}},{key:"writeDomains",value:function(e,t){for(var n={},r=0,o=Object.keys(e);r<o.length;r++){var i,a=o[r];e[a]&&(n[a]=null===(i=e[a])||void 0===i?void 0:i.toJSON())}t.domains=n}}]),n}((0,l.l)(s.l));(0,u.e)([(0,u.d)({json:{write:!0}})],y.prototype,"id",void 0),(0,u.e)([(0,u.d)({json:{write:!0}})],y.prototype,"name",void 0),(0,u.e)([(0,u.d)({json:{write:!0}})],y.prototype,"domains",void 0),(0,u.e)([(0,c.o)("domains")],y.prototype,"readDomains",null),(0,u.e)([(0,c.r)("domains")],y.prototype,"writeDomains",null),(0,u.e)([(0,u.d)({type:[f],json:{write:!0}})],y.prototype,"templates",void 0);var v=y=(0,u.e)([(0,u.n)("esri.layers.support.FeatureType")],y)},52870:function(e,t,n){n.d(t,{l:function(){return p}});var r=n(29439),o=n(74165),i=n(15861),a=n(15671),u=n(43144),l=n(13994),s=n(50165),c=n(24982),d=n(78330),h=n(68668),p=function(){function e(t,n,r,o){(0,a.Z)(this,e),this.parsedUrl=t,this.portalItem=n,this.apiKey=r,this.signal=o,this.rootDocument=null;var i=this.parsedUrl.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);i&&(this.urlParts={root:i[1],layerId:parseInt(i[2],10)})}return(0,u.Z)(e,[{key:"fetch",value:function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){var t,n,r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.urlParts){e.next=2;break}return e.abrupt("return",null);case 2:if(null===(t=this.portalItem)||void 0===t){e.next=6;break}e.t0=t,e.next=9;break;case 6:return e.next=8,this._portalItemFromServiceItemId();case 8:e.t0=e.sent;case 9:if(n=e.t0,!(0,s.t)(n)){e.next=12;break}return e.abrupt("return",this._loadFromUrl());case 12:return e.next=14,this._findAndLoadRelatedPortalItem(n);case 14:return r=e.sent,e.abrupt("return",(0,s.t)(r)?null:this._loadFeatureLayerFromPortalItem(r));case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchPortalItem",value:function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){var t,n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.urlParts){e.next=2;break}return e.abrupt("return",null);case 2:if(null===(t=this.portalItem)||void 0===t){e.next=6;break}e.t0=t,e.next=9;break;case 6:return e.next=8,this._portalItemFromServiceItemId();case 8:e.t0=e.sent;case 9:return n=e.t0,e.abrupt("return",(0,s.t)(n)?null:this._findAndLoadRelatedPortalItem(n));case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_fetchRootDocument",value:function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){var t,n,r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,s.r)(this.rootDocument)){e.next=2;break}return e.abrupt("return",this.rootDocument);case 2:if(!(0,s.t)(this.urlParts)){e.next=4;break}return e.abrupt("return",(this.rootDocument={},{}));case 4:return t={query:{f:"json",token:this.apiKey},responseType:"json",signal:this.signal},n="".concat(this.urlParts.root,"/SceneServer"),e.prev=5,e.next=8,(0,l.U)(n,t);case 8:r=e.sent,this.rootDocument=r.data,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),this.rootDocument={};case 15:return e.abrupt("return",this.rootDocument);case 16:case"end":return e.stop()}}),e,this,[[5,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"_fetchServiceOwningPortalUrl",value:function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){var t,n,r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(t=null===l.a||void 0===l.a?void 0:l.a.findServerInfo(this.parsedUrl.path))||void 0===t||!t.owningSystemUrl){e.next=3;break}return e.abrupt("return",t.owningSystemUrl);case 3:return n=this.parsedUrl.path.replace(/(.*\/rest)\/.*/i,"$1")+"/info",e.prev=4,e.next=7,(0,l.U)(n,{query:{f:"json"},responseType:"json",signal:this.signal});case 7:if(!(r=e.sent.data.owningSystemUrl)){e.next=10;break}return e.abrupt("return",r);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),(0,s._)(e.t0);case 15:return e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,this,[[4,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"_findAndLoadRelatedPortalItem",value:function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:this.signal});case 3:if(e.t0=e.sent.find((function(e){return"Feature Service"===e.type})),e.t0){e.next=6;break}e.t0=null;case 6:return e.abrupt("return",e.t0);case 9:return e.prev=9,e.t1=e.catch(0),e.abrupt("return",((0,s._)(e.t1),null));case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_loadFeatureLayerFromPortalItem",value:function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){var n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.load({signal:this.signal});case 2:return e.next=4,this._findMatchingAssociatedSublayerUrl(t.url);case 4:return n=e.sent,e.abrupt("return",new c.K({url:n,portalItem:t}).load({signal:this.signal}));case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_loadFromUrl",value:function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){var t;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._findMatchingAssociatedSublayerUrl("".concat(this.urlParts.root,"/FeatureServer"));case 2:return t=e.sent,e.abrupt("return",new c.K({url:t}).load({signal:this.signal}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_findMatchingAssociatedSublayerUrl",value:function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){var n,i,a,u,s,c,d,h,p,f,y,v;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1"),i={query:{f:"json"},responseType:"json",authMode:"no-prompt",signal:this.signal},a=this.urlParts.layerId,u=this._fetchRootDocument(),s=(0,l.U)(n,i),e.next=7,Promise.all([s,u]);case 7:if(c=e.sent,d=(0,r.Z)(c,2),h=d[0],p=d[1],f=p&&p.layers,y=h.data&&h.data.layers,Array.isArray(y)){e.next=15;break}throw new Error("expected layers array");case 15:if(!Array.isArray(f)){e.next=25;break}v=0;case 17:if(!(v<Math.min(f.length,y.length))){e.next=23;break}if(f[v].id!==a){e.next=20;break}return e.abrupt("return","".concat(n,"/").concat(y[v].id));case 20:v++,e.next=17;break;case 23:e.next=27;break;case 25:if(!(a<y.length)){e.next=27;break}return e.abrupt("return","".concat(n,"/").concat(y[a].id));case 27:throw new Error("could not find matching associated sublayer");case 28:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_portalItemFromServiceItemId",value:function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){var t,n,r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._fetchRootDocument();case 2:if(t=e.sent.serviceItemId){e.next=5;break}return e.abrupt("return",null);case 5:return n=new h.default({id:t,apiKey:this.apiKey}),e.next=8,this._fetchServiceOwningPortalUrl();case 8:return r=e.sent,(0,s.r)(r)&&(n.portal=new d.B({url:r})),e.prev=10,e.abrupt("return",n.load({signal:this.signal}));case 14:return e.prev=14,e.t0=e.catch(10),e.abrupt("return",((0,s._)(e.t0),null));case 17:case"end":return e.stop()}}),e,this,[[10,14]])})));return function(){return e.apply(this,arguments)}}()}]),e}()},49961:function(e,t,n){n.d(t,{n:function(){return D},p:function(){return f},t:function(){return I},u:function(){return S},y:function(){return L}});var r,o=n(15671),i=n(43144),a=n(60136),u=n(29388),l=n(50165),s=n(13994),c=n(32335),d=n(79747),h=n(77322),p=n(31412),f=r=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;return(0,o.Z)(this,n),(r=t.call(this,e)).name=null,r.code=null,r}return(0,i.Z)(n,[{key:"clone",value:function(){return new r({name:this.name,code:this.code})}}]),n}(c.l);(0,l.e)([(0,l.d)({type:String,json:{write:!0}})],f.prototype,"name",void 0),(0,l.e)([(0,l.d)({type:[String,Number],json:{write:!0}})],f.prototype,"code",void 0),f=r=(0,l.e)([(0,l.n)("esri.layers.support.CodedValue")],f);var y=new s.s({inherited:"inherited",codedValue:"coded-value",range:"range"}),v=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;return(0,o.Z)(this,n),(r=t.call(this,e)).name=null,r.type=null,r}return(0,i.Z)(n)}(c.l);(0,l.e)([(0,l.d)({type:String,json:{write:!0}})],v.prototype,"name",void 0),(0,l.e)([(0,d.r)(y)],v.prototype,"type",void 0);var m,g=v=(0,l.e)([(0,l.n)("esri.layers.support.Domain")],v),Z=m=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;return(0,o.Z)(this,n),(r=t.call(this,e)).codedValues=null,r.type="coded-value",r}return(0,i.Z)(n,[{key:"getName",value:function(e){var t=null;if(this.codedValues){var n=String(e);this.codedValues.some((function(e){return String(e.code)===n&&(t=e.name),!!t}))}return t}},{key:"clone",value:function(){return new m({codedValues:(0,l.m)(this.codedValues),name:this.name})}}]),n}(g);(0,l.e)([(0,l.d)({type:[f],json:{write:!0}})],Z.prototype,"codedValues",void 0),(0,l.e)([(0,d.r)({codedValue:"coded-value"})],Z.prototype,"type",void 0);var w,S=Z=m=(0,l.e)([(0,l.n)("esri.layers.support.CodedValueDomain")],Z),k=w=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;return(0,o.Z)(this,n),(r=t.call(this,e)).type="inherited",r}return(0,i.Z)(n,[{key:"clone",value:function(){return new w}}]),n}(g);(0,l.e)([(0,d.r)({inherited:"inherited"})],k.prototype,"type",void 0);var b,T=k=w=(0,l.e)([(0,l.n)("esri.layers.support.InheritedDomain")],k),x=b=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;return(0,o.Z)(this,n),(r=t.call(this,e)).maxValue=null,r.minValue=null,r.type="range",r}return(0,i.Z)(n,[{key:"clone",value:function(){return new b({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}}]),n}(g);(0,l.e)([(0,l.d)({type:Number,json:{type:[Number],read:{source:"range",reader:function(e,t){return t.range&&t.range[1]}},write:{enabled:!1,overridePolicy:function(){return{enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer:function(e,t,n){t[n]=[this.minValue||0,e]}}}})],x.prototype,"maxValue",void 0),(0,l.e)([(0,l.d)({type:Number,json:{type:[Number],read:{source:"range",reader:function(e,t){return t.range&&t.range[0]}},write:{target:"range",writer:function(e,t,n){t[n]=[e,this.maxValue||0]}}}})],x.prototype,"minValue",void 0),(0,l.e)([(0,d.r)({range:"range"})],x.prototype,"type",void 0);var _,F=x=b=(0,l.e)([(0,l.n)("esri.layers.support.RangeDomain")],x),D={key:"type",base:g,typeMap:{range:F,"coded-value":S,inherited:T}};function I(e){if(!e||!e.type)return null;switch(e.type){case"range":return F.fromJSON(e);case"codedValue":return S.fromJSON(e);case"inherited":return T.fromJSON(e)}return null}var j=new s.s({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"}),A=_=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;return(0,o.Z)(this,n),(r=t.call(this,e)).alias=null,r.defaultValue=void 0,r.description=null,r.domain=null,r.editable=!0,r.length=-1,r.name=null,r.nullable=!0,r.type=null,r.valueType=null,r}return(0,i.Z)(n,[{key:"readDescription",value:function(e,t){var n,r=t.description;try{n=JSON.parse(r)}catch(o){}return n?n.value:null}},{key:"readValueType",value:function(e,t){var n,r=t.description;try{n=JSON.parse(r)}catch(o){}return n?j.fromJSON(n.fieldValueType):null}},{key:"clone",value:function(){return new _({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType})}}]),n}(c.l);(0,l.e)([(0,l.d)({type:String,json:{write:!0}})],A.prototype,"alias",void 0),(0,l.e)([(0,l.d)({type:[String,Number],json:{write:{allowNull:!0}}})],A.prototype,"defaultValue",void 0),(0,l.e)([(0,l.d)()],A.prototype,"description",void 0),(0,l.e)([(0,h.o)("description")],A.prototype,"readDescription",null),(0,l.e)([(0,l.d)({types:D,json:{read:{reader:I},write:!0}})],A.prototype,"domain",void 0),(0,l.e)([(0,l.d)({type:Boolean,json:{write:!0}})],A.prototype,"editable",void 0),(0,l.e)([(0,l.d)({type:l.S,json:{write:!0}})],A.prototype,"length",void 0),(0,l.e)([(0,l.d)({type:String,json:{write:!0}})],A.prototype,"name",void 0),(0,l.e)([(0,l.d)({type:Boolean,json:{write:!0}})],A.prototype,"nullable",void 0),(0,l.e)([(0,d.r)(p.i)],A.prototype,"type",void 0),(0,l.e)([(0,l.d)()],A.prototype,"valueType",void 0),(0,l.e)([(0,h.o)("valueType",["description"])],A.prototype,"readValueType",null);var L=A=_=(0,l.e)([(0,l.n)("esri.layers.support.Field")],A)},22984:function(e,t,n){n.d(t,{a:function(){return f},c:function(){return c},d:function(){return y}});var r=n(15671),o=n(43144),i=n(60136),a=n(29388),u=n(50165),l=n(69738),s=n(73627),c=function(e){(0,i.Z)(n,e);var t=(0,a.Z)(n);function n(){var e;return(0,r.Z)(this,n),(e=t.apply(this,arguments)).updating=!1,e.handleId=0,e.handles=new l.u,e.scheduleHandleId=0,e.pendingPromises=new Set,e}return(0,o.Z)(n,[{key:"destroy",value:function(){this.removeAll(),this.handles.destroy()}},{key:"add",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this._installWatch(e,t,n,s.l)}},{key:"addWhen",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this._installWatch(e,t,n,s.f)}},{key:"addOnCollectionChange",value:function(e,t){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=r.initial,i=void 0!==o&&o,a=r.final,u=void 0!==a&&a,l=++this.handleId;return this.handles.add([(0,s.a)(e,"after-changes",this._createSyncUpdatingCallback(),s.U),(0,s.a)(e,"change",t,{onListenerAdd:i?function(e){return t({added:e.toArray(),removed:[]})}:void 0,onListenerRemove:u?function(e){return t({added:[],removed:e.toArray()})}:void 0})],l),{remove:function(){return n.handles.remove(l)}}}},{key:"addPromise",value:function(e){var t=this;if((0,u.t)(e))return e;var n=++this.handleId;this.handles.add({remove:function(){t.pendingPromises.delete(e)&&(0!==t.pendingPromises.size||t.handles.has(p)||t._set("updating",!1))}},n),this.pendingPromises.add(e),this._set("updating",!0);var r=function(){return t.handles.remove(n)};return e.then(r,r),e}},{key:"removeAll",value:function(){this.pendingPromises.clear(),this.handles.removeAll(),this._set("updating",!1)}},{key:"_installWatch",value:function(e,t){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0,i=++this.handleId;r.sync||this._installSyncUpdatingWatch(e,i);var a=o(e,t,r);return this.handles.add(a,i),{remove:function(){return n.handles.remove(i)}}}},{key:"_installSyncUpdatingWatch",value:function(e,t){var n=this._createSyncUpdatingCallback(),r=(0,s.l)(e,n,{sync:!0,equals:function(){return!1}});return this.handles.add(r,t),r}},{key:"_createSyncUpdatingCallback",value:function(){var e=this;return function(){e.handles.remove(p),++e.scheduleHandleId;var t=e.scheduleHandleId;e._get("updating")||e._set("updating",!0),e.handles.add((0,u.O)((function(){t===e.scheduleHandleId&&(e._set("updating",e.pendingPromises.size>0),e.handles.remove(p))})),p)}}}]),n}(u.y);(0,u.e)([(0,u.d)({readOnly:!0})],c.prototype,"updating",void 0),c=(0,u.e)([(0,u.n)("esri.core.support.WatchUpdatingTracking")],c);var d,h,p=-42;(h=d||(d={}))[h.NONE=0]="NONE",h[h.SYNC=1]="SYNC",h[h.INIT=2]="INIT";var f=function(e){var t=function(e){(0,i.Z)(n,e);var t=(0,a.Z)(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,o.Z)(n,[{key:"destroy",value:function(){var e,t;this.destroyed||(null!==(e=this._get("handles"))&&void 0!==e&&e.destroy(),null===(t=this._get("updatingHandles"))||void 0===t||t.destroy())}},{key:"handles",get:function(){return this._get("handles")||new l.u}},{key:"updatingHandles",get:function(){return this._get("updatingHandles")||new c}}]),n}(e);return(0,u.e)([(0,u.d)({readOnly:!0})],t.prototype,"handles",null),(0,u.e)([(0,u.d)({readOnly:!0})],t.prototype,"updatingHandles",null),t=(0,u.e)([(0,u.n)("esri.core.HandleOwner")],t),t},y=function(e){(0,i.Z)(n,e);var t=(0,a.Z)(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,o.Z)(n)}(f(u.y));y=(0,u.e)([(0,u.n)("esri.core.HandleOwner")],y)},69738:function(e,t,n){n.d(t,{u:function(){return c}});var r=n(15671),o=n(43144),i=n(60136),a=n(29388),u=n(50165),l=n(40133),s=function(e){(0,i.Z)(n,e);var t=(0,a.Z)(n);function n(e){var o;return(0,r.Z)(this,n),(o=t.call(this,e))._groups=new Map,o}return(0,o.Z)(n,[{key:"destroy",value:function(){this.removeAll()}},{key:"size",get:function(){var e=0;return this._groups.forEach((function(t){e+=t.length})),e}},{key:"add",value:function(e,t){var n=this;if(!this._isHandle(e)&&!Array.isArray(e)&&!l.j.isCollection(e))return this;var r=this._getOrCreateGroup(t);return Array.isArray(e)||l.j.isCollection(e)?e.forEach((function(e){return n._isHandle(e)&&r.push(e)})):r.push(e),this.notifyChange("size"),this}},{key:"forEach",value:function(e,t){if("function"==typeof e)this._groups.forEach((function(t){return t.forEach(e)}));else{var n=this._getGroup(e);n&&t&&n.forEach(t)}}},{key:"has",value:function(e){return this._groups.has(this._ensureGroupKey(e))}},{key:"remove",value:function(e){if(Array.isArray(e)||l.j.isCollection(e))return e.forEach(this.remove,this),this;if(!this.has(e))return this;for(var t=this._getGroup(e),n=0;n<t.length;n++)t[n].remove();return this._deleteGroup(e),this.notifyChange("size"),this}},{key:"removeAll",value:function(){return this._groups.forEach((function(e){for(var t=0;t<e.length;t++)e[t].remove()})),this._groups.clear(),this.notifyChange("size"),this}},{key:"_isHandle",value:function(e){return e&&!!e.remove}},{key:"_getOrCreateGroup",value:function(e){if(this.has(e))return this._getGroup(e);var t=[];return this._groups.set(this._ensureGroupKey(e),t),t}},{key:"_getGroup",value:function(e){return(0,u.q)(this._groups.get(this._ensureGroupKey(e)))}},{key:"_deleteGroup",value:function(e){return this._groups.delete(this._ensureGroupKey(e))}},{key:"_ensureGroupKey",value:function(e){return e||"_default_"}}]),n}(u.y);(0,u.e)([(0,u.d)({readOnly:!0})],s.prototype,"size",null);var c=s=(0,u.e)([(0,u.n)("esri.core.Handles")],s)},84913:function(e,t,n){n.d(t,{p:function(){return h}});var r,o=n(15671),i=n(43144),a=n(60136),u=n(29388),l=n(50165),s=n(40133),c=n(32335),d=r=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;return(0,o.Z)(this,n),(r=t.call(this,e)).floorField=null,r.viewAllMode=!1,r.viewAllLevelIds=new s.j,r}return(0,i.Z)(n,[{key:"clone",value:function(){return new r({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}}]),n}(c.l);(0,l.e)([(0,l.d)({type:String,json:{write:!0}})],d.prototype,"floorField",void 0),(0,l.e)([(0,l.d)({json:{read:!1,write:!1}})],d.prototype,"viewAllMode",void 0),(0,l.e)([(0,l.d)({json:{read:!1,write:!1}})],d.prototype,"viewAllLevelIds",void 0);var h=d=r=(0,l.e)([(0,l.n)("esri.layers.support.LayerFloorInfo")],d)},50338:function(e,t,n){n.d(t,{S:function(){return u},e:function(){return r},i:function(){return o},l:function(){return i},o:function(){return a},r:function(){return s},s:function(){return c},t:function(){return l},y:function(){return d}});var r=[252,146,31,255],o=[153,153,153,255],i={type:"esriSMS",style:"esriSMSCircle",size:6,color:r,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},a={type:"esriSLS",style:"esriSLSSolid",width:.75,color:r},u={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},l={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},s={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},c={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},d={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}},79747:function(e,t,n){n.d(t,{r:function(){return i}});var r=n(13994),o=n(50165);function i(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e instanceof r.s?e:new r.s(e,n),a={type:null===(t=null===n||void 0===n?void 0:n.ignoreUnknown)||void 0===t||t?i.apiValues:String,json:{type:i.jsonValues,read:!(null!==n&&void 0!==n&&n.readOnly)&&{reader:i.read},write:{writer:i.write}}};return void 0!==(null===n||void 0===n?void 0:n.readOnly)&&(a.readOnly=!!n.readOnly),void 0!==(null===n||void 0===n?void 0:n.default)&&(a.json.default=n.default),void 0!==(null===n||void 0===n?void 0:n.name)&&(a.json.name=n.name),(0,o.d)(a)}},31412:function(e,t,n){n.d(t,{i:function(){return r}});var r=new(n(13994).s)({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml"})},78664:function(e,t,n){n.d(t,{a:function(){return y},c:function(){return d},d:function(){return h},f:function(){return l},l:function(){return s},s:function(){return u},v:function(){return p},y:function(){return c}});var r=n(50165),o=n(96263),i=n(77322),a=n(31278);function u(e){return void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax}function l(e){return void 0!==e.points}function s(e){return void 0!==e.x&&void 0!==e.y}function c(e){return void 0!==e.paths}function d(e){return void 0!==e.rings}function h(e){return(0,r.t)(e)?null:e instanceof i.p?e:s(e)?i.j.fromJSON(e):c(e)?a.m.fromJSON(e):d(e)?a.v.fromJSON(e):l(e)?a.a.fromJSON(e):u(e)?o.M.fromJSON(e):null}function p(e){return e?s(e)?"esriGeometryPoint":c(e)?"esriGeometryPolyline":d(e)?"esriGeometryPolygon":u(e)?"esriGeometryEnvelope":l(e)?"esriGeometryMultipoint":null:null}var f={esriGeometryPoint:i.j,esriGeometryPolyline:a.m,esriGeometryPolygon:a.v,esriGeometryEnvelope:o.M,esriGeometryMultipoint:a.a};function y(e){return e&&f[e]||null}},42:function(e,t,n){n.d(t,{L:function(){return Z},S:function(){return g},m:function(){return T},u:function(){return b}});var r=n(1413),o=n(13994),i=n(52155),a=n(50165),u={year:"numeric",month:"numeric",day:"numeric"},l={year:"numeric",month:"long",day:"numeric"},s={year:"numeric",month:"short",day:"numeric"},c={year:"numeric",month:"long",weekday:"long",day:"numeric"},d={hour:"numeric",minute:"numeric"},h=(0,r.Z)((0,r.Z)({},d),{},{second:"numeric"}),p={"short-date":u,"short-date-short-time":(0,r.Z)((0,r.Z)({},u),d),"short-date-short-time-24":(0,r.Z)((0,r.Z)((0,r.Z)({},u),d),{},{hour12:!1}),"short-date-long-time":(0,r.Z)((0,r.Z)({},u),h),"short-date-long-time-24":(0,r.Z)((0,r.Z)((0,r.Z)({},u),h),{},{hour12:!1}),"short-date-le":u,"short-date-le-short-time":(0,r.Z)((0,r.Z)({},u),d),"short-date-le-short-time-24":(0,r.Z)((0,r.Z)((0,r.Z)({},u),d),{},{hour12:!1}),"short-date-le-long-time":(0,r.Z)((0,r.Z)({},u),h),"short-date-le-long-time-24":(0,r.Z)((0,r.Z)((0,r.Z)({},u),h),{},{hour12:!1}),"long-month-day-year":l,"long-month-day-year-short-time":(0,r.Z)((0,r.Z)({},l),d),"long-month-day-year-short-time-24":(0,r.Z)((0,r.Z)((0,r.Z)({},l),d),{},{hour12:!1}),"long-month-day-year-long-time":(0,r.Z)((0,r.Z)({},l),h),"long-month-day-year-long-time-24":(0,r.Z)((0,r.Z)((0,r.Z)({},l),h),{},{hour12:!1}),"day-short-month-year":s,"day-short-month-year-short-time":(0,r.Z)((0,r.Z)({},s),d),"day-short-month-year-short-time-24":(0,r.Z)((0,r.Z)((0,r.Z)({},s),d),{},{hour12:!1}),"day-short-month-year-long-time":(0,r.Z)((0,r.Z)({},s),h),"day-short-month-year-long-time-24":(0,r.Z)((0,r.Z)((0,r.Z)({},s),h),{},{hour12:!1}),"long-date":c,"long-date-short-time":(0,r.Z)((0,r.Z)({},c),d),"long-date-short-time-24":(0,r.Z)((0,r.Z)((0,r.Z)({},c),d),{},{hour12:!1}),"long-date-long-time":(0,r.Z)((0,r.Z)({},c),h),"long-date-long-time-24":(0,r.Z)((0,r.Z)((0,r.Z)({},c),h),{},{hour12:!1}),"long-month-year":{month:"long",year:"numeric"},"short-month-year":{month:"short",year:"numeric"},year:{year:"numeric"},"short-time":d,"long-time":h},f=(0,o.o)()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"});f.toJSON.bind(f),f.fromJSON.bind(f);var y={ar:"ar-u-nu-latn-ca-gregory"},v=new WeakMap,m=p["short-date-short-time"];function g(e){return p[e]||null}function Z(e,t){return function(e){var t=e||m;if(!v.has(t)){var n=(0,i.l)(),r=y[(0,i.l)()]||n;v.set(t,new Intl.DateTimeFormat(r,t))}return v.get(t)}(t).format(e)}(0,i.g)((function(){v=new WeakMap,m=p["short-date-short-time"]}));var w={ar:"ar-u-nu-latn"},S=new WeakMap,k={};function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={};return null!=e.digitSeparator&&(t.useGrouping=e.digitSeparator),null!=e.places&&(t.minimumFractionDigits=t.maximumFractionDigits=e.places),t}function T(e,t){return-0===e&&(e=0),function(e){var t=e||k;if(!S.has(t)){var n=(0,i.l)(),r=w[(0,i.l)()]||n;S.set(t,new Intl.NumberFormat(r,e))}return(0,a.q)(S.get(t))}(t).format(e)}(0,i.g)((function(){S=new WeakMap,k={}}))},90339:function(e,t,n){n.d(t,{r:function(){return a}});var r=n(37762),o=n(50165),i=n(76375);function a(e,t,n){if(n&&n.features&&n.hasZ){var a=(0,i.o)(n.geometryType,t,e.outSpatialReference);if(!(0,o.t)(a)){var u,l=(0,r.Z)(n.features);try{for(l.s();!(u=l.n()).done;){a(u.value.geometry)}}catch(s){l.e(s)}finally{l.f()}}}}},73627:function(e,t,n){n.d(t,{P:function(){return d},U:function(){return h},a:function(){return u},f:function(){return i},h:function(){return p},j:function(){return l},l:function(){return o},w:function(){return f}});var r=n(50165);function o(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a(e,t,n,s)}function i(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a(e,t,n,c)}function a(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0,i=null,a=n.once?function(e,n){o(e)&&((0,r.z)(i),t(e,n))}:function(e,n){o(e)&&t(e,n)};if(i=(0,r.P)(e,a,n.sync,n.equals),n.initial){var u=e();a(u,u)}return i}function u(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=null,u=null,l=null;function s(){var e;a&&u&&(u.remove(),null!==(e=i.onListenerRemove)&&void 0!==e&&e.call(i,a),a=null,u=null)}function c(e){i.once&&i.once&&(0,r.z)(l),n(e)}var d=o(e,(function(e,n){var o;s(),(0,r.k)(e)&&(a=e,u=(0,r.l)(e,t,c),null===(o=i.onListenerAdd)||void 0===o||o.call(i,e))}),{sync:i.sync,initial:!0});return l=(0,r.p)((function(){d.remove(),s()}))}function l(e,t){return function(e,t,n){if((0,r.u)(n))return Promise.reject((0,r.v)());var o=e();if(null!==t&&void 0!==t&&t(o))return Promise.resolve(o);var i=null;function u(){i=(0,r.z)(i)}return new Promise((function(o,l){i=(0,r.w)([(0,r.x)(n,(function(){u(),l((0,r.v)())})),a(e,(function(e){u(),o(e)}),{sync:!1,once:!0},null!==t&&void 0!==t?t:s)])}))}(e,c,t)}function s(e){return!0}function c(e){return!!e}function d(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=!1,i=o(e,(function(e,n){r||t(e,n)}),n);return{remove:function(){i.remove()},pause:function(){r=!0},resume:function(){r=!1}}}var h={sync:!0},p={initial:!0},f={sync:!0,initial:!0}},47642:function(e,t,n){var r,o;function i(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function a(e){return null!=e&&!isNaN(e)&&isFinite(e)}function u(e){return e.valueExpression?r.Expression:e.field&&"string"==typeof e.field?r.Field:r.Unknown}function l(e,t){var n=t||u(e),i=e.valueUnit||"unknown";return n===r.Unknown?o.Constant:e.stops?o.Stops:null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?o.ClampedLinear:"unknown"===i?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?o.Proportional:o.Additive:o.Identity:o.RealWorldSize}n.d(t,{a:function(){return l},e:function(){return i},i:function(){return o},l:function(){return a},n:function(){return r},t:function(){return u}}),function(e){e.Unknown="unknown",e.Expression="expression",e.Field="field"}(r||(r={})),function(e){e.Unknown="unknown",e.Stops="stops",e.ClampedLinear="clamped-linear",e.Proportional="proportional",e.Additive="additive",e.Constant="constant",e.Identity="identity",e.RealWorldSize="real-world-size"}(o||(o={}))},7093:function(e,t,n){n.d(t,{r:function(){return a},t:function(){return l}});var r=n(74165),o=n(15861),i=n(50165);function a(e,t){return u.apply(this,arguments)}function u(){return u=(0,o.Z)((0,r.Z)().mark((function e(t,o){var i,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(2637).then(n.bind(n,92637));case 2:return i=e.sent,a=i.WhereClause,e.abrupt("return",a.create(t,o));case 5:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function l(e,t){return(0,i.r)(e)?(0,i.r)(t)?"(".concat(e,") AND (").concat(t,")"):e:t}},76375:function(e,t,n){n.d(t,{o:function(){return u}});var r=n(37762),o=n(50165),i=n(73428),a=n(77322);function u(e,t,n){if((0,o.t)(t)||(0,o.t)(n)||n.vcsWkid||(0,a.E)(t,n))return null;var u=(0,i.W)(t)/(0,i.W)(n);if(1===u)return null;switch(e){case"point":case"esriGeometryPoint":return function(e){return function(e,t){e&&null!=e.z&&(e.z*=t)}(e,u)};case"polyline":case"esriGeometryPolyline":return function(e){return function(e,t){if(e){var n,o=(0,r.Z)(e.paths);try{for(o.s();!(n=o.n()).done;){var i,a=n.value,u=(0,r.Z)(a);try{for(u.s();!(i=u.n()).done;){var l=i.value;l.length>2&&(l[2]*=t)}}catch(s){u.e(s)}finally{u.f()}}}catch(s){o.e(s)}finally{o.f()}}}(e,u)};case"polygon":case"esriGeometryPolygon":return function(e){return function(e,t){if(e){var n,o=(0,r.Z)(e.rings);try{for(o.s();!(n=o.n()).done;){var i,a=n.value,u=(0,r.Z)(a);try{for(u.s();!(i=u.n()).done;){var l=i.value;l.length>2&&(l[2]*=t)}}catch(s){u.e(s)}finally{u.f()}}}catch(s){o.e(s)}finally{o.f()}}}(e,u)};case"multipoint":case"esriGeometryMultipoint":return function(e){return function(e,t){if(e){var n,o=(0,r.Z)(e.points);try{for(o.s();!(n=o.n()).done;){var i=n.value;i.length>2&&(i[2]*=t)}}catch(a){o.e(a)}finally{o.f()}}}(e,u)};case"extent":case"esriGeometryExtent":return function(e){return function(e,t){e&&null!=e.zmin&&null!=e.zmax&&(e.zmin*=t,e.zmax*=t)}(e,u)};default:return null}}}}]);
//# sourceMappingURL=2461.fa3a2f77.chunk.js.map