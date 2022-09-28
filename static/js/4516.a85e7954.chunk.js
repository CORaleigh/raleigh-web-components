"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[4516],{63641:function(e,r,o){o.d(r,{a:function(){return J},b:function(){return P},c:function(){return z},d:function(){return B}});var t,n=o(1413),i=o(15671),l=o(43144),a=o(60136),s=o(29388),u=o(50165),p=o(79747),d=o(84539),c=o(88406),f=o(32335),y=o(13994),v=t=function(e){(0,a.Z)(o,e);var r=(0,s.Z)(o);function o(){var e;return(0,i.Z)(this,o),(e=r.apply(this,arguments)).field=null,e.minValue=0,e.maxValue=255,e}return(0,l.Z)(o,[{key:"clone",value:function(){return new t({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}}]),o}(f.l);(0,u.e)([(0,u.d)({type:String,json:{write:!0}})],v.prototype,"field",void 0),(0,u.e)([(0,u.d)({type:Number,nonNullable:!0,json:{write:!0}})],v.prototype,"minValue",void 0),(0,u.e)([(0,u.d)({type:Number,nonNullable:!0,json:{write:!0}})],v.prototype,"maxValue",void 0);var h=v=t=(0,u.e)([(0,u.n)("esri.renderers.support.pointCloud.ColorModulation")],v),m=new y.s({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"}),b=function(e){(0,a.Z)(o,e);var r=(0,s.Z)(o);function o(){return(0,i.Z)(this,o),r.apply(this,arguments)}return(0,l.Z)(o)}(f.l);(0,u.e)([(0,u.d)({type:m.apiValues,readOnly:!0,nonNullable:!0,json:{type:m.jsonValues,read:!1,write:m.write}})],b.prototype,"type",void 0);var w,g=b=(0,u.e)([(0,u.n)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],b),T=w=function(e){(0,a.Z)(o,e);var r=(0,s.Z)(o);function o(){var e;return(0,i.Z)(this,o),(e=r.apply(this,arguments)).type="fixed-size",e.size=0,e.useRealWorldSymbolSizes=null,e}return(0,l.Z)(o,[{key:"clone",value:function(){return new w({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}}]),o}(g);(0,u.e)([(0,p.r)({pointCloudFixedSizeAlgorithm:"fixed-size"})],T.prototype,"type",void 0),(0,u.e)([(0,u.d)({type:Number,nonNullable:!0,json:{write:!0}})],T.prototype,"size",void 0),(0,u.e)([(0,u.d)({type:Boolean,json:{write:!0}})],T.prototype,"useRealWorldSymbolSizes",void 0);var Z,V=T=w=(0,u.e)([(0,u.n)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],T),C=Z=function(e){(0,a.Z)(o,e);var r=(0,s.Z)(o);function o(){var e;return(0,i.Z)(this,o),(e=r.apply(this,arguments)).type="splat",e.scaleFactor=1,e}return(0,l.Z)(o,[{key:"clone",value:function(){return new Z({scaleFactor:this.scaleFactor})}}]),o}(g);(0,u.e)([(0,p.r)({pointCloudSplatAlgorithm:"splat"})],C.prototype,"type",void 0),(0,u.e)([(0,u.d)({type:Number,value:1,nonNullable:!0,json:{write:!0}})],C.prototype,"scaleFactor",void 0);var S={key:"type",base:g,typeMap:{"fixed-size":V,splat:C=Z=(0,u.e)([(0,u.n)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],C)}},j=(0,y.o)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"}),k=function(e){(0,a.Z)(o,e);var r=(0,s.Z)(o);function o(e){var t;return(0,i.Z)(this,o),(t=r.call(this,e)).type=void 0,t.pointSizeAlgorithm=null,t.colorModulation=null,t.pointsPerInch=10,t}return(0,l.Z)(o,[{key:"clone",value:function(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}},{key:"cloneProperties",value:function(){return{pointSizeAlgorithm:(0,u.m)(this.pointSizeAlgorithm),colorModulation:(0,u.m)(this.colorModulation),pointsPerInch:(0,u.m)(this.pointsPerInch)}}}]),o}(f.l);(0,u.e)([(0,u.d)({type:j.apiValues,readOnly:!0,nonNullable:!0,json:{type:j.jsonValues,read:!1,write:j.write}})],k.prototype,"type",void 0),(0,u.e)([(0,u.d)({types:S,json:{write:!0}})],k.prototype,"pointSizeAlgorithm",void 0),(0,u.e)([(0,u.d)({type:h,json:{write:!0}})],k.prototype,"colorModulation",void 0),(0,u.e)([(0,u.d)({json:{write:!0},nonNullable:!0,type:Number})],k.prototype,"pointsPerInch",void 0),k=(0,u.e)([(0,u.n)("esri.renderers.PointCloudRenderer")],k),(k||(k={})).fieldTransformTypeKebabDict=new y.s({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});var x,z=k,R=x=function(e){(0,a.Z)(o,e);var r=(0,s.Z)(o);function o(){var e;return(0,i.Z)(this,o),(e=r.apply(this,arguments)).description=null,e.label=null,e.minValue=0,e.maxValue=0,e.color=null,e}return(0,l.Z)(o,[{key:"clone",value:function(){return new x({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:(0,u.m)(this.color)})}}]),o}(f.l);(0,u.e)([(0,u.d)({type:String,json:{write:!0}})],R.prototype,"description",void 0),(0,u.e)([(0,u.d)({type:String,json:{write:!0}})],R.prototype,"label",void 0),(0,u.e)([(0,u.d)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],R.prototype,"minValue",void 0),(0,u.e)([(0,u.d)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],R.prototype,"maxValue",void 0),(0,u.e)([(0,u.d)({type:c.l,json:{type:[u.S],write:!0}})],R.prototype,"color",void 0);var O,I=R=x=(0,u.e)([(0,u.n)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],R),A=O=function(e){(0,a.Z)(o,e);var r=(0,s.Z)(o);function o(e){var t;return(0,i.Z)(this,o),(t=r.call(this,e)).type="point-cloud-class-breaks",t.field=null,t.legendOptions=null,t.fieldTransformType=null,t.colorClassBreakInfos=null,t}return(0,l.Z)(o,[{key:"clone",value:function(){return new O((0,n.Z)((0,n.Z)({},this.cloneProperties()),{},{field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:(0,u.m)(this.colorClassBreakInfos),legendOptions:(0,u.m)(this.legendOptions)}))}}]),o}(z);(0,u.e)([(0,p.r)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],A.prototype,"type",void 0),(0,u.e)([(0,u.d)({json:{write:!0},type:String})],A.prototype,"field",void 0),(0,u.e)([(0,u.d)({type:d.p,json:{write:!0}})],A.prototype,"legendOptions",void 0),(0,u.e)([(0,u.d)({type:z.fieldTransformTypeKebabDict.apiValues,json:{type:z.fieldTransformTypeKebabDict.jsonValues,read:z.fieldTransformTypeKebabDict.read,write:z.fieldTransformTypeKebabDict.write}})],A.prototype,"fieldTransformType",void 0),(0,u.e)([(0,u.d)({type:[I],json:{write:!0}})],A.prototype,"colorClassBreakInfos",void 0);var N,B=A=O=(0,u.e)([(0,u.n)("esri.renderers.PointCloudClassBreaksRenderer")],A),M=N=function(e){(0,a.Z)(o,e);var r=(0,s.Z)(o);function o(e){var t;return(0,i.Z)(this,o),(t=r.call(this,e)).type="point-cloud-stretch",t.field=null,t.legendOptions=null,t.fieldTransformType=null,t.stops=null,t}return(0,l.Z)(o,[{key:"clone",value:function(){return new N((0,n.Z)((0,n.Z)({},this.cloneProperties()),{},{field:(0,u.m)(this.field),fieldTransformType:(0,u.m)(this.fieldTransformType),stops:(0,u.m)(this.stops),legendOptions:(0,u.m)(this.legendOptions)}))}}]),o}(z);(0,u.e)([(0,p.r)({pointCloudStretchRenderer:"point-cloud-stretch"})],M.prototype,"type",void 0),(0,u.e)([(0,u.d)({json:{write:!0},type:String})],M.prototype,"field",void 0),(0,u.e)([(0,u.d)({type:d.p,json:{write:!0}})],M.prototype,"legendOptions",void 0),(0,u.e)([(0,u.d)({type:z.fieldTransformTypeKebabDict.apiValues,json:{type:z.fieldTransformTypeKebabDict.jsonValues,read:z.fieldTransformTypeKebabDict.read,write:z.fieldTransformTypeKebabDict.write}})],M.prototype,"fieldTransformType",void 0),(0,u.e)([(0,u.d)({type:[d.a],json:{write:!0}})],M.prototype,"stops",void 0);var q,P=M=N=(0,u.e)([(0,u.n)("esri.renderers.PointCloudStretchRenderer")],M),F=q=function(e){(0,a.Z)(o,e);var r=(0,s.Z)(o);function o(){var e;return(0,i.Z)(this,o),(e=r.apply(this,arguments)).description=null,e.label=null,e.values=null,e.color=null,e}return(0,l.Z)(o,[{key:"clone",value:function(){return new q({description:this.description,label:this.label,values:(0,u.m)(this.values),color:(0,u.m)(this.color)})}}]),o}(f.l);(0,u.e)([(0,u.d)({type:String,json:{write:!0}})],F.prototype,"description",void 0),(0,u.e)([(0,u.d)({type:String,json:{write:!0}})],F.prototype,"label",void 0),(0,u.e)([(0,u.d)({type:[String],json:{write:!0}})],F.prototype,"values",void 0),(0,u.e)([(0,u.d)({type:c.l,json:{type:[u.S],write:!0}})],F.prototype,"color",void 0);var U,D=F=q=(0,u.e)([(0,u.n)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],F),K=U=function(e){(0,a.Z)(o,e);var r=(0,s.Z)(o);function o(e){var t;return(0,i.Z)(this,o),(t=r.call(this,e)).type="point-cloud-unique-value",t.field=null,t.fieldTransformType=null,t.colorUniqueValueInfos=null,t.legendOptions=null,t}return(0,l.Z)(o,[{key:"clone",value:function(){return new U((0,n.Z)((0,n.Z)({},this.cloneProperties()),{},{field:(0,u.m)(this.field),fieldTransformType:(0,u.m)(this.fieldTransformType),colorUniqueValueInfos:(0,u.m)(this.colorUniqueValueInfos),legendOptions:(0,u.m)(this.legendOptions)}))}}]),o}(z);(0,u.e)([(0,p.r)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],K.prototype,"type",void 0),(0,u.e)([(0,u.d)({json:{write:!0},type:String})],K.prototype,"field",void 0),(0,u.e)([(0,u.d)({type:z.fieldTransformTypeKebabDict.apiValues,json:{type:z.fieldTransformTypeKebabDict.jsonValues,read:z.fieldTransformTypeKebabDict.read,write:z.fieldTransformTypeKebabDict.write}})],K.prototype,"fieldTransformType",void 0),(0,u.e)([(0,u.d)({type:[D],json:{write:!0}})],K.prototype,"colorUniqueValueInfos",void 0),(0,u.e)([(0,u.d)({type:d.p,json:{write:!0}})],K.prototype,"legendOptions",void 0);var J=K=U=(0,u.e)([(0,u.n)("esri.renderers.PointCloudUniqueValueRenderer")],K)},4516:function(e,r,o){o.d(r,{a:function(){return u},c:function(){return s},d:function(){return p},f:function(){return a},m:function(){return d}});var t=o(37762),n=o(50165),i=o(63641),l=o(71871);function a(e,r,o,t){var n=e.rendererJSON,l=e.isRGBRenderer,a=null,s=null;if(r&&l)a=r;else if(r&&"pointCloudUniqueValueRenderer"===n.type){var u=(s=i.a.fromJSON(n)).colorUniqueValueInfos;a=new Uint8Array(3*t);for(var p=c(s.fieldTransformType),d=0;d<t;d++)for(var f=(p?p(r[d]):r[d])+"",y=0;y<u.length;y++)if(u[y].values.includes(f)){a[3*d]=u[y].color.r,a[3*d+1]=u[y].color.g,a[3*d+2]=u[y].color.b;break}}else if(r&&"pointCloudStretchRenderer"===n.type){var v=(s=i.b.fromJSON(n)).stops;a=new Uint8Array(3*t);for(var h=c(s.fieldTransformType),m=0;m<t;m++){var b=h?h(r[m]):r[m],w=v.length-1;if(b<v[0].value)a[3*m]=v[0].color.r,a[3*m+1]=v[0].color.g,a[3*m+2]=v[0].color.b;else if(b>=v[w].value)a[3*m]=v[w].color.r,a[3*m+1]=v[w].color.g,a[3*m+2]=v[w].color.b;else for(var g=1;g<v.length;g++)if(b<v[g].value){var T=(b-v[g-1].value)/(v[g].value-v[g-1].value);a[3*m]=v[g].color.r*T+v[g-1].color.r*(1-T),a[3*m+1]=v[g].color.g*T+v[g-1].color.g*(1-T),a[3*m+2]=v[g].color.b*T+v[g-1].color.b*(1-T);break}}}else if(r&&"pointCloudClassBreaksRenderer"===n.type){var Z=(s=i.d.fromJSON(n)).colorClassBreakInfos;a=new Uint8Array(3*t);for(var V=c(s.fieldTransformType),C=0;C<t;C++)for(var S=V?V(r[C]):r[C],j=0;j<Z.length;j++)if(S>=Z[j].minValue&&S<=Z[j].maxValue){a[3*C]=Z[j].color.r,a[3*C+1]=Z[j].color.g,a[3*C+2]=Z[j].color.b;break}}else{a=new Uint8Array(3*t);for(var k=0;k<a.length;k++)a[k]=255}if(o&&s&&s.colorModulation)for(var x=s.colorModulation.minValue,z=s.colorModulation.maxValue,R=0;R<t;R++){var O=o[R],I=O>=z?1:O<=x?.3:.3+.7*(O-x)/(z-x);a[3*R]=I*a[3*R],a[3*R+1]=I*a[3*R+1],a[3*R+2]=I*a[3*R+2]}return a}function s(e,r){if(null==e.encoding||""===e.encoding){var o=(0,l.g)(r,e);if((0,n.t)(o.vertexAttributes.position))return;for(var t=(0,l.f)(r,o.vertexAttributes.position),i=o.header.fields,a=[i.offsetX,i.offsetY,i.offsetZ],s=[i.scaleX,i.scaleY,i.scaleZ],u=t.length/3,p=new Float64Array(3*u),d=0;d<u;d++)p[3*d]=t[3*d]*s[0]+a[0],p[3*d+1]=t[3*d+1]*s[1]+a[1],p[3*d+2]=t[3*d+2]*s[2]+a[2];return p}if("lepcc-xyz"===e.encoding)return(0,l.c)(r).result}function u(e,r,o){return(0,n.r)(e)&&e.attributeInfo.useElevation?p(r,o):(0,n.r)(e)?(0,l.I)(e.attributeInfo.storageInfo,e.buffer,o):null}function p(e,r){for(var o=new Float64Array(r),t=0;t<r;t++)o[t]=e[3*t+2];return o}function d(e,r,o,n,i){for(var l=e.length/3,a=0,s=0;s<l;s++){for(var u=!0,p=0;p<n.length&&u;p++){var d=n[p].filterJSON,c=i[p].values[s];switch(d.type){case"pointCloudValueFilter":var y="exclude"===d.mode;d.values.includes(c)===y&&(u=!1);break;case"pointCloudBitfieldFilter":var v=f(d.requiredSetBits),h=f(d.requiredClearBits);(c&v)===v&&0==(c&h)||(u=!1);break;case"pointCloudReturnFilter":var m,b=15&c,w=c>>>4&15,g=w>1,T=1===b,Z=b===w,V=!1,C=(0,t.Z)(d.includedReturns);try{for(C.s();!(m=C.n()).done;){var S=m.value;if("last"===S&&Z||"firstOfMany"===S&&T&&g||"lastOfMany"===S&&Z&&g||"single"===S&&!g){V=!0;break}}}catch(j){C.e(j)}finally{C.f()}V||(u=!1)}}u&&(o[a]=s,e[3*a]=e[3*s],e[3*a+1]=e[3*s+1],e[3*a+2]=e[3*s+2],r[3*a]=r[3*s],r[3*a+1]=r[3*s+1],r[3*a+2]=r[3*s+2],a++)}return a}function c(e){return null==e||"none"===e?null:"low-four-bit"===e?function(e){return 15&e}:"high-four-bit"===e?function(e){return(240&e)>>4}:"absolute-value"===e?function(e){return Math.abs(e)}:"modulo-ten"===e?function(e){return e%10}:null}function f(e){var r,o=0,n=(0,t.Z)(e||[]);try{for(n.s();!(r=n.n()).done;){o|=1<<r.value}}catch(i){n.e(i)}finally{n.f()}return o}}}]);
//# sourceMappingURL=4516.a85e7954.chunk.js.map