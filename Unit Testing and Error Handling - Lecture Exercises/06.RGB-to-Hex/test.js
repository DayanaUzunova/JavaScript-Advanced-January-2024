import { expect } from "chai";
import { rgbToHexColor } from "../06.RGB-to-Hex/rgbToHex.js.js";
import { describe } from "mocha";

describe("Suit", function() {
    it("works", function() {
        expect(rgbToHexColor("100", 150, 200)).to.equal(undefined);
    })
    it("works", function() {
        expect(rgbToHexColor(500, 150, 200)).to.equal(undefined);
    })
    it("works", function() {
        expect(rgbToHexColor(123, -150, 200)).to.equal(undefined);
    })
    it("works", function() {
        expect(rgbToHexColor(123, -150, 200)).to.equal(undefined);
    })
    it("works", function() {
        expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
    })
    it("works", function() {
        expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF");
    })
    it("works", function() {
        expect(rgbToHexColor(138, 43, 226)).to.equal("#8A2BE2");
    })
    it("works", function() {
        expect(rgbToHexColor(-0, 0, 255)).to.equal("#0000FF");
    })
    it("works", function() {
        expect(rgbToHexColor(0, 0, 256)).to.equal(undefined);
    })
})