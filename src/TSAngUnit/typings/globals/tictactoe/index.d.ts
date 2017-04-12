/// <reference path="../easeljs/index.d.ts" />

declare namespace TICTACTOE {
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

    interface startGameButton extends createjs.MovieClip {
        new (): startGameButton;
    }

    interface TicTacToe {
        new (): any;
    }

    interface letterX extends createjs.MovieClip {
        new (): letterX;
        frame_20(): void;
    }

    interface letterO extends createjs.MovieClip {
        new (): letterO;
        frame_9(): void;
    }

    interface orthogonalWinStroke extends createjs.MovieClip {
        new (): orthogonalWinStroke;
    }

    interface diagonalWinStroke extends createjs.MovieClip {
        new (): diagonalWinStroke;
    }

    interface catsGame extends createjs.MovieClip {
        new (): catsGame;
    }

    interface letterOManual extends createjs.MovieClip {
        new (): letterO;
        frame_9(): void;
    }
}