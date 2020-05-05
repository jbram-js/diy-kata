const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  it("returns Fizz when passed a multiple of 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(18)).toBe("Fizz");
    expect(fizzBuzz(600003)).toBe("Fizz");
  });

  it("returns Buzz when passed a multiple of 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(25)).toBe("Buzz");
    expect(fizzBuzz(5005)).toBe("Buzz");
  });

  it("returns FizzBuzz when passed a multiple 3 and 5", () => {
    expect(fizzBuzz(30)).toBe("FizzBuzz");
    expect(fizzBuzz(75)).toBe("FizzBuzz");
    expect(fizzBuzz(3000)).toBe("FizzBuzz");
  });

  it("returns the number when it isn't a multiple of 3 or 5", () => {
    expect(fizzBuzz(2)).toBe(2);
    expect(fizzBuzz(47)).toBe(47);
    expect(fizzBuzz(17341)).toBe(17341);
  });
});
