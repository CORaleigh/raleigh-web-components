"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[8773],{55827:function(e,t,n){n.d(t,{d:function(){return c}});var r=n(37762),i=n(15671),a=n(43144),s=n(50526);function u(e){return"oid"===e.type||"esriFieldTypeOID"===e.type}function l(e){return"global-id"===e.type||"esriFieldTypeGlobalID"===e.type}var c=function(){function e(t){if((0,i.Z)(this,e),this.fields=t,this._fieldsMap=new Map,this._dateFieldsSet=new Set,this._numericFieldsSet=new Set,this.dateFields=[],this.numericFields=[],this._requiredFields=null,t){var n,a,c=[],f=(0,r.Z)(t);try{for(f.s();!(n=f.n()).done;){var p=n.value,d=p&&p.name;if(d){var h=o(d);this._fieldsMap.set(d,p),this._fieldsMap.set(h,p),c.push(h),"date"===(a=p).type||"esriFieldTypeDate"===a.type?(this.dateFields.push(p),this._dateFieldsSet.add(p)):(0,s.B)(p)&&(this._numericFieldsSet.add(p),this.numericFields.push(p)),u(p)||l(p)||(p.editable=null==p.editable||!!p.editable,p.nullable=null==p.nullable||!!p.nullable)}}}catch(b){f.e(b)}finally{f.f()}c.sort(),this.uid=c.join(",")}}return(0,a.Z)(e,[{key:"destroy",value:function(){this._fieldsMap.clear()}},{key:"requiredFields",get:function(){if(!this._requiredFields){this._requiredFields=[];var e,t=(0,r.Z)(this.fields);try{for(t.s();!(e=t.n()).done;){var n=e.value;u(n)||l(n)||n.nullable||void 0!==(0,s.P)(n)||this._requiredFields.push(n)}}catch(i){t.e(i)}finally{t.f()}}return this._requiredFields}},{key:"has",value:function(e){return null!=this.get(e)}},{key:"get",value:function(e){return null!=e?this._fieldsMap.get(e)||this._fieldsMap.get(o(e)):void 0}},{key:"isDateField",value:function(e){return this._dateFieldsSet.has(this.get(e))}},{key:"isNumericField",value:function(e){return this._numericFieldsSet.has(this.get(e))}},{key:"normalizeFieldName",value:function(e){var t=this.get(e);if(t)return t.name}}]),e}();function o(e){return e.toLowerCase().trim()}},8773:function(e,t,n){n.r(t),n.d(t,{registerFunctions:function(){return p}});var r=n(74165),i=n(15861),a=n(28969),s=n(16485),u=n(37116),l=n(30709),c=n(46248);n(91204),n(23132),n(75610),n(21583),n(80262),n(36460),n(57714),n(30604),n(61495),n(33642),n(43920),n(44455),n(92029),n(47642),n(43124),n(70441),n(50448),n(69797),n(81019),n(55827),n(50526),n(6794),n(33703),n(49580),n(41742),n(54841);function o(e){return e instanceof l.p}function f(e,t,n,f){return f(e,t,function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t,i,f){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(f.length<2)){e.next=2;break}throw new Error("Missing Parameters");case 2:if(null!==(f=(0,s.y)(f))[0]||null!==f[1]){e.next=4;break}return e.abrupt("return",!1);case 4:if(!(0,s.J)(f[0])){e.next=10;break}if(!(f[1]instanceof l.p)){e.next=7;break}return e.abrupt("return",new u.d({parentfeatureset:f[0],relation:n,relationGeom:f[1]}));case 7:if(null!==f[1]){e.next=9;break}return e.abrupt("return",new u.g({parentfeatureset:f[0]}));case 9:case 27:throw new Error("Spatial Relation cannot accept this parameter type");case 10:if(!o(f[0])){e.next=28;break}if(!o(f[1])){e.next=23;break}e.t0=n,e.next="esriSpatialRelEnvelopeIntersects"===e.t0?15:"esriSpatialRelIntersects"===e.t0?16:"esriSpatialRelContains"===e.t0?17:"esriSpatialRelOverlaps"===e.t0?18:"esriSpatialRelWithin"===e.t0?19:"esriSpatialRelTouches"===e.t0?20:"esriSpatialRelCrosses"===e.t0?21:22;break;case 15:return e.abrupt("return",(0,c.g)((0,a.q)(f[0]),(0,a.q)(f[1])));case 16:return e.abrupt("return",(0,c.g)(f[0],f[1]));case 17:return e.abrupt("return",(0,c.p)(f[0],f[1]));case 18:return e.abrupt("return",(0,c.O)(f[0],f[1]));case 19:return e.abrupt("return",(0,c.x)(f[0],f[1]));case 20:return e.abrupt("return",(0,c.A)(f[0],f[1]));case 21:return e.abrupt("return",(0,c.w)(f[0],f[1]));case 22:throw new Error("Unrecognised Relationship");case 23:if(!(0,s.J)(f[1])){e.next=25;break}return e.abrupt("return",new u.d({parentfeatureset:f[1],relation:n,relationGeom:f[0]}));case 25:if(null!==f[1]){e.next=27;break}return e.abrupt("return",!1);case 28:if(null===f[0]){e.next=30;break}throw new Error("Spatial Relation cannot accept this parameter type");case 30:return e.abrupt("return",(0,s.J)(f[1])?new u.g({parentfeatureset:f[1]}):!(f[1]instanceof l.p||null===f[1])&&void 0);case 31:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}())}function p(e){"async"===e.mode&&(e.functions.intersects=function(t,n){return f(t,n,"esriSpatialRelIntersects",e.standardFunctionAsync)},e.functions.envelopeintersects=function(t,n){return f(t,n,"esriSpatialRelEnvelopeIntersects",e.standardFunctionAsync)},e.signatures.push({name:"envelopeintersects",min:"2",max:"2"}),e.functions.contains=function(t,n){return f(t,n,"esriSpatialRelContains",e.standardFunctionAsync)},e.functions.overlaps=function(t,n){return f(t,n,"esriSpatialRelOverlaps",e.standardFunctionAsync)},e.functions.within=function(t,n){return f(t,n,"esriSpatialRelWithin",e.standardFunctionAsync)},e.functions.touches=function(t,n){return f(t,n,"esriSpatialRelTouches",e.standardFunctionAsync)},e.functions.crosses=function(t,n){return f(t,n,"esriSpatialRelCrosses",e.standardFunctionAsync)},e.functions.relate=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){if(n=(0,s.y)(n),(0,s.G)(n,3,3),o(n[0])&&o(n[1]))return(0,c.h)(n[0],n[1],(0,s.X)(n[2]));if(n[0]instanceof l.p&&null===n[1])return!1;if(n[1]instanceof l.p&&null===n[0])return!1;if((0,s.J)(n[0])&&null===n[1])return new u.g({parentfeatureset:n[0]});if((0,s.J)(n[1])&&null===n[0])return new u.g({parentfeatureset:n[1]});if((0,s.J)(n[0])&&n[1]instanceof l.p)return n[0].relate(n[1],(0,s.X)(n[2]));if((0,s.J)(n[1])&&n[0]instanceof l.p)return n[1].relate(n[0],(0,s.X)(n[2]));if(null===n[0]&&null===n[1])return!1;throw new Error("Illegal Argument")}))})}}}]);
//# sourceMappingURL=8773.e14aa56a.chunk.js.map