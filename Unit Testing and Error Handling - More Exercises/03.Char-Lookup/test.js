import{expect} from "chai";
import {lookupChar} from "../03.Char-Lookup/charLookup.js";

describe('test cases for lookupChar(str, index) function', function () {
    it('should return undefined on lookupChar(2, 2)', () => {
        expect(lookupChar(2, 2)).to.equal(undefined);
    });
 
    it('should return undefined on lookupChar("test", "2")', () => {
        expect(lookupChar("test", "2")).to.equal(undefined);
    });
 
    it('should return undefined on lookupChar("test", 1.23)', () => {
        expect(lookupChar("test", 1.23)).to.equal(undefined);
    });
 
    it('should return Incorrect index on lookupChar("test", 25)', () => {
        expect(lookupChar("test", 25)).to.equal('Incorrect index');
    });
 
    it('should return Incorrect index on lookupChar("hello", -4)', () => {
        expect(lookupChar("hello", -4)).to.equal('Incorrect index');
    });
 
    it('should return Incorrect index on lookupChar("hello", 5)', () => {
        expect(lookupChar("hello", 5)).to.equal('Incorrect index');
    });
 
    it('should return "o" on lookupChar("hello", 4)', () => {
        expect(lookupChar("hello", 0)).to.equal('h');
    });
 
    it('should return "l" on lookupChar("hello", 3)', () => {
        expect(lookupChar("hello", 3)).to.equal('l');
    });
});