import {DELETE, GET, POST, PUT} from "../utils/http";
import todoStatus from "../constants/todoStatus";

export async function getTodoList() {
    const data = await GET('/todos')
    return data.map(({id, content, status}) => {
        return {
            id: id,
            text: content,
            status: status ? todoStatus.DONE : todoStatus.DOING
        }
    })
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