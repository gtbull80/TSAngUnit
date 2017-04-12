/// <reference path="../easeljs/index.d.ts" />

declare namespace brt {
    interface properties {
        width: number,
        height: number,
        fps: number,
        color: string,
        opacity: number,
        manifest: Array<string>
    }

    interface bringtherain {
        new (): any;
    }

}