const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  it("return an array of 3 numbers when passed a number reperesenting a humans age. First number will be age in human years, second age in cat years, third age in dog years", () => {
    expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
    expect(humanCatDogYears(15)).toEqual([15, 76, 89]);
    expect(humanCatDogYears(7.5)).toEqual([7.5, 46, 51.5]);
    expect(humanCatDogYears(10538)).toEqual([10538, 42168, 52704]);
  });
});
