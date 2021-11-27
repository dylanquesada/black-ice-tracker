const SkinController = require("../../controllers/skin.controller");

describe("SkinController", () => {
  it("should have getSkinsByUser function", () => {
    expect(typeof SkinController.getSkinsByUser).toBe("function");
  });
  // Look for exported test sets? to see if 
});
