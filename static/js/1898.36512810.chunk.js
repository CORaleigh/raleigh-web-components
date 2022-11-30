"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[1898],{47748:function(e,t,n){n.d(t,{F:function(){return N},I:function(){return v},a:function(){return T},g:function(){return y},n:function(){return d},p:function(){return m},t:function(){return _},y:function(){return P}});var i=n(60136),r=n(29388),s=n(37762),u=n(15671),a=n(43144),o=n(48848),l=n(93661),c=n(50690),h=n(15751),_=function(){function e(t){(0,u.Z)(this,e),this._observable=new h.e,this._value=t}return(0,a.Z)(e,[{key:"get",value:function(){return(0,o.i)(this._observable),this._value}},{key:"set",value:function(e){e!==this._value&&(this._value=e,this._observable.notify())}}]),e}(),d=function(){function e(){(0,u.Z)(this,e),this._tasks=new Array,this._running=new _(!1)}return(0,a.Z)(e,[{key:"length",get:function(){return this._tasks.length}},{key:"running",get:function(){return this._running.get()}},{key:"destroy",value:function(){this.cancelAll()}},{key:"runTask",value:function(e){for(;!e.done&&this._process(e);)e.madeProgress()}},{key:"push",value:function(e,t,n){var i=this;return this._running.set(!0),new Promise((function(r,s){return i._tasks.push(new f(r,s,e,t,n))}))}},{key:"unshift",value:function(e,t,n){var i=this;return this._running.set(!0),new Promise((function(r,s){return i._tasks.unshift(new f(r,s,e,t,n))}))}},{key:"_process",value:function(e){if(0===this._tasks.length)return!1;var t=this._tasks.shift();try{var n=(0,o.p)(t.signal);if(n&&!t.abortCallback)t.reject((0,o.d)());else{var i,r=n?null===(i=t.abortCallback)||void 0===i?void 0:i.call(t,(0,o.d)()):t.callback(e);(0,o.V)(r)?r.then(t.resolve,t.reject):t.resolve(r)}}catch(f){t.reject(f)}return this._running.set(this._tasks.length>0),!0}},{key:"cancelAll",value:function(){var e,t=(0,o.d)(),n=(0,s.Z)(this._tasks);try{for(n.s();!(e=n.n()).done;){var i=e.value;if(i.abortCallback){var r=i.abortCallback(t);i.resolve(r)}else i.reject(t)}}catch(u){n.e(u)}finally{n.f()}this._tasks.length=0,this._running.set(!1)}}]),e}(),f=(0,a.Z)((function e(t,n,i,r,s){(0,u.Z)(this,e),this.resolve=t,this.reject=n,this.callback=i,this.signal=r,this.abortCallback=s})),E=function(e){(0,i.Z)(n,e);var t=(0,r.Z)(n);function n(){var e;return(0,u.Z)(this,n),(e=t.apply(this,arguments)).SCHEDULER_LOG_SLOW_TASKS=!1,e.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES=!1,e}return(0,a.Z)(n)}(o.m);(0,o.e)([(0,o.y)()],E.prototype,"SCHEDULER_LOG_SLOW_TASKS",void 0),(0,o.e)([(0,o.y)()],E.prototype,"FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES",void 0);var T,v,g,m=new(E=(0,o.e)([(0,o.n)("esri.views.support.DebugFlags")],E));function y(){return new R.Scheduler}!function(e){e[e.ANIMATING=0]="ANIMATING",e[e.INTERACTING=1]="INTERACTING",e[e.IDLE=2]="IDLE"}(T||(T={})),(g=v||(v={})).RESOURCE_CONTROLLER="schedule",g.SLIDE="slide",g.STREAM_DATA_LOADER="stream loader",g.ELEVATION_QUERY="elevation query",g.TERRAIN_SURFACE="terrain",g.SURFACE_GEOMETRY_UPDATES="surface geometry updates",g.GRAPHICS_CORE="Graphics3D",g.I3S_CONTROLLER="I3S",g.POINT_CLOUD_LAYER="point cloud",g.FEATURE_TILE_FETCHER="feature fetcher",g.OVERLAY="overlay",g.STAGE="stage",g.GRAPHICS_DECONFLICTOR="graphics deconflictor",g.FILTER_VISIBILITY="Graphics3D filter visibility",g.SCALE_VISIBILITY="Graphics3D scale visibility",g.FRUSTUM_VISIBILITY="Graphics3D frustum visibility",g.POINT_OF_INTEREST_FREQUENT="POI frequent",g.POINT_OF_INTEREST_INFREQUENT="POI infrequent",g.LABELER="labeler",g.FEATURE_QUERY_ENGINE="feature query",g.FEATURE_TILE_TREE="feature tile tree",g.FEATURE_TILE_TREE_ACTIVE="fast feature tile tree",g.ELEVATION_ALIGNMENT="elevation alignment",g.TEXT_TEXTURE_ATLAS="text texture atlas",g.TEXTURE_UNLOAD="texture unload",g.LINE_OF_SIGHT_TOOL="line of sight tool",g.LINE_OF_SIGHT_TOOL_INTERACTIVE="interactive line of sight tool",g.ELEVATION_PROFILE="elevation profile",g.SNAPPING="snapping",g.SHADOW_ACCUMULATOR="shadow accumulator",g.CLOUDS_GENERATOR="cloud generator",g[g.TEST_PRIO=1]="TEST_PRIO";var k=new Map([[v.RESOURCE_CONTROLLER,0],[v.SLIDE,0],[v.STREAM_DATA_LOADER,0],[v.ELEVATION_QUERY,0],[v.TERRAIN_SURFACE,1],[v.SURFACE_GEOMETRY_UPDATES,1],[v.GRAPHICS_CORE,2],[v.I3S_CONTROLLER,2],[v.POINT_CLOUD_LAYER,2],[v.FEATURE_TILE_FETCHER,2],[v.OVERLAY,4],[v.STAGE,4],[v.GRAPHICS_DECONFLICTOR,4],[v.FILTER_VISIBILITY,4],[v.SCALE_VISIBILITY,4],[v.FRUSTUM_VISIBILITY,4],[v.CLOUDS_GENERATOR,4],[v.POINT_OF_INTEREST_FREQUENT,6],[v.POINT_OF_INTEREST_INFREQUENT,30],[v.LABELER,8],[v.FEATURE_QUERY_ENGINE,8],[v.FEATURE_TILE_TREE,16],[v.FEATURE_TILE_TREE_ACTIVE,0],[v.ELEVATION_ALIGNMENT,12],[v.TEXT_TEXTURE_ATLAS,12],[v.TEXTURE_UNLOAD,12],[v.LINE_OF_SIGHT_TOOL,16],[v.LINE_OF_SIGHT_TOOL_INTERACTIVE,0],[v.SNAPPING,0],[v.SHADOW_ACCUMULATOR,30]]);function I(e){return k.has(e)?k.get(e):"number"==typeof e?e:1}var R,p,A=(0,o.aj)(6.5),S=(0,o.aj)(1),b=(0,o.aj)(30),L=(0,o.aj)(1e3/30),O=(0,o.aj)(100);!function(e){var t=function(){function e(){var t=this;(0,u.Z)(this,e),this._updating=new _(!0),this._microTaskQueued=!1,this._frameNumber=0,this.performanceInfo={total:new o.an("total"),tasks:new Map},this._frameTaskTimes=new Map,this._budget=new i,this._state=T.INTERACTING,this._tasks=new o.a6,this._runQueue=new o.a6,this._load=0,this._idleStateCallbacks=new o.a6,this._idleUpdatesStartFired=!1,this._maxReschedule=32,this._forceTask=!1,this._debug=!1,this._debugHandle=(0,c.l)((function(){return m.SCHEDULER_LOG_SLOW_TASKS}),(function(e){return t._debug=e}),c.h);for(var n=0,r=Object.keys(v);n<r.length;n++){var s=r[n];this.performanceInfo.tasks.set(v[s],new o.an(v[s]))}var a=this;this._test={FRAME_SAFETY_BUDGET:A,INTERACTING_BUDGET:L,IDLE_BUDGET:O,get availableBudget(){return a._budget.budget},usedBudget:0,getBudget:function(){return a._budget},setBudget:function(e){return a._budget=e},updateTask:function(e){return t._updateTask(e)},getState:function(e){return t._getState(e)},getRuntime:function(e){return t._getRuntime(e)},frameTaskTimes:this._frameTaskTimes,resetRuntimes:function(){return t._resetRuntimes()},getRunning:function(){return t._getRunning()}}}return(0,a.Z)(e,[{key:"updating",get:function(){return this._updating.get()},set:function(e){this._updating.set(e)}},{key:"destroy",value:function(){this._tasks.toArray().forEach((function(e){return e.remove()})),this._tasks.clear(),(0,l.f)(this._debugHandle),this._microTaskQueued=!1,this._updating.set(!1)}},{key:"activate",value:function(){var e=this;this._budget.done||this._microTaskQueued||(this._microTaskQueued=!0,queueMicrotask((function(){e._microTaskQueued&&(e._microTaskQueued=!1,e._budget.done||(e._maxReschedule=32,e._schedule(),e.frame()))})))}},{key:"registerTask",value:function(e,t){var i=I(e),r=new n(this,e,t,i);return this._tasks.push(r),this.performanceInfo.tasks.has(e)||this.performanceInfo.tasks.set(e,new o.an(e)),r}},{key:"registerIdleStateCallbacks",value:function(e,t){var n=this,i={idleBegin:e,idleEnd:t};this._idleStateCallbacks.push(i),this.state===T.IDLE&&this._idleUpdatesStartFired&&i.idleBegin();var r=this;return{remove:function(){return n._removeIdleStateCallbacks(i)},set idleBegin(e){r._idleUpdatesStartFired&&(i.idleEnd(),r._state===T.IDLE&&e()),i.idleBegin=e},set idleEnd(e){i.idleEnd=e}}}},{key:"load",get:function(){return this._load}},{key:"state",get:function(){return this._state},set:function(e){this._state!==e&&(this._state=e,this.state!==T.IDLE&&this._idleUpdatesStartFired&&(this._idleUpdatesStartFired=!1,this._idleStateCallbacks.forAll((function(e){return e.idleEnd()}))))}},{key:"updateBudget",value:function(e){this._test.usedBudget=0,++this._frameNumber;var t=A,n=e.frameDuration,i=S;switch(this.state){case T.IDLE:t=(0,o.aj)(0),n=(0,o.aj)(Math.max(O,e.frameDuration)),i=b;break;case T.INTERACTING:n=(0,o.aj)(Math.max(L,e.frameDuration))}return n=(0,o.aj)(n-e.elapsedFrameTime-t),this.state!==T.IDLE&&n<S&&!this._forceTask?(this._forceTask=!0,!1):(n=(0,o.aj)(Math.max(n,i)),this._budget.reset(n,this.state),this._maxReschedule=32,this._updateLoad(),this._schedule())}},{key:"frame",value:function(){switch(this._forceTask=!1,this._microTaskQueued=!1,this.state){case T.IDLE:this._idleUpdatesStartFired||(this._idleUpdatesStartFired=!0,this._idleStateCallbacks.forAll((function(e){return e.idleBegin()}))),this._runIdle();break;case T.INTERACTING:this._runInteracting();break;default:this._runAnimating()}this._test.usedBudget=this._budget.elapsed}},{key:"stopFrame",value:function(){this._budget.reset((0,o.aj)(0),this._state),this._budget.madeProgress()}},{key:"_removeIdleStateCallbacks",value:function(e){this._idleUpdatesStartFired&&e.idleEnd(),this._idleStateCallbacks.removeUnordered(e)}},{key:"removeTask",value:function(e){this._tasks.removeUnordered(e),this._runQueue.removeUnordered(e)}},{key:"_updateTask",value:function(e){this._tasks.forAll((function(t){t.name===e&&t.setPriority(e)}))}},{key:"_getState",value:function(e){if(this._runQueue.some((function(t){return t.name===e})))return p.SCHEDULED;var t=p.IDLE;return this._tasks.forAll((function(n){n.name===e&&n.needsUpdate&&(n.schedulePriority<=1?t=p.READY:t!==p.READY&&(t=p.WAITING))})),t}},{key:"_getRuntime",value:function(e){var t=0;return this._tasks.forAll((function(n){n.name===e&&(t+=n.runtime)})),t}},{key:"_resetRuntimes",value:function(){this._tasks.forAll((function(e){return e.runtime=0}))}},{key:"_getRunning",value:function(){var e=new Map;if(this._tasks.forAll((function(t){t.needsUpdate&&e.set(t.name,(e.get(t.name)||0)+1)})),0===e.size)return null;var t="";return e.forEach((function(e,n){t+=e>1?" ".concat(e,"x ").concat(n):" ".concat(n)})),t}},{key:"_runIdle",value:function(){this._run()}},{key:"_runInteracting",value:function(){this._run()}},{key:"_runAnimating",value:function(){this._run()}},{key:"_updateLoad",value:function(){var e=this._tasks.reduce((function(e,t){return t.needsUpdate?++e:e}),0);this._load=.9*this._load+e*(1-.9)}},{key:"_schedule",value:function(){var e=this;if(this._maxReschedule<=0)return!1;for(this._runQueue.filterInPlace((function(e){return!!e.needsUpdate||(e.schedulePriority=e.basePriority,!1)})),this._tasks.forAll((function(t){0===t.basePriority&&t.needsUpdate&&!e._runQueue.includes(t)&&e._runQueue.unshift(t)}));0===this._runQueue.length;){var t=!1;if(this._tasks.forAll((function(n){!n.needsUpdate||0===n.schedulePriority||0===n.basePriority||n.task.runOncePerFrame&&n.lastFrameRun===e._frameNumber||(t=!0,1===n.schedulePriority?(n.schedulePriority=0,e._runQueue.push(n)):--n.schedulePriority)})),!t)return this._updating.set(!1),!1;--this._maxReschedule}return this._updating.set(!0),!0}},{key:"_run",value:function(){var e=this._budget.now();this._startFrameTaskTimes();do{for(;this._runQueue.length>0;){var t=this._budget.now(),n=this._runQueue.pop();this._budget.resetProgress();try{n.task.runTask(this._budget)}catch(r){o.a.getLogger("esri.views.support.Scheduler").error('Exception in task "'.concat(n.name,'"'),r)}n.schedulePriority=n.basePriority,n.lastFrameRun=this._frameNumber;var i=this._budget.now()-t;if(n.runtime+=i,this._frameTaskTimes.set(n.priority,this._frameTaskTimes.get(n.priority)+i),this._debug&&this._budget.elapsed>2*this._budget.budget&&console.log("Task",n.name,"used",this._budget.elapsed,"of max",this._budget.budget,"ms"),this._budget.remaining<=0)return this._updating.set(this._tasks.some((function(e){return e.needsUpdate}))),void this._recordFrameTaskTimes(this._budget.now()-e)}}while(this._schedule());this._updating.set(this._tasks.some((function(e){return e.needsUpdate}))),this._recordFrameTaskTimes(this._budget.now()-e)}},{key:"_startFrameTaskTimes",value:function(){for(var e=0,t=Object.keys(v);e<t.length;e++){var n=t[e];this._frameTaskTimes.set(v[n],0)}}},{key:"_recordFrameTaskTimes",value:function(e){var t=this;this._frameTaskTimes.forEach((function(e,n){return t.performanceInfo.tasks.get(n).record(e)})),this.performanceInfo.total.record(e)}},{key:"test",get:function(){return this._test}}]),e}();e.Scheduler=t;var n=function(){function e(t,n,i,r){var s=this;(0,u.Z)(this,e),this._scheduler=t,this.name=n,this._basePriority=r,this.lastFrameRun=0,this.runtime=0,this._queue=new d,this._handles=new o.X,this.schedulePriority=this._basePriority,this._task=new _((0,l.r)(i)?i:this._queue),this._handles.add((0,c.f)((function(){return s.task.running}),(function(){return t.activate()})))}return(0,a.Z)(e,[{key:"task",get:function(){return this._task.get()}},{key:"updating",get:function(){return this._queue.running}},{key:"remove",value:function(){this.processQueue(N),this._scheduler.removeTask(this),this.schedule=P.schedule,this.reschedule=P.reschedule,this._handles.destroy()}},{key:"basePriority",get:function(){return this._basePriority}},{key:"setPriority",value:function(e){this.name=e;var t=I(e);0!==this._basePriority&&0===this.schedulePriority||(this.schedulePriority=t),this._basePriority=t}},{key:"priority",get:function(){return this.name},set:function(e){this.setPriority(e)}},{key:"needsUpdate",get:function(){return this.updating||this.task.running}},{key:"schedule",value:function(e,t,n){return this._queue.push(e,t,n)}},{key:"reschedule",value:function(e,t,n){return this._queue.unshift(e,t,n)}},{key:"processQueue",value:function(e){this._queue.runTask(e)}}]),e}(),i=function(){function e(){(0,u.Z)(this,e),this._begin="undefined"!=typeof performance?performance.now():0,this._budget=0,this._state=T.IDLE,this._done=!1,this._enabled=!0}return(0,a.Z)(e,[{key:"run",value:function(e){return!this.done&&(!0===e()&&this.madeProgress(),!0)}},{key:"done",get:function(){return this._done}},{key:"budget",get:function(){return this._budget}},{key:"madeProgress",value:function(){this._done=this.elapsed>=this._budget&&this._enabled}},{key:"state",get:function(){return this._state}},{key:"enabled",get:function(){return this._enabled},set:function(e){this._enabled=e}},{key:"reset",value:function(e,t){this._begin=this.now(),this._budget=e,this._state=t,this._done=!1}},{key:"remaining",get:function(){return Math.max(this._budget-this.elapsed,0)}},{key:"now",value:function(){return performance.now()}},{key:"elapsed",get:function(){return performance.now()-this._begin}},{key:"resetProgress",value:function(){this._done=!1}},{key:"hasProgressed",get:function(){return this._done}}]),e}();e.Budget=i}(R||(R={})),function(e){e.SCHEDULED="s",e.READY="r",e.WAITING="w",e.IDLE="i"}(p||(p={}));var N=function(){var e=new R.Budget;return e.enabled=!1,e}(),U=function(){function e(){(0,u.Z)(this,e)}return(0,a.Z)(e,[{key:"remove",value:function(){}},{key:"processQueue",value:function(){}},{key:"schedule",value:function(e,t,n){try{if((0,o.p)(t)){var i=(0,o.d)();return n?Promise.resolve(n(i)):Promise.reject(i)}return(0,o.ao)(e(N))}catch(f){return Promise.reject(f)}}},{key:"reschedule",value:function(e,t,n){return this.schedule(e,t,n)}}]),e}(),P=new U},20302:function(e,t,n){n.d(t,{r:function(){return s}});var i=n(40558),r=n(48848);function s(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=e instanceof i.s?e:new i.s(e,n),u={type:null===(t=null===n||void 0===n?void 0:n.ignoreUnknown)||void 0===t||t?s.apiValues:String,json:{type:s.jsonValues,read:!(null!==n&&void 0!==n&&n.readOnly)&&{reader:s.read},write:{writer:s.write}}};return void 0!==(null===n||void 0===n?void 0:n.readOnly)&&(u.readOnly=!!n.readOnly),void 0!==(null===n||void 0===n?void 0:n.default)&&(u.json.default=n.default),void 0!==(null===n||void 0===n?void 0:n.name)&&(u.json.name=n.name),(0,r.y)(u)}},56162:function(e,t,n){n.d(t,{c:function(){return d},d:function(){return E},f:function(){return c},l:function(){return o},s:function(){return l},u:function(){return a},v:function(){return _},y:function(){return h}});var i=n(93661),r=n(46817),s=n(82474),u=n(74384);function a(e){return void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax}function o(e){return void 0!==e.points}function l(e){return void 0!==e.x&&void 0!==e.y}function c(e){return void 0!==e.paths}function h(e){return void 0!==e.rings}function _(e){return(0,i.t)(e)?null:e instanceof s.p?e:l(e)?s.w.fromJSON(e):c(e)?u.m.fromJSON(e):h(e)?u.v.fromJSON(e):o(e)?u.u.fromJSON(e):a(e)?r.w.fromJSON(e):null}function d(e){return e?l(e)?"esriGeometryPoint":c(e)?"esriGeometryPolyline":h(e)?"esriGeometryPolygon":a(e)?"esriGeometryEnvelope":o(e)?"esriGeometryMultipoint":null:null}var f={esriGeometryPoint:s.w,esriGeometryPolyline:u.m,esriGeometryPolygon:u.v,esriGeometryEnvelope:r.w,esriGeometryMultipoint:u.u};function E(e){return e&&f[e]||null}},65415:function(e,t,n){n.d(t,{o:function(){return a}});var i=n(37762),r=n(93661),s=n(47855),u=n(82474);function a(e,t,n){if((0,r.t)(t)||(0,r.t)(n)||n.vcsWkid||(0,u.E)(t,n))return null;var a=(0,s.L)(t)/(0,s.L)(n);if(1===a)return null;switch(e){case"point":case"esriGeometryPoint":return function(e){return function(e,t){e&&null!=e.z&&(e.z*=t)}(e,a)};case"polyline":case"esriGeometryPolyline":return function(e){return function(e,t){if(e){var n,r=(0,i.Z)(e.paths);try{for(r.s();!(n=r.n()).done;){var s,u=n.value,a=(0,i.Z)(u);try{for(a.s();!(s=a.n()).done;){var o=s.value;o.length>2&&(o[2]*=t)}}catch(l){a.e(l)}finally{a.f()}}}catch(l){r.e(l)}finally{r.f()}}}(e,a)};case"polygon":case"esriGeometryPolygon":return function(e){return function(e,t){if(e){var n,r=(0,i.Z)(e.rings);try{for(r.s();!(n=r.n()).done;){var s,u=n.value,a=(0,i.Z)(u);try{for(a.s();!(s=a.n()).done;){var o=s.value;o.length>2&&(o[2]*=t)}}catch(l){a.e(l)}finally{a.f()}}}catch(l){r.e(l)}finally{r.f()}}}(e,a)};case"multipoint":case"esriGeometryMultipoint":return function(e){return function(e,t){if(e){var n,r=(0,i.Z)(e.points);try{for(r.s();!(n=r.n()).done;){var s=n.value;s.length>2&&(s[2]*=t)}}catch(u){r.e(u)}finally{r.f()}}}(e,a)};case"extent":case"esriGeometryExtent":return function(e){return function(e,t){e&&null!=e.zmin&&null!=e.zmax&&(e.zmin*=t,e.zmax*=t)}(e,a)};default:return null}}}}]);
//# sourceMappingURL=1898.36512810.chunk.js.map