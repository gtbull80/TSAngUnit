/// <reference path="../easeljs/index.d.ts" />

interface properties {
    width: number;
    height: number;
    fps: number;
    color: string;
    opacity: number;
    manifest: Array<string>
}

interface clockObj extends createjs.DisplayObject {
    new (): any;
    secondHand: createjs.Shape;
    minuteHand: createjs.Shape;
    hourHand: createjs.Shape;
}