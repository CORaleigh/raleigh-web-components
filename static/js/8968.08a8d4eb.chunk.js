"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[8968],{48968:function(e,t,i){i.d(t,{D:function(){return D},E:function(){return g},R:function(){return m},_:function(){return p},c:function(){return A},f:function(){return N},i:function(){return R},n:function(){return b},r:function(){return F},u:function(){return v}});var r=i(29439),n=i(93433),s=i(1413),a=i(37762),o=i(74165),h=i(15861),c=i(15671),u=i(43144),_=i(50165),f=i(6819),l=i(47692),d=i(26995),E=_.s.getLogger("esri.views.webgl.BufferObject");function T(e){return(0,_.be)(e)}var A=function(){function e(t,i,r,n){(0,c.Z)(this,e),this._context=t,this.bufferType=i,this.usage=r,this._glName=null,this._size=-1,this._indexType=void 0,t.instanceCounter.increment(f.t.BufferObject,this),this._glName=this._context.gl.createBuffer(),(0,l.s)(this._context.gl),n&&this.setData(n)}return(0,u.Z)(e,[{key:"glName",get:function(){return this._glName}},{key:"size",get:function(){return this._size}},{key:"indexType",get:function(){return this._indexType}},{key:"byteSize",get:function(){return this.bufferType===f.A.ELEMENT_ARRAY_BUFFER?this._indexType===f.C.UNSIGNED_INT?4*this._size:2*this._size:this._size}},{key:"_isVAOAware",get:function(){return this.bufferType===f.A.ELEMENT_ARRAY_BUFFER||this.bufferType===f.A.ARRAY_BUFFER}},{key:"dispose",value:function(){var e;null!==(e=this._context)&&void 0!==e&&e.gl?(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(f.t.BufferObject,this),this._context=null):this._glName&&E.warn("Leaked WebGL buffer object")}},{key:"setSize",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(e<=0&&E.error("Buffer size needs to be positive!"),this.bufferType===f.A.ELEMENT_ARRAY_BUFFER&&(0,_.r)(t))switch(this._indexType=t,t){case f.C.UNSIGNED_SHORT:e*=2;break;case f.C.UNSIGNED_INT:e*=4}this._setBufferData(e)}},{key:"setData",value:function(e){if(e){var t=e.byteLength;this.bufferType===f.A.ELEMENT_ARRAY_BUFFER&&((0,_.bc)(e)&&(t/=2,this._indexType=f.C.UNSIGNED_SHORT),(0,_.b6)(e)&&(t/=4,this._indexType=f.C.UNSIGNED_INT)),this._setBufferData(t,e)}}},{key:"_setBufferData",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this._size=e;var i=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);var r=this._context.gl;(0,_.r)(t)?r.bufferData(this.bufferType,t,this.usage):r.bufferData(this.bufferType,e,this.usage),(0,l.s)(r),this._isVAOAware&&this._context.bindVAO(i)}},{key:"setSubData",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.byteLength;if(e){(t<0||t>=this._size)&&E.error("offset is out of range!");var n=t,s=i,a=r,o=e.byteLength;this.bufferType===f.A.ELEMENT_ARRAY_BUFFER&&((0,_.bc)(e)?(o/=2,n*=2,s*=2,a*=2):(0,_.b6)(e)&&(o/=4,n*=4,s*=4,a*=4)),void 0===r&&(r=o-1),i>=r&&E.error("end must be bigger than start!"),t+i-r>this._size&&E.error("An attempt to write beyond the end of the buffer!");var h=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);var c=this._context.gl,u=ArrayBuffer.isView(e)?e.buffer:e,d=0===s&&a===e.byteLength?u:u.slice(s,a);c.bufferSubData(this.bufferType,n,d),(0,l.s)(c),this._isVAOAware&&this._context.bindVAO(h)}}},{key:"setSubDataFromView",value:function(e,t,i,r){if(e){(t<0||t>=this._size)&&E.error("offset is out of range!"),i>=r&&E.error("end must be bigger than start!"),t+i-r>this._size&&E.error("An attempt to write beyond the end of the buffer!");var n=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);var s=this._context.gl;if(this._context.type===d.o.WEBGL2)s.bufferSubData(this.bufferType,t*e.BYTES_PER_ELEMENT,e,i,r-i);else{var a=0===i&&r===e.length?e:e.subarray(i,r);s.bufferSubData(this.bufferType,t*e.BYTES_PER_ELEMENT,a)}(0,l.s)(s),this._isVAOAware&&this._context.bindVAO(n)}}},{key:"getSubData",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;if(this._context.type===d.o.WEBGL2)if(i<0||r<0)E.error("Problem getting subdata: offset and length were less than zero!");else{var n=T(e)?e.BYTES_PER_ELEMENT:1;if(n*((null!==i&&void 0!==i?i:0)+(null!==r&&void 0!==r?r:0))>e.byteLength)E.error("Problem getting subdata: offset and length exceeded destination size!");else{t+n*(null!==r&&void 0!==r?r:0)>this.byteSize&&E.warn("Potential problem getting subdata: requested data exceeds buffer size!");var s=this._context.gl;this._context.bindBuffer(this,f.A.COPY_READ_BUFFER),s.getBufferSubData(f.A.COPY_READ_BUFFER,t,e,i,r),this._context.unbindBuffer(f.A.COPY_READ_BUFFER)}}else E.error("Get buffer subdata is supported in WebGL2 only!")}},{key:"getSubDataAsync",value:function(){var e=(0,h.Z)((0,o.Z)().mark((function e(t){var i,r,n,s=arguments;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=s.length>1&&void 0!==s[1]?s[1]:0,r=s.length>2?s[2]:void 0,n=s.length>3?s[3]:void 0,this._context.type!==d.o.WEBGL2){e.next=9;break}return e.next=6,this._context.clientWaitAsync();case 6:this.getSubData(t,i,r,n),e.next=10;break;case 9:E.error("Get buffer subdata is supported in WebGL2 only!");case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}],[{key:"createIndex",value:function(t,i,r){return new e(t,f.A.ELEMENT_ARRAY_BUFFER,i,r)}},{key:"createVertex",value:function(t,i,r){return new e(t,f.A.ARRAY_BUFFER,i,r)}},{key:"createUniform",value:function(t,i,r){if(t.type!==d.o.WEBGL2)throw new Error("Uniform buffers are supported in WebGL2 only!");return new e(t,f.A.UNIFORM_BUFFER,i,r)}},{key:"createPixelPack",value:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f.F.STREAM_READ,r=arguments.length>2?arguments[2]:void 0;if(t.type!==d.o.WEBGL2)throw new Error("Pixel pack buffers are supported in WebGL2 only!");var n=new e(t,f.A.PIXEL_PACK_BUFFER,i);return r&&n.setSize(r),n}},{key:"createPixelUnpack",value:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f.F.STREAM_DRAW,r=arguments.length>2?arguments[2]:void 0;if(t.type!==d.o.WEBGL2)throw new Error("Pixel unpack buffers are supported in WebGL2 only!");return new e(t,f.A.PIXEL_UNPACK_BUFFER,i,r)}}]),e}();function R(e){var t=e.gl;switch(t.getError()){case t.NO_ERROR:return null;case t.INVALID_ENUM:return"An unacceptable value has been specified for an enumerated argument";case t.INVALID_VALUE:return"A numeric argument is out of range";case t.INVALID_OPERATION:return"The specified command is not allowed for the current state";case t.INVALID_FRAMEBUFFER_OPERATION:return"The currently bound framebuffer is not framebuffer complete";case t.OUT_OF_MEMORY:return"Not enough memory is left to execute the command";case t.CONTEXT_LOST_WEBGL:return"WebGL context is lost"}return"Unknown error"}function b(e,t){return e.vertexBuffers[t].size/function(e){return e[0].stride}(e.layout[t])}function m(e,t,i,r){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,s=e.gl,o=e.capabilities.instancing;e.bindBuffer(i);var h,c=(0,a.Z)(r);try{for(c.s();!(h=c.n()).done;){var u=h.value,_=t.get(u.name);void 0===_&&console.error("There is no location for vertex attribute '".concat(u.name,"' defined."));var f=n*u.stride;if(u.count<=4)s.vertexAttribPointer(_,u.count,u.type,u.normalized,u.stride,u.offset+f),s.enableVertexAttribArray(_),u.divisor>0&&o&&o.vertexAttribDivisor(_,u.divisor);else if(9===u.count)for(var l=0;l<3;l++)s.vertexAttribPointer(_+l,3,u.type,u.normalized,u.stride,u.offset+12*l+f),s.enableVertexAttribArray(_+l),u.divisor>0&&o&&o.vertexAttribDivisor(_+l,u.divisor);else if(16===u.count)for(var d=0;d<4;d++)s.vertexAttribPointer(_+d,4,u.type,u.normalized,u.stride,u.offset+16*d+f),s.enableVertexAttribArray(_+d),u.divisor>0&&o&&o.vertexAttribDivisor(_+d,u.divisor);else console.error("Unsupported vertex attribute element count: "+u.count)}}catch(E){c.e(E)}finally{c.f()}}function g(e,t,i,r){var n=e.gl,s=e.capabilities.instancing;e.bindBuffer(i);var o,h=(0,a.Z)(r);try{for(h.s();!(o=h.n()).done;){var c=o.value,u=t.get(c.name);if(c.count<=4)n.disableVertexAttribArray(u),c.divisor&&c.divisor>0&&s&&s.vertexAttribDivisor(u,0);else if(9===c.count)for(var _=0;_<3;_++)n.disableVertexAttribArray(u+_),c.divisor&&c.divisor>0&&s&&s.vertexAttribDivisor(u+_,0);else if(16===c.count)for(var l=0;l<4;l++)n.disableVertexAttribArray(u+l),c.divisor&&c.divisor>0&&s&&s.vertexAttribDivisor(u+l,0);else console.error("Unsupported vertex attribute element count: "+c.count)}}catch(d){h.e(d)}finally{h.f()}e.unbindBuffer(f.A.ARRAY_BUFFER)}function p(e){switch(e){case f.P.ALPHA:case f.P.LUMINANCE:case f.P.RED:case f.P.RED_INTEGER:case f.U.R8:case f.U.R8I:case f.U.R8UI:case f.U.R8_SNORM:case f.B.STENCIL_INDEX8:return 1;case f.P.LUMINANCE_ALPHA:case f.P.RG:case f.P.RG_INTEGER:case f.U.RGBA4:case f.U.R16F:case f.U.R16I:case f.U.R16UI:case f.U.RG8:case f.U.RG8I:case f.U.RG8UI:case f.U.RG8_SNORM:case f.U.RGB565:case f.U.RGB5_A1:case f.B.DEPTH_COMPONENT16:return 2;case f.P.DEPTH_COMPONENT:case f.P.RGB:case f.P.RGB_INTEGER:case f.U.RGB8:case f.U.RGB8I:case f.U.RGB8UI:case f.U.RGB8_SNORM:case f.U.SRGB8:case f.B.DEPTH_COMPONENT24:return 3;case f.P.DEPTH_STENCIL:case f.P.RGBA:case f.P.RGBA_INTEGER:case f.U.RGBA8:case f.U.R32F:case f.U.R11F_G11F_B10F:case f.U.RG16F:case f.U.R32I:case f.U.R32UI:case f.U.RG16I:case f.U.RG16UI:case f.U.RGBA8I:case f.U.RGBA8UI:case f.U.RGBA8_SNORM:case f.U.SRGB8_ALPHA8:case f.U.RGB9_E5:case f.U.RGB10_A2UI:case f.U.RGB10_A2:case f.B.DEPTH_STENCIL:case f.B.DEPTH_COMPONENT32F:case f.B.DEPTH24_STENCIL8:return 4;case f.B.DEPTH32F_STENCIL8:return 5;case f.U.RGB16F:case f.U.RGB16I:case f.U.RGB16UI:return 6;case f.U.RG32F:case f.U.RG32I:case f.U.RG32UI:case f.U.RGBA16F:case f.U.RGBA16I:case f.U.RGBA16UI:return 8;case f.U.RGB32F:case f.U.RGB32I:case f.U.RGB32UI:return 12;case f.U.RGBA32F:case f.U.RGBA32I:case f.U.RGBA32UI:return 16;case f.u.COMPRESSED_RGB_S3TC_DXT1_EXT:case f.u.COMPRESSED_RGBA_S3TC_DXT1_EXT:return.5;case f.u.COMPRESSED_RGBA_S3TC_DXT3_EXT:case f.u.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case f.u.COMPRESSED_R11_EAC:case f.u.COMPRESSED_SIGNED_R11_EAC:case f.u.COMPRESSED_RGB8_ETC2:case f.u.COMPRESSED_SRGB8_ETC2:case f.u.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case f.u.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return.5;case f.u.COMPRESSED_RG11_EAC:case f.u.COMPRESSED_SIGNED_RG11_EAC:case f.u.COMPRESSED_RGBA8_ETC2_EAC:case f.u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}function v(e){if((0,_.t)(e))return 0;if("descriptor"in e)return e.glName?v(e.descriptor):0;var t=e.internalFormat||"pixelFormat"in e&&e.pixelFormat;if(!t)return 0;var i="hasMipmap"in e&&e.hasMipmap?1.3:1,r=e.width*e.height;return p(t)*r*i}var x=_.s.getLogger("esri.views.webgl.VertexArrayObject"),N=function(){function e(t,i,r,n){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;(0,c.Z)(this,e),this._context=t,this._locations=i,this._layout=r,this._buffers=n,this._indexBuffer=s,this._glName=null,this._initialized=!1,t.instanceCounter.increment(f.t.VertexArrayObject,this)}return(0,u.Z)(e,[{key:"glName",get:function(){return this._glName}},{key:"context",get:function(){return this._context}},{key:"vertexBuffers",get:function(){return this._buffers}},{key:"indexBuffer",get:function(){return this._indexBuffer}},{key:"size",get:function(){var e=this;return Object.keys(this._buffers).reduce((function(t,i){return t+e._buffers[i].size}),(0,_.r)(this._indexBuffer)?this._indexBuffer.size:0)}},{key:"layout",get:function(){return this._layout}},{key:"locations",get:function(){return this._locations}},{key:"dispose",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this._context){if(this._glName){var t,i,r=null===(t=this._context)||void 0===t||null===(i=t.capabilities)||void 0===i?void 0:i.vao;r?(r.deleteVertexArray(this._glName),this._glName=null):x.warn("Leaked WebGL VAO")}if(this._context.getBoundVAO()===this&&this._context.bindVAO(null),e){for(var n in this._buffers)this._buffers[n].dispose(),delete this._buffers[n];this._indexBuffer=(0,_.aQ)(this._indexBuffer)}this._context.instanceCounter.decrement(f.t.VertexArrayObject,this),this._context=null}else(this._glName||e&&Object.getOwnPropertyNames(this._buffers).length>0)&&x.warn("Leaked WebGL VAO")}},{key:"initialize",value:function(){if(!this._initialized){var e=this._context.capabilities.vao;if(e){var t=e.createVertexArray();e.bindVertexArray(t),this._bindLayout(),e.bindVertexArray(null),this._glName=t}this._initialized=!0}}},{key:"bind",value:function(){this.initialize();var e=this._context.capabilities.vao;e?e.bindVertexArray(this.glName):(this._context.bindVAO(null),this._bindLayout())}},{key:"_bindLayout",value:function(){var e=this._buffers,t=this._layout,i=this._indexBuffer;e||x.error("Vertex buffer dictionary is empty!");var r=this._context.gl;for(var n in e){var s=e[n];s||x.error("Vertex buffer is uninitialized!");var a=t[n];a||x.error("Vertex element descriptor is empty!"),m(this._context,this._locations,s,a)}(0,_.r)(i)&&(this._context.capabilities.vao?r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,i.glName):this._context.bindBuffer(i))}},{key:"unbind",value:function(){this.initialize();var e=this._context.capabilities.vao;e?e.bindVertexArray(null):this._unbindLayout()}},{key:"_unbindLayout",value:function(){var e=this._buffers,t=this._layout;for(var i in e||x.error("Vertex buffer dictionary is empty!"),e){var r=e[i];r||x.error("Vertex buffer is uninitialized!");var n=t[i];g(this._context,this._locations,r,n)}(0,_.r)(this._indexBuffer)&&this._context.unbindBuffer(this._indexBuffer.bufferType)}}]),e}(),F=function(){function e(t,i){(0,c.Z)(this,e),this._context=t,this._desc=i,this.type="renderbuffer",this._context.instanceCounter.increment(f.t.Renderbuffer,this);var r=this._context.gl;this.glName=r.createRenderbuffer(),this._context.bindRenderbuffer(this);var n=i.width,s=i.height,a=i.internalFormat;if(i.multisampled){if(this._context.type!==d.o.WEBGL2)throw new Error("Multisampled renderbuffers are not supported in WebGL1!");r.renderbufferStorageMultisample(r.RENDERBUFFER,this.samples,a,n,s)}else r.renderbufferStorage(r.RENDERBUFFER,a,n,s)}return(0,u.Z)(e,[{key:"descriptor",get:function(){return this._desc}},{key:"samples",get:function(){var e=this._desc.samples,t=this._context.parameters.maxSamples;return e?Math.min(e,t):t}},{key:"resize",value:function(e,t){var i=this._desc;if(i.width!==e||i.height!==t){i.width=e,i.height=t;var r=this._context.gl;this._context.bindRenderbuffer(this),i.multisampled?r.renderbufferStorageMultisample(r.RENDERBUFFER,this.samples,i.internalFormat,i.width,i.height):r.renderbufferStorage(r.RENDERBUFFER,i.internalFormat,i.width,i.height)}}},{key:"dispose",value:function(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(f.t.Renderbuffer,this),this._context=null)}}]),e}(),B=_.s.getLogger("esri.views.webgl.FrameBufferObject"),D=function(){function e(t,i){var r,n,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;if((0,c.Z)(this,e),this._context=t,this._glName=null,this._depthAttachment=null,this._stencilAttachment=null,this._colorAttachments=new Map,this._initialized=!1,this._desc=(0,s.Z)({},i),t.instanceCounter.increment(f.t.FramebufferObject,this),(0,_.r)(a)){Array.isArray(a)||(a=[a]);for(var h=0;h<a.length;++h){var u=a[h],d=f.f.COLOR_ATTACHMENT0+h,E=void 0;S(u)?(U(u)?(E=u.descriptor,this._colorAttachments.set(d,u)):(E=u,this._colorAttachments.set(d,new l.u(this._context,E))),P(E,this._desc)):(y(u)?(E=u.descriptor,this._colorAttachments.set(d,u)):(E=u,this._colorAttachments.set(d,new F(this._context,E))),O(E,this._desc)),this._validateColorAttachmentPoint(d)}}if((0,_.r)(o))if(S(o))this._context.capabilities.depthTexture||console.error("Setting the depth/stencil texture as an attachment requires WEBGL_depth_texture or WebGL2"),U(o)?(n=o.descriptor,this._depthStencilTexture=o):(n=o,this._depthStencilTexture=new l.u(this._context,n)),P(n,this._desc);else{var T;y(o)?(n=o.descriptor,r=o):(n=o,r=new F(this._context,n));var A=null!==(T=this._desc.depthStencilTarget)&&void 0!==T?T:f.V.DEPTH_STENCIL_RENDER_BUFFER;A===f.V.STENCIL_RENDER_BUFFER?this._stencilAttachment=r:A===f.V.DEPTH_RENDER_BUFFER||A===f.V.DEPTH_STENCIL_RENDER_BUFFER?this._depthAttachment=r:console.error('If a Renderbuffer is provided, "depthStencilTarget" must be one of STENCIL_RENDER_BUFFER, DEPTH_RENDER_BUFFER or DEPTH_STENCIL_RENDER_BUFFER'),O(n,this._desc)}}return(0,u.Z)(e,[{key:"dispose",value:function(){if(this._desc){var e=this._context.getBoundFramebufferObject();this._disposeColorAttachments(),this._disposeDepthStencilAttachments(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(e),this._context.instanceCounter.decrement(f.t.FramebufferObject,this),this._desc=null}}},{key:"glName",get:function(){return this._glName}},{key:"descriptor",get:function(){return this._desc}},{key:"colorTexture",get:function(){var e=this._colorAttachments.get(f.f.COLOR_ATTACHMENT0);return e&&U(e)?e:null}},{key:"colorAttachment",get:function(){return this._colorAttachments.get(f.f.COLOR_ATTACHMENT0)}},{key:"depthStencilAttachment",get:function(){return this._depthStencilTexture||this._depthAttachment||this._stencilAttachment}},{key:"depthStencilTexture",get:function(){return this._depthStencilTexture}},{key:"width",get:function(){return this._desc.width}},{key:"height",get:function(){return this._desc.height}},{key:"gpuMemoryUsage",get:function(){return(0,n.Z)(this._colorAttachments).reduce((function(e,t){var i=(0,r.Z)(t,2);i[0];return e+v(i[1])}),0)+v(this.depthStencilAttachment)}},{key:"getColorTexture",value:function(e){var t=this._colorAttachments.get(e);return t&&U(t)?t:null}},{key:"attachColorTexture",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f.f.COLOR_ATTACHMENT0;e&&(this._validateColorAttachmentPoint(t),P(e.descriptor,this._desc),this._disposeColorAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(e.glName,t)),this._colorAttachments.set(t,e))}},{key:"detachColorTexture",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f.f.COLOR_ATTACHMENT0,t=this._colorAttachments.get(e);if(U(t)){var i=t;return this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e)),this._colorAttachments.delete(e),i}}},{key:"setColorTextureTarget",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f.f.COLOR_ATTACHMENT0,i=this._colorAttachments.get(t);U(i)&&this._framebufferTexture2D(i.glName,t,e)}},{key:"attachDepthStencilTexture",value:function(e){if(!(0,_.t)(e)){var t=e.descriptor;t.pixelFormat!==f.P.DEPTH_STENCIL&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),t.dataType!==f.G.UNSIGNED_INT_24_8&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),P(t,this._desc),this._desc.depthStencilTarget&&this._desc.depthStencilTarget!==f.V.DEPTH_STENCIL_TEXTURE&&(this._desc.depthStencilTarget=f.V.DEPTH_STENCIL_TEXTURE),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(e.glName,f.c)),this._depthStencilTexture=e}}},{key:"detachDepthStencilTexture",value:function(){var e=this._depthStencilTexture;return e&&this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,f.c)),this._depthStencilTexture=null,e}},{key:"attachDepthStencilBuffer",value:function(e){if(!(0,_.t)(e)){var t=e.descriptor;if(t.internalFormat!==f.B.DEPTH_STENCIL&&t.internalFormat!==f.B.DEPTH_COMPONENT16&&console.error("Depth/Stencil buffer must have correct internalFormat"),O(t,this._desc),this._disposeDepthStencilAttachments(),this._desc.depthStencilTarget=t.internalFormat===f.B.DEPTH_STENCIL?f.V.DEPTH_STENCIL_RENDER_BUFFER:f.V.DEPTH_RENDER_BUFFER,this._initialized){this._context.bindFramebuffer(this);var i=this._context.gl,r=this._desc.depthStencilTarget===f.V.DEPTH_RENDER_BUFFER?i.DEPTH_ATTACHMENT:i.DEPTH_STENCIL_ATTACHMENT;i.framebufferRenderbuffer(f.n.FRAMEBUFFER,r,i.RENDERBUFFER,e.glName)}this._depthAttachment=e}}},{key:"detachDepthStencilBuffer",value:function(){var e=this._context.gl,t=this._depthAttachment;if(t&&this._initialized){this._context.bindFramebuffer(this);var i=this._desc.depthStencilTarget===f.V.DEPTH_RENDER_BUFFER?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT;e.framebufferRenderbuffer(f.n.FRAMEBUFFER,i,e.RENDERBUFFER,null)}return this._depthAttachment=null,t}},{key:"detachAll",value:function(){var e=this;this._colorAttachments.forEach((function(t,i){return e._detachColorAttachment(i)})),this.detachDepthStencilBuffer(),this.detachDepthStencilTexture()}},{key:"copyToTexture",value:function(e,t,i,r,n,s,a){(e<0||t<0||n<0||s<0)&&console.error("Offsets cannot be negative!"),(i<=0||r<=0)&&console.error("Copy width and height must be greater than zero!");var o=this._desc,h=a.descriptor;a.descriptor.target!==f.M.TEXTURE_2D&&console.error("Texture target must be TEXTURE_2D!"),(e+i>o.width||t+r>o.height||n+i>h.width||s+r>h.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");var c=this._context,u=c.bindTexture(a,l.u.TEXTURE_UNIT_FOR_UPDATES);c.setActiveTexture(l.u.TEXTURE_UNIT_FOR_UPDATES),c.bindFramebuffer(this),c.gl.copyTexSubImage2D(f.M.TEXTURE_2D,0,n,s,e,t,i,r),c.bindTexture(u,l.u.TEXTURE_UNIT_FOR_UPDATES)}},{key:"readPixels",value:function(e,t,i,r,n,s,a){(i<=0||r<=0)&&console.error("Copy width and height must be greater than zero!"),a||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(e,t,i,r,n,s,a)}},{key:"readPixelsAsync",value:function(){var e=(0,h.Z)((0,o.Z)().mark((function e(t,i,r,n,s,a,h){var c,u;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._context.type===d.o.WEBGL2){e.next=2;break}return e.abrupt("return",((0,l.a)()&&console.warn("Attempting to read pixels using pixel buffer object without WebGL2"),void this.readPixels(t,i,r,n,s,a,h)));case 2:return c=this._context.gl,u=A.createPixelPack(this._context,f.F.STREAM_READ,h.byteLength),this._context.bindBuffer(u),this._context.bindFramebuffer(this),c.readPixels(t,i,r,n,s,a,0),this._context.unbindBuffer(f.A.PIXEL_PACK_BUFFER),e.next=9,u.getSubDataAsync(h);case 9:u.dispose();case 10:case"end":return e.stop()}}),e,this)})));return function(t,i,r,n,s,a,o){return e.apply(this,arguments)}}()},{key:"resize",value:function(e,t){var i=this._desc;if(i.width!==e||i.height!==t){if(!this._initialized)return i.width=e,i.height=t,this._colorAttachments.forEach((function(i){i&&i.resize(e,t)})),void(this._depthStencilTexture&&this._depthStencilTexture.resize(e,t));i.width=e,i.height=t,this._colorAttachments.forEach((function(i){i&&i.resize(e,t)})),null!=this._depthStencilTexture?this._depthStencilTexture.resize(e,t):(this._depthAttachment||this._stencilAttachment)&&(this._depthAttachment&&this._depthAttachment.resize(e,t),this._stencilAttachment&&this._stencilAttachment.resize(e,t)),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1}}},{key:"initializeAndBind",value:function(){var e,t,i,r,n=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f.n.FRAMEBUFFER,a=this._context.gl;if(this._initialized)a.bindFramebuffer(s,this.glName);else{this._glName&&a.deleteFramebuffer(this._glName);var o=this._context,h=a.createFramebuffer(),c=this._desc,u=null!==(e=c.colorTarget)&&void 0!==e?e:f.Y.RENDER_BUFFER,_=null!==(t=c.width)&&void 0!==t?t:1,d=null!==(i=c.height)&&void 0!==i?i:1;if(a.bindFramebuffer(s,h),0===this._colorAttachments.size)if(u===f.Y.TEXTURE||u===f.Y.CUBEMAP)this._colorAttachments.set(f.f.COLOR_ATTACHMENT0,C(o,c,this.descriptor.colorTarget===f.Y.CUBEMAP?f.M.TEXTURE_CUBE_MAP:f.M.TEXTURE_2D));else{var E=new F(o,{internalFormat:f.U.RGBA4,width:_,height:d});this._colorAttachments.set(f.f.COLOR_ATTACHMENT0,E)}this._colorAttachments.forEach((function(e,t){e&&(U(e)?n._framebufferTexture2D(e.glName,t,L(e),s):a.framebufferRenderbuffer(s,t,a.RENDERBUFFER,e.glName))}));var T=null!==(r=c.depthStencilTarget)&&void 0!==r?r:f.V.NONE;switch(T){case f.V.DEPTH_RENDER_BUFFER:case f.V.DEPTH_STENCIL_RENDER_BUFFER:this._depthAttachment||(this._depthAttachment=new F(o,{internalFormat:c.depthStencilTarget===f.V.DEPTH_RENDER_BUFFER?f.B.DEPTH_COMPONENT16:f.B.DEPTH_STENCIL,width:_,height:d}));var A=T===f.V.DEPTH_RENDER_BUFFER?a.DEPTH_ATTACHMENT:a.DEPTH_STENCIL_ATTACHMENT;a.framebufferRenderbuffer(s,A,a.RENDERBUFFER,this._depthAttachment.glName);break;case f.V.STENCIL_RENDER_BUFFER:this._stencilAttachment||(this._stencilAttachment=new F(o,{internalFormat:f.B.STENCIL_INDEX8,width:_,height:d})),a.framebufferRenderbuffer(s,a.STENCIL_ATTACHMENT,a.RENDERBUFFER,this._stencilAttachment.glName);break;case f.V.DEPTH_STENCIL_TEXTURE:if(!this._depthStencilTexture){o.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!");var R={target:f.M.TEXTURE_2D,pixelFormat:f.P.DEPTH_STENCIL,dataType:f.G.UNSIGNED_INT_24_8,samplingMode:f.L.NEAREST,wrapMode:f.D.CLAMP_TO_EDGE,width:_,height:d};this._depthStencilTexture=new l.u(o,R)}this._framebufferTexture2D(this._depthStencilTexture.glName,a.DEPTH_STENCIL_ATTACHMENT,L(this._depthStencilTexture),s)}(0,l.c)()&&a.checkFramebufferStatus(s)!==a.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!"),this._glName=h,this._initialized=!0}}},{key:"_framebufferTexture2D",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f.f.COLOR_ATTACHMENT0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f.M.TEXTURE_2D,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:f.n.FRAMEBUFFER,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;this._context.gl.framebufferTexture2D(r,t,i,e,n)}},{key:"_detachColorAttachment",value:function(e){(0,l.a)()&&console.warn("Detaching an FBO attachment can be a slow due to invalidating framebuffer completeness!");var t=this._context.gl,i=this._colorAttachments.get(e);return U(i)?this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e)):this._initialized&&(this._context.bindFramebuffer(this),t.framebufferRenderbuffer(f.n.FRAMEBUFFER,e,t.RENDERBUFFER,null)),this._colorAttachments.delete(e),i}},{key:"_disposeColorAttachments",value:function(){var e=this;this._colorAttachments.forEach((function(t,i){e._detachColorAttachment(i),t.dispose()})),this._colorAttachments.clear()}},{key:"_disposeDepthStencilAttachments",value:function(){var e=this._context.gl;if(this._depthAttachment){if(this._initialized){this._context.bindFramebuffer(this);var t=this._desc.depthStencilTarget===f.V.DEPTH_RENDER_BUFFER?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT;e.framebufferRenderbuffer(f.n.FRAMEBUFFER,t,e.RENDERBUFFER,null)}this._depthAttachment.dispose(),this._depthAttachment=null}this._stencilAttachment&&(this._initialized&&(this._context.bindFramebuffer(this),e.framebufferRenderbuffer(f.n.FRAMEBUFFER,e.STENCIL_ATTACHMENT,e.RENDERBUFFER,null)),this._stencilAttachment.dispose(),this._stencilAttachment=null),this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture.dispose(),this._depthStencilTexture=null)}},{key:"_validateColorAttachmentPoint",value:function(t){if(-1===e._MAX_COLOR_ATTACHMENTS){var i=this._context.capabilities.drawBuffers;if(i){var r=this._context.gl;e._MAX_COLOR_ATTACHMENTS=r.getParameter(i.MAX_COLOR_ATTACHMENTS)}else e._MAX_COLOR_ATTACHMENTS=1}var n=t-f.f.COLOR_ATTACHMENT0;n+1>e._MAX_COLOR_ATTACHMENTS&&B.error("esri.FrameBufferObject","illegal attachment point for color attachment: ".concat(n+1,". Implementation supports up to ").concat(e._MAX_COLOR_ATTACHMENTS," color attachments"))}}]),e}();function U(e){return"type"in e&&"texture"===e.type}function y(e){return"type"in e&&"renderbuffer"===e.type}function S(e){return U(e)||"pixelFormat"in e}function C(e,t,i){return new l.u(e,{target:i,pixelFormat:f.P.RGBA,dataType:f.G.UNSIGNED_BYTE,samplingMode:f.L.NEAREST,wrapMode:f.D.CLAMP_TO_EDGE,width:t.width,height:t.height})}function P(e,t){e.target!==f.M.TEXTURE_2D&&e.target!==f.M.TEXTURE_CUBE_MAP&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),void 0!==t.width&&t.width>=0&&void 0!==t.height&&t.height>=0?t.width===e.width&&t.height===e.height||console.error("Color attachment texture must match the framebuffer's!"):(t.width=e.width,t.height=e.height)}function O(e,t){void 0!==t.width&&t.width>=0&&void 0!==t.height&&t.height>=0?t.width===e.width&&t.height===e.height||console.error("Renderbuffer dimensions must match the framebuffer's!"):(t.width=e.width,t.height=e.height)}function L(e){return e.descriptor.target===f.M.TEXTURE_CUBE_MAP?f.M.TEXTURE_CUBE_MAP_POSITIVE_X:f.M.TEXTURE_2D}D._MAX_COLOR_ATTACHMENTS=-1}}]);
//# sourceMappingURL=8968.08a8d4eb.chunk.js.map