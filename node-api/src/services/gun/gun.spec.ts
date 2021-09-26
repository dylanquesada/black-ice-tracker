const getGuns = require("./gun.service");

describe("Get Guns", () => {
  beforeAll(() => {

  })
  test("should return a list of 40 guns", (done) => {
    const guns = getGuns().then((response: any) => {
      expect(response).toBeTruthy();
      expect(response).toHaveLength(40);
      expect(response[0]).toHaveProperty("id");
      expect(response[0]).toHaveProperty("name");
      done();
    });
  });
});

