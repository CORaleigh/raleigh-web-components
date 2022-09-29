"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[2495],{12495:function(e,t,r){r.d(t,{A:function(){return L},R:function(){return X},d:function(){return j},r:function(){return W},t:function(){return C}});var n,i,s,a=r(15861),u=r(11752),o=r(61120),l=r(60136),h=r(29388),c=r(74165),f=r(37762),d=r(15671),y=r(43144),v=r(75610),_=r(61495),p=r(33642),g=(r(91204),r(75370)),m=r(30604),k=r(23132),x=r(2760),b=r(79054),I=r(55827),S=r(45578),A=r(433),z=r(28329),T=r(6819),C=function(){function e(t,r){(0,d.Z)(this,e),this._mask=0,this._buf=t,this._mask=r}return(0,y.Z)(e,[{key:"_getIndex",value:function(e){return Math.floor(e/32)}},{key:"has",value:function(e){var t=this._mask&e;return!!(this._buf[this._getIndex(t)]&1<<t%32)}},{key:"hasRange",value:function(e,t){for(var r=e,n=t;r%32&&r!==n;){if(this.has(r))return!0;r++}for(;n%32&&r!==n;){if(this.has(r))return!0;n--}if(r===n)return!1;for(var i=r/32;i!==n/32;i++)if(this._buf[i])return!0;return!1}},{key:"set",value:function(e){var t=this._mask&e,r=this._getIndex(t),n=1<<t%32;this._buf[r]|=n}},{key:"setRange",value:function(e,t){for(var r=e,n=t;r%32&&r!==n;)this.set(r++);for(;n%32&&r!==n;)this.set(n--);if(r!==n)for(var i=r/32;i!==n/32;i++)this._buf[i]=4294967295}},{key:"unset",value:function(e){var t=this._mask&e,r=this._getIndex(t),n=1<<t%32;this._buf[r]&=4294967295^n}},{key:"resize",value:function(e){var t=this._buf,r=new Uint32Array(Math.ceil(e/32));r.set(t),this._buf=r}},{key:"or",value:function(e){for(var t=0;t<this._buf.length;t++)this._buf[t]|=e._buf[t];return this}},{key:"and",value:function(e){for(var t=0;t<this._buf.length;t++)this._buf[t]&=e._buf[t];return this}},{key:"xor",value:function(e){for(var t=0;t<this._buf.length;t++)this._buf[t]^=e._buf[t];return this}},{key:"ior",value:function(e){for(var t=0;t<this._buf.length;t++)this._buf[t]|=~e._buf[t];return this}},{key:"iand",value:function(e){for(var t=0;t<this._buf.length;t++)this._buf[t]&=~e._buf[t];return this}},{key:"ixor",value:function(e){for(var t=0;t<this._buf.length;t++)this._buf[t]^=~e._buf[t];return this}},{key:"any",value:function(){for(var e=0;e<this._buf.length;e++)if(this._buf[e])return!0;return!1}},{key:"copy",value:function(e){for(var t=0;t<this._buf.length;t++)this._buf[t]=e._buf[t];return this}},{key:"clone",value:function(){return new e(this._buf.slice(),this._mask)}},{key:"clear",value:function(){for(var e=0;e<this._buf.length;e++)this._buf[e]=0}},{key:"forEachSet",value:function(e){for(var t=0;t<this._buf.length;t++){var r=this._buf[t],n=32*t;if(r)for(;r;)1&r&&e(n),r>>>=1,n++}}},{key:"countSet",value:function(){var e=0;return this.forEachSet((function(t){e++})),e}}],[{key:"fromBuffer",value:function(t,r){return new e(t,r)}},{key:"create",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4294967295,n=new Uint32Array(Math.ceil(t/32));return new e(n,r)}}]),e}(),w=0,F=null!==(n=(0,v.a)("featurelayer-simplify-thresholds"))&&void 0!==n?n:[.5,.5,.5,.5],Z=F[0],E=F[1],D=F[2],M=F[3],N=null!==(i=(0,v.a)("featurelayer-simplify-payload-size-factors"))&&void 0!==i?i:[1,2,4],U=N[0],G=N[1],R=N[2],B=null!==(s=(0,v.a)("featurelayer-simplify-mobile-factor"))&&void 0!==s?s:2,O=(0,v.a)("esri-mobile"),L=function(){function e(t,r){(0,d.Z)(this,e),this.type="FeatureSetReader",this.arcadeDeclaredClass="esri.arcade.Feature",this.seen=!1,this.instance=0,this._tx=0,this._ty=0,this._sx=1,this._sy=1,this._deleted=null,this._joined=[],this._objectIdToIndex=null,this._level=0,this.instance=t,this._layerSchema=r}return(0,y.Z)(e,[{key:"isEmpty",get:function(){return(0,v.r)(this._deleted)&&this._deleted.countSet()===this.getSize()}},{key:"level",set:function(e){this._level=e}},{key:"getAreaSimplificationThreshold",value:function(e,t){var r=1,n=O?B:1;t>4e6?r=R*n:t>1e6?r=G*n:t>5e5?r=U*n:t>1e5&&(r=n);var i=0;e>4e3?i=M*r:e>2e3?i=D*r:e>100?i=E:e>15&&(i=Z);var s=8;return this._level<4?s=1:this._level<5?s=2:this._level<6&&(s=4),i*s}},{key:"setArcadeSpatialReference",value:function(e){this._arcadeSpatialReference=e}},{key:"attachStorage",value:function(e){this._storage=e}},{key:"getQuantizationTransform",value:function(){throw new Error("Unable to find transform for featureSet")}},{key:"getStorage",value:function(){return this._storage}},{key:"getComputedNumeric",value:function(e){return this.getComputedNumericAtIndex(0)}},{key:"setComputedNumeric",value:function(e,t){return this.setComputedNumericAtIndex(t,0)}},{key:"getComputedString",value:function(e){return this.getComputedStringAtIndex(0)}},{key:"setComputedString",value:function(e,t){return this.setComputedStringAtIndex(0,t)}},{key:"getComputedNumericAtIndex",value:function(e){return this._storage.getComputedNumericAtIndex(this.getDisplayId(),e)}},{key:"setComputedNumericAtIndex",value:function(e,t){this._storage.setComputedNumericAtIndex(this.getDisplayId(),e,t)}},{key:"getComputedStringAtIndex",value:function(e){return this._storage.getComputedStringAtIndex(this.getDisplayId(),e)}},{key:"setComputedStringAtIndex",value:function(e,t){return this._storage.setComputedStringAtIndex(this.getDisplayId(),e,t)}},{key:"transform",value:function(e,t,r,n){var i=this.copy();return i._tx+=e,i._ty+=t,i._sx*=r,i._sy*=n,i}},{key:"readAttribute",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this._readAttribute(e,t);if(void 0!==r)return r;var n,i=(0,f.Z)(this._joined);try{for(i.s();!(n=i.n()).done;){var s=n.value;s.setIndex(this.getIndex());var a=s._readAttribute(e,t);if(void 0!==a)return a}}catch(u){i.e(u)}finally{i.f()}}},{key:"readAttributes",value:function(){var e,t=this._readAttributes(),r=(0,f.Z)(this._joined);try{for(r.s();!(e=r.n()).done;){var n=e.value;n.setIndex(this.getIndex());for(var i=n._readAttributes(),s=0,a=Object.keys(i);s<a.length;s++){var u=a[s];t[u]=i[u]}}}catch(o){r.e(o)}finally{r.f()}return t}},{key:"joinAttributes",value:function(e){this._joined.push(e)}},{key:"readArcadeFeature",value:function(){return this}},{key:"geometry",value:function(){var e=this.readHydratedGeometry(),t=(0,_.n)(e,this.geometryType,this.hasZ,this.hasM),r=(0,m.d)(t);return r&&(r.spatialReference=this._arcadeSpatialReference),r}},{key:"field",value:function(e){if(this.hasField(e))return this.readAttribute(e,!0);var t,r=(0,f.Z)(this._joined);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(n.setIndex(this.getIndex()),n.hasField(e))return n._readAttribute(e,!0)}}catch(i){r.e(i)}finally{r.f()}throw new Error("Field ".concat(e," does not exist"))}},{key:"setField",value:function(e,t){throw new Error("Unable to update feature attribute values, feature is readonly")}},{key:"keys",value:function(){return this.getFieldNames()}},{key:"castToText",value:function(){return JSON.stringify(this.readLegacyFeature())}},{key:"gdbVersion",value:function(){return null}},{key:"fullSchema",value:function(){return this._layerSchema}},{key:"castAsJson",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return{attributes:this._readAttributes(),geometry:!0===(null===e||void 0===e?void 0:e.keepGeometryType)?this.geometry():this.geometry().toJSON()}}},{key:"castAsJsonAsync",value:function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return Promise.resolve(this.castAsJson(e))}},{key:"removeIds",value:function(e){if((0,v.t)(this._objectIdToIndex)){for(var t=new Map,r=this.getCursor();r.next();)t.set(r.getObjectId(),r.getIndex());this._objectIdToIndex=t}var n,i=this._objectIdToIndex,s=(0,f.Z)(e);try{for(s.s();!(n=s.n()).done;){var a=n.value;i.has(a)&&this.removeAtIndex(i.get(a))}}catch(u){s.e(u)}finally{s.f()}}},{key:"removeAtIndex",value:function(e){(0,v.t)(this._deleted)&&(this._deleted=C.create(this.getSize())),this._deleted.set(e)}},{key:"readGeometryForDisplay",value:function(){return this.readUnquantizedGeometry(!0)}},{key:"readLegacyGeometryForDisplay",value:function(){return this.readLegacyGeometry(!0)}},{key:"features",value:(0,c.Z)().mark((function e(){var t;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.getCursor();case 1:if(!t.next()){e.next=6;break}return e.next=4,t.readOptimizedFeature();case 4:e.next=1;break;case 6:case"end":return e.stop()}}),e,this)}))},{key:"_getExists",value:function(){return(0,v.t)(this._deleted)||!this._deleted.has(this.getIndex())}},{key:"_computeCentroid",value:function(){if("esriGeometryPolygon"!==this.geometryType)return null;var e=this.readUnquantizedGeometry();if(!e||e.hasIndeterminateRingOrder)return null;var t=(0,v.n)(this.getQuantizationTransform(),null);return(0,g.e)(new p.t,e,this.hasM,this.hasZ,t)}},{key:"copyInto",value:function(e){e.seen=this.seen,e._storage=this._storage,e._arcadeSpatialReference=this._arcadeSpatialReference,e._joined=this._joined,e._tx=this._tx,e._ty=this._ty,e._sx=this._sx,e._sy=this._sy,e._deleted=this._deleted,e._objectIdToIndex=this._objectIdToIndex}}],[{key:"createInstance",value:function(){return w=++w>65535?0:w}}]),e}();var j=function(e){(0,l.Z)(r,e);var t=(0,h.Z)(r);function r(e,n,i){var s;return(0,d.Z)(this,r),(s=t.call(this,e,i))._featureIndex=-1,s._dateFields=new Set,s._geometryType=null===i||void 0===i?void 0:i.geometryType,s._features=n,s}return(0,y.Z)(r,[{key:"_current",get:function(){return this._features[this._featureIndex]}},{key:"geometryType",get:function(){return this._geometryType}},{key:"hasFeatures",get:function(){return!!this._features.length}},{key:"hasNext",get:function(){return this._featureIndex+1<this._features.length}},{key:"exceededTransferLimit",get:function(){return this._exceededTransferLimit}},{key:"hasZ",get:function(){return!1}},{key:"hasM",get:function(){return!1}},{key:"removeIds",value:function(e){var t=new Set(e);this._features=this._features.filter((function(e){return!t.has(e.objectId)}))}},{key:"append",value:function(e){var t,r=(0,f.Z)(e);try{for(r.s();!(t=r.n()).done;){var n=t.value;this._features.push(n)}}catch(i){r.e(i)}finally{r.f()}}},{key:"getSize",value:function(){return this._features.length}},{key:"getCursor",value:function(){return this.copy()}},{key:"getQuantizationTransform",value:function(){return this._transform}},{key:"getAttributeHash",value:function(){var e="";for(var t in this._current.attributes)e+=this._current.attributes[t];return e}},{key:"getIndex",value:function(){return this._featureIndex}},{key:"setIndex",value:function(e){this._featureIndex=e}},{key:"getObjectId",value:function(){return this._current.objectId}},{key:"getDisplayId",value:function(){return this._current.displayId}},{key:"setDisplayId",value:function(e){this._current.displayId=e}},{key:"getGroupId",value:function(){return this._current.groupId}},{key:"setGroupId",value:function(e){this._current.groupId=e}},{key:"copy",value:function(){var e=new r(this.instance,this._features,this.fullSchema());return this.copyInto(e),e}},{key:"next",value:function(){for(;++this._featureIndex<this._features.length&&!this._getExists(););return this._featureIndex<this._features.length}},{key:"readLegacyFeature",value:function(){return(0,_.e)(this._current,this.geometryType,this.hasZ,this.hasM)}},{key:"readOptimizedFeature",value:function(){return this._current}},{key:"readLegacyPointGeometry",value:function(){return this.readGeometry()?{x:this.getX(),y:this.getY()}:null}},{key:"readLegacyGeometry",value:function(){var e=this.readGeometry();return(0,_.n)(e,this.geometryType,this.hasZ,this.hasM)}},{key:"readLegacyCentroid",value:function(){var e=this.readCentroid();return(0,v.t)(e)?null:{x:e.coords[0]*this._sx+this._tx,y:e.coords[1]*this._sy+this._ty}}},{key:"readGeometryArea",value:function(){return(0,p.e)(this._current)?(0,_.a)(this._current.geometry,2):0}},{key:"readUnquantizedGeometry",value:function(){var e=this.readGeometry();if("esriGeometryPoint"===this.geometryType||!e)return e;var t=e.clone();return function(e){var t,r=e.coords,n=e.lengths,i=0,s=(0,f.Z)(n);try{for(s.s();!(t=s.n()).done;){for(var a=t.value,u=1;u<a;u++)r[2*(i+u)]+=r[2*(i+u)-2],r[2*(i+u)+1]+=r[2*(i+u)-1];i+=a}}catch(o){s.e(o)}finally{s.f()}}(t),t}},{key:"readHydratedGeometry",value:function(){var e=this._current.geometry;if((0,v.t)(e))return null;var t=e.clone();return(0,v.r)(this._transform)&&(0,_.m)(t,t,this.hasZ,this.hasM,this._transform),t}},{key:"getXHydrated",value:function(){if(!(0,p.e)(this._current))return 0;var e=this._current.geometry.coords[0],t=this.getQuantizationTransform();return(0,v.t)(t)?e:e*t.scale[0]+t.translate[0]}},{key:"getYHydrated",value:function(){if(!(0,p.e)(this._current))return 0;var e=this._current.geometry.coords[1],t=this.getQuantizationTransform();return(0,v.t)(t)?e:t.translate[1]-e*t.scale[1]}},{key:"getX",value:function(){return(0,p.e)(this._current)?this._current.geometry.coords[0]*this._sx+this._tx:0}},{key:"getY",value:function(){return(0,p.e)(this._current)?this._current.geometry.coords[1]*this._sy+this._ty:0}},{key:"readGeometry",value:function(){if(!(0,p.e)(this._current))return null;var e=this._current.geometry.clone();if(e.isPoint)return e.coords[0]=e.coords[0]*this._sx+this._tx,e.coords[1]=e.coords[1]*this._sy+this._ty,e;var t,r=0,n=(0,f.Z)(e.lengths);try{for(n.s();!(t=n.n()).done;){var i=t.value;e.coords[2*r]=e.coords[2*r]*this._sx+this._tx,e.coords[2*r+1]=e.coords[2*r+1]*this._sy+this._ty,r+=i}}catch(s){n.e(s)}finally{n.f()}return e}},{key:"readCentroid",value:function(){if(!(0,p.e)(this._current))return null;if((0,v.t)(this._current.centroid)){var e=this._computeCentroid();if((0,v.t)(e))return null;e.coords[0]=(e.coords[0]-this._tx)/this._sx,e.coords[1]=(e.coords[1]-this._ty)/this._sy,this._current.centroid=e}var t=this._current.centroid.clone();return t.coords[0]=t.coords[0]*this._sx+this._tx,t.coords[1]=t.coords[1]*this._sx+this._ty,t}},{key:"hasField",value:function(e){return e in this._current.attributes||this.getFieldNames().map((function(e){return e.toLowerCase()})).includes(e.toLowerCase())}},{key:"getFieldNames",value:function(){return Object.keys(this._current.attributes)}},{key:"_readAttribute",value:function(e,t){var r=this._current.attributes[e];if(void 0!==r)return null!=r&&t&&this._dateFields.has(e)?new Date(r):r;var n=this.readAttributes(),i=e.toLocaleLowerCase().trim();for(var s in n)if(s.toLocaleLowerCase().trim()===i){var a=this._current.attributes[s];return null!=a&&t&&this._dateFields.has(s)?new Date(a):a}}},{key:"copyInto",value:function(e){(0,u.Z)((0,o.Z)(r.prototype),"copyInto",this).call(this,e),e._featureIndex=this._featureIndex,e._transform=this._transform,e._dateFields=this._dateFields}},{key:"_readAttributes",value:function(){return this._current.attributes}}],[{key:"fromFeatures",value:function(e,t){for(var n=t.objectIdField,i=t.geometryType,s=(0,_.W)([],e,i,!1,!1,n),a=0;a<s.length;a++)s[a].displayId=e[a].displayId;return r.fromOptimizedFeatures(s,t)}},{key:"fromFeatureSet",value:function(e,t){var n=(0,_.c)(e,t.objectIdField);return r.fromOptimizedFeatureSet(n,t)}},{key:"fromOptimizedFeatureSet",value:function(e,t){var n=e.features,i=r.fromOptimizedFeatures(n,t);i._exceededTransferLimit=e.exceededTransferLimit,i._transform=e.transform;var s,a=(0,f.Z)(e.fields);try{for(a.s();!(s=a.n()).done;){var u=s.value;"esriFieldTypeDate"===u.type&&i._dateFields.add(u.name)}}catch(o){a.e(o)}finally{a.f()}return i}},{key:"fromOptimizedFeatures",value:function(e,t,n){var i=new r(L.createInstance(),e,t);return i._transform=n,i}}]),r}(L),P=k.s.getLogger("esri.views.layers.2d.features.support.AttributeStore"),H=(0,A.a)(A.l,P),Y={sharedArrayBuffer:(0,v.a)("esri-shared-array-buffer"),atomics:(0,v.a)("esri-atomics")};function V(e,t){return function(r){return t(e(r))}}var J=function(){function e(t,r,n,i){(0,d.Z)(this,e),this.size=0,this.texelSize=4;var s=i.pixelType,a=i.layout,u=i.textureOnly;this.textureOnly=u||!1,this.pixelType=s,this._ctype=r,this.layout=a,this._resetRange(),this._shared=t,this.size=n,u||(this.data=this._initData(s,n,t,r))}return(0,y.Z)(e,[{key:"buffer",get:function(){return(0,v.h)(this.data,(function(e){return e.buffer}))}},{key:"unsetComponentAllTexels",value:function(e,t){for(var r=(0,v.e)(this.data),n=0;n<this.size*this.size;n++)r[n*this.texelSize+e]&=~t;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}},{key:"setComponentAllTexels",value:function(e,t){for(var r=(0,v.e)(this.data),n=0;n<this.size*this.size;n++)r[n*this.texelSize+e]|=255&t;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}},{key:"setComponent",value:function(e,t,r){var n,i=(0,v.e)(this.data),s=(0,f.Z)(r);try{for(s.s();!(n=s.n()).done;){var a=n.value;i[a*this.texelSize+e]|=t,this.dirtyStart=Math.min(this.dirtyStart,a),this.dirtyEnd=Math.max(this.dirtyEnd,a)}}catch(u){s.e(u)}finally{s.f()}}},{key:"setComponentTexel",value:function(e,t,r){(0,v.e)(this.data)[r*this.texelSize+e]|=t,this.dirtyStart=Math.min(this.dirtyStart,r),this.dirtyEnd=Math.max(this.dirtyEnd,r)}},{key:"unsetComponentTexel",value:function(e,t,r){(0,v.e)(this.data)[r*this.texelSize+e]&=~t,this.dirtyStart=Math.min(this.dirtyStart,r),this.dirtyEnd=Math.max(this.dirtyEnd,r)}},{key:"getData",value:function(e,t){var r=(0,A.f)(e);return(0,v.e)(this.data)[r*this.texelSize+t]}},{key:"setData",value:function(e,t,r){var n=(0,A.f)(e),i=1<<t;0!=(this.layout&i)?(this.data[n*this.texelSize+t]=r,this.dirtyStart=Math.min(this.dirtyStart,n),this.dirtyEnd=Math.max(this.dirtyEnd,n)):P.error("mapview-attributes-store","Tried to set a value for a texel's readonly component")}},{key:"lock",value:function(){this.pixelType===T.G.UNSIGNED_BYTE&&this._shared&&Y.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,1)}},{key:"unlock",value:function(){this.pixelType===T.G.UNSIGNED_BYTE&&this._shared&&Y.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,0)}},{key:"expand",value:function(e){if(this.size=e,!this.textureOnly){var t=this._initData(this.pixelType,e,this._shared,this._ctype),r=(0,v.e)(this.data);t.set(r),this.data=t}}},{key:"toMessage",value:function(){var e=this.dirtyStart,t=this.dirtyEnd,r=this.texelSize;if(e>t)return null;this._resetRange();var n=!(this._shared||"local"===this._ctype),i=this.pixelType,s=this.layout,a=(0,v.e)(this.data);return{start:e,end:t,data:n&&a.slice(e*r,(t+1)*r)||null,pixelType:i,layout:s}}},{key:"_initData",value:function(e,t,r,n){for(var i=r&&"local"!==n?SharedArrayBuffer:ArrayBuffer,s=(0,z.m)(e),a=new s(new i(t*t*4*s.BYTES_PER_ELEMENT)),u=0;u<a.length;u+=4)a[u+1]=255;return a}},{key:"_resetRange",value:function(){this.dirtyStart=2147483647,this.dirtyEnd=0}}]),e}(),X=function(){function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};(0,d.Z)(this,e),this._client=t,this.config=r,this._notifyChange=n,this._attributeComputeMap=new Map,this._blocks=new Array,this._filters=new Array(S.S),this._targetType=0,this._abortController=new AbortController,this._hasScaleExpr=!1,this._size=32,this._idsToHighlight=new Set;var i=r.supportsTextureFloat?T.G.FLOAT:T.G.UNSIGNED_BYTE;H("Creating AttributeStore ".concat(Y.sharedArrayBuffer?"with":"without"," shared memory")),this._blockDescriptors=[{pixelType:T.G.UNSIGNED_BYTE,layout:1},{pixelType:T.G.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:T.G.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:i,layout:15},{pixelType:i,layout:15},{pixelType:i,layout:15},{pixelType:i,layout:15}],this._blocks=this._blockDescriptors.map((function(){return null}))}return(0,y.Z)(e,[{key:"destroy",value:function(){this._abortController.abort()}},{key:"hasScaleExpr",get:function(){return this._hasScaleExpr}},{key:"_signal",get:function(){return this._abortController.signal}},{key:"hasHighlight",get:function(){return this._idsToHighlight.size>0}},{key:"isUpdating",value:function(){return!!this._currUpdate||!!this._nextUpdate}},{key:"update",value:function(e,t){this.config=t;var r=t.schema.processors[0].storage,n=(0,b.m)(this._schema,r);if((e.targets.feature||e.targets.aggregate)&&(e.storage.data=!0),n&&((0,v.a)("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:",n),e.storage.data=!0,this._schema=r,this._attributeComputeMap.clear(),!(0,v.t)(r))){switch(r.target){case"feature":this._targetType=A.u;break;case"aggregate":this._targetType=A.c}if("subtype"===r.type)for(var i in r.mapping){var s=r.mapping[i];if((0,v.r)(s)&&(0,v.r)(s.vvMapping)){var a,u=(0,f.Z)(s.vvMapping);try{for(u.s();!(a=u.n()).done;){var o=a.value;this._bindAttribute(o)}}catch(p){u.e(p)}finally{u.f()}}}else{if((0,v.r)(r.vvMapping)){var l,h=(0,f.Z)(r.vvMapping);try{for(h.s();!(l=h.n()).done;){var c=l.value;this._bindAttribute(c)}}catch(p){h.e(p)}finally{h.f()}}if((0,v.r)(r.attributeMapping)){var d,y=(0,f.Z)(r.attributeMapping);try{for(y.s();!(d=y.n()).done;){var _=d.value;this._bindAttribute(_)}}catch(p){y.e(p)}finally{y.f()}}}}}},{key:"onTileData",value:function(e,t){if(!(0,v.t)(t.addOrUpdate))for(var r=t.addOrUpdate.getCursor();r.next();){var n=r.getDisplayId();this.setAttributeData(n,r)}}},{key:"invalidateResources",value:function(){this._createResourcesPromise=null,this._abortController.abort(),this._abortController=new AbortController}},{key:"setHighlight",value:function(){var e=(0,a.Z)((0,c.Z)().mark((function e(t,r){var n,i,s,a,u;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:1,n=this._getBlock(0),i=r.map((function(e){return(0,A.f)(e)})),n.lock(),n.unsetComponentAllTexels(0,1),n.setComponent(0,1,i),n.unlock(),this._idsToHighlight.clear(),s=(0,f.Z)(t);try{for(s.s();!(a=s.n()).done;)u=a.value,this._idsToHighlight.add(u)}catch(o){s.e(o)}finally{s.f()}return e.next=6,this.sendUpdates();case 6:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"updateFilters",value:function(){var e=(0,a.Z)((0,c.Z)().mark((function e(t,r,n){var i,s,a,u,o=this;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.service,s=n.spatialReference,a=r.filters,u=a.map((function(e,t){return o._updateFilter(e,t,i,s)})),e.next=3,Promise.all(u);case 3:if(e.t0=e.sent.some((function(e){return e})),!e.t0){e.next=6;break}t.storage.filters=!0,(0,v.a)("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:","Filters changed");case 6:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"setData",value:function(e,t,r,n){var i=(0,A.f)(e);this._ensureSizeForTexel(i),this._getBlock(t).setData(e,r,n)}},{key:"getData",value:function(e,t,r){return this._getBlock(t).getData(e,r)}},{key:"getHighlightFlag",value:function(e){return this._idsToHighlight.has(e)?S.T:0}},{key:"unsetAttributeData",value:function(e){var t=(0,A.f)(e);this._getBlock(0).setData(t,0,0)}},{key:"setAttributeData",value:function(e,t){var r=this,n=(0,A.f)(e);if(this._ensureSizeForTexel(n),this._getBlock(0).setData(n,0,this.getFilterFlags(t)),this._targetType===(0,A.e)(e)){var i=this._attributeComputeMap,s=this.config.supportsTextureFloat?1:2;i.size&&i.forEach((function(e,i){var a=i*s%4,u=Math.floor(i*s/4),o=r._getBlock(u+S.P),l=e(t);if(r.config.supportsTextureFloat)o.setData(n,a,l);else if(l===S.c)o.setData(n,a,255),o.setData(n,a+1,255);else{var h=(0,x.o)(Math.round(l),-32767,32766)+32768,c=255&h,f=(65280&h)>>8;o.setData(n,a,c),o.setData(n,a+1,f)}}))}}},{key:"sendUpdates",value:function(){var e=this;if((0,v.a)("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate"),this._notifyChange(),this._nextUpdate)return this._nextUpdate.promise;if(this._currUpdate)return this._nextUpdate=(0,k.ap)(),this._nextUpdate.promise;var t={blocks:this._blocks.map((function(e){return(0,v.r)(e)?e.toMessage():null}))};return this._currUpdate=this._createResources().then((function(){var r=function(){if(e._currUpdate=null,e._nextUpdate){var t=e._nextUpdate;e._nextUpdate=null,e.sendUpdates().then((function(){return t.resolve()}))}else(0,v.a)("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate::No additional updates queued");e._notifyChange()};(0,v.a)("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate::client.update");var n=e._client.update(t,e._signal).then(r).catch(r);return e._client.render(e._signal),n})).catch((function(t){if((0,k.u)(t))return e._createResourcesPromise=null,e._createResources();e._notifyChange(),P.error(new k.a("mapview-attribute-store","Encountered an error during client update",t))})),this._currUpdate}},{key:"_ensureSizeForTexel",value:function(e){for(;e>=this._size*this._size;)if(this._expand())return}},{key:"_bindAttribute",value:function(e){var t;if(null!=e.fieldIndex)e.normalizationField&&P.warn("mapview-arcade","Ignoring normalizationField specified with an arcade expression which is not supported."),t=function(t){return t.getComputedNumericAtIndex(e.fieldIndex)};else{if(!e.field)return;t=e.normalizationField?function(t){var r=t.readAttribute(e.normalizationField);return r?t.readAttribute(e.field)/r:null}:function(t){return t.readAttribute(e.field)}}e.valueRepresentation&&(t=V(t,(function(t){return(0,A.r)(t,e.valueRepresentation)})));this._attributeComputeMap.set(e.binding,V(t,(function(e){return null===e||isNaN(e)||e===1/0?S.c:e})))}},{key:"_createResources",value:function(){var e=this;if((0,v.r)(this._createResourcesPromise))return this._createResourcesPromise;this._getBlock(S.N),this._getBlock(S.O),H("Initializing AttributeStore");var t={shared:Y.sharedArrayBuffer&&!("local"===this._client.type),size:this._size,blocks:(0,v.a2)(this._blocks,(function(e){return{textureOnly:e.textureOnly,buffer:e.buffer,pixelType:e.pixelType}}))},r=this._client.initialize(t,this._signal).catch((function(t){(0,k.u)(t)?e._createResourcesPromise=null:P.error(new k.a("mapview-attribute-store","Encountered an error during client initialization",t))}));return this._createResourcesPromise=r,r.then((function(){return(0,v.t)(e._createResourcesPromise)?e._createResources():void 0})),r}},{key:"_getBlock",value:function(e){var t=this._blocks[e];if((0,v.r)(t))return t;H("Initializing AttributeBlock at index ".concat(e));var r=Y.sharedArrayBuffer,n=this._client.type,i=new J(r,n,this._size,this._blockDescriptors[e]);return this._blocks[e]=i,this._createResourcesPromise=null,i}},{key:"_expand",value:function(){if(this._size<this.config.maxTextureSize){var e=this._size<<=1;return H("Expanding block size to",e,this._blocks),(0,v.a3)(this._blocks,(function(t){return t.expand(e)})),this._createResourcesPromise=null,this._size=e,0}return P.error(new k.a("mapview-limitations","Maximum number of onscreen features exceeded.")),-1}},{key:"_updateFilter",value:function(){var e=(0,a.Z)((0,c.Z)().mark((function e(t,r,n,i){var s,a,u,o,l;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=this._filters[r],a=(0,v.r)(s)&&s.hash,s||t){e.next=3;break}return e.abrupt("return",!1);case 3:if(a!==JSON.stringify(t)){e.next=5;break}return e.abrupt("return",!1);case 5:if(!(0,v.t)(t)){e.next=10;break}if(s){e.next=8;break}return e.abrupt("return",!1);case 8:return u=1<<r+1,o=this._getBlock(0),e.abrupt("return",(this._filters[r]=null,o.setComponentAllTexels(0,u),this.sendUpdates(),!0));case 10:return e.next=12,this._getFilter(r,n);case 12:return l=e.sent,e.next=15,l.update(t,i);case 15:return e.abrupt("return",!0);case 16:case"end":return e.stop()}}),e,this)})));return function(t,r,n,i){return e.apply(this,arguments)}}()},{key:"_getFilter",value:function(){var e=(0,a.Z)((0,c.Z)().mark((function e(t,n){var i,s,a,u;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=this._filters[t],!(0,v.r)(i)){e.next=3;break}return e.abrupt("return",i);case 3:return e.next=5,Promise.all([r.e(2485),r.e(2415)]).then(r.bind(r,22415));case 5:return s=e.sent,a=s.default,u=new a({geometryType:n.geometryType,hasM:!1,hasZ:!1,timeInfo:n.timeInfo,fieldsIndex:new I.d(n.fields)}),e.abrupt("return",(this._filters[t]=u,u));case 9:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"isVisible",value:function(e){return!!(2&this._getBlock(0).getData(e,0))}},{key:"getFilterFlags",value:function(e){for(var t=0,r=(0,A.i)(e.getDisplayId()),n=0;n<this._filters.length;n++){var i=!!(r&1<<n),s=this._filters[n];t|=(!i||(0,v.t)(s)||s.check(e)?1:0)<<n}var a=0;if(this._idsToHighlight.size){var u=e.getObjectId();a=this.getHighlightFlag(u)}return t<<1|a}}]),e}(),q=function(){function e(){(0,d.Z)(this,e),this._freeIds=[],this._idCounter=1}return(0,y.Z)(e,[{key:"createId",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(0,A.s)(this._getFreeId(),e)}},{key:"releaseId",value:function(e){this._freeIds.push(e)}},{key:"_getFreeId",value:function(){return this._freeIds.length?this._freeIds.pop():this._idCounter++}}]),e}();function Q(e,t,r){if(!(e.length>t))for(;e.length<=t;)e.push(r)}var W=function(){function e(){(0,d.Z)(this,e),this._numerics=[],this._strings=[],this._idGenerator=new q,this._allocatedSize=256,this._bitsets=[],this._instanceIds=[],this._bounds=[]}return(0,y.Z)(e,[{key:"createBitset",value:function(){var e=this._bitsets.length;return this._bitsets.push(C.create(this._allocatedSize,A.n)),e+1}},{key:"getBitset",value:function(e){return this._bitsets[e-1]}},{key:"_expand",value:function(){this._allocatedSize<<=1;var e,t=(0,f.Z)(this._bitsets);try{for(t.s();!(e=t.n()).done;){e.value.resize(this._allocatedSize)}}catch(r){t.e(r)}finally{t.f()}}},{key:"_ensureNumeric",value:function(e,t){this._numerics[e]||(this._numerics[e]=[]),Q(this._numerics[e],t,0)}},{key:"_ensureInstanceId",value:function(e){Q(this._instanceIds,e,0)}},{key:"_ensureString",value:function(e,t){this._strings[e]||(this._strings[e]=[]),Q(this._strings[e],t,null)}},{key:"createDisplayId",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this._idGenerator.createId();return t>this._allocatedSize&&this._expand(),(0,A.s)(t,e)}},{key:"releaseDisplayId",value:function(e){var t,r=(0,f.Z)(this._bitsets);try{for(r.s();!(t=r.n()).done;){t.value.unset(e)}}catch(n){r.e(n)}finally{r.f()}return this._idGenerator.releaseId(e&A.n)}},{key:"getComputedNumeric",value:function(e,t){return this.getComputedNumericAtIndex(e&A.n,0)}},{key:"setComputedNumeric",value:function(e,t,r){return this.setComputedNumericAtIndex(e&A.n,r,0)}},{key:"getComputedString",value:function(e,t){return this.getComputedStringAtIndex(e&A.n,0)}},{key:"setComputedString",value:function(e,t,r){return this.setComputedStringAtIndex(e&A.n,0,r)}},{key:"getComputedNumericAtIndex",value:function(e,t){var r=e&A.n;return this._ensureNumeric(t,r),this._numerics[t][r]}},{key:"setComputedNumericAtIndex",value:function(e,t,r){var n=e&A.n;this._ensureNumeric(t,n),this._numerics[t][n]=r}},{key:"getInstanceId",value:function(e){var t=e&A.n;return this._ensureInstanceId(t),this._instanceIds[t]}},{key:"setInstanceId",value:function(e,t){var r=e&A.n;this._ensureInstanceId(r),this._instanceIds[r]=t}},{key:"getComputedStringAtIndex",value:function(e,t){var r=e&A.n;return this._ensureString(t,r),this._strings[t][r]}},{key:"setComputedStringAtIndex",value:function(e,t,r){var n=e&A.n;this._ensureString(t,n),this._strings[t][n]=r}},{key:"getXMin",value:function(e){return this._bounds[4*(e&A.n)]}},{key:"getYMin",value:function(e){return this._bounds[4*(e&A.n)+1]}},{key:"getXMax",value:function(e){return this._bounds[4*(e&A.n)+2]}},{key:"getYMax",value:function(e){return this._bounds[4*(e&A.n)+3]}},{key:"setBounds",value:function(e,t){var r=t.readHydratedGeometry();if(!r||!r.coords.length)return!1;var n=1/0,i=1/0,s=-1/0,a=-1/0;r.forEachVertex((function(e,t){n=Math.min(n,e),i=Math.min(i,t),s=Math.max(s,e),a=Math.max(a,t)}));var u=e&A.n;return Q(this._bounds,4*u+4,0),this._bounds[4*u]=n,this._bounds[4*u+1]=i,this._bounds[4*u+2]=s,this._bounds[4*u+3]=a,!0}}]),e}()},433:function(e,t,r){r.d(t,{a:function(){return m},c:function(){return d},e:function(){return y},f:function(){return v},i:function(){return _},l:function(){return k},m:function(){return A},n:function(){return h},p:function(){return p},r:function(){return x},s:function(){return g},u:function(){return f}});var n=r(1413),i=r(37762),s=r(75610),a=r(78880),u=r(28329),o=r(45578),l=r(101),h=8388607,c=8388608,f=0,d=1,y=function(e){return(e&c)>>>23},v=function(e){return e&h},_=function(e){return y(e)===d?254:255};function p(e){return y(e)===d}function g(e,t){return((t?c:0)|e)>>>0}var m=function(e,t){return e&&function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.warn.apply(t,["DEBUG:"].concat(r))}||function(){return null}},k=!1;function x(e,t){if(!e||!t)return e;switch(t){case"radius":case"distance":return 2*e;case"diameter":case"width":return e;case"area":return Math.sqrt(e)}return e}function b(e){return e.map((function(e){return function(e){return{value:e.value,size:(0,a.o)(e.size)}}(e)}))}function I(e){if("string"==typeof e||"number"==typeof e)return(0,a.o)(e);var t=e;return{type:"size",expression:t.expression,stops:b(t.stops)}}var S=function(e){for(var t=[],r=[],n=b(e),i=n.length,s=0;s<6;s++){var u=n[Math.min(s,i-1)];t.push(u.value),r.push(null==u.size?o.c:(0,a.u)(u.size))}return{values:new Float32Array(t),sizes:new Float32Array(r)}};function A(e){var t=e&&e.length>0?{}:null,r=t?{}:null;if(!t)return{vvFields:t,vvRanges:r};var s,a=(0,i.Z)(e);try{for(a.s();!(s=a.n()).done;){var o=s.value;if(o.field&&(t[o.type]=o.field),"size"===o.type){r.size||(r.size={});var h=o;switch((0,l.o)(h)){case u.A.SIZE_MINMAX_VALUE:r.size.minMaxValue={minDataValue:h.minDataValue,maxDataValue:h.maxDataValue,minSize:I(h.minSize),maxSize:I(h.maxSize)};break;case u.A.SIZE_SCALE_STOPS:r.size.scaleStops={stops:b(h.stops)};break;case u.A.SIZE_FIELD_STOPS:if(h.levels){var c={};for(var f in h.levels)c[f]=S(h.levels[f]);r.size.fieldStops={type:"level-dependent",levels:c}}else r.size.fieldStops=(0,n.Z)({type:"static"},S(h.stops));break;case u.A.SIZE_UNIT_VALUE:r.size.unitValue={unit:h.valueUnit,valueRepresentation:h.valueRepresentation}}}else if("color"===o.type)r.color=C(o);else if("opacity"===o.type)r.opacity=z(o);else if("rotation"===o.type){var d=o;r.rotation={type:d.rotationType}}}}catch(y){a.e(y)}finally{a.f()}return{vvFields:t,vvRanges:r}}function z(e){var t={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if("string"==typeof e.field){if(!e.stops)return null;if(e.stops.length>8)return null;for(var r=e.stops,n=0;n<8;++n){var i=r[Math.min(n,r.length-1)];t.values[n]=i.value,t.opacities[n]=i.opacity}}else{if(!(e.stops&&e.stops.length>=0))return null;for(var s=e.stops&&e.stops.length>=0&&e.stops[0].opacity,a=0;a<8;a++)t.values[a]=1/0,t.opacities[a]=s}return t}function T(e,t,r){e[4*t+0]=r.r/255,e[4*t+1]=r.g/255,e[4*t+2]=r.b/255,e[4*t+3]=r.a}function C(e){if((0,s.t)(e))return null;if(e.normalizationField)return null;var t={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};if("string"==typeof e.field){if(!e.stops)return null;if(e.stops.length>8)return null;t.field=e.field;for(var r=e.stops,n=0;n<8;++n){var i=r[Math.min(n,r.length-1)];t.values[n]=i.value,T(t.colors,n,i.color)}}else{if(!(e.stops&&e.stops.length>=0))return null;for(var a=e.stops&&e.stops.length>=0&&e.stops[0].color,o=0;o<8;o++)t.values[o]=1/0,T(t.colors,o,a)}for(var l=0;l<32;l+=4)(0,u.i)(t.colors,l,!0);return t}}}]);
//# sourceMappingURL=2495.43800067.chunk.js.map