"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[3871],{3871:function(e,n,t){t.r(n),t.d(n,{hydratedAdapter:function(){return o}});var a=t(96263),r=t(31278),i=t(77322),o=(t(50165),t(32335),{convertToGEGeometry:function(e,n){if(null==n)return null;var t="cache"in n?n.cache._geVersion:void 0;return null==t&&(t=e.convertJSONToGeometry(n),"cache"in n&&(n.cache._geVersion=t)),t},exportPoint:function(e,n,t){var a=e.hasZ(n),r=e.hasM(n),o=new i.j({x:e.getPointX(n),y:e.getPointY(n),spatialReference:t});return a&&(o.z=e.getPointZ(n)),r&&(o.m=e.getPointM(n)),o.cache._geVersion=n,o},exportPolygon:function(e,n,t){var a=new r.v({rings:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return a.cache._geVersion=n,a},exportPolyline:function(e,n,t){var a=new r.m({paths:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return a.cache._geVersion=n,a},exportMultipoint:function(e,n,t){var a=new r.a({hasZ:e.hasZ(n),hasM:e.hasM(n),points:e.exportPoints(n),spatialReference:t});return a.cache._geVersion=n,a},exportExtent:function(e,n,t){var r=e.hasZ(n),i=e.hasM(n),o=new a.M({xmin:e.getXMin(n),ymin:e.getYMin(n),xmax:e.getXMax(n),ymax:e.getYMax(n),spatialReference:t});if(r){var c=e.getZExtent(n);o.zmin=c.vmin,o.zmax=c.vmax}if(i){var s=e.getMExtent(n);o.mmin=s.vmin,o.mmax=s.vmax}return o.cache._geVersion=n,o}})}}]);
//# sourceMappingURL=3871.d05c2dfe.chunk.js.map