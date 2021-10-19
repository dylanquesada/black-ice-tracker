const GunController = require("../../controllers/gun.controller");

describe("GunController", () => {
  it("should have getAll function", () => {
    expect(typeof GunController.getGuns).toBe("function");
  });
});
