import {ComplexNumber} from "./ComplexNumber";
$(function () {
    let cn: ComplexNumber = new ComplexNumber(2, 4);
    alert("real: " + cn.real + "-----imaginary: " + cn.imaginary);
});