/// <reference path="../../typings/globals/tetris/index.d.ts" />
/// <reference path="../../typings/globals/preloadjs/index.d.ts" />

import {Component, OnInit, HostListener} from "@angular/core";
import {Tetromino, IBlock, JBlock, LBlock, OBlock, TBlock, SBlock, ZBlock} from "./Tetromino";

declare let lib: {
    properties: TETRIS.properties,
    ssMetadata: Array<any>,
    iBlock: TETRIS.iBlock,
    jBlock: TETRIS.jBlock,
    lBlock: TETRIS.lBlock,
    oBlock: TETRIS.oBlock,
    sBlock: TETRIS.sBlock,
    tBlock: TETRIS.tBlock,
    zBlock: TETRIS.zBlock,
};
declare let stage: createjs.Stage;
declare let images: Array<any>;
declare let ss: Array<any>;
declare let boardGrid: Array<Array<number>>;

@Component({
    selector: "tetris",
    templateUrl: "Tetris/Start"
})

export class AppComponent implements OnInit {

    private mainContainer: createjs.Container;
    private xOffset = 188;
    private yOffset = 5;
    private score: number;
    private level: number;
    private lines: number;
    private gameLoopListener: Function;
    private curPiece: Tetromino;
    private nextPiece: Tetromino;
    private gameContainer: createjs.Container;
    private curPieceContainer: createjs.Container;
    private nextPieceContainer: createjs.Container;
    private scoreContainer: createjs.Container;
    private curBlocks: Array<createjs.MovieClip>;
    private nextBlocks: Array<createjs.MovieClip>;
    private countDown: number;
    private nextText: createjs.Text;
    private scoreLabel: createjs.Text;
    private scoreText: createjs.Text;
    private linesLabel: createjs.Text;
    private linesText: createjs.Text;
    private levelLabel: createjs.Text;
    private levelText: createjs.Text;

    constructor() {

    }

    ngOnInit(): void {
        this.setupCanvas();
    }

    private setupCanvas = (): void => {
        boardGrid = new Array<Array<number>>();
        for (let i = 0; i < 10; i++) {
            boardGrid.push(new Array<number>());
        }

        images = images || new Array<any>();
        let loader: createjs.LoadQueue = new createjs.LoadQueue(false);
        loader.addEventListener("fileload", this.handleFileLoad);
        loader.addEventListener("complete", this.handleComplete);
        loader.loadManifest(lib.properties.manifest);

        this.gameContainer = new createjs.Container();
        this.mainContainer = new createjs.Container();
        this.curPieceContainer = new createjs.Container();
        this.nextPieceContainer = new createjs.Container();
        this.scoreContainer = new createjs.Container();

        stage = new createjs.Stage("canvas");
        stage.addChild(this.mainContainer);

        this.gameContainer.x = this.xOffset;
        this.gameContainer.y = this.yOffset;
        this.mainContainer.addChild(this.gameContainer);

        this.curPieceContainer.x = this.xOffset;
        this.curPieceContainer.y = this.yOffset;
        this.mainContainer.addChild(this.curPieceContainer);

        this.nextPieceContainer.x = this.xOffset + 290;
        this.nextPieceContainer.y = this.yOffset + 540;
        this.nextText = new createjs.Text("Next Piece", "30px Arial", "#ffffff");
        this.nextText.x = 52;
        this.nextText.y = -80;
        this.nextPieceContainer.addChild(this.nextText);

        this.scoreContainer.x = this.xOffset + 290;
        this.scoreContainer.y = this.yOffset + 200;

        this.scoreLabel = new createjs.Text("Score", "20px Arial", "#ffffff");
        this.scoreLabel.x = 52;
        this.scoreLabel.y = -120;
        this.scoreText = new createjs.Text("0", "20px Arial", "#ffffff");
        this.scoreText.x = 52;
        this.scoreText.y = -100;
        this.linesLabel = new createjs.Text("Lines", "20px Arial", "#ffffff");
        this.linesLabel.x = 52;
        this.linesLabel.y = -70;
        this.linesText = new createjs.Text("0", "20px Arial", "#ffffff");
        this.linesText.x = 52;
        this.linesText.y = -50;
        this.levelLabel = new createjs.Text("Level", "20px Arial", "#ffffff");
        this.levelLabel.x = 52;
        this.levelLabel.y = -20;
        this.levelText = new createjs.Text("0", "20px Arial", "#ffffff");
        this.levelText.x = 52;
        this.levelText.y = 0;

        this.scoreContainer.addChild(this.scoreLabel);
        this.scoreContainer.addChild(this.scoreText);
        this.scoreContainer.addChild(this.linesLabel);
        this.scoreContainer.addChild(this.linesText);
        this.scoreContainer.addChild(this.levelLabel);
        this.scoreContainer.addChild(this.levelText);
        
        this.mainContainer.addChild(this.nextPieceContainer);
        this.mainContainer.addChild(this.scoreContainer);

        let bitmap: createjs.Bitmap = new createjs.Bitmap("../../images/tetris_bg.png");
        this.mainContainer.addChild(bitmap);

        stage.enableMouseOver();
        //Registers the "tick" event listener.
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    }

    private resetData = (): void => {
        this.score = this.lines = 0;
        this.level = 1;
        this.resetCountdown();
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 22; j++) {
                boardGrid[i][j] = 0;
            }
        }
    }

    private startGame = (): void => {
        this.resetData();

        this.curPiece = Tetromino.random();
        this.curBlocks = this.getBlockClips(this.curPiece);
        this.updateBlockLocations(this.curBlocks, this.curPiece);
        this.curPieceContainer.addChild(this.curBlocks[0]);
        this.curPieceContainer.addChild(this.curBlocks[1]);
        this.curPieceContainer.addChild(this.curBlocks[2]);
        this.curPieceContainer.addChild(this.curBlocks[3]);

        this.setNextPiece();

        //this.gameLoopListener = createjs.Ticker.addEventListener("tick", this.gameLoop);
        stage.update();
    }

    private setNextPiece = (): void => {
        this.nextPiece = Tetromino.random();
        this.nextBlocks = this.getBlockClips(this.nextPiece);

        this.updateBlockLocations(this.nextBlocks, this.nextPiece);
        this.nextPieceContainer.addChild(this.nextBlocks[0]);
        this.nextPieceContainer.addChild(this.nextBlocks[1]);
        this.nextPieceContainer.addChild(this.nextBlocks[2]);
        this.nextPieceContainer.addChild(this.nextBlocks[3]);

        stage.update();
    }

    private setCurPiece = (): void => {
        this.curBlocks = this.nextBlocks;
        this.curPieceContainer.addChild(this.curBlocks[0]);
        this.curPieceContainer.addChild(this.curBlocks[1]);
        this.curPieceContainer.addChild(this.curBlocks[2]);
        this.curPieceContainer.addChild(this.curBlocks[3]);

        this.curPiece = this.nextPiece;
    }

    private getBlockClips = (tetromino: Tetromino): Array<createjs.MovieClip> => {
        let result = new Array<createjs.MovieClip>();
        if (tetromino instanceof IBlock) for (let i = 0; i < 4; i++) result.push(new lib.iBlock());
        else if (tetromino instanceof JBlock) for (let i = 0; i < 4; i++) result.push(new lib.jBlock());
        else if (tetromino instanceof LBlock) for (let i = 0; i < 4; i++) result.push(new lib.lBlock());
        else if (tetromino instanceof OBlock) for (let i = 0; i < 4; i++) result.push(new lib.oBlock());
        else if (tetromino instanceof TBlock) for (let i = 0; i < 4; i++) result.push(new lib.tBlock());
        else if (tetromino instanceof ZBlock) for (let i = 0; i < 4; i++) result.push(new lib.zBlock());
        else for (let i = 0; i < 4; i++) result.push(new lib.sBlock());

        return result;
    }

    private updateBlockLocations = (blocks: Array<createjs.MovieClip>, piece: Tetromino) => {
        blocks[0].x = piece.vectors[0].x * 30;
        blocks[0].y = piece.vectors[0].y * 30;
        blocks[1].x = piece.vectors[1].x * 30;
        blocks[1].y = piece.vectors[1].y * 30;
        blocks[2].x = piece.vectors[2].x * 30;
        blocks[2].y = piece.vectors[2].y * 30;
        blocks[3].x = piece.vectors[3].x * 30;
        blocks[3].y = piece.vectors[3].y * 30;
    }

    private resetCountdown = (): void => {
        switch (this.level) {
            case 1:
                this.countDown = 120;
                break;
            case 2:
                this.countDown = 110;
                break;
            case 3:
                this.countDown = 100;
                break;
            case 4:
                this.countDown = 80;
                break;
            case 5:
                this.countDown = 60;
                break;
            case 6:
                this.countDown = 40;
                break;
            case 7:
                this.countDown = 24;
                break;
            case 8:
                this.countDown = 20;
                break;
            case 9:
                this.countDown = 12;
                break;
            case 10:
                this.countDown = 6;
                break;
            case 11:
                this.countDown = 3;
                break;
            default:
                this.countDown = 1;
                break;
        }
    }

    private checkDown = (): void => {
        if (this.curPiece.moveDown(1)) {
            this.updateBlockLocations(this.curBlocks, this.curPiece);
        }
        else if (this.checkLoss()) {
            //createjs.Ticker.removeEventListener("tick", this.gameLoopListener);
            alert("game over!");
        }
        else {
            this.stampCurrentPiece();
            this.setCurPiece();
            this.setNextPiece();
            this.checkLines();
            this.score += 10;
            this.scoreText.text = this.score.toString();
        }
        this.resetCountdown();
    }

    private stampCurrentPiece = (): void => {
        for (let i = 0; i < 4; i++) {
            this.gameContainer.addChild(this.curBlocks[i]);
            boardGrid[this.curPiece.vectors[i].x][this.curPiece.vectors[i].y] = 1;
        }
    }

    private checkLoss = (): boolean => {
        for (let i = 0; i < 4; i++) if (this.curPiece.vectors[i].y == 1) return true;
        return false;
    }

    private checkLines = (): void => {
        let lineClips: Array<createjs.MovieClip> = new Array<createjs.MovieClip>();
        let rows: Array<number> = new Array<number>();
        for (let j = 0; j < 22; j++) {
            let curIsLine: boolean = true;
            for (let i = 0; i < 10; i++) {
                if (boardGrid[i][j] == 0) {
                    curIsLine = false;
                    break;
                }
            }
            if (curIsLine) rows.push(j);
        }

        if (rows.length > 0) {
            let gameContainer = this.gameContainer;
            for (let i = 0; i < rows.length; i++) {
                let partOfLine: Array<createjs.DisplayObject> = this.gameContainer.children.filter(function (value: createjs.DisplayObject) {
                    if ((value.y / 30) == rows[i]) return true;
                    return false;
                });

                for (let j = 0; j < partOfLine.length; j++) {
                    if (partOfLine[j] instanceof createjs.MovieClip) {
                        let clip: createjs.MovieClip = <createjs.MovieClip>partOfLine[j];
                        if (j == partOfLine.length - 1) {
                            //clip.timeline.addTween(createjs.Tween.get(clip).wait(10).call(this.shiftShapesDown, [clip.y]).wait(1));
                            //createjs.Tween.get(clip).call(this.shiftShapesDown, [clip.y]).wait(1);

                        }
                        clip.timeline.addTween(createjs.Tween.get(clip).wait(10).call(function (tweenObject: createjs.Tween) {
                            gameContainer.removeChild(clip);
                        }).wait(1));
                        clip.gotoAndPlay("start");
                    }
                }
            }
            this.shiftShapesDown(rows);
            this.lines += rows.length;
            this.linesText.text = this.lines.toString();
        }
    }

    private shiftShapesDown = (floors: Array<number>): void => {
        let objectsToShift: Array<createjs.DisplayObject> = this.gameContainer.children.filter(function (value: createjs.DisplayObject) {
            if (value.y / 30 < floors[floors.length - 1]) return true;
            return false;
        });

        let gameContainer = this.gameContainer;
        for (let i = 0; i < objectsToShift.length; i++) {
            let numRowsToShift = floors.filter(function (value: number) {
                if (value < objectsToShift[i].y) return true;
                return false;
            });

            createjs.Tween.get(objectsToShift[i]).to({ y: objectsToShift[i].y + (30 * numRowsToShift.length) }, 200, createjs.Ease.getPowInOut(2));
        }

        console.log("before:");
        this.printGrid();
        for (let i = 0; i < boardGrid.length; i++) {
            for (let j = 0; j < floors.length; j++) {
                for (let curFloor = floors[j]; curFloor >= 0; curFloor--) {
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
        this.printGrid();
    }

    private handleFileLoad = (evt: createjs.Event): void => {
        if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
    }

    private handleComplete = (evt: createjs.Event): void => {
        let queue = evt.target;
        let ssMetadata = lib.ssMetadata;
        for (let i = 0; i < ssMetadata.length; i++) {
            ss[ssMetadata[i].name] = new createjs.SpriteSheet({ "images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames })
        }
    }

    @HostListener('window:keypress', ['$event'])
    private handleKeyPress = (evt: KeyboardEvent): void => {
        switch (evt.key) {
            case "j":
                if (this.curPiece.moveHorizontal(-1)) {
                    this.updateBlockLocations(this.curBlocks, this.curPiece);
                }
                break;
            case "l":
                if (this.curPiece.moveHorizontal(1)) {
                    this.updateBlockLocations(this.curBlocks, this.curPiece);
                }
                break;
            case "a":
                if (this.curPiece.ccwRot()) {
                    this.updateBlockLocations(this.curBlocks, this.curPiece);
                }
                break;
            case "d":
                if (this.curPiece.cwRot()) {
                    this.updateBlockLocations(this.curBlocks, this.curPiece);
                }
                break;
            case "k":
                this.checkDown();
                break;
        }
    }

    private gameLoop = (event: createjs.Event): void => {
        this.countDown--;
        if (this.countDown == 0) {
            this.checkDown();
        }
    }

    printGrid() {
        for (let j = 0; j < boardGrid[0].length; j++) {
            let line: string = "";
            for (let i = 0; i < boardGrid.length; i++) {
                line += boardGrid[i][j] + " ";
            }
            console.log(line + "\n");
        }
    }
}