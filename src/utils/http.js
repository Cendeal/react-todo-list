import Axios from "axios";
import {store} from '../index'
import {getTodoList} from "../api/todoApi";
import {updateTodoList} from "../actions";

const request = Axios.create({
    baseURL: 'https://5f2a43316ae5cc001642229d.mockapi.io/api/v1/',
    timeout: 1000,
    validateStatus: function (status) {
        return status >= 200 && status < 300; // default
    },

})

request.interceptors.response.use(function (response) {
    return response.data;
}, async function (error) {
    console.log(Object.keys(error), error.config)
    if (error.config.method.toUpperCase() !== 'GET') {
        const data = await getTodoList()
        store.dispatch(updateTodoList(data))
    }
    return Promise.reject(error);
});
export const GET = (url, data) => request.get(url, data)
export const POST = (url, data) => request.post(url, data)
export const PUT = (url, data) => request.put(url, data)
export const DELETE = (url, data) => request.delete(url, data)
export default {
    GET,
    POST,
    PUT,
    DELETE
}