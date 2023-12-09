(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Index_atlas_1", frames: [[0,1518,212,339],[0,1947,246,56],[0,1859,246,86],[0,0,1218,1516]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Background = function() {
	this.initialize(img.Background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4000,2360);


(lib.Single_offer = function() {
	this.initialize(ss["Index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Single_offer();
	this.instance.setTransform(0,0,0.1305,0.1305);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,159,197.9), null);


(lib.Headlinetext = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Headlinetext, new cjs.Rectangle(0,0,106,169.5), null);


(lib.CTAbutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// CTA
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(2,6,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTAbutton, new cjs.Rectangle(0,0,125,43), null);


// stage content:
(lib.Animate = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [39];
	// timeline functions:
	this.frame_39 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// HL
	this.instance = new lib.Headlinetext();
	this.instance.setTransform(79.05,164.4,1,1,0,0,0,53,84.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:84.8,y:159.45,alpha:0.1621},0).wait(1).to({y:155.6,alpha:0.2985},0).wait(1).to({y:152.5,alpha:0.4129},0).wait(1).to({y:149.9,alpha:0.5092},0).wait(1).to({y:147.6,alpha:0.5902},0).wait(1).to({y:145.6,alpha:0.6588},0).wait(1).to({y:143.85,alpha:0.7173},0).wait(1).to({y:142.25,alpha:0.7679},0).wait(1).to({y:140.8,alpha:0.8122},0).wait(1).to({y:139.5,alpha:0.8519},0).wait(1).to({y:138.3,alpha:0.888},0).wait(1).to({y:137.25,alpha:0.9216},0).wait(1).to({y:136.25,alpha:0.9535},0).wait(1).to({y:135.35,alpha:0.9842},0).wait(1).to({y:134.5,alpha:1},0).wait(1).to({y:133.75},0).wait(1).to({y:133.05},0).wait(1).to({y:132.4},0).wait(1).to({y:131.8},0).wait(1).to({y:131.3},0).wait(1).to({y:130.8},0).wait(1).to({y:130.35},0).wait(1).to({y:129.95},0).wait(1).to({y:129.55},0).wait(1).to({y:129.25},0).wait(1).to({y:128.95},0).wait(1).to({y:128.65},0).wait(1).to({y:128.45},0).wait(1).to({y:128.25},0).wait(1).to({y:128.05},0).wait(1).to({y:127.9},0).wait(1).to({y:127.8},0).wait(1).to({y:127.7},0).wait(1).to({y:127.6},0).wait(1).to({y:127.55},0).wait(1).to({y:127.5},0).wait(4));

	// CTA_button
	this.instance_1 = new lib.CTAbutton();
	this.instance_1.setTransform(81.55,292.5,1,1,0,0,0,62.5,21.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:290.45,alpha:0.0707},0).wait(1).to({y:288.4,alpha:0.1301},0).wait(1).to({y:286.4,alpha:0.18},0).wait(1).to({y:284.4,alpha:0.2219},0).wait(1).to({y:282.4,alpha:0.2573},0).wait(1).to({y:280.4,alpha:0.2872},0).wait(1).to({y:278.45,alpha:0.3127},0).wait(1).to({y:276.5,alpha:0.3347},0).wait(1).to({y:274.65,alpha:0.3541},0).wait(1).to({y:272.8,alpha:0.3713},0).wait(1).to({y:271.05,alpha:0.3871},0).wait(1).to({y:269.35,alpha:0.4017},0).wait(1).to({y:267.7,alpha:0.4156},0).wait(1).to({y:266.2,alpha:0.429},0).wait(1).to({y:264.75,alpha:0.4421},0).wait(1).to({y:263.45,alpha:0.4551},0).wait(1).to({y:262.3,alpha:0.4679},0).wait(1).to({y:261.2,alpha:0.4807},0).wait(1).to({y:260.3,alpha:0.4936},0).wait(1).to({y:259.45,alpha:0.5064},0).wait(1).to({y:258.75,alpha:0.5192},0).wait(1).to({y:258.15,alpha:0.5321},0).wait(1).to({y:257.65,alpha:0.5449},0).wait(1).to({y:257.2,alpha:0.5578},0).wait(1).to({y:256.85,alpha:0.5709},0).wait(1).to({y:256.55,alpha:0.5844},0).wait(1).to({y:256.35,alpha:0.5983},0).wait(1).to({y:256.15,alpha:0.6129},0).wait(1).to({y:255.95,alpha:0.6286},0).wait(1).to({y:255.85,alpha:0.6459},0).wait(1).to({y:255.75,alpha:0.6653},0).wait(1).to({y:255.65,alpha:0.6873},0).wait(1).to({y:255.6,alpha:0.7128},0).wait(1).to({y:255.55,alpha:0.7427},0).wait(1).to({y:255.5,alpha:0.778},0).wait(1).to({alpha:0.82},0).wait(1).to({alpha:0.8699},0).wait(1).to({alpha:0.9293},0).wait(1).to({alpha:1},0).wait(1));

	// Layer_3
	this.instance_2 = new lib.Symbol1();
	this.instance_2.setTransform(80.5,427.9,1,1,0,0,0,79.5,98.9);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},39).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F5F5F5","rgba(245,245,245,0)"],[0,1],-86.5,0,86.5,0).s().p("EgNgAwhMAAAhhBIbBAAMAAABhBg");
	this.shape.setTransform(83.55,304.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(40));

	// Layer_2
	this.instance_3 = new lib.Background();
	this.instance_3.setTransform(0,0,0.15,0.15,0,-90,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(77.1,294.1,276.9,320.9);
// library properties:
lib.properties = {
	id: 'B33A5FAA0215465A93F5A98B9A9B6D32',
	width: 160,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Background.png", id:"Background"},
		{src:"images/Index_atlas_1.png", id:"Index_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B33A5FAA0215465A93F5A98B9A9B6D32'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;