import BaseService from "../base/base.service";
import { ModelStatic } from "../base/base.service";

class ProfileService extends BaseService {
  constructor(profile: ModelStatic) {
    super(profile);
    this.model = profile;
  }
}

module.exports = ProfileService;

export {};
