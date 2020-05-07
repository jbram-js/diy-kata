const { reachDestination } = require("../src");

describe("reachDestination", () => {
  it("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toBe("I should be there in 4.5 hours.");
    expect(reachDestination(12345, 100)).toBe("I should be there in 123.5 hours.");
    expect(reachDestination(123.33, 10.5)).toBe("I should be there in 11.5 hours.");
  });
});
