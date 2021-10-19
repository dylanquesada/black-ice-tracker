import { BuildOptions, DestroyOptions, FindOptions, Model, UpdateOptions } from "sequelize";

export type Service = {
  getAll: () => Promise<Model[]>,
  getWhere: (options: FindOptions) => Promise<Model[]>,
  create: (model: any) => Promise<Model>,
  update: (model: typeof Model, options: UpdateOptions) => Promise<[number, Model[]]>,
  delete: (options: DestroyOptions) => Promise<number>
}

export default class BaseService implements Service {
  model: ModelStatic;
  constructor(model: ModelStatic) {
    this.model = model;
  }

  async getAll(): Promise<Model[]> {
    const data = await this.model.findAll();
    return data;
  }

  async getWhere(options: FindOptions): Promise<Model[]> {
    const data = await this.model.findAll(options);
    return data;
  }

  async create(model: typeof Model): Promise<Model> {
    const data = await this.model.create(model);
    return data;
  }

  async update(model: typeof Model, options: UpdateOptions): Promise<[number, Model[]]> {
    const data = await this.model.update(model, options);
    return data;
  }

  async delete(options: DestroyOptions): Promise<number> {
    const data = await this.model.destroy(options);
    return data;
  }
}

export type ModelStatic = typeof Model &
  (new (values?: object, options?: BuildOptions) => Model);
