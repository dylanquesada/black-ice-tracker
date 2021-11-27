import BaseService from "../base/base.service";
import { ModelStatic } from "../base/base.service";

class SkinService extends BaseService {
  constructor(skin: ModelStatic) {
    super(skin);
    this.model = skin;
  }
}

module.exports = SkinService;

export {};
