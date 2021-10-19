import BaseService from "../base/base.service";
import { ModelStatic } from "../base/base.service";

class UserService extends BaseService {
  constructor(user: ModelStatic) {
    super(user);
    this.model = user;
  }
}

module.exports = UserService;

export {};
