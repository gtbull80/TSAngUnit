/// <reference path="../../typings/globals/easeljs/index.d.ts" />
/// <reference path="../../typings/globals/preloadjs/index.d.ts" />

import {Component, OnInit} from "@angular/core";

@Component({
    selector: "circle_app",
    templateUrl: "Circle/CircleApp"
})

export class AppComponent implements OnInit {

    private radius: number;
    private rate: number;
    private stage: createjs.Stage;
    private circle: createjs.Shape;
    private starImage: createjs.Bitmap;
    private starImageV: createjs.Shape;

    constructor() {

    }

    ngOnInit(): void {
        this.setupCanvas();
    }

    private setupCanvas = (): void => {
        this.radius = 0;
        this.rate = 0;
        this.stage = new createjs.Stage("demoCanvas");

        this.loadCircle();
        this.loadStar();
        this.drawStarSVG();

        createjs.Ticker.framerate = 15;
        createjs.Ticker.on("tick", this.handleTick);

    }

    private handleTick = (event: createjs.Event): void => {
        let currentTime: number = createjs.Ticker.getTime();
        this.circle.x = this.radius * Math.cos(currentTime * this.rate) + 100;
        this.circle.y = this.radius * Math.sin(currentTime * this.rate) + 100;

        if (this.starImage != null) {
            this.starImage.x = this.radius * Math.cos(currentTime * this.rate - 0.8) + 100;
            this.starImage.y = this.radius * Math.sin(currentTime * this.rate - 0.8) + 100;
        }
        if (this.starImageV != null) {
            this.starImageV.x = this.radius * Math.cos(currentTime * this.rate - 0.4) + 150;
            this.starImageV.y = this.radius * Math.sin(currentTime * this.rate - 0.4) + 150;
        }
        this.stage.update(event);
        this.stage.update();
    }

    private loadStar = (): void => {
        let manifest: Array<Object> = [
            { id: "starRaster", src: "../../images/star.png" }
        ];
        let preload = new createjs.LoadQueue();
        preload.on("fileload", this.loadStarComplete);
        preload.loadManifest(manifest);
    }

    private loadStarComplete = (event: createjs.Event): void => {
        switch (event.item.id) {
            case "starRaster":
                this.starImage = new createjs.Bitmap(event.result);
                this.starImage.scaleX = 0.2;
                this.starImage.scaleY = 0.2;
                this.stage.addChild(this.starImage);
                break;
            default:
                break;
        }
    }

    private loadCircle = (): void => {
        this.circle = new createjs.Shape();
        this.circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 10);
        this.circle.x = 100;
        this.circle.y = 100;
        this.stage.addChild(this.circle);
        this.stage.update();
    }

    private drawStarSVG = (): void => {
        this.starImageV = new createjs.Shape();
        let g: createjs.Graphics = this.starImageV.graphics;

        g.setStrokeStyle(11).beginStroke("black");
        g.beginLinearGradientFill(
            ["rgb(255, 242, 58)", "rgb(254, 220, 35)", "rgb(253, 198, 12)", "rgb(243, 144, 63)", "rgb(237, 104, 60)", "rgb(232, 62, 57)"],
            [0.00, 0.08, 0.28, 0.67, 0.89, 1.00],
            10.1, 158.1, 289.5, 158.1);   
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

        this.starImageV.scaleX = this.starImageV.scaleY = 0.2;
        this.stage.addChild(this.starImageV);
        this.stage.update();
    }
}