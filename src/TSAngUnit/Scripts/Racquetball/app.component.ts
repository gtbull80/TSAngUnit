/// <reference path="../../typings/globals/easeljs/index.d.ts" />
/// <reference path="../../typings/globals/preloadjs/index.d.ts" />

import {Component, OnInit} from "@angular/core";

@Component({
    selector: "game_app",
    templateUrl: "Racquetball/GameApp"
})

export class AppComponent implements OnInit {

    private stage: createjs.Stage;
    private ball: createjs.Shape;
    private bg: createjs.Shape;
    private paddle: createjs.Shape;

    private ballDX: number;
    private ballDY: number;
    private paddleWidth: number;
    private listener: Function;

    constructor() {

    }

    ngOnInit(): void {
        this.setupCanvas();
    }

    private setupCanvas = (): void => {

        this.ballDX = 2;
        this.ballDY = 4;
        this.paddleWidth = 150;
        this.stage = new createjs.Stage("gameBoard");
        this.ball = new createjs.Shape();
        this.ball.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 15);
        this.bg = new createjs.Shape();
        this.bg.graphics.beginFill("thistle").drawRect(0, 0, (<HTMLCanvasElement>this.stage.canvas).width, (<HTMLCanvasElement>this.stage.canvas).height);
        this.paddle = new createjs.Shape();
        this.paddle.graphics.beginFill("navy").drawRect(0, 0, this.paddleWidth, 10);
        this.paddle.x = 150;
        this.paddle.y = 290;
        this.paddle.regX = 150 / 2;
        this.ball.regY = 15 / 2;
        this.ball.x = 150;
        this.ball.y = 150;


        this.stage.addChild(this.bg);
        this.stage.addChild(this.ball);
        this.stage.addChild(this.paddle);

        createjs.Ticker.framerate = 15;
        this.listener = createjs.Ticker.on("tick", this.handleTick);
        document.addEventListener("keydown", this.movePaddle);
        this.stage.on("keydown", this.movePaddle);

        this.stage.update();
    }

    private handleTick = (event: createjs.Event): void => {

        // Bounce on a left or right edge.
        if (this.ball.x + this.ballDX > 300 - 15 || this.ball.x + this.ballDX < 15) this.ballDX *= -1;

        // If ball hits the top, bounce it. 
        if (this.ball.y + this.ballDY < 15) this.ballDY *= -1;
        // If the ball hits the bottom, check see if it hits a paddle.
        else if (this.ball.y > 300 - 7.5) {
            // If the ball hits the paddle, bounce it.
            if (this.ball.x > (this.paddle.x - 75) && this.ball.x < this.paddle.x + 75) this.ballDY *= -1;
            // Otherwise the game is over.
            else {
                createjs.Ticker.off("tick", this.listener);
                alert("Game over!");
            }
        }

        this.ball.x += this.ballDX;
        this.ball.y += this.ballDY;

        this.stage.update();
        console.log(this.ball.y);
    }

    private handleTickOff = (event: createjs.Event): void => {

    }

    private movePaddle = (event: KeyboardEvent): void => {
        switch (event.keyCode) {
            // Left arrow.
            case 37:
                this.paddle.x = this.paddle.x - 20;
                if (this.paddle.x < 0) this.paddle.x = 0;
                break;

            // Right arrow.
            case 39:
                this.paddle.x = this.paddle.x + 20;
                if (this.paddle.x > 300) this.paddle.x = 300;
                break;
        }

        this.stage.update();
    }
}