/// <reference path="../../typings/globals/tetris/index.d.ts" />
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
var Tetromino_1 = require("./Tetromino");
var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        this.xOffset = 188;
        this.yOffset = 5;
        this.setupCanvas = function () {
            boardGrid = new Array();
            for (var i = 0; i < 10; i++) {
                boardGrid.push(new Array());
            }
            images = images || new Array();
            var loader = new createjs.LoadQueue(false);
            loader.addEventListener("fileload", _this.handleFileLoad);
            loader.addEventListener("complete", _this.handleComplete);
            loader.loadManifest(lib.properties.manifest);
            _this.gameContainer = new createjs.Container();
            _this.mainContainer = new createjs.Container();
            _this.curPieceContainer = new createjs.Container();
            _this.nextPieceContainer = new createjs.Container();
            _this.scoreContainer = new createjs.Container();
            stage = new createjs.Stage("canvas");
            stage.addChild(_this.mainContainer);
            _this.gameContainer.x = _this.xOffset;
            _this.gameContainer.y = _this.yOffset;
            _this.mainContainer.addChild(_this.gameContainer);
            _this.curPieceContainer.x = _this.xOffset;
            _this.curPieceContainer.y = _this.yOffset;
            _this.mainContainer.addChild(_this.curPieceContainer);
            _this.nextPieceContainer.x = _this.xOffset + 290;
            _this.nextPieceContainer.y = _this.yOffset + 540;
            _this.nextText = new createjs.Text("Next Piece", "30px Arial", "#ffffff");
            _this.nextText.x = 52;
            _this.nextText.y = -80;
            _this.nextPieceContainer.addChild(_this.nextText);
            _this.scoreContainer.x = _this.xOffset + 290;
            _this.scoreContainer.y = _this.yOffset + 200;
            _this.scoreLabel = new createjs.Text("Score", "20px Arial", "#ffffff");
            _this.scoreLabel.x = 52;
            _this.scoreLabel.y = -120;
            _this.scoreText = new createjs.Text("0", "20px Arial", "#ffffff");
            _this.scoreText.x = 52;
            _this.scoreText.y = -100;
            _this.linesLabel = new createjs.Text("Lines", "20px Arial", "#ffffff");
            _this.linesLabel.x = 52;
            _this.linesLabel.y = -70;
            _this.linesText = new createjs.Text("0", "20px Arial", "#ffffff");
            _this.linesText.x = 52;
            _this.linesText.y = -50;
            _this.levelLabel = new createjs.Text("Level", "20px Arial", "#ffffff");
            _this.levelLabel.x = 52;
            _this.levelLabel.y = -20;
            _this.levelText = new createjs.Text("0", "20px Arial", "#ffffff");
            _this.levelText.x = 52;
            _this.levelText.y = 0;
            _this.scoreContainer.addChild(_this.scoreLabel);
            _this.scoreContainer.addChild(_this.scoreText);
            _this.scoreContainer.addChild(_this.linesLabel);
            _this.scoreContainer.addChild(_this.linesText);
            _this.scoreContainer.addChild(_this.levelLabel);
            _this.scoreContainer.addChild(_this.levelText);
            _this.mainContainer.addChild(_this.nextPieceContainer);
            _this.mainContainer.addChild(_this.scoreContainer);
            var bitmap = new createjs.Bitmap("../../images/tetris_bg.png");
            _this.mainContainer.addChild(bitmap);
            stage.enableMouseOver();
            //Registers the "tick" event listener.
            createjs.Ticker.setFPS(lib.properties.fps);
            createjs.Ticker.addEventListener("tick", stage);
        };
        this.resetData = function () {
            _this.score = _this.lines = 0;
            _this.level = 1;
            _this.resetCountdown();
            for (var i = 0; i < 10; i++) {
                for (var j = 0; j < 22; j++) {
                    boardGrid[i][j] = 0;
                }
            }
        };
        this.startGame = function () {
            _this.resetData();
            _this.curPiece = Tetromino_1.Tetromino.random();
            _this.curBlocks = _this.getBlockClips(_this.curPiece);
            _this.updateBlockLocations(_this.curBlocks, _this.curPiece);
            _this.curPieceContainer.addChild(_this.curBlocks[0]);
            _this.curPieceContainer.addChild(_this.curBlocks[1]);
            _this.curPieceContainer.addChild(_this.curBlocks[2]);
            _this.curPieceContainer.addChild(_this.curBlocks[3]);
            _this.setNextPiece();
            //this.gameLoopListener = createjs.Ticker.addEventListener("tick", this.gameLoop);
            stage.update();
        };
        this.setNextPiece = function () {
            _this.nextPiece = Tetromino_1.Tetromino.random();
            _this.nextBlocks = _this.getBlockClips(_this.nextPiece);
            _this.updateBlockLocations(_this.nextBlocks, _this.nextPiece);
            _this.nextPieceContainer.addChild(_this.nextBlocks[0]);
            _this.nextPieceContainer.addChild(_this.nextBlocks[1]);
            _this.nextPieceContainer.addChild(_this.nextBlocks[2]);
            _this.nextPieceContainer.addChild(_this.nextBlocks[3]);
            stage.update();
        };
        this.setCurPiece = function () {
            _this.curBlocks = _this.nextBlocks;
            _this.curPieceContainer.addChild(_this.curBlocks[0]);
            _this.curPieceContainer.addChild(_this.curBlocks[1]);
            _this.curPieceContainer.addChild(_this.curBlocks[2]);
            _this.curPieceContainer.addChild(_this.curBlocks[3]);
            _this.curPiece = _this.nextPiece;
        };
        this.getBlockClips = function (tetromino) {
            var result = new Array();
            if (tetromino instanceof Tetromino_1.IBlock)
                for (var i = 0; i < 4; i++)
                    result.push(new lib.iBlock());
            else if (tetromino instanceof Tetromino_1.JBlock)
                for (var i = 0; i < 4; i++)
                    result.push(new lib.jBlock());
            else if (tetromino instanceof Tetromino_1.LBlock)
                for (var i = 0; i < 4; i++)
                    result.push(new lib.lBlock());
            else if (tetromino instanceof Tetromino_1.OBlock)
                for (var i = 0; i < 4; i++)
                    result.push(new lib.oBlock());
            else if (tetromino instanceof Tetromino_1.TBlock)
                for (var i = 0; i < 4; i++)
                    result.push(new lib.tBlock());
            else if (tetromino instanceof Tetromino_1.ZBlock)
                for (var i = 0; i < 4; i++)
                    result.push(new lib.zBlock());
            else
                for (var i = 0; i < 4; i++)
                    result.push(new lib.sBlock());
            return result;
        };
        this.updateBlockLocations = function (blocks, piece) {
            blocks[0].x = piece.vectors[0].x * 30;
            blocks[0].y = piece.vectors[0].y * 30;
            blocks[1].x = piece.vectors[1].x * 30;
            blocks[1].y = piece.vectors[1].y * 30;
            blocks[2].x = piece.vectors[2].x * 30;
            blocks[2].y = piece.vectors[2].y * 30;
            blocks[3].x = piece.vectors[3].x * 30;
            blocks[3].y = piece.vectors[3].y * 30;
        };
        this.resetCountdown = function () {
            switch (_this.level) {
                case 1:
                    _this.countDown = 120;
                    break;
                case 2:
                    _this.countDown = 110;
                    break;
                case 3:
                    _this.countDown = 100;
                    break;
                case 4:
                    _this.countDown = 80;
                    break;
                case 5:
                    _this.countDown = 60;
                    break;
                case 6:
                    _this.countDown = 40;
                    break;
                case 7:
                    _this.countDown = 24;
                    break;
                case 8:
                    _this.countDown = 20;
                    break;
                case 9:
                    _this.countDown = 12;
                    break;
                case 10:
                    _this.countDown = 6;
                    break;
                case 11:
                    _this.countDown = 3;
                    break;
                default:
                    _this.countDown = 1;
                    break;
            }
        };
        this.checkDown = function () {
            if (_this.curPiece.moveDown(1)) {
                _this.updateBlockLocations(_this.curBlocks, _this.curPiece);
            }
            else if (_this.checkLoss()) {
                //createjs.Ticker.removeEventListener("tick", this.gameLoopListener);
                alert("game over!");
            }
            else {
                _this.stampCurrentPiece();
                _this.setCurPiece();
                _this.setNextPiece();
                _this.checkLines();
                _this.score += 10;
                _this.scoreText.text = _this.score.toString();
            }
            _this.resetCountdown();
        };
        this.stampCurrentPiece = function () {
            for (var i = 0; i < 4; i++) {
                _this.gameContainer.addChild(_this.curBlocks[i]);
                boardGrid[_this.curPiece.vectors[i].x][_this.curPiece.vectors[i].y] = 1;
            }
        };
        this.checkLoss = function () {
            for (var i = 0; i < 4; i++)
                if (_this.curPiece.vectors[i].y == 1)
                    return true;
            return false;
        };
        this.checkLines = function () {
            var lineClips = new Array();
            var rows = new Array();
            for (var j = 0; j < 22; j++) {
                var curIsLine = true;
                for (var i = 0; i < 10; i++) {
                    if (boardGrid[i][j] == 0) {
                        curIsLine = false;
                        break;
                    }
                }
                if (curIsLine)
                    rows.push(j);
            }
            if (rows.length > 0) {
                var gameContainer_1 = _this.gameContainer;
                var _loop_1 = function(i) {
                    var partOfLine = _this.gameContainer.children.filter(function (value) {
                        if ((value.y / 30) == rows[i])
                            return true;
                        return false;
                    });
                    var _loop_2 = function(j) {
                        if (partOfLine[j] instanceof createjs.MovieClip) {
                            var clip_1 = partOfLine[j];
                            if (j == partOfLine.length - 1) {
                            }
                            clip_1.timeline.addTween(createjs.Tween.get(clip_1).wait(10).call(function (tweenObject) {
                                gameContainer_1.removeChild(clip_1);
                            }).wait(1));
                            clip_1.gotoAndPlay("start");
                        }
                    };
                    for (var j = 0; j < partOfLine.length; j++) {
                        _loop_2(j);
                    }
                };
                for (var i = 0; i < rows.length; i++) {
                    _loop_1(i);
                }
                _this.shiftShapesDown(rows);
                _this.lines += rows.length;
                _this.linesText.text = _this.lines.toString();
            }
        };
        this.shiftShapesDown = function (floors) {
            var objectsToShift = _this.gameContainer.children.filter(function (value) {
                if (value.y / 30 < floors[floors.length - 1])
                    return true;
                return false;
            });
            var gameContainer = _this.gameContainer;
            var _loop_3 = function(i) {
                var numRowsToShift = floors.filter(function (value) {
                    if (value < objectsToShift[i].y)
                        return true;
                    return false;
                });
                createjs.Tween.get(objectsToShift[i]).to({ y: objectsToShift[i].y + (30 * numRowsToShift.length) }, 200, createjs.Ease.getPowInOut(2));
            };
            for (var i = 0; i < objectsToShift.length; i++) {
                _loop_3(i);
            }
            console.log("before:");
            _this.printGrid();
            for (var i = 0; i < boardGrid.length; i++) {
                for (var j = 0; j < floors.length; j++) {
                    for (var curFloor = floors[j]; curFloor >= 0; curFloor--) {
                        if (curFloor == 0) {
                            boardGrid[i][curFloor] = 0;
                        }
                        else {
                            boardGrid[i][curFloor] = boardGrid[i][curFloor - 1];
                        }
                    }
                }
            }
            console.log("after:");
            _this.printGrid();
        };
        this.handleFileLoad = function (evt) {
            if (evt.item.type == "image") {
                images[evt.item.id] = evt.result;
            }
        };
        this.handleComplete = function (evt) {
            var queue = evt.target;
            var ssMetadata = lib.ssMetadata;
            for (var i = 0; i < ssMetadata.length; i++) {
                ss[ssMetadata[i].name] = new createjs.SpriteSheet({ "images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames });
            }
        };
        this.handleKeyPress = function (evt) {
            switch (evt.key) {
                case "j":
                    if (_this.curPiece.moveHorizontal(-1)) {
                        _this.updateBlockLocations(_this.curBlocks, _this.curPiece);
                    }
                    break;
                case "l":
                    if (_this.curPiece.moveHorizontal(1)) {
                        _this.updateBlockLocations(_this.curBlocks, _this.curPiece);
                    }
                    break;
                case "a":
                    if (_this.curPiece.ccwRot()) {
                        _this.updateBlockLocations(_this.curBlocks, _this.curPiece);
                    }
                    break;
                case "d":
                    if (_this.curPiece.cwRot()) {
                        _this.updateBlockLocations(_this.curBlocks, _this.curPiece);
                    }
                    break;
                case "k":
                    _this.checkDown();
                    break;
            }
        };
        this.gameLoop = function (event) {
            _this.countDown--;
            if (_this.countDown == 0) {
                _this.checkDown();
            }
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.setupCanvas();
    };
    AppComponent.prototype.printGrid = function () {
        for (var j = 0; j < boardGrid[0].length; j++) {
            var line = "";
            for (var i = 0; i < boardGrid.length; i++) {
                line += boardGrid[i][j] + " ";
            }
            console.log(line + "\n");
        }
    };
    __decorate([
        core_1.HostListener('window:keypress', ['$event']), 
        __metadata('design:type', Object)
    ], AppComponent.prototype, "handleKeyPress", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: "tetris",
            templateUrl: "Tetris/Start"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map