import {DELETE, GET, POST, PUT} from "../utils/http";

export async function getTodoList() {
    return await GET('/todos')
}

export function addTodo(data) {
    return POST('/todos', data)
}

export function deleteTodo(id) {
    return DELETE(`/todos/${id}`)
}

export function updateTodoById(id, data) {
    return PUT(`/todos/${id}`, data)
}

export default {
    addTodo,
    deleteTodo,
    updateTodoById,
    getTodoList
}