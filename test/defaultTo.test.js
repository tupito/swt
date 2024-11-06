import defaultTo from "../src/defaultTo.js";

describe("defaultTo.js", () => {
    let expect;

    before(async () => {
        // Dynamically import Chai
        const chai = await import('chai');
        expect = chai.expect;
    });

    it('should handle defined input (#TC04)', () => {
        expect(defaultTo(100, 0)).to.equal(100);
    });

    it('should handle undefined input (#TC05)', () => {
        expect(defaultTo(undefined, 0)).to.equal(0);
    });

    it('should handle null input (#TC06)', () => {
        expect(defaultTo(null, 0)).to.equal(0);
    });
});