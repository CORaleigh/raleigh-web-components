"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[5428],{25428:function(e,a,r){r.r(a),r.d(a,{createSymbolSchema:function(){return i}});var t=r(1413),n=r(28329),l=r(85331);r(75610),r(21583),r(23132),r(2760),r(45578),r(6819),r(97566),r(45332),r(77372);function c(e){var a;return"line-marker"===e.type?{type:"line-marker",color:null===(a=e.color)||void 0===a?void 0:a.toJSON(),placement:e.placement,style:e.style}:e.constructor.fromJSON(e.toJSON()).toJSON()}function s(e){return(0,l.A)(e)}function i(e,a,r){if(!e)return null;switch(e.type){case"simple-fill":case"picture-fill":return function(e,a,r){var i=(0,l.f)(n.c.FILL,a),o=r?s(i):i,u=e.clone(),h=u.outline,m=(0,l._)(a.symbologyType);m||(u.outline=null);var y=(0,t.Z)({materialKey:o,hash:u.hash()},c(u));if(m)return y;var p=[];if(p.push(y),h){var f=(0,l.f)(n.c.LINE,(0,t.Z)((0,t.Z)({},a),{},{isOutline:!0})),v=(0,t.Z)({materialKey:r?s(f):f,hash:h.hash()},c(h));p.push(v)}return{type:"composite-symbol",layers:p,hash:p.reduce((function(e,a){return a.hash+e}),"")}}(e,a,r);case"simple-marker":case"picture-marker":return function(e,a,r){var i=(0,l.f)(n.c.MARKER,a),o=r?s(i):i,u=c(e);return(0,t.Z)((0,t.Z)({materialKey:o,hash:e.hash()},u),{},{angle:e.angle,maxVVSize:a.maxVVSize})}(e,a,r);case"simple-line":return function(e,a,r){var i=(0,l._)(a.symbologyType)?n.S.DEFAULT:a.symbologyType,o=(0,l.f)(n.c.LINE,(0,t.Z)((0,t.Z)({},a),{},{symbologyType:i})),u=r?s(o):o,h=e.clone(),m=h.marker;h.marker=null;var y=[];if(y.push((0,t.Z)({materialKey:u,hash:h.hash()},c(h))),m){var p,f=(0,l.f)(n.c.MARKER,a),v=r?s(f):f;m.color=null!==(p=m.color)&&void 0!==p?p:h.color,y.push((0,t.Z)({materialKey:v,hash:m.hash(),lineWidth:h.width},c(m)))}return{type:"composite-symbol",layers:y,hash:y.reduce((function(e,a){return a.hash+e}),"")}}(e,a,r);case"text":return function(e,a,r){var i=(0,l.f)(n.c.TEXT,a),o=r?s(i):i,u=c(e);return(0,t.Z)((0,t.Z)({materialKey:o,hash:e.hash()},u),{},{angle:e.angle,maxVVSize:a.maxVVSize})}(e,a,r);case"label":return function(e,a,r){var c=e.toJSON(),i=(0,l.f)(n.c.LABEL,(0,t.Z)((0,t.Z)({},a),{},{placement:c.labelPlacement}));return(0,t.Z)((0,t.Z)({materialKey:r?s(i):i,hash:e.hash()},c),{},{labelPlacement:c.labelPlacement})}(e,a,r);case"cim":return{type:"cim",rendererKey:a.vvFlags,data:e.data,maxVVSize:a.maxVVSize};case"CIMSymbolReference":return{type:"cim",rendererKey:a.vvFlags,data:e,maxVVSize:a.maxVVSize};case"web-style":return(0,t.Z)((0,t.Z)({},c(e)),{},{type:"web-style",hash:e.hash(),rendererKey:a.vvFlags,maxVVSize:a.maxVVSize});default:throw new Error("symbol not supported ".concat(e.type))}}}}]);
//# sourceMappingURL=5428.dc6deb38.chunk.js.map