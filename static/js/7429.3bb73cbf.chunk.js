"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[7429],{57429:function(e,t,n){n.r(t),n.d(t,{web_map:function(){return h}});var a=n(74165),i=n(29439),r=n(15861),s=n(15671),o=n(43144),u=n(61118),c=n(93661),h=function(){function e(t){(0,s.Z)(this,e),(0,u.r)(this,t),this.navigationHandles=[],this.getRandomString=function(){var e=2147483648;return Math.floor(Math.random()*e).toString(36)+Math.abs(Math.floor(Math.random()*e)^+new Date).toString(36)},this.divId="",this.mapId=void 0,this.sceneId=void 0,this.layerlist=!1,this.legend=!1,this.search=!1,this.popup=!0,this.navigate=!0,this.basemap=void 0,this.center=void 0,this.zoom=void 0,this.address=void 0,this.width="100%",this.height="300px"}return(0,o.Z)(e,[{key:"mapIdChanged",value:function(e){this.view=this.loadWebMap(e)}},{key:"sceneIdChanged",value:function(e){this.view=this.loadWebScene(e)}},{key:"layerlistChanged",value:function(e){e?this.loadLayerList(this.view):this.view.ui.remove("layerlist")}},{key:"legendChanged",value:function(e){e?this.loadLegend(this.view):this.view.ui.remove("legend")}},{key:"searchChanged",value:function(e){e?this.loadSearch(this.view):this.view.ui.remove("search")}},{key:"popupChanged",value:function(e){this.view.popup.autoOpenEnabled=!!e}},{key:"zoomChanged",value:function(e){e&&(this.view.zoom=e)}},{key:"centerChanged",value:function(e){e&&this.zoomTo(this.view)}},{key:"basemapChanged",value:function(e){e.length&&this.view?this.view.map.basemap=e:this.view||(this.view=this.loadMap(this.basemap))}},{key:"addressChanged",value:function(e){e.length&&this.geocodeAddress(this.view,e,this.zoom)}},{key:"widthChanged",value:function(e){e.length&&(this.mapRef.style.width=this.width)}},{key:"heightChanged",value:function(e){e.length&&(this.mapRef.style.height=this.height)}},{key:"navigateChange",value:function(e){e?this.restoreNavigation():this.removeNavigation(this.view)}},{key:"loadWebMap",value:function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t){var r,s,o,u,c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Promise,e.next=3,Promise.all([n.e(9557),n.e(3314),n.e(4662),n.e(630),n.e(3103),n.e(7944),n.e(5577),n.e(5249),n.e(2821),n.e(642),n.e(2959),n.e(5113),n.e(6570),n.e(7859),n.e(7093),n.e(4581),n.e(8848),n.e(1517),n.e(727),n.e(8987),n.e(2474),n.e(558),n.e(4384),n.e(6817),n.e(3116),n.e(1015),n.e(7686),n.e(8765),n.e(1233),n.e(530)]).then(n.bind(n,12864)).then((function(e){return e.W}));case 3:return e.t1=e.sent,e.next=6,Promise.all([n.e(9557),n.e(3314),n.e(4662),n.e(630),n.e(3103),n.e(7944),n.e(5577),n.e(5249),n.e(2821),n.e(642),n.e(2959),n.e(5113),n.e(6570),n.e(7859),n.e(7093),n.e(4581),n.e(8848),n.e(1517),n.e(2559),n.e(727),n.e(8987),n.e(2474),n.e(558),n.e(4384),n.e(6817),n.e(3116),n.e(9871),n.e(1015),n.e(9325),n.e(7686),n.e(8765),n.e(7997),n.e(9769),n.e(7276),n.e(2317),n.e(77)]).then(n.bind(n,21932)).then((function(e){return e.M}));case 6:return e.t2=e.sent,e.t3=[e.t1,e.t2],e.next=10,e.t0.all.call(e.t0,e.t3);case 10:return r=e.sent,s=(0,i.Z)(r,2),o=s[0].default,u=s[1].default,c=new o({portalItem:{id:t}}),e.abrupt("return",new u({map:c,container:this.mapRef}));case 16:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"loadWebScene",value:function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t){var r,s,o,u,c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Promise,e.next=3,Promise.all([n.e(9557),n.e(3314),n.e(4662),n.e(630),n.e(7944),n.e(5577),n.e(5249),n.e(8848),n.e(2474),n.e(558),n.e(4384),n.e(6817),n.e(3116),n.e(1015),n.e(7686),n.e(1898),n.e(8765),n.e(1233),n.e(5747),n.e(330)]).then(n.bind(n,85718));case 3:return e.t1=e.sent,e.next=6,Promise.all([n.e(9557),n.e(3314),n.e(4662),n.e(630),n.e(3103),n.e(7944),n.e(5577),n.e(5249),n.e(2821),n.e(642),n.e(2959),n.e(5113),n.e(5833),n.e(6570),n.e(7859),n.e(1698),n.e(7093),n.e(2312),n.e(4581),n.e(8848),n.e(1517),n.e(2559),n.e(727),n.e(8987),n.e(2474),n.e(558),n.e(4384),n.e(6817),n.e(3116),n.e(9871),n.e(9325),n.e(7686),n.e(8765),n.e(7997),n.e(9769),n.e(7276),n.e(285),n.e(2159),n.e(2233),n.e(2317),n.e(381),n.e(5747),n.e(4566)]).then(n.bind(n,28390)).then((function(e){return e.bw}));case 6:return e.t2=e.sent,e.t3=[e.t1,e.t2],e.next=10,e.t0.all.call(e.t0,e.t3);case 10:return r=e.sent,s=(0,i.Z)(r,2),o=s[0].default,u=s[1].default,c=new o({portalItem:{id:t}}),e.abrupt("return",new u({map:c,container:this.mapRef}));case 16:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"loadMap",value:function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t){var r,s,o,u,c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Promise,e.next=3,Promise.all([n.e(3314),n.e(8848),n.e(2474),n.e(558),n.e(4384),n.e(6817),n.e(3116),n.e(1015),n.e(7686),n.e(8765),n.e(5624)]).then(n.bind(n,32161)).then((function(e){return e._}));case 3:return e.t1=e.sent,e.next=6,Promise.all([n.e(9557),n.e(3314),n.e(4662),n.e(630),n.e(3103),n.e(7944),n.e(5577),n.e(5249),n.e(2821),n.e(642),n.e(2959),n.e(5113),n.e(6570),n.e(7859),n.e(7093),n.e(4581),n.e(8848),n.e(1517),n.e(2559),n.e(727),n.e(8987),n.e(2474),n.e(558),n.e(4384),n.e(6817),n.e(3116),n.e(9871),n.e(1015),n.e(9325),n.e(7686),n.e(8765),n.e(7997),n.e(9769),n.e(7276),n.e(2317),n.e(77)]).then(n.bind(n,21932)).then((function(e){return e.M}));case 6:return e.t2=e.sent,e.t3=[e.t1,e.t2],e.next=10,e.t0.all.call(e.t0,e.t3);case 10:return r=e.sent,s=(0,i.Z)(r,2),o=s[0].default,u=s[1].default,c=new o({basemap:t}),e.abrupt("return",new u({map:c,container:this.mapRef}));case 16:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"loadLayerList",value:function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t){var r,s,o,u,c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Promise,e.next=3,Promise.all([n.e(3314),n.e(8848),n.e(558),n.e(9325),n.e(5465)]).then(n.bind(n,95465));case 3:return e.t1=e.sent,e.next=6,Promise.all([n.e(8848),n.e(558),n.e(9325),n.e(4587)]).then(n.bind(n,64587));case 6:return e.t2=e.sent,e.t3=[e.t1,e.t2],e.next=10,e.t0.all.call(e.t0,e.t3);case 10:r=e.sent,s=(0,i.Z)(r,2),o=s[0].default,u=s[1].default,c=new u({id:"layerlist",view:t,content:new o({container:document.createElement("div"),view:t})}),t.ui.add(c,"top-right");case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"loadLegend",value:function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t){var r,s,o,u,c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Promise,e.next=3,Promise.all([n.e(9557),n.e(3314),n.e(4662),n.e(3103),n.e(7944),n.e(5577),n.e(2821),n.e(642),n.e(2959),n.e(8848),n.e(2474),n.e(558),n.e(4384),n.e(6817),n.e(3116),n.e(9325),n.e(7997),n.e(9769),n.e(6910),n.e(6032),n.e(1805)]).then(n.bind(n,56032));case 3:return e.t1=e.sent,e.next=6,Promise.all([n.e(8848),n.e(558),n.e(9325),n.e(4587)]).then(n.bind(n,64587));case 6:return e.t2=e.sent,e.t3=[e.t1,e.t2],e.next=10,e.t0.all.call(e.t0,e.t3);case 10:r=e.sent,s=(0,i.Z)(r,2),o=s[0].default,u=s[1].default,c=new u({id:"legend",view:t,content:new o({container:document.createElement("div"),view:t})}),t.ui.add(c,"top-right");case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"loadSearch",value:function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t){var r,s,o,u;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Promise,e.next=3,Promise.all([n.e(3314),n.e(4662),n.e(7944),n.e(5577),n.e(8848),n.e(2474),n.e(558),n.e(4384),n.e(6817),n.e(3116),n.e(9325),n.e(2968),n.e(4544)]).then(n.bind(n,44544));case 3:return e.t1=e.sent,e.t2=[e.t1],e.next=7,e.t0.all.call(e.t0,e.t2);case 7:r=e.sent,s=(0,i.Z)(r,1),o=s[0].default,u=new o({id:"search",container:document.createElement("div"),view:t}),t.ui.add(u,"top-left");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"zoomTo",value:function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t){var r,s,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Promise,e.next=3,Promise.all([n.e(8848),n.e(2474)]).then(n.bind(n,82474)).then((function(e){return e.v}));case 3:return e.t1=e.sent,e.t2=[e.t1],e.next=7,e.t0.all.call(e.t0,e.t2);case 7:r=e.sent,s=(0,i.Z)(r,1),o=s[0].default,t.goTo({center:new o({longitude:parseFloat(this.center.split(",")[0]),latitude:parseFloat(this.center.split(",")[1]),spatialReference:{wkid:4326}}),zoom:this.zoom});case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"geocodeAddress",value:function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t,i,r){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Promise,e.next=3,Promise.all([n.e(8848),n.e(2474),n.e(558),n.e(4384),n.e(6817),n.e(7398)]).then(n.bind(n,67398)).then((function(e){e.addressToLocations("https://maps.raleighnc.gov/arcgis/rest/services/Locators/Locator/GeocodeServer",{address:{SingleLine:i}}).then((function(e){t.goTo({target:e[0].location,zoom:r||16})}))}));case 3:return e.t1=e.sent,e.t2=[e.t1],e.next=7,e.t0.all.call(e.t0,e.t2);case 7:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"restoreNavigation",value:function(){this.navigationHandles.forEach((function(e){e.remove()}))}},{key:"removeNavigation",value:function(e){this.navigationHandles=[e.on("key-down",(function(e){var t=e.key;-1!==["+","-","Shift","_","="].indexOf(t)&&e.stopPropagation()})),e.on("mouse-wheel",(function(e){e.stopPropagation()})),e.on("double-click",(function(e){e.stopPropagation()})),e.on("drag",(function(e){e.stopPropagation()})),e.on("drag",["Shift"],(function(e){e.stopPropagation()})),e.on("drag",["Shift","Control"],(function(e){e.stopPropagation()})),e.on("drag",["Shift"],(function(e){e.stopPropagation()})),e.on("drag",["Shift","Control"],(function(e){e.stopPropagation()}))],e.popup.autoOpenEnabled=!1}},{key:"componentDidLoad",value:function(){var e=(0,r.Z)((0,a.Z)().mark((function e(){var t=this;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.mapRef.style.width=this.width,this.mapRef.style.height=this.height,!this.sceneId){e.next=8;break}return e.next=5,this.loadWebScene(this.sceneId);case 5:this.view=e.sent,e.next=23;break;case 8:if(!this.mapId){e.next=14;break}return e.next=11,this.loadWebMap(this.mapId);case 11:this.view=e.sent,e.next=23;break;case 14:if(!this.basemap){e.next=20;break}return e.next=17,this.loadMap(this.basemap);case 17:this.view=e.sent,e.next=23;break;case 20:return e.next=22,this.loadMap("arcgis-community");case 22:this.view=e.sent;case 23:this.view.ui.components=["attribution"],this.view.when((function(){t.layerlist&&t.loadLayerList(t.view),t.legend&&t.loadLegend(t.view),t.address?t.geocodeAddress(t.view,t.address,t.zoom):t.center&&t.zoom?t.zoomTo(t.view):t.zoom&&(t.view.zoom=t.zoom),t.search&&t.loadSearch(t.view),console.log(t.navigate),t.navigate||t.removeNavigation(t.view)}));case 25:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillLoad",value:function(){c.s.apiKey="AAPKbf20066507614a3eab9736b79285cc42SI995TZ5lD3yy8ACIxDKUjSyh_85O6UQAmSzKS-UCoWwMhCtqCsPqBCANAkpdsNP",this.divId=this.getRandomString()}},{key:"componentWillUnload",value:function(){this.view&&this.view.detroy()}},{key:"render",value:function(){var e=this;return(0,u.h)(u.H,null,(0,u.h)("div",{id:this.divId,ref:function(t){return e.mapRef=t}}))}},{key:"element",get:function(){return(0,u.g)(this)}}],[{key:"watchers",get:function(){return{mapId:["mapIdChanged"],sceneId:["sceneIdChanged"],layerlist:["layerlistChanged"],legend:["legendChanged"],search:["searchChanged"],popup:["popupChanged"],zoom:["zoomChanged"],center:["centerChanged"],basemap:["basemapChanged"],address:["addressChanged"],width:["widthChanged"],height:["heightChanged"],navigate:["navigateChange"]}}}]),e}();h.style='@import url(\'https://js.arcgis.com/4.25/@arcgis/core/assets/esri/themes/light/main.css\');:host{display:block}.esri-view{min-height:250px;min-width:250px;padding:0}web-map .esri-input{font-family:"Avenir Next","Helvetica Neue",Helvetica,Arial,sans-serif !important;font-size:14px !important}'}}]);
//# sourceMappingURL=7429.3bb73cbf.chunk.js.map