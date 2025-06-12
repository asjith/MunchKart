const { Sum } = require("../../../Sample/sum");

test("to test addition of 2 numbers", () => {
  const result = Sum(3, 4);
  expect(result).toBe(7);
});
