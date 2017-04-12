export class Vector {
    public x: number;
    public y: number;

    constructor(x?: number, y?: number) {
        if (x != null) this.x = x;
        if (y != null) this.y = y;
    }
}