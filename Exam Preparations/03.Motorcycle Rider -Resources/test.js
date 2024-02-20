import { expect } from 'chai';
import { motorcycleRider } from '../03.Motorcycle Rider -Resources/Motorcycle Rider.js';

describe('Test suite', function () {

    describe('licenseRestriction functionality', () => {
        it('return correct output for AM', () => {
            expect(motorcycleRider.licenseRestriction('AM')).to.equal("Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.");
        });
        it('return correct output for A1', () => {
            expect(motorcycleRider.licenseRestriction('A1')).to.equal("Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.");
        });
        it('return correct output for A2', () => {
            expect(motorcycleRider.licenseRestriction('A2')).to.equal("Motorcycles with maximum power of 35KW. and the minimum age is 18.");
        });
        it('return correct output for A', () => {
            expect(motorcycleRider.licenseRestriction('A')).to.equal("No motorcycle restrictions, and the minimum age is 24.");
        });
        it('throw error for invalid input string', () => {
            expect(() => motorcycleRider.licenseRestriction('Z')).to.throw();
        });
        it('invalid input number', () => {
            expect(() => motorcycleRider.licenseRestriction(5)).to.throw();
        });
    });

    describe('motorcycleShowroom', () => {
        it('return 1 element from array', () => {
            expect(motorcycleRider.motorcycleShowroom(['50'], 50)).to.equal('There are 1 available motorcycles matching your criteria!');
        });
        it('returns all elements from array', () => {
            expect(motorcycleRider.motorcycleShowroom(['50', '51'], 100)).to.equal('There are 2 available motorcycles matching your criteria!');
        });
        it('returns only matching elements from array', () => {
            expect(motorcycleRider.motorcycleShowroom(['50', '51'], 50)).to.equal('There are 1 available motorcycles matching your criteria!');
        });
        it('throws for non-array', () => {
            expect(() => motorcycleRider.motorcycleShowroom('50', 50)).to.throw();
        });
        it('throws for non-number', () => {
            expect(() => motorcycleRider.motorcycleShowroom(['50'], '50')).to.throw();
        });
    });

    describe('otherSpendings functionallity', () => {
        it('returns correct sum without discount', () => {
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], false)).to.equal("You spend $600.00 for equipment and consumables!");
        });
        it('returns correct sum with discount', () => {
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], true)).to.equal("You spend $540.00 for equipment and consumables with 10% discount!");
        });
        it('throws for non-array consumables', () => {
            expect(() => motorcycleRider.otherSpendings(['helmet', 'jacked'], 'engine oil', false)).to.throw();
        });
        it('throws for non-boolean discount', () => {
            expect(() => motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], 0)).to.throw();
        });
    });
})