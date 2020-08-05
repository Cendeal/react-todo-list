import Axios from "axios";

const request = Axios.create({
    baseURL: 'https://5e9ec500fb467500166c4658.mockapi.io/',
    timeout: 1000
})
const http = (url, data, method) => request(url, {method: method, data: data}).then(res => {
    return res.data
})
export const GET = (url, data) => http(url, data, 'get')
export const POST = (url, data) => http(url, data, 'post')
export const PUT = (url, data) => http(url, data, 'put')
export const DELETE = (url, data) => http(url, data, 'delete')
export default {
    GET,
    POST,
    PUT,
    DELETE
}