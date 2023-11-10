import { add, divide, multiply } from "../src/index";

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("divide 12 / 3 to equal 4", () => {
  expect(divide(12, 3)).toBe(4);
});

test("divide 3 / 0 to throw error", () => {
  expect(() => {
    divide(3, 0);
  }).toThrow("Cannot divide by zero");
});

test("multiply 3 * 2 to equal 6", () => {
  expect(multiply(3, 2)).toBe(6);
});
