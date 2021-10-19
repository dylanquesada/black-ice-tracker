const httpMocks = require("node-mocks-http");
const GunController = require("../../controllers/gun.controller");

let req, res, next;
beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = jest.fn();
});
describe("GunController.getGuns", () => {
  it("should have a getGuns function", () => {
    expect(typeof GunController.getGuns).toBe("function");
  });
//   it("should call service.getAll", () => {
//       GunController.getGuns()
//       expect()
//   })
});

export {};
