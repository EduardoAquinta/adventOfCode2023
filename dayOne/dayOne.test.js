const collectCalibration = require("./dayOne.js")
const findFirstNumber = require("./dayOne.js")
const findLastNumber = require("./dayOne.js")
const convertStringToNumber = require("./dayOne.js")
const fs = require("fs");


describe("Unit tests for coolectCalibration", () => {
    it("returns double digitnumber from a sinle digit input", () => {
        let example = "1";
        expect(collectCalibration(example)).toBe(11)
    })
    it("returns number 11 a simple mixed string", () => {
        let example = "1A";
        expect(collectCalibration(example)).toBe(11);
    })
    it("returns 13 from a simple string", () => {
        let example = "123";
        expect(collectCalibration(example)).toBe(13);

    })
    it("returns first and last number from a complex string", () => {
        let example = "hdtreh1jfuyg6hkjbr8hlkh3nkjbnf807";
        expect(collectCalibration(example)).toBe(17);
    })
    it("returns the first number from a complex string with only one number", () => {
        let example = "hdtrehjfuyghkjbrhlkhnkjbnf1";
        expect(collectCalibration(example)).toBe(11);
    })
    it("returns the first and last number from a simple string", () => {
        let example = "123";
        expect(collectCalibration(example)).toBe(13);
    })
    it("returns the first and last number of a longer string", () => {
        let example = "749365979398987424";
        expect(collectCalibration(example)).toBe(74);
    })
    it("returns the first and last number of a complex string", () => {
        let example = "heyhg3huhg99028hk320hkjbh20hkjb40";
        expect(collectCalibration(example)).toBe(30);
    })
    it("returns the sum of two simple strings", () => {
        let example = ["1", "2"];
        expect(collectCalibration(example)).toBe(33);

    })
    it("returns the sum of two more complex strings", () => {
        let example = ["123ffewfe34", "56fef7fef8"];
        expect(collectCalibration(example)).toBe(72);
    })
    it("returns the sum of three simple strings", () => {
        let example = ["123", "456", "789"];
        expect(collectCalibration(example)).toBe(138);
    })
    it("returns the sum of three complex strings", () => {
        let example = ["1iuhgdiuhdqdefrewsfg5343245fgewfewsdf3", "4iuhgf83h098uu3124089ouihb6", "78uygfc982b098ufnb209u42ojub09"];
        expect(collectCalibration(example)).toBe(138);
    })
    it("returns the sum of 10 simple strings", () => {
        let example = ["123", "456", "789", "123", "456", "789", "123", "456", "789", "123"]
        expect(collectCalibration(example)).toBe(427);
    })
    it("returns the correct answer to the 1st day of code", () => {
        let filepath = 'C:\\Users\\edwoo\\Code\\adventOfCode2023\\dayOne\\dayOneData.txt'
        let fileContent = fs.readFileSync(filepath, "utf-8");
        let array = fileContent.split("\n")
        expect(collectCalibration(array)).toBe(54968);
    })
})