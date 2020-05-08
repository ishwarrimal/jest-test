import * as addModule from "../src/add";
import { total, throwError } from "../src";

/* 
The below block of code might seem to be the correct way of testing a code,
But what we are doing there is more of an integration test rather than just unit test,
We are calling the actual implementation of add from total. This is unnecessary in unit test. 
This can actually be problematic on the later phase if the test fails because we won't come to know 
which method is the culprit
*/

// describe("This will be an integration testing", () => {
//   test("test funciton is making actual call to the add funciton", () => {
//     expect(total(1, 2)).toEqual("$3");
//   });
// });

// Start of unit test
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
