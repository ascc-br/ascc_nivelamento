const { ledsNecessarios, indicesLetras, letrasEQuantidades } = require("./nivel3_back");

test('Should return 5 when the input is "2"', () => {
  expect(ledsNecessarios("2")).toBe(5);
});

test('Should return 27 when the input is "115380"', () => {
  expect(ledsNecessarios("115380")).toBe(27);
});

test("Should return 5 when the input is 2", () => {
  expect(ledsNecessarios(2)).toBe(5);
});

test("Should return 27 when the input is 115380", () => {
  expect(ledsNecessarios(115380)).toBe(27);
});

test("Should return 6 when the input is -2", () => {
  expect(ledsNecessarios(-2)).toBe(6);
});

test("Should return 28 when the input is -115380", () => {
  expect(ledsNecessarios(-115380)).toBe(28);
});

test('Should return 6 when the input is "-2"', () => {
  expect(ledsNecessarios("-2")).toBe(6);
});

test('Should return 28 when the input is "-115380"', () => {
  expect(ledsNecessarios("-115380")).toBe(28);
});

test('Should return 0 when the input is "abc"', () => {
  expect(ledsNecessarios("abc")).toBe(0);
});

test('Should return 0 when the input is "123abc"', () => {
  expect(ledsNecessarios("123abc")).toBe(0);
});

test('Should return 0 when the input is "0abc123"', () => {
  expect(ledsNecessarios("0abc123")).toBe(0);
});

test('Should return 0 when the input is "-0abc123"', () => {
  expect(ledsNecessarios("-0abc123")).toBe(0);
});

test('Should return 0 when the input is "---"', () => {
  expect(ledsNecessarios("---")).toBe(0);
});

test('Should return 0 when the input is "-Zabc123"', () => {
  expect(ledsNecessarios("-Zabc123")).toBe(0);
});

console.log("================================================");

test("Should return an empty object when the input is an empty string", () => {
  const input = "";
  const expectedOutput = {};

  const result = letrasEQuantidades(input);

  expect(result).toEqual(expectedOutput);
});

test("Should correctly count the occurrences of each letter in a single letter input", () => {
  const input = "a";
  const expectedOutput = { a: 1 };

  const result = letrasEQuantidades(input);

  expect(result).toEqual(expectedOutput);
});

test("Should handle uppercase and lowercase letters as the same", () => {
  const input = "aAbbBcCC";
  const expectedOutput = { a: 2, b: 3, c: 3 };

  const result = letrasEQuantidades(input);

  expect(result).toEqual(expectedOutput);
});

test("Should ignore non-alphabetic characters in the input", () => {
  const input = "a1b2c3!@#$%^&*()";
  const expectedOutput = { a: 1, b: 1, c: 1 };

  const result = letrasEQuantidades(input);

  expect(result).toEqual(expectedOutput);
});

test("Should correctly count the occurrences of each letter in a string with mixed case and special characters", () => {
  const input = "Hello, World! 123";
  const expectedOutput = { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 };

  const result = letrasEQuantidades(input);

  expect(result).toEqual(expectedOutput);
});
