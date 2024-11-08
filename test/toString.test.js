import toString from "../src/toString.js";

describe("toString.js", () => {
    let expect;

    before(async () => {
        // Dynamically import Chai
        const chai = await import('chai');
        expect = chai.expect;
    });

    it('should stringify undefined input (#TC25)', () => {
        // The planned test:
        //expect(toString(undefined)).to.equal(''); // Returns undefined
        // What actually should be tested:
        expect(toString(undefined)).to.equal('undefined');
    });

    it('should stringify a negative number (#TC26)', () => {   
        expect(toString(-5)).to.equal('-5');        
    });

    it('should stringify an array (#TC27)', () => {
        expect(toString([1,2,3])).to.equal('1,2,3');
    });
});