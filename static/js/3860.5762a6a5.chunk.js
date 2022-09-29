"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[3860],{23860:function(e,t,r){r.d(t,{E:function(){return D},n:function(){return C}});var o=r(74165),n=r(15861),i=r(37762),a=r(15671),s=r(43144),p=r(60136),u=r(29388),l=r(23132),d=r(51451),y=(r(67154),r(407)),c=r(57714),f=r(79611),v=r(75610),h=r(43920),m=r(50448),g=r(30709),b=r(80262),S=r(74575),x=r(77196),Z=r(9575),I=r(18411),k=r(94835),F=r(78945),T=r(55827),L=r(20852),O=r(45246),w=r(34860),R=r(40452),j=function(e){(0,p.Z)(r,e);var t=(0,u.Z)(r);function r(e){var o;return(0,a.Z)(this,r),(o=t.call(this,e)).title="",o.id=-1,o.modelName=null,o.isEmpty=null,o.visible=!0,o.opacity=1,o}return(0,s.Z)(r,[{key:"readTitle",value:function(e,t){return"string"==typeof t.alias?t.alias:"string"==typeof t.name?t.name:""}},{key:"readIdOnlyOnce",value:function(e){return-1!==this.id?this.id:"number"==typeof e?e:void 0}}]),r}((0,x.s)(Z.S));(0,l.e)([(0,l.d)({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],j.prototype,"title",void 0),(0,l.e)([(0,g.o)("service","title",["alias","name"])],j.prototype,"readTitle",null),(0,l.e)([(0,l.d)()],j.prototype,"layer",void 0),(0,l.e)([(0,l.d)({type:l.S,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],j.prototype,"id",void 0),(0,l.e)([(0,g.o)("service","id")],j.prototype,"readIdOnlyOnce",null),(0,l.e)([(0,l.d)((0,I.y)(String))],j.prototype,"modelName",void 0),(0,l.e)([(0,l.d)((0,I.y)(Boolean))],j.prototype,"isEmpty",void 0),(0,l.e)([(0,l.d)({type:Boolean,json:{name:"visibility",write:!0}})],j.prototype,"visible",void 0),(0,l.e)([(0,l.d)({type:Number,json:{write:!0}})],j.prototype,"opacity",void 0);var C=j=(0,l.e)([(0,l.n)("esri.layers.buildingSublayers.BuildingSublayer")],j),q=l.s.getLogger("esri.layers.buildingSublayers.BuildingComponentSublayer"),P=(0,F.l)(),U=function(e){(0,p.Z)(r,e);var t=(0,u.Z)(r);function r(e){var o;return(0,a.Z)(this,r),(o=t.call(this,e)).type="building-component",o.nodePages=null,o.materialDefinitions=null,o.textureSetDefinitions=null,o.geometryDefinitions=null,o.serviceUpdateTimeStamp=null,o.fields=null,o.associatedLayer=null,o.outFields=null,o.listMode="show",o.renderer=null,o.definitionExpression=null,o.popupEnabled=!0,o.popupTemplate=null,o.layerType="3d-object",o}return(0,s.Z)(r,[{key:"parsedUrl",get:function(){return this.layer?{path:"".concat(this.layer.parsedUrl.path,"/sublayers/").concat(this.id),query:this.layer.parsedUrl.query}:null}},{key:"fieldsIndex",get:function(){return new T.d(this.fields)}},{key:"readAssociatedLayer",value:function(e,t){var r=this.layer.associatedFeatureServiceItem,o=t.associatedLayerID;return(0,v.r)(r)&&"number"==typeof o?new S.K({portalItem:r,layerId:o}):null}},{key:"objectIdField",get:function(){if(null!=this.fields){var e,t=(0,i.Z)(this.fields);try{for(t.s();!(e=t.n()).done;){var r=e.value;if("oid"===r.type)return r.name}}catch(o){t.e(o)}finally{t.f()}}return null}},{key:"displayField",get:function(){return(0,v.r)(this.associatedLayer)?this.associatedLayer.displayField:null}},{key:"apiKey",get:function(){return this.layer.apiKey}},{key:"fullExtent",get:function(){return this.layer.fullExtent}},{key:"spatialReference",get:function(){return this.layer.spatialReference}},{key:"version",get:function(){return this.layer.version}},{key:"elevationInfo",get:function(){return this.layer.elevationInfo}},{key:"minScale",get:function(){return this.layer.minScale}},{key:"maxScale",get:function(){return this.layer.maxScale}},{key:"effectiveScaleRange",get:function(){return this.layer.effectiveScaleRange}},{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"load",value:function(e){var t=this,r=(0,v.r)(e)?e.signal:null,o=this._fetchService(r).then((function(){t.indexInfo=(0,L.n)(t.parsedUrl.path,t.rootNode,t.nodePages,t.apiKey,q,r)}));return this.addResolvingPromise(o),Promise.resolve(this)}},{key:"createPopupTemplate",value:function(e){return(0,R.d)(this,e)}},{key:"_fetchService",value:function(){var e=(0,n.Z)((0,o.Z)().mark((function e(t){var r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.U)(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t});case 2:r=e.sent.data,this.read(r,{origin:"service",url:this.parsedUrl});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getField",value:function(e){return this.fieldsIndex.get(e)}},{key:"getFieldDomain",value:function(e,t){var r,o,n,i,a=null===(r=this.getFeatureType(null===t||void 0===t?void 0:t.feature))||void 0===r||null===(o=r.domains)||void 0===o?void 0:o[e];return a&&"inherited"!==a.type?a:null!==(n=null===(i=this.getField(e))||void 0===i?void 0:i.domain)&&void 0!==n?n:null}},{key:"getFeatureType",value:function(e){return e&&(0,v.r)(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}},{key:"types",get:function(){return(0,v.r)(this.associatedLayer)?this.associatedLayer.types:[]}},{key:"typeIdField",get:function(){return(0,v.r)(this.associatedLayer)?this.associatedLayer.typeIdField:null}},{key:"geometryType",get:function(){return"3d-object"===this.layerType?"mesh":"point"}},{key:"profile",get:function(){return"3d-object"===this.layerType?"mesh-pyramids":"points"}},{key:"capabilities",get:function(){var e=(0,v.r)(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:k.t,t=e.query,r=e.data;return{query:t,data:{supportsZ:r.supportsZ,supportsM:r.supportsM,isVersioned:r.isVersioned}}}},{key:"createQuery",value:function(){var e=new w.b;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}},{key:"queryExtent",value:function(e,t){var r=this;return this._getAssociatedLayerForQuery().then((function(o){return o.queryExtent(e||r.createQuery(),t)}))}},{key:"queryFeatureCount",value:function(e,t){var r=this;return this._getAssociatedLayerForQuery().then((function(o){return o.queryFeatureCount(e||r.createQuery(),t)}))}},{key:"queryFeatures",value:function(e,t){var r=this;return this._getAssociatedLayerForQuery().then((function(o){return o.queryFeatures(e||r.createQuery(),t)})).then((function(e){if(null!==e&&void 0!==e&&e.features){var t,o=(0,i.Z)(e.features);try{for(o.s();!(t=o.n()).done;){var n=t.value;n.layer=r.layer,n.sourceLayer=r}}catch(a){o.e(a)}finally{o.f()}}return e}))}},{key:"queryObjectIds",value:function(e,t){var r=this;return this._getAssociatedLayerForQuery().then((function(o){return o.queryObjectIds(e||r.createQuery(),t)}))}},{key:"getFieldUsageInfo",value:function(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:(0,v.r)(this.associatedLayer)}}},{key:"_getAssociatedLayerForQuery",value:function(){var e=this.associatedLayer;return(0,v.r)(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}},{key:"_loadAssociatedLayerForQuery",value:function(){var e=(0,n.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:if(!(0,v.t)(this.associatedLayer)){e.next=4;break}throw new l.a("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});case 4:return e.prev=4,e.next=7,this.associatedLayer.load();case 7:e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(4),new l.a("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e.t0});case 12:return e.abrupt("return",this.associatedLayer);case 13:case"end":return e.stop()}}),e,this,[[4,9]])})));return function(){return e.apply(this,arguments)}}()}]),r}(f.m.LoadableMixin((0,h.m)(C)));(0,l.e)([(0,l.d)({readOnly:!0})],U.prototype,"parsedUrl",null),(0,l.e)([(0,l.d)({type:O.s,readOnly:!0})],U.prototype,"nodePages",void 0),(0,l.e)([(0,l.d)({type:[O.l],readOnly:!0})],U.prototype,"materialDefinitions",void 0),(0,l.e)([(0,l.d)({type:[O.u],readOnly:!0})],U.prototype,"textureSetDefinitions",void 0),(0,l.e)([(0,l.d)({type:[O.m],readOnly:!0})],U.prototype,"geometryDefinitions",void 0),(0,l.e)([(0,l.d)({readOnly:!0})],U.prototype,"serviceUpdateTimeStamp",void 0),(0,l.e)([(0,l.d)({readOnly:!0})],U.prototype,"store",void 0),(0,l.e)([(0,l.d)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],U.prototype,"rootNode",void 0),(0,l.e)([(0,l.d)({readOnly:!0})],U.prototype,"attributeStorageInfo",void 0),(0,l.e)([(0,l.d)(P.fields)],U.prototype,"fields",void 0),(0,l.e)([(0,l.d)({readOnly:!0})],U.prototype,"fieldsIndex",null),(0,l.e)([(0,l.d)({readOnly:!0,type:S.K})],U.prototype,"associatedLayer",void 0),(0,l.e)([(0,g.o)("service","associatedLayer",["associatedLayerID"])],U.prototype,"readAssociatedLayer",null),(0,l.e)([(0,l.d)(P.outFields)],U.prototype,"outFields",void 0),(0,l.e)([(0,l.d)({type:String,readOnly:!0})],U.prototype,"objectIdField",null),(0,l.e)([(0,l.d)({readOnly:!0,type:String,json:{read:!1}})],U.prototype,"displayField",null),(0,l.e)([(0,l.d)({readOnly:!0,type:String})],U.prototype,"apiKey",null),(0,l.e)([(0,l.d)({readOnly:!0,type:b.M})],U.prototype,"fullExtent",null),(0,l.e)([(0,l.d)({readOnly:!0,type:g.k})],U.prototype,"spatialReference",null),(0,l.e)([(0,l.d)({readOnly:!0})],U.prototype,"version",null),(0,l.e)([(0,l.d)({readOnly:!0,type:I.x})],U.prototype,"elevationInfo",null),(0,l.e)([(0,l.d)({readOnly:!0,type:Number})],U.prototype,"minScale",null),(0,l.e)([(0,l.d)({readOnly:!0,type:Number})],U.prototype,"maxScale",null),(0,l.e)([(0,l.d)({readOnly:!0,type:Number})],U.prototype,"effectiveScaleRange",null),(0,l.e)([(0,l.d)({type:["hide","show"],json:{write:!0}})],U.prototype,"listMode",void 0),(0,l.e)([(0,l.d)({types:y.n,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],U.prototype,"renderer",void 0),(0,l.e)([(0,l.d)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],U.prototype,"definitionExpression",void 0),(0,l.e)([(0,l.d)(I.p)],U.prototype,"popupEnabled",void 0),(0,l.e)([(0,l.d)({type:d.B,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],U.prototype,"popupTemplate",void 0),(0,l.e)([(0,l.d)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],U.prototype,"normalReferenceFrame",void 0),(0,l.e)([(0,l.d)({readOnly:!0,json:{read:!1}})],U.prototype,"defaultPopupTemplate",null),(0,l.e)([(0,l.d)()],U.prototype,"types",null),(0,l.e)([(0,l.d)()],U.prototype,"typeIdField",null),(0,l.e)([(0,l.d)({json:{write:!1}}),(0,m.r)(new c.s({"3DObject":"3d-object",Point:"point"}))],U.prototype,"layerType",void 0),(0,l.e)([(0,l.d)()],U.prototype,"geometryType",null),(0,l.e)([(0,l.d)()],U.prototype,"profile",null),(0,l.e)([(0,l.d)({readOnly:!0,json:{read:!1}})],U.prototype,"capabilities",null);var D=U=(0,l.e)([(0,l.n)("esri.layers.buildingSublayers.BuildingComponentSublayer")],U)},45246:function(e,t,r){r.d(t,{l:function(){return c},m:function(){return b},s:function(){return l},u:function(){return v}});var o=r(43144),n=r(15671),i=r(60136),a=r(29388),s=r(23132),p=r(70441),u=(r(75610),r(50448)),l=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){var e;return(0,n.Z)(this,r),(e=t.apply(this,arguments)).nodesPerPage=null,e.rootIndex=0,e.lodSelectionMetricType=null,e}return(0,o.Z)(r)}(p.l);(0,s.e)([(0,s.d)({type:Number})],l.prototype,"nodesPerPage",void 0),(0,s.e)([(0,s.d)({type:Number})],l.prototype,"rootIndex",void 0),(0,s.e)([(0,s.d)({type:String})],l.prototype,"lodSelectionMetricType",void 0),l=(0,s.e)([(0,s.n)("esri.layer.support.I3SNodePageDefinition")],l);var d=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){var e;return(0,n.Z)(this,r),(e=t.apply(this,arguments)).factor=1,e}return(0,o.Z)(r)}(p.l);(0,s.e)([(0,s.d)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],d.prototype,"id",void 0),(0,s.e)([(0,s.d)({type:Number})],d.prototype,"factor",void 0),d=(0,s.e)([(0,s.n)("esri.layer.support.I3SMaterialTexture")],d);var y=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){var e;return(0,n.Z)(this,r),(e=t.apply(this,arguments)).baseColorFactor=[1,1,1,1],e.baseColorTexture=null,e.metallicRoughnessTexture=null,e.metallicFactor=1,e.roughnessFactor=1,e}return(0,o.Z)(r)}(p.l);(0,s.e)([(0,s.d)({type:[Number]})],y.prototype,"baseColorFactor",void 0),(0,s.e)([(0,s.d)({type:d})],y.prototype,"baseColorTexture",void 0),(0,s.e)([(0,s.d)({type:d})],y.prototype,"metallicRoughnessTexture",void 0),(0,s.e)([(0,s.d)({type:Number})],y.prototype,"metallicFactor",void 0),(0,s.e)([(0,s.d)({type:Number})],y.prototype,"roughnessFactor",void 0),y=(0,s.e)([(0,s.n)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],y);var c=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){var e;return(0,n.Z)(this,r),(e=t.apply(this,arguments)).alphaMode="opaque",e.alphaCutoff=.25,e.doubleSided=!1,e.cullFace="none",e.normalTexture=null,e.occlusionTexture=null,e.emissiveTexture=null,e.emissiveFactor=null,e.pbrMetallicRoughness=null,e}return(0,o.Z)(r)}(p.l);(0,s.e)([(0,u.r)({opaque:"opaque",mask:"mask",blend:"blend"})],c.prototype,"alphaMode",void 0),(0,s.e)([(0,s.d)({type:Number})],c.prototype,"alphaCutoff",void 0),(0,s.e)([(0,s.d)({type:Boolean})],c.prototype,"doubleSided",void 0),(0,s.e)([(0,u.r)({none:"none",back:"back",front:"front"})],c.prototype,"cullFace",void 0),(0,s.e)([(0,s.d)({type:d})],c.prototype,"normalTexture",void 0),(0,s.e)([(0,s.d)({type:d})],c.prototype,"occlusionTexture",void 0),(0,s.e)([(0,s.d)({type:d})],c.prototype,"emissiveTexture",void 0),(0,s.e)([(0,s.d)({type:[Number]})],c.prototype,"emissiveFactor",void 0),(0,s.e)([(0,s.d)({type:y})],c.prototype,"pbrMetallicRoughness",void 0),c=(0,s.e)([(0,s.n)("esri.layer.support.I3SMaterialDefinition")],c);var f=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,o.Z)(r)}(p.l);(0,s.e)([(0,s.d)({type:String,json:{read:{source:["name","index"],reader:function(e,t){return null!=e?e:"".concat(t.index)}}}})],f.prototype,"name",void 0),(0,s.e)([(0,u.r)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],f.prototype,"format",void 0),f=(0,s.e)([(0,s.n)("esri.layer.support.I3STextureFormat")],f);var v=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){var e;return(0,n.Z)(this,r),(e=t.apply(this,arguments)).atlas=!1,e}return(0,o.Z)(r)}(p.l);(0,s.e)([(0,s.d)({type:[f]})],v.prototype,"formats",void 0),(0,s.e)([(0,s.d)({type:Boolean})],v.prototype,"atlas",void 0),v=(0,s.e)([(0,s.n)("esri.layer.support.I3STextureSetDefinition")],v);var h=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,o.Z)(r)}(p.l);(0,s.e)([(0,u.r)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],h.prototype,"type",void 0),(0,s.e)([(0,s.d)({type:Number})],h.prototype,"component",void 0),h=(0,s.e)([(0,s.n)("esri.layer.support.I3SGeometryAttribute")],h);var m=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,o.Z)(r)}(p.l);(0,s.e)([(0,u.r)({draco:"draco"})],m.prototype,"encoding",void 0),(0,s.e)([(0,s.d)({type:[String]})],m.prototype,"attributes",void 0),m=(0,s.e)([(0,s.n)("esri.layer.support.I3SGeometryCompressedAttributes")],m);var g=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){var e;return(0,n.Z)(this,r),(e=t.apply(this,arguments)).offset=0,e}return(0,o.Z)(r)}(p.l);(0,s.e)([(0,s.d)({type:Number})],g.prototype,"offset",void 0),(0,s.e)([(0,s.d)({type:h})],g.prototype,"position",void 0),(0,s.e)([(0,s.d)({type:h})],g.prototype,"normal",void 0),(0,s.e)([(0,s.d)({type:h})],g.prototype,"uv0",void 0),(0,s.e)([(0,s.d)({type:h})],g.prototype,"color",void 0),(0,s.e)([(0,s.d)({type:h})],g.prototype,"uvRegion",void 0),(0,s.e)([(0,s.d)({type:h})],g.prototype,"featureId",void 0),(0,s.e)([(0,s.d)({type:h})],g.prototype,"faceRange",void 0),(0,s.e)([(0,s.d)({type:m})],g.prototype,"compressedAttributes",void 0),g=(0,s.e)([(0,s.n)("esri.layer.support.I3SGeometryBuffer")],g);var b=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,o.Z)(r)}(p.l);(0,s.e)([(0,u.r)({triangle:"triangle"})],b.prototype,"topology",void 0),(0,s.e)([(0,s.d)()],b.prototype,"geometryBuffers",void 0),b=(0,s.e)([(0,s.n)("esri.layer.support.I3SGeometryDefinition")],b)},94835:function(e,t,r){r.d(t,{t:function(){return o}});var o={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsResize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsDefaultSpatialReference:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}}}}]);
//# sourceMappingURL=3860.5762a6a5.chunk.js.map