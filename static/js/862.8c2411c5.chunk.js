"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[862,2857,1816,6547],{61416:function(e,t,n){n.d(t,{p:function(){return h}});var r=n(43144),o=n(15671),i=n(60136),a=n(29388),u=n(48848),l=n(62610),s=n(40558),d=n(40114),c=(n(93661),new s.s({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"})),p=function(e){(0,i.Z)(n,e);var t=(0,a.Z)(n);function n(e){var r;return(0,o.Z)(this,n),(r=t.call(this,e)).name=null,r.description=null,r.drawingTool=null,r.prototype=null,r.thumbnail=null,r}return(0,r.Z)(n)}((0,l.i)(d.l));(0,u.e)([(0,u.y)({json:{write:!0}})],p.prototype,"name",void 0),(0,u.e)([(0,u.y)({json:{write:!0}})],p.prototype,"description",void 0),(0,u.e)([(0,u.y)({json:{read:c.read,write:c.write}})],p.prototype,"drawingTool",void 0),(0,u.e)([(0,u.y)({json:{write:!0}})],p.prototype,"prototype",void 0),(0,u.e)([(0,u.y)({json:{write:!0}})],p.prototype,"thumbnail",void 0);var h=p=(0,u.e)([(0,u.n)("esri.layers.support.FeatureTemplate")],p)},77880:function(e,t,n){n.d(t,{n:function(){return y}});var r=n(15671),o=n(43144),i=n(60136),a=n(29388),u=n(48848),l=n(62610),s=n(40114),d=(n(93661),n(82474)),c=n(69641),p=n(61416),h=function(e){(0,i.Z)(n,e);var t=(0,a.Z)(n);function n(e){var o;return(0,r.Z)(this,n),(o=t.call(this,e)).id=null,o.name=null,o.domains=null,o.templates=null,o}return(0,o.Z)(n,[{key:"readDomains",value:function(e){for(var t={},n=0,r=Object.keys(e);n<r.length;n++){var o=r[n];t[o]=(0,c.t)(e[o])}return t}},{key:"writeDomains",value:function(e,t){for(var n={},r=0,o=Object.keys(e);r<o.length;r++){var i,a=o[r];e[a]&&(n[a]=null===(i=e[a])||void 0===i?void 0:i.toJSON())}t.domains=n}}]),n}((0,l.i)(s.l));(0,u.e)([(0,u.y)({json:{write:!0}})],h.prototype,"id",void 0),(0,u.e)([(0,u.y)({json:{write:!0}})],h.prototype,"name",void 0),(0,u.e)([(0,u.y)({json:{write:!0}})],h.prototype,"domains",void 0),(0,u.e)([(0,d.o)("domains")],h.prototype,"readDomains",null),(0,u.e)([(0,d.r)("domains")],h.prototype,"writeDomains",null),(0,u.e)([(0,u.y)({type:[p.p],json:{write:!0}})],h.prototype,"templates",void 0);var y=h=(0,u.e)([(0,u.n)("esri.layers.support.FeatureType")],h)},18288:function(e,t,n){n.d(t,{l:function(){return y}});var r=n(29439),o=n(74165),i=n(15861),a=n(15671),u=n(43144),l=n(40558),s=n(93661),d=n(48848),c=n(98987),p=n(93116),h=n(21015),y=function(){function e(t,n,r,o){var i;(0,a.Z)(this,e),this._parsedUrl=t,this._portalItem=n,this._apiKey=r,this.signal=o,this._rootDocument=null;var u=null===(i=this._parsedUrl)||void 0===i?void 0:i.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);u&&(this._urlParts={root:u[1],layerId:parseInt(u[2],10)})}return(0,u.Z)(e,[{key:"fetch",value:function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){var t,n,r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._urlParts){e.next=2;break}return e.abrupt("return",null);case 2:if(null===(t=this._portalItem)||void 0===t){e.next=6;break}e.t0=t,e.next=9;break;case 6:return e.next=8,this._portalItemFromServiceItemId();case 8:e.t0=e.sent;case 9:if(n=e.t0,!(0,s.t)(n)){e.next=12;break}return e.abrupt("return",this._loadFromUrl());case 12:return e.next=14,this._findAndLoadRelatedPortalItem(n);case 14:return r=e.sent,e.abrupt("return",(0,s.t)(r)?null:this._loadFeatureLayerFromPortalItem(r));case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchPortalItem",value:function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){var t,n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._urlParts){e.next=2;break}return e.abrupt("return",null);case 2:if(null===(t=this._portalItem)||void 0===t){e.next=6;break}e.t0=t,e.next=9;break;case 6:return e.next=8,this._portalItemFromServiceItemId();case 8:e.t0=e.sent;case 9:return n=e.t0,e.abrupt("return",(0,s.t)(n)?null:this._findAndLoadRelatedPortalItem(n));case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_fetchRootDocument",value:function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){var t,n,r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,s.r)(this._rootDocument)){e.next=2;break}return e.abrupt("return",this._rootDocument);case 2:if(!(0,s.t)(this._urlParts)){e.next=4;break}return e.abrupt("return",(this._rootDocument={},{}));case 4:return t={query:{f:"json",token:this._apiKey},responseType:"json",signal:this.signal},n="".concat(this._urlParts.root,"/SceneServer"),e.prev=5,e.next=8,(0,l.U)(n,t);case 8:r=e.sent,this._rootDocument=r.data,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),this._rootDocument={};case 15:return e.abrupt("return",this._rootDocument);case 16:case"end":return e.stop()}}),e,this,[[5,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"_fetchServiceOwningPortalUrl",value:function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){var t,n,r,i,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=null===(t=this._parsedUrl)||void 0===t?void 0:t.path,null===(r=n?null===l.b||void 0===l.b?void 0:l.b.findServerInfo(n):null)||void 0===r||!r.owningSystemUrl){e.next=3;break}return e.abrupt("return",r.owningSystemUrl);case 3:return i=n?n.replace(/(.*\/rest)\/.*/i,"$1")+"/info":null,e.prev=4,e.next=7,(0,l.U)(i,{query:{f:"json"},responseType:"json",signal:this.signal});case 7:if(!(a=e.sent.data.owningSystemUrl)){e.next=10;break}return e.abrupt("return",a);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),(0,d.w)(e.t0);case 15:return e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,this,[[4,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"_findAndLoadRelatedPortalItem",value:function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:this.signal});case 3:if(e.t0=e.sent.find((function(e){return"Feature Service"===e.type})),e.t0){e.next=6;break}e.t0=null;case 6:return e.abrupt("return",e.t0);case 9:return e.prev=9,e.t1=e.catch(0),e.abrupt("return",((0,d.w)(e.t1),null));case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_loadFeatureLayerFromPortalItem",value:function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){var n,r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.load({signal:this.signal});case 2:return e.next=4,this._findMatchingAssociatedSublayerUrl(null!==(n=t.url)&&void 0!==n?n:"");case 4:return r=e.sent,e.abrupt("return",new c.default({url:r,portalItem:t}).load({signal:this.signal}));case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_loadFromUrl",value:function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){var t,n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._findMatchingAssociatedSublayerUrl("".concat(null===(t=this._urlParts)||void 0===t?void 0:t.root,"/FeatureServer"));case 2:return n=e.sent,e.abrupt("return",new c.default({url:n}).load({signal:this.signal}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_findMatchingAssociatedSublayerUrl",value:function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){var n,i,a,u,s,d,c,p,h,y,f,m,v;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1"),a={query:{f:"json"},responseType:"json",authMode:"no-prompt",signal:this.signal},u=null===(n=this._urlParts)||void 0===n?void 0:n.layerId,s=this._fetchRootDocument(),d=(0,l.U)(i,a),e.next=7,Promise.all([d,s]);case 7:if(c=e.sent,p=(0,r.Z)(c,2),h=p[0],y=p[1],f=y&&y.layers,m=h.data&&h.data.layers,Array.isArray(m)){e.next=15;break}throw new Error("expected layers array");case 15:if(!Array.isArray(f)){e.next=25;break}v=0;case 17:if(!(v<Math.min(f.length,m.length))){e.next=23;break}if(f[v].id!==u){e.next=20;break}return e.abrupt("return","".concat(i,"/").concat(m[v].id));case 20:v++,e.next=17;break;case 23:e.next=27;break;case 25:if(!(null!=u&&u<m.length)){e.next=27;break}return e.abrupt("return","".concat(i,"/").concat(m[u].id));case 27:throw new Error("could not find matching associated sublayer");case 28:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_portalItemFromServiceItemId",value:function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){var t,n,r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._fetchRootDocument();case 2:if(t=e.sent.serviceItemId){e.next=5;break}return e.abrupt("return",null);case 5:return n=new h.default({id:t,apiKey:this._apiKey}),e.next=8,this._fetchServiceOwningPortalUrl();case 8:return r=e.sent,(0,s.r)(r)&&(n.portal=new p.j({url:r})),e.prev=10,e.abrupt("return",n.load({signal:this.signal}));case 14:return e.prev=14,e.t0=e.catch(10),e.abrupt("return",((0,d.w)(e.t0),null));case 17:case"end":return e.stop()}}),e,this,[[10,14]])})));return function(){return e.apply(this,arguments)}}()}]),e}()},69641:function(e,t,n){n.d(t,{n:function(){return D},p:function(){return f},t:function(){return L},u:function(){return b},y:function(){return A}});var r,o=n(15671),i=n(43144),a=n(60136),u=n(29388),l=n(48848),s=n(40558),d=n(40114),c=n(93661),p=n(20302),h=n(82474),y=n(15436),f=r=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;return(0,o.Z)(this,n),(r=t.call(this,e)).name=null,r.code=null,r}return(0,i.Z)(n,[{key:"clone",value:function(){return new r({name:this.name,code:this.code})}}]),n}(d.l);(0,l.e)([(0,l.y)({type:String,json:{write:!0}})],f.prototype,"name",void 0),(0,l.e)([(0,l.y)({type:[String,Number],json:{write:!0}})],f.prototype,"code",void 0),f=r=(0,l.e)([(0,l.n)("esri.layers.support.CodedValue")],f);var m=new s.s({inherited:"inherited",codedValue:"coded-value",range:"range"}),v=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;return(0,o.Z)(this,n),(r=t.call(this,e)).name=null,r.type=null,r}return(0,i.Z)(n)}(d.l);(0,l.e)([(0,l.y)({type:String,json:{write:!0}})],v.prototype,"name",void 0),(0,l.e)([(0,p.r)(m)],v.prototype,"type",void 0);var g,w=v=(0,l.e)([(0,l.n)("esri.layers.support.Domain")],v),Z=g=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;return(0,o.Z)(this,n),(r=t.call(this,e)).codedValues=null,r.type="coded-value",r}return(0,i.Z)(n,[{key:"getName",value:function(e){var t=null;if(this.codedValues){var n=String(e);this.codedValues.some((function(e){return String(e.code)===n&&(t=e.name),!!t}))}return t}},{key:"clone",value:function(){return new g({codedValues:(0,c.y)(this.codedValues),name:this.name})}}]),n}(w);(0,l.e)([(0,l.y)({type:[f],json:{write:!0}})],Z.prototype,"codedValues",void 0),(0,l.e)([(0,p.r)({codedValue:"coded-value"})],Z.prototype,"type",void 0);var S,b=Z=g=(0,l.e)([(0,l.n)("esri.layers.support.CodedValueDomain")],Z),k=S=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;return(0,o.Z)(this,n),(r=t.call(this,e)).type="inherited",r}return(0,i.Z)(n,[{key:"clone",value:function(){return new S}}]),n}(w);(0,l.e)([(0,p.r)({inherited:"inherited"})],k.prototype,"type",void 0);var _,T=k=S=(0,l.e)([(0,l.n)("esri.layers.support.InheritedDomain")],k),x=_=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;return(0,o.Z)(this,n),(r=t.call(this,e)).maxValue=null,r.minValue=null,r.type="range",r}return(0,i.Z)(n,[{key:"clone",value:function(){return new _({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}}]),n}(w);(0,l.e)([(0,l.y)({type:Number,json:{type:[Number],read:{source:"range",reader:function(e,t){return t.range&&t.range[1]}},write:{enabled:!1,overridePolicy:function(){return{enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer:function(e,t,n){t[n]=[this.minValue||0,e]}}}})],x.prototype,"maxValue",void 0),(0,l.e)([(0,l.y)({type:Number,json:{type:[Number],read:{source:"range",reader:function(e,t){return t.range&&t.range[0]}},write:{target:"range",writer:function(e,t,n){t[n]=[e,this.maxValue||0]}}}})],x.prototype,"minValue",void 0),(0,l.e)([(0,p.r)({range:"range"})],x.prototype,"type",void 0);var F,I=x=_=(0,l.e)([(0,l.n)("esri.layers.support.RangeDomain")],x),D={key:"type",base:w,typeMap:{range:I,"coded-value":b,inherited:T}};function L(e){if(!e||!e.type)return null;switch(e.type){case"range":return I.fromJSON(e);case"codedValue":return b.fromJSON(e);case"inherited":return T.fromJSON(e)}return null}var P=new s.s({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"}),j=F=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;return(0,o.Z)(this,n),(r=t.call(this,e)).alias=null,r.defaultValue=void 0,r.description=null,r.domain=null,r.editable=!0,r.length=-1,r.name=null,r.nullable=!0,r.type=null,r.valueType=null,r.visible=!0,r}return(0,i.Z)(n,[{key:"readDescription",value:function(e,t){var n,r,o=t.description,i=null;try{i=o?JSON.parse(o):null}catch(a){}return null!==(n=null===(r=i)||void 0===r?void 0:r.value)&&void 0!==n?n:null}},{key:"readValueType",value:function(e,t){var n=t.description,r=null;try{r=n?JSON.parse(n):null}catch(o){}return r?P.fromJSON(r.fieldValueType):null}},{key:"clone",value:function(){return new F({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType,visible:this.visible})}}]),n}(d.l);(0,l.e)([(0,l.y)({type:String,json:{write:!0}})],j.prototype,"alias",void 0),(0,l.e)([(0,l.y)({type:[String,Number],json:{write:{allowNull:!0}}})],j.prototype,"defaultValue",void 0),(0,l.e)([(0,l.y)()],j.prototype,"description",void 0),(0,l.e)([(0,h.o)("description")],j.prototype,"readDescription",null),(0,l.e)([(0,l.y)({types:D,json:{read:{reader:L},write:!0}})],j.prototype,"domain",void 0),(0,l.e)([(0,l.y)({type:Boolean,json:{write:!0}})],j.prototype,"editable",void 0),(0,l.e)([(0,l.y)({type:l.T,json:{write:!0}})],j.prototype,"length",void 0),(0,l.e)([(0,l.y)({type:String,json:{write:!0}})],j.prototype,"name",void 0),(0,l.e)([(0,l.y)({type:Boolean,json:{write:!0}})],j.prototype,"nullable",void 0),(0,l.e)([(0,p.r)(y.i)],j.prototype,"type",void 0),(0,l.e)([(0,l.y)()],j.prototype,"valueType",void 0),(0,l.e)([(0,h.o)("valueType",["description"])],j.prototype,"readValueType",null),(0,l.e)([(0,l.y)({type:Boolean,json:{read:!1}})],j.prototype,"visible",void 0);var A=j=F=(0,l.e)([(0,l.n)("esri.layers.support.Field")],j)},630:function(e,t,n){n.d(t,{a:function(){return p},c:function(){return d},d:function(){return h}});var r=n(15671),o=n(43144),i=n(60136),a=n(29388),u=n(48848),l=n(93661),s=n(50690),d=function(e){(0,i.Z)(n,e);var t=(0,a.Z)(n);function n(){var e;return(0,r.Z)(this,n),(e=t.apply(this,arguments)).updating=!1,e._handleId=0,e._handles=new u.X,e._scheduleHandleId=0,e._pendingPromises=new Set,e}return(0,o.Z)(n,[{key:"destroy",value:function(){this.removeAll(),this._handles.destroy()}},{key:"add",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this._installWatch(e,t,n,s.l)}},{key:"addWhen",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this._installWatch(e,t,n,s.f)}},{key:"addOnCollectionChange",value:function(e,t){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=r.initial,i=void 0!==o&&o,a=r.final,u=void 0!==a&&a,l=++this._handleId;return this._handles.add([(0,s.a)(e,"after-changes",this._createSyncUpdatingCallback(),s.U),(0,s.a)(e,"change",t,{onListenerAdd:i?function(e){return t({added:e.toArray(),removed:[]})}:void 0,onListenerRemove:u?function(e){return t({added:[],removed:e.toArray()})}:void 0})],l),{remove:function(){return n._handles.remove(l)}}}},{key:"addPromise",value:function(e){var t=this;if((0,l.t)(e))return e;var n=++this._handleId;this._handles.add({remove:function(){t._pendingPromises.delete(e)&&(0!==t._pendingPromises.size||t._handles.has(c)||t._set("updating",!1))}},n),this._pendingPromises.add(e),this._set("updating",!0);var r=function(){return t._handles.remove(n)};return e.then(r,r),e}},{key:"removeAll",value:function(){this._pendingPromises.clear(),this._handles.removeAll(),this._set("updating",!1)}},{key:"_installWatch",value:function(e,t){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0,i=++this._handleId;r.sync||this._installSyncUpdatingWatch(e,i);var a=o(e,t,r);return this._handles.add(a,i),{remove:function(){return n._handles.remove(i)}}}},{key:"_installSyncUpdatingWatch",value:function(e,t){var n=this._createSyncUpdatingCallback(),r=(0,s.l)(e,n,{sync:!0,equals:function(){return!1}});return this._handles.add(r,t),r}},{key:"_createSyncUpdatingCallback",value:function(){var e=this;return function(){e._handles.remove(c),++e._scheduleHandleId;var t=e._scheduleHandleId;e._get("updating")||e._set("updating",!0),e._handles.add((0,u.k)((function(){t===e._scheduleHandleId&&(e._set("updating",e._pendingPromises.size>0),e._handles.remove(c))})),c)}}}]),n}(u.m);(0,u.e)([(0,u.y)({readOnly:!0})],d.prototype,"updating",void 0),d=(0,u.e)([(0,u.n)("esri.core.support.WatchUpdatingTracking")],d);var c=-42,p=function(e){var t=function(e){(0,i.Z)(n,e);var t=(0,a.Z)(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,o.Z)(n,[{key:"destroy",value:function(){var e,t;this.destroyed||(null!==(e=this._get("handles"))&&void 0!==e&&e.destroy(),null===(t=this._get("updatingHandles"))||void 0===t||t.destroy())}},{key:"handles",get:function(){return this._get("handles")||new u.X}},{key:"updatingHandles",get:function(){return this._get("updatingHandles")||new d}}]),n}(e);return(0,u.e)([(0,u.y)({readOnly:!0})],t.prototype,"handles",null),(0,u.e)([(0,u.y)({readOnly:!0})],t.prototype,"updatingHandles",null),t=(0,u.e)([(0,u.n)("esri.core.HandleOwner")],t),t},h=function(e){(0,i.Z)(n,e);var t=(0,a.Z)(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,o.Z)(n)}(p(u.m));h=(0,u.e)([(0,u.n)("esri.core.HandleOwner")],h)},74797:function(e,t,n){n.d(t,{p:function(){return p}});var r,o=n(15671),i=n(43144),a=n(60136),u=n(29388),l=n(48848),s=n(93314),d=n(40114),c=(n(93661),r=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;return(0,o.Z)(this,n),(r=t.call(this,e)).floorField=null,r.viewAllMode=!1,r.viewAllLevelIds=new s.j,r}return(0,i.Z)(n,[{key:"clone",value:function(){return new r({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}}]),n}(d.l));(0,l.e)([(0,l.y)({type:String,json:{write:!0}})],c.prototype,"floorField",void 0),(0,l.e)([(0,l.y)({json:{read:!1,write:!1}})],c.prototype,"viewAllMode",void 0),(0,l.e)([(0,l.y)({json:{read:!1,write:!1}})],c.prototype,"viewAllLevelIds",void 0);var p=c=r=(0,l.e)([(0,l.n)("esri.layers.support.LayerFloorInfo")],c)},43955:function(e,t,n){function r(e){return 32+e.length}function o(e){return 16}function i(e){if(!e)return 0;var t=d;for(var n in e)if(e.hasOwnProperty(n)){var o=e[n];switch(typeof o){case"string":t+=r(o);break;case"number":t+=16;break;case"boolean":t+=4}}return t}function a(e){if(!e)return 0;if(Array.isArray(e))return function(e){var t=e.length;if(0===t||"number"==typeof e[0])return 32+8*t;for(var n=c,r=0;r<t;r++)n+=u(e[r]);return n}(e);var t=d;for(var n in e)e.hasOwnProperty(n)&&(t+=u(e[n]));return t}function u(e){switch(typeof e){case"object":return a(e);case"string":return r(e);case"number":return 16;case"boolean":return 4;default:return 8}}function l(e,t){return c+e.length*t}n.d(t,{c:function(){return l},e:function(){return a},n:function(){return r},r:function(){return o},s:function(){return s},t:function(){return i}});var s,d=32,c=32;!function(e){e[e.KILOBYTES=1024]="KILOBYTES",e[e.MEGABYTES=1048576]="MEGABYTES",e[e.GIGABYTES=1073741824]="GIGABYTES"}(s||(s={}))},64854:function(e,t,n){n.d(t,{S:function(){return u},e:function(){return r},i:function(){return o},l:function(){return i},o:function(){return a},r:function(){return s},s:function(){return d},t:function(){return l},y:function(){return c}});var r=[252,146,31,255],o=[153,153,153,255],i={type:"esriSMS",style:"esriSMSCircle",size:6,color:r,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},a={type:"esriSLS",style:"esriSLSSolid",width:.75,color:r},u={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},l={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},s={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},d={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},c={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}},20302:function(e,t,n){n.d(t,{r:function(){return i}});var r=n(40558),o=n(48848);function i(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e instanceof r.s?e:new r.s(e,n),a={type:null===(t=null===n||void 0===n?void 0:n.ignoreUnknown)||void 0===t||t?i.apiValues:String,json:{type:i.jsonValues,read:!(null!==n&&void 0!==n&&n.readOnly)&&{reader:i.read},write:{writer:i.write}}};return void 0!==(null===n||void 0===n?void 0:n.readOnly)&&(a.readOnly=!!n.readOnly),void 0!==(null===n||void 0===n?void 0:n.default)&&(a.json.default=n.default),void 0!==(null===n||void 0===n?void 0:n.name)&&(a.json.name=n.name),(0,o.y)(a)}},15436:function(e,t,n){n.d(t,{i:function(){return r}});var r=new(n(40558).s)({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml"})},56162:function(e,t,n){n.d(t,{c:function(){return h},d:function(){return f},f:function(){return d},l:function(){return l},s:function(){return s},u:function(){return u},v:function(){return p},y:function(){return c}});var r=n(93661),o=n(46817),i=n(82474),a=n(74384);function u(e){return void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax}function l(e){return void 0!==e.points}function s(e){return void 0!==e.x&&void 0!==e.y}function d(e){return void 0!==e.paths}function c(e){return void 0!==e.rings}function p(e){return(0,r.t)(e)?null:e instanceof i.p?e:s(e)?i.w.fromJSON(e):d(e)?a.m.fromJSON(e):c(e)?a.v.fromJSON(e):l(e)?a.u.fromJSON(e):u(e)?o.w.fromJSON(e):null}function h(e){return e?s(e)?"esriGeometryPoint":d(e)?"esriGeometryPolyline":c(e)?"esriGeometryPolygon":u(e)?"esriGeometryEnvelope":l(e)?"esriGeometryMultipoint":null:null}var y={esriGeometryPoint:i.w,esriGeometryPolyline:a.m,esriGeometryPolygon:a.v,esriGeometryEnvelope:o.w,esriGeometryMultipoint:a.u};function f(e){return e&&y[e]||null}},53586:function(e,t,n){n.d(t,{L:function(){return w},S:function(){return g},m:function(){return _},u:function(){return k}});var r=n(1413),o=n(40558),i=n(65094),a=n(93661),u={year:"numeric",month:"numeric",day:"numeric"},l={year:"numeric",month:"long",day:"numeric"},s={year:"numeric",month:"short",day:"numeric"},d={year:"numeric",month:"long",weekday:"long",day:"numeric"},c={hour:"numeric",minute:"numeric"},p=(0,r.Z)((0,r.Z)({},c),{},{second:"numeric"}),h={"short-date":u,"short-date-short-time":(0,r.Z)((0,r.Z)({},u),c),"short-date-short-time-24":(0,r.Z)((0,r.Z)((0,r.Z)({},u),c),{},{hour12:!1}),"short-date-long-time":(0,r.Z)((0,r.Z)({},u),p),"short-date-long-time-24":(0,r.Z)((0,r.Z)((0,r.Z)({},u),p),{},{hour12:!1}),"short-date-le":u,"short-date-le-short-time":(0,r.Z)((0,r.Z)({},u),c),"short-date-le-short-time-24":(0,r.Z)((0,r.Z)((0,r.Z)({},u),c),{},{hour12:!1}),"short-date-le-long-time":(0,r.Z)((0,r.Z)({},u),p),"short-date-le-long-time-24":(0,r.Z)((0,r.Z)((0,r.Z)({},u),p),{},{hour12:!1}),"long-month-day-year":l,"long-month-day-year-short-time":(0,r.Z)((0,r.Z)({},l),c),"long-month-day-year-short-time-24":(0,r.Z)((0,r.Z)((0,r.Z)({},l),c),{},{hour12:!1}),"long-month-day-year-long-time":(0,r.Z)((0,r.Z)({},l),p),"long-month-day-year-long-time-24":(0,r.Z)((0,r.Z)((0,r.Z)({},l),p),{},{hour12:!1}),"day-short-month-year":s,"day-short-month-year-short-time":(0,r.Z)((0,r.Z)({},s),c),"day-short-month-year-short-time-24":(0,r.Z)((0,r.Z)((0,r.Z)({},s),c),{},{hour12:!1}),"day-short-month-year-long-time":(0,r.Z)((0,r.Z)({},s),p),"day-short-month-year-long-time-24":(0,r.Z)((0,r.Z)((0,r.Z)({},s),p),{},{hour12:!1}),"long-date":d,"long-date-short-time":(0,r.Z)((0,r.Z)({},d),c),"long-date-short-time-24":(0,r.Z)((0,r.Z)((0,r.Z)({},d),c),{},{hour12:!1}),"long-date-long-time":(0,r.Z)((0,r.Z)({},d),p),"long-date-long-time-24":(0,r.Z)((0,r.Z)((0,r.Z)({},d),p),{},{hour12:!1}),"long-month-year":{month:"long",year:"numeric"},"short-month-year":{month:"short",year:"numeric"},year:{year:"numeric"},"short-time":c,"long-time":p},y=(0,o.o)()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"});y.toJSON.bind(y),y.fromJSON.bind(y);var f={ar:"ar-u-nu-latn-ca-gregory"},m=new WeakMap,v=h["short-date-short-time"];function g(e){return e?h[e]:null}function w(e,t){return function(e){var t=e||v,n=m.get(t);if(!n){var r=(0,i.l)(),o=f[(0,i.l)()]||r;n=new Intl.DateTimeFormat(o,t),m.set(t,n)}return n}(t).format(e)}(0,i.g)((function(){m=new WeakMap,v=h["short-date-short-time"]}));var Z={ar:"ar-u-nu-latn"},S=new WeakMap,b={};function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={};return null!=e.digitSeparator&&(t.useGrouping=e.digitSeparator),null!=e.places&&(t.minimumFractionDigits=t.maximumFractionDigits=e.places),t}function _(e,t){return-0===e&&(e=0),function(e){var t=e||b;if(!S.has(t)){var n=(0,i.l)(),r=Z[(0,i.l)()]||n;S.set(t,new Intl.NumberFormat(r,e))}return(0,a.x)(S.get(t))}(t).format(e)}(0,i.g)((function(){S=new WeakMap,b={}}))},31303:function(e,t,n){n.d(t,{d:function(){return l},s:function(){return d}});var r=n(74165),o=n(93433),i=n(15861),a=n(93661),u=n(59984);function l(e){return s.apply(this,arguments)}function s(){return s=(0,i.Z)((0,r.Z)().mark((function e(t){var n,i,l,s,d,c,p,h,y,f=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=f.length>1&&void 0!==f[1]?f[1]:t.popupTemplate,!(0,a.t)(n)){e.next=3;break}return e.abrupt("return",[]);case 3:return e.next=5,n.getRequiredFields(t.fieldsIndex);case 5:if(i=e.sent,l=n.lastEditInfoEnabled,s=t.objectIdField,d=t.typeIdField,c=t.globalIdField,p=t.relationships,!i.includes("*")){e.next=13;break}return e.abrupt("return",["*"]);case 13:if(!l){e.next=19;break}return e.next=16,(0,u.C)(t);case 16:e.t0=e.sent,e.next=20;break;case 19:e.t0=[];case 20:return h=e.t0,y=(0,u.T)(t.fieldsIndex,[].concat((0,o.Z)(i),(0,o.Z)(h))),e.abrupt("return",(d&&y.push(d),y&&s&&t.fieldsIndex.has(s)&&!y.includes(s)&&y.push(s),y&&c&&t.fieldsIndex.has(c)&&!y.includes(c)&&y.push(c),p&&p.forEach((function(e){var n=e.keyField;y&&n&&t.fieldsIndex.has(n)&&!y.includes(n)&&y.push(n)})),y));case 23:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function d(e,t){return e.popupTemplate?e.popupTemplate:(0,a.r)(t)&&t.defaultPopupTemplateEnabled&&(0,a.r)(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}},51816:function(e,t,n){n.d(t,{r:function(){return a}});var r=n(37762),o=n(93661),i=n(65415);function a(e,t,n){if(n&&n.features&&n.hasZ){var a=(0,i.o)(n.geometryType,t,e.outSpatialReference);if(!(0,o.t)(a)){var u,l=(0,r.Z)(n.features);try{for(l.s();!(u=l.n()).done;){a(u.value.geometry)}}catch(s){l.e(s)}finally{l.f()}}}}},84186:function(e,t,n){var r,o;function i(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function a(e){return null!=e&&!isNaN(e)&&isFinite(e)}function u(e){return e.valueExpression?r.Expression:e.field&&"string"==typeof e.field?r.Field:r.Unknown}function l(e,t){var n=t||u(e),i=e.valueUnit||"unknown";return n===r.Unknown?o.Constant:e.stops?o.Stops:null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?o.ClampedLinear:"unknown"===i?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?o.Proportional:o.Additive:o.Identity:o.RealWorldSize}n.d(t,{a:function(){return l},e:function(){return i},i:function(){return o},l:function(){return a},n:function(){return r},t:function(){return u}}),function(e){e.Unknown="unknown",e.Expression="expression",e.Field="field"}(r||(r={})),function(e){e.Unknown="unknown",e.Stops="stops",e.ClampedLinear="clamped-linear",e.Proportional="proportional",e.Additive="additive",e.Constant="constant",e.Identity="identity",e.RealWorldSize="real-world-size"}(o||(o={}))},87753:function(e,t,n){n.d(t,{r:function(){return a},t:function(){return l}});var r=n(74165),o=n(15861),i=n(93661);function a(e,t){return u.apply(this,arguments)}function u(){return u=(0,o.Z)((0,r.Z)().mark((function e(t,o){var i,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(2470).then(n.bind(n,62470));case 2:return i=e.sent,a=i.WhereClause,e.abrupt("return",a.create(t,o));case 5:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function l(e,t){return(0,i.r)(e)?(0,i.r)(t)?"(".concat(e,") AND (").concat(t,")"):e:t}},65415:function(e,t,n){n.d(t,{o:function(){return u}});var r=n(37762),o=n(93661),i=n(47855),a=n(82474);function u(e,t,n){if((0,o.t)(t)||(0,o.t)(n)||n.vcsWkid||(0,a.E)(t,n))return null;var u=(0,i.L)(t)/(0,i.L)(n);if(1===u)return null;switch(e){case"point":case"esriGeometryPoint":return function(e){return function(e,t){e&&null!=e.z&&(e.z*=t)}(e,u)};case"polyline":case"esriGeometryPolyline":return function(e){return function(e,t){if(e){var n,o=(0,r.Z)(e.paths);try{for(o.s();!(n=o.n()).done;){var i,a=n.value,u=(0,r.Z)(a);try{for(u.s();!(i=u.n()).done;){var l=i.value;l.length>2&&(l[2]*=t)}}catch(s){u.e(s)}finally{u.f()}}}catch(s){o.e(s)}finally{o.f()}}}(e,u)};case"polygon":case"esriGeometryPolygon":return function(e){return function(e,t){if(e){var n,o=(0,r.Z)(e.rings);try{for(o.s();!(n=o.n()).done;){var i,a=n.value,u=(0,r.Z)(a);try{for(u.s();!(i=u.n()).done;){var l=i.value;l.length>2&&(l[2]*=t)}}catch(s){u.e(s)}finally{u.f()}}}catch(s){o.e(s)}finally{o.f()}}}(e,u)};case"multipoint":case"esriGeometryMultipoint":return function(e){return function(e,t){if(e){var n,o=(0,r.Z)(e.points);try{for(o.s();!(n=o.n()).done;){var i=n.value;i.length>2&&(i[2]*=t)}}catch(a){o.e(a)}finally{o.f()}}}(e,u)};case"extent":case"esriGeometryExtent":return function(e){return function(e,t){e&&null!=e.zmin&&null!=e.zmax&&(e.zmin*=t,e.zmax*=t)}(e,u)};default:return null}}}}]);
//# sourceMappingURL=862.8c2411c5.chunk.js.map