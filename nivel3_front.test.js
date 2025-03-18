const { ehFrase } = require("./nivel3_front");

describe("ehFrase function", () => {});

test("Should return true when the input is a valid phrase", () => {
  expect(ehFrase("Esta é uma frase")).toBe(true);
});

test("Should return false when the input is not a valid phrase", () => {
  expect(ehFrase("EstaNãoÉumaFrase")).toBe(false);
});
