import * as addModule from "../../src/add";
import { total, callbackTesting } from "../../src/mock";
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
  test("total to be sum of two numbers and return a string", () => {
    // we create mock for the add method
    const spy = jest.spyOn(addModule, "add");
    spy.mockReturnValue(3);
    expect(total(2, 3)).toEqual("$3");
  });
});

// see this is different from callbackTesting in async
describe("callback testing using mock method", () => {
  test("callback test with mock callback", () => {
    var someOperation = "pikachu";
    var mockCallback = jest.fn((x) => "raichu");
    callbackTesting(mockCallback, someOperation);
    expect(mockCallback.mock.calls.length).toBe(1);
    expect(mockCallback.mock.results[0].value).toBe("raichu");
    expect(mockCallback.mock.calls[0][0]).toBe("pikachu");
  });
});
