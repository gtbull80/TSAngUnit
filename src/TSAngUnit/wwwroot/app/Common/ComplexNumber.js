"use strict";
var ComplexNumber = (function () {
    function ComplexNumber(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    ComplexNumber.prototype.add = function (cn) {
        var result = new ComplexNumber(this.real, this.imaginary);
        result.real = this.real + cn.real;
        result.imaginary = this.imaginary + cn.imaginary;
        return result;
    };
    ComplexNumber.prototype.mult = function (cn) {
        var result = new ComplexNumber(this.real, this.imaginary);
        result.real = (this.real * cn.real) - (this.imaginary * cn.imaginary);
        result.imaginary = (this.real * cn.imaginary) + (this.imaginary * cn.real);
        return result;
    };
    return ComplexNumber;
}());
exports.ComplexNumber = ComplexNumber;
//# sourceMappingURL=ComplexNumber.js.map