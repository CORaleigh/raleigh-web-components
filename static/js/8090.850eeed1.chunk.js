"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[8090],{74337:function(e,t,a){a.d(t,{M:function(){return r},P:function(){return n},g:function(){return l}});var i=1/Math.LN2;function r(e){return function(e,t){return(e%=t)>=0?e:e+t}(.7111111111111111*e,256)}function n(e){return Math.log(e)*i}function l(e,t,a){return e>=t&&e<=a||e>=a&&e<=t}},38264:function(e,t,a){a.d(t,{e:function(){return n}});var i=a(15671),r=a(43144),n=function(){function e(t){(0,i.Z)(this,e),this._readFile=t}return(0,r.Z)(e,[{key:"resolveIncludes",value:function(e){return this._resolve(e)}},{key:"_resolve",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Map;if(a.has(e))return a.get(e);var i=this._read(e);if(!i)throw new Error("cannot find shader file ".concat(e));for(var r=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm,n=r.exec(i),l=[];null!=n;)l.push({path:n[1],start:n.index,length:n[0].length}),n=r.exec(i);var o=0,u="";return l.forEach((function(e){u+=i.slice(o,e.start),u+=a.has(e.path)?"":t._resolve(e.path,a),o=e.start+e.length})),u+=i.slice(o),a.set(e,u),u}},{key:"_read",value:function(e){return this._readFile(e)}}]),e}()},92739:function(e,t,a){a.d(t,{a:function(){return i},f:function(){return v},i:function(){return r},l:function(){return l},m:function(){return u},n:function(){return n},o:function(){return s},p:function(){return m},r:function(){return f},u:function(){return o}});var i,r,n,l,o,u,s,f,m,d,c=a(43144),p=a(15671),y=a(18144);(d=i||(i={}))[d.BACKGROUND=0]="BACKGROUND",d[d.FILL=1]="FILL",d[d.LINE=2]="LINE",d[d.SYMBOL=3]="SYMBOL",d[d.CIRCLE=4]="CIRCLE",function(e){e[e.VISIBLE=0]="VISIBLE",e[e.NONE=1]="NONE"}(r||(r={})),function(e){e[e.POINT=0]="POINT",e[e.LINE=1]="LINE",e[e.LINE_CENTER=2]="LINE_CENTER"}(n||(n={})),function(e){e[e.MAP=0]="MAP",e[e.VIEWPORT=1]="VIEWPORT",e[e.AUTO=2]="AUTO"}(l||(l={})),function(e){e[e.AUTO=0]="AUTO",e[e.LEFT=1]="LEFT",e[e.CENTER=2]="CENTER",e[e.RIGHT=3]="RIGHT"}(o||(o={})),function(e){e[e.CENTER=0]="CENTER",e[e.LEFT=1]="LEFT",e[e.RIGHT=2]="RIGHT",e[e.TOP=3]="TOP",e[e.BOTTOM=4]="BOTTOM",e[e.TOP_LEFT=5]="TOP_LEFT",e[e.TOP_RIGHT=6]="TOP_RIGHT",e[e.BOTTOM_LEFT=7]="BOTTOM_LEFT",e[e.BOTTOM_RIGHT=8]="BOTTOM_RIGHT"}(u||(u={})),function(e){e[e.NONE=0]="NONE",e[e.UPPERCASE=1]="UPPERCASE",e[e.LOWERCASE=2]="LOWERCASE"}(s||(s={})),function(e){e[e.MAP=0]="MAP",e[e.VIEWPORT=1]="VIEWPORT"}(f||(f={})),function(e){e[e.HORIZONTAL=0]="HORIZONTAL",e[e.VERTICAL=1]="VERTICAL"}(m||(m={}));var v=(0,c.Z)((function e(){(0,p.Z)(this,e)}));v.backgroundLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:r.VISIBLE}},v.fillLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:r.VISIBLE}},v.lineLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:r.VISIBLE},"line-cap":{type:"enum",values:["butt","round","square"],default:y.e.BUTT},"line-join":{type:"enum",values:["bevel","round","miter"],default:y.n.MITER},"line-miter-limit":{type:"number",default:2},"line-round-limit":{type:"number",default:1.05}},v.symbolLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:r.VISIBLE},"symbol-avoid-edges":{type:"boolean",default:!1},"symbol-placement":{type:"enum",values:["point","line","line-center"],default:n.POINT},"symbol-sort-key":{type:"number",default:-1},"symbol-spacing":{type:"number",minimum:1,default:250},"icon-allow-overlap":{type:"boolean",default:!1},"icon-anchor":{type:"enum",values:["center","left","right","top","bottom","top-left","top-right","bottom-left","bottom-right"],default:u.CENTER},"icon-ignore-placement":{type:"boolean",default:!1},"icon-image":{type:"string"},"icon-keep-upright":{type:"boolean",default:!1},"icon-offset":{type:"array",value:"number",length:2,default:[0,0]},"icon-optional":{type:"boolean",default:!1},"icon-padding":{type:"number",minimum:0,default:2},"icon-rotate":{type:"number",default:0},"icon-rotation-alignment":{type:"enum",values:["map","viewport","auto"],default:l.AUTO},"icon-size":{type:"number",minimum:0,default:1},"text-allow-overlap":{type:"boolean",default:!1},"text-anchor":{type:"enum",values:["center","left","right","top","bottom","top-left","top-right","bottom-left","bottom-right"],default:u.CENTER},"text-field":{type:"string"},"text-font":{type:"array",value:"string",default:["Open Sans Regular","Arial Unicode MS Regular"]},"text-ignore-placement":{type:"boolean",default:!1},"text-justify":{type:"enum",values:["auto","left","center","right"],default:o.CENTER},"text-keep-upright":{type:"boolean",default:!0},"text-letter-spacing":{type:"number",default:0},"text-line-height":{type:"number",default:1.2},"text-max-angle":{type:"number",minimum:0,default:45},"text-max-width":{type:"number",minimum:0,default:10},"text-offset":{type:"array",value:"number",length:2,default:[0,0]},"text-optional":{type:"boolean",default:!1},"text-padding":{type:"number",minimum:0,default:2},"text-rotate":{type:"number",default:0},"text-rotation-alignment":{type:"enum",values:["map","viewport","auto"],default:l.AUTO},"text-size":{type:"number",minimum:0,default:16},"text-transform":{type:"enum",values:["none","uppercase","lowercase"],default:s.NONE},"text-writing-mode":{type:"array",value:"enum",values:["horizontal","vertical"],default:[m.HORIZONTAL]}},v.circleLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:r.VISIBLE}},v.backgroundPaintDefinition={"background-color":{type:"color",default:[0,0,0,1]},"background-opacity":{type:"number",minimum:0,maximum:1,default:1},"background-pattern":{type:"string"}},v.fillPaintDefinition={"fill-antialias":{type:"boolean",default:!0},"fill-color":{type:"color",default:[0,0,0,1]},"fill-opacity":{type:"number",minimum:0,maximum:1,default:1},"fill-outline-color":{type:"color",default:[0,0,0,0]},"fill-pattern":{type:"string"},"fill-translate":{type:"array",value:"number",length:2,default:[0,0]},"fill-translate-anchor":{type:"enum",values:["map","viewport"],default:f.MAP}},v.linePaintDefinition={"line-blur":{type:"number",minimum:0,default:0},"line-color":{type:"color",default:[0,0,0,1]},"line-dasharray":{type:"array",value:"number",default:[]},"line-gap-width":{type:"number",minimum:0,default:0},"line-offset":{type:"number",default:0},"line-opacity":{type:"number",minimum:0,maximum:1,default:1},"line-pattern":{type:"string"},"line-translate":{type:"array",value:"number",length:2,default:[0,0]},"line-translate-anchor":{type:"enum",values:["map","viewport"],default:f.MAP},"line-width":{type:"number",minimum:0,default:1}},v.symbolPaintDefinition={"icon-color":{type:"color",default:[0,0,0,1]},"icon-halo-blur":{type:"number",minimum:0,default:0},"icon-halo-color":{type:"color",default:[0,0,0,0]},"icon-halo-width":{type:"number",minimum:0,default:0},"icon-opacity":{type:"number",minimum:0,maximum:1,default:1},"icon-translate":{type:"array",value:"number",length:2,default:[0,0]},"icon-translate-anchor":{type:"enum",values:["map","viewport"],default:f.MAP},"text-color":{type:"color",default:[0,0,0,1]},"text-halo-blur":{type:"number",minimum:0,default:0},"text-halo-color":{type:"color",default:[0,0,0,0]},"text-halo-width":{type:"number",minimum:0,default:0},"text-opacity":{type:"number",minimum:0,maximum:1,default:1},"text-translate":{type:"array",value:"number",length:2,default:[0,0]},"text-translate-anchor":{type:"enum",values:["map","viewport"],default:f.MAP}},v.rasterPaintDefinition={"raster-opacity":{type:"number",minimum:0,maximum:1,default:1},"raster-hue-rotate":{type:"number",default:0},"raster-brightness-min":{type:"number",minimum:0,maximum:1,default:0},"raster-brightness-max":{type:"number",minimum:0,maximum:1,default:1},"raster-saturation":{type:"number",minimum:-1,maximum:1,default:0},"raster-contrast":{type:"number",minimum:-1,maximum:1,default:0},"raster-fade-duration":{type:"number",minimum:0,default:300}},v.circlePaintDefinition={"circle-blur":{type:"number",minimum:0,default:0},"circle-color":{type:"color",default:[0,0,0,1]},"circle-opacity":{type:"number",minimum:0,maximum:1,default:1},"circle-radius":{type:"number",minimum:0,default:5},"circle-stroke-color":{type:"color",default:[0,0,0,1]},"circle-stroke-opacity":{type:"number",minimum:0,maximum:1,default:1},"circle-stroke-width":{type:"number",minimum:0,default:0},"circle-translate":{type:"array",value:"number",length:2,default:[0,0]},"circle-translate-anchor":{type:"enum",values:["map","viewport"],default:f.MAP}}},7131:function(e,t,a){a.d(t,{M:function(){return R},c:function(){return P},d:function(){return I},m:function(){return b},t:function(){return M},u:function(){return U}});var i=a(29439),r=a(60136),n=a(29388),l=a(37762),o=a(15671),u=a(43144),s=a(71802),f=a(93661),m=a(43066),d=a(1797),c=a(18144),p=a(1206),y=a(24046),v=a(31698),g=a(93122),h=a(92739),E=a(68136),_=a(65636),T=a(74337),M=function(){function e(){(0,o.Z)(this,e),this.name=this.constructor.name||"UnnamedBrush",this.brushEffect=null}return(0,u.Z)(e,[{key:"prepareState",value:function(e,t){}},{key:"draw",value:function(e,t,a){}},{key:"drawMany",value:function(e,t,a){var i,r=(0,l.Z)(t);try{for(r.s();!(i=r.n()).done;){var n=i.value;n.visible&&this.draw(e,n,a)}}catch(o){r.e(o)}finally{r.f()}}}]),e}(),I=function(e){(0,r.Z)(a,e);var t=(0,n.Z)(a);function a(){var e;return(0,o.Z)(this,a),(e=t.apply(this,arguments))._color=(0,d.r)(1,0,0,1),e._patternMatrix=(0,m.e)(),e._programOptions={id:!1,pattern:!1},e}return(0,u.Z)(a,[{key:"dispose",value:function(){this._vao&&(this._vao.dispose(),this._vao=null)}},{key:"drawMany",value:function(e,t){var a=e.context,i=e.painter,r=e.styleLayerUID,n=e.requestRender,o=e.allowDelayedRender;this._loadWGLResources(e);var u,m,d=e.displayLevel,v=e.styleLayer,h=v.backgroundMaterial,E=i.vectorTilesMaterialManager,_=v.getPaintValue("background-color",d),T=v.getPaintValue("background-opacity",d),M=v.getPaintValue("background-pattern",d),I=void 0!==M,P=_[3]*T,x=1|window.devicePixelRatio,b=e.spriteMosaic,U=x>c.an?2:1,R=e.drawPhase===p.I.HITTEST,L=this._programOptions;L.id=R,L.pattern=I;var O=E.getMaterialProgram(a,h,L);if(o&&(0,f.r)(n)&&!O.isCompiled)n();else{if(a.bindVAO(this._vao),a.useProgram(O),I){var S=b.getMosaicItemPosition(M,!0);if((0,f.r)(S)){var w=S.tl,N=S.br,A=S.page;u=N[0]-w[0],m=N[1]-w[1];var D=b.getPageSize(A);(0,f.r)(D)&&(b.bind(a,g.L.LINEAR,A,c.am),O.setUniform4f("u_tlbr",w[0],w[1],N[0],N[1]),O.setUniform2fv("u_mosaicSize",D),O.setUniform1i("u_texture",c.am))}O.setUniform1f("u_opacity",T)}else this._color[0]=P*_[0],this._color[1]=P*_[1],this._color[2]=P*_[2],this._color[3]=P,O.setUniform4fv("u_color",this._color);if(O.setUniform1f("u_depth",v.z||0),R){var V=(0,y.M)(r+1);O.setUniform4fv("u_id",V)}var k,C=(0,l.Z)(t);try{for(C.s();!(k=C.n()).done;){var Z=k.value;if(O.setUniform1f("u_coord_range",Z.rangeX),O.setUniformMatrix3fv("u_dvsMat3",Z.transforms.dvs),I){var G=Math.max(Math.pow(2,Math.round(d)-Z.key.level),1),z=U*Z.width*G,F=z/(0,s.al)(u),B=z/(0,s.al)(m);this._patternMatrix[0]=F,this._patternMatrix[4]=B,O.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix)}a.setStencilFunction(g.I.EQUAL,0,255),a.drawArrays(g.E.TRIANGLE_STRIP,0,4)}}catch(W){C.e(W)}finally{C.f()}}}},{key:"_loadWGLResources",value:function(e){if(!this._vao){var t=e.context,a=e.styleLayer.backgroundMaterial,i=new Int8Array([0,0,1,0,0,1,1,1]),r=v.E.createVertex(t,g.F.STATIC_DRAW,i),n=new v.b(t,a.getAttributeLocations(),a.getLayoutInfo(),{geometry:r});this._vao=n}}}]),a}(M),P=function(e){(0,r.Z)(a,e);var t=(0,n.Z)(a);function a(){var e;return(0,o.Z)(this,a),(e=t.apply(this,arguments))._programOptions={id:!1},e}return(0,u.Z)(a,[{key:"dispose",value:function(){}},{key:"drawMany",value:function(e,t){var a=e.context,i=e.displayLevel,r=e.requiredLevel,n=e.state,o=e.drawPhase,u=e.painter,s=e.spriteMosaic,m=e.styleLayerUID,d=e.requestRender,c=e.allowDelayedRender;if(t.some((function(e){var t,a;return null!==(t=null===(a=e.layerData.get(m))||void 0===a?void 0:a.circleIndexCount)&&void 0!==t&&t}))){var v=e.styleLayer,E=v.circleMaterial,_=u.vectorTilesMaterialManager,T=v.getPaintValue("circle-translate",i),M=v.getPaintValue("circle-translate-anchor",i),I=o===p.I.HITTEST,P=this._programOptions;P.id=I;var x=_.getMaterialProgram(a,E,P);if(c&&(0,f.r)(d)&&!x.isCompiled)d();else{a.useProgram(x),x.setUniformMatrix3fv("u_displayMat3",M===h.r.VIEWPORT?n.displayMat3:n.displayViewMat3),x.setUniform2fv("u_circleTranslation",T),x.setUniform1f("u_depth",v.z),x.setUniform1f("u_antialiasingWidth",1.2);var b=-1;if(I){var U=(0,y.M)(m+1);x.setUniform4fv("u_id",U)}var R,L=(0,l.Z)(t);try{for(L.s();!(R=L.n()).done;){var O=R.value;if(O.layerData.has(m)){O.key.level!==b&&(b=O.key.level,E.setDataUniforms(x,i,v,b,s));var S=O.layerData.get(m);if(S.circleIndexCount){S.prepareForRendering(a);var w=S.circleVertexArrayObject;(0,f.t)(w)||(a.bindVAO(w),x.setUniformMatrix3fv("u_dvsMat3",O.transforms.dvs),r!==O.key.level?a.setStencilFunction(g.I.EQUAL,O.stencilRef,255):a.setStencilFunction(g.I.GREATER,255,255),a.drawElements(g.E.TRIANGLES,S.circleIndexCount,g.C.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*S.circleIndexStart),O.triangleCount+=S.circleIndexCount/3)}}}}catch(N){L.e(N)}finally{L.f()}}}}}]),a}(M),x=1/65536,b=function(e){(0,r.Z)(a,e);var t=(0,n.Z)(a);function a(){var e;return(0,o.Z)(this,a),(e=t.apply(this,arguments))._fillProgramOptions={id:!1,pattern:!1},e._outlineProgramOptions={id:!1},e}return(0,u.Z)(a,[{key:"dispose",value:function(){}},{key:"drawMany",value:function(e,t){var a,i=e.displayLevel,r=e.drawPhase,n=e.renderPass,o=e.spriteMosaic,u=e.styleLayerUID,s=!1,f=(0,l.Z)(t);try{for(f.s();!(a=f.n()).done;){var m=a.value;if(m.layerData.has(u)){var d=m.layerData.get(u);if(d.fillIndexCount>0||d.outlineIndexCount>0){s=!0;break}}}}catch(S){f.e(S)}finally{f.f()}if(s){var c,v=e.styleLayer,g=v.getPaintProperty("fill-pattern"),h=void 0!==g,E=h&&g.isDataDriven;if(h&&!E){var _=g.getValue(i);c=o.getMosaicItemPosition(_,!0)}var T=!h&&v.getPaintValue("fill-antialias",i),M=!0,I=1;if(!h){var P=v.getPaintProperty("fill-color"),x=v.getPaintProperty("fill-opacity");if((null===P||void 0===P||!P.isDataDriven)&&(null===x||void 0===x||!x.isDataDriven)){var b=v.getPaintValue("fill-color",i);(I=v.getPaintValue("fill-opacity",i)*b[3])>=1&&(M=!1)}}if(!M||"opaque"!==n){var U;r===p.I.HITTEST&&(U=(0,y.M)(u+1));var R=v.getPaintValue("fill-translate",i),L=v.getPaintValue("fill-translate-anchor",i);(M||"translucent"!==n)&&this._drawFill(e,u,v,t,R,L,h,c,E,U);var O=!v.hasDataDrivenOutlineColor&&v.outlineUsesFillColor&&I<1;T&&"opaque"!==n&&!O&&this._drawOutline(e,u,v,t,R,L,U)}}}},{key:"_drawFill",value:function(e,t,a,r,n,o,u,s,m,d){if(!u||m||!(0,f.t)(s)){var y=e.context,v=e.displayLevel,E=e.state,_=e.drawPhase,T=e.painter,M=e.pixelRatio,I=e.spriteMosaic,P=e.requestRender,b=e.allowDelayedRender,U=a.fillMaterial,R=T.vectorTilesMaterialManager,L=M>c.an?2:1,O=_===p.I.HITTEST,S=this._fillProgramOptions;S.id=O,S.pattern=u;var w=R.getMaterialProgram(y,U,S);if(b&&(0,f.r)(P)&&!w.isCompiled)P();else{if(y.useProgram(w),(0,f.r)(s)){var N=s.page,A=I.getPageSize(N);(0,f.r)(A)&&(I.bind(y,g.L.LINEAR,N,c.am),w.setUniform2fv("u_mosaicSize",A),w.setUniform1i("u_texture",c.am))}w.setUniformMatrix3fv("u_displayMat3",o===h.r.VIEWPORT?E.displayMat3:E.displayViewMat3),w.setUniform2fv("u_fillTranslation",n),w.setUniform1f("u_depth",a.z+x),O&&w.setUniform4fv("u_id",d);var D,V=-1,k=(0,l.Z)(r);try{for(k.s();!(D=k.n()).done;){var C=D.value;if(C.layerData.has(t)){C.key.level!==V&&(V=C.key.level,U.setDataUniforms(w,v,a,V,I));var Z=C.layerData.get(t);if(Z.fillIndexCount){Z.prepareForRendering(y);var G=Z.fillVertexArrayObject;if(!(0,f.t)(G)){if(y.bindVAO(G),w.setUniformMatrix3fv("u_dvsMat3",C.transforms.dvs),y.setStencilFunction(g.I.EQUAL,C.stencilRef,255),u){var z=Math.max(Math.pow(2,Math.round(v)-C.key.level),1),F=C.rangeX/(L*C.width*z);w.setUniform1f("u_patternFactor",F)}if(m){var B=Z.patternMap;if(!B)continue;var W,H=(0,l.Z)(B);try{for(H.s();!(W=H.n()).done;){var q=(0,i.Z)(W.value,2),Y=q[0],j=q[1],Q=I.getPageSize(Y);(0,f.r)(Q)&&(I.bind(y,g.L.LINEAR,Y,c.am),w.setUniform2fv("u_mosaicSize",Q),w.setUniform1i("u_texture",c.am),y.drawElements(g.E.TRIANGLES,j[1],g.C.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*j[0]))}}catch(K){H.e(K)}finally{H.f()}}else y.drawElements(g.E.TRIANGLES,Z.fillIndexCount,g.C.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*Z.fillIndexStart);C.triangleCount+=Z.fillIndexCount/3}}}}}catch(K){k.e(K)}finally{k.f()}}}}},{key:"_drawOutline",value:function(e,t,a,i,r,n,o){var u=e.context,s=e.displayLevel,m=e.state,d=e.drawPhase,c=e.painter,y=e.pixelRatio,v=e.spriteMosaic,E=e.requestRender,_=e.allowDelayedRender,T=a.outlineMaterial,M=c.vectorTilesMaterialManager,I=.75/y,P=d===p.I.HITTEST,b=this._outlineProgramOptions;b.id=P;var U=M.getMaterialProgram(u,T,b);if(_&&(0,f.r)(E)&&!U.isCompiled)E();else{u.useProgram(U),U.setUniformMatrix3fv("u_displayMat3",n===h.r.VIEWPORT?m.displayMat3:m.displayViewMat3),U.setUniform2fv("u_fillTranslation",r),U.setUniform1f("u_depth",a.z+x),U.setUniform1f("u_outline_width",I),P&&U.setUniform4fv("u_id",o);var R,L=-1,O=(0,l.Z)(i);try{for(O.s();!(R=O.n()).done;){var S=R.value;if(S.layerData.has(t)){S.key.level!==L&&(L=S.key.level,T.setDataUniforms(U,s,a,L,v));var w=S.layerData.get(t);if(w.prepareForRendering(u),w.outlineIndexCount){var N=w.outlineVertexArrayObject;(0,f.t)(N)||(u.bindVAO(N),U.setUniformMatrix3fv("u_dvsMat3",S.transforms.dvs),u.setStencilFunction(g.I.EQUAL,S.stencilRef,255),u.drawElements(g.E.TRIANGLES,w.outlineIndexCount,g.C.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*w.outlineIndexStart),S.triangleCount+=w.outlineIndexCount/3)}}}}catch(A){O.e(A)}finally{O.f()}}}}]),a}(M),U=function(e){(0,r.Z)(a,e);var t=(0,n.Z)(a);function a(){var e;return(0,o.Z)(this,a),(e=t.apply(this,arguments))._programOptions={id:!1,pattern:!1,sdf:!1},e}return(0,u.Z)(a,[{key:"dispose",value:function(){}},{key:"drawMany",value:function(e,t){var a=e.context,r=e.displayLevel,n=e.state,o=e.drawPhase,u=e.painter,s=e.pixelRatio,m=e.spriteMosaic,d=e.styleLayerUID,v=e.requestRender,E=e.allowDelayedRender;if(t.some((function(e){var t,a;return null!==(t=null===(a=e.layerData.get(d))||void 0===a?void 0:a.lineIndexCount)&&void 0!==t&&t}))){var _,T,M=e.styleLayer,I=M.lineMaterial,P=u.vectorTilesMaterialManager,x=M.getPaintValue("line-translate",r),b=M.getPaintValue("line-translate-anchor",r),U=M.getPaintProperty("line-pattern"),R=void 0!==U,L=R&&U.isDataDriven;if(R&&!L){var O=U.getValue(r);_=m.getMosaicItemPosition(O)}var S=!1;if(!R){var w=M.getPaintProperty("line-dasharray");if(S=(T=void 0!==w)&&w.isDataDriven,T&&!S){var N=w.getValue(r),A=M.getDashKey(N,M.getLayoutValue("line-cap",r));_=m.getMosaicItemPosition(A)}}var D=1/s,V=o===p.I.HITTEST,k=this._programOptions;k.id=V,k.pattern=R,k.sdf=T;var C=P.getMaterialProgram(a,I,k);if(E&&(0,f.r)(v)&&!C.isCompiled)v();else{if(a.useProgram(C),C.setUniformMatrix3fv("u_displayViewMat3",n.displayViewMat3),C.setUniformMatrix3fv("u_displayMat3",b===h.r.VIEWPORT?n.displayMat3:n.displayViewMat3),C.setUniform2fv("u_lineTranslation",x),C.setUniform1f("u_depth",M.z),C.setUniform1f("u_antialiasing",D),V){var Z=(0,y.M)(d+1);C.setUniform4fv("u_id",Z)}if(_&&(0,f.r)(_)){var G=_.page,z=m.getPageSize(G);(0,f.r)(z)&&(m.bind(a,g.L.LINEAR,G,c.am),C.setUniform2fv("u_mosaicSize",z),C.setUniform1i("u_texture",c.am))}var F,B=-1,W=(0,l.Z)(t);try{for(W.s();!(F=W.n()).done;){var H=F.value;if(H.layerData.has(d)){H.key.level!==B&&(B=H.key.level,I.setDataUniforms(C,r,M,B,m));var q=Math.pow(2,r-B)/s;C.setUniform1f("u_zoomFactor",q);var Y=H.layerData.get(d);if(Y.lineIndexCount){Y.prepareForRendering(a);var j=Y.lineVertexArrayObject;if(!(0,f.t)(j)){if(a.bindVAO(j),C.setUniformMatrix3fv("u_dvsMat3",H.transforms.dvs),a.setStencilFunction(g.I.EQUAL,H.stencilRef,255),L||S){var Q=Y.patternMap;if(!Q)continue;var K,X=(0,l.Z)(Q);try{for(X.s();!(K=X.n()).done;){var J=(0,i.Z)(K.value,2),$=J[0],ee=J[1],te=m.getPageSize($);(0,f.r)(te)&&(m.bind(a,g.L.LINEAR,$,c.am),C.setUniform2fv("u_mosaicSize",te),C.setUniform1i("u_texture",c.am),a.drawElements(g.E.TRIANGLES,ee[1],g.C.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*ee[0]))}}catch(ae){X.e(ae)}finally{X.f()}}else a.drawElements(g.E.TRIANGLES,Y.lineIndexCount,g.C.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*Y.lineIndexStart);H.triangleCount+=Y.lineIndexCount/3}}}}}catch(ae){W.e(ae)}finally{W.f()}}}}}]),a}(M),R=function(e){(0,r.Z)(a,e);var t=(0,n.Z)(a);function a(){var e;return(0,o.Z)(this,a),(e=t.apply(this,arguments))._iconProgramOptions={id:!1,sdf:!1},e._sdfProgramOptions={id:!1},e._spritesTextureSize=(0,E.n)(),e}return(0,u.Z)(a,[{key:"dispose",value:function(){}},{key:"drawMany",value:function(e,t){var a,i=e.drawPhase,r=e.styleLayerUID,n=e.styleLayer;i===p.I.HITTEST&&(a=(0,y.M)(r+1)),this._drawIcons(e,n,t,a),this._drawText(e,n,t,a)}},{key:"_drawIcons",value:function(e,t,a,r){var n,o,u=e.context,s=e.displayLevel,m=e.drawPhase,d=e.painter,y=e.spriteMosaic,v=e.state,g=e.styleLayerUID,E=e.requestRender,M=e.allowDelayedRender,I=t.iconMaterial,P=d.vectorTilesMaterialManager,x=!1,b=(0,l.Z)(a);try{for(b.s();!(o=b.n()).done;){var U=o.value;if(U.layerData.has(g)&&(n=U.layerData.get(g)).iconPerPageElementsMap.size>0){x=!0;break}}}catch(Y){b.e(Y)}finally{b.f()}if(x){var R=t.getPaintValue("icon-translate",s),L=t.getPaintValue("icon-translate-anchor",s),O=t.getLayoutValue("icon-rotation-alignment",s);O===h.l.AUTO&&(O=t.getLayoutValue("symbol-placement",s)===h.n.POINT?h.l.VIEWPORT:h.l.MAP);var S=O===h.l.MAP,w=t.getLayoutValue("icon-keep-upright",s)&&S,N=n.isIconSDF,A=m===p.I.HITTEST,D=this._iconProgramOptions;D.id=A,D.sdf=N;var V=P.getMaterialProgram(u,I,D);if(M&&(0,f.r)(E)&&!V.isCompiled)E();else{u.useProgram(V),V.setUniformMatrix3fv("u_displayViewMat3",O===h.l.MAP?v.displayViewMat3:v.displayMat3),V.setUniformMatrix3fv("u_displayMat3",L===h.r.VIEWPORT?v.displayMat3:v.displayViewMat3),V.setUniform2fv("u_iconTranslation",R),V.setUniform1f("u_depth",t.z),V.setUniform1f("u_mapRotation",(0,T.M)(v.rotation)),V.setUniform1f("u_keepUpright",w?1:0),V.setUniform1f("u_level",10*s),V.setUniform1i("u_texture",c.am),V.setUniform1f("u_fadeDuration",_.e/1e3),A&&V.setUniform4fv("u_id",r);var k,C=-1,Z=(0,l.Z)(a);try{for(Z.s();!(k=Z.n()).done;){var G=k.value;if(G.layerData.has(g)&&(G.key.level!==C&&(C=G.key.level,I.setDataUniforms(V,s,t,C,y)),0!==(n=G.layerData.get(g)).iconPerPageElementsMap.size)){n.prepareForRendering(u),n.updateOpacityInfo();var z=n.iconVertexArrayObject;if(!(0,f.t)(z)){u.bindVAO(z),V.setUniformMatrix3fv("u_dvsMat3",G.transforms.dvs),V.setUniform1f("u_time",(performance.now()-n.lastOpacityUpdate)/1e3);var F,B=(0,l.Z)(n.iconPerPageElementsMap);try{for(B.s();!(F=B.n()).done;){var W=(0,i.Z)(F.value,2),H=W[0],q=W[1];this._renderIconRange(e,V,q,H,G)}}catch(Y){B.e(Y)}finally{B.f()}}}}}catch(Y){Z.e(Y)}finally{Z.f()}}}}},{key:"_renderIconRange",value:function(e,t,a,i,r){var n=e.context,l=e.spriteMosaic;this._spritesTextureSize[0]=l.getWidth(i)/4,this._spritesTextureSize[1]=l.getHeight(i)/4,t.setUniform2fv("u_mosaicSize",this._spritesTextureSize),l.bind(n,g.L.LINEAR,i,c.am),n.setStencilTestEnabled(!0),n.setStencilFunction(g.I.GREATER,255,255),n.setStencilWriteMask(0),n.drawElements(g.E.TRIANGLES,a[1],g.C.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*a[0]),r.triangleCount+=a[1]/3}},{key:"_drawText",value:function(e,t,a,i){var r,n,o=this,u=e.context,s=e.displayLevel,m=e.drawPhase,d=e.glyphMosaic,y=e.painter,v=e.pixelRatio,M=e.spriteMosaic,I=e.state,P=e.styleLayerUID,x=e.requestRender,b=e.allowDelayedRender,U=t.textMaterial,R=y.vectorTilesMaterialManager,L=!1,O=(0,l.Z)(a);try{for(O.s();!(n=O.n()).done;){var S=n.value;if(S.layerData.has(P)&&(r=S.layerData.get(P)).glyphPerPageElementsMap.size>0){L=!0;break}}}catch(X){O.e(X)}finally{O.f()}if(L){var w=t.getPaintProperty("text-opacity");if(!w||w.isDataDriven||0!==w.getValue(s)){var N=t.getPaintProperty("text-color"),A=!N||N.isDataDriven||N.getValue(s)[3]>0,D=t.getPaintProperty("text-halo-width"),V=t.getPaintProperty("text-halo-color"),k=(!D||D.isDataDriven||D.getValue(s)>0)&&(!V||V.isDataDriven||V.getValue(s)[3]>0);if(A||k){var C=t.getLayoutValue("text-rotation-alignment",s);C===h.l.AUTO&&(C=t.getLayoutValue("symbol-placement",s)===h.n.POINT?h.l.VIEWPORT:h.l.MAP);var Z=C===h.l.MAP,G=t.getLayoutValue("text-keep-upright",s)&&Z,z=m===p.I.HITTEST,F=.8*3/v;this._glyphTextureSize||(this._glyphTextureSize=(0,E.t)(d.width/4,d.height/4));var B=t.getPaintValue("text-translate",s),W=t.getPaintValue("text-translate-anchor",s),H=this._sdfProgramOptions;H.id=z;var q=R.getMaterialProgram(u,U,H);if(b&&(0,f.r)(x)&&!q.isCompiled)x();else{u.useProgram(q),q.setUniformMatrix3fv("u_displayViewMat3",C===h.l.MAP?I.displayViewMat3:I.displayMat3),q.setUniformMatrix3fv("u_displayMat3",W===h.r.VIEWPORT?I.displayMat3:I.displayViewMat3),q.setUniform2fv("u_textTranslation",B),q.setUniform1f("u_depth",t.z+152587890625e-16),q.setUniform2fv("u_mosaicSize",this._glyphTextureSize),q.setUniform1f("u_mapRotation",(0,T.M)(I.rotation)),q.setUniform1f("u_keepUpright",G?1:0),q.setUniform1f("u_level",10*s),q.setUniform1i("u_texture",c.ao),q.setUniform1f("u_antialiasingWidth",F),q.setUniform1f("u_fadeDuration",_.e/1e3),z&&q.setUniform4fv("u_id",i);var Y,j=-1,Q=(0,l.Z)(a);try{var K=function(){var e=Y.value;if(!e.layerData.has(P))return"continue";if(e.key.level!==j&&(j=e.key.level,U.setDataUniforms(q,s,t,j,M)),0===(r=e.layerData.get(P)).glyphPerPageElementsMap.size)return"continue";r.prepareForRendering(u),r.updateOpacityInfo();var a=r.textVertexArrayObject;if((0,f.t)(a))return"continue";u.bindVAO(a),q.setUniformMatrix3fv("u_dvsMat3",e.transforms.dvs),u.setStencilTestEnabled(!0),u.setStencilFunction(g.I.GREATER,255,255),u.setStencilWriteMask(0);var i=(performance.now()-r.lastOpacityUpdate)/1e3;q.setUniform1f("u_time",i),r.glyphPerPageElementsMap.forEach((function(t,a){o._renderGlyphRange(u,t,a,d,q,k,A,e)}))};for(Q.s();!(Y=Q.n()).done;)K()}catch(X){Q.e(X)}finally{Q.f()}}}}}}},{key:"_renderGlyphRange",value:function(e,t,a,i,r,n,l,o){i.bind(e,g.L.LINEAR,a,c.ao),n&&(r.setUniform1f("u_halo",1),e.drawElements(g.E.TRIANGLES,t[1],g.C.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*t[0]),o.triangleCount+=t[1]/3),l&&(r.setUniform1f("u_halo",0),e.drawElements(g.E.TRIANGLES,t[1],g.C.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*t[0]),o.triangleCount+=t[1]/3)}}]),a}(M)}}]);
//# sourceMappingURL=8090.850eeed1.chunk.js.map