"use strict";
/// <reference path="../../typings/globals/jasmine/index.d.ts" />
var ComplexNumber_1 = require("./ComplexNumber");
describe('1st tests', function () {
    it('true is true', function () { return expect(true).toBe(true); });
    it("(1, 0) + (0, i) equals (1, i)", function () {
        var cn1 = new ComplexNumber_1.ComplexNumber(1, 0);
        var cn2 = new ComplexNumber_1.ComplexNumber(0, 1);
        var result = cn1.add(cn2);
        expect(result.real).toBe(1);
        expect(result.imaginary).toBe(1);
    });
    it("(1, 0) * (0, i) equals (0, i)", function () {
        var cn1 = new ComplexNumber_1.ComplexNumber(1, 0);
        var cn2 = new ComplexNumber_1.ComplexNumber(0, 1);
        var result = cn1.mult(cn2);
        expect(result.real).toBe(0);
        expect(result.imaginary).toBe(1);
    });
    it("(0, i) * (0, i) equals (-1, 0)", function () {
        var cn1 = new ComplexNumber_1.ComplexNumber(0, 1);
        var cn2 = new ComplexNumber_1.ComplexNumber(0, 1);
        var result = cn1.mult(cn2);
        expect(result.real).toBe(-1);
        expect(result.imaginary).toBe(0);
    });
});
//# sourceMappingURL=1st.spec.js.map