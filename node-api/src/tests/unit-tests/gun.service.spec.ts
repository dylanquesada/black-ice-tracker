const GunService = require("../../services/gun/gun.service");

const gunService = new GunService();

describe("GunService", () => {
  it("should have getAll function", () => {
    expect(typeof gunService.getAll).toBe("function");
  });
});
