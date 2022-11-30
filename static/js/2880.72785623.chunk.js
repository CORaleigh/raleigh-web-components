"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[2880],{82880:function(e,t,r){r.r(t);var i,n=r(1413),a=r(97326),o=r(37762),l=r(29439),s=r(60136),u=r(29388),c=r(74165),d=r(15861),f=r(15671),p=r(43144),v=r(48848),y=r(40558),m=r(93314),h=r(93661),g=r(99795),w=r(50690),x=r(82474),S=r(46817),M=r(45999),I=r(83762),b=r(61903),L=r(24623),T=r(6379),k=r(23341),P=r(41820),E=r(3356),C=r(40114),O=r(47855),R=r(40591),Z=r(73588),F=(r(37856),r(15751),r(74384),r(92072),r(93116),r(65094),r(33795),r(48200),r(79557),r(71802),r(12953),r(89181),r(46337),r(15529),r(59984),r(85253),r(59389),r(21015),r(75255),r(25456),function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.lods.length-1;(0,f.Z)(this,e),this.tileInfo=t,this.minLOD=r,this.maxLOD=i}return(0,p.Z)(e,[{key:"getAvailability",value:function(e,t,r){var i,n=null===(i=this.tileInfo)||void 0===i?void 0:i.lodAt(e);return!n||e<this.minLOD||e>this.maxLOD?"unavailable":n.cols&&n.rows?r>=n.cols[0]&&r<=n.cols[1]&&t>=n.rows[0]&&t<=n.rows[1]?"available":"unavailable":"available"}},{key:"fetchAvailability",value:function(){var e=(0,d.Z)((0,c.Z)().mark((function e(t,r,i,n){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,v._)(n);case 2:return e.abrupt("return",this.getAvailability(t,r,i));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r,i,n){return e.apply(this,arguments)}}()},{key:"fetchAvailabilityUpsample",value:function(){var e=(0,d.Z)((0,c.Z)().mark((function e(t,r,i,n,a){var o,l;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,v._)(a);case 2:n.level=t,n.row=r,n.col=i,(o=this.tileInfo).updateTileInfo(n);case 7:if("unavailable"===(l=this.getAvailability(n.level,n.row,n.col))){e.next=10;break}return e.abrupt("return",l);case 10:if(o.upsampleTile(n)){e.next=12;break}return e.abrupt("return","unavailable");case 12:e.next=7;break;case 14:case"end":return e.stop()}}),e,this)})));return function(t,r,i,n,a){return e.apply(this,arguments)}}()}]),e}()),_=i=function(e){(0,s.Z)(r,e);var t=(0,u.Z)(r);function r(e){var i;return(0,f.Z)(this,r),(i=t.call(this,e)).fullExtent=null,i.id=null,i.tileInfo=null,i}return(0,p.Z)(r,[{key:"clone",value:function(){var e=new i;return this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("tileInfo")&&(e.tileInfo=this.tileInfo&&this.tileInfo.clone()),e}}]),r}(C.l);(0,v.e)([(0,v.y)({type:S.w,json:{read:{source:"fullExtent"}}})],_.prototype,"fullExtent",void 0),(0,v.e)([(0,v.y)({type:String,json:{read:{source:"id"}}})],_.prototype,"id",void 0),(0,v.e)([(0,v.y)({type:E.j,json:{read:{source:"tileInfo"}}})],_.prototype,"tileInfo",void 0);var U,j=_=i=(0,v.e)([(0,v.n)("esri.layer.support.TileMatrixSet")],_),A=U=function(e){(0,s.Z)(r,e);var t=(0,u.Z)(r);function r(e){var i;return(0,f.Z)(this,r),(i=t.call(this,e)).id=null,i.title=null,i.description=null,i.legendUrl=null,i}return(0,p.Z)(r,[{key:"clone",value:function(){var e=new U;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("isDefault")&&(e.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(e.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(e.title=this.title),e}}]),r}(C.l);(0,v.e)([(0,v.y)({json:{read:{source:"id"}}})],A.prototype,"id",void 0),(0,v.e)([(0,v.y)({json:{read:{source:"title"}}})],A.prototype,"title",void 0),(0,v.e)([(0,v.y)({json:{read:{source:"abstract"}}})],A.prototype,"description",void 0),(0,v.e)([(0,v.y)({json:{read:{source:"legendUrl"}}})],A.prototype,"legendUrl",void 0),(0,v.e)([(0,v.y)({json:{read:{source:"isDefault"}}})],A.prototype,"isDefault",void 0),(0,v.e)([(0,v.y)({json:{read:{source:"keywords"}}})],A.prototype,"keywords",void 0);var V,N=A=U=(0,v.e)([(0,v.n)("esri.layer.support.WMTSStyle")],A),D=V=function(e){(0,s.Z)(r,e);var t=(0,u.Z)(r);function r(e){var i;return(0,f.Z)(this,r),(i=t.call(this,e)).fullExtent=null,i.fullExtents=null,i.imageFormats=null,i.id=null,i.layer=null,i.styles=null,i.tileMatrixSetId=null,i.tileMatrixSets=null,i}return(0,p.Z)(r,[{key:"description",get:function(){return this._get("description")},set:function(e){this._set("description",e)}},{key:"readFullExtent",value:function(e,t){return(e=t.fullExtent)?S.w.fromJSON(e):null}},{key:"readFullExtents",value:function(e,t){var r,i,n;return null!==(r=t.fullExtents)&&void 0!==r&&r.length?t.fullExtents.map((function(e){return S.w.fromJSON(e)})):null!==(i=null===(n=t.tileMatrixSets)||void 0===n?void 0:n.map((function(e){return S.w.fromJSON(e.fullExtent)})).filter((function(e){return e})))&&void 0!==i?i:[]}},{key:"imageFormat",get:function(){var e=this._get("imageFormat");return e||(e=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),e},set:function(e){var t=this.imageFormats;e&&(e.includes("image/")||t&&!t.includes(e))&&(e.includes("image/")||(e="image/"+e),t&&!t.includes(e))?console.error("The layer doesn't support the format of "+e):this._set("imageFormat",e)}},{key:"styleId",get:function(){var e,t=this._get("styleId");return t||(t=null!==(e=this.styles)&&void 0!==e&&e.length?this.styles.getItemAt(0).id:""),t},set:function(e){this._set("styleId",e)}},{key:"title",get:function(){return this._get("title")},set:function(e){this._set("title",e)}},{key:"tileMatrixSet",get:function(){var e=this;return this.tileMatrixSets?this.tileMatrixSets.find((function(t){return t.id===e.tileMatrixSetId})):null}},{key:"clone",value:function(){var e,t=new V;return this.hasOwnProperty("description")&&(t.description=this.description),this.hasOwnProperty("imageFormats")&&(t.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(t.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(t.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(t.id=this.id),this.hasOwnProperty("layer")&&(t.layer=this.layer),this.hasOwnProperty("styleId")&&(t.styleId=this.styleId),this.hasOwnProperty("styles")&&(t.styles=this.styles&&this.styles.clone()),this.hasOwnProperty("tileMatrixSetId")&&(t.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(t.tileMatrixSets=null===(e=this.tileMatrixSets)||void 0===e?void 0:e.clone()),this.hasOwnProperty("title")&&(t.title=this.title),t}}]),r}(C.l);(0,v.e)([(0,v.y)()],D.prototype,"description",null),(0,v.e)([(0,v.y)()],D.prototype,"fullExtent",void 0),(0,v.e)([(0,x.o)("fullExtent",["fullExtent"])],D.prototype,"readFullExtent",null),(0,v.e)([(0,v.y)({readOnly:!0})],D.prototype,"fullExtents",void 0),(0,v.e)([(0,x.o)("fullExtents",["fullExtents","tileMatrixSets"])],D.prototype,"readFullExtents",null),(0,v.e)([(0,v.y)()],D.prototype,"imageFormat",null),(0,v.e)([(0,v.y)({json:{read:{source:"formats"}}})],D.prototype,"imageFormats",void 0),(0,v.e)([(0,v.y)()],D.prototype,"id",void 0),(0,v.e)([(0,v.y)()],D.prototype,"layer",void 0),(0,v.e)([(0,v.y)()],D.prototype,"styleId",null),(0,v.e)([(0,v.y)({type:m.j.ofType(N),json:{read:{source:"styles"}}})],D.prototype,"styles",void 0),(0,v.e)([(0,v.y)({value:null,json:{write:{ignoreOrigin:!0}}})],D.prototype,"title",null),(0,v.e)([(0,v.y)()],D.prototype,"tileMatrixSetId",void 0),(0,v.e)([(0,v.y)({readOnly:!0})],D.prototype,"tileMatrixSet",null),(0,v.e)([(0,v.y)({type:m.j.ofType(j),json:{read:{source:"tileMatrixSets"}}})],D.prototype,"tileMatrixSets",void 0);var W,B,K=D=V=(0,v.e)([(0,v.n)("esri.layers.support.WMTSSublayer")],D),q=90.71428571428571;function G(e){var t=e.replace(/ows:/gi,"");if(!z("Contents",(new DOMParser).parseFromString(t,"text/xml").documentElement))throw new v.s("wmtslayer:wmts-capabilities-xml-is-not-valid","the wmts get capabilities response is not compliant",{text:e})}function J(e,t){var r,i;e=e.replace(/ows:/gi,"");var n=(new DOMParser).parseFromString(e,"text/xml").documentElement,a=new Map,o=new Map,l=z("Contents",n);if(!l)throw new v.s("wmtslayer:wmts-capabilities-xml-is-not-valid");var s,u,c=null===(r=z("OperationsMetadata",n))||void 0===r?void 0:r.querySelector("[name='GetTile']"),d=null===c||void 0===c?void 0:c.getElementsByTagName("Get"),f=d&&Array.prototype.slice.call(d),p=null===(i=t.url)||void 0===i?void 0:i.indexOf("https"),y=void 0!==p&&p>-1,m=t.serviceMode,h=null===t||void 0===t?void 0:t.url;if(f&&f.length&&f.some((function(e){var t=z("Constraint",e);return!t||ee("AllowedValues","Value",m,t)?(h=e.attributes[0].nodeValue,!0):(!t||ee("AllowedValues","Value","RESTful",t)||ee("AllowedValues","Value","REST",t)?u=e.attributes[0].nodeValue:t&&!ee("AllowedValues","Value","KVP",t)||(s=e.attributes[0].nodeValue),!1)})),!h)if(u)h=u,m="RESTful";else if(s)h=s,m="KVP";else{var g=z("ServiceMetadataURL",n);h=null===g||void 0===g?void 0:g.getAttribute("xlink:href")}var w=h.indexOf("1.0.0/");-1===w&&"RESTful"===m?h+="/":w>-1&&(h=h.substring(0,w)),"KVP"===m&&(h+=w>-1?"":"?"),y&&(h=h.replace(/^http:/i,"https:"));var x=$("ServiceIdentification>ServiceTypeVersion",n),S=$("ServiceIdentification>AccessConstraints",n),M=S&&/^none$/i.test(S)?null:S,I=X("Layer",l),b=X("TileMatrixSet",l),L=I.map((function(e){var t=$("Identifier",e);return a.set(t,e),te(t,e,b,y,x)}));return{copyright:M,dimensionMap:o,layerMap:a,layers:L,serviceMode:m,tileUrl:h}}function H(e){return e.layers.forEach((function(e){var t;null===(t=e.tileMatrixSets)||void 0===t||t.forEach((function(e){var t,r=e.tileInfo;r&&96!==r.dpi&&(null!==(t=r.lods)&&void 0!==t&&t.forEach((function(t){var i;t.scale=96*t.scale/r.dpi,t.resolution=de(null===(i=r.spatialReference)||void 0===i?void 0:i.wkid,t.scale*q/96,e.id)})),r.dpi=96)}))})),e}function Y(e){return e.nodeType===Node.ELEMENT_NODE}function z(e,t){for(var r=0;r<t.childNodes.length;r++){var i=t.childNodes[r];if(Y(i)&&i.nodeName===e)return i}return null}function X(e,t){for(var r=[],i=0;i<t.childNodes.length;i++){var n=t.childNodes[i];Y(n)&&n.nodeName===e&&r.push(n)}return r}function Q(e,t){for(var r=[],i=0;i<t.childNodes.length;i++){var n=t.childNodes[i];Y(n)&&n.nodeName===e&&r.push(n)}return r.map((function(e){return e.textContent})).filter(h.r)}function $(e,t){return e.split(">").forEach((function(e){t&&(t=z(e,t))})),t&&t.textContent}function ee(e,t,r,i){var n;return Array.prototype.slice.call(i.childNodes).some((function(i){if(i.nodeName.includes(e)){var a=z(t,i),o=a&&a.textContent;if(o===r||r.split(":")&&r.split(":")[1]===o)return n=i,!0}return!1})),n}function te(e,t,r,i,n){var a=$("Abstract",t),o=Q("Format",t);return{id:e,fullExtent:ne(t),fullExtents:ae(t),description:a,formats:o,styles:oe(t,i),title:$("Title",t),tileMatrixSets:le(n,t,r)}}function re(e,t){var r,i=[],n=null===(r=e.layerMap)||void 0===r?void 0:r.get(t);if(!n)return null;var a,o,l,s,u=X("ResourceURL",n),c=X("Dimension",n);return c.length&&(a=$("Identifier",c[0]),o=Q("Default",c[0])||Q("Value",c[0])),c.length>1&&(l=$("Identifier",c[1]),s=Q("Default",c[1])||Q("Value",c[1])),e.dimensionMap.set(t,{dimensions:o,dimensions2:s}),u.forEach((function(e){var t=e.getAttribute("template");if("tile"===e.getAttribute("resourceType")){if(a&&o.length)if(t.includes("{"+a+"}"))t=t.replace("{"+a+"}","{dimensionValue}");else{var r=t.toLowerCase().indexOf("{"+a.toLowerCase()+"}");r>-1&&(t=t.substring(0,r)+"{dimensionValue}"+t.substring(r+a.length+2))}if(l&&s.length)if(t.includes("{"+l+"}"))t=t.replace("{"+l+"}","{dimensionValue2}");else{var n=t.toLowerCase().indexOf("{"+l.toLowerCase()+"}");n>-1&&(t=t.substring(0,n)+"{dimensionValue2}"+t.substring(n+l.length+2))}i.push({template:t,format:e.getAttribute("format"),resourceType:"tile"})}})),i}function ie(e,t,r,i,n,a,o,l){var s,u,c=function(e,t,r){var i,n=re(e,t),a=null===n||void 0===n?void 0:n.filter((function(e){return e.format===r}));return null!==(i=null!==a&&void 0!==a&&a.length?a:n)&&void 0!==i?i:[]}(e,t,i);if(!((null===c||void 0===c?void 0:c.length)>0))return"";var d=e.dimensionMap,f=null===(s=d.get(t).dimensions)||void 0===s?void 0:s[0],p=null===(u=d.get(t).dimensions2)||void 0===u?void 0:u[0];return c[o%c.length].template.replace(/\{Style\}/gi,null!==n&&void 0!==n?n:"").replace(/\{TileMatrixSet\}/gi,null!==r&&void 0!==r?r:"").replace(/\{TileMatrix\}/gi,a).replace(/\{TileRow\}/gi,""+o).replace(/\{TileCol\}/gi,""+l).replace(/\{dimensionValue\}/gi,f).replace(/\{dimensionValue2\}/gi,p)}function ne(e){var t=z("WGS84BoundingBox",e),r=t?$("LowerCorner",t).split(" "):["-180","-90"],i=t?$("UpperCorner",t).split(" "):["180","90"];return{xmin:parseFloat(r[0]),ymin:parseFloat(r[1]),xmax:parseFloat(i[0]),ymax:parseFloat(i[1]),spatialReference:{wkid:4326}}}function ae(e){var t=[];return(0,Z.o)(e,{BoundingBox:function(e){if(e.getAttribute("crs")){var r,i,n,a,o=e.getAttribute("crs").toLowerCase(),s=se(o),u=o.includes("epsg")&&(0,R.o)(s.wkid);(0,Z.o)(e,{LowerCorner:function(e){var t,n,a;t=e.textContent.split(" ").map((function(e){return Number.parseFloat(e)})),n=(0,l.Z)(t,2),r=n[0],i=n[1],u&&(r=(a=[i,r])[0],i=a[1])},UpperCorner:function(e){var t,r,i;t=e.textContent.split(" ").map((function(e){return Number.parseFloat(e)})),r=(0,l.Z)(t,2),n=r[0],a=r[1],u&&(n=(i=[a,n])[0],a=i[1])}}),t.push({xmin:r,ymin:i,xmax:n,ymax:a,spatialReference:s})}}}),t}function oe(e,t){return X("Style",e).map((function(e){var r=z("LegendURL",e),i=z("Keywords",e),n=i?Q("Keyword",i):[],a=r&&r.getAttribute("xlink:href");return t&&(a=a&&a.replace(/^http:/i,"https:")),{abstract:$("Abstract",e),id:$("Identifier",e),isDefault:"true"===e.getAttribute("isDefault"),keywords:n,legendUrl:a,title:$("Title",e)}}))}function le(e,t,r){return X("TileMatrixSetLink",t).map((function(t){return function(e,t,r){var i=z("TileMatrixSet",t).textContent,n=Q("TileMatrix",t),a=r.find((function(e){var t=z("Identifier",e),r=t&&t.textContent;return!!(r===i||i.split(":")&&i.split(":")[1]===r)})),l=z("TileMatrixSetLimits",t),s=l&&X("TileMatrixLimits",l),u=new Map;if(null!==s&&void 0!==s&&s.length){var c,d=(0,o.Z)(s);try{for(d.s();!(c=d.n()).done;){var f=c.value,p=z("TileMatrix",f).textContent,v=+z("MinTileRow",f).textContent,y=+z("MaxTileRow",f).textContent,m=+z("MinTileCol",f).textContent,h=+z("MaxTileCol",f).textContent;u.set(p,{minCol:m,maxCol:h,minRow:v,maxRow:y})}}catch(k){d.e(k)}finally{d.f()}}var g=$("SupportedCRS",a).toLowerCase(),w=function(e,t){return ue(z("TileMatrix",e),t)}(a,g),x=w.spatialReference,M=z("TileMatrix",a),I=[parseInt($("TileWidth",M),10),parseInt($("TileHeight",M),10)],b=[];n.length?n.forEach((function(e,t){var r=ee("TileMatrix","Identifier",e,a);b.push(ce(r,g,t,i,u))})):X("TileMatrix",a).forEach((function(e,t){b.push(ce(e,g,t,i,u))}));var L=function(e,t,r,i,n){var a,o,l,s,u,c,d=z("BoundingBox",t);if(d&&(a=$("LowerCorner",d).split(" "),o=$("UpperCorner",d).split(" ")),a&&a.length>1&&o&&o.length>1)l=parseFloat(a[0]),u=parseFloat(a[1]),s=parseFloat(o[0]),c=parseFloat(o[1]);else{var f=z("TileMatrix",t),p=parseInt($("MatrixWidth",f),10),v=parseInt($("MatrixHeight",f),10);l=r.x,c=r.y,s=l+p*i[0]*n.resolution,u=c-v*i[1]*n.resolution}return function(e,t,r){return"1.0.0"===e&&(0,R.o)(t.wkid)&&!(r.spatialReference.isGeographic&&r.x<-90&&r.y>=-90)}(e,r.spatialReference,r)?new S.w(u,l,c,s,r.spatialReference):new S.w(l,u,s,c,r.spatialReference)}(e,a,w,I,b[0]).toJSON(),T=new E.j({dpi:96,spatialReference:x,size:I,origin:w,lods:b}).toJSON();return{id:i,fullExtent:L,tileInfo:T}}(e,t,r)}))}function se(e){e=e.toLowerCase();var t=parseInt(e.split(":").pop(),10);900913!==t&&3857!==t||(t=102100);var r=function(e){return e.includes("crs84")||e.includes("crs:84")?W.CRS84:e.includes("crs83")||e.includes("crs:83")?W.CRS83:e.includes("crs27")||e.includes("crs:27")?W.CRS27:null}(e);return(0,h.r)(r)&&(t=r),{wkid:t}}function ue(e,t){var r=se(t),i=$("TopLeftCorner",e).split(" ").map((function(e){return parseFloat(e)})),n=(0,l.Z)(i,2),a=n[0],o=n[1],s=t.includes("epsg")&&(0,R.o)(r.wkid);return new x.w(s?{x:o,y:a,spatialReference:r}:{x:a,y:o,spatialReference:r})}function ce(e,t,r,i,n){var a,o=se(t),l=$("Identifier",e),s=parseFloat($("ScaleDenominator",e)),u=de(o.wkid,s,i);s*=96/q;var c=+$("MatrixWidth",e),d=+$("MatrixHeight",e),f=null!==(a=n.get(l))&&void 0!==a?a:{},p=f.maxCol,v=void 0===p?c-1:p,y=f.maxRow,m=void 0===y?d-1:y,h=f.minCol,g=void 0===h?0:h,w=f.minRow,x=void 0===w?0:w,S=ue(e,t);return{cols:[g,v],level:r,levelValue:l,origin:[S.x,S.y],scale:s,resolution:u,rows:[x,m]}}function de(e,t,r){return 7*t/25e3/(x.f.hasOwnProperty(""+e)?x.f.values[x.f[e]]:"default028mm"===r?6370997*Math.PI/180:(0,O.s)(e).metersPerDegree)}(B=W||(W={}))[B.CRS84=4326]="CRS84",B[B.CRS83=4269]="CRS83",B[B.CRS27=4267]="CRS27";var fe={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},pe=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]),ve=function(e){(0,s.Z)(r,e);var t=(0,u.Z)(r);function r(){var e;(0,f.Z)(this,r);for(var i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).copyright="",e.customParameters=null,e.customLayerParameters=null,e.fullExtent=null,e.operationalLayerType="WebTiledLayer",e.resourceInfo=null,e.serviceMode="RESTful",e.sublayers=null,e.type="wmts",e.version="1.0.0",e.addHandles([(0,w.l)((function(){return e.activeLayer}),(function(t,r){r&&(r.layer=null),t&&(t.layer=(0,a.Z)(e))}),w.U),(0,w.a)((function(){return e.sublayers}),"after-add",(function(t){t.item.layer=(0,a.Z)(e)}),w.U),(0,w.a)((function(){return e.sublayers}),"after-remove",(function(e){e.item.layer=null}),w.U),(0,w.l)((function(){return e.sublayers}),(function(t,r){if(r){var i,n=(0,o.Z)(r);try{for(n.s();!(i=n.n()).done;){i.value.layer=null}}catch(u){n.e(u)}finally{n.f()}}if(t){var l,s=(0,o.Z)(t);try{for(s.s();!(l=s.n()).done;){l.value.layer=(0,a.Z)(e)}}catch(u){s.e(u)}finally{s.f()}}}),w.U)]),e}return(0,p.Z)(r,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?(0,n.Z)({url:e},t):e}},{key:"load",value:function(e){var t=this;if("KVP"===this.serviceMode||"RESTful"===this.serviceMode)return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).catch(v.w).then((function(){return t._fetchService(e)})).catch((function(e){throw(0,v.w)(e),new v.s("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:e})}))),Promise.resolve(this);console.error("WMTS mode could only be 'KVP' or 'RESTful'")}},{key:"activeLayer",get:function(){return this._get("activeLayer")},set:function(e){this._set("activeLayer",e)}},{key:"readActiveLayerFromService",value:function(e,t,r){var i=this;this.activeLayer||(this.activeLayer=new K);var n=t.layers.find((function(e){return e.id===i.activeLayer.id}));return n||(n=t.layers[0]),this.activeLayer.read(n,r),this.activeLayer}},{key:"readActiveLayerFromItemOrWebDoc",value:function(e,t){var r=t.templateUrl,i=t.wmtsInfo,n=r?this._getLowerCasedUrlParams(r):null,a=null===i||void 0===i?void 0:i.layerIdentifier,o=null,l=null===i||void 0===i?void 0:i.tileMatrixSet;l&&(Array.isArray(l)?l.length&&(o=l[0]):o=l);var s=null===n||void 0===n?void 0:n.format,u=null===n||void 0===n?void 0:n.style;return new K({id:a,imageFormat:s,styleId:u,tileMatrixSetId:o})}},{key:"writeActiveLayer",value:function(e,t,r,i){var a=this.activeLayer;t.templateUrl=this.getUrlTemplate(a.id,a.tileMatrixSetId,a.imageFormat,a.styleId);var o=(0,h.a)("tileMatrixSet.tileInfo",a);t.tileInfo=o?o.toJSON(i):null,t.wmtsInfo=(0,n.Z)((0,n.Z)({},t.wmtsInfo),{},{layerIdentifier:a.id,tileMatrixSet:a.tileMatrixSetId})}},{key:"readCustomParameters",value:function(e,t){var r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null}},{key:"fullExtents",get:function(){return this.activeLayer.fullExtents}},{key:"readServiceMode",value:function(e,t){return t.templateUrl.includes("?")?"KVP":"RESTful"}},{key:"readSublayersFromService",value:function(e,t,r){return function(e,t){return e.map((function(e){var r=new K;return r.read(e,t),r}))}(t.layers,r)}},{key:"supportedSpatialReferences",get:function(){var e,t;return null!==(e=null===(t=this.activeLayer.tileMatrixSets)||void 0===t?void 0:t.map((function(e){var t;return null===(t=e.tileInfo)||void 0===t?void 0:t.spatialReference})).toArray().filter(h.r))&&void 0!==e?e:[]}},{key:"tilemapCache",get:function(){var e,t,r=null===(e=this.activeLayer)||void 0===e||null===(t=e.tileMatrixSet)||void 0===t?void 0:t.tileInfo;return r?new F(r):void 0}},{key:"title",get:function(){var e,t;return null!==(e=null===(t=this.activeLayer)||void 0===t?void 0:t.title)&&void 0!==e?e:"Layer"},set:function(e){this._overrideIfSome("title",e)}},{key:"url",get:function(){return this._get("url")},set:function(e){e&&"/"===e.substr(-1)?this._set("url",e.slice(0,-1)):this._set("url",e)}},{key:"createWebTileLayer",value:function(e){var t,r=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),i=null===(t=this._getTileMatrixSetById(e.tileMatrixSetId))||void 0===t?void 0:t.tileInfo,n=e.fullExtent,a=new I.p({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(a.customLayerParameters=this.customLayerParameters),this.customParameters&&(a.customParameters=this.customParameters),new I.x({fullExtent:n,urlTemplate:r,tileInfo:i,wmtsInfo:a})}},{key:"fetchTile",value:function(e,t,r){var i=this.getTileUrl(e,t,r);return(0,y.U)(i,{responseType:"image"}).then((function(e){return e.data}))}},{key:"fetchImageBitmapTile",value:function(){var e=(0,d.Z)((0,c.Z)().mark((function e(t,r,i){var n,a,o;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.getTileUrl(t,r,i),e.next=3,(0,y.U)(n,{responseType:"blob"});case 3:return a=e.sent,o=a.data,e.abrupt("return",createImageBitmap(o));case 6:case"end":return e.stop()}}),e,this)})));return function(t,r,i){return e.apply(this,arguments)}}()},{key:"findSublayerById",value:function(e){var t;return null===(t=this.sublayers)||void 0===t?void 0:t.find((function(t){return t.id===e}))}},{key:"getTileUrl",value:function(e,t,r){var i,n,a=null===(i=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId))||void 0===i||null===(n=i.tileInfo)||void 0===n?void 0:n.lods[e],o=a?a.levelValue?a.levelValue:"".concat(a.level):"".concat(e),l=this.resourceInfo?"":ie({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,o,t,r);return l||(l=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replace(/\{level\}/gi,o).replace(/\{row\}/gi,"".concat(t)).replace(/\{col\}/gi,"".concat(r))),l=this._appendCustomLayerParameters(l)}},{key:"getUrlTemplate",value:function(e,t,r,i){if(!this.resourceInfo){var n=function(e,t,r,i){var n=e.dimensionMap,a=re(e,t),o="";if(a&&a.length>0){var l=n.get(t).dimensions&&n.get(t).dimensions[0],s=n.get(t).dimensions2&&n.get(t).dimensions2[0];(o=a[0].template).indexOf(".xxx")===o.length-4&&(o=o.slice(0,o.length-4)),o=(o=(o=(o=(o=(o=(o=o.replace(/\{Style\}/gi,i)).replace(/\{TileMatrixSet\}/gi,r)).replace(/\{TileMatrix\}/gi,"{level}")).replace(/\{TileRow\}/gi,"{row}")).replace(/\{TileCol\}/gi,"{col}")).replace(/\{dimensionValue\}/gi,l)).replace(/\{dimensionValue2\}/gi,s)}return o}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,i);if(n)return n}if("KVP"===this.serviceMode)return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+i+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if("RESTful"===this.serviceMode){var a="";return fe[r.toLowerCase()]&&(a=fe[r.toLowerCase()]),this.url+e+"/"+i+"/"+t+"/{level}/{row}/{col}"+a}return""}},{key:"_fetchService",value:function(){var e=(0,d.Z)((0,c.Z)().mark((function e(t){var r,i;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.resourceInfo){e.next=4;break}"KVP"===this.resourceInfo.serviceMode&&(this.url+=this.url.includes("?")?"":"?"),r={ssl:!1,data:this.resourceInfo},e.next=25;break;case 4:return e.prev=4,e.next=7,this._getCapabilities(this.serviceMode,t);case 7:G((r=e.sent).data),e.next=25;break;case 11:return e.prev=11,e.t0=e.catch(4),i="KVP"===this.serviceMode?"RESTful":"KVP",e.prev=14,e.next=17,this._getCapabilities(i,t);case 17:G((r=e.sent).data),this.serviceMode=i,e.next=25;break;case 22:throw e.prev=22,e.t1=e.catch(14),new v.s("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:e.t1});case 25:this.resourceInfo?r.data=H(r.data):r.data=J(r.data,{serviceMode:this.serviceMode,url:this.url}),r.data&&this.read(r.data,{origin:"service"});case 26:case"end":return e.stop()}}),e,this,[[4,11],[14,22]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_getCapabilities",value:function(){var e=(0,d.Z)((0,c.Z)().mark((function e(t,r){var i;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=this._getCapabilitiesUrl(t),e.next=3,(0,y.U)(i,(0,n.Z)((0,n.Z)({},r),{},{responseType:"text"}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_getTileMatrixSetById",value:function(e){var t,r;return null===(t=this.findSublayerById(this.activeLayer.id))||void 0===t||null===(r=t.tileMatrixSets)||void 0===r?void 0:r.find((function(t){return t.id===e}))}},{key:"_appendCustomParameters",value:function(e){return this._appendParameters(e,this.customParameters)}},{key:"_appendCustomLayerParameters",value:function(e){return this._appendParameters(e,(0,n.Z)((0,n.Z)({},(0,h.y)(this.customParameters)),this.customLayerParameters))}},{key:"_appendParameters",value:function(e,t){var r=(0,y.j)(e),i=(0,n.Z)((0,n.Z)({},r.query),t),a=(0,y.i)(i);return""===a?r.path:"".concat(r.path,"?").concat(a)}},{key:"_getCapabilitiesUrl",value:function(e){this.url=this.url.split("?")[0];var t="KVP"===e?"".concat(this.url,"?request=GetCapabilities&service=WMTS&version=").concat(this.version):"".concat(this.url,"/").concat(this.version,"/WMTSCapabilities.xml");return this._appendCustomParameters(t)}},{key:"_getLowerCasedUrlParams",value:function(e){if(!e)return null;var t=(0,y.j)(e).query;if(!t)return null;var r={};return Object.keys(t).forEach((function(e){r[e.toLowerCase()]=t[e]})),r}},{key:"_mergeParams",value:function(e,t){var r=this._getLowerCasedUrlParams(t);if(r){var i=Object.keys(r);i.length&&(e=e?(0,h.y)(e):{},i.forEach((function(t){e.hasOwnProperty(t)||pe.has(t)||(e[t]=r[t])})))}return e}}]),r}((0,b.n)((0,k.p)((0,P.t)((0,L.c)((0,T.v)((0,g.O)(M.b)))))));(0,v.e)([(0,v.y)()],ve.prototype,"dimensionMap",void 0),(0,v.e)([(0,v.y)()],ve.prototype,"layerMap",void 0),(0,v.e)([(0,v.y)({type:K,json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],ve.prototype,"activeLayer",null),(0,v.e)([(0,x.o)("service","activeLayer",["layers"])],ve.prototype,"readActiveLayerFromService",null),(0,v.e)([(0,x.o)(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],ve.prototype,"readActiveLayerFromItemOrWebDoc",null),(0,v.e)([(0,x.r)(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:E.j},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],ve.prototype,"writeActiveLayer",null),(0,v.e)([(0,v.y)({type:String,value:"",json:{write:!0}})],ve.prototype,"copyright",void 0),(0,v.e)([(0,v.y)({type:["show","hide"]})],ve.prototype,"listMode",void 0),(0,v.e)([(0,v.y)({json:{read:!0,write:!0}})],ve.prototype,"blendMode",void 0),(0,v.e)([(0,v.y)({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],ve.prototype,"customParameters",void 0),(0,v.e)([(0,x.o)(["portal-item","web-document"],"customParameters")],ve.prototype,"readCustomParameters",null),(0,v.e)([(0,v.y)({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],ve.prototype,"customLayerParameters",void 0),(0,v.e)([(0,v.y)({type:S.w,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],ve.prototype,"fullExtent",void 0),(0,v.e)([(0,v.y)({readOnly:!0})],ve.prototype,"fullExtents",null),(0,v.e)([(0,v.y)({type:["WebTiledLayer"]})],ve.prototype,"operationalLayerType",void 0),(0,v.e)([(0,v.y)()],ve.prototype,"resourceInfo",void 0),(0,v.e)([(0,v.y)()],ve.prototype,"serviceMode",void 0),(0,v.e)([(0,x.o)(["portal-item","web-document"],"serviceMode",["templateUrl"])],ve.prototype,"readServiceMode",null),(0,v.e)([(0,v.y)({type:m.j.ofType(K)})],ve.prototype,"sublayers",void 0),(0,v.e)([(0,x.o)("service","sublayers",["layers"])],ve.prototype,"readSublayersFromService",null),(0,v.e)([(0,v.y)({readOnly:!0})],ve.prototype,"supportedSpatialReferences",null),(0,v.e)([(0,v.y)({readOnly:!0})],ve.prototype,"tilemapCache",null),(0,v.e)([(0,v.y)({json:{read:{source:"title"}}})],ve.prototype,"title",null),(0,v.e)([(0,v.y)({json:{read:!1},readOnly:!0,value:"wmts"})],ve.prototype,"type",void 0),(0,v.e)([(0,v.y)({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],ve.prototype,"url",null),(0,v.e)([(0,v.y)()],ve.prototype,"version",void 0);var ye=ve=(0,v.e)([(0,v.n)("esri.layers.WMTSLayer")],ve);t.default=ye},40591:function(e,t,r){r.d(t,{o:function(){return a}});var i=r(29439),n=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];function a(e){return null!=e&&n.some((function(t){var r=(0,i.Z)(t,2),n=r[0],a=r[1];return e>=n&&e<=a}))}},50690:function(e,t,r){r.d(t,{P:function(){return f},U:function(){return p},a:function(){return s},f:function(){return o},h:function(){return v},j:function(){return u},l:function(){return a},w:function(){return y}});var i=r(48848),n=r(93661);function a(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return l(e,t,r,c)}function o(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return l(e,t,r,d)}function l(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3?arguments[3]:void 0,o=null,l=r.once?function(e,r){a(e)&&((0,n.f)(o),t(e,r))}:function(e,r){a(e)&&t(e,r)};if(o=(0,i.P)(e,l,r.sync,r.equals),r.initial){var s=e();l(s,s)}return o}function s(e,t,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},l=null,s=null,u=null;function c(){var e;l&&s&&(s.remove(),null!==(e=o.onListenerRemove)&&void 0!==e&&e.call(o,l),l=null,s=null)}function d(e){o.once&&o.once&&(0,n.f)(u),r(e)}var f=a(e,(function(e,r){var n;c(),(0,i.B)(e)&&(l=e,s=(0,i.C)(e,t,d),null===(n=o.onListenerAdd)||void 0===n||n.call(o,e))}),{sync:o.sync,initial:!0});return u=(0,i.D)((function(){f.remove(),c()}))}function u(e,t){return function(e,t,r){if((0,i.p)(r))return Promise.reject((0,i.d)());var a=e();if(null!==t&&void 0!==t&&t(a))return Promise.resolve(a);var o=null;function s(){o=(0,n.f)(o)}return new Promise((function(n,a){o=(0,i.F)([(0,i.v)(r,(function(){s(),a((0,i.d)())})),l(e,(function(e){s(),n(e)}),{sync:!1,once:!0},null!==t&&void 0!==t?t:c)])}))}(e,d,t)}function c(e){return!0}function d(e){return!!e}function f(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=!1,n=a(e,(function(e,r){i||t(e,r)}),r);return{remove:function(){n.remove()},pause:function(){i=!0},resume:function(){i=!1}}}var p={sync:!0},v={initial:!0},y={sync:!0,initial:!0}},73588:function(e,t,r){r.d(t,{n:function(){return l},o:function(){return o}});var i=r(74165),n=r(37762),a=(0,i.Z)().mark(l);function o(e,t){if(e&&t){var r,i=(0,n.Z)(e.children);try{for(i.s();!(r=i.n()).done;){var a=r.value;if(a.localName in t){var l=t[a.localName];if("function"==typeof l){var s=l(a);s&&o(a,s)}else o(a,l)}}}catch(u){i.e(u)}finally{i.f()}}}function l(e,t){var r,o,s,u;return(0,i.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:r=(0,n.Z)(e.children),i.prev=1,r.s();case 3:if((o=r.n()).done){i.next=15;break}if(!((s=o.value).localName in t)){i.next=13;break}if("function"!=typeof(u=t[s.localName])){i.next=12;break}return i.next=10,u(s);case 10:i.next=13;break;case 12:return i.delegateYield(l(s,u),"t0",13);case 13:i.next=3;break;case 15:i.next=20;break;case 17:i.prev=17,i.t1=i.catch(1),r.e(i.t1);case 20:return i.prev=20,r.f(),i.finish(20);case 23:case"end":return i.stop()}}),a,null,[[1,17,20,23]])}}}]);
//# sourceMappingURL=2880.72785623.chunk.js.map