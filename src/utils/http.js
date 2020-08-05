import Axios from "axios";
import {store} from '../index'
import {getTodoList} from "../api/todoApi";
import {updateTodoList} from "../actions";

const request = Axios.create({
    baseURL: 'https://5e9ec500fb467500166c4658.mockapi.io/',
    timeout: 1000,
    validateStatus: function (status) {
        return status >= 200 && status < 300; // default
    },

})

request.interceptors.response.use(function (response) {
    return response.data;
}, async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log(Object.keys(error), error.config)
    if (error.config.method.toUpperCase() !== 'GET') {
        const data = await getTodoList()
        store.dispatch(updateTodoList(data))
    }
    return Promise.reject(error);
});
export const GET = (url, data) => request.get(url, {data})
export const POST = (url, data) => request.post(url, {data})
export const PUT = (url, data) => request.put(url, {data})
export const DELETE = (url, data) => request.delete(url, {data})
export default {
    GET,
    POST,
    PUT,
    DELETE
}