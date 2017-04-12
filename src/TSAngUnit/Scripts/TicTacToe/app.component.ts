/// <reference path="../../typings/globals/tictactoe/index.d.ts" />
/// <reference path="../../typings/globals/jqueryui/index.d.ts" />

import {Component, OnInit} from "@angular/core";
declare let lib: {
    properties: TICTACTOE.properties,
    mainBoard: TICTACTOE.mainBoard,
    startGameButton: TICTACTOE.startGameButton,
    TicTacToe: TICTACTOE.TicTacToe,
    letterX: TICTACTOE.letterX,
    letterO: TICTACTOE.letterO,
    orthogonalWinStroke: TICTACTOE.orthogonalWinStroke,
    diagonalWinStroke: TICTACTOE.diagonalWinStroke,
    catsGame: TICTACTOE.catsGame
    letterOManual: TICTACTOE.letterOManual
};
declare let stage: createjs.Stage;

@Component({
    selector: "tictactoe_app",
    templateUrl: "TicTacToe/TicTacToeApp"
})

export class AppComponent implements OnInit {

    private exportRoot: createjs.Container;
    private startButton: createjs.MovieClip;
    private btlId: number;
    private btmId: number;
    private btrId: number;
    private bmlId: number;
    private bmmId: number;
    private bmrId: number;
    private bblId: number;
    private bbmId: number;
    private bbrId: number;
    private xTurn: boolean;
    private placementMatrix: Array<Array<number>>;
    private playCount: number;

    constructor() {

    }

    ngOnInit(): void {
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
    }

    private setupCanvas = (): void => {
        this.exportRoot = new lib.TicTacToe();
        stage = new createjs.Stage("canvas");
        stage.addChild(this.exportRoot);
        stage.enableMouseOver();
        //Registers the "tick" event listener.
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    }

    private resetData = (): void => {
        this.xTurn = true;
        this.placementMatrix = new Array<Array<number>>();
        this.placementMatrix[0] = new Array<number>();
        this.placementMatrix[1] = new Array<number>();
        this.placementMatrix[2] = new Array<number>();
        this.playCount = 0;
        this.exportRoot.removeAllChildren();
    }

    private resetBoard = (): void => {

        this.resetData();
        this.startButton = new lib.startGameButton();
        new createjs.ButtonHelper(this.startButton, "0", "1", "2");
        this.startButton.x = this.startButton.y = 450;
        this.startButton.mouseEnabled = true;
        this.exportRoot.addChild(this.startButton);

        this.startButton.on("click", this.drawBoard);
        stage.update();
    }

    private drawBoard = (event: createjs.Event): void => {
        this.exportRoot.removeAllChildren();
        let mainBoard = new lib.mainBoard();

        mainBoard.buttonTopLeft.on("click", this.placeLetter);
        this.btlId = mainBoard.buttonTopLeft.id;
        mainBoard.buttonTopMiddle.on("click", this.placeLetter);
        this.btmId = mainBoard.buttonTopMiddle.id;
        mainBoard.buttonTopRight.on("click", this.placeLetter);
        this.btrId = mainBoard.buttonTopRight.id;
        mainBoard.buttonMiddleLeft.on("click", this.placeLetter);
        this.bmlId = mainBoard.buttonMiddleLeft.id;
        mainBoard.buttonMiddleMiddle.on("click", this.placeLetter);
        this.bmmId = mainBoard.buttonMiddleMiddle.id;
        mainBoard.buttonMiddleRight.on("click", this.placeLetter);
        this.bmrId = mainBoard.buttonMiddleRight.id;
        mainBoard.buttonBottomLeft.on("click", this.placeLetter);
        this.bblId = mainBoard.buttonBottomLeft.id;
        mainBoard.buttonBottomMiddle.on("click", this.placeLetter);
        this.bbmId = mainBoard.buttonBottomMiddle.id;
        mainBoard.buttonBottomRight.on("click", this.placeLetter);
        this.bbrId = mainBoard.buttonBottomRight.id;

        this.exportRoot.addChild(mainBoard);
    }

    private placeLetter = (event: createjs.Event): void => {
        let placedObj: createjs.MovieClip;
        let bit: number;
        let target: createjs.MovieClip = event.target;
        target.visible = false;
        target.mouseEnabled = false;

        if (this.xTurn) {
            placedObj = new lib.letterX();
            placedObj.timeline.addTween(createjs.Tween.get(placedObj).wait(20).call(this.checkWin).wait(1));
            bit = 1;
        }
        else {
            placedObj = new lib.letterO();
            placedObj.timeline.addTween(createjs.Tween.get(placedObj).wait(9).call(this.checkWin).wait(1));
            bit = 0;
        }
        placedObj.loop = false;

        switch (target.id) {
            case this.btlId:
                placedObj.x = 0;
                placedObj.y = 0;
                this.placementMatrix[0][0] = bit;
                break;
            case this.btmId:
                placedObj.x = 300;
                placedObj.y = 0;
                this.placementMatrix[0][1] = bit;
                break;
            case this.btrId:
                placedObj.x = 600;
                placedObj.y = 0;
                this.placementMatrix[0][2] = bit;
                break;
            case this.bmlId:
                placedObj.x = 0;
                placedObj.y = 300;
                this.placementMatrix[1][0] = bit;
                break;
            case this.bmmId:
                placedObj.x = 300;
                placedObj.y = 300;
                this.placementMatrix[1][1] = bit;
                break;
            case this.bmrId:
                placedObj.x = 600;
                placedObj.y = 300;
                this.placementMatrix[1][2] = bit;
                break;
            case this.bblId:
                placedObj.x = 0;
                placedObj.y = 600;
                this.placementMatrix[2][0] = bit;
                break;
            case this.bbmId:
                placedObj.x = 300;
                placedObj.y = 600;
                this.placementMatrix[2][1] = bit;
                break;
            case this.bbrId:
                placedObj.x = 600;
                placedObj.y = 600;
                this.placementMatrix[2][2] = bit;
                break;
            default:
                break;
        }

        this.xTurn = !this.xTurn;
        this.exportRoot.addChild(placedObj);
    }

    private checkWin = (): void => {
        this.playCount++;
        let result: number = 0;

        if (this.placementMatrix[0][0] != null && this.placementMatrix[0][0] == this.placementMatrix[0][1] && this.placementMatrix[0][1] == this.placementMatrix[0][2]) result = 1;
        else if (this.placementMatrix[1][0] != null && this.placementMatrix[1][0] == this.placementMatrix[1][1] && this.placementMatrix[1][1] == this.placementMatrix[1][2]) result = 2;
        else if (this.placementMatrix[2][0] != null && this.placementMatrix[2][0] == this.placementMatrix[2][1] && this.placementMatrix[2][1] == this.placementMatrix[2][2]) result = 3;
        else if (this.placementMatrix[0][0] != null && this.placementMatrix[0][0] == this.placementMatrix[1][0] && this.placementMatrix[1][0] == this.placementMatrix[2][0]) result = 4;
        else if (this.placementMatrix[0][1] != null && this.placementMatrix[0][1] == this.placementMatrix[1][1] && this.placementMatrix[1][1] == this.placementMatrix[2][1]) result = 5;
        else if (this.placementMatrix[0][2] != null && this.placementMatrix[0][2] == this.placementMatrix[1][2] && this.placementMatrix[1][2] == this.placementMatrix[2][2]) result = 6;
        else if (this.placementMatrix[0][0] != null && this.placementMatrix[0][0] == this.placementMatrix[1][1] && this.placementMatrix[1][1] == this.placementMatrix[2][2]) result = 7;
        else if (this.placementMatrix[0][2] != null && this.placementMatrix[0][2] == this.placementMatrix[1][1] && this.placementMatrix[1][1] == this.placementMatrix[2][0]) result = 8;

        if (result == 0 && this.playCount == 9) {
            let catsGame = new lib.catsGame();
            this.exportRoot.addChild(catsGame);
            catsGame.timeline.addTween(createjs.Tween.get(catsGame).wait(9).call(this.newGameDialog).wait(1));
        }
        else if (result != 0) {
            let winStroke: createjs.MovieClip;
            switch (result) {
                case 1:
                    winStroke = new lib.orthogonalWinStroke();
                    winStroke.y = 150;
                    winStroke.loop = false;
                    this.exportRoot.addChild(winStroke);
                    break;
                case 2:
                    winStroke = new lib.orthogonalWinStroke();
                    winStroke.y = 450;
                    winStroke.loop = false;
                    this.exportRoot.addChild(winStroke);
                    break;
                case 3:
                    winStroke = new lib.orthogonalWinStroke();
                    winStroke.y = 750;
                    winStroke.loop = false;
                    this.exportRoot.addChild(winStroke);
                    break;
                case 4:
                    winStroke = new lib.orthogonalWinStroke();
                    winStroke.rotation = 90;
                    winStroke.x = 150;
                    winStroke.loop = false;
                    this.exportRoot.addChild(winStroke);
                    break;
                case 5:
                    winStroke = new lib.orthogonalWinStroke();
                    winStroke.rotation = 90;
                    winStroke.x = 450;
                    winStroke.loop = false;
                    this.exportRoot.addChild(winStroke);
                    break;
                case 6:
                    winStroke = new lib.orthogonalWinStroke();
                    winStroke.rotation = 90;
                    winStroke.x = 750;
                    winStroke.loop = false;
                    this.exportRoot.addChild(winStroke);
                    break;
                case 7:
                    winStroke = new lib.diagonalWinStroke();
                    winStroke.loop = false;
                    this.exportRoot.addChild(winStroke);
                    break;
                case 8:
                    winStroke = new lib.diagonalWinStroke();
                    winStroke.loop = false;
                    let container: createjs.Container = new createjs.Container();
                    container.regX = container.regY = container.x = container.y = 450;
                    container.addChild(winStroke);
                    container.rotation = 90;
                    this.exportRoot.addChild(container);
                    break;
            }

            winStroke.timeline.addTween(createjs.Tween.get(winStroke).wait(9).call(this.newGameDialog).wait(1));
        }
    }

    private newGameDialog = (): void => {
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
        let drawBoard = this.drawBoard;
        let resetBoard = this.resetBoard;
        let resetData = this.resetData;
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
    }

    private handleTick = (event: createjs.Event): void => {


    }

}