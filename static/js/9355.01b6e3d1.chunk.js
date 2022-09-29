"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[9355],{91691:function(e,t,r){r.r(t);var i=r(74165),n=r(1413),s=r(37762),a=r(15861),u=r(15671),l=r(43144),o=r(23132),d=r(75610),p=r(30604),c=r(30709),y=r(61495),f=r(94858),h=r(86548),m=r(83712),g=r(20880),v=r(81642),b=r(21041),F=r(55827),I=r(69797),S=r(50526),_=(r(21583),r(80262),r(36460),r(70441),r(33642),r(80175),r(72820),r(78311),r(2760),r(62268),r(18392),r(86068),r(75370),r(63022),r(44455),r(57714),r(61340),r(33703),r(69953),r(7513),r(25316),r(1241),r(91204),r(73554),r(60912),r(47626),r(81019),r(68826),r(61212),r(29709),r(78674),r(66307),r(50448),r(22144),r(75955),r(14739),r(10780),r(14181),r(77470),r(36551),r(50338),c.n),T={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:c.n},x={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function E(e){return(0,p.l)(e)?null!=e.z:!!e.hasZ}function k(e){return(0,p.l)(e)?null!=e.m:!!e.hasM}var Z=function(){function e(){(0,u.Z)(this,e),this._queryEngine=null,this._nextObjectId=null}return(0,l.Z)(e,[{key:"destroy",value:function(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}},{key:"load",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){var r,a,u,l,d,p,c,y,b,E,k,Z,w,R,j,q,D,O,M,A,C,Q,L,G,P,z,U;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=[],a=t.features,u=this._inferLayerProperties(a,t.fields),l=t.fields||[],d=null!=t.hasM?t.hasM:u.hasM,p=null!=t.hasZ?t.hasZ:u.hasZ,c=!t.spatialReference&&!u.spatialReference,y=c?_:t.spatialReference||u.spatialReference,b=c?T:null,E=t.geometryType||u.geometryType,k=!E,Z=t.objectIdField||u.objectIdField,w=t.timeInfo,k||(c&&r.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),E)){e.next=4;break}throw new o.a("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");case 4:if(Z){e.next=6;break}throw new o.a("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");case 6:u.objectIdField&&Z!==u.objectIdField&&(r.push({name:"feature-layer:duplicated-oid-field",message:'Provided objectIdField "'.concat(Z,'" doesn\'t match the field name "').concat(u.objectIdField,'", found in the provided fields')}),Z=u.objectIdField),Z&&!u.objectIdField&&(R=null,l.some((function(e){return e.name===Z&&(R=e,!0)}))?(R.type="esriFieldTypeOID",R.editable=!1,R.nullable=!1):l.unshift({alias:Z,name:Z,type:"esriFieldTypeOID",editable:!1,nullable:!1})),j=(0,s.Z)(l),e.prev=8,j.s();case 10:if((q=j.n()).done){e.next=18;break}if(null==(D=q.value).name&&(D.name=D.alias),null==D.alias&&(D.alias=D.name),D.name){e.next=14;break}throw new o.a("feature-layer:invalid-field-name","field name is missing",{field:D});case 14:if(D.name===Z&&(D.type="esriFieldTypeOID"),I.i.jsonValues.includes(D.type)){e.next=16;break}throw new o.a("feature-layer:invalid-field-type",'invalid type for field "'.concat(D.name,'"'),{field:D});case 16:e.next=10;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(8),j.e(e.t0);case 23:return e.prev=23,j.f(),e.finish(23);case 26:O={},M=(0,s.Z)(l);try{for(M.s();!(A=M.n()).done;)"esriFieldTypeOID"!==(C=A.value).type&&"esriFieldTypeGlobalID"!==C.type&&void 0!==(Q=(0,S.P)(C))&&(O[C.name]=Q)}catch(i){M.e(i)}finally{M.f()}if(this._fieldsIndex=new F.d(l),this._createDefaultAttributes=(0,v.a)(O,Z),w&&(w.startTimeField&&((L=this._fieldsIndex.get(w.startTimeField))?(w.startTimeField=L.name,L.type="esriFieldTypeDate"):w.startTimeField=null),w.endTimeField&&((G=this._fieldsIndex.get(w.endTimeField))?(w.endTimeField=G.name,G.type="esriFieldTypeDate"):w.endTimeField=null),w.trackIdField&&((P=this._fieldsIndex.get(w.trackIdField))?w.trackIdField=P.name:(w.trackIdField=null,r.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:w}}))),w.startTimeField||w.endTimeField||(r.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:w}}),w=null)),z={warnings:r,featureErrors:[],layerDefinition:(0,n.Z)((0,n.Z)({},x),{},{drawingInfo:(0,v.u)(E),templates:(0,v.l)(O),extent:b,geometryType:E,objectIdField:Z,fields:l,hasZ:!!p,hasM:!!d,timeInfo:w}),assignedObjectIds:{}},this._queryEngine=new g.Y({fields:l,geometryType:E,hasM:d,hasZ:p,objectIdField:Z,spatialReference:y,featureStore:new h.u({geometryType:E,hasM:d,hasZ:p}),timeInfo:w,cacheSpatialQueries:!0}),a&&a.length){e.next=33;break}return e.abrupt("return",(this._nextObjectId=f.t,z));case 33:return U=(0,f.n)(Z,a),this._nextObjectId=U+1,e.next=37,(0,m.f)(a,y);case 37:return e.abrupt("return",this._loadInitialFeatures(z,a));case 38:case"end":return e.stop()}}),e,this,[[8,20,23,26]])})));return function(t){return e.apply(this,arguments)}}()},{key:"applyEdits",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){var r,n,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this._queryEngine,n=r.spatialReference,s=r.geometryType,e.next=3,Promise.all([(0,b.w)(n,s),(0,m.f)(t.adds,n),(0,m.f)(t.updates,n)]);case 3:return e.abrupt("return",this._applyEdits(t));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"queryFeatures",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQuery(e,t.signal)}},{key:"queryFeatureCount",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForCount(e,t.signal)}},{key:"queryObjectIds",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForIds(e,t.signal)}},{key:"queryExtent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForExtent(e,t.signal)}},{key:"querySnapping",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForSnapping(e,t.signal)}},{key:"_inferLayerProperties",value:function(e,t){var r,i,n,a=null,u=null,l=null,o=(0,s.Z)(e);try{for(o.s();!(n=o.n()).done;){var c=n.value.geometry;if(!(0,d.t)(c)&&(a||(a=(0,p.v)(c)),u||(u=c.spatialReference),null==r&&(r=E(c)),null==i&&(i=k(c)),a&&u&&null!=r&&null!=i))break}}catch(f){o.e(f)}finally{o.f()}if(t&&t.length){var y=null;t.some((function(e){var t="esriFieldTypeOID"===e.type,r=!e.type&&e.name&&"objectid"===e.name.toLowerCase();return y=e,t||r}))&&(l=y.name)}return{geometryType:a,spatialReference:u,objectIdField:l,hasM:i,hasZ:r}}},{key:"_loadInitialFeatures",value:function(e,t){var r,i=this._queryEngine,n=i.geometryType,a=i.hasM,u=i.hasZ,l=i.objectIdField,o=i.spatialReference,c=i.featureStore,f=[],h=(0,s.Z)(t);try{for(h.s();!(r=h.n()).done;){var g=r.value;if(null!=g.uid&&(e.assignedObjectIds[g.uid]=-1),g.geometry&&n!==(0,p.v)(g.geometry))e.featureErrors.push((0,b.a)("Incorrect geometry type."));else{var v=this._createDefaultAttributes(),F=(0,b.m)(this._fieldsIndex,v,g.attributes,!0,e.warnings);F?e.featureErrors.push(F):(this._assignObjectId(v,g.attributes,!0),g.attributes=v,null!=g.uid&&(e.assignedObjectIds[g.uid]=g.attributes[l]),(0,d.r)(g.geometry)&&(g.geometry=(0,m.g)(g.geometry,g.geometry.spatialReference,o)),f.push(g))}}}catch(T){h.e(T)}finally{h.f()}if(c.addMany((0,y.W)([],f,n,u,a,l)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){var I=this._queryEngine.timeExtent,S=I.start,_=I.end;e.layerDefinition.timeInfo.timeExtent=[S,_]}return e}},{key:"_applyEdits",value:function(e){var t=e.adds,r=e.updates,i=e.deletes,n={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(n,t),r&&r.length&&this._applyUpdateEdits(n,r),i&&i.length){var a,u=(0,s.Z)(i);try{for(u.s();!(a=u.n()).done;){var l=a.value;n.deleteResults.push((0,b.f)(l))}}catch(o){u.e(o)}finally{u.f()}this._queryEngine.featureStore.removeManyById(i)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:n}}},{key:"_applyAddEdits",value:function(e,t){var r,i=e.addResults,n=this._queryEngine,a=n.geometryType,u=n.hasM,l=n.hasZ,o=n.objectIdField,c=n.spatialReference,f=n.featureStore,h=[],g=(0,s.Z)(t);try{for(g.s();!(r=g.n()).done;){var v=r.value;if(v.geometry&&a!==(0,p.v)(v.geometry))i.push((0,b.a)("Incorrect geometry type."));else{var F=this._createDefaultAttributes(),I=(0,b.m)(this._fieldsIndex,F,v.attributes);if(I)i.push(I);else{if(this._assignObjectId(F,v.attributes),v.attributes=F,null!=v.uid){var S=v.attributes[o];e.uidToObjectId[v.uid]=S}(0,d.r)(v.geometry)&&(v.geometry=(0,m.g)((0,b.g)(v.geometry,c),v.geometry.spatialReference,c)),h.push(v),i.push((0,b.f)(v.attributes[o]))}}}}catch(_){g.e(_)}finally{g.f()}f.addMany((0,y.W)([],h,a,l,u,o))}},{key:"_applyUpdateEdits",value:function(e,t){var r,i=e.updateResults,n=this._queryEngine,a=n.geometryType,u=n.hasM,l=n.hasZ,o=n.objectIdField,c=n.spatialReference,f=n.featureStore,h=(0,s.Z)(t);try{for(h.s();!(r=h.n()).done;){var g=r.value,v=g.attributes,F=g.geometry,I=v&&v[o];if(null!=I)if(f.has(I)){var S=(0,y.e)(f.getFeature(I),a,l,u);if((0,d.r)(F)){if(a!==(0,p.v)(F)){i.push((0,b.a)("Incorrect geometry type."));continue}S.geometry=(0,m.g)((0,b.g)(F,c),F.spatialReference,c)}if(v){var _=(0,b.m)(this._fieldsIndex,S.attributes,v);if(_){i.push(_);continue}}f.add((0,y.Q)(S,a,l,u,o)),i.push((0,b.f)(I))}else i.push((0,b.a)("Feature with object id ".concat(I," missing")));else i.push((0,b.a)("Identifier field ".concat(o," missing")))}}catch(T){h.e(T)}finally{h.f()}}},{key:"_assignObjectId",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=this._queryEngine.objectIdField;r&&t&&isFinite(t[i])?e[i]=t[i]:e[i]=this._nextObjectId++}}]),e}();t.default=Z},81642:function(e,t,r){r.d(t,{a:function(){return p},c:function(){return y},l:function(){return c},u:function(){return l}});var i=r(4942),n=r(1413),s=r(75610),a=r(14739),u=r(50338);function l(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?u.l:"esriGeometryPolyline"===e?u.o:u.S}}}var o=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/,d=1;function p(e,t){if((0,s.a)("esri-csp-restrictions"))return function(){return(0,n.Z)((0,i.Z)({},t,null),e)};try{var r="this.".concat(t," = null;");for(var a in e)r+="this".concat(o.test(a)?".".concat(a):'["'.concat(a,'"]')," = ").concat(JSON.stringify(e[a]),";");var u=new Function("\n      return class AttributesClass$".concat(d++," {\n        constructor() {\n          ").concat(r,";\n        }\n      }\n    "))();return function(){return new u}}catch(u){return function(){return(0,n.Z)((0,i.Z)({},t,null),e)}}}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,s.m)(e)}}]}function y(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:a.t,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},50338:function(e,t,r){r.d(t,{S:function(){return u},e:function(){return i},i:function(){return n},l:function(){return s},o:function(){return a},r:function(){return o},s:function(){return d},t:function(){return l},y:function(){return p}});var i=[252,146,31,255],n=[153,153,153,255],s={type:"esriSMS",style:"esriSMSCircle",size:6,color:i,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},a={type:"esriSLS",style:"esriSLSSolid",width:.75,color:i},u={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},l={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},o={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},d={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},p={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}},69797:function(e,t,r){r.d(t,{i:function(){return i}});var i=new(r(57714).s)({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml"})},94858:function(e,t,r){r.d(t,{n:function(){return s},t:function(){return n}});var i=r(37762),n=1;function s(e,t){var r,n=0,s=(0,i.Z)(t);try{for(s.s();!(r=s.n()).done;){var a,u=null===(a=r.value.attributes)||void 0===a?void 0:a[e];"number"==typeof u&&isFinite(u)&&(n=Math.max(n,u))}}catch(l){s.e(l)}finally{s.f()}return n}}}]);
//# sourceMappingURL=9355.01b6e3d1.chunk.js.map