"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[440],{60440:function(e,t,i){i.r(t);var r=i(15671),n=i(43144),a=i(11752),o=i(61120),s=i(60136),l=i(29388),u=i(48848),d=i(64998),c=i(93661),y=i(50690),p=i(75922),h=i(28390),v=i(72770),g=i(52195),f=(i(74384),i(46817),i(82474),i(40114),i(40558),i(25577),i(62610),i(93314),i(37856),i(15751),i(59984),i(20302),i(53586),i(65094),i(60369),i(92072),i(37944),i(86086),i(21385),i(89794),i(48200),i(71802),i(85253),i(93209),i(25456),i(46337),i(81556),i(93116),i(56162),i(43955),i(47855),i(26313),i(43066),i(79557),i(49228),i(91681),i(95249),i(75255),i(65415),i(32043),i(42467),i(46737),i(52113),i(42667),i(61118),i(630),i(98598),i(1500),i(19941),i(39994),i(49871),i(63212),i(69717),i(53409),i(35182),i(62466),i(51816),i(68781),i(69641),i(15436),i(35237),i(89181),i(69768),i(35865),i(51219),i(66577),i(95643),i(59389),i(33795),i(43976),i(6762),i(2959),i(2821),i(33794),i(71147),i(84186),i(15529),i(70449),i(22603),i(56546),i(39926),i(8141),i(26151),i(90429),i(52559),i(95399),i(98987),i(99795),i(87753),i(29130),i(82396),i(1685),i(12953),i(74797),i(45999),i(85113),i(72973),i(62710),i(52721),i(61903),i(23444),i(40811),i(51920),i(63393),i(90442),i(64854),i(24623),i(64264),i(6379),i(21015),i(23341),i(41820),i(20086),i(92982),i(61416),i(77880),i(74494),i(77755),i(71645),i(89311),i(67066),i(39769),i(70607),i(85700),i(3719),i(32161),i(37686),i(16641),i(62642),i(90316),i(19891),i(23585),i(47748),i(70522),i(17332),i(17455),i(29048),i(68136),i(13239),i(50253),i(27205),i(60666),i(43406),i(45184),i(78697),i(64772),i(37077),i(76291),i(22159),i(67430),i(73911),i(43345),i(4937),i(87424),i(24093),i(66633),i(70381),i(20675),i(85026),i(33973),i(42233),i(93122),i(70288),i(95414),i(57791),i(87750),i(75833),i(31698),i(94777),i(20846),i(10464),i(41723),i(477),i(22862),i(68882),i(41896),i(5526),i(2473),i(40345),i(96278),i(52638),i(76419),i(25874),i(44581),i(44513),i(90325),i(53921),i(25747),i(6189),i(69838),i(2352),i(62470),i(54622),i(73679),i(62753),i(83948),i(94663),i(67477),i(78413),i(26593),i(60491),i(3393),i(59929),i(81216),i(62004),i(31303),i(35264),i(16263),i(3356),i(87440),i(21744),i(18936),i(4397),i(25217),i(72361),i(87917),i(46018),i(70863),i(62312),i(24648),i(63999),i(1797),i(2467),i(75257),i(26789),i(64095),i(51732),i(2851),i(70285),i(40335),i(18395),i(87888),function(e){(0,s.Z)(i,e);var t=(0,l.Z)(i);function i(){var e;return(0,r.Z)(this,i),(e=t.apply(this,arguments)).type="integrated-mesh-3d",e._elevationContext="im",e._isIntegratedMesh=!0,e._supportsLabeling=!1,e.drapeTargetType=h.$.WithoutRasterImage,e}return(0,n.Z)(i,[{key:"i3slayer",get:function(){return this.layer}},{key:"updatingProgressValue",get:function(){var e,t;return null!==(e=null===(t=this._controller)||void 0===t?void 0:t.updatingProgress)&&void 0!==e?e:0}},{key:"lodFactor",get:function(){var e,t,i,r,n;return null!==(e=null===(t=this.view)||void 0===t||null===(i=t.qualitySettings)||void 0===i||null===(r=i.sceneService)||void 0===r||null===(n=r.integratedMesh)||void 0===n?void 0:n.lodFactor)&&void 0!==e?e:1}},{key:"progressiveLoadFactor",get:function(){return this.lodFactor>=1?.2:1}},{key:"layerPopupEnabled",get:function(){return!1}},{key:"initialize",value:function(){var e=this;this.updatingHandles.add((function(){return e.layer.modifications}),(function(){return e._loadModifications()}),y.h),this.view.basemapTerrain.overlayManager.registerDrapeTarget(this)}},{key:"destroy",value:function(){this.view.basemapTerrain.overlayManager.unregisterDrapeTarget(this)}},{key:"_createLayerGraphic",value:function(){var e=new d.g;return e.layer=this.layer,e.sourceLayer=this.layer,e}},{key:"canResume",value:function(){return(0,a.Z)((0,o.Z)(i.prototype),"canResume",this).call(this)&&(!this._controller||this._controller.rootNodeVisible)}},{key:"_loadModifications",value:function(){var e=this;if(this.handles.remove("modifications"),(0,c.t)(this.layer.modifications))this._modifications=[];else{var t=this.layer.modifications;this.handles.add(this.updatingHandles.addOnCollectionChange((function(){return t}),(function(){return e._modifications=t.toArray()}),y.h),"modifications")}}}]),i}((0,p.y)((0,v.n)(g.u))));(0,u.e)([(0,u.y)()],f.prototype,"layer",void 0),(0,u.e)([(0,u.y)()],f.prototype,"i3slayer",null),(0,u.e)([(0,u.y)(h.t)],f.prototype,"updatingProgress",void 0),(0,u.e)([(0,u.y)()],f.prototype,"updatingProgressValue",null),(0,u.e)([(0,u.y)()],f.prototype,"lodFactor",null),(0,u.e)([(0,u.y)({readOnly:!0})],f.prototype,"progressiveLoadFactor",null);var m=f=(0,u.e)([(0,u.n)("esri.views.3d.layers.SceneLayerView3D")],f);t.default=m}}]);
//# sourceMappingURL=440.42ab5413.chunk.js.map