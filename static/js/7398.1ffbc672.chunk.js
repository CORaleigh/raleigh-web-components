"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[7398],{92355:function(t,e,r){r.d(e,{t:function(){return n}});var n={type:String,json:{read:{source:"token"},write:{target:"token"}}}},67398:function(t,e,r){r.r(e),r.d(e,{addressToLocations:function(){return p.d},addressesToLocations:function(){return Z},locationToAddress:function(){return p.n},suggestLocations:function(){return p.u}});var n=r(74165),o=r(1413),i=r(15861),a=r(43144),u=r(15671),s=r(60136),c=r(29388),p=r(74098),l=r(40558),y=r(39994),f=r(48848),d=(r(74384),r(40114)),v=(r(93661),r(82474)),g=(r(92355),r(46817),function(t){(0,s.Z)(r,t);var e=(0,c.Z)(r);function r(t){var n;return(0,u.Z)(this,r),(n=e.call(this,t)).addresses=null,n.categories=null,n.countryCode=null,n.locationType=null,n.outSpatialReference=null,n}return(0,a.Z)(r)}(d.l));(0,f.e)([(0,f.y)({type:[Object],json:{read:{reader:function(t){return t&&t.records?t.records.map((function(t){return t.attributes})):null}},write:{writer:function(t,e){var r=[];Array.isArray(t)&&t.forEach((function(t){r.push({attributes:t})})),e.addresses={records:r}}}}})],g.prototype,"addresses",void 0),(0,f.e)([(0,f.y)({type:[String],json:{read:{source:"category",reader:function(t){return t?t.split(","):null}},write:{target:"category",writer:function(t,e){e.category=t?t.join(","):null}}}})],g.prototype,"categories",void 0),(0,f.e)([(0,f.y)({type:String,json:{read:{source:"sourceCountry"},write:{target:"sourceCountry"}}})],g.prototype,"countryCode",void 0),(0,f.e)([(0,f.y)({type:String,json:{write:!0}})],g.prototype,"locationType",void 0),(0,f.e)([(0,f.y)({type:v.k,json:{read:{source:"outSR"},write:{target:"outSR"}}})],g.prototype,"outSpatialReference",void 0),(g=(0,f.e)([(0,f.n)("esri.rest.support.AddressesToLocationsParameters")],g)).from=(0,f.b)(g);var w=g;function Z(t,e,r){return S.apply(this,arguments)}function S(){return S=(0,i.Z)((0,n.Z)().mark((function t(e,r,i){var a,u,s,c,p;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=w.from(r),a=(0,y.f)(e),u=(0,o.Z)((0,o.Z)({},r.toJSON()),{},{f:"json"}),s=(0,y.s)((0,o.Z)((0,o.Z)({},a.query),u)),c=(0,y.i)(s,i),p="".concat(a.path,"/geocodeAddresses"),t.abrupt("return",(0,l.U)(p,c).then(h));case 3:case"end":return t.stop()}}),t)}))),S.apply(this,arguments)}function h(t){var e=t.data;if(!e)return[];var r=e.locations,n=e.spatialReference;return r?r.map((function(t){var e=t.location;return e&&(e.spatialReference=n),p.b.fromJSON(t)})):[]}},74098:function(t,e,r){r.d(e,{a:function(){return N},b:function(){return h},c:function(){return j},d:function(){return b},l:function(){return L},n:function(){return O},u:function(){return q}});var n=r(74165),o=r(1413),i=r(44925),a=r(15861),u=r(43144),s=r(15671),c=r(60136),p=r(29388),l=r(40558),y=r(39994),f=r(48848),d=(r(74384),r(40114)),v=(r(93661),r(92355)),g=r(82474),w=r(46817),Z=["address"];var S=function(t){(0,c.Z)(r,t);var e=(0,p.Z)(r);function r(t){var n;return(0,s.Z)(this,r),(n=e.call(this,t)).address=null,n.attributes=null,n.extent=null,n.location=null,n.score=null,n}return(0,u.Z)(r)}(d.l);(0,f.e)([(0,f.y)({type:String,json:{write:!0}})],S.prototype,"address",void 0),(0,f.e)([(0,f.y)({type:Object,json:{write:!0}})],S.prototype,"attributes",void 0),(0,f.e)([(0,f.y)({type:w.w,json:{write:!0}})],S.prototype,"extent",void 0),(0,f.e)([(0,f.y)({type:g.w,json:{write:!0}})],S.prototype,"location",void 0),(0,f.e)([(0,f.y)({type:Number,json:{write:!0}})],S.prototype,"score",void 0);var h=S=(0,f.e)([(0,f.n)("esri.rest.support.AddressCandidate")],S),m=function(t){(0,c.Z)(r,t);var e=(0,p.Z)(r);function r(t){var n;return(0,s.Z)(this,r),(n=e.call(this,t)).address=null,n.apiKey=null,n.categories=null,n.countryCode=null,n.forStorage=null,n.location=null,n.locationType=null,n.magicKey=null,n.maxLocations=null,n.outFields=null,n.outSpatialReference=null,n.searchExtent=null,n}return(0,u.Z)(r)}(d.l);(0,f.e)([(0,f.y)({type:Object,json:{write:!0}})],m.prototype,"address",void 0),(0,f.e)([(0,f.y)(v.t)],m.prototype,"apiKey",void 0),(0,f.e)([(0,f.y)({type:[String],json:{read:{source:"category",reader:function(t){return t?t.split(","):null}},write:{target:"category",writer:function(t,e){e.category=t?t.join(","):null}}}})],m.prototype,"categories",void 0),(0,f.e)([(0,f.y)({type:String,json:{write:!0}})],m.prototype,"countryCode",void 0),(0,f.e)([(0,f.y)({type:Boolean,json:{write:!0}})],m.prototype,"forStorage",void 0),(0,f.e)([(0,f.y)({type:g.w,json:{write:{writer:function(t,e){e.location=t?t.clone().normalize():null}}}})],m.prototype,"location",void 0),(0,f.e)([(0,f.y)({type:String,json:{write:!0}})],m.prototype,"locationType",void 0),(0,f.e)([(0,f.y)({type:String,json:{write:!0}})],m.prototype,"magicKey",void 0),(0,f.e)([(0,f.y)({type:Number,json:{write:!0}})],m.prototype,"maxLocations",void 0),(0,f.e)([(0,f.y)({type:[String],json:{write:{writer:function(t,e){e.outFields=t?t.join(","):null}}}})],m.prototype,"outFields",void 0),(0,f.e)([(0,f.y)({type:g.k,json:{read:{source:"outSR"},write:{target:"outSR"}}})],m.prototype,"outSpatialReference",void 0),(0,f.e)([(0,f.y)({type:w.w,json:{write:{writer:function(t,e){var r=t?t.shiftCentralMeridian():null;e.searchExtent=r}}}})],m.prototype,"searchExtent",void 0),(m=(0,f.e)([(0,f.n)("esri.rest.support.AddressToLocationsParameters")],m)).from=(0,f.b)(m);var j=m;function b(t,e,r){return x.apply(this,arguments)}function x(){return x=(0,a.Z)((0,n.Z)().mark((function t(e,r,a){var u,s,c,p,f,d,v,g;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=j.from(r),u=(0,y.f)(e),s=r.toJSON(),c=s.address,p=(0,i.Z)(s,Z),f=(0,o.Z)((0,o.Z)((0,o.Z)({},c),p),{},{f:"json"}),d=(0,y.s)((0,o.Z)((0,o.Z)({},u.query),f)),v=(0,y.i)(d,a),g="".concat(u.path,"/findAddressCandidates"),t.abrupt("return",(0,l.U)(g,v).then(R));case 3:case"end":return t.stop()}}),t)}))),x.apply(this,arguments)}function R(t){var e=t.data;if(!e)return[];var r=e.candidates,n=e.spatialReference;return r?r.map((function(t){if(t){var e=t.extent,r=t.location,o=!e||function(t){return t&&"number"==typeof t.xmin&&"number"==typeof t.ymin&&"number"==typeof t.xmax&&"number"==typeof t.ymax}(e);return function(t){return t&&"number"==typeof t.x&&"number"==typeof t.y}(r)&&o?(e&&(e.spatialReference=n),r.spatialReference=n,h.fromJSON(t)):void 0}})):[]}var C=function(t){(0,c.Z)(r,t);var e=(0,p.Z)(r);function r(t){var n;return(0,s.Z)(this,r),(n=e.call(this,t)).apiKey=null,n.location=null,n.locationType=null,n.outSpatialReference=null,n}return(0,u.Z)(r)}(d.l);(0,f.e)([(0,f.y)(v.t)],C.prototype,"apiKey",void 0),(0,f.e)([(0,f.y)({type:g.w,json:{write:{writer:function(t,e){var r=t?t.clone().normalize():null,n=void 0!==r;e.location=n?r:null}}}})],C.prototype,"location",void 0),(0,f.e)([(0,f.y)({type:String,json:{write:!0}})],C.prototype,"locationType",void 0),(0,f.e)([(0,f.y)({type:g.k,json:{read:{source:"outSR"},write:{target:"outSR"}}})],C.prototype,"outSpatialReference",void 0),(C=(0,f.e)([(0,f.n)("esri.rest.support.LocationToAddressParameters")],C)).from=(0,f.b)(C);var N=C;function O(t,e,r){return k.apply(this,arguments)}function k(){return k=(0,a.Z)((0,n.Z)().mark((function t(e,r,i){var a,u,s,c,p;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=N.from(r),a=(0,y.f)(e),u=(0,o.Z)((0,o.Z)({},r.toJSON()),{},{f:"json"}),s=(0,y.s)((0,o.Z)((0,o.Z)({},a.query),u)),c=(0,y.i)(s,i),p="".concat(a.path,"/reverseGeocode"),t.abrupt("return",(0,l.U)(p,c).then(J));case 3:case"end":return t.stop()}}),t)}))),k.apply(this,arguments)}function J(t){var e=t.data;if(e){var r=e.address,n=e.location,o=r&&r.Match_addr||"";return h.fromJSON({address:o,attributes:r||{},location:n,score:100})}}var T=function(t){(0,c.Z)(r,t);var e=(0,p.Z)(r);function r(t){var n;return(0,s.Z)(this,r),(n=e.call(this,t)).isCollection=null,n.magicKey=null,n.text=null,n}return(0,u.Z)(r)}(d.l);(0,f.e)([(0,f.y)({type:Boolean,json:{write:!0}})],T.prototype,"isCollection",void 0),(0,f.e)([(0,f.y)({type:String,json:{write:!0}})],T.prototype,"magicKey",void 0),(0,f.e)([(0,f.y)({type:String,json:{write:!0}})],T.prototype,"text",void 0);var A=T=(0,f.e)([(0,f.n)("esri.rest.support.SuggestionCandidate")],T),K=function(t){(0,c.Z)(r,t);var e=(0,p.Z)(r);function r(t){var n;return(0,s.Z)(this,r),(n=e.call(this,t)).apiKey=null,n.categories=null,n.countryCode=null,n.location=null,n.maxSuggestions=null,n.outSpatialReference=null,n.searchExtent=null,n.text=null,n}return(0,u.Z)(r)}(d.l);(0,f.e)([(0,f.y)(v.t)],K.prototype,"apiKey",void 0),(0,f.e)([(0,f.y)({type:[String],json:{read:{source:"category",reader:function(t){return t?t.split(","):null}},write:{target:"category",writer:function(t,e){e.category=t?t.join(","):null}}}})],K.prototype,"categories",void 0),(0,f.e)([(0,f.y)({type:String,json:{write:!0}})],K.prototype,"countryCode",void 0),(0,f.e)([(0,f.y)({type:g.w,json:{write:{writer:function(t,e){e.location=t?t.clone().normalize():null}}}})],K.prototype,"location",void 0),(0,f.e)([(0,f.y)({type:Number,json:{write:!0}})],K.prototype,"maxSuggestions",void 0),(0,f.e)([(0,f.y)({type:g.k,json:{read:{source:"outSR"},write:{target:"outSR"}}})],K.prototype,"outSpatialReference",void 0),(0,f.e)([(0,f.y)({type:w.w,json:{write:{writer:function(t,e){var r=t?t.shiftCentralMeridian():null;e.searchExtent=JSON.stringify(r)}}}})],K.prototype,"searchExtent",void 0),(0,f.e)([(0,f.y)({type:String,json:{write:!0}})],K.prototype,"text",void 0),(K=(0,f.e)([(0,f.n)("esri.rest.support.SuggestLocationsParameters")],K)).from=(0,f.b)(K);var L=K;function q(t,e,r){return E.apply(this,arguments)}function E(){return E=(0,a.Z)((0,n.Z)().mark((function t(e,r,i){var a,u,s,c,p;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=(0,y.f)(e),u=(0,o.Z)((0,o.Z)({},(r=L.from(r)).toJSON()),{},{f:"json"}),s=(0,y.s)((0,o.Z)((0,o.Z)({},a.query),u)),c=(0,y.i)(s,i),p="".concat(a.path,"/suggest"),t.abrupt("return",(0,l.U)(p,c).then(_));case 2:case"end":return t.stop()}}),t)}))),E.apply(this,arguments)}function _(t){var e=t.data;if(!e)return[];var r=e.suggestions;return r?r.map((function(t){return new A(t)})):[]}},39994:function(t,e,r){r.d(e,{f:function(){return u},i:function(){return a},s:function(){return s}});var n=r(1413),o=r(93661),i=r(40558);function a(t,e){return e?(0,n.Z)((0,n.Z)({},e),{},{query:(0,n.Z)((0,n.Z)({},t),e.query)}):{query:t}}function u(t){return"string"==typeof t?(0,i.j)(t):(0,o.y)(t)}function s(t,e,r){var n={};for(var o in t)if("declaredClass"!==o){var i=t[o];if(null!=i&&"function"!=typeof i)if(Array.isArray(i)){n[o]=[];for(var a=0;a<i.length;a++)n[o][a]=s(i[a])}else if("object"==typeof i)if(i.toJSON){var u=i.toJSON(r&&r[o]);n[o]=e?u:JSON.stringify(u)}else n[o]=e?i:JSON.stringify(i);else n[o]=i}return n}}}]);
//# sourceMappingURL=7398.1ffbc672.chunk.js.map