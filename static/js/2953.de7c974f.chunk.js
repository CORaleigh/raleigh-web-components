"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[2953],{22953:function(n,e,t){t.r(e),t.d(e,{registerFunctions:function(){return b}});var r=t(37762),a=t(74165),i=t(15861),u=t(40558),c=t(58631),s=t(46817),f=t(82474),o=t(46679),l=t(74384),p=t(56162),d=t(47855);t(93661),t(48848),t(59844),t(65094),t(69641),t(40114),t(20302),t(15436),t(52559),t(62466),t(93116),t(84186),t(85113),t(75255),t(46737),t(53586),t(52113);function w(n){return 0===u.a.indexOf("4.")?l.v.fromExtent(n):new l.v({spatialReference:n.spatialReference,rings:[[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]]]})}function h(n,e,t){if((0,c.V)(n,2,2,e,t),n[0]instanceof f.p&&n[1]instanceof f.p);else if(n[0]instanceof f.p&&null===n[1]);else if(n[1]instanceof f.p&&null===n[0]);else if(null!==n[0]||null!==n[1])throw new c.t(e,c.e.InvalidParameter,t)}function v(n,e){return m.apply(this,arguments)}function m(){return(m=(0,i.Z)((0,a.Z)().mark((function n(e,t){var i,u,s,f,p,w,h,v,m,b,x;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("polygon"===e.type||"polyline"===e.type||"extent"===e.type){n.next=2;break}return n.abrupt("return",0);case 2:if(i=1,(e.spatialReference.vcsWkid||e.spatialReference.latestVcsWkid)&&(i=(0,c.T)(e.spatialReference)/(0,d.$)(e.spatialReference)),u=0,"polyline"===e.type){s=(0,r.Z)(e.paths);try{for(s.s();!(f=s.n()).done;)for(p=f.value,w=1;w<p.length;w++)u+=(0,c.U)(p[w],p[w-1],i)}catch(a){s.e(a)}finally{s.f()}}else if("polygon"===e.type){h=(0,r.Z)(e.rings);try{for(h.s();!(v=h.n()).done;){for(m=v.value,b=1;b<m.length;b++)u+=(0,c.U)(m[b],m[b-1],i);(m[0][0]!==m[m.length-1][0]||m[0][1]!==m[m.length-1][1]||void 0!==m[0][2]&&m[0][2]!==m[m.length-1][2])&&(u+=(0,c.U)(m[0],m[m.length-1],i))}}catch(a){h.e(a)}finally{h.f()}}else"extent"===e.type&&(u+=2*(0,c.U)([e.xmin,e.ymin,0],[e.xmax,e.ymin,0],i),u+=2*(0,c.U)([e.xmin,e.ymin,0],[e.xmin,e.ymax,0],i),u*=2,u+=4*Math.abs((0,c.L)(e.zmax,0)*i-(0,c.L)(e.zmin,0)*i));return x=new l.m({hasZ:!1,hasM:!1,spatialReference:e.spatialReference,paths:[[0,0],[0,u]]}),n.abrupt("return",(0,o.F)(x,t));case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function b(n){"async"===n.mode&&(n.functions.disjoint=function(e,t){return n.standardFunctionAsync(e,t,(function(n,r,a){return h(a=(0,c.q)(a),e,t),null===a[0]||null===a[1]||(0,o.A)(a[0],a[1])}))},n.functions.intersects=function(e,t){return n.standardFunctionAsync(e,t,(function(n,r,a){return h(a=(0,c.q)(a),e,t),null!==a[0]&&null!==a[1]&&(0,o.h)(a[0],a[1])}))},n.functions.touches=function(e,t){return n.standardFunctionAsync(e,t,(function(n,r,a){return h(a=(0,c.q)(a),e,t),null!==a[0]&&null!==a[1]&&(0,o.S)(a[0],a[1])}))},n.functions.crosses=function(e,t){return n.standardFunctionAsync(e,t,(function(n,r,a){return h(a=(0,c.q)(a),e,t),null!==a[0]&&null!==a[1]&&(0,o.m)(a[0],a[1])}))},n.functions.within=function(e,t){return n.standardFunctionAsync(e,t,(function(n,r,a){return h(a=(0,c.q)(a),e,t),null!==a[0]&&null!==a[1]&&(0,o.x)(a[0],a[1])}))},n.functions.contains=function(e,t){return n.standardFunctionAsync(e,t,(function(n,r,a){return h(a=(0,c.q)(a),e,t),null!==a[0]&&null!==a[1]&&(0,o.p)(a[0],a[1])}))},n.functions.overlaps=function(e,t){return n.standardFunctionAsync(e,t,(function(n,r,a){return h(a=(0,c.q)(a),e,t),null!==a[0]&&null!==a[1]&&(0,o.O)(a[0],a[1])}))},n.functions.equals=function(e,t){return n.standardFunctionAsync(e,t,(function(n,r,a){return(0,c.V)(a,2,2,e,t),a[0]===a[1]||(a[0]instanceof f.p&&a[1]instanceof f.p?(0,o.g)(a[0],a[1]):!(!(0,c.z)(a[0])||!(0,c.z)(a[1]))&&a[0].getTime()===a[1].getTime())}))},n.functions.relate=function(e,t){return n.standardFunctionAsync(e,t,(function(n,r,a){if(a=(0,c.q)(a),(0,c.V)(a,3,3,e,t),a[0]instanceof f.p&&a[1]instanceof f.p)return(0,o.R)(a[0],a[1],(0,c.K)(a[2]));if(a[0]instanceof f.p&&null===a[1])return!1;if(a[1]instanceof f.p&&null===a[0])return!1;if(null===a[0]&&null===a[1])return!1;throw new c.t(e,c.e.InvalidParameter,t)}))},n.functions.intersection=function(e,t){return n.standardFunctionAsync(e,t,(function(n,r,a){return h(a=(0,c.q)(a),e,t),null===a[0]||null===a[1]?null:(0,o.D)(a[0],a[1])}))},n.functions.union=function(e,t){return n.standardFunctionAsync(e,t,(function(n,r,a){var i=[];if(0===(a=(0,c.q)(a)).length)throw new c.t(e,c.e.WrongNumberOfParameters,t);if(1===a.length)if((0,c.Y)(a[0])){for(var u=(0,c.q)(a[0]),s=0;s<u.length;s++)if(null!==u[s]){if(!(u[s]instanceof f.p))throw new c.t(e,c.e.InvalidParameter,t);i.push(u[s])}}else{if(!(0,c.E)(a[0])){if(a[0]instanceof f.p)return(0,c.s)((0,c.v)(a[0]),e.spatialReference);if(null===a[0])return null;throw new c.t(e,c.e.InvalidParameter,t)}for(var l=(0,c.q)(a[0].toArray()),p=0;p<l.length;p++)if(null!==l[p]){if(!(l[p]instanceof f.p))throw new c.t(e,c.e.InvalidParameter,t);i.push(l[p])}}else for(var d=0;d<a.length;d++)if(null!==a[d]){if(!(a[d]instanceof f.p))throw new c.t(e,c.e.InvalidParameter,t);i.push(a[d])}return 0===i.length?null:(0,o.b)(i)}))},n.functions.difference=function(e,t){return n.standardFunctionAsync(e,t,(function(n,r,a){return h(a=(0,c.q)(a),e,t),null!==a[0]&&null===a[1]?(0,c.v)(a[0]):null===a[0]?null:(0,o.E)(a[0],a[1])}))},n.functions.symmetricdifference=function(e,t){return n.standardFunctionAsync(e,t,(function(n,r,a){return h(a=(0,c.q)(a),e,t),null===a[0]&&null===a[1]?null:null===a[0]?(0,c.v)(a[1]):null===a[1]?(0,c.v)(a[0]):(0,o.k)(a[0],a[1])}))},n.functions.clip=function(e,t){return n.standardFunctionAsync(e,t,(function(n,r,a){if(a=(0,c.q)(a),(0,c.V)(a,2,2,e,t),!(a[1]instanceof s.w)&&null!==a[1])throw new c.t(e,c.e.InvalidParameter,t);if(null===a[0])return null;if(!(a[0]instanceof f.p))throw new c.t(e,c.e.InvalidParameter,t);return null===a[1]?null:(0,o.y)(a[0],a[1])}))},n.functions.cut=function(e,t){return n.standardFunctionAsync(e,t,(function(n,r,a){if(a=(0,c.q)(a),(0,c.V)(a,2,2,e,t),!(a[1]instanceof l.m)&&null!==a[1])throw new c.t(e,c.e.InvalidParameter,t);if(null===a[0])return[];if(!(a[0]instanceof f.p))throw new c.t(e,c.e.InvalidParameter,t);return null===a[1]?[(0,c.v)(a[0])]:(0,o.w)(a[0],a[1])}))},n.functions.area=function(e,t){return n.standardFunctionAsync(e,t,function(){var n=(0,i.Z)((0,a.Z)().mark((function n(r,i,u){var s,l;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((0,c.V)(u,1,2,e,t),null!==(u=(0,c.q)(u))[0]){n.next=2;break}return n.abrupt("return",0);case 2:if(!(0,c.P)(u[0])){n.next=9;break}return n.next=5,u[0].sumArea((0,c.x)((0,c.L)(u[1],-1)),!1,e.abortSignal);case 5:if(s=n.sent,!e.abortSignal.aborted){n.next=8;break}throw new c.t(e,c.e.Cancelled,t);case 8:return n.abrupt("return",s);case 9:if(!(0,c.Y)(u[0])&&!(0,c.E)(u[0])){n.next=12;break}return l=(0,c.y)(u[0],e.spatialReference),n.abrupt("return",null===l?0:(0,o.W)(l,(0,c.x)((0,c.L)(u[1],-1))));case 12:if(u[0]instanceof f.p){n.next=14;break}throw new c.t(e,c.e.InvalidParameter,t);case 14:return n.abrupt("return",(0,o.W)(u[0],(0,c.x)((0,c.L)(u[1],-1))));case 15:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}())},n.functions.areageodetic=function(e,t){return n.standardFunctionAsync(e,t,function(){var n=(0,i.Z)((0,a.Z)().mark((function n(r,i,u){var s,l;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((0,c.V)(u,1,2,e,t),null!==(u=(0,c.q)(u))[0]){n.next=2;break}return n.abrupt("return",0);case 2:if(!(0,c.P)(u[0])){n.next=9;break}return n.next=5,u[0].sumArea((0,c.x)((0,c.L)(u[1],-1)),!0,e.abortSignal);case 5:if(s=n.sent,!e.abortSignal.aborted){n.next=8;break}throw new c.t(e,c.e.Cancelled,t);case 8:return n.abrupt("return",s);case 9:if(!(0,c.Y)(u[0])&&!(0,c.E)(u[0])){n.next=12;break}return l=(0,c.y)(u[0],e.spatialReference),n.abrupt("return",null===l?0:(0,o.K)(l,(0,c.x)((0,c.L)(u[1],-1))));case 12:if(u[0]instanceof f.p){n.next=14;break}throw new c.t(e,c.e.InvalidParameter,t);case 14:return n.abrupt("return",(0,o.K)(u[0],(0,c.x)((0,c.L)(u[1],-1))));case 15:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}())},n.functions.length=function(e,t){return n.standardFunctionAsync(e,t,function(){var n=(0,i.Z)((0,a.Z)().mark((function n(r,i,u){var s,l;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((0,c.V)(u,1,2,e,t),null!==(u=(0,c.q)(u))[0]){n.next=2;break}return n.abrupt("return",0);case 2:if(!(0,c.P)(u[0])){n.next=9;break}return n.next=5,u[0].sumLength((0,c.G)((0,c.L)(u[1],-1)),!1,e.abortSignal);case 5:if(s=n.sent,!e.abortSignal.aborted){n.next=8;break}throw new c.t(e,c.e.Cancelled,t);case 8:return n.abrupt("return",s);case 9:if(!(0,c.Y)(u[0])&&!(0,c.E)(u[0])){n.next=12;break}return l=(0,c.S)(u[0],e.spatialReference),n.abrupt("return",null===l?0:(0,o.F)(l,(0,c.G)((0,c.L)(u[1],-1))));case 12:if(u[0]instanceof f.p){n.next=14;break}throw new c.t(e,c.e.InvalidParameter,t);case 14:return n.abrupt("return",(0,o.F)(u[0],(0,c.G)((0,c.L)(u[1],-1))));case 15:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}())},n.functions.length3d=function(e,t){return n.standardFunctionAsync(e,t,(function(n,r,a){if((0,c.V)(a,1,2,e,t),null===(a=(0,c.q)(a))[0])return 0;if((0,c.Y)(a[0])||(0,c.E)(a[0])){var i=(0,c.S)(a[0],e.spatialReference);return null===i?0:!0===i.hasZ?v(i,(0,c.G)((0,c.L)(a[1],-1))):(0,o.F)(i,(0,c.G)((0,c.L)(a[1],-1)))}if(!(a[0]instanceof f.p))throw new c.t(e,c.e.InvalidParameter,t);return!0===a[0].hasZ?v(a[0],(0,c.G)((0,c.L)(a[1],-1))):(0,o.F)(a[0],(0,c.G)((0,c.L)(a[1],-1)))}))},n.functions.lengthgeodetic=function(e,t){return n.standardFunctionAsync(e,t,function(){var n=(0,i.Z)((0,a.Z)().mark((function n(r,i,u){var s,l;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((0,c.V)(u,1,2,e,t),null!==(u=(0,c.q)(u))[0]){n.next=2;break}return n.abrupt("return",0);case 2:if(!(0,c.P)(u[0])){n.next=9;break}return n.next=5,u[0].sumLength((0,c.G)((0,c.L)(u[1],-1)),!0,e.abortSignal);case 5:if(s=n.sent,!e.abortSignal.aborted){n.next=8;break}throw new c.t(e,c.e.Cancelled,t);case 8:return n.abrupt("return",s);case 9:if(!(0,c.Y)(u[0])&&!(0,c.E)(u[0])){n.next=12;break}return l=(0,c.S)(u[0],e.spatialReference),n.abrupt("return",null===l?0:(0,o.M)(l,(0,c.G)((0,c.L)(u[1],-1))));case 12:if(u[0]instanceof f.p){n.next=14;break}throw new c.t(e,c.e.InvalidParameter,t);case 14:return n.abrupt("return",(0,o.M)(u[0],(0,c.G)((0,c.L)(u[1],-1))));case 15:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}())},n.functions.distance=function(e,t){return n.standardFunctionAsync(e,t,(function(n,r,a){a=(0,c.q)(a),(0,c.V)(a,2,3,e,t);var i=a[0];((0,c.Y)(a[0])||(0,c.E)(a[0]))&&(i=(0,c.H)(a[0],e.spatialReference));var u=a[1];if(((0,c.Y)(a[1])||(0,c.E)(a[1]))&&(u=(0,c.H)(a[1],e.spatialReference)),!(i instanceof f.p))throw new c.t(e,c.e.InvalidParameter,t);if(!(u instanceof f.p))throw new c.t(e,c.e.InvalidParameter,t);return(0,o.d)(i,u,(0,c.G)((0,c.L)(a[2],-1)))}))},n.functions.distancegeodetic=function(e,t){return n.standardFunctionAsync(e,t,(function(n,r,a){a=(0,c.q)(a),(0,c.V)(a,2,3,e,t);var i=a[0],u=a[1];if(!(i instanceof f.w))throw new c.t(e,c.e.InvalidParameter,t);if(!(u instanceof f.w))throw new c.t(e,c.e.InvalidParameter,t);var s=new l.m({paths:[],spatialReference:i.spatialReference});return s.addPath([i,u]),(0,o.M)(s,(0,c.G)((0,c.L)(a[2],-1)))}))},n.functions.densify=function(e,t){return n.standardFunctionAsync(e,t,(function(n,r,a){if(a=(0,c.q)(a),(0,c.V)(a,2,3,e,t),null===a[0])return null;if(!(a[0]instanceof f.p))throw new c.t(e,c.e.InvalidParameter,t);var i=(0,c.r)(a[1]);if(isNaN(i))throw new c.t(e,c.e.InvalidParameter,t);if(i<=0)throw new c.t(e,c.e.InvalidParameter,t);return a[0]instanceof l.v||a[0]instanceof l.m?(0,o.C)(a[0],i,(0,c.G)((0,c.L)(a[2],-1))):a[0]instanceof s.w?(0,o.C)(w(a[0]),i,(0,c.G)((0,c.L)(a[2],-1))):a[0]}))},n.functions.densifygeodetic=function(e,t){return n.standardFunctionAsync(e,t,(function(n,r,a){if(a=(0,c.q)(a),(0,c.V)(a,2,3,e,t),null===a[0])return null;if(!(a[0]instanceof f.p))throw new c.t(e,c.e.InvalidParameter,t);var i=(0,c.r)(a[1]);if(isNaN(i))throw new c.t(e,c.e.InvalidParameter,t);if(i<=0)throw new c.t(e,c.e.InvalidParameter,t);return a[0]instanceof l.v||a[0]instanceof l.m?(0,o.U)(a[0],i,(0,c.G)((0,c.L)(a[2],-1))):a[0]instanceof s.w?(0,o.U)(w(a[0]),i,(0,c.G)((0,c.L)(a[2],-1))):a[0]}))},n.functions.generalize=function(e,t){return n.standardFunctionAsync(e,t,(function(n,r,a){if(a=(0,c.q)(a),(0,c.V)(a,2,4,e,t),null===a[0])return null;if(!(a[0]instanceof f.p))throw new c.t(e,c.e.InvalidParameter,t);var i=(0,c.r)(a[1]);if(isNaN(i))throw new c.t(e,c.e.InvalidParameter,t);return(0,o.B)(a[0],i,(0,c.I)((0,c.L)(a[2],!0)),(0,c.G)((0,c.L)(a[3],-1)))}))},n.functions.buffer=function(e,t){return n.standardFunctionAsync(e,t,(function(n,r,a){if(a=(0,c.q)(a),(0,c.V)(a,2,3,e,t),null===a[0])return null;if(!(a[0]instanceof f.p))throw new c.t(e,c.e.InvalidParameter,t);var i=(0,c.r)(a[1]);if(isNaN(i))throw new c.t(e,c.e.InvalidParameter,t);return 0===i?(0,c.v)(a[0]):(0,o.L)(a[0],i,(0,c.G)((0,c.L)(a[2],-1)))}))},n.functions.buffergeodetic=function(e,t){return n.standardFunctionAsync(e,t,(function(n,r,a){if(a=(0,c.q)(a),(0,c.V)(a,2,3,e,t),null===a[0])return null;if(!(a[0]instanceof f.p))throw new c.t(e,c.e.InvalidParameter,t);var i=(0,c.r)(a[1]);if(isNaN(i))throw new c.t(e,c.e.InvalidParameter,t);return 0===i?(0,c.v)(a[0]):(0,o.P)(a[0],i,(0,c.G)((0,c.L)(a[2],-1)))}))},n.functions.offset=function(e,t){return n.standardFunctionAsync(e,t,(function(n,r,a){if(a=(0,c.q)(a),(0,c.V)(a,2,6,e,t),null===a[0])return null;if(!(a[0]instanceof l.v||a[0]instanceof l.m))throw new c.t(e,c.e.InvalidParameter,t);var i=(0,c.r)(a[1]);if(isNaN(i))throw new c.t(e,c.e.InvalidParameter,t);var u=(0,c.r)((0,c.L)(a[4],10));if(isNaN(u))throw new c.t(e,c.e.InvalidParameter,t);var s=(0,c.r)((0,c.L)(a[5],0));if(isNaN(s))throw new c.t(e,c.e.InvalidParameter,t);return(0,o.v)(a[0],i,(0,c.G)((0,c.L)(a[2],-1)),(0,c.K)((0,c.L)(a[3],"round")).toLowerCase(),u,s)}))},n.functions.rotate=function(e,t){return n.standardFunctionAsync(e,t,(function(n,r,a){a=(0,c.q)(a),(0,c.V)(a,2,3,e,t);var i=a[0];if(null===i)return null;if(!(i instanceof f.p))throw new c.t(e,c.e.InvalidParameter,t);i instanceof s.w&&(i=l.v.fromExtent(i));var u=(0,c.r)(a[1]);if(isNaN(u))throw new c.t(e,c.e.InvalidParameter,t);var p=(0,c.L)(a[2],null);if(null===p)return(0,o.H)(i,u);if(p instanceof f.w)return(0,o.H)(i,u,p);throw new c.t(e,c.e.InvalidParameter,t)}))},n.functions.centroid=function(e,t){return n.standardFunctionAsync(e,t,(function(n,r,a){if(a=(0,c.q)(a),(0,c.V)(a,1,1,e,t),null===a[0])return null;var i=a[0];if(((0,c.Y)(a[0])||(0,c.E)(a[0]))&&(i=(0,c.H)(a[0],e.spatialReference)),null===i)return null;if(!(i instanceof f.p))throw new c.t(e,c.e.InvalidParameter,t);return i instanceof f.w?(0,c.s)((0,c.v)(a[0]),e.spatialReference):i instanceof l.v?i.centroid:i instanceof l.m?(0,c.O)(i):i instanceof l.u?(0,c.R)(i):i instanceof s.w?i.center:null}))},n.functions.multiparttosinglepart=function(e,t){return n.standardFunctionAsync(e,t,function(){var n=(0,i.Z)((0,a.Z)().mark((function n(r,i,u){var d,w,h,v,m,b,x,y,g,P,k,I,F;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(u=(0,c.q)(u),(0,c.V)(u,1,1,e,t),d=[],null!==u[0]){n.next=4;break}return n.abrupt("return",null);case 4:if(u[0]instanceof f.p){n.next=6;break}throw new c.t(e,c.e.InvalidParameter,t);case 6:if(!(u[0]instanceof f.w)){n.next=8;break}return n.abrupt("return",[(0,c.s)((0,c.v)(u[0]),e.spatialReference)]);case 8:if(!(u[0]instanceof s.w)){n.next=10;break}return n.abrupt("return",[(0,c.s)((0,c.v)(u[0]),e.spatialReference)]);case 10:return n.next=12,(0,o.N)(u[0]);case 12:if(!((w=n.sent)instanceof l.v)){n.next=30;break}for(h=[],v=[],m=0;m<w.rings.length;m++)w.isClockwise(w.rings[m])?(b=(0,p.v)({rings:[w.rings[m]],hasZ:!0===w.hasZ,hazM:!0===w.hasM,spatialReference:w.spatialReference.toJSON()}),h.push(b)):v.push({ring:w.rings[m],pt:w.getPoint(m,0)});x=0;case 17:if(!(x<v.length)){n.next=29;break}y=0;case 19:if(!(y<h.length)){n.next=26;break}if(!h[y].contains(v[x].pt)){n.next=23;break}return h[y].addRing(v[x].ring),n.abrupt("break",26);case 23:y++,n.next=19;break;case 26:x++,n.next=17;break;case 29:return n.abrupt("return",h);case 30:if(!(w instanceof l.m)){n.next=34;break}for(g=[],P=0;P<w.paths.length;P++)k=(0,p.v)({paths:[w.paths[P]],hasZ:!0===w.hasZ,hazM:!0===w.hasM,spatialReference:w.spatialReference.toJSON()}),g.push(k);return n.abrupt("return",g);case 34:if(!(u[0]instanceof l.u)){n.next=38;break}for(I=(0,c.s)((0,c.v)(u[0]),e.spatialReference),F=0;F<I.points.length;F++)d.push(I.getPoint(F));return n.abrupt("return",d);case 38:return n.abrupt("return",null);case 39:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}())},n.functions.issimple=function(e,t){return n.standardFunctionAsync(e,t,(function(n,r,a){if(a=(0,c.q)(a),(0,c.V)(a,1,1,e,t),null===a[0])return!0;if(!(a[0]instanceof f.p))throw new c.t(e,c.e.InvalidParameter,t);return(0,o.J)(a[0])}))},n.functions.simplify=function(e,t){return n.standardFunctionAsync(e,t,(function(n,r,a){if(a=(0,c.q)(a),(0,c.V)(a,1,1,e,t),null===a[0])return null;if(!(a[0]instanceof f.p))throw new c.t(e,c.e.InvalidParameter,t);return(0,o.N)(a[0])}))},n.functions.convexhull=function(e,t){return n.standardFunctionAsync(e,t,(function(n,r,a){if(a=(0,c.q)(a),(0,c.V)(a,1,1,e,t),null===a[0])return null;if(!(a[0]instanceof f.p))throw new c.t(e,c.e.InvalidParameter,t);return(0,o.j)(a[0])}))})}}}]);
//# sourceMappingURL=2953.de7c974f.chunk.js.map