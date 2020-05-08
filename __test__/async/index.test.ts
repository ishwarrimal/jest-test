import {
  callbackTesting,
  promiseTesting,
  promiseTestingReject,
} from "../../src/async";

/*
The code below might seem correct, but the problem here is that this is not waiting for the 
callbackTesting fo finish off its async operation before calling the callback
*/

// describe("Testing callback", () => {
//   test("the data to be pikachu", () => {
//     function callback(value: string) {
//       expect(value).toBe("pikachu");
//     }
//     callbackTesting(callback);
//   });
// });

// Testing callback
describe("Testing callback", () => {
  test("the data to be pikachu", (done) => {
    function callback(value: string) {
      try {
        expect(value).toBe("pikachu");
        done();
      } catch (error) {
        done(error);
      }
    }
    callbackTesting(callback);
  });
});

// Testing promise
describe("Testing promise", () => {
  test("a promise to be retunred which will resolve to charmander", () => {
    // here its necessary to use return for us to wait for the promise
    return promiseTesting().then((data: string) => {
      expect(data).toBe("charmander");
    });
  });

  test("a rejected promise will return reject", () => {
    expect.assertions(1);
    return promiseTestingReject().catch((e) => expect(e).toMatch("error"));
  });

  // same test using resolves and rejects matcher
  test("promise with resolves matcher", () => {
    return expect(promiseTesting()).resolves.toBe("charmander");
  });

  test("reject promise testign with rejects matcher", () => {
    return expect(promiseTestingReject()).rejects.toMatch("error");
  });
});

//Testing async await
// NOTE: We can test promise using async await
describe("testing async await", () => {
  test("to return squirtle after 1000ms await", async () => {
    const data = await promiseTesting();
    expect(data).toMatch("charmander");
  });
  test("to throw error for rejected promise", async () => {
    try {
      await expect(promiseTestingReject());
    } catch (e) {
      expect(e).toMatch("error");
    }
  });
});
