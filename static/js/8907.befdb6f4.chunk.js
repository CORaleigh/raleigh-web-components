"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[8907],{98907:function(e,r,n){n.r(r),n.d(r,{createLabelFunction:function(){return x},formatField:function(){return b}});var t=n(74165),a=n(37762),u=n(15861),i=n(23132),s=n(41742),l=n(50526),o=n(19967),c=(n(75610),n(21583),n(57714),n(43920),n(91204),n(80262),n(30709),n(70441),n(36460),i.s.getLogger("esri.layers.support.labelFormatUtils")),p={type:"simple",evaluate:function(){return null}},f={getAttribute:function(e,r){return e.field(r)}};function x(e,r,n){return v.apply(this,arguments)}function v(){return v=(0,u.Z)((0,t.Z)().mark((function e(r,a,u){var s,x,v,g,w,d,h;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r&&r.symbol){e.next=2;break}return e.abrupt("return",p);case 2:if(s=r.where,x=(0,o.x)(r),!s){e.next=10;break}return e.next=7,n.e(1019).then(n.bind(n,81019));case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=null;case 11:if(v=e.t0,"arcade"!==x.type){e.next=19;break}return e.next=15,(0,l.s)(x.expression,u,a);case 15:w=e.sent,g={type:"arcade",evaluate:function(e){try{var r=w.evaluate({$feature:"attributes"in e?w.repurposeFeature(e):e});if(null!=r)return r.toString()}catch(u){c.error(new i.a("arcade-expression-error","Encountered an error when evaluating label expression for feature",{feature:e,expression:x}))}return null},needsHydrationToEvaluate:function(){return null==(0,o._)(x.expression)}},e.next=20;break;case 19:g={type:"simple",evaluate:function(e){return x.expression.replace(/{[^}]*}/g,(function(r){var n=r.slice(1,-1),t=a.get(n);if(!t)return r;var u=null;return"attributes"in e?e&&e.attributes&&(u=e.attributes[t.name]):u=e.field(t.name),null==u?"":b(u,t)}))}};case 20:if(!s){e.next=30;break}e.prev=21,d=v.WhereClause.create(s,a),e.next=28;break;case 25:return e.prev=25,e.t1=e.catch(21),e.abrupt("return",(c.error(new i.a("bad-where-clause","Encountered an error when evaluating where clause, ignoring",{where:s,error:e.t1})),p));case 28:h=g.evaluate,g.evaluate=function(e){var r="attributes"in e?void 0:f;try{if(d.testFeature(e,r))return h(e)}catch(n){c.error(new i.a("bad-where-clause","Encountered an error when evaluating where clause for feature",{where:s,feature:e,error:n}))}return null};case 30:return e.abrupt("return",g);case 31:case"end":return e.stop()}}),e,null,[[21,25]])}))),v.apply(this,arguments)}function b(e,r){if(null==e)return"";var n=r.domain;if(n)if("codedValue"===n.type||"coded-value"===n.type){var t,u=e,i=(0,a.Z)(n.codedValues);try{for(i.s();!(t=i.n()).done;){var o=t.value;if(o.code===u)return o.name}}catch(v){i.e(v)}finally{i.f()}}else if("range"===n.type){var c=+e,p="range"in n?n.range[0]:n.minValue,f="range"in n?n.range[1]:n.maxValue;if(p<=c&&c<=f)return n.name}var x=e;return"date"===r.type||"esriFieldTypeDate"===r.type?x=(0,s.L)(x,(0,s.S)("short-date")):(0,l.B)(r)&&(x=(0,s.m)(+x)),x||""}},19967:function(e,r,n){n.d(r,{_:function(){return y},f:function(){return x},g:function(){return v},u:function(){return p},w:function(){return b},x:function(){return f}});var t=n(23132),a="__begin__",u="__end__",i=new RegExp(a,"ig"),s=new RegExp(u,"ig"),l=new RegExp("^"+a,"i"),o=new RegExp(u+"$","i"),c='"';function p(e){return e.replace(new RegExp("\\{","g"),"[").replace(new RegExp("\\}","g"),"]")}function f(e){var r={expression:"",type:"none"};return e.labelExpressionInfo?e.labelExpressionInfo.value?(r.expression=e.labelExpressionInfo.value,r.type="conventional"):e.labelExpressionInfo.expression&&(r.expression=e.labelExpressionInfo.expression,r.type="arcade"):null!=e.labelExpression&&(r.expression=function(e){return e.replace(new RegExp("\\[","g"),"{").replace(new RegExp("\\]","g"),"}")}(e.labelExpression),r.type="conventional"),r}function x(e){var r=f(e);if(!r)return null;switch(r.type){case"conventional":return b(r.expression);case"arcade":return r.expression}return null}function v(e){var r=f(e);if(!r)return null;switch(r.type){case"conventional":return function(e){var r=e.match(g);return r&&r[1].trim()||null}(r.expression);case"arcade":return y(r.expression)}return null}function b(e){var r;return e?(r=(0,t.r)(e,(function(e){return a+'$feature["'+e+'"]'+u})),r=l.test(r)?r.replace(l,""):c+r,r=(r=o.test(r)?r.replace(o,""):r+c).replace(i,'" + ').replace(s,' + "')):r='""',r}var g=/^\s*\{([^}]+)\}\s*$/i;var w=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*$/i,d=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,h=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])([\w\s]+)(\1)\s*\));?\s*$/i;function y(e){if(!e)return null;var r=w.exec(e)||d.exec(e);return r?r[1]||r[3]:(r=h.exec(e))?r[2]:null}}}]);
//# sourceMappingURL=8907.befdb6f4.chunk.js.map