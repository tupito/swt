import add from "../src/add.js";

describe("add.js", () => {
    let expect;

    before(async () => {
        // Dynamically import Chai
        const chai = await import('chai');
        expect = chai.expect;
    });

    it('should add two positive numbers (#TC10)', () => {
        expect(add(5, 10)).to.equal(15);
    });

    it('should add positive and negative number (#TC11)', () => {   
        expect(add(-5, 10)).to.equal(5);        
    });

    it('should add zero to a positive number (#TC12)', () => {
        expect(add(5, 0)).to.equal(5);
    });
});