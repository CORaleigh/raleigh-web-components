"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[699],{30699:function(e,r,n){n.r(r),n.d(r,{clearBoundingBoxCache:function(){return h},computeIconLayerResourceSize:function(){return w},computeLayerResourceSize:function(){return y},computeLayerSize:function(){return b},computeObjectLayerResourceSize:function(){return k}});var t=n(74165),u=n(15861),o=n(57714),i=n(23132),c=n(47626),a=n(75610),s=n(72820),p=n(24980),f=(n(25316),n(21583),n(80262),n(30709),n(70441),n(78311),n(2760),n(3114),n(50448),n(50526),n(91204),n(36460),n(22144),n(78674),n(66307),n(88370),n(96349),n(80175),n(9055),n(79611),n(43920),n(2157),l());function l(){return new c.e(50)}function h(){f=l()}function y(e,r){if("icon"===e.type)return w(e,r);if("object"===e.type)return k(e,r);throw new i.a("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}function b(e,r){return m.apply(this,arguments)}function m(){return(m=(0,u.Z)((0,t.Z)().mark((function e(r,n){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("icon"!==r.type){e.next=2;break}return e.abrupt("return",v(r,n));case 2:if("object"!==r.type){e.next=4;break}return e.abrupt("return",Z(r,n));case 4:throw new i.a("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,r){return d.apply(this,arguments)}function d(){return(d=(0,u.Z)((0,t.Z)().mark((function e(r,n){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.resource.href){e.next=2;break}return e.abrupt("return",x(r.resource.href).then((function(e){return[e.width,e.height]})));case 2:if(!r.resource.primitive){e.next=4;break}return e.abrupt("return",(0,a.r)(n)?[n,n]:[256,256]);case 4:throw new i.a("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,r){return w(e,r).then((function(r){if(null==e.size)return r;var n=r[0]/r[1];return n>1?[e.size,e.size/n]:[e.size*n,e.size]}))}function x(e){return(0,o.U)(e,{responseType:"image"}).then((function(e){return e.data}))}function k(e,r){return function(e,r){return g.apply(this,arguments)}(e,r).then((function(e){return(0,s.F)(e)}))}function Z(e,r){return z.apply(this,arguments)}function z(){return(z=(0,u.Z)((0,t.Z)().mark((function e(r,n){var u;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(r,n);case 2:return u=e.sent,e.abrupt("return",(0,p.t)(u,r));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=(0,u.Z)((0,t.Z)().mark((function e(r,u){var o,c,l,h,y,b;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.isPrimitive){e.next=11;break}if(o=r.resource.href,void 0===(c=f.get(o))){e.next=4;break}return e.abrupt("return",c);case 4:return e.next=6,Promise.all([n.e(7566),n.e(138),n.e(3262),n.e(1349),n.e(7553),n.e(1309),n.e(173)]).then(n.bind(n,91309)).then((function(e){return e.bF}));case 6:return l=e.sent,e.next=9,l.fetch(o,{disableTextures:!0});case 9:return h=e.sent,e.abrupt("return",(f.put(o,h.referenceBoundingBox),h.referenceBoundingBox));case 11:if(y=null,r.resource&&r.resource.primitive&&(y=(0,s.a)((0,p.u)(r.resource.primitive)),(0,a.r)(u)))for(b=0;b<y.length;b++)y[b]*=u;return e.abrupt("return",y?Promise.resolve(y):Promise.reject(new i.a("symbol:invalid-resource","The symbol does not have a valid resource")));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=699.03305e61.chunk.js.map