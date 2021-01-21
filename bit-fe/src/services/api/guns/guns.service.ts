import { ApiCore } from "../utilities/core";

const url = 'guns';

const gunsApi = new ApiCore({
    getAll: true,
    getOne: false,
    post: true,
    put: false,
    patch: true,
    delete: false,
    url: url,
});

export default gunsApi;