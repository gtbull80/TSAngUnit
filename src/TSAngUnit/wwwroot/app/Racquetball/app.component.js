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
            _this.ballDX = 2;
            _this.ballDY = 4;
            _this.paddleWidth = 150;
            _this.stage = new createjs.Stage("gameBoard");
            _this.ball = new createjs.Shape();
            _this.ball.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 15);
            _this.bg = new createjs.Shape();
            _this.bg.graphics.beginFill("thistle").drawRect(0, 0, _this.stage.canvas.width, _this.stage.canvas.height);
            _this.paddle = new createjs.Shape();
            _this.paddle.graphics.beginFill("navy").drawRect(0, 0, _this.paddleWidth, 10);
            _this.paddle.x = 150;
            _this.paddle.y = 290;
            _this.paddle.regX = 150 / 2;
            _this.ball.regY = 15 / 2;
            _this.ball.x = 150;
            _this.ball.y = 150;
            _this.stage.addChild(_this.bg);
            _this.stage.addChild(_this.ball);
            _this.stage.addChild(_this.paddle);
            createjs.Ticker.framerate = 15;
            _this.listener = createjs.Ticker.on("tick", _this.handleTick);
            document.addEventListener("keydown", _this.movePaddle);
            _this.stage.on("keydown", _this.movePaddle);
            _this.stage.update();
        };
        this.handleTick = function (event) {
            // Bounce on a left or right edge.
            if (_this.ball.x + _this.ballDX > 300 - 15 || _this.ball.x + _this.ballDX < 15)
                _this.ballDX *= -1;
            // If ball hits the top, bounce it. 
            if (_this.ball.y + _this.ballDY < 15)
                _this.ballDY *= -1;
            else if (_this.ball.y > 300 - 7.5) {
                // If the ball hits the paddle, bounce it.
                if (_this.ball.x > (_this.paddle.x - 75) && _this.ball.x < _this.paddle.x + 75)
                    _this.ballDY *= -1;
                else {
                    createjs.Ticker.off("tick", _this.listener);
                    alert("Game over!");
                }
            }
            _this.ball.x += _this.ballDX;
            _this.ball.y += _this.ballDY;
            _this.stage.update();
            console.log(_this.ball.y);
        };
        this.handleTickOff = function (event) {
        };
        this.movePaddle = function (event) {
            switch (event.keyCode) {
                // Left arrow.
                case 37:
                    _this.paddle.x = _this.paddle.x - 20;
                    if (_this.paddle.x < 0)
                        _this.paddle.x = 0;
                    break;
                // Right arrow.
                case 39:
                    _this.paddle.x = _this.paddle.x + 20;
                    if (_this.paddle.x > 300)
                        _this.paddle.x = 300;
                    break;
            }
            _this.stage.update();
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.setupCanvas();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "game_app",
            templateUrl: "Racquetball/GameApp"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map