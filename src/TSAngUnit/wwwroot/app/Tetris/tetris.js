(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Image.png", id:"Image"},
		{src:"images/Image_1.png", id:"Image_1"},
		{src:"images/Image_2.png", id:"Image_2"},
		{src:"images/Image_3.png", id:"Image_3"},
		{src:"images/Image_4.png", id:"Image_4"},
		{src:"images/Image_5.png", id:"Image_5"},
		{src:"images/Image_6.png", id:"Image_6"}
	]
};



lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Image = function() {
	this.initialize(img.Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,126);


(lib.Image_1 = function() {
	this.initialize(img.Image_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,126);


(lib.Image_2 = function() {
	this.initialize(img.Image_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,126);


(lib.Image_3 = function() {
	this.initialize(img.Image_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,126);


(lib.Image_4 = function() {
	this.initialize(img.Image_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,126);


(lib.Image_5 = function() {
	this.initialize(img.Image_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,126);


(lib.Image_6 = function() {
	this.initialize(img.Image_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,126);


(lib.Z_Block_Box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_4();
	this.instance.parent = this;
	this.instance.setTransform(-15.1,-30.2,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.1,-30.2,30.3,30.3);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_5();
	this.instance.parent = this;
	this.instance.setTransform(-15.1,-15.1,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.1,-15.1,30.3,30.3);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_2();
	this.instance.parent = this;
	this.instance.setTransform(-15.1,-15.1,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.1,-15.1,30.3,30.3);


(lib.T_Block_Box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_6();
	this.instance.parent = this;
	this.instance.setTransform(-15.1,-30.2,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.1,-30.2,30.3,30.3);


(lib.S_Block_Box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_3();
	this.instance.parent = this;
	this.instance.setTransform(-15.1,-30.2,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.1,-30.2,30.3,30.3);


(lib.O_Block_Box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_5();
	this.instance.parent = this;
	this.instance.setTransform(-15.1,-30.2,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.1,-30.2,30.3,30.3);


(lib.L_Block_Box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_2();
	this.instance.parent = this;
	this.instance.setTransform(-15.1,-30.2,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.1,-30.2,30.3,30.3);


(lib.I_Block_Box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image();
	this.instance.parent = this;
	this.instance.setTransform(-15.1,-30.2,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.1,-30.2,30.3,30.3);


(lib.zBlock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{start:1});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_9 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.zBlockBox = new lib.Z_Block_Box();
	this.zBlockBox.parent = this;
	this.zBlockBox.setTransform(0.1,0.1,1,1,0,0,0,0,-15.2);

	this.timeline.addTween(cjs.Tween.get(this.zBlockBox).to({alpha:0},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30.3,30.3);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.iBlockBox = new lib.I_Block_Box();
	this.iBlockBox.parent = this;
	this.iBlockBox.setTransform(0.1,0,1,1,0,0,0,0,-15.2);
	this.iBlockBox.alpha = 0;

	this.instance = new lib.Image_1();
	this.instance.parent = this;
	this.instance.setTransform(-15.2,-15.2,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.iBlockBox}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.2,-15.2,30.4,30.4);


(lib.tBlock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":1});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_9 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.tBlockBox = new lib.T_Block_Box();
	this.tBlockBox.parent = this;
	this.tBlockBox.setTransform(0.1,0.1,1,1,0,0,0,0,-15.2);

	this.timeline.addTween(cjs.Tween.get(this.tBlockBox).to({alpha:0},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30.3,30.3);


(lib.sBlock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":1});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_9 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.sBlockBox = new lib.S_Block_Box();
	this.sBlockBox.parent = this;
	this.sBlockBox.setTransform(0.1,0.1,1,1,0,0,0,0,-15.2);

	this.timeline.addTween(cjs.Tween.get(this.sBlockBox).to({alpha:0},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30.3,30.3);


(lib.oBlock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":1});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_9 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.1);

	this.oBlockBox = new lib.O_Block_Box();
	this.oBlockBox.parent = this;
	this.oBlockBox.setTransform(0.1,0.1,1,1,0,0,0,0,-15.2);
	this.oBlockBox.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.oBlockBox}]},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regY:-15.2,alpha:0,mode:"independent"},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30.3,30.3);


(lib.lBlock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":1});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_9 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.1);

	this.lBlockBox = new lib.L_Block_Box();
	this.lBlockBox.parent = this;
	this.lBlockBox.setTransform(0.1,0.1,1,1,0,0,0,0,-15.2);
	this.lBlockBox.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.lBlockBox}]},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regY:-15.2,alpha:0,mode:"independent"},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30.3,30.3);


(lib.J_Block_Box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.iBlockBox = new lib.I_Block_Box();
	this.iBlockBox.parent = this;
	this.iBlockBox.setTransform(0.1,-15.2,1,1,0,0,0,0,-15.2);
	this.iBlockBox.alpha = 0;

	this.instance = new lib.Image_1();
	this.instance.parent = this;
	this.instance.setTransform(-15.2,-30.4,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.iBlockBox}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.2,-30.4,30.4,30.4);


(lib.jBlock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":1});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_9 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.2,0.2);

	this.jBlockBox = new lib.J_Block_Box();
	this.jBlockBox.parent = this;
	this.jBlockBox.setTransform(0.2,0.2,1,1,0,0,0,0,-15.2);
	this.jBlockBox.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.jBlockBox}]},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regY:-15.2,alpha:0,mode:"independent"},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30.4,30.4);


(lib.iBlock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":1});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_9 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.iBlockBox = new lib.I_Block_Box();
	this.iBlockBox.parent = this;
	this.iBlockBox.setTransform(0.3,0.2,1,1,0,0,0,0,-15.2);

	this.timeline.addTween(cjs.Tween.get(this.iBlockBox).to({x:0.1,y:0.1,alpha:0},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.8,-14.8,30.3,30.3);


// stage content:



(lib.tetris = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;