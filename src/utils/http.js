import Axios from "axios";
import handleError from "./handleError";

const request = Axios.create({
    baseURL: 'http://localhost:8081/',
    timeout: 3000,
    validateStatus: function (status) {
        return status >= 200 && status < 300; // default
    },

});

request.interceptors.response.use(function (response) {
    return response.data;
}, async function (error) {
    handleError(error)
    return Promise.reject(error);
});
export const GET = (url, data) => request.get(url, data);
export const POST = (url, data) => request.post(url, data);
export const PUT = (url, data) => request.put(url, data);
export const DELETE = (url, data) => request.delete(url, data);
export const PATCH = (url, data) => request.patch(url, data);