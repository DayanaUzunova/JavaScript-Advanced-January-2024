import {assert} from "chai";
import { mathEnforcer } from "../04.Math-Enforcer/math.js";

describe("test addFive functionality", () => {
    it("test with invalid value", () => {
        assert.isUndefined(mathEnforcer.addFive("pesho"), "return value must be undefined");
        assert.isUndefined(mathEnforcer.addFive([]), "return value must be undefined");
        assert.isUndefined(mathEnforcer.addFive("5"), "return value must be undefined");
    });
    it("test with valid value", () => {
        assert.equal(mathEnforcer.addFive(-10), -5, "value is correct");
        assert.equal(mathEnforcer.addFive(-5), 0, "value is correct");
        assert.equal(mathEnforcer.addFive(0), 5, "value is correct");
        assert.equal(mathEnforcer.addFive(5), 10, "value is correct");
        assert.equal(mathEnforcer.addFive(5.5), 10.5, "return is correct");
        
    })
});

describe("test substractTen functionality", () => {
    it("test with invalid value", () => {
        assert.isUndefined(mathEnforcer.subtractTen("pesho"), "return value must be undefined");
        assert.isUndefined(mathEnforcer.subtractTen([]), "return value must be undefined");
        assert.isUndefined(mathEnforcer.subtractTen("10"), "return value must be undefined");
    });
    it ("test with valid value", ()=>{
        assert.equal(mathEnforcer.subtractTen(-10), -20, "result is correct");
        assert.equal(mathEnforcer.subtractTen(0), -10, "result is correct");
        assert.equal(mathEnforcer.subtractTen(10), 0, "result is correct");
        assert.equal(mathEnforcer.subtractTen(15), 5, "result is correct");
        assert.equal(mathEnforcer.subtractTen(50.5), 40.5, "result is correct");
    })
});

describe("test sum functionality", () => {
    it("test with invalid value", () => {
        assert.isUndefined(mathEnforcer.sum("pesho", "gosho"), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum("pesho", []), "return value must be indefined");
        assert.isUndefined(mathEnforcer.sum("pesho", 5), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum([], 10), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum("5", 10), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum(10, "Pesho"), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum(10, "10"), "return value must be undefined");
    });
    it("test valid value", () =>{
        assert.equal(mathEnforcer.sum(-10, 10), 0, "result is correct");
        assert.equal(mathEnforcer.sum(10, 0), 10, "result is correct");
        assert.equal(mathEnforcer.sum(0, 0), 0, "result is correct");
        assert.equal(mathEnforcer.sum(-10, -5), -15, "result is correct");
        assert.equal(mathEnforcer.sum(10, 5), 15, "result is correct");
        assert.equal(mathEnforcer.sum(10.5, 5), 15.5, "return is correct");
        assert.equal(mathEnforcer.sum(1, 5.5), 6.5, "return is correct");
        assert.equal(mathEnforcer.sum(1.5, 5.5), 7, "return is correct");
        assert.equal(mathEnforcer.sum(100.5, -50.5), 50, "result is correct");
        assert.equal(mathEnforcer.sum(0.5, -0.5), 0, "result is correct");
    })
})