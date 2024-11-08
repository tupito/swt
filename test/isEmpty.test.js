import isEmpty from "../src/isEmpty.js";

describe("isEmpty.js", () => {
    let expect;

    before(async () => {
        // Dynamically import Chai
        const chai = await import('chai');
        expect = chai.expect;
    });

    it('should check an empty array (#TC22)', () => {
        expect(isEmpty([])).to.equal(true);
    });

    it('should check a valid array (#TC23)', () => {   
        expect(isEmpty([1,2,3])).to.equal(false);        
    });

    it('should check an empty string (#TC24)', () => {
        expect(isEmpty('')).to.equal(true);
    });
});