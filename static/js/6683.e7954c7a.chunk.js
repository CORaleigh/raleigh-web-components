"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[6683],{26683:function(e,t,r){r.r(t),r.d(t,{execute:function(){return c}});var a,n=r(74165),s=r(1413),u=r(15861),o=r(50165);function c(e,t){var r=t.responseType;r?"array-buffer"!==r&&"blob"!==r&&"json"!==r&&"native"!==r&&"native-request-init"!==r&&"text"!==r&&(r="text"):r="json",t.responseType=r;var c=(0,o.g)(t.signal);return delete t.signal,globalThis.invokeStaticMessage("request",{url:e,options:t},{signal:c}).then(function(){var i=(0,u.Z)((0,n.Z)().mark((function u(i){var b,l,p,f,k,x,v;return(0,n.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!i.data){n.next=22;break}if(!(i.data instanceof ArrayBuffer)){n.next=16;break}if("json"!==r&&"text"!==r&&"blob"!==r||(b=new Blob([i.data]),"json"!==r&&"text"!==r||(a||(a=new FileReaderSync),f=a.readAsText(b),"json"!==r))){n.next=14;break}n.prev=3,l=JSON.parse(f||null),n.next=11;break;case 7:throw n.prev=7,n.t0=n.catch(3),x=(0,s.Z)((0,s.Z)({},n.t0),{},{url:e,requestOptions:t}),new o.a("request:server",n.t0.message,x);case 11:if(!l.error){n.next=14;break}throw v=(0,s.Z)((0,s.Z)({},l.error),{},{url:e,requestOptions:t}),new o.a("request:server",l.error.message,v);case 14:n.next=22;break;case 16:if(n.t1="native"===r,!n.t1){n.next=22;break}return i.data.signal=c,n.next=21,fetch(i.data.url,i.data);case 21:p=n.sent;case 22:n.t2=r,n.next="blob"===n.t2?25:"json"===n.t2?27:"native"===n.t2?29:"text"===n.t2?31:33;break;case 25:return k=b,n.abrupt("break",34);case 27:return k=l,n.abrupt("break",34);case 29:return k=p,n.abrupt("break",34);case 31:return k=f,n.abrupt("break",34);case 33:k=i.data;case 34:return n.abrupt("return",{data:k,requestOptions:t,ssl:i.ssl,url:e});case 35:case"end":return n.stop()}}),u,null,[[3,7]])})));return function(e){return i.apply(this,arguments)}}())}}}]);
//# sourceMappingURL=6683.e7954c7a.chunk.js.map