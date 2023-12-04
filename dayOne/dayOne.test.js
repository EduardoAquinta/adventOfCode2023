const collectCalibration = require("./dayOne.js")

describe("Unit tests for day one", () => {
    it("returns number 1 from the string 1", () => {
        let example = "1";
        expect(collectCalibration(example)).toBe(1)
    })
    it("returns number 2 from the string 2", () => {
        let example = "2";
        expect(collectCalibration(example)).toBe(2)
    })
    it("returns a number from a simple mixed string", () => {
        let example = "1A";
        expect(collectCalibration(example)).toBe(1);
    })
})