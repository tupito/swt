import { expect } from "chai";
import capitalize from "../src/capitalize.js";

describe("capitalize.js", () => {
    let expect;

    before(async () => {
        // Dynamically import Chai
        const chai = await import('chai');
        expect = chai.expect;
    });

    it('should capitalize a single word (#TC01)', () => {
        expect(capitalize('potato')).to.equal('Potato');
    });

    it('should handle an empty string (#TC02)', () => {
        expect(capitalize('')).to.equal('');
    });

    it('should handle special characters (#TC03)', () => {
        expect(capitalize('pötätö')).to.equal('Pötätö');
    });    

});