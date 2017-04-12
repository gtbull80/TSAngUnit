/// <reference path="../../typings/globals/easeljs/index.d.ts" />
/// <reference path="../../typings/globals/preloadjs/index.d.ts" />
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        this.setupCanvas = function () {
            _this.radius = 0;
            _this.rate = 0;
            _this.stage = new createjs.Stage("demoCanvas");
            _this.loadCircle();
            _this.loadStar();
            _this.drawStarSVG();
            createjs.Ticker.framerate = 15;
            createjs.Ticker.on("tick", _this.handleTick);
        };
        this.handleTick = function (event) {
            var currentTime = createjs.Ticker.getTime();
            _this.circle.x = _this.radius * Math.cos(currentTime * _this.rate) + 100;
            _this.circle.y = _this.radius * Math.sin(currentTime * _this.rate) + 100;
            if (_this.starImage != null) {
                _this.starImage.x = _this.radius * Math.cos(currentTime * _this.rate - 0.8) + 100;
                _this.starImage.y = _this.radius * Math.sin(currentTime * _this.rate - 0.8) + 100;
            }
            if (_this.starImageV != null) {
                _this.starImageV.x = _this.radius * Math.cos(currentTime * _this.rate - 0.4) + 150;
                _this.starImageV.y = _this.radius * Math.sin(currentTime * _this.rate - 0.4) + 150;
            }
            _this.stage.update(event);
            _this.stage.update();
        };
        this.loadStar = function () {
            var manifest = [
                { id: "starRaster", src: "../../images/star.png" }
            ];
            var preload = new createjs.LoadQueue();
            preload.on("fileload", _this.loadStarComplete);
            preload.loadManifest(manifest);
        };
        this.loadStarComplete = function (event) {
            switch (event.item.id) {
                case "starRaster":
                    _this.starImage = new createjs.Bitmap(event.result);
                    _this.starImage.scaleX = 0.2;
                    _this.starImage.scaleY = 0.2;
                    _this.stage.addChild(_this.starImage);
                    break;
                default:
                    break;
            }
        };
        this.loadCircle = function () {
            _this.circle = new createjs.Shape();
            _this.circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 10);
            _this.circle.x = 100;
            _this.circle.y = 100;
            _this.stage.addChild(_this.circle);
            _this.stage.update();
        };
        this.drawStarSVG = function () {
            _this.starImageV = new createjs.Shape();
            var g = _this.starImageV.graphics;
            g.setStrokeStyle(11).beginStroke("black");
            g.beginLinearGradientFill(["rgb(255, 242, 58)", "rgb(254, 220, 35)", "rgb(253, 198, 12)", "rgb(243, 144, 63)", "rgb(237, 104, 60)", "rgb(232, 62, 57)"], [0.00, 0.08, 0.28, 0.67, 0.89, 1.00], 10.1, 158.1, 289.5, 158.1);
            g.moveTo(185.0, 304.4);
            g.lineTo(112.8, 232.1);
            g.lineTo(12.3, 250.6);
            g.lineTo(58.8, 159.7);
            g.lineTo(10.1, 69.8);
            g.lineTo(111.0, 85.9);
            g.lineTo(181.4, 11.9);
            g.lineTo(197.3, 112.8);
            g.lineTo(289.5, 156.8);
            g.lineTo(198.4, 203.2);
            g.lineTo(185.0, 304.4);
            g.endStroke();
            g.endFill();
            _this.starImageV.scaleX = _this.starImageV.scaleY = 0.2;
            _this.stage.addChild(_this.starImageV);
            _this.stage.update();
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.setupCanvas();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "circle_app",
            templateUrl: "Circle/CircleApp"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map