/// <reference path="../../typings/globals/jasmine/index.d.ts" />
import {ComplexNumber} from "./ComplexNumber";


describe('1st tests', () => {
    it('true is true', () => expect(true).toBe(true));

    it("(1, 0) + (0, i) equals (1, i)", function () {
        let cn1: ComplexNumber = new ComplexNumber(1, 0);
        let cn2: ComplexNumber = new ComplexNumber(0, 1);
        let result: ComplexNumber = cn1.add(cn2);

        expect(result.real).toBe(1);
        expect(result.imaginary).toBe(1);
    });

    it("(1, 0) * (0, i) equals (0, i)", function () {
        let cn1: ComplexNumber = new ComplexNumber(1, 0);
        let cn2: ComplexNumber = new ComplexNumber(0, 1);
        let result: ComplexNumber = cn1.mult(cn2);

        expect(result.real).toBe(0);
        expect(result.imaginary).toBe(1);
    });

    it("(0, i) * (0, i) equals (-1, 0)", function () {
        let cn1: ComplexNumber = new ComplexNumber(0, 1);
        let cn2: ComplexNumber = new ComplexNumber(0, 1);
        let result: ComplexNumber = cn1.mult(cn2);

        expect(result.real).toBe(-1);
        expect(result.imaginary).toBe(0);
    });
});