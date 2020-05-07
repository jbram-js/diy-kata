const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  it("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(12345)).toEqual([5, 4, 3, 2, 1]);
    expect(numberToReversedDigits(1882)).toEqual([2, 8, 8, 1]);
    expect(numberToReversedDigits(987654321)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(numberToReversedDigits(47)).toEqual([7, 4]);
  });
});
