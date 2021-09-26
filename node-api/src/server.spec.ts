const request = require("supertest");
const testApp = require("./app");

describe("Test the root path", () => {
  test("It should response the GET method", (done) => {
    request(testApp).get("/").expect(200).end(done);
  });
});

