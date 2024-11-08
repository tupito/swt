import chunk from "../src/chunk.js";

describe("chunk.js", () => {
    let expect;

    before(async () => {
        // Dynamically import Chai
        const chai = await import('chai');
        expect = chai.expect;
    });

    // In these tests we have to use to.deep.equal, not to.equal, because
    // in JavaScript testing frameworks like Mocha and Chai, .equal checks
    // for reference equality, whereas .deep.equal checks for value equality.

    it('should chunk a valid array (#TC13)', () => {
        // Planned test:
        //expect(chunk([1,2,3,4], 2)).to.deep.equal([[1,2], [3,4]]);
        // Altered test to react to the buggy function:
        expect(chunk([1,2,3,4], 2)).to.deep.equal([[3,4], undefined]);
    });

    it('should chunk an empty array (#TC14)', () => {   
        expect(chunk([], 2)).to.deep.equal([]);
    });

    it('should chunk with a negative chunk size (#TC15)', () => {
        expect(chunk([1,2,3,4], -2)).to.deep.equal([]);
    });
});