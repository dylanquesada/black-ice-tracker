import { apiProvider } from "./provider";

export class ApiCore {
  getAll: (() => Promise<any>) | null;
  getOne: ((id: number) => Promise<any>) | null;
  post: ((model: any) => Promise<any>) | null;
  put: ((model: any) => Promise<any>) | null;
  patch: ((model: any) => Promise<any>) | null;
  delete: ((id: number) => Promise<any>) | null;
  
  constructor(options: any) {
    this.getAll = options.getAll ? () => apiProvider.getAll(options.url) : null;

    this.getOne = options.getOne
      ? (id: number) => {
          return apiProvider.getOne(options.url, id);
        }
      : null;

    this.post = options.post
      ? (model) => {
          return apiProvider.post(options.url, model);
        }
      : null;
    this.put = options.put
      ? (model) => {
          return apiProvider.put(options.url, model);
        }
      : null;

    this.patch = options.patch
      ? (model) => {
          return apiProvider.patch(options.url, model);
        }
      : null;

    this.delete = options.delete
      ? (id: number) => {
          return apiProvider.remove(options.url, id);
        }
      : null;
  }
}
