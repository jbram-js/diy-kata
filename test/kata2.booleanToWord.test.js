const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("Returns Yes when passed true, returns No when passed false", () => {
    expect(booleanToWord(true)).toBe("Yes");
    expect(booleanToWord(false)).toBe("No");
    expect(booleanToWord(null)).toBe("No");
    expect(booleanToWord(undefined)).toBe("No");
    expect(booleanToWord("")).toBe("No");
    expect(booleanToWord(NaN)).toBe("No");
  });
});
