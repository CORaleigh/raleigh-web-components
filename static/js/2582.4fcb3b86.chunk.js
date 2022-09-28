"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[2582],{62582:function(t,e,i){i.d(e,{I:function(){return U},R:function(){return P},a:function(){return k},b:function(){return R},c:function(){return C},j:function(){return T},l:function(){return ht},m:function(){return ct},o:function(){return w},r:function(){return S},v:function(){return q}});var n=i(37762),o=i(29439),r=i(15671),s=i(43144),a=i(60136),l=i(29388),h=i(73428),c=i(69738),u=i(50165),d=i(73627),f=i(78880),v=i(87833),p=i(2760),y=i(66385),_=i(77322),x=i(24018),m=(i(73393),i(98643)),g=i(40438),b=i(44217);function S(t,e){return{type:(0,h.C)(e),value:t,unit:e}}function w(t,e){return{type:(0,h.C)(e),value:t,unit:e}}function k(t,e){return{type:(0,h.C)(e),value:t,unit:e}}function R(t,e){return S((0,h.N)(t.value,t.unit,e),e)}function C(t,e,i,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:(0,p.n)(),r=e.toXYZ(t);return r[2]=(0,x.v)(n,r,e.spatialReference,i)||0,n.renderCoordsHelper.toRenderCoords(r,e.spatialReference,o),o}function P(t,e,i,n){return"2d"===n.type?n.toScreen(e.vectorToPoint(t,I)):(C(t,e,i,n,Z),n.state.camera.projectToScreen(Z,X),(0,f.c)(X[0],X[1]))}function T(t,e,i,n,o,r,s){var a=i.toXYZ(t),l=i.toXYZ(e);if("absolute-height"!==n.mode){var h=(0,x.v)(o,a,i.spatialReference,n),c=(0,x.v)(o,l,i.spatialReference,n),u=(null==h?c:null==c?h:Math.min(h,c))||0;a[2]=u,l[2]=u}o.renderCoordsHelper.toRenderCoords(a,i.spatialReference,r),o.renderCoordsHelper.toRenderCoords(l,i.spatialReference,s)}w(0,"meters");var I=new _.j,Z=(0,p.n)(),z=(0,f.x)(),A=(0,f.x)(),X=(0,f.i)(),Y=function t(e,i,n){for(var o=0,r=i.length;o<r;o++){var s=i[o];Array.isArray(s)?t(e,s,n):null!=s&&!1!==s&&("string"==typeof s&&(s={vnodeSelector:"",properties:void 0,children:void 0,text:s.toString(),domNode:null}),n.push(s))}};function j(t,e,i){if(Array.isArray(e))i=e,e=void 0;else if(e&&("string"==typeof e||e.hasOwnProperty("vnodeSelector"))||i&&("string"==typeof i||i.hasOwnProperty("vnodeSelector")))throw new Error("h called with invalid arguments");var n,o;return i&&1===i.length&&"string"==typeof i[0]?n=i[0]:i&&(Y(t,i,o=[]),0===o.length&&(o=void 0)),{vnodeSelector:t,properties:e,children:o,text:""===n?void 0:n,domNode:null}}var M=function(t){(0,a.Z)(i,t);var e=(0,l.Z)(i);function i(t){var n;return(0,r.Z)(this,i),(n=e.call(this,t)).startX=0,n.startY=0,n.endX=0,n.endY=0,n.width=1,n.color=[0,0,0,.5],n.visible=!0,n}return(0,s.Z)(i,[{key:"startPosition",get:function(){return[this.startX,this.startY]},set:function(t){this._set("startX",t[0]),this._set("startY",t[1])}},{key:"endPosition",get:function(){return[this.endX,this.endY]},set:function(t){this._set("endX",t[0]),this._set("endY",t[1])}},{key:"strokeStyle",get:function(){var t=this.color;return"rgba(".concat(t[0],", ").concat(t[1],", ").concat(t[2],", ").concat(t[3],")")}},{key:"lineCap",get:function(){return"round"}},{key:"render",value:function(){var t=this._calculateCoordinates(B),e=t.height,i=t.left,n=t.top,o=t.width,r=t.x1,s=t.x2,a=t.y1,l=t.y2,h="stroke: ".concat(this.strokeStyle,"; stroke-width: ").concat(this.width,"; stroke-linecap: ").concat(this.lineCap,";");return j("div",{classes:{"esri-line-overlay-item":!0},styles:{left:i+"px",top:n+"px",width:o+"px",height:e+"px",visibility:this.visible?"visible":"hidden"}},[j("svg",{width:o,height:e},[j("line",{x1:r,y1:a,x2:s,y2:l,style:h})])])}},{key:"renderCanvas",value:function(t){if(this.visible){t.strokeStyle=this.strokeStyle,t.lineWidth=this.width,t.lineCap=this.lineCap;var e=this._calculateCoordinates(B);t.beginPath(),t.moveTo(e.left+e.x1,e.top+e.y1),t.lineTo(e.left+e.x2,e.top+e.y2),t.stroke()}}},{key:"_calculateCoordinates",value:function(t){var e=Math.min(this.startX,this.endX),i=Math.max(this.startX,this.endX),n=Math.min(this.startY,this.endY),o=Math.max(this.startY,this.endY),r=this.width;return t.left=e-r,t.top=n-r,t.width=i-e+2*r,t.height=Math.max(20,o-n+2*r),t.x1=this.startX-e+r,t.y1=this.startY-n+r,t.x2=this.endX-e+r,t.y2=this.endY-n+r,t}}]),i}(u.y);(0,u.e)([(0,u.d)()],M.prototype,"startX",void 0),(0,u.e)([(0,u.d)()],M.prototype,"startY",void 0),(0,u.e)([(0,u.d)()],M.prototype,"endX",void 0),(0,u.e)([(0,u.d)()],M.prototype,"endY",void 0),(0,u.e)([(0,u.d)()],M.prototype,"startPosition",null),(0,u.e)([(0,u.d)()],M.prototype,"endPosition",null),(0,u.e)([(0,u.d)()],M.prototype,"width",void 0),(0,u.e)([(0,u.d)()],M.prototype,"color",void 0),(0,u.e)([(0,u.d)()],M.prototype,"visible",void 0),(0,u.e)([(0,u.d)({readOnly:!0})],M.prototype,"strokeStyle",null),M=(0,u.e)([(0,u.n)("esri.views.overlay.LineOverlayItem")],M);var B={left:0,top:0,width:0,height:0,x1:0,y1:0,x2:0,y2:0},L=M,E={bottom:"esri-text-overlay-item-anchor-bottom","bottom-right":"esri-text-overlay-item-anchor-bottom-right","bottom-left":"esri-text-overlay-item-anchor-bottom-left",top:"esri-text-overlay-item-anchor-top","top-right":"esri-text-overlay-item-anchor-top-right","top-left":"esri-text-overlay-item-anchor-top-left",center:"esri-text-overlay-item-anchor-center",right:"esri-text-overlay-item-anchor-right",left:"esri-text-overlay-item-anchor-left"},F=function(t){(0,a.Z)(i,t);var e=(0,l.Z)(i);function i(t){var n;return(0,r.Z)(this,i),(n=e.call(this,t)).x=0,n.y=0,n.text="-",n.fontSize=14,n.anchor="center",n.visible=!0,n._backgroundColor="rgba(0, 0, 0, 0.6)",n._textColor="white",n._textShadowColor=[0,0,0],n._textShadowSize=1,n}return(0,s.Z)(i,[{key:"position",get:function(){return[this.x,this.y]},set:function(t){this._set("x",t[0]),this._set("y",t[1])}},{key:"_textShadow",get:function(){var t=(0,o.Z)(this._textColor,3),e=t[0],i=t[1],n=t[2];return"0 0 ".concat(this._textShadowSize,"px rgb(").concat(e,", ").concat(i,", ").concat(n,")")}},{key:"_padding",get:function(){return.5*this.fontSize}},{key:"_borderRadius",get:function(){return this._padding}},{key:"render",value:function(){return j("div",{classes:this._cssClasses(),styles:{left:Math.floor(this.x)+"px",top:Math.floor(this.y)+"px",visibility:this.visible?"visible":"hidden",fontSize:this.fontSize+"px",lineHeight:this.fontSize+"px",backgroundColor:this._backgroundColor,color:this._textColor,padding:this._padding+"px",borderRadius:this._borderRadius+"px",textShadow:this._textShadow}},[this.text])}},{key:"renderCanvas",value:function(t){if(this.visible){var e=t.font.replace(/^(.*?)px/,"");t.font="".concat(this.fontSize,"px ").concat(e);var i=this._padding,n=this._borderRadius,o=t.measureText(this.text).width,r=this.fontSize,s=O[this.anchor];t.textAlign="center",t.textBaseline="middle";var a=o+2*i,l=r+2*i,h=this.x+s.x*a,c=this.y+s.y*l;this._roundedRect(t,h,c,a,l,n),t.fillStyle=this._backgroundColor,t.fill();var u=this.x+(s.x+.5)*a,d=this.y+(s.y+.5)*l;this._renderTextShadow(t,this.text,u,d),t.fillStyle=this._textColor,t.fillText(this.text,u,d)}}},{key:"_renderTextShadow",value:function(t,e,i,r){t.lineJoin="miter",t.fillStyle="rgba(".concat(this._textShadowColor[0],", ").concat(this._textShadowColor[1],", ").concat(this._textShadowColor[2],", ").concat(1/H.length,")");var s,a=this._textShadowSize,l=(0,n.Z)(H);try{for(l.s();!(s=l.n()).done;){var h=(0,o.Z)(s.value,2),c=h[0],u=h[1];t.fillText(e,i+a*c,r+a*u)}}catch(d){l.e(d)}finally{l.f()}}},{key:"_roundedRect",value:function(t,e,i,n,o,r){t.beginPath(),t.moveTo(e,i+r),t.arcTo(e,i,e+r,i,r),t.lineTo(e+n-r,i),t.arcTo(e+n,i,e+n,i+r,r),t.lineTo(e+n,i+o-r),t.arcTo(e+n,i+o,e+n-r,i+o,r),t.lineTo(e+r,i+o),t.arcTo(e,i+o,e,i+o-r,r),t.closePath()}},{key:"_cssClasses",value:function(){var t={"esri-text-overlay-item":!0};for(var e in E)t[E[e]]=this.anchor===e;return t}}]),i}(u.y);(0,u.e)([(0,u.d)()],F.prototype,"x",void 0),(0,u.e)([(0,u.d)()],F.prototype,"y",void 0),(0,u.e)([(0,u.d)()],F.prototype,"position",null),(0,u.e)([(0,u.d)()],F.prototype,"text",void 0),(0,u.e)([(0,u.d)()],F.prototype,"fontSize",void 0),(0,u.e)([(0,u.d)()],F.prototype,"anchor",void 0),(0,u.e)([(0,u.d)()],F.prototype,"visible",void 0),(0,u.e)([(0,u.d)()],F.prototype,"_backgroundColor",void 0),(0,u.e)([(0,u.d)()],F.prototype,"_textColor",void 0),(0,u.e)([(0,u.d)()],F.prototype,"_textShadowColor",void 0),(0,u.e)([(0,u.d)()],F.prototype,"_textShadowSize",void 0),(0,u.e)([(0,u.d)()],F.prototype,"_textShadow",null),(0,u.e)([(0,u.d)()],F.prototype,"_padding",null),(0,u.e)([(0,u.d)()],F.prototype,"_borderRadius",null),F=(0,u.e)([(0,u.n)("esri.views.overlay.TextOverlayItem")],F);for(var O={bottom:{x:-.5,y:-1,textAlign:"center",textBaseline:"bottom"},"bottom-left":{x:0,y:-1,textAlign:"left",textBaseline:"bottom"},"bottom-right":{x:-1,y:-1,textAlign:"right",textBaseline:"bottom"},center:{x:-.5,y:-.5,textAlign:"center",textBaseline:"middle"},left:{x:0,y:-.5,textAlign:"left",textBaseline:"middle"},right:{x:-1,y:-.5,textAlign:"right",textBaseline:"middle"},top:{x:-.5,y:0,textAlign:"center",textBaseline:"top"},"top-left":{x:0,y:0,textAlign:"left",textBaseline:"top"},"top-right":{x:-1,y:0,textAlign:"right",textBaseline:"top"}},H=[],N=0;N<360;N+=22.5)H.push([Math.cos(Math.PI*N/180),Math.sin(Math.PI*N/180)]);var V=F,q=function(t){(0,a.Z)(i,t);var e=(0,l.Z)(i);function i(t){var n;return(0,r.Z)(this,i),(n=e.call(this,t.view))._handles=new c.u,n._textItem=null,n._calloutItem=null,n._showCallout=!0,n._showText=!0,n._geometry=null,n._text="-",n._fontSize=14,n._distance=25,n._anchor="right",n.applyProps(t),n}return(0,s.Z)(i,[{key:"geometry",get:function(){return this._geometry},set:function(t){this._geometry=t,this._updateLabelPosition()}},{key:"textItem",get:function(){return this._textItem}},{key:"text",get:function(){return this._text},set:function(t){this._text=t,this.attached&&(this._textItem.text=this._text)}},{key:"fontSize",get:function(){return this._fontSize},set:function(t){this._fontSize=t,this.attached&&(this._textItem.fontSize=this._fontSize)}},{key:"distance",get:function(){return this._distance},set:function(t){this._distance!==t&&(this._distance=t,this._updateLabelPosition())}},{key:"anchor",get:function(){return this._anchor},set:function(t){this._anchor!==t&&(this._anchor=t,this._updateLabelPosition())}},{key:"overlaps",value:function(t){return!!this.attached&&this.textItem.visible&&t.textItem.visible&&this.view.overlay.overlaps(this._textItem,t.textItem)}},{key:"_updateLabelPosition",value:function(){if(this.attached){this._showText=!1,this._showCallout=!1;var t=this.geometry,e=this.view,i=this.visible;if((0,u.r)(t)&&e._stage)switch(t.type){case"point":if(!this._computeLabelPositionFromPoint(t.point,it))break;if(t.callout){var n=e.state.camera,o=t.callout.distance;(0,v.s)(et,et,[0,t.callout.offset]),n.renderToScreen(et,it),(0,v.r)($,0,1),(0,v.l)($,$,o*n.pixelRatio),(0,v.s)($,$,et),n.renderToScreen($,nt),this._showCallout=this._updatePosition(it,nt)}else this._textItem.position=[it[0],it[1]],this._textItem.anchor="center";this._showText=!0;break;case"corner":if(!this._computeLabelPositionFromCorner(t,this._distance,it,nt))break;this._showCallout=this._updatePosition(it,nt),this._showText=!0;break;case"segment":if(!this._computeLabelPositionFromSegment(t,this._distance,this._anchor,it,nt))break;this._showText=!0;var r=this._updatePosition(it,nt);this._showCallout=!1!==t.callout&&r,this._showCallout||(this._textItem.anchor="center")}this.updateVisibility(i)}}},{key:"_computeLabelPositionFromPoint",value:function(t,e){var i=this.view.state.camera;return i.projectToRenderScreen(t,et),!(et[2]<0||et[2]>1)&&(i.renderToScreen(et,e),!0)}},{key:"_computeLabelPositionFromCorner",value:function(t,e,i,n){if(!t)return!1;var o=this.view.state.camera;return G(t.left,1,o,K),(0,v.x)(K,K),G(t.right,0,o,Q),(0,v.s)($,K,Q),(0,v.x)($,$),(0,v.v)($,$),o.projectToRenderScreen(t.left.endRenderSpace,et),!(et[2]<0||et[2]>1)&&(o.renderToScreen(et,i),(0,v.l)($,$,e*o.pixelRatio),(0,v.s)($,$,et),o.renderToScreen($,n),!0)}},{key:"_computeLabelPositionFromSegment",value:function(t,e,i,n,o){if(!t)return!1;var r=t.segment,s=this.view.state.camera;(function(t,e,i,n){i.projectToRenderScreen(t,z),i.projectToRenderScreen(e,A),(0,v.o)(n,A,z),(0,v.v)(n,n)})(r.startRenderSpace,r.endRenderSpace,s,K),(0,v.r)($,-K[1],K[0]);var a=!1;switch(i){case"top":a=$[1]<0;break;case"bottom":a=$[1]>0;break;case"left":a=$[0]>0;break;case"right":a=$[0]<0}if(a&&(0,v.x)($,$),0===(0,v.q)($))switch(i){case"top":$[1]=1;break;case"bottom":$[1]=-1;break;case"left":$[0]=-1;break;case"right":$[0]=1}return r.eval(lt[t.sampleLocation],tt),s.projectToRenderScreen(tt,et),!(et[2]<0||et[2]>1)&&(s.renderToScreen(et,n),(0,v.l)($,$,e*s.pixelRatio),(0,v.s)($,$,et),s.renderToScreen($,o),!0)}},{key:"_updatePosition",value:function(t,e){if(e){var i=e[0]-t[0],n=e[1]-t[1];return this._textItem.position=[e[0],e[1]],this._textItem.anchor=Math.abs(i)>Math.abs(n)?i>0?"left":"right":n>0?"top":"bottom",this._calloutItem.startPosition=[t[0],t[1]],this._calloutItem.endPosition=[e[0],e[1]],!0}return this._textItem.position=[t[0],t[1]],this._textItem.anchor="center",!1}},{key:"createResources",value:function(){var t=this;this._textItem=new V({visible:!0,text:this._text,fontSize:this._fontSize}),this._calloutItem=new L({visible:!0,width:2}),this._updateLabelPosition(),this.view.overlay.items.addMany([this._textItem,this._calloutItem]),this._handles.add((0,d.l)((function(){return t.view.state.camera}),(function(){return t._updateLabelPosition()})))}},{key:"destroyResources",value:function(){this.view.overlay&&!this.view.overlay.destroyed&&this.view.overlay.items.removeMany([this._textItem,this._calloutItem]),this._handles.removeAll()}},{key:"updateVisibility",value:function(t){this._textItem.visible=this._showText&&t,this._calloutItem.visible=this._showCallout&&t}}]),i}(y.t);function G(t,e,i,n){t.eval(e,J,D),(0,p.u)(W,J,D),i.projectToRenderScreen(J,ot),i.projectToRenderScreen(W,st),(0,v.o)(n,at,rt),(0,v.v)(n,n)}function U(t){switch(t){case"top":return"bottom";case"right":return"left";case"bottom":return"top";case"left":return"right"}}var J=(0,p.n)(),W=(0,p.n)(),D=(0,p.n)(),K=(0,f.s)(),Q=(0,f.s)(),$=(0,f.s)(),tt=(0,p.n)(),et=(0,f.x)(),it=(0,f.i)(),nt=(0,f.i)(),ot=(0,f.x)(),rt=ot,st=(0,f.x)(),at=st,lt={start:0,center:.5,end:1},ht=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,p.n)(),i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,p.n)();(0,r.Z)(this,t),this.startRenderSpace=e,this.endRenderSpace=i,this.type="euclidean"}return(0,s.Z)(t,[{key:"eval",value:function(t,e,i){return(0,p.A)(e,this.startRenderSpace,this.endRenderSpace,t),i&&((0,p.e)(i,this.endRenderSpace,this.startRenderSpace),(0,p.z)(i,i)),e}},{key:"createRenderGeometry",value:function(t,e){var i=[],n=[],o=function(e,o){var r=dt;(0,p.e)(r,e,t),i.push([r[0],r[1],r[2]]),n.push([o[0],o[1],o[2]])},r=e.worldUpAtPosition(this.eval(.5,ut),g.c.get());return o(this.startRenderSpace,r),o(this.endRenderSpace,r),{points:i,normals:n}}}],[{key:"fromPositionAndVector",value:function(e,i){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return(0,p.q)(ut,i,n),(0,p.u)(ut,e,ut),new t((0,p.h)(e),(0,p.h)(ut))}}]),t}(),ct=function(){function t(e,i,n){(0,r.Z)(this,t),this.startRenderSpace=e,this.endRenderSpace=i,this.renderSpatialReference=n,this.type="geodesic",this._start=(0,p.n)(),this._end=(0,p.n)(),this._pcpf=(0,h.O)(n),this._project=(0,m.A)(n,this._pcpf),this._projectIn(e,this._start),this._projectIn(i,this._end)}return(0,s.Z)(t,[{key:"_projectIn",value:function(t,e){this._project?(0,m.B)(t,this.renderSpatialReference,e,this._pcpf):(0,p.a)(e,t)}},{key:"eval",value:function(t,e,i){if(this._project)if(i){var n=dt;(0,b.a6)(this._start,this._end,t,e,n),(0,p.u)(ft,e,n),(0,m.B)(e,this._pcpf,e,this.renderSpatialReference),(0,m.B)(ft,this._pcpf,ft,this.renderSpatialReference),(0,p.e)(i,ft,e),(0,p.z)(i,i)}else(0,b.k)(this._start,this._end,t,e),(0,m.B)(e,this._pcpf,e,this.renderSpatialReference);else(0,p.A)(e,this._start,this._end,t),i&&((0,p.e)(i,this._end,this._start),(0,p.z)(i,i));return e}},{key:"createRenderGeometry",value:function(t,e){for(var i=[],n=[],o=function(e,o){var r=ft;(0,p.e)(r,e,t),i.push([r[0],r[1],r[2]]),n.push([o[0],o[1],o[2]])},r=0;r<128;++r){var s=r/127,a=ut,l=dt;this.eval(s,a),e.worldUpAtPosition(a,l),o(a,l)}return{points:i,normals:n}}}]),t}(),ut=(0,p.n)(),dt=(0,p.n)(),ft=(0,p.n)()},24018:function(t,e,i){i.d(e,{d:function(){return c},f:function(){return a},m:function(){return d},s:function(){return r},u:function(){return s},v:function(){return l}});var n=i(50165),o=i(63334);function r(t,e){return function(t,e){return(0,n.t)(e)||!e.mode?t?"absolute-height":"on-the-ground":e.mode}(!!(0,n.r)(t)&&t.hasZ,e)}function s(t){var e=function(t){return t.layer&&"elevationInfo"in t.layer?t.layer.elevationInfo:null}(t),i=r(t.geometry,e);return{mode:i,offset:(0,n.r)(e)&&"on-the-ground"!==i?(0,n.af)(e.offset,0)*(0,o.r)((0,n.af)(e.unit,"meters")):0}}function a(t,e,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return h(t,e.x,e.y,e.hasZ?e.z:0,e.spatialReference,i,n)}function l(t,e,i,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return h(t,e[0],e[1],e.length>2?e[2]:0,i,n,o)}function h(t,e,i,o,r,s){var a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;if(!(0,n.t)(s)){var l=(0,n.r)(a)?a.mode:"absolute-height";if("on-the-ground"===l)return 0;var h=c(e,i,o,r,t,s),d=h.absoluteZ;return u(d,e,i,o,r,t,a,l)}}function c(t,e,i,o,r,s){var a=(0,n.r)(s.offset)?s.offset:0;switch(s.mode){case"absolute-height":return{absoluteZ:i+a,elevation:0};case"on-the-ground":var l=(0,n.af)(r.elevationProvider.getElevation(t,e,0,o,"ground"),0);return{absoluteZ:l,elevation:l};case"relative-to-ground":var h=(0,n.af)(r.elevationProvider.getElevation(t,e,i,o,"ground"),0);return{absoluteZ:i+h+a,elevation:h};case"relative-to-scene":var c=(0,n.af)(r.elevationProvider.getElevation(t,e,i,o,"scene"),0);return{absoluteZ:i+c+a,elevation:c}}}function u(t,e,i,o,r,s,a,l){var h=(0,n.r)(a)&&(0,n.r)(a.offset)?a.offset:0;switch(l){case"absolute-height":return t-h;case"relative-to-ground":return t-((0,n.af)(s.elevationProvider.getElevation(e,i,o,r,"ground"),0)+h);case"relative-to-scene":return t-((0,n.af)(s.elevationProvider.getElevation(e,i,o,r,"scene"),0)+h)}}var d={mode:"absolute-height",offset:0}}}]);
//# sourceMappingURL=2582.4fcb3b86.chunk.js.map