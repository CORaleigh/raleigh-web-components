"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[5988],{70863:function(e,t,n){n.d(t,{s:function(){return a},t:function(){return c}});var r=n(15671),o=n(43144),u=n(93661),i=n(62312),c=function(){function e(){(0,r.Z)(this,e),this._outer=new Map}return(0,o.Z)(e,[{key:"clear",value:function(){this._outer.clear()}},{key:"empty",get:function(){return 0===this._outer.size}},{key:"get",value:function(e,t){var n;return null===(n=this._outer.get(e))||void 0===n?void 0:n.get(t)}},{key:"set",value:function(e,t,n){var r=this._outer.get(e);r?r.set(t,n):this._outer.set(e,new Map([[t,n]]))}},{key:"delete",value:function(e,t){var n=this._outer.get(e);n&&(n.delete(t),0===n.size&&this._outer.delete(e))}},{key:"forEach",value:function(e){this._outer.forEach((function(t,n){return e(t,n)}))}}]),e}(),a=function(){function e(t){(0,r.Z)(this,e),this._rctx=t,this._store=new c}return(0,o.Z)(e,[{key:"dispose",value:function(){this._store.forEach((function(e){return e.forEach((function(e){return e.dispose()}))})),this._store.clear()}},{key:"acquire",value:function(e,t,n,r){var o=this._store.get(e,t);if((0,u.r)(o))return o.ref(),o;var c=new i.h(this._rctx,e,t,n,r);return c.ref(),this._store.set(e,t,c),c}},{key:"test",get:function(){var e=0;return this._store.forEach((function(t){return t.forEach((function(t){return e+=t.hasGLName?2:1}))})),{cachedWebGLObjects:e}}}]),e}()},4679:function(e,t,n){n.d(t,{e:function(){return o}});var r=n(62312);function o(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return new r.h(e,n+t.shaders.vertexShader,n+t.shaders.fragmentShader,t.attributes)}},38264:function(e,t,n){n.d(t,{e:function(){return u}});var r=n(15671),o=n(43144),u=function(){function e(t){(0,r.Z)(this,e),this._readFile=t}return(0,o.Z)(e,[{key:"resolveIncludes",value:function(e){return this._resolve(e)}},{key:"_resolve",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Map;if(n.has(e))return n.get(e);var r=this._read(e);if(!r)throw new Error("cannot find shader file ".concat(e));for(var o=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm,u=o.exec(r),i=[];null!=u;)i.push({path:u[1],start:u.index,length:u[0].length}),u=o.exec(r);var c=0,a="";return i.forEach((function(e){a+=r.slice(c,e.start),a+=n.has(e.path)?"":t._resolve(e.path,n),c=e.start+e.length})),a+=r.slice(c),n.set(e,a),a}},{key:"_read",value:function(e){return this._readFile(e)}}]),e}()},55020:function(e,t,n){function r(e){return"number"==typeof e.options[e.value]}function o(e){var t="";for(var n in e){var o=e[n];if("boolean"==typeof o)o&&(t+="#define ".concat(n,"\n"));else if("number"==typeof o)t+="#define ".concat(n," ").concat(o.toFixed(),"\n");else if("object"==typeof o)if(r(o)){var u=o.value,i=o.options,c=o.namespace,a=c?"".concat(c,"_"):"";for(var f in i)t+="#define ".concat(a).concat(f," ").concat(i[f].toFixed(),"\n");t+="#define ".concat(n," ").concat(a).concat(u,"\n")}else{var s=o.options,h=0;for(var l in s)t+="#define ".concat(s[l]," ").concat((h++).toFixed(),"\n");t+="#define ".concat(n," ").concat(s[o.value],"\n")}}return t}n.d(t,{n:function(){return o}})},35988:function(e,t,n){n.r(t),n.d(t,{BufferObject:function(){return r.E},FramebufferObject:function(){return r.x},Program:function(){return o.h},ProgramCache:function(){return u.s},Renderbuffer:function(){return r.s},ShaderCompiler:function(){return i.e},Texture:function(){return c.E},VertexArrayObject:function(){return r.b},createContextOrErrorHTML:function(){return s.o},createProgram:function(){return f.e},glslifyDefineMap:function(){return a.n}});var r=n(31698),o=n(62312),u=n(70863),i=n(38264),c=n(75833),a=n(55020),f=n(4679),s=n(27205);n(48848),n(93661),n(93122),n(71802)}}]);
//# sourceMappingURL=5988.823d9871.chunk.js.map