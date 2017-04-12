/// <reference path="../easeljs/index.d.ts" />

declare namespace TETRIS {
    interface properties {
        width: number,
        height: number,
        fps: number,
        color: string,
        opacity: number,
        manifest: Array<string>
    }

    interface mainBoard extends createjs.MovieClip {
        new (): mainBoard;
        buttonBottomRight: createjs.MovieClip;
        buttonBottomMiddle: createjs.MovieClip;
        buttonBottomLeft: createjs.MovieClip;
        buttonMiddleRight: createjs.MovieClip;
        buttonMiddleMiddle: createjs.MovieClip;
        buttonMiddleLeft: createjs.MovieClip;
        buttonTopRight: createjs.MovieClip;
        buttonTopMiddle: createjs.MovieClip;
        buttonTopLeft: createjs.MovieClip
    }

    interface zBlock extends createjs.MovieClip {
        new (): zBlock;
    }

    interface tBlock extends createjs.MovieClip {
        new (): tBlock;
    }

    interface sBlock extends createjs.MovieClip {
        new (): sBlock;
    }

    interface oBlock extends createjs.MovieClip {
        new (): oBlock;
    }

    interface lBlock extends createjs.MovieClip {
        new (): lBlock;
    }

    interface jBlock extends createjs.MovieClip {
        new (): jBlock;
    }

    interface iBlock extends createjs.MovieClip {
        new (): iBlock;
    }
}