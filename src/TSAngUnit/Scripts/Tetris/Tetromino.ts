import {Vector} from "./Vector";
declare let boardGrid: Array<Array<number>>;

export class Tetromino {
    public vectors: Array<Vector>;
    protected vectorsLocal: Array<Vector>;
    protected dx: number;
    protected dy: number;

    constructor() {
        this.vectors = new Array<Vector>();
        this.vectorsLocal = new Array<Vector>();
    }

    public cwRot = (): boolean => {
        let vectors = new Array<Vector>();
        let vectorsLocal = new Array<Vector>();

        for (let i = 0; i < 4; i++) {
            let xPrime = this.vectorsLocal[i].x * 0 + this.vectorsLocal[i].y * -1;
            let yPrime = this.vectorsLocal[i].x * 1 + this.vectorsLocal[i].y * 0;
            let vPrimeLocal = new Vector(xPrime, yPrime);
            let vPrime = new Vector(xPrime + this.dx, yPrime + this.dy);

            vectorsLocal.push(vPrimeLocal);
            vectors.push(vPrime);

            if (this.checkCollision(vectors[i])) return false;
        }

        this.vectorsLocal = vectorsLocal;
        this.vectors = vectors;
        return true;
    }

    public ccwRot = (): boolean => {
        let vectors = new Array<Vector>();
        let vectorsLocal = new Array<Vector>();

        for (let i = 0; i < 4; i++) {
            let xPrime = this.vectorsLocal[i].x * 0 + this.vectorsLocal[i].y * 1;
            let yPrime = this.vectorsLocal[i].x * -1 + this.vectorsLocal[i].y * 0;
            let vPrimeLocal = new Vector(xPrime, yPrime);
            let vPrime = new Vector(xPrime + this.dx, yPrime + this.dy);

            vectorsLocal.push(vPrimeLocal);
            vectors.push(vPrime);

            if (this.checkCollision(vectors[i])) return false;
        }

        this.vectorsLocal = vectorsLocal;
        this.vectors = vectors;
        return true;
    }

    public moveHorizontal = (dx: number): boolean => {
        let vectors = new Array<Vector>();

        for (let i = 0; i < 4; i++) {
            let vPrime = new Vector(this.vectorsLocal[i].x + this.dx + dx, this.vectorsLocal[i].y + this.dy);
            vectors.push(vPrime);

            if (this.checkCollision(vectors[i])) return false;
        }

        this.dx += dx;
        this.vectors = vectors;
        return true;
    }

    public moveDown = (dy: number): boolean => {
        let vectors = new Array<Vector>();

        for (let i = 0; i < 4; i++) {
            let vPrime = new Vector(this.vectorsLocal[i].x + this.dx, this.vectorsLocal[i].y + this.dy + dy);
            vectors.push(vPrime);

            if (this.checkCollision(vectors[i])) return false;
        }

        this.dy += dy;
        this.vectors = vectors;
        return true;
    }

    private checkCollision = (vector: Vector): boolean => {
        if (vector.x < 0 || vector.x > 9 || vector.y < 0 || vector.y > 21 || boardGrid[vector.x][vector.y] == 1) return true;
        return false;
    }

    static random = (): Tetromino => {
        switch (Tetromino.getRandomIntInclusive(0, 6)) {
            case 0:
                return new IBlock();
            case 1:
                return new LBlock();
            case 2:
                return new JBlock();
            case 3:
                return new OBlock();
            case 4:
                return new TBlock();
            case 5:
                return new ZBlock();
            default:
                return new SBlock();
        }
    }

    // Returns a random integer between min (included) and max (included)
    // Using Math.round() will give you a non-uniform distribution!
    private static getRandomIntInclusive(min:number, max:number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

export class IBlock extends Tetromino {
    constructor() {
        super();
        this.dx = 4;
        this.dy = 1;
        this.vectorsLocal.push(new Vector(0, 0));
        this.vectorsLocal.push(new Vector(-1, 0));
        this.vectorsLocal.push(new Vector(-2, 0));
        this.vectorsLocal.push(new Vector(1, 0));
        this.vectors.push(new Vector(this.vectorsLocal[0].x + this.dx, this.vectorsLocal[0].y + this.dy));
        this.vectors.push(new Vector(this.vectorsLocal[1].x + this.dx, this.vectorsLocal[1].y + this.dy));
        this.vectors.push(new Vector(this.vectorsLocal[2].x + this.dx, this.vectorsLocal[2].y + this.dy));
        this.vectors.push(new Vector(this.vectorsLocal[3].x + this.dx, this.vectorsLocal[3].y + this.dy));
    }
}

export class LBlock extends Tetromino {
    constructor() {
        super();
        this.dx = 4;
        this.dy = 0;
        this.vectorsLocal.push(new Vector(0, 0));
        this.vectorsLocal.push(new Vector(-1, 0));
        this.vectorsLocal.push(new Vector(1, 0));
        this.vectorsLocal.push(new Vector(-1, 1));
        this.vectors.push(new Vector(this.vectorsLocal[0].x + this.dx, this.vectorsLocal[0].y + this.dy));
        this.vectors.push(new Vector(this.vectorsLocal[1].x + this.dx, this.vectorsLocal[1].y + this.dy));
        this.vectors.push(new Vector(this.vectorsLocal[2].x + this.dx, this.vectorsLocal[2].y + this.dy));
        this.vectors.push(new Vector(this.vectorsLocal[3].x + this.dx, this.vectorsLocal[3].y + this.dy));
    }
}

export class JBlock extends Tetromino {
    constructor() {
        super();
        this.dx = 4;
        this.dy = 0;
        this.vectorsLocal.push(new Vector(0, 0));
        this.vectorsLocal.push(new Vector(-1, 0));
        this.vectorsLocal.push(new Vector(1, 0));
        this.vectorsLocal.push(new Vector(1, 1));
        this.vectors.push(new Vector(this.vectorsLocal[0].x + this.dx, this.vectorsLocal[0].y + this.dy));
        this.vectors.push(new Vector(this.vectorsLocal[1].x + this.dx, this.vectorsLocal[1].y + this.dy));
        this.vectors.push(new Vector(this.vectorsLocal[2].x + this.dx, this.vectorsLocal[2].y + this.dy));
        this.vectors.push(new Vector(this.vectorsLocal[3].x + this.dx, this.vectorsLocal[3].y + this.dy));
    }
}

export class OBlock extends Tetromino {
    constructor() {
        super();
        this.dx = 4;
        this.dy = 1;
        this.vectorsLocal.push(new Vector(0, 0));
        this.vectorsLocal.push(new Vector(0, -1));
        this.vectorsLocal.push(new Vector(1, 0));
        this.vectorsLocal.push(new Vector(1, -1));
        this.vectors.push(new Vector(this.vectorsLocal[0].x + this.dx, this.vectorsLocal[0].y + this.dy));
        this.vectors.push(new Vector(this.vectorsLocal[1].x + this.dx, this.vectorsLocal[1].y + this.dy));
        this.vectors.push(new Vector(this.vectorsLocal[2].x + this.dx, this.vectorsLocal[2].y + this.dy));
        this.vectors.push(new Vector(this.vectorsLocal[3].x + this.dx, this.vectorsLocal[3].y + this.dy));
    }
}

export class TBlock extends Tetromino {
    constructor() {
        super();
        this.dx = 4;
        this.dy = 0;
        this.vectorsLocal.push(new Vector(0, 0));
        this.vectorsLocal.push(new Vector(1, 0));
        this.vectorsLocal.push(new Vector(-1, 0));
        this.vectorsLocal.push(new Vector(0, 1));
        this.vectors.push(new Vector(this.vectorsLocal[0].x + this.dx, this.vectorsLocal[0].y + this.dy));
        this.vectors.push(new Vector(this.vectorsLocal[1].x + this.dx, this.vectorsLocal[1].y + this.dy));
        this.vectors.push(new Vector(this.vectorsLocal[2].x + this.dx, this.vectorsLocal[2].y + this.dy));
        this.vectors.push(new Vector(this.vectorsLocal[3].x + this.dx, this.vectorsLocal[3].y + this.dy));
    }
}

export class ZBlock extends Tetromino {
    constructor() {
        super();
        this.dx = 4;
        this.dy = 1;
        this.vectorsLocal.push(new Vector(0, 0));
        this.vectorsLocal.push(new Vector(0, -1));
        this.vectorsLocal.push(new Vector(-1, -1));
        this.vectorsLocal.push(new Vector(1, 0));
        this.vectors.push(new Vector(this.vectorsLocal[0].x + this.dx, this.vectorsLocal[0].y + this.dy));
        this.vectors.push(new Vector(this.vectorsLocal[1].x + this.dx, this.vectorsLocal[1].y + this.dy));
        this.vectors.push(new Vector(this.vectorsLocal[2].x + this.dx, this.vectorsLocal[2].y + this.dy));
        this.vectors.push(new Vector(this.vectorsLocal[3].x + this.dx, this.vectorsLocal[3].y + this.dy));
    }
}

export class SBlock extends Tetromino {
    constructor() {
        super();
        this.dx = 4;
        this.dy = 1;
        this.vectorsLocal.push(new Vector(0, 0));
        this.vectorsLocal.push(new Vector(0, -1));
        this.vectorsLocal.push(new Vector(-1, 0));
        this.vectorsLocal.push(new Vector(1, -1));
        this.vectors.push(new Vector(this.vectorsLocal[0].x + this.dx, this.vectorsLocal[0].y + this.dy));
        this.vectors.push(new Vector(this.vectorsLocal[1].x + this.dx, this.vectorsLocal[1].y + this.dy));
        this.vectors.push(new Vector(this.vectorsLocal[2].x + this.dx, this.vectorsLocal[2].y + this.dy));
        this.vectors.push(new Vector(this.vectorsLocal[3].x + this.dx, this.vectorsLocal[3].y + this.dy));
    }
}