import * as addModule from "../src/add";
import { total, throwError } from "../src";

describe("testing total", () => {
  test("add function to add 2,3 and return 5", () => {
    expect(addModule.add(2, 3)).toEqual(5);
  });

  test("total to be sum of two numbers and return a string", () => {
    const spy = jest.spyOn(addModule, "add");
    spy.mockReturnValue(3);
    expect(total(2, 3)).toEqual("$3");
  });
});

describe("testing throw error", () => {
  test("throw error method throws error", () => {
    expect(throwError).toThrow(Error);
  });
});
