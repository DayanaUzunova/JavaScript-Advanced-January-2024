import { sum } from '../04.Sum-Of-Numbers/sumOfNumbers.js';
import { expect  } from 'chai';

describe('Suite', function () {
    it('works with number array', () => {
        const array = [1, 1, 1];

        expect(sum(array)).to.equal(3);
    });
    it('returns 0 for empty array', () => {
        expect(sum([])).to.equal(0);
    });
    it('returns 1 for empty array', () => {
        expect(sum([1])).to.equal(1);
    });
})