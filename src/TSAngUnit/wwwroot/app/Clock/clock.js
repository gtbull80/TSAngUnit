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
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: []
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



(lib.secondHandSymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#EC1C24").ss(2).p("AgB2KMAADAsV");
	this.shape.setTransform(0,-141.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-284.9,2.5,285.9);


(lib.minuteHandSymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGA2DIAEdDIsGPEg");
	this.shape.setTransform(-39.1,-6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E3191").s().p("AgG9eMARNA65IxI0RIxFUVg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.5,-188.7,219.2,377.5);


(lib.hourHandSymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AClpcIABMcIlLGdg");
	this.shape.setTransform(30.2,78.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00ADEE").s().p("AgCsoIHXZQInVotInVIug");
	this.shape_1.setTransform(47,81);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94,162);


(lib.clockObj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// secondHand
	this.secondHand = new lib.secondHandSymbol();
	this.secondHand.parent = this;
	this.secondHand.setTransform(301.7,301.6,1,1,0,0,0,0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.secondHand).wait(1));

	// hourHand
	this.hourHand = new lib.hourHandSymbol();
	this.hourHand.parent = this;
	this.hourHand.setTransform(301.6,301.7,1,1,0,0,0,46.9,107.5);

	this.timeline.addTween(cjs.Tween.get(this.hourHand).wait(1));

	// minuteHand
	this.minuteHand = new lib.minuteHandSymbol();
	this.minuteHand.parent = this;
	this.minuteHand.setTransform(301.6,301.7,1,1,0,0,0,-0.2,66.8);

	this.timeline.addTween(cjs.Tween.get(this.minuteHand).wait(1));

	// clockStatic
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("Ag3DIIAAmPIBvAAIAAGPg");
	this.shape.setTransform(414.7,84.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("Ah0DNIB/jwIAEgIQAFgJAAgKQAAgYgZAAQgLAAgIAJQgIAIAAAKQAAANAKAKIgzBZQgggTgSggQgRgcAAglQAAg6ApgpQAogqA6AAQA4AAApAqQAoAoAAA7QAAAhgPAdIgvBaIBDAAIAAB0g");
	this.shape_1.setTransform(497.8,167.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AhqC/IAAhwQAZAPATAAQAVAAAOgOQANgPAAgVQABgZgVgPQgVgNgjAAIAdhPIgsAAIAAh0IDTAAIhCCaQAjAYAQAbQAQAbAAAnQAAA6grAoQgqAog8AAQgjAAghgOg");
	this.shape_2.setTransform(545.8,299.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AAiDHIAAkvIgwBjIAXAAIAABVIiaAAIB2kWICtAAIAAGNg");
	this.shape_3.setTransform(513,420.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("Ah1C1IAAhiQAiAQAZAAQAbABAQgMQAPgNAAgVQAAgYgXgQQgYgPgkABQgOAAgVACIAqjOIC4AAIAABzIhiAAIgFASQA2AQAZAdQAkAmgBA4QAAA7gqAnQgsAnhAAAQgsAAgqgYg");
	this.shape_4.setTransform(423.5,510.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AhpCmQgugtAAg8QAAgbAVg6IBEi5IBnAlIhMDYQgDAKgBAHQAAAQAMALQAMAMAPAAQAPAAAMgMQAKgLABgRQgBgQgKgMQgMgLgPAAIgLABIAvhxQA9AbAcAjQAbAhAAA0QAABBgsAtQgsAshAAAQg8AAgtgsg");
	this.shape_5.setTransform(301.2,543.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AhmDIIBbkcIh6AAIAAhzIEMAAIh0GPg");
	this.shape_6.setTransform(178.9,510.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AhkCqQgogoAAg7QAAgfAKgXQAJgUAYgZQgWgcABgkQAAgzAhghQAiggAzAAQAzAAAjAgQAhAiABAzQAAAigXAdQAaAaAJATQAJAWAAAgQAAA7goAoQgpAng8AAQg7AAgpgngAghAmQgOAOAAAUQgBAVAOAPQAOAOAUAAQATAAAOgOQAPgPAAgVQAAgUgPgOQgPgOgSABQgTgBgOAOgAgWhxQgKAKAAANQAAAPAJAKQAKAJANAAQANAAAJgKQAKgKAAgNQAAgPgKgJQgKgKgMAAQgNAAgJAKg");
	this.shape_7.setTransform(89.4,420.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AgoCtIBMjYQADgKAAgHQAAgQgLgMQgMgLgQAAQgOAAgLAMQgLALAAARQAAAQALAMQALALAPAAIAKgBIgtBxQg+gbgcgjQgbghAAg0QAAhBAtgtQAsgsA+AAQA9AAAuAtQAtAsAAA8QAAAcgVA5IhDC5g");
	this.shape_8.setTransform(56.6,298.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AhnClQgmgtAAhNIAAhWQAAhMAmgtQAngtBAAAQBBAAAnAtQAmAtAABMIAABWQAABNgmAtQgnAthBAAQhAAAgngtgAgbhCIAACFQAAAlAbAAQAcAAAAglIAAiFQAAgkgcAAQgbAAAAAkg");
	this.shape_9.setTransform(106.4,176.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("Ag3DIIAAmPIBvAAIAAGPg");
	this.shape_10.setTransform(72.3,176.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("Ag3DHIAAmNIBvAAIAAGNg");
	this.shape_11.setTransform(196,86.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("Ag3DHIAAmNIBvAAIAAGNg");
	this.shape_12.setTransform(161.9,86.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("Ah0DMIB/jvIAEgHQAFgKAAgKQAAgXgZAAQgLAAgIAIQgIAIAAALQAAAMAKAKIgzBZQgggTgSgfQgRgdAAgmQAAg5ApgpQAogpA6AAQA4AAApAoQAoApAAA6QAAAigPAcIgvBbIBDAAIAABzg");
	this.shape_13.setTransform(318.2,53.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("Ag3DHIAAmNIBvAAIAAGNg");
	this.shape_14.setTransform(284.1,54);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#231F20").ss(2).p("AALhpIgUDT");
	this.shape_15.setTransform(320.4,120.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#231F20").ss(2).p("AAWhnIgrDP");
	this.shape_16.setTransform(339.1,123.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#231F20").ss(2).p("AAhhkIhBDJ");
	this.shape_17.setTransform(357.5,128.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#231F20").ss(2).p("AArhgIhVDB");
	this.shape_18.setTransform(375.2,135.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#231F20").ss(2).p("AA+hVIh7Cr");
	this.shape_19.setTransform(408,154.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#231F20").ss(2).p("ABHhOIiNCd");
	this.shape_20.setTransform(422.7,166.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#231F20").ss(2).p("ABPhGIidCN");
	this.shape_21.setTransform(436.1,180);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#231F20").ss(2).p("ABWg9IirB7");
	this.shape_22.setTransform(448.1,194.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#231F20").ss(2).p("ABhgqIjBBV");
	this.shape_23.setTransform(466.9,227.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#231F20").ss(2).p("ABlggIjJBB");
	this.shape_24.setTransform(473.7,245.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#231F20").ss(2).p("ABogVIjPAr");
	this.shape_25.setTransform(478.6,263.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#231F20").ss(2).p("ABqgKIjTAV");
	this.shape_26.setTransform(481.5,282.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#231F20").ss(2).p("ABqALIjTgU");
	this.shape_27.setTransform(481.4,320.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#231F20").ss(2).p("ABoAWIjPgr");
	this.shape_28.setTransform(478.4,339.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#231F20").ss(2).p("ABlAhIjJhB");
	this.shape_29.setTransform(473.5,357.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#231F20").ss(2).p("ABhArIjBhV");
	this.shape_30.setTransform(466.6,375.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#231F20").ss(2).p("ABWA+Iirh7");
	this.shape_31.setTransform(447.6,408);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#231F20").ss(2).p("ABPBHIidiN");
	this.shape_32.setTransform(435.6,422.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#231F20").ss(2).p("ABHBPIiNid");
	this.shape_33.setTransform(422.2,436.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#231F20").ss(2).p("AA+BWIh7ir");
	this.shape_34.setTransform(407.4,448.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#231F20").ss(2).p("AArBhIhVjB");
	this.shape_35.setTransform(374.5,466.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#231F20").ss(2).p("AAhBlIhBjJ");
	this.shape_36.setTransform(356.8,473.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#231F20").ss(2).p("AAWBoIgrjP");
	this.shape_37.setTransform(338.4,478.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#231F20").ss(2).p("AALBqIgVjT");
	this.shape_38.setTransform(319.7,481.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#231F20").ss(2).p("AgKBqIAVjT");
	this.shape_39.setTransform(281.8,481.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#231F20").ss(2).p("AgVBoIArjP");
	this.shape_40.setTransform(263,478.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#231F20").ss(2).p("AggBlIBBjJ");
	this.shape_41.setTransform(244.7,473.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#231F20").ss(2).p("AgqBhIBVjB");
	this.shape_42.setTransform(227,466.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#231F20").ss(2).p("Ag9BWIB7ir");
	this.shape_43.setTransform(194.2,447.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#231F20").ss(2).p("AhGBPICNid");
	this.shape_44.setTransform(179.5,435.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#231F20").ss(2).p("AhOBHICdiN");
	this.shape_45.setTransform(166.1,422.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#231F20").ss(2).p("AhVA+ICrh7");
	this.shape_46.setTransform(154.1,407.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#231F20").ss(2).p("AhgArIDBhV");
	this.shape_47.setTransform(135.2,374.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#231F20").ss(2).p("AhkAhIDJhB");
	this.shape_48.setTransform(128.5,356.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#231F20").ss(2).p("AhnAWIDPgr");
	this.shape_49.setTransform(123.6,338.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#231F20").ss(2).p("AhpALIDTgV");
	this.shape_50.setTransform(120.7,319.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#231F20").ss(2).p("AhpgKIDTAV");
	this.shape_51.setTransform(120.7,281.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#231F20").ss(2).p("AhngVIDPAr");
	this.shape_52.setTransform(123.8,263);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#231F20").ss(2).p("AhkggIDJBB");
	this.shape_53.setTransform(128.7,244.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#231F20").ss(2).p("AhggqIDBBV");
	this.shape_54.setTransform(135.5,227);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#231F20").ss(2).p("AhVg9ICrB7");
	this.shape_55.setTransform(154.6,194.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#231F20").ss(2).p("AhOhGICdCN");
	this.shape_56.setTransform(166.6,179.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#231F20").ss(2).p("AhGhOICNCd");
	this.shape_57.setTransform(180,166.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#231F20").ss(2).p("Ag9hVIB7Cr");
	this.shape_58.setTransform(194.8,154.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#231F20").ss(2).p("AgqhgIBVDB");
	this.shape_59.setTransform(227.7,135.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#231F20").ss(2).p("AgghkIBBDJ");
	this.shape_60.setTransform(245.4,128.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#231F20").ss(2).p("AgVhnIArDP");
	this.shape_61.setTransform(263.7,123.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#231F20").ss(2).p("AgKhpIAVDT");
	this.shape_62.setTransform(282.5,120.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#231F20").s().p("AgQBBQgbgHgOgYQgOgZAHgZQAHgbAYgOQAZgPAZAIQAbAHAPAYQAOAZgIAZQgHAcgYAOQgRAJgRAAQgHAAgJgDgAgZgsQgSALgGAVQgGATALATQALASAVAGQATAGATgMQATgKAFgVQAGgSgLgUQgLgSgVgGQgHgCgGAAQgMAAgNAHg");
	this.shape_63.setTransform(438.1,222);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgOA6QgYgHgNgWQgMgVAGgWQAHgYAVgNQAWgMAWAHQAYAGANAWQAMAVgGAWQgHAYgVANQgPAIgPAAQgGAAgIgCg");
	this.shape_64.setTransform(438.1,222);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#231F20").s().p("AgTgOIhNhCQAoAJA4gBQAxgCAwgIQgfAmgaArQgeAugLAmg");
	this.shape_65.setTransform(469.4,206.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#231F20").ss(8).p("ACahXIkzCw");
	this.shape_66.setTransform(453.3,213.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#231F20").s().p("AgvAwQgUgUAAgcQAAgbAUgUQAUgUAbAAQAcAAAUAUQAUAUAAAbQAAAcgUAUQgUAUgcAAQgbAAgUgUgAgjgjQgQAPAAAUQAAAVAQAPQAPAQAUAAQAVAAAPgQQAQgPAAgVQAAgUgQgPQgPgQgVAAQgUAAgPAQg");
	this.shape_67.setTransform(459.3,301.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgpAqQgSgRAAgZQAAgXASgSQASgSAXAAQAZAAARASQASASAAAXQAAAZgSARQgRASgZAAQgXAAgSgSg");
	this.shape_68.setTransform(459.3,301.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#231F20").s().p("AgyAAIgiheQAfAbAxAbQArAYAuAQQguARgrAYQgxAbgfAbg");
	this.shape_69.setTransform(498.2,301.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#231F20").ss(8).p("ACyAAIljAA");
	this.shape_70.setTransform(476.8,301.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#231F20").s().p("AghA7QgYgPgHgbQgHgZAOgYQAOgZAbgIQAZgGAZAOQAYAOAHAbQAIAZgOAYQgPAZgbAIQgJACgIAAQgRAAgQgJgAgMgxQgVAGgLATQgLASAGATQAGAVASAKQATALATgFQAVgFALgUQALgSgGgTQgFgVgTgLQgNgHgNAAQgFAAgHACg");
	this.shape_71.setTransform(438.1,380.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgdAzQgVgMgHgYQgGgWAMgWQANgVAYgHQAWgGAWANQAVAMAHAYQAGAWgMAWQgNAVgYAHQgIACgHAAQgOAAgPgJg");
	this.shape_72.setTransform(438.1,380.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#231F20").s().p("AAABKQg4gBgoAHIBNhBIAShiQALAnAeAvQAaAqAfAnQgwgJgxgBg");
	this.shape_73.setTransform(469.4,395.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#231F20").ss(8).p("ACaBYIkziw");
	this.shape_74.setTransform(453.3,389);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#231F20").s().p("AgQBBQgbgHgOgYQgOgZAGgZQAIgbAZgOQAYgOAZAHQAbAHAPAYQANAZgGAZQgIAbgZAPQgPAJgRAAQgIAAgJgDgAgYgsQgTALgGAVQgFATAKATQALATAVAFQATAGASgLQAUgLAFgVQAFgTgLgTQgKgSgVgGQgHgCgGAAQgNAAgLAHg");
	this.shape_75.setTransform(380.2,438.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgOA6QgYgHgMgVQgNgWAGgWQAHgYAVgNQAWgMAWAGQAYAHAMAVQANAWgGAWQgHAYgVANQgPAIgPAAQgGAAgIgCg");
	this.shape_76.setTransform(380.2,438.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#231F20").s().p("AADAoQgvgegngLIBigSIBBhNQgHAoABA4QABAxAJAwQgngfgqgag");
	this.shape_77.setTransform(395.5,469.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#231F20").ss(8).p("ABYCaIiwkz");
	this.shape_78.setTransform(389,453.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#231F20").s().p("AgvAwQgUgUAAgcQAAgbAUgUQAUgUAbAAQAcAAAUAUQAUAUAAAbQAAAcgUAUQgUAUgcAAQgbAAgUgUgAgjgjQgQAPAAAUQAAAVAQAPQAPAQAUAAQAVAAAPgQQAQgPAAgVQAAgUgQgPQgPgQgVAAQgUAAgPAQg");
	this.shape_79.setTransform(301.1,459.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgpAqQgSgRAAgZQAAgXASgSQASgSAXAAQAZAAARASQASASAAAXQAAAZgSARQgRASgZAAQgXAAgSgSg");
	this.shape_80.setTransform(301.1,459.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#231F20").s().p("AgogEQgbgxgbgfIBeAiIBfgiQgbAfgbAxQgYArgRAuQgQgugYgrg");
	this.shape_81.setTransform(301.1,498.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#231F20").ss(8).p("AAACyIAAlj");
	this.shape_82.setTransform(301.1,476.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#231F20").s().p("AghA7QgYgPgHgbQgIgZAPgZQAOgYAbgHQAZgHAZAOQAYAOAHAbQAIAZgOAZQgOAYgcAHQgJADgIAAQgRAAgQgJgAgMgxQgVAGgLASQgKATAFATQAGAVASALQAUALASgGQAVgFAKgTQAMgTgGgTQgGgVgSgLQgMgHgNAAQgGAAgHACg");
	this.shape_83.setTransform(222,438.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgcA0QgWgNgGgYQgHgWAMgWQANgVAYgHQAWgGAVAMQAWANAHAYQAGAWgMAWQgNAVgYAHQgIACgHAAQgOAAgOgIg");
	this.shape_84.setTransform(222,438.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#231F20").s().p("AhIAAQABg4gJgoIBCBNIBhASQgmALguAeQgrAagmAfQAIgwACgxg");
	this.shape_85.setTransform(206.7,469.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#231F20").ss(8).p("AhXCaICwkz");
	this.shape_86.setTransform(213.2,453.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#231F20").s().p("AgQBCQgbgIgPgZQgOgYAIgZQAHgbAYgOQAZgOAZAGQAbAIAOAZQAPAYgIAZQgHAbgYAPQgRAJgRAAQgHAAgJgCgAgZgsQgSALgGAVQgGATALASQALAUAVAFQATAFATgLQASgKAGgVQAGgTgLgSQgLgTgVgGQgHgCgGAAQgMAAgNAHg");
	this.shape_87.setTransform(164,380.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgOA6QgYgHgNgVQgMgWAGgWQAHgYAVgMQAWgNAWAGQAYAHANAVQAMAWgGAWQgHAYgVAMQgPAJgPAAQgGAAgIgCg");
	this.shape_88.setTransform(164,380.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#231F20").s().p("AgnADQAegvALgnIASBiIBNBBQgogHg5ABQgwABgwAJQAfgnAagqg");
	this.shape_89.setTransform(132.8,395.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#231F20").ss(8).p("AiZBYIEziw");
	this.shape_90.setTransform(148.9,389);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#231F20").s().p("AgvAwQgUgUAAgcQAAgbAUgUQAUgUAbAAQAcAAAUAUQAUAUAAAbQAAAcgUAUQgUAUgcAAQgbAAgUgUgAgjgjQgQAPAAAUQAAAVAQAPQAPAQAUAAQAVAAAPgQQAQgPAAgVQAAgUgQgPQgPgQgVAAQgUAAgPAQg");
	this.shape_91.setTransform(142.8,301.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgpAqQgSgRAAgZQAAgXASgSQARgSAYAAQAYAAASASQASASAAAXQAAAZgSARQgSASgYAAQgXAAgSgSg");
	this.shape_92.setTransform(142.8,301.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#231F20").s().p("AAEApQgqgYgugRQAvgQApgYQAygbAfgbIgjBeIAjBfQgfgbgygbg");
	this.shape_93.setTransform(104,301.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#231F20").ss(8).p("AixAAIFjAA");
	this.shape_94.setTransform(125.3,301.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#231F20").s().p("AghA7QgYgOgHgcQgIgZAOgZQAPgYAbgHQAZgIAZAPQAYAOAHAbQAIAZgPAZQgOAYgbAHQgJADgIAAQgQAAgRgJgAgMgxQgVAGgLASQgLAUAGASQAGAVASAKQATAMATgGQAVgGALgSQALgTgGgTQgGgVgSgLQgNgHgNAAQgFAAgHACg");
	this.shape_95.setTransform(164,222);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgdA0QgVgNgHgYQgGgWAMgVQANgWAYgGQAWgHAWAMQAVANAHAYQAGAWgMAVQgNAWgYAHQgIACgHAAQgOAAgPgIg");
	this.shape_96.setTransform(164,222);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#231F20").s().p("AgngBQgagrgfgmQAwAIAwACQA5ABAogJIhNBCIgSBhQgLgmgegug");
	this.shape_97.setTransform(132.8,206.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#231F20").ss(8).p("AiZhXIEzCw");
	this.shape_98.setTransform(148.9,213.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#231F20").s().p("AgQBBQgbgHgOgYQgPgZAIgZQAHgbAYgPQAZgOAZAIQAcAHAOAYQAOAZgIAZQgHAbgYAOQgRAKgRAAQgHAAgJgDgAgZgsQgSALgGAVQgFATAKATQALASAVAGQATAGATgLQASgLAGgVQAGgTgMgTQgKgSgVgGQgHgCgGAAQgMAAgNAHg");
	this.shape_99.setTransform(222,164);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgOA6QgYgHgNgVQgMgWAHgWQAGgYAWgNQAVgMAWAGQAYAHANAVQAMAWgGAWQgHAYgWANQgOAIgPAAQgGAAgIgCg");
	this.shape_100.setTransform(222,164);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#231F20").s().p("AhIAAQgCgwgIgwQAmAfArAaQAuAeAmALIhhASIhCBNQAJgogBg5g");
	this.shape_101.setTransform(206.7,132.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#231F20").ss(8).p("AhXiZICwEz");
	this.shape_102.setTransform(213.2,148.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#231F20").s().p("AgvAwQgUgUAAgcQAAgbAUgUQAUgUAbAAQAcAAAUAUQAUAUAAAbQAAAcgUAUQgUAUgcAAQgbAAgUgUgAgjgjQgQAPAAAUQAAAVAQAPQAPAQAUAAQAVAAAPgQQAQgPAAgVQAAgUgQgPQgPgQgVAAQgUAAgPAQg");
	this.shape_103.setTransform(301.1,142.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgpAqQgSgSAAgYQAAgYASgRQASgSAXAAQAZAAARASQASASAAAXQAAAYgSASQgRASgZAAQgXAAgSgSg");
	this.shape_104.setTransform(301.1,142.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#231F20").s().p("AAAAyIheAjQAbgfAbgyQAYgpAQgvQARAuAYAqQAbAyAbAfg");
	this.shape_105.setTransform(301.1,104);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#231F20").ss(8).p("AAAixIAAFj");
	this.shape_106.setTransform(301.1,125.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#231F20").s().p("AggA6QgZgOgIgbQgGgZAOgZQAOgYAbgHQAZgIAYAOQAZAPAIAbQAGAZgNAZQgPAYgbAHQgJADgIAAQgQAAgQgKgAgMgxQgVAGgLASQgKATAFATQAGAVATALQASALATgGQAVgGAKgSQALgTgFgTQgFgVgUgLQgMgHgNAAQgFAAgHACg");
	this.shape_107.setTransform(380.2,164);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgdA0QgVgNgHgYQgGgWANgWQAMgVAYgHQAWgGAWAMQAVANAHAYQAGAWgNAWQgMAVgYAHQgIACgHAAQgOAAgPgIg");
	this.shape_108.setTransform(380.2,164);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#231F20").s().p("AAPAUIhigSQAngLAvgeQAqgaAngfQgJAwgBAwQgBA5AHAog");
	this.shape_109.setTransform(395.5,132.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#231F20").ss(8).p("ABYiZIiwEz");
	this.shape_110.setTransform(389,148.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#F6921E").ss(8).p("EguZAAAQAApbDpooQDioVGbmbQGbmbIVjiQIojpJbAAQJcAAIoDpQIVDiGbGbQGbGbDiIVQDpIoAAJbQAAJcjpIoQjiIVmbGbQmbGboVDiQooDppcAAQpbAAoojpQoVjimbmbQmbmbjioVQjpooAApcg");
	this.shape_111.setTransform(301.1,301.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.rf(["#2483C5","rgba(36,131,197,0)"],[0,1],0,0,0,0,0,297.1).s().p("EgSDAqxQoVjimbmbQmbmbjioVQjpooAApcQAApbDpooQDioVGbmbQGbmbIVjiQIojpJbAAQJcAAIoDpQIVDiGbGbQGbGbDiIVQDpIoAAJbQAAJcjpIoQjiIVmbGbQmbGboVDiQooDppcAAQpbAAoojpg");
	this.shape_112.setTransform(301.1,301.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,602.2,602.2);


// stage content:
(lib.clock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;