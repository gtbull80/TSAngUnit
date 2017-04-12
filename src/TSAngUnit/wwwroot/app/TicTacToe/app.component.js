/// <reference path="../../typings/globals/tictactoe/index.d.ts" />
/// <reference path="../../typings/globals/jqueryui/index.d.ts" />
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
            _this.exportRoot = new lib.TicTacToe();
            stage = new createjs.Stage("canvas");
            stage.addChild(_this.exportRoot);
            stage.enableMouseOver();
            //Registers the "tick" event listener.
            createjs.Ticker.setFPS(lib.properties.fps);
            createjs.Ticker.addEventListener("tick", stage);
        };
        this.resetData = function () {
            _this.xTurn = true;
            _this.placementMatrix = new Array();
            _this.placementMatrix[0] = new Array();
            _this.placementMatrix[1] = new Array();
            _this.placementMatrix[2] = new Array();
            _this.playCount = 0;
            _this.exportRoot.removeAllChildren();
        };
        this.resetBoard = function () {
            _this.resetData();
            _this.startButton = new lib.startGameButton();
            new createjs.ButtonHelper(_this.startButton, "0", "1", "2");
            _this.startButton.x = _this.startButton.y = 450;
            _this.startButton.mouseEnabled = true;
            _this.exportRoot.addChild(_this.startButton);
            _this.startButton.on("click", _this.drawBoard);
            stage.update();
        };
        this.drawBoard = function (event) {
            _this.exportRoot.removeAllChildren();
            var mainBoard = new lib.mainBoard();
            mainBoard.buttonTopLeft.on("click", _this.placeLetter);
            _this.btlId = mainBoard.buttonTopLeft.id;
            mainBoard.buttonTopMiddle.on("click", _this.placeLetter);
            _this.btmId = mainBoard.buttonTopMiddle.id;
            mainBoard.buttonTopRight.on("click", _this.placeLetter);
            _this.btrId = mainBoard.buttonTopRight.id;
            mainBoard.buttonMiddleLeft.on("click", _this.placeLetter);
            _this.bmlId = mainBoard.buttonMiddleLeft.id;
            mainBoard.buttonMiddleMiddle.on("click", _this.placeLetter);
            _this.bmmId = mainBoard.buttonMiddleMiddle.id;
            mainBoard.buttonMiddleRight.on("click", _this.placeLetter);
            _this.bmrId = mainBoard.buttonMiddleRight.id;
            mainBoard.buttonBottomLeft.on("click", _this.placeLetter);
            _this.bblId = mainBoard.buttonBottomLeft.id;
            mainBoard.buttonBottomMiddle.on("click", _this.placeLetter);
            _this.bbmId = mainBoard.buttonBottomMiddle.id;
            mainBoard.buttonBottomRight.on("click", _this.placeLetter);
            _this.bbrId = mainBoard.buttonBottomRight.id;
            _this.exportRoot.addChild(mainBoard);
        };
        this.placeLetter = function (event) {
            var placedObj;
            var bit;
            var target = event.target;
            target.visible = false;
            target.mouseEnabled = false;
            if (_this.xTurn) {
                placedObj = new lib.letterX();
                placedObj.timeline.addTween(createjs.Tween.get(placedObj).wait(20).call(_this.checkWin).wait(1));
                bit = 1;
            }
            else {
                placedObj = new lib.letterO();
                placedObj.timeline.addTween(createjs.Tween.get(placedObj).wait(9).call(_this.checkWin).wait(1));
                bit = 0;
            }
            placedObj.loop = false;
            switch (target.id) {
                case _this.btlId:
                    placedObj.x = 0;
                    placedObj.y = 0;
                    _this.placementMatrix[0][0] = bit;
                    break;
                case _this.btmId:
                    placedObj.x = 300;
                    placedObj.y = 0;
                    _this.placementMatrix[0][1] = bit;
                    break;
                case _this.btrId:
                    placedObj.x = 600;
                    placedObj.y = 0;
                    _this.placementMatrix[0][2] = bit;
                    break;
                case _this.bmlId:
                    placedObj.x = 0;
                    placedObj.y = 300;
                    _this.placementMatrix[1][0] = bit;
                    break;
                case _this.bmmId:
                    placedObj.x = 300;
                    placedObj.y = 300;
                    _this.placementMatrix[1][1] = bit;
                    break;
                case _this.bmrId:
                    placedObj.x = 600;
                    placedObj.y = 300;
                    _this.placementMatrix[1][2] = bit;
                    break;
                case _this.bblId:
                    placedObj.x = 0;
                    placedObj.y = 600;
                    _this.placementMatrix[2][0] = bit;
                    break;
                case _this.bbmId:
                    placedObj.x = 300;
                    placedObj.y = 600;
                    _this.placementMatrix[2][1] = bit;
                    break;
                case _this.bbrId:
                    placedObj.x = 600;
                    placedObj.y = 600;
                    _this.placementMatrix[2][2] = bit;
                    break;
                default:
                    break;
            }
            _this.xTurn = !_this.xTurn;
            _this.exportRoot.addChild(placedObj);
        };
        this.checkWin = function () {
            _this.playCount++;
            var result = 0;
            if (_this.placementMatrix[0][0] != null && _this.placementMatrix[0][0] == _this.placementMatrix[0][1] && _this.placementMatrix[0][1] == _this.placementMatrix[0][2])
                result = 1;
            else if (_this.placementMatrix[1][0] != null && _this.placementMatrix[1][0] == _this.placementMatrix[1][1] && _this.placementMatrix[1][1] == _this.placementMatrix[1][2])
                result = 2;
            else if (_this.placementMatrix[2][0] != null && _this.placementMatrix[2][0] == _this.placementMatrix[2][1] && _this.placementMatrix[2][1] == _this.placementMatrix[2][2])
                result = 3;
            else if (_this.placementMatrix[0][0] != null && _this.placementMatrix[0][0] == _this.placementMatrix[1][0] && _this.placementMatrix[1][0] == _this.placementMatrix[2][0])
                result = 4;
            else if (_this.placementMatrix[0][1] != null && _this.placementMatrix[0][1] == _this.placementMatrix[1][1] && _this.placementMatrix[1][1] == _this.placementMatrix[2][1])
                result = 5;
            else if (_this.placementMatrix[0][2] != null && _this.placementMatrix[0][2] == _this.placementMatrix[1][2] && _this.placementMatrix[1][2] == _this.placementMatrix[2][2])
                result = 6;
            else if (_this.placementMatrix[0][0] != null && _this.placementMatrix[0][0] == _this.placementMatrix[1][1] && _this.placementMatrix[1][1] == _this.placementMatrix[2][2])
                result = 7;
            else if (_this.placementMatrix[0][2] != null && _this.placementMatrix[0][2] == _this.placementMatrix[1][1] && _this.placementMatrix[1][1] == _this.placementMatrix[2][0])
                result = 8;
            if (result == 0 && _this.playCount == 9) {
                var catsGame = new lib.catsGame();
                _this.exportRoot.addChild(catsGame);
                catsGame.timeline.addTween(createjs.Tween.get(catsGame).wait(9).call(_this.newGameDialog).wait(1));
            }
            else if (result != 0) {
                var winStroke = void 0;
                switch (result) {
                    case 1:
                        winStroke = new lib.orthogonalWinStroke();
                        winStroke.y = 150;
                        winStroke.loop = false;
                        _this.exportRoot.addChild(winStroke);
                        break;
                    case 2:
                        winStroke = new lib.orthogonalWinStroke();
                        winStroke.y = 450;
                        winStroke.loop = false;
                        _this.exportRoot.addChild(winStroke);
                        break;
                    case 3:
                        winStroke = new lib.orthogonalWinStroke();
                        winStroke.y = 750;
                        winStroke.loop = false;
                        _this.exportRoot.addChild(winStroke);
                        break;
                    case 4:
                        winStroke = new lib.orthogonalWinStroke();
                        winStroke.rotation = 90;
                        winStroke.x = 150;
                        winStroke.loop = false;
                        _this.exportRoot.addChild(winStroke);
                        break;
                    case 5:
                        winStroke = new lib.orthogonalWinStroke();
                        winStroke.rotation = 90;
                        winStroke.x = 450;
                        winStroke.loop = false;
                        _this.exportRoot.addChild(winStroke);
                        break;
                    case 6:
                        winStroke = new lib.orthogonalWinStroke();
                        winStroke.rotation = 90;
                        winStroke.x = 750;
                        winStroke.loop = false;
                        _this.exportRoot.addChild(winStroke);
                        break;
                    case 7:
                        winStroke = new lib.diagonalWinStroke();
                        winStroke.loop = false;
                        _this.exportRoot.addChild(winStroke);
                        break;
                    case 8:
                        winStroke = new lib.diagonalWinStroke();
                        winStroke.loop = false;
                        var container = new createjs.Container();
                        container.regX = container.regY = container.x = container.y = 450;
                        container.addChild(winStroke);
                        container.rotation = 90;
                        _this.exportRoot.addChild(container);
                        break;
                }
                winStroke.timeline.addTween(createjs.Tween.get(winStroke).wait(9).call(_this.newGameDialog).wait(1));
            }
        };
        this.newGameDialog = function () {
            //let buttonOptions: JQueryUI.DialogButtonOptions[] = [
            //    {
            //        text: "Yes",
            //        click: this.drawBoard
            //    }
            //];
            //let dialogOptions: JQueryUI.DialogOptions = {
            //    resizable: false,
            //    height: "auto",
            //    width: 400,
            //    modal: true,
            //    buttons: buttonOptions
            //}
            var drawBoard = _this.drawBoard;
            var resetBoard = _this.resetBoard;
            var resetData = _this.resetData;
            $("#dialog-confirm").dialog({
                resizable: false,
                height: "auto",
                width: 400,
                modal: true,
                buttons: {
                    "Yes": function () {
                        resetData();
                        drawBoard(null);
                        $(this).dialog("close");
                    },
                    "No": function () {
                        resetBoard();
                        $(this).dialog("close");
                    }
                }
            });
        };
        this.handleTick = function (event) {
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.setupCanvas();
        this.resetBoard();
        //let letterO = new lib.letterOManual();
        //this.exportRoot.addChild(letterO);
        //this.startButton = new lib.startGameButton();
        //new createjs.ButtonHelper(this.startButton, "0", "1", "2");
        //this.startButton.x = this.startButton.y = 450;
        //this.startButton.mouseEnabled = true;
        //this.exportRoot.addChild(this.startButton);
        //this.startButton.on("click", function (event: createjs.Event) {
        //    letterO.gotoAndPlay("start");
        //});
        //stage.update();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "tictactoe_app",
            templateUrl: "TicTacToe/TicTacToeApp"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map