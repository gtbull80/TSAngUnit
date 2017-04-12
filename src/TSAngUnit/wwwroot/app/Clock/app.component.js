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
/// <reference path="../../typings/globals/easeljs/index.d.ts" />
/// <reference path="../../typings/globals/clock/index.d.ts" />
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        this.setupCanvas = function () {
            _this.exportRoot = new lib.clockObj();
            _this.exportRoot.x = _this.exportRoot.y = 0.5;
            stage = new createjs.Stage("canvas");
            stage.addChild(_this.exportRoot);
            stage.enableMouseOver();
            stage.update();
            //Registers the "tick" event listener.
            createjs.Ticker.setFPS(lib.properties.fps);
            createjs.Ticker.addEventListener("tick", _this.handleTick);
        };
        this.handleTick = function (event) {
            if (!_this.isPaused) {
                _this.exportRoot.secondHand.rotation += _this.rate * (event.delta / 1000 * (360 / 60));
                _this.exportRoot.minuteHand.rotation = _this.exportRoot.secondHand.rotation / 60;
                _this.exportRoot.hourHand.rotation = _this.exportRoot.minuteHand.rotation / 12;
                stage.update();
            }
        };
        this.togglePause = function () {
            _this.isPaused = !_this.isPaused;
            _this.message = _this.isPaused ? "Paused" : "Playing";
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.rate = 0;
        this.isPaused = false;
        this.message = "Playing";
        this.setupCanvas();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "clock_app",
            templateUrl: "Clock/ClockApp"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map