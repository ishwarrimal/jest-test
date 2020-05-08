import { throwError } from "../src";

describe("testing throw error", () => {
  test("throw error method throws error", () => {
    expect(throwError).toThrow(Error);
  });
});
