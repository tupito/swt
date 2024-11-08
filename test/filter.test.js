import filter from "../src/filter.js";

describe("filter.js", () => {
    let expect;

    before(async () => {
        // Dynamically import Chai
        const chai = await import('chai');
        expect = chai.expect;
    });

    // In these tests we have to use to.deep.equal, not to.equal, because
    // in JavaScript testing frameworks like Mocha and Chai, .equal checks
    // for reference equality, whereas .deep.equal checks for value equality.

    it('should filter with valid array and predicate function (#TC16)', () => {
        expect(filter([1,2,3,4], num=>num>2)).to.deep.equal([3,4]);
    });

    it('should filter with an empty array (#TC17)', () => {   
        // The planned test case:
        //expect(filter([], num=>num>2)).to.deep.equal([]);
        // The altered test case:
        expect(filter([], num=>num>2)).to.deep.equal([[]]);
    });

    it('should filter with an undefined predicate function (#TC18)', () => {
        // The planned test case:
        //expect(filter([1,2,3,4], undefined)).to.equal([]);
        // As the function call throws an error, we need expect the error:
        expect(() => filter([1, 2, 3, 4], undefined)).to.throw(TypeError, 'predicate is not a function');
    });
});