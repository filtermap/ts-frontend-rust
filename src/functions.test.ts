import * as functions from "./functions";

test("fibonacci(42)", (): void => {
  expect(functions.fibonacci(42)).toBe(267914296);
});
