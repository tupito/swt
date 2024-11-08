import map from "../src/map.js";

describe("map.js", () => {
    let expect;

    before(async () => {
        // Dynamically import Chai
        const chai = await import('chai');
        expect = chai.expect;
    });

    // In these tests we have to use to.deep.equal, not to.equal, because
    // in JavaScript testing frameworks like Mocha and Chai, .equal checks
    // for reference equality, whereas .deep.equal checks for value equality.

    it('should apply a flat discount to items (#TC28)', () => {
        expect(map([100,50,75], price=>price-5)).to.deep.equal([95,45,70]);
    });

    it('should apply a percentage discount to items (#TC29)', () => {   
        expect(map([100,50,75], price=>price*0.8)).to.deep.equal([80,40,60]);        
    });

    it('should apply a discount to a null array (#TC30)', () => {
        expect(map(null, price=>price-5)).to.deep.equal([]);
    });
});