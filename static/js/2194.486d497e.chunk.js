"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[2194],{2194:function(e,t,r){r.r(t);var i=r(1413),n=r(15671),a=r(43144),s=r(11752),l=r(61120),u=r(60136),o=r(29388),y=r(23132),c=r(75610),h=r(36551),p=r(25838),f=r(30577);r(21583),r(70441),r(83024),r(66307),r(61340),r(2760),r(91204),r(80262),r(30709),r(36460),r(57714),r(36638),r(34860),r(50448),r(30604),r(43124),r(69797),r(51451),r(80175),r(50526),r(41742),r(43920),r(1773),r(77196),r(67154),r(24980),r(3114),r(22144),r(78674),r(88370),r(72820),r(78311),r(96349),r(9055),r(79611),r(2157),r(96636),r(79054),r(29709),r(47642),r(83822),r(18411),r(44455),r(43782),r(33976),r(407),r(28210),r(17436),r(25316),r(77389),r(53373),r(94872),r(3969),r(54539),r(19967),r(50338),r(38058),r(15612),r(45578),r(20842),r(49607),r(40273),r(77470),r(84538),r(49580),r(54841),r(33703),r(92870),r(97033),r(72692),r(48561),r(55269),r(32568),r(69202),r(27597),r(1241),r(67417),r(15181),r(33642),r(28999),r(69953),r(10590),r(19948),r(30664),r(38304),r(47626),r(79042),r(61495),r(16485),r(92029),r(74575),r(9575),r(53249),r(83996),r(72763),r(6794),r(28681),r(38929),r(97866),r(68890),r(31513),r(28623),r(10312),r(95254),r(61099),r(12158),r(93874),r(62446),r(27264),r(50905),r(78945),r(55827),r(70516),r(25279),r(22268),r(40452),r(60424),r(22225),r(38425),r(42471),r(78470),r(1665),r(38843),r(24892),r(48889),r(30150),r(53647),r(81663),r(14181),r(86270),r(47672),r(63022),r(10815),r(96401),r(87833),r(21523),r(84192),r(71710),r(45332),r(42446),r(62820),r(28329),r(6819),r(97566),r(85523),r(85331),r(77372),r(101),r(25428),r(28080),r(20592),r(44365),r(77006),r(93092),r(77787),r(60912),r(40100),r(49015),r(38415),r(59819),r(18392),r(77724),r(42152),r(5900),r(19231);var d=function(e){(0,u.Z)(r,e);var t=(0,o.Z)(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,a.Z)(r,[{key:"initialize",value:function(){var e=this;this.handles.add([(0,h.l)((function(){var t;return null===(t=e.view)||void 0===t?void 0:t.viewpoint}),(function(){return e._update()}),h.h)])}},{key:"_injectOverrides",value:function(e){var t=(0,s.Z)((0,l.Z)(r.prototype),"_injectOverrides",this).call(this,e),i=this.view.scale,n=this.layer.sublayers.filter((function(e){return function(e,t){return!e.visible||0!==e.minScale&&t>e.minScale||0!==e.maxScale&&t<e.maxScale}(e,i)})).map((function(e){return e.subtypeCode}));if(!n.length)return t;t=(0,c.r)(t)?t:(new p.y).toJSON();var a="NOT ".concat(this.layer.subtypeField," IN (").concat(n.join(","),")");return t.where=t.where?"(".concat(t.where,") AND (").concat(a,")"):a,t}},{key:"_setLayersForFeature",value:function(e){var t=this.layer.fieldsIndex.get(this.layer.subtypeField),r=e.attributes[t.name],i=this.layer.sublayers.find((function(e){return e.subtypeCode===r}));e.layer=i,e.sourceLayer=this.layer}},{key:"_createSchemaConfig",value:function(){var e=this,t={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map((function(t){return{featureReduction:null,geometryType:e.layer.geometryType,labelingInfo:t.labelingInfo,labelsVisible:t.labelsVisible,renderer:t.renderer,subtypeCode:t.subtypeCode,orderBy:null}}))},n=this.layer.sublayers.map((function(e){return e.subtypeCode})).join(","),a=this.layer.sublayers.length?"".concat(this.layer.subtypeField," IN (").concat(n,")"):"1=2",u=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return u+=a,(0,i.Z)((0,i.Z)((0,i.Z)({},(0,s.Z)((0,l.Z)(r.prototype),"_createSchemaConfig",this).call(this)),t),{},{definitionExpression:u})}}]),r}(f.default),b=d=(0,y.e)([(0,y.n)("esri.views.2d.layers.SubtypeGroupLayerView2D")],d);t.default=b}}]);
//# sourceMappingURL=2194.486d497e.chunk.js.map