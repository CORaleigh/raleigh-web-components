"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[3262],{83262:function(e,t,r){r.d(t,{A:function(){return M},B:function(){return R},C:function(){return G},D:function(){return J},E:function(){return P},F:function(){return Y},G:function(){return K},H:function(){return Q},I:function(){return F},L:function(){return N},M:function(){return V},O:function(){return L},S:function(){return x},T:function(){return A},U:function(){return I},V:function(){return U},a:function(){return T},b:function(){return Z},c:function(){return B},d:function(){return O},g:function(){return _},h:function(){return S},i:function(){return g},j:function(){return q},k:function(){return j},l:function(){return b},m:function(){return k},o:function(){return m},p:function(){return E},q:function(){return z},u:function(){return p},v:function(){return D},w:function(){return C},x:function(){return w},y:function(){return v},z:function(){return H}});var n=r(60136),u=r(29388),f=r(15671),i=r(43144),y=r(87833),o=r(2760),s=function(){function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,u=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;(0,f.Z)(this,e),this.TypedArrayConstructor=t,this.elementCount=9;var y=this.TypedArrayConstructor;void 0===u&&(u=9*y.BYTES_PER_ELEMENT);var o=0===r.byteLength?0:n;this.typedBuffer=null==i?new y(r,o):new y(r,o,(i-n)/y.BYTES_PER_ELEMENT),this.typedBufferStride=u/y.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}return(0,i.Z)(e,[{key:"sliceBuffer",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.count-t,n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}},{key:"getMat",value:function(e,t){for(var r=e*this.typedBufferStride,n=0;n<9;n++)t[n]=this.typedBuffer[r++];return t}},{key:"setMat",value:function(e,t){for(var r=e*this.typedBufferStride,n=0;n<9;n++)this.typedBuffer[r++]=t[n]}},{key:"get",value:function(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}},{key:"set",value:function(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}},{key:"copyFrom",value:function(e,t,r){for(var n=this.typedBuffer,u=t.typedBuffer,f=e*this.typedBufferStride,i=r*t.typedBufferStride,y=0;y<9;++y)n[f++]=u[i++]}},{key:"buffer",get:function(){return this.typedBuffer.buffer}}]),e}();s.ElementCount=9;var l=function(){function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,u=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;(0,f.Z)(this,e),this.TypedArrayConstructor=t,this.elementCount=16;var y=this.TypedArrayConstructor;void 0===u&&(u=16*y.BYTES_PER_ELEMENT);var o=0===r.byteLength?0:n;this.typedBuffer=null==i?new y(r,o):new y(r,o,(i-n)/y.BYTES_PER_ELEMENT),this.typedBufferStride=u/y.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}return(0,i.Z)(e,[{key:"sliceBuffer",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.count-t,n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}},{key:"getMat",value:function(e,t){for(var r=e*this.typedBufferStride,n=0;n<16;n++)t[n]=this.typedBuffer[r++];return t}},{key:"setMat",value:function(e,t){for(var r=e*this.typedBufferStride,n=0;n<16;n++)this.typedBuffer[r++]=t[n]}},{key:"get",value:function(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}},{key:"set",value:function(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}},{key:"copyFrom",value:function(e,t,r){for(var n=this.typedBuffer,u=t.typedBuffer,f=e*this.typedBufferStride,i=r*t.typedBufferStride,y=0;y<16;++y)n[f++]=u[i++]}},{key:"buffer",get:function(){return this.typedBuffer.buffer}}]),e}();l.ElementCount=16;var h=function(){function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,u=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;(0,f.Z)(this,e),this.TypedArrayConstructor=t,this.elementCount=1;var y=this.TypedArrayConstructor;void 0===u&&(u=y.BYTES_PER_ELEMENT);var o=0===r.byteLength?0:n;this.typedBuffer=null==i?new y(r,o):new y(r,o,(i-n)/y.BYTES_PER_ELEMENT),this.typedBufferStride=u/y.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}return(0,i.Z)(e,[{key:"sliceBuffer",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.count-t,n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}},{key:"get",value:function(e){return this.typedBuffer[e*this.typedBufferStride]}},{key:"set",value:function(e,t){this.typedBuffer[e*this.typedBufferStride]=t}},{key:"buffer",get:function(){return this.typedBuffer.buffer}}]),e}();h.ElementCount=1;var a=function(){function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,u=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;(0,f.Z)(this,e),this.TypedArrayConstructor=t,this.elementCount=2;var y=this.TypedArrayConstructor;void 0===u&&(u=2*y.BYTES_PER_ELEMENT);var o=0===r.byteLength?0:n;this.typedBuffer=null==i?new y(r,o):new y(r,o,(i-n)/y.BYTES_PER_ELEMENT),this.typedBufferStride=u/y.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}return(0,i.Z)(e,[{key:"sliceBuffer",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.count-t,n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}},{key:"getVec",value:function(e,t){return e*=this.typedBufferStride,(0,y.r)(t,this.typedBuffer[e],this.typedBuffer[e+1])}},{key:"setVec",value:function(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e]=t[1]}},{key:"get",value:function(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}},{key:"set",value:function(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}},{key:"setValues",value:function(e,t,r){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e]=r}},{key:"copyFrom",value:function(e,t,r){var n=this.typedBuffer,u=t.typedBuffer,f=e*this.typedBufferStride,i=r*t.typedBufferStride;n[f++]=u[i++],n[f]=u[i]}},{key:"buffer",get:function(){return this.typedBuffer.buffer}}]),e}();a.ElementCount=2;var c=function(){function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,u=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;(0,f.Z)(this,e),this.TypedArrayConstructor=t,this.elementCount=3;var y=this.TypedArrayConstructor;void 0===u&&(u=3*y.BYTES_PER_ELEMENT);var o=0===r.byteLength?0:n;this.typedBuffer=null==i?new y(r,o):new y(r,o,(i-n)/y.BYTES_PER_ELEMENT),this.typedBufferStride=u/y.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}return(0,i.Z)(e,[{key:"sliceBuffer",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.count-t,n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}},{key:"getVec",value:function(e,t){return e*=this.typedBufferStride,(0,o.f)(t,this.typedBuffer[e],this.typedBuffer[e+1],this.typedBuffer[e+2])}},{key:"setVec",value:function(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e]=t[2]}},{key:"get",value:function(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}},{key:"set",value:function(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}},{key:"setValues",value:function(e,t,r,n){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=r,this.typedBuffer[e]=n}},{key:"copyFrom",value:function(e,t,r){var n=this.typedBuffer,u=t.typedBuffer,f=e*this.typedBufferStride,i=r*t.typedBufferStride;n[f++]=u[i++],n[f++]=u[i++],n[f]=u[i]}},{key:"buffer",get:function(){return this.typedBuffer.buffer}}]),e}();c.ElementCount=3;var d=function(){function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,u=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;(0,f.Z)(this,e),this.TypedArrayConstructor=t,this.elementCount=4;var y=this.TypedArrayConstructor;void 0===u&&(u=4*y.BYTES_PER_ELEMENT);var o=0===r.byteLength?0:n;this.typedBuffer=null==i?new y(r,o):new y(r,o,(i-n)/y.BYTES_PER_ELEMENT),this.typedBufferStride=u/y.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}return(0,i.Z)(e,[{key:"sliceBuffer",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.count-t,n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}},{key:"getVec",value:function(e,t){return e*=this.typedBufferStride,(0,o.D)(t,this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e])}},{key:"setVec",value:function(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e++]=t[2],this.typedBuffer[e]=t[3]}},{key:"get",value:function(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}},{key:"set",value:function(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}},{key:"setValues",value:function(e,t,r,n,u){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=r,this.typedBuffer[e++]=n,this.typedBuffer[e]=u}},{key:"copyFrom",value:function(e,t,r){var n=this.typedBuffer,u=t.typedBuffer,f=e*this.typedBufferStride,i=r*t.typedBufferStride;n[f++]=u[i++],n[f++]=u[i++],n[f++]=u[i++],n[f]=u[i]}},{key:"buffer",get:function(){return this.typedBuffer.buffer}}]),e}();d.ElementCount=4;var v=function(e){(0,n.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0;return(0,f.Z)(this,r),(n=t.call(this,Float32Array,e,u,i,y)).elementType="f32",n}return(0,i.Z)(r,null,[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(h);v.ElementType="f32";var p=function(e){(0,n.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0;return(0,f.Z)(this,r),(n=t.call(this,Float32Array,e,u,i,y)).elementType="f32",n}return(0,i.Z)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(a);p.ElementType="f32";var g=function(e){(0,n.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0;return(0,f.Z)(this,r),(n=t.call(this,Float32Array,e,u,i,y)).elementType="f32",n}return(0,i.Z)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(c);g.ElementType="f32";var B=function(e){(0,n.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0;return(0,f.Z)(this,r),(n=t.call(this,Float32Array,e,u,i,y)).elementType="f32",n}return(0,i.Z)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(d);B.ElementType="f32";var b=function(e){(0,n.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0;return(0,f.Z)(this,r),(n=t.call(this,Float32Array,e,u,i,y)).elementType="f32",n}return(0,i.Z)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(s);b.ElementType="f32";var T=function(e){(0,n.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0;return(0,f.Z)(this,r),(n=t.call(this,Float64Array,e,u,i,y)).elementType="f64",n}return(0,i.Z)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(s);T.ElementType="f64";var E=function(e){(0,n.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0;return(0,f.Z)(this,r),(n=t.call(this,Float32Array,e,u,i,y)).elementType="f32",n}return(0,i.Z)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(l);E.ElementType="f32";var Z=function(e){(0,n.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0;return(0,f.Z)(this,r),(n=t.call(this,Float64Array,e,u,i,y)).elementType="f64",n}return(0,i.Z)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(l);Z.ElementType="f64";var m=function(e){(0,n.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0;return(0,f.Z)(this,r),(n=t.call(this,Float64Array,e,u,i,y)).elementType="f64",n}return(0,i.Z)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(h);m.ElementType="f64";var k=function(e){(0,n.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0;return(0,f.Z)(this,r),(n=t.call(this,Float64Array,e,u,i,y)).elementType="f64",n}return(0,i.Z)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(a);k.ElementType="f64";var A=function(e){(0,n.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0;return(0,f.Z)(this,r),(n=t.call(this,Float64Array,e,u,i,y)).elementType="f64",n}return(0,i.Z)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(c);A.ElementType="f64";var S=function(e){(0,n.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0;return(0,f.Z)(this,r),(n=t.call(this,Float64Array,e,u,i,y)).elementType="f64",n}return(0,i.Z)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(d);S.ElementType="f64";var O=function(e){(0,n.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0;return(0,f.Z)(this,r),(n=t.call(this,Uint8Array,e,u,i,y)).elementType="u8",n}return(0,i.Z)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(h);O.ElementType="u8";var M=function(e){(0,n.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0;return(0,f.Z)(this,r),(n=t.call(this,Uint8Array,e,u,i,y)).elementType="u8",n}return(0,i.Z)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(a);M.ElementType="u8";var L=function(e){(0,n.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0;return(0,f.Z)(this,r),(n=t.call(this,Uint8Array,e,u,i,y)).elementType="u8",n}return(0,i.Z)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(c);L.ElementType="u8";var w=function(e){(0,n.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0;return(0,f.Z)(this,r),(n=t.call(this,Uint8Array,e,u,i,y)).elementType="u8",n}return(0,i.Z)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(d);w.ElementType="u8";var _=function(e){(0,n.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0;return(0,f.Z)(this,r),(n=t.call(this,Uint16Array,e,u,i,y)).elementType="u16",n}return(0,i.Z)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(h);_.ElementType="u16";var C=function(e){(0,n.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0;return(0,f.Z)(this,r),(n=t.call(this,Uint16Array,e,u,i,y)).elementType="u16",n}return(0,i.Z)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(a);C.ElementType="u16";var P=function(e){(0,n.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0;return(0,f.Z)(this,r),(n=t.call(this,Uint16Array,e,u,i,y)).elementType="u16",n}return(0,i.Z)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(c);P.ElementType="u16";var N=function(e){(0,n.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0;return(0,f.Z)(this,r),(n=t.call(this,Uint16Array,e,u,i,y)).elementType="u16",n}return(0,i.Z)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(d);N.ElementType="u16";var R=function(e){(0,n.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0;return(0,f.Z)(this,r),(n=t.call(this,Uint32Array,e,u,i,y)).elementType="u32",n}return(0,i.Z)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(h);R.ElementType="u32";var Y=function(e){(0,n.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0;return(0,f.Z)(this,r),(n=t.call(this,Uint32Array,e,u,i,y)).elementType="u32",n}return(0,i.Z)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(a);Y.ElementType="u32";var F=function(e){(0,n.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0;return(0,f.Z)(this,r),(n=t.call(this,Uint32Array,e,u,i,y)).elementType="u32",n}return(0,i.Z)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(c);F.ElementType="u32";var I=function(e){(0,n.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0;return(0,f.Z)(this,r),(n=t.call(this,Uint32Array,e,u,i,y)).elementType="u32",n}return(0,i.Z)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(d);I.ElementType="u32";var q=function(e){(0,n.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0;return(0,f.Z)(this,r),(n=t.call(this,Int8Array,e,u,i,y)).elementType="i8",n}return(0,i.Z)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(h);q.ElementType="i8";var U=function(e){(0,n.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0;return(0,f.Z)(this,r),(n=t.call(this,Int8Array,e,u,i,y)).elementType="i8",n}return(0,i.Z)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(a);U.ElementType="i8";var V=function(e){(0,n.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0;return(0,f.Z)(this,r),(n=t.call(this,Int8Array,e,u,i,y)).elementType="i8",n}return(0,i.Z)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(c);V.ElementType="i8";var x=function(e){(0,n.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0;return(0,f.Z)(this,r),(n=t.call(this,Int8Array,e,u,i,y)).elementType="i8",n}return(0,i.Z)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(d);x.ElementType="i8";var j=function(e){(0,n.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0;return(0,f.Z)(this,r),(n=t.call(this,Int16Array,e,u,i,y)).elementType="i16",n}return(0,i.Z)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(h);j.ElementType="i16";var z=function(e){(0,n.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0;return(0,f.Z)(this,r),(n=t.call(this,Int16Array,e,u,i,y)).elementType="i16",n}return(0,i.Z)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(a);z.ElementType="i16";var D=function(e){(0,n.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0;return(0,f.Z)(this,r),(n=t.call(this,Int16Array,e,u,i,y)).elementType="i16",n}return(0,i.Z)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(c);D.ElementType="i16";var H=function(e){(0,n.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0;return(0,f.Z)(this,r),(n=t.call(this,Int16Array,e,u,i,y)).elementType="i16",n}return(0,i.Z)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(d);H.ElementType="i16";var G=function(e){(0,n.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0;return(0,f.Z)(this,r),(n=t.call(this,Int32Array,e,u,i,y)).elementType="i32",n}return(0,i.Z)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(h);G.ElementType="i32";var J=function(e){(0,n.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0;return(0,f.Z)(this,r),(n=t.call(this,Int32Array,e,u,i,y)).elementType="i32",n}return(0,i.Z)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(a);J.ElementType="i32";var K=function(e){(0,n.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0;return(0,f.Z)(this,r),(n=t.call(this,Int32Array,e,u,i,y)).elementType="i32",n}return(0,i.Z)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(c);K.ElementType="i32";var Q=function(e){(0,n.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0;return(0,f.Z)(this,r),(n=t.call(this,Int32Array,e,u,i,y)).elementType="i32",n}return(0,i.Z)(r,[{key:"slice",value:function(e,t){return this.sliceBuffer(r,e,t)}}],[{key:"fromTypedArray",value:function(e,t){return new r(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}]),r}(d);Q.ElementType="i32"},87833:function(e,t,r){r.d(t,{A:function(){return T},C:function(){return O},H:function(){return w},I:function(){return m},S:function(){return k},_:function(){return E},a:function(){return u},b:function(){return c},d:function(){return h},j:function(){return B},l:function(){return l},m:function(){return a},o:function(){return y},p:function(){return v},q:function(){return d},r:function(){return f},s:function(){return i},v:function(){return g},w:function(){return A},x:function(){return p},y:function(){return b},z:function(){return Z}});var n=r(2760);function u(e,t){return e[0]=t[0],e[1]=t[1],e}function f(e,t,r){return e[0]=t,e[1]=r,e}function i(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e}function y(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e}function o(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e}function s(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e}function l(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e}function h(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e}function a(e,t){var r=t[0]-e[0],n=t[1]-e[1];return Math.sqrt(r*r+n*n)}function c(e,t){var r=t[0]-e[0],n=t[1]-e[1];return r*r+n*n}function d(e){var t=e[0],r=e[1];return Math.sqrt(t*t+r*r)}function v(e){var t=e[0],r=e[1];return t*t+r*r}function p(e,t){return e[0]=-t[0],e[1]=-t[1],e}function g(e,t){var r=t[0],n=t[1],u=r*r+n*n;return u>0&&(u=1/Math.sqrt(u),e[0]=t[0]*u,e[1]=t[1]*u),e}function B(e,t){return e[0]*t[0]+e[1]*t[1]}function b(e,t,r){var n=t[0]*r[1]-t[1]*r[0];return e[0]=e[1]=0,e[2]=n,e}function T(e,t,r,n){var u=t[0],f=t[1];return e[0]=u+n*(r[0]-u),e[1]=f+n*(r[1]-f),e}function E(e,t,r){var n=t[0],u=t[1];return e[0]=r[0]*n+r[2]*u,e[1]=r[1]*n+r[3]*u,e}function Z(e,t,r){var n=t[0],u=t[1];return e[0]=r[0]*n+r[2]*u+r[4],e[1]=r[1]*n+r[3]*u+r[5],e}function m(e,t,r,n){var u=t[0]-r[0],f=t[1]-r[1],i=Math.sin(n),y=Math.cos(n);return e[0]=u*y-f*i+r[0],e[1]=u*i+f*y+r[1],e}function k(e,t){return e[0]===t[0]&&e[1]===t[1]}function A(e,t,r,n,u){var f=t[0]-r[0],i=t[1]-r[1],y=(n[0]*f+n[1]*i)*(u-1);return f=n[0]*y,i=n[1]*y,e[0]=t[0]+f,e[1]=t[1]+i,e}var S=d,O=y,M=o,L=s,w=a,_=c,C=v;Object.freeze(Object.defineProperty({__proto__:null,copy:u,set:f,add:i,subtract:y,multiply:o,divide:s,ceil:function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e},floor:function(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e},min:function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e},max:function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e},round:function(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e},scale:l,scaleAndAdd:h,distance:a,squaredDistance:c,length:d,squaredLength:v,negate:p,inverse:function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e},normalize:g,dot:B,cross:b,lerp:T,random:function(e,t){t=t||1;var r=2*(0,n.d)()*Math.PI;return e[0]=Math.cos(r)*t,e[1]=Math.sin(r)*t,e},transformMat2:E,transformMat2d:Z,transformMat3:function(e,t,r){var n=t[0],u=t[1];return e[0]=r[0]*n+r[3]*u+r[6],e[1]=r[1]*n+r[4]*u+r[7],e},transformMat4:function(e,t,r){var n=t[0],u=t[1];return e[0]=r[0]*n+r[4]*u+r[12],e[1]=r[1]*n+r[5]*u+r[13],e},rotate:m,angle:function(e,t){var r=e[0],n=e[1],u=t[0],f=t[1],i=r*r+n*n;i>0&&(i=1/Math.sqrt(i));var y=u*u+f*f;y>0&&(y=1/Math.sqrt(y));var o=(r*u+n*f)*i*y;return o>1?0:o<-1?Math.PI:Math.acos(o)},str:function(e){return"vec2("+e[0]+", "+e[1]+")"},exactEquals:k,equals:function(e,t){var r=e[0],u=e[1],f=t[0],i=t[1];return Math.abs(r-f)<=n.t*Math.max(1,Math.abs(r),Math.abs(f))&&Math.abs(u-i)<=n.t*Math.max(1,Math.abs(u),Math.abs(i))},projectAndScale:A,len:S,sub:O,mul:M,div:L,dist:w,sqrDist:_,sqrLen:C},Symbol.toStringTag,{value:"Module"}))}}]);
//# sourceMappingURL=3262.dd791576.chunk.js.map