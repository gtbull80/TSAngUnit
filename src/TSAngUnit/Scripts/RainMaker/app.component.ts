/// <reference path="../../typings/globals/bringtherain/index.d.ts" />

import {Component, OnInit} from "@angular/core";
declare let stage: createjs.Stage;
declare let lib: { properties: brt.properties, bringtherain: brt.bringtherain };

@Component({
    selector: "rain_app",
    templateUrl: "RainMaker/RainApp"
})

export class AppComponent implements OnInit {
    

    constructor() {

    }

    ngOnInit(): void {
        this.setupCanvas();
    }

    private setupCanvas = (): void => {
        let exportRoot = new lib.bringtherain();
        stage = new createjs.Stage("canvas");
        stage.addChild(exportRoot);
        stage.enableMouseOver();
        //Registers the "tick" event listener.
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);	
    }

    private handleTick = (event: createjs.Event): void => {


    }

}