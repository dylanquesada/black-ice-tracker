import BaseService from "../../services/base/base.service";

// Import the mock library
const SequelizeMock = require("sequelize-mock");

// Setup the mock database connection
const DBConnectionMock = new SequelizeMock();

// Define our Model
const model = DBConnectionMock.define(
  "users",
  {
    email: "email@example.com",
    username: "blink",
    picture: "user-picture.jpg",
    id: "3a1b6e721e77-11ec-88bc-0242ac113102",
  },
  {
    instanceMethods: {
      findAll: function () {
        return "Test User";
      },
    },
  }
);

model.findAll = jest.fn();
model.create = jest.fn();
model.update = jest.fn();
model.delete = jest.fn();
const baseService = new BaseService(model);

describe("baseService.getAll", () => {
  it("should have getAll function", () => {
    expect(typeof baseService.getAll).toBe("function");
  });

  it("should call db.model.findAll", async () => {
    const fakeItem = model.create({
      email: "dylan@example.com",
      username: "dylan",
      picture: "dylan-picture.jpg",
      id: "3a1b6e700e77-11ec-88bc-0242ac113102",
    });
    const fakeArray = [fakeItem];
    model.findAll.mockReturnValue([fakeItem]);
    const response = await baseService.getAll();
    expect(model.findAll).toBeCalled();
    expect(response).toStrictEqual(fakeArray);
  });
});

// describe("baseService.getWhere", () => {
//   it("should have getWhere function", () => {
//     expect(typeof baseService.getWhere).toBe("function");
//   });

//   it("should call db.model.All", async () => {
//     const fakeArray = [model];
//     const options = {
//       where: {
//         id: 1,
//       },
//     }
//     model.findAll.mockReturnValue(fakeArray);
//     const response = await baseService.getWhere(options);
//     expect(model.findAll).toBeCalledWith(options);
//     expect(response).toBe(fakeArray);
//   });
// });

// describe("baseService.create", () => {
//   it("should have create function", () => {
//     expect(typeof baseService.create).toBe("function");
//   });

//   it("should call db.model.create", async () => {
//     const fakeItem = model;
//     model.create.mockReturnValue(fakeItem);
//     const response = await baseService.create(fakeItem);
//     expect(model.create).toBeCalledWith(fakeItem);
//     expect(response).toBe(fakeItem);
//   });
// });

// describe("baseService.update", () => {
//   it("should have an update function", () => {
//     expect(typeof baseService.update).toBe("function");
//   });
//   const fakeItem = model;
//   const options = {
//     where: {
//       id: 92,
//     },
//   };
//   it("should call db.model.update with model and options", async () => {
//     model.update.mockReturnValue([1, model]);
//     const response = await baseService.update(model, options);
//     expect(model.update).toBeCalledWith(model, options);
//     expect(response[0]).toBe(1);
//   });
// });

// describe("baseService.delete", () => {
//   it("should have an delete function", () => {
//     expect(typeof baseService.delete).toBe("function");
//   });
//   const fakeItem = model;
//   const options = {
//     where: {
//       id: 92,
//     },
//   };
//   it("should call db.model.delete with options", async () => {
//     model.delete.mockReturnValue(1);
//     const response = await baseService.delete(options);
//     expect(model.delete).toBeCalledWith(options);
//     expect(response).toBe(1);
//   });
// });

export {};
