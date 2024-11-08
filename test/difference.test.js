import difference from "../src/difference.js";

describe("difference.js", () => {
    let expect;

    before(async () => {
        // Dynamically import Chai
        const chai = await import('chai');
        expect = chai.expect;
    });

    // In these tests we have to use to.deep.equal, not to.equal, because
    // in JavaScript testing frameworks like Mocha and Chai, .equal checks
    // for reference equality, whereas .deep.equal checks for value equality.

    it('should ifference between two different arrays (#TC19)', () => {
        expect(difference([1,2,3], [2,4])).to.deep.equal([1,3]);
    });

    it('should difference between two same arrays (#TC20)', () => {   
        expect(difference([1,2,3], [1,2,3])).to.deep.equal([]);
    });

    it('should difference with an empty array (#TC21)', () => {
        expect(difference([1,2,3], [])).to.deep.equal([1,2,3]);
    });
});