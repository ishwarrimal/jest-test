// require("jest-fetch-mock").enableMocks();
import { APIRequest, Users } from "../../src/mock";

describe("testing first API", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  test("check the method from Users", () => {
    fetch.mockResponseOnce(JSON.stringify({ data: "12345" }));
    Users.all().then((res: any) => {
      expect(res.data).toEqual("12345");
    });
  });
});

describe("testing second api", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test("calls google and returns data to me", () => {
    fetch.mockResponseOnce(JSON.stringify({ data: "12345" }));

    //assert on the response
    APIRequest("google").then((res: any) => {
      expect(res.data).toEqual("12345");
    });

    expect(APIRequest()).toBe("no argument provided");

    //assert on the times called and arguments given to fetch
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual("https://google.com");
  });
});
