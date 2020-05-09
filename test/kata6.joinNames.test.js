const { joinNames } = require("../src");

describe("joinNames", () => {
  it("returns string of names, seperated by commas and an ampersand", () => {
    expect(
      joinNames([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }])
    ).toBe("Bart, Lisa & Maggie");
  });
  expect(
    joinNames([{ name: "Joe" }, { name: "Josh" }, { name: "Jake" }, { name: "James" },
    { name: "Jason" }, { name: "John" }, { name: "Jamie" }, { name: "Jed" }])
  ).toBe("Joe, Josh, Jake, James, Jason, John, Jamie & Jed");
});
