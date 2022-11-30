"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[7686],{37686:function(e,r,a){a.r(r),a.d(r,{B:function(){return H},s:function(){return W},x:function(){return Z}});var t=a(74165),s=a(1413),i=a(37762),l=a(15671),n=a(43144),c=a(97326),o=a(11752),p=a(61120),y=a(60136),u=a(29388),d=a(15861),g=a(48848),m=a(93314),h=a(81556),v=a(8141),b=a(40114),f=a(93661),L=a(93116),S=a(16641),T=a(40558),M=a(82474),w=a(21015),I=a(75255),G=a(52113),k=a(62642);function _(e){return A.apply(this,arguments)}function A(){return A=(0,d.Z)((0,t.Z)().mark((function e(r){var a,s;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return");case 2:return a=r.includes("-vector")?r.slice(0,r.indexOf("-vector")):r,e.next=5,(0,G.u)("esri/t9n/basemaps");case 5:return s=e.sent,e.abrupt("return",s[r]||s[a]);case 7:case"end":return e.stop()}}),e)}))),A.apply(this,arguments)}var U,W={streets:{id:"streets",classic:!0,deprecated:!0,get thumbnailUrl(){return(0,I.a)("esri/images/basemap/streets.jpg")},baseMapLayers:[{id:"streets-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Street Map",showLegend:!1,visibility:!0,opacity:1}]},satellite:{id:"satellite",classic:!0,get thumbnailUrl(){return(0,I.a)("esri/images/basemap/satellite.jpg")},baseMapLayers:[{id:"satellite-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Imagery",showLegend:!1,visibility:!0,opacity:1}]},hybrid:{id:"hybrid",classic:!0,get thumbnailUrl(){return(0,I.a)("esri/images/basemap/hybrid.jpg")},baseMapLayers:[{id:"hybrid-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Imagery",showLegend:!1,visibility:!0,opacity:1},{id:"hybrid-reference-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/30d6b8271e1849cd9c3042060001f425/resources/styles/root.json",layerType:"VectorTileLayer",title:"Hybrid Reference Layer",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},terrain:{id:"terrain",classic:!0,get thumbnailUrl(){return(0,I.a)("esri/images/basemap/terrain.jpg")},baseMapLayers:[{id:"terrain-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Terrain Base",showLegend:!1,visibility:!0,opacity:1},{id:"terrain-reference-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Reference Overlay",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},topo:{id:"topo",classic:!0,deprecated:!0,get thumbnailUrl(){return(0,I.a)("esri/images/basemap/topo.jpg")},baseMapLayers:[{id:"topo-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Topo Map",showLegend:!1,visibility:!0,opacity:1}]},gray:{id:"gray",classic:!0,deprecated:!0,get thumbnailUrl(){return(0,I.a)("esri/images/basemap/gray.jpg")},baseMapLayers:[{id:"gray-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Light Gray Base",showLegend:!1,visibility:!0,opacity:1},{id:"gray-reference-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Light Gray Reference",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},"dark-gray":{id:"dark-gray",classic:!0,deprecated:!0,get thumbnailUrl(){return(0,I.a)("esri/images/basemap/dark-gray.jpg")},baseMapLayers:[{id:"dark-gray-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Dark Gray Base",showLegend:!1,visibility:!0,opacity:1},{id:"dark-gray-reference-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Dark Gray Reference",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},oceans:{id:"oceans",classic:!0,get thumbnailUrl(){return(0,I.a)("esri/images/basemap/oceans.jpg")},baseMapLayers:[{id:"oceans-base-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Ocean Base",showLegend:!1,visibility:!0,opacity:1},{id:"oceans-reference-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Reference/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Ocean Reference",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},"national-geographic":{id:"national-geographic",classic:!0,deprecated:!0,get thumbnailUrl(){return(0,I.a)("esri/images/basemap/national-geographic.jpg")},baseMapLayers:[{id:"national-geographic-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer",title:"NatGeo World Map",showLegend:!1,layerType:"ArcGISTiledMapServiceLayer",visibility:!0,opacity:1}]},osm:{id:"osm",classic:!0,get thumbnailUrl(){return(0,I.a)("esri/images/basemap/osm.jpg")},baseMapLayers:[{id:"osm-base-layer",layerType:"OpenStreetMap",title:"Open Street Map",showLegend:!1,visibility:!0,opacity:1}]},"dark-gray-vector":{id:"dark-gray-vector",classic:!0,get thumbnailUrl(){return(0,I.a)("esri/images/basemap/dark-gray-vector.jpg")},baseMapLayers:[{id:"dark-gray-base-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/5e9b3685f4c24d8781073dd928ebda50/resources/styles/root.json",layerType:"VectorTileLayer",title:"Dark Gray Base",visibility:!0,opacity:1},{id:"dark-gray-reference-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/747cb7a5329c478cbe6981076cc879c5/resources/styles/root.json",layerType:"VectorTileLayer",title:"Dark Gray Reference",isReference:!0,visibility:!0,opacity:1}]},"gray-vector":{id:"gray-vector",classic:!0,get thumbnailUrl(){return(0,I.a)("esri/images/basemap/gray-vector.jpg")},baseMapLayers:[{id:"gray-base-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/291da5eab3a0412593b66d384379f89f/resources/styles/root.json",layerType:"VectorTileLayer",title:"Light Gray Base",visibility:!0,opacity:1},{id:"gray-reference-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/1768e8369a214dfab4e2167d5c5f2454/resources/styles/root.json",layerType:"VectorTileLayer",title:"Light Gray Reference",isReference:!0,visibility:!0,opacity:1}]},"streets-vector":{id:"streets-vector",classic:!0,get thumbnailUrl(){return(0,I.a)("esri/images/basemap/streets-vector.jpg")},baseMapLayers:[{id:"streets-vector-base-layer",styleUrl:"//cdn.arcgis.com/sharing/rest/content/items/de26a3cf4cc9451298ea173c4b324736/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Streets",visibility:!0,opacity:1}]},"topo-vector":{id:"topo-vector",classic:!0,get thumbnailUrl(){return(0,I.a)("esri/images/basemap/topo-vector.jpg")},baseMapLayers:[{id:"world-hillshade-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Hillshade",showLegend:!1,visibility:!0,opacity:1},{id:"topo-vector-base-layer",styleUrl:"//cdn.arcgis.com/sharing/rest/content/items/7dc6cea0b1764a1f9af2e679f642f0f5/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Topo",visibility:!0,opacity:1}]},"streets-night-vector":{id:"streets-night-vector",classic:!0,get thumbnailUrl(){return(0,I.a)("esri/images/basemap/streets-night.jpg")},baseMapLayers:[{id:"streets-night-vector-base-layer",styleUrl:"//cdn.arcgis.com/sharing/rest/content/items/86f556a2d1fd468181855a35e344567f/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Streets Night",visibility:!0,opacity:1}]},"streets-relief-vector":{id:"streets-relief-vector",classic:!0,get thumbnailUrl(){return(0,I.a)("esri/images/basemap/streets-relief.jpg")},baseMapLayers:[{id:"world-hillshade-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Hillshade",showLegend:!1,visibility:!0,opacity:1},{id:"streets-relief-vector-base-layer",styleUrl:"//www.arcgis.com/sharing/rest/content/items/b266e6d17fc345b498345613930fbd76/resources/styles/root.json",title:"World Streets Relief",layerType:"VectorTileLayer",visibility:!0,opacity:1}]},"streets-navigation-vector":{id:"streets-navigation-vector",classic:!0,get thumbnailUrl(){return(0,I.a)("esri/images/basemap/streets-navigation.jpg")},baseMapLayers:[{id:"streets-navigation-vector-base-layer",styleUrl:"//cdn.arcgis.com/sharing/rest/content/items/63c47b7177f946b49902c24129b87252/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Streets Navigation",visibility:!0,opacity:1}]},"arcgis-imagery":{get thumbnailUrl(){return(0,I.a)("esri/images/basemap/hybrid.jpg")},title:"Imagery Hybrid",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Imagery",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/World_Imagery/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Imagery:Labels",title:"Hybrid Reference Layer",isReference:!0}]},"arcgis-imagery-standard":{get thumbnailUrl(){return(0,I.a)("esri/images/basemap/satellite.jpg")},title:"Imagery",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Imagery",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/World_Imagery/MapServer"}]},"arcgis-imagery-labels":{title:"Hybrid [Reference]",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Imagery:Labels",title:"Hybrid Reference Layer",isReference:!0}]},"arcgis-light-gray":{get thumbnailUrl(){return(0,I.a)("esri/images/basemap/gray-vector.jpg")},title:"Light Gray Canvas",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:LightGray:Base",title:"Light Gray Canvas Base"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:LightGray:Labels",title:"Light Gray Canvas Labels",isReference:!0}]},"arcgis-dark-gray":{get thumbnailUrl(){return(0,I.a)("esri/images/basemap/dark-gray.jpg")},title:"Dark Gray Canvas",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:DarkGray:Base",title:"Dark Gray Canvas Base"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:DarkGray:Labels",title:"Dark Gray Canvas Labels",isReference:!0}]},"arcgis-navigation":{get thumbnailUrl(){return(0,I.a)("esri/images/basemap/streets-navigation.jpg")},title:"Navigation",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Navigation",title:"World Navigation Map"}]},"arcgis-navigation-night":{title:"Navigation (Dark Mode)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:NavigationNight",title:"World Navigation Map (Dark Mode)"}]},"arcgis-streets":{get thumbnailUrl(){return(0,I.a)("esri/images/basemap/streets-vector.jpg")},title:"Streets",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Streets",title:"World Street Map"}]},"arcgis-streets-night":{get thumbnailUrl(){return(0,I.a)("esri/images/basemap/streets-night.jpg")},title:"Streets (Night)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:StreetsNight",title:"World Street Map (Night)"}]},"arcgis-streets-relief":{get thumbnailUrl(){return(0,I.a)("esri/images/basemap/streets-relief.jpg")},title:"Streets (with Relief)",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:StreetsRelief:Base",title:"World Street Map (with Relief)"}]},"arcgis-topographic":{get thumbnailUrl(){return(0,I.a)("esri/images/basemap/topo.jpg")},title:"Topographic",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Topographic:Base",title:"World Topographic Map"}]},"arcgis-oceans":{get thumbnailUrl(){return(0,I.a)("esri/images/basemap/oceans.jpg")},title:"Oceans",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Ocean Base",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Oceans:Labels",title:"World Ocean Reference",isReference:!0}]},"osm-standard":{title:"OpenStreetMap",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:Standard",title:"OpenStreetMap"}]},"osm-standard-relief":{title:"OpenStreetMap (with relief)",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:StandardRelief:Base",layerType:"VectorTileLayer",title:"OpenStreetMap Relief Base"}]},"osm-streets":{title:"OpenStreetMap (Streets)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:Streets",title:"OpenStreetMap (Streets)"}]},"osm-streets-relief":{title:"OpenStreetMap (Streets with relief)",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:StreetsRelief:Base",layerType:"VectorTileLayer",title:"OpenStreetMap Relief Base"}]},"osm-light-gray":{title:"OpenStreetMap (Light Gray Canvas)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:LightGray:Base",title:"OSM (Light Gray Base)"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:LightGray:Labels",title:"OSM (Light Gray Reference)",isReference:!0}]},"osm-dark-gray":{title:"OpenStreetMap (Dark Gray Canvas)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:DarkGray:Base",title:"OSM (Dark Gray Base)"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:DarkGray:Labels",title:"OSM (Dark Gray Reference)",isReference:!0}]},"arcgis-terrain":{title:"Terrain with Labels",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Terrain:Base",title:"World Terrain Base"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Terrain:Detail",title:"World Terrain Reference",isReference:!0}]},"arcgis-community":{title:"Community",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Community",title:"Community"}]},"arcgis-charted-territory":{title:"Charted Territory",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:ChartedTerritory:Base",title:"Charted Territory"}]},"arcgis-colored-pencil":{title:"Colored Pencil",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:ColoredPencil",title:"Colored Pencil"}]},"arcgis-nova":{title:"Nova",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Nova",title:"Nova"}]},"arcgis-modern-antique":{title:"Modern Antique",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:ModernAntique:Base",title:"Modern Antique"}]},"arcgis-midcentury":{title:"Mid-Century",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Midcentury",title:"Mid-Century"}]},"arcgis-newspaper":{title:"Newspaper",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Newspaper",title:"Newspaper"}]},"arcgis-hillshade-light":{title:"Hillshade",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"}]},"arcgis-hillshade-dark":{title:"Hillshade (Dark)",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade (Dark)",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade_Dark/MapServer"}]},"arcgis-human-geography":{title:"Human Geography",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:HumanGeography:Base",title:"Human Geography Base"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:HumanGeography:Detail",title:"Human Geography Detail",isReference:!0},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:HumanGeography:Label",title:"Human Geography Label",isReference:!0}]},"arcgis-human-geography-dark":{title:"Human Geography (Dark)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:HumanGeographyDark:Base",title:"Human Geography Dark Base"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:HumanGeographyDark:Detail",title:"Human Geography Dark Detail",isReference:!0},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:HumanGeographyDark:Label",title:"Human Geography Dark Label",isReference:!0}]}},R=0,j="esri.Basemap",O=U=function(e){(0,y.Z)(b,e);var r=(0,u.Z)(b);function b(e){var a;(0,l.Z)(this,b),(a=r.call(this,e)).id=null,a.portalItem=null,a.spatialReference=null,a.thumbnailUrl=null,a.title="Basemap",a.id=Date.now().toString(16)+"-basemap-"+R++,a.baseLayers=new m.j,a.referenceLayers=new m.j;var t=function(e){e.parent&&e.parent!==(0,c.Z)(a)&&"remove"in e.parent&&e.parent.remove(e),e.parent=(0,c.Z)(a),"elevation"===e.type&&g.a.getLogger(a.declaredClass).error("Layer '".concat(e.title,", id:").concat(e.id,"' of type '").concat(e.type,"' is not supported as a basemap layer and will therefore be ignored."))},s=function(e){e.parent=null};return a.baseLayers.on("after-add",(function(e){return t(e.item)})),a.referenceLayers.on("after-add",(function(e){return t(e.item)})),a.baseLayers.on("after-remove",(function(e){return s(e.item)})),a.referenceLayers.on("after-remove",(function(e){return s(e.item)})),a}return(0,n.Z)(b,[{key:"initialize",value:function(){var e=this;this.when().catch((function(r){g.a.getLogger(e.declaredClass).error("#load()","Failed to load basemap (title: '".concat(e.title,"', id: '").concat(e.id,"')"),r)})),this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)}},{key:"destroy",value:function(){var e,r,a=this.baseLayers.removeAll(),t=(0,i.Z)(a);try{for(t.s();!(r=t.n()).done;){r.value.destroy()}}catch(c){t.e(c)}finally{t.f()}var s,l=this.referenceLayers.removeAll(),n=(0,i.Z)(l);try{for(n.s();!(s=n.n()).done;){s.value.destroy()}}catch(c){n.e(c)}finally{n.f()}this.baseLayers.destroy(),this.referenceLayers.destroy(),null!==(e=this.portalItem)&&void 0!==e&&e.destroy(),this.portalItem=null}},{key:"normalizeCtorArgs",value:function(e){return e&&"resourceInfo"in e&&(this._set("resourceInfo",e.resourceInfo),delete(e=(0,s.Z)({},e)).resourceInfo),e}},{key:"baseLayers",set:function(e){this._set("baseLayers",(0,h.n)(e,this._get("baseLayers")))}},{key:"_writeBaseLayers",value:function(e,r,a){var t=[];e?(a=(0,s.Z)((0,s.Z)({},a),{},{layerContainerType:"basemap"}),this.baseLayers.forEach((function(e){var r=(0,k.y)(e,a.webmap?a.webmap.getLayerJSONFromResourceInfo(e):null,a);(0,f.r)(r)&&t.push(r)})),this.referenceLayers.forEach((function(e){var r=(0,k.y)(e,a.webmap?a.webmap.getLayerJSONFromResourceInfo(e):null,a);(0,f.r)(r)&&(r.isReference=!0,t.push(r))})),r.baseMapLayers=t):r.baseMapLayers=t}},{key:"referenceLayers",set:function(e){this._set("referenceLayers",(0,h.n)(e,this._get("referenceLayers")))}},{key:"writeTitle",value:function(e,r){r.title=e||"Basemap"}},{key:"load",value:function(e){return this.addResolvingPromise(this._loadFromSource(e)),Promise.resolve(this)}},{key:"loadAll",value:function(){var e=this;return(0,S.n)(this,(function(r){r(e.baseLayers,e.referenceLayers)}))}},{key:"clone",value:function(){var e={id:this.id,title:this.title,portalItem:this.portalItem,baseLayers:this.baseLayers.slice(),referenceLayers:this.referenceLayers.slice()};return this.loaded&&(e.loadStatus="loaded"),new U({resourceInfo:this.resourceInfo}).set(e)}},{key:"read",value:function(e,r){this.resourceInfo||this._set("resourceInfo",{data:e,context:r}),(0,o.Z)((0,p.Z)(b.prototype),"read",this).call(this,e,r)}},{key:"write",value:function(e,r){return e=e||{},r&&r.origin||(r=(0,s.Z)({origin:"web-map"},r)),(0,o.Z)((0,p.Z)(b.prototype),"write",this).call(this,e,r),!this.loaded&&this.resourceInfo&&this.resourceInfo.data.baseMapLayers&&(e.baseMapLayers=this.resourceInfo.data.baseMapLayers.map((function(e){var r=(0,f.y)(e);return r.url&&(0,T.f)(r.url)&&(r.url="https:".concat(r.url)),r.templateUrl&&(0,T.f)(r.templateUrl)&&(r.templateUrl="https:".concat(r.templateUrl)),r}))),e}},{key:"_loadFromSource",value:function(){var e=(0,d.Z)((0,t.Z)().mark((function e(r){var a,s,i,l,n,c=this;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.resourceInfo,s=this.portalItem,(0,g.f)(r),i=[],a?(l=a.context?a.context.url:null,i.push(this._loadLayersFromJSON(a.data,l,r)),a.data.id&&!a.data.title&&(n=a.data.id,i.push(_(n).then((function(e){e&&c.read({title:e},a.context)}))))):s&&i.push(this._loadFromItem(s,r)),e.next=6,Promise.all(i);case 6:case"end":return e.stop()}}),e,this)})));return function(r){return e.apply(this,arguments)}}()},{key:"_loadLayersFromJSON",value:function(){var e=(0,d.Z)((0,t.Z)().mark((function e(r,s,i){var l,n,c,o,p,y,u,d,m;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=this.resourceInfo&&this.resourceInfo.context,n=this.portalItem&&this.portalItem.portal||l&&l.portal||null,c=l&&"web-scene"===l.origin?"web-scene":"web-map",e.next=5,Promise.all([a.e(9557),a.e(5249),a.e(4384),a.e(5224),a.e(6471),a.e(1318)]).then(a.bind(a,11318));case 5:return o=e.sent,p=o.populateOperationalLayers,y=[],(0,g.f)(i),r.baseMapLayers&&Array.isArray(r.baseMapLayers)&&(u={context:{origin:c,url:s,portal:n,layerContainerType:"basemap"},defaultLayerType:"DefaultTileLayer"},d=p(this.baseLayers,r.baseMapLayers.filter((function(e){return!e.isReference})),u),y.push(d),m=p(this.referenceLayers,r.baseMapLayers.filter((function(e){return e.isReference})),u),y.push(m)),e.next=11,(0,g.E)(y);case 11:case"end":return e.stop()}}),e,this)})));return function(r,a,t){return e.apply(this,arguments)}}()},{key:"_loadFromItem",value:function(){var e=(0,d.Z)((0,t.Z)().mark((function e(r,a){var s,i,l,n,c;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.load(a);case 2:return l=e.sent,e.next=5,l.fetchData("json",a);case 5:return n=e.sent,c=(0,T.j)(null!==(s=r.itemUrl)&&void 0!==s?s:""),e.abrupt("return",(this._set("resourceInfo",{data:null!==(i=n.baseMap)&&void 0!==i?i:{},context:{origin:"web-map",portal:r.portal||L.j.getDefault(),url:c}}),this.read(this.resourceInfo.data,this.resourceInfo.context),this.read({spatialReference:n.spatialReference},this.resourceInfo.context),this.read({title:r.title,thumbnailUrl:r.thumbnailUrl},{origin:"portal-item",portal:r.portal||L.j.getDefault(),url:c}),this._loadLayersFromJSON(this.resourceInfo.data,c,a)));case 8:case"end":return e.stop()}}),e,this)})));return function(r,a){return e.apply(this,arguments)}}()}],[{key:"fromId",value:function(e){var r=W[e];if(r){if(r.deprecated){var a=null;"dark-gray"===e?a="dark-gray-vector":"gray"===e?a="gray-vector":"streets"===e?a="streets-vector":"topo"===e&&(a="topo-vector"),(0,v.r)(g.a.getLogger(j),"The ".concat(e," basemap has entered mature support and is no longer being updated."),{replacement:a,see:"https://arcg.is/1iq8aD",warnOnce:!0})}return U.fromJSON(r)}return null}}]),b}((0,b.u)(L.m));(0,g.e)([(0,g.y)({json:{write:{ignoreOrigin:!0,target:"baseMapLayers",writer:function(e,r,a,t){this._writeBaseLayers(e,r,t)}},origins:{"web-scene":{write:{ignoreOrigin:!0,target:{baseMapLayers:{type:m.j}},writer:function(e,r,a,t){this._writeBaseLayers(e,r,t)}}}}}})],O.prototype,"baseLayers",null),(0,g.e)([(0,g.y)({type:String,json:{origins:{"web-scene":{write:!0}}}})],O.prototype,"id",void 0),(0,g.e)([(0,g.y)({type:w.default})],O.prototype,"portalItem",void 0),(0,g.e)([(0,g.y)()],O.prototype,"referenceLayers",null),(0,g.e)([(0,g.y)({readOnly:!0})],O.prototype,"resourceInfo",void 0),(0,g.e)([(0,g.y)({type:M.k})],O.prototype,"spatialReference",void 0),(0,g.e)([(0,g.y)()],O.prototype,"thumbnailUrl",void 0),(0,g.e)([(0,g.y)({type:String,json:{origins:{"web-scene":{write:{isRequired:!0}}}}})],O.prototype,"title",void 0),(0,g.e)([(0,M.r)("title")],O.prototype,"writeTitle",null);var Z=O=U=(0,g.e)([(0,g.n)(j)],O),H=Object.freeze({__proto__:null,default:Z})},59389:function(e,r,a){a.d(r,{b:function(){return h},c:function(){return y},d:function(){return b},h:function(){return u},j:function(){return S},v:function(){return L}});var t=a(74165),s=a(15671),i=a(43144),l=a(60136),n=a(29388),c=a(15861),o=a(48848),p=a(93661);function y(e,r,a){return(0,o.E)(e.map((function(e,t){return r.apply(a,[e,t])})))}function u(e,r,a){return d.apply(this,arguments)}function d(){return(d=(0,c.Z)((0,t.Z)().mark((function e(r,a,s){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.E)(r.map((function(e,r){return a.apply(s,[e,r])})));case 2:return e.abrupt("return",e.sent.map((function(e){return e.value})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return{ok:!0,value:e}}function m(e){return{ok:!1,error:e}}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,c.Z)((0,t.Z)().mark((function e(r){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,p.t)(r)){e.next=2;break}return e.abrupt("return",{ok:!1,error:new Error("no promise provided")});case 2:return e.prev=2,e.t0=g,e.next=6,r;case 6:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 10:return e.prev=10,e.t2=e.catch(2),e.abrupt("return",m(e.t2));case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}function b(e){return f.apply(this,arguments)}function f(){return(f=(0,c.Z)((0,t.Z)().mark((function e(r){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=g,e.next=4,r;case 4:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 8:return e.prev=8,e.t2=e.catch(0),e.abrupt("return",((0,o.w)(e.t2),m(e.t2)));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function L(e){if(!0===e.ok)return e.value;throw e.error}function S(e,r){return new T(e,r)}var T=function(e){(0,l.Z)(a,e);var r=(0,n.Z)(a);function a(e,t){var i;(0,s.Z)(this,a),(i=r.call(this,{}))._result=null,i._abortHandle=null,i.abort=function(){i._abortController=(0,p.l)(i._abortController)},i.remove=i.abort,i._abortController=new AbortController;var l=i._abortController.signal;return i.promise=e(l),i.promise.then((function(e){i._result=g(e),i._cleanup()}),(function(e){i._result=m(e),i._cleanup()})),i._abortHandle=(0,o.v)(t,i.abort),i}return(0,i.Z)(a,[{key:"value",get:function(){return e=this._result,(0,p.r)(e)&&!0===e.ok?e.value:null;var e}},{key:"error",get:function(){return e=this._result,(0,p.r)(e)&&!1===e.ok?e.error:null;var e}},{key:"finished",get:function(){return(0,p.r)(this._result)}},{key:"normalizeCtorArgs",value:function(){return{}}},{key:"destroy",value:function(){this.abort()}},{key:"_cleanup",value:function(){this._abortHandle=(0,p.f)(this._abortHandle),this._abortController=null}}]),a}(o.m);(0,o.e)([(0,o.y)()],T.prototype,"value",null),(0,o.e)([(0,o.y)()],T.prototype,"error",null),(0,o.e)([(0,o.y)()],T.prototype,"finished",null),(0,o.e)([(0,o.y)()],T.prototype,"promise",void 0),(0,o.e)([(0,o.y)()],T.prototype,"_result",void 0),T=(0,o.e)([(0,o.n)("esri.core.asyncUtils.ReactiveTask")],T)},13405:function(e,r,a){function t(e){var r=null===e||void 0===e?void 0:e.type;return"base-tile"===r||"tile"===r||"elevation"===r||"imagery-tile"===r||"base-elevation"===r||"open-street-map"===r||"wcs"===r||"web-tile"===r||"wmts"===r||"vector-tile"===r}function s(e){return"voxel"===(null===e||void 0===e?void 0:e.type)}function i(e){return"imagery-tile"===(null===e||void 0===e?void 0:e.type)}function l(e){var r;return"esri.Basemap"===(null===(r=e.parent)||void 0===r?void 0:r.declaredClass)&&e.parent.baseLayers.includes(e)}function n(e){var r;return"feature"===(null===e||void 0===e?void 0:e.type)&&!e.url&&"memory"===(null===(r=e.source)||void 0===r?void 0:r.type)}function c(e){var r;return"feature"===(null===e||void 0===e?void 0:e.type)&&"feature-layer"===(null===(r=e.source)||void 0===r?void 0:r.type)}function o(e){return!0===e.labelsVisible&&null!=e.labelingInfo&&e.labelingInfo.length>0}function p(e){if(e.activeLayer){var r=e.activeLayer.tileMatrixSet;if(r)return r;var a=e.activeLayer.tileMatrixSets;if(a)return a}return null}a.d(r,{c:function(){return p},i:function(){return l},l:function(){return n},n:function(){return s},o:function(){return c},r:function(){return i},s:function(){return o},t:function(){return t}})},16641:function(e,r,a){a.d(r,{i:function(){return u},n:function(){return p}});var t=a(93433),s=a(74165),i=a(15861),l=a(59389),n=a(93314),c=a(93116),o=a(93661);function p(e,r){return y.apply(this,arguments)}function y(){return(y=(0,i.Z)((0,s.Z)().mark((function e(r,a){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.load();case 2:return e.abrupt("return",u(r,a));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e,r){return d.apply(this,arguments)}function d(){return d=(0,i.Z)((0,s.Z)().mark((function e(r,a){var p,y,u;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p=[],y=function e(){for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];for(var i=0,l=a;i<l.length;i++){var y=l[i];(0,o.t)(y)||(Array.isArray(y)?e.apply(void 0,(0,t.Z)(y)):n.j.isCollection(y)?y.forEach((function(r){return e(r)})):c.m.isLoadable(y)&&p.push(y))}},a(y),u=null,e.next=5,(0,l.h)(p,function(){var e=(0,i.Z)((0,s.Z)().mark((function e(r){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t1=!1,e.next=3,(0,l.b)(g(r)?r.loadAll():r.load());case 3:if(e.t2=e.sent.ok,e.t0=e.t1!==e.t2,e.t0){e.next=7;break}e.t0=u;case 7:if(e.t3=e.t0,e.t3){e.next=10;break}u=r;case 10:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}());case 5:if(!u){e.next=7;break}throw u.loadError;case 7:return e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function g(e){return"loadAll"in e&&"function"==typeof e.loadAll}},62642:function(e,r,a){a.d(r,{y:function(){return y}});var t=a(48848),s=a(93661),i=a(13405),l=new Set(["bing-maps","imagery","imagery-tile","map-image","open-street-map","tile","unknown","unsupported","vector-tile","web-tile","wms","wmts"]),n=new Set(["csv","feature","geo-rss","geojson","group","imagery","imagery-tile","kml","map-image","map-notes","ogc-feature","route","subtype-group","tile","unknown","unsupported","vector-tile","web-tile","wfs","wms","wmts"]);function c(e,r){if(r.restrictedWebMapWriting){var a=function(e){return"basemap"===e.layerContainerType?l:"operational-layers"===e.layerContainerType?n:null}(r);return!(0,s.r)(a)||a.has(e.type)&&!(0,i.l)(e)}return!0}function o(e,r){"maxScale"in e&&(r.maxScale=(0,t.R)(e.maxScale)),"minScale"in e&&(r.minScale=(0,t.R)(e.minScale))}function p(e,r){if(function(e,r){if((0,i.l)(e)){var a=(0,s.a)("featureCollection.layers",r),t=a&&a[0]&&a[0].layerDefinition;t&&o(e,t)}else"stream"===e.type?o(e,r.layerDefinition=r.layerDefinition||{}):"group"!==e.type&&o(e,r)}(e,r),"blendMode"in e&&(r.blendMode=e.blendMode,"normal"===r.blendMode&&delete r.blendMode),r.opacity=(0,t.R)(e.opacity),r.title=e.title||"Layer",r.visibility=e.visible,"legendEnabled"in e&&"wmts"!==e.type)if((0,i.l)(e)){var a=r.featureCollection;a&&(a.showLegend=e.legendEnabled)}else r.showLegend=e.legendEnabled}function y(e,r,a){if(!("write"in e)||!e.write)return a&&a.messages&&a.messages.push(new t.s("layer:unsupported","Layers (".concat(e.title,", ").concat(e.id,") of type '").concat(e.declaredClass,"' cannot be persisted"),{layer:e})),null;if(c(e,a)){var i={};return e.write(i,a)?i:null}return(0,s.r)(r)&&p(e,r=(0,s.y)(r)),r}}}]);
//# sourceMappingURL=7686.143e6d73.chunk.js.map