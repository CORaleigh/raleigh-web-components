"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[3936],{3936:function(e,n,i){i.r(n),i.d(n,{validate:function(){return a}});var t=i(58095),o=(i(47614),{title:"Webscene",type:"object",description:"The web scene data lists the basemap, operational layers, and presentation slides to be used in the web scene. It also contains information about pop-up windows and layer styling overrides to be used in the web scene. A version property allows you to supply the version of the web scene JSON format being used.",properties:{applicationProperties:{$ref:"#/definitions/applicationProperties_schema.json"},authoringApp:{type:"string",description:"String value indicating the application which authored the webmap"},authoringAppVersion:{type:"string",description:"String value indicating the authoring App's version number."},baseMap:{description:"Basemaps give the web scene a geographic context.",$ref:"#/definitions/baseMap_schema.json"},clippingArea:{$ref:"#/definitions/clippingArea_schema.json"},ground:{$ref:"#/definitions/ground_schema.json"},heightModelInfo:{$ref:"#/definitions/heightModelInfo_schema.json"},initialState:{$ref:"#/definitions/initialState_schema.json"},mapFloorInfo:{$ref:"#/definitions/mapFloorInfo_schema.json"},mapRangeInfo:{description:"Map Range Information",$ref:"#/definitions/mapRangeInfo_schema.json"},operationalLayers:{type:"array",description:"Operational layers contain business data which are used to make thematic scenes.",items:{$ref:"#/definitions/operationalLayers_schema.json"},uniqueItems:!0},presentation:{$ref:"#/definitions/presentation_schema.json"},spatialReference:{description:"An object used to specify the spatial reference of the given geometry.",$ref:"#/definitions/spatialReference_schema.json"},tables:{type:"array",description:"An array of table objects.",items:{$ref:"#/definitions/table_schema.json"}},transportationNetworks:{type:"array",description:"Used to specify the transportation networks of the scene.",items:{$ref:"#/definitions/transportationNetwork_schema.json"}},version:{$ref:"#/definitions/version_schema.json"},viewingMode:{type:"string",enum:["global","local"]},widgets:{description:"the widgets object contains widgets that should be exposed to the user.",$ref:"#/definitions/widgets_schema.json"}},required:["ground","operationalLayers","spatialReference","version","viewingMode"],additionalProperties:!1,$schema:"http://json-schema.org/draft-07/schema",definitions:t.e}),s=new t.s({allErrors:!0,extendRefs:!0});function a(e,n){return function(e){var n=r(e);if(!s.getSchema(n)){var i=function(e){var n=o.definitions[r(e)];if(!n)throw new Error("invalid schema name to validate against '".concat(e,"'"));var i={};for(var t in n)i[t]=n[t];return i.definitions=o.definitions,i}(e);s.addSchema(i,n)}}(n),s.validate(r(n),e)?[]:(0,t.t)(s.errors)}function r(e){return e?"".concat(e,"_schema.json"):"webScene_schema.json"}s.addSchema(o,r())}}]);
//# sourceMappingURL=3936.daef7322.chunk.js.map