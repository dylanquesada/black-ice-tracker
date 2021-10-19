import BaseService from "../base/base.service";
import { ModelStatic } from "../base/base.service";

class GunService extends BaseService {
  constructor(gun: ModelStatic) {
    super(gun);
    this.model = gun;
  }
}

module.exports = GunService;

export {};
