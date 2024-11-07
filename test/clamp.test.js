import clamp from "../src/clamp.js";

describe("clamp.js", () => {
    let expect;

    before(async () => {
        // Dynamically import Chai
        const chai = await import('chai');
        expect = chai.expect;
    });

    it('should handle too low value (#TC07)', () => {
        // This should be the correct way:
        expect(clamp(-1, 0, 100)).to.equal(0);
        // Due to the bug in the function, it should be called:
        //expect(clamp(0, 100, -1)).to.equal(0);
    });

    it('should handle correct value (#TC08)', () => {
        // This should be the correct way:
        expect(clamp(50, 0, 100)).to.equal(50);        
        // Due to the bug in the function, it should be called:        
        //expect(clamp(0, 100, 50)).to.equal(50);        
    });

    it('should handle too high value (#TC09)', () => {
        // This should be the correct way:
        expect(clamp(150, 0, 100)).to.equal(100);
        // Due to the bug in the function, it should be called:
        //expect(clamp(0, 100, 150)).to.equal(100);
    });
});