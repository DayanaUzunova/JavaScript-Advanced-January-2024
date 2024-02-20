import {assert} from "chai";
import {findNewApartment} from "../03.Find-Apartment/findNewApartment.js";

describe("isGoodLocation", () => {
    it("test with invalid parameters", () => {
        assert.throws(() => findNewApartment.isGoodLocation(6, "Pesho"));
        assert.throws(() => findNewApartment.isGoodLocation("pesho", "Pesho"));
        assert.throws(() => findNewApartment.isGoodLocation(6, true));
    });

    it("test with invalid city", () => {
        assert.equal(findNewApartment.isGoodLocation("Shumen", true), "This location is not suitable for you.");
        assert.equal(findNewApartment.isGoodLocation("Shumen", false), "This location is not suitable for you.");
    });

    it("test with invalid value", () => {
        assert.equal(findNewApartment.isGoodLocation("Sofia", false), "There is no public transport in area.");
        assert.equal(findNewApartment.isGoodLocation("Plovdiv", false), "There is no public transport in area.");
        assert.equal(findNewApartment.isGoodLocation("Varna", false), "There is no public transport in area.");
    });
    it("test with correct value", () => {
        assert.equal(findNewApartment.isGoodLocation("Sofia", true), "You can go on home tour!");
        assert.equal(findNewApartment.isGoodLocation("Plovdiv", true), "You can go on home tour!");
        assert.equal(findNewApartment.isGoodLocation("Varna", true), "You can go on home tour!");
    });
});

describe("isLargeEnough", () => {
    it("test with invalid parameters", () => {
        assert.throws(() => findNewApartment.isLargeEnough("pesho", "pesho"));
        assert.throws(() => findNewApartment.isLargeEnough([], "pesho"));
        assert.throws(() => findNewApartment.isLargeEnough(["pesho", "gosho"], "pesho"));
        assert.throws(() => findNewApartment.isLargeEnough([], 6));
        assert.throws(() => findNewApartment.isLargeEnough("Gosho", 6));
        assert.throws(() => findNewApartment.isLargeEnough([30, 40, 50], "Pesho"));
        assert.throws(() => findNewApartment.isLargeEnough([30, 40, 60], "60"));
    });
    it ("with valid value", () => {
        let result = [10, 20, 30];
        assert.equal(findNewApartment.isLargeEnough([1,2,10,20,30], 9),result.join(", "));
        assert.equal(findNewApartment.isLargeEnough([1,2,10,20,30], 10),result.join(", "));
        assert.equal(findNewApartment.isLargeEnough([1,2,10,20,30], 50), "");
    });
})

describe("isItAffordable", () => {
    it("test with invalid value", () => {
        assert.throws(() => findNewApartment.isItAffordable("pesho", "pesho"));
        assert.throws(() => findNewApartment.isItAffordable(0, 0));
        assert.throws(() => findNewApartment.isItAffordable(-10, -10));

        assert.throws(() => findNewApartment.isItAffordable(10, "Pesho"));
        assert.throws(() => findNewApartment.isItAffordable(10, 0));
        assert.throws(() => findNewApartment.isItAffordable(10, -10));
        
        assert.throws(() => findNewApartment.isItAffordable("Pesho", -10));
        assert.throws(() => findNewApartment.isItAffordable(0, -10));
        assert.throws(() => findNewApartment.isItAffordable(-10, 10)); 
    });

    it("return value is 0", () => {
        assert.equal(findNewApartment.isItAffordable(10, 9), "You don't have enough money for this house!");
        assert.equal(findNewApartment.isItAffordable(10, 1), "You don't have enough money for this house!");
        assert.equal(findNewApartment.isItAffordable(2, 1), "You don't have enough money for this house!");
    });
    it("return value is positive", () => {
        assert.equal(findNewApartment.isItAffordable(10, 20), "You can afford this home!");
        assert.equal(findNewApartment.isItAffordable(10, 10), "You can afford this home!");
        assert.equal(findNewApartment.isItAffordable(1, 1), "You can afford this home!");
    });
})
