import { add } from "../../src/add";

describe("Testing add method", () => {
  test("add 1 and 2 = 3", () => {
    expect(add(1, 2)).toEqual(3);
  });

  test("add 1 and 2 to be less than 5", () => {
    expect(add(1, 2)).toBeLessThan(5);
  });

  test("add 1,2 to not to be 5", () => {
    expect(add(1, 2)).not.toEqual(5);
  });
});
