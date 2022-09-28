"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[8665],{16377:function(e,t,r){r.d(t,{d:function(){return b}});var n,a=r(74165),i=r(15861),s=r(15671),o=r(43144),u=r(60136),l=r(29388),c=r(50165),f=r(79747),p=r(77322),h=r(4483),y=r(9887),m=n=function(e){(0,u.Z)(r,e);var t=(0,l.Z)(r);function r(e){var n;return(0,s.Z)(this,r),(n=t.call(this,e)).data=null,n.type="cim",n}return(0,o.Z)(r,[{key:"readData",value:function(e,t){return t}},{key:"writeData",value:function(e,t){if(e)for(var r in e)t[r]=e[r]}},{key:"collectRequiredFields",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t,r){var n,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("CIMSymbolReference"!==this.data.type){e.next=6;break}if(!(n=this.data.primitiveOverrides)){e.next=6;break}return i=n.map((function(e){var n=e.valueExpressionInfo;return(0,h.b)(t,r,n.expression)})),e.next=6,Promise.all(i);case 6:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"clone",value:function(){return new n({data:(0,c.m)(this.data)})}},{key:"hash",value:function(){return(0,c.ad)(JSON.stringify(this.data)).toString()}}]),r}(y.a);(0,c.e)([(0,c.d)({json:{write:!1}})],m.prototype,"color",void 0),(0,c.e)([(0,c.d)({json:{write:!0}})],m.prototype,"data",void 0),(0,c.e)([(0,p.o)("data",["symbol"])],m.prototype,"readData",null),(0,c.e)([(0,p.r)("data",{})],m.prototype,"writeData",null),(0,c.e)([(0,f.r)({CIMSymbolReference:"cim"},{readOnly:!0})],m.prototype,"type",void 0);var b=m=n=(0,c.e)([(0,c.n)("esri.symbols.CIMSymbol")],m)},38665:function(e,t,r){r.r(t),r.d(t,{DictionaryLoader:function(){return g}});var n=r(93433),a=r(1413),i=r(29439),s=r(74165),o=r(37762),u=r(15861),l=r(15671),c=r(43144),f=r(88406),p=r(13994),h=r(50165),y=r(32717),m=r(4483),b=r(16377),d=(r(66307),r(2760),r(59075),r(33530),r(96263),r(77322),r(32335),r(31278),r(79747),r(9887),h.s.getLogger("esri.renderers.support.DictionaryLoader")),v={type:"CIMSimpleLineCallout",lineSymbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",width:.5,color:[0,0,0,255]}]}},g=function(){function e(t,r,n){(0,l.Z)(this,e),this.config=null,this.fieldMap=null,this.url=null,this._ongoingRequests=new Map,this._symbolCache=new y.e(100),this.url=t,this.config=r,this.fieldMap=n}return(0,c.Z)(e,[{key:"getSymbolFields",value:function(){return this._symbolFields}},{key:"getSymbolAsync",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(t,r){var n,a,i,u,l,c,p,y,m,b,d,v,g,k,x,_,Z,w,S,M,C,P,I,R,L,N,T=this;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._dictionaryPromise||(this._dictionaryPromise=this.fetchResources(r)),e.prev=1,e.next=4,this._dictionaryPromise;case 4:n=e.sent,e.next=11;break;case 7:if(e.prev=7,e.t0=e.catch(1),!(0,h.I)(e.t0)){e.next=11;break}return e.abrupt("return",(this._dictionaryPromise=null,null));case 11:if(a={},this.fieldMap){i=(0,o.Z)(this._symbolFields);try{for(i.s();!(u=i.n()).done;)l=u.value,(c=this.fieldMap[l])&&null!=t.attributes[c]?(p=""+t.attributes[c],a[l]=p):a[l]=""}catch(s){i.e(s)}finally{i.f()}}if((y=n(a,r))&&"string"==typeof y){e.next=16;break}return e.abrupt("return",null);case 16:if(m=(0,h.ad)(y).toString(),!(b=this._symbolCache.get(m))){e.next=19;break}return e.abrupt("return",(b.catch((function(){T._symbolCache.pop(m)})),b));case 19:d=y.split(";"),v=[],g=[],k=(0,o.Z)(d),e.prev=21,k.s();case 23:if((x=k.n()).done){e.next=55;break}if(!(_=x.value)){e.next=53;break}if(!_.includes("po:")){e.next=31;break}3===(Z=_.substr(3).split("|")).length&&(w=Z[0],S=Z[1],M=Z[2],"DashTemplate"===S?M=M.split(" ").map((function(e){return Number(e)})):"Color"===S?(C=new f.l(M).toRgba(),M=[C[0],C[1],C[2],255*C[3]]):M=Number(M),g.push({primitiveName:w,propertyName:S,value:M})),e.next=53;break;case 31:if(!_.includes("|")){e.next=52;break}P=(0,o.Z)(_.split("|")),e.prev=33,P.s();case 35:if((I=P.n()).done){e.next=42;break}if(R=I.value,!this._itemNames.has(R)){e.next=40;break}return v.push(R),e.abrupt("break",42);case 40:e.next=35;break;case 42:e.next=47;break;case 44:e.prev=44,e.t1=e.catch(33),P.e(e.t1);case 47:return e.prev=47,P.f(),e.finish(47);case 50:e.next=53;break;case 52:this._itemNames.has(_)&&v.push(_);case 53:e.next=23;break;case 55:e.next=60;break;case 57:e.prev=57,e.t2=e.catch(21),k.e(e.t2);case 60:return e.prev=60,k.f(),e.finish(60);case 63:return L=!(0,h.r)(t.geometry)||!t.geometry.hasZ&&"point"===t.geometry.type,N=this._cimPartsToCIMSymbol(v,g,L,r),e.abrupt("return",(this._symbolCache.put(m,N,1),N));case 65:case"end":return e.stop()}}),e,this,[[1,7],[21,57,60,63],[33,44,47,50]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"fetchResources",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(t){var r,n,u,l,c,f,y,b,v,g,k,x,_,Z,w,S,M=this;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._dictionaryPromise){e.next=2;break}return e.abrupt("return",this._dictionaryPromise);case 2:if(this.url){e.next=4;break}return e.abrupt("return",void d.error("no valid URL!"));case 4:return r=(0,p.U)(this.url+"/resources/styles/dictionary-info.json",{responseType:"json",query:{f:"json"},signal:(0,h.r)(t)?t.signal:null}),e.next=7,Promise.all([r,(0,m.a)()]);case 7:if(n=e.sent,u=(0,i.Z)(n,1),l=u[0].data){e.next=12;break}throw this._dictionaryPromise=null,new h.a("esri.renderers.DictionaryRenderer","Bad dictionary data!");case 12:if(c=l.expression,f=l.authoringInfo,this._refSymbolUrlTemplate=this.url+"/"+l.cimRefTemplateUrl,this._itemNames=new Set(l.itemsNames),this._symbolFields=f.symbol,y={},this.config)for(v in b=this.config)y[v]=b[v];if(f.configuration){g=(0,o.Z)(f.configuration);try{for(g.s();!(k=g.n()).done;)x=k.value,y.hasOwnProperty(x.name)||(y[x.name]=x.value)}catch(s){g.e(s)}finally{g.f()}}if(_=[],(0,h.r)(t)&&t.fields&&this.fieldMap){Z=(0,o.Z)(this._symbolFields);try{for(S=function(){var e=w.value,r=M.fieldMap[e],n=t.fields.filter((function(e){return e.name===r}));n.length>0&&_.push((0,a.Z)((0,a.Z)({},n[0]),{},{name:e}))},Z.s();!(w=Z.n()).done;)S()}catch(s){Z.e(s)}finally{Z.f()}}return e.abrupt("return",(this._dictionaryPromise=(0,m.n)(c,(0,h.r)(t)?t.spatialReference:null,_,y).then((function(e){var t={scale:0};return function(r,n){var a=e.repurposeFeature({geometry:null,attributes:r});return t.scale=(0,h.r)(n)?n.scale:void 0,e.evaluate({$feature:a,$view:t})}})).catch((function(e){return d.error("Creating dictinoary expression failed:",e),null})),this._dictionaryPromise));case 20:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_cimPartsToCIMSymbol",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(t,r,n,a){var i,u,l,c,f,p;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(i=new Array(t.length),u=0;u<t.length;u++)i[u]=this._getSymbolPart(t[u],a);return e.next=4,Promise.all(i);case 4:l=e.sent,c=this.fieldMap,f=(0,o.Z)(l);try{for(f.s();!(p=f.n()).done;)k(p.value,c)}catch(s){f.e(s)}finally{f.f()}return e.abrupt("return",new b.d({data:this._combineSymbolParts(l,r,n)}));case 9:case"end":return e.stop()}}),e,this)})));return function(t,r,n,a){return e.apply(this,arguments)}}()},{key:"_getSymbolPart",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(t,r){var n,i;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._ongoingRequests.has(t)){e.next=2;break}return e.abrupt("return",this._ongoingRequests.get(t).then((function(e){return e.data})));case 2:return n=this._refSymbolUrlTemplate.replace(/\{itemName\}/gi,t),i=(0,p.U)(n,(0,a.Z)({responseType:"json",query:{f:"json"}},r)),this._ongoingRequests.set(t,i),e.prev=4,e.next=7,i;case 7:return e.abrupt("return",e.sent.data);case 10:throw e.prev=10,e.t0=e.catch(4),this._ongoingRequests.delete(t),e.t0;case 13:case"end":return e.stop()}}),e,this,[[4,10]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_combineSymbolParts",value:function(e,t,r){if(!e||0===e.length)return null;var i=(0,a.Z)({},e[0]);if(e.length>1){i.symbolLayers=[];var s,u=(0,o.Z)(e);try{for(u.s();!(s=u.n()).done;){var l,c=s.value;(l=i.symbolLayers).unshift.apply(l,(0,n.Z)(c.symbolLayers))}}catch(f){u.e(f)}finally{u.f()}}return r&&(i.callout=v),{type:"CIMSymbolReference",symbol:i,primitiveOverrides:t}}}]),e}();function k(e,t){if(e){var r=e.symbolLayers;if(r)for(var n=r.length;n--;){var a=r[n];a&&!1!==a.enable&&"CIMVectorMarker"===a.type&&x(a,t)}}}function x(e,t){var r=e.markerGraphics;if(r){var n,a=(0,o.Z)(r);try{for(a.s();!(n=a.n()).done;){var i=n.value;if(i){var s=i.symbol;if(s)switch(s.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":k(s,t);break;case"CIMTextSymbol":s.fieldMap=t}}}}catch(u){a.e(u)}finally{a.f()}}}}}]);
//# sourceMappingURL=8665.8b248274.chunk.js.map