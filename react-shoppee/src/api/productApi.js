import { axiosInstance } from "./axiosInstance";

export const productApi = {
    getAll(params) {
        var url = "/products";
        return axiosInstance.get(url, { params });
    },
    get(id, params) {
        var url = `/products/${id}`;
        return axiosInstance.get(url, { params });
    },
};
