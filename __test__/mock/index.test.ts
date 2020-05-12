import axios from "axios";
import MockAdapter from "axios-mock-adapter";
var mock = new MockAdapter(axios);
import Users from "../../src/mock";

describe("testing mock axios", () => {
  test("first test", () => {
    mock.onGet("/users/json").reply(200, {
      users: [{ id: 1, name: "John Smith" }],
    });

    return Users.all().then((data) =>
      expect(data).toEqual({ users: [{ id: 1, name: "John Smith" }] })
    );
  });
});
