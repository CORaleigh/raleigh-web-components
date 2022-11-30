"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[5096],{64139:function(e,t,r){r.d(t,{c:function(){return h}});var n=r(1413),i=r(15671),a=r(43144),o=r(60136),s=r(29388),l=r(48848),u=r(630),d=r(93661),c=r(87753),f=r(12953),v=r(17562),y=r(78666),p={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"},h=function(e){(0,o.Z)(r,e);var t=(0,s.Z)(r);function r(e){var n;return(0,i.Z)(this,r),(n=t.call(this,e)).floors=null,n.scale=0,n}return(0,a.Z)(r,[{key:"destroy",value:function(){this.layer=null}},{key:"dynamicLayers",get:function(){var e=this;if(!this.hasDynamicLayers)return null;var t=this.visibleSublayers.map((function(t){var r=(0,v.n)(e.floors,t);return t.toExportImageJSON(r)}));return t.length?JSON.stringify(t):null}},{key:"hasDynamicLayers",get:function(){return this.layer&&(0,y.i)(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}},{key:"layer",set:function(e){var t=this;this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(function(){return t.notifyChange("visibleSublayers")})),e.on("sublayer-update",(function(e){return t.notifyChange(p[e.propertyName])}))],"layer"))}},{key:"layers",get:function(){var e=this.visibleSublayers;return e?e.length?"show:"+e.map((function(e){return e.id})).join(","):"show:-1":null}},{key:"layerDefs",get:function(){var e,t=this,r=!(null===(e=this.floors)||void 0===e||!e.length),n=this.visibleSublayers.filter((function(e){return null!=e.definitionExpression||r&&null!=e.floorInfo}));return n.length?JSON.stringify(n.reduce((function(e,r){var n=(0,v.n)(t.floors,r),i=(0,c.t)(n,r.definitionExpression);return(0,d.r)(i)&&(e[r.id]=i),e}),{})):null}},{key:"version",get:function(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");var e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}},{key:"visibleSublayers",get:function(){var e=this,t=[];if(!this.layer)return t;var r=this.layer.sublayers;r&&r.forEach((function r(n){var i=e.scale,a=0===i,o=0===n.minScale||i<=n.minScale,s=0===n.maxScale||i>=n.maxScale;n.visible&&(a||o&&s)&&(n.sublayers?n.sublayers.forEach(r):t.unshift(n))}));var n=this._get("visibleSublayers");return!n||n.length!==t.length||n.some((function(e,r){return t[r]!==e}))?t:n}},{key:"toJSON",value:function(){var e=this.layer,t={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?t.dynamicLayers=this.dynamicLayers:t=(0,n.Z)((0,n.Z)({},t),{},{layers:this.layers,layerDefs:this.layerDefs}),t}}]),r}((0,u.a)(l.m));(0,l.e)([(0,l.y)({readOnly:!0})],h.prototype,"dynamicLayers",null),(0,l.e)([(0,l.y)()],h.prototype,"floors",void 0),(0,l.e)([(0,l.y)({readOnly:!0})],h.prototype,"hasDynamicLayers",null),(0,l.e)([(0,l.y)()],h.prototype,"layer",null),(0,l.e)([(0,l.y)({readOnly:!0})],h.prototype,"layers",null),(0,l.e)([(0,l.y)({readOnly:!0})],h.prototype,"layerDefs",null),(0,l.e)([(0,l.y)({type:Number})],h.prototype,"scale",void 0),(0,l.e)([(0,l.y)(f.g)],h.prototype,"timeExtent",void 0),(0,l.e)([(0,l.y)({readOnly:!0})],h.prototype,"version",null),(0,l.e)([(0,l.y)({readOnly:!0})],h.prototype,"visibleSublayers",null),h=(0,l.e)([(0,l.n)("esri.layers.mixins.ExportImageParameters")],h)},630:function(e,t,r){r.d(t,{a:function(){return f},c:function(){return d},d:function(){return v}});var n=r(15671),i=r(43144),a=r(60136),o=r(29388),s=r(48848),l=r(93661),u=r(50690),d=function(e){(0,a.Z)(r,e);var t=(0,o.Z)(r);function r(){var e;return(0,n.Z)(this,r),(e=t.apply(this,arguments)).updating=!1,e._handleId=0,e._handles=new s.X,e._scheduleHandleId=0,e._pendingPromises=new Set,e}return(0,i.Z)(r,[{key:"destroy",value:function(){this.removeAll(),this._handles.destroy()}},{key:"add",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this._installWatch(e,t,r,u.l)}},{key:"addWhen",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this._installWatch(e,t,r,u.f)}},{key:"addOnCollectionChange",value:function(e,t){var r=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.initial,a=void 0!==i&&i,o=n.final,s=void 0!==o&&o,l=++this._handleId;return this._handles.add([(0,u.a)(e,"after-changes",this._createSyncUpdatingCallback(),u.U),(0,u.a)(e,"change",t,{onListenerAdd:a?function(e){return t({added:e.toArray(),removed:[]})}:void 0,onListenerRemove:s?function(e){return t({added:[],removed:e.toArray()})}:void 0})],l),{remove:function(){return r._handles.remove(l)}}}},{key:"addPromise",value:function(e){var t=this;if((0,l.t)(e))return e;var r=++this._handleId;this._handles.add({remove:function(){t._pendingPromises.delete(e)&&(0!==t._pendingPromises.size||t._handles.has(c)||t._set("updating",!1))}},r),this._pendingPromises.add(e),this._set("updating",!0);var n=function(){return t._handles.remove(r)};return e.then(n,n),e}},{key:"removeAll",value:function(){this._pendingPromises.clear(),this._handles.removeAll(),this._set("updating",!1)}},{key:"_installWatch",value:function(e,t){var r=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0,a=++this._handleId;n.sync||this._installSyncUpdatingWatch(e,a);var o=i(e,t,n);return this._handles.add(o,a),{remove:function(){return r._handles.remove(a)}}}},{key:"_installSyncUpdatingWatch",value:function(e,t){var r=this._createSyncUpdatingCallback(),n=(0,u.l)(e,r,{sync:!0,equals:function(){return!1}});return this._handles.add(n,t),n}},{key:"_createSyncUpdatingCallback",value:function(){var e=this;return function(){e._handles.remove(c),++e._scheduleHandleId;var t=e._scheduleHandleId;e._get("updating")||e._set("updating",!0),e._handles.add((0,s.k)((function(){t===e._scheduleHandleId&&(e._set("updating",e._pendingPromises.size>0),e._handles.remove(c))})),c)}}}]),r}(s.m);(0,s.e)([(0,s.y)({readOnly:!0})],d.prototype,"updating",void 0),d=(0,s.e)([(0,s.n)("esri.core.support.WatchUpdatingTracking")],d);var c=-42,f=function(e){var t=function(e){(0,a.Z)(r,e);var t=(0,o.Z)(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,i.Z)(r,[{key:"destroy",value:function(){var e,t;this.destroyed||(null!==(e=this._get("handles"))&&void 0!==e&&e.destroy(),null===(t=this._get("updatingHandles"))||void 0===t||t.destroy())}},{key:"handles",get:function(){return this._get("handles")||new s.X}},{key:"updatingHandles",get:function(){return this._get("updatingHandles")||new d}}]),r}(e);return(0,s.e)([(0,s.y)({readOnly:!0})],t.prototype,"handles",null),(0,s.e)([(0,s.y)({readOnly:!0})],t.prototype,"updatingHandles",null),t=(0,s.e)([(0,s.n)("esri.core.HandleOwner")],t),t},v=function(e){(0,a.Z)(r,e);var t=(0,o.Z)(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,i.Z)(r)}(f(s.m));v=(0,s.e)([(0,s.n)("esri.core.HandleOwner")],v)},65096:function(e,t,r){r.r(t);var n=r(74165),i=r(15861),a=r(1413),o=r(15671),s=r(43144),l=r(60136),u=r(29388),d=r(48848),c=r(40558),f=r(89181),v=r(630),y=r(16641),p=r(93661),h=r(99795),m=r(82474),g=r(46817),w=r(6189),b=r(45999),x=r(62710),S=r(45846),k=r(52721),Z=r(61903),I=r(23444),T=r(24623),_=r(6379),O=r(23341),E=r(41820),U=r(20086),D=r(12953),L=r(64139),F=r(78666),N=r(71645),j=(r(40114),r(50690),r(59389),r(93314),r(37856),r(15751),r(93116),r(65094),r(47855),r(74384),r(92072),r(70288),r(90316),r(25577),r(62610),r(59984),r(20302),r(53586),r(60369),r(2821),r(37944),r(86086),r(21385),r(89794),r(48200),r(71802),r(85253),r(93209),r(25456),r(46337),r(81556),r(66577),r(33794),r(71147),r(84186),r(64998),r(56162),r(15529),r(70449),r(22603),r(2959),r(56546),r(39926),r(6762),r(8141),r(26151),r(91681),r(87753),r(1685),r(77880),r(69641),r(15436),r(61416),r(77755),r(63393),r(90442),r(64854),r(74797),r(35237),r(69768),r(67066),r(33795),r(79557),r(21015),r(75255),r(92982),function(e){(0,l.Z)(r,e);var t=(0,u.Z)(r);function r(){var e;(0,o.Z)(this,r);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).datesInUnknownTimezone=!1,e.dpi=96,e.gdbVersion=null,e.imageFormat="png24",e.imageMaxHeight=2048,e.imageMaxWidth=2048,e.imageTransparency=!0,e.isReference=null,e.labelsVisible=!1,e.operationalLayerType="ArcGISMapServiceLayer",e.sourceJSON=null,e.sublayers=null,e.type="map-image",e.url=null,e}return(0,s.Z)(r,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?(0,a.Z)({url:e},t):e}},{key:"load",value:function(e){var t=this,r=(0,p.r)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(d.w).then((function(){return t._fetchService(r)}))),Promise.resolve(this)}},{key:"readImageFormat",value:function(e,t){var r=t.supportedImageFormatTypes;return r&&r.includes("PNG32")?"png32":"png24"}},{key:"writeSublayers",value:function(e,t,r,n){if(this.loaded&&e){var i=e.slice().reverse().flatten((function(e){var t=e.sublayers;return t&&t.toArray().reverse()})).toArray(),o=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){var s=(0,d.z)(n.origin);if(s===d.r.PORTAL_ITEM){var l=this.createSublayersForOrigin("service").sublayers;o=(0,F.n)(i,l,d.r.SERVICE)}else if(s>d.r.PORTAL_ITEM){var u=this.createSublayersForOrigin("portal-item");o=(0,F.n)(i,u.sublayers,(0,d.z)(u.origin))}}var c=[],f=(0,a.Z)({writeSublayerStructure:o},n),v=o;i.forEach((function(e){var t=e.write({},f);c.push(t),v=v||"user"===e.originOf("visible")})),c.some((function(e){return Object.keys(e).length>1}))&&(t.layers=c),v&&(t.visibleLayers=i.filter((function(e){return e.visible})).map((function(e){return e.id})))}}},{key:"createExportImageParameters",value:function(e,t,r,n){var i=n&&n.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());var o=new L.c({layer:this,floors:null===n||void 0===n?void 0:n.floors,scale:(0,w.i)({extent:e,width:t})*i}),s=o.toJSON();o.destroy();var l=!n||!n.rotation||this.version<10.3?{}:{rotation:-n.rotation},u=e&&e.spatialReference,d=u.wkid||JSON.stringify(u.toJSON());s.dpi*=i;var c={};if(null!==n&&void 0!==n&&n.timeExtent){var f=n.timeExtent.toJSON(),v=f.start,y=f.end;c.time=v&&y&&v===y?""+v:"".concat(null!==v&&void 0!==v?v:"null",",").concat(null!==y&&void 0!==y?y:"null")}else this.timeInfo&&!this.timeInfo.hasLiveData&&(c.time="null,null");return(0,a.Z)((0,a.Z)((0,a.Z)({bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:d,imageSR:d,size:t+","+r},s),l),c)}},{key:"fetchImage",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t,r,i,a){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._fetchImage("image",t,r,i,a));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r,n,i){return e.apply(this,arguments)}}()},{key:"fetchImageBitmap",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t,r,i,a){var o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._fetchImage("blob",t,r,i,a);case 2:return o=e.sent,e.abrupt("return",createImageBitmap(o));case 4:case"end":return e.stop()}}),e,this)})));return function(t,r,n,i){return e.apply(this,arguments)}}()},{key:"fetchRecomputedExtents",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(){var t,r,i,o,s,l,u,d,v=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=v.length>0&&void 0!==v[0]?v[0]:{},r=(0,a.Z)((0,a.Z)({},t),{},{query:(0,a.Z)((0,a.Z)({returnUpdates:!0,f:"json"},this.customParameters),{},{token:this.apiKey})}),e.next=4,(0,c.U)(this.url,r);case 4:return i=e.sent,o=i.data,s=o.extent,l=o.fullExtent,u=o.timeExtent,d=s||l,e.abrupt("return",{fullExtent:d&&g.w.fromJSON(d),timeExtent:u&&f.T.fromJSON({start:u[0],end:u[1]})});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadAll",value:function(){var e=this;return(0,y.n)(this,(function(t){t(e.allSublayers)}))}},{key:"serviceSupportsSpatialReference",value:function(e){return(0,N.e)(this,e)}},{key:"_fetchImage",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t,r,i,o,s){var l,u,f,v,y;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u={responseType:t,signal:null!==(l=null===s||void 0===s?void 0:s.signal)&&void 0!==l?l:null,query:(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},this.parsedUrl.query),this.createExportImageParameters(r,i,o,s)),{},{f:"image"},this.refreshParameters),this.customParameters),{},{token:this.apiKey})},f=this.parsedUrl.path+"/export",null==u.query.dynamicLayers||this.capabilities.exportMap.supportsDynamicLayers){e.next=3;break}throw new d.s("mapimagelayer:dynamiclayer-not-supported","service ".concat(this.url," doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source."),{query:u.query});case 3:return e.prev=3,e.next=6,(0,c.U)(f,u);case 6:return v=e.sent,y=v.data,e.abrupt("return",y);case 11:if(e.prev=11,e.t0=e.catch(3),!(0,d.j)(e.t0)){e.next=15;break}throw e.t0;case 15:throw new d.s("mapimagelayer:image-fetch-error","Unable to load image: ".concat(f),{error:e.t0});case 16:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(t,r,n,i,a){return e.apply(this,arguments)}}()},{key:"_fetchService",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){var r,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.sourceJSON){e.next=2;break}return e.abrupt("return",void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}));case 2:return e.next=4,(0,c.U)(this.parsedUrl.path,{query:(0,a.Z)((0,a.Z)((0,a.Z)({f:"json"},this.parsedUrl.query),this.customParameters),{},{token:this.apiKey}),signal:t});case 4:r=e.sent,i=r.data,r.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=i,this.read(i,{origin:"service",url:this.parsedUrl});case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),r}((0,Z.n)((0,U.a)((0,E.t)((0,S.E)((0,S.y)((0,k.p)((0,T.c)((0,_.v)((0,h.O)((0,O.p)((0,x.i)((0,I.o)((0,v.a)(b.b)))))))))))))));(0,d.e)([(0,d.y)({type:Boolean})],j.prototype,"datesInUnknownTimezone",void 0),(0,d.e)([(0,d.y)()],j.prototype,"dpi",void 0),(0,d.e)([(0,d.y)()],j.prototype,"gdbVersion",void 0),(0,d.e)([(0,d.y)()],j.prototype,"imageFormat",void 0),(0,d.e)([(0,m.o)("imageFormat",["supportedImageFormatTypes"])],j.prototype,"readImageFormat",null),(0,d.e)([(0,d.y)({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],j.prototype,"imageMaxHeight",void 0),(0,d.e)([(0,d.y)({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],j.prototype,"imageMaxWidth",void 0),(0,d.e)([(0,d.y)()],j.prototype,"imageTransparency",void 0),(0,d.e)([(0,d.y)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],j.prototype,"isReference",void 0),(0,d.e)([(0,d.y)({json:{read:!1,write:!1}})],j.prototype,"labelsVisible",void 0),(0,d.e)([(0,d.y)({type:["ArcGISMapServiceLayer"]})],j.prototype,"operationalLayerType",void 0),(0,d.e)([(0,d.y)({json:{read:!1,write:!1}})],j.prototype,"popupEnabled",void 0),(0,d.e)([(0,d.y)()],j.prototype,"sourceJSON",void 0),(0,d.e)([(0,d.y)({json:{write:{ignoreOrigin:!0}}})],j.prototype,"sublayers",void 0),(0,d.e)([(0,m.r)("sublayers",{layers:{type:[S.z]},visibleLayers:{type:[d.T]}})],j.prototype,"writeSublayers",null),(0,d.e)([(0,d.y)({type:["show","hide","hide-children"]})],j.prototype,"listMode",void 0),(0,d.e)([(0,d.y)({json:{read:!1},readOnly:!0,value:"map-image"})],j.prototype,"type",void 0),(0,d.e)([(0,d.y)(D.f)],j.prototype,"url",void 0);var P=j=(0,d.e)([(0,d.n)("esri.layers.MapImageLayer")],j);t.default=P},20086:function(e,t,r){r.d(t,{a:function(){return f}});var n=r(15671),i=r(43144),a=r(60136),o=r(29388),s=r(48848),l=r(89181),u=r(92982),d=(r(93661),r(82474)),c=r(59984),f=function(e){var t=function(e){(0,a.Z)(r,e);var t=(0,o.Z)(r);function r(){var e;return(0,n.Z)(this,r),(e=t.apply(this,arguments)).timeExtent=null,e.timeOffset=null,e.useViewTime=!0,e}return(0,i.Z)(r,[{key:"readOffset",value:function(e,t){var r=t.timeInfo.exportOptions;if(!r)return null;var n=r.timeOffset,i=u.e.fromJSON(r.timeOffsetUnits);return n&&i?new u.l({value:n,unit:i}):null}},{key:"timeInfo",set:function(e){(0,c.x)(e,this.fieldsIndex),this._set("timeInfo",e)}}]),r}(e);return(0,s.e)([(0,s.y)({type:l.T,json:{write:!1}})],t.prototype,"timeExtent",void 0),(0,s.e)([(0,s.y)({type:u.l})],t.prototype,"timeOffset",void 0),(0,s.e)([(0,d.o)("service","timeOffset",["timeInfo.exportOptions"])],t.prototype,"readOffset",null),(0,s.e)([(0,s.y)({value:null,type:u.v,json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],t.prototype,"timeInfo",null),(0,s.e)([(0,s.y)({type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation"},origins:{"web-scene":{read:!1,write:!1}}}})],t.prototype,"useViewTime",void 0),t=(0,s.e)([(0,s.n)("esri.layers.mixins.TemporalLayer")],t)}},92982:function(e,t,r){r.d(t,{e:function(){return y},l:function(){return m},v:function(){return S}});var n,i=r(15671),a=r(43144),o=r(60136),s=r(29388),l=r(48848),u=r(89181),d=r(40114),c=r(93661),f=r(40558),v=r(82474),y=(0,f.o)()({esriTimeUnitsMilliseconds:"milliseconds",esriTimeUnitsSeconds:"seconds",esriTimeUnitsMinutes:"minutes",esriTimeUnitsHours:"hours",esriTimeUnitsDays:"days",esriTimeUnitsWeeks:"weeks",esriTimeUnitsMonths:"months",esriTimeUnitsYears:"years",esriTimeUnitsDecades:"decades",esriTimeUnitsCenturies:"centuries",esriTimeUnitsUnknown:void 0}),p=n=function(e){(0,o.Z)(r,e);var t=(0,s.Z)(r);function r(e){var n;return(0,i.Z)(this,r),(n=t.call(this,e)).value=0,n.unit="milliseconds",n}return(0,a.Z)(r,[{key:"toMilliseconds",value:function(){return(0,u.g)(this.value,this.unit,"milliseconds")}},{key:"clone",value:function(){return new n({value:this.value,unit:this.unit})}}]),r}(d.l);(0,l.e)([(0,l.y)({type:Number,json:{write:!0},nonNullable:!0})],p.prototype,"value",void 0),(0,l.e)([(0,l.y)({type:y.apiValues,json:{type:y.jsonValues,read:y.read,write:y.write},nonNullable:!0})],p.prototype,"unit",void 0);var h,m=p=n=(0,l.e)([(0,l.n)("esri.TimeInterval")],p),g=h=function(e){(0,o.Z)(r,e);var t=(0,s.Z)(r);function r(e){var n;return(0,i.Z)(this,r),(n=t.call(this,e)).respectsDaylightSaving=!1,n.timezone=null,n}return(0,a.Z)(r,[{key:"readRespectsDaylightSaving",value:function(e,t){return void 0!==t.respectsDaylightSaving?t.respectsDaylightSaving:void 0!==t.respectDaylightSaving&&t.respectDaylightSaving}},{key:"clone",value:function(){var e=this.respectsDaylightSaving,t=this.timezone;return new h({respectsDaylightSaving:e,timezone:t})}}]),r}(d.l);(0,l.e)([(0,l.y)({type:Boolean,json:{write:!0}})],g.prototype,"respectsDaylightSaving",void 0),(0,l.e)([(0,v.o)("respectsDaylightSaving",["respectsDaylightSaving","respectDaylightSaving"])],g.prototype,"readRespectsDaylightSaving",null),(0,l.e)([(0,l.y)({type:String,json:{read:{source:"timeZone"},write:{target:"timeZone"}}})],g.prototype,"timezone",void 0);var w,b=g=h=(0,l.e)([(0,l.n)("esri.layers.support.TimeReference")],g),x=w=function(e){(0,o.Z)(r,e);var t=(0,s.Z)(r);function r(e){var n;return(0,i.Z)(this,r),(n=t.call(this,e)).cumulative=!1,n.endField=null,n.fullTimeExtent=null,n.hasLiveData=!1,n.interval=null,n.startField=null,n.timeReference=null,n.trackIdField=null,n.useTime=!0,n}return(0,a.Z)(r,[{key:"readFullTimeExtent",value:function(e,t){if(!t.timeExtent||!Array.isArray(t.timeExtent)||2!==t.timeExtent.length)return null;var r=new Date(t.timeExtent[0]),n=new Date(t.timeExtent[1]);return new u.T({start:r,end:n})}},{key:"writeFullTimeExtent",value:function(e,t){e&&(0,c.r)(e.start)&&(0,c.r)(e.end)?t.timeExtent=[e.start.getTime(),e.end.getTime()]:t.timeExtent=null}},{key:"readInterval",value:function(e,t){return t.timeInterval&&t.timeIntervalUnits?new m({value:t.timeInterval,unit:y.fromJSON(t.timeIntervalUnits)}):t.defaultTimeInterval&&t.defaultTimeIntervalUnits?new m({value:t.defaultTimeInterval,unit:y.fromJSON(t.defaultTimeIntervalUnits)}):null}},{key:"writeInterval",value:function(e,t){if(e){var r=e.toJSON();t.timeInterval=r.value,t.timeIntervalUnits=r.unit}else t.timeInterval=null,t.timeIntervalUnits=null}},{key:"clone",value:function(){var e=this.cumulative,t=this.endField,r=this.hasLiveData,n=this.interval,i=this.startField,a=this.timeReference,o=this.fullTimeExtent,s=this.trackIdField,l=this.useTime;return new w({cumulative:e,endField:t,hasLiveData:r,interval:n,startField:i,timeReference:(0,c.y)(a),fullTimeExtent:(0,c.y)(o),trackIdField:s,useTime:l})}}]),r}(d.l);(0,l.e)([(0,l.y)({type:Boolean,json:{read:{source:"exportOptions.timeDataCumulative"},write:{target:"exportOptions.timeDataCumulative"}}})],x.prototype,"cumulative",void 0),(0,l.e)([(0,l.y)({type:String,json:{read:{source:"endTimeField"},write:{target:"endTimeField",allowNull:!0}}})],x.prototype,"endField",void 0),(0,l.e)([(0,l.y)({type:u.T,json:{write:{enabled:!0,allowNull:!0}}})],x.prototype,"fullTimeExtent",void 0),(0,l.e)([(0,v.o)("fullTimeExtent",["timeExtent"])],x.prototype,"readFullTimeExtent",null),(0,l.e)([(0,v.r)("fullTimeExtent")],x.prototype,"writeFullTimeExtent",null),(0,l.e)([(0,l.y)({type:Boolean,json:{write:!0}})],x.prototype,"hasLiveData",void 0),(0,l.e)([(0,l.y)({type:m,json:{write:{enabled:!0,allowNull:!0}}})],x.prototype,"interval",void 0),(0,l.e)([(0,v.o)("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],x.prototype,"readInterval",null),(0,l.e)([(0,v.r)("interval")],x.prototype,"writeInterval",null),(0,l.e)([(0,l.y)({type:String,json:{read:{source:"startTimeField"},write:{target:"startTimeField",allowNull:!0}}})],x.prototype,"startField",void 0),(0,l.e)([(0,l.y)({type:b,json:{write:{enabled:!0,allowNull:!0}}})],x.prototype,"timeReference",void 0),(0,l.e)([(0,l.y)({type:String,json:{write:{enabled:!0,allowNull:!0}}})],x.prototype,"trackIdField",void 0),(0,l.e)([(0,l.y)({type:Boolean,json:{read:{source:"exportOptions.useTime"},write:{target:"exportOptions.useTime"}}})],x.prototype,"useTime",void 0);var S=x=w=(0,l.e)([(0,l.n)("esri.layers.support.TimeInfo")],x)},17562:function(e,t,r){function n(e){var t,r=e.layer;return"floorInfo"in r&&null!==(t=r.floorInfo)&&void 0!==t&&t.floorField&&"floors"in e.view?a(e.view.floors,r.floorInfo.floorField):null}function i(e,t){var r;return"floorInfo"in t&&null!==(r=t.floorInfo)&&void 0!==r&&r.floorField?a(e,t.floorInfo.floorField):null}function a(e,t){if(null===e||void 0===e||!e.length)return null;var r=e.filter((function(e){return""!==e})).map((function(e){return"'".concat(e,"'")}));return r.push("''"),"".concat(t," IN (").concat(r.join(","),") OR ").concat(t," IS NULL")}r.d(t,{n:function(){return i},o:function(){return n}})},16641:function(e,t,r){r.d(t,{i:function(){return f},n:function(){return d}});var n=r(93433),i=r(74165),a=r(15861),o=r(59389),s=r(93314),l=r(93116),u=r(93661);function d(e,t){return c.apply(this,arguments)}function c(){return(c=(0,a.Z)((0,i.Z)().mark((function e(t,r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.load();case 2:return e.abrupt("return",f(t,r));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e,t){return v.apply(this,arguments)}function v(){return v=(0,a.Z)((0,i.Z)().mark((function e(t,r){var d,c,f;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d=[],c=function e(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];for(var a=0,o=r;a<o.length;a++){var c=o[a];(0,u.t)(c)||(Array.isArray(c)?e.apply(void 0,(0,n.Z)(c)):s.j.isCollection(c)?c.forEach((function(t){return e(t)})):l.m.isLoadable(c)&&d.push(c))}},r(c),f=null,e.next=5,(0,o.h)(d,function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t1=!1,e.next=3,(0,o.b)(y(t)?t.loadAll():t.load());case 3:if(e.t2=e.sent.ok,e.t0=e.t1!==e.t2,e.t0){e.next=7;break}e.t0=f;case 7:if(e.t3=e.t0,e.t3){e.next=10;break}f=t;case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 5:if(!f){e.next=7;break}throw f.loadError;case 7:return e.abrupt("return",t);case 8:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}function y(e){return"loadAll"in e&&"function"==typeof e.loadAll}},6189:function(e,t,r){r.d(t,{d:function(){return s},i:function(){return i},o:function(){return o},r:function(){return a}});var n=r(47855);function i(e,t){var r=t||e.extent,i=e.width,a=(0,n.$)(r&&r.spatialReference);return r&&i?r.width/i*a*n.f*96:0}function a(e,t){return e/((0,n.$)(t)*n.f*96)}function o(e){return e/(96*n.f)}function s(e,t){var r=e.extent,n=e.width-(e.padding?e.padding.left+e.padding.right:0),i=a(t,r.spatialReference);return r.clone().expand(i*n/r.width)}},71645:function(e,t,r){r.d(t,{e:function(){return o}});var n=r(37762),i=r(1685),a=[];function o(e,t){var r;if((0,i.g)(null!==(r=e.url)&&void 0!==r?r:""))return!0;var o,s=t.wkid,l=(0,n.Z)(a);try{for(l.s();!(o=l.n()).done;){var u,d=o.value;if((null!==(u=e.version)&&void 0!==u?u:0)>=d[0])return!0;if("function"==typeof d[1]&&(d[1]=d[1]()),d[1].has(s))return!1}}catch(c){l.e(c)}finally{l.f()}return!0}a.push([10.91,function(){for(var e=new Set([9709,9716,9741,9761,9766]),t=9712;t<=9713;t++)e.add(t);for(var r=9748;r<=9749;r++)e.add(r);for(var n=20904;n<=20932;n++)e.add(n);for(var i=21004;i<=21032;i++)e.add(i);for(var a=21207;a<=21264;a++)e.add(a);for(var o=21307;o<=21364;o++)e.add(o);for(var s=102759;s<=102760;s++)e.add(s);for(var l=102901;l<=102955;l++)e.add(l);return e}]),a.push([10.9,function(){for(var e=new Set([9300,9354,9364,9367,9373,9377,9387,9456,9473,9498,9678,9680,29874,103599,103872,104028]),t=9356;t<=9360;t++)e.add(t);for(var r=9404;r<=9407;r++)e.add(r);for(var n=9476;n<=9482;n++)e.add(n);for(var i=9487;i<=9494;i++)e.add(i);for(var a=9697;a<=9699;a++)e.add(a);return e}]),a.push([10.81,function(){for(var e=new Set([9265,9333,103598,103699]),t=9248;t<=9254;t++)e.add(t);for(var r=9271;r<=9273;r++)e.add(r);for(var n=9284;n<=9285;n++)e.add(n);for(var i=21453;i<=21463;i++)e.add(i);return e}]),a.push([10.8,function(){for(var e=new Set([8088,8395,8428,8433,8531,8687,8692,8694,8699,8900,9003,9006,9009,9012,9017,9191]),t=8035;t<=8036;t++)e.add(t);for(var r=8455;r<=8456;r++)e.add(r);for(var n=8518;n<=8529;n++)e.add(n);for(var i=8533;i<=8536;i++)e.add(i);for(var a=8538;a<=8540;a++)e.add(a);for(var o=8677;o<=8679;o++)e.add(o);for(var s=8902;s<=8903;s++)e.add(s);for(var l=8907;l<=8910;l++)e.add(l);for(var u=8949;u<=8951;u++)e.add(u);for(var d=8972;d<=8987;d++)e.add(d);for(var c=9039;c<=9040;c++)e.add(c);for(var f=9068;f<=9069;f++)e.add(f);for(var v=9140;v<=9141;v++)e.add(v);for(var y=9148;y<=9150;y++)e.add(y);for(var p=9153;p<=9159;p++)e.add(p);for(var h=9205;h<=9218;h++)e.add(h);for(var m=9221;m<=9222;m++)e.add(m);for(var g=54098;g<=54101;g++)e.add(g);return e}]),a.push([10.71,function(){for(var e=new Set([6316]),t=8351;t<=8353;t++)e.add(t);for(var r=9294;r<=9297;r++)e.add(r);for(var n=103586;n<=103594;n++)e.add(n);for(var i=103696;i<=103698;i++)e.add(i);return e}]),a.push([10.7,function(){for(var e=new Set([8387,8391,8427,8545,8682,8685,8818,31370,104022,104024,104975]),t=8065;t<=8068;t++)e.add(t);for(var r=8082;r<=8083;r++)e.add(r);for(var n=8379;n<=8385;n++)e.add(n);for(var i=8836;i<=8840;i++)e.add(i);for(var a=8857;a<=8860;a++)e.add(a);for(var o=53035;o<=53037;o++)e.add(o);for(var s=54090;s<=54091;s++)e.add(s);for(var l=102498;l<=102499;l++)e.add(l);return e}]),a.push([10.61,function(){return new Set([102497])}]),a.push([10.6,function(){for(var e=new Set([7803,7805,7887,8086,8232,8237,8240,8246,8249,8252,8255,9019,9391]),t=7755;t<=7787;t++)e.add(t);for(var r=7791;r<=7795;r++)e.add(r);for(var n=7799;n<=7801;n++)e.add(n);for(var i=7825;i<=7831;i++)e.add(i);for(var a=7877;a<=7878;a++)e.add(a);for(var o=7882;o<=7883;o++)e.add(o);for(var s=7991;s<=7992;s++)e.add(s);for(var l=8042;l<=8043;l++)e.add(l);for(var u=8058;u<=8059;u++)e.add(u);for(var d=8311;d<=8348;d++)e.add(d);for(var c=9060;c<=9067;c++)e.add(c);for(var f=102562;f<=102568;f++)e.add(f);for(var v=102799;v<=102900;v++)e.add(v);return e}]),a.push([10.51,function(){for(var e=new Set([7683,7881,7886,7899,8888,9e3]),t=8013;t<=8032;t++)e.add(t);for(var r=9053;r<=9057;r++)e.add(r);for(var n=104017;n<=104018;n++)e.add(n);for(var i=104971;i<=104974;i++)e.add(i);return e}]),a.push([10.5,function(){for(var e=new Set([6962,7035,7037,7039,7041,7084,7086,7133,7798,102399]),t=4087;t<=4088;t++)e.add(t);for(var r=5896;r<=5899;r++)e.add(r);for(var n=7005;n<=7007;n++)e.add(n);for(var i=7057;i<=7070;i++)e.add(i);for(var a=7073;a<=7082;a++)e.add(a);for(var o=7109;o<=7128;o++)e.add(o);for(var s=7844;s<=7859;s++)e.add(s);return e}])}}]);
//# sourceMappingURL=5096.1b8b26c5.chunk.js.map