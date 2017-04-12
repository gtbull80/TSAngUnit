/// <reference path="../../typings/globals/easeljs/index.d.ts" />
/// <reference path="../../typings/globals/clock/index.d.ts" />
import {Component, OnInit} from "@angular/core";
declare let stage: createjs.Stage;
declare let lib: { properties: properties, clockObj: clockObj };

@Component({
    selector: "clock_app",
    templateUrl: "Clock/ClockApp"
})

export class AppComponent implements OnInit {

    private exportRoot: clockObj;
    private rate: number;
    private isPaused: boolean;
    private message: string;

    constructor() {

    }

    ngOnInit(): void {
        this.rate = 0;
        this.isPaused = false;
        this.message = "Playing";
        this.setupCanvas();
    }

    private setupCanvas = (): void => {
        this.exportRoot = new lib.clockObj();
        this.exportRoot.x = this.exportRoot.y = 0.5;
        stage = new createjs.Stage("canvas");
        stage.addChild(this.exportRoot);
        stage.enableMouseOver();
        stage.update();
        //Registers the "tick" event listener.
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", this.handleTick);
    }

    private handleTick = (event: createjs.Event): void => {
        if (!this.isPaused) {
            this.exportRoot.secondHand.rotation += this.rate * (event.delta / 1000 * (360 / 60));
            this.exportRoot.minuteHand.rotation = this.exportRoot.secondHand.rotation / 60;
            this.exportRoot.hourHand.rotation = this.exportRoot.minuteHand.rotation / 12;
            stage.update();
        }
    }

    private togglePause = (): void => {
        this.isPaused = !this.isPaused;
        this.message = this.isPaused ? "Paused" : "Playing";
    }
}