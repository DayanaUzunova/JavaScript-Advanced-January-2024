import {assert} from "chai";
import {isOddOrEven} from "../02.Even-or-Odd/evenOrOdd.js";

describe("isOddOrEven", () => {
    it("test with non string value", () => {
        assert.equal(isOddOrEven({prop: "Pesho"}), undefined, "return type must be undefined");
        assert.equal(isOddOrEven(5), undefined, "return type must be undefined");
        assert.isNotOk(isOddOrEven([]), "return must be undefined")
    });
    it ("test with valid string value", ()=>{
        assert.equal(isOddOrEven("pesho"), "odd", "result is correct (odd)");
        assert.equal(isOddOrEven("Goshoo"), "even", "result is correct (even)");
        assert.deepEqual({ tea: 'green' }, { tea: 'green' });
    
    });
})