"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Vector_1 = require("./Vector");
var Tetromino = (function () {
    function Tetromino() {
        var _this = this;
        this.cwRot = function () {
            var vectors = new Array();
            var vectorsLocal = new Array();
            for (var i = 0; i < 4; i++) {
                var xPrime = _this.vectorsLocal[i].x * 0 + _this.vectorsLocal[i].y * -1;
                var yPrime = _this.vectorsLocal[i].x * 1 + _this.vectorsLocal[i].y * 0;
                var vPrimeLocal = new Vector_1.Vector(xPrime, yPrime);
                var vPrime = new Vector_1.Vector(xPrime + _this.dx, yPrime + _this.dy);
                vectorsLocal.push(vPrimeLocal);
                vectors.push(vPrime);
                if (_this.checkCollision(vectors[i]))
                    return false;
            }
            _this.vectorsLocal = vectorsLocal;
            _this.vectors = vectors;
            return true;
        };
        this.ccwRot = function () {
            var vectors = new Array();
            var vectorsLocal = new Array();
            for (var i = 0; i < 4; i++) {
                var xPrime = _this.vectorsLocal[i].x * 0 + _this.vectorsLocal[i].y * 1;
                var yPrime = _this.vectorsLocal[i].x * -1 + _this.vectorsLocal[i].y * 0;
                var vPrimeLocal = new Vector_1.Vector(xPrime, yPrime);
                var vPrime = new Vector_1.Vector(xPrime + _this.dx, yPrime + _this.dy);
                vectorsLocal.push(vPrimeLocal);
                vectors.push(vPrime);
                if (_this.checkCollision(vectors[i]))
                    return false;
            }
            _this.vectorsLocal = vectorsLocal;
            _this.vectors = vectors;
            return true;
        };
        this.moveHorizontal = function (dx) {
            var vectors = new Array();
            for (var i = 0; i < 4; i++) {
                var vPrime = new Vector_1.Vector(_this.vectorsLocal[i].x + _this.dx + dx, _this.vectorsLocal[i].y + _this.dy);
                vectors.push(vPrime);
                if (_this.checkCollision(vectors[i]))
                    return false;
            }
            _this.dx += dx;
            _this.vectors = vectors;
            return true;
        };
        this.moveDown = function (dy) {
            var vectors = new Array();
            for (var i = 0; i < 4; i++) {
                var vPrime = new Vector_1.Vector(_this.vectorsLocal[i].x + _this.dx, _this.vectorsLocal[i].y + _this.dy + dy);
                vectors.push(vPrime);
                if (_this.checkCollision(vectors[i]))
                    return false;
            }
            _this.dy += dy;
            _this.vectors = vectors;
            return true;
        };
        this.checkCollision = function (vector) {
            if (vector.x < 0 || vector.x > 9 || vector.y < 0 || vector.y > 21 || boardGrid[vector.x][vector.y] == 1)
                return true;
            return false;
        };
        this.vectors = new Array();
        this.vectorsLocal = new Array();
    }
    // Returns a random integer between min (included) and max (included)
    // Using Math.round() will give you a non-uniform distribution!
    Tetromino.getRandomIntInclusive = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    Tetromino.random = function () {
        switch (Tetromino.getRandomIntInclusive(0, 6)) {
            case 0:
                return new IBlock();
            case 1:
                return new LBlock();
            case 2:
                return new JBlock();
            case 3:
                return new OBlock();
            case 4:
                return new TBlock();
            case 5:
                return new ZBlock();
            default:
                return new SBlock();
        }
    };
    return Tetromino;
}());
exports.Tetromino = Tetromino;
var IBlock = (function (_super) {
    __extends(IBlock, _super);
    function IBlock() {
        _super.call(this);
        this.dx = 4;
        this.dy = 1;
        this.vectorsLocal.push(new Vector_1.Vector(0, 0));
        this.vectorsLocal.push(new Vector_1.Vector(-1, 0));
        this.vectorsLocal.push(new Vector_1.Vector(-2, 0));
        this.vectorsLocal.push(new Vector_1.Vector(1, 0));
        this.vectors.push(new Vector_1.Vector(this.vectorsLocal[0].x + this.dx, this.vectorsLocal[0].y + this.dy));
        this.vectors.push(new Vector_1.Vector(this.vectorsLocal[1].x + this.dx, this.vectorsLocal[1].y + this.dy));
        this.vectors.push(new Vector_1.Vector(this.vectorsLocal[2].x + this.dx, this.vectorsLocal[2].y + this.dy));
        this.vectors.push(new Vector_1.Vector(this.vectorsLocal[3].x + this.dx, this.vectorsLocal[3].y + this.dy));
    }
    return IBlock;
}(Tetromino));
exports.IBlock = IBlock;
var LBlock = (function (_super) {
    __extends(LBlock, _super);
    function LBlock() {
        _super.call(this);
        this.dx = 4;
        this.dy = 0;
        this.vectorsLocal.push(new Vector_1.Vector(0, 0));
        this.vectorsLocal.push(new Vector_1.Vector(-1, 0));
        this.vectorsLocal.push(new Vector_1.Vector(1, 0));
        this.vectorsLocal.push(new Vector_1.Vector(-1, 1));
        this.vectors.push(new Vector_1.Vector(this.vectorsLocal[0].x + this.dx, this.vectorsLocal[0].y + this.dy));
        this.vectors.push(new Vector_1.Vector(this.vectorsLocal[1].x + this.dx, this.vectorsLocal[1].y + this.dy));
        this.vectors.push(new Vector_1.Vector(this.vectorsLocal[2].x + this.dx, this.vectorsLocal[2].y + this.dy));
        this.vectors.push(new Vector_1.Vector(this.vectorsLocal[3].x + this.dx, this.vectorsLocal[3].y + this.dy));
    }
    return LBlock;
}(Tetromino));
exports.LBlock = LBlock;
var JBlock = (function (_super) {
    __extends(JBlock, _super);
    function JBlock() {
        _super.call(this);
        this.dx = 4;
        this.dy = 0;
        this.vectorsLocal.push(new Vector_1.Vector(0, 0));
        this.vectorsLocal.push(new Vector_1.Vector(-1, 0));
        this.vectorsLocal.push(new Vector_1.Vector(1, 0));
        this.vectorsLocal.push(new Vector_1.Vector(1, 1));
        this.vectors.push(new Vector_1.Vector(this.vectorsLocal[0].x + this.dx, this.vectorsLocal[0].y + this.dy));
        this.vectors.push(new Vector_1.Vector(this.vectorsLocal[1].x + this.dx, this.vectorsLocal[1].y + this.dy));
        this.vectors.push(new Vector_1.Vector(this.vectorsLocal[2].x + this.dx, this.vectorsLocal[2].y + this.dy));
        this.vectors.push(new Vector_1.Vector(this.vectorsLocal[3].x + this.dx, this.vectorsLocal[3].y + this.dy));
    }
    return JBlock;
}(Tetromino));
exports.JBlock = JBlock;
var OBlock = (function (_super) {
    __extends(OBlock, _super);
    function OBlock() {
        _super.call(this);
        this.dx = 4;
        this.dy = 1;
        this.vectorsLocal.push(new Vector_1.Vector(0, 0));
        this.vectorsLocal.push(new Vector_1.Vector(0, -1));
        this.vectorsLocal.push(new Vector_1.Vector(1, 0));
        this.vectorsLocal.push(new Vector_1.Vector(1, -1));
        this.vectors.push(new Vector_1.Vector(this.vectorsLocal[0].x + this.dx, this.vectorsLocal[0].y + this.dy));
        this.vectors.push(new Vector_1.Vector(this.vectorsLocal[1].x + this.dx, this.vectorsLocal[1].y + this.dy));
        this.vectors.push(new Vector_1.Vector(this.vectorsLocal[2].x + this.dx, this.vectorsLocal[2].y + this.dy));
        this.vectors.push(new Vector_1.Vector(this.vectorsLocal[3].x + this.dx, this.vectorsLocal[3].y + this.dy));
    }
    return OBlock;
}(Tetromino));
exports.OBlock = OBlock;
var TBlock = (function (_super) {
    __extends(TBlock, _super);
    function TBlock() {
        _super.call(this);
        this.dx = 4;
        this.dy = 0;
        this.vectorsLocal.push(new Vector_1.Vector(0, 0));
        this.vectorsLocal.push(new Vector_1.Vector(1, 0));
        this.vectorsLocal.push(new Vector_1.Vector(-1, 0));
        this.vectorsLocal.push(new Vector_1.Vector(0, 1));
        this.vectors.push(new Vector_1.Vector(this.vectorsLocal[0].x + this.dx, this.vectorsLocal[0].y + this.dy));
        this.vectors.push(new Vector_1.Vector(this.vectorsLocal[1].x + this.dx, this.vectorsLocal[1].y + this.dy));
        this.vectors.push(new Vector_1.Vector(this.vectorsLocal[2].x + this.dx, this.vectorsLocal[2].y + this.dy));
        this.vectors.push(new Vector_1.Vector(this.vectorsLocal[3].x + this.dx, this.vectorsLocal[3].y + this.dy));
    }
    return TBlock;
}(Tetromino));
exports.TBlock = TBlock;
var ZBlock = (function (_super) {
    __extends(ZBlock, _super);
    function ZBlock() {
        _super.call(this);
        this.dx = 4;
        this.dy = 1;
        this.vectorsLocal.push(new Vector_1.Vector(0, 0));
        this.vectorsLocal.push(new Vector_1.Vector(0, -1));
        this.vectorsLocal.push(new Vector_1.Vector(-1, -1));
        this.vectorsLocal.push(new Vector_1.Vector(1, 0));
        this.vectors.push(new Vector_1.Vector(this.vectorsLocal[0].x + this.dx, this.vectorsLocal[0].y + this.dy));
        this.vectors.push(new Vector_1.Vector(this.vectorsLocal[1].x + this.dx, this.vectorsLocal[1].y + this.dy));
        this.vectors.push(new Vector_1.Vector(this.vectorsLocal[2].x + this.dx, this.vectorsLocal[2].y + this.dy));
        this.vectors.push(new Vector_1.Vector(this.vectorsLocal[3].x + this.dx, this.vectorsLocal[3].y + this.dy));
    }
    return ZBlock;
}(Tetromino));
exports.ZBlock = ZBlock;
var SBlock = (function (_super) {
    __extends(SBlock, _super);
    function SBlock() {
        _super.call(this);
        this.dx = 4;
        this.dy = 1;
        this.vectorsLocal.push(new Vector_1.Vector(0, 0));
        this.vectorsLocal.push(new Vector_1.Vector(0, -1));
        this.vectorsLocal.push(new Vector_1.Vector(-1, 0));
        this.vectorsLocal.push(new Vector_1.Vector(1, -1));
        this.vectors.push(new Vector_1.Vector(this.vectorsLocal[0].x + this.dx, this.vectorsLocal[0].y + this.dy));
        this.vectors.push(new Vector_1.Vector(this.vectorsLocal[1].x + this.dx, this.vectorsLocal[1].y + this.dy));
        this.vectors.push(new Vector_1.Vector(this.vectorsLocal[2].x + this.dx, this.vectorsLocal[2].y + this.dy));
        this.vectors.push(new Vector_1.Vector(this.vectorsLocal[3].x + this.dx, this.vectorsLocal[3].y + this.dy));
    }
    return SBlock;
}(Tetromino));
exports.SBlock = SBlock;
//# sourceMappingURL=Tetromino.js.map