export class ComplexNumber {

    public real: number;
    public imaginary: number;

    constructor(real: number, imaginary: number) {
        this.real = real;
        this.imaginary = imaginary;
    }

    add(cn: ComplexNumber): ComplexNumber {
        let result: ComplexNumber = new ComplexNumber(this.real, this.imaginary);

        result.real = this.real + cn.real;
        result.imaginary = this.imaginary + cn.imaginary;

        return result;
    }

    mult(cn: ComplexNumber): ComplexNumber {
        let result: ComplexNumber = new ComplexNumber(this.real, this.imaginary);

        result.real = (this.real * cn.real) - (this.imaginary * cn.imaginary);
        result.imaginary = (this.real * cn.imaginary) + (this.imaginary * cn.real);

        return result;
    }
}